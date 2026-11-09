# Accessibility agent integration

The repository uses one shared skill directory for Codex and supported Copilot clients. Commit `.agents/skills/`, `AGENTS.md`, `.github/copilot-instructions.md`, and this directory together so remote agents receive the same resources.

## Discovery and routing

| Resource | How it is used |
| --- | --- |
| `AGENTS.md` at repository root | Codex repository instructions. Some Copilot features also support it. |
| `.github/copilot-instructions.md` | Copilot repository-wide instructions. Kept consistent with `AGENTS.md`; neither requires the other to load. |
| `.agents/skills/<name>/SKILL.md` | Shared skill discovery. Each entrypoint has required YAML `name` and `description` fields. |
| `instructions/*.md` here | Shared guidance explicitly referenced by the agent instruction files and workflows. Placement alone does not load these files. |
| `workflows/*.md` here | Agent-readable procedures selected by task. These are not GitHub Actions workflows or registered slash commands. |
| Each skill's `references/` | Read the scope and relevant criterion/procedure entries when using that skill. |
| `.agents/skills/inventory.json` | Distribution metadata and local SHA-256 hashes; not a skill registry or agent configuration file. |

Codex and Copilot both document `.agents/skills` as a project skill location. No duplicate `.github/skills` tree, symlink, or Codex `agents/openai.yaml` is required for these instruction-only skills. The latter can provide optional Codex UI metadata.

Keep the two skill folders self-contained for procedural guidance. Both currently carry identical shared references so each can be used independently; update both copies and refresh the inventory hashes after changes. The inventory preserves the original distribution's `source_revision` and labels local adaptations; it does not pin the revisions of linked external standards.

The files under `instructions/` are deliberately shared resources. Copilot's automatic path-specific instructions instead use `.github/instructions/**/*.instructions.md` with `applyTo` front matter. That separate mechanism is unnecessary here because both repository entrypoints explicitly route to the shared files.

## Task selection

- Implementation/remediation: starter instructions, development instructions, `accessible-web-development`, and `generate-test-remediate.md`; use `web-accessibility-testing` for assessment and retesting.
- Assessment only: starter instructions, `web-accessibility-testing`, and `guided-manual-testing.md`; report findings without editing content.
- Instruction/configuration work: validate metadata, paths, reference consistency and hashes. This does not establish rendered-page accessibility.

For automated web checks, both agents follow [the local pa11y-ci procedure](instructions/automated-accessibility-testing.md). It requires checking an existing local installation, using the repository `.pa11yci`, and reporting exclusions and execution gaps. The tool is intentionally managed outside repository dependencies; agents must not install it automatically.

The bundle supplies web workflows, 55 active WCAG A/AA criterion entries and 62 Web Baseline entries per skill, including Parsing's no-test-required disposition. Document notes are context, not a bundled document-testing workflow. Obtain document-format skills and Documents Baseline procedures separately for document tasks. Framework case fixtures, per-case mappings and the original generators/provenance catalog are not included. Official Baseline procedures are linked rather than reproduced in full; unavailable network access limits what can be verified.

## Client smoke checks

Open the repository in a supported agent client. For Codex, start from the repository root or a subdirectory within it. If discovery looks stale, start a new session or restart the client. Check client settings if repository instructions or skills have been disabled.

1. Ask: `List the repository instructions and accessibility skills available to you. Do not modify files.` Confirm the client identifies the applicable repository entrypoint and both skill names.
2. In Codex, explicitly invoke: `Use $web-accessibility-testing to plan an assessment of the home page. Read the shared starter instructions and guided manual testing workflow. Do not modify files or claim tests have run.` In Copilot, use the same request with the plain skill name, or its skill selector if available.
3. Confirm the agent reads `SKILL.md`, the shared starter/workflow and relevant references, and distinguishes planned checks from executed results.
4. In a fresh session, ask naturally: `Assess the home page for accessibility and report findings without modifying files.` Confirm selection of the testing skill based on its description.
5. For an implementation task, confirm development-skill selection, source edits in Jekyll or `src/`, rendered inspection and evidence-based retesting. Human keyboard, visual and assistive-technology observations remain necessary where tools cannot establish outcomes.

These checks verify client behavior that static validation cannot guarantee. Skills are selected based on task relevance; their availability does not mean they load for every prompt. Copilot support varies by product and mode; use the documented supported clients rather than assuming every chat or completion surface loads skills.

## Configuration review evidence

Reviewed November 9, 2026:

- Both skills passed the Codex skill-creator `quick_validate.py` validator.
- All local Markdown links and explicit reference anchors resolved in the reviewed agent resources.
- Each skill contained 55 criterion entries and 62 Web Baseline entries; every web Baseline mapping in the criterion catalog resolved to a bundled procedure entry. This checks internal consistency, not normative accuracy or procedure execution.
- All 12 manifest file hashes matched the adapted files.
- `npm run build` passed. Inspected the generated output: the home page exists and `AGENTS.md`, `.agents/` and `.github/` are excluded. The build hook refreshed two USWDS assets; those incidental changes were restored.
- Both skills were present in this Codex session's available-skills catalog and their entrypoints were read. Copilot discovery and automatic selection were not executed; run the smoke checks above in your client.
- The Copilot CLI and local `pa11y-ci` executable were unavailable. No browser, keyboard or assistive-technology assessment was performed for this instruction-only change.
- No web content was remediated or evaluated for conformance as part of this configuration review.

During the subsequent pa11y-ci instruction update, the current shell resolved an existing local installation reporting version `5.0.0`. Availability can differ between shells/sessions. No accessibility scan was run for that instruction-only update.

## Official documentation

- [Codex skill discovery and format](https://developers.openai.com/codex/skills/)
- [Codex repository instructions and precedence](https://developers.openai.com/codex/guides/agents-md/)
- [Copilot skill locations, format and supported clients](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills)
- [Copilot custom-instruction support by client](https://docs.github.com/en/copilot/reference/custom-instructions-support)
- [Copilot repository-wide and path-specific instruction formats](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
