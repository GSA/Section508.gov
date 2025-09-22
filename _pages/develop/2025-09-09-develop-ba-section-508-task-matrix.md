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

<!-- Select Accordion / Table View -->
<ul class="usa-button-group usa-button-group--segmented">
  <li class="usa-button-group__item">
    <button type="button" class="usa-button" id="btn-view-accordion" aria-expanded="true" aria-controls="accordion-view">Accordion View</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--outline" id="btn-view-table" aria-expanded="false" aria-controls="table-view">Table  View</button>
  </li>
</ul>

<hr>
<!-- Accordion View -->
<div id="accordion-view">
  <div class="margin-bottom-3">
      <button id="expand-all" class="usa-button">Expand All</button>
      <button id="collapse-all" class="usa-button">Collapse All</button>
  </div>
  <div class="usa-accordion" data-allow-multiple>
    <!-- Stakeholder Needs -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="true" aria-controls="acc-stakeholder">
        Elicit Stakeholder Needs
      </button>
    </h3>
    <div id="acc-stakeholder" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Ensure accessibility requirements are comprehensive and align to Section 508 Standards. Engage users with disabilities early in discovery workshops, persona development, and interviews, not only during validation</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">User Needs and <a href="{{site.baseurl}}/develop/sample-personas/">Personas</a></p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">Include users with disabilities such as screen reader users and keyboard-only users</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">Plan, Gather requirements</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">Stakeholder interviews, accessibility personas</p>
        </div>
      </div>
    </div>
    <!-- Define or gather functional requirements (what the ICT should do) -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-functional-reqs">
        Define or gather functional requirements (what the ICT should do)
      </button>
    </h3>
    <div id="acc-functional-reqs" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Ensure accessibility is part of functional scope</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05"><a href="{{site.baseurl}}/develop/user-stories/">User Stories</a></p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">Include accessibility acceptance criteria per story</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">Gather requirements</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">Backlog grooming, peer review</p>
        </div>
      </div>
    </div>
    <!-- Refine UI behavior -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-refine-ui">
        Refine UI behavior
      </button>
    </h3>
    <div id="acc-refine-ui" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Ensure all UIs comply with Section 508 Standards</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">UI/UX Requirements, Wireframes, Prototypes, mockups</p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">UI is usable via keyboard only; screen reader reads labels; contrast ratio met</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">Design</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">Design review, accessibility annotations</p>
        </div>
      </div>
    </div>
    <!-- Draft user stories -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-draft-stories">
        Draft user stories
      </button>
    </h3>
    <div id="acc-draft-stories" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Create stories that include accessibility as a user goal</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05"><a href="{{site.baseurl}}/develop/user-stories/">User Story</a></p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">Clear tab order, visible focus, all interactive elements operable by keyboard</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">Gather requirements and Develop</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">Pair programming, code review guidance</p>
        </div>
      </div>
    </div>
    <!-- Define acceptance criteria -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-acceptance-criteria">
        Define acceptance criteria
      </button>
    </h3>
    <div id="acc-acceptance-criteria" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Define measurable accessibility outcomes</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Include in <a href="{{site.baseurl}}/develop/user-stories/">User Stories</a></p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">Must pass related Section 508 Standard</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">Develop and Test</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">Manual and automated testing</p>
        </div>
      </div>
    </div>
    <!-- Define and document non-functional requirements (how the ICT should behave) -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-nonfunctional-reqs">
        Define and document non-functional requirements (how the ICT should behave)
      </button>
    </h3>
    <div id="acc-nonfunctional-reqs" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Define measures to embed accessibility as a core attribute of the ICT. Explicitly include accessibility requirements in traceability artifacts to ensure test coverage.</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Use Case Document, Requirements Document or Requirements Traceability Matrix (RTM)</p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">System supports Assistive Technology</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">Plan and Test</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">Accessibility Conformance Report (ACR) review, RTM</p>
        </div>
      </div>
    </div>
    <!-- Write use cases or business rules -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-use-cases">
        Write use cases or business rules
      </button>
    </h3>
    <div id="acc-use-cases" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Integrate accessibility requirements into the functional requirements</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Use Case Document</p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">Include accessibility-related exceptions or rules</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">Design and Develop</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">Use case diagrams, scenario mapping</p>
        </div>
      </div>
    </div>
    <!-- Support backlog prioritization -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-backlog-prioritization">
        Support backlog prioritization
      </button>
    </h3>
    <div id="acc-backlog-prioritization" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Highlight accessibility-related dependencies and advocate for prioritization. (Note: Product Owners ultimately set backlog priorities.)</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Product Backlog</p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">Accessibility bugs or defects treated as functional defects; prioritized before release</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">All phases</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">Bug tracking system</p>
        </div>
      </div>
    </div>
    <!-- Stakeholder Review and Validation -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-stakeholder-validation">
        Stakeholder Review and Validation
      </button>
    </h3>
    <div id="acc-stakeholder-validation" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Ensure Section 508 subject matter experts and users with disabilities review requirements</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Stakeholder feedback such as: “Review by accessibility specialist and user representatives with AT experience.”</p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">Stakeholder feedback such as: “Feedback loop includes people with disabilities during the requirement validation process.”</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">Gather requirements, Develop, and Test</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">Stakeholder engagement scripts, feedback plan</p>
        </div>
      </div>
    </div>
    <!-- Facilitate User Acceptance Testing (UAT) planning -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-uat-planning">
        Facilitate User Acceptance Testing (UAT) planning
      </button>
    </h3>
    <div id="acc-uat-planning" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Include accessibility acceptance testing scenarios, including critical workflows</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">UAT Scripts and Scenarios</p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">Include AT user simulation such as screen reader, dictation, and magnification.</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">Test and Deploy</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">Test scripts, manual walkthrough</p>
        </div>
      </div>
    </div>
    <!-- Trace requirements to testing -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-traceability">
        Trace requirements to testing
      </button>
    </h3>
    <div id="acc-traceability" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Map <a href="{{site.baseurl}}/develop/user-stories/">user stories</a> to accessibility criteria</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Requirements traceability matrix (RTM)</p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">Each story mapped to Section 508 Standard and test case</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">Test</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">RTM table, testing traceability</p>
        </div>
      </div>
    </div>
    <!-- Manage Section 508-related documentation -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-docs">
        Manage Section 508-related documentation
      </button>
    </h3>
    <div id="acc-docs" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="margin-y-0">Accessibility Focus</h4>
          <p class="margin-top-05">Ensure all related documentation is complete, up to date and accessible.</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-6">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">ACR, Accessibility Statement, test plan and report, defect logs, version controls, alternative means plan</p>
        </div>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Acceptance Criteria</h4>
          <p class="margin-top-05">Statement reflects all tested and remediated issues</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Lifecycle Phase(s)</h4>
          <p class="margin-top-05">Deploy</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools and Activities</h4>
          <p class="margin-top-05">Template generation, documentation review</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Table View -->
<div id="table-view" hidden>
  <p>For a larger view of the table below, select the "Toggle Sidenav" button.</p>

  <button id="toggle-sidenav" class="usa-button margin-y-2" type="button" aria-expanded="true" aria-controls="sidenav">Toggle Sidenav</button>


  <div id="table-ba-roles-caption" class="table-caption padding-left-2">
      <strong>Table 1: Agile Roles Section 508 Task Matrix</strong>
  </div>

  <figure class = "usa-table-container--scrollable" role="region" aria-labelledby="table-ba-roles-caption" tabindex="0">
    <table id="table-ba-roles" class="usa-table usa-table--borderless striped grid-col-12 margin-bottom-3 big-table">
      <colgroup>
        <col class="col-batask">
        <col class="col-focus">
        <col class="col-artifact">
        <col class="col-criteria">
        <col class="col-lifecycle">
        <col class="col-tools">
      </colgroup>
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
          <td>User Needs and <a href="{{site.baseurl}}/develop/sample-personas/">Personas</a></td>
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
  </figure>
</div>

**Reviewed/Updated:** September 2025

<!-- Select Accordion / Table Views -->
<script>
  $("#btn-view-accordion").on("click", function(){
    if ($(this).attr("aria-expanded") === "true") {}
    else {
      $(this).attr("aria-expanded", "true");
      $("#btn-view-table").attr("aria-expanded", "false");
      $(this).toggleClass("usa-button--outline");
      $("#btn-view-table").toggleClass("usa-button--outline");
      $("#table-view").attr("hidden","");
      $("#accordion-view").removeAttr("hidden");
    }
  });
  $("#btn-view-table").on("click", function(){
    if ($(this).attr("aria-expanded") === "true") {}
    else {
      $(this).attr("aria-expanded", "true");
      $("#btn-view-accordion").attr("aria-expanded", "false");
      $(this).toggleClass("usa-button--outline");
      $("#btn-view-accordion").toggleClass("usa-button--outline");
      $("#accordion-view").attr("hidden","");
      $("#table-view").removeAttr("hidden");
    }
  });
</script>

<!-- Expand / Collapse Accordions -->
<script>
    $("#expand-all").on("click", function (){
        $(".roles_button").attr("aria-expanded", "true");
        $(".roles_content").removeAttr("hidden");
    });
    $("#collapse-all").on("click", function (){
        $(".roles_button").attr("aria-expanded", "false");
        $(".roles_content").attr("hidden","");
    });
</script>

<!-- Show/Hide Sidenav -->
<script>
  $("#toggle-sidenav").on("click", function(){
    const isExpanded = $(this).attr("aria-expanded") === "true";
    const next = !isExpanded;
    $(this).attr("aria-expanded", next.toString());
    $("aside.usa-layout-docs__sidenav").toggleClass("display-none");
    $("main").toggleClass("desktop:grid-col-9");
    $("main").toggleClass("desktop:grid-col-12");
  });
</script>