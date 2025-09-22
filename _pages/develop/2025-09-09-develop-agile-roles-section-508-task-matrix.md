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

<!-- Select Accordion / Table View -->
<ul class="usa-button-group usa-button-group--segmented">
  <li class="usa-button-group__item">
    <button type="button" class="usa-button" id="btn-view-accordion" aria-expanded="true" aria-controls="accordion-view">Accrodion View</button>
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
    <!-- Backlog Grooming -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="true" aria-controls="acc-backlog">
        Backlog Grooming
      </button>
    </h3>
    <div id="acc-backlog" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Prioritize accessibility stories.</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Facilitate discussion to ensure accessibility items are visible.</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Ensure visibility into accessibility tasks.</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Epics, <a href="{{site.baseurl}}/develop/sample-personas/">User Personas</a></p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Add personas with disabilities</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">Story maps, Persona templates</p>
        </div>
      </div>
    </div>
    <!-- User Story Writing -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-user-story">
        User Story Writing
      </button>
    </h3>
    <div id="acc-user-story" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Include accessibility acceptance criteria; represent stakeholder needs</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Encourage teams to include accessibility acceptance criteria in story templates and coach on writing user stories</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Write <a href="{{site.baseurl}}develop/user-stories/">user stories</a></p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">User Stories in project management tool, Story Definition of Done (DoD)</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Add user stories that include people with disabilities with acceptance criteria</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / Methods</h4>
          <p class="margin-top-05">Story maps, Persona templates</p>
        </div>
      </div>
    </div>
    <!-- Sprint Planning -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-sprint-planning">
        Sprint Planning
      </button>
    </h3>
    <div id="acc-sprint-planning" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Advocate for accessibility tasks in sprint scope</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Ensure accessibility user stories and bugs are visible in planning, and coach the team on estimating accessibility tasks realistically</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Prioritize and scope accessibility work</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Sprint backlog</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Call out accessibility bugs as blockers; ensure accessibility tasks are not de-scoped</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">Agile board filters such as label: accessibility</p>
        </div>
      </div>
    </div>
    <!-- Development -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-development">
        Development
      </button>
    </h3>
    <div id="acc-development" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Monitor progress and accessibility compliance</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Facilitate removal of accessibility-related blockers raised by the team</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Clarify requirements as needed</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">User stories, epics, sprint backlog, traceability matrix</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Embeds accessibility during development</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">Project management tool</p>
        </div>
      </div>
    </div>
    <!-- Testing -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-testing">
        Testing
      </button>
    </h3>
    <div id="acc-testing" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Accept or reject based on accessibility compliance</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Promote integration of accessibility checks in both manual unit testing, automated regression and continuous integration and continuous development (CI/CD) pipelines, and User Acceptance Testing (UAT)</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Verify requirements coverage</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Test cases or test scenarios, test plan, bug or defect reports, traceability matrix, UAT feedback, test report</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Specifies checks for accessibility, defines scope, and identifies any bugs</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">Project management tool, test report tool</p>
        </div>
      </div>
    </div>
    <!-- Daily Standup -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-daily-standup">
        Daily Standup
      </button>
    </h3>
    <div id="acc-daily-standup" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Identify in-progress accessibility work</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Prompt visibility of accessibility work and support team in raising accessibility blockers</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Track progress of accessibility work</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Sprint board</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Developers and testers report blockers on accessibility criteria</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">Shared QA environment for accessibility</p>
        </div>
      </div>
    </div>
    <!-- Sprint Review -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-sprint-review">
        Sprint Review
      </button>
    </h3>
    <div id="acc-sprint-review" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Validate accessibility features meet acceptance criteria</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Ensure accessibility demonstrations, such as keyboard navigation and screen reader use, are included in review demos</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Present accessibility compliance results</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Demo scripts or Acceptance logs</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Show full keyboard navigation, screen reader flow for completed stories</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">Test report, screen share</p>
        </div>
      </div>
    </div>
    <!-- Sprint Retrospective -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-sprint-retro">
        Sprint Retrospective
      </button>
    </h3>
    <div id="acc-sprint-retro" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Encourage process improvements for accessibility</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Prompt specific reflection on accessibility practices: Were accessibility stories completed? Were defects found late?</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Reflect on accessibility effort</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Retro board or Notes</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Ask: Were accessibility stories completed? Were bugs logged, or missed until QA?</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">Team health check, accessibility retro prompt</p>
        </div>
      </div>
    </div>
    <!-- Definition of Done (DoD) -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-dod">
        Definition of Done (DoD)
      </button>
    </h3>
    <div id="acc-dod" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Approve DoD and validate compliance before acceptance</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Facilitate the team in adopting accessibility criteria into the DoD and ensure consistent enforcement</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Define accessibility compliance in DoD</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Team DoD or Working Agreement</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Must pass all application Section 508 standards</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">Add DoD checklist to ticket template</p>
        </div>
      </div>
    </div>
    <!-- Test Case Creation -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-test-cases">
        Test Case Creation
      </button>
    </h3>
    <div id="acc-test-cases" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Inform team of acceptance criteria for accessibility requirements</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Facilitate collaboration between Product Owner and Agile Team to ensure accessibility acceptance criteria are fully translated into test scenarios</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Translate requirements into testing scenarios</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Test cases</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Write “Given/When/Then” with accessibility: “Given I tab to the form, I can submit without mouse”</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">Cucumber, TestRail, Zephyr</p>
        </div>
      </div>
    </div>
    <!-- Bug Tracking -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-bug-tracking">
        Bug Tracking
      </button>
    </h3>
    <div id="acc-bug-tracking" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Prioritize crucial bugs or defects for remediation</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Ensure accessibility-related bugs are logged with clear reproduction steps and impact descriptions, so they’re not deprioritized as “minor” issues</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Log accessibility bugs</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Bug tickets</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Log Section 508 violation, screen reader behavior, keyboard trap, etc.</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">Project management tool, DevOps with Section 508 tags</p>
        </div>
      </div>
    </div>
    <!-- Release Readiness or UAT -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-uat">
        Release Readiness or UAT
      </button>
    </h3>
    <div id="acc-uat" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Lead UAT decisions</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Facilitate inclusion of accessibility-specific scenarios in UAT checklists and walkthroughs</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Clarify requirements and confirm acceptance criteria during UAT</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">UAT checklist</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">UAT includes keyboard-only navigation, screen reader review, contrast check</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">UAT scripts, Accessibility Conformance Report (ACR), text report, test logs</p>
        </div>
      </div>
    </div>
    <!-- Post-Release -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button roles_button" aria-expanded="false" aria-controls="acc-post-release">
        Post-Release
      </button>
    </h3>
    <div id="acc-post-release" class="usa-accordion__content roles_content">
      <div class="grid-row grid-gap">
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile Product / Project Owner Task</h4>
          <p class="margin-top-05">Oversee ongoing compliance and prioritize fixes and enhancements post-release</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Scrum Master / Agile Coach Task</h4>
          <p class="margin-top-05">Facilitate review of user feedback channels for accessibility issues and ensure learnings are fed back into backlog refinement</p>
        </section>
        <section class="grid-col-12 tablet:grid-col-4">
          <h4 class="margin-y-0">Agile / Development Team Task</h4>
          <p class="margin-top-05">Monitor accessibility issues and coordinate updates and documentation for defects</p>
        </section>
      </div>
      <hr class="margin-y-1">
      <div class="grid-row grid-gap">
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Related artifacts</h4>
          <p class="margin-top-05">Backlog or Roadmap</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Accessibility Integration</h4>
          <p class="margin-top-05">Accessibility issues logged by users prioritized in backlog</p>
        </div>
        <div class="grid-col-12 tablet:grid-col-4">
          <h4 class="text-bold margin-0">Tools / methods</h4>
          <p class="margin-top-05">User feedback loops, accessibility statement update</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Table View -->
<div id="table-view" hidden>
  <p>For a larger view of the table below, select the "Toggle Sidenav" button.</p>

  <button id="toggle-sidenav" class="usa-button margin-y-2" type="button" aria-expanded="true" aria-controls="sidenav">Toggle Sidenav</button>

  <div id="table-agile-roles-caption" class="table-caption padding-left-2">
      <strong>Table 1: Agile Roles Section 508 Task Matrix</strong>
  </div>

  <figure class = "usa-table-container--scrollable" role="region" aria-labelledby="table-agile-roles-caption" tabindex="0">
    <table id="table-agile-roles" class="usa-table usa-table--borderless striped margin-bottom-3 big-table">
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
</div>

**Reviewed/Updated:** September 2025

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

<!-- Select Accrodion / Table Views -->
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