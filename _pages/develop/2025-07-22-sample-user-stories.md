---
layout: page
sidenav: true
permalink: develop/user-stories/
type: develop
title: 'Sample User Stories'
description: Sample user stories to help embed ICT accessibility requirements into everyday practices to support compliance with Section 508 standards and reduce the risk of costly retrofits. 
created: 2025-07-22
topic: "develop"
sub-topic: "Design, Develop, Testing for Accessibility Training or Tools"
audience:
- "Developers and Testers (dev-test)"
- "Content Creators (creator)"
- "Federal employee (fedemp)"
resource-type: "Process/How-to"
format: "HTML (html)"

---

During the development of digital content and tools, a user story provides a general explanation of a feature from the end user or customer viewpoint. User stories are essential in the development of Section 508 conformant information and communication technology (ICT) because they ensure the needs of users with disabilities are considered during design, development, and testing. They help development teams understand how end users interact with digital content using assistive technologies like screen readers or keyboard navigation. By embedding ICT accessibility requirements into everyday practices, user stories support compliance with Section 508 standards and reduce the risk of costly retrofits or remediation. Most importantly, they help teams build products that are well designed and usable by everyone.

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><p><strong> Tip</strong>: User stories define the “what and how” to address Section 508 conformance during design, development, and testing and when writing backlog items.</p></div>

## How to Write User Stories

To write effective ICT accessibility-related user stories, start with the format:  As a [user type or user need], I want [goal, action, or function] so that [benefit or achievement]. 

* **User type or need:** Clearly identify a user with a specific accessibility need such as a keyboard-only user.  
* **Goal, action, function:** State what they want to do such as tab through a form logically.  
* **Benefit or Achievement:** Explain why it matters, such as to complete a task independently.   
* **Acceptance criteria**: Defines when the story is complete; this might involve meeting contrast requirements, supporting screen readers, or ensuring keyboard functionality.   

Write with clarity and alignment to Section 508 Standards so that user stories are actionable and meaningful.

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><p><strong>For example</strong>: As a user who relies on high contrast, I want to view text with sufficient contrast against backgrounds so I can read content easily.
<br>
Acceptance Criteria:
<br>
All text meets Web Content Accessibility Guidelines (WCAG) 1.4.3 contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (text that is 14 point and bold or larger, or 18 point or larger).</p></div>

## Example Web, Software, and Electronic Document User Stories

The following user stories illustrate how accessibility needs can be captured during the development of digital content and tools. These examples are not exhaustive; development teams should tailor user stories to reflect the specific users, features, and technologies relevant to their own product or project.

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;"><p>User Stories:</p>
<ul>
<li> Define specific functionality or needs</li>
<li> Are task-specific with a focus on goals or interactions</li>
<li> Are short and focused on functionality and goals</li>
</ul>
</div>

### Without Vision

<div class="usa-table--borderless" tabindex="0">
  <table class="usa-table">
  <caption> Sample user stories for users without vision</caption>
  <thead>
    <tr>
      <th scope="col">User Story </th>
      <th scope="col">Description</th>
      <th data-sortable scope="col" role="columnheader">Applicable ICT </th>
    </tr>
  </thead>
    <tbody>
    <tr>
    <th scope="row" role="rowheader">As a keyboard user, I want to be able to access and activate all interactive content such as form fields, buttons, and links so that I can successfully complete forms.</th>
    <td> <ul><li>All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.[WCAG SC 2.1.1]</li>
    <li>There are no keyboard traps on the page. [WCAG SC 2.1.2]</li></ul></td>
    <td>Documents, Software, Web</td></tr>
    <tr>
    <th scope="row" role="rowheader">As a keyboard user, I want to be able to navigate content in the correct reading order so that I can understand content in a way that makes sense.</th>
    <td>If a web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. [WCAG SC 2.4.3]</td>
    <td>Documents, Software, Web</td>
    </tr>
    <tr>
    <th scope="row" role="rowheader">As a keyboard user, I want to be able to easily use hotkeys to navigate the page by headings so that I can understand relevant information to me.</th>
    <td><ul><li>Headings and labels describe topic or purpose. [WCAG SC 2.4.6]</li>
    <li> Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. [WCAG SC 1.3.1]</li></ul></td> 
    <td>Documents, Software, Web</td></tr>
    <tr>
    <th scope="row" role="rowheader">As a screenreader user, I want to be able to complete form fields including fixing any errors so that I can independently accomplish tasks.</th>
    <td><ul><li>Form fields have an accessible name/description that includes the form’s purpose and all instructions and cues, such as required form fields and formatting of data. [WCAG SC1.1.1, 1.3.1, 2.4.6, 4.1.2]</li>
    <li> Navigating away from a form field does not initiate a change of context unless the user is advised of the behavior beforehand. [WCAG SC 3.2.2]</li> 
    <li>Error messages are communicated to a screenreader such as by shifting focus or use of aria live-regions. [WCAG SC 3.3.1]</li>
    <li> Error messages are described in text. [WCAG SC 3.3.1]</li> 
    <li>Error messages identify the item in error. [WCAG SC 3.3.1]</li> 
    <li>Error messages provide information on how to correct errors for form fields that would not jeopardize the security or purpose of the content. [WCAG SC 3.3.3]</li>
    <li> If form fields cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, a user must be able to either reverse submission, check data before submission, or confirm data before submission. [WCAG SC 3.3.4]</li></ul></td>
    <td>Documents, Software, Web</td></tr>
    <tr>
    <th scope="row" role="rowheader">As a screenreader user, I want consistency between multiple web pages in a website so that I can more easily navigate.</th>
    <td><ul><li>Navigational mechanisms are consistently ordered across multiple pages. [WCAG 3.2.3]</li>
    <li> There is consistent identification of functional components that appear repeatedly within a set of web pages. [WCAG SC 3.2.4]</li></ul></td>
    <td>Web</td>
    </tr>
    <tr>
    <th scope="row" role="rowheader">As a screenreader user, I want to know the column and row headers for each table cell so that I can understand the meaning of data tables.</th>
    <td><ul><li>Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. [WCAG SC 1.3.1]</li> 
    <li>For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. [WCAG SC 4.1.2]</li></ul></td> 
    <td>Documents, Software, Web</td>
    </tr>
    <tr>
    <th scope="row" role="rowheader">As a screenreader user, I want to hear the text equivalent for each meaningful image so that I don’t miss any information on the page.</th>
    <td>All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for [specific] situations. [WCAG SC 1.1.1]</td>
    <td>Documents, Software, Web</td></tr>
    <tr>
    <th scope="row" role="rowheader">As a screenreader user, I want to know the page language so that my assistive technology presents the content accurately.</th>
    <td>The default human language of each web page can be programmatically determined. [WCAG SC 3.1.1]</td>
    <td>Documents, Software, Web</td></tr>
    <tr>
    <th scope="row" role="rowheader">As a screenreader user, I want to know when words are in a different language on the page and what language is used so that my assistive technology presents the content accurately.</th>
    <td>The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. [WCAG SC 3.1.2]</td>
    <td>Documents, Software, Web</td>
    </tr>
<tr>
    <th scope="row" role="rowheader">As a screenreader user, I want to be able to read content in a meaningful sequence so that I understand the meaning of content in context.</th>
    <td>When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined. [WCAG SC 1.3.2]</td>
    <td>Documents, Software, Web</td></tr>
<tr>
    <th scope="row" role="rowheader">As a screenreader user, I want to hear a presentation of visual content in a video so that I have access to the visual content as well.</th>
    <td>Audio description is provided for all prerecorded video content in synchronized media. [WCAG SC 1.2.5]</td>
    <td>Documents, Software, Web</td>
    </tr>
    </tbody>
    </table>
    </div>

### Limited Vision
<div class="usa-table--borderless" tabindex="0">
  <table class="usa-table">
  <caption> Sample user stories for users with limited vision</caption>
  <thead>
    <tr>
      <th scope="col">User Story </th>
      <th scope="col">Description</th>
      <th data-sortable scope="col" role="columnheader">Applicable ICT </th>
    </tr>
  </thead>
    <tbody>
    <tr>
    <th scope="row" role="rowheader">As a user with limited vision, I want to be able to zoom without losing content so that I can read text at a comfortable size.</th>
    <td>Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality. [WCAG SC 1.4.4]</td>
    <td>Documents, Software, Web</td></tr>
    <tr>
    <th scope="row" role="rowheader">As a user with limited vision, I want to be able to complete a CAPTCHA so that I can complete forms and log-ins independently.</th>
    <td>If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities. [WCAG SC 1.1.1]</td>
    <td>Documents, Software, Web</td></tr>
    <tr>
    <th scope="row" role="rowheader">As a user who sees better with high contrast, I want to be able to customize images of text so that it is easier for me to read.</th>
    <td>If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following: [WCAG SC 1.4.5] The image can be visually customized. A particular presentation of text is essential.</td>
    <td>Documents, Software, Web</td></tr>
    <tr>
    <th scope="row" role="rowheader">As a user who sees better with high contrast, I want sufficient contrast between text and its background so that I can easily read text.</th>
    <td>The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:[WCAG 1SC .4.3] Large text Incidental text Logotypes</td>
    <td>Documents, Software, Web</td>
    </tr>
    </tbody>
    </table>
    </div>

### Without Perception of Color

<div class="usa-table--borderless" tabindex="0">
  <table class="usa-table">
  <caption> Sample user stories for users without the preception of color</caption>
  <thead>
    <tr>
      <th scope="col">User Story </th>
      <th scope="col">Description</th>
      <th data-sortable scope="col" role="columnheader">Applicable ICT </th>
    </tr>
  </thead>
    <tbody>
    <tr>
    <th scope="row" role="rowheader"> As a user who is colorblind, I want to understand charts that use color to glean the information presented.</th>
    <td>Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. [WCAG SC 1.4.1]</td> 
    <td>Documents, Software, Web</td></tr>
    <tr>
    <th scope="row" role="rowheader">As a user who is red-green colorblind, I want to be able to correct errors that are shown in red so that I can successfully submit forms.</th>
    <td>Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. [WCAG SC 1.4.1]</td>
    <td>Documents, Software, Web</td></tr>
    <tr>
    <th scope="row" role="rowheader">As a user who is colorblind, I want links to be distinguishable on the page so that I can find them.</th>
    <td>Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. [WCAG SC 1.4.1]</td>
    <td>Documents, Software, Web</td>
        </tr>
    </tbody>
    </table>
    </div>

### Without Hearing

<div class="usa-table--borderless" tabindex="0">
  <table class="usa-table">
  <caption> Sample user stories for users without hearing</caption>
  <thead>
    <tr>
      <th scope="col">User Story </th>
      <th scope="col">Description</th>
      <th data-sortable scope="col" role="columnheader">Applicable ICT </th>
    </tr>
  </thead>
    <tbody>
    <tr>
    <th scope="row" role="rowheader">As a user without hearing, I want captions on multimedia so that I can fully understand what is happening in the media.</th>
    <td>Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such. [WCAG SC 1.2.2]</td>
    <td>Documents, Software, Web</td></tr>
    <tr>
<th scope="row" role="rowheader">As a user without hearing, I want accurate captions during live meetings so that I can keep up with what is happening.</th>
<td>Captions are provided for all live audio content in synchronized media. [WCAG SC 1.2.4]</td>
<td>Documents, Software, Web</td></tr>
    <tr>
<th scope="row" role="rowheader">As a user without hearing, I want to be able to solve a CAPTCHA independently so that I don’t have to ask someone else for help.</th> 
<td>Alternative forms of CAPTCHA are provided for users without hearing. [WCAG SC 1.1.1]</td>
<td>Documents, Software, Web</td></tr>
    <tr>
<th scope="row" role="rowheader">As a user without hearing, I want to be able to read a transcript of audio-only content so that I have a complete and accurate understanding of the audio.</th>
<td>Audio-only content provides a transcript that is an accurate and complete representation of the audio-only content and includes relevant sounds in addition to dialogue, such as doors banging, sirens wailing, identification of speakers in dialogue, etc. [WCAG SC 1.2.1]</td>
<td>Documents, Software, Web</td>
</tr>
    <tr>
<th scope="row" role="rowheader">As a user without hearing, I want accurate captions so that I have an equivalent experience while watching media with audio.</th>
<td>Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such. [WCAG SC 1.2.2]</td>
<td>Documents, Software, Web</td>
    </tr>
    </tbody>
    </table>
    </div>

### Limited Hearing

<div class="usa-table--borderless" tabindex="0">
  <table class="usa-table">
  <caption> Sample user stories for users with limited hearing</caption>
  <thead>
    <tr>
      <th scope="col">User Story </th>
      <th scope="col">Description</th>
      <th data-sortable scope="col" role="columnheader">Applicable ICT </th>
    </tr>
  </thead>
    <tbody>
    <tr>
    <th scope="row" role="rowheader"> As a user with very limited hearing in my left ear, I want text notifications in addition to audible alerts, so that I am informed when a form has not been completed accurately.</th>
    <td>Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as sound. [WCAG SC 1.3.3]</td>
    <td>Documents, Software, Web</td></tr>
<th scope="row" role="rowheader">As a user with limited hearing, I want to be able to easily turn off audio that plays automatically so that I am not distracting others.</th>
<td>If any audio on a web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. [WCAG SC 1.4.2]</td>
<td>Documents, Software, Web</td>
    </tr>
    </tbody>
    </table>
    </div>

### Without Speech

<div class="usa-table--borderless" tabindex="0">
  <table class="usa-table">
  <caption> Sample user stories for users without speech</caption>
  <thead>
    <tr>
      <th scope="col">User Story </th>
      <th scope="col">Description</th>
      <th data-sortable scope="col" role="columnheader">Applicable ICT </th>
    </tr>
  </thead>
    <tbody>
    <tr>
    <th scope="row" role="rowheader">As a user without speech, I want multiple methods of user identification so that I can independently perform tasks.</th>
    <td>Where provided, biometrics shall not be the only means for user identification or control.[Section 508 403.1]</td>
    <td>Hardware</td>
    </tr>
    </tbody>
    </table>
    </div>

### Limited Manipulation

<div class="usa-table--borderless" tabindex="0">
  <table class="usa-table">
  <caption> Sample user stories for users with limited manipulation</caption>
  <thead>
    <tr>
      <th scope="col">User Story </th>
      <th scope="col">Description</th>
      <th data-sortable scope="col" role="columnheader">Applicable ICT </th>
    </tr>
  </thead>
    <tbody>
    <tr>
<th scope="row" role="rowheader">As a user with limited ability to control a mouse, I want interactive elements to be accessible by keyboard so that I can easily navigate and interact with them.</th>
<td>All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.[WCAG SC 2.1.1]</td>
<td>Documents, Software, Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a user with limited ability to use a keyboard and mouse, I want time outs to allow me sufficient time to extend or disable so that I can complete long forms.</th>
<td>For each time limit that is set by the content, at least one of the following is true: [WCAG SC 2.2.1] Turn off: The user is allowed to turn off the time limit before encountering it. Adjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting. Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, “press the space bar”), and the user is allowed to extend the time limit at least ten times.</td>
<td>Documents, Software, Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a keyboard only user, I want to be able to navigate content without getting stuck or trapped in a section on the page so that I can interact with all content I want.</th>
<td>If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. [WCAG SC 2.1.2]</td>
<td>Documents, Software, Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a user with limited ability to use my hands, I want to be able to skip repeated navigation menus at the top of each page so that I can get to the body of the content faster.</th>
<td> A mechanism is available to bypass blocks of content that are repeated on multiple web pages. [WCAG SC 2.4.1]</td>
<td>Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a keyboard only user, I want to be able to see where my focus is so that I know what is on the page and what actions I can perform.</th>
<td>Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. [WCAG SC 2.4.7]</td> <td>Documents, Software, Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a keyboard only user, I want to be able to focus on a submit button without actually submitting the form so that I can review my information first.</th>
<td>When any user interface component receives focus, it does not initiate a change of context. [WCAG SC 3.2.1]</td>
<td>Documents, Software, Web</td></tr>
    </tr>
    </tbody>
    </table>
    </div>

### Limited Reach and Strength

<div class="usa-table--borderless" tabindex="0">
  <table class="usa-table">
  <caption> Sample user stories for users with limited reach and strength</caption>
  <thead>
    <tr>
      <th scope="col">User Story </th>
      <th scope="col">Description</th>
      <th data-sortable scope="col" role="columnheader">Applicable ICT </th>
    </tr>
  </thead>
    <tbody>
    <tr>
    <th scope="row" role="rowheader">As a user who cannot use their arms, I want the software application to interoperate with voice control technologies so that I can perform my job duties using technology I know how to use.</th>
    <td>Software shall interoperate with assistive technology and shall conform to 502. [Section 508 502.1] EXCEPTION: ICT conforming to 402 shall not be required to conform to 502.</td>
    <td>Software</td></tr>
    <tr>
<th scope="row" role="rowheader">As a voice input user, I want to be able to see if my input has been received and action has been taken so that I know I have completed the task.</th>
<td>Software must expose the role, state, and name of UI elements to assistive  technologies. [Section 508 502.3.1]</td>
<td>Software</td></tr>
<tr>
<th scope="row" role="rowheader">As a voice input user, I want to be able to use my dictation software to complete all interactive activities so that I do not need to rely on others for help.</th>
<td><ul><li>Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. [WCAG SC 1.3.1]</li>
<li>All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.[WCAG SC 2.1.1]</li>
<li>For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. [WCAG SC 4.1.2]</li></ul></td> <td>Documents, Software, Web</td>
    </tr>
    </tbody>
    </table>
    </div>

### Limited Language, Cognitive, and Learning Abilities

<div class="usa-table--borderless" tabindex="0">
  <table class="usa-table">
  <caption> Sample user stories for users with limited language, cognitive, and learning abilities</caption>
  <thead>
    <tr>
      <th scope="col">User Story </th>
      <th scope="col">Description</th>
      <th data-sortable scope="col" role="columnheader">Applicable ICT </th>
    </tr>
  </thead>
    <tbody>
    <tr>
    <th scope="row" role="rowheader">As a user with lots of content on the page, I want to be able to consistently navigate content so that I don’t get confused by different layouts and navigation options on different pages within a website.</th>
    <td>Navigational mechanisms that are repeated on multiple web pages within a set of web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user. [WCAG SC 3.2.3]</td>
    <td>Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a user who struggles to comprehend a lot of content at once, I want to be able to understand the type of content on the page by scanning headings so that I know if I am on the right page.</th>
<td>Headings and labels describe topic or purpose. [WCAG SC 2.4.6]</td>
<td>Documents, Software, Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a user who gets confused easily, I want to clearly understand the purpose of each link so that I know where it will take me if I select it.</th>
<td>The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general. [WCAG SC 2.4.4]</td> 
<td>Documents, Software, Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a user who gets overwhelmed easily, I want to know the title of each page so that I can easily find the content I want.</th>
<td>Web pages have titles that describe the topic or purpose. [WCAG SC 2.4.2]</td>
<td>Documents, Software, Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a user who has limited attention, I want to stop all moving or blinking content on the page so that I do not get distracted.</th>
<td>For moving, blinking, scrolling, or auto-updating information, all of the following are true: [WCAG SC 2.2.2] Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential. Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.</td>
<td>Documents, Software, Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a user who has trouble concentrating, I want to be able to easily turn off audio that plays automatically so that I am not distracted.</th>
<td>If any audio on a web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. [WCAG SC 1.4.2]</td>
<td>Documents, Software, Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a user who has trouble following detailed instructions, I want to easily understand what is required in each form field so that I can accurately fill in data.</th>
<td>Headings and labels describe topic or purpose. [WCAG SC 2.4.6] Labels or instructions are provided when content requires user input. [WCAG SC 3.3.2]</td>
<td>Documents, Software, Web</td></tr>
<tr>
<th scope="row" role="rowheader">As a user who gets easily overwhelmed, I want more than one way to navigate to webpages within a website so that I can find information easier and in a more comprehensible manner for me.</th>
<td>More than one way is available to locate a web page within a set of web pages except where the web page is the result of, or a step in, a process. [WCAG SC 2.4.5]</td>
<td>Web</td>
    </tr>
    </tbody>
    </table>
    </div>

### Photosensitive

<div class="usa-table--borderless" tabindex="0">
  <table class="usa-table">
  <caption> Sample user stories for users with photosensitivities</caption>
  <thead>
    <tr>
      <th scope="col">User Story </th>
      <th scope="col">Description</th>
      <th data-sortable scope="col" role="columnheader">Applicable ICT </th>
    </tr>
  </thead>
    <tbody>
    <tr>
    <th scope="row" role="rowheader">As a user with photoepileptic seizures, I want to be able to navigate content without it triggering a medical response so that I can interact safely with content.</th>
    <td>Content does not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds. [WCAG SC 2.3.1]</td>
    <td>Documents, Software, Web</td>
    </tr>
    </tbody>
    </table>
    </div>

## Related Resources

*<a href="{{ site.baseurl }}/manage/playbooks/technology-accessibility-playbook-intro/play07/">Technology Accessibility Playbook—Play 7: Integrate Accessibility Needs into Requirements and Design Processes  
*<a href="https://digital.va.gov/section-508/checklists/collections-user-stories/" target="_blank" class="usa-link--external">Department of Veteran's Affairs: Collections, Epics, Sub Epics, and User Stories</a> 