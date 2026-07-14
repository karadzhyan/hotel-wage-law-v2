# Codex Execution Plan

This document converts the Hotel Wage Law v2 roadmap into an issue-driven Codex program. `AGENTS.md` is mandatory for every run. Each workstream gets its own branch, pull request, CI evidence, issue comment, and acceptance decision.

## One-line task launcher

For any workstream, use:

> Read `AGENTS.md`, `docs/CODEX-EXECUTION-PLAN.md`, the governing issue, all linked product specifications, and every directly relevant file in both `karadzhyan/hotel-wage-law-v2` and `karadzhyan/hotel-wage-hour`. Execute the governing issue completely. Do not stop at recommendations. Implement, test, document, push a feature branch, open a pull request, inspect remote CI, remediate failures, and comment on the issue with retained evidence. Do not close the issue unless every acceptance criterion is actually proven.

## Phase 0 — Repository truth and verified baseline

**Tracking:** Issue #10 for owner-level settings; create a separate implementation issue if the baseline work exceeds Issue #10’s scope.

Required outcome:

- Audit every tracked file, current branches, history, PR #1, open issues, workflows, generated output, Pages deployment, and documentation claim.
- Reconcile stale or contradictory repository statements.
- Remove one-time release artifacts and dead automation.
- Create an accurate `docs/CURRENT-STATE.md`.
- Expand CI to cover deterministic install, tests, structural checks, Pages-path builds, generated-route checks, browser smoke tests, accessibility smoke tests, artifacts, least-privilege permissions, timeouts, and concurrency.
- Verify all routes and interactions under the GitHub Pages project base path.
- Add regression tests for every defect found.

Suggested PR: `Reconcile repository truth and establish verified v2 baseline`.

## Phase 1 — Issue #2: Reference-repository migration inventory

Audit the complete legacy repository and create a machine-readable migration ledger. Inventory every route, authored fragment, generated page, template, dataset, source, reviewed date, issue brief, state guide, ordinance, rate, case, glossary term, FAQ, development, calendar item, calculator, audit module, fixture, test, research memorandum, feed, sitemap, redirect, metadata field, structured-data output, build assumption, print behavior, accessibility assumption, and deployment assumption.

Required deliverables:

- `migration/artifact-ledger.json`
- `migration/route-parity.json`
- `migration/redirect-map.json`
- `migration/data-ownership.json`
- `migration/tool-inventory.json`
- `migration/source-of-truth-conflicts.json`
- `migration/research-memo-index.json`
- `migration/MIGRATION-PLAN.md`
- `migration/RISKS-AND-DECISIONS.md`

Every artifact must have a stable ID, legacy path/route, family, substantive source, generated/authored status, dependencies, downstream outputs, dates, v2 destination, disposition, parity requirements, review requirement, risk, owner, and status. Add tests that fail for unledgered routes or artifacts, missing redirect dispositions, unaccounted tools or research, duplicate canonical ownership, and incomplete records.

Suggested PR: `Build authoritative legacy-to-v2 migration ledger`.

## Phase 2 — Issue #3: Canonical authority and rule registry

Implement versioned governed objects for source, source version, immutable artifact, passage, citation, jurisdiction, effective period, rule, rule version, predicate, obligation, exception, calculation, remedy, interpretation, ambiguity, review, approval, dependency, supersession, revalidation event, and audit event.

Requirements:

- Immutable source snapshots and hashes.
- Passage-level citations.
- Effective-dated inspectable rule representation.
- Explicit units, rounding, boundary, and temporal semantics.
- Deterministic logic separated from counsel judgment.
- Ambiguous, unsupported, and missing-fact states.
- Dependency traversal from source/rule changes to pages, tools, properties, findings, controls, evidence, and decisions.
- Draft, legal-review, approved, rejected, ambiguous, superseded, and revalidation-required states.

Pilot one bounded hospitality topic end-to-end, including source supersession and downstream revalidation. Do not label a legal rule attorney-approved without a real recorded approval.

Suggested PR: `Implement canonical authority and effective-dated rule registry`.

## Phase 3 — Issue #4: Public authority-plane migration

Migrate the complete verified public corpus as projections of canonical governed records—not duplicated prose files. Preserve or improve all issue briefs, 51 jurisdiction guides, hotel-ordinance records, developments, feed, methodology, glossary, cases, FAQ, calendar, public tool entry points, citations, reviewed dates, status, and disclosed gaps.

Implement canonical URLs, complete redirects, metadata, social cards, structured data, sitemap, robots directives, Atom/RSS, accessible search, print behavior, staleness reporting, revalidation flags, and route/content/citation parity reports. Automate route parity, redirect coverage, corpus counts, citation completeness, source-link integrity, semantic structure, duplicate-ID checks, metadata, structured data, search, feeds, sitemap, responsive behavior, keyboard behavior, and screenshot comparisons.

Suggested PR: `Migrate verified public authority corpus into v2`.

## Phase 4 — Issue #5: Deterministic tool extraction

For each of the ten tools, implement a versioned specification, typed inputs, units, effective date, jurisdiction, provenance, validation, rule/source dependencies, pure deterministic functions, explicit predicates, branch conditions, intermediate values, branch trace, outputs, assumptions, limitations, unsupported/ambiguous states, worked examples, boundary fixtures, legal/technical review states, reproducible serialization, save-to-property/matter contracts, and revalidation behavior.

Differentially test against the legacy implementation and classify every mismatch as v2 defect, legacy defect, changed source/rule, legal ambiguity, fixture defect, or unsupported comparison. Test date boundaries, equality thresholds, rounding, zero/negative values, missing/conflicting facts, invalid combinations, superseded rules, and jurisdiction transitions.

Suggested PR: `Extract ten governed wage-hour calculation engines`.

## Phase 5 — Issue #6: Identity, tenant, privilege, and audit foundations

Before accepting any non-public enterprise data, write ADRs for runtime architecture, public/private boundaries, identity provider, SSO, tenant isolation, persistence, policy enforcement, search isolation, audit logs, secrets, environment separation, evidence storage, sharing/export controls, retention/deletion, hosting, and deployment identity.

Implement synthetic-data-only tenant/user/service identities, RBAC/ABAC, object/field authorization, public/confidential/privileged/work-product classes, purpose limitation, export restrictions, entitlement revocation, tamper-evident audit events, separated search indexes, secret handling, encryption boundaries, environment configuration, retention, and legal holds.

Prove cross-tenant reads/writes/search/exports fail; privilege propagates; revoked users lose access; audit events are complete; public builds contain no private data or endpoints; IDOR, mass assignment, and policy bypass fail. Retain a threat model, privacy map, trust-boundary diagram, authorization matrix, audit-event catalog, and incident/entitlement procedures.

Suggested PR: `Establish enterprise identity, tenant, privilege, and audit plane`.

## Phase 6 — Issue #7: Property facts and applicability pilot

Using synthetic properties and one approved jurisdiction cluster, implement effective-dated entity, property, locality, room-count, classification, owner/operator/brand, workforce, pay, tip/service-charge, benefits, scheduling, timekeeping, payroll, system, and relevant exemption/CBA facts—with provenance, steward, confidence, freshness, and review status.

Evaluate approved rules against versioned fact snapshots with visible satisfied, failed, unresolved, and missing predicates; source/rule versions; effective dates; branch trace; and confidence. Demonstrate legal change → cohort evaluation → affected/unaffected/unresolved properties → fact reconciliation → automatic reevaluation → property passport update → downstream matter/review creation.

Suggested PR: `Implement effective-dated property applicability pilot`.

## Phase 7 — Issue #8: Governed matter, decision, control, and evidence lifecycle

Implement matters with scope, privilege, properties/populations, questions, facts, missing facts, analysis, scenarios, counsel judgment, findings, owners, actions, deadlines, approvals, and history. Implement versioned decision records, control assurance, immutable evidence metadata, hashes, provenance, retention, acceptance, access history, and legal holds.

Demonstrate one synthetic matter through change → applicability → matter → fact resolution → analysis → approved finding → executive decision → actions → control implementation → evidence → testing → exception/remediation → retest → closure. Generate the decision record from governed matter data. Demonstrate dependency-driven invalidation when a source, rule, fact, model, finding, control result, or evidence state changes.

Suggested PR: `Implement governed matter, decision, control, and evidence lifecycle`.

## Phase 8 — Issue #9: Production readiness

Execute and retain evidence for:

- WCAG 2.2 AA automated and manual protocols, keyboard/focus/zoom/reflow/reduced-motion/high-contrast/screen-reader review.
- Performance budgets, Core Web Vitals targets, repeatable measurements, and regression gates.
- Dependency/supply-chain review, SAST, secret scanning, authorization tests, threat-model review, abuse cases, and incident tabletop.
- Privacy, privilege, retention, deletion, export controls, and access review.
- Backups, restore test, continuity, failure modes, health checks, telemetry, alerting, SLOs, and runbooks.
- Approved source/rule manifest, fixture approval, staleness monitoring, revalidation queue, and ambiguity register.
- Immutable build manifest, SBOM, hashes, provenance, environment promotion, rollback, smoke tests, residual-risk register, and approval record.

Create durable release documents and a machine-readable evidence index. Do not label the system production-ready without real retained evidence and formal acceptance of residual risks.

Suggested PR: `Establish production release gates and retained evidence`.

## Phase 9 — Issue #10: GitHub owner settings and private visibility

Inspect and configure every available live repository setting: main ruleset, required PRs, CI checks, conversation resolution, force-push/deletion prevention, signed-commit decision, Actions token defaults, Pages via Actions, environment protection, Dependabot, private vulnerability reporting, secret scanning/push protection, code scanning, collaborators, app installations, and repository visibility.

Make the repository private before adding non-public implementation or data. Record old/new values, operations, timestamps, evidence links, intentional deferrals, and Pages effects in Issue #10. If an operation truly cannot be performed with the authenticated scope, provide the exact settings path and exact value—not vague instructions.

## Final adversarial release audit

After all workstream PRs are merged, independently audit both repositories. Verify migration parity, all ten tools, the complete dependency graph, tenant/privilege boundaries, source immutability, temporal evaluation, reproducibility, revalidation, evidence integrity, approvals, exports, search isolation, deep links, and deployment paths. Review every workflow, permission, dependency, setting, sentence, TODO, skipped test, ignored error, unresolved thread, disclosed gap, and accepted risk.

Classify P0–P3 findings, remediate every P0/P1, add regression tests, open precise residual issues, and create a final release PR with the audit report, parity result, source/rule manifest, security/accessibility results, residual-risk register, release/rollback manifest, and an explicit go/no-go recommendation.

## Codex launch order

Run Phase 0 first, then Issues #2 → #3. Issues #4 and #5 may proceed separately after the canonical registry exists. Complete Issue #6 before non-public enterprise facts. Then run #7 → #8 → #9. Handle #10 as early as practical, particularly private visibility and branch/security controls.