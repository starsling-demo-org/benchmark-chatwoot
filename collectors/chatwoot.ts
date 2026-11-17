/**
 * Evidence extractor for chatwoot/chatwoot CI (publish_ee_docker.yml, publish_foss_docker.yml, run_foss_spec.yml,
 * frontend-fe.yml and, on the PR lane, test_docker_build.yml).
 *
 * "Same checks, same results" units, all read from the replay's job logs:
 * - `rspec:backend`: the 16 backend shards summed (`N examples, F failures, P pending`), so the unit does not depend on
 *   which shard ran which file or on log order. `count:rspec:backend:examples=N` carries the total, so a changed total
 *   shows up as a missing unit rather than a silent pass.
 * - `vitest:<workflow>` with `Test Files` / `Tests` totals and the v8 coverage totals line (`All files`).
 * - `lint:rubocop`, `lint:eslint:<workflow>`, `scan:brakeman`, `scan:bundle-audit`.
 * - `image:<edition>:<platform>`: the Docker build for each platform, from BuildKit's plain progress: every Dockerfile
 *   vertex finished (`DONE` or `CACHED`, so cache levers do not change the verdict) and the image export completed.
 *   Image pushes are not required (the benchmark builds with push=false).
 * - `merge:<edition>`: the manifest-list job; `merge-manifest-push:<edition>` is `skipped` (excluded) when the planned
 *   adaptation disabled the Docker Hub steps (`if: false`), executed otherwise.
 */
import type { EvidenceExtractor, EvidenceJob } from '../src/evidence-collect.ts'
import type { TestCaseVerdictRecord } from '../src/parity.ts'

type Verdict = TestCaseVerdictRecord['verdict']

const ADAPTATION_REASON = 'excluded: planned adaptation no-registry-login-merge / no-manifest-push-merge (Docker Hub steps disabled)'

export interface RspecTotals {
  examples: number
  failures: number
  pending: number
}

/** Sum every `N examples, F failures[, P pending]` summary in a log (one per rspec process). */
export function rspecTotals(log: string): RspecTotals | undefined {
  let found = false
  const total: RspecTotals = { examples: 0, failures: 0, pending: 0 }
  for (const m of log.matchAll(/^(\d+) examples?, (\d+) failures?(?:, (\d+) pending)?\s*$/gm)) {
    found = true
    total.examples += Number(m[1])
    total.failures += Number(m[2])
    total.pending += Number(m[3] ?? 0)
  }
  return found ? total : undefined
}

export interface VitestTotals {
  files: number
  filesFailed: number
  tests: number
  testsFailed: number
  testsSkipped: number
  coverage?: string
}

const countOf = (line: string, word: string): number => Number(new RegExp(`(\\d+) ${word}`).exec(line)?.[1] ?? 0)

export function vitestTotals(log: string): VitestTotals | undefined {
  const files = /^\s*Test Files\s+(.*)$/m.exec(log)?.[1]
  const tests = /^\s*Tests\s+(.*)$/m.exec(log)?.[1]
  if (!files || !tests) return undefined
  const cov = /^All files\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)/m.exec(log)
  return {
    files: countOf(files, 'passed') + countOf(files, 'failed') + countOf(files, 'skipped'),
    filesFailed: countOf(files, 'failed'),
    tests: countOf(tests, 'passed') + countOf(tests, 'failed') + countOf(tests, 'skipped'),
    testsFailed: countOf(tests, 'failed'),
    testsSkipped: countOf(tests, 'skipped'),
    coverage: cov ? `stmts=${cov[1]},branch=${cov[2]},funcs=${cov[3]},lines=${cov[4]}` : undefined,
  }
}

export interface DockerBuild {
  vertices: number
  completed: number
  errors: number
  exported: boolean
}

/** BuildKit plain progress: `#N [stage k/n] CMD`, then `#N DONE|CACHED|ERROR`; `#N exporting to image`. */
export function dockerBuild(log: string): DockerBuild {
  const stages = new Set<string>()
  const done = new Set<string>()
  const errors = new Set<string>()
  let exportId: string | undefined
  for (const line of log.split('\n')) {
    const head = /^#(\d+) (\[[^\]]+\]|exporting to image)/.exec(line)
    if (head) {
      const [, id = '', what = ''] = head
      if (what === 'exporting to image') exportId = id
      else if (!/^\[(internal|auth)\]/.test(what)) stages.add(id)
      continue
    }
    const end = /^#(\d+) (DONE|CACHED|ERROR)\b/.exec(line)
    if (!end) continue
    if (end[2] === 'ERROR') errors.add(end[1] ?? '')
    else done.add(end[1] ?? '')
  }
  return {
    vertices: stages.size,
    completed: [...stages].filter((id) => done.has(id)).length,
    errors: errors.size,
    exported: exportId !== undefined && done.has(exportId),
  }
}

/** ESLint's `✖ N problems (E errors, W warnings)` line; no line at all means a clean run. */
const eslintErrors = (log: string): number => Number(/✖ \d+ problems? \((\d+) errors?/.exec(log)?.[1] ?? 0)

const stepOutcome =(job: EvidenceJob, pattern: RegExp) => job.steps.find((s) => pattern.test(s.name))?.conclusion

const editionOf = (path: string): string | undefined =>
  path.endsWith('publish_ee_docker.yml')
    ? 'ee'
    : path.endsWith('publish_foss_docker.yml')
      ? 'ce'
      : path.endsWith('test_docker_build.yml')
        ? 'test-build'
        : undefined

const platformOf = (job: EvidenceJob): string =>
  /linux\/(amd64|arm64)/.exec(job.jobName)?.[0] ?? /^\s*platform=(linux\/\w+)/m.exec(job.log)?.[1] ?? 'unknown'

const extract: EvidenceExtractor = ({ jobs }) => {
  const verdicts = new Map<string, Verdict>()
  const modes = new Map<string, TestCaseVerdictRecord['mode']>()
  const commands = new Set<string>()
  const set = (id: string, verdict: Verdict, mode: TestCaseVerdictRecord['mode'] = 'executed') => {
    // A unit seen in several jobs fails if any occurrence failed.
    verdicts.set(id, verdicts.get(id) === 'failed' ? 'failed' : verdict)
    modes.set(id, mode)
  }
  const ok = (job: EvidenceJob) => job.conclusion === 'success'

  const shards = jobs.filter((j) => j.workflowPath.endsWith('run_foss_spec.yml') && j.jobName.startsWith('backend-tests'))
  if (shards.length) {
    const sum: RspecTotals = { examples: 0, failures: 0, pending: 0 }
    let allSummarised = true
    for (const shard of shards) {
      const t = rspecTotals(shard.log)
      if (!t) allSummarised = false
      else {
        sum.examples += t.examples
        sum.failures += t.failures
        sum.pending += t.pending
      }
    }
    const passed = allSummarised && sum.failures === 0 && shards.every(ok)
    set('rspec:backend', passed ? 'passed' : 'failed')
    set(`count:rspec:backend:examples=${sum.examples}`, passed ? 'passed' : 'failed')
    set(`count:rspec:backend:pending=${sum.pending}`, 'passed')
    set(`count:rspec:backend:shards=${shards.length}`, 'passed')
    commands.add(`rspec backend: ${sum.examples} examples, ${sum.failures} failures, ${sum.pending} pending over ${shards.length} shards`)
  }

  for (const job of jobs) {
    const path = job.workflowPath
    if (path.endsWith('run_foss_spec.yml')) {
      if (job.jobName === 'frontend-tests') vitest(job, 'run_foss_spec')
      else if (job.jobName === 'lint-backend') {
        const m = /(\d+) files inspected, (no offenses detected|\d+ offenses? detected)/.exec(job.log)
        set('lint:rubocop', ok(job) && m?.[2] === 'no offenses detected' ? 'passed' : 'failed')
        if (m) set(`count:rubocop:files=${m[1]}`, 'passed')
      } else if (job.jobName === 'lint-frontend') {
        set('lint:eslint:run_foss_spec', ok(job) && eslintErrors(job.log) === 0 ? 'passed' : 'failed')
      } else if (job.jobName === 'security-scan') {
        const warnings = /Security Warnings: (\d+)/.exec(job.log)?.[1]
        set('scan:brakeman', ok(job) && warnings !== undefined ? 'passed' : 'failed')
        if (warnings !== undefined) set(`count:brakeman:warnings=${warnings}`, 'passed')
        set('scan:bundle-audit', ok(job) && /No vulnerabilities found/.test(job.log) ? 'passed' : 'failed')
      }
    } else if (path.endsWith('frontend-fe.yml') && job.jobName === 'test') {
      set('lint:eslint:frontend-fe', ok(job) && eslintErrors(job.log) === 0 ? 'passed' : 'failed')
      vitest(job, 'frontend-fe')
    } else if (editionOf(path)) {
      const edition = editionOf(path) as string
      if (/^(build|test-build)\b/.test(job.jobName)) {
        const platform = platformOf(job)
        const b = dockerBuild(job.log)
        const good = ok(job) && b.vertices > 0 && b.completed === b.vertices && b.errors === 0 && b.exported
        set(`image:${edition}:${platform}`, good ? 'passed' : 'failed')
        set(`count:image-steps:${edition}:${platform}=${b.vertices}`, 'passed')
      } else if (job.jobName === 'merge') {
        set(`merge:${edition}`, ok(job) ? 'passed' : 'failed')
        const push = stepOutcome(job, /Create manifest list and push/)
        if (push === 'skipped') {
          set(`merge-manifest-push:${edition}`, 'skipped', 'skipped')
          commands.add(`${edition}: ${ADAPTATION_REASON}`)
        } else set(`merge-manifest-push:${edition}`, push === 'success' ? 'passed' : 'failed')
      }
    }
  }

  function vitest(job: EvidenceJob, name: string) {
    const t = vitestTotals(job.log)
    const good = ok(job) && !!t && t.filesFailed === 0 && t.testsFailed === 0
    set(`vitest:${name}`, good ? 'passed' : 'failed')
    if (t) {
      set(`count:vitest:${name}:files=${t.files},tests=${t.tests},skipped=${t.testsSkipped}`, 'passed')
      if (t.coverage) set(`coverage:vitest:${name}:${t.coverage}`, 'passed')
      commands.add(`vitest ${name}: ${t.tests} tests in ${t.files} files`)
    }
  }

  const tests: TestCaseVerdictRecord[] = [...verdicts]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([testId, verdict]) => ({ testId, verdict, mode: modes.get(testId) ?? 'executed' }))
  const gated = tests.filter((t) => t.verdict !== 'skipped')
  const obligations = new Set<string>()
  const passedIds = new Set(tests.filter((t) => t.verdict === 'passed').map((t) => t.testId))
  if (passedIds.has('rspec:backend')) obligations.add('backend-tests')
  if ([...passedIds].some((id) => id.startsWith('vitest:'))) obligations.add('frontend-tests')
  if (passedIds.has('lint:rubocop')) obligations.add('lint-backend')
  if ([...passedIds].some((id) => id.startsWith('lint:eslint:'))) obligations.add('lint-frontend')
  if ([...passedIds].some((id) => id.startsWith('image:'))) obligations.add('docker-image-build')
  return {
    tests,
    coverage: {
      scope: gated.filter((t) => !t.testId.startsWith('count:')).map((t) => t.testId),
      covered: gated.filter((t) => t.verdict === 'passed' && !t.testId.startsWith('count:')).map((t) => t.testId),
    },
    obligations: [...obligations].sort(),
    commands: [...commands].sort(),
  }
}

export default extract
