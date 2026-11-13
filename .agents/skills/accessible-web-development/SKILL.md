---
name: accessible-web-development
description: Develop and remediate web content toward all WCAG 2.2 Level A/AA criteria, with separately tracked Section 508 and ICT Web Baseline 3.1 obligations. Use for HTML, CSS, scripted UI, forms, tables, images, responsive layouts, media and complete web processes.
---

# Accessible web development

1. Establish web scope and identify applicable accessibility requirements. Consult the bundled scope reference, then retrieve the relevant WCAG criterion entries and Web Baseline procedures as needed. Maintain an inventory of applicable requirements so selective retrieval does not result in incomplete coverage. Account for complete pages/processes and supported delivery technologies.
2. Prefer native HTML elements and robust semantic relationships. Address structure, alternatives, reading/focus order, keyboard operation, input/error safeguards, language, contrast, resizing and accessible media. Determine an image's purpose from its context before drafting a text alternative. Identify decorative images appropriately. When the intended meaning cannot be established reliably, request additional context rather than inventing information. Treat generated text alternatives as drafts requiring human review.
3. Implement applicable WCAG 2.1/2.2 additions using the criterion-specific development/testing notes. Keep those outcomes supplemental; do not invent Baseline identifiers for them.
4. Omit active Parsing testing using the no-test-required disposition, while fixing real defects under affected criteria. Consult exact normative conditions and exceptions rather than treating examples as universal requirements.
5. Inspect and test actual states with supported tools, human keyboard/visual evaluation and applicable assistive technology. Preserve initial evidence and remediate a working copy without altering evaluator expectations. When authorized to modify the implementation, compare relevant accessibility results before and after the change. Identify and correct newly introduced accessibility failures, even if the overall number of reported defects decreases.
6. Return the artifact, affected requirements, actual retest evidence and remaining gaps. Do not claim completed whole-site conformance or Baseline alignment from selected cases.

## Preserve testing integrity

Do not resolve accessibility findings by disabling or weakening applicable tests, suppressing valid findings, or excluding problematic content from evaluation. Correct the underlying accessibility issue or report it as unresolved. Changes to testing procedures or configurations must be authorized, documented, and reviewed to confirm that they do not conceal accessibility failures.

When a human reviewer's finding differs from the agent's assessment, document the disagreement and supporting evidence. Do not independently dismiss or override the human finding; refer it for appropriate review.

## Bundled references

- [Scope](references/scope.md)
- [Source attribution](references/source-notices.md)
- [Wcag A Aa](references/wcag-a-aa.md)
- [Web Baseline](references/web-baseline.md)

Read relevant entries before acting. Keep this folder intact: all required procedural references are local. The caller may supply mappings and result schemas, but this skill has no required parent-repository dependency. Reference coverage does not establish completed validation.
