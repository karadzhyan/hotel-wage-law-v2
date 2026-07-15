# Hotel Wage Law v2

Hotel Wage Law v2 is a production-fidelity front-end prototype and systems specification for a hospitality wage-and-hour intelligence and control plane.

The prototype connects its shared product model across twelve public and enterprise surfaces:

`Source → Rule → Change → Applicability → Matter → Finding → Control → Evidence → Decision → Revalidation`

## Verification

The application has zero runtime dependencies. Development dependencies are limited to browser and automated accessibility smoke testing.

```bash
npm ci --ignore-scripts
npm run verify
npm run verify:pages
npx playwright install chromium
npm run test:browser
```

`npm run verify` tests the data and render contracts, runs repository structural checks, creates the root-path static build, and verifies every generated route and asset. `npm run verify:pages` repeats the generated-output checks for `/hotel-wage-law-v2/`. Browser tests exercise all routes, project-path navigation, mobile navigation, core interactions, and automated axe smoke checks.

See [PROJECT.md](PROJECT.md) for the architecture and production boundary and [docs/CURRENT-STATE.md](docs/CURRENT-STATE.md) for the repository, CI, Pages, legal-review, security, and accessibility evidence state.

## Hosting

Vercel is the intended production hosting platform. The checked-in [`vercel.json`](vercel.json) requires deterministic installation, the full `npm run verify` gate, publication from the verified `dist/` directory only, and the registered trailing-slash route contract. GitHub Pages remains deployed as a fallback until the Vercel production deployment and `hospitalitywagelaw.com` are independently verified.

## Boundary

This repository is a public prototype, not a production legal application. All enterprise identities, properties, people, scores, ranges, and workflow states are synthetic and illustrative. Substantive legal content and calculations require source-level validation and attorney review before production use. No customer data, employee data, privileged material, credentials, secrets, or private environment configuration may be added; the public hosting configuration contains no credential.
