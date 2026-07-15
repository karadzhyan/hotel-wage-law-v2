# Hotel Wage Law v2 Product Recovery Design

Status: Proposed for owner review

Owner: Arthur Karadzhyan

Prepared: July 15, 2026

## 1. Decision summary

Hotel Wage Law v2 will be one governed hospitality wage-and-hour platform with two permissioned projections:

1. A content-first public authority plane on `hospitalitywagelaw.com`.
2. A protected enterprise control plane under `/app`.

Both planes will derive from one canonical graph:

`Source → Rule → Change → Applicability → Matter → Finding → Control → Evidence → Decision → Revalidation`

The current twelve-route enterprise prototype is a useful interaction and architecture specimen. It is not the public product baseline and it is not a finished legal application. The legacy `hotel-wage-hour` repository is the substantive migration corpus. It is not the target architecture and must remain read-only during controlled migration.

The immediate recovery posture is:

- Treat the current live v2 as a prototype, not as the completed website.
- Restore the content-rich legacy experience to the custom domain as a temporary public baseline after a verified alias rollback plan is prepared.
- Keep v2 available on its Vercel project URL and protected previews while the governed public plane is built.
- Return the custom domain to v2 only after corpus parity, route parity, citations, accessibility, and rollback gates pass.

## 2. Source authority and precedence

Product intent and execution governance have separate precedence rules.

For product intent:

1. The canonical product conversation in ChatGPT: <https://chatgpt.com/c/6a550f59-17b8-83e8-90bd-4b673404627c>.
2. The decisions Arthur accepts in this design specification.
3. The product architecture, governance, security, and roadmap specifications.
4. The verified substantive corpus in `karadzhyan/hotel-wage-hour`.
5. The current v2 prototype as an interaction vocabulary and technical baseline.
6. Prior Claude conversations as supporting design and research context, not as independent product authority.

For execution governance, `AGENTS.md`, the governing GitHub issue, repository security boundaries, and the one-workstream-per-branch discipline remain mandatory. A product decision can change intended scope, but it cannot silently waive legal integrity, privacy, security, evidence, testing, review, or release requirements.

No generated summary, prototype sentence, or secondary conversation can silently override the applicable higher-precedence source.

## 3. Audited current state

### 3.1 Repository

- Target repository: `karadzhyan/hotel-wage-law-v2`.
- Current `main`: `3139a4a5be95ea1268c00da5035ca6b2247f1724`.
- PR #13 is merged. There are no open pull requests.
- Issues #2 through #11 remain open and govern the staged program.
- The current build has five public routes and seven enterprise prototype routes.
- The current implementation is static HTML, CSS, SVG, and browser JavaScript with synthetic enterprise data.
- It has no production identity, tenant, authorization, persistence, privilege, or private-data path.

### 3.2 Hosting

- `https://www.hospitalitywagelaw.com/` currently serves the v2 prototype from Vercel deployment `dpl_5vkT3xLT732AKAHZVQRazL5PXv1R`.
- `https://hotel-wage-law-v2.vercel.app/` serves the same production deployment.
- `https://hotel-wage-hour.vercel.app/` serves the content-rich legacy site.
- The custom domain resolves to the v2 deployment, while Vercel project metadata still lists the custom domains under the legacy project. That inconsistency must be resolved before another domain change.
- GitHub Pages remains a verified fallback for the current v2 prototype.

### 3.3 Local environment

The original checkout under `Documents` is an iCloud Drive folder whose source files are currently `dataless` placeholders. It is not safe to use as an implementation workspace until macOS materializes the files or sufficient local storage is available. The recovery work uses an isolated clone outside iCloud so the open Terminal sessions cannot collide with it.

### 3.4 Legacy corpus

The reference repository currently contains:

- 18 authored issue briefs.
- 51 state and District of Columbia data records.
- 20 ordinance records, despite public copy that says 19. The migration ledger must reconcile the counting rule.
- 10 core interactive tools.
- Nine department audit checklists plus a checklist hub.
- 105 generated index routes plus a generated 404 page.
- Glossary, cases, FAQ, developments, compliance calendar, authorities, methodology, search, sitemap, feed, fixtures, tests, and research memoranda.

The verified counts are evidence for planning, not a substitute for the complete artifact ledger required by Issue #2.

## 4. Approaches considered

### 4.1 Keep the enterprise prototype as the public product

Rejected.

It preserves recent implementation work, but it hides most substantive content, makes synthetic enterprise activity the first impression, and presents a system specification before the public authority foundation exists. It also conflicts with the canonical product direction that public pages and enterprise workflows are projections of the same governed graph.

### 4.2 Restore the legacy site and defer the enterprise product indefinitely

Rejected as the destination, accepted as a temporary public baseline.

The legacy site has the strongest substantive corpus and is currently the most useful public experience. A permanent rollback would preserve duplicated and page-bound sources of truth, postpone the governed graph, and abandon the step-function product opportunity. A temporary rollback protects users while v2 is rebuilt correctly.

### 4.3 Build one governed platform with public and enterprise planes

Selected.

This approach preserves the corpus, makes the canonical graph real, separates public and private data, and lets every page, tool result, applicability evaluation, matter, control, and decision expose the same source and rule lineage.

## 5. Product thesis

A legal development should not be summarized in one system, analyzed in another, assigned in email, briefed in slides, and proven in a shared drive. One governed record should carry:

- the exact authority and retained source version;
- the normalized rule and effective period;
- the change from the prior version;
- the facts that determine applicability;
- the calculation or branch trace;
- counsel judgment and unresolved ambiguity;
- the finding and recommended response;
- accountable controls and evidence;
- the approved decision and its conditions; and
- every dependency that requires revalidation.

The public plane answers, "What is the law, what does it mean, and how can I verify it?"

The enterprise plane answers, "What changed for our properties, what decision is required, what must happen, and how do we prove it?"

## 6. Users and primary jobs

### 6.1 Public authority users

#### Hotel operator, HR, payroll, or general manager

Primary job: Find the controlling hospitality wage-and-hour rule, understand the operational consequence, and identify the next question or tool without reading an undifferentiated legal treatise.

#### Employment counsel or researcher

Primary job: Reach the direct answer quickly, then inspect sources, passages, effective dates, interpretation notes, worked examples, contrary authority, and review state.

### 6.2 Enterprise users

#### General counsel

Primary job: See material posture and approve a recommendation with conditions, owners, consequences, and provenance.

#### Employment counsel and legal operations

Primary job: Scope a matter, resolve facts, distinguish deterministic analysis from judgment, approve findings, and preserve the record.

#### Payroll, benefits, HRIS, and hotel operations

Primary job: Translate findings into effective-dated configurations, processes, communications, tests, evidence, exceptions, and remediation.

## 7. Information architecture

### 7.1 Public authority plane

The public plane is the main-domain default. Its top-level structure is:

1. **Home**: direct product promise, current developments, issue entry points, jurisdiction entry points, tools, and evidence standard.
2. **Intelligence**: issue library, developments, cases, enforcement, and legal-change records.
3. **Jurisdictions**: 50-state and District of Columbia center, hotel-specific local laws, comparison views, and jurisdiction details.
4. **Tools**: ten governed workflows, audit checklists, worked examples, and saved or shareable scenarios where authorized.
5. **Resources**: methodology, authorities, glossary, FAQ, compliance calendar, DOL guidance, and correction process.
6. **About and disclaimer**: authorship, review method, limitations, privacy, terms, and contact or correction path.

The public header may expose Enterprise Access as a secondary action. It must not make enterprise activity the primary homepage narrative.

Every migrated legacy URL receives one of four explicit dispositions: preserve, redirect, archive with explanation, or exclude with rationale. No route disappears by omission.

### 7.2 Enterprise control plane

The enterprise plane remains under `/app` until identity and deployment architecture justify a dedicated subdomain. Its navigation is organized by governed work:

1. Portfolio command.
2. Change intelligence.
3. Governed matters.
4. Property applicability.
5. Controls and assurance.
6. Grounded research.
7. Decision records.

Before Issue #6 is complete, every enterprise surface remains synthetic, clearly labeled as a prototype, and incapable of accepting real enterprise or privileged data.

### 7.3 Shared cross-plane anchors

Public and enterprise experiences share:

- source identity and source version;
- passage and citation;
- rule and rule version;
- interpretation and ambiguity state;
- jurisdiction and effective period;
- calculation specification and fixture;
- review, approval, supersession, and revalidation state.

They do not share private facts, tenant search indexes, telemetry, caches, exports, or authorization contexts.

## 8. Canonical object model

### 8.1 Source and authority

A source is not a mutable URL. The system retains the retrieved artifact, content hash, publisher, authority type, jurisdiction, publication date, retrieval date, effective period, supersession relationship, and passage boundaries.

### 8.2 Rules and interpretations

A rule version stores coverage predicates, obligations, exceptions, calculations, remedies, units, rounding, temporal semantics, fixtures, review state, and approval. Counsel judgment and unresolved ambiguity remain separate typed objects.

### 8.3 Facts and applicability

Property and workforce facts are effective dated and carry provenance, steward, confidence, freshness, and review state. Applicability outputs show satisfied, failed, unresolved, and missing predicates, plus their source, rule, and fact versions.

### 8.4 Matters, findings, decisions, controls, and evidence

A matter provides continuity from question to closure. Findings link authority, rules, facts, calculations, interpretation, reviewers, and approval state. Decision records are rendered from the matter, not copied into a separate memo. Conditions create accountable work and required evidence. Evidence retains immutable content, hash, period, population, collector, acceptance state, retention class, privilege, and access history.

### 8.5 Revalidation

Every source, rule, fact, model, finding, control, evidence, and decision dependency is traversable. A changed dependency invalidates affected conclusions and assigns a revalidation owner. Staleness is a workflow state, not a footer date.

## 9. Core experience contracts

### 9.1 Public legal answer

Every substantive answer follows this sequence:

1. Direct answer.
2. Scope and effective date.
3. Controlling authority and passage.
4. Rule and exceptions.
5. Facts that change the result.
6. Worked example or calculation when useful.
7. Operational consequence.
8. Uncertainty, limitations, and contrary or unresolved authority.
9. Reviewed date, reviewer state, and correction path.
10. Related tools, jurisdictions, developments, and sources.

### 9.2 Governed tool

Every tool exposes:

- typed inputs and units;
- jurisdiction and effective date;
- source and rule versions;
- validation and missing-fact states;
- explicit predicates and branch trace;
- intermediate values and math;
- assumptions and unsupported branches;
- deterministic output separated from interpretive guidance;
- worked examples and boundary fixtures;
- legal and technical review state;
- reproducible serialization; and
- save-to-property or save-to-matter behavior where authorized.

### 9.3 Enterprise change response

The primary enterprise flow is:

1. Capture and verify a changed source.
2. Approve the changed rule or explicit ambiguity.
3. Identify affected properties and unresolved facts.
4. Open or update a governed matter.
5. Approve findings and recommendation.
6. Record the executive decision and conditions.
7. Create accountable controls and evidence requirements.
8. Test operation, resolve exceptions, and close or revalidate.

## 10. Content migration invariants

The migration must preserve or deliberately improve:

- every authored substantive proposition;
- every worked example and visible calculation;
- source links, access dates, and review dates;
- issue, state, ordinance, tool, checklist, case, glossary, FAQ, development, and calendar relationships;
- existing canonical URLs or complete redirects;
- metadata, social cards, structured data, sitemap, robots directives, feed, print behavior, and search;
- accessible headings, landmarks, tables, forms, errors, and keyboard behavior;
- disclosed gaps and non-computation rules; and
- deterministic fixtures and test coverage.

Migration must not copy the legacy prose and data into competing page-local sources. The artifact ledger determines which record becomes canonical and which generated surfaces project it.

The discrepancy between 20 ordinance data records and the published count of 19 must be resolved before the count is reused.

## 11. Brand and visual direction

### 11.1 Register

The main domain is a brand surface because the authority experience and its trustworthiness are the product. The enterprise area uses a product register by route override.

### 11.2 Physical reference

The public experience should feel like a hospitality operating binder prepared by exceptional counsel: warm paper, exact annotations, decisive tabbing, visible provenance, and durable structure. It should not feel like a law-firm brochure, a luxury hotel campaign, a generic SaaS homepage, or an online magazine.

### 11.3 Color

Recommended public strategy:

- warm paper and near-black ink for long-form reading;
- a committed deep hospitality green as the principal brand color;
- sage and mineral neutrals for secondary structure;
- oxblood or restrained amber only for legal risk and changed-state emphasis;
- blue reserved for familiar interactive links where usability requires it, not as the brand's dominant atmosphere.

The enterprise plane may use a cooler and denser variant, but must share the green, paper, risk colors, and provenance language so it remains recognizably one system.

### 11.4 Typography

The design system will select:

- a highly readable, sturdy serif for legal answers and long-form analysis;
- a humanist sans serif for navigation, forms, tables, and enterprise workflow; and
- a restrained monospaced face only for citations, identifiers, rule expressions, and calculation traces.

Font selection requires a real catalog and licensing review. The current reflex defaults, including Inter and Outfit, are not automatically carried forward. Typography must support long reading, dense tabular data, and clear hierarchy without adopting a magazine aesthetic.

### 11.5 Imagery and data graphics

Use imagery that proves the system's subject and method:

- annotated source passages;
- wage schedules and effective-date timelines;
- jurisdiction maps and hotel-law overlays;
- tool traces and product screenshots;
- property, workforce, and control diagrams; and
- carefully art-directed hospitality context only when it adds meaning.

Generic hotel photography is not a substitute for substance. Text-only hero sections are also insufficient when a decisive source, map, trace, or product image can make the proposition concrete.

### 11.6 Components and density

- Public pages prioritize readable measure, clear section rhythm, source panels, margin notes, worked examples, tables, and related-record links.
- Enterprise pages prioritize decision bands, queues, matter lifecycles, fact ledgers, branch traces, control matrices, evidence states, and approval records.
- Cards are used only where they represent discrete selectable objects. Long-form content should not be fragmented into decorative card grids.
- Status always combines text, icon or shape, and color.
- Tiny uppercase metadata must not become the repeated grammar of every section.

## 12. Accessibility, responsive behavior, and inclusion

The release target is WCAG 2.2 AA with retained automated and manual evidence.

Required behaviors include:

- keyboard access and predictable focus management;
- semantic landmarks and heading order;
- accessible names, descriptions, errors, and status announcements;
- 200 percent zoom and 320 CSS pixel reflow without loss of content or function;
- text alternatives for meaningful imagery and data graphics;
- reduced-motion support and no motion-dependent understanding;
- non-color communication of legal, review, and risk states;
- table alternatives or responsive transformations that preserve headers and relationships;
- print styles for public guidance, checklists, calculations, and decision records; and
- comfortable body size, line height, and measure for long legal reading.

## 13. Security, privacy, privilege, and legal boundaries

### 13.1 Public boundary

Public builds contain only approved authority, rules, editorial content, public tools, fixtures, and telemetry explicitly approved for public use. They contain no tenant facts, private endpoints, privileged context, or enterprise object identifiers.

### 13.2 Enterprise boundary

Before real enterprise use, the platform requires identity, tenant isolation, object and field authorization, privilege classification, purpose limitation, export controls, separate search indexes, audit events, retention, legal holds, secret management, environment separation, and independent threat-model review.

Authorization occurs before retrieval. Model-generated text is never the approval record. Privilege is structural across storage, search, telemetry, support access, exports, and integrations.

### 13.3 Legal integrity

No rule is represented as attorney approved without a real approval record. No disputed interpretation is silently encoded as deterministic logic. No unsupported branch produces a confident numeric result. Public educational content remains clearly distinguished from property-specific advice and enterprise counsel judgment.

## 14. Deployment and domain topology

### 14.1 Canonical topology

- `hospitalitywagelaw.com` redirects to `www.hospitalitywagelaw.com`.
- `www.hospitalitywagelaw.com` is the canonical public authority plane.
- `/app` is the enterprise control plane until a later architecture decision supports `app.hospitalitywagelaw.com`.
- `hotel-wage-law-v2.vercel.app` remains an implementation and rollback alias, not the public canonical URL.
- GitHub Pages remains a fallback until the v2 production release and rollback process are independently proven.

### 14.2 Transitional topology

After this specification is approved and the Vercel alias state is reconciled:

1. Capture the current v2 deployment and all aliases as rollback evidence.
2. Verify the legacy production deployment and all canonical routes.
3. Temporarily point the hospitality custom domain to the legacy deployment.
4. Keep v2 on its Vercel alias and protected previews.
5. Build and verify the governed public plane.
6. Reassign the custom domain to v2 only after the public release gate passes.

No domain move occurs without a tested reverse operation and independent HTTPS, route, asset, browser, and canonical-host verification.

## 15. Staged delivery

### Stage A: Public baseline recovery

- Approve this specification.
- Reconcile Vercel's custom-domain metadata and current alias behavior.
- Prepare and test the rollback operation.
- Restore the legacy public experience to the custom domain temporarily.
- Keep the current v2 prototype available by Vercel alias.

### Stage B: Migration truth

- Execute Issue #2 completely.
- Produce the artifact ledger, route parity map, redirect map, data ownership map, tool inventory, source-of-truth conflicts, research index, migration plan, and decisions register.
- Add tests that fail for omissions.

### Stage C: Canonical authority and rule foundation

- Execute Issue #3.
- Pilot one bounded hospitality topic from immutable source capture through approved rule, public projection, dependency traversal, and revalidation.

### Stage D: Public authority plane

- Execute Issue #4.
- Migrate the complete verified public corpus as governed projections.
- Pass route, content, citation, metadata, search, feed, sitemap, print, accessibility, responsive, and screenshot parity gates.

### Stage E: Governed tools

- Execute Issue #5 for all ten core tools.
- Differentially test against the legacy engines and classify every mismatch.

### Stage F: Enterprise foundation and workflows

- Complete Issue #6 before accepting private data.
- Then execute Issues #7 and #8 for property applicability and the complete matter-to-decision-to-control lifecycle.

### Stage G: Production release

- Execute Issues #9 and #10.
- Perform the final adversarial audit.
- Move the custom domain from the temporary public baseline to the governed v2 only after formal go-live approval.

## 16. Success measures and acceptance tests

### 16.1 Public usefulness

- A first-time visitor can identify the public resource, its hospitality scope, its evidence standard, and the main entry points within five seconds.
- Every inventoried legacy route has an explicit disposition.
- Every preserved or redirected route passes automated and manual deep-link checks.
- Corpus counts, citations, review dates, sources, worked examples, tools, and disclosed gaps match the approved ledger.
- Search returns useful issue, jurisdiction, tool, development, and source results without mixing private objects.

### 16.2 Legal and data integrity

- Every published proposition resolves to a source version and passage or an explicit editorial or interpretive layer.
- Every calculation is reproducible from preserved input, rule, source, and fact versions.
- Unsupported, ambiguous, missing-fact, stale, superseded, and revalidation-required states are testable and visible.
- A changed source or fact identifies every dependent page, tool result, finding, control, evidence requirement, and decision.

### 16.3 Enterprise usefulness

- A material change can be demonstrated end to end from source through decision and operating evidence using synthetic data.
- Every decision condition creates an owner, deadline, control or action, and required evidence.
- A decision record is generated from the governed matter and preserves its exact provenance snapshot.

### 16.4 Quality and release

- Deterministic tests, structural checks, browser tests, accessibility automation, and build verification pass locally and in remote CI.
- Manual keyboard, zoom, reflow, contrast-mode, reduced-motion, and assistive-technology review has retained evidence.
- Public and enterprise data boundaries pass negative tests.
- Production and rollback deployments pass route, asset, canonical-host, browser, and monitoring checks.
- No production-readiness claim is made without the required legal, editorial, product, security, privacy, accessibility, and owner approvals.

## 17. Non-goals

- Treating the current synthetic dashboard as a production application.
- Ingesting customer, employee, privileged, or confidential data before Issue #6 approval.
- Rewriting every substantive page before the migration ledger and canonical ownership are established.
- Using an AI model as the source of a legal rule or approval state.
- Hiding legal ambiguity behind a score or generated summary.
- Replacing the legacy site without route, content, citation, functional, and rollback evidence.

## 18. Owner decisions requested in review

Unless Arthur changes them during review, the implementation plan will use these recommendations:

1. **Temporary public baseline:** restore the legacy site to the hospitality custom domain while v2 is rebuilt privately.
2. **Brand name:** use `Hotel Wage Law` as the umbrella brand and `The Hospitality Wage-and-Hour Resource` as the public descriptor.
3. **Enterprise topology:** retain `/app` on the same domain until identity, authorization, and deployment decisions justify a dedicated subdomain.
4. **Visual direction:** use the counsel-prepared hospitality operating binder direction, with warm paper, deep green, visible source material, and a denser but related enterprise variant.

## 19. Review gate

No implementation plan or product code should be written until Arthur reviews this specification. After approval, the next artifact is a dependency-ordered implementation plan under `docs/superpowers/plans/`, beginning with Stage A and Issue #2.
