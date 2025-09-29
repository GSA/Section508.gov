---
layout: page
sidenav: true
type: develop
title: Developing a User Research Recruitment Questionnaire 
description: Guidance on developing a user research recruitment questionnaire to ensure inclusive participation and accessibility in ICT testing.
permalink: develop/recruitment-questionnaire-process-v2/
audience: 
- 508-pm
- dev-tester
- vendor
topic: 
- design
- dev
- other
- test
subtopic: 
- Design, Develop, Testing for Accessibility Training or Tools
- General Info and Best Practices
resource_type: 
- process-how-to
format: html
created: 2025-09-26
updated: 
disclaimer: 
exclude-changelog: 
---
Effective user research starts with thoughtful participant recruitment. This page outlines a structured recruitment questionnaire process designed to help you engage people with disabilities (PWD) in your research. Use this recruitment questionnaire process in conjunction with the guidance provided in <a href="{{site.baseurl}}/develop/usability-testing-with-people-with-disabilities/">Conducting User Research with People with Disabilities</a> to ensure your studies are inclusive, representative, and accessible from start to finish. Following these steps helps you identify eligible participants, understand their needs, and gather meaningful insights to improve the usability of your digital products.

## Questionnaire Considerations
Use this structured questionnaire process to recruit people with disabilities (PWD) and ensure your research is inclusive, accessible, and produces actionable insights.

<div class="margin-bottom-3">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

<div id="accordion-group-questions" class="usa-accordion usa-accordion--bordered usa-accordion--multiselectable" data-allow-multiple>
  <div class="usa-accordion" id="recruitment-accordion">
    <!-- 1. Define the Objective -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button" aria-expanded="true" aria-controls="objective-content">
        Define the Objective
      </button>
    </h3>
    <div id="objective-content" class="usa-accordion__content">
      <p><strong>Goal:</strong> Establish the purpose of the user research engagement.</p>
      <p><strong>Best Practice:</strong> Be clear about what you want to learn from participants and the feature, application, or solution being tested.</p>
      <p><strong>Example:</strong> Identify or confirm usability issues in an application, website, or digital solution.</p>
    </div>
    <!-- 2. Identify Sources of Potential Subjects -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button" aria-expanded="false" aria-controls="sources-content">
        Identify Sources of Potential Subjects
      </button>
    </h3>
    <div id="sources-content" class="usa-accordion__content">
      <p><strong>Goal:</strong> Find diverse participants who reflect the population of people with disabilities (PWD).</p>
      <p><strong>Best Practice:</strong> Use multiple recruitment channels to reach PWD.</p>
      <p><strong>Example:</strong></p>
      <ul>
        <li>Disability advocacy groups and community organizations</li>
        <li>Accessibility companies and user research panels</li>
        <li>Direct recruitment through agency programs, job postings, or disability-focused employee resource groups</li>
      </ul>
    </div>
    <!-- 3. Screen for People with Disabilities -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button" aria-expanded="false" aria-controls="screening-content">
        Screen for People with Disabilities
      </button>
    </h3>
    <div id="screening-content" class="usa-accordion__content">
      <p><strong>Goal:</strong> Ensure participation from people with a range of disabilities.</p>
      <p><strong>Best Practice:</strong> Include participants with diverse impairments.</p>
      <p><strong>Example:</strong></p>
      <ul>
        <li>Without vision or limited vision</li>
        <li>Without perception of color</li>
        <li>With hearing loss or limited hearing</li>
        <li>Without speech</li>
        <li>With limited manipulation, reach, or strength</li>
        <li>With cognitive, language, or learning limitations</li>
      </ul>
    </div>
    <!-- 4. Identify User Demographics and Psychographics -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button" aria-expanded="false" aria-controls="demographics-content">
        Identify User Demographics and Psychographics
      </button>
    </h3>
    <div id="demographics-content" class="usa-accordion__content">
      <p><strong>Goal:</strong> Collect demographic and psychographic information to understand your audience.</p>
      <p><strong>Best Practice:</strong> Ask about technology comfort, disability experience, and personal background.</p>
      <p><strong>Example:</strong></p>
      <ul>
        <li>Age, gender, ethnicity, education, profession</li>
        <li>Comfort with technology and assistive devices</li>
        <li>Time of disability onset (from birth, early age, newly disabled)</li>
      </ul>
    </div>
    <!-- 5. Draft Screener Questions -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button" aria-expanded="false" aria-controls="screener-content">
        Draft Screener Questions
      </button>
    </h3>
    <div id="screener-content" class="usa-accordion__content">
      <p><strong>Goal:</strong> Identify eligible participants and their technology or assistive device usage.</p>
      <p><strong>Best Practice:</strong> Combine open-ended and multiple-choice questions; cover disability type, assistive tech, and comfort with devices.</p>
      <p><strong>Example:</strong></p>
      <ul>
        <li>Do you have a disability? If yes, please describe.</li>
        <li>Do you identify as living with any type of disability? Select all that apply:
          <ul>
            <li>Attention-related conditions</li>
            <li>Blindness or low vision</li>
            <li>Color vision deficiency</li>
            <li>Cognitive or intellectual disabilities</li>
            <li>Deafness or hearing impairments</li>
            <li>Dyslexia</li>
            <li>Learning disabilities</li>
            <li>Low vision or hearing difficulties</li>
            <li>Physical or mobility limitations</li>
            <li>Speech or communication difficulties</li>
            <li>Temporary disabilities</li>
            <li>Other conditions or disabilities</li>
          </ul>
        </li>
        <li>Which assistive devices do you use? 
          <ul>
            <li>Braille display</li>
            <li>Hearing aid</li>
            <li>Screen magnification</li>
            <li>Screen reader</li>
            <li>Mobility aids</li>
            <li>Other</li>
          </ul>
        </li>
        <li>How often do you use assistive technology, and what types do you use?</li>
        <li>How do you self-identify in terms of cognitive, neurological, or physical disabilities?</li>
        <li>How comfortable are you with technology? For example, using keyboard-only navigation, assistive technology, or your preferred devices.</li>
      </ul>
    </div>
    <!-- 6. Set a Budget for Recruitment Incentives -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button" aria-expanded="false" aria-controls="incentives-content">
        Set a Budget for Recruitment Incentives
      </button>
    </h3>
    <div id="incentives-content" class="usa-accordion__content">
      <p><strong>Goal:</strong> Encourage participation from PWD.</p>
      <p><strong>Best Practice:</strong> Consider higher or premium incentives to support participation.</p>
      <p><strong>Example:</strong></p>
      <ul>
        <li>Offer gift cards, premium incentives, or ride-share reimbursements</li>
        <li>Provide additional encouragement for attendance or acceptance by participants with disabilities</li>
      </ul>
    </div>
    <!-- 7. Obtain Informed Consent -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button" aria-expanded="false" aria-controls="consent-content">
        Obtain Informed Consent
      </button>
    </h3>
    <div id="consent-content" class="usa-accordion__content">
      <p><strong>Goal:</strong> Ensure participants understand the study and agree to participate.</p>
      <p><strong>Best Practice:</strong> Provide consent documents in advance and record consent during the session.</p>
      <p><strong>Example:</strong></p>
      <ul>
        <li>Send informed consent documents before arrival</li>
        <li>Read aloud upon arrival, then have participants sign and date</li>
        <li>Record consent on camera if applicable</li>
      </ul>
    </div>
    <!-- 8. Develop a Schedule -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button" aria-expanded="false" aria-controls="schedule-content">
        Develop a Schedule
      </button>
    </h3>
    <div id="schedule-content" class="usa-accordion__content">
      <p><strong>Goal:</strong> Ensure a smooth and accessible research session.</p>
      <p><strong>Best Practice:</strong> Plan breaks, buffer time, and backup participants.</p>
      <p><strong>Example:</strong></p>
      <ul>
        <li>Include breaks between participants</li>
        <li>Schedule sufficient time for each session</li>
        <li>Include floaters or extra participants to adjust for no-shows</li>
      </ul>
    </div>
  </div>
</div>

## Requirement Questionnaire Checklist
<table class="usa-table usa-table--borderless usa-table--striped">
  <caption>Table: 1: Checklist for Developing a User Research Recruitment Questionnaire</caption>
  <thead>
    <tr>
      <th scope="col">Status</th>
      <th scope="col">Step</th>
      <th scope="col">Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-center">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.abseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use></svg>
      </td>
      <td>Define the Objective</td>
      <td>Establish the purpose of the user research engagement.</td>
    </tr>
    <tr>
      <td class="text-center">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.abseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use></svg>
      </td>
      <td>Identify Sources of Potential Subjects</td>
      <td>Find diverse participants who reflect the population of people with disabilities (PWD).</td>
    </tr>
    <tr>
      <td class="text-center">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.abseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use></svg>
      </td>
      <td>Screen for People with Disabilities</td>
      <td>Ensure participation from people with a range of disabilities.</td>
    </tr>
    <tr>
      <td class="text-center">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.abseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use></svg>
      </td>
      <td>Identify User Demographics and Psychographics</td>
      <td>Collect demographic and psychographic information to understand your audience.</td>
    </tr>
    <tr>
      <td class="text-center">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.abseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use></svg>
      </td>
      <td>Draft Screener Questions</td>
      <td>Identify eligible participants and their technology or assistive device usage.</td>
    </tr>
    <tr>
      <td class="text-center">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.abseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use></svg>
      </td>
      <td>Set a Budget for Recruitment Incentives</td>
      <td>Encourage participation from PWD.</td>
    </tr>
    <tr>
      <td class="text-center">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.abseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use></svg>
      </td>
      <td>Obtain Informed Consent</td>
      <td>Ensure participants understand the study and agree to participate.</td>
    </tr>
    <tr>
      <td class="text-center">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{site.abseurl}}assets/img/sprite.svg#check_box_outline_blank"></use></svg>
      </td>
      <td>Develop a Schedule</td>
      <td>Ensure a smooth and accessible research session.</td>
    </tr>
  </tbody>
</table>

<strong>Reviewed/Updated:</strong> September 2025

<script>

$("#expand-all").on("click", function () {
  $("#accordion-group-questions .usa-accordion__button").attr("aria-expanded", "true");
  $("#accordion-group-questions .usa-accordion__content").removeAttr("hidden");
  updateHashFromOpenAccordions();
});

$("#collapse-all").on("click", function () {
  $("#accordion-group-questions .usa-accordion__button").attr("aria-expanded", "false");
  $("#accordion-group-questions .usa-accordion__content").attr("hidden", "");
  updateHashFromOpenAccordions();
});

</script>