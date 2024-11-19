---
layout: page
sidenav: true
permalink: test/color-contrast-in-nonweb-documents-images/
type: test
title: 'Testing Color Contrast in Non-Web Documents and Images'
description: 
disclaimer: true
contributors: 
created: 2024-09-20
updated: 
topic: "Testing (test)"
sub-topic: "Testing for Accessibility Training or Tools"
audience:
- "Federal employee (fedemp)"
- "Public (public)"
- "Content Creators (creator)"
- "508 Prorgam Manager (508pm)"
- "Website Managers/Content Managers (wcm)"
resource-type: "Process/How-to"
format: "HTML (html)"
---
When creating digital content such as electronic documents, there must be sufficient color contrast of text and images of text. This ensures content is readable and usable by all individuals, including those with visual impairments. As a designer, developer, or content creator, it is important to choose appropriate foreground and background colors for text. While there are many pitfalls for poor color contrast, the information below explores the importance of color contrast, guidelines for meeting accessibility requirements, and methods to test color contrast in electronic documents and images. 

While the information below will not cover how to test color contrast for web content, please refer to <a href="{{base.siteurl}}/training/web-software/andi-training-videos/color-contrast-analyzer/">the video on using the color contrast analyzer</a> for more information on testing web content.

## Importance of Sufficient Color Contrast
Color contrast refers to the difference in luminance or color between text or images of text and its background. Sufficient color contrast is essential for accessibility and readability, especially for individuals with low vision or color deficiencies. The <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank" class="usa-link--external">Web Content Accessibility Guidelines for 1.4.3 Contrast (minimum)</a> defines specific contrast ratios to ensure text is readable against its background. The minimum contrast ratio for text or images of text that are less than 18 point or 14 point bold font against its background is 4.5:1 except for the following:
<ul>
  <li>Large-scale text and images of large-scale text, which is text that is higher than 14 point bold or 18 point font, and have a contrast ratio of at least 3:1.</li>
  <li>Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content.</li>
  <li>Text that is part of a logo or brand name.</li>
</ul>
Note that the maximum ratio on the color contrast scale occurs between black text and a white background (or vice versa) at 15:1.

When creating content, it is important to choose your background and foreground colors in alignment with accessibility requirements. Two best practices are:
<ol>
  <li>Choose high-contrast color combinations. Use dark text on a light background and vice versa.</li>
  <li>Avoid color combinations that are difficult to differentiate, specifically red-green combinations that pose challenges for individuals with color blindness. Use alternative color combinations for clarity.</li>
</ol>

While tools are helpful, there are several best practices for using color contrast testing tools:
<ol>
  <li>Ensure accuracy and thoroughness by testing different sections of your document, including headers, body text, and any images with text.</li>
  <li>If your document will be viewed online or converted to PDF or other formats, test color contrast in those contexts as well.</li>
  <li>Incorporate color contrast checks into your document review process to maintain digital accessibility standards consistently and regularly.</li>
  <li>Create and use standard templates and color themes that meet color contrast requirements.</li>
</ol>

## Methods for Testing Color Contrast
There are various methods for testing color contrast including manual contrast checking, built-in automated tools, and software and desktop-based applications. There are many tools available to perform the following:

### Manual Contrast Checkers
Manual contrast checkers require selection of the color or input of a Hex color code or Red, Green, and Blue (RGB) value. Free online tools such as <a href="https://webaim.org/resources/contrastchecker/" target="_blank" class="usa-link--external">WebAIM's Contrast Checker*</a>, <a href="https://accessibleweb.com/color-contrast-checker/" target="_blank" class="usa-link--external">Accessible Web’s WCAG Color Contrast Checker*</a>, or <a href="https://color-contrast-checker.deque.com/" target="_blank" class="usa-link--external">Deque's Color Palette Contrast Checker*</a> allow users to input a Hex color code, RGB value, or select a color to test contrast. While these tools can be accessed online without installation of an application, these tools require knowing the specific color of the foreground and background, which may not be possible.

### Built-in Tools in Design Software
Many content creation authoring and content creation tools, such as Adobe and Microsoft Office products, have built-in Accessibility Checkers that will flag a color contrast error or post a warning where additional manual testing may be needed. These automated checkers cannot test images of text; manual testing should always be performed.

Read more on how to access Accessibility Checkers at <a href="{{site.baseurl}}/test/documents/">Accessibility Testing for Electronic Documents</a>.

### Software and Desktop Applications
Software and desktop applications are also available to test color contrast. For example, the <a href="https://www.tpgi.com/color-contrast-checker/" target="_blank" class="usa-link--external">Colour Contrast Analyser by The Paciello Group*</a> and <a href="https://accessibilityinsights.io/" target="_blank" class="usa-link--external">Accessibility Insights by Microsoft*</a> allow users allow users to input color values such as Hex or RGB or use a dropper to select the color on the page to determine if the contrast meets accessibility standards. These tools provide flexibility to select the exact color from the document when the Hex or RGB values are unknown. Some tools can also provide auto detection of color contrast.

### User Testing and Feedback
To gather feedback on color contrast accessibility and user experience, a creator can utilize end-user feedback and real-world testing by engaging users with visual impairments or diverse abilities in usability testing. While this should not be the primary method of testing color contrast, this may provide valuable feedback on your digital content, templates, and themes used to ensure your content is easy to read and understand by everyone.

Many other tools for testing color contrast can be found through a web search to meet your specific ICT product testing need, such as mobile applications. Please also see Section508.gov’s <a href="{{site.baseurl}}/create/">Create</a> and <a href="{{site.baseurl}}/develop/">Design and Develop</a> pages for further information.

**Reviewed/Updated:** September 2024