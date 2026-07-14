# Codex Operating Instructions

These instructions govern all Codex work in this repository.

## Repositories

- **Implementation target:** `karadzhyan/hotel-wage-law-v2`
- **Reference corpus:** `karadzhyan/hotel-wage-hour`

The target repository is the implementation destination. The reference repository is a verified corpus and legacy implementation to be audited and migrated deliberately—not copied wholesale and not modified unless the governing issue expressly requires it.

## Required operating method

1. Inspect the actual repositories, current branch, git history, open issues, pull requests, workflows, and deployed state before making any claim.
2. Read every directly relevant file in full. Do not infer repository state from filenames, snippets, README claims, closed issues, or prior summaries.
3. Do not stop at recommendations. Implement everything reasonably within scope; test it; document it; commit it; push a branch; and open a pull request.
4. Never work directly on `main`. Use one clearly named feature branch and one reviewable pull request per workstream.
5. Treat the governing GitHub issue as the scope and acceptance contract. Do not close it or mark a criterion complete without retained evidence.
6. Preserve the product model:

   `Source → Rule → Change → Applicability → Matter → Finding → Control → Evidence → Decision → Revalidation`

7. Maintain a strict distinction among:
   - authoritative source text;
   - normalized deterministic rules;
   - factual inputs;
   - calculated outputs;
   - interpretive analysis;
   - counsel judgment;
   - unresolved ambiguity.
8. Never silently encode a disputed legal interpretation as deterministic logic. Represent ambiguity, unsupported branches, missing facts, effective periods, review state, and limitations explicitly.
9. Use only synthetic enterprise data unless the repository is confirmed private and the governing security workstream authorizes otherwise. Never add privileged material, customer information, employee data, credentials, secrets, or production configuration.
10. Preserve or improve accessibility, responsive behavior, semantic HTML, keyboard operation, reduced-motion handling, source traceability, and prototype/production disclosures.
11. Run the existing verification contract before and after changes. Add tests proving every new behavior. Existing green tests do not prove new acceptance criteria are satisfied.
12. Inspect GitHub Actions after pushing. Repair failures. Do not claim CI or deployment passed unless the remote workflow result proves it.
13. Perform an adversarial self-review of the complete diff before requesting review. Look for security defects, legal-data integrity failures, stale documentation, inaccessible interactions, dead code, duplicated sources of truth, migration loss, and untested branches.
14. Every pull request must include:
   - outcome;
   - architecture and implementation decisions;
   - files and governed objects affected;
   - tests and commands run;
   - screenshots for interface changes;
   - legal/content review requirements;
   - security and privacy impact;
   - migration and rollback plan;
   - unresolved blockers;
   - exact issue acceptance criteria satisfied.
15. Comment on the governing issue with links to the pull request, CI runs, retained evidence, and any criteria that remain genuinely incomplete.
16. Ask the user only when a genuinely non-resolvable product, legal-judgment, credential, or owner-policy decision is required. Perform all repository, terminal, GitHub, browser, and test work that is otherwise available.

## Workstream order

Execute the workstreams in this dependency order unless the repository state proves a different order is safer:

1. Baseline and repository truth reconciliation — Issue #10 tracking where owner settings are involved.
2. Reference-repository migration inventory — Issue #2.
3. Canonical authority and rule registry — Issue #3.
4. Public authority-plane migration — Issue #4.
5. Deterministic tool extraction — Issue #5.
6. Identity, tenant, privilege, and audit foundations — Issue #6.
7. Property facts and applicability pilot — Issue #7.
8. Governed matters, decisions, controls, and evidence — Issue #8.
9. Production readiness and release governance — Issue #9.
10. Owner-level repository settings and visibility — Issue #10.
11. Final adversarial release audit.

## Completion standard

A task is not complete merely because code exists or `npm run verify` passes. Completion requires the governing issue’s acceptance criteria, retained evidence, remote CI verification, documentation, reviewable commits, and explicit disclosure of any unresolved legal, security, privacy, accessibility, migration, or owner-setting dependency.

See `docs/CODEX-EXECUTION-PLAN.md` for the detailed staged prompts and issue-specific deliverables.