---
layout: page
sidenav: true 
type: develop
title: Common Accessibility Risks in Low-Code Authoring Environments and Content Management Systems
permalink: develop/low-code-authoring-basics/common-accessibility-risks/
description: Learn how to avoid introducing recurring accessibility issues in low and no code environments. 
disclaimer: false
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
Low-code tools simplify publishing, but they also introduce recurring risks. Below are the most common accessibility risks. 

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><strong>Tip:</strong> Always preview content before publishing.</div>

## Accessibility Considerations for AI-Assisted Content Creation

Many modern content management systems and low-code platforms include artificial intelligence (AI) capabilities that can generate content, summarize information, suggest alternative text, create forms, generate metadata, or assist with publishing workflows.

AI-generated content may improve efficiency but should be reviewed before publication.

Potential accessibility risks include:

<ul class="usa-icon-list maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Incorrect or incomplete alternative text.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Improper heading structures.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Ambiguous link text.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Inaccessible form structures.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Content that does not adequately support users with disabilities.
    </div>
  </li>
</ul>

Authors remain responsible for ensuring accessibility, regardless of whether content is created manually or generated through AI-assisted tools.

<div class="bg-gray-5 border-top border-bottom-1 border-gray-30 radius-top-lg margin-top-3" style="width: auto; border-top-right-radius: 1.0rem;">
    <div class="margin-left-2">
      <h2 id="automated">Accessibility of Automated Content and Workflows</h2>

<p>Low-code environments often generate content automatically through workflows, notifications, approvals, dashboards, reports, and email communications.</p>

<p>Accessibility considerations should extend to:</p>

<ul class="usa-icon-list maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Automated email notifications.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Generated reports and dashboards.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Workflow status messages.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Approval interfaces.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      System-generated documents.
    </div>
  </li>
</ul>

<p>Agencies should periodically review automated outputs to verify that accessibility requirements continue to be met as workflows evolve.</p>
</div>
</div>

## Copy-and-Paste Formatting Problems

Content pasted from Word, PowerPoint, or external websites can introduce accessibility defects such as invalid markup, empty headings, inline styling issues, and improperly formatted lists.

After pasting content:

<ul class="usa-icon-list maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Review and clean up formatting as needed.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Reapply proper structure using CMS built-in styles and tools.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Review heading hierarchy and lists for accuracy.
    </div>
  </li>
</ul>

<div class="bg-gray-5 border-top border-bottom-1 border-gray-30 radius-top-lg margin-top-3" style="width: auto; border-top-right-radius: 1.0rem;">
    <div class="margin-left-2">
      <h2 id="dragdrop" >Drag-and-Drop Layout Problems</h2>

<p>Visual page builders may create:</p>

<ul class="usa-icon-list maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Incorrect heading structures.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Poor keyboard navigation.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Reading order issues.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Empty containers.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Non-semantic markup.
    </div>
  </li>
</ul>

<p>Authors should verify that visual layouts also produce logical HTML structure.</p>
</div>
</div>

## Embedded Third-Party Content

Embedded tools and widgets may not meet accessibility requirements. Some examples include maps, dashboards, social media feeds, media players, scheduling tools or surveys. 

Before embedding third-party content:

<ul class="usa-icon-list maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Evaluate accessibility support.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Review Accessibility Conformance Report (ACR) documentation.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Conduct Section 508 conformance testing.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Prohibit use of inaccessible third party content.
    </div>
  </li>
</ul>

<div class="bg-gray-5 border-top border-bottom-1 border-gray-30 radius-top-lg margin-top-3" style="width: auto; border-top-right-radius: 1.0rem;">
    <div class="margin-left-2">
      <h2 id="reusable">Reusable Components with Accessibility Defects</h2>

<p>A reusable component can spread accessibility issues across multiple pages.</p>

<p>Examples include:</p>

<ul class="usa-icon-list maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Logos without alternative text.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Inaccessible accordions.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Carousels without keyboard access.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Forms missing visible or programmatic labels.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Modals without visible focus.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Repeat headers or footers with accessibility issues.
    </div>
  </li>
</ul>

<p>Before broad deployment:</p>

<ul class="usa-icon-list maxw-full margin-bottom-3">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Test reusable components for accessibility; remediate components as needed.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Establish approved component libraries.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Prohibit use of inaccessible components.
    </div>
  </li>
</ul>

</div>
</div>
## Resources

* [Create Accessibility Digital Products]({{site.baseurl}}/create/)  
* [Design and Develop Accessible Products]({{site.baseurl}}/develop/)  
* [Identify User Needs]({{site.baseurl}}/manage/identify-user-needs/)  
* [Test for Accessibility]({{site.baseurl}}/test/)  
* [Tools for Testing ICT]({{site.baseurl}}/tools/tools-for-testing-ict/)

<div id="prev-next-section">
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/develop/low-code-authoring-basics/overview/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/develop/low-code-authoring-basics/core-principles-for-content-authors/"> Next > </a>
</div>
