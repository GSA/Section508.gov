---
layout: page
sidenav: true
permalink: test/testing-lifecycle-overview/
type: test
title: "Testing Lifecycle Overview"
description: Learn about the testing lifecycle which involves planning, scoping, and executing tests, remediating issues and retesting for resolution and ongoing monitoring to sustain Section 508 conformance.
created: 2025-07-17
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

Testing should happen throughout the [design and development process]({{base.siteurl}}/develop/incorporating-accessibility-conformance/), not just before a product is released. For example, Section 508 testers or subject matter experts could provide feedback early on during design and prototyping. Development teams can also integrate accessibility testing into their regular build and deployment routines. In Agile or collaborative development environments, the roles of designer, developer, and tester are often shared across team members, or even performed by the same individual, making early and continuous accessibility testing an integral part of the development lifecycle. Regardless of how Section 508 is integrated, the testing process should always allow enough time to fix any issues before a product goes live. Below is a simple overview of the Section 508 testing lifecycle:

<h2 class="usa-icon">
      <div class="usa-icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#schedule"></use></svg></div>
      <div class="usa-icon">Plan and Scope Testing</div></h2>

* Identify which ICT product(s) will be tested, such as a web page, web site, software, electronic document, or hardware.   
* Determine applicable <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a>, [testing methodologies]({{base.siteurl}}/test/), and associated tools that will be used. Align with agency approved Section 508 conformance testing methodologies.   
* Scope which user paths, functions, or other product features will be included in the testing. At minimum, the testing scope should include public-facing, frequently used, or critical functions.  
* Select knowledgeable Section 508 testers—these may include federal employees, contractors, third-party accessibility testing experts, or users with disabilities. 

<h2 class="usa-icon">
      <div class="usa-icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#shopping_basket"></use></svg></div>
      <div class="usa-icon">Gather Testing Materials and Access</div></h2>

* Identify all product components required for testing such as web pages, electronic documents, software applications, and hardware.

* Ensure installation of or access to all product components including test environments. 

* Confirm testers have required login information, test data, or administrative credentials. 

* Gather any additional information needed from designers or developers to understand how to use the content within the scope of testing. 

<h2 class="usa-icon">
      <div class="usa-icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use></svg></div>
      <div class="usa-icon">Conduct Section 508 Testing</div></h2>

* Using the methodologies identified in Step 1, test the product.  
* Ensure comprehensive testing includes all applicable Section 508 Standards.   
* Ensure each defect is captured in an [Accessibility Test Report]({{base.siteurl}}/test/elements-of-an-accessibility-test-report). 

<h2 class="usa-icon">
      <div class="usa-icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#bug_report"></use></svg></div>
      <div class="usa-icon">Review Test Report</div></h2>


* Prioritize defects for remediation based on severity, risk, or impact on users.   
* Assign who is responsible for remediation which may be a specific person, team, or vendor.  
* Set and document deadlines in a Remediation Plan. High priority defects should be remediated as soon as possible, but deadlines for remediation should preferably not exceed 1 year.   
* Use a mechanism to track defects, progress, expected remediation date, and actual remediation date.

<h2 class="usa-icon">
      <div class="usa-icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#help_outline"></use></svg></div>
      <div class="usa-icon">Remediate Defects</div></h2>

* Work with designers, developers, and content creators to remediate issues.   
* Continue to update the defect tracking mechanism to monitor remediation and outstanding defects.

<h2 class="usa-icon">
      <div class="usa-icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#verified"></use></svg></div>
      <div class="usa-icon">Retest for Verification of Remediation</div></h2>

* Knowledgeable Section 508 testers should:  
  * Re-check fixes and confirm defects have been adequately addressed.  
  * Ensure fixes did not introduce new issues.  
  * Update the accessibility test report and tracking mechanisms with the new status for each Section 508 Standard, date of re-test, and any other product information that has changed.  
* Create an Accommodation or Alternate Means Plan for any defects that remain unresolved. 

Once all defects have been remediated, or remediated to the best of the team’s ability, there may be a need to develop an Accessibility Conformance Report (ACR) based on the test results. See the [Accessibility Conformance Report (ACR) page]({{base.siteurl}}/sell/acr/) for more information on how to create a machine readable ACR and when you may need one.

<h2 class="usa-icon">
      <div class="usa-icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#loop"></use></svg></div>
      <div class="usa-icon">Ongoing Monitoring and Maintenance</div></h2>

* Schedule periodic re-testing. At a minimum, Section 508 testing should be included in any updates or redesigns. Alternatively, [Section 508 testing may be integrated into development processes.]({{base.siteurl}}/develop/incorporating-accessibility-conformance/)  
* Embed Section 508 conformance into future work and ensure it is included in design, procurement, development, and content processes.

**Reviewed/Updated:** July 2025