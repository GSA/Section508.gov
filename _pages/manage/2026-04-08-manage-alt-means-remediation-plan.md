---
layout: page
sidenav: true
type: manage
title: Remediation and Accommodation Planning
permalink: manage/remediation-alternative-means-planning/
description: Understand why Section 508 Remediation and Alternative Means Plans are essential for documenting fixes to accessibility defects and ensuring equal access during redevelopment.
audience: 
- Buyers
- Contracting Officers (CO & COR)
- IT Program & Project Managers
- Manager & Supervisor
topic: 
- Buy
- Manage
subtopic: 
- Acquisition Documentation
- Forms
- Lifecycle
- Requirements & Acceptance Criteria
- Risk Management
resource-type: 
- Article
format: HTML
created: 2026-04-08
updated: 
---

Agencies are responsible for ensuring that all information and communication technology (ICT) complies with Section 508 of the Rehabilitation Act. When [accessibility barriers are identified]({{ site.baseurl }}/test/), they create operational and legal risks if not addressed quickly and systematically. To manage those risks, two forms of documentation are recommended as a best practice:

1.  Section 508 Defect Remediation Plan -- Documents the actions, timelines, and responsible parties for fixing accessibility defects to achieve technical conformance.

2.  Section 508 Alternative Means Plan (AMP) -- Documents the actions, timelines, responsible parties, and methods for alternative access. The AMP applies both while remediation is underway and in situations where remediation will not occur (e.g., legacy systems, exceptions, or systems scheduled for retirement.

Together, these plans demonstrate that the agency is actively addressing accessibility issues while ensuring uninterrupted access for impacted users. Both plans help mitigate operational and legal risk by demonstrating due diligence in providing equal access under Section 508.

## The Defect Remediation Plan
The Section 508 Defect Remediation Plan is the authoritative record of how specific accessibility issues will be resolved. It should:

1.  Identify each defect, the applicable Section 508 standards/WCAG criterion violated, and the users impacted.

2.  Determine the accessibility risk level --- High, Medium, or Low --- based on the number of users affected and the criticality of the functionality.

3.  Assign remediation actions to specific teams or individuals with clear timelines.

4.  Include testing and verification steps to confirm that fixes meet Section 508 standards.

5.  Document progress through ongoing updates, sprint reviews, or project meetings.

The Defect Remediation Plan remains in effect until all defects are resolved and compliance is validated through Section 508 testing. Once verified, the plan is retired.

<div class="grid-col-12 summary-box">
  <ul class="usa-icon-list maxw-full padding-bottom-2">
    <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-red">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#push_pin"></use></svg>
      </div>
      <div class="usa-icon-list__content">Use the <a href="{{ site.baseurl }}/assets/files/Section-508-Defect-Remediation-Plan---Template.docx" target="_blank" class="usa-link--external">Section 508 Defect Remediation Plan - Template (DOCX)</a> to standardize documentation across programs.</div>
    </li>
  </ul>
</div>

## The Alternative Means Plan (AMP)
Federal agencies must provide equivalent, timely access to users with disabilities whether or not defects will ever be remediated. An Alternative Means Plan documents how the agency will provide equal access in two scenarios:

1.  Temporary accommodation during accessibility defect remediation: while an agency fixes accessibility defects.

2.  Ongoing coverage when remediation will not occur: when a system is covered by an exception, will be retired soon, or determined not feasible to remediate.  

An AMP should:

1.  Describe how users can access impacted content or functions through alternate means such as  transcripts, accessible HTML versions, staff-assisted access, or alternate systems or tools.

2.  Establish timelines for fulfilling requests such as "acknowledgement within 24 hours"\
    or "delivery within 48--72 hours".

3.  Provide clear user notifications and contact information for requesting alternate access.

4.  Track requests, monitor response times, and escalate issues if not resolved promptly.

The AMP remains active until all defects are remediated and validated. If remediation is not planned, the AMP instead serves as the standing, ongoing method of access and is maintained for as long as the ICT remains in use.

<div class="grid-col-12 summary-box">
  <ul class="usa-icon-list maxw-full padding-bottom-2">
    <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-red">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#push_pin"></use></svg>
      </div>
      <div class="usa-icon-list__content">Use the <a href="{{ site.baseurl }}/assets/files/Section-508-Alternative-Means-Plan---Template.docx" target="_blank" class="usa-link--external">Section 508 Alternative Means Plan - Template (DOCX)</a> to ensure consistent procedures across systems.</div>
    </li>
  </ul>
</div>

## How the Two Plans Work Together
-   The Defect Remediation Plan addresses root-cause fixes at the source, while the Alternative Means Plan ensures uninterrupted access for impacted users, whether temporarily during remediation or permanently if remediation will not occur.
-   Both plans should be maintained together, cross-referenced, and approved by the responsible program and Section 508 officials.

## Accountability and Oversight
* Program Managers ensure defects are logged, prioritized, and resourced.
-   Section 508 Program Managers oversee compliance, approve interim access methods, and validate fixes.
-   Executives, such as the Chief Information Officer (CIO), legal counsel, or senior sponsors, may be required to sign off when barriers have high risk or affect mission-critical systems.
-   Leadership review is also critical when ICT will not be remediated. CIOs, legal counsel, or senior sponsors should explicitly approve the continued reliance on alternative means, documenting both the business rationale and the accessibility safeguards in place.

## Related Resources
* [Design and Develop Accessible Products]({{ site.baseurl }}/develop/) 
* [IT Accessibility Program Management]({{ site.baseurl }}/manage/program-management/) 
* <a href="https://www.access-board.gov/ict/#E202-general-exceptions" target="blank" class="usa-link--external">Section 508 Exceptions</a> 
* [Section 508 Exceptions Request and Approval Process]({{ site.baseurl }}/manage/exceptions-request-and-approval-process/) 
* [Test for Accessibility]({{ site.baseurl }}/test/)