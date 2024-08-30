---
layout: page
sidenav: true
permalink: test/checklist/email-messages/
type: test
title: 'Checklist for Accessible Email Messages'
contributors: fhwa
created: 2024-08-28
updated: 
topic: "Testing (test)"
sub-topic: "Email"
audience:
- "Federal employee (fedemp)"
- "Public (public)"
- "Content Creators (creator)"
- "Developers and Testers (dev-test)"
resource-type: "Process/How-to"
format: "HTML (html)"
---
Electronic content, including email messages sent to the public, between agencies, or as [agency official communication]({{site.baseurl}}/content/glossary/#agency-official-communications), must comply with Section 508 Standards. This ensures that all individuals, including those with disabilities, can easily read, understand, and interact with the content using assistive technologies or accessible design practices.

This checklist for email messages covers five key areas to help incorporate accessibility when creating email content, including GovDelivery bulletins and newsletters. These five areas provide the foundation for making information accessible to everyone, aiming to make the experience as easy and frustration-free as possible. This checklist is a quick reference guide and does not serve as a substitute for a comprehensive understanding of conformance requirements.

## Structure
The following table outlines key accessibility checks for email messages focusing on specific elements such as titles, headings, paragraphs, lists, tables, and links.

<table class="usa-table usa-table--borderless">
  <caption>Table 1: Ensure email messages are well-structured</caption>
  <thead>
    <tr>
      <th scope="col" style="min-width:140px">Check Name</th>
      <th scope="col">How to Check Email Message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Title</td>
      <td>Use the <span>'Title'</span> style once. This is based on the Normal Paragraph style. Note: Where a document is intended as a PDF, use <span>'Heading 1'</span> in place of <span>'Title'</span> as PDF documents do not have a <span>'Title'</span> tag.</td>
    </tr>
    <tr>
      <td>Headings</td>
      <td>Style all visual headings and subheadings. Start with <span>'Heading 1'</span> and work down in hierarchical order.</td>
    </tr>
    <tr>
      <td>Paragraph</td>
      <td>Use the “Normal" style for paragraphs.</td>
    </tr>
    <tr>
      <td>Lists</td>
      <td>Use the “List” Tool to create unordered (bullets), ordered (numbers or letters), and multilevel lists.</td>
    </tr>
    <tr>
      <td>Tables</td>
      <td>Use the “Table” Tool to insert simple tables, and indicate header and row columns.</td>
    </tr>
    <tr>
      <td>Links</td>
      <td>Use unique and <a href="{{site.baseurl}}/blog/accessibility-bytes/descriptive-links-and-hypertext/">descriptive links and hypertext</a>. Avoid using vague terms like “click here” or “read more.”</td>
    </tr>
    <tr>
      <td>Spacing Elements</td>
      <td>Adjust the space before and after an element by editing the element’s style. For example, do not create a blank paragraph by pressing enter twice, but by editing the paragraph properties.</td>
    </tr>
    <tr>
      <td>Styles</td>
      <td>Styles are named for their structural role which is announced to screen reader users. Rather than applying a text <em>style</em> for it's look, apply the correct <em>style</em> for the content and modify the look to suit your needs.</td>
    </tr>
    <tr>
      <td>Signature Block</td>
      <td>Ensure that the signature block complies with agency policy and is free of slogans and personal or extraneous statements or messages.</td>
    </tr>
  </tbody>
</table>

## Styles
- plain language 
- jargon, acronyms and initialisms
- 

## Graphics
The following table outlines key accessibility checks for email messages focusing on specific elements such as background use, alt text for images, captions, and the use of images containing text.

<table class="usa-table usa-table--borderless">
  <caption>Table 2: Ensure proper use of graphics in email messages.</caption>
  <thead>
    <tr>
      <th scope="col" style="min-width:140px">Check Name</th>
      <th scope="col">How to Check Email Message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Background</td>
        <td>Ensure that the email message is free of custom stationary, wallpaper, background images or watermarks.</td>
    </tr>
    <tr>
      <td>Alt Text</td>
      <td>Add an alternative text description for all meaningful images. Use as few words as possible to convey the purpose and meaning of the image.</td>
    </tr>
    <tr>
      <td>Captions</td>
      <td>Captions describe an image differently than alt text. Captions should not repeat the alt text, but provide additional information about the image, or information that's related to it but not in the image itself.</td>
    </tr>
    <tr>
      <td>Images of Text</td>
      <td>Avoid text as graphics. This applies to content copied from another source. Acceptable uses of text as a graphic include logos, infographics, and flow charts.</td>
    </tr>
  </tbody>
</table>

## Sensory Characteristics
The following table outlines key accessibility checks for email messages focusing on specific elements such as shapes, position, color, and animations and audio and video media.

<table class="usa-table usa-table--borderless">
  <caption>Table 3: Avoid elements and content attributes that depend on visual or audio perception.</caption>
  <thead>
    <tr>
      <th scope="col" style="min-width:140px">Check Name</th>
      <th scope="col">How to Check Email Message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Shapes</td>
      <td>Avoid references to shape, size, sound, color, or location.</td>
    </tr>
    <tr>
      <td>Color Contrast</td>
      <td>Ensure that normal sized text (and images of text) on a background has a 4.5:1 contrast ratio.</td>
    </tr>
    <tr>
      <td>Color Only</td>
      <td>Ensure that charts and graphs that use color to convey meaning include another visual element (like a symbol or text) to convey the same meaning.</td>
    </tr>
    <tr>
      <td>Pause, Stop, Hide</td>
      <td>Avoid For moving, blinking, scrolling, or auto-updating information when possible. Best Practice is to not use content that automatically moves, blinks, or scrolls. Where essential, ensure that the user can pause, stop, or hit content.</td>
    </tr>
  </tbody>
</table>

## Data Tables
The following table outlines key accessibility checks for email messages with a focus on structured data elements such as data tables and their headings, images of tables, and consistency.

<table class="usa-table usa-table--borderless">
  <caption>Table 4: Use tables for data, not structure</caption>
  <thead>
    <tr>
      <th scope="col" style="min-width:140px">Check Name</th>
      <th scope="col">How to Check Email Message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table Data</td>
      <td>Tables must be used for structured data. Avoid creating tables by using tabs and spaces. Avoid tables for layout. If unavoidable, tab through content to confirm correct reading order.</td>
    </tr>
    <tr>
      <td>Images of Tables</td>
      <td>Avoid inserting or attaching images of tables. When tables are neccesary to provide structured information, either insert the a table using built-in tools, or attach as a conformant spreadsheet.</td>
    </tr>
    
    <tr>
      <td>Headers</td>
      <td>Ensure each column and row has a header(s).</td>
    </tr>
    <tr>
      <td>Completeness</td>
      <td>Ensure that there are no missing cells in any table row. Blank data cells are acceptable.</td>
    </tr>
    <tr>
      <td>Spacing</td>
      <td>Avoid putting two or more tables together either side by side or top to bottom.</td>
    </tr>
    <tr>
      <td>Normalize</td>
      <td>Ensure that only data is in the table. Do not use a table cell to provide caption the table or add footnotes/endnotes.</td>
    </tr>
  </tbody>
</table>

## Sending and Saving Files
The following table outlines key accessibility checks for email messages focusing on sending file  attachment(s), and saving email messages as a file.

<table class="usa-table usa-table--borderless">
  <caption>Table 5: </caption>
  <thead>
    <tr>
      <th scope="col" style="min-width:140px">Check Name</th>
      <th scope="col">How to Check Email Message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sending Attachements</td>
      <td>Ensure that all attachements conform with applicable electronic document standards. Embedded images should contain alternative text descriptions or be omitted.</td>
    </tr>
    <tr>
      <td>Saving Email Messages</td>
      <td>Like other office productivity files, when saving email messages as a file use a unique and descriptive file name in either .MSG or .EML format. Microsort Outlook use the MSG file format to store individual emails, tasks, meetings, and more. This format is compatible with all versions of Outlook for Windows. You can also save emails as EML files, which are similar to text files and can be opened in any text editor, and compatible with Google Workspace for Government Gmail.</td>
    </tr>
  </tbody>
</table>

**Reviewed/Updated:** August 2024