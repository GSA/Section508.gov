---
layout: post
permalink: blog/accessibility-bytes/document-headings/
type: article
title: 'Accessibility Bytes No. 6: Document Headings'
tags: Accessibility-Bytes Content-Creation Testing #choose one or more (comma separated): Accessibility-Bytes, Acquisition, Content-Creation, Design-and-Develop, Events, Policy-and-Management, Testing 
social_img: '{{site.baseurl}}/assets/images/social-media-og-image-bytes.jpg'
created: 2024-10-16
description: "<strong>Do you know some people rely on content structure to navigate the information within a document?</strong><p>The good news is that document authors can quickly format programmatic headings to enable screen reader users to navigate documents easily, ensuring equal access, unlike visual readers who rely on heading appearance."
contributors: 
redirect_from:
- blog/accessibility-bytes/6/ #Allows users to navigate by number
---
<h2 style="line-height:1.2;">Do you know some people rely on content structure to navigate the information within a document?</h2>
Visual readers use the appearance of headings to understand content relationships and to quickly find the sections they want to read. However, without properly formatted programmatic headings, screen reader users cannot easily jump between sections. Instead, they must read the entire document to locate specific content. Fortunately, document authors can ensure equal access by using built-in styles in document authoring tools to properly structure their content.

<div class="tablet:grid-col" style="margin: auto; max-width: 100%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/byte-006-figure-1.jpg" alt="Microsoft Word Style Pane showing various styles such as Normal, No Spacing, Heading 1, Heading 2, Heading 3, and others." aria-describedby="figure-1" class="border-2px border-base-light shadow-2 padding-1">
    </div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 98%; text-align: center;"><span id="figure-1"><strong>Figure 1.</strong> Microsoft Word Style Pane.</span>
    </div>
</div>

## How Heading Structure Works
A document’s heading structure acts like an outline, organizing content into different levels of importance. The main title (Heading 1) introduces the overall topic, while subheadings (Heading 2 and below) break the content into sections and details. This hierarchy helps readers quickly scan and understand the relationships between sections. For instance, Heading 2 introduces major sections under Heading 1, and Heading 3 further breaks down those sections.

<div class="tablet:grid-col" style="margin: auto; max-width: 85%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/byte-006-figure-2.jpg" alt="Microsoft Word Style Pane showing various styles such as Normal, No Spacing, Heading 1, Heading 2, Heading 3, and others." aria-describedby="figure-2" class="border-2px border-base-light shadow-2 padding-1">
    </div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 98%; text-align: center;"><span id="figure-2"><strong>Figure 2.</strong> Example of correct and incorrect Heading structure.</span>
    </div>
</div>

## Why Heading Order Matters
Heading structures must follow a logical sequence to guide the reader smoothly. Skipping heading levels (like jumping from Heading 1 to Heading 4) disrupts this flow and makes it difficult for readers, especially those using screen readers, to comprehend the document’s organization. Heading 2 should follow Heading 1, and Heading 3 should only be used within sections introduced by Heading 2. This logical progression ensures clarity for all users.

## How to Start Using Headings
No matter which office software you use, you can apply heading styles in three steps:

1. Type your heading text,
2. Highlight the text to be styled, then
3. Select the appropriate Heading level from the style pane. 

<div class="border-base radius-lg border-1px padding-1" style="width: 100%; background-color: #f5f9fc;">
<strong>PRO TIP:</strong> Open the Document Map in MS Word, or Document Outline in Google Workspace to monitor your headings and hierarchy as you type. (Figure 3).
</div>

<div class="tablet:grid-col" style="margin: auto; max-width: 100%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/byte-006-figure-3.jpg" alt="Screenshot of an MS Word document with placeholder headings with text and highlighting the styles Normal, Heading 1, Heading 2, and Heading 3 in the Styles Pane, and the Document Map displaying the structure of the example text that has a structured order of Heading 1, Heading 2, Heading 3, Heading 3, Heading 4, Heading 4, Heading 3 and Heading 3." aria-describedby="figure-3" class="border-2px border-base-light shadow-2 padding-1">
    </div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 98%; text-align: center;"><span id="figure-3"><strong>Figure 3.</strong> Example of a MS Word document highlighting the Styles Pane in the Home ribbon, and the Document Map tab in the Navigation Pane available within the View ribbon.</span>
    </div>
</div>

If your organization uses standard templates, ensure that the template’s styles for headings and normal text meet accessibility standards. While using an accessible template doesn't guarantee an accessible document, it can help improve efficiency, reduce remediation needs, and minimize delays in meeting accessibility requirements.

For more guidance on document Headings, visit resources for [document creators]({{site.baseurl}}/create/documents/) to include the [Module 2: Use Styles to Create Headings]({{site.baseurl}}/training/documents/aed-cop-docx02/).

<div class="border-base radius-lg border-1px padding-1" style="width: 100%; background-color: #f5f9fc;">
To subscribe to, manage, or unsubscribe from <em>Accessibility Bytes</em>, visit <a href="https://public.govdelivery.com/accounts/USGSA/subscriber/new?topic_id=USGSA_1324" target="_blank" class="usa-link--external">GSA Email Updates</a>.
</div>

**Reviewed/Updated:** October 2024