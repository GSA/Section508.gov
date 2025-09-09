---
layout: page
sidenav: true
type: develop
title: Business Analyst Section 508 Task Matrix
permalink: develop/ba-section-508-task-matrix/
description: This task list links Business Analyst responsibilities with Section 508 requirements, relevant tools, and Software Development Lifecycle (SDLC) activities.
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
created: 2025-09-09
updated: 2025-09-09
exclude-changelog: 
---
Embedding Section 508 conformance consistently throughout the product lifecycle requires a clear and standardized task list for [Business Analysts (BAs)]({{site.baseurl}}/manage/roles/). This task list links BA responsibilities with Section 508 requirements, relevant tools, and Software Development Lifecycle (SDLC) activities. By providing this clarity and structure, BAs can better understand how their efforts contribute to information and communication technology (ICT) accessibility compliance and enhance the user experience. By aligning and cross-referencing tasks with specific phases and tools, it promotes effective collaboration across roles, ensuring Section 508 conformance is integrated into every project step, resulting in more compliant ICT products.

<table id="table-agile-roles" class="usa-table usa-table--borderless striped grid-col-12 margin-bottom-3">
  <caption>Table 1: BA Section 508 Task Matrix</caption>
  <thead>
  <tr>
      <th scope="col">Business Analyst Task</th>
      <th scope="col">Accessibility Focus</th>
      <th scope="col">Artifact</th>
      <th scope="col">Acceptance Criteria</th>
      <th scope="col">Lifecycle Phase(s)</th>
      <th scope="col">Tools and Activities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Elicit stakeholder needs</th>
      <td>Ensure accessibility requirements are comprehensive and align to Section 508 Standards. Engage users with disabilities early in discovery workshops, persona development, and interviews, not only during validation.</td>
      <td>User Needs and <a href="{{site.baseurl}}/develop/personas">Personas</a></td>
      <td>Include users with disabilities such as screen reader users and keyboard-only users</td>
      <td>Plan, Gather requirements</td>
      <td>Stakeholder interviews, accessibility personas</td>
    </tr>
    <tr>
      <th scope="row">Define or gather functional requirements (what the ICT should do)</th>
      <td>Ensure accessibility is part of functional scope</td>
      <td><a href="{{site.baseurl}}/develop/user-stories/">User Stories</a></td>
      <td>Include accessibility acceptance criteria per story</td>
      <td>Gather requirements</td>
      <td>Backlog grooming, peer review</td>
    </tr>
    <tr>
      <th scope="row">Refine UI behavior</th>
      <td>Ensure all UIs comply with Section 508 Standards</td>
      <td>UI/UX Requirements, Wireframes, Prototypes, mockups</td>
      <td>UI is usable via keyboard only; screen reader reads labels; contrast ratio met</td>
      <td>Design</td>
      <td>Design review, accessibility annotations</td>
    </tr>
    <tr>
      <th scope="row">Draft user stories</th>
      <td>Create stories that include accessibility as a user goal</td>
      <td><a href="{{site.baseurl}}/develop/user-stories/">User Story</a></td>
      <td>Clear tab order, visible focus, all interactive elements operable by keyboard</td>
      <td>Gather requirements and Develop</td>
      <td>Pair programming, code review guidance</td>
    </tr>
    <tr>
      <th scope="row">Define acceptance criteria</th>
      <td>Define measurable accessibility outcomes</td>
      <td>Include in <a href="{{site.baseurl}}/develop/user-stories/">User Stories</a></td>
      <td>Must pass related Section 508 Standard</td>
      <td>Develop and Test</td>
      <td>Manual and automated testing</td>
    </tr>
    <tr>
      <th scope="row">Define and document non-functional requirements (how the ICT should behave)</th>
      <td>Define measures to embed accessibility as a core attribute of the ICT. Explicitly include accessibility requirements in traceability artifacts to ensure test coverage.</td>
      <td>Use Case Document, Requirements Document or Requirements Traceability Matrix (RTM)</td>
      <td>System supports Assistive Technology</td>
      <td>Plan and Test</td>
      <td>Accessibility Conformance Report (ACR) review, RTM</td>
    </tr>
    <tr>
      <th scope="row">Write use cases or business rules</th>
      <td>Integrate accessibility requirements into the functional requirements</td>
      <td>Use Case Document</td>
      <td>Include accessibility-related exceptions or rules</td>
      <td>Design and Develop</td>
      <td>Use case diagrams, scenario mapping</td>
    </tr>
    <tr>
      <th scope="row">Support backlog prioritization</th>
      <td>Highlight accessibility-related dependencies and advocate for prioritization. (Note: Product Owners ultimately set backlog priorities.)</td>
      <td>Product Backlog</td>
      <td>Accessibility bugs or defects treated as functional defects; prioritized before release</td>
      <td>All phases</td>
      <td>Bug tracking system</td>
    </tr>
    <tr>
      <th scope="row">Stakeholder Review and Validation</th>
      <td>Ensure Section 508 subject matter experts and users with disabilities review requirements</td>
      <td>Stakeholder feedback such as: “Review by accessibility specialist and user representatives with AT experience.”</td>
      <td>Stakeholder feedback such as: “Feedback loop includes people with disabilities during the requirement validation process.”</td>
      <td>Gather requirements, Develop, and Test</td>
      <td>Stakeholder engagement scripts, feedback plan</td>
    </tr>
    <tr>
      <th scope="row">Facilitate User Acceptance Testing (UAT) planning</th>
      <td>Include accessibility acceptance testing scenarios, including critical workflows</td>
      <td>UAT Scripts and Scenarios</td>
      <td>Include AT user simulation such as screen reader, dictation, and magnification.</td>
      <td>Test and Deploy</td>
      <td>Test scripts, manual walkthrough</td>
    </tr>
    <tr>
      <th scope="row">Trace requirements to testing</th>
      <td>Map <a href="{{site.baseurl}}/develop/user-stories/">user stories</a> to accessibility criteria</td>
      <td>Requirements traceability matrix (RTM)</td>
      <td>Each story mapped to Section 508 Standard and test case</td>
      <td>Test</td>
      <td>RTM table, testing traceability</td>
    </tr>
    <tr>
      <th scope="row">Manage Section 508-related documentation</th>
      <td>Ensure all related documentation is complete, up to date and accessible.</td>
      <td>ACR, Accessibility Statement, test plan and report, defect logs, version controls, alternative means plan</td>
      <td>Statement reflects all tested and remediated issues</td>
      <td>Deploy</td>
      <td>Template generation, documentation review</td>
    </tr>
  </tbody>
</table>

**Reviewed/Updated:** September 2025