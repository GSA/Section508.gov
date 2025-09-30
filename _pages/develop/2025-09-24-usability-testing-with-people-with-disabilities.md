---
layout: page
sidenav: true
type: develop
title: Conducting User Research with People with Disabilities
permalink: develop/usability-testing-with-people-with-disabilities/
description: Guidance for planning and conducting usability and qualitative research with people with disabilities, including best practices for recruitment, accessible research processes, budgeting, scheduling, and scripting to ensure inclusive ICT design and development.
disclaimer: 
audience: 
- 508-pm
- designer
- dev-tester
- it-prog-proj-mgr
topic: 
- test
subtopic: 
- Design, Develop, Testing for Accessibility Training or Tools
resource_type: 
- playbook
format: html
created: 2025-08-20
updated: 
exclude-changelog: 
---

Effective information and communication technology (ICT) must be designed to serve all users, including people with disabilities. Incorporating people with disabilities into user research is critical to understanding how ICT solutions function in real-world settings and ensuring compliance with Section 508 requirements. Design and development teams should conduct user research with end users who will ultimately benefit from the solution. Engaging participants with diverse needs throughout the design and development process helps agencies identify barriers early, improve usability, and reduce the cost of remediation. The guidance below provides best practices for planning and conducting user research with people with disabilities, including considerations for recruitment, study design, and testing methods.

## When to Test

Research with people with disabilities can occur at different stages of the design process, including: 

<div class="grid-container">
<ul class="usa-icon-list grid-row">
  <li class="usa-icon-list__item padding-top-105 mobile:grid-col-12 tablet:grid-col-4">
  <div class="usa-icon-list__icon text-blue">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#label"></use>
  </svg>
  </div>
  <div class="usa-icon-list__content">Discovery Phase</div>
  </li> 
  <li class="usa-icon-list__item mobile:grid-col-12 tablet:grid-col-4">
  <div class="usa-icon-list__icon text-blue">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#label"></use>
  </svg>
  </div>
  <div class="usa-icon-list__content">Ideation</div>
  </li> 
  <li class="usa-icon-list__item mobile:grid-col-12 tablet:grid-col-4">
  <div class="usa-icon-list__icon text-blue">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#label"></use>
  </svg>
  </div>
  <div class="usa-icon-list__content">Prototyping</div>
  </li>  
  <li class="usa-icon-list__item mobile:grid-col-12 tablet:grid-col-4">
  <div class="usa-icon-list__icon text-blue">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#label"></use>
  </svg>
  </div>
  <div class="usa-icon-list__content">Testing</div>
  </li>
  <li class="usa-icon-list__item mobile:grid-col-12 tablet:grid-col-4">
  <div class="usa-icon-list__icon text-blue">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#label"></use>
  </svg>
  </div>
  <div class="usa-icon-list__content">Piloting</div>
  </li>
  <li class="usa-icon-list__item mobile:grid-col-12 tablet:grid-col-4">
  <div class="usa-icon-list__icon text-blue">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#label"></use>
  </svg>
  </div>
  <div class="usa-icon-list__content">Implementation</div>
  </li>
  <li class="usa-icon-list__item mobile:grid-col-12 tablet:grid-col-4">
  <div class="usa-icon-list__icon text-blue">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#label"></use>
  </svg>
  </div>
  <div class="usa-icon-list__content">Validation and Quality Assurance</div>
  </li>
</ul>
</div>

Include research with people with disabilities at every stage. The types of research can include: 
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Qualitative Research (e.g., Focus Groups, Interviews, Usability Testing)
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">User Flow Testing</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Assistive Technology Testing</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">User Acceptance Testing</div>
  </li>
</ul>

## Conducting Research

Conducting research with people with disabilities involves many of the same steps as conducting research involving people without disabilities, but there are important differences to consider. 

Recruiting people with disabilities for a research study may be challenging:
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
      <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#warning"></use>
    </svg>
    </div>
    <div class="usa-icon-list__content">People with certain disabilities may require transportation assistance, adding expense and limiting the respondent’s availability.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
      <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#warning"></use>
    </svg>
    </div>
    <div class="usa-icon-list__content">The building or space where the research is conducted must be accessible.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
      <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#warning"></use>
    </svg>
    </div>
    <div class="usa-icon-list__content">Some people with disabilities may be more likely to experience physical or mental fatigue.</div>
  </li> 
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue">
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
      <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#warning"></use>
    </svg>
    </div>
    <div class="usa-icon-list__content">Avoid purchasing or maintaining “disability lists.” They are sensitive, often unethical, and may violate privacy requirements.</div>
  </li>
</ul>

<p>To ensure that your product is accessible to anyone, screener questions should be designed to identify and prioritize people with disabilities during recruitment. Follow this <a href="{{site.baseurl}}/develop/recruitment-questionnaire-process/">user research recruitment process when writing a recruitment questionnaire</a></p>

### Qualitative Research

Conducting qualitative research with people with disabilities is an important step in the design and development of new digital products and services. The experiences and feedback of people with disabilities should inform any product development efforts, processes, and workflows. 

Run basic conformance checks and fix blocking issues before usability sessions with participants with disabilities. This helps identify and resolve critical barriers that would otherwise make task completion impossible. For example, if focus is not properly managed a screen reader user will be unable to initiate the test. 

More on the various types of testing and testing processes can be found in <a href="{{site.baseurl}}/manage/playbooks/technology-accessibility-playbook/9/">Play 9: Integrate Accessibility Needs into Development Processes</a>. 

### Planning and Recruiting Participants

When recruiting for a study on how users with disabilities interact with a product or service, use the Section 508 Functional Performance Criteria (36 CFR 1194.41) to define participant needs, and recruit based on functional abilities and assistive technology use rather than diagnoses. 

Consider:
1. Which functional abilities should be represented in the user study? 
2. Where can potential participants be found, such as sources or organizations?
3. Who are the probable users of the potential service, product, or solution?

#### Defining Target User Groups

What disabilities should be represented in the user group? Researchers should understand the experiences of a variety of disabled users. However, screen for functional needs, not diagnoses. Ask about assistive technology use, typical devices, and comfort level - not medical conditions. Aim for a mix aligned to the <a href="https://www.access-board.gov/ict/#302-functional-performance-criteria" target="_blank" class="usa-link--external">Functional Performance Criteria (FPC)</a>, as defined in Section 508 standards. They provide a varied and useful list of disabilities that should be included in user research, including users: 

<ul class="usa-icon-list">
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-green">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use>
</svg>
</div>
<div class="usa-icon-list__content">Without vision</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-green">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use>
</svg>
</div>
<div class="usa-icon-list__content">With limited vision</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-green">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use>
</svg>
</div>
<div class="usa-icon-list__content">Without perception of color</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-green">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use>
</svg>
</div>
<div class="usa-icon-list__content">Without hearing</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-green">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use>
</svg>
</div>
<div class="usa-icon-list__content">With limited hearing</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-green">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use>
</svg>
</div>
<div class="usa-icon-list__content">Without speech</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-green">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use>
</svg>
</div>
<div class="usa-icon-list__content">With limited manipulation</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-green">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use>
</svg>
</div>
<div class="usa-icon-list__content">With limited reach and strength</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-green">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use>
</svg>
</div>
<div class="usa-icon-list__content">With limited language, cognitive, and learning abilities</div>
</li>
</ul>

#### Recruitment Sources 

Recruiting people with disabilities can pose a particular challenge given that many recruitment facilities do not include specialized lists of individuals with disabilities. Traditional recruitment vendors are also not specifically educated or familiar with best practices for working with people with disabilities, and therefore may not be aware of particular needs or sensitivities. 

Great sources for recruiting people with disabilities include disability advocacy and community organizations. These groups often have volunteer or research lists and agreements. Accessibility companies and their user research panels are another good source for recruiting people with disabilities.

Direct recruitment can also be an effective way to identify and recruit potential research participants. This can be done by placing recruitment ads, partnering with agency programs and collaborating with disability-focused employee resource groups.

When considering a recruitment screener and recruitment sources, reference functional performance criteria from Section 508 and include people with various disabilities. 

#### Finding Participants

If the audience of the potential service, product, or solution will be the general public, participants should be recruited from that population. If the audience will be Federal employees with disabilities, recruitment should focus on that narrower group.

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><p><strong> Tip</strong>: Before recruiting participants with disabilities, consult with your agency’s legal counsel and follow all Privacy Act requirements, <a href="https://pra.digital.gov/" target="_blank" class="usa-link--external">Paperwork Reduction Act</a> rules and other applicable laws, regulations, and processes for public engagement. This is particularly relevant for recruiting Federal employees with disabilities.</p></div>

1. To recruit participants from the general public, reach out to: 
   * Associations and advocacy groups for that particular disability 
   * General disability advocacy groups or associations
   * Research firms that specialize in recruiting people with disabilities
   * Target geographic areas with high concentrations of users with disabilities
   * Ask vendors that serve people with disabilities to share your call for participants; do not request or purchase customer lists

1. Recruiting Federal employees with disabilities requires careful consideration. For example, it may not be appropriate to directly ask a fellow employee to participate in research.
   * Do not assume a colleague’s disability or pressure them to participate. 
   * Participation must be voluntary and, if on duty time, approved by the supervisor. 
   * Consult your Human Resources office, Equal Employment Opportunity office, and General Counsel before any outreach to employees. 

## Planning and Managing Research Logistics
Once you have defined your research goals and begun planning recruitment, it is equally important to manage the practical details of running a study. This includes creating a clear checklist of tasks, establishing a budget, setting participant numbers, building realistic schedules, preparing scripts, and ensuring compliance with ethics and privacy requirements. Careful attention to these logistical elements helps ensure that research sessions with people with disabilities run smoothly, remain accessible, and generate reliable, actionable results.


### Checklist for Researchers

<ul class="usa-icon-list">
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use>
</svg>
</div>
<div class="usa-icon-list__content">Determine the disabilities and functional abilities to be represented in the study. Refer to the Section 508 Functional Performance Criteria.</div>
</li> 
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use>
</svg>
</div>
<div class="usa-icon-list__content">Identify sources for potential participants, such as organizations and advocacy groups.</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use>
</svg>
</div>
<div class="usa-icon-list__content">Define and describe the probable users of the service, product, or solution.</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use>
</svg>
</div>
<div class="usa-icon-list__content">Determine the number of research subjects needed.</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use>
</svg>
</div>
<div class="usa-icon-list__content">Set a budget for recruitment incentives.</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use>
</svg>
</div>
<div class="usa-icon-list__content">Select or write a screener for recruitment.</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use>
</svg>
</div>
<div class="usa-icon-list__content">Schedule research timing and appointments.</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use>
</svg>
</div>
<div class="usa-icon-list__content">Consult with the agency’s Office of General Counsel, Equal Employment Office, or Human Resources office when interviewing employees with disabilities to ensure compliance with relevant laws, regulations, and organizational policies.</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_box_outline_blank"></use>
</svg>
</div>
<div class="usa-icon-list__content">Create scripts for each scenario and topic to be observed or discussed.</div>
</li>
</ul>

### Budgeting & Resources

Budget managers must decide if cost determines the number of respondents or if the number of respondents sets the budget. It is important to align the number of respondents with the budget available and include the cost of recruiting candidates. There is typically a finder’s fee charged by recruitment firms or advocacy groups. The budget should also include the payment to the candidate and any additional expenses that may be incurred. 

#### Budget items to consider

1. Accessible space (meets <a href="https://www.access-board.gov/aba/" target="_blank" class="usa-link--external">Architectural Barriers Act</a> accessibility standards) or use a fully accessible remote space.
2. Transportation for staff and respondents, if they are being reimbursed for travel costs.
3. Recruitment incentives for each respondent. People with disabilities may require increased incentive due to logistical requirements and the potential added tax of the physical demands to participate in the study.  Consider offering premium incentives to encourage attendance or acceptance by people with disabilities. Additional incentives may include taxi or ride share reimbursement, for instance.
4. Allergy-friendly food or snacks for staff and respondents.
5. Equipment and supplies including renting or purchasing items such as cameras, microphones, computers, and assistive technology software or hardware.
6. American Sign Language interpretation, upon request. For sessions longer than 60 minutes, schedule two interpreters and rotate. Share prep materials (scripts, tasks, terminology) at least 24 hours in advance.
7. Real-time captioning (CART) for live multimedia and captioning for pre-recorded multimedia.
8. Alternate formats of materials, upon request, including for consent forms, instructions and prep materials.
9. Personal care attendant reimbursement, separate from participant incentives, for those who require assistance to attend.
10. Remote meeting platform licenses for remote sessions.

### Number of Participants

When determining the number of research subjects to include in the study, consider the following:
<ul class="usa-icon-list">
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-blue">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use>
</svg>
</div>
<div class="usa-icon-list__content">Duration of the interview or study (how long will each interview take)</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-blue">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use>
</svg>
</div>
<div class="usa-icon-list__content">Types of disabilities that should be included</div>
</li> 
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-blue">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use>
</svg>
</div>
<div class="usa-icon-list__content">Practical constraints</div>
</li>
<li class="usa-icon-list__item">
  <div class="usa-icon-list__icon text-blue">
  <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
  <use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use>
</svg>
</div>
<div class="usa-icon-list__content">Resources: Space, Budget, Staff Availability
</div>
</li>
</ul>

Plan to stop when sessions stop yielding new themes or insights. There is a diminishing return when major issues are no longer identified and smaller differences in opinions are the primary types of feedback encountered. As a rule of thumb, recruit six to eight participants for one on one studies. For focus groups, recruit six to eight people per group and run three to four separate groups. 

There are also industry standard expectations for how many or which percentage of respondents will cancel or “no show” for their assigned time slot. When considering scheduling options, there are a few scheduling best practices that can minimize the impact of no shows on the study schedule. 

<ol>
  <li>Schedule a “floater” or alternate that will arrive at the start of the day
    and stay until lunch, then schedule a second floater for the second half
    of the day.
    <ul>
      <li><strong>Benefits:</strong>
        <ul>
          <li>If one candidate does not arrive or arrives late, the floater can fill the slot.</li>
          <li>A floater can be used at the judgment of the researcher if the participant does not meet the requirements of the screener, is unable to understand the questions or attempt the tasks, or has biases or experiences that will hinder their ability to provide usable data.</li>
        </ul>
      </li>
      <li><strong>Drawback:</strong>
        <ul>
          <li>The floater typically gets paid for their time at a similar rate to the respondent and may not ultimately end up participating in the study.</li>
          </ul>
          </li>
          </ul>
          </li>
  <li>Schedule an additional day of testing that may or may not be needed. This additional day
    can be used or canceled depending on the need.
    <ul>
    <li><strong>Drawbacks:</strong>
      <ul>
          <li>A “no show” leaves a gap in the schedule.</li>
          <li>Staff who set aside time to conduct the study may not be able to switch to other tasks.</li>
        </ul></li>
      <li><strong>An alternative to using “floaters”:</strong>
        <ul>
          <li>Balance disability mix against research goals and consider over-recruiting by 15–25% to offset no-shows.</li>
          <li>Maintain a short waitlist and invite replacements as needed, then use staggered “standby windows” rather than paying all-day floaters.</li>
        </ul>
      </li>
    </ul>
    </li>
  </ol>

### Sample Research Schedules 

When planning research with people with disabilities, it is important to build extra time into the schedule to accommodate participant needs. This may include allowing or mobility assistance, longer explanations for participants with limited language, cognitive, or learning abilities, or additional setup for assistive technologies. Begin each session with time for administrative tasks such as reviewing and signing consent forms, non-disclosure agreements, permissions to record, and other required documents. Even if provided in advance, participants may not have completed these forms before arriving, so scheduling this step ensures compliance and prevents delays later in the session. Thoughtful planning up front helps sessions run smoothly, remain accessible, and yield reliable results.

<!-- One-on-One Interviews (In-Person) -->
<ul class="usa-card-group">
  <li class="usa-card tablet-lg:grid-col-12">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h4 class="usa-card__heading font-sans-md">One-on-One Interviews (in-Person)</h4>
      </div>
      <div class="usa-card__body">
        <h5 class="font-code-sm">Format & Duration</h5>
        <p>
          Two to four days of testing, with two to three individual sessions per day. Each session should last approximately 90 minutes, including setup and breaks.
        </p>
        <h5 class="font-code-sm">Daily Structure (Example Schedule)</h5>
        <ul class="usa-icon-list">
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              9:00 – 10:30: Session 1
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              10:30 – 11:00: Break/reset
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              11:00 – 12:30: Session 2
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              12:30 – 1:40: Lunch, reset
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              1:40 – 3:10: Session 3
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              3:10-3:40: Debrief and capture notes
            </div>
          </li>
        </ul>
        <h5 class="font-code-sm">Special Considerations</h5>
         <ul class="usa-icon-list">
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Recruit six to eight participants, accounting for potential no-shows.
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Use “floaters” (alternates scheduled for half-day blocks) or maintain a short waitlist as a backup if participants cancel or do not meet screening requirements.
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Allow time for consent paperwork at the beginning of the day.
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Adjust schedule if sessions are shorter or longer than 90 minutes.
            </div>
          </li>
        </ul>
      </div>
    </div>
  </li>
</ul>

<!-- Focus Groups (In-Person) -->
<ul class="usa-card-group">
  <li class="usa-card tablet-lg:grid-col-12">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h4 class="usa-card__heading font-sans-md">Focus Groups (In-Person)</h4>
      </div>
      <div class="usa-card__body">
        <h5 class="font-code-sm">Format & Duration</h5>
        <p>
          Typically conducted over two days, with one to two groups per day. Each group should include six to eight participants and last 90–120 minutes. 
        </p>
        <h5 class="font-code-sm">Daily Structure (Example Schedule)</h5>
        <ul class="usa-icon-list">
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Morning: Focus Group 1 (90–120 minutes)
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Lunch break
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Afternoon/Evening: Focus Group 2 (90–120 minutes)
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Post-session: Debrief and capture team notes
            </div>
          </li>
        </ul>
        <h5 class="font-code-sm">Special Considerations</h5>
         <ul class="usa-icon-list">
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Recruit approximately eight people per group to allow for absences while maintaining multiple perspectives.
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Limit to two groups per day to reduce participant and facilitator fatigue.
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Provide adequate time between groups for debriefing and resetting materials/technology.
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Ensure the space is physically accessible and equipped with necessary accommodations (e.g., ASL interpretation, CART captioning).
            </div>
          </li>
        </ul>
      </div>
    </div>
  </li>
</ul>

<!-- Focus Groups (Remote) -->
<ul class="usa-card-group">
  <li class="usa-card tablet-lg:grid-col-12">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h4 class="usa-card__heading font-sans-md">Focus Groups (Remote)</h4>
      </div>
      <div class="usa-card__body">
        <h5 class="font-code-sm">Format & Duration</h5>
        <p>
          Conducted virtually over one or more days. Each day includes two moderated sessions lasting 60–75 minutes.
        </p>
        <h5 class="font-code-sm">Daily Structure (Example Schedule)</h5>
        <ul class="usa-icon-list">
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              9:00 – 9:15: Team setup and tech check (captions enabled, interpreters admitted, links tested)
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              9:15 – 10:30: Session 1 (60–75 minutes)
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              10:30 – 10:45: Break/reset/debrief
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              10:45 – 12:00: Session 2 (60–75 minutes)
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-blue">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#event"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              12:00 – 12:15: Wrap-up and assign follow-ups
            </div>
          </li>
        </ul>
        <h5 class="font-code-sm">Special Considerations</h5>
         <ul class="usa-icon-list">
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Recruit eight to ten participants per group, anticipating some no-shows.
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Assign clear roles: facilitator, note-taker, and optional observers (off-camera and on mute).
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Provide prep materials to interpreters and captioners in advance.
            </div>
          </li>
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green">
              <svg class="usa-icon" aria-hidden="true" role="img"><use href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
            </div>
            <div class="usa-icon-list__content">
              Build in buffer time before and after each session for technical setup and troubleshooting.
            </div>
          </li>
        </ul>
      </div>
    </div>
  </li>
</ul>

### Follow a Script 
A script is a guide that allows the tester to create a universal experience for each research session. This consistency can allow for direct comparison of feedback, with less bias impacting the direction of the conversation. Some things to consider adding to a script include:
<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Introduction and welcome</h4> 
    <ul>
      <li>Collect and review relevant documentation</li>
      <li>Confirm key background information that was included in the screener and research specific relevant information.</li>
      <li>Explain session goals</li>
      <li>Set expectations</li>
    </ul>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Think aloud protocol explanation</h4>
    <ul>
      <li>Provide instructions on how you want the respondent to share information such as “Please think aloud as you work.”</li>
      <li>Remind respondents that they are not being tested; that the product, service, and ideas are being discussed; there are no wrong answers.</li>
    </ul>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Share task scenarios or relevant project background information</h4>
    <ul>
      <li>These should be realistic outcomes or goals, and should only provide the information that will be available to participants outside of the lab situation.</li>
    </ul>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Core discussion questions</h4>
    <ul>
      <li>Have a list of core discussion questions. In order to limit impact and bias, begin with the broad questions and move toward more specific topics.</li></ul></li></ol>

### Ethics, Privacy, and Paperwork Reduction Act 
Collect only the minimum personal information needed to schedule and pay participants. Do not store any medical information, including information about participants’ disability diagnoses. If you plan to ask the same questions of 10 or more members of the public in a 12-month period, coordinate with your Paperwork Reduction Act (PRA) officer. For sessions with federal employees, participation must be voluntary; if on duty time, obtain supervisor approval. Maintain records according to your agency records retention policies and protect any sensitive data.


<h2>Related Resources</h2>

<ul>
<li><a href="https://www.w3.org/TR/coga-usable/#Building_in_the_user" target="_blank" class="usa-link--external">Making Content Usabe for People with Congnitive and Learning Disabilities - Chapter 5: Usability Testing, Focus Groups and Feedback - W3C</a></li>
<li><a href="{{site.baseurl}}/test/conformance-of-prototypes-and-pilots/">Conformance of ICT Prototypes and Pilots</a></li>  
<li><a href="{{site.baseurl}}/test/usability-testing-with-people-with-disabilities/">Tips for Usability Testing with People with Disabilities</a></li> 
</ul> 


<strong> Reviewed/Updated:</strong> September 2025
