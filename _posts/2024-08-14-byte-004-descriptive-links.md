---
layout: post
permalink: blog/accessibility-bytes/descriptive-links-and-hypertext/
type: article
title: 'Accessibility Bytes No. 4: Descriptive Links and Hypertext'
tags: Accessibility-Bytes Content-Creation Testing #choose one or more (comma separated): Accessibility-Bytes, Acquisition, Content-Creation, Design-and-Develop, Events, Policy-and-Management, Testing 
social_img: '{{site.baseurl}}/assets/images/social-media-og-image-bytes.jpg'
created: 2024-08-14
description: "<strong>Do you know some people rely only on the text of a hyperlink to navigate content to find the information they are looking for?</strong><p>By ensuring links are descriptive, clear, and easy to navigate, you help all users, including those with disabilities, to access and understand your content effectively."
contributors: 
redirect_from:
- blog/accessibility-bytes/4/ #Allows users to navigate by number
---
<h2 style="line-height:1.2;">Do you know some people rely only on the text of a hyperlink to navigate content to find the information they are looking for?</h2>

While screen readers can read a full page to a user, screen reader users may prefer instead to listen to a list of links. In that case, a screen reader may only read the link text and not the surrounding text.

Hyperlinks are essential for content accessibility, enabling users to navigate content efficiently. By ensuring links are descriptive, clear, and easy to navigate, you help all users, including those with disabilities, access and understand your content effectively.

To comply with Section 508 Standards and associated Web Content Accessibility Guidelines (WCAG) 2.0 AA, it’s important to create hyperlinks that are clear, descriptive, and accessible to all users, including those using assistive technologies.

## Key Principles for Accessible Hyperlinks
1.  **Descriptive Link Text**
    - Ensure link text is meaningful and descriptive, indicating the purpose or destination of the link.
    - Avoid using vague terms like "click here" or "read more."
    - Example: Use "Download the annual report" instead of "Click here."
2.  **Contextual Clarity**
    - The link text should make sense out of context. Users navigating via screen readers often jump from link to link.
    - Example: "Learn more about our accessibility policy" provides clear context.
3.  **Avoid Using URLs as Link Text**
    - Long URLs can be confusing and difficult to read, especially for screen readers.
    - Instead, use a descriptive phrase that represents the link’s destination.
4.  **Consistent Styling**
    - Ensure hyperlinks are visually distinct from regular text. Typically, links are underlined and in a different color.
    - Avoid removing the underline unless another visual cue is provided other than color.
5.  **Use ARIA Landmarks Wisely**
    -   Avoid overusing ARIA landmarks; rely on native HTML elements first.
    -   Use landmarks like **`role="link"`** sparingly and only when necessary.

### Examples for Implementing Accessible Hyperlinks

#### Example 1: Descriptive Link Text
<div class="code-box" style="width: 100%; background-color: #444;">
    <span class="code-box-text">&lt;a href="annual-report.pdf">Download the annual report&lt;/a></span>
</div>

#### Example 2: Contextual Clarity
<div class="code-box" style="width: 100%; background-color: #444;">
    <span class="code-box-text">&lt;a href="accessibility-policy.html">Learn more about our accessibility policy&lt;/a></span>
</div>

#### Example 3: Avoiding URLs as Link Text
<div class="code-box" style="width: 100%; background-color: #444;">
    <span class="code-box-text">&lt;a href="https://www.example.gov/accessibility-guidelines">View our accessibility guidelines&lt;/a></span>
</div>

## How to Insert a Hyperlink in a Document
Many office productivity suites, such as Microsoft Office and Google Workspace, allow authors to insert hyperlinks. For example, to insert a hyperlink in a Microsoft Word document, use the following steps:

1.  Highlight the document text that you want to make a hyperlink. 
2.  Select the **`Links`** menu on the **`Insert`** ribbon.
3.  Select **`Link`** from the context menu.
4.  Enter the full URL for the existing file or web address in the **`Address`** field.
5.  Select **`OK`** to finish.

<div class="tablet:grid-col" style="margin: auto; max-width: 100%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/byte-004-figure-1.jpg" alt="Document containing sample text with 'Section508.gov' highlighted (Step 1), and arrows pointing to the Links ribbon menu (Step 2), and Link context menus (Step 3)." aria-describedby="figure-2" class="padding-1">
    </div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-2"><strong>Figure 2.</strong> Steps 1 to 3 to open the Insert Hyperlink dialog box.</span>
    </div>
</div>

<div class="tablet:grid-col" style="margin: auto; max-width: 100%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/byte-004-figure-2.jpg" alt="Insert Hyperlink dialog box with Text to Display set to Section508.gov, (Step 4) Web Page or File Address set to https://www.section508.gov, and (Step 5) select OK button." aria-describedby="figure-2" class="padding-1">
    </div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-2"><strong>Figure 2.</strong> Steps 4 to 5 to enter the existing file or web address URL.</span>
    </div>
</div>

<div class="border-base radius-lg border-1px padding-1" style="width: 100%; background-color: #f5f9fc;">
<strong>Pro Tip:</strong> To quickly insert a hyperlink in a Microsoft Word or Google Workspace document, simply highlight the text you want to make a hyperlink, then select <span class="font-mono-sm"><strong>CTRL-K</strong></span> on your keyboard to open the <span class="font-mono-sm"><strong>Insert Hyperlink</strong></span> dialog box.
</div>

## Testing Your Hyperlinks
*   **Visually Inspect**: Visually inspect documents and webpages to ensure link text provides the necessary context.
*   **Programmatically Inspect:** For websites, use tools like [ANDI](https://www.section508.gov/test/web-software/#testing-tools-for-web) and browser-based developer inspection tools to ensure link text is read correctly for screen readers.
*   **Color Contrast:** Verify the color contrast between links and their background meets WCAG 2.0 AA contrast requirements.

## Additional Resources 
* <a href="https://www.section508.gov/blog/accessibility-bytes/color-contrast/" target="_blank" class="usa-link--external">Accessibility Bytes No. 3: Color Contrast</a>
* <a href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html" target="_blank" class="usa-link--external">Understanding SC 2.4.4: Link Purpose (In Context) (Level A) | W3</a>
* <a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=249#contrast-minimum" target="_blank" class="usa-link--external">Understanding SC 1.4.3: Contrast (Minimum) (Level AA) | W3</a>
* <a href="https://www.section508.gov/test/web-software/#testing-tools-for-web" target="_blank" class="usa-link--external">Accessible Name & Description Inspector) | SSA</a>
* <a href="https://webaim.org/techniques/hypertext/" target="_blank" class="usa-link--external">Links and Hypertext | WebAIM</a>

<div class="border-base radius-lg border-1px padding-1" style="width: 100%; background-color: #f5f9fc;">
To subscribe to, manage, or unsubscribe from <em>Accessibility Bytes</em>, visit <a href="https://public.govdelivery.com/accounts/USGSA/subscriber/new?topic_id=USGSA_1324" target="_blank" class="usa-link--external">GSA Email Updates</a>.
</div>

**Reviewed/Updated:** August 2024