---
layout: page
sidenav: true
permalink: test/ict-testing-activities-by-lifecycle-phase/
type: test
title: Incorporating ICT Accessibility Testing into the Development Process
description: Learn how to ensure ICT accessibility testing activities are included throughout the development lifecycle with testing strategies mapped to each type of test plan.
created: 2026-01-26
contributors: 
audience: 
- 508-pm
- designer
- fed-emp
- it-prog-proj-mgr
- mgr-exec
- requirement-ba
- web-content-mgr
topic: 
- design
- dev
- test
subtopic: 
- Accessibility Standards, Procedures, Guidance, Best Practices
- Design, Develop, Testing for Accessibility Training or Tools
- Manage Accessibility for IT Program/Project Managers
- Various Electronic Content (i.e. Multiple)
resource_type: 
- article
format: html
created: 2026-01-26
updated: 2026-01-26
exclude-changelog: 
---
Incorporating information and communication technology (ICT) accessibility at every stage of development — from requirements gathering to release and ongoing maintenance — helps avoid costly retrofits and compliance defects. The table below aligns key development lifecycle phases to their corresponding test plans and accessibility testing activities. 

Using this systematic approach ensures that accessibility is built into the product from the ground up and consistently validated through appropriate testing strategies.

<table id="table-ict" class="usa-table usa-table--borderless usa-table--striped striped margin-bottom-8">
  <thead>
    <tr>
      <th scope="col">Lifecycle Phase</th>
      <th scope="col">Typical Test Plans</th>
      <th scope="col">ICT Accessibility Testing Activities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1. Plan</th>
      <td>Master Test Plan</td>
      <td>
        <ul>
          <li>Include Section 508 standards and ICT accessibility testing in the master test plan.</li>
          <li>Plan for testing with assistive technology.</li>
          <li>Plan for testing in different environments, if applicable.</li>
          <li>Establish a test-driven development (TDD) strategy that specifies which ICT accessibility checks must be automated tests or unit tests before feature implementation.</li>
          <li>Define a baseline set of accessibility assertions, such as semantic HTML, structure, or ARIA usage, that developers must test against.</li>
        </ul>
      </td>
    </tr>
    <tr>
        <th scope="row">2. Gather requirement</th>
        <td>System Test Plan</td>
        <td>
        <ul>
          <li>Include ICT accessibility in acceptance criteria and definition of done (DoD).</li>
          <li>Identify high-risk areas or critical user paths early to prioritize testing efforts.</li>
          <li>Add accessibility-focused acceptance criteria written explicitly as testable conditions.</li>
        </ul>
      </td>
    </tr>
    <tr>
        <th scope="row">3. Design</th>
        <td>
        <ul>
            <li>Agile or Sprint Test Plan</li>
            <li>Non-Functional Test Plan</li>
        </ul>
        </td>
        <td>
        <ul>
          <li>Require accessibility criteria in design reviews to translate directly into test scripts or test case templates used during development.</li>
          <li>Evaluate design mockups and <a href="{{site.baseurl}}/test/conformance-of-prototypes-and-pilots/">prototypes</a> for color contrast and color usage; consider other Section 508 standards as applicable.</li>
          <li>Use <a href="{{site.baseurl}}/tools/tools-for-testing-ict/">contrast testing tools</a> to validate Section 508 conformance.</li>
        </ul>
        </td>
    </tr>
    <tr>
        <th scope="row">4. Design</th>
        <td>
            <ul>
                <li>Integration Test Plan</li>
                <li> Unit Test Plan</li>
            </ul>
        </td>
        <td>
         <ul>
          <li><a href="{{site.baseurl}}/develop/incorporating-accessibility-conformance/">Integrate accessibility testing into the development environment</a>.</li>
          <li><a href="{{site.baseurl}}/test/testing-overview/">Test for Section 508 conformance using manual and automated tools</a>.</li>
          <li>Incorporate component-level accessibility tests in the Continuous Integration pipeline.</li>
          <li>Conduct a smoke test early in the process to identify ICT accessibility defects. This should cover critical user paths, such as the login process.</li>
          <li>Write unit tests to check for accessible code including HTML and ARIA.</li>
          <li>Use accessibility linters.</li>
          <li>Make accessibility checks a blocking condition for merging code.</li>
          <li>Add incremental accessibility test thresholds to prevent regressions such as no increase in critical violations.</li>
        </ul>
      </td>
    </tr>
    <tr>
        <th scope="row">5. Testing</th>
        <td>
            <ul>
            <li>Agile or Sprint Test Plan</li>
            <li>Non-Functional Test Plan</li>
            <li>Regression Test Plan</li>
            <li>System Test Plan</li>
            <li>UAT Test Plan</li>
            </ul>
        </td>
        <td>
        <ul>
          <li><a href="{{site.baseurl}}/test/testing-overview/#Automated">Run automated Section 508 testing</a>.</li>
          <li>Use automated tests generated as part of a TDD strategy to validate that every user story meets its predefined accessibility tests.</li>
          <li><a href="{{site.baseurl}}/test/testing-overview/#Manual">Complete manual Section 508 testing</a>.</li>
          <li>Test full user flows with assistive technology.</li>
          <li>Include testers with disabilities and assistive technology tools.</li>
          <li><a href="{{site.baseurl}}/test/usability-testing-with-people-with-disabilities/">Validate functionality and user cases with end users with disabilities</a>.</li>
          <li>Prioritize critical defects for remediation.</li>
        </ul>
      </td>
    </tr>
    <tr>
        <th scope="row">6. Deploy</th>
        <td>Release Test Plan</td>
        <td>
        <ul>
          <li>Complete comprehensive Section 508 conformance testing using automated and manual testing and block releases if critical test failures occur.</li>
          <li>Complete an accessibility test report and other deliverables as required per plan</li>
          <li>Prioritize critical ICT accessibility defects for resolution before deployment.</li>
        </ul>
      </td>
    </tr>
    <tr>
    <th scope="row">7. Operate and Maintain</th>
    <td>
     <ul>
        <li>Agile or Sprint Test Plan</li>
        <li>Regression Test Plan</li>
    </ul>
    </td>
    <td>
        <ul>
          <li>Retest for ICT accessibility with each feature or update.</li>
          <li>Continuously update the accessibility test suite as patterns evolve.</li>
          <li><a href="{{site.baseurl}}/develop/incorporating-accessibility-conformance/">Ensure ongoing Section 508 compliance as part of CI/CD</a>.</li>
          <li>Use dashboards and defect tracking to monitor Section 508 conformance and ICT accessibility.</li>
        </ul>
      </td>
    </tr>
</tbody>
</table>

## Related Resources:

* [ICT Product Lifecycle Overview]({{site.baseurl}}/develop/product-lifecycle-overview/)  
* [Testing Lifecycle Overview]({{site.baseurl}}/test/testing-lifecycle-overview/)  
* [Testing Methods Overview]({{site.baseurl}}/test/testing-overview/)

**Reviewed/Updated:** January 2026