# Contributing

## Repository contract

- `src/` is the implementation source of truth.
- `dist/` is generated, ignored deployment output. Do not hand-edit or commit it.
- Legal propositions, rule logic, effective dates, and calculations require source lineage and attorney review.
- Illustrative prototype data must remain clearly distinguishable from verified production facts.
- No customer data, employee information, privileged work product, or credentials may enter this public repository.

## Required workflow

1. Create a focused branch.
2. Explain the problem, intended outcome, affected routes/objects, legal or data implications, and validation evidence.
3. Run:

```bash
npm ci --ignore-scripts
npm run verify
npm run verify:pages
npx playwright install chromium
npm run test:browser
```

4. Open a pull request using the repository template.
5. Resolve review comments and required checks before merge.

## Legal-content changes

A legal-content or rule change must identify:

- authority and exact source version;
- jurisdiction and effective period;
- changed proposition or branch;
- affected pages, rules, tools, tests, and downstream objects;
- reviewed date and reviewing attorney;
- unresolved ambiguity or factual dependency.

Do not silently resolve uncertain law in code or copy.

## Interface changes

Preserve semantic HTML, keyboard access, visible focus, reduced-motion support, readable contrast, responsive layouts, and explicit loading, empty, error, permission, and stale states.

## Commit and pull-request scope

Prefer reviewable commits with imperative messages. Do not mix unrelated legal, data, architecture, and visual changes unless the dependency is explained.
