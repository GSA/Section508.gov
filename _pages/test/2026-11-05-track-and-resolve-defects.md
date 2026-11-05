---
layout: page
sidenav: true
type: test
title: Track, Escalate, and Resolve Section 508 Defects
permalink: test/track-escalate-resolve-section-508-defects/
description: Learn how federal agencies can track, escalate, and resolve Section 508 defects with step-by-step guidance, templates, and sample contract language.
disclaimer: true
audience: 
- Contracting Officers (CO & COR)
- Developers
- IT Accessibility Program Staff
- IT Program & Project Managers
- Manager & Supervisor
- Risk Managers
- Section 508 Program Managers
- Section 508 Testers
topic: 
- Manage
subtopic: 
- Acquisition Documentation
- Best Practices
- General Information
- Guidance
- Risk Management
- Roles & Responsibilities
- Testing (Automated)
- Testing (Manual)
resource-type: 
- Article
format: HTML
custom-script: 
- accordion-management.js
created: 2026-11-05
updated: 
---
<p>Section 508 of the Rehabilitation Act requires federal agencies to ensure that information and communication technology (ICT) is accessible to people with disabilities. When testing reveals a defect, the agency's obligation does not end — it shifts to remediation. Agencies that manage accessibility defects consistently, escalate them appropriately, and verify fixes before closing them reduce legal risk and keep services accessible to the people who depend on them.</p>

<p>This article provides Section 508 program managers, IT project managers, and contracting officers with a recommended eight-step process for managing Section 508 defects from discovery through closure. It also includes escalation guidance, sample templates, and suggested contract language. The guidance applies whether the work is performed by internal teams or external contractors.</p>

<div class="grid-col-12 summary-box margin-bottom-3">
  <p><strong>Tip:</strong> Tailor all sample language to your agency's policies, contracts, and legal requirements.</p>
</div>

<div class="grid-col-12 summary-box--icon-suggested">
  <ul class="usa-icon-list padding-right-2 force-max-width">
    <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon">
        <svg class="usa-icon icon-size" aria-hidden="true" role="img">
          <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use>
        </svg>
      </div>
      <div class="usa-icon-list__content force-max-width">
        <div class="box-heading"><strong>Important Notice on Authority</strong><hr></div>
        <div class="box-text">Only the contracting officer (CO) has authority to direct contractor work, modify contract terms, issue cure notices, reject deliverables, or make decisions that affect contract cost, schedule, or scope. Contracting officers representatives (CORs), Section 508 Program Managers, and IT Project Managers support the CO but do not have independent authority to issue formal contract direction unless specifically delegated in writing.</div>
      </div>
    </li>
  </ul>
</div>

<p>Effective defect management depends on clearly defined roles and consistent coordination across the organization. Each stakeholder in the remediation process has distinct responsibilities that support, but do not replace, the authority of the CO. Table 1 summarizes the key responsibilities by role for tracking, escalating, and resolving Section 508 defects.</p>

<p id="key-responsibilities-by-role-table-title" class="text-bold">
  <caption>Table 1. Key Responsibilities by Role</caption>
</p>

  <table id="key-responsibilities-by-role-table" class="usa-table usa-table--borderless striped">
    <thead>
      <tr>
        <th scope="col">Role</th>
        <th scope="col">Key Responsibilities</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Contracting Officer (CO)</th>
        <td>Issue formal contract direction; review and approve vendor correspondence; determine appropriate contract action; issue delinquency notices; make acceptance decisions</td>
      </tr>
      <tr>
        <th scope="row">Contracting Officers representatives (COR)</th>
        <td>Monitor contractor performance; document defects; notify CO; coordinate technical review; communicate issues, track vendor remediation plans</td>
      </tr>
      <tr>
        <th scope="row">Development Team Lead</th>
        <td>Fix defects; write tests; prevent recurrence; support validation testing; contribute to remediation plans</td>
      </tr>
      <tr>
        <th scope="row">IT Project Manager</th>
        <td>Integrate accessibility into the software development lifecycle (SDLC); ensure defects are tracked and prioritized; escalate to program leadership; coordinate with Section 508 Program Manager and COR</td>
      </tr>
      <tr>
        <th scope="row">Product Owner</th>
        <td>Include Section 508 in acceptance criteria; prioritize defects in the backlog; approve releases; accept risk when appropriate with documentation</td>
      </tr>
      <tr>
        <th scope="row">Section 508 Program Manager</th>
        <td>Define testing standards; provide technical guidance; review defect records; escalate unresolved risk; advise on alternate means of access; support agency feedback process</td>
      </tr>
      <tr>
        <th scope="row">Section 508 Tester</th>
        <td>Identify and document defects; validate fixes; maintain test evidence</td>
      </tr>
    </tbody>
  </table>

<div class="grid-col-12 summary-box">
  <p><strong>Tip</strong>: The most effective way to manage Section 508 defects is to prevent them. Agencies that embed accessibility requirements early in acquisition and development reduce the cost, risk, and effort of remediation later.</p>

<p>Before issuing a solicitation for ICT products or services, the acquisition team should:</p>

<ol>
  <li>Include Section 508 requirements in the solicitation using the <a href="{{site.baseurl}}/art/#/">Accessibility Requirements Tool</a> and <a href="{{site.baseurl}}/buy/solicitation-review-tool/">Solicitation Review Tool</a>.</li>
  <li>Require an Accessibility Conformance Report (ACR) if you are buying a product (See <a href="{{site.baseurl}}/buy/request-accessibility-information/">Request Accessibility Information from Vendors &amp; Contractors</a>). Ensure you <a href="{{site.baseurl}}/buy/understand-claims/">understand vendor claims in a product ACR</a>.</li>
  <li>Include accessibility acceptance criteria in the Statement of Work or Performance Work Statement. See <a href="{{site.baseurl}}/buy/accessibility-in-procurement-solicitation-post-2/">Accessibility In Procurement II: Solicitation &amp; Post-Solicitation</a>.</li>
  <li>Address remediation requirements in the contract.</li>
</ol>

<p>For additional information see: <a href="{{site.baseurl}}/buy/">Buy Accessible Products and Services</a></p>
</div>

<h2>Managing Section 508 Defects</h2>

<p>A Section 508 defect that is identified but not tracked is a defect that may never get fixed. Agencies that test regularly, document findings consistently, and follow a clear remediation process are better equipped to close defects, reduce recurrence, and demonstrate better Section 508 conformance over time. The following eight steps provide a recommended procedure for managing Section 508 defects from initial discovery through closure. Apply these steps consistently across ICT products and development efforts.</p>

<div class="grid-col-12 summary-box">
  <p>Unresolved Section 508 defects have real consequences and risk associated with them. When a user with a disability cannot access ICT and the agency has not provided an equivalent alternate means of access, that user can report the issue through the agency's <a href="{{site.baseurl}}/manage/laws-and-policies/implementing-public-feedback-mechanism/">public feedback mechanism</a> or file a <a href="{{site.baseurl}}/manage/laws-and-policies/section-508-complaints-best-practices/">formal Section 508-related complaint</a>. Treat every incoming report as a defect. Log it, triage it, assign it a severity, and resolve it using the process described in this article. Documenting these actions helps manage risk, reduce user harm, and demonstrate accountability until the defect is fully remediated.</p>
</div>

<ol id="section-508-defect-management-process" class="usa-process-list itad-process-list--wide">
  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Document the Defect</h3>

    <p>Log every Section 508 defect in your agency's approved tracking system — such as Jira, ServiceNow, GitHub Issues, or an equivalent tool — as soon as it is identified. Use the same system you use for other product defects so that accessibility issues receive the same visibility and management attention. Adapt the sample fields below (Table 2) for your tracking system and needs.</p>

    <table id="defect-tracking-fields-table" class="usa-table usa-table--borderless striped">
  <caption>Table 2. Defect tracking fields</caption>
  <thead>
    <tr>
      <th scope="col">Field</th>
      <th scope="col">Entry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Defect ID</th>
      <td>[Unique tracking number — auto-assigned or manual]</td>
    </tr>
    <tr>
      <th scope="row">Date Identified</th>
      <td>[MM/DD/YYYY]</td>
    </tr>
    <tr>
      <th scope="row">Identified By</th>
      <td>[Tester name, role, team]</td>
    </tr>
    <tr>
      <th scope="row">Product or System Name</th>
      <td>[Name, version, module, URL, or document title]</td>
    </tr>
    <tr>
      <th scope="row">Environment</th>
      <td>[e.g., Production, Staging, or Development — include URL if applicable]</td>
    </tr>
    <tr>
      <th scope="row">Test ID</th>
      <td>[For example, if using DHS Trusted Tester process, cite the applicable test ID]</td>
    </tr>
    <tr>
      <th scope="row">WCAG Success Criterion or Section 508 Standard</th>
      <td>[e.g., WCAG 1.1.1, WCAG 1.3.1,]</td>
    </tr>
    <tr>
      <th scope="row">Defect Description</th>
      <td>[Plain-language description of what is wrong]</td>
    </tr>
    <tr>
      <th scope="row">Defect Location</th>
      <td>[Specific location(s) of where the defect occurs]</td>
    </tr>
    <tr>
      <th scope="row">User Impact</th>
      <td>[How this defect affects users with disabilities]</td>
    </tr>
    <tr>
      <th scope="row">Steps to Reproduce</th>
      <td>[Series of steps to replicate the defect]</td>
    </tr>
    <tr>
      <th scope="row">Expected Result</th>
      <td>[What should happen when the steps are followed]</td>
    </tr>
    <tr>
      <th scope="row">Testing Tool(s) Used</th>
      <td>[e.g., ANDI, Color Contrast Analyzer, screen reader name and version]</td>
    </tr>
    <tr>
      <th scope="row">Browser or Platform</th>
      <td>[e.g., Chrome, Edge, Windows, iOS]</td>
    </tr>
    <tr>
      <th scope="row">Severity</th>
      <td>[Critical, Major, or Minor; See Step 2 below]</td>
    </tr>
    <tr>
      <th scope="row">Priority</th>
      <td>[Assigned by product owner or PM based on risk and release schedule; may be directly associated with Severity]</td>
    </tr>
    <tr>
      <th scope="row">Owner</th>
      <td>[Responsible internal team, vendor, contractor name, or contract number]</td>
    </tr>
    <tr>
      <th scope="row">Due Date</th>
      <td>[Target remediation date based on severity and contract requirements]</td>
    </tr>
    <tr>
      <th scope="row">Evidence</th>
      <td>[Attach screenshots, video recording, code snippet, or test report]</td>
    </tr>
    <tr>
      <th scope="row">Workaround Available</th>
      <td>[Yes or No — if yes, describe the interim alternate access method]</td>
    </tr>
    <tr>
      <th scope="row">Status</th>
      <td>[e.g., Open, Accepted, In Remediation, Ready for Validation,Closed, Deferred, or Escalated]</td>
    </tr>
    <tr>
      <th scope="row">Escalation Level</th>
      <td>[If escalated, note current escalation step and date]</td>
    </tr>
    <tr>
      <th scope="row">Validation Result</th>
      <td>[Pass or Fail; to be completed after fix is deployed]</td>
    </tr>
    <tr>
      <th scope="row">Validated By</th>
      <td>[Tester name, role, date]</td>
    </tr>
    <tr>
      <th scope="row">Closure Notes</th>
      <td>[Fix description, evidence, and deployment confirmation]</td>
    </tr>
    <tr>
      <th scope="row">Contract Reference</th>
      <td>[Contract number, contract section, deliverable number — if vendor work]</td>
    </tr>
    <tr>
      <th scope="row">CO or COR Notified</th>
      <td>[Yes or No — date notified]</td>
    </tr>
  </tbody>
</table>

    <div class="grid-col-12 summary-box">
      <p><strong>Tip:</strong> When documenting defects, write descriptions that a developer, contracting officer, or legal counsel can understand without specialized accessibility knowledge. Avoid jargon and focus on describing what the user experiences and what the expected behavior should be.</p>
    </div>
  </li>

  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Assign Severity, Priority, and Timeframes</h3>

    <p>Severity reflects the impact of the defect on users with disabilities. Use severity to drive prioritization and escalation timelines. Agencies should adjust these definitions based on their policies:</p>

    <ul>
      <li><strong>Critical</strong>: A critical accessibility failure prevents people with disabilities from accessing or completing core functionality. This may include completing an essential task, accessing required information, submitting a required form, receiving a service, or performing required job duties.
        <ul>
          <li><em>Example:</em> A lack of keyboard access to focusable elements.</li>
          <li><em>Priority:</em> Fix immediately; if you cannot, require a remediation plan and interim alternative means of access.</li>
        </ul>
      </li>
      <li><strong>Major</strong>: A major accessibility issue substantially impairs access to important functionality, but users may still complete tasks through a workaround or alternate method.
        <ul>
          <li><em>Example</em>: Link context cannot be programmatically determined.</li>
          <li><em>Priority</em>: Prioritize for the current or next sprint, release, or contract deliverable correction.</li>
        </ul>
      </li>
      <li><strong>Minor:</strong> A minor accessibility issue causes usability challenges or partial barriers for some users but does not prevent completion of core tasks.
        <ul>
          <li><em>Example:</em> A decorative image is not marked as decorative.</li>
          <li><em>Priority:</em> Low; add to the remediation backlog and correct during routine maintenance.</li>
        </ul>
      </li>
    </ul>
<hr>
Reference the <a href="{{site.baseurl}}/sell/acr-supplement/">Section 508 Government ACR Supplement</a>.
<hr>
<div class="grid-col-12 summary-box"><p><strong>Track patterns, not just individual defects.</strong> Regularly review open defects for aging issues, recurring failures, and systemic problems across products or vendors. Report defect trends to program leadership and the Section 508 Program Manager. A high volume of aging Major defects or recurring Critical defects on the same system signals a process or resource problem that may require escalation beyond the individual ticket.</p></div>

    <p>Agencies should set timelines based on mission risk, contract requirements, user impact, and release cycles. Use the model below in Table 3 as a starting point and adjust for your environment.</p>

    <table id="target-correction-timeframe-by-severity-table" class="usa-table usa-table--borderless striped">
      <caption>Table 3: Target correction timeframe by severity</caption>
      <thead>
        <tr>
          <th scope="col">Severity</th>
          <th scope="col">Remediation Plan Due</th>
          <th scope="col">Target Correction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><strong>Critical</strong></th>
          <td>2 business days</td>
          <td>As soon as practicable; ideally within 5 business days; immediate for public-facing or mission-critical systems</td>
        </tr>
        <tr>
          <th scope="row"><strong>Major</strong></th>
          <td>5 business days</td>
          <td>Current sprint, release, or deliverable cycle</td>
        </tr>
        <tr>
          <th scope="row"><strong>Minor</strong></th>
          <td>As needed</td>
          <td>Routine sprint  or maintenance cycle or within 60–90 business days</td>
        </tr>
      </tbody>
    </table>

    <div class="grid-col-12 summary-box">
      <p><strong>Note:</strong> For vendor ICT, the CO or COR should establish timelines in writing. For internal teams, the product owner or manager should set and document timelines in the team’s task tracking system.</p>
    </div>
  </li>

  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Notify the Responsible Team</h3>

    <p>Notify the team responsible for the fix as soon as the defect is documented and triaged. Use clear, factual language.</p>

    <h4>For Internal Development Teams</h4>

    <p>Notify the responsible party for remediation, such as the product owner, development lead, quality lead, or Section 508 lead. Use your agency's standard project communication channel, such as a ticketing system comment, a team channel, or a project status meeting. Your agency's defect tracking system may automate this notification.</p>

    <h4>For External Vendors and Contract Support</h4>

    <p>The COR or project manager may share technical findings with the vendor's technical point of contact. However, coordinate with the CO before issuing any direction that could affect contract scope, schedule, price, or terms.</p>

    <div class="grid-col-12 summary-box--icon-suggested">
      <ul class="usa-icon-list padding-right-2 force-max-width">
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon">
            <svg class="usa-icon icon-size" aria-hidden="true" role="img">
              <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#lightbulb_outline"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content force-max-width">
            <div class="box-heading"><strong>Sample vendor defect notification template</strong><hr></div>
            <div class="box-text">
              <p><strong>Subject:</strong> Section 508 Defect Notification — Contract No. [XXXXXX] — [Deliverable Name] — Defect ID [XXXX]</p>
              <p>[Vendor Technical Point of Contact Name],</p>
              <p>During the Section 508 review of [deliverable name / system name / document title] submitted under Contract No. [XXXXXX], [agency name] identified a Section 508 conformance defect that requires your attention.</p>
              <p><strong>Defect ID:</strong> [ID]</p>
              <p><strong>Applicable Section 508 Requirement:</strong> [Section 508 standard or WCAG Success Criterion — cite specifically]</p>
              <p><strong>Description:</strong> [Plain language description of the defect]</p>
              <p><strong>Defect Location:</strong> [Module, screen, etc]</p>
              <p><strong>Severity:</strong> [Critical, Major, or Minor]</p>
              <p><strong>Evidence:</strong> [Attached screenshots or test report]</p>
              <p><strong>Contract Reference:</strong> [Performance Work Statement (PWS) or Statement of Work (SOW) section that establishes the accessibility requirement]</p>
              <p>Per [PWS/SOW Section X.X], deliverables must conform to the applicable Section 508 standards. Please review the attached defect documentation and respond with a remediation plan within [X] business days. The Contracting Officer will review the plan and determine the appropriate next steps.</p>
              <p>Please direct questions to [COR name, contact information].</p>
              <p>[COR name, title, contract number, contact information]</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </li>

  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Request a Remediation Plan</h3>

    <p>For Critical and Major defects, and any defect affecting a pending deliverable or deployment, require the responsible team to submit a written <a href="{{site.baseurl}}/manage/remediation-alternative-means-/">remediation plan</a>. This creates accountability and gives the agency visibility into the approach that will be taken to remediate the defect.</p>

    <p>The remediation plan should include:</p>

    <ul id="remediation-plan-should-include" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">Root cause of the defect.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">Proposed fix and technical approach.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">Scope of impact: list all pages, components, templates, documents, or modules the defect affects, and identify whether similar defects exist elsewhere.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">Test approach: how the team will validate the fix, including assistive technology and regression testing.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">Target completion date.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">Interim workaround or alternate means of access during remediation.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">Dependencies or risks that may affect the timeline.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">Name and role of the person responsible for the fix.</div></li>
    </ul>
<br>
    <div class="grid-col-12 summary-box">
      <p><strong>Tip</strong>: A remediation plan is only as effective as the follow-through. A specific individual should be tasked with tracking the progress against each milestone, following up before deadlines pass, and triggering escalation when dates slip or the fix stalls.</p>
    </div>
  </li>

  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Address Section 508 Failures During Acceptance Testing</h3>

    <p>Acceptance testing is the agency's last opportunity to enforce Section 508 requirements before a deliverable enters production. Test every ICT deliverable against the applicable standards before accepting it. When a deliverable fails, the Contracting Officer, in coordination with the COR, Section 508 Program Manager, and legal counsel, determines the appropriate action.</p>

<p>A deliverable fails Section 508 acceptance testing when:</p>

<ul id="deliverable-fails-section-508-acceptance-testing" class="usa-icon-list tablet:grid-col maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">It does not conform to the Section 508 standards specified in the contract.</div>
  </li>

  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The contractor's ACR materially misrepresents the product's conformance.</div>
  </li>

  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Defects prevent users with disabilities from accessing required content or completing required tasks.</div>
  </li>

  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The deliverable does not meet the acceptance criteria specified in the PSW or SOW.</div>
  </li>
</ul>

    <h4>Options When a Deliverable Fails</h4>

    <ol>
      <li><strong>Reject and require resubmission.</strong> Under acceptance clauses, the government may reject non-conforming deliverables and require the contractor to correct and resubmit at no additional cost to the government. Document the specific defects, cite the applicable contract requirements, and set a resubmission deadline.</li>
      <li><strong>Conditional acceptance with documented defects.</strong> In some cases, the agency may accept a deliverable with known defects when the defects are low severity, a remediation plan is in place, and alternate means of access are available. <strong>Document the decision, the risk, and the remediation plan. Do not routinely accept non-conforming deliverables.</strong> Repeatedly accepting non-conforming deliverables may weaken the agency's position if the CO needs to take formal action later.</li>
      <li><strong>Partial acceptance.</strong> When most of a deliverable conforms but specific components have defects, the CO may accept the conforming portions and reject the non-conforming portions. Document the accepted and rejected components clearly.</li>
      <li><strong>Withhold payment.</strong> Depending on the contract type and applicable clauses, the CO may withhold payment for non-conforming deliverables until the contractor remediates the defects and the deliverable passes testing.</li>
      <li><strong>Document contractor performance.</strong> When accessibility deficiencies contribute to a contractor performance issue, document the facts, communications, remediation efforts, and outcomes in the contract file. When appropriate, the CO should consider the contractor's performance in accordance with applicable past-performance evaluation requirements, including <a href="{{site.baseurl}}/buy/accessibility-in-procurement-solicitation-post-2/#contractor-performance-assessment-report-system-cpars">CPARS</a>. Do not characterize a Section 508 defect as a performance deficiency unless the facts and contract requirements support that determination.</li>
      <li><strong>Escalate to cure notice or show cause.</strong> For repeated failures, significant non-conformance, or contractor unwillingness to remediate, the CO may issue a cure notice or show cause letter. A cure notice formally identifies the contractor's failure to meet contract requirements and provides an opportunity to correct the deficiencies within a specified period. A show cause letter asks the contractor to explain why the government should not terminate the contract for default or cause, typically when insufficient time remains to correct the deficiencies. Both actions require careful consideration of applicable contract terms and procedures.</li>
    </ol>
  </li>

  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Escalate When the Issue Is Not Resolved</h3>

    <p>Escalate unresolved Section 508 deficiencies when they cannot be addressed through routine remediation or when their severity, impact, or potential consequences warrant additional management attention. Conditions that may trigger escalation include:</p>

    <ul id="escalation-trigger-conditions" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">The defect is classified Critical or Major severity.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">The defect prevents acceptance of a deliverable or completion of a required task.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">The responsible team or contractor fails to respond within the agreed timeline.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">The same defect persists or recurs after remediation.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">The contractor disputes an accessibility finding or applicable contractual requirement, and the disagreement cannot be resolved through technical review.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">The defect significantly affects public access, employee access, or mission-critical services.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">Remediation may materially affect cost, schedule, scope, or contract obligations.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div><div class="usa-icon-list__content">The contractor or vendor submits a corrected deliverable that still fails testing.</div></li>
    </ul>

    <p>Escalation should generally be progressive, beginning at the lowest level capable of resolving the issue. However, significant accessibility barriers, contractual concerns, or other high-risk conditions may warrant escalation directly to the appropriate authority. Document escalation decisions and use Table 4 to guide the process..</p>

    <table id="escalation-levels-and-actions-table" class="usa-table usa-table--borderless striped">
  <caption>Table 4: Escalation levels and actions</caption>
  <thead>
    <tr>
      <th scope="col">Level</th>
      <th scope="col">Internal Development Teams</th>
      <th scope="col">External Vendors</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><strong>1</strong></th>
      <td>The developer or content owner fixes the defect.</td>
      <td>Vendor technical point of contact fixes the defect.</td>
    </tr>
    <tr>
      <th scope="row"><strong>2</strong></th>
      <td>Product owner or technical lead prioritizes and resources the fix.</td>
      <td>Vendor project manager escalates within the vendor organization.</td>
    </tr>
    <tr>
      <th scope="row"><strong>3</strong></th>
      <td>IT Project Manager adjusts the sprint or release schedule.</td>
      <td>COR documents deficiencies, coordinates with the contractor within delegated authority, notifies the Contracting Officer, and monitors corrective actions.</td>
    </tr>
    <tr>
      <th scope="row"><strong>4</strong></th>
      <td>Section 508 program manager provides technical guidance and documents risk.</td>
      <td>CO determines appropriate contractual remedies, including formal notices, rejection of deliverables, or other actions authorized by the contract.</td>
    </tr>
    <tr>
      <th scope="row"><strong>5</strong></th>
      <td>Program manager or system owner directs remediation, establishes interim accessibility measures, and elevates unresolved compliance risks to the appropriate agency authority.</td>
      <td>CO consults agency legal counsel, as appropriate, regarding contractual remedies, disputed requirements, claims, or potential litigation.</td>
    </tr>
    <tr>
      <th scope="row"><strong>6</strong></th>
      <td>Agency governance board or CIO engages for systemic issues or high-risk systems.</td>
      <td>Agency senior leadership and acquisition officials engage to address systemic contractor non-performance. Refer suspected fraud, deliberate misrepresentation, or other misconduct to the agency Inspector General , as appropriate.</td>
    </tr>
  </tbody>
</table>

    <h4>Contractor Performance Documentation</h4>

    <p>Document significant accessibility deficiencies, corrective actions, and outcomes throughout contract performance. When applicable, incorporate this information into contractor performance evaluations in the Contractor Performance Assessment Reporting System (CPARS), consistent with FAR Subpart 42.15 and agency procedures.</p>

    <h4>Document Escalation Outcomes</h4>

    <p>Record the deficiency, affected requirements, responsible parties, corrective actions, deadlines, and final disposition. Verify that remediation resolves the accessibility issue before closing it. For unresolved deficiencies, document any interim accessibility measures and the agency's plan for achieving compliance.</p>

    <h4>Sample Cure and Show Cause Notice Templates to Contractors</h4>

    <p>A <a href="https://www.acquisition.gov/far/49.607#FAR_49_607__d2978e18" target="_blank" class="usa-link usa-link--external">cure notice</a> is a formal contract action issued by the Contracting Officer under <a href="https://www.acquisition.gov/far/49.607" target="_blank" class="usa-link usa-link--external">49.607 Delinquency notices (Federal Acquisition Regulation)</a> when the contractor's failure to perform is so serious that it endangers performance of the contract.</p>

    <div class="grid-col-12 summary-box--icon-suggested">
      <ul class="usa-icon-list padding-right-2 force-max-width">
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon">
            <svg class="usa-icon icon-size" aria-hidden="true" role="img">
              <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#lightbulb_outline"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content force-max-width">
            <div class="box-heading"><strong>Cure Notice</strong><hr></div>
            <div class="box-text">
              <p><strong>Date:</strong> [Date] <strong>Contract No.:</strong> [XXXXXX] <strong>Contractor:</strong> [Contractor legal name and address] <strong>Subject:</strong> Cure Notice — Failure to Conform to Section 508 Accessibility Requirements</p>
              <p>You are notified that the Government considers your ____ [<em>specify the contractor’s failure or failures</em>] a condition that is endangering performance of the contract. Therefore, unless this condition is cured within 10 days after receipt of this notice [<em>or insert any longer time that the Contracting Officer may consider reasonably necessary</em>], the Government may terminate for default under the terms and conditions of the _______ [<em>insert clause title</em>] clause of this contract.</p>
              <p>(End of notice)</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <p>If the contractor responds to the cure notice but does not demonstrate a credible remediation path, the CO may issue a <a href="https://www.acquisition.gov/far/49.607#FAR_49_607__d2978e40" target="_blank" class="usa-link usa-link--external">show cause notice</a> before considering termination for default. Consult agency legal counsel before pursuing termination. Document all communications and performance issues throughout the process.</p>

    <div class="grid-col-12 summary-box--icon-suggested">
      <ul class="usa-icon-list padding-right-2 force-max-width">
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon">
            <svg class="usa-icon icon-size" aria-hidden="true" role="img">
              <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#lightbulb_outline"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content force-max-width">
            <div class="box-heading"><strong>Show Cause Notice</strong><hr></div>
            <div class="box-text">
              <p><strong>Date:</strong> [Date] <strong>Contract No.:</strong> [XXXXXX] <strong>Contractor:</strong> [Contractor legal name and address] <strong>Subject:</strong> Show Cause Notice — Failure to Conform to Section 508 Accessibility Requirements</p>
              <p>Since you have failed to ____ [<em>insert</em> "perform Contract No. ___ within the time required by its terms," <em>or</em> "cure the conditions endangering performance under Contract No _____ as described to you in the Government’s letter of _____ (date)"], the Government is considering terminating the contract under the provisions for default of this contract. Pending a final decision in this matter, it will be necessary to determine whether your failure to perform arose from causes beyond your control and without fault or negligence on your part. Accordingly, you are given the opportunity to present, in writing, any facts bearing on the question to ____ [<em>insert the name and complete address of the contracting officer</em>], within 10 days after receipt of this notice. Your failure to present any excuses within this time may be considered as an admission that none exist. Your attention is invited to the respective rights of the Contractor and the Government and the liabilities that may be invoked if a decision is made to terminate for default.</p>
              <p>Any assistance given to you on this contract or any acceptance by the Government of delinquent goods or services will be solely for the purpose of mitigating damages, and it is not the intention of the Government to condone any delinquency or to waive any rights the Government has under the contract.</p>
              <p>(End of notice)</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <h4>ACR Review During Acceptance</h4>

    <p>When the contract requires the vendor to submit an ACR for each deliverable of ICT throughout the period of performance:</p>

    <ol>
      <li><strong>Review the ACR for completeness.</strong> An ACR that lists "Supports" for every criterion without explanation is not credible. Look for specific descriptions of how the product meets each requirement. See <a href="{{site.baseurl}}/buy/understand-claims/">Understanding Vendor Claims in Accessibility Conformance Reports for Section 508 Conformance</a>.</li>
      <li><strong>Conduct testing against the ACR.</strong> <a href="{{site.baseurl}}/test/">Validate the contractor's claims through independent testing using the DHS Trusted Tester process or an equivalent methodology</a>.</li>
      <li><strong>Document discrepancies.</strong> If internal testing reveals that the product does not conform in direct conflict with claims found in the ACR, document any discrepancies and raise them with the Contracting Officer. A materially inaccurate ACR may have contract and legal implications.</li>
      <li><strong>Do not rely exclusively on conformance claims found in the ACR.</strong> The ACR is a self-reported document. Agencies should independently verify conformance through internal validation testing.</li>
    </ol>
  </li>

  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Validate the Fix</h3>

    <p>Never close a defect based only on a statement that the issue was resolved. Retest the fix before closing the record.</p>

<p>Validation should include:</p>

<ul id="validation-should-include" class="usa-icon-list tablet:grid-col maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The original steps taken to reproduce the issue.</div>
  </li>

  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">The browser, operating system, and testing tools used in the original test.</div>
  </li>

  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Comprehensive manual and automated Section 508 testing.</div>
  </li>

  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Regression testing on related pages, templates, components, or documents to confirm the fix did not introduce new defects.</div>
  </li>

  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Confirmation that the fix is deployed to the correct environment.</div>
  </li>
</ul>

    <p>Update the defect record with the validation result, tester name, date, and evidence. If the fix fails validation, reopen the defect if it was closed, update the severity if appropriate, and notify the responsible team.</p>

    <div class="grid-col-12 summary-box">
      <p><strong>Tip:</strong> When a fix affects a production system, confirm that the change follows the agency's change control process. See <a href="{{site.baseurl}}/manage/governance/section-508-for-change-control-processes/">Section 508 Considerations for Change Control Processes</a>.</p>
    </div>
  </li>

  <li class="usa-process-list__item">
    <h3 class="usa-process-list__heading">Close or Defer a Defect</h3>

    <p>Close the defect only when:</p>

    <ul id="close-defect-only-when" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#verified"></use></svg></div><div class="usa-icon-list__content">The fix passes validation testing.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#verified"></use></svg></div><div class="usa-icon-list__content">The tester documents the result and evidence.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#verified"></use></svg></div><div class="usa-icon-list__content">The responsible owner confirms deployment or delivery.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#verified"></use></svg></div><div class="usa-icon-list__content">The agency accepts the corrected deliverable, if a formal acceptance process applies.</div></li>
    </ul>

    <p>Defer a defect only when the agency has documented:</p>

    <ul id="defer-defect-only-when" class="usa-icon-list tablet:grid-col maxw-full">
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle_outline"></use></svg></div><div class="usa-icon-list__content">The specific reason for deferral.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle_outline"></use></svg></div><div class="usa-icon-list__content">The user impact during the deferral period.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle_outline"></use></svg></div><div class="usa-icon-list__content">The interim alternate means of access.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle_outline"></use></svg></div><div class="usa-icon-list__content">The planned correction date.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle_outline"></use></svg></div><div class="usa-icon-list__content">The approving official or governance body.</div></li>
      <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle_outline"></use></svg></div><div class="usa-icon-list__content">Any contract, legal, or policy considerations.</div></li>
    </ul>

    <p><strong>Do not use deferral to avoid Section 508 requirements.</strong> Agencies should track, report, and resolve deferred defects.</p>

    <div class="grid-col-12 summary-box--alt"><p>When a Section 508 defect prevents a user with a disability from accessing ICT, the agency has an obligation to provide an alternate means of access while the defect is being remediated. Alternate means are a temporary measure — they are not a substitute for conformance. Section 508 permits the use of alternate means of access when ICT cannot be made fully conformant, but agencies should ensure that the alternate means provides equivalent access. An inconvenient, delayed, or inaccessible workaround does not satisfy this obligation. See <a href="{{site.baseurl}}/manage/remediation-alternative-means-planning/">Remediation and Accommodation Planning.</a></p></div>
    <br>

    <div class="grid-col-12 summary-box">
      <p><strong>Note</strong>: Legacy systems present unique challenges for Section 508 compliance. Many were built before current standards existed, have not been updated, or are scheduled for replacement. Known defects in legacy systems still require management, documentation, and a plan for resolution or replacement. Integrate unresolved Section 508 defects for systems into the agency's Plan of Action and Milestones (POA&amp;M) process.</p>
    </div>
  </li>
</ol>

<h2>COTS and Open Source Products with Known Defects</h2>

<p>Commercial off-the-shelf (COTS) and open source products often have known Section 508 defects that the agency cannot fix directly. These situations require a different approach.</p>

<div id="cots-products-accordion-group" class="usa-accordion usa-accordion--bordered">
  <h3 class="usa-accordion__heading">
    <button id="for-cots-products-title" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="for-cots-products">
      For COTS Products
    </button>
  </h3>
  <div id="for-cots-products" class="usa-accordion__content">
    <ol>
      <li><strong>Review the ACR before procurement.</strong> Assess conformance claims during the acquisition process. Request a demonstration and independent testing when the product is high risk or high use. See <a href="{{site.baseurl}}/manage/governance/ict-accessibility-and-risk-management/">ICT Accessibility and Risk Management</a></li>
      <li><strong>Include remediation requirements in the contract.</strong> When procuring COTS products with known defects, include contractual requirements for the vendor to provide a remediation roadmap, deliver conformant updates within agreed timelines, and provide interim workarounds.</li>
      <li><strong>Track vendor updates.</strong> Monitor the vendor's release schedule for accessibility fixes. Test each update and update the defect record.</li>
      <li><strong>Escalate to the vendor through the contract.</strong> Use the defect notification and remediation plan request process described in this article. If the vendor is unresponsive, escalate to the CO.</li>
      <li><strong>Evaluate alternatives.</strong> If a COTS vendor cannot or will not remediate critical defects within a reasonable timeframe, the agency should evaluate whether to continue the contract or procure a conformant alternative.</li>
      <li><strong>Provide alternate means of access.</strong> While defects remain open, document the interim access solution for affected users.</li>
    </ol>

    <div class="grid-col-12 summary-box">
      <p><strong>Reminder:</strong> <a href="https://www.access-board.gov/ict/#E202.7" target="_blank" class="usa-link usa-link--external">Section E202.7 Best Meets</a> of the Revised 508 Standards states that if the agency cannot find an accessible commercial solution, an agency should procure the ICT solution that <em>best meets</em> the standards, consistent with business needs. If no technically acceptable alternative fully conforms to the Revised 508 Standards, select the alternative that best meets the standards when making an award, and request a “best meets” exception. Where the ICT does not fully support accessible features or components, the agency must provide, upon request, an alternative means of accessing the information or functions the ICT supports.</p>
    </div>
  </div>
</div>

<div id="open-source-products-accordion-group" class="usa-accordion usa-accordion--bordered">
  <h3 class="usa-accordion__heading">
    <button id="for-open-source-products-title" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="for-open-source-products">
      For Open Source Products
    </button>
  </h3>
  <div id="for-open-source-products" class="usa-accordion__content">
    <ol>
      <li><strong>Assess conformance before adoption.</strong> Review available ACRs, community testing reports, and accessibility documentation before adopting open source software for federal use.</li>
      <li><strong>Assign an internal owner.</strong> Identify who in the agency is responsible for testing, tracking, and remediating defects in the adopted open source product.</li>
      <li><strong>Contribute fixes upstream when possible.</strong> If the agency has development capacity, contribute accessibility fixes to the open source project. This benefits the broader community and may accelerate the fix.</li>
      <li><strong>Track defects in the agency system.</strong> Log known defects in your agency tracking system even if the fix depends on the open source community.</li>
      <li><strong>Set a remediation threshold.</strong> Determine what level of unresolved defects is acceptable for deployment and what requires delaying adoption or providing alternate access.</li>
    </ol>
  </div>
</div>

<h2>Related Resources</h2>

<ul>
  <li><a href="{{site.baseurl}}/buy/define-accessibility-criteria/">Define Accessibility Criteria in Contracts</a></li>
  <li><a href="{{site.baseurl}}/buy/determine-ict-exceptions/">Determining ICT Exceptions</a></li>
  <li><a href="{{site.baseurl}}/manage/governance/ict-accessibility-and-risk-management/">ICT Accessibility and Risk Management</a></li>
  <li><a href="{{site.baseurl}}/training/online-course/procuring-section-508-conformant-ict/">Procuring Section 508 Conformant ICT Products and Services</a></li>
  <li><a href="{{site.baseurl}}/manage/remediation-alternative-means-planning/">Remediation and Accommodation Planning</a></li>
  <li><a href="{{site.baseurl}}/manage/governance/section-508-for-change-control-processes/">Section 508 Considerations for Change Control Processes</a></li>
  <li><a href="{{site.baseurl}}/test/testing-lifecycle-overview/">Testing Lifecycle Overview</a></li>
  <li><a href="{{site.baseurl}}/buy/understanding-section-508-exceptions/">Understanding Section 508 Exceptions</a></li>
  <li><a href="{{site.baseurl}}/buy/understand-claims/">Understanding Vendor Claims in Accessibility Conformance Reports for Section 508 Conformance</a></li>
</ul>

