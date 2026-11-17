# StarSling Whole-Pipeline Benchmark Report (`full-2`)

- **Upstream:** `chatwoot/chatwoot@b5e7a866ef420dd681307671671fd01513e4f01c`
- **Timestamp Resolution:** `1s` (GitHub Actions workflow/job/step timestamps)

## Event `main-push` · cold cache

**Total speedup 0.92×: hardware speedup 1.18×, self-improving CI speedup 0.78× on StarSling Runners and — on GitHub-hosted runners. Evidence: coverage-qualified.**

### Runner configurations

| Runner configuration | Complete / requested | CI duration p50 (IQR) | CI minutes p50 | Estimated cost p50 (USD) | Trigger latency p50 | Harness overhead p50 |
|---|---|---|---|---|---|---|
| `github-baseline` | 5/5 | 1153.0 s (IQR 281.0 s, n=5) | 158.72 min | $2.7680 | 5.0 s | 1.0 s |
| `starsling-baseline` | 5/5 | 980.0 s (IQR 31.0 s, n=5) | 105.15 min | $1.2000 | 5.0 s | 0.0 s |
| `starsling-patched` | 5/5 | 1252.0 s (IQR 63.0 s, n=5) | 111.57 min | $1.2880 | 5.0 s | 0.0 s |

### Speedups

| Speedup | Ratio | Compares | Cost neutral |
|---|---|---|---|
| `github-baseline` / `github-patched` | — | Self-improving CI speedup, GitHub-hosted runners | Not established (Self-improving CI changed which runners jobs use, so its speedup includes a hardware change.) |
| `starsling-baseline` / `starsling-patched` | 0.78× | Self-improving CI speedup, StarSling Runners | Not established (Self-improving CI changed which runners jobs use, so its speedup includes a hardware change.; Self-improving CI used more CI minutes (111.57) than the unchanged CI (105.15).) |
| `github-baseline` / `starsling-baseline` | 1.18× | Hardware speedup | Not applicable: hardware speedups never establish it |
| `github-baseline` / `starsling-patched` | 0.92× | Total speedup | Not applicable |

### Step times

| Workflow › job | Step | Change | GitHub-hosted p50 | GitHub-hosted, self-improving CI p50 | StarSling, hardware only p50 | StarSling, self-improving CI p50 |
|---|---|---|---|---|---|---|
| `.github/workflows/frontend-fe.yml#test` | Set up job | `matched` | 2.0 s | — | 1.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 2.0 s | 2.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run ruby/setup-ruby@v1 | `matched` | 117.0 s | — | 57.0 s | 56.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run pnpm/action-setup@v4 | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run actions/setup-node@v4 | `matched` | 8.0 s | — | 5.0 s | 6.0 s |
| `.github/workflows/frontend-fe.yml#test` | Install pnpm dependencies | `matched` | 4.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run eslint | `matched` | 43.0 s | — | 26.0 s | 26.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run frontend tests with coverage | `matched` | 272.0 s | — | 128.0 s | 126.0 s |
| `.github/workflows/frontend-fe.yml#test` | Post Run actions/setup-node@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Post Run pnpm/action-setup@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Set up job | `matched` | 1.0 s | — | 0.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 2.0 s | 3.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Run ruby/setup-ruby@v1 | `matched` | 109.0 s | — | 56.0 s | 56.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Run Brakeman | `matched` | 14.0 s | — | 11.0 s | 10.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Run bundle-audit | `matched` | 2.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Set up job | `matched` | 1.0 s | — | 0.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 3.0 s | 2.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Run pnpm/action-setup@v4 | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Run actions/setup-node@v4 | `matched` | 5.0 s | — | 3.0 s | 3.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Install pnpm dependencies | `matched` | 7.0 s | — | 3.0 s | 3.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Run frontend tests | `matched` | 252.0 s | — | 129.0 s | 128.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Post Run actions/setup-node@v4 | `matched` | 2.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Post Run pnpm/action-setup@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Set up job | `matched` | 1.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 2.0 s | 2.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Run ruby/setup-ruby@v1 | `matched` | 107.0 s | — | 55.0 s | 57.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Run Rubocop | `matched` | 64.0 s | — | 24.0 s | 24.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Set up job | `matched` | 2.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Initialize containers | `matched` | 26.0 s | — | 19.0 s | 19.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 3.0 s | 2.5 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Run pnpm/action-setup@v4 | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Run ruby/setup-ruby@v1 | `matched` | 107.0 s | — | 56.0 s | 55.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Run actions/setup-node@v4 | `matched` | 8.0 s | — | 6.0 s | 5.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Install pnpm dependencies | `matched` | 4.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Strip enterprise code | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Create database | `matched` | 7.0 s | — | 6.0 s | 6.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Seed database | `matched` | 5.0 s | — | 3.0 s | 4.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Run backend tests (parallelized) | `matched` | 99.0 s | — | 68.5 s | 67.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Upload test results | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Upload rails log folder | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Post Run actions/setup-node@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Post Run pnpm/action-setup@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Stop containers | `matched` | 1.0 s | — | 0.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Set up job | `matched` | 1.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 2.0 s | 3.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Run pnpm/action-setup@v4 | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Run actions/setup-node@v4 | `matched` | 5.0 s | — | 3.0 s | 3.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Install pnpm dependencies | `matched` | 8.0 s | — | 3.0 s | 3.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Run ESLint | `matched` | 51.0 s | — | 27.0 s | 26.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Post Run actions/setup-node@v4 | `matched` | 4.0 s | — | 4.0 s | 4.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Post Run pnpm/action-setup@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set up job | `matched` | 2.5 s | — | 1.5 s | 1.5 s |
| `.github/workflows/publish_ee_docker.yml#build` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Checkout | `matched` | 4.0 s | — | 3.0 s | 3.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Prepare | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set Chatwoot edition | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set Docker Tags | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set up QEMU | `matched` | 6.0 s | — | 4.5 s | 4.5 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set up Docker Buildx | `matched` | 5.0 s | — | 3.0 s | 3.5 s |
| `.github/workflows/publish_ee_docker.yml#build` | Login to DockerHub | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Build and push by digest | `matched` | 958.5 s | — | 649.0 s | 846.5 s |
| `.github/workflows/publish_ee_docker.yml#build` | Export digest | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Upload digest | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Post Build and push by digest | `matched` | 2.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Post Set up Docker Buildx | `matched` | 13.5 s | — | 7.0 s | 8.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Post Set up QEMU | `matched` | 1.0 s | — | 0.5 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Post Checkout | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Set up job | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Download digests | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Login to DockerHub | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Set up Docker Buildx | `matched` | 8.0 s | — | 6.0 s | 3.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Create manifest list and push | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Inspect image | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Post Set up Docker Buildx | `matched` | 1.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set up job | `matched` | 2.0 s | — | 1.5 s | 1.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Checkout | `matched` | 4.0 s | — | 3.0 s | 3.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Prepare | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Strip enterprise code | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set Chatwoot edition | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set Docker Tags | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set up QEMU | `matched` | 6.5 s | — | 5.0 s | 4.5 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set up Docker Buildx | `matched` | 4.5 s | — | 3.5 s | 3.5 s |
| `.github/workflows/publish_foss_docker.yml#build` | Login to DockerHub | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Build and push by digest | `matched` | 889.5 s | — | 657.5 s | 751.5 s |
| `.github/workflows/publish_foss_docker.yml#build` | Export digest | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Upload digest | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Post Build and push by digest | `matched` | 2.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Post Set up Docker Buildx | `matched` | 11.0 s | — | 7.0 s | 8.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Post Set up QEMU | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Post Checkout | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Set up job | `matched` | 1.0 s | — | 0.0 s | 1.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Download digests | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Login to DockerHub | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Set up Docker Buildx | `matched` | 7.0 s | — | 3.0 s | 3.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Create manifest list and push | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Inspect image | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Post Set up Docker Buildx | `matched` | 1.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Set up runner | `matched` | — | — | 1.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Complete runner | `matched` | — | — | 1.0 s | 0.0 s |

### Samples

| Sample ID | Round | Runner configuration | Complete | CI duration | CI minutes | Runs and diagnostics |
|---|---|---|---|---|---|---|
| `full-2-main-push-cold-rep1-starsling-baseline` | 1 | `starsling-baseline` | ✓ | 960.0 s | 103.10m | [run #43840662337](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43840662337), [run #43840662310](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43840662310), [run #43840662195](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43840662195), [run #43840662356](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43840662356) |
| `full-2-main-push-cold-rep1-github-baseline` | 1 | `github-baseline` | ✓ | 1390.0 s | 165.18m | [run #43844355327](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43844355327), [run #43844355282](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43844355282), [run #43844355374](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43844355374), [run #43844355392](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43844355392) |
| `full-2-main-push-cold-rep1-starsling-patched` | 1 | `starsling-patched` | ✓ | 1267.0 s | 113.65m | [run #43849172677](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43849172677), [run #43849172766](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43849172766), [run #43849173017](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43849173017), [run #43849172665](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43849172665) |
| `full-2-main-push-cold-rep2-starsling-patched` | 2 | `starsling-patched` | ✓ | 1252.0 s | 110.78m | [run #43855546519](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43855546519), [run #43855546297](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43855546297), [run #43855546418](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43855546418), [run #43855546620](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43855546620) |
| `full-2-main-push-cold-rep2-starsling-baseline-retry1` | 2 | `starsling-baseline` | ✓ | 980.0 s | 105.15m | [run #43906806871](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43906806871), [run #43906806424](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43906806424), [run #43906806223](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43906806223), [run #43906806647](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43906806647) |
| `full-2-main-push-cold-rep2-github-baseline` | 2 | `github-baseline` | ✓ | 1399.0 s | 167.27m | [run #43913778030](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43913778030), [run #43913778133](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43913778133), [run #43913778095](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43913778095), [run #43913778068](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43913778068) |
| `full-2-main-push-cold-rep3-starsling-patched` | 3 | `starsling-patched` | ✓ | 1204.0 s | 111.57m | [run #43919858777](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43919858777), [run #43919858753](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43919858753), [run #43919858941](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43919858941), [run #43919858820](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43919858820) |
| `full-2-main-push-cold-rep3-github-baseline` | 3 | `github-baseline` | ✓ | 1050.0 s | 153.48m | [run #43927170039](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43927170039), [run #43927169493](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43927169493), [run #43927170000](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43927170000), [run #43927169982](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43927169982) |
| `full-2-main-push-cold-rep4-github-baseline` | 4 | `github-baseline` | ✓ | 1109.0 s | 156.47m | [run #43936468321](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43936468321), [run #43936468187](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43936468187), [run #43936468004](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43936468004), [run #43936468124](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43936468124) |
| `full-2-main-push-cold-rep5-github-baseline-retry1` | 5 | `github-baseline` | ✓ | 1153.0 s | 158.72m | [run #43968350528](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43968350528), [run #43968350538](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43968350538), [run #43968350854](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43968350854), [run #43968350631](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43968350631) |
| `full-2-main-push-cold-rep5-starsling-patched` | 5 | `starsling-patched` | ✓ | 1275.0 s | 112.67m | [run #43972675914](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43972675914), [run #43972675668](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43972675668), [run #43972675574](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43972675574), [run #43972675685](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43972675685) |
| `full-2-main-push-cold-rep5-starsling-baseline-retry1` | 5 | `starsling-baseline` | ✓ | 938.0 s | 105.43m | [run #43998904799](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43998904799), [run #43998904721](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43998904721), [run #43998904713](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43998904713), [run #43998904801](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43998904801) |
| `full-2-main-push-cold-rep4-starsling-baseline-retry1` | 4 | `starsling-baseline` | ✓ | 1048.0 s | 106.85m | [run #44001156811](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/44001156811), [run #44001156849](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/44001156849), [run #44001156839](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/44001156839), [run #44001156797](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/44001156797) |
| `full-2-main-push-cold-rep4-starsling-patched-retry1` | 4 | `starsling-patched` | ✓ | 1105.0 s | 111.38m | [run #44004813346](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/44004813346), [run #44004813258](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/44004813258), [run #44004813362](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/44004813362), [run #44004813234](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/44004813234) |
| `full-2-main-push-cold-rep3-starsling-baseline-retry1` | 3 | `starsling-baseline` | ✓ | 991.0 s | 104.95m | [run #44007160809](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/44007160809), [run #44007160748](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/44007160748), [run #44007160698](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/44007160698), [run #44007160761](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/44007160761) |
| `full-2-main-push-cold-rep2-starsling-baseline` | 2 | `starsling-baseline` | ✗ | 680.0 s | 96.77m | [run #43861687659](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43861687659), [run #43861687625](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43861687625), [run #43861687630](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43861687630), [run #43861687689](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43861687689) (Workflow ".github/workflows/publish_foss_docker.yml" (run 43861687630) was cancelled; Workflow not successful: .github/workflows/publish_foss_docker.yml; Workflow ".github/workflows/publish_ee_docker.yml" (run 43861687689) was cancelled; Workflow not successful: .github/workflows/publish_ee_docker.yml; Cancelled jobs: .github/workflows/publish_foss_docker.yml#build (linux/arm64, ubuntu-22.04-arm-4core), .github/workflows/publish_foss_docker.yml#merge, .github/workflows/publish_ee_docker.yml#build (linux/arm64, ubuntu-22.04-arm-4core), .github/workflows/publish_ee_docker.yml#merge; Staging failed: Incomplete sample full-1-main-push-cold-rep2-starsling-baseline; state remains leased for collect/recover) |
| `full-2-main-push-cold-rep3-starsling-baseline` | 3 | `starsling-baseline` | ✗ | 1150.0 s | 107.80m | [run #43931707358](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43931707358), [run #43931707483](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43931707483), [run #43931707243](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43931707243), [run #43931707099](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43931707099) (StarSling runner without RAM disk (starsling-z-f68e2f8f9336432580500e20648d5d1f: storage unknown after the switch; starsling-z-5168849917a44eb4bf941fda025d43c1: storage unknown after the switch; starsling-z-179451c44a964202aa84633bebb15382: storage unknown after the switch; starsling-z-f3ca93d8f4b346fd9fbe1ef4f232b202: storage unknown after the switch; starsling-z-a2f428b2f31a4b509e83d123e819e616: storage unknown after the switch; starsling-z-d5215112556a4d4ab9203e292e0125bb: storage unknown after the switch; starsling-z-ac08da51a6734cfe96dcd3dac475a107: storage unknown after the switch; starsling-z-6778a86a845d414c84079d0e3e7912f0: storage unknown after the switch; starsling-z-6983f92f20d344d98bd86e0e7ed1ea66: storage unknown after the switch; starsling-z-563fc3b0eef64ebeabd16081bc0b4a64: storage unknown after the switch; starsling-z-600b3994e8024920b37fb8891207938f: storage unknown after the switch; starsling-z-01b4aa3169ab4f08ae856f72e99aba89: storage unknown after the switch; starsling-z-d04390775a48411098ad33024a34e592: storage unknown after the switch; starsling-z-a61d45da6a6a481fba748098c05a824a: storage unknown after the switch; starsling-z-9a3d525b29df4a639c0b2199ed2178c6: storage unknown after the switch; starsling-z-919c74e0b033420da9c35177e9a574f3: storage unknown after the switch; starsling-z-91b1d00e2cde46eb8116b8e75c829b2e: storage unknown after the switch; starsling-z-dadd5ba2e07f43fa8646dbf7e47bcc4d: storage unknown after the switch; starsling-z-62595c774883424bbfc31d4da0d967a6: storage unknown after the switch; starsling-z-40de3c03bb9f4ce3a6f0e5f4dab455a9: storage unknown after the switch; starsling-z-1c09128b5145417bbe394c7dbba52f83: storage unknown after the switch; starsling-z-708417e96c6547028e0204e6fbe12a23: storage unknown after the switch; starsling-z-04d361b870954e0095a3ac7c27151b37: storage unknown after the switch; starsling-z-695316c105094ec6b92139d8bd82a066: storage unknown after the switch; starsling-z-5d89978c3e3a4c3c82b828a93e33cded: storage unknown after the switch)) |
| `full-2-main-push-cold-rep4-starsling-patched` | 4 | `starsling-patched` | ✗ | 1183.0 s | 116.28m | [run #43941373050](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43941373050), [run #43941373041](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43941373041), [run #43941373087](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43941373087), [run #43941372806](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43941372806) (StarSling runner without RAM disk (starsling-z-8a8a83b5cbcc44c1a9cbecab8997c588: storage unknown after the switch; starsling-z-2612ba7563264fb0a48c5ba213f6d1fa: storage unknown after the switch; starsling-z-3f29f019715f4e0890fd9833f6a4595e: storage unknown after the switch; starsling-z-3623690a4820439484a07dc0769c95bc: storage unknown after the switch; starsling-z-95ad56a78922485eb308b3fe91ba51bd: storage unknown after the switch; starsling-z-fe93f9a9a879403e83f46c1d8f597aeb: storage unknown after the switch; starsling-z-9eaef5f445a646f59347c8a6af479df0: storage unknown after the switch; starsling-z-608950f0662d499e830ca1997e40cbe5: storage unknown after the switch; starsling-z-c993ac0f801f470882114f96d5561396: storage unknown after the switch; starsling-z-5e165856b96d4199bfd937d0d905f70d: storage unknown after the switch; starsling-z-017245d103074a58be41c19a928a4a1a: storage unknown after the switch; starsling-z-4c1f94cc44f246a3a209288443fec57b: storage unknown after the switch; starsling-z-fe9345097c9448e8a978b5201fe6ed81: storage unknown after the switch; starsling-z-5ef0520cc4ee4864959b824dad5b7604: storage unknown after the switch; starsling-z-d9a31f5608144f26b07136ce33dfc1c4: storage unknown after the switch; starsling-z-d266946495824d6b89ecf04e91b56176: storage unknown after the switch; starsling-z-40272b04d6de4eb38b9e0591a634ee33: storage unknown after the switch; starsling-z-5f0012209a024c0ab08f7437fa18c2a7: storage unknown after the switch; starsling-z-d31f88c7f3eb452c9659bd6aca2787d9: storage unknown after the switch; starsling-z-c062ecc13f1b4d81b716043ef404b96d: storage unknown after the switch; starsling-z-092cec0f8d1d46e2a3353d7d95d15d22: storage unknown after the switch; starsling-z-b5916b5fe55047b99349f7ccd83eb5de: storage unknown after the switch; starsling-z-bd38b00657c945f39e433107f9a22732: storage unknown after the switch; starsling-z-681be9f628804bfca5d2104e46a9fcf1: storage unknown after the switch; starsling-z-326886efbd9d4ae88bbf9c00540fe2d8: storage unknown after the switch)) |
| `full-2-main-push-cold-rep4-starsling-baseline` | 4 | `starsling-baseline` | ✗ | 973.0 s | 102.38m | [run #43948550098](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43948550098), [run #43948551302](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43948551302), [run #43948550211](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43948550211), [run #43948550263](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43948550263) (StarSling runner without RAM disk (starsling-z-dc1e0cedad8c442680e54efa1342d546: storage unknown after the switch; starsling-z-938a8647a89342cebac3e3924a6d09ad: storage unknown after the switch; starsling-z-c844411feac44da78f4579020cc2dd24: storage unknown after the switch; starsling-z-b0f72281bf6644189f6ac688fea2c881: storage unknown after the switch; starsling-z-7a6749bc9f6c43e094c1462fb744cbd1: storage unknown after the switch; starsling-z-4868209cc1a445bf915e7db8290fc0c4: storage unknown after the switch; starsling-z-42f5cf05fa50446a8864f4b9ec89131f: storage unknown after the switch; starsling-z-9d467d0a68c34a4dbd5f02a18894cb9a: storage unknown after the switch; starsling-z-c9bc4455067541aea5cd158eda7406c2: storage unknown after the switch; starsling-z-21ac30e0c67b4c5ba48ce0ce85df505a: storage unknown after the switch; starsling-z-ceabe443247b41e4815f39f82435a9c3: storage unknown after the switch; starsling-z-4fbb12c334aa4820b8392666b32e4e5f: storage unknown after the switch; starsling-z-baee80b0ddf841a6aea3127e44dfad07: storage unknown after the switch; starsling-z-8a1c7a489fc24dfabc8f374a9c822547: storage unknown after the switch; starsling-z-86dbe715ce6f4463917cb5705bbc7c63: storage unknown after the switch; starsling-z-fdcb1f503223485e9057b85a96d8caca: storage unknown after the switch; starsling-z-645f2ffff5bd4b648153a14895da42cb: storage unknown after the switch; starsling-z-a51818d204c44d4cbdf7e50517472b23: storage unknown after the switch; starsling-z-89450475066245c587d8cb711acb0551: storage unknown after the switch; starsling-z-ead715e0636b4c74b499b36526695d35: storage unknown after the switch; starsling-z-14e011b5fc33454fa208e5bbf68382ae: storage unknown after the switch; starsling-z-12c7eea1eb454306a1fe451b5cd16c3c: storage unknown after the switch; starsling-z-fd35100c3e9a4a97bd194229cf8467c5: storage unknown after the switch; starsling-z-c0232a45498f4135b330b55988017ce7: storage unknown after the switch; starsling-z-1bc8fa567eae4b868b81ad24e19d1aef: storage unknown after the switch)) |
| `full-2-main-push-cold-rep5-starsling-baseline` | 5 | `starsling-baseline` | ✗ | 938.0 s | 104.93m | [run #43952708033](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43952708033), [run #43952707752](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43952707752), [run #43952707943](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43952707943), [run #43952707985](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43952707985) (StarSling runner without RAM disk (starsling-z-9d4ec395f0864a5ca5b2af15f9051c6c: storage unknown after the switch; starsling-z-427a20b6d6cb415785a65a7ade800ca7: storage unknown after the switch; starsling-z-f705fbc36a8a4763b23902fa6d3508b5: storage unknown after the switch; starsling-z-54b5023dd2d144f9b9c0c2f721503799: storage unknown after the switch; starsling-z-2097add70bee48079db50763534e4304: storage unknown after the switch; starsling-z-1c1844d1a03146f98978e0e31990a682: storage unknown after the switch; starsling-z-57832614d8474d129f759192425d2774: storage unknown after the switch; starsling-z-15fecf1f3406407389a55bfc20596a13: storage unknown after the switch; starsling-z-08a309d07fce45ea9bf07885d6ab91d8: storage unknown after the switch; starsling-z-419b3a5e8d6f424fb45ab97f57b5df30: storage unknown after the switch; starsling-z-7316a5b8bb534ade927209859fe52945: storage unknown after the switch; starsling-z-56bea426d5c74252b90deff4a7450a51: storage unknown after the switch; starsling-z-0b8b77a43d0b4a29948f30fbf1f6db81: storage unknown after the switch; starsling-z-b75f4233d2d544f7b1797c8cd24b485f: storage unknown after the switch; starsling-z-793c00a61d03440bab19f4d6483de891: storage unknown after the switch; starsling-z-fe94dbb656394e56ba8b4aefeb6dbf6a: storage unknown after the switch; starsling-z-c32573115607490e8e5690524911e775: storage unknown after the switch; starsling-z-c81f46c1904243b188dfe8170d908702: storage unknown after the switch; starsling-z-ac6a6872ff774631bef6401e782d2266: storage unknown after the switch; starsling-z-e4cc0e46e8cf48208bb5298f96f7830f: storage unknown after the switch; starsling-z-c812888f068e43d49cb77d13b5bb7693: storage unknown after the switch; starsling-z-fb5bebda7c494b58a6827f51bcbfd529: storage unknown after the switch; starsling-z-37f078248a294ab6b32025dac464a22b: storage unknown after the switch)) |
| `full-2-main-push-cold-rep5-github-baseline` | 5 | `github-baseline` | ✗ | 833.0 s | 148.90m | [run #43956930795](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43956930795), [run #43956930781](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43956930781), [run #43956930629](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43956930629), [run #43956930542](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43956930542) (Workflow ".github/workflows/publish_ee_docker.yml" (run 43956930781) was cancelled; Workflow not successful: .github/workflows/publish_ee_docker.yml; Workflow ".github/workflows/publish_foss_docker.yml" (run 43956930542) was cancelled; Workflow not successful: .github/workflows/publish_foss_docker.yml; Cancelled jobs: .github/workflows/publish_ee_docker.yml#build (linux/amd64, ubuntu-26.04-4core), .github/workflows/publish_ee_docker.yml#build (linux/arm64, ubuntu-22.04-arm-4core), .github/workflows/publish_ee_docker.yml#merge, .github/workflows/publish_foss_docker.yml#build (linux/amd64, ubuntu-26.04-4core), .github/workflows/publish_foss_docker.yml#build (linux/arm64, ubuntu-22.04-arm-4core), .github/workflows/publish_foss_docker.yml#merge; Staging failed: Incomplete sample full-1-main-push-cold-rep5-github-baseline; state remains leased for collect/recover) |

## Event `main-push` · warm cache

**Total speedup 3.93×: hardware speedup 1.45×, self-improving CI speedup 2.71× on StarSling Runners and — on GitHub-hosted runners. Evidence: coverage-qualified.**

### Runner configurations

| Runner configuration | Complete / requested | CI duration p50 (IQR) | CI minutes p50 | Estimated cost p50 (USD) | Trigger latency p50 | Harness overhead p50 |
|---|---|---|---|---|---|---|
| `github-baseline` | 5/5 | 1391.0 s (IQR 278.0 s, n=5) | 127.95 min | $2.2880 | 5.0 s | 1.0 s |
| `starsling-baseline` | 5/5 | 959.0 s (IQR 43.0 s, n=5) | 89.62 min | $1.0800 | 5.0 s | 0.0 s |
| `starsling-patched` | 5/5 | 354.0 s (IQR 82.0 s, n=5) | 58.38 min | $0.6480 | 5.0 s | 0.0 s |

### Speedups

| Speedup | Ratio | Compares | Cost neutral |
|---|---|---|---|
| `github-baseline` / `github-patched` | — | Self-improving CI speedup, GitHub-hosted runners | Not established (Self-improving CI changed which runners jobs use, so its speedup includes a hardware change.) |
| `starsling-baseline` / `starsling-patched` | 2.71× | Self-improving CI speedup, StarSling Runners | Not established (Self-improving CI changed which runners jobs use, so its speedup includes a hardware change.) |
| `github-baseline` / `starsling-baseline` | 1.45× | Hardware speedup | Not applicable: hardware speedups never establish it |
| `github-baseline` / `starsling-patched` | 3.93× | Total speedup | Not applicable |

### Step times

| Workflow › job | Step | Change | GitHub-hosted p50 | GitHub-hosted, self-improving CI p50 | StarSling, hardware only p50 | StarSling, self-improving CI p50 |
|---|---|---|---|---|---|---|
| `.github/workflows/run_foss_spec.yml#lint-backend` | Set up job | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 2.0 s | 2.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Run ruby/setup-ruby@v1 | `matched` | 5.0 s | — | 5.0 s | 5.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Run Rubocop | `matched` | 73.0 s | — | 25.0 s | 25.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Set up job | `matched` | 1.0 s | — | 0.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 2.0 s | 3.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Run ruby/setup-ruby@v1 | `matched` | 6.0 s | — | 5.0 s | 5.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Run Brakeman | `matched` | 17.0 s | — | 11.0 s | 11.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Run bundle-audit | `matched` | 2.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Set up job | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 2.0 s | 3.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Run pnpm/action-setup@v4 | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Run actions/setup-node@v4 | `matched` | 7.0 s | — | 7.0 s | 7.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Install pnpm dependencies | `matched` | 4.0 s | — | 2.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Run frontend tests | `matched` | 241.0 s | — | 130.0 s | 133.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Post Run actions/setup-node@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Post Run pnpm/action-setup@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 1.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Set up job | `matched` | 2.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Initialize containers | `matched` | 25.0 s | — | 20.0 s | 21.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 3.0 s | 3.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Run pnpm/action-setup@v4 | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Run ruby/setup-ruby@v1 | `matched` | 5.0 s | — | 6.0 s | 5.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Run actions/setup-node@v4 | `matched` | 8.0 s | — | 7.0 s | 7.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Install pnpm dependencies | `matched` | 4.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Strip enterprise code | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Create database | `matched` | 8.0 s | — | 6.0 s | 6.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Seed database | `matched` | 5.0 s | — | 4.0 s | 3.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Run backend tests (parallelized) | `matched` | 99.0 s | — | 74.5 s | 69.5 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Upload test results | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Upload rails log folder | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Post Run actions/setup-node@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Post Run pnpm/action-setup@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Stop containers | `matched` | 1.0 s | — | 1.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Set up job | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 3.0 s | 3.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Run pnpm/action-setup@v4 | `matched` | 1.0 s | — | 0.0 s | 1.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Run actions/setup-node@v4 | `matched` | 8.0 s | — | 7.0 s | 6.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Install pnpm dependencies | `matched` | 3.0 s | — | 1.0 s | 2.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Run ESLint | `matched` | 49.0 s | — | 27.0 s | 27.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Post Run actions/setup-node@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Post Run pnpm/action-setup@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Set up job | `matched` | 2.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run actions/checkout@v4 | `matched` | 4.0 s | — | 2.0 s | 3.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run ruby/setup-ruby@v1 | `matched` | 6.0 s | — | 6.0 s | 5.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run pnpm/action-setup@v4 | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run actions/setup-node@v4 | `matched` | 9.0 s | — | 6.0 s | 6.0 s |
| `.github/workflows/frontend-fe.yml#test` | Install pnpm dependencies | `matched` | 4.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run eslint | `matched` | 44.0 s | — | 26.0 s | 27.0 s |
| `.github/workflows/frontend-fe.yml#test` | Run frontend tests with coverage | `matched` | 276.0 s | — | 131.0 s | 136.0 s |
| `.github/workflows/frontend-fe.yml#test` | Post Run actions/setup-node@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Post Run pnpm/action-setup@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Post Run actions/checkout@v4 | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set up job | `matched` | 2.0 s | — | 1.5 s | 1.5 s |
| `.github/workflows/publish_ee_docker.yml#build` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Checkout | `matched` | 4.0 s | — | 3.0 s | 3.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Prepare | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set Chatwoot edition | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set Docker Tags | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set up QEMU | `matched` | 7.0 s | — | 8.0 s | 6.5 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set up Docker Buildx | `matched` | 4.0 s | — | 4.0 s | 4.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Login to DockerHub | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Build and push by digest | `matched` | 914.0 s | — | 721.5 s | 217.5 s |
| `.github/workflows/publish_ee_docker.yml#build` | Export digest | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Upload digest | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Post Build and push by digest | `matched` | 1.5 s | — | 1.5 s | 2.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Post Set up Docker Buildx | `matched` | 15.5 s | — | 7.0 s | 7.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Post Set up QEMU | `matched` | 0.5 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Post Checkout | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Set up job | `matched` | 2.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Download digests | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Login to DockerHub | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Set up Docker Buildx | `matched` | 5.0 s | — | 3.0 s | 4.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Create manifest list and push | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Inspect image | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Post Set up Docker Buildx | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set up job | `matched` | 2.5 s | — | 1.5 s | 1.5 s |
| `.github/workflows/publish_foss_docker.yml#build` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Checkout | `matched` | 4.0 s | — | 3.0 s | 3.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Prepare | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Strip enterprise code | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set Chatwoot edition | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set Docker Tags | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set up QEMU | `matched` | 7.0 s | — | 6.5 s | 6.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set up Docker Buildx | `matched` | 4.5 s | — | 3.5 s | 3.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Login to DockerHub | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Build and push by digest | `matched` | 892.5 s | — | 693.5 s | 167.5 s |
| `.github/workflows/publish_foss_docker.yml#build` | Export digest | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Upload digest | `matched` | 1.0 s | — | 1.0 s | 1.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Post Build and push by digest | `matched` | 2.0 s | — | 2.0 s | 1.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Post Set up Docker Buildx | `matched` | 18.5 s | — | 7.5 s | 7.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Post Set up QEMU | `matched` | 1.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Post Checkout | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Set up job | `matched` | 2.0 s | — | 1.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Benchmark event context (harness) | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Download digests | `matched` | 1.0 s | — | 0.0 s | 1.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Login to DockerHub | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Set up Docker Buildx | `matched` | 6.0 s | — | 3.0 s | 4.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Create manifest list and push | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Inspect image | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Post Set up Docker Buildx | `matched` | 0.0 s | — | 1.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Complete job | `matched` | 0.0 s | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#frontend-tests` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#backend-tests` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Set up runner | `matched` | — | — | 1.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#security-scan` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-backend` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/run_foss_spec.yml#lint-frontend` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#build` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_foss_docker.yml#merge` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#build` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Set up runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/publish_ee_docker.yml#merge` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Set up runner | `matched` | — | — | 1.0 s | 0.0 s |
| `.github/workflows/frontend-fe.yml#test` | Complete runner | `matched` | — | — | 0.0 s | 0.0 s |

### Samples

| Sample ID | Round | Runner configuration | Complete | CI duration | CI minutes | Runs and diagnostics |
|---|---|---|---|---|---|---|
| `full-2-main-push-warm-rep1-github-baseline` | 1 | `github-baseline` | ✓ | 1117.0 s | 123.10m | [run #43983537781](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43983537781), [run #43983537778](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43983537778), [run #43983537669](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43983537669), [run #43983537729](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43983537729) |
| `full-2-main-push-warm-rep1-starsling-patched` | 1 | `starsling-patched` | ✓ | 461.0 s | 59.63m | [run #43990895731](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43990895731), [run #43990895777](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43990895777), [run #43990895620](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43990895620), [run #43990895692](https://github.com/starsling-demo-org/benchmark-chatwoot/actions/runs/43990895692) |
| `full-2-main-push-warm-rep5-starsling-patched-retry1` | 5 | `starsling-patched` | ✓ | 279.0 s | 60.90m | [run #43963723202](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43963723202), [run #43963723161](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43963723161), [run #43963723128](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43963723128), [run #43963723268](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43963723268) |
| `full-2-main-push-warm-rep3-starsling-patched` | 3 | `starsling-patched` | ✓ | 272.0 s | 57.63m | [run #43962893495](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43962893495), [run #43962893473](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43962893473), [run #43962893342](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43962893342), [run #43962893435](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43962893435) |
| `full-2-main-push-warm-rep3-starsling-baseline` | 3 | `starsling-baseline` | ✓ | 959.0 s | 107.27m | [run #43962561676](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43962561676), [run #43962561574](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43962561574), [run #43962561932](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43962561932), [run #43962561514](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43962561514) |
| `full-2-main-push-warm-rep5-starsling-baseline` | 5 | `starsling-baseline` | ✓ | 998.0 s | 90.28m | [run #43977548738](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/43977548738), [run #43977548770](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/43977548770), [run #43977548716](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/43977548716), [run #43977548721](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/43977548721) |
| `full-2-main-push-warm-rep4-starsling-patched` | 4 | `starsling-patched` | ✓ | 354.0 s | 58.38m | [run #43978975137](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43978975137), [run #43978975123](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43978975123), [run #43978975150](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43978975150), [run #43978975157](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43978975157) |
| `full-2-main-push-warm-rep4-starsling-baseline` | 4 | `starsling-baseline` | ✓ | 941.0 s | 87.17m | [run #43975284500](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43975284500), [run #43975284494](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43975284494), [run #43975284618](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43975284618), [run #43975284654](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43975284654) |
| `full-2-main-push-warm-rep5-github-baseline` | 5 | `github-baseline` | ✓ | 978.0 s | 118.78m | [run #43985487334](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43985487334), [run #43985487772](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43985487772), [run #43985487811](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43985487811), [run #43985487459](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43985487459) |
| `full-2-main-push-warm-rep2-starsling-patched` | 2 | `starsling-patched` | ✓ | 361.0 s | 58.28m | [run #43987201334](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43987201334), [run #43987201414](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43987201414), [run #43987201470](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43987201470), [run #43987201536](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/43987201536) |
| `full-2-main-push-warm-rep1-starsling-baseline` | 1 | `starsling-baseline` | ✓ | 998.0 s | 89.62m | [run #43992566508](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43992566508), [run #43992566479](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43992566479), [run #43992566496](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43992566496), [run #43992566551](https://github.com/starsling-demo-org/benchmark-chatwoot-lane4/actions/runs/43992566551) |
| `full-2-main-push-warm-rep2-starsling-baseline` | 2 | `starsling-baseline` | ✓ | 955.0 s | 86.57m | [run #43995031845](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/43995031845), [run #43995031848](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/43995031848), [run #43995031879](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/43995031879), [run #43995031887](https://github.com/starsling-demo-org/benchmark-chatwoot-lane3/actions/runs/43995031887) |
| `full-2-main-push-warm-rep4-github-baseline` | 4 | `github-baseline` | ✓ | 1391.0 s | 134.70m | [run #43997069745](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43997069745), [run #43997069644](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43997069644), [run #43997069725](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43997069725), [run #43997069647](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43997069647) |
| `full-2-main-push-warm-rep3-github-baseline` | 3 | `github-baseline` | ✓ | 1407.0 s | 127.95m | [run #44003148423](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/44003148423), [run #44003148416](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/44003148416), [run #44003148602](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/44003148602), [run #44003148471](https://github.com/starsling-demo-org/benchmark-chatwoot-lane2/actions/runs/44003148471) |
| `full-2-main-push-warm-rep2-github-baseline` | 2 | `github-baseline` | ✓ | 1395.0 s | 132.33m | [run #44007888173](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/44007888173), [run #44007888566](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/44007888566), [run #44007888341](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/44007888341), [run #44007888294](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/44007888294) |
| `full-2-main-push-warm-rep5-starsling-patched` | 5 | `starsling-patched` | ✗ | 186.0 s | — | [run #43950179189](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43950179189), [run #43950178929](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43950178929), [run #43950178836](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43950178836), [run #43950178645](https://github.com/starsling-demo-org/benchmark-chatwoot-lane1/actions/runs/43950178645) (Workflow ".github/workflows/run_foss_spec.yml" (run 43950179189) has not completed (status=in_progress); Job ".github/workflows/run_foss_spec.yml#backend-tests (16, 1)" is still in_progress; Workflow not successful: .github/workflows/run_foss_spec.yml; Workflow ".github/workflows/publish_foss_docker.yml" (run 43950178929) has not completed (status=in_progress); Job ".github/workflows/publish_foss_docker.yml#build (linux/arm64, ubuntu-22.04-arm-4core)" is still in_progress; Workflow not successful: .github/workflows/publish_foss_docker.yml; Workflow ".github/workflows/publish_ee_docker.yml" (run 43950178836) has not completed (status=in_progress); Job ".github/workflows/publish_ee_docker.yml#build (linux/amd64, starsling-ubuntu-26.04)" is still in_progress; Job ".github/workflows/publish_ee_docker.yml#build (linux/arm64, ubuntu-22.04-arm-4core)" is still in_progress; Workflow not successful: .github/workflows/publish_ee_docker.yml; Workflow ".github/workflows/frontend-fe.yml" (run 43950178645) has not completed (status=in_progress); Workflow not successful: .github/workflows/frontend-fe.yml; Missing expected jobs: .github/workflows/publish_foss_docker.yml#merge, .github/workflows/publish_ee_docker.yml#merge; Missing timestamps on executed jobs: .github/workflows/run_foss_spec.yml#backend-tests (16, 1), .github/workflows/publish_foss_docker.yml#build (linux/arm64, ubuntu-22.04-arm-4core), .github/workflows/publish_ee_docker.yml#build (linux/amd64, starsling-ubuntu-26.04), .github/workflows/publish_ee_docker.yml#build (linux/arm64, ubuntu-22.04-arm-4core); queued 38 s for a runner (label starsling-ubuntu-24.04); Staging failed: Incomplete sample full-2-L1-1-main-push-warm-rep1-starsling-patched; state remains leased for collect/recover) |



## GitHub API calls

Budget: 252 calls per hour for this controller. Free `304 Not Modified` answers are listed separately and do not count against the account.

- **Experiment:** 1971 calls (2045 free 304s); job-logs 588, cache-delete 360, jobs 308, artifacts 190, workflows 163, workflow-write 160, run-list 152, caches 39, run-read 8, other-read 3
- **Waiting:** 24601 s stretched to fit the budget, 0 s waiting for an account reset

| Sample | Calls | Free 304s | Biggest callers |
| --- | ---: | ---: | --- |
| `full-1-main-push-cold-rep1-starsling-baseline` | 73 | 83 | job-logs 27, jobs 15, artifacts 9, workflows 8, workflow-write 8, run-list 6 |
| `full-1-main-push-cold-rep1-github-baseline` | 78 | 168 | job-logs 27, jobs 18, artifacts 10, workflows 8, workflow-write 8, run-list 7 |
| `full-1-main-push-cold-rep1-starsling-patched` | 72 | 129 | job-logs 27, jobs 14, artifacts 9, workflows 8, workflow-write 8, run-list 6 |
| `full-1-main-push-cold-rep2-starsling-patched` | 74 | 127 | job-logs 27, jobs 15, artifacts 10, workflows 8, workflow-write 8, run-list 6 |
| `full-1-main-push-cold-rep2-starsling-baseline` | 94 | 40 | job-logs 48, jobs 15, artifacts 9, workflows 8, workflow-write 8, run-list 6 |
| `full-1-main-push-cold-rep2-starsling-baseline-retry1` | 67 | 44 | job-logs 27, jobs 12, workflows 8, workflow-write 8, artifacts 7, run-list 5 |
| `full-1-main-push-cold-rep2-github-baseline` | 77 | 73 | job-logs 27, jobs 16, run-list 9, artifacts 9, workflows 8, workflow-write 8 |
| `full-1-main-push-cold-rep3-starsling-patched` | 78 | 114 | job-logs 27, jobs 14, run-list 12, artifacts 9, workflows 8, workflow-write 8 |
| `full-1-main-push-cold-rep3-github-baseline` | 77 | 97 | job-logs 27, jobs 17, artifacts 10, workflows 8, workflow-write 8, run-list 7 |
| `full-1-main-push-cold-rep3-starsling-baseline` | 75 | 108 | job-logs 27, jobs 16, artifacts 9, workflows 8, workflow-write 8, run-list 7 |
| `full-1-main-push-cold-rep4-github-baseline` | 77 | 124 | job-logs 27, jobs 17, artifacts 11, workflows 8, workflow-write 8, run-list 6 |
| `full-1-main-push-cold-rep4-starsling-patched` | 73 | 110 | job-logs 27, jobs 15, artifacts 9, workflows 8, workflow-write 8, run-list 6 |
| `full-1-main-push-cold-rep4-starsling-baseline` | 72 | 84 | job-logs 27, jobs 14, artifacts 9, workflows 8, workflow-write 8, run-list 6 |
| `full-1-main-push-cold-rep5-starsling-baseline` | 74 | 82 | job-logs 27, jobs 16, artifacts 9, workflows 8, workflow-write 8, run-list 6 |
| `full-1-main-push-cold-rep5-github-baseline` | 36 | 0 | job-logs 27, jobs 4, artifacts 4, run-list 1 |
| `full-1-main-push-cold-rep5-github-baseline-retry1` | 79 | 114 | job-logs 27, jobs 18, run-list 9, artifacts 9, workflows 8, workflow-write 8 |
| `full-1-main-push-cold-rep5-starsling-patched` | 74 | 136 | job-logs 27, jobs 15, artifacts 9, workflows 8, workflow-write 8, run-list 7 |
| `full-1-main-push-warm-rep1-github-baseline-seed` | 77 | 142 | job-logs 27, jobs 15, artifacts 11, workflows 8, run-list 8, workflow-write 8 |
| `full-1-main-push-warm-rep1-github-baseline` | 74 | 100 | job-logs 27, jobs 15, artifacts 10, workflows 8, workflow-write 8, run-list 6 |
| `full-1-main-push-warm-rep1-starsling-patched-seed` | 73 | 128 | job-logs 27, jobs 15, artifacts 9, workflows 8, workflow-write 8, run-list 6 |
| `full-1-main-push-warm-rep1-starsling-patched` | 69 | 42 | job-logs 27, jobs 12, artifacts 9, workflows 8, workflow-write 8, run-list 5 |
