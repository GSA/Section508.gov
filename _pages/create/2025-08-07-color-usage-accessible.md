---
layout: page
sidenav: true
type: create
title: Making Color Usage Accessible
permalink: create/making-color-usage-accessible/
description: Learn how to make digital content accessible by using color effectively. This guide explains color contrast requirements, common accessibility barriers, and tools like ANDI, WebAIM, and CCA to help ensure your ICT meets Section 508 and WCAG standards.
audience: 
- content-creator
- designer
- dev-tester
- fed-emp
- requirement-ba
- vendor
- web-content-mgr
topic: 
- create
- dev
subtopic: 
- Documents
- General Info and Best Practices
- PDFs
- Presentations
- Software
resource_type: 
- article
redirect_from:
- training/making-color-usage-accessible/
- /training/create/making-color-usage-accessible/
format: html
created: 2025-08-07
updated: #Add/update date stamp for each review/update
exclude-changelog: 
---
In this resource, you will learn about the importance of color usage in accessibility, and you will learn the tools and techniques you can use to make the colors in your content and Information and Communication Technology (ICT) accessible.

## Why is Color Accessibility Important?
Color accessibility means making sure that someone does not need to perceive color in order to understand your information and use your technology, and that the colors you use have a level of color contrast that will allow users to easily discern and read all text and other content.

Using color in an accessible way helps in the following ways:

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      A colorblind person may be unable to perceive certain colors, and will need information to be conveyed in a different way.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      A person with low vision may be unable to read text that is too similar in color to the background, or distinguish between similar colors.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      A person with no vision may use a screen reader that will only relay words, not the colors used to display them.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      An individual from another country may have different cultural connotations for different colors, and may interpret your color usage differently than you intended unless you convey your meaning in other ways.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      A search engine or artificial intelligence tool may misunderstand how colors are intended to be interpreted (or may not perceive them at all), but will more easily understand direct terms like “urgent” or “overdue.”
    </div>
  </li>
</ul>

## Disabilities Impacted by Color Usage
Approximately 1 in 12 men and approximately 1 in 200 women experience color blindness (“Color Blindness,” National Eye Institute). When you are color blind, you are unable to perceive or distinguish between certain colors. You may have difficulty distinguishing between shades of red and green, or perceiving the difference between other colors, and may even be unable to distinguish any colors at all.
In the following example images, the same colorful picture is vastly different depending on what type and degree of color blindness you may have.

<div class="tablet:grid-col" style="margin: auto; max-width: 70%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-01.jpg" alt="A colorful salad with tomatoes, lettuce, boiled eggs, corn, and cheese. Servings of strawberries, bread, and orange juice sit around the salad bowl." aria-describedby="figure-1" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-1"><strong>Figure 1.</strong> Typical vision.</span>
   </div>
</div>

<div class="tablet:grid-col" style="margin: auto; max-width: 70%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-02.jpg" alt="The same colorful salad, mainly in shades of green, brown, and yellow. The red tomatoes and strawberries now appear green." aria-describedby="figure-2" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-2"><strong>Figure 2.</strong> Red-green color blindness.</span>
   </div>
</div>

<div class="tablet:grid-col" style="margin: auto; max-width: 70%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-03.jpg" alt="The same colorful salad in shades of red, pink, and greenish-blue. The orange juice appears pink, and the yellow corn and egg yolks appear less vibrant." aria-describedby="figure-3" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-3"><strong>Figure 3.</strong> Blue-yellow color blindness.</span>
   </div>
</div>

<div class="tablet:grid-col" style="margin: auto; max-width: 70%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-04.jpg" alt="The same colorful salad in only shades of black, white, and grey. The red strawberries, green lettuce, and brown wooden table all appear to be similar shades of grey." aria-describedby="figure-4" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-4"><strong>Figure 4.</strong> Complete color blindness.</span>
   </div>
</div>

A person with color blindness may be unable to distinguish between the colors in a traffic light, the color coding in a graph, or the color options in a clothing store.

In addition, many people with color blindness or low vision have difficulty perceiving text, icons, and symbols when the color of the object is too similar in shade to the color of the background. The “shade” of a color is how light or dark a color is. The following example images show a navigation menu when the colors are “low contrast,” where the colors are similar shades, and “high contrast,” where the colors are very different shades, along with how each of these images may look to a person with color blindness or low vision. For all types of vision, it is harder to distinguish the icons and text in the low contrast menu than in the high contrast menu.

<table class="usa-table usa-table--borderless">
  <caption>Table 1: </caption>
  <thead>
    <tr>
      <th scope="col" class="grid-col-3">Condition</th>
      <th scope="col">Low Contrast Image</th>
      <th scope="col">High Contrast Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Typical Vision</td>
      <td><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-05a.jpg" class="" alt="Light grey menu on a very light grey background. Menu contains four icons with labels for Home, Schedule, Locations, and Search."></td>
      <td><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-05b.jpg" class="" alt="Dark grey menu on a very light grey background. Menu contains four icons with labels for Home, Schedule, Locations, and Search."></td>
    </tr>
    <tr>
      <td>Color Blindness</td>
      <td><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-06a.jpg" class="" alt="The same low contrast menu, but it appears to be light pink on a very light pink background."></td>
      <td><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-06a.jpg" class="" alt="The same high contrast menu, but it appears to be very dark purple on a very light pink background."></td>
    </tr>
    <tr>
      <td>Low Vision</td>
      <td><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-07a.jpg" class="" alt="A blurry version of the original menu with low contrast. Text is entirely indiscernible and icons are difficult to identify."></td>
      <td><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-07b.jpg" class="" alt="A blurry version of the original menu with high contrast. The text and icons may be discernable and readable for some sighted users."></td>
    </tr>
  </tbody>
</table>

## Color Accessibility in Section 508 Conformance
Section 508 Standards list the following functional performance criteria related to color:

<div class="grid-col-8 border-base padding-1 margin-x-auto border-y text-primary" style="width:90%;">
  “Where a visual mode of operation is provided, ICT shall provide at least one visual mode of operation that does not require user perception of color.” (<a href="https://www.access-board.gov/ict/#302.3" target="_blank" class="usa-link--external">302.3</a>)
</div>

This means that in order to be accessible, your ICT must not require the user to be able to distinguish between any colors.

### Color Accessibility for Software, Website Content, and Documents
When Section 508 standards apply, all software, web content, and documents must meet the following color usage standards in the Web Content Accessibility Guidelines (WCAG) 2.0 AA:

* <a href="https://www.w3.org/WAI/WCAG22/quickref/#use-of-color" target="_blank" class="usa-link--external">WCAG 1.4.1 Use of Color:</a> Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
* <a href="https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum" target="_blank" class="usa-link--external">WCAG 1.4.3 Contrast (Minimum):</a> The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: 
  * **Large Text:** Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
  * **Incidental:** Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
  * **Logotypes:** Text that is part of a logo or brand name has no contrast requirement.

In addition, the following success criterion is part of the current WCAG 2.1 guidelines, but has not yet been incorporated as a requirement in the Section 508 Standards, which only require agencies to meet WCAG 2.0 AA guidelines. However, many federal agencies follow this success criterion as a best practice.

* <a href="https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast" target="_blank" class="usa-link--external">WCAG 1.4.11 Non-text Contrast:</a> The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s): 
  * **User Interface Components:** Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;
  * **Graphical Objects:** Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.

In the following sections, you will learn what techniques and tools you can use to make your color usage accessible for all audiences.

## Color Accessibility for Hardware ICT
The Section 508 standards state that when your ICT involves hardware, it must meet the <a href="https://www.access-board.gov/ict/#407.2" target="_blank" class="usa-link--external">standard 407.2 for Color Contrast</a>:

<div class="grid-col-8 border-base padding-1 margin-x-auto border-y text-primary" style="width:90%;">
  “Where provided, keys and controls shall contrast visually from background surfaces. Characters and symbols shall contrast visually from background surfaces with either light characters or symbols on a dark background or dark characters or symbols on a light background.”
</div>

While there is no specific color contrast threshold for hardware, a best practice is to use color contrast standards comparable to those used for electronic content (<a href="https://www.access-board.gov/ict/#302.5" target="_blank" class="usa-link--external">302.5</a>).

## Making Accessible Content with Color Usage
### Avoiding Color Dependency
Avoiding color dependency means ensuring that a user is not required to be able to perceive different colors in order to understand and use your ICT. You can still use color to help accentuate or emphasize certain content, but it cannot be the only way you communicate information to viewers.
Review each of the following sections to see examples of how to meet this requirement for different types of content.

### Using Color: Text and Lists
If you emphasize or highlight certain content using color, you can avoid color dependency by also including a text label that communicates the same meaning.
For example, in the following quiz question answer key, the correct answer is indicated with green text. However, color blind users may not be able to perceive this difference, so this sample text is inaccessible.
<ol>
  <li>Sample question
    <ol type="a">
      <li>Option A</li>
      <li class="text-green">Option B</li>
      <li>Option C</li>
      <li>Option D</li>
    </ol>
  </li>
</ol>

In this revised example, the answer key indicates the correct answer both by marking it in green text and by adding a label marking it as “Correct.”
<ol>
  <li>Sample question
    <ol type="a">
      <li>Option A</li>
      <li class="text-green">Option B (Correct)</li>
      <li>Option C</li>
      <li>Option D</li>
    </ol>
  </li>
</ol>

<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
  <strong>Note:</strong> When using color to help emphasize content in this way, the colors you use must also meet color contrast requirements. See <a href="#measuring-and-checking-color-contrast">“Measuring and Checking Color Contrast”</a> below for more information.
</div>

### Using Color: Links
Color must not be the only way you convey that a piece of text functions as a link. The commonly accepted best practice is to format your link with an underline and a different text color.
Inaccessible example: Section 508 website
Accessible example: Section 508 website

### Using Color: Forms, Buttons, and Interactive Elements
All forms, buttons, and interactive elements must not require the user to be able to perceive or distinguish between colors.
In this example form, the input fields with errors are marked in red. However, this requires the user to be able to distinguish between colors, so it is inaccessible.

<div class="tablet:grid-col" style="margin: auto; max-width: 70%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-08.jpg" alt="Input form titled Choose a Date. The two input options are a dropdown labeled 'Select fiscal year' and a set of two date pickers labelled '“'Travel start date (mm/dd/yyyy)'”' and '“'Travel end date (mm/dd/yyyy)'”', and the explanation 'Rates are available between 10/1/2022 and 09/30/2025.' The form ends with two buttons: a Reset button, and a disabled Search button. The date fields are filled out with a start date of 07/01/2025 and an end date of 06/30/2025, with both fields highlighted in light red." aria-describedby="figure-8" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-8"><strong>Figure 8.</strong> Choose a date form input.</span>
   </div>
</div>

In this corrected example, the fields with errors each have a warning icon in addition to the light red background. As a best practice, they have also added messages that indicate how to correct each error.

<div class="tablet:grid-col" style="margin: auto; max-width: 70%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-09.jpg" alt="The same form as in the previous image, but the two date fields shaded in light red now also include warning icons. An error message with the same icon and color states 'The End Date of your trip can not occur before the Start Date.'" aria-describedby="figure-9" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-9"><strong>Figure 9.</strong> Choose a date form input with error message.</span>
   </div>
</div>

### Using Color: Graphs and Charts
Graphs and charts often have the option to use color to distinguish between different groups of data and include a color-coded legend. However, to be fully accessible, these graphs and charts must use patterns, labels, or other indicators besides color to make these distinctions.
For our examples, let’s make a bar graph using data from the following sample table:
Quarterly Spending by Year

<table class="usa-table usa-table--striped usa-table--borderless grid-col-12">
  <caption>Table 2: Dataset for Graphs and Charts examples</caption>
  <thead>
    <tr>
      <th scope="col">Quarter</th>
      <th scope="col">2023</th>
      <th scope="col">2024</th>
      <th scope="col">2025</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Quarter 1</td>
      <td>43,000</td>
      <td>24,000</td>
      <td>20,000</td>
    </tr>
    <tr>
      <td>Quarter 2</td>
      <td>25,000</td>
      <td>44,000</td>
      <td>20,000</td>
    </tr>
    <tr>
      <td>Quarter 3</td>
      <td>35,000</td>
      <td>18,000</td>
      <td>30,000</td>
    </tr>
    <tr>
      <td>Quarter 4</td>
      <td>45,000</td>
      <td>28,000</td>
      <td>47,000</td>
    </tr>
  </tbody>
</table>

In this inaccessible bar graph, the bars are only distinguishable by the colors used.

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-10.jpg" alt="Bar graph of 'Quarterly Spending by Year.' Bars for 2023 data are in blue, 2024 in orange, and 2025 in green." aria-describedby="figure-10" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-10"><strong>Figure 10.</strong> Quarterly Spending by Year (Non-conformant)</span>
   </div>
</div>

In this corrected example, the bars are each in different colors, but they also have different patterns and have text labels to further clarify which bars belong to which data set. Adding these distinctions makes this graph’s color usage accessible.

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-11.jpg" alt="Bar graph of 'Quarterly Spending by Year'”', but now bars for 2023 data have a blue checkerboard pattern and the label '2023', bars for 2024 data have orange stripes and the label '2024', and bars for 2025 data are solid green with the label '2025'.
Measuring and Checking Color Contrast" aria-describedby="figure-11" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-11"><strong>Figure 11.</strong> Quarterly Spending by Year (Conformant)</span>
   </div>
</div>

### Measuring and Checking Color Contrast
Color contrast is measured as a ratio that reflects how different the luminance (lightness or darkness) of one color is from another. In accessibility, this typically means comparing foreground content—like text, icons, or essential images—with the background it sits on. It’s important to note that this measurement is based on brightness, not how the colors might appear to people with normal or corrected color vision.

Because our eyes and screens perceive color differently—and because visual judgment is unreliable for contrast—the most accurate way to check color contrast is to locate and verify the programmatic HEX or RGB color values rather than sampling the colors. 

Tools like ANDI* inspect the programmatic color values, while WebAIM* and Colour Contrast Analyser (CCA)* use color samples to calculate the color contrast ratio and tell you whether it meets the required accessibility standards such as WCAG 2.1 AA or AAA.

<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
  <strong>Caution:</strong> While some programs like Microsoft Word may highlight low-contrast text, they don’t show the actual contrast ratio—which may not be sufficient to confirm conformance.
</div>

Watch the following videos to learn more about how to use each of these commonly used color contrast checking tools: ANDI, WebAIM and CCA.

---

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-3 display-flex flex-column flex-align-self-center">
    <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/)"><img src="{{site.baseurl}}/assets/images/thumbnails/training-video-andi-13-thumb.jpg" alt="Accessible Name & Description Inspector (ANDI) Tool Overview" style="width:100%; border: 1px black solid;" class="radius-lg" /></a>
  </div>
  <div class="desktop:grid-col-9">
    <h4><a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/">Accessible Name & Description Inspector (ANDI) Color Contrast</a></h4>
    <p>In Module 13 of the Accessible Name & Description Inspector (ANDI) Tool video series, learn how to use the <em>Color Contrast</em> module to <a href="{{site.baseurl}}/tools/glossary/#programmatically-determinable" >programmatically determined</a> whether text in a webpage has enough contrast with its background to be readable by people with moderately low vision—especially those who do not typically use contrast-enhancing assistive technology.</p>
    <p>Duration 2m 9s | Module 13 of an 18-Part Video Series</p>
  </div>
</div>

---
  
<div class="grid-row grid-gap">
  <div class="desktop:grid-col-3 display-flex flex-column flex-align-self-center">
    <a href="{{site.baseurl}}/training/create/making-color-usage-accessible/color-contrast-analyzer/"><img src="{{site.baseurl}}/assets/images/thumbnails/training-video-cca-thumb.jpg" alt="How to Test Color Contrast using the Color Contrast Analyser" style="width:100%; border: 1px black solid;" class="radius-lg" /></a>
  </div>
  <div class="desktop:grid-col-9">
    <h3><a href="{{site.baseurl}}/training/create/making-color-usage-accessible/color-contrast-analyzer/">How to Use the Color Contrast Analyzer (CCA)</a></h3>
    <p>In this video, we’ll show you how to use the <a href="https://developer.paciellogroup.com/resources/contrastanalyser/" target="_blank" class="usa-link--external">Colour Contrast Analyser (CCA)</a> and the programmatic color values&mdash;or HEX codes&mdash;to check contrast between text, images of text, and background colors in digital content and documents. This tool is especially useful when automated tools like <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/">ANDI</a> can’t <a href="{{site.baseurl}}/tools/glossary/#programmatically-determinable" >programmatically determined</a> contrast issues, or when a standalone application is preferred.</p>
    <p>Duration 6m 07s | 1-Part Video Tutorial</p>
  </div>
</div>
  
---

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-3 display-flex flex-column flex-align-self-center">
    <a href="{{site.baseurl}}/training/create/making-color-usage-accessible/webaim-contrast-checker/"><img src="{{site.baseurl}}/assets/images/thumbnails/training-video-webaim-thumb.jpg" alt="How to Test Color Contrast using the Color Contrast Analyser" style="width:100%; border: 1px black solid;" class="radius-lg" /></a>
  </div>
  <div class="desktop:grid-col-9">
    <h3><a href="{{site.baseurl}}/training/create/making-color-usage-accessible/webaim-contrast-checker/">How to Use the WebAIM Contrast Checker</a></h3>
    <p>In this video, you’ll learn how to use <a href="https://webaim.org/resources/contrastchecker/" target="_blank" class="usa-link--external">WebAIM’s Contrast Checker</a> to evaluate the contrast between text—or images of text—and background colors in documents. This tool is especially helpful when contrast issues can’t be <a href="{{site.baseurl}}/tools/glossary/#programmatically-determinable" >programmatically determined</a> by tools like <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/">ANDI</a> or when those tools aren’t available.</p>
    <p>Duration 5m 22s | 1-Part Video Tutorial</p>
  </div>
</div>
  
---

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-3 display-flex flex-column flex-align-self-center">
    <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast-analyzer/"><img src="{{site.baseurl}}/assets/images/thumbnails/training-video-andi-14-thumb.jpg" alt="How to Test Color Contrast using the Color Contrast Analyser" style="width:100%; border: 1px black solid;" class="radius-lg" /></a>
  </div>
  <div class="desktop:grid-col-9">
    <h3><a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast-analyzer/">How to Test Color Contrast using the Color Contrast Analyser (CCA)</a></h3>
    <p>In Module: 14 of the Accessible Name & Description Inspector (ANDI) Tool video series, learn how to use the <a href="https://developer.paciellogroup.com/resources/contrastanalyser/">Color Contrast Analyzer's (CCA)</a> built-in color sampler to ensure the contrast ratio between text, and images of text, and it&apos;s background is sufficient. CCA can be used to when contrast cannot <a href="{{site.baseurl}}/tools/glossary/#programmatically-determinable" >programmatically determined</a> by ANDI.</p>
    <p>Duration 2m 33s | 1-Part Video Tutorial</p>
  </div>
</div>
  
<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
  <strong>Note:</strong> Your government-issued device may not have access to download or use this software. Contact your agency's IT Helpdesk to see if it's available for installation.
</div>

### Color Contrast for Text and Large Text
Regular text must have a color contrast ratio of 4.5:1 or higher, while large text must have a ratio of 3:1 or higher.
Large text is any text that is 18px or larger, or if it is 14px or larger and bolded.

These contrast thresholds apply even in the following circumstances:

* The text functions as placeholder text
* The text changes when a pointer hovers over the text, or when the text is part of an object that has keyboard focus (like the text of a button label)

The text in the “Sample Text” column of the following table does not meet color contrast thresholds. 

<table class="usa-table border-0">
  <caption>Table: </caption>
  <thead>
    <tr>
      <th scope="col">Type of text</th>
      <th scope="col">Sample text</th>
      <th scope="col">Colors Used</th>
      <th scope="col" class="center">Color Contrast Ratio</th>
      <th scope="col" class="center">Accessible?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Large text (non-bold 18px)</td>
      <td><span style="font-size: 18px; font-weight: normal; color: #cccccc;">This is large text.</span></td>
      <td>Text: Light grey (#CCCCCC)<br />Background: White (#FFFFFF)</td>
      <td class="center">1.6:1</td>
      <td class="center">No&mdash;Color contrast ratio is less than 3:1</td>
    </tr>
    <tr>
      <td>Large text (bold 14px)</td>
      <td><span style="font-size: 14px; font-weight: bold; color: #3A76D5; background-color: #073763; padding: 4px 8px; display: inline-block;">This is large text.</span></td>
      <td>Text: Medium blue (#3A76D5)<br />Background: Dark blue (#073763)</td>
      <td class="center">2.7:1</td>
      <td class="center">No&mdash;Color contrast ratio is less than 3:1</td>
    </tr>
    <tr>
      <td>Regular text (non-bold 14px)</td>
      <td><span style="font-size: 14px; color: #B56109;">This is regular text.</span></td>
      <td>Text: Orange (#B56109)<br />Background: White (#FFFFFF)</td>
      <td class="center">4.4:1</td>
      <td class="center">No&mdash;Color contrast ratio is less than 4.5:1</td>
    </tr>
  </tbody>
</table>

The following table contains the same three examples of sample text, but now they meet the required color contrast thresholds.

<table class="usa-table border-0">
  <caption>Table: </caption>
  <thead>
    <tr>
      <th scope="col">Type of text</th>
      <th scope="col">Sample text</th>
      <th scope="col">Colors Used</th>
      <th scope="col" class="center">Color Contrast Ratio</th>
      <th scope="col" class="center">Accessible?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Large text (non-bold 18px)</td>
      <td><span style="font-size: 18px; font-weight: normal; color: #cccccc;">This is large text.</span></td>
      <td>Text: Medium grey (#919191)<br />Background: White (#FFFFFF)</td>
      <td class="center">3.2:1</td>
      <td class="center">Yes&mdash;Color contrast ratio is more than 3:1</td>
    </tr>
    <tr>
      <td>Large text (bold 14px)</td>
      <td><span style="font-size: 14px; font-weight: bold; color: #4DA0E6; background-color: #073763; padding: 4px 8px; display: inline-block;">This is large text.</span></td>
      <td>Text: Medium blue (#3A76D5)<br />Background: Dark blue (#073763)</td>
      <td class="center">4.3:1</td>
      <td class="center">Yes&mdash;Color contrast ratio is more than 3:1</td>
    </tr>
    <tr>
      <td>Regular text (non-bold 14px)</td>
      <td><span style="font-size: 14px; color: #916333;">This is regular text.</span></td>
      <td>Text: Orange (#B56109)<br />Background: White (#FFFFFF)</td>
      <td class="center">5.2:1</td>
      <td class="center">Yes&mdash;Color contrast ratio is more than 4.5:1</td>
    </tr>
  </tbody>
</table>

### Color Contrast for Images and Graphics
Even though WCAG 2.1 has not yet been incorporated into the Section 508 Standards, it is still a best practice to follow the current WCAG 2.1 requirements for colors in non-text content.

Whenever possible, images and graphics should have a color contrast ratio of at least 3:1 whenever they are used to convey information the reader needs to understand.

In the following example, the first image has a menu icon that is light grey on a white background, which is too low contrast and is not accessible. The second image has a menu icon that is dark grey on a white background, which has a color contrast ratio over 3:1, so it is accessible.

<ul class="usa-card-group padding-top-3">
<li class="usa-card tablet-lg:grid-col-6 desktop:grid-col-6">
    <div class="usa-card__container">
      <div class="usa-card__media usa-card__media--inset">
        <div class="usa-card__img bg-white text-center">
          <img
            src="{{site.baseurl}}/assets/images/create-color-usage-figure-12.jpg" class="margin-x-auto" style="width:70%" alt="Low-contrast menu icon" />
        </div>
      </div>
      <div class="usa-card__body font-mono-3xs">
        <p><strong>Figure 12:</strong> Light grey (#9C9C9C) on white background (#FFFFFF). Color contrast ratio is 2.7, which is below the standard for graphics and interfaces.</p>
      </div>
    </div>
  </li>
  <li class="usa-card tablet-lg:grid-col-6 desktop:grid-col-6">
    <div class="usa-card__container">
      <div class="usa-card__media usa-card__media--inset">
        <div class="usa-card__img bg-white">
          <img src="{{site.baseurl}}/assets/images/create-color-usage-figure-13.jpg" class="margin-x-auto" style="width:70%" alt="High-contrast menu icon" />
        </div>
      </div>
      <div class="usa-card__body font-mono-3xs">
        <p><strong>Figure 13:</strong> Dark grey (#7A7A7A) on white background (#FFFFFF). Color contrast ratio is 4.3, which meets the standard for graphics and interfaces.</p>
      </div>
    </div>
  </li>
</ul>

### When Color Contrast Requirements Do Not Apply
The only areas where you are not required to meet color contrast standards are for logos and incidental text and images.

For logos, you do not need to meet any specific color contrast threshold **unless it has a functional purpose**, like providing a link to your home page. If your logo is functioning as a link, it must have at least a 3:1 color contrast ratio with the colors around it.

In this first example, the logo can be low contrast because it is a decorative footer in a PowerPoint presentation.

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-14.jpg" alt="Presentation slide of white text on a dark grey background, with the dark blue GSA logo at the bottom." aria-describedby="figure-14" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-14"><strong>Figure 14.</strong> A logo used in a way that does not require high contrast.</span>
   </div>
</div>

In this second example, the logo has high contrast because it has a functional purpose as a link to the site’s home page.

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-15.jpg" alt="Header of GSA website. Dark blue GSA logo on a white background links to the site’s home page, and the main navigation menu immediately follows it." aria-describedby="figure-15" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-15"><strong>Figure 15</strong> A logo used in a way that does require high contrast.</span>
   </div>
</div>

Incidental text and images describe any of the following types of content:
* User interface components that are in an “inactive” state
* Text and images that are for decoration only and are not intended to convey any specific meaning
* Content that is not visible to anyone
* Parts of an image or graphic that do not contribute to the image’s meaning and are not included in what the graphic is meant to communicate

Review the following examples of incidental text and graphics that do not need to meet color contrast thresholds.

This user interface has an input box called “Email” and a button labeled “Submit.” They are inactive, and the text above it reads, “Complete the previous section before continuing.” The inactive form field and button can be low contrast since they are currently inactive.

<div class="tablet:grid-col" style="margin: auto; max-width: 70%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-16.jpg" alt="Screenshot of a form with light text on a dark grey background. Instructions state, 'Complete the previous section before continuing.' A disabled email input field and a disabled “Submit” button are in medium grey and are much less visible than the white instructional text." aria-describedby="figure-16" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-16"><strong>Figure 16.</strong> Complete the previous section before continuing.</span>
   </div>
</div>

This PowerPoint slide has decorative shapes along the border, and decorative text along the lower edge that repeats the name of the presentation. These elements are only decorative, so they do not have to meet any color contrast threshold.

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-17.jpg" alt="A presentation slide titled 'Section 508 Color Usage' in dark blue text on a white background. Decorative light blue shapes line the side of the slide, and the slide title is repeated in light blue footer text." aria-describedby="figure-17" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-17"><strong>Figure 17.</strong> </span>
   </div>
</div>

In this photo, the image conveys that a student is shopping for textbooks. The content of the book covers are not relevant, so they do not need to meet any color contrast threshold.

<div class="tablet:grid-col" style="margin: auto; max-width: 40%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-color-usage-figure-18.jpg" alt="A student shopping for textbooks. A sign behind her says “50%”. None of the book covers are distinguishable." aria-describedby="figure-18" class="border-2px border-base-light shadow-2 padding-1">
   </div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-18"><strong>Figure 18.</strong> </span>
   </div>
</div>

## Color Accessibility Checklist
Use the following table as you check your ICT for color accessibility.

<table class="usa-table usa-table--striped usa-table--borderless grid-col-12">
  <caption>Table 3: Color Accessibility Checklist</caption>
  <thead>
    <tr>
      <th scope="col">Section 508 Standard</th>
      <th scope="col">Standard Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://www.w3.org/WAI/WCAG22/quickref/#use-of-color" target="_blank" class="usa-link--external">WCAG 1.4.1 Use of Color</a> (for documents and web content)</td>
      <td>Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.</td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum" target="_blank" class="usa-link--external">WCAG 1.4.3 Contrast (Minimum)</a> (for documents and web content)</td>
      <td>
        Regular text has a contrast ratio of at least 4.5:1.<br>
        Large-scale text (non-bold 18px or larger, or bold 14px or larger) has a contrast ratio of at least 3:1.
      </td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast" target="_blank" class="usa-link--external">WCAG 1.4.11 Non-text Contrast from WCAG 2.1</a> (not required by Section 508; applies to software, documents, and web content)</td>
      <td>Icons and meaningful graphics (like user interface elements) have a contrast ratio of at least 3:1.</td>
    </tr>
    <tr>
      <td><a href="https://www.access-board.gov/ict/#407.2" target="_blank" class="usa-link--external">Section 508 407.2 Contrast</a> (hardware only)</td>
      <td>Keys, controls, characters, and symbols have high color contrast (light text and images on a dark background or dark text and images on a light background).</td>
    </tr>
  </tbody>
</table>

## Additional Resources
* <a href="https://www.access-board.gov/ict" target="_blank" class="usa-link--external">Section 508 Standards</a>
* <a href="https://www.w3.org/WAI/WCAG22/quickref" target="_blank" class="usa-link--external">WCAG Standards</a>
* <a href="https://www.tpgi.com/color-contrast-checker/" target="_blank" class="usa-link--external">Colour Contrast Alayser (CCA)</a>
* <a href="https://webaim.org/resources/contrastchecker/" target="_blank" class="usa-link--external">WebAIM Contrast Checker</a>

**Reviewed/Updated:** August 2025
