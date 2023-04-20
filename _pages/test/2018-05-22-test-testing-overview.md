---
layout: page
sidenav: true
permalink: test/testing-overview/
type: test
title: 'Overview of Testing Methods for 508 Conformance'
created: 1527010285
---

There are several ways to validate conformance to the   [Revised 508 Standards][1]:

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
<ul>
<li>Determine whether separate rulesets exist for different types of web content (web pages, Microsoft Office documents, Adobe PDF documents, etc.).</li>
<li>Look for a setting that indicates &ldquo;WCAG 2.0 Level AA Success Criteria&rdquo; which should test all the Level A and AA /Revised Section 508 requirements that are applicable to web content supported by the tool.</li>
<li>Assess each ruleset for reliability, accuracy, and degree of alignment with agency requirements in your environment. Suggested steps:</li>
</ul>
<ol type="1">
<li>Create a test bed of sample content. Ensure the test bed includes as many ways to fail a specific checkpoint as known, then uniquely identify each failure point to quantify alignment with agency guidelines as testing progresses.</li>
<li>Configure the scan to evaluate the test bed.</li>
<li>Run the rule set.</li>
<li>Compare the results against manual test results to validate the script&rsquo;s accuracy. Ensure this comparison is performed by senior subject matter experts who are trained to perform manual testing.</li>
<li>After constructing a viable initial ruleset framework by &ldquo;passing&rdquo; the internal test bed tests, test the resulting rule &ldquo;in the wild&rdquo; by scanning against multiple sites or applications constructed by technical resources not associated with the internal rule testing effort, to help identify false-positives and requirements to correct rule detection.</li>
<li>Delete inaccurate scripts, or obtain developer assistance to customize the scripts to increase reliability in your environment.</li>
<li>Continue testing until you end up with rule sets that provide an acceptable level of accuracy in your environment.</li>
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
</ul>
<p><br />This guidance was developed by the U.S. Federal Government Revised 508 Standards Transition Workgroup. Members include the U.S. Federal CIO Council Accessibility Community of Practice, the U.S. Access Board, and the General Services Administration.</p>
<p><strong>Reviewed/Updated: </strong>May 2018</p>

            
 [1]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines
 [2]: #Automated
 [3]: #Manual
 [4]: #Hybrid