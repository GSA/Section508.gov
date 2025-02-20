---
layout: post
permalink: blog/how-gsa-developed-and-tested-e-learning-training/
type: article
title: 'How the General Services Administration Developed and Tested Accessible E-Learning Training'
description: 
disclaimer: true
tags: Design-and-Develop #choose one or more (comma separated): Accessibility-Bytes, Acquisition, Content-Creation, Design-and-Develop, Events, Policy-and-Management, Testing 
social_img:
created: 2025-01-10
description: "The General Services Administration (GSA) Governmentwide IT Accessibility Program shares how they developed and tested e-learning training programs to enhance workforce education. It highlights the methodologies used, key challenges faced, and the innovative solutions implemented to ensure effective learning outcomes."
contributors: 
redirect_from:
---
In January 2024, the General Services Administration (GSA) added the self-paced E-learning course, [Section 508: What Is It and Why Is It Important?]({{site.baseurl}}/training/online-course/section-508-what-is-it/), to the required annual training curriculum for all GSA employees. This course provides a basic overview of how Section 508 supports accessibility and informs employees from GSA and multiple other agencies how they can help make agency information accessible to all employees and members of the public.

However, while preparing the course for release, there were concerns raised about whether it was possible to make the course fully accessible.

## What Was the Development Process?

An instructional developer who supports the Governmentwide IT Accessibility Program was assigned to create this course and make it as accessible as possible. The developer decided to build the course using a program called Articulate Rise*, which allowed the team to format the course to appear like a series of web pages rather than slides in a slideshow with an unchangeable layout. The web page layout, also known as a "reflowable layout," made the appearance of the course flexible enough so users could view it on any screen, including a smartphone.

The development team followed technical conformance guidelines for color contrast, alternative text for images, and labels for links and buttons. They kept the content organized using appropriate headings, lists, and other navigation elements. When testing the course's accessibility, they determined that it met all of the Section 508 requirements.

## What Was the Problem?

Before the course could be published, an individual from an internal GSA team reviewing the course contacted the developer, suggesting that creating a fully accessible course with Articulate Rise was impossible. The developer, however, maintained that the course passed all of the accessibility tests and was fully conformant. 

As it turned out, a blind employee from this internal team, who uses a screen reader to read content, had previously tried to take a different course built with Articulate Rise. However, he found that course completely unusable and was confident that any course made with the same software would have similar accessibility issues.

## How Was the Problem Tested?

The developer invited this blind employee to test the new Section 508 course and provide feedback on the experience. He agreed and they set up a meeting to discuss ways to improve the course.

First, the tester confirmed the course met all of the requirements of Section 508, so the previous testing was accurate. However, in some parts of the course, even though a screen reader user could interact with the content, it was difficult to understand how to interact with it.

The biggest issue was that it was difficult for him to track which lesson he was on. A sighted user could look at the top of the page and see "Lesson 2," click a button that said "Next Lesson," and see the heading change to say "Lesson 3." The navigation panel also consistently showed users how far into the course they had progressed. However, these cues were not easy to find with a screen reader, so it was difficult to tell where one lesson ended and the next began.

The tester identified a few other smaller issues. For example, the interactive "flash card" activity was difficult to use because the screen reader could not properly convey what it was describing. Was the user on the front of the card or the back of the card? Were they still on the same card or had the screen reader moved on to the next one? 

## How Was the Problem Solved?

Ultimately, the issues were resolved with reasonably straightforward solutions. The developer enhanced the course by adding more precise instructions to the introduction and to the interactive activities to help users know what to expect. They also added a heading and button to the end of each lesson to help screen reader users stay oriented.

The following table shows examples of how the developer changed the instructions to better support screen reader users.

<table id="table-1" class="usa-table usa-table--borderless striped grid-col-12 margin-bottom-3">
  <caption>Table: Changes to instructions to improve usability.</caption>
  <thead>
    <tr>
      <th scope="col">Old Text</th>
      <th scope="col">New Text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">How do I use this course? Within each section, you can use the Continue and Previous buttons to navigate between sections. You can also jump to different sections using the menu on the left.</th>
      <td>
        <p>How do I use this course?</p>
        <p>Scroll through the content and follow specific instructions for quizzes and other interactive content.</p>
        <p>At the end of each lesson, select the "Continue" button to continue to the next lesson.</p>
        <p>You can also revisit lessons using the navigation menu on the left. Depending on your screen, you may need to select the navigation menu icon in the top left corner of the screen to open the navigation menu.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Link: “Lesson  3: Why is Section 508 Important?”</th>
      <td>
        <p>Heading: Select the following button to continue to the next lesson.</p>
        <p>Button: Continue to Lesson 3.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Select each card to flip and reveal different types of ICT (Information and Communication Technology).</th>
      <td>Select each card to flip and reveal different types of ICT. Each card in the following interaction has an image on the front and a description on the back of a type of ICT.</td>
    </tr>
  </tbody>
</table>

## Lessons Learned

Most of these changes seemed small, but they took the course from "extremely difficult to use" to "very easy to use" for users with screen readers. All learners deserve to be able to navigate through the course, learn the content, and complete their training without struggling with confusing navigation.

For future content, the developer plans to apply the following lessons:

* Make sure the goal is to create content that is "user-friendly" and doesn't meet only the bare minimum of requirements. Set this goal at the beginning of the project and continue to follow it throughout the development process.
* Orientation is extremely important for screen reader users. Always ensure users can understand where they are, where they're headed, and how to navigate. Provide context for potentially confusing elements, like the flash card activity.
* When someone provides feedback to improve your accessibility, it does not mean you are bad at accessibility; others have lived different experiences that you haven't learned about yet and they want to help you make the best content possible.

This collaboration was an important win for this Section 508 team, showcasing the impact of including people with disabilities when testing digital products prior to release. We hope other teams get to have similar opportunities to learn and grow on their journey toward creating inclusive and accessible content.

## Related Resources

* [Designing Digital Content For Users With Cognitive Disabilities]({{site.baseurl}}/design/digital-content-users-with-cognitive-disabilities/)
* [Tips for Usability Testing with People with Disabilities]({{site.baseurl}}/test/usability-testing-with-people-with-disabilities/)
* [Universal Design and Accessibility]({{site.baseurl}}/develop/universal-design/)

**Reviewed/Updated:** January 2025