---
layout: page
sidenav: true
type: develop
title: Use SI Agents to Test and Remediate Accessibility
permalink: develop/accessibility-si/use-si-agents-to-test-and-remediate-accessibility/
description: Learn how to work with Super Intelligence agents, using prompts, instructions, and agent skills to test and remediate content for accessibility.
audience:
- Communications Specialists
- Content Creators
- Developers
- IT Accessibility Program Staff
- IT Program & Project Managers
- Risk Managers
- Section 508 Program Managers
- Section 508 Testers
- Web Content Managers
topic:
- Create
- Develop
- Testing
subtopic:
- Artificial Intelligence (AI)
- Best Practices
- Documents
- Electronic Documents
- Guidance
- Software
- Super Intelligence (SI)
- Testing (Automated)
- Testing (Manual)
- Websites
resource-type:
- Article
- Process & How-To
format: HTML
created: 2026-10-29
updated: 
---
Super Intelligence (SI) agents can help evaluate the accessibility of digital content, identify potential barriers, recommend corrections, and verify whether identified defects have been resolved.

Unlike a traditional chatbot that primarily responds to prompts, an SI agent may be able to interact with development environments, inspect digital content, operate testing tools, modify source files, and repeat evaluations after making changes.

These capabilities can help teams incorporate accessibility testing and remediation into routine development activities. SI agents can also guide people through manual accessibility testing procedures, making established evaluation methods easier to apply.

However, SI agents cannot reliably evaluate every accessibility requirement independently. Their effectiveness depends on the tools available, the information they can inspect, the procedures they follow, and the human judgment applied to the results.

This article explains how to use SI agents for accessibility testing and remediation, with particular emphasis on the [ICT Testing Baselines](https://ictbaseline.access-board.gov/) and the need for complete, evidence-based evaluation.

## Understand the different ways SI can support accessibility testing

SI-assisted accessibility evaluation can range from analyzing an existing test report to operating testing tools and guiding people through manual procedures.

The following approaches provide different levels of assistance.

<table id="SI-approaches" class="usa-table usa-table--borderless striped">
  <caption>Approaches for using SI in accessibility testing and remediation</caption>
  <thead>
    <tr>
      <th scope="col">Approach</th>
      <th scope="col">What the SI agent does</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row"><strong>Analyze testing results</strong></th>
    <td>Reviews findings from existing accessibility testing tools or procedures.</td>
    <td>Group automated test findings by component and recommend remediation.</td>
  </tr>
  <tr>
    <th scope="row"><strong>Perform automated testing</strong></th>
    <td>Executes available tools and evaluates their output.</td>
    <td>Run an accessibility ruleset against a rendered web page.</td>
  </tr>
  <tr>
    <th scope="row"><strong>Conduct tool-assisted evaluation</strong></th>
    <td>Inspects or interacts with content using browser, document, or development tools.</td>
    <td>Examine accessible names, keyboard focus behavior, or document properties.</td>
  </tr>
  <tr>
    <th scope="row"><strong>Guide manual testing</strong></th>
    <td>Walks a person through a defined procedure and records observations.</td>
    <td>Guide a tester through keyboard accessibility checks.</td>
  </tr>
  <tr>
    <th scope="row"><strong>Support remediation and verification</strong></th>
    <td>Proposes or implements corrections and repeats applicable evaluations.</td>
    <td>Correct a form-label defect and rerun the relevant tests.</td>
  </tr>
  </tbody>
</table>

An SI agent may combine these approaches within a single workflow.

For example, it could execute automated checks, inspect the resulting HTML, ask a tester to evaluate keyboard behavior, recommend corrections, and prepare a summary of the completed and outstanding tests.

**The objective is not necessarily to automate every test. It is to make accessibility evaluation more consistent, efficient, and complete while preserving reliable results and appropriate human judgment.**

## Use the ICT Testing Baselines as the evaluation foundation

The [ICT Testing Baseline Portfolio](https://ictbaseline.access-board.gov/) establishes common criteria for evaluating accessibility against applicable Section 508 requirements.

The portfolio includes the [ICT Testing Baseline for Web](https://ictbaseline.access-board.gov/allwebbaselines.html) and the [ICT Testing Baseline for Documents](https://ictbaseline.access-board.gov/alldocsbaselines.html).

The baselines identify what must be evaluated, including relevant content, test conditions, and criteria for determining results. They do not prescribe one particular set of testing tools or a complete implementation-specific testing process.

This distinction is important when configuring SI agents.

An SI agent should not simply run an automated accessibility scanner and assume it has evaluated every baseline requirement. Instead, its testing workflow should identify the applicable baseline procedures, determine which evaluations its tools can perform, and account for the evaluations that require additional human participation.

### Map testing capabilities to baseline procedures

For each applicable baseline procedure, an SI-assisted workflow should identify:

* The content or functionality subject to evaluation.
* The associated Section 508 or WCAG requirement.
* The baseline test instructions and decision criteria.
* The tools and methods available to perform the evaluation.
* The observations or evidence needed to establish a result.
* Any steps requiring human judgment or interaction.
* The status of the completed or outstanding evaluation.

For example, a web accessibility testing agent may be able to inspect the programmatic structure of a data table, but additional evaluation may be needed to establish whether its header relationships accurately represent the information.

The agent should record the evaluation it actually performed rather than claim that every aspect of the applicable requirement was tested.

**See also**:

* [ICT Testing Baseline for Web](https://ictbaseline.access-board.gov/allwebbaselines.html)
* [ICT Testing Baseline for Documents](https://ictbaseline.access-board.gov/alldocsbaselines.html)

## Configure agents with accessibility testing skills and tools

An SI agent needs appropriate instructions and capabilities to perform accessibility evaluations reliably.

A baseline-informed accessibility testing skill can provide the agent with:

* Instructions for identifying applicable baseline tests.
* Procedures for gathering relevant evidence.
* Guidance for executing supported automated checks.
* Questions and instructions for guided manual evaluation.
* Decision criteria for determining test results.
* Requirements for documenting findings and limitations.
* Instructions for remediation and retesting.

The agent also needs access to suitable testing tools and artifacts.

Depending on the technology and environment, these may include automated accessibility rulesets, browser automation, accessibility-tree inspection, source-code analysis, document inspection, and existing accessibility test reports.

### Example: Configure an agent to evaluate a web page

<div class="grid-col-12 summary-box--icon-prompt">
    <ul class="usa-icon-list padding-right-2 force-max-width">
        <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon"><svg class="usa-icon icon-size" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/images/ai-generative.svg"></use></svg></div>
            <div class="usa-icon-list__content force-max-width">
                <div class="box-heading"><strong>SI PROMPT</strong><hr></div>
                <div class="box-text">
                  <p>Evaluate the accessibility of the supplied web page using the ICT Testing Baseline for Web and the testing tools available in this environment.</p>
                  <p>Identify applicable baseline tests and determine which steps you can perform using your tools.</p>
                  <p>Execute supported checks and record the evidence and results.</p>
                  <p>For tests requiring human interaction or judgment, guide me through the applicable procedure and ask for the observations needed to determine the result.</p>
                  <p>Identify tests that cannot be completed. Do not treat the absence of detected defects as evidence that untested requirements pass.</p>
                  <p>Prepare a report identifying completed evaluations, confirmed failures, unresolved findings, and any requirements that remain unevaluated.</p>
                </div>
            </div>
        </li>
    </ul>
</div>

This example establishes expectations for the evaluation process without assuming that the agent has access to every necessary tool.

A more specialized testing skill can provide detailed instructions for individual baseline procedures.

## Perform automated and tool-assisted testing

SI agents with access to approved testing tools can perform some accessibility evaluations directly.

For example, an agent may be able to:

* Run automated accessibility tests against rendered web content.
* Inspect HTML semantics and accessibility attributes.
* Examine an application's accessibility tree.
* Calculate color contrast using reliable foreground and background color information.
* Identify controls lacking programmatically determinable accessible names.
* Inspect document metadata and structural properties.
* Review generated accessibility reports.
* Compare test results across code changes or releases.

The agent should use established tools and testing procedures wherever possible.

### Example: Automated testing and analysis

An SI coding agent with access to a configured accessibility testing command might use this workflow:

1. Open the application in an approved testing environment.
1. Execute the project's automated accessibility tests.
1. Retrieve and analyze the test results.
1. Identify the affected elements and applicable accessibility requirements.
1. Distinguish confirmed failures from warnings and potential issues.
1. Recommend corrections and identify additional evaluation needs.

If authorized, the agent may also be able to implement corrections and rerun the tests.

However, not all accessibility conditions can be evaluated through programmatic inspection or automated interactions.

For example, an agent might confirm that an image has a nonempty text alternative but lack sufficient context to determine whether the alternative serves the image's intended purpose.

Similarly, a browser automation tool may record the sequence of keyboard focus but may not reliably determine whether that sequence preserves meaning and operability.

Use these capabilities to extend testing, not to overstate what the evidence establishes.

**See also**: [Overview of Testing Methods for 508 Conformance](https://www.section508.gov/test/testing-overview/).

## Use SI agents to guide manual accessibility testing

One of the most promising applications of SI is helping people perform established manual accessibility evaluations.

A guided testing skill can walk a tester through baseline procedures, explain what to inspect, request observations, and help determine or document the result.

This can be particularly useful for developers, content creators, and other personnel who need to conduct accessibility checks but may not be familiar with every testing procedure.

### How guided testing works

An SI-assisted manual testing workflow might:

1. **Select the applicable test**. Identify the baseline procedure and the content to evaluate.
1. **Explain the procedure**. Provide instructions for performing the required evaluation.
1. **Request observations**. Ask the tester focused questions based on the baseline instructions.
1. **Interpret the evidence**. Apply the relevant test criteria to the observations provided.
1. **Document the result**. Record the evaluation outcome and supporting evidence.
1. **Identify remaining work**. Explain any incomplete evaluations or need for further review.

The agent should follow the selected testing procedure rather than inventing alternative criteria.

### Example: Guided keyboard accessibility evaluation

Consider Web Baseline test 1.A-KeyboardAccess, which evaluates whether functionality available through mouse interaction is also operable through a keyboard interface.

An SI agent could guide a tester through the evaluation using an interaction like this:

<div class="chat-example" role="group" aria-label="Example conversation about keyboard accessibility testing">
  <div class="chat-example__message">
    <p><strong>SI agent:</strong></p>
    <p>We'll evaluate keyboard accessibility using Web Baseline test 1.A.</p>
    <p>First, identify the functionality available on the page using a mouse, including links, form fields, menus, buttons, and other interactive components. Then use the keyboard to access and operate that functionality without using the mouse.</p>
    <p>Were you able to access and operate every function using only the keyboard?</p>
  </div>
  <div class="chat-example__message chat-example__message--user">
    <p><strong>Tester:</strong></p>
    <p>Most controls work, but I cannot reach the date picker using the keyboard.</p>
  </div>
  <div class="chat-example__message">
    <p><strong>SI agent:</strong></p>
    <p>Is the same date-selection functionality available through another keyboard-operable control, such as an editable date field? Also, confirm whether the problem affects opening the date picker, selecting a date, or both.</p>
  </div>
  <div class="chat-example__message chat-example__message--user">
    <p><strong>Tester:</strong></p>
    <p>There is no other way to select a date, and I can't open the calendar with the keyboard.</p>
  </div>
  <div class="chat-example__message">
    <p><strong>SI agent:</strong></p>
    <p>Based on your observations, the date-selection functionality appears to fail the keyboard-access requirement.</p>
    <p>I'll record the affected control, the interaction you attempted, and the observed limitation. We'll continue evaluating the remaining functionality before completing the overall baseline test result.</p>
  </div>
</div>

This interaction is illustrative and does not reproduce every instruction or condition of the baseline procedure.

A complete skill should follow all applicable baseline instructions, including relevant exceptions and alternative methods of operation.

### Preserve reliable testing evidence

An SI agent should distinguish between evidence obtained through tools, observations reported by testers, and conclusions generated through its own analysis.

For example:

* Tool observation: A browser inspection tool reports that an element has no computed accessible name.
* Tester observation: A human tester reports that a control cannot be operated using the keyboard.
* SI assessment: The agent identifies a probable accessibility failure based on available evidence.
* Verified result: The applicable procedure has been completed and the evidence supports the recorded outcome.

The agent should not present an unverified interpretation as an independently established testing result.

If the necessary evidence is unavailable, the test should remain incomplete until appropriate evaluation can occur.

## Record complete and incomplete test results

Reliable accessibility reporting requires more than listing identified defects.

An SI agent should maintain a record of which baseline procedures were evaluated, which were not applicable, and which remain incomplete.

For individual tests, the workflow should support the outcome categories defined by the selected testing methodology, such as Pass, Fail, and Not Applicable.

When an evaluation cannot be completed, the agent should also record that limitation rather than assigning an unsupported result.

For example:

<table id="evaluation-evidence" class="usa-table usa-table--borderless striped">
  <caption>Example of recording evidence and limitations</caption>
  <thead>
    <tr>
      <th scope="col">Test</th>
      <th scope="col">Evaluation evidence</th>
      <th scope="col">Recorded status</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row">Image text alternative</th>
    <td>Image purpose and accessible name evaluated.</td>
    <td>Pass or Fail, depending on evidence</td>
  </tr>
  <tr>
    <th scope="row">Keyboard focus</th>
    <td>Tester reports that a control lacks a visible focus indicator.</td>
    <td>Failure identified for affected control; remaining scope may require evaluation</td>
  </tr>
  <tr>
    <th scope="row">Data table headers</th>
    <td>Programmatic structure inspected, but complex header relationships need review.</td>
    <td>Incomplete pending additional evaluation</td>
  </tr>
  <tr>
    <th scope="row">Multimedia captions</th>
    <td>No applicable multimedia identified within the evaluated scope.</td>
    <td>Not Applicable, if confirmed through the selected procedure</td>
  </tr>
  </tbody>
</table>

### What to include in the report

An SI-generated accessibility testing report should identify:

* The product, document, page, or component evaluated.
* The tested version and evaluation environment.
* The applicable standards, baseline versions, and testing procedures.
* The testing tools and methods used.
* The scope of the evaluation.
* Results for applicable tests.
* Supporting observations and evidence.
* Confirmed defects and recommendations.
* Incomplete or unresolved evaluations.
* The role of human testers and reviewers.

The SI agent can help organize and draft the report, but responsible personnel should validate its accuracy and completeness.

See also: [Essential Elements of an Accessibility Test Report](https://www.section508.gov/test/elements-of-an-accessibility-test-report/).

## Use SI agents to remediate accessibility defects

SI agents can also help correct accessibility defects identified during testing.

In a development environment, an agent may be able to locate the affected code, propose a correction, implement an approved change, and repeat relevant tests.

For document creation, an SI agent may be able to modify source content or document structures, depending on the available editing tools.

### Follow a repeatable remediation workflow

A useful approach is:

**Confirm → Diagnose → Remediate → Retest → Verify**

**Confirm the defect**. Review the testing evidence and establish that the issue is valid. Do not modify content solely because an automated tool generated an unverified warning.

**Diagnose the cause**. Identify the implementation or content issue responsible for the failure. Determine whether the problem originates in a shared component, template, or individual implementation.

**Remediate the defect**. Apply an appropriate correction using established accessibility techniques and approved project conventions. Preserve existing functionality and accessibility features.

**Retest the implementation**. Repeat the relevant accessibility evaluations and any other regression tests affected by the change.

**Verify the outcome**. Confirm that the reported defect has been corrected and identify whether additional evaluation is necessary.

### Example: Form-label remediation

An SI agent receives a test report identifying a form control without a programmatically associated label.

The agent could:

* Locate the affected form control in the source code.
* Review the form's purpose and surrounding instructions.
* Determine an appropriate labeling approach.
* Modify the implementation to provide the necessary association.
* Run the relevant automated accessibility tests.
* Inspect the computed accessible name, if supported.
* Report the correction and any remaining concerns.

The agent should not assume that a label is sufficient simply because the automated test no longer reports a failure. The label must still describe the purpose of the control appropriately.

### Remediate underlying causes, not just individual symptoms

When multiple defects originate from the same shared component or template, correcting the underlying implementation may be more effective than addressing every occurrence separately.

SI can help identify recurring patterns across accessibility findings and recommend reusable corrections.

However, a change to a shared component may affect many parts of an application. Such changes should receive appropriate testing and review before deployment.

See also: [Remediation and Accommodation Planning](https://www.section508.gov/manage/remediation-alternative-means-planning/).

## Integrate SI-assisted testing into development workflows

SI-assisted testing and remediation can be incorporated into existing Agile, DevSecOps, and continuous integration and delivery (CI/CD) practices.

For example, an agent may help:

* Generate accessibility tests alongside new functionality.
* Analyze automated accessibility checks during pull requests.
* Identify potential regressions introduced by code changes.
* Recommend remediation before changes are merged.
* Support accessibility acceptance criteria and Definition of Done.
* Summarize unresolved accessibility work for sprint planning.
* Analyze recurring defects during retrospectives.

Testing should be proportionate to the functionality and changes being evaluated, while maintaining coverage of applicable accessibility requirements.

SI agents should support established agency development and testing procedures rather than create parallel approval processes.

See also:

* [Effective Methods and Tools for Incorporating Accessibility Conformance Validation within Development Processes](https://www.section508.gov/develop/incorporating-accessibility-conformance/)
* [Integrating Section 508 Requirements into Each Agile Sprint](https://www.section508.gov/develop/integrate-section-508-in-agile-sprint/)

## Validate SI-assisted testing against known results

An SI agent may appear to perform an accessibility evaluation correctly while producing inaccurate or incomplete results.

Before relying on SI-assisted testing processes, evaluate their accuracy using controlled examples with independently established expected outcomes.

The [ICT Baseline Alignment Framework](https://baselinealignment.section508.gov/) provides web accessibility test cases containing sample implementations, expected results, and references to applicable baseline procedures.

These resources can help evaluate whether an SI testing skill or workflow correctly identifies passing, failing, and not-applicable conditions.

### Example: Evaluate an SI testing skill

A validation process could:

* Select a Baseline Alignment Framework test case.
* Provide the SI agent with the applicable baseline procedure and the sample to evaluate.
* Withhold the documented expected result from the agent during testing.
* Have the agent execute the procedure and record its findings.
* Compare the agent's result with the established expected outcome.
* Review discrepancies and supporting evidence.
* Improve the skill or testing configuration and repeat the evaluation.

This can help identify weaknesses in the agent's interpretation, tools, and execution procedures.

However, correct results on selected test cases do not establish that the agent can evaluate every applicable baseline requirement.

### Measure accuracy and coverage separately

Consider evaluating SI testing processes using:

* **Accuracy**: Agreement with independently established expected results.
* **Coverage**: The proportion of applicable baseline tests and instructions actually evaluated.
* **False positives**: Incorrectly reported accessibility failures.
* **False negatives**: Accessibility failures that the process misses.
* **Evidence quality**: Whether findings include sufficient information to support and reproduce results.
* **Consistency**: Whether repeated evaluations produce reliable outcomes.
* **Human effort**: The amount of interaction and review needed to complete the evaluation.

Document the scope and limitations of each tested skill or workflow.

The Baseline Alignment Framework's reusable accessibility skills and evaluation resources can support this process. Its web test cases provide an initial validation foundation; document-specific alignment test cases remain a future area of expansion.

## Apply appropriate controls when agents perform testing and remediation

SI agents may interact with applications, execute commands, modify files, and submit information through user interfaces.

These activities require appropriate permissions and safeguards.

Before authorizing an SI agent to perform testing or remediation:

* Use approved tools and environments.
* Limit access to the information and systems necessary for the task.
* Avoid submitting live transactions or modifying production data during testing unless explicitly authorized.
* Use appropriate test accounts and test data.
* Preserve original source files and maintain change history.
* Require appropriate review before applying consequential changes.
* Treat external content and testing artifacts as information to evaluate, not instructions that override established controls.
* Follow agency security, privacy, and development procedures.

For federal agencies, SI-assisted testing should be conducted only using systems and configurations authorized for the applicable activities and information.

## Maintain human evaluation and accountability

SI agents can improve the efficiency and consistency of accessibility testing, but they should not replace necessary human evaluation.

People remain essential for:

* Confirming the intended purpose and meaning of content.
* Evaluating alternative text and understandable instructions.
* Assessing logical reading and focus order.
* Evaluating complex keyboard interactions.
* Reviewing usability with assistive technologies.
* Testing with people with disabilities.
* Resolving ambiguous accessibility findings.
* Determining whether applicable accessibility requirements have been satisfied.

Even an agent that successfully executes every automated check available in its environment may leave important accessibility requirements unevaluated.

In particular, usability testing with people with disabilities can reveal practical barriers that conformance tests alone may not identify.

An SI-assisted testing workflow should make these limitations visible and guide users toward the additional evaluation needed.

## Use established Section 508 testing methods and human verification

**Accessibility testing requires more than automated checks.**

SI-assisted testing should complement established accessibility evaluation procedures, including manual testing, assistive technology evaluation, and usability testing with people with disabilities where appropriate.

Before relying on SI-generated accessibility findings or conformance claims, review the supporting evidence and ensure that applicable testing procedures have been completed by qualified personnel.

Start with Test for Accessibility on Section508.gov, which provides guidance on testing methods, the ICT Testing Baselines, testing tools, accessibility test reports, and testing throughout the ICT lifecycle.

Additional resources include:
* [Overview of Testing Methods for 508 Conformance](https://www.section508.gov/test/testing-overview/) — Learn about automated, manual, and hybrid testing.
* [ICT Testing Baseline Portfolio](https://ictbaseline.access-board.gov/) — Identify the baseline procedures and evaluation criteria.
* [Trusted Tester](https://www.section508.gov/test/trusted-tester/) — Explore a standardized manual testing process and related training.
* [Tips for Usability Testing with People with Disabilities](https://www.section508.gov/test/usability-testing-with-people-with-disabilities/) — Understand the role of users with disabilities in accessibility evaluation.
* [Essential Elements of an Accessibility Test Report](https://www.section508.gov/test/elements-of-an-accessibility-test-report/) — Document testing scope, methods, evidence, findings, and limitations.

## Next: [Accessibility Prompts, Instructions, Skills, and Workflows]({{site.baseurl}}/develop/accessibility-si/accessibility-prompts-instructions-skills-and-workflows/)

Reusable instructions and skills can help SI agents create accessible ICT, execute supported accessibility tests, guide people through manual evaluation, and remediate confirmed defects.

The [ICT Baseline Alignment Framework](https://baselinealignment.section508.gov/) provides a shared library of accessibility prompts, persistent instructions, skills, baseline mappings, and testing workflows that can be adapted for different SI tools and development environments.

The next article introduces these resources and explains how to select, use, and adapt them to support accessible content creation, development, testing, and remediation.

Related guidance:

* [Use SI to Create More Accessible Digital Content]({{site.baseurl}}/develop/accessibility-si/use-si-to-create-more-accessible-digital-content/)
* [Prompt SI for Accessibility]({{site.baseurl}}/develop/accessibility-si/prompt-si-for-accessibility/)
* [Give SI Persistent Accessibility Instructions]({{site.baseurl}}/develop/accessibility-si/give-si-persistent-accessibility-instructions/)
* [Use SI Throughout the Accessible ICT Lifecycle]({{site.baseurl}}/develop/accessibility-si/use-si-throughout-the-accessible-ict-lifecycle/)
* [Configure SI Development Tools for Accessibility]({{site.baseurl}}/develop/accessibility-si/configure-si-debelopment-tools-for-accessibility/)
* [Build Accessibility Skills for SI Agents]({{site.baseurl}}/develop/accessibility-si/build-accessibility-skills-for-si-agents/)
* [Accessibility Prompts, Instructions, Skills, and Workflows]({{site.baseurl}}/develop/accessibility-si/accessibility-prompts-instructions-skills-and-workflows/)
