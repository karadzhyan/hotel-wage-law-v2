# Hotel Wage Law v2

Hotel Wage Law v2 is a production-fidelity front-end prototype and systems specification for a hospitality wage-and-hour intelligence and control plane.

The product thesis is simple: a legal development should not be summarized in one system, analyzed in another, assigned by email, briefed in slides, and proven in a shared drive. One governed record should carry the authority, effective date, property applicability, enterprise facts, analysis, judgment, accountable response, decision, and operating evidence.

## Product model

```text
Source
  ↓
Rule
  ↓
Change
  ↓
Applicability
  ↓
Matter
  ↓
Finding
  ↓
Control
  ↓
Evidence
  ↓
Decision
  ↓
Revalidation
```

The repository implements twelve responsive prototype surfaces:

### Public authority plane

1. Platform
2. Intelligence
3. Jurisdictions
4. Tools
5. Evidence standard

### Enterprise control plane

6. Portfolio command
7. Change intelligence
8. Governed matter
9. Control assurance
10. Grounded research
11. Executive decision record
12. Property intelligence

## Current implementation

- Zero runtime dependencies
- Semantic HTML generated from JavaScript render functions
- Shared design tokens, SVG icon system, and responsive interface components
- Deterministic route, data, rendering, governance, and boundary tests
- Static production build under `dist/`
- GitHub Actions CI
- GitHub Pages deployment workflow
- Explicit prototype and legal-validation boundaries

## Commands

```bash
npm install --ignore-scripts
npm test
npm run check
npm run build
npm run verify
```

To reproduce the GitHub Pages base path locally:

```bash
BASE_PATH=/hotel-wage-law-v2/ npm run build
```

Serve the generated directory with any static server:

```bash
python3 -m http.server 8080 --directory dist
```

## Architecture

```text
src/
  data.js           Canonical prototype records and route registry
  lib.js            Shared rendering, shell, and component primitives
  pages-public.js   Public authority-plane surfaces
  pages-app.js      Enterprise control-plane surfaces
  main.js           Route bootstrap and accessible interactions
  styles.css        Tokens and shared components
  layout.css        Public, enterprise, and responsive layouts
  icons.svg         Shared inline SVG symbol library
scripts/
  build.mjs         Deterministic static build
  check.mjs         Structural, data, and repository checks
test/
  platform.test.mjs Product, rendering, governance, and boundary tests
product/
  Architecture, governance, security, and roadmap specifications
```

## Production boundary

This repository is not represented as a finished legal application. Production implementation still requires:

- Canonical source acquisition, immutable version retention, and passage-level citation registry
- Attorney-approved rule specifications and legal-content governance
- Validated applicability and calculation engines with fixture libraries
- Authentication, tenant isolation, privilege, and object-level authorization
- Property, payroll, HRIS, timekeeping, benefit, and scheduling integrations
- Persistent matters, approvals, evidence, audit history, and legal holds
- Dependency-aware invalidation and revalidation orchestration
- Security, privacy, accessibility, observability, and resilience review

All enterprise names, people, properties, scores, financial ranges, and workflow states in the prototype are illustrative. Public legal content and calculations must be validated before production use.

## Relationship to the existing repository

`karadzhyan/hotel-wage-hour` remains the reference corpus and verified static-site implementation. Migration into v2 should be controlled rather than copied wholesale. The v2 data and rule model must become canonical before substantive content and calculator logic are migrated, so facts are fixed once and propagated consistently across public and enterprise experiences.

See `product/ARCHITECTURE.md`, `product/GOVERNANCE.md`, `product/SECURITY.md`, and `product/ROADMAP.md` for the production plan.
