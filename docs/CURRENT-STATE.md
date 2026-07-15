# Current state

Evidence reviewed and updated: July 14, 2026. This document describes the merged Phase 0 baseline and the current hosting workstream. It does not certify production readiness.

## Phase 0 boundary

Phase 0 reconciles repository truth, repairs CI and GitHub Pages automation, verifies the existing twelve-route prototype under its project base path, and retains evidence. It does not migrate the legacy corpus, implement authoritative legal rules, or begin any Phase 1 deliverable.

The implementation source of truth is `src/`. `dist/` is generated and ignored. The public repository contains an illustrative, static prototype with synthetic enterprise names, people, properties, scores, ranges, and workflow states. It has no backend, identity boundary, tenant isolation, persistence, production configuration, or authorized private-data path.

## Repository and implementation inventory

- Repository: `karadzhyan/hotel-wage-law-v2`; default branch `main` at Phase 0 merge commit `1f296fe5adeedc67844f64a4dcdc3176661baca8`.
- Phase 0 branch: `agent/repair-phase-0-ci-pages`, created from `main` commit `6e28b524dcc77d9cd0ad098ee9f60f8c4641dcf2` and merged through PR [#12](https://github.com/karadzhyan/hotel-wage-law-v2/pull/12).
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

The exact captured failure signatures, one-time workflow dispositions, verification commands, artifact identifiers, deployment identifiers, and live-route checks are retained in [`docs/evidence/phase-0/README.md`](evidence/phase-0/README.md).

Final PR head `475d16886e902060fa733823c1a29c916a5d8221` passed [CI run 29394429007](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29394429007) and [Pages validation run 29394428968](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29394428968). All six actionable review threads were resolved, and the fresh final-head review reported no major issue. PR #12 merged as `1f296fe5adeedc67844f64a4dcdc3176661baca8`; post-merge [CI run 29394911196](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29394911196) and [Pages run 29394911088](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29394911088), including its deploy job, succeeded.

The owner configured Pages source `GitHub Actions` and added the feature branch to the `github-pages` environment. The first deploy attempt in [Pages run 29375868588](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29375868588) was rejected by the prior `main`-only environment rule. Attempt 2 succeeded in deploy job `87229859990`; GitHub deployment `5449284201` recorded success for `https://karadzhyan.github.io/hotel-wage-law-v2/`. Independent HTTPS checks observed HTTP 200 for all twelve routes and nine assets, and headless Chromium rendered every registered live route without a console, page, request, or project-resource HTTP error.

After the Phase 0 merge, the main-branch Pages deploy job `87286274382` succeeded. Independent checks again observed HTTP 200 at the fallback root and `/app/changes/`, and Chromium rendered all twelve registered routes without browser or request errors.

## Workflow state

Two continuing workflows remain:

- `CI` runs deterministic installation, unit/render/routing tests, structural checks, root and Pages-path generated-output checks, browser interaction smoke tests, automated accessibility smoke tests, and uploads build and browser evidence.
- `Pages` validates the Pages-path artifact with the same route, browser, and accessibility contract; uploads the Pages artifact; and deploys only for non-PR events using job-scoped `pages: write` and `id-token: write` permissions.

Both workflow files declare least-privilege permissions, explicit timeouts, concurrency control, deterministic installs, and pinned major action versions. The owner separately selected broad repository-level default workflow permissions, allowed Actions to create and approve pull requests, and removed branch/tag restrictions from the `github-pages` environment; those owner settings are broader than the file-level defaults and remain tracked in Issue #10. Five marker-driven release workflows and their `.release` trigger files were removed because live history and their full contents showed that they were one-time, self-mutating release scaffolding—not continuing CI or deployment automation. Their evidence is retained in the Phase 0 evidence record.

## Hosting platform state

Vercel is the intended production hosting platform; GitHub Pages remains the verified fallback. The Vercel account audit found an authenticated owner account and the team `karadzhyans-projects`. The legacy `hotel-wage-hour` Vercel project remains connected to the reference repository and initially owns `hospitalitywagelaw.com` and `www.hospitalitywagelaw.com`. The new isolated `hotel-wage-law-v2` project is the only intended target for this repository.

The public `vercel.json` requires deterministic installation, `npm run verify` as the build gate, `dist/` as the only output directory, and trailing-slash routing. It contains no credential or private environment value. DNS remains hosted at Squarespace; before reassignment, the apex resolves to Vercel and redirects to `www`, whose CNAME also resolves to Vercel.

The review-candidate protected preview deployment `dpl_B3mG9ScEUJQanqmYfoYriwPJzVF4` reached `READY`. Its deployed manifest matched the local twelve-route and nine-asset registries; every registered route and asset returned a non-empty HTTP 200 response; and all 33 remote Playwright tests passed, including the existing interaction coverage and serious/critical axe smoke. This is deployment and automated-test evidence only, not an accessibility-conformance or readiness claim. Preview and production evidence is retained in [`docs/evidence/vercel/README.md`](evidence/vercel/README.md) and Issue #10.

## Owner-setting dependencies

Repository visibility and every owner-level control in Issue #10 require separate live-setting evidence. Phase 0 does not infer branch protection, rulesets, Actions defaults, environment protection, security features, collaborator access, installed apps, or private visibility from repository files.

GitHub Pages is configured to use GitHub Actions. The `github-pages` environment currently has no branch or tag restriction. Repository-level Actions defaults are broad read/write and Actions may create and approve pull requests. Any later tightening or other setting change remains an owner decision to be recorded with old/new state, timestamp, and live evidence in Issue #10.

## Legal, security, privacy, and accessibility state

- Legal/content: no authoritative source, normalized rule, effective-period, legal approval, or counsel judgment was added in Phase 0. Existing content remains illustrative and requires source-level and attorney review before reliance.
- Security: workflow permissions and synthetic-data boundaries receive structural checks. No comprehensive threat model, SAST, secret scan, dependency review, authorization test, or security review has been completed or claimed.
- Privacy: the repository is public and restricted to synthetic prototype data. No production or privileged data is authorized. No privacy assessment is complete.
- Accessibility: semantic labels, keyboard-close behavior, focus restoration, visible focus, reduced-motion handling, responsive navigation, and automated axe smoke tests are covered by Phase 0 regression tests. This is not a WCAG 2.2 AA audit and does not replace manual keyboard, zoom, reflow, contrast-mode, or assistive-technology testing.
- Deployment and production: the merged baseline has successful main-branch CI and a successful GitHub Pages fallback deployment with live-route evidence. Vercel is the intended production host, but a Vercel deployment proves only that the static prototype is reachable; it does not establish legal approval, security approval, privacy approval, accessibility conformance, or readiness to rely on the prototype content.

## Known residual work

- Merge the reviewed Vercel repository configuration, connect the isolated project to `karadzhyan/hotel-wage-law-v2`, then verify a fresh production deployment and both custom-domain forms without removing the GitHub Pages fallback.
- Review and decide the remaining owner-level settings in Issue #10.
- Do not treat hosting deployment as legal, security, privacy, accessibility, or production-readiness approval.
- Do not begin the Issue #2 migration inventory as part of this hosting workstream.
