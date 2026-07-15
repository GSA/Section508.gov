---
layout: page
sidenav: true
type: develop
title: Overview of Low-Code Authoring Environments and Content Management Systems
permalink: develop/low-code-authoring-basics/overview/
description: Learn how to create, review, and publish accessible digital content in low-code environments while meeting Section 508 requirements and reducing risk.
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
created: 2026-07-15
updated: 
---
This series of articles outlines Section 508 considerations for federal personnel involved in the design, development, review, or approval of digital content within content management systems (CMS) and low-code environments. This resource aims to help teams create accessible digital content before publication, reduce remediation effort, and improve usability for people with disabilities. Accessibility is not limited to developers or accessibility specialists. Employees who create, edit, review, approve, or publish digital content directly affect accessibility outcomes.

This guidance is written for:

* Content authors,  
* Communications teams,  
* Digital service teams,  
* Web managers, and  
* Low-code or no-code platform users.

There are five articles in this guide which you can navigate using the Next and Previous buttons:
1. [Common Accessibility Risks in Low-Code Platforms]({{site.baseurl}}/develop/low-code-authoring-basics/common-accessibility-risks/)
2. [Core Accessibility Principles for Content Authors]({{site.baseurl}}/develop/low-code-authoring-basics/core-principles-for-content-authors/)
3. [Accessibility Guidance for Common CMS Platforms]({{site.baseurl}}/develop/low-code-authoring-basics/accessibility-guidance-for-common-cms-platforms/)
4. [Accessibility Checklist for Content Authors in Low Code Environments]({{site.baseurl}}/develop/low-code-authoring-basics/low-code-accessibility-checklist/)
5. [Accessibility Review and Approval Best Practices]({{site.baseurl}}/develop/low-code-authoring-basics/accessibility-review-and-approval-best-practices/)

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><h2>What are Low-Code and No-Code Platforms?</h2>

<p>Low-code and no-code platforms allow users to create websites, applications, forms, workflows, dashboards, and digital services through visual interfaces, configuration settings, reusable components, and automation tools with little or no traditional programming. Examples may include content management systems (CMS), workflow platforms, form builders, intranet platforms, customer service platforms, and application development environments.

While these platforms can simplify development and publishing, accessibility outcomes still depend on platform capabilities, governance, configuration decisions, and content authoring practices. </p> 
</div>

## Why Accessibility Matters in Low-Code Environments

Low-code and no-code platforms allow non-developers to rapidly publish digital content. These tools reduce technical barriers, but they do not automatically produce accessible content.

### Platform Accessibility and Content Accessibility

Accessibility outcomes depend on both the accessibility capabilities of the platform and the accessibility of the content created within it.

A platform may provide accessible templates, components, and authoring tools while still allowing users to create inaccessible content. Similarly, accessible content can be negatively affected by inaccessible customizations, integrations, or platform configurations.

Agencies should evaluate both:
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Whether the platform supports accessible authoring and accessible output; and
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Whether authors, reviewers, and administrators follow accessibility best practices when creating and publishing content.
    </div>
  </li>
</ul>


Accessibility is therefore a shared responsibility among platform owners, developers, administrators, content authors, reviewers, and approvers.

Even when a platform provides accessible templates or components, accessibility failures often occur because of:

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Color contrast issues
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Improper table usage
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Incorrect heading structure
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Insufficient link text
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Keyboard accessibility failures introduced through configuration
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Missing alternative text
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Misuse of layout components
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Uploaded inaccessible documents
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Videos without captions
    </div>
  </li>
</ul>

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;">Accessibility depends on both the capabilities of the platform and how authors use the platform. A platform that supports accessibility requirements can still produce inaccessible content if authors do not follow accessible authoring practices.</div>

### Integrating Accessibility in Content Creation and Publication

Agencies improve accessibility outcomes when they move from reactive remediation to proactive accessibility integration, making Section 508 compliance routine. 

Higher maturity organizations typically:

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Train content authors regularly.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Standardize accessible templates.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Limit unsupported components.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Integrate Section 508 conformance into workflows.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Conduct routine Section 508 conformance testing.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Track and remediate accessibility defects.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Establish clear accountability.
    </div>
  </li>
</ul>

Accessibility should be part of routine publishing operations rather than a separate compliance activity.

## Shared Responsibility Model

Accessibility in low-code environments is a shared responsibility. No single role owns accessibility alone.


<table id="roles" class="usa-table usa-table--borderless usa-table--striped striped margin-bottom-2">
  <caption>Table 1: Roles and Responsibilities in a low-code environment</caption>
  <thead>
    <tr>
      <th scope="col">Role</th>
      <th scope="col">Accessibility Responsibilities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Platform Owners</th>
      <td>Configure accessible templates and themes, including a sufficient variety of layouts, workflows, and components</td>
    </tr>
    <tr>
      <th scope="row">Developers</th>
      <td>Build accessible components and integrations</td>
    </tr>
    <tr>
      <th scope="row">Content Authors</th>
      <td>Create accessible content and documents</td>
    </tr>
    <tr>
      <th scope="row">Reviewers and Approvers</th>
      <td>Verify accessibility before publication</td>
    </tr>
    <tr>
      <th scope="row">Procurement Teams</th>
      <td>Ensure products support accessibility requirements</td>
    </tr>
    <tr>
      <th scope="row">Program Managers</th>
      <td>Establish accessibility expectations and governance</td>
    </tr>
  </tbody>
</table>

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;">While low-code platforms can reduce accessibility risk, accessibility ultimately depends on how content is created, reviewed, governed, and how authoring tools are selected and procured to ensure they support accessible output by design. Agencies achieve stronger accessibility outcomes when accessibility is embedded into lifecycle management, component maintenance, content approvals, and collaboration across design, development, and content teams rather than treated as a final review activity.</div>

## Related Resources
* [Create Accessibility Digital Products]({{site.baseurl}}/create/)  
* [Design and Develop Accessible Products]({{site.baseurl}}/develop/)  
* [IT Accessibility Roles and Responsibilities]({{site.baseurl}}/manage/roles/)  
* [Test for Accessibility]({{site.baseurl}}/test/)  
* [Tools for Testing ICT]({{site.baseurl}}/tools/tools-for-testing-ict/)

<div id="prev-next-section">
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/develop/low-code-authoring-basics/common-accessibility-risks/">Next > </a>
</div>