---
layout: page
sidenav: true
permalink: develop/incorporating-accessibility-conformance/
type: develop
title: "Effective Methods and Tools for Incorporating Accessibility Conformance Validation within Development Processes"
created: 20230915
topic: "Development (dev)"
sub-topic: "Accessible Acquisition Info, Guidance & Best Practices"
audience:
- "Developers and Testers (dev-test)"
- "Information Technology Program and Project Managers (itpm)"
- "Product Managers (prodmgr)"
resource-type: "Process/How-to"
format: "HTML (html)"
---

The integration of accessibility conformance validation, or accessibility testing, throughout the development life cycle reduces testing burden and results in a more accessible Information and Communications Technology (ICT) product. Below are steps you can take to integrate methods and tools for accessibility conformance validation into your development life cycle. 

Note: While some steps may only apply to software or web development, most of the steps broadly apply to any development life cycle including documents, web content, software, or hardware. 

Seven phases of the development process are shown below<sup><strong><a href="#fn1" id="fr1">1</a></strong></sup>: 
<ol>
<li>Plan</li>
<li>Gather requirements</li>
<li>Design</li>
<li>Develop</li>
<li>Test</li>
<li>Deploy</li>
<li>Operate and Maintain</li>
</ol>
<div id="Plan">
<h2>Plan:</h2>
<ol>
<li>Specify when accessibility testing will occur. The ideal time is at each step or gate in the life cycle. </li>
<li>Identify what types of accessibility testing should be performed (manual, automated, or hybrid) and when each methodology should be utilized. Use this to inform the overall Test Plan. See the <a href="https://www.hhs.gov/sites/default/files/ocio/eplc/EPLC%20Archive%20Documents/39-Test%20Plan/eplc_test_plan_practices_guide.pdf" class="usa-link--external" target="_blank">Department of Health and Human Services’ (HHS) Test Plan practices guide</a> for an overview of what to include in a test plan. </li><ul>
<li>Two examples of software test plans are the <A href="https://ussm.gsa.gov/assets/files/M3-Playbook-Test-Plan-Template.docx" class="usa-link--external" target="_blank">General Services Administration’s (GSA) Playbook Test Plan Template</a> and <a href="https://www2a.cdc.gov/cdcup/library/templates/CDC_UP_Test_Plan_Template.doc" class="usa-link--external" target="_blank">Centers for Disease Control’s (CDC) Test Plan Template</a>.</li></ul>

<li>Understand accessibility knowledge of staff; consider budgeting for training and tools.</li>
<li>Develop a Quality Assurance Surveillance Plan (QASP) that includes accessibility. Two examples of QASP temples are <a href="https://nitaac.nih.gov/resources/tools-and-templates/quality-assurance-surveillance-plan-qasp-template" class="usa-link--external" target="_blank">National Institutes of Health's QASP Template</a> and <a href="https://usahca.medcom.amedd.army.mil/docs/Sample-QASP.pdf" class="usa-link--external" target="_blank">U.S. Army Health Contracting Activity (USAHCA) QASP Template</a>. </li>
<li>Familiarize team members with accessibility features and support within design and development tools. </li>
<li>Foster a culture of accessibility so all team members understand their role in ensuring the accessibility of the product and are committed to fulfilling that role. </li>
</ol>
</div>
<div id="Gather">
<h2>Gather requirements: </h2>
<ol>
<li>Include applicable Section 508 requirements in business requirements. Use the <a href="{{site.baseurl}}/art">Accessibility Requirements Tool (ART)</a> to generate applicable Section 508 requirements. </li>
<li>Embed accessibility requirements into the initial stages of the development process. </li>
<li>Include people with disabilities in requirements gathering. If this is not possible, integrate accessibility requirements in user stories and personas during the requirements stage. </li>
</ol>
</div>
<div id="Design">
<h2>Design:</h2>
<ol>
<li>Integrate accessibility requirements in user stories and personas, wireframes, prototypes, user interface components, and color palettes. </li>
<li>Utilize accessible design patterns and guidelines to ensure a more inclusive user interface. See <a href="{{site.baseurl}}/develop/universal-design/">Design on Section508.gov</a>. </li>
<li>Consider accessibility principles and involve users with disabilities in the design review process. </li>
<li>Develop and maintain accessibility style guides that align with the organization's design and development principles. These guides should include code snippets, design patterns, and accessibility best practices for reference during development. </li>
<li>Encourage collaboration between designers, developers, and accessibility experts. </li>
<li>Use accessibility checklists. See <a href="{{site.baseurl}}/test"> Test on Section508.gov</a> for examples of accessibility checklists. </li>
</ol>
</div>
<div id="Develop">
<h2>Develop:</h2>
<ol>
<li>Foster a culture of accessibility within the development team. </li>
<li>Provide resources and educational materials on accessibility best practices. See <a href="{{site.baseurl}}/develop/software-websites/">Develop on Section508.gov</a> for more information. </li>
<li>Provide developers and content creators with the knowledge and skills required to build accessible products through accessibility training sessions tailored to specific roles and technologies, accessibility conferences, webinars, and workshops, and other learning opportunities to stay updated with the latest trends and best practices. </li>
<li>Utilize an agile approach for iterative development and testing where possible. </li>
<li>Integrate automated accessibility testing tools into the development environment. These tools can automatically scan content and identify accessibility issues based on predefined rulesets. Popular automated testing tools offer command-line interfaces, browser extensions, and application programming interfaces (APIs) that can easily be incorporated into the development workflow. </li>
<li>For the software development life cycle specifically, integrate accessibility testing into the continuous integration and continuous delivery/continuous deployment (CI/CD) pipeline to ensure accessibility checks are performed with each code commit. By automating accessibility testing in the CI/CD process, developers receive instant feedback on potential accessibility violations, allowing them to address issues promptly. </li>
<ul>
<li>Select an automated accessibility testing tool that fits your technology stack and requirements. Ensure the tool supports integration with CI/CD pipelines and provides meaningful results and actionable feedback. </li>
<li>Set up your CI/CD environment to include the accessibility testing step. This may involve using popular CI/CD platforms like Jenkins, CircleCI, GitLab CI/CD, or GitHub Actions. </li>
<li>Install and configure the selected accessibility testing tool in your CI/CD environment. Ensure the tool is properly integrated and ready to execute accessibility tests. </li>
<li>Determine the criteria for triggering accessibility tests in the CI/CD pipeline. This could be a specific branch or a set of changes to specific files. Establish clear guidelines for when the accessibility tests should run. </li>
<li>Develop scripts that invoke the automated accessibility testing tool and perform the tests on your application. These scripts should be written to execute the accessibility tests in a headless mode or with a virtual display to simulate browser interactions. </li>
<li>Configure the CI/CD pipeline to execute the accessibility test scripts automatically when triggered by the defined criteria. The tests should run on the build artifacts to assess the accessibility of the product. </li>
<li>After running the accessibility tests, analyze the results generated by the automated tool. Identify accessibility issues and prioritize them based on their severity and impact on users. Be aware of possible false results, particularly if tools are configured incorrectly. </li> 
<li>Define the criteria for failing the CI/CD build when critical accessibility issues are detected. Critical issues may include violations of essential accessibility guidelines or severe barriers to core functionality for users with disabilities. </li>
<li>Configure the CI/CD pipeline to provide feedback to developers on accessibility issues found during testing. This feedback should be actionable, allowing developers to understand the problems and work on remediation.</li>
<li>Encourage developers to address accessibility issues immediately after receiving feedback. </li>
<li>Integrate accessibility remediation tasks into the development workflow to ensure timely fixes. </li>
<li>Set up the CI/CD pipeline to retest the application after accessibility issues have been addressed. This ensures the fixes are successful and don’t introduce new accessibility problems. </li>
<li>Continuously monitor the accessibility testing process in the CI/CD pipeline and collect feedback from the development team. Use this feedback to improve the testing process and optimize the tool's configuration for better accuracy. </li>
<li>This CI/CD pipeline support repository located at <a href="https://github.com/Section508Coordinators/Dev-Auto-Pipeline-Ex" class="usa-link--external" target="_blank">https://github.com/Section508Coordinators/Dev-Auto-Pipeline-Ex</a> provides a number of resources for Jenkins CI, Atlassian Bamboo, AWS CodePipeline, Microsoft Azure Pipelines, GitHub Actions, Axe-core open-source accessibility library, HTML Code Sniffer open-source accessibility library (rules), Pa11y-ci accessibility (testing engine), React.js, Jest, and Jest-axe custom matcher MS Windows 10, Ubuntu, Amazon Web Services, and Microsoft Azure. </li>
</ul>
<li>Use accessibility linters to write accessible code. Linters are plugins or extensions that are integrated into code editors or build tools to analyze the codebase and provide real-time feedback to developers.</li>
</ol>
</div>
<div id="Test">
<h2>Test:</h2>
<ol>
<li>Ensure accessibility is part of User Acceptance Testing. </li>
<li>Disseminate resources and educational materials on <a href="{{site.baseurl}}/test">accessibility testing</a>, such as  Trusted Tester, electronic documents, audio, video, and multimedia. </li>
<li>Identify <a href="{{site.baseurl}}/test/testing-overview/">automated and manual accessibility testing needs</a>. </li> <ul>
<li>Integrate accessibility testing into development workflows. </li>
<li>See <a href= "#Design">Design</a> where CI/CD is specifically mentioned above. </li> </ul>
<li>Include user testing and <a href="{{site.baseurl}}/test/usability-testing-with-people-with-disabilities/">involve people with disabilities</a> in testing efforts.</li>
<li>Implement an accessibility-specific defect tracking system to document, prioritize, and manage accessibility issues throughout the development life cycle. This system should include details on issue severity, location, impacted content, and suggested remediation strategies. </li>
<li>Also see <a href= "#Design">Design</a> above. </li> </ol>
</div>

<h2>Deploy:</h2>
<ol>
<li>Utilize <a href="{{site.baseurl}}/test">accessibility checklists</a>, approved testing methodologies, and QASPs to ensure defects are addressed prior to deployment. </li>
<li>Review the accessibility defect tracking system to ensure high-priority accessibility defects are resolved. Ideally, all defects should be resolved before deployment, but this is not always possible. </li>
<li>Document accessibility defects in an accessibility-specific defect tracking system to document, prioritize, and remediate accessibility issues. </li>
<li>Create an accommodation plan for each defect to assist users who may encounter accessibility issues. </li></ol>
<h2>Operate and Maintain:</h2>
<ol>
<li>Once deployed, any updates or changes should follow the steps above (<a href= "#Plan">Plan</a>, <a href= "#Gather">Gather Requirements</a>, <a href= "#Design">Design</a>, <a href= "#Develop">Develop</a>, <a href= "#Test">Test</a>) to ensure accessibility testing is built into the life cycle. </li>
<li>Stay abreast of updates to <a href="https://www.access-board.gov/ict/" class="usa-link--external" target="_blank">Section 508 standards</a>; consider incorporating the latest Web Content Accessibility Guidelines (WCAG) requirements for future proofing (as of September 2023, WCAG 2.2 is pending release). </li>
<li>Conduct periodic accessibility testing to identify new accessibility defects. </li>
<ul>
<li>See <a href= "#Design">Design</a> and <a href= "#Test">Test</a> above.  </li></ul>
<li>Monitor customer feedback and accessibility complaints. </li>
<li>Generate and disseminate resources and educational materials on accessibility for content creators. </li>
<li>Monitor continuously and iterate on quality metrics identified in the QASPs. </li>
</ol>
<hr>
<div>
  <h2 style="position: absolute; clip: rect(0 0 0 0); visibility: hidden; opacity: 0;" id="footnote-label">Footnote</h2>
  <ol>
    <li id="fn1">Numerous frameworks define the phases of the Software Development Life Cycle (SDLC) in various phases; typically, between five to ten phases. Seven phases were selected to create a broadly applicable life cycle regardless of the type of ICT. The seven steps aggregate SDLC policies and standards used at the <a href="https://www.opm.gov/about-us/open-government/digital-government-strategy/fitara/opm-system-development-life-cycle-policy-and-standards.pdf" class="usa-link--external" target="_blank">U.S. Office of Personnel Management</a> and the <a href="https://www.justice.gov/archive/jmd/irm/lifecycle/ch1.htm" class="usa-link--external" target="_blank">U.S. Department of Justice</a>. <a href="#fr1" aria-label="Back to content"> ↩ </a></li>
  </ol>
</div>

**Reviewed/Updated:** September 2023