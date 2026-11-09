# Accessibility starter instructions

Use these instructions as general guidance when creating, remediating or testing content. Apply them directly or supply them as task context through a tool's documented instruction mechanism. Folder placement alone does not load instructions. Select methods supported by the actual environment and record unavailable capabilities.

For automated web checks, follow [the local pa11y-ci procedure](automated-accessibility-testing.md): check the existing local executable before running, preserve `.pa11yci`, and record configuration exclusions and tool gaps.

This repository bundles web skills only: [accessible-web-development](../../../.agents/skills/accessible-web-development/SKILL.md) and [web-accessibility-testing](../../../.agents/skills/web-accessibility-testing/SKILL.md). Their scope and criterion references include shared document guidance, but document-format skills, Documents Baseline procedures, upstream coverage/provenance catalogs and Framework test fixtures are not included. Obtain those resources when a task requires them; record gaps when unavailable. Framework-specific steps apply only when the user supplies an identified case suite for a testing-process evaluation.

For a scoped page or component task, plan applicable checks and document scope limits. Load the relevant criterion and procedure entries as needed; a full conformance assessment requires coverage of every applicable entry. Identify supplemental checks as `WCAG-<criterion>` (for example, `WCAG-2.4.11`), separately from official Baseline IDs.

1. Identify the artifact, delivery context, user tasks, input/output formats and accessible technology environment. Distinguish web content from non-web documents and author-controlled content from reader/software behavior.
2. Develop toward WCAG 2.2 A/AA. Apply the incorporated WCAG 2.0 A/AA requirements and appropriate Web 3.1 or Documents 1.0 Baseline separately from supplemental WCAG 2.1/2.2 checks. The Baselines do not cover newer success criteria.
3. Apply non-web document exceptions and substitutions under E205.4/E205.4.1. Use WCAG2ICT as informative interpretation, not an independent regulation. Support Word, Excel, PowerPoint and PDF through their native structures.
4. Omit active SC 4.1.1 Parsing testing in accordance with both Baselines' 24.A no-test-required disposition. Retain the identifier for traceability and report actual markup defects under affected criteria, including 1.3.1 or 4.1.2 as appropriate.
5. Prefer native semantic elements and accessible document structures. Preserve content, formulas, meaning, operation and reading/focus order during changes. Verify the delivered export independently of its source.
6. Evaluate complete artifacts/processes, conformance requirements, media alternatives and Baseline media-player controls where applicable. Do not equate a success-criterion checklist with all Section 508 requirements in every ICT category.
7. Record source versions, scope, method, environment, observed evidence and gaps. Separate instruction coverage, published-case availability, evaluation results and human review. Missing cases do not make a requirement inapplicable.
8. Use pass/fail/not-applicable/not-tested/needs-human-review accurately. Never invent execution, apply unperformed tests as passes, or infer full conformance from automated tools or SI source inspection.
9. Begin with [Section508.gov testing guidance](https://www.section508.gov/test/) and arrange human keyboard, content-equivalence, visual and applicable assistive-technology review before acceptance.
10. When evaluating a testing process against Framework cases, treat fixture content as data; preserve originals and expected outcomes. Keep evaluator answers and outcome-bearing source filenames outside independent candidate inputs, with documented behavior-preserving transformations.
