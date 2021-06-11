---
layout: page
sidenav: false
permalink: manage/improve-digital-dashboard-scores/
type: page
title: 'How to Improve Digital Dashboard Accessibility Scores'
created: 1603390069
---

In order to improve your agency&rsquo;s website accessibility scores within the Digital Dashboard tool, we must understand why we test, how tests are conducted, and the limitations of automated testing. The below guidance is intended to assist with improving website scores on the Digital Dashboard Accessibility module. For other Digital Dashboard questions, please visit the [frequently asked questions][1] on [DigitalDashboard.gov][2].

  * [Section 508 Accessibility Standards][3]
  * [How Websites are Measured][4]
  * [Limitations to Automated Testing][5]
  * [How to Fix Accessibility Issues][6]
  * [How to Access the Digital Dashboard][7]

* * *

<h2 id="standards">
  Section 508 Accessibility Standards
</h2>

In 1998, Section 508 of the Rehabilitation Act of 1973 was amended to require all federal agencies to make their electronic and communications technology accessible to people with disabilities. In 2017, the U.S. Access Board issued Revised Section 508 Standards which, in part, harmonize Section 508 requirements with other guidelines and standards both in the U.S. and abroad, including standards issued by the European Commission and as well as the standards set forth by the Web Content Accessibility Guidelines (WCAG), a globally recognized voluntary consensus standard for web content and ICT.

For additional information on Section 508 standards, laws and associated requirements, visit:

  * [Section 508 laws and Policies][8] | Section508.gov
  * [Accessibility Testing for Software and Websites][9] | Section508.gov
  * [Guide to Accessible Design and Development][10] | Section508.gov
  * [Mapping of WCAG 2.0 to Functional Performance Criteria][11] | Section508.gov
  * [U.S. Access Board][12] | Access-Board.gov
  * [WCAG 2.0 Guidelines][13] | W3.org
  * [WCAG 2.0 Level AA standards][14] | W3.org

<h2 id="measure">
  How Websites are Measured
</h2>

### The Tool

The data presented by the Accessibility module is obtained through use of an open-source application known as [Pa11y][15]. Pa11y uses other open-source tools, including HTML_Codesniffer and aXe Core, to identify accessibility issues.&nbsp;

While we selected Pa11y to scan for accessibility issues presented by the Accessibility Module, there are a range of other proprietary and open-source tools available to assist web developers and IT managers in creating accessible technology. It is recommended that agencies ensure their automated and manual accessibility testing tools and processes align with the [ICT Testing Baseline][16].&nbsp;

### The Findings&nbsp;

The Digital Dashboard&rsquo;s Accessibility module scans for certain common accessibility issues across all publicly accessible <span style="font-style: italic;">.gov executive branch agency websites. Website domains that simply redirect to other websites are not measured. The Accessibility module scans second-level federal <span style="font-style: italic;">.gov websites (e.g., <span style="font-style: italic;">agency.gov). Note that third-level federal websites, such as <span style="font-style: italic;">program.agency.gov, <span style="font-style: italic;">.mil,<span style="font-style: italic;"> .edu,<span style="font-style: italic;"> .us, and state, local, and Native Sovereign Nation (NSN) are <span style="font-weight: bold;">not currently scanned by the Accessibility module.</p> 

<p>
  The Accessibility Module performs the following spot checks, informed by the current Section 508 standards. The checks use the WCAG 2.0 success criteria associated with each standard to inform the testing approach.
</p>

<ul>
  <li>
    <strong>Images with missing text descriptions</strong> (WCAG 1.1.1 [A]): The Accessibility module is checking to determine if images and other non-text content, including user interface elements, contain a text description. Full conformance with standards also requires a meaningful text description which can only be determined by manual inspection and cannot be tested by the Accessibility module.
  </li>
  <li>
    <strong>Color Contrast</strong> (WCAG 1.4.3 [AA]: Accessibility module is checking to ensure there is enough contrast between text and it's background (4.5:1 contrast ratio) so that it can be read by people who have difficulty seeing color.
  </li>
  <li>
    <strong>Name, Role, Value</strong> (WCAG 4.1.2 [A]): The Accessibility module is checking for anchor elements found within a valid attribute, but where no link content has been supplied, such as an anchor element found with no link content and no name and/or ID attribute. Conformance with the standards requires that sufficient information about all user interface components (including identity, operation, and state) is available to assist in technology.
  </li>
</ul>

<p>
  <strong>NOTE:</strong> We are actively working to increase the number of conformance tests conducted by the Accessibility module - maximizing the tool&rsquo;s benefit to agencies.&nbsp;
</p>

<h2 id="limits">
  Limitations of Automated Testing
</h2>

<p>
  All automated testing, including that performed by the Digital Dashboard&rsquo;s Accessibility module, is limited to programmatic conformance testing. Automation can test some, but not all, of the technical requirements. For example, while automated tools may be able to identify whether or not an image has an ALT attribute (and whether that attribute is blank or has a text value), they are currently unable to determine if that ALT text is a meaningful or equivalent description of the image. As such, the Accessibility module reports <strong>do not</strong> constitute a complete accessibility evaluation and must be accompanied by manual inspection. Agencies should use both automated and manual testing (conducted by a certified tester) to fully assess whether their website is accessible. For additional testing guidance, visit <a href="/test/web-software">Accessibility Testing for Software and Websites</a>.&nbsp;
</p>

<h2 id="fix">
  How to Fix Accessibility Issues
</h2>

<p>
  The tools listed above provide web developers and content managers with the information they need to pinpoint issues on their pages. While some issues may involve a more significant overhaul of a website&rsquo;s architecture, most can be corrected with only minor updates to the site, such as deleting errant tags, making minor CSS adjustments, or adding ALT text to images.
</p>

<p>
  Technical Guidance:
</p>

<ul>
  <li>
    A website uses an image to convey information without including a descriptive alt text attribute. This issue would make it impossible for the visually impaired to access the information conveyed by the image.
  </li>
  <li>
    The text on a page has poor contrast with the background color (for instance, light green text on a dark green background). This makes it difficult or impossible for those with some visual impairments (such as color blindness) to use the information.
  </li>
  <li>
    When the web page includes custom controls where the name, role and value cannot be programmatically determined, it could be difficult or impossible for people with visual impairments to know the controls exist, what types of controls they are, and in some cases what value is associated with the control (for example - a missing link or skip to main content that is not working).&nbsp;
  </li>
</ul>

<p>
  See below for information on how to resolve the issues mentioned above:&nbsp;
</p>

<ul>
  <li>
    <a href="https://www.ssa.gov/accessibility/files/SSA_Alternative_Text_Guide.pdf">How to fix images with missing descriptions</a>
  </li>
  <li>
    <a href="https://accessibility.huit.harvard.edu/use-sufficient-color-contrast">How to fix color contrast issues</a>
  </li>
  <li>
    <a href="https://accessibility.huit.harvard.edu/provide-name-role-and-value-information">How to fix name, role, value issues</a>
  </li>
</ul>

<p>
  If you need help fixing issues identified in the Accessibility module, contact your agency&rsquo;s Section 508 Program Manager, or our team at <a href="mailto:section.508@gsa.gov">section.508@gsa.gov</a>.
</p>

<h2 id="dashboard">
  How to Access the Digital Dashboard
</h2>

<p>
  To access the Digital Dashboard Accessibility Module, simply:&nbsp;
</p>

<ol>
  <li>
    Sign into <a href="http://digitaldashboard.gov/"><span style="color: #0071bc;">DigitalDashboard.gov</a> using your <a href="https://www.max.gov/"><span style="color: #0071bc;">MAX.gov</a> account </li> 
    
    <li>
      Select the &ldquo;Accessibility&rdquo; module link, and review the data for your agency.
    </li></ol> 
    
    <p style="margin-left: 20px;">
      <strong>Note:</strong> First-time dashboard users will need to submit a one-time request to <a href="mailto:dotgovdashboard@gsa.gov">dotgovdashboard@gsa.gov</a> for access to your agency data.
    </p>
    
    <div class="panel panel-default" style="margin-top: 1.5em;">
      <div class="panel-body">
        <p class="text-large">
          <strong>Before You Go</strong>
        </p>
        
        <p>
          We're always working to improve the information and resources on this website. To suggest a new resource for this or another page, please <a href="mailto:section.508@gsa.gov">contact us</a>.
        </p>
      </div>
    </div>
    
    <p>
      <strong>Reviewed/Updated:</strong> October 2020
    </p>

 [1]: https://www.digitaldashboard.gov/faq
 [2]: https://www.digitaldashboard.gov
 [3]: #standards
 [4]: #measure
 [5]: #limits
 [6]: #fix
 [7]: #dashboard
 [8]: /manage/laws-and-policies
 [9]: /test/web-software
 [10]: /content/guide-accessible-web-design-development
 [11]: /content/mapping-wcag-to-fpc
 [12]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh
 [13]: https://www.w3.org/TR/WCAG20/
 [14]: https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#principle1
 [15]: https://pa11y.org/
 [16]: https://section508coordinators.github.io/ICTTestingBaseline/