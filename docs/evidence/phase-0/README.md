# Phase 0 retained evidence

Captured July 13–14, 2026 for Issue [#11](https://github.com/karadzhyan/hotel-wage-law-v2/issues/11). This record distinguishes observed evidence from unsupported conclusions.

## Pre-change local verification

Commands were run on unchanged `main` at `6e28b524dcc77d9cd0ad098ee9f60f8c4641dcf2`:

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

## Post-change remote verification

GitHub evaluated evidence head `9ac515d752cdc9cc6edbe5e1677889379b52e083` in draft PR [#12](https://github.com/karadzhyan/hotel-wage-law-v2/pull/12):

| Surface | Evidence | Observed result |
| --- | --- | --- |
| CI | [run 29374016730](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29374016730) | Successful. Verify job `87223479762` and Browser/accessibility job `87223529500` both completed successfully; the browser job reported 32/32 tests passed. |
| Dist artifact | [artifact 8327173367](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29374016730/artifacts/8327173367) | `hotel-wage-law-v2-dist`, 46,674 bytes, SHA-256 `8b8a190312b563cab2f9d4002d239e018d2e11cfc6667723222dc6a0f62bfc54`, retained through July 28, 2026. |
| Browser artifact | [artifact 8327193497](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29374016730/artifacts/8327193497) | `playwright-report`, 236,071 bytes, SHA-256 `a35dd942d4aa85cc14a6342c044dcd68a20d1507f76b83fe4037d60fc141887d`, retained through July 28, 2026. |
| Pages PR validation | [run 29374016777](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29374016777), job `87223479859` | Successful deterministic install, project-path build, Chromium suite, and Pages artifact upload. Its deploy job was skipped as designed for the pull-request event. |
| Pages PR artifact | artifact `8327187680` in [run 29374016777](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29374016777) | `github-pages`, 38,694 bytes, SHA-256 `95b4b7711771c22e9926a074caf15eb71a9a0e87dc46106609ae080c5db2f545`, retained through July 15, 2026. |
| Pages deployment attempt 1 | [run 29375868588](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29375868588), job `87229271901`, deployment `5449251334` | Failed before steps because the `github-pages` environment allowed only `main`; GitHub annotated that the feature branch did not satisfy the environment protection rule. |
| Pages deployment attempt 2 | [same run, attempt 2](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29375868588), [job 87229859990](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29375868588/job/87229859990), deployment `5449284201`, status `15491107818` | Successful after the owner added the exact feature branch to the environment. GitHub recorded deployment state `success` and environment URL `https://karadzhyan.github.io/hotel-wage-law-v2/`. |
| Deployed Pages artifact | [artifact 8327853647](https://github.com/karadzhyan/hotel-wage-law-v2/actions/runs/29375868588/artifacts/8327853647) | `github-pages`, 38,694 bytes, SHA-256 `857d3ef9d9d0d60b0fb81b871a47ef9810a04e7de2f4c85d37ecf368308c4b7c`, retained through July 15, 2026. |

## Live Pages verification

After GitHub recorded the successful deployment on July 14, 2026, independent HTTPS checks observed:

- HTTP 200 for all twelve registered routes: `/`, `/intelligence/`, `/jurisdictions/`, `/tools/`, `/methodology/`, `/app/`, `/app/changes/`, `/app/matters/`, `/app/controls/`, `/app/research/`, `/app/decisions/`, and `/app/properties/` under `https://karadzhyan.github.io/hotel-wage-law-v2`.
- HTTP 200 for all nine generated assets: `favicon.svg`, `icons.svg`, `layout.css`, `data.js`, `main.js`, `pages-public.js`, `lib.js`, `styles.css`, and `pages-app.js`.
- A headless Chromium navigation of every registered live route returned HTTP 200, rendered visible `main#main` and `h1` elements, and produced no console errors, page errors, failed requests, or HTTP responses of 400 or greater for project-path resources.

Repository owner settings observed at final handoff were Pages source `GitHub Actions`; broad default `GITHUB_TOKEN` read/write permissions; Actions permission to create and approve pull requests; and no branch or tag restriction on the `github-pages` environment. The exact feature branch was temporarily added to the earlier selected-branches policy to unblock the retained deployment before the owner broadened the environment to no restriction. These settings are owner-controlled evidence, not repository-file guarantees, and remain tracked in Issue #10.

Automated axe results are smoke-test evidence only. No manual accessibility audit, legal review, security review, privacy review, production-readiness review, or final deployment approval is represented by this file.
