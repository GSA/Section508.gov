---
layout: page
sidenav: true
type: acquisition
title: Section 508 Government ACR Supplement
title-alt: New Supplement to the ACR to help make procurement decisions
permalink: sell/acr-supplement
description: Learn about the Government Supplement to the Accessibility Conformance Report (ACR), including issue severity, user impact, scope, workarounds, and more.
audience:
- Buyers
- Chief Acquisition Officers (CAO)
- Contracting Officers (CO & COR)
- IT Accessibility Program Staff
- Procurement Analysts
- Risk Managers
- Section 508 Program Managers
- Section 508 Testers
topic:
- Buy
- Other
- Testing
subtopic:
- Acquisition Documentation
- ACR Production & Evaluation
- Requirements & Acceptance Criteria
- Solicitation Development
- Testing (Automated)
resource-type:
- ACR
- Template
format: HTML
created: 2026-08-25
updated:
---
The Issue Detail Supplement to the Accessibility Conformance Report (ACR) is a standardized companion document developed by the GSA Government-wide IT Accessibility Program to provide information beyond a traditional ACR. While ACRs document how a product conforms to applicable accessibility standards, the ACR Issue Detail Supplement provides additional product details needed by government agencies to better understand the severity and user impact of identified accessibility issues.

<div class="grid-col-12 summary-box--icon-code">
    <ul class="usa-icon-list padding-right-2 force-max-width">
        <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon"><svg class="usa-icon icon-size" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#code"></use></svg></div>
           <div class="usa-icon-list__content force-max-width">
                <div class="box-heading"><strong>Download</strong><hr></div>
                <div class="box-text">Download the <a href="https://www.section508.gov/~assets/files/issue-detail-acr-supplement-1.xlsx">ACR Issue Detail Supplement</a></div>
            </div>
        </li>
    </ul>
</div>

## Instructions for use

### For Buyers

Government acquisition professionals, project managers, and procurement policy officials can help improve the quality and usefulness of ACRs by including the ACR Issue Detail  Supplement in solicitations for ICT products and services. As a best practice, consider adding the ACR Issue Detail Supplement whenever a solicitation requires or requests an ACR or references a Voluntary Product Accessibility Template (VPAT). A link to this page should be provided in those requirements as reference. Consider adding the clause below, or some variation, when creating solicitations for ICT. As always, check against your agency deviation to ensure all required language is included.

<div class="callout-box-dual-violet margin-bottom-1">
    <h4>Recommended Clause</h4>
    <p>Section 508 Accessibility Requirements for Information and Communication Technology (ICT)</p>
    <p>The contractor shall test and validate Information and Communication Technology (ICT) for conformance to Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. 794d) in accordance with the required testing methods. The contractor must provide test results in the form of an Accessibility Conformance Report (ACR) that includes the information requested in the Issue Detail supplement defined and available at <a href="{{site.baseurl}}/sell/acr-supplement/">https://www.section508.gov/sell/acr-supplement</a>.</p>
    <p>For ICT developed, modified, or configured under this solicitation, the contractor must provide an Accessibility Conformance Report (ACR) plus Issue Detail supplement before acceptance.</p>
    <p>Before final acceptance of any ICT item, including updates and replacements, if the contracting officer determines that any furnished ICT item is not in compliance with the applicable Revised 508 Standards requirements, the contracting officer will promptly inform the submitting organization in writing of the noncompliance. The offeror must repair or replace the non-compliant products or services within the period specified by the contracting officer at no cost to the government.</p>
    <p>ICT must remain accessible throughout the contract period of performance, even as products and software are updated or modified."</p>
</div>

The information shared in the Issue Detail Supplement can be used by buyers to help determine what the "most accessible" product is in the evaluation of ICT prior to source selection. This information can also be used to help in the creation of a remediation plan prior to acceptance.

Buyers should:

- Add the ACR Issue Detail Supplement to Solicitation Requirements.
- Add the ACR Issue Detail Supplement anywhere an ACR is recommended or required.
- Link to this page and attach the file to any mention of ACRs and/or the supplement as a reference.
- Add the clause language above to any solicitations as a best practice.
- Use the Issue Detail Supplement in their evaluation of any ICT products or services.
- Use the Issue Detail Supplement in remediation planning.

### For Vendors

#### What Vendors Should Include in the ACR Issue Detail Supplement 

As a best practice, vendors can provide the ACR Issue Detail Supplement as an additional page in the same document as the full ACR (often created using a VPAT <span>&trade</span>) or add product, version, manufacturer, and point of contact information to the supplement if provided in a separate document.

<ol id="vendor-to-do" start="1">
  <li><strong>Indicate severity using one of the following:</strong>
    <ol id="vendor-1" start="a" type="a">
       <li>Critical Accessibility Barrier: A critical accessibility failure prevents people with disabilities from accessing or completing core functionality.
        <div class="grid-col-12 summary-box--left">
          Example: A lack of keyboard access to interactive elements.
        </div>
       </li>
       <li>Major Accessibility Issue: A significant accessibility issue substantially impairs access to important functionality, but users may still complete tasks through a workaround or alternate method. 
        <div class="grid-col-12 summary-box--left">
          Example: Link context cannot be programmatically determined. 
        </div>
      </li>
       <li>Minor Accessibility Issue: A minor accessibility issue causes usability challenges or partial barriers for some users but does not prevent completion of core tasks.
        <div class="grid-col-12 summary-box--left">
            Example: Non-critical images are missing alternative text
        </div>
      </li>
    </ol>
  </li>
  <li><strong>What area of the product is impacted?</strong> Describe the affected page, screen, component, or workflow(s) impacted. How extensive is the issue?
      <div class="grid-col-11 summary-box--left margin-bottom-2 margin-left-5">
          Example 1: Unable to use address form for entering mailing address in order to complete a purchase. 
      </div>
      <div class="grid-col-11 summary-box--left margin-left-5">
          Example 2: All form fields in the application are missing accessible labels.
      </div>
  </li>
  <li><strong>Impacted User Group (Dropdown)</strong>: Who does this impact? Identify the users, disability groups, or assistive technology users affected by the issue or defect. This should describe who experiences barriers, reduced usability, or loss of functionality as a result of the issue. 
      <ol id="vendor-3" start="a" type="a">
      <li>Insert all that apply: people without vision, with limited vision, without perception of color, without hearing, with limited hearing, without speech, with limited manipulation, with limited reach and strength, with limited language, cognitive, and learning abilities. 
        <div class="grid-col-12 summary-box--left">
          Example:  Without Vision, With Limited Vision 
        </div>
      </li>
    </ol>
  </li>
  <li><strong>What is the workaround?</strong> Describe any vendor-provided temporary alternative method, assistive technique, or substitute process that allows affected users to partially or fully complete the task despite the accessibility issue or defect. 
    <div class="grid-col-11 summary-box--left margin-left-5">
        Users may access the same information through an accessible PDF. 
    </div>
  </li>
</ol>

## Additional Resources
To learn more, start with these core resources.

* **Section 508 Standards**
    * <a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines" target="_blank" class="usa-link--external">Revised Section 508 Standards</a>
    * <a href="https://www.access-board.gov/ict/#302-functional-performance-criteria" target="_blank" class="usa-link--external">Functional Performance Criteria</a>
    * <a href="https://www.access-board.gov/ict/#E202-general-exceptions" target="_blank" class="usa-link--external">Section E202 General Exceptions</a>
    * <a href="https://www.access-board.gov/ict/#E202.7" target="_blank" class="usa-link--external">Section E202.7 Best Meets</a>
* **Laws and Regulations**
    * <a href="{{site.baseurl}}/manage/laws-and-policies/section-508-law/">Section 508 of the Rehabilitation Act of 1973, as amended</a>    
    * <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Information and Communication Technology (ICT) Standards and Guidelines</a>
    * <a href="https://www.access-board.gov/ict/#appendixA" target="_blank" class="usa-link--external">36 CFR Part 1194, Appendices A</a>
    * <a href="https://www.access-board.gov/ict/#appendix-c" target="_blank" class="usa-link--external">36 CFR Part 1194, Appendices C</a>
    * Federal Acquisition Regulation (FAR)
        * <a href="https://www.acquisition.gov/far/part-1#FAR_1_602_2" target="_blank" class="usa-link--external">Subpart 1.602-2 - Responsibilities</a>
        * <a href="https://www.acquisition.gov/far/part-1#FAR_1_603_3" target="_blank" class="usa-link--external">Subpart 1.603-3 Appointment</a>
        * <a href="https://www.acquisition.gov/far/part-2#FAR_Subpart_2_2" target="_blank" class="usa-link--external">Subpart 2.2 - Definitions Clause</a>
        * <a href="https://www.acquisition.gov/far/part-10" target="_blank" class="usa-link--external">Part 10 - Market Research</a>
        * <a href="https://www.acquisition.gov/far/part-13/" target="_blank" class="usa-link--external">Part 13 - Simplified Acquisition Procedures</a>
        * <a href="https://www.acquisition.gov/far/subpart-39.2" target="_blank" class="usa-link--external">Subpart 39.2 - Information and Communication Technology Information and Communication Technology</a>
* **Section 508.gov Resources**
    * Training Courses
        * <a href="{{site.baseurl}}/training/online-course/micro-purchases/">Micro-Purchases and Section 508 Requirements</a>
        * <a href="{{site.baseurl}}/training/online-course/procuring-section-508-conformant-ict/">Procuring Section 508 Conformant ICT Products and Services</a>
    * Tools
        * <a href="{{site.baseurl}}/buy/accessibility-requirements-tool">Accessibility Requirements Tool (ART)</a>
        * <a href="{{site.baseurl}}/tools/coordinator-listing">Find Your Section 508 Program Manager</a>
        * <a href="{{site.baseurl}}/sell/acr/">Accessibility Conformance Report (ACR)</a>
        * <a href="{{site.baseurl}}/buy/solicitation-review-tool/">Solicitation Review Tool (SRT)</a>
    * Resources
        * <a href="{{site.baseurl}}/buy">Buy Accessible Products and Services</a>
        * <a href="{{site.baseurl}}/buy#market">Buy Accessible Products and Services, Conduct Market Research</a>
        * <a href="{{site.baseurl}}/buy/determine-508-standards-exceptions">Determine Section 508 Standards and Exceptions</a>
        * <a href="{{site.baseurl}}/buy/request-accessibility-information">Request Accessibility Information from Vendors</a>
        * <a href="{{site.baseurl}}/manage/join-the-508-community">Section 508 IT Accessibility Community Listserv</a>
* **Other Resources**
    * <a href="https://www.acquisitiongateway.gov/" target="_blank" class="usa-link--external">Acquisition Gateway</a>
    * <a href="https://digital.gov/communities" target="_blank" class="usa-link--external">Communities of Practice</a>
    * <a href="https://mw19.mwconf.org/paper/how-to-read-a-vpat-assessing-accessibility-conformance-reports/" target="_blank" class="usa-link--external">How to Read a VPAT: Assessing Accessibility Conformance Reports</a>
    * <a href="https://acquisitiongateway.gov/solutions" target="_blank" class="usa-link--external">Solutions Finder</a>


---


<div>
  <h2 style="position: absolute; clip: rect(0 0 0 0); visibility: hidden; opacity: 0;" id="footnote-label">Footnote</h2>
  <ol>
    <li id="fn1">Excerpted from <a href="https://mw19.mwconf.org/paper/how-to-read-a-vpat-assessing-accessibility-conformance-reports/" target="_blank" class="usa-link--external">How to Read a VPAT®: Assessing Accessibility Conformance Reports</a>, Brian McNeilly, University of Washington, USA, Sina Bahram, Prime Access Consulting, Inc., USA. <a href="#fr1" aria-label="Back to content"> ↩ </a></li>
  </ol>
</div>