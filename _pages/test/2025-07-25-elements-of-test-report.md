---
layout: page
sidenav: true
permalink: test/elements-of-an-accessibility-test-report/
type: test
title: "Essential Elements of an Accessibility Test Report"
description: Learn about essential elements an ICT accessibility test report should include in order to assist teams in identifying accessibility gaps and prioritizing remediation efforts.
created: 
contributors: 
topic: Testing (test)
sub-topic: "Design, Develop, Testing for Accessibility Training or Tools"
audience:
- 508 Program Manager (508pm)
- Developers and Testers (dev-test)
- Information Technology Program and Project Managers (itpm)
- Federal employee (fedemp)
- Chief Information Officer (cio)
resource-type: Long form article
format: HTML (html)
---

A well crafted accessibility test report helps ensure compliance, improves accessibility and usability, reduces legal risk, and helps inform decision making prior to product deployment. Internally, it assists teams in identifying accessibility gaps and prioritizing remediation efforts. It enables developers and project managers to make informed decisions regarding user experience, the severity of Section 508 defects, and the potential user impact if the product is deployed. Furthermore, these reports offer valuable insights into common enterprise-wide defects, aiding in the development of plans to address them.

A test report may be generated using tools such as the <a href="https://github.com/Section508Coordinators/SCRT" target="_blank" class="usa-link--external">Section 508 Compliance Reporting Tool (SCRT)</a> created by the Department of Homeland Security, or a test report template created by your agency. It may be as sophisticated as an application or as simple as a spreadsheet or document.

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter margin-bottom-4" style="margin-top: 1.0em;"><p>An Accessibility Conformance Report (ACR) provides an overview of a product's conformance to Section 508. In contrast, a Section 508 test report offers a more detailed, developer-oriented document to assist product teams in enhancing Section 508 conformance.</p></div>

However you create an accessibility test report, there are essential elements every report should contain.

## Product Information

To help the reader know which product version the test results applies to, specific product information must be included. At a minimum, include:

* Product Name  
* Specific Product Version  
* Brief description of the product

## Tester Information

Including tester information helps build trust in the accuracy of the information and increases transparency. At a minimum, include:

* Tester Name(s)   
* Organization or Vendor Name Contact information:  
* Email address and phone number so others can contact each tester with questions about the test results.  
* Tester credentials, if any, to denote subject matter expertise in the area of testing, such as Trusted Tester ID. 

## Report Overview Details

Information regarding the testing methodology, date, and other metadata helps readers understand the scope of testing. At a minimum, include:

* Report Date  
* Date of Evaluation   
* The date test report was last modified, if applicable.  
* Report Version  
* Evaluation Method(s) Used  
  * Specify what tools and test methodologies were used to complete testing. Testing methods include manual, automated, or hybrid testing. Be as specific as possible so others can use the methodologies and tools to replicate any defects noted.  
  * Specify the operating system, browser product or version used, or any other test environment details that provide context for results. It is a best practice to include multiple platforms in the test environment if the product runs on different operating systems or browsers.  
  * Specify the test scope, including what was tested, how many pages, what may have been omitted in test scope, or any other details to provide additional context of the results.  
* Related test results

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter margin-bottom-4" style="margin-top: 1.0em;"><p><strong>Tip</strong>: Check with the agency’s Section 508 program to find out which testing methodology it follows for Section 508 compliance.</p></div>

## Test Results

Test results should be reported using testing performed by knowledgeable accessibility testers. Detailed conformance levels and explanation for each selection provide readers information on how accessible a product is. At a minimum:

* Clearly address all relevant Section 508 Standards, Web Content Accessibility Guidelines (WCAG) Success Criteria, and any other applicable accessibility standards.  
* Provide a conformance outcome for all Section 508 Standards, WCAG Success Criteria, and other applicable accessibility standards. Conformance outcomes are typically denoted by Supports, Does Not Support, or Not Applicable. Test methodologies may use other phrases such as Pass, Fail, or Not Applicable.   
  * A completed test report should have a conformance outcome listed for each standard even if the standard does not apply.   
* Provide specific and detailed remarks, explanations, and information on why the conformance level was selected, how to replicate each defect, and any other important information a developer may need to scope remediation. Testers should:  
  * Avoid vague or generic language.  
  * Provide sufficient information to explain:  
    * what the defect is,  
    * when or where the defect occurs, and   
    * the criticality or severity of each defect. Common levels include: Critical, High, Moderate or Medium, and Low.   
  * Include a screenshot of the defect.   
  * Include a code snippet of the defect, if applicable.   
  * Provide sufficient detail to explain how developers can remediate the defect.   
  * Explain why Supports, Pass, or Not Applicable was selected. It is recommended some explanation is provided for each accessibility standard on the test report. 

## Formatting

Formatting enhances readability and understanding of the test report. At a minimum:

* Add headings to test report subsections for easier navigation.  
* Associate Section 508 Standards with conformance outcomes, remarks, and explanations in a clear and accessible manner.   
* Use an approved agency test report to ensure defects are logged and tracked for remediation purposes.  
* Machine-readable formats facilitate comparison capabilities and tool integration.

## Tools to Generate a Test Report
<ul>
<li><a href="https://github.com/Section508Coordinators/SCRT" target="_blank" class="usa-link--external">Section 508 Compliance Reporting Tool</a> by the Department of Homeland Security</li>  
<li><a href="https://www.hhs.gov/sites/default/files/hhs-508-webapps-checklist.xlsx" target="_blank" class="usa-link--external">Web Sites, Web Applications and Software Excel Checklist</a> by the Department of Health and Human Services</li> 
<li><a href="{{site.baseurl}}/test/documents/">Accessibility Testing for Electronic Documents</a></li></ul>

## Related Resources

* [Universal Design & Development]({{site.baseurl}}/develop/universal-design/)  
* [Overview of Testing Methods for 508 Conformance]({{site.baseurl}}/test/testing-overview/)   
* [Effective Methods and Tools for Incorporating Accessibility Conformance Validation within Development Processes]({{site.baseurl}}/develop/incorporating-accessibility-conformance/)  
* [Technology Accessibility Playbook — Play 11: Track and Resolve Accessibility Issues]({{site.baseurl}}/manage/playbooks/technology-accessibility-playbook-intro/play11/)

**Reviewed/Updated:** July 2025