---
layout: page
sidenav: true
type: develop
title: Developing a User Research Recruitment Questionnaire 
description: Guidance on developing a user research recruitment questionnaire to ensure inclusive participation and accessibility in ICT testing.
permalink: develop/recruitment-questionnaire-process/
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
        Step 1. Define the Objective
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
        Step 2. Identify Sources of Potential Subjects
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
        Step 3. Screen for People with Disabilities
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
        Step 4. Identify User Demographics and Psychographics
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
        Step 5. Draft Screener Questions
      </button>
    </h3>
    <div id="screener-content" class="usa-accordion__content">
      <p><strong>Goal:</strong> Identify eligible participants and their technology or assistive device usage.</p>
      <p><strong>Best Practice:</strong> Combine open-ended and multiple-choice questions; cover disability type, assistive tech, and comfort with devices.</p>
      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Open ended questions</strong> such as: 
          <ul>
            <li>Do you have a disability? If yes, and you feel confortable sharing, please describe.</li>
          </ul>
        </li>
        <li><strong>"Select all that apply" questions</strong> such as: 
          <ul>
            <li><strong>Do you identify as living with any type of disability?</strong>
              <ul>
                <li>Attention disorders</li>
                <li>Blindness or blind</li>
                <li>Cognitive impairment</li>
                <li>Deaf</li>
                <li>Dyscalculia</li>
                <li>Dysgraphia</li>
                <li>Dyslexia</li>
                <li>Learning disabilities</li>
                <li>Low or limited hearing, or hard of hearing</li>
                <li>Low or limited vision</li>
                <li>Memory issues</li>
                <li>Neurodiversity</li>
                <li>Neurological disorders</li>
                <li>Physical or dexterity issues or limited dexterity or mobility</li>
                <li>Reading disorders</li>
                <li>Speech difficulties</li>
                <li>Temporary disabilities such as a broken arm</li>
                <li>Other</li>
                <li>None of the above</li>
                <li>Prefer not to say</li>
              </ul>
            </li>
            <li><strong>Which of the following assistive devices do you use?</strong>
              <ul>
                <li>Braille display</li>
                <li>Hearing aid</li>
                <li>Screen magnification</li>
                <li>Screen reader</li>
                <li>Walking frame</li>
                <li>Walking stick</li>
                <li>Wheelchair</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Questions to determine use of assistive technology</strong>, such as when specifically identifying screen reader users or people who are extremely low vision or blind, ask queation such as:
          <ul>
            <li>Which screen reader do you use (if a screen reader is identified)?</li>
            <li>What percentage of time do you use a screen reader to navigate websites, mobile applications, or software?</li>
            <li>When you travel to a new location, what is your preferred mode of transportation? Drive myself, ask a friend or family member to drive me, carlift, bus, train, etc.</li>
          </ul>
        </li>
        <li><strong>Self identification question</strong> such as:
          <ul>
            <li>Do you identify as a person with a disability? Yes or No</li>
            <li>Do you identify as any of the following:
              <ul>
                <li>Living with a cognitive or neurological disability</li>
                <li>Living with a physical disability or injury</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Questions to determine comfort with technology</strong> such as:
          <ul>
            <li><strong>Which of the best describes you while on a website?</strong>
              <ul>
                <li>I never use assistive technology to help with reading and navigation</li>
                <li>I sometimes use assistive technology to help with reading and navigation</li>
                <li>I must use assistive technology to help with reading and navigation</li>
              </ul>
            </li>
            <li><strong>Which of these best describes you when navigating websites?</strong> 
              <ul>
                <li>I exclusively use keys on a keyboard (no mousepad, trackpad, mouse or touchscreen) to navigate</li>
                <li>I use a combination of keyboard and mouse to navigate</li>
                <li> use a combination of keyboard, mouse, and assistive devices to navigate, or other</li>
              </ul>
            </li>
            <li><strong>If you use assistive technology to help navigate websites</strong>, describe what type/s do you use? If not applicable, select N/A.</li>
            <li><strong>When was the last time you shopped online?</strong></li>
            <li><strong>What is your preferred device when shopping online?</strong></li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- 6. Set a Budget for Recruitment Incentives -->
    <h3 class="usa-accordion__heading">
      <button class="usa-accordion__button" aria-expanded="false" aria-controls="incentives-content">
        Step 6. Set a Budget for Recruitment Incentives
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
        Step 7. Obtain Informed Consent
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
        Step 8. Develop a Schedule
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
