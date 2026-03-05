---
layout: page
sidenav: true
type: manage
title: Enterprise Architecture and Change Control Review Guidelines for Project Teams
permalink: manage/governance/enterprise-architecture-and-change-control/
redirect_from: 
contributors: dhs
description: Learn about guidelines to help IT Project Teams understand the fundamental steps for obtaining Section 508 Subject Matter Expert (SME) approval during change control requests.
disclaimer: 
audience: 
- 508-pm
- mgr-exec
- it-prog-proj-mgr
- requirement-ba
topic: 
- policy
- manage
subtopic: 
- General Info and Best Practices
- Manage Accessibility for IT Program/Project Managers
- Accessibility Standards, Procedures, Guidance, Best Practices
resource_type: 
- article
format: html
created: 2025-09-04
updated: 
exclude-changelog: 
---
These guidelines will help IT Project Teams understand the fundamental steps for obtaining Section 508 Subject Matter Expert (SME) approval during change control requests. Although agency-specific procedures for reviewing such requests may vary, these general guidelines will aid in preparation.

Project teams should treat accessibility evaluation as part of their standard definition of “ready” for a change request. Accessibility should be addressed alongside security, privacy, and functional considerations before a request is considered complete.

Be ready to answer the following questions, either formally within the change control request system or in response to inquiries from the Section 508 Program Manager (PM). For assistance with implementing these guidelines, [contact your agency’s Section 508 PM]({{site.baseurl}}/tools/program-manager-listing/).
 
<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Will users or admins be interacting with a new or changed user interface?</h2> <br>This includes users or administrators who will be viewing information, entering data, or controlling functions through screens or other user interfaces provided through web browsers, software, operating systems, or mobile devices. The user interface is considered new to the agency if new screens are added to an existing system or new screens are provided through the introduction of a brand-new system. An interface is considered changed if an existing user interface has been significantly updated such as the addition of multiple user controls to an existing screen such as data entry fields or navigation controls. Note: Adding a single field to a screen or a line of plain text would not be considered a significant change. 
    <ul>
   <li>If <em>No</em>, the product does not have a user interface, it is recommended the CCB Section 508 SME approves the request.</li>  
  <li>If <em>Yes</em>, accessibility testing must be included in the test plan for the change request. Provide test evidence or reference to existing Section 508 conformance documentation. Continue to question 2.</li></ul></li>
  
<li class="usa-process-list__item">
<h2 class="usa-process-list__heading">Is the product an authoring tool that can be used to create electronic documents or a user interface or integrated development environment (IDE) for web or software?</h2> <br>This includes authoring tools for: Internet and intranet web pages; Software with a user interface; Electronic documents that are used for public and <a href="{{site.baseurl}}/tools/glossary/#a">agency official communications</a> such as forms, templates, reports, charts, and surveys; Multimedia content; and Training Content. Project teams should confirm not only that the tool itself is accessible, but also that it can generate conformant output such as documents, templates, and training content. Require evidence such as accessibility test reports or vendor Accessibility Conformance Reports (ACRs or VPATs). 
    <ul>
   <li>If <em>Yes</em>, additional due diligence in reviewing Section 508 testing outcomes is recommended as authoring tools need to be capable of generating Section 508 conformant electronic content. Pay close attention to the Section 508 conformance test report.</li>   
  <li>Continue to question 3.</li></ul></li>

  <li class="usa-process-list__item">
<h2 class="usa-process-list__heading">Do any of these items apply?</h2> <br>Product is a server operating system (OS); All functions of the technology are controlled through a command line interface; The decision request is a minor upgrade to an existing product approved for use in the component; or The decision request is for a product that will be restricted to 20 users or less. Note: if these conditions apply but the change introduces any new user interface elements, accessibility testing should still occur to verify accessibility. 
      <ul>
   <li>If <em>Yes</em> to any of the above, it is recommended that the request is approved by the CCB Section 508 SME without requiring additional documentation as Section 508 conformance risk is very low.</li>   
  <li> If <em>No</em> or <em>Unknown</em>, continue to question 4.</li></ul></li> 
    
<li class="usa-process-list__item">
<h2 class="usa-process-list__heading">Does the proposed product version have an approved <a href="{{site.baseurl}}/buy/understanding-section-508-exceptions/">Section 508 exception</a>?</h2> <br>
      <ul>  
  <li>If <em>Yes</em>, verify the exception on record or request documentation; including applicable Alternate Means plan. If valid, it is recommended the CCB Section 508 SME approves the request. Require teams to verify whether the exception is still current and valid. Exceptions often expire or are tied to specific system boundaries. If the exception is outdated, a new review should be initiated.</li>  
   <li>If <em>No</em>, <em>Unknown</em>, or <em>Section 508 exception is not valid</em>, continue to question 5.</li></ul></li> 

  <li class="usa-process-list__item">
<h2 class="usa-process-list__heading">Does the proposed product version have a completed Section 508 conformance test report or remediation plan?</h2> <br>
      <ul>   
   <li>If <em>Yes</em>, validate the test report or remediation plan on record or request documentation. If the Section 508 test report or remediation plan with timeline is sufficient for the request, it is recommended the CCB Section 508 SME approves the request. Remediation plan timelines should be tracked to ensure the product is brought into compliance. Project teams should also rely on agency-approved testing methods, such as the Trusted Tester process, to ensure quality and consistency.</li>   
  <li>If <em>No</em> or the documentation is not sufficient, require the requestor to provide sufficient documentation prior to making a decision. It is recommended that the CCB Section 508 SME denies the request until sufficient information is obtained. If documentation is incomplete, the change request should not proceed until sufficient evidence is provided. Accessibility remediation must be tracked in the project schedule and included in the system’s Plan of Action and Milestones (POA&M) where applicable.</li></ul></li></ol>

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><strong>Tip:</strong> The ICT product should be Section 508 conformant if any of the below statements are true:
<ul>
<li>There is a change to the User Interface.</li>
<li>There are 20 or more users.</li>
<li>ICT is an authoring tool for Web, Software or Electronic Documents.</li>
<li>ICT is Web Content or Library Content hosted by Web.</li>
<li>ICT is a Form or an Electronic Document.</li>
<li>ICT is Multimedia Content including Video and Electronic Training.</li></ul>
For all listed conditions, evidence of accessibility conformance such as test results or a remediation plan must be attached to the change request record. Project teams are responsible fors maintaining updated accessibility documentation throughout the system lifecycle. If ICT is not fully conformant, at minimum, require a remediation plan to bring the ICT product into Section 508 compliance. The remediation plan should be tracked to ensure timelines and milestones are met.</div>

<h2>Related Resources:</h2>

* [Essential Elements of an Accessibility Test Report]({{site.baseurl}}/test/elements-of-an-accessibility-test-report/)  
* <a href="https://bidenwhitehouse.archives.gov/omb/management/ofcio/m-24-08-strengthening-digital-accessibility-and-the-management-of-section-508-of-the-rehabilitation-act/" target="_blank" class="usa-link--external">OMB Memorandum M-24-08: Strengthening Digital Accessibility and the Management of Section 508 of the Rehabilitation Act</a>
* [Overview of Testing Methods for 508 Conformance]({{site.baseurl}}/test/testing-overview/)  
* [Section 508 Considerations for Change Control Processes]({{site.baseurl}}/manage/governance/section-508-for-change-control-processes/) 
* [Technology Accessibility Playbook \- Play 9: Integrate Accessibility Needs into Development Processes]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook/9/)
* [Understanding Vendor Claims in Accessibility Conformance Reports for Section 508 Conformance]({{site.baseurl}}/buy/understand-claims/)   

**Reviewed/Updated:** September 2025
