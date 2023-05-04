---
layout: page
sidenav: true
permalink: sell/how-to-create-acr-with-vpat/
type: acquisition
title: 'How to Create an Accessibility Conformance Report Using A Voluntary Product Accessibility Template (VPAT&reg;)'
contributors: haileselassie, sirk, nasa
description: Instructs users about how to develop an Accessibility Conformance Report (ACR) using a Voluntary Product Accessibility Template (VPAT&reg;)
---

This page is intended to instruct users on how to develop an Accessibility Conformance Report (ACR) using a Voluntary Product Accessibility Template (VPAT&reg;). This information was adapted from NASA's [Demystifying Section 508: An Industry Guide to Understanding Section 508 of the Rehabilitation Act][6]. For more information on ACRs and VPATs<sup>&trade;</sup> visit the Acquisition section of Section508.gov.

The ACR is a representation of how the product meets the applicable Section 508 Technical Standards. The product owner/developer must first test the product against those standards in order to complete an ACR. Currently, the most common way an ACR is completed is by using the (VPAT&reg; template created by the IT Industry Council (ITI).

Although there are other possible methods to complete an ACR, this part of the guide will walk you through how to complete an ACR using the VPAT&reg;.

## Step 1: Download the VPAT&reg;
<div class="grid-container padding-x-0">
  <div class="grid-row grid-gap">
    <div class="tablet:grid-col">The VPAT&reg; is a free template that may be downloaded by going to the <a href="https://www.itic.org/policy/accessibility/vpat">ITI website</a>. If you are selling to the U.S. federal government, then you must use the Revised Section 508 or the INT International Editions of the template  (which include all Revised Section 508 requirements).</div>
    <div class="tablet:grid-col" style="text-align: center">
        <div class="margin-top-1"><img src="https://assets.section508.gov/files/vpat-snapshot.png" alt="ITI's VPAT" aria-describedby="vpat_snapshot" class="border-2px border-base-light shadow-2 padding-1"></div>
        <div class="font-mono-3xs margin-y-1"><span id="vpat_snapshot">Snapshot of ITI VPAT&reg; Homepage</span></div>
    </div>
  </div>
</div>

## Step 2: Complete the Accessibility Conformance Report (ACR) Title Page
<div class="grid-container padding-x-0">
  <div class="grid-row grid-gap">
    <div class="tablet:grid-col">The VPAT&reg; begins with several pages of instructions. Please read all of the instructions carefully, but remove the instruction pages when you submit your final ACR.
    <ul>
      <li>Company name</li>
      <li>Name of your product (and version number, if applicable)</li>
      <li>Report date (month and year)</li>
      <li>Description of the product</li>
      <li>Contact information</li>
      <li>Additional notes (if any)</li>
      <li>Evaluation methods: Information about how your product was tested (manual, automated, both), testing tools used, etc.</li>
    </ul>
    </div>
    <div class="tablet:grid-col" style="text-align: center">
        <div class="margin-top-1"><img src="https://assets.section508.gov/files/acr-coverpage-snapshot.png" alt="VPAT 2.4" aria-describedby="acr_cover_snapshot" class="border-2px border-base-light shadow-2 padding-1"></div>
        <div class="font-mono-3xs margin-y-1"><span id="acr_cover_snapshot">Snapshot of Page 10 of VPAT&reg; v2.4</span></div>
    </div>
  </div>
</div>

Find the page with the heading, “[Company] Accessibility Conformance Report Revised Section 508 Edition”. As noted in the ITI VPAT&reg; training videos, the following information must be provided:

## Step 3: Understand the three columns of the VPAT&reg; tables
### First column: “Criteria”
The first column of the tables states the criteria to be covered by that particular row.

### Second column: “Conformance Level”
The second column of each table is labeled “Conformance Level.” We will cover the nuances between different tables below.

For the category or categories which encompass the product, you must use one of four phrases—supports, partially supports, does not support, not applicable— to describe the level of conformance.
* **Supports:** The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
* **Partially Supports:** Some functionality of the product does not meet the criterion.
* **Does Not Support:** The majority of product functionality does not meet the criterion.
* **Not Applicable:** The criterion is not relevant to the product.

**Note: The “not evaluated” phrase may only be used for the Level AAA table since this is the only success criteria table that is not required to be completed.**

### Third column: “Remarks and Explanations”
The third column is reserved for remarks, which are required if the product either **partially supports** or **does not support** the guideline. If the product **supports** a particular guideline, then remarks are encouraged, but not required. 

## Step 4: Complete Table 1: Success Criteria Level A and Table 2: Success Criteria Level AA, if applicable ##
If your product fits one or more of the following categories, then the WCAG 2.0 Standards apply to your product:
* Web Content
* Electronic Documents
* Software
* Authoring Tool

If your product does not fall under any of these four categories, you may write “Not Applicable” in the notes section for the Success Criteria tables.

The Success Criteria tables laid out in the VPAT&reg; template—Levels A, AA, and AAA—cover the WCAG success criteria (e.g., page 12 of VPAT&reg; 2.4Rev508).

Only Level A and AA are required in an ACR intended to inform U.S. federal procurement. However, if your product does satisfy some (or all) Level AAA success criteria guidelines, then it is beneficial to complete that table as well, as it would provide additional motivation for federal agencies to purchase your product and attract a wider range of potential customers.
Below is an example of what these three columns look like for the WCAG table:
<table class="usa-table">
  <caption>Three columns of VPAT&reg; WCAG table</caption>
    <thead>
        <tr>
            <th scope="col">Crietria</th>
            <th scope="col">Conformance Level</th>
            <th scope="col">Remarks and Explanations</th>
        </tr>
    </thead>
    <tr>
        <td>
            <a href="http://www.w3.org/TR/WCAG20/#text-equiv-all">1.1.1 Non-text Content</a> (Level A)<br>
                Also applies to:<br>
                Revised Section 508<br>
            <ul>
                <li>501 (Web)(Software)</li>
                <li>504.2 (Authoring Tool)</li>
                <li>602.3 (Support Docs)</li>
            </ul>
        </td>
        <td>
            Web: <br>
            Electronic Docs: <br>
            Software: <br>
            Closed: <br>
            Authoring Tool: <br>
        </td>
        <td>
            Web: <br>
            Electronic Docs: <br>
            Software: <br>
            Closed: <br>
            Authoring Tool: <br>
        </td>
    </tr>
</table>

## Step 5: Determine the applicability of the Revised Section 508 Technical Standards to your product
There are four Revised Section 508 tables, labeled as Chapter 3 (Functional Performance Criteria), Chapter 4 (Hardware), Chapter 5 (Software), and Chapter 6 (Support Documentation and Services). Complete the applicable tables.

If there are functions in your product not addressed by Chapters 4 or 5, then your product needs to conform to the criteria in Chapter 3: Functional Performance Criteria. Answer the following questions in order to determine which chapters to complete:
* **Does your product contain hardware?**
  * Complete Chapter 4: Hardware.
* **Does your product contain non-web software?**
  * Complete Chapter 5: Software.
* **Does your product contain support documentation and services?**
  * Complete Chapter 6: Support Documentation and Services.
* **If your product cannot be evaluated using the current criteria:**
  * Complete Chapter 3: Functional Performance Criteria.

For each table, there is a section for notes. Use this field to enter comments about overall applicability of the table to your product.

The first column "Criteria" of the Revised Section 508 tables lists the Section 508 Technical Standards. By selecting the links provided in this column, you may access more information about the standards on the U.S. Access Board’s website.

Below is an example of what these three columns look like for the Revised Section 508 table

<table class="usa-table">
<caption>Three columns of VPAT&reg; Revised Section 508 table</caption>
  <thead>
    <tr>
      <th scope="col">Criteria</th>
      <th scope="col">Conformance Level</th>
      <th scope="col">Remarks and Explanations</th>
    </tr>
  </thead>
  <tr>
    <td><strong><em><a href="https://www.access-board.gov/ict/#402-closed-functionality">402 Closed Functionality</a></em></strong></td>
    <td>Heading cell - no response required</td>
    <td>Heading cell - no response required</td>
  </tr>
  <tr>
    <td><strong><em>402.1 General</em></strong></td>
    <td>Heading cell - no response required</td>
    <td>Heading cell - no response required</td>
  </tr>
  <tr>
    <td><strong><em>402.2 Speech-Output Enabled</em></strong></td>
    <td>Heading cell - no response required</td>
    <td>Heading cell - no response required</td>
  </tr>
  <tr>
    <td>402.2.1 Information Displayed On-Screen</td>
    <td></td>
    <td></td>
  </tr>
   <tr>
    <td>402.2.2 Transactional Outputs</td>
    <td></td>
    <td></td>
  </tr>
   <tr>
    <td>402.2.3 Speech Delivery Type and Coordination</td>
    <td></td>
    <td></td>
  </tr>
   <tr>
    <td>402.2.4 User Control</td>
    <td></td>
    <td></td>
  </tr>
   <tr>
    <td>402.2.5 Braille Instructions</td>
    <td></td>
    <td></td>
  </tr>
</table>

## Step 6: Final checklist to make sure your ACR is complete
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Use the correct VPAT&reg; version -</strong> Make sure you’re using a current version of the VPAT&reg; to build your ACR! A current version addresses the Revised Section 508 Technical Standards. The current version of theVPAT&reg; is 2.4. Any VPAT&reg; 2.x is acceptable. You may find the VPAT&reg; on the ITI website at the following link: <a href="https://www.itic.org/policy/accessibility/vpat">https://www.itic.org/policy/accessibility/vpat</a>.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Exclude the first several pages of instructions -</strong> Delete the instruction pages (up to the heading, “[Company] Accessibility Conformance Report Revised Section 508 Edition”) from your completed ACR.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Complete the information fields at the top of the ACR -</strong> Make sure you complete all seven fields (shown in Step 2 above), including the product information, contact information, and evaluation methods.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Complete the Success Criteria, Level A and Level AA tables (if applicable) -</strong> If your product contains web-based content, electronic documents, software, or authoring tools, make sure you complete the Level A and Level AA tables.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Complete the Chapter 3: Functional Performance Criteria table (if applicable) -</strong> If your product does not contain any applicable standards from the Level A and AA tables, then complete the Chapter 3: Functional Performance Criteria table.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Skip the Level AAA tables -</strong> Section 508 does not require that your product be tested against the Level AAA Technical Standards. However, industry may provide this information to show a higher level of accessibility than required.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Complete the tables under the Revised Section 508 Report section (if applicable) -</strong> If your product contains hardware, software, or support documentation and services, be sure to complete the applicable Revised Section 508 table.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Use the correct phrases to describe conformance levels -</strong> Check to see if all phrases under conformance level match one of the following: Supports, Partially Supports, Does Not Support, Not Applicable.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Complete the remarks column -</strong> If the conformance level is either “Partially Supports” or “Does Not Support,” then be sure that you explain further in the respective remarks column.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Ensure your ACR document is accessible -</strong> Make sure to check your final ACR for accessibility and remediate as necessary.
    </div>
  </li>
</ul>

**Reviewed/Updated**:  November 2022

 [1]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule
 [2]: https://www.itic.org/policy/accessibility/vpat
 [3]: {{site.baseurl}}/sell
 [4]: {{site.baseurl}}/buy/request-accessibility-information
 [5]: {{site.baseurl}}/acquisition
 [6]: https://www.sewp.nasa.gov/documents/Section_508_Guide_111821.pdf
 