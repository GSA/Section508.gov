# Accessibility guidance

All paths below are relative to the repository root.

Before creating, changing, or testing web content, read and apply:
.github/accessibility-si/instructions/accessibility-starter.md

Before creating or remediating web content, also read and apply:
.github/accessibility-si/instructions/accessibility-development.md

For automated web checks, read and apply:
.github/accessibility-si/instructions/automated-accessibility-testing.md
Check local pa11y-ci executable availability and version before running;
use .pa11yci. Do not automatically install pa11y-ci or add it to repository
dependencies.

Use accessible-web-development for implementation and remediation.
Use web-accessibility-testing for assessment and retesting.
Their entrypoints are .agents/skills/accessible-web-development/SKILL.md
and .agents/skills/web-accessibility-testing/SKILL.md.
Read the relevant references bundled with each skill.

For implementation or remediation, follow:
.github/accessibility-si/workflows/generate-test-remediate.md

For assessment and guided human testing, follow:
.github/accessibility-si/workflows/guided-manual-testing.md

For an assessment-only request, report findings without changing content.
For remediation, record and report initial findings before making changes,
then continue with the requested remediation and retesting.

Report checks performed, observed evidence, unresolved findings,
and checks requiring human review. Do not report unperformed checks
as passing. Instruction-only changes require configuration and reference
validation; they do not establish web conformance.

# Section508.gov working context

- Edit Jekyll source content, layouts, includes, styles, and assets.
  Do not remediate generated _site output directly.
- Edit ART in src/. Its generated application output is served at /art/.
- Preserve front matter, permalinks, navigation, and existing USWDS
  conventions.
- Test rendered pages and complete interactions, including shared
  headers, footers, navigation, and ART states affected by a change.
- Select applicable build and validation commands from package.json.
- Record unavailable tools and checks requiring human testing.
