---
layout: page
sidenav: true
type: develop
title: Agile Roles Section 508 Task Matrix
permalink: develop/agile-roles-section-508-task-matrix/
description: This Agile Section 508 Task Matrix provides a practical framework that maps key Agile activities to Product or Project Owner, Scrum Master or Agile Coach, and Agile or Development Team tasks.
disclaimer: true
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
Incorporating Section 508 conformance into Agile product lifecycle requires clear coordination among many roles to ensure compliance with Section 508. This Agile Section 508 Task Matrix provides a practical framework that maps key Agile activities to Product or Project Owner, Scrum Master or Agile Coach, and Agile or Development Team tasks. This visibility promotes accountability, fosters collaboration, and ensures Section 508 conformance is consistently prioritized throughout the development process—not as an afterthought.

<caption id="table-agile-roles-caption"><strong>Table 1: Agile Roles Section 508 Task Matrix</strong></caption>For a larger table view, select <a href="{{site.baseurl}}/develop/agile-roles-section-508-task-matrix-no-sidenav/">Agile Roles Section 508 Task Matrix Full Page</a>. 
<figure class = "usa-table-container--scrollable" role="region" aria-labelledby="table-agile-roles-caption" tabindex="0">
  <table id="table-agile-roles" class="usa-table usa-table--borderless striped margin-bottom-3">
  <colgroup>
    <col class="col-activity">
    <col class="col-owner">
    <col class="col-coach">
    <col class="col-team">
    <col class="col-artifact">
    <col class="col-integration">
    <col class="col-tools">
  </colgroup>
  <thead>
  <tr>
      <th scope="col">Agile Activity</th>
      <th scope="col">Agile Product or Project Owner Task</th>
      <th scope="col">Scrum Master or Agile Coach Task</th>
      <th scope="col">Agile or Development Team Task</th>
      <th scope="col">Related Artifact</th>
      <th scope="col">Accessibility Integration</th>
      <th scope="col">Tool or Methods</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Backlog Grooming</th>
      <td>Prioritize accessibility stories</td>
      <td>Facilitate discussion to ensure accessibility items are visible</td>
      <td>Ensure visibility into accessibility tasks</td>
      <td>Epics, <a href="{{site.baseurl}}/develop/sample-personas/">User Personas</a></td>
      <td>Add personas with disabilities</td>
      <td>Story maps, <a href="{{site.baseurl}}/develop/sample-personas/">Persona templates</a></td>
    </tr>
    <tr>
      <th scope="row">User Story Writing</th>
      <td>Include accessibility acceptance criteria; represent stakeholder needs</td>
      <td>Encourage teams to include accessibility acceptance criteria in story templates and coach on writing user stories</td>
      <td>Write <a href="{{site.baseurl}}/develop/user-stories/">user stories</a></td>
      <td>User Stories in project management tool, Story Definition of Done (DoD)</td>
      <td>Add user stories that include people with disabilities with acceptance criteria</td>
      <td>Project management tool templates, accessibility checklists, manual and automated testing tools</td>
    </tr>
    <tr>
      <th scope="row">Sprint Planning</th>
      <td>Advocate for accessibility tasks in sprint scope</td>
      <td>Ensure accessibility user stories and bugs are visible in planning, and coach the team on estimating accessibility tasks realistically</td>
      <td>Prioritize and scope accessibility work</td>
      <td>Sprint backlog</td>
      <td>Call out accessibility bugs as blockers; ensure accessibility tasks are not de-scoped</td>
      <td>Agile board filters such as label: accessibility</td>
    </tr>
    <tr>
      <th scope="row">Development</th>
      <td>Monitor progress and accessibility compliance</td>
      <td>Facilitate removal of accessibility-related blockers raised by the team</td>
      <td>Clarify requirements as needed</td>
      <td>User stories, epics, sprint backlog, traceability matrix</td>
      <td>Embeds accessibility during development</td>
      <td>Project management tool</td>
    </tr>
    <tr>
      <th scope="row">Testing</th>
      <td>Accept or reject based on accessibility compliance</td>
      <td>Promote integration of accessibility checks in both manual unit testing, automated regression and continuous integration and continuous development (CI/CD) pipelines, and User Acceptance Testing (UAT)</td>
      <td>Verify requirements coverage</td>
      <td>Test cases or test scenarios, test plan, bug or defect reports, traceability matrix, UAT feedback, test report</td>
      <td>Specifies checks for accessibility, defines scope, and identifies any bugs</td>
      <td>Project management tool, test report tool</td>
    </tr>
    <tr>
      <th scope="row">Daily Standup</th>
      <td>Identify in-progress accessibility work</td>
      <td>Prompt visibility of accessibility work and support team in raising accessibility blockers</td>
      <td>Track progress of accessibility work</td>
      <td>Sprint board</td>
      <td>Developers and testers report blockers on accessibility criteria</td>
      <td>Shared QA environment for accessibility</td>
    </tr>
    <tr>
      <th scope="row">Sprint Review</th>
      <td>Validate accessibility features meet acceptance criteria</td>
      <td>Ensure accessibility demonstrations, such as keyboard navigation and screen reader use, are included in review demos</td>
      <td>Present accessibility compliance results</td>
      <td>Demo scripts or Acceptance logs</td>
      <td>Show full keyboard navigation, screen reader flow for completed stories</td>
      <td>Test report, screen share</td>
    </tr>
    <tr>
      <th scope="row">Sprint Retrospective</th>
      <td>Encourage process improvements for accessibility</td>
      <td>Prompt specific reflection on accessibility practices: Were accessibility stories completed? Were defects found late?</td>
      <td>Reflect on accessibility effort</td>
      <td>Retro board or Notes</td>
      <td>Ask: Were accessibility stories completed? Were bugs logged, or missed until QA?</td>
      <td>Team health check, accessibility retro prompt</td>
    </tr>
    <tr>
      <th scope="row">Definition of Done (DoD)</th>
      <td>Approve DoD and validate compliance before acceptance</td>
      <td>Facilitate the team in adopting accessibility criteria into the DoD and ensure consistent enforcement</td>
      <td>Define accessibility compliance in DoD</td>
      <td>Team DoD or Working Agreement</td>
      <td>Must pass all application Section 508 standards</td>
      <td>Add DoD checklist to ticket template</td>
    </tr>
    <tr>
      <th scope="row">Test Case Creation</th>
      <td>Inform team of acceptance criteria for accessibility requirements</td>
      <td>Facilitate collaboration between Product Owner and Agile Team to ensure accessibility acceptance criteria are fully translated into test scenarios</td>
      <td>Translate requirements into testing scenarios</td>
      <td>Test cases</td>
      <td>Write “Given/When/Then” with accessibility: “Given I tab to the form, I can submit without mouse”</td>
      <td>Cucumber, TestRail, Zephyr</td>
    </tr>
    <tr>
      <th scope="row">Bug Tracking</th>
      <td>Prioritize crucial bugs or defects for remediation</td>
      <td>Ensure accessibility-related bugs are logged with clear reproduction steps and impact descriptions, so they’re not deprioritized as “minor” issues</td>
      <td>Log accessibility bugs</td>
      <td>Bug tickets</td>
      <td>Log Section 508 violation, screen reader behavior, keyboard trap, etc.</td>
      <td>Project management tool, DevOps with Section 508 tags</td>
    </tr>
    <tr>
      <th scope="row">Release Readiness or UAT</th>
      <td>Lead UAT decisions</td>
      <td>Facilitate inclusion of accessibility-specific scenarios in UAT checklists and walkthroughs</td>
      <td>Clarify requirements and confirm acceptance criteria during UAT</td>
      <td>UAT checklist</td>
      <td>UAT includes keyboard-only navigation, screen reader review, contrast check</td>
      <td>UAT scripts, Accessibility Conformance Report (ACR), text report, test logs</td>
    </tr>
    <tr>
      <th scope="row">Post-Release</th>
      <td>Oversee ongoing compliance and prioritize fixes and enhancements post-release</td>
      <td>Facilitate review of user feedback channels for accessibility issues and ensure learnings are fed back into backlog refinement</td>
      <td>Monitor accessibility issues and coordinate updates and documentation for defects</td>
      <td>Backlog or Roadmap</td>
      <td>Accessibility issues logged by users prioritized in backlog</td>
      <td>User feedback loops, accessibility statement update</td>
    </tr>
  </tbody>
</table>
</figure>

**Reviewed/Updated:** September 2025
