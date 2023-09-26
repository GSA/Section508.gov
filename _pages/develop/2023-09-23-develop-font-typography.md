---
layout: page
sidenav: true
permalink: develop/fonts-typography/
type: develop
title: 'Understanding Accessible Fonts and Typography for Section 508 Compliance'
contributors: usab
---
In the realm of digital content creation, a frequently asked question is, “What does it mean for an accessible font to be accessible?”

First, neither WCAG nor Section 508 specifies typefaces nor even a minimum font size. However, government websites necessitate clear and consistent use of headings and highly legible body text. Regardless, typography choices have a huge impact on accessibility.

An accessible font means using a typeface designed for fluid reading for a diverse audience, including individuals with visual impairments (low vision) or reading disability (e.g., dyslexia). The significance of accessible typography lies in its role in ensuring that textual information is accessible to all users, irrespective of their abilities or disabilities.

## What is in “The Law” about Typography?
Before delving into recommendations from experts found on the internet, let’s explore the Section 508 Standards and other regulations that guide authors in their choices for text.

## Americans with Disabilities Act (ADA) and Architectural Barriers Act (ABA)
The ADA and ABA accessibility standards require r sans-serif fonts in a few places.
<ul>
    <li><a href="https://www.access-board.gov/ada/#ada-703_2_3" class="usa-link--external text-top">703.2.3 Style [Signage]:</a> Characters should be sans-serif, not italic, oblique, script, highly decorative, or unusually shaped.</li>
    <li><a href="https://www.access-board.gov/ada/#ada-707_7_2" class="usa-link--external text-top">707.7.2 Characters [on certain display screens]:</a> Characters on the screen must be in a sans-serif font, at least 3/16 inch (4.8 mm) high based on the uppercase letter “I” and contrast with the background.</li>
</ul>

## Section 508 Standards
<ul>
    <li><a href="https://www.access-board.gov/ict/#402.4" class="usa-link--external text-top">402.4 Characters on Display Screens [for ICT with closed functionality]:</a> At least one mode of characters displayed on the screen shall be in a sans serif font. Where ICT does not provide a screen enlargement feature, characters shall be 3/16 inch (4.8 mm) high minimum based on the uppercase letter “I”. Characters shall contrast with their background with either light characters on a dark background or dark characters on a light background.</li>
</ul>

## Why Sans Serif?
Most print publications use a serif font (one with the small flourishes at the tip of letters, for example, Times New Roman). With serif fonts being the norm in print, it might seem odd that accessibility regulations require sans serif, but there is good reason. For people with good vision, a typeface with serifs is slightly easier (faster) to read than one without serifs. Typically, for people with low vison, the serifs significantly degrade legibility. The importance of using a sans serif typeface is especially important for digital content, since it can be expected to be read on-screen and not in hardcopy print.
It is okay to use serif fonts for headings or other emphasis. Sans serif is most important for body text and fluid reading.

## Why 3/16 inch?
Accessibility regulations specify a measurement (3/16-inch-high minimum based on the uppercase letter “I”) which is not a metric traditionally associated with typography. This is because the regulation must work “in the field” for third-party testing. For most typefaces, this works out to 16 pt.

## Should electronic documents use 16 pt for body text?
Please no! That is a minimum size when a reader cannot adjust the size. For websites and documents, the user has control over “zoom” so use a typical font size: 11 or 12 pt.

## Is it okay to use small fonts in electronic documents?
People with low vision typically use magnification settings optimized for standard body text, 11 or 12 pt. The net effect is like having a very small screen; “looking through a soda straw” is a common analogy. Smaller fonts require that the user "zoom in” more which breaks the reading flow. Typical use of subscripts and superscripts is not problematic, but running text at less than 9 pt (for example, in a long footnote) is creating a barrier. For a similar reason, very large fonts (perhaps a heading) should be avoided. Very large text forces a reader with low vision to “zoom out” and reorient to their place on the page.

## More important than typeface
While the author’s choice of a font is important, and that is the focus of this article, it is important to note that there are factors which have a more significant impact on readability and accessibility. The WCAG success criteria address these issues.

<a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#use-of-color" class="usa-link--external text-top"><strong>1.4.1 Use of Color:</strong></a> Color must not be the only means of conveying information. If color signifies meaning, incorporate additional visual cues (like a symbol or text) to convey the information.

<a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#contrast-minimum" class="usa-link--external text-top"><strong>1.4.3 Contrast:</strong></a> Text (and images of text) must have a contrast ratio of at least 4.5:1. Large text (16 pt bold) and icons need a 3:1 ratio between foreground and background colors. This contrast requirement applies to text over a gradient or background image. An author might put a dark rectangle behind light text, or use black text with a thin white outline effect.

<a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#resize-text" class="usa-link--external text-top"><strong>1.4.4. Resize Text:</strong></a> It must be possible for text to be resizable by the reader, at least to 200 percent and without loss of content or functionality. Web browsers (and word processors) include this feature by default, but document authors can interfere with this functionality.

<a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#images-of-text" class="usa-link--external text-top"><strong>1.4.5 Images of Text:</strong></a>  Whenever possible, use actual text and not images or pictures of text. This provides the reader control over the presentation of text. Images of text also degrade (become jagged) when high levels of screen magnification are used.

<a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#reflow" class="usa-link--external text-top"><strong>1.4.10 Reflow (WCAG 2.1 AA):</strong></a> Readers using assistive technology for magnification are essentially using a window half the typical size. Content should reflow, and not require horizontal scrolling, when read in using a small, resized window.

<a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview&levels=aaa#text-spacing" class="usa-link--external text-top"><strong>1.4.12 Text Spacing (WCAG 2.1 AA):</strong></a> Content should not be lost if a reader uses assistive technology to make minor adjustments to paragraph, line, word, or letter spacing.

## U.S. Web Design System (USWDS)
Federal websites are required by the 21st Century Integrated Digital Experience Act (21st Century IDEA) to utilize the U.S. Web Design System (USWDS). This design system offers guidance, components, design tokens, and utilities for content creators, covering typography and typesetting for enhanced accessibility. The import role of USWDS was reinforced by <a href="https://www.whitehouse.gov/omb/briefing-room/2023/09/22/fact-sheet-building-digital-experiences-for-the-american-people/" target="_blank" class="usa-link--external text-top">OMB M-23-22</a>.

## Additional Reading
Typography is a wide and deep topic. For further insights into accessible fonts and typography, we share these .gov resources:.
<ul>
    <li><a href="https://accessibility.digital.gov/visual-design/typography/" target="_blank" class="usa-link--external text-top">Typography</a> | Digital.gov</li>
    <li><a href="https://github.com/uswds/public-sans#design-principles" target="_blank" class="usa-link--external text-top">Public Sans Design Principles</a> | Digital.gov</li>
    <li><a href="https://www.state.gov/secretary-antony-j-blinken-on-nprs-wait-wait-dont-tell-me/" target="_blank" class="usa-link--external text-top">Secretary Antony Blinken on NPR’s Wait Wait...Don’t Tell Me!</a> | State.gov - About the U.S. Department of State moving from Times New Roman to Calibri.</li>
</ul>

## In conclusion
Accessible fonts and typography are indispensable components of Section 508 compliance and digital inclusivity. By considering the guidelines and recommendations outlined here, content creators can ensure that their digital content is accessible to all, fostering a more inclusive and equitable online environment.

**Reviewed/Updated:** September 2023