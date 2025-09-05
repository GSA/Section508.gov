---
layout: page
sidenav: true
type: manage
title: Section 508 Considerations for Change Control Processes
permalink: manage/governance/section-508-for-change-control-processes/
description: Learn how to integrate Section 508 into each stage of the ICT change control process to ensure Section 508 compliance.
disclaimer: 
contributors: dhs
audience: 
- 508-pm
- mgr-exec
- buyer-senior-exec
- it-prog-proj-mgr
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
Federal agencies must consider Section 508 requirements from the outset when updating or modifying their information and communication technology (ICT). Integrating Section 508 into the change control process ensures that accessibility is evaluated at every stage. This proactive approach prevents the introduction of new barriers, avoids costly rework, and maintains compliance with federal requirements. By embedding accessibility checks into standard change control steps, agencies can ensure system updates continue to meet the needs of every user.

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><strong>Tip</strong>: Project teams should consider ICT accessibility implications early in the change control process and document it through analysis, development, and testing. Agencies should also ensure that vendor and contractor deliverables, including patches, releases, or enhancements, are accompanied by updated <a href="{{site.baseurl}}/sell/acr/">Accessibility Conformance Reports</a> (ACRs or Voluntary Product Accessibility Template (VPAT)) and accessibility regression testing results.</div>

Agencies should work closely with their Change Control Board (CCB) stakeholders, such as the Chief Technology Officer (CTO), Chief Information Officer (CIO), Chief Information Security Officer (CISO), Information System Security Officers (ISSOs), Privacy officials, and Contracting Officers (COs) or their representatives (CORs). A Section 508 Subject Matter Expert (SME) should be included in CCB discussions to provide authoritative input on accessibility considerations; final decision authority remains with the CCB leadership.

ICT accessibility considerations throughout each stage of the change control process are outlined below.

<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Identification and Initiation</h2> 
  <strong>Process</strong>: Submit change request and log request for tracking.<br> <br>
<strong>Section 508 consideration</strong>: Include Section 508 considerations on the intake form such as: Does the change impact ICT accessibility? Has Section 508 been considered during the design and development process? Have you engaged with the Section 508 program as part of this change request? Require requesters to document any expected accessibility risk such as the likelihood of affecting public-facing content, major UI elements, or essential functions.</li>
<li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Review and Assess</h2> 
  <strong>Process</strong>: CCB performs an initial screening to ensure completeness, conduct an impact analysis, and complete a feasibility study to determine if change is technically feasible. <br> <br>
<strong>Section 508 consideration</strong>: Include a Section 508 SME on the CCB who can confirm if the change applies to <a href="{{site.baseurl}}/tools/glossary/#i">ICT</a> and who can evaluate whether the change may introduce new accessibility defects or require additional <a href="{{site.baseurl}}/test/">Section 508 testing</a>. Project teams should assess and categorize accessibility risk, such as Low, Moderate, or High user impact, in parallel with security, privacy, and operational risks.</li>  
<li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Approval and Prioritization</h2> 
<strong>Process</strong>: CCB reviews the change request and impact analysis, makes a determination to approve, reject, or defer the change or request additional information, and changes are prioritized. <br> <br>
<strong>Section 508 consideration</strong>: Include a Section 508 SME on the CCB to ensure ICT accessibility is considered in the approval process. The Section 508 SME provides authoritative input to the CCB; if unresolved issues are identified, the CCB should require remediation or <a href="{{site.baseurl}}/blog/Accessibility-risk-management-and-model/">document risks</a> in the approval record.</li> 
<li class="usa-process-list__item">
    <h2 class="usa-process-list__headinsg">Planning and Scheduling</h2>  
<strong>Process</strong>: Design technical implementation of the change, create a comprehensive test and implementation plan, and allocate resources. <br>
<br>
<strong>Section 508 consideration</strong>: Ensure Section 508 conformance testing is explicitly included in the test plan. Testing should include both automated and manual methods consistent in alignment with the <a href="{{site.baseurl}}/test/ict-testing-baseline-portfolio/">ICT Accessibility Testing Baselines</a> such as the <a href="{{site.baseurl}}/test/trusted-tester/#dhs-trusted-tester-process--certification-program\">Trusted Tester process</a>, and should be documented in alignment with “<a href="{{site.baseurl}}/test/elements-of-an-accessibility-test-report/">Essential Elements of an Accessibility Test Report</a>.”</li>  
<li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Implementation and Test</h2> 
<strong>Process</strong>: Implement the change according to relevant plans, conduct testing to verify the change, and track and resolve any defects or bugs found during testing.<br>  
<br>
<strong>Section 508 consideration</strong>: Ensure comprehensive Section 508 conformance testing is completed and defects are identified and prioritized for remediation. If any defects are identified as critical issues, require remediation prior to approval. Agencies should confirm that vendor-delivered updates include Section 508 regression test evidence. Accessibility defects should be logged in the defect tracking system and, if unresolved, added to the system’s Plan of Action and Milestones (POA&M).</li>  
<li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Deployment and Monitoring</h2>  
<strong>Process</strong>: Deploy the change, monitor the change to ensure functionality is as expected, and conduct post-deployment review. <br>
<br>
<strong>Section 508 consideration</strong>: Ensure Section 508 conformance testing is included in post-deployment monitoring and review. Post-deployment accessibility checks should occur:
<ol>  
    <li>After any significant user interface or user experience (UI/UX) changes.</li>  
    <li>Upon receipt of user complaints or Help Desk tickets related to accessibility.</li>  
    <li>On a recurring cadence such as quarterly review for high-impact systems.</li></ol></li> 
<li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Documentation and Closeout</h2>  
<strong>Process</strong>: Attach all documentation in the tracking system and close change request. <br> <br>
<strong>Section 508 consideration</strong>: Include Section 508 conformance testing results, remediation plans, and all other relevant ICT accessibility documentation in the tracking system. Ensure that accessibility documentation is linked to the broader system compliance record such as System Security Plan, Accessibility Compliance repository, or POA\&M, to support audits and Office of Management and Budget (OMB) reporting.</li></ol>

## Related Resources:

* [Enterprise Architecture and Change Control Review Guidelines for Project Teams]({{site.baseurl}}/manage/governance/enterprise-architecture-and-change-control/)
* [Essential Elements of an Accessibility Test Report]({{site.baseurl}}/test/elements-of-an-accessibility-test-report/)  
* <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf" target="_blank" class="usa-link--external">NIST SP 800-53 Rev. 5</a>, SA-11 (Developer Testing and Evaluation), RA-5 (Vulnerability Monitoring), SI-2 (Flaw Remediation)
* <a href="https://bidenwhitehouse.archives.gov/omb/management/ofcio/m-24-08-strengthening-digital-accessibility-and-the-management-of-section-508-of-the-rehabilitation-act/" target="_blank" class="usa-link--external">OMB Memorandum M-24-08: Strengthening Digital Accessibility and the Management of Section 508 of the Rehabilitation Act</a> 
* [Overview of Testing Methods for 508 Conformance]({{site.baseurl}}/test/testing-overview/)  
* [Technology Accessibility Playbook \- Play 9: Integrate Accessibility Needs into Development Processes]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook-intro/play09/)  
* [Testing Lifecycle Overview]({{site.baseurl}}/test/testing-lifecycle-overview/)  

**Reviewed/Updated:** September 2025
