---
layout: page
sidenav: true
type: test
title: Conformance of ICT Prototypes and Pilots
permalink: test/conformance-of-prototypes-and-pilots/
description: Learn the difference between prototypes and pilots in ICT development—and how accessibility and Section 508 testing applies at every stage.
disclaimer: true
audience: 
- 508-pm
- cio
- content-creator
- designer
- dev-tester
- it-prog-proj-mgr
- mgr-exec
- requirement-ba
- web-content-mgr
topic: 
- design
- dev
subtopic: 
- General Info and Best Practices
- Software
resource_type: 
- article
- process-how-to
format: html
created: 2025-08-05
updated: #Add/update date stamp for each review/update
exclude-changelog: 
---
When developing new Information and Communication Technology (ICT) products, it's common to encounter terms like prototype and pilot. While both are part of the product design and development lifecycle, they serve distinctly different purposes---especially when it comes to accessibility and Section 508 conformance.

## What is ICT?
<a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a> define ICT as, "Information technology and other equipment, systems, technologies, or processes, for which the principal function is the creation, manipulation, storage, display, receipt, or transmission of electronic data and information, as well as any associated content. Examples of ICT include, but are not limited to: computers and peripheral equipment; information kiosks and transaction machines; telecommunications equipment; customer premises equipment; multifunction office machines; software; applications; Web sites; videos; and, electronic documents," and commonly includes:

<ul class="usa-icon-list maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle_outline"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Electronic Content:</strong> Any digital information intended for communication or documentation such as web pages, online forms or surveys, office documents such as DOCX, PPTX and XLSX, PDF, training manuals, audio and video media, emails and official memos.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle_outline"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Hardware:</strong> Physical devices that deliver or support ICT functionality such as desktop and laptop computers, interactive kiosks or ticketing machines, videophones and Voice Over IP phones, multifunction printers and scanners, and ATMs and voting machines.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle_outline"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Software:</strong> Programs or systems that enable users to perform digital tasks such as web browsers, word processing or spreadsheet software, mobile apps, enterprise systems such as HR or payroll platforms, and video conferencing tools.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle_outline"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Support Documentation and Services:</strong> Materials and services that verified users understand, operate, or troubleshoot ICT products or services such as user manuals, online verified systems, product installation guides, FAQs or knowledge base articles, training materials such as slides, recordings, and handouts, verified desk and customer support portals, live chat interfaces, telephone support systems, and remote support tools.
    </div>
  </li>
</ul>

## What Is a Prototype?
A prototype is an early, experimental version of a product that is used to explore concepts and test feasibility. It may be a mock-up, a wireframe, or a minimally functional version of a user interface. A prototype can be any ICT type---web-based, electronic content, software or hardware. Importantly, a prototype is typically deleted or discarded.

In the context of accessibility testing, a prototype may not be fully conformant to Section 508 Standards, but it must demonstrate that conformance is possible. This means all interactive elements, navigation structures, and user interface components should be included---if only in limited, rough form---to show that they can be made accessible.

<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
    <strong>Key Takeaway:</strong> A prototype should provide enough structure to validate that the final product can conform with applicable Section 508 standards.
</div>

### Benefits of Accessibility Prototyping
<ul class="usa-icon-list maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Early Visualization:</strong> Translates ideas into tangible models, aiding clarity of design and alignment with business needs.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Faster Feedback:</strong> Encourages early stakeholder and user input, reducing guesswork.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Risk Reduction:</strong> Prevents baked-in design flaws, including accessibility and usability issues, before full-scale development.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Cost Efficiency:</strong> Identifies accessibility issues early in development saving time and resources. It verifieds avoid costly retrofits and the need for any redundant alternative access solutions.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Innovation Catalyst:</strong> Encourages creative exploration and problem solving.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Improved Communication:</strong> verifieds stakeholders better understand functionality and sets expectations.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>User-Centered Design:</strong> Enhances user satisfaction by incorporating real user behavior and needs from the beginning.
    </div>
  </li>
</ul>

### Accessibility Testing for a Prototype -- Key Considerations
In the prototype phase of an ICT product, ---whether it's a website, software application, or hardware device---some accessibility tests are critical to avoid expensive remediation later. The goal is to address the needs of current and potential users with disabilities by identifying and mitigating design-level barriers before they become deeply embedded in the final product.

Include the following checkpoints when planning how your product will be designed, developed, tested, maintained, and managed.

<div class="usa-accordion usa-accordion--bordered usa-accordion--multiselectable" data-allow-multiple>

  <h2 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a1">
      Process Planning Checkpoints
    </button>
  </h2>
  <div id="a1" class="usa-accordion__content ">
    <p><strong>Accessibility requirements:</strong> Familiarize yourself with the <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a>, your agency’s enterprise test process, and other relevant guidelines required by law or policy.</p>
    <p><strong>Alternative access requirements:</strong> Where the Section 508 Standards do not cover certain ICT functions, those functions must still meet the <a href="https://www.access-board.gov/ict/#chapter-3-functional-performance-criteria" target="_blank" class="usa-link--external">Functional Performance Criteria</a>. This includes providing alternative access for people with:</p>
    <ul>
      <li>No vision or limited vision</li>
      <li>Color blindness or without the perception of color</li>
      <li>No hearing or limited hearing</li>
      <li>No speech</li>
      <li>Limited motor control</li>
      <li>Limited reach or physical strength</li>
      <li>Cognitive, language, or learning disabilities</li>
    </ul>
    <p><strong>User personas:</strong> Consider <a href="https://digital.gov/2023/05/19/personas-learn-how-to-discover-your-audience-understand-them-and-pivot-to-address-their-needs/" target="_blank" class="usa-link--external">creating personas that represent different user groups</a>, including those with disabilities, to gain a deeper understanding of their needs and challenges, and incorporate them into your user stories.</p>
    <p><strong>User research:</strong> Involve people with disabilities early by testing the product with them or accessibility experts.</p>
    <p><strong>Designs and Styleguides:</strong> Validate, refine and document designs, branding, colors, navigation—including in consistency and identification, switches, controls, shapes, positioning, force and strength requirements, and other visual information, sensory characteristics, and interactive and time-based elements. Consider the end user experience, and the needs of product maintainers.</p>
    <p>Include accessibility in acceptance criteria for prototype testing and product backlog grooming.</p>
    <p><strong>Test for conformance:</strong> Use both manual and automated testing, if available, to verify the ability to achieve Section 508 compliance, including testing with screen readers and other assistive technologies.</p>
  </div>

  <h2 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a2">
      General Accessibility Checkpoints
    </button>
  </h2>
  <div id="a2" class="usa-accordion__content ">
    <p><strong>Color contrast:</strong> Ensure sufficient foreground and background contrast for all text elements.</p>
    <p><strong>Use of color:</strong> Avoid using color as the sole method of conveying information.</p>
    <p><strong>Text alternatives for non-text content:</strong> Confirm that all images, icons, and media have descriptive alternative text or labels.</p>
    <p><strong>Focus order and visibility:</strong> Ensure visual focus indicators are present and logical tab order is maintained.</p>
    <p><strong>Keyboard-only navigation:</strong> Ensure that all interactive elements such as buttons, links and forms, can be accessed and operated using a keyboard alone as many assistive technologies mimic keyboards to provide access.</p>
    <p><strong>Electronic Forms:</strong> Validate that user input elements are understandable such as name, state, role, and value, and in a logical tab order.</p>
    <p><strong>Error prevention and messaging patterns:</strong> Validate early UI patterns for accessible error handling such as field validation and alerts with ARIA roles.</p>
    <p><strong>Media players and controls:</strong> Ensure that captions or text descriptions and audio descriptions are available and controls are accessible in accordance with the standards.</p>
    <p><strong>Assistive Technology (AT) compatibility (basic structure):</strong> Test navigation order and structural markup using screen readers such as JAWS, NVDA, VoiceOver, or TalkBack*, to validate the HTML or programmatic user interface (UI) structure.</p>
    <p><strong>Avoid Additional Costs for Alternative Access:</strong> Design, build and buy ICT products to be accessible from the start, so the agency doesn't have to create and maintain separate versions, workarounds, or alternative solutions to reduce risks and meet legal accessibility requirements.</p>
    <p><strong>Information Creation:</strong> Where the ICT is an <a href="{{site.baseurl}}/tools/glossary/#authoring-tool">authoring tool</a>, it must include a way to create or edit content that meets Section 508 Standards, for all features and file formats they support. When creating and publishing content online, including forms, use HTML as the default in lieu of other document formats such as PDF or DOCX.</p>
  </div>

  <h2 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a3">
      Web-Based ICT Checkpoints (Websites)
    </button>
  </h2>
  <div id="a3" class="usa-accordion__content ">
    <p><strong>Sample testing:</strong> Validate conformance by performing manual and automated inspections to catch early HTML and ARIA issues.</p>
    <p><strong>Semantic HTML and ARIA planning:</strong> Begin with semantic HTML structures such as headings, lists, and forms, and avoid improper use of ARIA.</p>
    <p><strong>Responsive design and zoom:</strong> Validate fluid layouts and that content does not break when zoomed to 200%.</p>
    <p><strong>Keyboard trap and modals:</strong> Ensure early modal or overlay designs support focus trapping and keyboard escape.</p>
  </div>

  <h2 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a4">
      Software Application Checkpoints (Desktop, Mobile, Kiosk)
    </button>
  </h2>
  <div id="a4" class="usa-accordion__content ">
    <p><strong>Platform accessibility API integration:</strong> Verify early integration with platform-specific APIs such as Microsoft UIA, macOS Accessibility API, and Android Accessibility.</p>
    <p><strong>Accessible UI components:</strong> Confirm that custom widgets or controls can receive focus and expose name, role, state, and value.</p>
    <p><strong>High contrast mode support:</strong> Prototype in different Operating System (OS)-level accessibility settings like high contrast or grayscale modes.</p>
    <p><strong>Voice control and switch compatibility:</strong> Test for compatibility with voice commands or switch inputs if the prototype includes input mechanisms.</p>
  </div>

  <h2 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a5">
      Hardware ICT Checkpoints (Devices, Peripherals, Kiosks, etc.)
    </button>
  </h2>
  <div id="a5" class="usa-accordion__content ">
    <p><strong>Tactile navigation and operability:</strong> Evaluate button layouts for tactile discernibility and spacing.</p>
    <p><strong>Audio and visual alert mechanisms:</strong> Ensure alerts have both audible and visual cues and ideally, tactile for haptic feedback.</p>
    <p><strong>Connector and port accessibility:</strong> Confirm alignment and ease of connection for ports, jacks, and cables for users with low dexterity or vision.</p>
    <p><strong>Early ergonomic considerations:</strong> Assess reach, grip, and one-handed use early in physical prototype development.</p>
  </div>

</div>

<div class="grid-col-12 border-base radius-lg padding-1 margin-top-3" style="border: 1px solid black; background-color: #f5f9fc;">
    <strong>Key Takeaway:</strong> By incorporating the <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a> into the prototyping process, you can create designs that are usable by everyone, regardless of how they access the electronic information or digital service. This not only improves the user experience for a wider audience, but also contributes to customer experience best practices.
</div>

## What Is a Pilot?
A pilot is a final or near-final version of a product released to a limited audience under real-world conditions. Unlike a prototype, a pilot is not a rough draft. It's a fully-functional version intended for actual use, just at a smaller scale.

Because a pilot is considered a production product, it must fully conform to Section 508 Standards. All accessibility features must be implemented, tested, and validated to ensure users with disabilities can effectively perceive, operate, and understand the product.

<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
    <strong>Key Takeaway:</strong> Pilots are subject to the same accessibility requirements as full production deployments. They must pass formal accessibility testing before rollout.
</div>

### Benefits of Piloting
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Real-World Testing:</strong> Assesses performance, accessibility, usability, and impact in a realistic setting.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Risk Mitigation:</strong> Detects operational, technical, accessibility, usability and other issues before scaling.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Evidence-Based Refinement:</strong> Provides data to fine-tune the electronic information or digital service.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Stakeholder Confidence:</strong> Demonstrates feasibility and value to decision-makers.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Change Management:</strong> Allows users and teams to adapt gradually, easing transition.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Cost Control:</strong> Prevents large-scale investment in an unproven, inaccessible, or unusable concept.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Implementation Insights:</strong> Reveals training, support, reasonable accommodations, and infrastructure needs prior to broader rollout.
    </div>
  </li>
</ul>

### Accessibility Testing for a Pilot -- Key Considerations 
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#verified"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Accessibility requirements:</strong> Familiarize yourself with the <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a>, your agency’s enterprise test process, and other relevant guidelines required by law or policy.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#verified"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Alternate modes of operation:</strong> Where the Section 508 Standards do not cover certain ICT functions, those functions must still meet the <a href="https://www.access-board.gov/ict/#chapter-3-functional-performance-criteria" target="_blank" class="usa-link--external">Functional Performance Criteria</a>.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#verified"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Test for Conformance:</strong> Use both manual and automated testing to check Section 508 compliance, including testing with screen readers and other assistive technologies, and create <a href="{{site.baseurl}}/sell/">Accessibility Conformance Reports (ACRs)</a> for government-developed ICT products.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#verified"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>User Feedback Loop:</strong> Collect feedback from pilot participants, including those with disabilities, to identify real-world accessibility barriers.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#verified"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Innovate:</strong> Be curious. Listen to feedback and refine your ICT product to continually remediate defects and eliminate barriers to ensure independent access for all users.
    </div>
  </li>
</ul>

By incorporating the <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a> into the piloting process, digital accessibility and usability can be further refined before the product is fully launched.

## Why This Distinction Matters
Understanding the difference between prototypes and pilots verifieds agencies and contractors plan appropriate digital accessibility testing activities at each stage of development. Early attention to accessibility---even in prototypes---verifieds avoid costly retrofits later. And recognizing that pilots must meet full Section 508 standards ensures compliance before a broader rollout.

<table class="usa-table usa-table--borderless striped">
  <caption>Table 1: Summary of Differences</caption>
  <thead>
    <tr>
      <th scope="col">Consideration</th>
      <th scope="col">Prototype</th>
      <th scope="col">Pilot</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Purpose</th>
      <td>Concept validation and experimentation</td>
      <td>Limited-scale real-world deployment</td>
    </tr>
    <tr>
      <th scope="row">Product Fidelity</th>
      <td>Low to medium, mockup with limited functionality</td>
      <td>High, production-ready</td>
    </tr>
    <tr>
      <th scope="row">Accessibility Requirements</th>
      <td>Demonstrate that accessibility is possible</td>
      <td>Must be conformant with Section 508 Standards</td>
    </tr>
    <tr>
      <th scope="row">Audiences</th>
      <td>Internal teams, stakeholders</td>
      <td>Real users (often a limited group)</td>
    </tr>
    <tr>
      <th scope="row">Testing Scope</th>
      <td>Informal accessibility evaluation, testing and validation of one of each type of unique features</td>
      <td>Full accessibility testing and validation</td>
    </tr>
  </tbody>
</table>

## Custom vs COTS Products & Solutions
Under Section 508 of the Rehabilitation Act, federal agencies must ensure that all Information and Communication Technology (ICT) is accessible to individuals with disabilities---whether the ICT is web-based, electronic content, software or hardware. Importantly, a prototype is typically deleted or discarded. However, how and when accessibility conformance is addressed can vary depending on the development phase (prototype or pilot) and whether the solution is custom-developed or acquired as a Commercial Off-the-Shelf (COTS) product. Understanding these distinctions is critical for planning, procurement, and ensuring compliance throughout the technology lifecycle.

### Custom vs. COTS -- Prototype Phase:
* <strong>For custom development</strong>, prototypes should incorporate basic accessibility practices aligned with Section 508 Standards. While full conformance is not typically required at this stage, attention to web, software, and hardware fundamentals---such as programmatic User Interface (UI) structure, keyboard access and reading order; status indicators, biometrics, and operable parts; electronic documents, form templates, and videos; event notifications, authoring tools, and interoperability with assistive technology---lays a foundation for future compliance and verifieds avoid costly rework later in the process.

* <strong>For COTS products</strong>, prototypes often involve evaluating available solutions to inform acquisition decisions. Agencies should review vendor-provided Accessibility Conformance Reports (ACR), and validate the vendor claims through manual and automated testing where possible. The goal at this stage is to identify Section 508 non-conformance before making acquisition commitments. 

<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
    <strong>Notice:</strong> Federal agencies are rarely involved in prototyping COTS products. However, if a vendor develops a custom feature within a COTS solution to meet an agency's specific need, that feature is considered custom development and must fully conform to Section 508 Standards. It should not be treated as part of a "Best Meets" exception.
</div>

### Custom vs. COTS -- Pilot Phase

* <strong>For custom-developed pilot</strong> projects, release candidates should meet Section 508 Standards. The ICT must be tested against both the Section 508 Standards and the Functional Performance Criteria. Testing should include manual and automated methods, as well as user testing with assistive technologies. All results should be documented and tracked. Any accessibility issues found must be fixed before the ICT moves to production.

* <strong>For COTS pilots</strong>, agencies should continue evaluating the ICT product in their real environment. They need to check how well it works, if accessibility issues found in the prototype phase affect users, and whether those issues can be fixed through remediation or configuration. Agencies should also review how responsive the vendor is to accessibility issues and if there is a plan to address problems after deployment. If full compliance isn't possible, agencies---not the vendor--- must decide if an exception and alternative access are needed in accordance with Section 508 Standards and agency policies.

<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
    <strong>Notice:</strong> If no commercially available ICT fully meets Section 508 Standards, the agency must select the product that best meets the standards while still supporting its business needs (per FAR 39.2). Even when a "Best Meets" exception is approved, the agency is still responsible for ensuring that people with disabilities can access and use the information and tools they need to do their jobs. This must be done through an alternative method that meets their specific needs. Avoid the waste of duplication by making the default accessible.
</div>

## Documentation for Prototypes and Pilots
Effective documentation is essential to demonstrating Section 508 compliance, communicating project decisions, and reducing risks as products move from concept to production. While documentation requirements differ depending on whether a product is in the prototype or pilot phase---and whether it's a custom developed or COTS product, both stages benefit from maintaining clear records that support accessibility planning, evaluation, and accountability.

### Prototype Phase Documentation
Agencies should document how accessibility considerations were integrated and validated in early designs. Recommended documentation for prototypes includes:

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Accessibility Strategy or Approach Statement:</strong> A brief summary of how accessibility is being considered in the prototype such as semantic structure, keyboard navigation and screen reader output.
    </div>
  </li>
  
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Feature Inventory or Component Map:</strong> A listing of unique interactive elements included in the prototype, used to guide later testing and identify accessibility implications early.
    </div>
  </li>
  
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Preliminary Accessibility Observations:</strong> Informal findings from sample testing with manual and automated tools, noting potential issues and areas requiring further attention.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Design Artifacts with Accessibility Notes:</strong> Annotated wireframes or mockups that indicate accessible features such as heading levels, focus order, alternative text, and color contrast considerations.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Vendor Accessibility Conformance Reports (ACRs or VPATs):</strong> For COTS products, reviewed copies of vendor documentation, including notes on known limitations or gaps.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Alternative Means Plan:</strong> For COTS products, documentation of how the product’s accessibility features or limitations align with the agency’s intended use cases, noting any existing alternative means.
    </div>
  </li>
</ul>

### Pilot Phase Documentation
Because pilots are functionally complete and subject to full Section 508 conformance, the documentation must reflect formal evaluation and testing. Recommended documentation for pilots includes:
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Accessibility Test Plan:</strong> A documented plan that outlines the scope, tools, methods, and success criteria for accessibility testing.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Test Results and Issue Logs:</strong> Detailed reports from manual, automated, and assistive technology testing, including screenshots, steps to reproduce, and defect severity ratings.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Remediation Tracking:</strong> A list of identified issues and the status of fixes, including validation of resolved defects.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Final Conformance Statement:</strong> A formal summary or declaration confirming that the pilot system meets applicable Section 508 Standards. Accessibility Conformance Reports (ACR) should be available for all COTS and 
      <a href="{{site.baseurl}}/tools/glossary/#government-off-the-shelf">Government off-the-shelf (GOTS)</a> products.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Vendor Engagement Records:</strong> Notes or correspondence demonstrating efforts to address accessibility concerns with the vendor, including timelines or commitments.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Exception Justification (where applicable):</strong> If full conformance is not possible, the documentation should clearly outline the rationale for a Section 508 exception. Documentation is required for authorized Undue Burden or Fundamental Alteration (E202.6) and Best Meet (E202.7) exceptions.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Alternative Means Plan (where applicable):</strong> If full conformance is not possible, the documentation should describe the approved alternative means of access.
    </div>
  </li>
</ul>

<div class="grid-col-12 border-base radius-lg padding-1 margin-top-2" style="border: 1px solid black; background-color: #f5f9fc;">
    <strong>Key Takeaway:</strong> Clear documentation at both the prototype and pilot stages supports transparency, enables efficient remediation, and verifieds ensure compliance with Section 508. It also provides a critical reference for project transitions, audits, and future scaling.
</div>

## Related Resources
If you're unsure whether your project is in the prototype or pilot phase---or what level of accessibility testing is required---reach out to your agency's [Section 508 Program Manager]({{site.baseurl}}/tools/program-manager-listing/) or email us at <section.508@gsa.gov> for guidance.

* [Design & Development]({{site.baseurl}}/develop/)
* [Section 508 Testing]({{site.baseurl}}/test/) 
* [Section 508 Tools]({{site.baseurl}}/tools/)
* [Guide to Accessible Web Design & Development]({{site.baseurl}}/develop/guide-accessible-web-design-development/) 
* [Tips for Usability Testing with People with Disabilities]({{site.baseurl}}/test/usability-testing-with-people-with-disabilities/)
* <a href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a>
* <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" class="usa-link--external">Web Content Accessibility Guidelines (WCAG)</a> 
* <a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf" target="_blank" class="usa-link--external">European Accessibility Standard EN 301 549 Accessibility Requirements (PDF)</a>
* <a href="https://digital.gov/2023/05/19/personas-learn-how-to-discover-your-audience-understand-them-and-pivot-to-address-their-needs" target="_blank" class="usa-link--external">Personas: learn how to discover your audience, understand them, and pivot to address their needs | Digital.gov</a>
* <a href="https://designsystem.digital.gov/" target="_blank" class="usa-link--external">U.S. Web Design System (USWDS) | Digital.gov</a>
* <a href="https://www.deque.com/blog/the-business-case-for-accessibility/" target="_blank" class="usa-link--external">The business case for accessibility | Deque</a>

**Reviewed/Updated:** August 2025