# Contributing

Thank you for helping improve Section508.gov. This repository supports a public-facing government website, so useful contributions include content corrections, accessibility improvements, bug fixes, documentation updates, data maintenance, and improvements to the Accessibility Requirements Tool (ART).

## Project Expectations

Section508.gov is maintained as an open source GSA project. Contributors should follow the [GSA Open Source Software Policy](https://www.gsa.gov/directives-library/gsa-open-source-software-oss-policy-1) and related guidance at [open.gsa.gov](https://open.gsa.gov/).

Please keep interactions respectful, constructive, and focused on improving the public resource. Maintainers may ask for revisions when a contribution needs policy review, content review, accessibility review, security review, or technical changes before it can be merged.

## Before You Contribute

- Check the existing issues and pull requests to avoid duplicate work.
- For substantial content, design, IA, or tool behavior changes, open an issue first so maintainers can confirm the direction.
- For small fixes, such as typos, broken links, metadata corrections, and focused bug fixes, opening a pull request directly is usually fine.
- Do not include sensitive information, non-public government information, credentials, analytics secrets, or private user data.

## Content Contributions

Most website content lives in `_pages/`, `_posts/`, `_events/`, `_contributors/`, and `_data/`.

When editing content:

- Keep language plain, direct, and useful to federal accessibility practitioners.
- Preserve front matter fields such as `title`, `layout`, `permalink`, `sidenav`, and `redirect_from` unless the change requires updating them.
- Use existing page patterns, headings, includes, and data structures where possible.
- Check related navigation in `_data/sidenav.yaml` when adding, moving, or removing pages.
- Add redirects when changing public URLs.
- Verify that links, downloads, images, tables, headings, and alt text remain accessible.

## Code Contributions

The Jekyll site uses Liquid templates, layouts, includes, Sass, JavaScript, and YAML data. ART uses Angular and TypeScript in `src/`.

When changing code:

- Follow the patterns already used in the affected part of the repository.
- Keep Jekyll and Angular changes scoped unless the work intentionally touches both.
- Do not edit generated files in `_site/`.
- Be careful with `art/`: it contains Angular build output served by the published site.
- Test responsive behavior and accessibility when changing templates, navigation, components, or styles.

## Running Locally

Install dependencies:

```sh
npm install
bundle install
```

Run the Jekyll site:

```sh
npm start
```

Build the site:

```sh
npm run build
```

Useful ART commands:

```sh
npm run start:ang
npm run build:ang
npm run build:art:local
npm run test:ang
```

Useful content library validation commands:

```sh
npm run validate:library
npm run validate:library:offline
npm run validate:library:documents
npm run validate:library:frontmatter
```

## Pull Request Guidance

Pull requests should include:

- A clear summary of what changed and why.
- Links to related issues or requested updates, when available.
- Notes about content, policy, accessibility, or technical review needs.
- The commands you ran, or a short explanation if testing was not possible.
- Screenshots or preview links for visual changes.

Maintainers may request changes before merging. Some content updates may require additional review by subject matter experts or site owners.

## Accessibility

Because this project exists to support Section 508 implementation, accessibility is a core contribution requirement. Changes should preserve or improve keyboard access, semantic structure, visible focus, color contrast, readable content, form labels, alt text, captions or transcripts where applicable, and compatibility with assistive technologies.

## Security

Do not report security vulnerabilities in public issues. Follow the guidance in [SECURITY.md](SECURITY.md).

## Public Domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request or issue, you agree to comply with this waiver of copyright interest.
