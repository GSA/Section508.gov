---
layout: page
sidenav: true
permalink: /acquisition/buy/integrate-section-508-in-qasps/
type: acquisition
title: Including Section 508 in Quality Assurance Surveillance Plans
description: Learn how to integrate Section 508 in Quality Assurance Surveillance Plans (QASP) and explore sample language for Section 508 compliance across ICT deliverables.
created: 2026-03-13
custom-script: accordion-management.js
contributors: 
disclaimer: true
audience: 
- 508-pm
- buyer
- buyer-senior-exec
- fed-emp
- it-prog-proj-mgr
- requirement-ba
topic: 
- buy
- manage
subtopic: 
- Accessibility Standards, Procedures, Guidance, Best Practices
- Accessible Acquisition Info, Guidance & Best Practices
- Manage Accessibility for IT Program/Project Managers
- New Contracting (RFP, RFI, etc.)
resource_type: 
- article
format: html
created: 
updated: 2026-03-31
exclude-changelog: 
---
A <a href="https://www.acquisition.gov/far/37.604" target="_blank" class="usa-link--external"> Quality Assurance Surveillance Plan (QASP)</a> is a tool the federal government uses to monitor and evaluate contractor performance against contract objectives. It outlines the methodology for surveillance activities, detailing the "what," "when," and "who." The QASP also helps the Contracting Officer or Contracting Officer’s Representative (COR) monitor vendor performance and verify that deliverables meet contractual requirements. For information and communication technology (ICT) deliverables, the QASP should include verification of conformance with the Section 508 standards to ensure vendors consistently deliver digital products and services that meet federal ICT accessibility requirements. It should also specify how compliance with Section 508 standards will be verified. This ensures ICT accessibility is treated as a measurable, enforceable contract requirement.

Accessibility testing described in a QASP should be [risk-based]({{site.baseurl}}/manage/governance/ict-accessibility-and-risk-management/) and appropriate to the type of ICT deliverable. While agencies may not test every individual element of a product, they should test representative workflows, templates, and components that reflect typical and critical user interactions to ensure accessibility issues are identified across the system.

Including Section 508 conformance requirements in QASPs:

<ul class="usa-icon-list margin-bottom-3">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
     Reduces risk of rework by verifying accessibility throughout the project rather than only at final acceptance.
    </div>
  </li>  
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
     Provides enforceable criteria for deliverable acceptance.  
    </div>
  </li>  
    <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
     Strengthens vendor accountability by making Section 508 conformance part of performance measurement.
    </div>
  </li>  
  </ul>

The QASP is created during the solicitation phase. Include language in each solicitation to notify vendors that Section 508 conformance will be monitored through the QASP. For example: 
<div class="grid-col-8 border-base padding-1 margin-x-auto border-y text-primary" style="width:85%;">
<em>“The agency will evaluate the Contractor’s compliance with Section 508 requirements using the Quality Assurance Surveillance Plan (QASP). Deliverables must conform to the Section 508 Standards (36 C.F.R. Part 1194), including the incorporated WCAG 2.0 Level AA Success Criteria (or a later WCAG version adopted by the agency), as verified through Section 508 conformance testing and ICT accessibility reviews described in the QASP.”</em>
</div>

In the QASP, agencies should:
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Explicitly identify the applicable  ICT accessibility standards used to evaluate performance, such as the Section 508 standards and Web Content Accessibility Guidelines (WCAG) 2.0 Level AA.
    </div>
    </li>   
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content"> Define testing checkpoints for Section 508 conformance, such as during design, development, and user acceptance testing (UAT). 
    </div>
    </li>   
    <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Specify testing methodologies used to verify conformance. These may include automated scanning, manual inspection, assistive technology testing, representative sampling, or comprehensive testing.
    </div>
    </li>  
    <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Detail corrective actions such as documenting a process for remediation and retesting.    </div>
    </li> 
    </ul>

## Where to Include Section 508 in a QASP

At minimum, include Section 508 requirements in the following sections of a QASP:

<ul class="usa-icon-list">
<li class="usa-icon-list__item">
<div class="usa-icon-list__icon text-blue">
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
<use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#verified"></use>
</svg>
</div>
<div class="usa-icon-list__content">
<strong>Performance Objectives and Standards:</strong> Defines the expected level of quality. Example langauge:
<div class="grid-col-8 border-base padding-1 margin-x-auto border-y text-primary" style="width:85%;">
<em>All ICT deliverables must conform to Section 508 of the Rehabilitation Act, as implemented by the Section 508 Standards (36 C.F.R. Part 1194).</em></div>
<div class="grid-col-12 border-base radius-lg padding-1 margin-top-2" style="border: 1px solid black; background-color: #f5f9fc; margin-bottom-3"><strong>Note:</strong> Add any additional ICT accessibility requirements for your agency beyond Section 508.</div></div>
</li>  
<li class="usa-icon-list__item">
<div class="usa-icon-list__icon text-blue">
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
<use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#verified"></use>
</svg>
</div>
<div class="usa-icon-list__content">
<strong>Performance Indicators and Acceptable Quality Levels (AQLs):</strong> Defines how much deviation is acceptable before it counts as a defect. Example langauge:
<div class="grid-col-8 border-base padding-1 margin-x-auto border-y text-primary" style="width:85%;">
<em>All information and communication technology (ICT) deliverables shall meet Section 508 requirements with no accessibility defects that prevent users with disabilities from completing required tasks. Examples of minor defects may include cosmetic or low-impact issues that do not prevent users with disabilities from being able to perceive, operate, or understand the content. Major Section 508 conformance defects or repeated minor defects will result in the agency rejecting the deliverable until remediation is complete. The Government will determine the severity of accessibility defects and whether remediation is required before acceptance.</em></div>
<div class="grid-col-12 border-base radius-lg padding-1 margin-top-2" style="border: 1px solid black; background-color: #f5f9fc;"><strong>Note:</strong> Agencies may choose to require fully conformant deliverables without leeway for minor defects. Add any additional ICT accessibility requirements for your agency beyond Section 508.</div></div>
</li>  
<li class="usa-icon-list__item">
<div class="usa-icon-list__icon text-blue">
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
<use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#verified"></use>
</svg>
</div>
<div class="usa-icon-list__content">
<strong>Surveillance Methods:</strong> Specifies how your agency will verify accessibility compliance. Example langauge:
<div class="grid-col-8 border-base padding-1 margin-x-auto border-y text-primary" style="width:85%;">
<em>The agency will evaluate Section 508 conformance using a combination of automated testing tools, manual code inspection, and assistive technology testing, where applicable. The agency will test representative samples of web pages, software screens, or documents to confirm Section 508 conformance. The Government may also  perform additional testing or require the contractor  to provide supporting accessibility test results at no additional cost.</em></div>
<div class="grid-col-12 border-base radius-lg padding-1 margin-top-2" style="border: 1px solid black; background-color: #f5f9fc;"><strong>Note:</strong> Specify testing methodologies and tools and modify the scope of testing by ICT type, where applicable.</div></div>
</li>
 <li class="usa-icon-list__item">
<div class="usa-icon-list__icon text-blue">
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
<use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#verified"></use>
</svg>
</div>
<div class="usa-icon-list__content">
<strong>Frequency of Surveillance:</strong> Describes when Section 508 compliance reviews will occur. Example langauge:
<div class="grid-col-8 border-base padding-1 margin-x-auto border-y text-primary" style="width:85%;">
<em>The agency will conduct Section 508 conformance reviews at major project milestones, including design reviews, development milestones, sprint reviews (for agile projects), user acceptance testing (UAT), and prior to final acceptance of deliverables. The agency reserves the right to also perform ad hoc Section 508 conformance testing and review deliverable progress at intervals not noted.   </em></div></div>
</li> 
<li class="usa-icon-list__item">
<div class="usa-icon-list__icon text-blue">
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
<use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#verified"></use>
</svg>
</div>
<div class="usa-icon-list__content">
<strong>Remediation and Corrective Action:</strong> Ensures defects must be fixed and re-tested. Example langauge:
<div class="grid-col-8 border-base padding-1 margin-x-auto border-y text-primary" style="width:85%;">
<em>The Contractor must remediate Section 508 defects identified by the agency within [10ß] business days of notification, unless otherwise approved by the Contracting Officer or COR. The agency will re-test to confirm that corrective action meets Section 508 requirements. The agency may reject the deliverable until the Contractor completes remediation and meets all Section 508 standards. Remediation will occur at no additional cost to the agency. </em></div>
<div class="grid-col-12 border-base radius-lg padding-1 margin-top-2" style="border: 1px solid black; background-color: #f5f9fc;"><strong>Note:</strong> Modify the timeframe of remediation as needed. Use <a href="{{site.baseurl}}/tools/glossary/#cure-notice">cure notices</a> when applicable.</div></div>
</li>
<li class="usa-icon-list__item">
<div class="usa-icon-list__icon text-blue">
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
<use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#verified"></use>
</svg>
</div>
<div class="usa-icon-list__content">
<strong>Roles and Responsibilities:</strong> Clarifies who checks Section 508 conformance and who fixes issues. Example langauge:
<div class="grid-col-8 border-base padding-1 margin-x-auto border-y text-primary" style="width:85%;">
<em>The Contractor is responsible for ensuring deliverables conform to Section 508 requirements. The agency will perform surveillance and may engage third-party testers. Contractors must provide supporting documentation, such as a completed <a href="{{ site.baseurl }}/sell/acr/">Accessibility Conformance Report (ACR)</a> or <a href="{{ site.baseurl }}/test/elements-of-an-accessibility-test-report/">test report</a>, to demonstrate conformance. At a minimum, the documentation must include results for all applicable Section 508 standards, cover all major features,  functions, and product workflows, and clearly describe the testing methodologies and tools used. </em></div>
<div class="grid-col-12 border-base radius-lg padding-1 margin-top-2" style="border: 1px solid black; background-color: #f5f9fc;"><strong>Note:</strong> Modify the supporting documentation requirements as needed.</div></div>
</li>  
</ul>

<h2>Sample QASPs by Project Type</h2>

<!-- START ACCORDIONS -->
<div class="margin-bottom-3">
   <button id="expand-all" class="usa-button" data-target="accordion-group" data-action="expand">Expand All</button>
   <button id="collapse-all" class="usa-button" data-target="accordion-group" data-action="collapse">Collapse All</button>
</div>


<div id="accordion-group" class="usa-accordion usa-accordion--bordered usa-accordion--multiselectable" data-allow-multiple>
  <h3 class="usa-accordion__heading">
    <button id="b1" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a1">Consulting or Professional Services</button>
  </h3>
  <div id="a1" class="usa-accordion__content">
    <ul>
  <li><strong>Performance Standard:</strong> Contractors must deliver all work products and services in Section 508 conformant formats. Deliverables such as reports, training materials, presentations, and other required deliverables must conform to Section 508 requirements and WCAG 2.0 Level AA.</li> 
  <li><strong>Surveillance Method:</strong> The agency:
  <ul> 
    <li>Reviews all submitted documents with accessibility checkers and manual inspection.</li> 
    <li>Evaluates presentation materials for Section 508 conformance using manual and automated tools.</li>  
    <li>Observes live training sessions to verify accessibility practices, including captioning and accessible digital materials. </li></ul></li> 
 <li><strong>Frequency:</strong> The agency reviews deliverables at the design or outline stage, draft submission, final submission, and during live service delivery in the case of training sessions.</li>  
 <li><strong>Corrective Action:</strong> The Contractor corrects Section 508 conformance issues in documents or materials within [5] business days and resubmits them. For training or consulting services, the Contractor must re-deliver materials in a Section 508 conformant format at no additional cost. The agency rejects non-conformant deliverables until the Contractor meets Section 508 requirements.</li></ul> 
 </div>


  <h3 class="usa-accordion__heading">
    <button id="b2" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a2">Electronic Documents</button>
  </h3>
  <div id="a2" class="usa-accordion__content">
    <ul>
  <li><strong>Performance Standard:</strong> Contractors must deliver all electronic documents such as reports, training materials, and presentations in formats that conform to Section 508 standards.</li>   
 <li><strong>Surveillance Method:</strong> The agency evaluates submitted documents using the following methods:
 <ul> 
    <li>Accessibility checkers such as Microsoft Accessibility Checker or Adobe Acrobat accessibility tools </li>  
    <li>Manual inspection </li>  
    <li>Screen reader testing </li> </ul></li> 
<li><strong>Frequency:</strong> The agency reviews documents at draft submission and again upon submission of final deliverable. </li>  
<li><strong>Corrective Action:</strong> The Contractor corrects non-conformant documents within [10] business days and resubmits them. The agency re-tests corrected documents and rejects any deliverables that remain non-conformant.</li> </ul>
</div>

  <h3 class="usa-accordion__heading">
    <button id="b3" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a3">ICT Hardware</button>
  </h3>
  <div id="a3" class="usa-accordion__content">
<ul>
  <li><strong>Performance Standard:</strong> Contractors must deliver hardware that conforms to Section 508 requirements and provides accessible features such as tactile controls, audio output, visual indicators, and compatibility with assistive technology. Contractors must submit Section 508 conformance documentation, such as a VPAT or Accessibility Conformance Report, for each device model.</li> 
  <li><strong>Surveillance Method:</strong> The agency: 
  <ul> 
    <li>Reviews vendor-submitted conformance documentation.</li>  
    <li>Tests accessibility features on delivered hardware such as tactile keys, display contrast, audio output, and input device compatibility.</li>  
   <li>Conducts functional tests where applicable.</li></ul></li>  
  <li><strong>Frequency:</strong> The agency evaluates hardware for Section 508 conformance during product design if applicable, product demonstrations, upon delivery, and before final acceptance.</li>  
 <li><strong>Corrective Action:</strong> The Contractor must remediate Section 508 defects, replace non-conformant hardware, or provide equivalent conformant products at no additional cost. The agency rejects any hardware that does not meet Section 508 requirements.</li></ul>
 </div>

  <h3 class="usa-accordion__heading">
    <button id="b4" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a4">Software Applications</button>
  </h3>
  <div id="a4" class="usa-accordion__content"> 
<ul>
  <li><strong>Performance Standard:</strong> Contractors must deliver software that conforms to Section 508 standards and WCAG 2.0 Level AA success criteria. Contractors must also include Section 508 conformance in the project’s definition of done (for agile development) for each release.</li>  
  <li><strong>Surveillance Method:</strong> The agency:
  <ul>
    <li>Tests representative screens and workflows with automated tools.</li>  
    <li>Tests manually with inspection tools such as Accessibility Insights.</li>  
    <li>Conducts functional testing with assistive technology such as screen readers, voice recognition software, and magnification.</li></ul></li> 
<li><strong>Frequency:</strong> The agency conducts Section 508 conformance testing at design, major development milestones, during user acceptance testing (UAT), and before release to production.</li>  
 <li><strong>Corrective Action:</strong> The Contractor fixes critical accessibility defects within [10] business days and moderate defects within [20] business days. The agency re-tests fixes and rejects deliverables that remain non-conformant.</li></ul>
 </div>

  <h3 class="usa-accordion__heading">
    <button id="b5" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a5">Websites or Web Content</button>
  </h3>
  <div id="a5" class="usa-accordion__content">
<ul>
 <li><strong>Performance Standard:</strong> Contractors must deliver webpages that conform to Section 508 requirements and WCAG 2.0 Level AA success criteria.</li>  
<li><strong>Surveillance Method:</strong> The agency reviews a representative sample of webpages (for example, 10% or a risk-based sample) in each sprint or release using:
    <ul>
    <li>Automated scanning tools</li>  
    <li>Manual accessibility testing methods such as the Trusted Tester process or equivalent testing procedures</li></ul> </li>
  <li><strong>Frequency:</strong> The agency conducts Section 508 conformance reviews during each sprint review and before final release.</li>  
  <li><strong>Corrective Action:</strong> The Contractor remediates identified Section 508 defects within [5] business days. The agency re-tests the fixes before accepting the deliverable and rejects deliverables that remain non-conformant.</li></ul>
</div>
</div>

<h2>Related Resources</h2>
<ul>
<li><a href="https://www.acquisition.gov/far/37.604" target="_blank" class="usa-link--external">37.604 Quality assurance surveillance plans</a> Federal Acquisition Regulation (FAR)</li>  
<li><a href="{{ site.baseurl }}/buy/accessibility-in-procurement-solicitation-post-2/">Accessibility In Procurement II: Solicitation and Post-Solicitation</a></li>    
<li><a href="{{ site.baseurl }}/buy/">Buy Accessible Products and Services</a></li>     
<li><a href="{{ site.baseurl }}/manage/governance/ict-accessibility-and-risk-management/">ICT Accessibility and Risk Management</a></li>    
<li><a href="{{site.baseurl}}/manage/playbooks/technology-accessibility-playbook/8/">Technology Accessibility Playbook - Play 8: Integrate Accessibility Needs into Market Research and Acquisition Processes</a></li>    
<li><a href="https://www.dau.edu/acquipedia-article/quality-assurance-surveillance-plan-qasp" target="_blank" class="usa-link--external">Quality Assurance Surveillance Plan (WARU.edu)</a></li>    
<li><a href="https://www.faa.gov/headquartersoffices/ang/se20202025-quality-assurance-surveillance-plan-qasp-template" target="_blank" class="usa-link--external">Quality Assurance Surveillance Plan (FAA)</a></li>  
</ul>