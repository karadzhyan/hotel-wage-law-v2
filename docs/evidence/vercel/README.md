# Vercel hosting evidence

Evidence reviewed and updated: July 14, 2026.

## Scope and boundary

This record covers hosting configuration and deployment verification for the static, synthetic-data Hotel Wage Law v2 prototype. It does not claim legal review, security approval, privacy approval, WCAG conformance, or production readiness. GitHub Pages remains the fallback and is not removed by this workstream.

## Pre-change account and domain state

- CLI: official Vercel CLI `56.2.0`; authenticated user `karadzhyan`.
- Team: `karadzhyans-projects`; owner access confirmed.
- Target: a new isolated `hotel-wage-law-v2` project, because the similarly named `hotel-wage-law` and `hotel-wage-hour` projects are connected to older repositories.
- Legacy assignment: `hospitalitywagelaw.com` and `www.hospitalitywagelaw.com` were attached to `hotel-wage-hour` before this workstream.
- DNS provider and registrar: Squarespace. Authoritative nameservers are `nsd1.squarespacedns.com` through `nsd4.squarespacedns.com`.
- DNS snapshot: apex A `216.198.79.1`; `www` CNAME `7ebfbdc73be75cd1.vercel-dns-017.com`.
- HTTP snapshot: apex redirected once to `https://www.hospitalitywagelaw.com/`, which returned HTTP 200 and served the legacy Hotel Wage & Hour site.
- Fallback: post-merge GitHub Pages run `29394911088`, deploy job `87286274382`, succeeded; all twelve registered fallback routes returned HTTP 200 and rendered without browser or request errors.

## Repository deployment contract

`vercel.json` requires:

- `npm ci --ignore-scripts --no-audit --no-fund`;
- the complete `npm run verify` contract before publishing;
- `dist/` as the only output directory; and
- trailing-slash routing matching the twelve-route registry.

The local `.vercel/` project link and `.env.local` authentication material are ignored and must never be committed. The checked-in `.vercelignore` also excludes credentials, local generated output, dependency trees, and browser reports from the cloud-build upload. A Vercel dry run confirmed that `.env.local`, `.vercel/`, `dist/`, `node_modules/`, `playwright-report/`, and `test-results/` were excluded.

## Preview evidence

- Project: `karadzhyans-projects/hotel-wage-law-v2`, ID `prj_kr2LMCqj65WIAHVfCVofa2yIDOBX`.
- Local Vercel build: Vercel CLI `56.2.0` pulled the linked preview settings, ran the checked-in install and `npm run verify` commands, and completed with output at `.vercel/output`.
- Review-candidate preview deployment: `dpl_B3mG9ScEUJQanqmYfoYriwPJzVF4`, `https://hotel-wage-law-v2-jwehk2ylm-karadzhyans-projects.vercel.app`, state `READY`.
- Manifest verification: the deployed `build-manifest.json` returned HTTP 200 and exactly matched the locally verified twelve-route and nine-asset registries.
- HTTP verification: every registered route and asset returned a non-empty HTTP 200 response. This includes the root and `/app/changes/` deep link.
- Browser verification: all 33 Playwright tests passed against the deployed root-path preview. Those tests rendered all twelve routes, exercised navigation and core interactions, checked the non-interactive 404, and reported no serious or critical axe findings on the twelve registered routes.
- Protection state: anonymous preview access redirected to Vercel login under the team's existing Vercel Authentication policy. Verification used Vercel's automation-bypass path and the documented toolbar-suppression header for end-to-end tests, without disabling or weakening preview protection. No bypass value is stored in the repository or this evidence record.

The first CLI deployment to the otherwise empty isolated project was assigned production target `dpl_J8pNoHAmhYoNuZL2w9gFD59Hv21G` and the generated alias `https://hotel-wage-law-v2.vercel.app`. It was not attached to either hospitality custom domain. A fresh production deployment from the merged repository configuration remains required after this preview evidence and GitHub review pass.

## Production and custom-domain evidence

Pending merge of the reviewed repository configuration, a fresh production deployment, same-team domain reassignment, and independent verification. If Vercel reports a DNS mismatch after reassignment, the exact Squarespace DNS change will be recorded here and in Issue #10 before any registrar-side handoff.
