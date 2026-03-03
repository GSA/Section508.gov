---
layout: page
sidenav: true
type: test
title: Software Overview
permalink: test/software/
description: Explore Section 508 software accessibility requirements for federal ICT, including desktop, mobile, and cloud apps that must work with assistive technologies.
disclaimer: 
audience: 
- 508-pm
- content-creator
- designer
- dev-tester
- fed-emp
- it-prog-proj-mgr
- public
- requirement-ba
- web-content-mgr
topic: "Testing (test)"
subtopic: 
- Accessibility Standards, Procedures, Guidance, Best Practices
- Design, Develop, Testing for Accessibility Training or Tools
- Software
resource_type: 
- process-how-to
format: html
created: 2025-08-18
updated: #Add/update date stamp for each review/update
exclude-changelog: 
---
Federal agencies rely on software applications—desktop, mobile, or cloud-based—for task completion and service delivery. Section 508 of the Rehabilitation Act requires that all such software, whether developed, used, maintained, or procured, be accessible to individuals with disabilities. This ensures users can operate and interact with software effectively using assistive technologies.

## Definitions

The <a href="https://www.access-board.gov/ict/#E103-definitions" target="_blank" class="usa-link--external"> Section 508 Standards</a> offer a number of definitions related to software and software tools:

* <a href="https://www.access-board.gov/ict/#defSoftware" target="_blank" class="usa-link--external">Software</a>: “Programs, procedures, rules, and related data and documentation that direct the use and operation of ICT and instruct it to perform a given task or function. Software includes, but is not limited to, applications, non-Web software, and platform software.”  
* <a href="https://www.access-board.gov/ict/#defSoftwareTools" target="_blank" class="usa-link--external">Software Tools</a>: “Software for which the primary function is the development of other software. Software tools usually come in the form of an Integrated Development Environment (IDE) and are a suite of related products and utilities. Examples of IDEs include Microsoft® Visual Studio®, Apple® Xcode®, and Eclipse Foundation Eclipse®.”  
* <a href="https://www.access-board.gov/ict/#defPlatformSoftware" target="_blank" class="usa-link--external">Platform Software</a>: “Software that interacts with hardware or provides services for other software. Platform software may run or host other software, and may isolate them from underlying software or hardware layers. A single software component may have both platform and non-platform aspects. Examples of platforms are: desktop operating systems; embedded operating systems, including mobile systems; Web browsers; plug-ins to Web browsers that render a particular media or format; and sets of components that allow other applications to execute, such as applications which support macros or scripting.”  
* <a href="https://www.access-board.gov/ict/#defPlatformAccessibilityServices" target="_blank" class="usa-link--external">Platform Accessibility Services</a>: “Services provided by a platform enabling interoperability with assistive technology. Examples are Application Programming Interfaces (API) and the Document Object Model (DOM).”  
* <a href="https://www.access-board.gov/ict/#defNonWebSoftware" target="_blank" class="usa-link--external">Non-Web Software</a>: “Software that is not: a Web page, not embedded in a Web page, and not used in the rendering or functioning of Web pages.”  
* <a href="https://www.access-board.gov/ict/#defAuthoringTool" target="_blank" class="usa-link--external">Authoring Tool</a>: “Any software, or collection of software components, that can be used by authors, alone or collaboratively, to create or modify content for use by others, including other authors.”

## Applicability

Per <a href="https://www.access-board.gov/ict/#E207-software" target="_blank" class="usa-link--external">E207 Software:</a> “User interface components, as well as the content of platforms and applications, shall conform to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.0 (incorporated by reference, see 702.10.1).

**EXCEPTIONS:**
<ol>
<li>Software that is assistive technology and that supports the accessibility services of the platform shall not be required to conform to E207.2.</li> 
<li>Non-Web software shall not be required to conform to the following four Success Criteria in WCAG 2.0:</li>
    <ol>
 <li> <a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#bypass-blocks" target="_blank" class="usa-link--external">2.4.1 Bypass Blocks</a>—A mechanism is available to bypass blocks of content that are repeated on multiple web pages,</li> 
  <li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#multiple-ways" target="_blank" class="usa-link--external">2.4.5 Multiple Ways</a>—More than one way is available to locate a web page within a set of web pages except where the web page is the result of, or a step in, a process,</li>  
  <li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#consistent-navigation" target="_blank" class="usa-link--external">3.2.3 Consistent Navigation</a>—Navigational mechanisms that are repeated on multiple web pages within a set of web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user, and </li> 
  <li><a href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#consistent-identification" target="_blank" class="usa-link--external">3.2.4 Consistent Identification</a>—Components that have the same functionality within a set of web pages are identified consistently.</li></ol>  
<li>Non-Web software shall not be required to conform to Conformance Requirement 3 Complete Processes in WCAG 2.0.</li></ol>

Per <a href="https://www.access-board.gov/ict/#e207-2-1-word-substitution-when-applying-wcag-to-non-web-software" target="_blank" class="usa-link--external">E207.2.1 Word Substitution when Applying WCAG to Non-Web Software:</a> “For non-Web software, wherever the term “Web page” or “page” appears in WCAG 2.0 Level A and AA Success Criteria and Conformance Requirements, the term “software” shall be substituted for the terms “Web page” and “page”. In addition, in Success Criterion in 1.4.2, the phrase “in software” shall be substituted for the phrase “on a Web page.”"

In addition to WCAG 2.0 AA criterion, Section 508 also includes requirements that software be accessible to users with disabilities by supporting assistive technologies and adopting user accessibility settings. If the software includes authoring tools, it must support the creation and preservation of accessible content.

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><p><strong>Note:</strong>
<ul>
<li>Applications that open outside a web browser or require desktop or mobile installation may be software.</li>  
<li>Some ICT may combine both hardware and software; multiple test methodologies may be necessary to fully test ICT.</li></ul></p></div>

## Examples

* A mobile application developed by FEMA for emergency notifications  
* MyTSA application to track wait times at airports  
* An application on federal government computers to install software updates  
* A calculator application on a federal government furnished computer  
* A mail client installed on a federal government furnished computer  
* A Microsoft Office application used by federal government employees  
* A File Explorer application used to find desktop and download items on a federal government furnished computer

## Related Resources:

* [Effective Methods and Tools for Incorporating Accessibility Conformance Validation within Development Processes]({{site.baseurl}}/develop/incorporating-accessibility-conformance/)  
* [Tools for Testing Information and Communications Technology]({{site.baseurl}}/tools/tools-for-testing-ict/)

**Reviewed/Updated:** August 2025