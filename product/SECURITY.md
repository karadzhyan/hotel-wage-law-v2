# Security, Privacy, and Privilege Architecture

## Data classification

The production system must classify every object and field as public authority, tenant operational data, personal data, confidential business information, attorney-client privileged, attorney work product, export controlled, or retention restricted.

Classification must drive storage, access, search, telemetry, export, sharing, and deletion behavior.

## Identity and access

- Enterprise SSO through OIDC or SAML
- Multi-factor authentication inherited from the identity provider
- Tenant isolation at every persistence and retrieval layer
- Role- and attribute-based access control
- Matter, property, document, and field-level permission policies
- Separate rights for viewing, editing, approving, exporting, sharing, and administering
- Just-in-time access and periodic entitlement review
- Immediate revocation and session invalidation

## Privilege

Privilege is not a cosmetic label. A privileged object must carry its basis, client, legal purpose, authors, recipients, matter, access policy, and downstream restrictions.

Search, analytics, model context, logging, support access, exports, and integrations must preserve privilege boundaries. Public authority and tenant work product should never share an undifferentiated index.

## Encryption and secrets

- TLS for all network paths
- Managed encryption at rest with tenant-appropriate key controls
- Secrets stored only in an approved secrets manager
- No credentials, tokens, customer data, or privileged work product in the repository
- Short-lived credentials for CI and deployment
- Signed artifacts and provenance where practical

## Auditability

Material reads and every write, approval, export, permission change, evidence acceptance, rule publication, decision approval, and revalidation event must create tamper-evident audit records.

Audit records should include actor, tenant, object, action, before/after version, time, request or correlation ID, authorization result, and relevant policy decision.

## Search and grounded assistance

Authorization must be enforced before retrieval—not after generation. Every retrieval result should retain source object identity and permission context. Prompts, traces, and model telemetry must exclude or redact privileged and personal data unless expressly approved.

Model output must not be treated as an approved legal conclusion. Human approval state, provenance, and disclosed uncertainty remain authoritative.

## Evidence

Evidence artifacts require immutable content hashing, malware scanning, provenance, retention class, legal-hold support, acceptance workflow, and access history. Production storage should use write-once or version-locked controls where assurance requirements justify it.

## Engineering controls

- Protected main branch and required CI
- Dependency and secret scanning
- Static analysis and artifact scanning
- Reproducible builds
- Environment separation
- Least-privileged deployment identity
- Content Security Policy and secure browser headers
- Rate limiting and abuse controls
- Structured security logging and alerting
- Backup, recovery, and tested restoration

## Privacy

Collect only the facts necessary to resolve applicability, execute controls, and preserve required evidence. Define purpose, retention, residency, access, correction, export, and deletion rules before ingesting production HR, payroll, benefits, or worker data.

## Prototype constraint

The current repository is a public prototype. It must remain free of customer information, employee records, confidential legal work, and production secrets. The repository should be made private before any non-public implementation or data is added.
