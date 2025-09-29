---
layout: page
sidenav: true
type: manage
title: Section 508 Considerations for Enterprise Architecture Integration
permalink: manage/governance/integrating-section-508-into-enterprise-architecture/
description: Learn how to integrate Section 508 compliance into all phases of federal Enterprise Architecture.
disclaimer: 
audience: 
- 508-pm
- cio
- content-creator
- designer
- it-prog-proj-mgr
- mgr-exec
- requirement-ba
topic: 
- policy
- manage
subtopic: 
- Accessibility Standards, Procedures, Guidance, Best Practices
- General Info and Best Practices
- Manage Accessibility for IT Program/Project Managers
resource-type: 
- article
format: "HTML (html)"
created: 2025-09-09
updated: 2025-09-09
exclude-changelog: 
---
To ensure legal compliance and avoid expensive rework, Section 508 should be integrated into <a href="https://obamawhitehouse.archives.gov/omb/e-gov/fea" target="_blank" class="usa-link--external">Federal Enterprise Architecture (FEA)</a>. Early integration of information and communications technology (ICT) accessibility streamlines system design, testing, and reporting across various platforms, enhancing overall efficiency and maintainability. This document outlines key Enterprise Architecture (EA) domains and associated activities federal agencies can embed across the enterprise architecture —from strategic architecture to host infrastructure —to systematically embed Section 508 conformance throughout the IT lifecycle. 

If ICT accessibility is not integrated at the architectural level, compliance becomes much harder — or impossible — to retrofit.

<table id="table-ea" class="usa-table usa-table--borderless striped grid-col-12 margin-bottom-3">
  <caption>Table 1: EA Domain and associated Section 508-related activities</caption>
  <thead>
  <tr>
      <th scope="col">EA Domain</th>
      <th scope="col">Activities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Strategic Architecture</th>
      <td>
        <ul>
          <li>Align Section 508 goals with the agency's mission and strategic plan.</li>
          <li>Document Section 508-related business drivers for your agency.</li>
          <li>Include Section 508 considerations in existing IT governance boards such as the <a href="{{site.baseurl}}/tools/glossary/#i">Institutional Review Board (IRB)</a> or <a href="{{site.baseurl}}/tools/glossary/#e">Enterprise Architecture Review Board (EARB)</a>.</li>
          <li>Incorporate Section 508 into EA policies, charters, and IT investment review criteria.</li>
          <li>Require Section 508 checks in EA review gates such as architecture or milestone reviews by creating a checklist of use case and requirements documents.</li>
          <li>Set enterprise-wide Section 508 goals and <a href="{{site.baseurl}}/manage/accessibility-kpi/">Key Performance Indicators (KPIs)</a>.</li>
          <li>Embed <a href="{{site.baseurl}}/manage/governance/integrating-section-508-into-cpic/">Section 508 considerations into Capital Planning and Investment Control (CPIC)</a>.</li>
          <li>Track Section 508 conformance across enterprise assets in a dashboard or scorecard.</li>
          <li>Maintain Section 508 conformance data in <a href="{{site.baseurl}}/manage/governance/section-508-into-asset-management-and-grc-tools/">Asset Management or Governance, Risk, and Compliance (GRC) tool</a>.</li>
          <li>Report Section 508 compliance status to stakeholders via EA reporting, Federal Information Technology Acquisition Reform Act (FITARA), or other relevant reviews.</li>
          <li>Align with relevant Office of Management and Budget (OMB) guidance. </li>
          <li>Include Section 508 metrics in EA maturity models.</li>
          <li>Track Section 508 compliance as a performance metric.</li>
          <li>Monitor risk levels for systems lacking Section 508 conformance.</li>
          <li>Monitor remediation plans and timelines.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Business Services or Business Architecture</th>
      <td>
        <ul>
          <li>Incorporate Section 508 in business capability models and service catalogs.</li>
          <li>Incorporate Section 508 in <a href="{{site.baseurl}}/develop/sample-personas/">personas</a>, <a href="{{site.baseurl}}/develop/user-stories">user stories</a>, and business requirements.</li>
          <li>Ensure service <a href="{{site.baseurl}}/manage/roles/">designers and business analysts</a> collaborate with Section 508 subject matter experts as early as possible in the technology lifecycle.</li>
          <li>Integrate Section 508 checkpoints in stage gates or software development lifecycle (SDLC) milestones such as requirements, design, development, and testing.</li>
          <li>Integrate Section 508 checks into business process diagrams and workflows.</li>
          <li>Evaluate business services for Section 508 compliance as part of EA or IT portfolio reviews.</li>
          <li>Embed Section 508 checks in EA reviews of acquisitions and IT spend plans.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Data and Information or Data Architecture</th>
      <td>
        <ul>
          <li>Refer to agency <a href="{{site.baseurl}}/manage/playbooks/technology-accessibility-playbook-intro/play04/">Section 508 policy</a> for applicable standards, testing methods, and testing tools.</li>
          <li>Use EA modeling tools with fields, metadata, or extensions for Section 508 metadata.</li>
          <li>Implement Section 508 conformant templates or reusable components for recurring content.</li>
          <li>Integrate Section 508 conformance in design reviews.</li>
          <li>Integrate Section 508 conformance in EA review tooling.</li>
          <li>Include Section 508 conformance in data governance risk registers or equivalent.</li>
          <li>Include Section 508 in data governance and data quality frameworks.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Enabling Applications or Application Architecture</th>
      <td>
        <ul>
          <li>Require Section 508 conformance as a non-functional requirement in all solution designs.</li>
          <li>Include Section 508 criteria in architecture blueprints, diagrams, and reference models.</li>
          <li>Incorporate <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a> as technical requirements.</li>
          <li>Ensure solution reviews assess Section 508 conformance.</li>
          <li>Require all vendors to submit an accurate and up-to-date <a href="{{site.baseurl}}/sell/acr/">Accessibility Conformance Report (ACR)</a>.</li>
          <li>Integrate Section 508 conformance in EA stage gates or architecture review boards.</li>
          <li>Document any defects and associated risk.</li>
          <li><a href="{{site.baseurl}}/develop/incorporating-accessibility-conformance/">Integrate Section 508 into CI/CD pipelines</a>.</li>
          <li>Track Section 508 conformance data in <a href="{{site.baseurl}}/manage/governance/section-508-into-asset-management-and-grc-tools/">Asset Management or GRC tool</a>.</li>
          <li>Incorporate Section 508 <a href="{{site.baseurl}}/tools/glossary/#conformance">conformance</a> into application support, playbooks, and governance policies.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Host Infrastructure or Technology Architecture</th>
      <td>
        <ul>
          <li>Verify shared services such as content management systems and authentication, are Section 508 conformant by default.</li>
          <li>Evaluate cloud offerings, software as a service, and custom off the shelf solutions for Section 508 conformance during technical fit analysis.</li>
          <li>Require ACRs or Section 508 test results for all infrastructure components.</li>
          <li>Build accessibility features into platform-level templates and design systems.</li>
          <li>Embed Section 508 conformance in automated deployment scripts and templates.</li>
          <li>Track Section 508 conformance levels in platform assessments, modernization plans, and service delivery documentation.</li>
          <li>Include Section 508 requirements in Authorization to Operate (ATO).</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Security Architecture</th>
      <td>
        <ul>
          <li>Ensure Section 508 conformance of two-factor authentication, password resets, and login flows.</li>
          <li>Ensure Section 508 conformant CAPTCHAs or alternatives are implemented.</li>
          <li>Integrate Section 508 conformance checks in security control reviews and ATOs.</li>
          <li>IInclude Section 508 risks in Plan of Action and Milestones (POA&M), if applicable.</li>
          <li>Consider Section 508 conformance in zero trust, identity and access management, and endpoint security tools.</li>
          <li>Track non-conformant security features in a central risk database and require remediation plans.</li>
          <li>Document Section 508 requirements in security architecture principles, Information System Security Plans (ISSPs), and technical standards and security configuration baselines.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Related Resources:

* <a href="https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/egov_docs/common_approach_to_federal_ea.pdf" target="_blank" class="usa-link--external">Common Approach to Federal Enterprise Architecture</a>

**Reviewed/Updated:** September 2025
