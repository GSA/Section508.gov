---
layout: page
sidenav: true
permalink: test/testing-lifecycle-overview/
type: test
title: "Testing Lifecycle Overview"
description: Learn about the testing lifecycle which involves planning, scoping, and executing tests, remediating issues and retesting for resolution and ongoing monitoring to sustain Section 508 conformance.
created: 2025-07-17
updated: 2025-07-17
contributors: 
topic: Testing (test)
sub-topic: "Design, Develop, Testing for Accessibility Training or Tools"
audience:
- 508 Program Manager (508pm)
- Developers and Testers (dev-test)
- Information Technology Program and Project Managers (itpm)
- Federal employee (fedemp)
- Chief Information Officer (cio)
resource-type: Long form article
format: HTML (html)
---

Section 508 conformance testing is essential to ensure information and communication technology (ICT) is usable and accessible for people with disabilities and conforms to federal <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a>. Without testing, Section 508 defects may go unnoticed—leading to conformance issues, poor user experience, and potential legal risk. The testing lifecycle begins with planning and scoping, followed by testing using a test methodology and tools to identify defects. Following the review, remediation is performed and validated through retesting to ensure all issues have been adequately resolved. Ongoing monitoring and maintenance helps sustain Section 508 conformance as ICT evolves. 

Testing should happen throughout the <a href="{{base.siteurl}}/develop/incorporating-accessibility-conformance/">design and development process</a>, not just before a product is released. For example, Section 508 testers or subject matter experts could provide feedback early on during design and prototyping. Development teams can also integrate accessibility testing into their regular build and deployment routines. In Agile or collaborative development environments, the roles of designer, developer, and tester are often shared across team members, or even performed by the same individual, making early and continuous accessibility testing an integral part of the development lifecycle. Regardless of how Section 508 is integrated, the testing process should always allow enough time to fix any issues before a product goes live. Below is a simple overview of the Section 508 testing lifecycle:

<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Plan and Scope Testing</h2>
<ul>
<li>Identify which ICT product(s) will be tested, such as a web page, web site, software, electronic document, or hardware.</li>   
<li>Determine applicable <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a>, <a href="{{base.siteurl}}/test/">testing methodologies</a>, and associated tools that will be used. Align with agency approved Section 508 conformance testing methodologies.</li>   
<li>Scope which user paths, functions, or other product features will be included in the testing. At minimum, the testing scope should include public-facing, frequently used, or critical functions.</li>  
<li>Select knowledgeable Section 508 testers—these may include federal employees, contractors, third-party accessibility testing experts, or users with disabilities.</li>
</ul>
</li>
<li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Gather Testing Materials and Access</h2>
<ul>
<li>Identify all product components required for testing such as web pages, electronic documents, software applications, and hardware.</li>
<li>Ensure installation of or access to all product components including test environments.</li> 
<li>Confirm testers have required login information, test data, or administrative credentials.</li> 
<li>Gather any additional information needed from designers or developers to understand how to use the content within the scope of testing.</li>
</ul>
</li> 
<li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Conduct Section 508 Testing</h2>
<ul>
<li>Using the methodologies identified in Step 1, test the product.</li>  
<li>Ensure comprehensive testing includes all applicable Section 508 Standards.</li>   
<li>Ensure each defect is captured in an <a href="{{base.siteurl}}/test/elements-of-an-accessibility-test-report/">Accessibility Test Report</a>.</li>
</ul>
</li>
<li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Review Test Report</h2>
<ul>
<li>Prioritize defects for remediation based on severity, risk, or impact on users.</li>   
<li>Assign who is responsible for remediation which may be a specific person, team, or vendor.</li>  
<li>Set and document deadlines in a Remediation Plan. High priority defects should be remediated as soon as possible, but deadlines for remediation should preferably not exceed 1 year.</li>   
<li>Use a mechanism to track defects, progress, expected remediation date, and actual remediation date.</li>
</ul>
</li>
<li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Remediate Defects</h2>
<ul>
<li>Work with designers, developers, and content creators to remediate issues.</li>   
<li>Continue to update the defect tracking mechanism to monitor remediation and outstanding defects.</li>
</ul>
</li>
<li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Retest for Verification of Remediation</h2>
<ul>
<li>Knowledgeable Section 508 testers should:</li>  
<ul>
      <li>Re-check fixes and confirm defects have been adequately addressed.</li>  
      <li>Ensure fixes did not introduce new issues.</li>  
      <li>Update the accessibility test report and tracking mechanisms with the new status for each Section 508 Standard, date of re-test, and any other product information that has changed.</li></ul>  
<li>Create an Accommodation or Alternate Means Plan for any defects that remain unresolved.</li>
</ul> 
<p>
Once all defects have been remediated, or remediated to the best of the team’s ability, there may be a need to develop an Accessibility Conformance Report (ACR) based on the test results. See the <a href="{{base.siteurl}}/sell/acr/">Accessibility Conformance Report (ACR) page</a> for more information on how to create a machine readable ACR and when you may need one.</p>
</li>
<li class="usa-process-list__item">
    <h2 class="usa-process-list__heading">Ongoing Monitoring and Maintenance</h2>
    <ul>
<li>Schedule periodic re-testing. At a minimum, Section 508 testing should be included in any updates or redesigns. Alternatively, <a href="{{base.siteurl}}/develop/incorporating-accessibility-conformance/">Section 508 testing may be integrated into development processes</a>.</li> 
<li>Embed Section 508 conformance into future work and ensure it is included in design, procurement, development, and content processes.</li>
</ul>
</li>
</ol>

**Reviewed/Updated:** July 2025