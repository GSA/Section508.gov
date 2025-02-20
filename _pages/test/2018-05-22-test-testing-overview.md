---
layout: page
sidenav: true
permalink: test/testing-overview/
type: test
title: 'Overview of Testing Methods for 508 Conformance'
created: 1527010285
topic: Testing (test)
sub-topic: Design, Develop, Testing for Accessibility Training or Tools
audience:
- 508 Program Manager (508pm)
- Developers and Testers (dev-test)
- Federal employee (fedemp)
- Information Technology Program and Project Managers (itpm)
- Content Creators (creator)
resource-type: Process/How-to
format: HTML (html)
---

There are several ways to validate conformance to the [Revised 508 Standards][1]:

  * [Automated][2] - High volume 508 conformance testing tools automatically scan and test electronic content;
  * [Manual][3] - Manual testing uses a documented, consistent, repeatable process;
  * [Hybrid][4] - A combination of automated and manual testing.

<div id="Automated">
<h2>Automated Testing</h2>
<p>Take advantage of high volume (automated) 508 compliance scanning tools, but be aware of their limitations.</p>


<ul>
  <li>Automated scanning tools cannot apply human subjectivity, and therefore either produce excessive false positives or&mdash;when configured to eliminate false positives&mdash;test for only a small portion of the requirements.
    <ul>
      <li>Determine the best strategic mix of false-positive generation vs. coverage of your agency requirements by ensuring the tool vendor defines and quantifies the method and accuracy of its rule sets in regard to its alignment with your agency&rsquo;s standards and expectations.
      </li>
    </ul>
  </li>
  <li>Consider whether or how server-based automated scanning tools will be able to access content secured behind firewalls and password- or otherwise protected content.</li>
  <li>Select tools that test using the document&rsquo;s native format. Tools that scan documents often convert files into HTML before testing. This conversion process reduces the fidelity and accuracy of conformance testing.</li>
  <li>Your agency may need to deploy multiple scanning tools to cover multiple content types (e.g., HTML, Word, Excel, and PDF). It can be a challenge to extract and aggregate results to identify trends and focus remediation efforts.</li>
  <li>Plan and deliver reporting tailored to your stakeholders. You may want to provide output from scanning tools directly to developers. Additional work may be required to integrate results into dashboard reporting to tell your organizational story.</li>
</ul>



<p>Key Success Factor: To provide value for the agency and support the highest level of accessibility improvement, the tool or tools you select must foster adoption and buy-in across multiple applicable roles (UX designers, developers, etc.) within the agency.</p>
<h3>Technical Requirements</h3>
<p>When reviewing automated tools for potential purchase, consider their ability to:</p>
<ul>
<li>Scan the types and volume of electronic content your agency produces. Many tools focus on web pages, but some also scan PDF and Microsoft Office documents.</li>
<li>Customize scanning and test ruleset parameters.</li>
<li>Use a centralized custom ruleset among all tool feature sets.</li>
<li>Assign and control the ruleset version available to users from a central administrative location.</li>
<li>Scan code on a local PC to support full compliance assessments in a designer/developer unit-test environment.</li>
<li>Control and synchronize error and remediation messages presented to users for customized rules.</li>
<li>Flag false positives and ensure the errors are not repeated in subsequent test results.</li>
<li>Categorize issues by type, frequency, and severity.</li>
<li>Configure, schedule, and suspend scans; change the rate of scans; and restart in-process scans.</li>
<li>Fully customize all evaluation rule sets to address inaccurate interpretation of requirements or reduce false positives.</li>
<li>Support exclusion of specific domains, URL trees, pages, or sets of lines.</li>
<li>Emulate multiple browsers during scans.</li>
<li>Provide contextually relevant remediation guidance</li>
<li>Customize summary and detailed reports to monitor current 508 conformance; analyze trends by website and by organizational component; and export summary and detailed results to external reporting tools.</li>
<li>Direct users to specific code location(s) that are generating errors, and provide contextually relevant remediation guidance.</li>
<li>Integrate test tools and conformance monitoring into test automation environments (Dev/Ops).</li>
<li>Produce accessible system and report outputs.</li>
</ul>
<h3>Support Services Requirements</h3>
<ul>
<li>Installation, configuration, validation, and customization of 508 test rulesets, scans, and reporting capabilities.</li>
<li>Integration of 508 test tools, reporting, and monitoring capabilities into test automation environments.</li>
<li>Online self-paced training for web content managers, developers, programmers, quality assurance testers, project and program managers, and tool administrators.</li>
<li>Operations &amp; maintenance support, including ongoing configuration and customization.</li>
</ul>
<h3>Validate Rulesets</h3>
<p>Validating rulesets for automated accessibility testing tools is a crucial step in ensuring accurate and reliable test results that align with an agency’s <a href="{{site.baseurl}}/test">testing methodology</a>. A ruleset defines the criteria against which the test tool evaluates content for accessibility conformance. By validating test tool rulesets, the tester has more control over the accuracy, reliability, and relevance of the test results. Validating rulesets limits defects unrelated to Section 508, excludes potential issues not aligned with an agency’s testing methodology, and eliminates false positives and negatives. </p>

<p>Use the below guidance to validate rulesets for automated web accessibility testing tools:</p>

<ol type="1">
<li>Assess predefined rulesets:</li>
<ol type="a">
<li>Determine whether separate rulesets exist for different types of web content, such as web pages, web applications, Microsoft Office documents, Adobe PDF documents, etc.</li>
<ul>
<li>You may need to adjust rulesets for each type of Information and Communication Technologies (ICT).</li>
<li>Different technologies, like HTML, CSS, JavaScript, may require specific rules to cover accessibility components.</li> </ul>
<li>Look for a predefined setting that indicates “WCAG 2.0 Level AA Success Criteria” or “Section 508” which should test all the WCAG Level A and AA included in the Revised Section 508 requirements that are applicable to web content supported by the tool.</li>
<ul>
<li>Note: Some testing tools may include tests beyond Section 508, such as WCAG 2.0 AAA, WCAG 2.X, WAI-ARIA, and accessibility best practices. These settings may flag failures that are not failures of Section 508 technical requirements. </li></ul>
<li>Thoroughly review tool documentation provided by the vendor in order to understand the purpose, scope, and applicability of each rule in the ruleset.</li>
<ul>
<li>Be advised that some tests in the ruleset may not fully test for a specific Success Criteria. For example, WCAG 1.1.1 requires that text alternatives serve an equivalent purpose for meaningful images. The ruleset may be able to test if a text alternative is provided, but it may not be able to test if the text alternative is equivalent.</li> 
</ul>
</ol>
<li>Explore customization options:</li>
<ol type="a">
<li>Verify that the selected tool allows customization of rulesets – ability to add, modify, or disable rules, etc. – to adapt the ruleset to agency-specific needs and requirements. Modifications to the ruleset may be needed based on outcomes in Step 3.
</li></ol>
<li>Assess each ruleset for reliability, accuracy, and degree of alignment with agency requirements and testing methodologies in your technology environment:</li>
<ol type="a">
<li>Identify the tool ruleset to assess (e.g., Section 508, WCAG 2.0 AA, etc.)</li>
<li>Identify the specific agency testing methodology/criteria to test tool rule(s) against (e.g., Test 1-Images) </li>
<li>Identify all rules within the tool that apply to the agency testing methodology criteria identified in 3.b (e.g., Rule ImgAlt111, Rule ImgTitle111)</li>
<li>Select specific rule to test from 3.c (e.g., Rule ImgAlt111)</li>
<li>Create or select a sufficient test case or code sample </li>
<ul>
<li>Test cases do not need to be robust. Small code snippets to highlight a pass, fail, and not applicable will suffice in most cases. Code should easily identify how well the rule aligns with the expected outcome.</li>
<li>Ensure test cases include multiple, and ideally all, ways to pass and fail a specific test. Uniquely identify each pass, fail, and not applicable test case to quantify alignment with agency testing methodologies as testing progresses.</li>
<li>For each test case, include:</li>
<ol type="1">
<li>Ruleset name and version within the test tool</li>
<li>Agency testing methodology/criteria</li>
<li>Rule name and version within the test tool</li>
<li>Description of test case and test outcome, such as fail, pass, not applicable</li>
<li>Test case (code or link)</li></ol>
<li>An example of sample Fail test case is below:</li>
<ol type="1">
<li>Tool ruleset name: WCAG 2.0 AA v 8.2</li>
<li>Agency testing criteria: Test 1-Images: Meaningful images must have an equivalent text description.</li>
<li>Rule name: ImgAlt_title_111 v8.2</li>
<li>Fail test case: The following code snippet is a test case that will result in a FAIL because a meaningful image is missing a text alternative (lacks a title and alternative text).</li>
<li>Test case code:</li>
<pre>
<code>&lt;h1&gt;This is a meaningful image of agency logo&lt;/h1&gt;
&lt;img src="GSAagencylogo.jpeg"></code></pre></ol>
<li>An example of sample Pass test case is below:</li>
<ol type="1">
<li>Tool ruleset name: WCAG 2.0 AA v8.2</li>
<li>Agency testing criteria: Test 1-Images: Meaningful images must have an equivalent text description.</li>
<li>Rule name: ImgAlt_title_111 v8.2</li>
<li>Pass test case: The following code snippet is a test case that will result in a Pass because a meaningful image has alternative text.</li>
<li>Test case code:</li>
<pre><code>&lt;h1&gt;This is a meaningful image of agency logo&lt;/h1&gt;
&lt;img src="GSAagencylogo.jpeg" alt="General Services Administration starmark logo"&gt;.</code></pre>
<li><a href="https://section508coordinators.github.io/Dev-Automation/">DHS’s GitHub code repository contains detailed code examples</a></li>
<li><a href="https://section508coordinators.github.io/baselinealignment/index.html">ICT Baseline Alignment Framework includes test cases in GitHub that may be used to validate tool rules</a></li>
</ol>
</ul>
<li>Perform tool test on the test case.</li>
<li>Compare the results against manual test results to validate the tool’s accuracy. Ensure this comparison is performed by senior subject matter experts who are trained to perform manual accessibility testing.</li>
<ul>
<li>If, when running the tool against the test case, the test outcome aligns with the test case, this rule should be included in the ruleset.</li>
<ol type="1">
<li>Note: Test the rule against all possible pass, fail, and not applicable techniques before inclusion.</li>
</ol>
<li>If, when running the tool against the test case, the test outcome did not align with the test case, flag the rule to disable within the ruleset to avoid false results, or obtain developer assistance to customize the rule to increase reliability in your environment.</li>
</ul>
<li>After constructing a viable initial ruleset framework by passing the internal test cases, test the resulting rule by scanning against multiple sites or applications to help identify false positives and false negatives to correct rule detection.</li>
<ul>
<li>Disable inaccurate rules or obtain developer assistance to customize the rule to increase reliability in your environment.</li>
</ul>
<li>Repeat steps <strong>3.a-3.h</strong> to continue testing until you have a ruleset that provides an acceptable level of accuracy in your environment.</li>
</ol>
<li>Once a reliable list of rules is established, integrate the ruleset into automated developer unit testing and applicable IT lifecycle activities.</li>
<li>Evaluate ruleset coverage to determine gaps in Section 508 requirements that the automated tool cannot test; these Section 508 requirements must be tested manually.</li>
<li>Regularly review and update the ruleset to align with agency testing methodologies and technologies to ensure ongoing accuracy. This includes any tool changes that include new or updated rules and rulesets, changes to agency testing methodologies, and suggested best practices.</li> 
<li>Provide training to accessibility testing team and other tool users to ensure they understand the tool's rulesets and settings, enabling effective and accurate use.</li>
<li>Create robust documentation detailing the rulesets and settings used in your automated accessibility testing tool. Include instructions on how to use, customize, and interpret the results.</li>
</ol>


<h3>Configure Scans</h3>
<ul>
<li>Firewall restrictions.</li>
<li>Scan depth.</li>
<li>How the results should be aggregated.</li>
<li>Server capacity and length of time to run scans.</li>
<li>How to abort and restart scans.</li>
<li>The ability to eliminate rulesets that only generate warnings.</li>
<li>The ability to identify content subject to the safe harbor provision. Content that conformed to the Original 508 Standards and has not been altered on or after January 18, 2018 does not need to conform to the Revised 508 Standards (i.e., legacy content). See Section 9.2 below for tips on identifying legacy content.</li>
</ul>
<h3>Configure Reports</h3>
<ul>
<li>The target audiences (web managers, program managers, executive managers).</li>
<li>Reporting scope: (issue description, category, impact, priority, solution recommendation, and location in the code).</li>
<li>Reporting format (single scan view vs comparison against previous scans, trend highlighting, and identification of major positive and negative changes).</li>
</ul>
</div>
<div id="Manual">
<h2>Manual Testing</h2>
<p>Follow the instructions outlined in <a href="{{site.baseurl}}/test"> Test for Accessibility</a>, endorsed by the Federal CIO Council&rsquo;s Accessibility Community of Practice.</p>
</div>
<div id="Hybrid">
<h2>Hybrid Testing</h2>
<p>A hybrid testing approach is usually the best solution to handle a large volume of electronic content. Consider the following:</p>


<ul>
  <li>Ensure developers build accessibility into code during development.</li>
  <li>Whenever possible, perform manual testing prior to publishing new content.</li>
  <li>Use stand-alone automated testing tools to identify obvious errors and augment manual testing.</li>
  <li>Integrate automated rules sets into developer operations to add increased scale to 508 validation efforts for applications prior to release.
    <ul>
    <li>Use automated scanning tools to scan as much electronic content as possible and periodically conduct manual testing on high priority published content. Focus on content that is returning poor test results in scans and is frequently accessed.</li>
    </ul>
  </li>
</ul>
  
  
</div>
<h2>Related Resources</h2>
<ul>
<li><a href="{{site.baseurl}}/manage/support-accessible-content">Build Support for Accessible Content</a> - Follow the stages of content production to ensure your organization publishes accessible content.</li>
<li><a href="{{site.baseurl}}/develop/incorporating-accessibility-conformance/">Effective methods and tools for incorporating accessibility conformance validation within development processes</a></li>
</ul>
<p><br />This guidance was developed by the U.S. Federal Government Revised 508 Standards Transition Workgroup. Members include the U.S. Federal CIO Council Accessibility Community of Practice, the U.S. Access Board, and the General Services Administration.</p>
<p><strong>Reviewed/Updated: </strong>September 2023</p>
            
 [1]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines
 [2]: #Automated
 [3]: #Manual
 [4]: #Hybrid