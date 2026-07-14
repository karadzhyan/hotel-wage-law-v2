# Production Architecture

## Governing principle

Hotel Wage Law v2 should be implemented as a governed legal-intelligence graph with permissioned projections—not as a publishing site plus a separate application.

```text
SourceVersion → RuleVersion → Change → ApplicabilityEvaluation
                                      ↓
PropertyFactSnapshot → Matter → Finding → Action
                              ↓         ↓
                           Decision   Control → Evidence → Test → Exception
                              ↓
                         Revalidation
```

Every material object is versioned, effective dated, attributable, permission scoped, and auditable.

## Bounded capabilities

### 1. Authority registry

Owns source identity, publisher, authority type, publication and effective dates, jurisdiction, retrieved artifact, content hash, supersession, passage boundaries, and validation state.

It must preserve the exact source version used by downstream analysis. A mutable URL is not sufficient evidence.

### 2. Rule and interpretation service

Owns normalized obligations, coverage predicates, exceptions, calculations, remedies, interpretation notes, counsel approval, tests, and effective periods.

Deterministic propositions must remain distinguishable from counsel judgment. Ambiguity must be modeled as an explicit interpretation state rather than silently resolved in code.

### 3. Portfolio fact service

Owns entities, properties, addresses, locality hierarchy, room counts, hotel classifications, ownership and operator relationships, workforce segments, pay architecture, benefit arrangements, systems, policies, provenance, confidence, and freshness.

Every fact used in applicability or calculation must resolve to a source, collection time, steward, and effective period.

### 4. Applicability and calculation engine

Evaluates rule versions against effective-dated facts. Outputs include branch trace, satisfied and failed predicates, unresolved facts, calculations, assumptions, limitations, and rule/source dependencies.

A result without its branch trace and version set is not a governed result.

### 5. Change-intelligence service

Transforms new or revised authority into a normalized legal delta, materiality assessment, likely portfolio reach, revalidation candidates, and accountable triage workflow.

### 6. Matter and workflow service

Provides the continuity object for legal response: scope, legal question, fact record, analysis, scenarios, findings, actions, owners, deadlines, approvals, privilege classification, and immutable history.

### 7. Control and assurance service

Separates obligation, policy, control design, implementation, operation, test, accepted evidence, exception, remediation, and retest.

A written policy is not evidence that a control operated. A configured system is not evidence that the configuration reached the correct population.

### 8. Evidence service

Stores immutable evidence artifacts and metadata: source, period, population, collector, hash, retention classification, privilege, acceptance state, reviewer, and object links.

### 9. Decision-record service

Renders a versioned executive artifact from the governed matter. It preserves the decision requested, recommendation, alternatives, conditions, consequences, owners, approval chain, provenance snapshot, and revalidation triggers.

### 10. Search and grounded-assistance service

Retrieves only from permitted public and tenant-scoped objects. Every answer should expose scope, source set, fact snapshot, effective date, proposition lineage, uncertainty, and downstream matter actions.

### 11. Identity, policy, and audit plane

Enforces tenant isolation, SSO, role and attribute policies, object and field permissions, privilege boundaries, purpose limitation, export controls, audit events, retention, and legal holds.

## Event model

Production services should emit idempotent events such as:

```text
source.version.created
source.version.superseded
rule.version.approved
property.fact.changed
applicability.completed
finding.approved
control.exception.opened
evidence.accepted
evidence.expired
decision.approved
decision.invalidated
revalidation.completed
```

A dependency graph should answer: “Which findings, controls, tools, public pages, and approved decisions relied on this changed source, rule, fact, or model?”

## Public and private planes

The public authority plane and enterprise control plane should share approved authority and rule objects while remaining separated by identity, authorization, storage, caching, telemetry, and deployment controls.

Public pages must never infer or expose tenant facts. Enterprise answers may combine public authority with permitted private context only after authorization is resolved.

## Recommended implementation sequence

1. Authority registry and source-version schema
2. Rule specification and fixture framework
3. Public corpus migration with URL parity
4. Identity, tenant, privilege, and audit foundations
5. Property facts and applicability pilot
6. Governed matters and decision records
7. Controls, evidence, and assurance
8. Grounded assistance and dependency-aware revalidation
9. Production hardening and release governance
