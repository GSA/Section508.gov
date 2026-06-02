---
layout: page
sidenav: true
type: develop
title: Integrating Section 508 Requirements into Each Agile Sprint
permalink: develop/integrate-section-508-in-agile-sprint/
description: Learn how to integrate ICT accessibility into Agile development by embedding conformance in the definition of done, using personas, and applying in-sprint testing and remediation.
audience:
- Designers
- IT Program & Project Managers
- Manager & Supervisor
- Requirements & Business Analysts
- Section 508 Program Managers
- Web Content Managers
topic:
- Design
- Develop
subtopic:
- Best Practices
- Guidance
- Lifecycle
- Requirements & Acceptance Criteria
- Testing (Automated)
- Testing (Manual)
- Websites
resource-type:
- Article
format: HTML
created: 2026-06-02
updated:
---
For federal agencies using <a href="{{site.baseurl}}/tools/glossary/#agile-development"> Agile development</a> methods, <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external"> Section 508 standards</a> must be integrated continuously across the product backlog, sprint cycles, and releases—not treated as a separate or final step. <a href="{{site.baseurl}}/develop/product-lifecycle-overview/">Proactive integration of information and communication technology (ICT) accessibility in the product lifecycle</a> helps manage costs, improves usability, ensures compliance, and strengthens team accountability. Conversely, addressing ICT accessibility issues late in the development process can be more disruptive and cause expensive rework.


To ensure each Agile sprint integrates ICT accessibility:


<ul class="usa-icon-list margin-bottom-3">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
<strong>Use Personas of People with Disabilities (PWD) in Backlog Refinement and User Story Development:</strong>
When  <a href="{{site.baseurl}}/develop/user-stories/">writing or refining user stories</a>, include <a href="{{site.baseurl}}/develop/sample-personas/">personas of users with various disabilities</a> such as screen-reader users, low-vision users, users without hearing, keyboard-only users, and users with cognitive disabilities. These personas help the team anticipate specific accessibility needs, design considerations, and test points. Personas should also inform backlog prioritization and acceptance criteria, not just story creation. </div>
</li>


 <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
<strong>Include Section 508 Conformance in both the Definition of Ready (DoR) and the Definition of Done (DoD):</strong>
The Definition of Ready is the team-defined list of criteria that a product backlog item or user story must meet before it is accepted into a sprint. Accessibility requirements should be explicit in acceptance criteria and validated before a story is considered ready for development. The team defines the Definition of Done as their collective understanding of what constitutes a completed user story. For user interface and feature-focused stories, the DoD should encompass both functional requirements and Section 508 accessibility standards. This includes ensuring keyboard-only functionality, adherence to sufficient color contrast ratios, and a valid and appropriate name, role, state, and value for all user controls.</div>
</li>


 <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
<strong>Integrate accessibility testing continuously through test-driven or behavior-driven approaches:</strong>
As part of development, break down ICT accessibility requirements into testable units. Developers and testers collaboratively <a href="{{site.baseurl}}/develop/incorporating-accessibility-conformance/"> implement automated tests</a> and <a href="{{site.baseurl}}/test/">conduct manual testing</a> as part of the development workflow, ideally before or alongside feature implementation. If issues are found, a remediation loop ensures fixes are incorporated before the sprint ends.</div>
</li>


 <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
<strong>Embed accessibility expertise within the team and involve Subject Matter Experts (SMEs):</strong>
Ensure that team members have or acquire accessibility expertise and use accessibility SMEs to provide guidance, pairing, and coaching rather than acting solely as reviewers. Include ICT accessibility SMEs, designers, testers, and PWDs—through usability or assistive technology testing—in design and review cycles, especially at sprint reviews and demonstrations.</div>
</li>
</ul>


<h2>Integrating ICT Accessibility in Agile Sprints</h2>


Below is a workflow to help ensure that the team iteratively <a href="{{site.baseurl}}/develop/incorporating-accessibility-conformance/">integrates accessibility and Section 508 conformance validation</a> across Agile events.


<ul class="usa-icon-list">
<li class="usa-icon-list__item">
<div class="usa-icon-list__icon text-green">
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
<use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
</svg>
</div>
<div class="usa-icon-list__content">Backlog Refinement
<ul>
<li>Define <a href="{{site.baseurl}}/develop/user-stories/">accessibility requirements and acceptance criteria</a>.</li>
<li>Incorporate <a href="{{site.baseurl}}/develop/sample-personas/">personas of users with disabilities</a>.</li>
</ul>
</div>
</li>

<li class="usa-icon-list__item">
<div class="usa-icon-list__icon text-green">
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
<use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
</svg>
</div>
<div class="usa-icon-list__content">Sprint Planning
<ul>
<li>Select stories that meet the Definition of Ready, including accessibility criteria.</li>
<li>Confirm the accessibility testing approach.</li>
</ul>
</div>
</li>


<li class="usa-icon-list__item">
<div class="usa-icon-list__icon text-green">
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
<use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
</svg>
</div> 
<div class="usa-icon-list__content">During Sprint (Development and Testing)
<ul>
<li>Implement features incrementally.</li>
<li>Perform continuous <a href="{{site.baseurl}}/develop/incorporating-accessibility-conformance/">accessibility testing (automated and manual)</a>.</li>
<li>Address defects as they are identified.</li>
<li>
Verify that acceptance criteria, including accessibility requirements, are met and that no critical accessibility defects remain.
</li>
</ul>
</div>
</li>

<li class="usa-icon-list__item">
<div class="usa-icon-list__icon text-green">
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
<use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
</svg>
</div> 
<div class="usa-icon-list__content">Sprint Review
<ul>
<li>Demonstrate working, accessible functionality.</li>
<li>Validate accessibility as part of acceptance.</li>
</ul>
</div>
</li>


<li class="usa-icon-list__item">
<div class="usa-icon-list__icon text-green">
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
<use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
</svg>
</div>
<div class="usa-icon-list__content">Retrospective
<ul>
<li>Identify accessibility gaps and process improvements.</li>
</ul>
</div>
</li>
</ul>


<h2>Include Section 508 Conformance in Definition of Done</h2>


<p>
Below are example clauses you may include in your Definition of Done for user stories involving user interface or feature changes. Adapt this list depending on your agency's standards, technology stack, and type of ICT product.
</p>


<table id="table-DoD" class="usa-table usa-table--borderless usa-table--striped striped margin-bottom-8">
<caption>
Table 1. Examples of Definition of Done (DoD) ICT Accessibility Clauses
</caption>
<thead>
<tr>
<th scope="col">DoD ICT Accessibility Clause</th>
<th scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">Section 508 criteria met</th>
<td>All user interface features comply with applicable Section 508 standards.</td>
</tr>
<tr>
<th scope="row">Color contrast verified</th>
<td>Text and images of text meet minimum contrast ratios.</td>
</tr>
<tr>
<th scope="row">Keyboard navigation and focus order tested</th>
<td>
All interactive elements can be accessed and activated using only a keyboard; tab order is logical and focus is visible.
</td>
</tr>
<tr>
<th scope="row">Screen reader and assistive technology compatibility tested</th>
<td>
The user interface is tested using the screen reader(s) and assistive technologies used by target users or required by agency standards.
</td>
</tr>
<tr>
<th scope="row">Alternative text sufficient</th>
<td>Images have sufficient alternative text.</td>
</tr>
<tr>
<th scope="row">Form fields are appropriately labeled</th>
<td>
Forms have appropriate visible labels and programmatic accessible names and descriptions.
</td>
</tr>
<tr>
<th scope="row">Error messages are accessible</th>
<td>
When validation errors occur, the feature provides Section 508-conformant messaging, moves focus to the error, and includes instructions to fix it.
</td>
</tr>
<tr>
<th scope="row">Content is responsive</th>
<td>
User interface remains usable at up to 200% zoom; no loss of functionality or content.
</td>
</tr>
<tr>
<th scope="row">Section 508 testing completed</th>
<td>
Passes automated Section 508 conformance tests, manual checks are complete, and Section 508 defects are documented.
</td>
</tr>
<tr>
<th scope="row">Accessibility requirements validated</th>
<td>
The feature or design meets all applicable Section 508 standards.
</td>
</tr>
<tr>
<th scope="row">Accessibility acceptance criteria met</th>
<td>
All accessibility-related acceptance criteria defined in the user story have been fully implemented and verified through testing.
</td>
</tr>
<tr>
<th scope="row">Automated accessibility tests included in CI/CD pipeline</th>
<td>
Automated accessibility tests are integrated into the CI/CD pipeline and run with each build to detect regressions and ensure ongoing conformance.
</td>
</tr>
<tr>
<th scope="row">No critical accessibility defects</th>
<td>
No open defects remain that would prevent users with disabilities from accessing or using core functionality; any remaining issues are documented and do not block release.
</td>
</tr>
</tbody>
</table>


<h2>Testing and Remediation Loop Within Sprint Cycles</h2>


To embed unit testing and remediation into each sprint, complete the following steps:
<ol class="usa-process-list">
<li class="usa-process-list__item">
<h3 class="usa-process-list__heading">Sprint Planning and Story Creation</h3>
<ul>
<li>Write user stories that include acceptance criteria incorporating personas of people with disabilities (PWDs) and ICT accessibility requirements.</li>
<li>Define the Definition of Done (DoD) for each story, including applicable Section 508 standards.</li>
</ul>
</li>


<li class="usa-process-list__item">
<h3 class="usa-process-list__heading">Development Phase</h3>
<ul>
<li>Build features incrementally while incorporating accessibility requirements throughout development.</li>
<li>Develop unit, component, and integration tests—automated where possible—to validate accessibility requirements such as sufficient color contrast, semantic structure, correct ARIA usage, and keyboard operability.</li>
<li>Use <a href="{{site.baseurl}}/develop/incorporating-accessibility-conformance/">code linters, accessibility checkers, and other appropriate tools </a>to support accessible development.</li>
<li>Integrate automated accessibility testing into the CI/CD pipeline to run with each build and detect regressions.</li>
<li>Perform manual accessibility testing for requirements not fully covered by automation, including keyboard navigation, focus order, meaningful alternative text, accurate labeling, heading structure, and use of color.</li>
<li>Remediate accessibility defects as they are identified and retest fixes within the same sprint.</li>
</ul>
</li>


<li class="usa-process-list__item">
<h3 class="usa-process-list__heading">Remediation Loop</h3>
<ul>
<li>Treat accessibility defects with the same priority as functional defects.</li>
<li>Remediate identified accessibility issues within the sprint.</li>
<li>Retest to validate that fixes are effective and do not introduce new defects.</li>
</ul>
</li>


<li class="usa-process-list__item">
<h3 class="usa-process-list__heading">Review and Demonstration</h3>
<ul>
<li>Demonstrate completed features, including functionality that supports Section 508 conformance.</li>
<li>Include a Section 508 subject matter expert (SME) in the review process to provide feedback and identify potential issues.</li>
</ul>
</li>


<li class="usa-process-list__item">
<h3 class="usa-process-list__heading">Sprint Close and Retrospective</h3>
<ul>
<li>Document Section 508 and ICT accessibility challenges, lessons learned, and successful practices.</li>
<li>Update the Definition of Done, accessibility tools, testing approaches, and personas as needed to improve future sprints.</li>
</ul>
</li>
</ol>

## Related Resources

<ul>
<li><a href="{{site.baseurl}}/develop/agile-roles-section-508-task-matrix/">Agile Roles Section 508 Task Matrix</a></li>
<li><a href="{{site.baseurl}}/develop/incorporating-accessibility-conformance/">Effective Methods and Tools for Incorporating Accessibility Conformance Validation within Development Processes</a></li>
<li><a href="{{site.baseurl}}/manage/roles/">IT Accessibility Roles and Responsibilities</a></li>
<li><a href="{{site.baseurl}}/develop/product-lifecycle-overview/">Product Lifecycle Overview</a></li>
<li><a href="{{site.baseurl}}/develop/raci-matrix-for-ict-accessibility-product-lifecycle/">RACI Matrix for ICT Accessibility Integration Across the Product Lifecycle</a></li>
<li><a href="{{site.baseurl}}/develop/raci-matrix-for-section-508-in-sdlc/">RACI Matrix for Section 508 Accessibility Integration in the Software Development Lifecycle</a></li>
<li><a href="{{site.baseurl}}/develop/sample-personas/">Sample Personas for Users With Disabilities</a></li>
<li><a href="{{site.baseurl}}/develop/user-stories/">Sample User Stories for Accessible ICT</a></li>
<li><a href="{{site.baseurl}}/test/sample-vs-comprehensive-testing/">Sample vs Comprehensive Section 508 Conformance Testing</a></li>
<li><a href="{{site.baseurl}}/test/">Test for Accessibility</a></li>
</ul>
