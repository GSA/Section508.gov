---
layout: page
sidenav: true
type: test
title: Testing Dynamic Forms
permalink: test/dynamic-forms/
description: Guidance for testing dynamic web, PDF, and software forms for Section 508 conformance, including WCAG criteria, keyboard navigation, screen readers, errors, focus, and dynamic content.
disclaimer: true
audience: 
- Content Creators
- Designers
- Developers
- Federal Employees
- Section 508 Program Managers
- Section 508 Testers
topic: 
- Testing
subtopic: 
- Best Practices
- Electronic Documents
- Forms
- General Information
- PDFs
- Software
- Testing (Manual)
- Websites
resource-type: 
- Process & How-To
format: HTML
custom-script: 
- accordion-management.js
created: 2026-11-05
updated: 
---
Accessibility testing for dynamic forms, including HTML-based forms and software forms, typically require a different approach than testing static content. Because these forms generate and alter content in response to user input, the form presents accessibility data to assistive technology (AT) differently as content changes. Rather than viewing them simply as static files, testers should treat dynamic forms as interactive experiences. Below are practical strategies for assessing these forms for Section 508 compliance.

Dynamic forms may:

<ul>
  <li>Add, remove, or reveal content during user interaction.</li>
  <li>Expand or collapse sections based on user selections.</li>
  <li>Generate pages dynamically.</li>
  <li>Recalculate values automatically.</li>
  <li>Present different content paths depending on user responses.</li>
</ul>

<p>These behaviors can introduce accessibility barriers if the form does not provide sufficient information to users about changes or does not support effective navigation.</p>

<p>The most common challenges with dynamic forms include:</p>

<ul id="dynamic-form-challenges" class="usa-icon-list tablet:grid-col maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#push_pin"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content"><strong>Missing or Limited Programmatic Information</strong>: Many accessibility testing techniques rely on inspecting underlying code, document structure, and programmatically exposed accessibility information to determine heading structure, reading order, form field associations, table markup, sufficient alternative text, and programmatic lists. Dynamic forms may not expose this information through web, software or PDF tag inspection tools. Testers may need to use additional tools or testing methods.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#push_pin"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content"><strong>Content Changes Based on User Interaction:</strong> Content may appear only after checking a checkbox, choosing a radio button, selecting an option from a list, or entering data. Test these changes to confirm that AT users receive equivalent information.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#push_pin"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content"><strong>Variability in User Experience</strong>: Dynamic forms behave differently across Adobe Acrobat Reader, browsers, browser-based viewers, applications, and AT.</div>
  </li>
</ul>

<h2>Testing for Section 508 Conformance</h2>

<p>Apply the applicable <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link usa-link--external">Section 508 standards</a>. For web content and electronic documents, this includes Web Content Accessibility Guidelines (WCAG) 2.0 Level A and Level AA Success Criteria, which the Section 508 Standards incorporate by reference. For software-based forms, also consider applicable <a href="https://www.access-board.gov/ict/#501-general" target="_blank" class="usa-link usa-link--external">Chapter 5 requirements</a>. For support materials or instructions, consider applicable <a href="https://www.access-board.gov/ict/#601-general" target="_blank" class="usa-link usa-link--external">Chapter 6 requirements</a>. Use the <a href="https://ictbaseline.access-board.gov/" target="_blank" class="usa-link usa-link--external">appropriate ICT Testing Baseline</a>.</p>

<p>Test the form in the environment the agency expects or instructs users to use. If the agency requires users to open the form in a specific application, test in that application. If users can access the form in multiple supported environments, test each supported environment and document the tested environment. Before testing, identify how users access and complete the form.</p> 

<p><strong>The testing approach may differ depending on whether the form is:</strong></p>

<ul id="form-delivery-types" class="usa-icon-list tablet:grid-col maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">A web-based form rendered in a browser.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">A PDF form opened in Adobe Acrobat.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">A dynamic XFA/PDF form.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">A form embedded in a web application.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">A form generated by software or a document service.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">A form that produces a completed PDF, receipt, or confirmation page.</div>
  </li>
</ul>

<p><strong>Depending on the type of form, you may need to use:</strong></p>

<ul id="dynamic-form-testing-tools" class="usa-icon-list tablet:grid-col maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">A screen reader</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Microsoft’s Accessibility Insights</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The Accessible Name and Description Inspector (ANDI)</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Browser Developer Tools.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The content authoring tool.</div>
  </li>
</ul>

<table id="testing-tools-for-dynamic-forms" class="usa-table usa-table--borderless striped">
  <caption>Table 1. Testing Tools for Dynamic Forms</caption>
  <thead>
    <tr>
      <th scope="col">Form Delivery Type</th>
      <th scope="col">Testing Tools or Methods</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Web-based form</th>
      <td>Browser, keyboard, Accessibility Insights, ANDI, browser accessibility tree or inspector, screen reader</td>
    </tr>
    <tr>
      <th scope="row">PDF-based form</th>
      <td>Adobe Acrobat Reader, Adobe Accessibility Checker, PDF accessibility tools, keyboard, screen reader</td>
    </tr>
    <tr>
      <th scope="row">Dynamic/XFA PDF form</th>
      <td>Supported PDF viewer, keyboard, screen reader, Adobe Acrobat/Designer tools where applicable</td>
    </tr>
    <tr>
      <th scope="row">Form embedded in an application</th>
      <td>Supported application environment, keyboard, screen reader, accessibility inspection tools supported by the platform</td>
    </tr>
  </tbody>
</table>

<p>Automated testing tools can help identify missing labels, incorrect roles, missing document structure, or values the form exposes to AT. However, these tools do not confirm whether a user can successfully complete the form. Testers must use manual testing to evaluate focus behavior, dynamic updates, error recovery, and the overall user experience.</p>

<h3>Testing Scope</h3>

<p>Dynamic forms typically have multiple possible paths. When testing every possible combination is not practical, identify and document the paths you tested. At minimum, test:</p>

<ul id="testing-scope-minimum" class="usa-icon-list tablet:grid-col maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The default path through the form.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Any required path and associated form field validation.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Each type of conditional branch.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Each type of dynamic interaction.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Each error type.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Each type of calculation or auto-populated field.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The submission workflow.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Any high-risk path involving legal, financial, personal, medical, benefits, eligibility, or official data.</div>
  </li>
</ul>

<div class="grid-col-12 summary-box"><p><strong>For multi-page or paginated forms, also verify:</strong></p>

<ul>
  <li>The form communicates the current step and total number of steps to AT.</li>
  <li>Navigating to a previous page preserves the user's entered data.</li>
  <li>Focus moves to a logical starting point when a new page or section loads.</li>
  <li>The page or section title updates to reflect the current step.</li>
</ul></div>

<h3>Testing Dynamic Content</h3>

<p>After determining test coverage, evaluate the form components and behaviors that appear within the selected paths. Dynamic behavior can affect keyboard access, focus order, accessible names and descriptions, error handling, field relationships, and the information the form exposes to AT.</p>

<p>For each dynamic interaction, verify that users can understand and operate the form with a keyboard and AT. Check that each form control exposes:</p>

<ul id="dynamic-content-control-checks" class="usa-icon-list tablet:grid-col maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">A meaningful accessible name or description.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Input formats.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The correct role, such as text box, checkbox, radio button, or button.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The correct state, such as checked, selected, expanded, collapsed, disabled, or invalid.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Required field status.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The current value.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Related instructions, help text, and error messages.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Dynamic content changes.</div>
  </li>
</ul>

<p>Also check that:</p>

<ul id="dynamic-content-additional-checks" class="usa-icon-list tablet:grid-col maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle_outline"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Content is presented in a logical sequence.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle_outline"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Keyboard users and AT can reach and access new content.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle_outline"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The form removes hidden content from keyboard navigation.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle_outline"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">A user can successfully complete and submit the form using a keyboard and AT.</div>
  </li>
</ul>

<h3>Recommended Test Procedure</h3>

<div class="grid-col-12 summary-box"><p><strong>Before you begin:</strong> Disable browser extensions that may interfere with accessibility testing. Set your screen reader to its default verbosity. For XFA or dynamic PDF forms, confirm that Adobe Acrobat is set to open the form in the correct rendering mode. Clear session data between test runs to ensure dynamic content behaves consistently.</p></div>

<ol>
  <li>Open the form in the supported environment. Document the environment, test method, and testing tools you use.</li>
  <li>Review the initial form structure, including title, instructions, headings, labels, and starting point.</li>
  <li>Navigate the form using only the keyboard.</li>
  <li>Verify that all controls are reachable, operable, and have visible focus.</li>
  <li>Confirm that focus moves in a logical order.</li>
  <li>Trigger each dynamic interaction, including conditional questions, expandable and collapsable sections, repeating sections, calculations, and validation.</li>
  <li>Verify that keyboard users can reach newly displayed content and that the form removes hidden content from keyboard navigation.</li>
  <li>Test each form field with assistive technology such as a screen reader, for name, role, state, value, required status, instructions, and errors.</li>
  <li>Trigger validation errors and verify that users can identify, locate, understand, and correct each error. Use a screen reader to validate AT provides error notification.</li>
  <li>Complete and submit the form using only a keyboard and a screen reader.</li>
  <li>Verify that the form presents accessible confirmation messages, receipts, completed forms, and any documents it generates.</li>
  <li>Record each issue with steps to reproduce, what Section 508 standard fails, location, expected result, actual result, and severity. See also <a href="{{site.baseurl}}/test/elements-of-an-accessibility-test-report/">Essential Elements of an Accessibility Test Report</a>.</li>
</ol>

<div id="dynamic-forms-accordion-group" class="usa-accordion usa-accordion--bordered" data-allow-multiple>
  <h3 class="usa-accordion__heading">
    <button id="common-dynamic-form-defects-title" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="common-dynamic-form-defects">
      Common Dynamic Form Defects
    </button>
  </h3>
  <div id="common-dynamic-form-defects" class="usa-accordion__content">
    <p>Dynamic forms introduce accessibility barriers that automated tools and standard tag inspection do not always catch. The defects in Table 2 reflect issues commonly found during manual testing of dynamic forms. Each entry identifies the component, an example defect, the impact on users, the relevant WCAG success criteria, and a test instruction for evaluating the issue. Use this table as a reference when evaluating dynamic form components and documenting test findings.</p>

<p id="common-dynamic-form-defects-table-title" class="text-bold">
  <strong>Table 2: Common Dynamic Form Defects</strong>
</p>

<div
  class="usa-table-container--scrollable"
  tabindex="0"
  style="max-height: 70vh; overflow: auto; border: 1px solid #dfe1e2;"
>
  <table
    id="common-dynamic-form-defects-table"
    class="usa-table usa-table--borderless striped"
    aria-labelledby="common-dynamic-form-defects-table-title"
    style="border-collapse: separate; border-spacing: 0; table-layout: fixed; width: 100%; min-width: 50rem; font-size: 0.88rem; line-height: 1.3;"
  >
    <colgroup>
      <col style="width: 7.5rem;">
      <col style="width: 11rem;">
      <col style="width: 10.5rem;">
      <col style="width: 9.5rem;">
      <col style="width: 11.5rem;">
    </colgroup>
    <thead>
      <tr>
        <th scope="col" style="position: sticky; top: 0; left: 0; z-index: 4; background: #f0f0f0; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Component</th>
        <th scope="col" style="position: sticky; top: 0; z-index: 3; background: #f0f0f0; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Example Defect</th>
        <th scope="col" style="position: sticky; top: 0; z-index: 3; background: #f0f0f0; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">User Impact</th>
        <th scope="col" style="position: sticky; top: 0; z-index: 3; background: #f0f0f0; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Associated WCAG Criterion</th>
        <th scope="col" style="position: sticky; top: 0; z-index: 3; background: #f0f0f0; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Test Instruction</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Tables</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Dynamic table lacks row/column associations.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Screen reader users cannot understand data relationships.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">1.3.1 Info and Relationships</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Check that each data cell is programmatically associated with its header(s).</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Form Field Name</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The screen reader does not announce an accessible name for the text field.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Screen reader users cannot determine the purpose of the form field.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">1.3.1 Info and Relationships<br>4.1.2 Name, Role, Value</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Verify the screen reader announces all meaningful labels.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Required Fields</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The form conveys required status only visually, such as with a red asterisk.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Screen reader users may not know the field is required.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">1.3.1 Info and Relationships<br>3.3.2 Labels or Instructions</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Verify required status is programmatically exposed.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Instructions</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Instructions appear visually but the form does not associate them with form fields.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Screen reader users may miss critical completion guidance.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">1.3.1 Info and Relationships<br>3.3.2 Labels or Instructions</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Confirm users encounter instructions before they begin data entry, or verify the screen reader programmatically exposes instructions for the associated form field.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Radio Buttons</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The screen reader does not announce the group purpose.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users cannot understand available choices.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">1.3.1 Info and Relationships<br>4.1.2 Name, Role, Value</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Test group labeling to ensure programmatic association.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Checkboxes</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Checkbox purpose unclear.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users cannot make informed selections.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">1.3.1 Info and Relationships<br>4.1.2 Name, Role, Value</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Verify programmatic label association.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Confirmation or Receipt</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The form displays submission confirmation visually only, or the system generates inaccessible output.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users may not know whether they submitted the form successfully or may not be able to use the receipt.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">1.3.1 Info and Relationships<br>4.1.2 Name, Role, Value<br>3.3.1 where applicable</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Submit the form and verify the confirmation, receipt, or generated is accessible.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">File Upload</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">File upload control has unclear instructions or inaccessible error messages.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users may not know how to attach required documents or correct upload errors.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">1.3.1 Info and Relationships<br>3.3.1 Error Identification<br>3.3.2 Labels or Instructions<br>4.1.2 Name, Role, Value</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Test file selection, upload, upload errors, and file removal using keyboard and AT.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Reading Order</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Screen reader reads content out of sequence.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users cannot understand workflow.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">1.3.2 Meaningful Sequence</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Using AT, navigate the form sequentially and confirm that AT reads all meaningful content in a logical sequence.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Color-Only Indicators</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The form conveys status or instructions only through color.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users with color vision deficiencies miss information.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">1.3.3 Sensory Characteristics<br>1.4.1 Use of Color</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Check that color alone is not the only method to indicate status or provide instructions.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Text Contrast and Resizing</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Text has insufficient contrast or resizing causes content to disappear.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users with low vision may not be able to read or complete the form.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">1.4.3 Contrast Minimum<br>1.4.4 Resize Text</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Check text contrast and resize text up to 200 percent without loss of content or functionality.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Keyboard Navigation</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Keyboard users cannot reach a form field or button.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Keyboard-only users cannot complete the form.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">2.1.1 Keyboard</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Test the entire dynamic form using only a keyboard.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Date Pickers</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Calendar control inaccessible via keyboard.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users cannot enter a date.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">2.1.1 Keyboard<br>4.1.2 Name, Role, Value</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Check that an alternative method to input the date is available, such as manual numerical entry.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Modal Dialogs or Help Pop-ups</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">A help dialog opens but focus does not move to it, or users cannot close it with the keyboard.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Keyboard and screen reader users may become disoriented or trapped.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">2.1.1 Keyboard<br>2.1.2 No Keyboard Trap<br>2.4.3 Focus Order<br>4.1.2 Name, Role, Value</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Open each dialog. Verify focus management, accessible name, keyboard operation, and logical focus return.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Keyboard Trap</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The user enters a control but cannot leave it using the keyboard. This can be a common issue with custom widgets.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The user becomes stuck.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">2.1.2 No Keyboard Trap</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Ensure focus can be moved away from each interactive interface component.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Session Timeout</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The form does not announce the timeout warning, or users cannot extend the session using the keyboard.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users may lose data or be unable to complete the form.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">2.2.1 Timing Adjustable</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Verify users receive an accessible timeout warning and can extend the session when allowed.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Focus Order</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Tab order does not follow visual or logical sequence.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Navigation is confusing.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">2.4.3 Focus Order</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Using the keyboard, tab through the form. Check that the focus order preserves the meaning and usability of the content.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Hidden Dynamic Content</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The form keeps hidden content in the keyboard tab order.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Keyboard users encounter irrelevant controls.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">2.4.3 Focus Order</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Using the keyboard, tab through the form. Hidden content should not remain in tab order.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Focus After Dynamic Updates</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Focus unexpectedly jumps after selection.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The keyboard user loses context.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">2.4.3 Focus Order<br>3.2.1 On Focus</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Using the keyboard, trigger dynamic content and check that the focus order preserves the meaning and usability of the content, including predictable behavior.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Visible Focus</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The form does not display a visible keyboard focus indicator.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Keyboard users cannot identify their current location.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">2.4.7 Focus Visible</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Using the keyboard, tab through the form, triggering dynamic content. Verify there is always a visible indication of focus.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Language</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The form or part of the form uses another language without programmatic identification.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Screen readers may pronounce content incorrectly.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">3.1.1 Language of Page<br>3.1.2 Language of Parts</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Verify the form language and any language changes are programmatically identified.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Change on Input</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Selecting an option automatically moves the user to another page or section without warning.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users may lose context or be unable to predict what will happen.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">3.2.2 On Input</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Change each control value and confirm the form does not cause an unexpected change of context unless users are warned before the interaction.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Error Identification</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The form displays validation errors visually only.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Screen reader users may not know submission failed.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">3.3.1 Error Identification</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Trigger all validation rules, including attempting to submit with incomplete form fields or incorrect data.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Error Location</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users cannot easily locate fields with errors.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Increased completion difficulty.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">3.3.1 Error Identification<br>3.3.3 Error Suggestion</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Trigger the error and verify the user is made aware of the error, the error is described to the user in text, and the item in error is identified in text.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Error Suggestions</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The error message identifies a problem but not a solution.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users may not know how to correct issues.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">3.3.3 Error Suggestion</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Check that there are suggestions or guidance for how the user can correct the error.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Error Prevention</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">The form submits legal, financial, or personal data without allowing users to review, correct, or confirm entries.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users may submit incorrect information with serious consequences.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">3.3.4 Error Prevention Legal, Financial, Data</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">For forms that submit legal, financial, or user-controlled data, verify users can review, correct, or confirm information before final submission.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Expand or Collapse Sections</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Expand/collapse state not announced.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Users cannot determine current state.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">4.1.2 Name, Role, Value</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Verify that AT announces the expanded or collapsed state of each section.</td>
      </tr>

      <tr>
        <th scope="row" style="position: sticky; left: 0; z-index: 2; background: #ffffff; padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Dynamic Content Reveal</th>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Additional questions appear but the screen reader does not announce them.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Screen reader users may not know new content exists.</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">4.1.2 Name, Role, Value</td>
        <td style="padding: 0.4rem 0.5rem; vertical-align: top; white-space: normal; overflow-wrap: break-word; word-break: normal; hyphens: auto;">Using AT, test all conditional logic paths to verify newly revealed content is programmatically exposed.</td>
      </tr>
    </tbody>
  </table>
</div>
  </div>

  <h2 class="usa-accordion__heading">
    <button id="quick-reference-checklist-dynamic-forms-title" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="quick-reference-checklist-dynamic-forms">
      Quick Reference Checklist: Dynamic Forms
    </button>
  </h2>
  <div id="quick-reference-checklist-dynamic-forms" class="usa-accordion__content">
    <p>Use this checklist when testing dynamic forms to verify Section 508 conformance. This applies to forms delivered as webpages, PDFs, or applications.</p>

    <h3>Supported Test Environment</h3>

    <ul id="supported-test-environment-checklist" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use>
          </svg>
        </div>
        <div class="usa-icon-list__content">The tester performed testing in the agency-supported environment.</div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use>
          </svg>
        </div>
        <div class="usa-icon-list__content">The tester documented the browser, PDF viewer, operating system, screen reader, and versions used.</div>
      </li>
      <li class="usa-icon-list__item">
        <div class="usa-icon-list__icon">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use>
          </svg>
        </div>
        <div class="usa-icon-list__content">If the agency supports multiple environments, the tester tested each one or documented the test methods.</div>
      </li>
    </ul>

    <h3>Form Structure and Navigation</h3>

    <ul id="form-structure-navigation-checklist" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">All form fields, buttons, and controls are reachable using only a keyboard.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">The keyboard does not get trapped in a section of the form.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Focus indicators are visible throughout the form.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Focus moves in a logical order that supports completing the form.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Related controls are grouped together logically.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Keyboard users cannot reach hidden content.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">New content appears in a predictable location when the user triggers it.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Keyboard users can access newly displayed content.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Dynamic updates do not cause unexpected focus changes.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">The form informs users when content changes as a result of their interaction.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">The form exposes updates such as calculations, confirmations, or conditional content to AT.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">For multi-page or paginated forms, verify that the form communicates the current step and total steps to AT, moves focus to a logical starting point when each page loads, updates the page or section title to reflect the current step, and preserves entered data when the user navigates to a previous page.</div></li>
    </ul>

    <h3>Form Field Identification (Name, Role, State, and Value)</h3>

    <ul id="form-field-identification-checklist" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Each form field has a visible label to describe its purpose and required formatting.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Each field has a meaningful accessible name that includes purpose, required, and formatting.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Role is correctly identified (e.g., textbox, checkbox, button).</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Current value is announced or exposed correctly.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">The form programmatically conveys required fields.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Each form field correctly identifies its state such as checked or selected.</div></li>
    </ul>

    <h3>Error Handling</h3>

    <ul id="error-handling-checklist" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">The form identifies errors in text, not just visually.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">The form programmatically associates errors with the correct field.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">The form notifies screen reader users of errors.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Error messages provide clear guidance for correction.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Users can easily locate and correct errors.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">For legal, financial, or data submissions, users can review, correct, or confirm information before final submission.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">The system generates accessible receipts, confirmation pages, and completed PDFs.</div></li>
    </ul>

    <h3>Dynamic Form Coverage</h3>

    <p>Test different paths a user can take, such as:</p>

    <ul id="dynamic-form-coverage-checklist" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Conditional questions (Yes/No branches).</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Expandable sections.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Repeating or add/remove sections.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Calculated or auto-populated fields.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">All validation error scenarios.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Complete submission workflow.</div></li>
    </ul>

    <h3>Session and Data Loss</h3>

    <ul id="session-data-loss-checklist" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">The form presents accessible timeout warnings.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Verify that for each time limit the content sets, the form lets the user turn it off, adjust it to at least ten times the default, or receive a warning before it expires and extend it at least ten times using a simple keyboard action.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Users do not lose entered data unexpectedly.</div></li>
    </ul>

    <h3>Visual Accessibility</h3>

    <ul id="visual-accessibility-checklist" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Text and meaningful visual information meet contrast requirements.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Text can be resized up to 200% without loss of content or functionality.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">The form does not provide instructions and labels only as images of text.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Instructions the form provides for understanding and operating content do not rely solely on sensory characteristics such as shape, size, visual location, orientation, or sound.</div></li>
    </ul>

    <h3>Other Common Dynamic Components</h3>

    <ul id="other-common-dynamic-components-checklist" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Keyboard users can access help text, tooltips, and modal dialogs.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Date pickers provide an accessible manual entry option.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Keyboard and AT users can access file upload controls and upload error messages.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">Keyboard and AT users can access electronic signature controls, if present.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_box_outline_blank"></use></svg></div><div class="usa-icon-list__content">CAPTCHA or verification steps provide accessible alternatives, if present.</div></li>
    </ul>
  </div>
</div>

<h2>Related Resources:</h2>

<ul>
  <li><a href="{{site.baseurl}}/create/">Create Accessible Digital Products</a></li>
  <li><a href="{{site.baseurl}}/test/">Test for Accessibility</a></li>
  <li><a href="{{site.baseurl}}/tools/tools-for-testing-ict/">Tools for Testing ICT</a></li>
</ul>
