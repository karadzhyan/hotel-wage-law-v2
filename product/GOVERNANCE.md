# Legal, Editorial, and Product Governance

## Objective

The platform must produce useful legal intelligence without obscuring authority, uncertainty, judgment, or accountability. Governance is part of the product architecture—not a final editorial review.

## Roles

### Source steward
Owns source acquisition, artifact retention, metadata, hashing, supersession, and passage boundaries.

### Rule author
Translates authority into normalized coverage, obligation, exception, calculation, remedy, and dependency specifications.

### Reviewing attorney
Approves legal propositions, interpretation notes, ambiguity treatment, test fixtures, and publication state.

### Fact steward
Owns enterprise fact provenance, effective period, freshness, reconciliation, and correction.

### Matter owner
Owns scope, fact resolution, findings, recommendations, actions, privilege, and decision readiness.

### Control owner
Owns design, operation, evidence, exceptions, remediation, and retesting.

### Decision owner
Approves or rejects the recommendation and conditions while preserving the exact provenance snapshot.

## State models

### Source
`discovered → captured → verified → current → superseded → withdrawn`

### Rule
`draft → technical review → legal review → approved → effective → superseded`

### Finding
`draft → fact review → legal review → approved → invalidated → revalidated`

### Evidence
`requested → received → validated → accepted → expired/rejected`

### Decision
`draft → functional validation → legal approval → executive approval → effective → invalidated → superseded`

## Publication contract

No substantive public proposition should publish without:

- identified authority and source version;
- jurisdiction and effective period;
- direct answer and stated scope;
- approved interpretation where authority is not self-executing;
- disclosed uncertainty and material gaps;
- reviewed date and responsible reviewer;
- downstream dependency registration.

No calculation should publish without:

- defined inputs and units;
- rule and source versions;
- branch trace;
- worked examples and boundary fixtures;
- assumptions and unsupported branches;
- legal and technical approval;
- version and change history.

## Change control

Every source or rule change must classify its downstream effect:

- no substantive effect;
- editorial clarification;
- prospective rule change;
- retroactive interpretation change;
- calculation change;
- coverage change;
- remedy change;
- unresolved conflict.

The dependency service should invalidate affected objects automatically. Human owners restore approval only after completing the required revalidation.

## Prototype boundary

Prototype data, scores, properties, people, financial ranges, and workflow states must remain clearly labeled as illustrative. The repository must not contain customer information, confidential legal work, or production credentials.

## Release evidence

Each production release should retain:

- approved source and rule manifest;
- migration and schema versions;
- deterministic and browser-test results;
- accessibility review;
- security and privacy review;
- content staleness report;
- unresolved-risk register;
- rollback plan;
- approving owners.
