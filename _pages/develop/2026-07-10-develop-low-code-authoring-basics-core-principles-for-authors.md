---
layout: page
sidenav: true
type: develop
title: Core Accessibility Principles for Content Authors
permalink: develop/low-code-authoring-basics/core-principles-for-content-authors/
description: Learn how authors can consistently apply Section 508 accessibility practices in content management systems.
audience: 
- Communications Specialists
- Content Creators
- Designers
- Developers
- IT Program & Project Managers
- Risk Managers
- Section 508 Program Managers
- Web Content Managers
topic: 
- Create
- Develop
- Testing
subtopic: 
- Best Practices
- Guidance
- Lifecycle
- Risk Management
- Websites
resource-type: 
- Article
- Process & How-To
format: HTML
custom-script: 
- accordion-management.js
created: 2026-07-15
updated: 
---
Most accessibility failures in CMS environments involve a small set of recurring issues. Authors should consistently apply the following accessibility practices.

 <div class="margin-bottom-3 no-print">
      <button class="usa-button" data-action="expand" data-target="accordion-group">Expand all</button>
      <button class="usa-button usa-button" data-action="collapse" data-target="accordion-group">Collapse all</button>
</div>
<div id="accordion-group" class="usa-accordion usa-accordion--multiselectable margin-bottom-6" data-allow-multiple>
  <!--BASIC-->
  <h2 class="usa-accordion__heading">
    <button id="headings" type="button" class="usa-accordion__button" aria-expanded="true" aria-controls="m-a1">Use Correct Heading Structure</button>
  </h2>
  <div id="m-a1" class="usa-accordion__content">

<p>Headings organize content for screen reader users and improve readability.</p> 
<p>Use headings in a logical hierarchy:</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      H1 for the page title
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      H2 for major sections
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      H3 for subsections
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      H4-H6 when necessary
    </div>
  </li>
</ul>

<p>Do not:</p>
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Skip heading levels.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Use headings only for visual styling.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Bold regular text instead of using actual heading elements.
    </div>
  </li>
</ul>

<div class="border-base radius-lg border-1px padding-1 bg-gray-5" style="margin-top: 1.0em;"><p>
For example, this heading structure is accessible:</p>
<ul>
  <li>H1: Benefits Information
    <ul>
      <li>H2: Eligibility</li>
      <li>H2: How to Apply
        <ul>
          <li>H3: Required Documents</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
</div>
</div>

<h2 class="usa-accordion__heading">
    <button id="linktext" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a2">Write Meaningful Link Text</button>
  </h2>
  <div id="m-a2" class="usa-accordion__content">

<p>Descriptive links improve navigation for screen reader users and users navigating by links alone. Links should describe their destination or purpose.</p> 

<p>Avoid vague phrases such as:</p>
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Click here
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Read more
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      More
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Learn more
    </div>
  </li>
</ul>

<div class="border-base radius-lg border-1px padding-1 margin-bottom-2 bg-gray-5" style="margin-top: 1.0em;"><p>
Use descriptive text instead such as:</p>

<ul>
  <li>Read more of the <a href="{{site.baseurl}}/manage/section-508-assessment/2025/message-from-gsa-administrator/">FY 2025 Governmentwide Section 508 Assessment (HTML)</a>.</li>
  <li>Learn more <a href="https://www.gsa.gov/about-gsa">About GSA</a>.</li>
  <li>View <a href="{{site.baseurl}}/create/alternative-text/">Section 508.gov Training Resources for Authoring Meaningful Alternative Text</a>.</li>
</ul>
</div>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#push_pin"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">See <a href="{{site.baseurl}}/blog/accessibility-bytes/descriptive-links-and-hypertext">Accessibility Bytes #4: Descriptive Links and Hypertext</a> for more information.</div></li></ul>
</div>

<h2 class="usa-accordion__heading">
    <button id="alttext" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a3">Add Alternative Text to Informative Images</button>
  </h2>
  <div id="m-a3" class="usa-accordion__content">

<p>Alternative text (alt text) provides a text equivalent description of the image’s purpose. Use alt text for:</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Informative graphics.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Charts.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Icons that convey meaning.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Photographs containing important information.
    </div>
  </li>
</ul>

<p>Keep alt text concise and meaningful. If an image is decorative, mark it as decorative when the platform supports that option.</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#push_pin"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">See <a href="{{site.baseurl}}/create/alternative-text/">Authoring Meaningful Alternative Text</a> and <a href="{{site.baseurl}}/blog/accessibility-bytes/alternative-text/">Accessibility Bytes #5 Alternative Text</a> for more information. 
</div>
</li>
</ul>
</div>

<h2 class="usa-accordion__heading">
    <button id="color" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a4">Ensure Sufficient Color Contrast and Color Use</button>
  </h2>
  <div id="m-a4" class="usa-accordion__content">

<p>Text must have sufficient contrast against its background. Common failures include:</p>
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Light gray text on white backgrounds.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Colored text over images.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Low-contrast buttons or links.
    </div>
  </li>
</ul>

<p>Do not rely on color alone to communicate meaning. Instead of “Required fields shown only in red”, use “Required fields marked with both color and text such as "Required".</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#push_pin"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      See <a href="{{site.baseurl}}/create/making-color-usage-accessible/">Making Color Usage Accessible</a>, <a href="{{site.baseurl}}/blog/accessibility-bytes/color-contrast/">Accessibility Bytes #2 Color Contrast</a>, and <a href="{{site.baseurl}}/blog/accessibility-bytes/use-of-color/">Accessibility Bytes #3 Use of Color</a> for more information.
    </div>
  </li>
</ul>
</div>

<h2 class="usa-accordion__heading">
    <button id="lists" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a5">Use Lists Properly</button>
  </h2>
  <div id="m-a5" class="usa-accordion__content">

<p>Structured programmatic lists improve navigation and screen reader interpretation. Use built-in list formatting tools instead of manually typing symbols. Use bulleted or numbered lists instead of typing dashes manually or using spacing to simulate lists.</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#push_pin"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      See <a href="{{site.baseurl}}/blog/accessibility-bytes/lists/">Accessibility Bytes #7 Information Grouped in a List</a> for more information.
    </div>
  </li>
</ul>
</div>

<h2 class="usa-accordion__heading">
    <button id="tables" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a6">Create Accessible Tables</button>
  </h2>
  <div id="m-a6" class="usa-accordion__content">

<p>Use tables only for data. Do not use tables to visually position content on a page. When creating tables, use built-in options, where they exist, for row headers and column headers rather than manually formatting text to appear as a header. </p>
<p>Requirements for accessible tables include:</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Programmatic headers, such as column or row headers.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Simple table structure when possible; avoid merged or split cells unless necessary.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Each data cell is programmatically associated with all applicable header cells.
    </div>
  </li>
</ul>
</div>

<h2 class="usa-accordion__heading">
    <button id="forms" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a8">Create Accessible Forms and Data Collection Experiences</button>
  </h2>
  <div id="m-a8" class="usa-accordion__content">

<p>Forms are among the most common outputs of low-code and no-code platforms. Accessibility barriers within forms can prevent users from completing tasks, requesting services, submitting information, or participating in programs.</p>

<p>Authors and administrators should ensure:</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Form fields have visible and programmatic labels.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Instructions are clear and associated with the relevant fields.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Required fields are clearly identified.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Error messages explain how to correct problems.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Keyboard users can complete the entire form.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Focus moves appropriately after validation errors.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Time limits, if used, are communicated and adjustable when appropriate.
    </div>
  </li>
</ul>

<p>Accessibility testing should include both form completion and error recovery scenarios.</p>
</div>

<h2 class="usa-accordion__heading">
    <button id="docs" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a9">Upload Accessible Documents</button>
  </h2>
  <div id="m-a9" class="usa-accordion__content">

<p>A fully accessible webpage can still fail accessibility requirements if linked documents are inaccessible.</p>

<p>Common document issues include:</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Missing headings.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Missing document language.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Improper reading order.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Missing alternative text.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Untagged PDFs.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Incorrect table structure.
    </div>
  </li>
</ul>


<p>Before uploading:</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Verify document accessibility.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Use accessible templates.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Export tagged PDFs.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Test with accessibility checkers.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Prioritize publishing information as accessible HTML rather than relying solely on downloadable files whenever feasible.
    </div>
  </li>
</ul>

<ul class="usa-icon-list margin-top-2">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#push_pin"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      For more information on accessible documents, see <a href="{{site.baseurl}}/create/">Create Accessible Digital Products</a>, <a href="{{site.baseurl}}/blog/accessibility-bytes/use-document-accessibility-checkers/">Accessibility Bytes No. 1: Use Document Accessibility Checkers</a> and <a href="{{site.baseurl}}/blog/five-tips-for-accessible-documents/">Accessibility Bytes No. 17: Five Tips for Accessible Documents</a>.
    </div>
  </li>
</ul>
</div>

<h2 class="usa-accordion__heading">
    <button id="audiovideo" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a7">Make Audio, Video, and Synchronized Media Accessible</button>
  </h2>
  <div id="m-a7" class="usa-accordion__content">

<p>Audio-only, video-only and synchronized media require accessibility alternatives that allow  users who cannot see, hear, or access portions of the content  to obtain equivalent information and understand the content. This may require:</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Captions
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Audio descriptions.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Transcripts.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-orange">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Accessible media players.
    </div>
  </li>
</ul>

<p>The specific accessibility requirements depend on the type of media and how information is presented.</p>

<p>Before publishing audio, video or multimedia, verify:</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Captions are accurate and synchronized.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Media controls are keyboard accessible and programmatically labeled.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Audio descriptions are sufficient.
    </div>
  </li>
</ul>

<ul class="usa-icon-list margin-top-2">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#push_pin"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      See <a href="{{site.baseurl}}/create/audio-video/">Audio- and Video-Only Media</a>, <a href="{{site.baseurl}}/create/captions-transcripts/">Captions and Transcripts</a>, and <a href="{{site.baseurl}}/create/synchronized-media/">Video and Other Synchronized Media</a> for more information.
    </div>
  </li>
</ul>
</div>
</div>

## Resources

* [Accessibility Bytes]({{site.baseurl}}/blog/accessibility-bytes/)  
* [Create Accessibility Digital Products]({{site.baseurl}}/create/)  
* [Design and Develop Accessible Products]({{site.baseurl}}/develop/)  
* [Test for Accessibility]({{site.baseurl}}/test/)  
* [Tools for Testing ICT]({{site.baseurl}}/tools/tools-for-testing-ict/)

<div id="prev-next-section">
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/develop/low-code-authoring-basics/common-accessibility-risks/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/develop/low-code-authoring-basics/accessibility-guidance-for-common-cms-platforms/"> Next ></a>
</div>
