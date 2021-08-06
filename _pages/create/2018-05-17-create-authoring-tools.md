---
layout: page
sidenav: true
permalink: create/authoring-tools/
type: create
title: 'Authoring Tool Requirements'
created: 1526591762
---

The [Revised 508 Standards][1] include new requirements for authoring tools. From the definitions section (E103.4) of the Revised 508 Standards:

_**Authoring Tool:** any software, or collection of software components, that can be used by authors, alone or collaboratively, to create or modify content for use by others, including other authors._

Examples include:

  * Word processors
  * Presentation creation tools
  * Video editing tools
  * Software used to develop software
  * Web content management systems (CMS)
  * Collaboration software
  * Wikis, and
  * Conferencing/meeting software with an authoring tool in its feature set.

The Revised 508 Standards include an exception when working in a raw text format, so an application such as Notepad (which can be used as an authoring tool) complies with the Revised 508 Standards, because it only functions as an editor of plain text files.

If accessibility is not considered from the start of the creative process, special (and often-unsuccessful) workarounds must be employed to make the output accessible (i.e., meet the standards). Such workarounds are usually found by trial and error, rarely documented, and usually not shared within the authoring or developer community. In the worst case, accessibility simply may not be addressed because authors and developers are unaware of their responsibilities, or the resources available to meet those responsibilities

### Output Requirements

Because electronic content is specifically called out in the Revised 508 Standards, authoring tools must allow the author to produce output that conforms to WCAG Level A and Level AA Success Criteria and Conformance Requirements.

See [Section 504 of the Revised 508 Standards][2] for specifics. Topics include:

  * **504.2 Content Creation or Editing** - Ensures that authoring tools allow you to create or edit accessible content
  * **504.2.1 Preservation of Information Provided for Accessibility in Format Conversion** - When converting content from one format to another, or saving content in multiple formats, ensures that authoring tools preserve as much accessibility information as possible
  * **504.2.2 PDF Export** - Ensures that you don’t lose accessibility information when converting from one format to another
  * **504.3 Prompts** - Ensures that authoring tools prompt you to create accessible content; for example, when adding images, the tool should prompt you to add alternative text 
  * **504.4 Templates** - Ensures that those authoring tools that come with templates include some that are accessible

If your software lets you create or edit content, or save content in PDF format, then the software is probably an authoring tool. Determine whether the software meets the above requirements by either asking the vendor, testing the tool, or both. Also request the vendor provide samples (also known as reference outputs) of at least one example of every type of interface element. The sample might be as simple as a PDF report, or as complicated as a complete application or website. Use the samples to test the interface elements, so you’ll know if the software is conformant (or not).

Clear authoring guidelines are usually a good indication that those tools can produce accessible outputs. See these [Accessibility Testing resources][3] for examples.

**Reviewed/Updated:** May 2018

 [1]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines
 [2]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#504-authoring-tools
 [3]: {{site.baseurl}}/test