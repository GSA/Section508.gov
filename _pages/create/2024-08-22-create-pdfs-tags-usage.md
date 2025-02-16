---
layout: page
sidenav: true
permalink: create/pdfs/common-tags-and-usage/
type: create
title: 'Common PDF Tags and Their Usage'
contributors: mcgland-denise, ed
created: 2024-08-22
updated: 
topic: "Content creation (create)"
sub-topic: "PDFs"
audience:
- "Federal employee (fedemp)"
- "Public (public)"
- "Content Creators (creator)"
- "Developers and Testers (dev-test)"
resource-type: "Process/How-to"
format: "HTML (html)"
---
As with all types of data, structure is crucial to how readers navigate, access, and comprehend information. Tags are the structural foundation of an accessible Portable Document File (PDF). Each piece of content has a corresponding <span class="code-text"><strong>tag</strong></span> that dictates how it is understood and read by assistive technology. This guide helps document authors understand why and how each commonly used tag is used in making an accessible PDF.

## Root Tag
The first tag in any PDF should always be a <span class="code-text"><strong>&lt;Document></strong></span> tag. All tags within a PDF will either be nested directly below it within a container/grouping tag or within a block-level tag.

<table class="usa-table usa-table--borderless">
  <caption>
    Table 1: Root Tag
  </caption>
  <thead>
    <tr>
      <th scope="col">Tag</th>
      <th scope="col">Name</th>
      <th scope="col">Purpose</th>
      <th scope="col" style="width:180px;">Show Me</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><span class="code-text">&lt;Document></span></th>
      <td>Document</td>
      <td>Main tag under which all other tags are nested</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-01.jpg" alt="Screenshot of the tags panel showing the 'Document' tag with its tag symbol."></td>
    </tr>
  </tbody>
</table>

## Container/Grouping Tags
Container/grouping tags are not required, but they can be helpful to group tags by chapter or to separate call-out text. They exist directly under the <span class="code-text"><strong>&lt;Document></strong></span> tag.

<table class="usa-table usa-table--borderless">
  <caption>
    Table 2: Container/Grouping Tags
  </caption>
  <thead>
    <tr>
      <th scope="col">Tag</th>
      <th scope="col">Name</th>
      <th scope="col">Purpose</th>
      <th scope="col" style="width:180px;">Show Me</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><span class="code-text">&lt;Part></span></th>
      <td>Part</td>
      <td>Large major section of the document (e.g., a chapter of a report)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-02.jpg" alt="Screenshot of the tags panel showing the 'Part' tag as the parent element to an 'H1' and 'H2', each with a tag symbols, and a 'P' tag with its paragraph symbol (&para;)."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;Sect></span></th>
      <td>Section</td>
      <td>Small section within a larger part (e.g., pull quote, sidebar, or boxed text)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-03.jpg" alt="Screenshot of the tags panel showing the 'SECT' tag as the parent element to two 'P' tags, each with its paragraph symbol (&para;)."></td>
    </tr>
  </tbody>
</table>

## Text Tags
### Block-Level Heading Tags
Heading tags designate the heading structure and hierarchy of the document. They exist directly below the <span class="code-text"><strong>&lt;Document></strong></span> tag.

<table class="usa-table usa-table--borderless">
  <caption>
    Table 3: Block-Level Heading Tags
  </caption>
  <thead>
    <tr>
      <th scope="col">Tag</th>
      <th scope="col">Name</th>
      <th scope="col">Purpose</th>
      <th scope="col" style="width:180px;">Show Me</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><span class="code-text">&lt;H1></span></th>
      <td>Heading 1</td>
      <td>Document’s title</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-04.jpg" alt="Screenshot of the tags panel showing the 'H1' tag along with its tag symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;H2></span></th>
      <td>Heading 2</td>
      <td>Chapter or main-level headings</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-05.jpg" alt="Screenshot of the tags panel showing the 'H2' tag along with its tag symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;H3> - &lt;H6></span></th>
      <td>Heading 3 - Heading 6</td>
      <td>Subsequent subheadings</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-06.jpg" alt="Screenshot of the tags panel showing the 'H3' tag along with its tag symbol."></td>
    </tr>
  </tbody>
</table>

### Block-Level Text Tags
Block-level text tags designate the main text components of a document, like body text and lists, among others. They exist directly below the <span class="code-text"><strong>&lt;Document></strong></span> tag.

<table class="usa-table usa-table--borderless">
  <caption>
    Table 4: Block-Level Text Tags
  </caption>
  <thead>
    <tr>
      <th scope="col">Tag</th>
      <th scope="col">Name</th>
      <th scope="col">Purpose</th>
      <th scope="col" style="width:180px;">Show Me</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><span class="code-text">&lt;P></span></th>
      <td>Paragraph</td>
      <td>Body text (most often used tag)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-07.jpg" alt="Screenshot of the tags panel showing the 'P' tag along with its paragraph symbol (¶)."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;L></span></th>
      <td>List</td>
      <td>Main tag under which all list items are nested</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-08.jpg" alt="Screenshot of the tags panel showing the 'L' tag as the parent element to a 'LI' tag, which is a parent element to a 'Lbl' and 'Body' tag, each with its own tag symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;LI></span></th>
      <td>List Item</td>
      <td>Each item (bullet and associated text) within a list</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-08.jpg" alt="Screenshot of the tags panel showing the 'L' tag as the parent element to a 'LI' tag, which is a parent element to a 'Lbl' and 'Body' tag, each with its own tag symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;Lbl></span></th>
      <td>Label</td>
      <td>Bullet identifier (e.g., bullet point, number, letter)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-08.jpg" alt="Screenshot of the tags panel showing the 'L' tag as the parent element to a 'LI' tag, which is a parent element to a 'Lbl' and 'Body' tag, each with its own tag symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;LBody></span></th>
      <td>Label Body</td>
      <td>Text of a bulleted list item</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-08.jpg" alt="Screenshot of the tags panel showing the 'L' tag as the parent element to a 'LI' tag, which is the parent element to a 'Lbl' and 'Body' tag, each with its own tag symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;TOC></span></th>
      <td>Table of Contents</td>
      <td>Main tag under which all Contents TOC items are nested</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-09.jpg" alt="Screenshot of the tags panel showing the 'TOC' tag as the parent element to a 'TOCI' tag, which is the parent element to a 'Reference' tag, the parent element to a 'Link' tag, each with its own tag symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;TOCI></span></th>
      <td>TOC Item</td>
      <td>TOC entry (houses the <span class="code-text">&lt;Reference></span> and <span class="code-text">&lt;Link></span> tag for the TOC entry and its Link - OBJR)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-09.jpg" alt="Screenshot of the tags panel showing the 'TOC' tag as the parent element to a 'TOCI' tag, which is the parent element to a 'Reference' tag, the parent element to a 'Link' tag, each with its own tag symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;Caption></span></th>
      <td>Caption</td>
      <td>Figure or table caption (placed above or below the figure or table depending on the physical page structure)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-10.jpg" alt="Screenshot of the tags panel showing the 'Caption' and 'Figure' tag, each with its tag symbol."><br />
      <img src="{{site.baseurl}}/assets/images/pdf-tags-figure-11.jpg" alt="Screenshot of the tags panel showing the 'Caption' tag with its tag symbol, and a 'Table' tag, with its grid symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;BlockQuote></span></th>
      <td>Quote</td>
      <td>Block quotes (i.e., long quote in its own paragraph)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-12.jpg" alt="Screenshot of the tags panel showing the 'BlockQuote' tag with its tag symbol."></td>
    </tr>
  </tbody>
</table>

### Character-Level Text Tags
Character-level tags are nested under a block-level tag, so they should never appear directly under the <span class="code-text"><strong>&lt;Document></strong></span> tag.

<table class="usa-table usa-table--borderless">
  <caption>
    Table 5: Character-Level Text Tags
  </caption>
  <thead>
    <tr>
      <th scope="col">Tag</th>
      <th scope="col">Name</th>
      <th scope="col">Purpose</th>
      <th scope="col" style="width:180px;">Show Me</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><span class="code-text">&lt;Link></span></th>
      <td>Hyperlinks</td>
      <td>Active link (e.g., URL, email address)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-13.jpg" alt="Screenshot of the tags panel showing the 'P' tag as the parent element to a 'Link' tag, which is the parent element to a the object 'www.ed.gov', with its box symbol, and a 'Link' tag each with its tag symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;OBJR></span></th>
      <td>Object Reference</td>
      <td>Active component of the Reference link or reference; must be present within <span class="code-text">&lt;Link></span> tag</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-13.jpg" alt="Screenshot of the tags panel showing the 'P' tag as the parent element to a 'Link' tag, which is the parent element to an object 'www.ed.gov', with its box symbol, and a 'Link' tag each with its tag symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;Reference></span></th>
      <td>Reference</td>
      <td>Internal link (e.g., cross- reference, footnote, TOC)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-14.jpg" alt="Screenshot of the tags panel showing the 'P' tag, with its paragraph symbol (&para;), as the parent element to a 'Reference' tag, which is the parent element to a 'Link' tag, each with its box symbol, and a 'Link' tag, each with its tag symbol, as the parent element to a box object '1', and a 'Link - OBJR' tag."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;Span></span></th>
      <td>Span</td>
      <td>Separator for differently formatted text (e.g., italics, bolding, track changes, highlighting)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-15.jpg" alt="Screenshot of the tags panel showing the 'P' tag, with its paragraph symbol (&para;), as the parent element to a 'Span' tag, with its tag symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;Note></span></th>
      <td>Note</td>
      <td>Footnote, endnote, or source note</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-16.jpg" alt="Screenshot of the tags panel showing the 'P' tag, with its paragraph symbol (&para;), as the parent element to object 'Postsecondary...', with its box symbol, a 'Reference' and 'Note' tag, each with a tag symbol, followed by another object 'If a student with...'. The 'Reference' tag is a parent element to a 'Link' tag, which is a parent to an object '33' and 'Link - OBJR' tag. The 'Note' element is also a parent of an object '33 42 U.S.C. §...' with its box symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;Form></span></th>
      <td>Form</td>
      <td>Interactive form-fillable elements (e.g., checkboxes, fillable text, signatures)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-17.jpg" alt="Screenshot of the tags panel showing the 'P' tag, with its paragraph symbol (&para;), as the parent element to a 'Forms' tag, which is the parent element to a 'Last Name - OBJR' tag, each with a tag symbol."></td>
    </tr>
  </tbody>
</table>

## Figure and Formula Tags
Figure and Formula tags contain all image-related tags. They exist below the <span class="code-text"><strong>&lt;Document></strong></span> tag. For both, descriptive alt text should be embedded in the properties of the tag.

<table class="usa-table usa-table--borderless">
  <caption>
    Table 6: Figure and Formula Tags
  </caption>
  <thead>
    <tr>
      <th scope="col">Tag</th>
      <th scope="col">Name</th>
      <th scope="col">Purpose</th>
      <th scope="col" style="width:180px;">Show Me</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><span class="code-text">&lt;Figure></span></th>
      <td>Figure</td>
      <td>Graphic element (e.g., logo, illustration, photo, chart,)</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-18.jpg" alt="Screenshot of the tags panel showing the 'Figure' tag, with its tag symbol, as the parent element to a 'Image (5)' object, with its box symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;Formula></span></th>
      <td>Formula</td>
      <td>Mathematical formula</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-19.jpg" alt="Screenshot of the tags panel showing the 'Formula' tag, with its tag symbol."></td>
    </tr>
  </tbody>
</table>

## Table Tags
Table tags contain all table-related tags. They exist below the <span class="code-text"><strong>&lt;Document></strong></span> tag.

<table class="usa-table usa-table--borderless">
  <caption>
    Table 7: Table Tags
  </caption>
  <thead>
    <tr>
      <th scope="col">Tag</th>
      <th scope="col">Name</th>
      <th scope="col">Purpose</th>
      <th scope="col" style="width:180px;">Show Me</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><span class="code-text">&lt;Table></span></th>
      <td>Table</td>
      <td>Main tag that houses all table tag components</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-20.jpg" alt="Screenshot of the tags panel showing the 'Table' tag, with its grid symbol, as the parent element to a 'TR' tag, with its grid row symbol, which is the parent element to a 'TH', with its grid header symbol, and two 'TD' tags, each with its grid cell symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;TR></span></th>
      <td>Table Row</td>
      <td>Main tag that houses all tags within a specific row</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-20.jpg" alt="Screenshot of the tags panel showing the 'Table' tag, with its grid symbol, as the parent element to a 'TR' tag, with its grid row symbol, which is the parent element to a 'TH', with its grid header symbol, and two 'TD' tags, each with its grid cell symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;TH></span></th>
      <td>Table Header</td>
      <td>Heading cells within table row tag</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-20.jpg" alt="Screenshot of the tags panel showing the 'Table' tag, with its grid symbol, as the parent element to a 'TR' tag, with its grid row symbol, which is the parent element to a 'TH', with its grid header symbol, and two 'TD' tags, each with its grid cell symbol."></td>
    </tr>
    <tr>
      <th scope="row"><span class="code-text">&lt;TD></span></th>
      <td>Table Data</td>
      <td>Data cells within table row tag</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-20.jpg" alt="Screenshot of the tags panel showing the 'Table' tag, with its grid symbol, as the parent element to a 'TR' tag, with its grid row symbol, which is the parent element to a 'TH', with its grid header symbol, and two 'TD' tags, each with its grid cell symbol."></td>
    </tr>
  </tbody>
</table>

## Other Tags
Elements that convey no meaning can be converted to an artifact so that they will not appear in the Tag tree. Screen readers will not read artifacted content. Artifacts can be created via the Content panel and will only appear there.

<table class="usa-table usa-table--borderless">
  <caption>
    Table 9: Other Tags
  </caption>
  <thead>
    <tr>
      <th scope="col">Tag</th>
      <th scope="col">Name</th>
      <th scope="col">Purpose</th>
      <th scope="col" style="width:180px;">Show Me</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><span class="code-text">&lt;Artifact></span></th>
      <td>Artifact</td>
      <td>Decorative images, non-essential content</td>
      <td><img src="{{site.baseurl}}/assets/images/pdf-tags-figure-21.jpg" alt="Screenshot of the tags panel showing the 'Artifact' tag, with a box symbol similar to the objects symbol."></td>
    </tr>
  </tbody>
</table>

<div style="width: 100%; border: 1px solid black; background-color: #f5f9fc;" class="border-base radius-lg padding-1">
  <p><strong>NOTE: </strong>Images of tags and their relationships are taken from the Tags panel within Adobe Acrobat Pro for training purposes and do not imply that GSA or ED endorses the product.</p>
</div>

**Reviewed/Updated:** August 2024