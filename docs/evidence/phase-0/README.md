# Phase 0 retained evidence

Captured July 13, 2026 for Issue [#11](https://github.com/karadzhyan/hotel-wage-law-v2/issues/11). This record distinguishes observed evidence from pending verification.

## Pre-change local verification

Commands were run on unchanged `main` at `6e28b524a7b0df881981cc1046caa6225b37a768`:

```text
npm ci
  passed

npm run verify
  failed: 14 tests passed, 3 failed
  - jurisdiction tier fixture expected strings although records contain numbers
  - src/main.js lacked deploymentBase project-path handling
  - src/main.js lacked normalized tier comparison
```

This failure reproduces the latest remote CI failure and is retained as the before-state. It is not a passing baseline.

## Pre-change remote verification

| Surface | Evidence | Observed result |
| --- | --- | --- |
| CI | [run 29296844721](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29296844721), job `86972661934` | Failed; the same three tests failed and fourteen passed. |
| Pages workflow | [run 29296844059](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29296844059) | Failed before job creation because workflow-level `environment` is invalid. |
| Pages URL | `https://karadzhyan.github.io/hotel-wage-law-v2/` | HTTP 404 when inspected. |
| Pages API | `GET /repos/karadzhyan/hotel-wage-law-v2/pages` | HTTP 404 when inspected without authentication. |
| Deployments API | repository deployments collection | No deployments returned when inspected. |

## Defect-to-regression mapping

| Defect | Repair | Retained verification |
| --- | --- | --- |
| Numeric tier records were tested and compared inconsistently. | Tests assert numeric tiers; UI comparison normalizes the record value. | Unit fixture, source-regression test, browser Tier 4 filter test. |
| Root-relative links escaped the Pages project base. | Runtime links are rewritten against the generated `<base>` project path. | Source-regression test, generated route check, direct-route and clicked-navigation browser tests. |
| Pages workflow was syntactically invalid. | `environment` and deploy permissions are scoped to the deploy job. | Structural workflow check and remote run required. |
| Selecting a non-Los Angeles change retained Los Angeles authority, effective date, and property facts. | Queue records without modeled detail disclose unresolved state and hide the Los Angeles property table. | Browser change-selection regression. |
| Mobile navigation controls lacked complete accessible state/name behavior. | Controls expose names, relationships, expanded state, keyboard close, and focus restoration. | Public and enterprise mobile browser regressions. |
| Generated routes and assets had no complete project-path contract. | Build manifest and verifier enumerate all routes and assets; 404 is non-interactive. | Root/Pages build verification and all-route browser smoke. |

## One-time workflow disposition

The following tracked workflows were inspected in full together with their historical runs and trigger markers. Each existed solely to mutate release branches, create/merge a release PR, delete temporary branches, or remove its own marker-driven machinery. None was continuing validation or Pages deployment automation.

| Removed workflow | Marker / purpose | Live run evidence |
| --- | --- | --- |
| `final-branch-cleanup.yml` | `.release/DELETE_BRANCHES`; delete temporary release branches and itself | [run 29295746021](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29295746021), failed |
| `fix-pages-routing.yml` | `.release/FIX_ROUTING`; one-time release routing mutation | [run 29295838297](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29295838297), failed |
| `merge-release.yml` | `.release/MERGE`; one-time PR merge operation | [run 29295497374](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29295497374), failed |
| `normalize-release.yml` | `.release/NORMALIZE`; normalize release branch state | [run 29295440010](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29295440010), failed |
| `post-release-cleanup.yml` | `.release/FINALIZE`; finalize and remove release scaffolding | [run 29295678305](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29295678305), failed |

The continuing `ci.yml` and `pages.yml` workflows were retained and repaired.

## Post-change verification contract

The following local contract passed after the final repair on July 13, 2026:

```text
npm ci --ignore-scripts --no-audit --no-fund
npm run verify
  17/17 tests passed; structural checks passed; 12 root routes and 9 assets verified
npm run verify:pages
  12 project-path routes and 9 assets verified
npm run test:browser
  32/32 Chromium tests passed, including 12-route serious/critical axe smoke
git diff --check
  passed
```

Review screenshots:

- [Open public mobile navigation](screenshots/mobile-navigation.png)
- [Unmodeled queue record with stale Los Angeles detail removed](screenshots/unmodeled-change-detail.png)

These local results are not remote CI or deployment evidence.

Pending remote evidence:

- Phase 0 pull request and head commit.
- CI Verify and Browser job URLs and artifact names.
- Pages Validate and Deploy job URLs and artifact/deployment identifiers.
- Live project URL returning the deployed artifact, including a direct deep link.
- Issue #11 evidence comment.

Automated axe results are smoke-test evidence only. No manual accessibility audit, legal review, security review, privacy review, production-readiness review, or final deployment approval is represented by this file.
