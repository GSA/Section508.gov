# Automated accessibility testing with pa11y-ci

Use the developer's existing local installation of `pa11y-ci` for automated web checks. It is intentionally managed outside this repository to avoid adding its dependency maintenance and security burden to the project. Do not add it or its runners/browser dependencies to `package.json`, the lockfile, or vendored source. Do not automatically install or upgrade it, including through an auto-downloading `npx` or `npm exec` command. Installation or dependency changes require an explicit request.

## Check availability first

From the repository root, check the executable in the agent's actual shell before running `npm run test:a11y` or any direct scan:

```sh
command -v pa11y-ci
```

Only if found, run:

```sh
pa11y-ci --version
```

Record the resolved executable and version. An installation on the developer's machine may not be visible inside an agent container or shell. If absent, report automated testing as **not-tested: pa11y-ci unavailable**, continue other applicable checks, and identify the local run still needed. If the user supplies an existing executable path, check that executable and its version and use it explicitly. Do not treat the separate `pa11y` command as an equivalent substitute.

A successful version check establishes CLI availability only. Missing runners, browser binaries, or browser launch permissions can still prevent a scan. Report those execution failures separately from accessibility findings; do not install dependencies or weaken browser security settings to make the scan run.

## Use the repository configuration and rendered site

Read [the repository configuration](../../../.pa11yci) before testing. Always run from the repository root with `--config .pa11yci`, including for targeted URLs. Preserve its `defaults`, especially `runners`, `hideElements`, `ignore`, standard, timeout, concurrency and reporters. Do not silently override these or add exclusions to make results pass.

Build/serve the affected source using the applicable scripts in [package.json](../../../package.json). For Jekyll, `npm start` serves the site at `http://localhost:4000`; verify the target page is reachable before scanning. Build ART from `src/` when affected and verify that the served `/art/` reflects that build. Reuse an existing suitable server when available.

For a scoped task, run the actual affected page URLs, for example:

```sh
pa11y-ci --config .pa11yci http://localhost:4000/
```

Replace the example URL with the task's rendered page URLs. A URL scan does not exercise every interactive state; assess affected controls, errors and complete processes separately.

For a requested sitemap scan, after the availability and server checks:

```sh
npm run test:a11y
```

That script uses `.pa11yci`, the local `/sitemap.xml`, and the existing `/assets/online-training/.*` sitemap exclusion. Inspect the sitemap's `<loc>` URLs first: fetching a sitemap locally does not guarantee that its entries point to the local build. If they point elsewhere, use a direct `pa11y-ci` invocation with the same config/exclusion and the installed CLI's `--sitemap-find` and `--sitemap-replace` options to target the intended local server; record the exact command and rewrite. Do not scan production unintentionally or describe a sitemap scan as coverage of excluded or unlisted pages/states.

## Preserve evidence and report coverage

- Capture the exact command, tool version, source revision, target URLs, environment, exit status, console findings and any execution errors. Read the results rather than relying on the exit code alone.
- Preserve initial results before remediation and capture retest results separately. The current config requests CLI and JSON reporting with `pa11y-ci-results.json` as the output path. Verify whether the installed version actually writes that file; do not claim a report exists without checking. Preserve console output and report configuration/version incompatibilities if it does not.
- List the effective hidden selectors, ignored rules and URL exclusions as coverage limits. In the current config, the runners are `axe` and `htmlcs`, the standard is `WCAG2AA`, and `frame-tested`, `video-caption` and `color-contrast` are ignored. Read the file for the current values rather than assuming these remain unchanged.
- Hidden content and ignored checks still require appropriate separate testing, including shared navigation when affected. A configured automated pass supplies limited evidence under those settings; it does not establish full WCAG 2.2, Baseline or Section 508 conformance. Continue [guided manual testing](../workflows/guided-manual-testing.md) and record human-review gaps.

CLI/configuration behavior: [pa11y-ci documentation](https://github.com/pa11y/pa11y-ci#command-line-interface). Hidden-element and ignored-rule behavior: [Pa11y options](https://github.com/pa11y/pa11y#hideelements-string). Check the installed version's help when options differ from current upstream documentation.
