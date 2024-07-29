---
layout: page
sidenav: true
permalink: test/testing-for-developers/
type: test
title: 'Testing Guidance for Developers'
created: 1526587845
redirect_from:
- create/testing-for-developers/
topic: Testing (test)
sub-topic: Accessibility Standards, Procedures, Guidance, Best Practices
audience:
- Developers and Testers (dev-test)
- 508 Program Manager (508pm)
- Information Technology Program and Project Managers (itpm)
- Content Creators (creator)
- Chief Information Officer (cio)
resource-type: Process/How-to
format: HTML (html)
---

The best way to meet the  [Revised 508 Standards][1] is to use the harmonized test methods published by the Federal CIO Council Accessibility Community of Practice (ACOP). These guidelines are designed to produce repeatable results and harmonize test practices across Federal agencies. The rule sets establish a minimum set of requirements, and you are encouraged to improve upon them.

  * [Accessibility Testing][2] - ACOP test guidelines for web, apps, Microsoft, and PDF documents

## Content Types

All public facing electronic content, including applications and interactive content, must meet the Revised 508 Standards. All internal-facing electronic content that falls within at least one of the nine categories of &ldquo;Agency Official Communications&rdquo; found in [Section E205][3] must be accessible.

## Training

Assess how accessibility is addressed in the rule sets your agency uses, to determine the type and extent of training you will need. If your development and authoring best practices and test rules do not currently address accessibility, it will take you longer to learn to test content for accessibility than it would if you were merely updating current practices aimed at meeting the Original 508 Standards. The harmonized test processes published by the ACOP already incorporate most of the Revised 508 Standards.

## Automated Scanning Tools

Automated testing for WCAG 2.0 conformance is not new. There are several types of tools, including workstation-based, server-based, and hybrid tools. Workstation-based tools generally cost less, and can be helpful for small volumes of electronic content, or for small development group use. Server-based tools are generally higher cost but can help larger organizations assess large amounts of electronic content, and can help dispersed development groups more effectively share conformance test results. Hybrid automated tools require significant upfront planning and implementation work, but can be integrated into existing development or authoring workflows using application programming interfaces (APIs), with great results.

Automated evaluation tools reduce but rarely eliminate the need for manual accessibility testing, because human judgment is often required to determine conformance. While automated tools are helpful when used properly, improper use can result in false assurances of conformance or, at a minimum, confusion among authors and developers.

If you plan to use automated evaluation tools, validate them against the Revised 508 Standards to know if they evaluate content correctly and produce consistent results. Address issues of incorrect, inconsistent, or incomplete results upfront during implementation.

Ask for validation data from prospective automated tool sources. Decide how automated test rules can be modified if you find inaccuracies, and determine how you will maintain your test rules.

Automated web evaluation tools should test HTML as it appears on the rendered page in the browser document object model (DOM). Tools should evaluate against what end-users will experience. Will the test results be used with associated manual test results, as periodic bulk rough measures of conformance, to track progress towards a goal, or for some other purpose? If you are using automated tools to locate trouble spots, you need to have a consistent way to identify and rank the severity of failures, and a reasonable way to aggregate such information for reporting.

  * [Web Accessibility Evaluation Tools List][4]&nbsp;- List of web accessibility evaluation tools maintained by the W3C

## Automated vs. Manual Testing

When purely yes/no answers are required, even if they are a complicated set of true/false logical conditions, automated tools can do well. However, automated tools cannot compare various options for remediation against one another, or determine if the accessibility error must be remediated.

For example, automated tools can easily identify if an image element has an alt attribute, and possibly if the text content in the alt attribute is insufficient (e.g., a filename). However, automated tools cannot determine if an image is decorative, or if the text in the alt attribute appropriately describes the important information in the image. Such an evaluation requires understanding of what content, if any, the image conveys, and how best to describe the content in context. This is an example of where an automated testing tool is no substitute for human judgment.

You may need to revalidate your testing results, since the WCAG 2.0 Level AA algorithms used by automated testing tools differ somewhat from those used for the Original 508 Standards (which were largely based on WCAG 1.0). If you use automated evaluation tools for Microsoft SharePoint sites, consider how Microsoft SharePoint works, and how the automated rules work in conjunction, to avoid false negative or positive results.


**Reviewed/Updated:** November 2018


 [1]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines
 [2]: {{site.baseurl}}/test
 [3]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/single-file-version#E205-content
 [4]: https://www.w3.org/WAI/ER/tools/