---
layout: page
sidenav: true
type: develop
title: Accessibility Guidance for Common CMS Platforms
permalink: develop/low-code-authoring-basics/accessibility-guidance-for-common-cms-platforms/
description: Learn about common accessibility risks associated with their CMS platform and how to establish standards, governance, and review processes to help ensure content remains accessible over time.
disclaimer: true
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
created: 2026-07-05
updated: 
---
Most CMS platforms provide tools and features that can support accessibility, but accessibility depends on how agencies implement and use those tools. Themes, templates, components, plugins, modules, and content authoring practices can all affect accessibility outcomes. Federal teams should understand the common accessibility risks associated with their CMS platform and establish standards, governance, and review processes to help ensure content remains accessible over time.

 <div class="margin-bottom-3 no-print">
      <button class="usa-button" data-action="expand" data-target="accordion-group">Expand all</button>
      <button class="usa-button usa-button" data-action="collapse" data-target="accordion-group">Collapse all</button>
</div>
<div id="accordion-group" class="usa-accordion usa-accordion--multiselectable margin-bottom-6" data-allow-multiple>
  <!--BASIC-->
  <h2 class="usa-accordion__heading">
    <button id="AEM" type="button" class="usa-accordion__button" aria-expanded="true" aria-controls="m-a1">Adobe Experience Manager (AEM)</button>
  </h2>
  <div id="m-a1" class="usa-accordion__content">

<p>Accessibility outcomes in AEM depend on implementation decisions, component design, governance practices, and content authoring approaches.

Accessibility considerations include:</p>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Component accessibility.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Template governance.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Authoring restrictions.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Workflow validation.
    </div>
  </li>
</ul>

<p>Organizations using AEM should maintain approved accessible component libraries, restrict unsupported customizations, and integrate accessibility reviews into publishing workflows.</p>
</div>

<h2 class="usa-accordion__heading">
    <button id="drupal" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a2">Drupal</button>
  </h2>
  <div id="m-a2" class="usa-accordion__content">

<p>Drupal is widely used across federal agencies and can support accessible implementations when appropriately configured, maintained, and governed. Accessibility outcomes depend on implementation, configuration, and content authoring practices.</p>

<h3>Drupal accessibility varies significantly depending on:</h3>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Themes.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Modules.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Content types and templates.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Layout Builder and Paragraph components.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Custom code and integrations.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Authoring practices.
    </div>
  </li>
</ul>

<h3>Common Drupal risks include:</h3>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Custom themes that do not meet accessibility requirements.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Inaccessible contributed or custom modules.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Improper heading structure within rich text content.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Missing or poor-quality alternative text.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Layout Builder configurations that create reading order issues.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Inaccessible forms and Webforms.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Embedded third-party content that is not accessible.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Reusable components that introduce accessibility defects across multiple pages.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Uploading inaccessible documents and media.
    </div>
  </li>
</ul>

<h3>Drupal authors should:</h3>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Use approved content types, templates, and components.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Apply headings in a logical hierarchy.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Add meaningful alternative text to images.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Use descriptive link text.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Ensure uploaded documents are accessible.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Verify multimedia includes captions, audio descriptions, and transcripts when required.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Follow established content authoring standards.
    </div>
  </li>
</ul>

<h3>Drupal site owners and administrators should:</h3>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Use accessible themes and design systems.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Limit modules to approved and tested solutions.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Establish governance for reusable components.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Test custom functionality and integrations.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Review accessibility after Drupal core and module updates.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Provide accessibility training for content authors.
    </div>
  </li>
</ul>

<h3>Agencies should establish governance for:</h3>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Approved modules and integrations.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Accessible themes and design systems.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Reusable content components and paragraph types.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Content authoring standards.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Accessibility testing and review processes.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Ongoing accessibility maintenance and regression testing.
    </div>
  </li>
</ul>
</div>

<h2 class="usa-accordion__heading">
    <button id="sharepoint" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a3">SharePoint</button>
  </h2>
  <div id="m-a3" class="usa-accordion__content">

<p>SharePoint is commonly used for intranet and collaboration content.</p>

<h3>Common accessibility concerns include:</h3>
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Complex page layouts.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Poor heading structure.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Inaccessible uploaded documents.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Improper table use.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Embedded unsupported content.
    </div>
  </li>
</ul>

<h3>SharePoint authors should:</h3>

<ul class="usa-icon-list">
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
      Maintain consistent page structure.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Avoid excessive visual complexity.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Ensure document accessibility before upload.
    </div>
  </li>
</ul>

<h3>Agencies should establish governance for:</h3>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Approved web parts and components.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Accessible templates.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Standardized authoring practices.
    </div>
  </li>
</ul>
</div>

<h2 class="usa-accordion__heading">
    <button id="wordpress" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a4">Wordpress</button>
  </h2>
  <div id="m-a4" class="usa-accordion__content">

<h3>WordPress accessibility varies significantly depending on:</h3>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Themes.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Plugins.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Page builders.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#thumb_up_alt"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Customizations.
    </div>
  </li>
</ul>

<h3>Common WordPress risks include:</h3>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Inaccessible plugins.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Poorly coded themes.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Drag-and-drop builder accessibility issues.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Missing form labels.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Keyboard traps.
    </div>
  </li>
</ul>

<h3>Federal teams using WordPress should:</h3>

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Use themes that have been evaluated and approved against organizational accessibility requirements.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Limit plugin usage to accessible tools.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Test third-party integrations.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Train content authors on accessible authoring practices.
    </div>
  </li>
</ul>
</div>
</div>

<h2>Resources</h2>
<ul>
  <li><a href="{{site.baseurl}}/create/">Create Accessibility Digital Products</a></li>
  <li><a href="{{site.baseurl}}/develop/">Design and Develop Accessible Products</a></li>
  <li><a href="{{site.baseurl}}/manage/identify-user-needs/">Identify User Needs</a></li>
  <li><a href="{{site.baseurl}}/manage/roles/">IT Accessibility Roles and Responsibilities</a></li>
  <li><a href="{{site.baseurl}}/test/">Test for Accessibility</a></li>
  <li><a href="{{site.baseurl}}/tools/tools-for-testing-ict/">Tools for Testing ICT</a></li>
</ul>

<div id="prev-next-section">
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/develop/low-code-authoring-basics/core-principles-for-content-authors/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/develop/low-code-authoring-basics/low-code-accessibility-checklist/"> Next > </a>
</div>
