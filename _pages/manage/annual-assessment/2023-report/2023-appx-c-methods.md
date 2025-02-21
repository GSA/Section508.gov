---
layout: page
sidenav: true
permalink: manage/section-508-assessment/2023/appendix-c-methods/
type: report2023
title: "Appendix C: Methods"
topic: "Law (law)"
sub-topic: "Reporting"
audience:
- "508 Program Manager (508pm)"
- "Agency Head (head)"
- "Public (public)"
- "Lawmakers and Policy Officials (law-policy)"
- "Federal employee (fedemp)"
resource-type: "White paper"
format: "HTML (html)"
---
## Overview

The methods outlined in this section are the result of detailed discussions and activities between GSA, OMB, and Access Board. We identified primary research questions, transformed these into testable hypotheses, and devised an analysis plan to answer these hypotheses. Through this systematic and collaborative approach, we aimed to provide robust insights into Section 508 compliance across federal reporting entities and to use these insights to further advance ICT accessibility for federal employees, federal contractors, and the American public.

## Development and Dissemination of Assessment Criteria
OMB and GSA collaborated with Access Board and OSTP to refine the original pool of 150 criteria into a final, more targeted set of 105 Assessment criteria across 11 dimensions. See [Table C1](#table-c1) for a description of the 11 Assessment dimensions. We collectively determined the selected criteria best represented the current state of Section 508 compliance across the federal government and, through the establishment of a new baseline, presented an opportunity to analyze trends in future years. While some criteria were informed by the previous <a href="https://www.justice.gov/crt/page/file/1569331/download" target="_blank">Section 508 Report to the President and Congress: Accessibility of the Federal Electronic and Information Technology</a>, none were lifted verbatim. To help ascertain Section 508 Program maturity based on typical reporting entity practices, the team consulted four maturity models for the nine middle dimensions (i.e., those excluding General Information and Conformance Metrics):

* [Intelligence Community IT Accessibility Program Maturity Model (PPTX)](https://assets.section508.gov/assets/files/iaaf/Accessibility%20Maturity%20Models%20-%20IAAF%202022.pptx)

* World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI) <a href="https://www.w3.org/TR/maturity-model/" target="_blank">W3C Accessibility Maturity Model</a>

* United Kingdom (UK) Business Disability Forum <a href="https://businessdisabilityforum.org.uk/knowledge-hub/resources/tech-taskforce-accessibility-maturity-model/" target="_blank">Accessibility Maturity Model Scorecard</a>

* National Association of State Chief Information Officers (NASCIO) <a href="https://www.nascio.org/wp-content/uploads/2019/11/NASCIO_-Accessability_In_IT_Procurment_Part_2a.pdf" target="_blank">Policy-Driven Adoption for Accessibility (PDF)</a> Core Criteria

<table id="table-c1" class="usa-table usa-table--borderless striped">
<caption>Table C1. Description of Assessment dimensions</caption>
<thead>
    <tr>
        <th scope="col">Dimension</th>
        <th scope="col">Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">General Information</th>
        <td>Information and metrics related to the reporting entity Section 508 Program (or equivalent) activities.</td>
    </tr>
    <tr>
        <th scope="row">IT Accessibility Program Office</th>
        <td>Reporting entity’s program management, reporting, benchmarking, risk management, continuous process improvement, and other business-related functions that align to the development, implementation, and maintenance of the reporting entity’s Section 508 Program or equivalent</td>
    </tr>
    <tr>
        <th scope="row">Policies, Procedures, and Standards</th>
        <td>Reporting entity’s development, implementation, and continuous improvement of ICT accessibility-related policies, procedures, directives and standards and the inclusion of digital accessibility into relevant policies across all business functions of the reporting entity</td>
    </tr>
    <tr>
        <th scope="row">Communications</th>
        <td>Reporting entity’s internal and external communication accessibility considerations</td>
    </tr>
    <tr>
        <th scope="row">Content Creation</th>
        <td>Reporting entity’s development, testing, remediation, and conformance tracking of digital content, including but not limited to documents, presentations, PDFs, spreadsheets, audio, video, multimedia, social media, and digital forms</td>
    </tr>
    <tr>
        <th scope="row">Human Capital, Culture, and Leadership</th>
        <td>Reporting entity’s leadership and professional development, and how ICT accessibility is integrated into mission-related strategic planning</td>
    </tr>
    <tr>
        <th scope="row">Technology Lifecycle Activities</th>
        <td>Reporting entity’s level of inclusion of accessibility in the technology lifecycle to include design, development, operation, and maintenance of ICT</td>
    </tr>
    <tr>
        <th scope="row">Testing and Validation</th>
        <td>Reporting entity’s level of inclusion of ICT accessibility in the testing and evaluation of reporting entity’s products and services, including processes, tools, templates, best practices and guidance</td>
    </tr>
    <tr>
        <th scope="row">Acquisition and Procurement</th>
        <td>Reporting entity’s level of inclusion of ICT accessibility in procurement lifecycle processes</td>
    </tr>
    <tr>
        <th scope="row">Training</th>
        <td>Reporting entity’s development, use, and tracking of ICT accessibility related training</td>
    </tr>
    <tr>
        <th scope="row">Conformance Metrics </th>
        <td>Specific data points and outcomes related to measuring reporting entity’s program inclusion of ICT accessibility and conformance to the ICT Standards and Guidelines</td>
    </tr>
</tbody>
</table>

OMB broadly distributed instructions and 105 Assessment criteria to agencies who may be subject to Section 508 on April 7, 2023, pursuant to the <a href="https://www.congress.gov/bill/117th-congress/house-bill/2617" target="_blank">Consolidated Appropriations Act, 2023</a>. OMB distributed these to heads of agencies, agency CIOs, and Section 508 PMs. Additionally, [instructions and criteria](https://www.section508.gov/manage/section-508-assessment/) were also posted the same day on Section508.gov. Responding entities designated points of contact and coordinated with OMB to define how they would report by organizational unit or “reporting entity,” individually or as a component of a larger parent agency. GSA referenced and maintained, at the direction of OMB, a list of reporting entities and information for the reporting entity points of contact. The reporting entity designated point of contact then received access to GSA’s reporting tool. As such, the designation of reporting entity may not align with the standard use of agency commonly used across government.

## Data Collection
In the data collection phase, GSA and OMB used a response tool for federal reporting entities to submit their responses to the Assessment criteria. Responses established a baseline understanding for the Section 508 landscape across reporting entities. Reporting entities were required to use a reporting entity-specific link provided by GSA to submit their data within the six-week reporting submission window. The data was then subjected to quality testing and validation before beginning analysis. The quality testing primarily consisted of checks to detect statistical anomalies and logical inconsistencies. Publicly available datasets on reporting entity size from <a href="https://www.fedscope.opm.gov/" target="_blank">Fedscope OPM</a> supplemented reporting entity data collected through the response tool.

## Data Validation
GSA developed a script to systematically validate reporting entity data by criteria. Most of the data validation tests function as conditional if-then logic, and rely on interconnections between different responses for this logic. When validation tests detected inconsistencies across a given reporting entity’s data submission, it triggered a flag. <strong>Importantly, while GSA categorized and tabulated inconsistencies, it altered no data for the purpose of the analysis. Refer to the Data Validation for FY23’s Annual Assessment document for a summary of validation tests alongside validation script.</strong>

## Descriptive Analysis
We conducted a descriptive study of the data, akin to an inventory or initial exploration, to provide a holistic view of reporting entity data and determine key patterns and trends. We examined averages, frequency distributions, and other essential statistical parameters for each criteria, paying close attention to core areas that directly tie into our research questions. Two areas, reporting entity “business function maturity” and “operational conformance” (i.e., reporting entity conformance to the applicable requirements in the <a href="https://www.access-board.gov/ict/" target="_blank">ICT Standards and Guidelines</a>), emerged as key perspectives and points of interest during our discussions.

First, we created an index to assess reporting entity business function maturity (m-index). This index quantified reporting entity responses to criteria across 9 dimensions: IT Accessibility Program Office; Policies, Procedures, and Standards; Communications; Content Creation; Human Capital, Culture, and Leadership; Technology Lifecycle Activities; Testing and Validation; Acquisition and Procurement; and Training. The m-index encompassed Questions 22 to 61 except Q27B (See <a href="https://assets.section508.gov/assets/files/assessment/2023/FY23%20Governmentwide%20Section%20508%20Assessment%20Data%20Dictionary%20Excel.xlsx">FY23 Data Dictionary (XLSX)</a>), and all were multiple choice format, equally weighted, and scored as follows:

* a) = 0; signifying very low

* b) = 1; signifying low

* c) = 2; signifying moderate

* d) = 3; signifying high

* e) = 4; signifying very high


Furthermore, a selection of “Unknown” received a 0, and a selection of “Not applicable or N/A” received a 4. For a few criteria (Q24, Q30, and Q44) (See <a href="https://assets.section508.gov/assets/files/assessment/2023/FY23%20Governmentwide%20Section%20508%20Assessment%20Data%20Dictionary%20Excel.xlsx">FY23 Data Dictionary (XLSX)</a>), (f) = 4 also signifies Very High. We considered that argument and understood that scoring N/A as a “4” could inflate a reporting entity score for a dimension, but we nonetheless chose this so that all reporting entities had an equal number of questions to score (the denominator would be the same for each reporting entity) and no reporting entity was penalized with a low score for N/A (i.e., things that do not apply to them).

Second, we created an operational conformance (referred to as “conformance” or “c-index”) index to assess how well reporting entities performed per Section 508 requirements. Thus, this index quantified select reporting entity responses to 16 specific criteria in the Conformance section of criteria that directly relate to quantifiable compliance outcomes and included: Q61, Q79, Q71, Q78, Q80 to Q85, and Q87 to Q92 (See <a href="https://assets.section508.gov/assets/files/assessment/2023/FY23%20Governmentwide%20Section%20508%20Assessment%20Data%20Dictionary%20Excel.xlsx">FY23 Data Dictionary (XLSX)</a>).  They were assigned numerical values and weighted as shown in [Table C2](#table-c2).

<table id="table-c2" class="usa-table usa-table--borderless striped">
<caption>Table C2. Topics, Conversion Approaches, and Weights of Conformance Criteria (See <a href="https://assets.section508.gov/assets/files/assessment/2023/FY23%20Governmentwide%20Section%20508%20Assessment%20Data%20Dictionary%20Excel.xlsx">FY23 Data Dictionary (XLSX)</a>)</caption>
<thead>
    <tr>
        <th scope="col">Topic</th>
        <th scope="col">Criteria</th>
        <th scope="col">Conversion Approach</th>
        <th scope="col">Weight</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">Internet</th>
        <td>Q61</td>
        <td>Provided as a percentage by reporting entity; no conversion needed</td>
        <td>12.50%</td>
    </tr>
    <tr>
        <th scope="row">Internet</th>
        <td>Q79</td>
        <td>Converted the number of fully conformant public internet web pages into a percentage of the total public internet web pages the reporting entity specified</td>
        <td>12.50%</td>
    </tr>
    <tr>
        <th scope="row">Intranet</th>
        <td>Q71</td>
        <td>Provided as a percentage by reporting entity; no conversion needed</td>
        <td>12.50%</td>
    </tr>
    <tr>
        <th scope="row">Intranet</th>
        <td>Q78</td>
        <td>Converted the number of fully conformant internal intranet web pages into a percentage of the total internal intranet web pages the reporting entity specified</td>
        <td>12.50%</td>
    </tr>  
    <tr>
        <th scope="row">Documents</th>
        <td>Q80</td>
        <td>Converted the number of fully conformant electronic documents into a percentage of the total electronic documents the reporting entity specified</td>
        <td>12.50%</td>
    </tr>
    <tr>
        <th scope="row">Videos</th>
        <td>Q81</td>
        <td>Converted the number of fully conformant videos into a percentage of the total videos the reporting entity specified</td>
        <td>12.50%</td>
    </tr>
    <tr>
        <th scope="row">Miscellaneous</th>
        <td>Q82 to Q86, Q88 to Q92</td>
        <td>
            <ul>
                <li>Yes = 1</li>
                <li>N/A = 1</li>
                <li>Yes with exceptions = 0.5</li>
                <li>No = 0</li>
                <li>Unknown = 0</li>
            </ul>
        </td>
        <td>2.50% each</td>
    </tr>
</tbody>
</table>

The internet and intranet are essential and increasingly important mediums for digital commerce, communication and collaboration across the federal government. Additionally, web testing methodologies and tools are much more mature than other ICT types, as noted by the number of web pages that reporting entities regularly test. In the development of the c-index, we placed slightly more emphasis on these areas relative to documents, videos, and other covered ICT. Access Board and GSA are driving initiatives to develop best practices and guidance to standardize testing for other ICT, including software, hardware, and electronic documents. As reporting entities adopt and implement these standardized testing methodologies, GSA will work with OMB and Access Board to modify Assessment criteria to more consistently evaluate ICT conformance, and we intend to adjust the c-index to incorporate expanded measurement of other types of ICT in addition to web content.

By converting and totaling reporting entity-specific responses to each criteria listed above, we determined a reporting entity-specific value for the m-index and c-index. Importantly, the c-index was rescaled by a factor of 4 to equal the scale of the m-index.

## Correlative Analysis

Using the descriptive analysis of reporting entity data, we next discovered cause-and-effect relationships between different variables to determine if specific factors, identified during our discussions, led to greater compliance with Section 508 requirements. We considered both independent variables – factors we suspect might cause changes – and dependent variables – the factors we expect to change due to the independent variables.

To ensure a comprehensive understanding of these relationships, we also incorporated control variables into the analysis. These are factors that remain constant throughout the reporting period and might influence the analysis but are not the primary focus.

## Regression Analysis
Regression analysis describes a way to understand how different variables relate to each other. Linear regression refers to a type of regression analysis that allows us to study the relationship between a predictor (independent variable) and an outcome (dependent variable). With this approach, we can calculate the strength and direction – positive or negative – of such a relationship, the chance that the relationship is not just a coincidence, and the extent to which an independent variable explains variation in the dependent variable. To gain relational insights into federal data sets, regression was recently used in federal reports such as:

* GAO report to Congress, "<a href="https://www.gao.gov/products/gao-22-103910" target="_blank">Evidence-Based Policymaking: Survey Results Suggest Increased Use of Performance Information Across the Federal Government</a>"

* Department of Health and Human Services (HHS) Office of the Assistant Secretary for Planning and Evaluation (ASPE) report to Congress, "<a href="https://aspe.hhs.gov/sites/default/files/migrated_legacy_files/195191/Second-IMPACT-SES-Report-to-Congress.pdf" target="_blank">Social Risk Factors and Performance in Medicare's Value-Based Purchasing Program</a>"

* Centers for Medicare and Medicaid (CMS) report to Congress, "<a href="https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/HomeHealthPPS/Downloads/HH-Report-to-Congress.pdf" target="_blank">Medicare Home Health Study: An Investigation on Access to Care and Payment for Vulnerable Patient Populations</a>" 

Multivariable linear regression can explain how two or more independent variables affect a single dependent variable. In the Assessment, we conducted simple linear and multivariable linear regressions to understand how different variables within a reporting entity relate to one another to influence that reporting entity’s Section 508 compliance. Variables corresponded directly from criteria (See <a href="https://assets.section508.gov/assets/files/assessment/2023/FY23%20Governmentwide%20Section%20508%20Assessment%20Data%20Dictionary%20Excel.xlsx">FY23 Data Dictionary (XLSX)</a>), and included but were not limited to the following:

* Hours a Section 508 PM spends working on the reporting entity’s Section 508 Program every week (Q3)

* Status of the reporting entity’s Section 508 Program (Q22)

* Extent of resources available for the Section 508 Program (Q26)

* Maturity of process for dealing with complaints about Section 508 issue (Q29)

* Extent of Section 508 awareness training for employees (Q59)

* Extent of ICT accessibility-related training for employees (Q60)

* Proportion of top 10 internal internet pages that are fully conformant (Q78)

* Proportion of top 10 publicly available internet pages that are fully conformant (Q79)

* Proportion of top 10 publicly available electronic documents that are fully conformant (Q80)

* Proportion of top 5 publicly available videos that are fully conformant (Q81)

To examine the strength of these associations, we developed 42 regression equations to weigh the importance of each variable in determining the extent of a given reporting entity’s Section 508 compliance.<sup><a href="#fn38" id="fr38">38</a></sup> The regression equations summarized how these different variables within a reporting entity relate to that reporting entity’s level of compliance with Section 508 requirements. They clarified what drove reporting entity Section 508 compliance and where there might be opportunities for improvement. Four analyses (hypotheses) emerged as noteworthy which are described in detail in Findings under [Conformance Relationships: Regression Deep Dive]({{site.baseurl}}/manage/section-508-assessment/2023/findings/testing-lifecycle/#conformance-relationships-regression-deep-dive).

A typical multivariable linear regression equation took the following form:

Dependent Variable = β0 + β1(Independent Variable 1) + β2(Independent Variable 2) +...+ ε Where:

* Dependent Variable = Outcome of interest

* β0 = Dependent Variable if all the Independent Variables are 0

* β1 and β2 = Coefficients. These are numbers we calculate from the data. They tell us how much the Dependent Variable changes when we increase the associated variable by one unit, while keeping all the other variables constant.
* Independent Variable 1 and Independent Variable 2 = Different factors that might affect the Dependent Variable

* ε = Error term. It accounts for other factors that might affect the Dependent Variable but is not included as a variable in our equation.

### P-Values and R2 Values

In addition to the regression coefficients, key values of interest were the p-values associated with each coefficient and coefficient of determination, denoted as R<sup>2</sup>, for a given regression equation.

The probability value (p-value) is the metric that allows us to assess whether the relationship between the independent and dependent variables is statistically significant. Statistical significance is determined by comparing the p-value of a coefficient against the threshold for statistical significance, most commonly 0.05, which indicates a 5% chance of rejecting a hypothesis when true. In statistical analysis, asterisks denote the level of significance associated with particular findings. One asterisk (*) signifies a moderate level of significance, typically with a p-value ranging between 0.05 and 0.1 (0.01 p-value > 0.05). It is a moderate indication that the observed relationship is meaningful and not just due to random chance. Progressing further, two asterisks (&ast;&ast;) indicate results that are reasonably significant, with a p-value between 0.01 and 0.05 (0.05 ≥ p-value). This is a stronger indication the findings are true and not just a result of randomness. Finally, three asterisks (&ast;&ast;&ast;) represent the highest level of significance, with a p-value of 0.01 or less (0.01 ≥ p-value). Three asterisks signify a very strong indication that the observed results are indeed meaningful and not due to chance.

The other value of interest is R<sup>2</sup>. R<sup>2</sup> refers to a statistical measure of how well a regression model fits a data set, also known as goodness of fit. It denotes the percentage of the variation in the outcome variable that is explained by your predictor variable(s). In other words, R<sup>2</sup> describes how much variation in the outcome variable can be attributed to the predictor variable(s). Thus, a high R<sup>2</sup> value means the regression model is a good fit for the data, and that your predictor variables are able to explain much of the variation in the outcome (dependent) variable.

Taken together, the best scenario in regression analysis is a p-value lower than the threshold for statistical significance (most commonly lower than 0.05) and a high R<sup>2</sup> value (typically above 0.75). In particular, while high R<sup>2</sup> values are certainly preferred, moderate R<sup>2</sup> values can still offer insight into real world data and complex dynamics such as those of reporting entity Section 508 Programs, especially when paired with a statistically significant p-value.

--- 

<div>
    <h2 style="position: absolute; clip: rect(0 0 0 0); visibility: hidden; opacity: 0;" id="footnote-label">Footnotes</h2>
    <ol start="38">
        <li id="fn38">Statistical significance refers to the probability that an observed effect of an independent variable on a dependent variable is not solely due to chance. <a href="#fr38" aria-label="Back to content">↩</a></li>
    </ol>
</div>

**Reviewed/Updated**: December 2023