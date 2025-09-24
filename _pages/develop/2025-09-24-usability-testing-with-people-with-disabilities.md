**---
layout: page
sidenav: true
type: develop
title: Conducting User Research with People with Disabilities
permalink: develop/usability-testing-with-people-with-disabilities/
description: Guidance for planning and conducting usability and qualitative research with people with disabilities, including best practices for recruitment, accessible research processes, budgeting, scheduling, and scripting to ensure inclusive ICT design and development.
disclaimer: true
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

* Discovery Phase 
* Ideation
* Prototyping 
* Testing
* Piloting
* Implementation
* Validation and Quality Assurance 

Include research with people with disabilities at every stage. The types of research include but are not limited to: 

* Qualitative Research
  * Focus Groups
  * Ethnographic Interviews
  * Usability Testing 
* User Flow Testing
* Assistive Technology Testing
* User Acceptance Testing

## Conducting Research

Conducting research with people with disabilities involves many of the same steps as conducting research involving people without disabilities, but there are important differences to consider. 

Recruiting people with disabilities for a research study may be challenging:
* People with certain disabilities may require transportation assistance, adding expense and limiting the respondent’s availability.
* The building or space where the research is conducted must be accessible.
* Some people with disabilities may be more likely to experience physical or mental fatigue. 
* Avoid purchasing or maintaining “disability lists.” They are sensitive, often unethical, and may violate privacy requirements.

To ensure that your product is accessible to anyone, screener questions should be designed to identify and prioritize people with disabilities during recruitment.

### Qualitative Research

Conducting qualitative research with people with disabilities is an important step in the design and development of new digital products and services. The experiences and feedback of people with disabilities should inform any product development efforts, processes, and workflows. 

Run basic conformance checks and fix blocking issues before usability sessions with participants with disabilities. This helps identify and resolve critical barriers that would otherwise make task completion impossible. For example, if focus is not properly managed a screen reader user will be unable to initiate the test. 

More on the various types of testing and testing processes can be found in   <a href="{{ site.baseurl }}/manage/playbooks/technology-accessibility-playbook-intro/play09/" target="_blank" class="usa-link--external">Play 9: Integrate Accessibility Needs into Development Processes</a>. 

### Planning & Recruiting Participants

When recruiting for a study on how users with disabilities interact with a product or service, use the Section 508 Functional Performance Criteria (36 CFR 1194.41) to define participant needs, and recruit based on functional abilities and assistive technology use rather than diagnoses. 

Consider:
1. Which functional abilities should be represented in the user study? 
2. Where can potential participants be found, such as sources or organizations?
3. Who are the probable users of the potential service, product, or solution?

#### Defining Target User Groups

What disabilities should be represented in the user group? Researchers should understand the experiences of a variety of disabled users. However, screen for functional needs, not diagnoses. Ask about assistive technology use, typical devices, and comfort level - not medical conditions. Aim for a mix aligned to the <a href="https://www.access-board.gov/ict/#302-functional-performance-criteria" target="_blank" class="usa-link--external">Functional Performance Criteria (FPC)</a>, as defined in Section 508 standards. They provide a varied and useful list of disabilities that should be included in user research, including users: 

* Without vision
* With limited vision
* Without perception of color
* Without hearing
* With limited hearing
* Without speech
* With limited manipulation
* With limited reach and strength
* With limited language, cognitive, and learning abilities

#### Recruitment Sources 

Recruiting people with disabilities can pose a particular challenge given that many recruitment facilities do not include specialized lists of individuals with disabilities. Traditional recruitment vendors are also not specifically educated or familiar with best practices for working with people with disabilities, and therefore may not be aware of particular needs or sensitivities. 

Great sources for recruiting people with disabilities include disability advocacy and community organizations. These groups often have volunteer or research lists and agreements. Accessibility companies and their user research panels are another good source for recruiting people with disabilities.

Direct recruitment can also be an effective way to identify and recruit potential research participants. This can be done by placing recruitment ads, partnering with agency programs and collaborating with disability-focused employee resource groups.

When considering a recruitment screener and recruitment sources, reference functional performance criteria from Section 508 and include people with various disabilities. 

#### Finding Participants

If the audience of the potential service, product, or solution will be the general public, participants should be recruited from that population. If the audience will be Federal employees with disabilities, recruitment should focus on that narrower group.

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><p><strong> Tip</strong>: Before recruiting participants with disabilities, consult with your agency’s legal counsel and follow all Privacy Act requirements, <a href="https://pra.digital.gov/" target="_blank" class="usa-link--external">Paperwork Reduction Act</a> rules and other applicable laws, regulations, and processes for public engagement. This is particularly relevant for recruiting Federal employees with disabilities.</p></div>

1. To recruit participants from the general public, reach out to: 
    a. Associations and advocacy groups for that particular disability
    b. General disability advocacy groups or associations
    c. Research firms that specialize in recruiting people with disabilities
    d. Target geographic areas with high concentrations of users with disabilities
    e. Ask vendors that serve people with disabilities to share your call for participants; do not request or purchase customer lists

2. Recruiting Federal employees with disabilities requires careful consideration. For example, it may not be appropriate to directly ask a fellow employee to participate in research.
    a. Do not assume a colleague’s disability or pressure them to participate. 
    b. Participation must be voluntary and, if on duty time, approved by the supervisor. 
    c. Consult your Human Resources office, Equal Employment Opportunity office, and General Counsel before any outreach to employees. 

## Checklist for Researchers

[] Determine the disabilities and functional abilities to be represented in the study. Refer to the Section 508 Functional Performance Criteria.
[] Identify sources for potential participants, such as organizations and advocacy groups.
[] Define and describe the probable users of the service, product, or solution.
[] Determine the number of research subjects needed.
[] Set a budget for recruitment incentives.
[] Select or write a screener for recruitment.
[] Schedule research timing and appointments.
[] Consult with the agency’s Office of General Counsel, Equal Employment Office, or Human Resources office when interviewing employees with disabilities to ensure compliance with relevant laws, regulations, and organizational policies.
[] Create scripts for each scenario and topic to be observed or discussed.

### Budgeting & Resources

Budget managers must decide if cost determines the number of respondents or if the number of respondents sets the budget. It is important to align the number of respondents with the budget available and include the cost of recruiting candidates. There is typically a finder’s fee charged by recruitment firms or advocacy groups. The budget should also include the payment to the candidate and any additional expenses that may be incurred. 

Budget items to consider:

1. Accessible space (meets Architectural Barriers Act accessibility standards) or use a fully accessible remote space.
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
* Duration of the interview or study (how long will each interview take)
* Types of disabilities that should be included 
* Practical constraints
* Resources
  * Space
  * Budget
  * Staff Availability

Plan to stop when sessions stop yielding new themes or insights. There is a diminishing return when major issues are no longer identified and smaller differences in opinions are the primary types of feedback encountered. As a rule of thumb, recruit six to eight participants for one on one studies. For focus groups, recruit six to eight people per group and run three to four separate groups. 

There are also industry standard expectations for how many or which percentage of respondents will cancel or “no show” for their assigned time slot. When considering scheduling options, there are a few scheduling best practices that can minimize the impact of no shows on the study schedule. 

1. Schedule a “floater” or alternate that will arrive at the start of the day and stay until lunch, then schedule a second floater for the second half of the day. 
    a. Benefit: 
        i. If one candidate does not arrive or arrives late, the floater can fill the slot.
       ii. A floater can be used at the judgment of the researcher if the participant does not meet the requirements of the screener, is unable to understand the questions or attempt the tasks, or has biases or experiences that will hinder their ability to provide usable data. 
    b. Drawback: the floater typically gets paid for their time at a similar rate to the respondent and may not ultimately end up participating in the study. 
2. Schedule an additional day of testing that may or may not be needed. This additional day can be used or canceled depending on the need. 
    a. Drawbacks: 
       i. A “no show” leaves a gap in the schedule. 
      ii. Staff who set aside time to conduct the study may not be able to switch to other tasks.
    b. An alternative to using “floaters”: 
       i. Balance disability mix against research goals and consider over-recruiting by 15-25% to offset no-shows. 
      ii. Maintain a short waitlist and invite replacements as needed, then use staggered “standby windows” rather than paying all-day floaters.

### Sample Research Schedules 

When planning research, it is helpful to add time in the schedule to accommodate any needs that arise with mobility difficulties, extended explanations for those with limited language, cognitive, or learning disabilities, or technology modifications to accommodate users. A best practice is to include time at the start of the session to obtain signatures on important documents including non-disclosure agreements, permission to use respondent feedback in any research findings or publications that will be created as a result of the research, permission to record or other informed consent, and confidentiality agreements. Even if distributed in advance, respondents may not have read, completed, or signed the document and will need to do so prior to the start of any research.

#### Sample In-Person One-on-One Interview Schedule

1. Two to four days, two to three sessions per day (90 minutes each, including setup and breaks)
   * Session 1: 9:00 am-10:30 am 
   * Break: 10:30 am - 11:00 am
   * Session 2: 11:00 am - 12:30 pm
   * Break: 12:30 pm-1:40 pm (Lunch, reset)
   * Session 3: 1:40 pm - 3:10 pm 
   * Break for notes and capturing data, reset for next day 
2. Floater (option “a” above)
   * Floater 1: schedule for 9:00 am-12:30 pm; they can be dismissed once the Session 2 participant arrives
   * Floater 2: schedule for 1:40 pm - 3:10 pm; they can be dismissed once the Session 3 participant arrives.

Continue with three sessions per day until all scheduled participants complete the study. If the task or research does not require 90 minutes, an additional afternoon participant could be added (and lunch moved up). Additionally, if the study takes longer than 90 minutes, shorten the planned tasks or interview and potentially break them into multiple sessions, typically on different days in order to ensure quality of response. 

#### Sample In-Person Focus Group Schedule
Focus group studies should limit to two groups per day and will include more participants, without the need for floaters. Recruit approximately eight people - this will allow for a few people to miss the appointment without sacrificing a diversity of user experiences due to a small number of participants. 

Sample schedule:
* Two days with two groups per day (four total groups)
* One evening group and one morning or daytime group, lunch in the middle
* Scheduled time following each group to debrief with the research team and capture feedback.

#### Sample Remote Focus Group Schedule 
Format:
* Two moderated sessions per day, 60–75 minutes each
* Fifteen-minute buffers before and after each session
* One facilitator, one note-taker, optional observer(s) on mute with cameras off

Sample schedule : 
* 9:00–9:15: Team setup and tech check (enable captions, admit ASL/CART, open task links)
* 9:15–10:30: Session 1 (60–75 minutes)
* 10:30–10:45: Buffer (upload notes, save recordings, quick debrief)
* 10:45–12:00: Session 2 (60–75 minutes) 
* 12:00–12:15: Buffer (wrap up, assign follow-ups) 

### Follow a Script 
A script is a guide that allows the tester to create a universal experience for each research session. This consistency can allow for direct comparison of feedback, with less bias impacting the direction of the conversation. Some things to consider adding to a script include:
1. Introduction and welcome 
   * Collect and review relevant documentation
   * Confirm key background information that was included in the screener and research specific relevant information.
   * Explain session goals
   * Set expectations
2. Think aloud protocol explanation
   * Provide instructions on how you want the respondent to share information such as “Please think aloud as you work.”
   * Remind respondents that they are not being tested; that the product, service, and ideas are being discussed; there are no wrong answers.
3. Share task scenarios or relevant project background information
   * These should be realistic outcomes or goals, and should only provide the information that will be available to participants outside of the lab situation.
4. Core discussion questions
   * Have a list of core discussion questions. In order to limit impact and bias, begin with the broad questions and move toward more specific topics.

### Ethics, Privacy, and Paperwork Reduction Act 
Collect only the minimum personal information needed to schedule and pay participants. Do not store any medical information, including information about participants’ disability diagnoses. If you plan to ask the same questions of 10 or more members of the public in a 12-month period, coordinate with your Paperwork Reduction Act (PRA) officer. For sessions with federal employees, participation must be voluntary; if on duty time, obtain supervisor approval. Maintain records according to your agency records retention policies and protect any sensitive data.


<h2>Related Resources</h2>

<ul>
<li><a href="https://www.w3.org/TR/2020/WD-coga-usable-20201211/usability_testing.html" target="_blank" class="usa-link--external">Chapter 5: Usability Testing, Focus Groups and Feedback</a></li>
<li><a href="{{ site.baseurl }}/[/test/conformance-of-prototypes-and-pilots/)">TConformance of ICT Prototypes and Pilots</a></li>  
<li><a href="{{ site.baseurl }}/[test/usability-testing-with-people-with-disabilities/)">Tips for Usability Testing with People with Disabilities</a></li> 
</ul> 

**Reviewed/Updated:** September 2025
