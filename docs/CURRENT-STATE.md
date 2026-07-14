# Current state

Evidence reviewed and updated: July 13, 2026. This document describes the Phase 0 branch state and the live repository evidence available at that time. It does not certify production readiness.

## Phase 0 boundary

Phase 0 reconciles repository truth, repairs CI and GitHub Pages automation, verifies the existing twelve-route prototype under its project base path, and retains evidence. It does not migrate the legacy corpus, implement authoritative legal rules, or begin any Phase 1 deliverable.

The implementation source of truth is `src/`. `dist/` is generated and ignored. The public repository contains an illustrative, static prototype with synthetic enterprise names, people, properties, scores, ranges, and workflow states. It has no backend, identity boundary, tenant isolation, persistence, production configuration, or authorized private-data path.

## Repository and implementation inventory

- Repository: `karadzhyan/hotel-wage-law-v2`; default branch `main`.
- Phase 0 branch: `agent/repair-phase-0-ci-pages`, created from `main` commit `6e28b524a7b0df881981cc1046caa6225b37a768`.
- Merged baseline: PR [#1](https://github.com/karadzhyan/hotel-wage-law-v2/pull/1), including its unresolved review threads.
- Governing baseline contract: Issue [#11](https://github.com/karadzhyan/hotel-wage-law-v2/issues/11). Owner-level settings remain tracked in Issue [#10](https://github.com/karadzhyan/hotel-wage-law-v2/issues/10).
- Route registry: twelve generated routes—five public routes and seven enterprise-prototype routes.
- Runtime: static HTML, CSS, SVG, and browser JavaScript; no runtime package dependencies.
- Generated deployment contract: `scripts/build.mjs` emits every registered route, nine assets, `.nojekyll`, a non-interactive `404.html`, and `build-manifest.json`.
- Reference corpus: sibling repository `karadzhyan/hotel-wage-hour`, inspected at local `main` commit `74fa16e`. It remains read-only during Phase 0 and has not been copied wholesale.

The repository preserves the intended product model:

`Source → Rule → Change → Applicability → Matter → Finding → Control → Evidence → Decision → Revalidation`

The current UI demonstrates that model, but its legal statements, calculations, findings, and workflow states are prototype content unless separately sourced and reviewed.

## Remote baseline evidence

The latest pre-repair CI run was [Actions run 29296844721](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29296844721), job `86972661934`. It failed three of seventeen tests: numeric jurisdiction tiers were asserted as strings; the client lacked Pages-base rewriting; and tier comparisons were not normalized.

The latest pre-repair Pages run was [Actions run 29296844059](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29296844059). It failed before creating a job because `environment` was placed at workflow root rather than on the deploy job. The expected project URL, `https://karadzhyan.github.io/hotel-wage-law-v2/`, returned HTTP 404, the public Pages API returned 404, and no deployment records were exposed. These facts mean that Pages was not remotely proven before this repair.

The exact captured failure signatures, one-time workflow dispositions, and verification commands are retained in [`docs/evidence/phase-0/README.md`](evidence/phase-0/README.md). Post-repair PR, CI, artifact, deployment, and site evidence must be added there and to Issue #11 only after GitHub reports the corresponding result.

## Workflow state

Two continuing workflows remain:

- `CI` runs deterministic installation, unit/render/routing tests, structural checks, root and Pages-path generated-output checks, browser interaction smoke tests, automated accessibility smoke tests, and uploads build and browser evidence.
- `Pages` validates the Pages-path artifact with the same route, browser, and accessibility contract; uploads the Pages artifact; and deploys only for non-PR events using job-scoped `pages: write` and `id-token: write` permissions.

Both workflows have least-privilege defaults, explicit timeouts, concurrency control, deterministic installs, and pinned major action versions. Five marker-driven release workflows and their `.release` trigger files were removed because live history and their full contents showed that they were one-time, self-mutating release scaffolding—not continuing CI or deployment automation. Their evidence is retained in the Phase 0 evidence record.

## Owner-setting dependencies

Repository visibility and every owner-level control in Issue #10 require separate live-setting evidence. Phase 0 does not infer branch protection, rulesets, Actions defaults, environment protection, security features, collaborator access, installed apps, or private visibility from repository files.

GitHub Pages must be configured to use GitHub Actions before deployment can succeed. The workflow can upload and deploy an artifact but cannot prove or silently create the required repository-level Pages setting with its normal `GITHUB_TOKEN`. Any setting changed during Phase 0 must be recorded with old/new state, timestamp, and live evidence in Issue #10.

## Legal, security, privacy, and accessibility state

- Legal/content: no authoritative source, normalized rule, effective-period, legal approval, or counsel judgment was added in Phase 0. Existing content remains illustrative and requires source-level and attorney review before reliance.
- Security: workflow permissions and synthetic-data boundaries receive structural checks. No comprehensive threat model, SAST, secret scan, dependency review, authorization test, or security review has been completed or claimed.
- Privacy: the repository is public and restricted to synthetic prototype data. No production or privileged data is authorized. No privacy assessment is complete.
- Accessibility: semantic labels, keyboard-close behavior, focus restoration, visible focus, reduced-motion handling, responsive navigation, and automated axe smoke tests are covered by Phase 0 regression tests. This is not a WCAG 2.2 AA audit and does not replace manual keyboard, zoom, reflow, contrast-mode, or assistive-technology testing.
- Deployment and production: a green local or remote build proves only the tested static artifact. Production readiness, legal approval, security approval, privacy approval, and deployment success require their own retained evidence.

## Known residual work

- Obtain and retain post-repair remote CI artifact evidence.
- Configure and verify the repository-level Pages source, then retain the successful deployment run and live HTTP evidence.
- Review and decide the remaining owner-level settings in Issue #10.
- Merge the Phase 0 PR only after the governing issue's required remote CI and deployment evidence are green.
- Do not begin the Issue #2 migration inventory until Phase 0 is merged and proven.
