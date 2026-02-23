---
layout: page
sidenav: true
type: manage
title: ICT Accessibility and Risk Management
permalink: manage/governance/ict-accessibility-and-risk-management/
description: Learn how to apply risk management principles to ICT accessibility to be comfortable identifying, assessing and analyzing ICT accessibility risks.
disclaimer: 
audience: 
- 508-pm
- agency-head
- cio
- content-creator
- it-prog-proj-mgr
- mgr-exec
- requirement-ba
topic: 
- manage
subtopic: 
- General Info and Best Practices
- Manage a 508 Program
resource_type: 
- article
format: html
created: 2026-02-23
---

In 2016, OMB revised <a href="https://www.commerce.gov/sites/default/files/opog/omb_circular_a-123.pdf" target="_blank" class="usa-link--external">Circular A-123 (PDF)</a> to require agencies to integrate Enterprise Risk Management (ERM) into strategic planning and review processes. ERM is defined as “an effective Agency-wide approach to addressing the full spectrum of the organization’s external and internal risks by understanding the combined impact of risks as an interrelated portfolio, rather than addressing risks only within silos.” 

ERM is a core component of an agency’s governance framework. As a discipline, it focuses on identifying, assessing, and managing risks that may affect the agency’s ability to achieve its mission. With respect to ICT, risk management principles and the ERM framework should be applied to vulnerabilities to ICT within your organization that could cause potential accessibility issues. These accessibility risks can be at the program or project level or could be more broadly applicable across the enterprise. In this article, we will introduce risk management principles, discuss how they can be applied to ICT accessibility, and determine how to assess and assess these ICT accessibility risks.

## Enterprise Risk Management Framework
ERM encompasses an overarching process that includes prioritizing risks from across an organization's business functions to help an agency achieve its mission. The process includes the following activities:

<ol>
  <li><strong>Establish Context: </strong>Define objectives, scope stakeholders, and risk tolerance relevant to the activity.</li>
  <li><strong>Identify Risk: </strong>Determine events or conditions that could prevent achieving objectives.</li>
  <li><strong>Analyze and Evaluate Risks: </strong>Assess the likelihood and impact to determine risk level and priority.</li>
  <li><strong>Determine Risk Management Alternatives: </strong>Develop management strategies, including possible methods to avoid, transfer, mitigate or accept the risk.</li>
  <li><strong>Respond to Risk: </strong>Implement your management strategy or absorb the risk.</li>
  <li><strong>Monitor and Review: </strong>Continuously evaluate risks, controls, and environmental changes to determine whether risk responses remain effective or require adjustment.</li>
</ol>

This framework applies across all business functions, with the risk environment varying based on context. For instance, within fleet or transportation management vehicular accidents would be a primary concern. Within IT, cybersecurity issues such as a data breach, would be the primary concern. Once the context is established, those evaluating risk can begin to identify potential risks, analyze them and begin developing strategies for how to overcome or mitigate them.

## Accessibility in the Context of Enterprise Risk Management
ICT accessibility risks arise when information and communication technology does not conform to accessibility standards. These risks may occur at the project, program, or enterprise level. ICT accessibility risk is not solely a technical defect; it is a mission, compliance, operational, and reputational risk. Failure to manage ICT accessibility risks may affect service delivery, public trust, workforce productivity, and legal compliance.

For example, a nonconformant web page at the project level may require rework, delay deployment, and increase costs. However, if that same nonconformant page is the primary portal accessing critical health information, the consequences may escalate to enterprise-level risks, including formal complaints, civil rights violations, reputational harm, or litigation. A single accessibility failure can therefore generate risks at multiple levels, each with different likelihoods, impacts, and mitigation strategies.

Using the ERM Framework, those assessing ICT accessibility risks should determine the context, identify the risks, and then analyze identified risks at the project, program and enterprise levels. Using the risk matrix and the defined risk factors in this article, organizations can assess the potential impact and likelihood of risks to effectively address and mitigate risks.

### Assessing Risk
Risk assessment frameworks commonly evaluate two primary dimensions: likelihood and consequence (or impact). A risk represents the possibility of an event occurring in the future. Once it occurs it becomes an issue requiring resolution. Agencies should assess both the probability that an accessibility failure will occur and the severity of its consequences if it does.  Table 1 shows an example of a standard Likelihood-Consequence risk model. 

<figure class="usa-table-container--scrollable" role="region" aria-labelledby="table-4-caption" tabindex="0">
  <table id="table-4" class="usa-table usa-table--borderless">
    <caption>Table 1: Standard accessibility risk matrix</caption>
    <thead>
      <tr>
        <th scope="col" aria-label="blank">Likelihood/Frequency</th>
        <th scope="col" class="center">Negligible Consequence</th>
        <th scope="col" class="center">Minor Consequence</th>
        <th scope="col" class="center">Moderate Consequence</th>
        <th scope="col" class="center">Significant Consequence</th>
        <th scope="col" class="center">Severe Consequence</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Very Likely/Very Often</th>
        <td class="bg-risk-5">Low</td>
        <td class="bg-risk-4">Moderate</td>
        <td class="bg-risk-2">Very High</td>
        <td class="bg-risk-1">Critical</td>
        <td class="bg-risk-1">Critical</td>
      </tr>
      <tr>
        <th scope="row">Likely/Often</th>
        <td class="bg-risk-6">Very Low</td>
        <td class="bg-risk-4">Moderate</td>
        <td class="bg-risk-3">High</td>
        <td class="bg-risk-2">Very High</td>
        <td class="bg-risk-1">Critical</td>
      </tr>
      <tr>
        <th scope="row">Possible/Sometimes</th>
        <td class="bg-risk-6">Very Low</td>
        <td class="bg-risk-5">Low</td>
        <td class="bg-risk-4">Moderate</td>
        <td class="bg-risk-3">High</td>
        <td class="bg-risk-2">Very High</td>
      </tr>
      <tr>
        <th scope="row">Unlikely/Occasionally</th>
        <td class="bg-risk-6">Very Low</td>
        <td class="bg-risk-5">Low</td>
        <td class="bg-risk-5">Low</td>
        <td class="bg-risk-3">High</td>
        <td class="bg-risk-3">High</td>
      </tr>
      <tr>
        <th scope="row">Very Unlikely/Almost Never</th>
        <td class="bg-risk-6">Very Low</td>
        <td class="bg-risk-6">Very Low</td>
        <td class="bg-risk-5">Low</td>
        <td class="bg-risk-4">Moderate</td>
        <td class="bg-risk-4">Moderate</td>
      </tr>
    </tbody>
  </table>
</figure>

In this risk matrix, the likelihood/frequency increases along the vertical axis from bottom to top, while the consequence (or magnitude of impact) increases along the horizontal axis from left to right. General definitions for the risk ratings are below:

<table id="table-1" class="usa-table usa-table--borderless striped"> 
<caption>Table 2: Risk rating definitions</caption>
   <tr>
    <th>Rating</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Critical</td>
    <td>Significant risk that should be addressed directly; could result in very significant issues for the organization; requires immediate attention.</td>
  </tr>
    <tr>
    <td>Very High</td>
    <td>Significant risk that should be addressed soon; could result in significant issues for the organization; requires relatively immediate attention.</td>
  </tr>
  <tr>
    <td>High</td>
    <td>Risk that should be addressed soon; could result in issues for the organization; requires attention within approximately 3 months.</td>
  </tr>
  <tr>
    <td>Moderate</td>
    <td>Risk that should be addressed; could result in issues for the organization; requires regular monitoring or should ideally be addressed within the next 6 months.</td>
  </tr>
  <tr>
    <td>Low</td>
    <td>Low priority risk that could be addressed; likely will not impact the agency significantly if not addressed; regular monitoring suggested.</td>
  </tr>
  <tr>
    <td>Very Low</td>
    <td>Low priority risk or no real risk exists in this instance; no real impact to the agency is considered likely; suggested monitoring on an as needed basis.</td>
  </tr>
</table>  

### Enterprise Level Risk
Enterprise-level risks affect the agency’s strategic objectives, public trust, compliance posture, or mission delivery. These risks often emerge when systemic accessibility weaknesses persist across programs or throughout the ICT lifecycle.

Accessibility risks vary across lifecycle stages. Early detection during acquisition or development reduces remediation costs and exposure. Failures discovered post-deployment may result in complaints, operational disruption, or litigation.

Enterprise-level risks typically involve broader consequences and require coordinated mitigation across multiple offices, stakeholders, and leadership levels.

### Program and Project-Level Risk
Program and project-level risks are tactical and execution focused. These risks typically affect cost, schedule, deliverables, or user experience within a defined scope. If not addressed, however, they may escalate into enterprise-level risks.  Effective risk management at the program level reduces the likelihood of broader organizational consequences.

The Government-wide IT Accessibility Program has created a resource list of <a href="{{ site.baseurl }}/assets/files/example-accessibility-risk-factors.xlsx" download="Example Accessibility Risk Factors.xlsx" target="_blank" class="usa-link--external">example program and project accessibility risk factors (XLSX)</a> to help determine the likelihood and consequence of a potential risk, or risk parameters. 

## Addressing the Risk
Most agencies have resources that discuss risks and how to address them, though the concepts they contain will likely have to be adapted to ICT accessibility as they are unlikely to be strictly created for these types of risks.  Agencies should apply established resk response strategies to ICT accessibility risks. Common risk response options include:

<ul>
  <li><strong>Acceptance: </strong>Acknowledge the risk within defined tolerance levels and document the rationale.</li>
  <li><strong>Avoidance: </strong>Eliminate the activity or condition that generates the risk.</li>
  <li><strong>Reduction (Mitigation): </strong>Implement controls to decrease the likelihood or consequences.</li>
  <li><strong>Sharing (Transfer): </strong>Allocate portions of the risk through shared governance structures to help lower or distribute the risk burden.</li>
</ul>

After developing alternatives with the risk response options, users must implement these mitigation actions and then monitor the risks to ensure their potential effects or likelihood continue to be mitigated as much as possible. 

Additionally, designated individuals or teams must consistently monitor their program and project risks. Agency leadership, including the CIO and other executive officials, should periodically review enterprise-level accessibility risks as part of strategic risk governance processes.

## Assess Risk At Your Agency
Use the risk matrix above and <a href="{{ site.baseurl }}/assets/files/accessibility-risk-input-template.xlsx" download="Accessibility Risk Input Template.xlsx" target="_blank" class="usa-link--external">the accessibility risk input template (XLSX)</a> to input, assess, and track risks and risk mitigations. Additionally, refer to <a href="{{ site.baseurl }}/assets/files/example-risk-list.xlsx" download="Example Risk List.xlsx" target="_blank" class="usa-link--external">the example risk list and risk mitigation document (XLSX)</a> to inspire your identification of acceptable risks within your organization.

Contact the Government-wide IT Accessibility Program team for more information and assistance with determining accessibility risk at <section.508@gsa.gov>.

## Downloads
* <a href="{{ site.baseurl }}/assets/files/accessibility-risk-input-template.xlsx" download="Accessibility Risk Input Template.xlsx" target="_blank" class="usa-link--external">Accessibility risk input template (XLSX)</a>
* <a href="{{ site.baseurl }}/assets/files/example-accessibility-risk-factors.xlsx" download="Example Accessibility Risk Factors.xlsx" target="_blank" class="usa-link--external">Example accessibility risk factors (XLSX)</a>
* <a href="{{ site.baseurl }}/assets/files/example-risk-list.xlsx" target="_blank" download="Example Risk List.xlsx" class="usa-link--external">Example risk list (XLSX)</a>

**Reviewed/Updated:** February 2026



