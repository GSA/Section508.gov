---
layout: page
sidenav: true
type: manage
title: Section 508 Exceptions Request and Approval Process
permalink: manage/exceptions-request-and-approval-process/
description: Explore ways that federal agencies can request, approve, and document Section 508 exceptions while ensuring ICT accessibility compliance.
disclaimer: 
audience: 
- 508-pm
- agency-head
- cao
- cio
- co-cor
- mgr-exec
- policy-lawmaker
topic: 
- buy
- policy
subtopic: 
- Accessibility Standards, Procedures, Guidance, Best Practices
- Accessible Acquisition Info, Guidance & Best Practices
- Forms
- Manage a 508 Program
resource_type: 
- article
- law-policy
- template
format: html
created: 2025-07-23
updated: #Add/update date stamp for each review/update
exclude-changelog: 
---
Federal agencies are required to ensure that their information and communication technology (ICT) is accessible to individuals with disabilities, as mandated by [Section 508 of the Rehabilitation Act (29 U.S.C. § 794d)](https://www.section508.gov/manage/laws-and-policies/section-508-law/). This applies to all ICT that an agency procures, develops, uses, or maintains. However, the [Section 508 Standards](https://www.access-board.gov/ict/) allow certain ICT to be exempt from these requirements under specific conditions.

The Section 508 Standards identify six General Exceptions that federal agencies may use to determine whether specific ICT, or components thereof, are exempt from full conformance with the standards; they are:

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <a href="{{site.baseurl}}/buy/understanding-section-508-exceptions/#legacy-ict">Legacy ICT</a>
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <a href="{{site.baseurl}}/buy/understanding-section-508-exceptions/#national-security-systems">National Security Systems</a>
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <a href="{{site.baseurl}}/buy/understanding-section-508-exceptions/#federal-contracts">Federal Contracts</a> or Incidental to Contract
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <a href="{{site.baseurl}}/buy/understanding-section-508-exceptions#ict-functions-located-in-maintenance-or-monitoring-spaces">
        ICT Functions Located in Maintenance or Monitoring Spaces
      </a>
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <a href="{{site.baseurl}}/buy/understanding-section-508-exceptions/#undue-burden-or-fundamental-alteration">Undue Burden or Fundamental Alteration</a>
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <a href="{{site.baseurl}}/buy/understanding-section-508-exceptions/#best-meets">Best Meets</a>
    </div>
  </li>
</ul>

Except for the Undue Burden or Fundamental Alteration, and Best Meets exceptions, the Section 508 Standards do not specify how federal agencies must process exception requests. While the Standards require that a "responsible agency official" make exception decisions, only the Undue Burden, Fundamental Alteration, and Best Meets exception types require formal documentation.

The Standards do not define who the responsible official is or what their title should be. Each agency has the discretion to designate the responsible official and determine how that role is assigned.

While each agency should develop an exceptions process that aligns with its mission, resources, and business practices, this guidance offers recommendations on documentation, reporting metrics, and roles and responsibilities to help effectively manage Section 508 General Exceptions.

## Exceptions Process Models
Because the Section 508 Standards do not specify how agencies must handle exceptions, the sample models in this article illustrate optional approaches agencies can use to meet legal and compliance requirements. Agencies may adapt these examples or develop their own, as long as they establish clear policies and procedures for reviewing exceptions.

<div class="usa-accordion usa-accordion--multiselectable margin-bottom-3" data-allow-multiple>
  <h3 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a1">Model 1: Centralize Exceptions Review</button>
  </h3>
  <div id="m-a1" class="usa-accordion__content">
  <p>All exception requests are submitted to a single "authorizing official" or centralized review board composed of key stakeholders such as legal, IT, Section 508, or Acquisition. Reviews are conducted using standardized evaluation criteria.</p>
  <h4>Benefits:</h4>
    <ul>
        <li>Ensures consistent decisions across the agency.</li>
        <li>Enables centralized documentation, auditing, tracking, and reporting readiness.</li>
        <li>Facilitates the involvement of subject matter experts in evaluations.</li>
    </ul>
    <h4>Potential Drawbacks:</h4>
    <ul>
        <li>May create bottlenecks due to limited reviewer capacity.</li>
        <li>Slower turnaround times for urgent or time-sensitive requests.</li>
        <li>Less flexibility for unique program or component needs.</li>
        <li>Requires robust support infrastructure such as tracking systems or intake processes.</li>
    </ul>
    <h4>Best For Agencies:</h4>
    <ul>
        <li>With high-volume ICT procurements or a large, diverse user base requiring uniform oversight.</li>
        <li>Without broad subject matter expertise.</li>
        <li>With small to medium ICT procurements.</li>
        <li>Without urgent or time sensitive needs.</li>
    </ul>
  </div>
  <h3 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a2">Model 2: Federated Exceptions Review</button>
  </h3>
  <div id="m-a2" class="usa-accordion__content">
    <p>Authority to review exceptions is delegated to program offices or subcomponents, following a common policy framework established by the central Section 508 Program Office. Periodic oversight helps ensure consistency and alignment with agency-wide standards.</p>
    <h4>Benefits:</h4>
    <ul>
        <li>Promotes responsiveness and context-specific decision-making.</li>
        <li>Encourages operational ownership and accountability.</li>
        <li>Scales well in agencies with decentralized components or diverse missions.</li>
    </ul>
    <h4>Potential Drawbacks:</h4>
    <ul>
        <li>Potential for inconsistent application of policy across components.</li>
        <li>Challenging to centralize records for reporting, tracking, or auditing without a centralized portal or ticketing system.</li>
        <li>Requires strong internal controls and training to ensure policy alignment.</li>
        <li>Risk of varying documentation quality and interpretation of exceptions.</li>
    </ul>
    <h4>Best For Agencies:</h4>
    <ul>
        <li>With decentralized subcomponents, such as departments with diverse missions or IT systems.</li>
    </ul>
  </div>
  <h3 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a3">Model 3: Decentralized Exceptions Review</button>
  </h3>
  <div id="m-a3" class="usa-accordion__content">
    <p>Exception processing is integrated into existing acquisition and development workflows, including planning, design, and contract approval checkpoints.</p>
    <h4>Benefits:</h4>
    <ul>
        <li>Embeds accessibility planning early in the project lifecycle.</li>
        <li>Aligns exceptions with risk assessments and mitigation strategies.</li>
        <li>Streamlines decision-making and reduces standalone documentation.</li>
        <li>Supports automation in modern procurement and development environments.</li>
    </ul>
    <h4>Potential Drawbacks:</h4>
    <ul>
        <li>May lack dedicated accessibility expertise at decision points.</li>
        <li>Risk of exceptions being overlooked or inconsistently interpreted and documented.</li>
        <li>Difficult to extract or aggregate data for enterprise-wide reporting and tracking.</li>
        <li>Requires extensive coordination across multiple lifecycle checkpoints.</li>
    </ul>
    <h4>Best For Agencies:</h4>
    <ul>
        <li>Undergoing IT modernization or those with automated procurement and development platforms.</li>
    </ul>
  </div>
</div>

<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
    <strong>Selecting a Model:</strong> The models above are examples only. Each agency should design and implement an exceptions process that aligns with its mission, organizational structure, and business needs.
</div>

## Policy and Process Considerations
Whether an agency uses a centralized, federated, or integrated model for Section 508 exception processing, certain core policy elements should be in place to ensure legal compliance, audit readiness, and operational consistency. The following are common elements to consider including in your agency's exception process.

### Process Workflow
<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Initiate Request</h4>
    <p class="margin-top-05">
    <ul>
        <li>Responsible Party: Requestor such as the  program office, acquisition official, or IT team.</li>
        <li>Actions:
            <ul>
                <li>Identify the need for a Section 508 exception.</li>
                <li>Complete the standardized Section 508 Exception Request Form&mdash;or an equivalent document&mdash;that captures the following information:
                    <ul>
                        <li>Type of exception</li>
                        <li>Requestor's name</li>
                        <li>Requestor's contact information</li>
                        <li>Agency and component or bureau submitting the request</li>
                        <li>Requesting office</li>
                        <li>Name of ICT product or service</li>
                        <li>Documentation of mitigation strategies, such as alternative access or planned remediation</li>
                        <li>Submit the completed form and supporting documents to the designated Authorizing Official (AO).</li>
                        <li>Submission may occur via a centralized portal, ticketing system, or official email address.</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    </p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Evaluation and Documentation Determination</h4>
    <p class="margin-top-05">Evaluation and Documentation Determination
    <ul>
        <li>Responsible Party: Authorizing Official</li>
        <li>Actions:
          <ul>
            <li> Evaluate the request using established evaluation criteria or <a href="{{site.baseurl}}/buy/determine-ict-exceptions/">decision questions</a>.</li>
            <li> Consult with stakeholders such as legal, Section 508, or IT Security, as needed.</li>
            <li> Approve or deny the exception request.</li>
            <li> Complete the submitted Exception Request Form&mdash;or equivalent document&mdash;that includes the following information:
              <ul>
                <li> Final determination or decision.</li>
                <li> Conditions, limitations, or extent of the exception granted.</li>
                <li> Documentation of mitigation strategies, such as alternative access methods and planned remediation.</li>
                <li> Name of the authorizing official.</li>
                <li> Signature of the authorizing official.</li>
                <li> Date of authorization.</li>
                <li> Expiration or renewal date.</li>
                <li> Exception tracking number.</li>
              </ul>
            </li>
            <li> Notify the requestor of the outcome and next steps.</li>
          </ul>
        </li>
    </ul>
    </p>
    </li>
    <li class="usa-process-list__item">
        <h4 class="usa-process-list__heading">Archive and Track</h4>
        <p>

* Responsible Party: Section 508 Program Office or AO Support Team
* Actions:
* Log the decision and supporting documents in the Section 508 Exception tracking system.
* Tag entries for:
* Exception type
* Requesting agency and component or bureau
* Requesting office
* Specific product/services covered
* Required mitigations such as alternative means or required remediation.
* Expiration date
* Store all documentation for audit readiness.
        </p>
    </li>
    <li class="usa-process-list__item">
        <h4 class="usa-process-list__heading">Reporting and Oversight</h4>
        <ul>
            <li> Responsible Party: Section 508 Program Office
            <li> Action:
            <li> Generate quarterly or annual reports summarizing:
            <li> The number and types of exceptions.
            <li> The status of mitigations.
            <li> Any expiring or lapsed exceptions.
            <li> Submit the required information as part of the annual Governmentwide Section 508 Assessment per 29 U.S.C. 794d-1 and in any other situations where it is required.
            <li> Share summary reports with the CIO, CAO, legal, or other oversight bodies as needed.
        </ul>
        </p>
    </li>
    <li class="usa-process-list__item">
        <h4 class="usa-process-list__heading">Complete the step-by-step process</h4>
        <p>
Renewal or Expiration Review

-   Responsible Party: Requestorz, with AO support

-   Actions:

-   Before expiration, reassess the need for continued exception.

-   If an exception is still needed, complete the standardized Section 508 Exception Request Form from Step 1 with all required data.
        </p>
    </li>
</ol>

### Identify Authorizing Officials

Agency policy should clearly define who is responsible for managing Section 508 exception requests. These responsibilities may be assigned to existing roles---such as the Chief Information Officer (CIO), Chief Acquisition Officer (CAO), or Section 508 Program Manager---or to an Exceptions Review Board (ERB) made up of key stakeholders.

<table class="usa-table usa-table--borderless usa-table--striped">
  <caption>Table 1: Authorizing Officials by Exception</caption>
  <colgroup>
    <col style="width: 34%;">
    <col style="width: 66%;">
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Exception Type</th>
      <th scope="col">Recommended Authorizing Official(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>E202.2 Legacy System</td>
      <td>CIO, Section 508 PM, ERB</td>
    </tr>
    <tr>
      <td>E202.3 National Security</td>
      <td>Agency Head, CIO, Section 508 PM, ERB</td>
    </tr>
    <tr>
      <td>E202.4 Federal Contracts</td>
      <td>CIO, CAO, Section 508 PM, ERB, Acquisition Official</td>
    </tr>
    <tr>
      <td>E202.5 ICT Functions Located in Maintenance or Monitoring Spaces</td>
      <td>CIO, CAO, Section 508 PM, ERB</td>
    </tr>
    <tr>
      <td>E202.6 Undue Burden or Fundamental Alteration</td>
      <td>Agency Head, CIO, Section 508 PM, ERB</td>
    </tr>
    <tr>
      <td>E202.7 Best Meets</td>
      <td>CIO, CAO, Section 508 PM, ERB</td>
    </tr>
  </tbody>
</table>

### Exception Review Criteria 

Establish agencywide exception decision questions to help AOs systematically [determine which ICT exceptions](https://www.section508.gov/buy/determine-ict-exceptions/)---if any---are applicable, ensuring thorough assessment, compliance, and supporting documentation.

<table class="usa-table usa-table--borderless usa-table--striped">
  <caption>Table 2: Exceptions Review Criteria</caption>
  <colgroup>
    <col style="width: 34%;">
    <col style="width: 66%;">
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Exception Type</th>
      <th scope="col">Decision Questions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Legacy ICT (E202.2)</td>
      <td>
        If the answer to all questions is “yes,” then this exception applies:
        <ul>
          <li>Did your agency deploy, maintain, or use the ICT on or before January 18, 2018?</li>
          <li>Is the ICT known to have conformed to the Electronic and Information Technology Accessibility Standards as originally published, prior to January 18, 2018?</li>
          <li>Since January 18, 2018, has the ICT remained unchanged regarding interoperability, the user interface, or access to information and data?</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>National Security Systems (E202.3)</td>
      <td>
        If any of the following apply, your ICT may qualify for this exception:
        <ul>
          <li>Involves intelligence activities</li>
          <li>Involves cryptologic activities related to national security</li>
          <li>Involves command and control of military forces</li>
          <li>Involves equipment that is an integral part of a weapon or weapons system</li>
          <li>Is critical to the direct fulfillment of military or intelligence missions (not routine admin like payroll, finance, logistics, or personnel)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Federal Contracts (E202.4)</td>
      <td>
        If the answer to all questions is “yes,” then this exception applies:
        <ul>
          <li>Is the vendor or contractor procuring the ICT?</li>
          <li>Will ONLY vendor or contractor personnel access or use the ICT?</li>
          <li>Will ownership of the ICT remain with the vendor or contractor upon contract completion?</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Maintenance/Monitoring Spaces (E202.5)</td>
      <td>
        If the answer to all questions is “yes,” then this exception applies:
        <ul>
          <li>Does the ICT have status indicators or operable parts (i.e., physical controls)?</li>
          <li>Is the ICT located in spaces frequented only by service personnel for maintenance, repair, or occasional monitoring (e.g., mounted in a wiring closet)?</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Undue Burden / Fundamental Alteration (E202.6)</td>
      <td>
        If the answer to all questions is “yes,” your ICT may warrant this exception:
        <ul>
          <li>Have you determined that conformance for some or all features and functions of the ICT item would result in an undue burden on your agency or component?</li>
          <li>Have you quantified the resources available to the program or component?</li>
          <li>Has the responsible official documented how the difficulty or expense is significant, relative to available resources?</li>
          <li>Does documentation explain what is significantly difficult, and why?</li>
          <li>Does it address whether the exception applies to the entire ICT or specific features?</li>
          <li>Will the agency provide an alternative means for users with disabilities to access the affected features/functions?</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Best Meets (E202.7)</td>
      <td>
        If the answer to all questions is “yes,” your ICT item may warrant this exception:
        <ul>
          <li>Have you completed market research addressing Section 508 compliance for the ICT item?</li>
          <li>Did you evaluate Accessibility Conformance Reports or test results?</li>
          <li>Did you document the market research that validated 508 conformance claims?</li>
          <li>Were there no fully conformant options that met business needs?</li>
          <li>Are you purchasing the ICT item that best meets the 508 Standards?</li>
          <li>Will the agency provide an alternative means for users with disabilities to access non-conformant features/functions?</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Authorization and Expiration

Section 508 exceptions should be applied sparingly and only when Section 508 conformance cannot be achieved without causing undue burden, fundamental alteration, or when no fully conformant solution exists. To maintain accountability, exceptions must be time-bound and regularly reassessed.

All approved exceptions should:

-   Include an expiration or revalidation date between 12 to 36 months of issuance, unless a shorter interval is justified based on risk or planned upgrades.

-   Be reviewed annually: Ensure ongoing relevance, assess whether circumstances have changed, and evaluate any progress toward remediation, resolution, or mitigation.

-   Be sunsetted, revised, or rejustified when:

-   A conformant product or solution becomes available.

-   Technology, business needs, or accessibility standards evolve.

-   Mitigation strategies are no longer effective or required.

|

Tip: A centralized portal or ticketing system may support revalidation reminders and track exception lifecycles to prevent indefinite approvals.

 |

### Federal Contracts Exceptions

Section 508 E202.4 Federal Contracts, provides an exception for compliance for "[information and communication technology (ICT)] acquired by a contractor incidental to a contract shall not be required to conform to the Revised 508 Standards.", where incidental to contract means all ICT that is exclusively owned and used by the contractor to fulfill the work statement does not require conformance with Section 508 Standards.

As contractors are at liberty to acquire ICT incidental to a contract, federal agencies may consider authorizing Federal Contracts Exceptions for all ICT procurements by including the following Section 508 Standards language in all ICT contracts:

#### "E202 General Exceptions

E202.4 Federal Contracts. ICT acquired by a contractor incidental to a contract shall not be required to conform to the Revised 508 Standards."

### Alternative Means Requirements

Granting a Section 508 exception does not eliminate the agency's responsibility to ensure that individuals with disabilities can access the information or services with the exception:

* For Undue Burden or Fundamental Alteration and Best Meets exceptions, the Section 508 Standards require that agencies provide alternate means of access to ensure individuals with disabilities receive the same information and services.
* For other exception types, alternative means of access is not explicitly required by the Standards, but it is strongly recommended as a best practice where feasible.

Agencies should establish procedures to ensure that equivalent access is considered, documented, and communicated, as needed, whenever an exception is approved. Implementation considerations should include: 

* Develop an internal checklist or template  to capture alternate means planning as part of the exception review process.
* Coordinate with communications and help desk teams to ensure messaging and support are in place.
* Review alternative means solutions annually, or when user needs or technologies change.
* Track user requests for alternate access to uncover common accessibility gaps and inform ongoing improvements.

<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
    Legal Consideration: Even when a Section 508 exception applies, providing alternative means is not optional---it is a continuing obligation under <a href="https://www.govinfo.gov/content/pkg/USCODE-2011-title29/html/USCODE-2011-title29-chap16-subchapV-sec794.htm">Section 504 of the Rehabilitation Act (29 U.S.C. 794)</a> and other agency responsibilities.
</div>

## Recordkeeping and Reporting

Agencies should maintain records for all Section 508 exception requests related to ICT that are procured, developed, used, or maintained. These records should be comprehensive enough to provide a clear historical trail, particularly in the event of staff turnover or personnel changes affecting familiarity with the ICT product or service.

At a minimum, exception records should:
-   Include documentation required under E202.6 Undue Burden or Fundamental Alteration and E202.7 Best Meets.
-   Be retained for at least five years after the exception expires, or longer in accordance with National Archives and Records Administration (NARA) retention records guidelines.
-   Be tracked and available for auditing, re-evaluations, and reporting.

### Data Collection

Exception records should include standardized metadata fields, such as:

<table class="usa-table usa-table--borderless usa-table--striped">
  <caption>Table 3: Exceptions Recordkeeping Metadata</caption>
  <colgroup>
    <col style="width: 34%;">
    <col style="width: 66%;">
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Metadata Label</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Exception ID Number</td>
      <td>
        Assign a unique identifier to each approved exception.<br>
        <strong>Format:</strong> Agency-Component-Office-Date-Sequence-Type<br>
        <strong>Example:</strong> DHS-FEMA-Recovery-2024-05-08-003-Best-Meets
      </td>
    </tr>
    <tr>
      <td>Requestor’s Information</td>
      <td>
        Include name and contact details such as email, phone, agency, component, and office of the requestor.
      </td>
    </tr>
    <tr>
      <td>Exception Type</td>
      <td>
        Identify the applicable exception type:<br>
        Legacy ICT, National Security Systems, Federal Contracts, ICT Functions Located in Maintenance or Monitoring Spaces, Undue Burden or Fundamental Alteration, or Best Meets.
      </td>
    </tr>
    <tr>
      <td>ICT Name</td>
      <td>Name or title of the ICT product or service.</td>
    </tr>
    <tr>
      <td>ICT Vendor</td>
      <td>Name of the vendor providing the ICT product or service.</td>
    </tr>
    <tr>
      <td>ICT Description</td>
      <td>
        A meaningful description of the ICT, including intended use and user population.
      </td>
    </tr>
    <tr>
      <td>Scope</td>
      <td>
        Define the scope of the exception, including boundaries, conditions, or limitations such as specific features, modules, or users to which the exception applies.
      </td>
    </tr>
    <tr>
      <td>ICT Version</td>
      <td>Version number or identifier of the ICT product or service.</td>
    </tr>
    <tr>
      <td>Acquisition Reference Number</td>
      <td>Provide the unique acquisition number associated with this exception.</td>
    </tr>
    <tr>
      <td>Request Justification</td>
      <td>
        Provide rationale for the exception request, including:<br>
        • Cost or technical limitations for Undue Burden<br>
        • Risk assessment and mitigation plan
      </td>
    </tr>
    <tr>
      <td>Alternate Means of Access</td>
      <td>
        Plan for providing equivalent access for users with disabilities if the ICT is not fully conformant.
      </td>
    </tr>
    <tr>
      <td>Authorizing Official (AO)</td>
      <td>
        Name and title of the official responsible for reviewing and approving or denying the request.
      </td>
    </tr>
    <tr>
      <td>Determination/Status</td>
      <td>
        Final status such as approved or denied, rationale for the decision, and any conditions imposed.
      </td>
    </tr>
    <tr>
      <td>Expiration/Revalidation Date</td>
      <td>
        Set a date when the exception will expire or be re-evaluated, typically 12–24 months.
      </td>
    </tr>
  </tbody>
</table>

### Sample Exception Request Forms

Agencies that currently use business process or workflow automation tools may consider developing a standardized process for submitting, reviewing, approving, and documenting exception requests. 

Agencies that do not utilize such systems may opt for a forms-based approach, such as creating an online form or a fillable PDF that can be routed to the appropriate stakeholders for review and approval. For these cases, the following sample forms are provided for consideration:

* <a href="" tareget="_blank" class="usa-link--external">E202.2 Legacy ICT Exception Request Form (DOCX)</a>
* <a href="" tareget="_blank" class="usa-link--external">E202.3 National Security Exception Request Form (DOCX)</a>
* <a href="" tareget="_blank" class="usa-link--external">E202.4 Federal Contracts Exception Request Form (DOCX)</a>
* <a href="" tareget="_blank" class="usa-link--external">E202.5 ICT Functions Located in Maintenance/Monitoring Spaces Request Form (DOCX)</a>
* <a href="" tareget="_blank" class="usa-link--external">E202.6 Undue Burden or Fundamental Alteration Exception Request Form (DOCX)</a>
* <a href="" tareget="_blank" class="usa-link--external">E202.7 Best Meets Exception Request Form (DOCX)</a>

## Related Resources

* [Understanding Section 508 Exceptions]({{site.baseurl}}/buy/understanding-section-508-exceptions/)
* [Technology Accessibility Playbook - Play 8: Integrate accessibility needs into market research and acquisition processes]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook-intro/play08/)
* [Track and Report Conformance]({{site.baseurl}}/manage/track-report-conformance/)
* [Determine Section 508 Standards]({{site.baseurl}}/buy/determine-508-standards-exceptions/)

**Reviewed/Updated:** July 2025