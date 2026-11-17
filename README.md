# chatwoot CI: GitHub-hosted runners vs StarSling Runners (with agents)

_Not affiliated with [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) (40.0k stars)._

chatwoot's own CI workflows, replayed for a real upstream merge to its default branch on GitHub-hosted runners and on StarSling Runners (with agents). Every number comes from this repository's replays; upstream's own runs are linked for comparison.

StarSling Runners (with agents) = StarSling runners + StarSling agent PRs.

## Results

**Warm cache:** every sample starts from caches a seed run produced on the same runner configuration; seed time is not counted.

| Runner configuration | Merge CI duration<br><sub>Merge to the default branch</sub> | Runner time<br><sub>Merge to the default branch</sub> |
|---|---:|---:|
| **GitHub-hosted runners** | 1391 s (23.18 min) | 127.95 min |
| **StarSling Runners (with agents)** | 354 s (5.90 min)<br>**3.9× faster** | 58.38 min<br>**2.2× less** |

**Cold cache:** every sample starts with no GitHub Actions caches.

| Runner configuration | Merge CI duration<br><sub>Merge to the default branch</sub> | Runner time<br><sub>Merge to the default branch</sub> |
|---|---:|---:|
| **GitHub-hosted runners** | 1153 s (19.22 min) | 158.72 min |
| **StarSling Runners (with agents)** | 1252 s (20.87 min)<br>**0.92×: 99 s slower** | 111.57 min<br>**1.4× less** |

- On StarSling Runners (with agents), every check for a merge to the default branch finished in **354 s** instead of 1391 s warm (**3.9× faster**), using 58.38 min instead of 127.95 min of runner time (**2.2× less**). Cold: **1252 s** instead of 1153 s, about 8% slower (**0.92×**), while still using 1.4× less runner time (111.57 min instead of 158.72 min).
- **Why warm and cold differ:** the agent PR adds a shared Docker layer cache, and on a cold run that cache has to be filled first, so a cold run pays that cost and only later merges get the saving.
- **PR updates:** not measured. At the replayed commit upstream also runs CI on pull requests (`run_foss_spec.yml`, `frontend-fe.yml`, `test_docker_build.yml` and others), but no upstream pull request was pinned for replay, so only the merge to the default branch was measured.
- **Context, not the headline** (upstream's own runs; not like-for-like with the numbers above): What upstream sees today: a median 21.2 min per merge to the default branch on upstream's own GitHub runners (n=10, most recent comparable merges to the default branch within the last 60 days; standard and arm runners, warm caches, many commits; not a like-for-like replay).

<sub>Medians over complete rounds.</sub>

## Runners

| Runners | Label | vCPU | Memory |
|---|---|---:|---:|
| GitHub-hosted (amd64 image builds, `merge` jobs) | `ubuntu-26.04-4core` | 4 | 16 GiB |
| GitHub-hosted (spec, lint and scan jobs) | `ubuntu-24.04-4core` | 4 | 16 GiB |
| GitHub-hosted (`frontend-fe.yml` test) | `ubuntu-22.04-4core` | 4 | 16 GiB |
| StarSling (amd64 image builds, `merge` jobs) | `starsling-ubuntu-26.04` | 4 | 16 GiB |
| StarSling (spec, lint and scan jobs; `frontend-fe.yml` test) | `starsling-ubuntu-24.04` | 4 | 16 GiB |
| GitHub-hosted, in both configurations (arm64 image builds) | `ubuntu-22.04-arm-4core` | 4 | 16 GiB |

Runner time compared at these machine sizes: GitHub 4 vCPU vs StarSling 4 vCPU. StarSling's 4 vCPU runners can burst to 5 vCPU and 32 GB RAM (Afterburner); GitHub's 4-core runners have 16 GB.

StarSling has no ARM runner, so the two linux/arm64 image builds run on GitHub's ARM runner in both configurations; their time counts in both columns.

GitHub-hosted jobs run on the explicit GitHub larger-runner label shown, pinned to the size of upstream's public-repository runner, so the comparison does not change with this repository's visibility.

## Claim checklist

- [x] **Same CI as upstream:** replays run the same workflows and jobs as upstream's own runs, with the same conclusions, except `security-scan` (see below); the Docker Hub login and image push are switched off in every configuration
- [x] **Same checks, same results:** every sample's checks were read from its own job logs; the same 27 checks ran in every counted sample, and all passed in every configuration except `security-scan`, which failed in every sample alike
- [x] **Cache state verified** for every sample
- [x] **Both runner configurations measured** (2 of 2), warm and cold
- [x] **All requested samples finished** (20 of 20; 3 were replaced and re-run, see Method)
- [x] **At least 5 rounds** (5 requested, warm and cold)
- [x] **No interference:** no other workflow run overlapped a sample
- [ ] **Cost neutral:** not ticked. The agent PR adds no jobs (27 in every configuration), but this benchmark's own cost-neutral check did not pass, and on a cold run the agent PR spends extra runner time filling its cache.

### Same CI as upstream

- **Merge to the default branch:** same workflows and jobs as upstream's own runs for the same commit ([#42782431386](https://github.com/chatwoot/chatwoot/actions/runs/42782431386), [#42782431264](https://github.com/chatwoot/chatwoot/actions/runs/42782431264), [#42782431482](https://github.com/chatwoot/chatwoot/actions/runs/42782431482), [#42782431237](https://github.com/chatwoot/chatwoot/actions/runs/42782431237)), same conclusions except one. The merge starts four workflows: `publish_ee_docker.yml` and `publish_foss_docker.yml` (an image build for linux/amd64 and for linux/arm64, then a `merge` job each), `run_foss_spec.yml` (backend lint, frontend lint, security scan, frontend tests and 16 backend test shards) and `frontend-fe.yml`: 27 jobs. The exception: `security-scan` passed upstream on its own run date, but here its `bundle-audit` step fails in every sample, in both configurations, because the live advisory database now lists advisories published after the pinned commit; its result does not gate a sample (see Method). The only step differences, identical in every configuration, are the Docker Hub login, the image push, the manifest push and the image inspection, which do not run here because nothing is published.

### Same checks, same results

Every counted sample's results were read from its own job logs. In all 20 counted samples (5 per configuration, warm, and 5 per configuration, cold) the same 27 checks ran with the same results: the 16 backend test shards ran the same 7776 RSpec examples (146 pending) and passed; both frontend test jobs ran the same 5505 Vitest tests in 543 files, with the same coverage; RuboCop checked the same 3496 files and passed, and both ESLint runs passed; the four image builds (enterprise and community, each for linux/amd64 and linux/arm64) completed all 28 of their build steps each, a cached step counting as complete; and both `merge` jobs passed. The images are built but not published, and they were not compared byte for byte. `security-scan` (Brakeman, which reported the same 40 warnings in every sample, then bundle-audit) ran in every sample and failed in every sample, in both configurations alike, on its bundle-audit step (see Same CI as upstream).

## Terms

| Term | Meaning |
|---|---|
| **PR CI duration** | Elapsed time from the first workflow starting to the last job finishing, across every workflow one PR update starts (including `workflow_run` follow-ups). |
| **Merge CI duration** | The same, for every workflow one merge to the default branch starts. |
| **Runner time** | Total machine time all jobs used for one event, summed across jobs; billed per second. Jobs kept on GitHub-hosted runners still count. |
| **StarSling Runners (with agents)** | StarSling runners plus StarSling agent PRs: the project's CI with StarSling's agent PRs applied, running on StarSling runners. "StarSling" on this page always means this one configuration. |
| **Round** | One replay of the event on every runner configuration. Medians use only complete rounds. |
| **Cold / warm cache** | Cold starts with no GitHub Actions caches; warm starts from caches a seed run produced on the same runner configuration. |
| **Cost neutral** | The agent PRs save runner time without adding parallel jobs that spend it again. |

## Appendix

<details>
<summary>Agent PRs</summary>

Merged in this order. Each fix's own measurement, on the CI step it changes, is under What we changed.

| # | Agent PR | What it changed |
|---:|---|---|
| 1 | [pull/1](https://github.com/starsling-demo-org/benchmark-chatwoot/pull/1) | Two changes to the Docker workflows, measured together. (1) A shared Docker layer cache: the enterprise image build writes its layers to the GitHub Actions cache, one scope per CPU type, and the community image build reads them, so a merge that does not change the Gemfile, the lockfiles or the Dockerfile reuses the dependency layers. Only the enterprise build writes, to stay inside the 10 GB Actions cache budget. (2) The pull-request image build (`test_docker_build.yml`) keeps reading that cache but no longer writes it. That workflow runs on pull requests only, so this second change does not run on the merge measured here. Three files, 7 lines added and 1 removed. |

</details>

<details>
<summary>What was slow</summary>

Every merge to chatwoot's default branch starts four workflows at once (27 jobs). The image builds set the wait: upstream's two publish workflows have no layer cache, so every merge reinstalls all Ruby gems and JavaScript packages and recompiles the assets, for both images and both CPU types.

- **Warm.** On GitHub-hosted runners an amd64 image build was the longest job in every sample (median 1091 s enterprise, 1089 s community) of the 1391 s merge; with no layer cache in upstream's CI, a warm run does the same work as a cold one. On StarSling Runners (with agents) all four image builds restored the shared layer cache in every sample, and the builds took a median 321 s (enterprise amd64), 244 s (enterprise arm64), 171 s (community amd64) and 204 s (community arm64); the enterprise amd64 build sets the 354 s wait. The tests are not on the critical path: the slowest backend shard took a median 250 s on GitHub-hosted runners and 181 s on StarSling Runners (with agents), and the `frontend-fe.yml` test 352 s and 185 s.
- **Cold.** On GitHub-hosted runners the amd64 image builds took a median 1098 s (enterprise) and 1069 s (community) of the 1153 s merge. On StarSling Runners (with agents) the amd64 builds took 653 s and 513 s, but the enterprise arm64 build, on GitHub's ARM runner in both configurations and writing the layer cache for the first time, took a median 1231 s and set the 1252 s wait.
- **Spread on GitHub-hosted runners.** The GitHub-hosted amd64 image builds ranged from 852 s to 1386 s across samples, warm and cold alike. That spread, not the cache, is why GitHub's warm median (1391 s) is above its cold median (1153 s): GitHub-hosted runners run upstream's CI unchanged, which has no layer cache.

</details>

<details>
<summary>What we changed</summary>

The agent PR's own effect, measured on the steps it changes.

| Fix | Result | Decision |
|---|---|---|
| A shared Docker layer cache for the image builds (the enterprise build writes it, the community build reads it) | The four image builds' `Build and push by digest` steps, summed, on StarSling runners without and with the PR (5 runs each). Warm: 2756 s to 865 s (median); every run with the PR beat every run without it (slowest with it 950 s, fastest without it 2594 s). Cold: 2743 s to 3184 s, slower, because the cache is written for the first time. | Kept (the agent PR) |

The fix is a cache, so it only helps when an earlier merge has filled it, and only for layers that merge did not change. The replayed merge changes one frontend file (`StackedChangelogCard.vue`), so on warm runs the dependency layers were reused. A merge that changes the Gemfile, a lockfile or the Dockerfile rebuilds those layers and looks like a cold run.

</details>

<details>
<summary>Every sample, with links to its runs</summary>

Each cell is the whole wait for that merge and links to the run that finished last.

| Upstream commit | Cache | Round | GitHub-hosted runners | StarSling Runners (with agents) |
|---|---|---:|---:|---:|
| [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c) | Warm | 1 | [1117 s](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43983537729) | [461 s](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43990895777) |
| [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c) | Warm | 2 | 1395 s | 361 s |
| [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c) | Warm | 3 | 1407 s | 272 s |
| [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c) | Warm | 4 | 1391 s | 354 s |
| [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c) | Warm | 5 | 978 s | 279 s |
| [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c) | Cold | 1 | [1390 s](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43844355392) | [1267 s](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43849172665) |
| [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c) | Cold | 2 | [1399 s](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43913778068) | [1252 s](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43855546620) |
| [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c) | Cold | 3 | [1050 s](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43927169982) | [1204 s](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43919858820) |
| [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c) | Cold | 4 | [1109 s](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43936468124) | 1105 s |
| [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c) | Cold | 5 | [1153 s](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43968350631) | [1275 s](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43972675685) |

</details>

<details>
<summary>Method</summary>

1. **Pin.** chatwoot/chatwoot is pinned at [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c), the [`upstream/`](upstream) submodule in this repository. Each scenario replays one real upstream event: the merge of [`b5e7a866`](https://github.com/chatwoot/chatwoot/commit/b5e7a866ef420dd681307671671fd01513e4f01c) to the default branch.
2. **Replay natively.** Each sample puts that exact tree on a branch of this repository named like upstream's default branch, which fires the same GitHub event a merge to the default branch fires. Every workflow, job and step runs with its own triggers, filters, `needs`, conditions and matrices, in the order GitHub schedules them.
3. **Runner configurations.** GitHub-hosted runners run the CI unchanged; StarSling Runners (with agents) run it with the agent PR applied. Jobs on runners StarSling does not offer stay on GitHub-hosted runners in every configuration and still count.
4. **Rounds.** 5 rounds, warm and cold; in each, every runner configuration replays the event once. Medians use only complete rounds, and a sample counts only if every expected job finished on the first attempt (`security-scan` aside, see below).
5. **Control caches.** Warm cache: every sample starts from caches a seed run produced on the same runner configuration; seed time is not counted. Cold cache: every sample starts with no GitHub Actions caches.
6. **Check.** Replays are compared job by job with upstream's own runs for the same commit, and every sample's test verdicts, coverage and cache restores are read from its own job logs.

- **Control configuration.** Each round also replayed the event on StarSling runners with the CI unchanged, as an internal control. It is not part of this comparison, and its samples are not shown in the tables on this page; they are in the data files under `benchmark/`.
- **Default branch.** The default branch is `develop`.
- **Lane: merges to the default branch.** This page measures merges to chatwoot's default branch. Each sample replays the merge of `b5e7a866`. PR updates were not measured: upstream's `run_foss_spec.yml`, `frontend-fe.yml` and `test_docker_build.yml` also run on pull requests at this commit, but no upstream pull request was pinned for replay.
- **Workflows in this merge.** The replayed merge runs four of upstream's workflows: `publish_ee_docker.yml` and `publish_foss_docker.yml` (an image build per CPU type, then a `merge` job each), `run_foss_spec.yml` (4 lint, scan and frontend-test jobs and 16 backend test shards) and `frontend-fe.yml`: 27 jobs, the same set upstream's own runs for this commit show.
- **One repository per lane.** Most warm samples ran concurrently, each in its own cache scope (one separate copy of this repository per lane, four in all, with the same branches, events and payloads as this repository), so their caches never mix. Of the 20 samples on this page, 11 came from an earlier sequential run of the same configurations in this repository, one sample at a time: warm round 1 of both configurations, all 5 cold rounds on GitHub-hosted runners, and cold rounds 1, 2, 3 and 5 on StarSling Runners (with agents). The other 9 came from the lanes: warm rounds 2 to 5 of both configurations, and cold round 4 on StarSling Runners (with agents). Those copies are not public, so samples that ran in them appear in the sample table without a run link.
- **Combining the lanes.** The lane samples and the sequential ones were combined into one record. Each cold sample restores the pnpm cache 17 times, from a cache an earlier job of its own run saved. The combining step was fixed so that such restores are recognized as the sample's own and are not counted as contamination. No cold sample restored a cache from another sample or a seed run, and in every cold sample with the agent PR all four image builds found no layer cache.
- **Root and non-root StarSling samples, pooled.** During the benchmark, StarSling switched this organization's jobs from root to an ordinary (non-root) user; samples are classed by their first workflow start. Of the 10 StarSling Runners (with agents) samples, 3 ran as root (cold rounds 1 to 3) and 7 as non-root (cold rounds 4 and 5, all 5 warm rounds). Before pooling, the agent PR's steps (the four image builds' `Build and push by digest` steps, summed) were compared across the two: cold, the two non-root samples (3119 s and 3210 s) fell inside the root range (3119 s to 3417 s). The warm samples were all non-root, so nothing is mixed there.
- **Disk-storage voids, re-run.** This benchmark counts StarSling samples only when every StarSling runner had its usual RAM disk. From 9:25 AM to 12:50 PM PST on 2026-11-16 StarSling ran this organization's runners on disk storage. On this page, the StarSling Runners (with agents) sample of cold round 4 ran in that window on runners whose RAM disk could not be confirmed; it was voided and re-run in a lane. The first attempt of warm round 5 on StarSling Runners (with agents) also started in that window: its seed run was voided for the same reason, and the sample itself did not finish; it was re-run in a lane. Four control samples were also voided or replaced (three for storage, one cancelled) and re-run. No voided run is on this page or in any number on it. No GitHub-hosted sample was voided.
- **Bench-only changes, identical in every configuration and never part of the agent PR:**
  - Switched off: the Docker Hub login and the image push in both publish workflows. Upstream's own condition is kept with `false &&` in front, and the build's `push=true` output setting becomes `push=false`, so nothing is pushed by digest. In the `merge` jobs the Docker Hub login, the manifest push and the image inspection are skipped. The image build itself still runs. The Docker Hub secrets do not exist here and nothing may be published; upstream did run these steps on this merge, so that upstream work is not in any column.
  - The Docker Hub secret references (`DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`) are removed; they were already empty in every configuration.
  - Excluded from the verdict: `run_foss_spec.yml` `security-scan`. Its `bundle-audit` step fails on advisories published after the pinned commit (the live advisory database), so it fails in every configuration. Upstream passed it on its own run date. The job still runs (a median 27 s to 133 s, depending on configuration and cache), its runner time counts, and its result does not gate the sample. It is not on the critical path.
  - Different Ubuntu image for one job: upstream runs `frontend-fe.yml` on Ubuntu 22.04. StarSling has no 22.04 runner, so on StarSling that job runs on `starsling-ubuntu-24.04` (same 4 vCPU, 16 GiB), while GitHub runs `ubuntu-22.04-4core`.
  - One harness step, `Benchmark event context (harness)`, is added at the start of every job. It prints two IDs so each job can be matched to its sample; its median time is 0 s.
  - Warm seed: warm samples start from caches a seed run left behind, produced by replaying the previous upstream merge (`192a2488`) on the same configuration and branch; its time is not counted. In every warm sample with the agent PR, all four image builds restored the layer cache the seed saved.
  - On the agent PR's own branch (`starsling/develop`) only, never in a replay: a setup commit points the workflows' triggers at that branch and literal runner labels at StarSling, so the PR's checks run there.
- **Agent PR checks.** The agent PR was merged with CI failures that were there before it and do not come from it: on pull requests the publish workflows try to push to Docker Hub with no login (the bench-only switch-off above is not on the PR's branch), and `bundle-audit` fails on the default branch too, on the same advisories as in the replays.
- **Runner sizes.** Upstream's `ubuntu-latest` jobs (the amd64 image builds and the `merge` jobs) run on GitHub `ubuntu-26.04-4core` and StarSling `starsling-ubuntu-26.04`; its `ubuntu-24.04` jobs (lint, scan and test) on GitHub `ubuntu-24.04-4core` and StarSling `starsling-ubuntu-24.04`; its one `ubuntu-22.04` job on GitHub `ubuntu-22.04-4core` and StarSling `starsling-ubuntu-24.04`; its `ubuntu-22.04-arm` jobs (the arm64 image builds) on GitHub `ubuntu-22.04-arm-4core` in both configurations. All are 4 vCPU and 16 GiB. StarSling's 4 vCPU runners can burst to 5 vCPU and 32 GB RAM (Afterburner); GitHub's 4-core runners have 16 GB. In every counted sample, no job waited more than 28 s for a runner.
- **Upstream reference (context only; not like-for-like; not the headline).** What upstream sees today: a median 21.2 min per merge to the default branch on upstream's own GitHub runners (n=10, most recent comparable merges to the default branch within the last 60 days; standard and arm runners, warm caches, many commits; not a like-for-like replay).
- **Failed or re-run samples** (replaced, not in the medians): GitHub-hosted runners: 1 (cold round 5, cancelled part-way; re-run in this repository); StarSling Runners (with agents): 2 (cold round 4 and warm round 5, see Disk-storage voids).

</details>

<sub>Generated by `bench showcase` from experiment `full-2`. Machine-readable results: [`benchmark/results.json`](benchmark/results.json).</sub>
