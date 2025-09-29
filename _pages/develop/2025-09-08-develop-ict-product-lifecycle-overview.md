---
layout: page
sidenav: true
type: develop
title: ICT Product Lifecycle Overview
permalink: develop/product-lifecycle-overview/
description: Learn how to integrate Section 508 compliance early in the product lifecycle, from planning and design to development, testing, deployment, and maintenance.
disclaimer:
audience: 
- 508-pm
- cio
- content-creator
- designer
- it-prog-proj-mgr
- mgr-exec
- requirement-ba
topic: "Development (dev)"
subtopic: 
- Accessibility Standards, Procedures, Guidance, Best Practices
- General Info and Best Practices
- Manage Accessibility for IT Program/Project Managers
resource-type: "Process/How-to"
format: "HTML (html)"
created: 2025-09-08
updated: 2025-09-08
exclude-changelog: 
---

Within the information and communication technology (ICT) product lifecycle, Section 508 establishes standards that should be addressed at every phase—from planning and design to development, testing, deployment, and maintenance. Compliance with Section 508 is essential to meet federal requirements, avoid legal risks, and ensure ICT systems, websites, software, and digital services function as required across user environments. By integrating <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a> early in the product lifecycle, agencies can streamline development processes, reduce costly rework, and maintain consistent conformance with Section 508 requirements.

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><p><strong>Foundational Elements:</strong>
<ul>
<li>Review your agency’s ICT accessibility policy for requirements. If a policy does not exist, work with your agency’s Section 508 program to define requirements for Section 508 conformance, testing methodologies, and tools.</li>  
<li>Collaborate with legal, IT, communications, and design teams to ensure ICT accessibility is consistently embedded in activities across all aspects of the product lifecycle.</li>  
<li>Ensure ICT accessibility is integrated at every stage of the product lifecycle by assigning accountable individuals or teams. This may include a Section 508 Program Manager, Section 508 subject matter experts (SME), UI/UX designers, or project managers. RACI charts may be beneficial to help determine appropriate responsibilities.</li>   
<li><a href="{{site.baseurl}}/buy/">Ensure products or services procured are Section 508 compliant</a> or include a plan for meeting Section 508 Standards with an alternative means of access.</li>  
<li>Conduct training by <a href="{{site.baseurl}}/manage/roles/">roles and responsibilities</a> to ensure each role is equipped with the fundamental knowledge required to embed Section 508 compliance in activities that align with their responsibilities.</li></ul></p></div>

## Product Lifecycle Stages

The following process outlines the product lifecycle stages and hows to integrate Section 508 compliance at each step.

<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Plan</h3>
<ul>
<li>Map <a href="{{site.baseurl}}/manage/governance/enterprise-architecture-and-change-control/">Enterprise Architecture activities</a> to the project.</li>
<li>Include Section 508 language and relevant standards in project charters, acquisition plans, and contracts.</li>  
<li>Ensure SMEs are integrated in the planning process. </li>
<li>Assign <a href="{{site.baseurl}}/manage/roles/">ICT accessibility roles</a> such as a developer, tester, content creator, and Section 508 SME. In addition, assign responsibility for Section 508 conformance for the ICT product.</li> 
<li>Consult the Business Analyst (BA) task list that cross-references responsibilities with Section 508 activities. </li>
<li>Consider procuring tools that can test for ICT accessibility and authoring tools that facilitate developing accessible content by default.</li>  
<li>Require Accessibility Conformance Reports (ACRs) for any third-party libraries, platforms, or other components. </li> 
<li>Plan for Section 508 testing resources and timelines in the project schedule and budget.</li>  
<li>Understand your agency’s <a href="{{site.baseurl}}/manage/governance/section-508-for-change-control-processes/">Change Control process</a> and document requirements in the project schedule.</li></ul></li> 
    
<li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Gather Requirements:</h3>
<ul>
<li>Identify or define specific ICT accessibility requirements as part of business needs, scope, and project plan.</li>   
<li>Include Section 508 Standards and agency-specific requirements.</li>   
<li>Document Section 508 Standards into functional requirements by defining what specific actions the ICT should perform.</li>   
<li>Document Section 508 non-functional requirements by defining how the ICT should behave.</li>   
<li>Draft <a href="{{site.baseurl}}/develop/user-stories/">user stories</a> or requirements and document related acceptance criteria.</li>   
<li>Engage experts and users with disabilities to review requirements for comprehensiveness.</li>   
<li>Define supported assistive technologies and environments.</li>    
<li>Include a checklist of Section 508 Standards and applicable assistive technology interoperability requirements.</li></ul></li>

<li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Design</h3>
<ul>
<li>Ensure Section 508 requirements are a core consideration and annotated during design. Some key elements include:  
<ul>
    <li>Use color palettes with sufficient color contrast.</li>  
    <li>Avoid using color alone to convey meaning.</li>  
    <li>Provide visible focus indicators for interactive elements.</li>  
    <li>Ensure logical heading structure.</li>  
    <li>Design keyboard-accessible navigation for interactive elements.</li>  
    <li>Plan for Section 508-conformant error handling and form validation messages.</li>  
    <li>Include alternative text for all images and mark decorative ones appropriately.</li>  
    <li>Mock up captions or audio descriptions for media content. </li> 
    <li>Consideration of multiple user interaction modalities such as keyboard, screen readers, and voice.</li></uL></li>  
<li>Apply <a href="{{site.baseurl}}/develop/universal-design/">universal design</a> principles.</li>   
<li>Use accessible design patterns such as the <a href="https://designsystem.digital.gov/" target="_blank" class="usa-link--external">U.S. Web Design System</a>.</li>  
<li>Create designs that allow for personalization or customization, such as font size adjustments or color schemes, so users can modify content based on their needs.</li>  
<li>Conduct early design reviews with Section 508 SMEs, users with disabilities or <a href="{{site.baseurl}}/develop/sample-personas/">personas that include users with disabilities</a>.</li>  
<li>Use approved tools during the design phase to check for Section 508 conformance such as <a href="{{site.baseurl}}/tools/tools-for-testing-ict/">color contrast tools</a>.</li>  
<li>Review wireframes and design <a href="{{site.baseurl}}/test/conformance-of-prototypes-and-pilots/">prototypes</a> for Section 508 conformance.</li>  
<li>Include users with disabilities in user testing, feedback, and review stages to ensure the products meet real-world accessibility needs.</li></ul></li>


<li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Develop</h3>
<ul>
<li>Use <a href="{{site.baseurl}}/develop/user-stories/">user stories</a> or requirements and associated acceptance criteria.</li>  
<li><a href="{{site.baseurl}}/develop/incorporating-accessibility-conformance/">Incorporate accessibility conformance validation within development processes</a>.</li>  
<li>Use accessible coding practices including HTML semantic structure and ARIA attributes. Consider creating a library of reusable Section 508 conformant components and templates.</li>  
<li>Use accessible design patterns such as the <a href="https://designsystem.digital.gov/" target="_blank" class="usa-link--external">U.S. Web Design System</a>.</li>   
<li>Ensure keyboard navigability and logical, visible focus.</li>  
<li>Label all form fields and UI elements correctly.</li>  
<li>Avoid inaccessible components or provide a conforming alternate version.</li> 
<li><a href="{{site.baseurl}}/develop/incorporating-accessibility-conformance/">Build accessibility into continuous delivery/continuous deployment (CI/CD) pipelines</a> through automated linting or Section 508 conformance testing methods.</li>  
<li>Document code-level ICT accessibility features and decisions.</li></ul></li>


<li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Test</h3>
<ul>
<li>Create ICT accessibility test cases and integrate into product test plans. Ensure alignment with enterprise test processes and testing methodologies. Include both functional and non-functional requirements in test cases. Different types of test plans that may be within project scope are:  
<ul>
    <li>Master Test Plan: provides a high level strategy and scope for all testing efforts in a project.</li>   
    <li>Agile Test Plan: aligns testing with sprint goals.</li>   
    <li>Compliance Test Plan: addresses regulatory and legal requirements, including Section 508.</li>   
    <li>Integration Test Plan: validates interactions between components, systems, or other integrated content. </li>  
    <li>Non-Functional Test Plan: addresses usability, compliance, performance, security and compatibility of the requirements.</li>   
    <li>Regression Test Plan: validates functionality is not broken after any changes.</li>   
    <li>Release Test Plan: validates a specific release and associated requirements. </li>  
    <li> System Test Plan: verifies integrated software systems against functional requirements. </li>  
    <li>Unit Test Plan: tests specific units of code against expected results. </li>  
     <li>User Acceptance Test Plan: validates product scenarios by users.</li></ul></li>  
 <li>Ensure product documentation, including user manuals, training materials, and online content, are Section 508 conformant.</li>   
 <li>Use <a href="{{site.baseurl}}/test/">automated and manual Section 508 conformance testing tools and methodologies</a> per agency policy. Some ICT products may not support automated testing. Manual Section 508 conformance testing must be conducted for a comprehensive assessment for Section 508 standards. For more on how to test see: 
<ul>
    <li><a href="{{site.baseurl}}/test/documents/">Electronic Documents Overview</a></li>  
    <li><a href="{{site.baseurl}}/test/ict-hardware-overview/">ICT Hardware Overview</a> </li>  
    <li><a href="{{site.baseurl}}/test/ict-testing-baseline-portfolio/">ICT Testing Baseline Portfolio</a> </li> 
    <li><a href="{{site.baseurl}}/test/conformance-of-prototypes-and-pilots/">Prototypes and Pilots</a> </li> 
    <li><a href="{{site.baseurl}}/test/software/">Software Overview</a> </li> 
    <li><a href="{{site.baseurl}}/test/testing-overview/">Testing Methods</a> </li> 
    <li><a href="{{site.baseurl}}/tools/tools-for-testing-ict/">Tools for Testing ICT</a> </li> 
   <li><a href="{{site.baseurl}}/test/websites/">Web Content Overview</a></li></ul></li> 
 <li>Identify when to conduct user testing, usability testing, and testing with assistive technologies such as screen readers, voice control, and magnification.</li>   
 <li>Ensure end users with disabilities are involved in <a href="{{site.baseurl}}/tools/glossary/#user-acceptance-testing">user acceptance testing (UAT)</a> to provide feedback on the product’s accessibility.</li>   
 <li>Conduct testing across devices, browsers, and different environments.</li>   
 <li>Create a <a href="{{site.baseurl}}/test/elements-of-an-accessibility-test-report/">Section 508 Test Report</a>. </li>   
 <li>Log and track accessibility issues like any other bug.</li>    
 <li>Document and prioritize accessibility defects based on risk or criticality of defect.</li>    
 <li>Follow Change Control requirements for product deployment.</li></ul></li> 


<li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Deploy</h3>
<ul>
<li>Conduct comprehensive Section 508 testing prior to deployment.This must include manual Section 508 conformance testing. If any defects remain, prioritize remediation and determine alternative means of access.</li>  
<li>Produce an <a href="{{site.baseurl}}/sell/">Accessibility Conformance Report (ACR)</a>, if required.</li>  
<li>Publish accessibility documentation such as an <a href="{{site.baseurl}}/sell/acr/">ACR or accessibility statement</a>. </li> 
<li>Confirm alternate formats are available or alternative means are documented, if applicable.</li>  
<li>Verify all third-party integrations are Section 508 conformant or have alternative means of access.</li>  
<li>Create feedback channels, such as <a href="{{site.baseurl}}/manage/laws-and-policies/implementing-public-feedback-mechanism/"> public feedback</a> or <a href="{{site.baseurl}}/manage/laws-and-policies/Section-508-complaints-best-practices/">Section 508-related complaints</a> for users to report accessibility issues.</li></ul></li>


<li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Operate and Maintain</h3>
<ul>
<li>Ensure ICT accessibility is seen as a continual process, not a one-time check.</li>   
<li>Maintain ICT accessibility as part of ongoing <a href="{{site.baseurl}}/tools/glossary/#quality-assurance">Quality Assurance (QA)</a>. This may involve conducting periodic audits of the product to ensure it complies with Section 508 Standards. </li> 
<li>Monitor for regressions during updates or patches.</li> 
<li>Retest (see Step 5: Test above) when major updates occur to the user interface, user experience, user paths, or critical functionality.</li> 
<li>Monitor ICT accessibility defects or feedback from users and adjudicate in a timely manner. </li>
<li>Maintain documentation on ICT accessibility such as accessibility test reports or development decisions and update changelogs. </li> 
<li><a href="{{site.baseurl}}/manage/developing-a-section-508-training-plan/">Train support teams</a> on handling accessibility-related queries, including any customer support services provided.</li>  
<li>Maintain up-to-date ACRs and accessibility statements, if applicable.</li></ul></li></ol>

## Related Resources:

* [Accessible Design Using the U.S. Web Design System (USWDS)]({{site.baseurl}}/develop/accessible-design-using-uswds/)
* [Agile Roles Section 508 Task Matrix]({{site.baseurl}}/develop/agile-roles-section-508-task-matrix/)
* [Business Analyst Section 508 Task Matrix]({{site.baseurl}}/develop/ba-section-508-task-matrix/)  
* [Considerations for Publishing a Page to the Web]({{site.baseurl}}/develop/publish-to-web/)  
* [Create Accessible Digital Products]({{site.baseurl}}/create/)  
* [Create Accessible Software and Websites]({{site.baseurl}}/develop/software-websites/)  
* [Designing Digital Content For Users With Cognitive Disabilities]({{site.baseurl}}/design/digital-content-users-with-cognitive-disabilities/)   
* [Developing Accessible Web Content]({{site.baseurl}}/develop/web-content/) 
* [RACI Matrix for ICT Accessibility Integration Across the Product Lifecycle]({{site.baseurl}}/develop/raci-matrix-for-ict-accessibility-product-lifecycle/)
* [RACI Matrix for Section 508 Accessibility Integration in the Software Development Lifecycle]({{site.baseurl}}/develop/raci-matrix-for-section-508-in-sdlc/)
* [Section 508 Compliance Checklist for the Product Lifecycle (DOCX)]({{site.baseurl}}/assets/files/section-508-compliance-checklist-for-the-product-lifecycle.docx)
* [Section 508 Considerations for Enterprise Architecture Integration]({{site.baseurl}}/manage/governance/integrating-section-508-into-enterprise-architecture/)  
* [Technology Accessibility Playbook:]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook-intro/)  
  * [Play 7: Integrate Accessibility Needs into Requirements and Design Processes]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook-intro/play07/)  
  * [Play 9: Integrate Accessibility Needs into Development Processes]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook-intro/play09/)  
  * [Play 10: Conduct ICT Accessibility Testing]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook-intro/play10/)  
  * [Play 11: Track and Resolve Accessibility Issues]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook-intro/play11/)  
* [Test for Accessibility]({{site.baseurl}}/test/)   
* [Understanding Accessible Fonts and Typography for Section 508 Compliance]({{site.baseurl}}/develop/fonts-typography/)

**Reviewed/Updated:** September 2025
