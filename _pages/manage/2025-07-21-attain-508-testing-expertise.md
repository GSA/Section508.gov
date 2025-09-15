---
layout: page
sidenav: true
permalink: manage/roles/attain-section-508-testing-expertise/
type: manage
title: How to Attain Section 508 Testing Expertise
description: Learn how federal agencies can develop or acquire Section 508 testing expertise, including internal skill-building strategies, vendor selection, and best practices for ensuring ICT accessibility compliance.
disclaimer: true
contributors: 
created: 
updated: 
topic: "Manage (program)"
sub-topic: "Testing for Accessibility Training or Tools"
audience:
- "Federal employee (fedemp)"
- "508 Program Manager (508pm)"
- "Developers and Testers (dev-test)"
resource-type: "Process/How-to"
format: "HTML (html)"

---

This guide assists federal agencies in developing, acquiring, and sustaining Section 508 testing expertise through development of internal competencies or a third party vendor. It is crucial for Section 508 programs, acquisition teams, and development and testing teams to have skilled personnel capable of accurately evaluating information and communication technology (ICT) against Section 508 Standards. This guide is for Section 508 program managers, IT leads, acquisition officials, developers, testers, and anyone else responsible for ensuring digital products and services are accessible.

Federal agencies are required to ensure that all ICT they develop, use, maintain, or procure complies with Section 508\. This encompasses a broad range of technologies, including web content, software, electronic documents, multimedia, kiosks, and hardware. While some agencies may have little to no hardware ICT, others might heavily depend on kiosks for public interaction, as an example. Additionally, ICT accessibility testing can be conducted using various tools and at different points throughout the technology lifecycle. Regardless of the specific ICT environment, agencies often require specialized skill to perform Section 508 conformance testing.

## Developing Internal Testing Expertise

Agencies may choose to develop or obtain expertise in house. There are significant advantages to developing internal testing expertise such as:

<ul class="usa-icon-list tablet:grid-col">
  <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div>
      <div class="usa-icon-list__content">Reducing recurring external vendor fees and staff turnover over time. For agencies with ongoing, large volumes of ICT development or procurement, in-house testing can be more cost-effective.</div></li>  
<li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div>
      <div class="usa-icon-list__content">The ability to respond more efficiently to urgent Section 508 issues or new content releases without waiting for external vendor scheduling or contract approvals.</div></li>   
<li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div>
      <div class="usa-icon-list__content">Developing a strong understanding of agency-specific systems, policies, and workflows, enabling more context-aware testing and remediation recommendations.</div></li>   
<li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div>
      <div class="usa-icon-list__content">Promoting continuous collaboration by embedding Section 508 testers within IT teams.</div></li>   
<li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div>
      <div class="usa-icon-list__content">Reducing risks related to data privacy and security by keeping access in-house.</div></li>   
<li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#check_circle"></use></svg></div>
      <div class="usa-icon-list__content">The ability to more easily adapt testing methods and tools to meet evolving agency needs, technologies, and priorities, creating more flexibility than external vendors bound by contract scopes.</div></li>   
</ul>

However, there are drawbacks:

<ul class="usa-icon-list tablet:grid-col">
  <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-red"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use></svg></div>
      <div class="usa-icon-list__content">Training personnel may require significant initial resources and time; particularly when the responsibilities are assigned to staff unfamiliar with Section 508 or outside of their position description.</div></li>   
  <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-red"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use></svg></div>
      <div class="usa-icon-list__content">Section 508 Standards can be complex and difficult to learn.</div></li>   
  <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-red"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use></svg></div>
      <div class="usa-icon-list__content">Agencies risk losing their investment if trained staff leave for other opportunities.</div></li>  
  <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-red"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use></svg></div>
      <div class="usa-icon-list__content">Small testing teams may struggle to handle large volumes or specialized ICT accessibility testing.</div></li>  
  <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-red"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use></svg></div>
      <div class="usa-icon-list__content">There is potential for inconsistent quality early on as testers begin to complete tasks independently.</div></li>   
  <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-red"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/images/sprite.svg#cancel"></use></svg></div>
      <div class="usa-icon-list__content">Mentoring and oversight of testers is needed as they learn to test independently.</div></li>
      </ul> 

### Building Testing Skills

Agencies should first identify which [testing methodologies]({{site.baseurl}}/test/) are approved or used within the agency, then identify methods for testers to build skills. Building testing skills require a number of foundational elements that include:

* Deep understanding of the <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards </a> and WCAG 2.0 Level AA success criteria. Resources include:  
  * <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Revised Section 508 Standards and 255 Guidelines</a> 
  * <a href="https://ictbaseline.access-board.gov/" target="_blank" class="usa-link--external">ICT Testing Baseline Portfolio</a>  
  * <a href="https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_customize&levels=aaa&versions=2.0" target="_blank" class="usa-link--external">How to Meet WCAG (Quick Reference)</a>  
  * <a href="https://www.dhs.gov/508-training" target="_blank" class="usa-link--external">Section 508 Standards for Web included in the courses for DHS Trusted Tester for Web Certification Program</a> 
* Training on agency approved testing methodologies. This may include Assistive Technology. Resources include:  
  * <a href="https://www.dhs.gov/508-training" target="_blank" class="usa-link--external"> DHS Trusted Tester for Web Certification Program</a>
  * Training on [document testing]({{site.baseurl}}/test/documents/) and [accessible content creation]({{site.baseurl}}/create/)
  * <a href="https://assets.section508.gov/assets/files/Using-DevTools-for-Manual-Accessibility-Inspection-2024-AUG-ITACM.pdf" target="_blank" class="usa-link--external">Browser developer tools (PDF)</a>
* Training on agency approved testing tools. Resources include:  
  * <a href="https://www.ssa.gov/accessibility/andi/help/howtouse.html" target="_blank" class="usa-link--external">Accessible Name and Description Inspector (ANDI) tutorial</a> and <a href="({{site.baseurl}}/training/web-software/andi-training-videos/">ANDI Overview</a>  
  * [How to Test Color Contrast using the Color Contrast Analyser]({{site.baseurl}}/training/web-software/andi-training-videos/color-contrast-analyzer/)  
* Community participation. Resources include:  
  * [GSA's IT Accessibility Community Meeting]({{site.baseurl}}/training/presentations-workshops/)  
  * [Section 508 Community Listserv]({{site.baseurl}}/manage/join-the-508-community/)  
  * [Interagency Accessibility Forum (IAAF)]({{site.baseurl}}/iaaf/archives/): Annual forum featuring presentations, panel discussions and workshops led by accessibility experts across the federal government.  
  * [Section508.gov Training, Tools, and Events]({{site.baseurl}}/training-home/#training-videos-library)  
  * [Section508.gov Video Library]({{site.baseurl}}/training-home/#training-videos-library)  
* External certifications the agency may deem beneficial or essential such as platform, application or code expertise. 

### Set up a testing program

Agencies may choose to stand up or mature an internal testing program. To accomplish this, consider: 

#### Defining Section 508 Testing Roles 

Assign responsibilities for each defined role based on your organizational structure so that there is no confusion about ownership and accountability in the Section 508 testing lifecycle. For example:

* The Program Manager (PM) oversees the testing leader and remediation lead, and also manages testing intake and scheduling.   
* The Section 508 PM provides final sign off on remediation plans.   
* The Section 508/ICT accessibility tester ensures access to the ICT is available, helps set or confirm the testing scope, conducts testing in accordance with the approved methodology and test scope, drafts reports that include suggested defect severity and recommended defect remediation timeline, then submits to Section 508 PM for final sign off.   
* The remediation lead manages remediation tracking by prioritizing defects, coordinating retesting, and ensuring remediation timelines are met. Regular reporting is a key responsibility of this role.  
* Other agency stakeholders may need to be identified and their roles and responsibilities defined.

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><p><strong>Tip:</strong> See <a href="{{site.baseurl}}/manage/roles/">Roles and Responsibilities</a>.</p></div>

#### Developing a Policy for Section 508 Testing

A standardized test process ensures consistency and accuracy across the enterprise when testing. It may include manual, automated, or a hybrid approach to testing tools and methods. Each test process should include test methods and outcomes for each Section 508 Standard or Web Content Accessibility Guidelines (WCAG) Success Criteria. 

Agencies should identify and document a standardized test process for Section 508 conformance testing for each of the following ICT: 

* Hardware, including kiosks  
  * Software, including mobile applications  
  * Electronic Documents   
  * Web content including both internal and public facing 

The Section 508 testing policy or supplemental standard operating procedure should include integration of testing in:

* The software development lifecycle (SDLC),  
* Agile ceremonies,   
* Web content publications,  
* Procurement workflows prior to acquisition,  
* Enterprise Performance Life Cycle Framework (EPLCF) checkpoints,   
* Authority to Operate (ATO) reviews,   
* Federal Information Technology Acquisition Reform Act (FITARA) reviews, and   
* Contract deliverables acceptance criteria.

### Sustaining Section 508 Testing Expertise

Section 508 and ICT accessibility expertise should be both sustained and scaled to meet ongoing needs. Technology and testing tools continue to evolve and testers should engage in continuous learning. Recommended best practices include:

* Building a cadre of trained testing personnel to lead accessibility awareness training and tailored training for development or evaluation teams.  
* Joining or creating agency-specific accessibility working groups.  
* Creating internal documentation for the agency’s testing policy, testing methods and tools, and frequently asked questions (FAQs). Ensure this content is promoted within the agency.   
* [Joining the Section 508 community]({{site.baseurl}}/manage/join-the-508-community/) and subscribing to the U.S. Access Board bulletins.  
* Attending training sessions or webinars regularly to continue to build skills. These may be from external vendors or other government agencies. Testers should continue to build and hone skills.   
* Defining recertification requirements such as if testing tools or methodologies change.  

## Obtaining External Section 508 Expertise

Agencies may determine that building or acquiring internal skills is not the most advantageous approach or may wish to supplement internal expertise with additional contract support. Some reasons to seek external vendors include:

* A lack of internal resources or expertise for a specific ICT type.  
* The need for specialized or complex testing, especially niche technologies.  
* Surge capacity needs.   
* The location of ICT is not located near an in-house tester, such as a kiosk installed at a National Park. 

### Choose a Vendor Who Meets Required Qualifications

When choosing a vendor, define specific knowledge and skills that are required. Refer to the [Sample Section 508 Accessibility Tester Position Description]({{site.baseurl}}/manage/roles/section-508-tester-pd). Additional actions include:

* Checking the qualifications of proposed staff by requesting resumes describing  work experience and credentials.  
* Requesting examples of ICT testing reports or Accessibility Conformance Reports, including defect descriptions and prioritizations.  
* Asking for past work experience and following up with past clients for honest feedback on quality of work, including reviews in the Contractor Performance Assessment Reporting System (CPARS).  
* Including performance standards and acceptance criteria tied to Section 508 conformance in any Statement of Work.

Accurate and consistent testing for ICT accessibility is crucial as federal agencies modernize technology and deliver online services. Section 508 testing should be integrated into every stage of the digital content lifecycle: design, development, procurement, and maintenance. This can be achieved either by building internal expertise through training and certification or by collaborating with qualified vendors.

## Related Resources:

* [Overview of Testing Methods for Section 508 Conformance]({{site.baseurl}}/test/testing-overview/)  
* [Technology Accessibility Playbook—Play 4: Establish a Section 508 Policy]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook/4/)  
* [Technology Accessibility Playbook—Play 10: Conduct Section 508 Testing]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook/10/)

**Reviewed/Updated:** July 2025
