---
layout: page
sidenav: true
type: develop
title: How People with Disabilities Use ICT
permalink: develop/how-people-with-disabilities-use-ICT/
description: Discover how people with disabilities use information and communication technology (ICT) through the lens of Section 508 Functional Performance Criteria. Learn about real user needs, assistive technologies, and design practices that make ICT accessible, inclusive, and effective for everyone
description-alt: Added How People with Disabilities Use ICT content
audience:
- Designers
- Developers
- IT Program & Project Managers
- Members of the Public
topic:
- Design
- Develop
- Testing
subtopic:
- General Information
- Usability
resource-type:
- Playbook
format: HTML
created: 2026-10-26
updated: 
---

When we design information and communication technology (ICT), it’s easy to think about features, functions, and compliance checklists. But real accessibility comes down to people. Each person experiences ICT differently depending on their abilities and the tools they use. The [Functional Performance Criteria (FPC) in Section 508](https://www.access-board.gov/ict/#302-functional-performance-criteria) describe broad categories of functional limitations, but how people with disabilities experience technology is best understood through their own perspective. Functional performance criteria do not explicitly account for the combined impact of multiple disabilities occurring at the same time such as individuals who are both deaf and blind. As a result, conforming to the functional performance criteria alone may not fully ensure accessibility for users with intersecting or co-occurring disabilities.To better understand the functional performance criteria, it is important to understand how people with disabilities actually use ICT, the assistive technology (AT) they rely on, and what they need from accessible design.

One useful way to understand accessibility needs is through user personas that represent people with disabilities and the ways they interact with technology. Section508.gov provides [Sample Personas for Users with Disabilities]({{site.baseurl}}/develop/sample-personas/) that illustrate real-world experiences, assistive technologies, barriers, and accessibility needs across a range of disability types. While the functional performance criteria describe broad functional categories, personas help translate those categories into practical design considerations by focusing on the people who use ICT. The examples in this document should be understood in a similar way: as representative user experiences that help connect the functional performance criteria to real-world use of technology.

## 1. Without Vision

“I can’t see the screen.”

I rely on my screen reader or Braille display to access text and controls. The software reads the structure of a page out loud to me or sends it to a refreshable Braille device. If headings, labels, or buttons aren’t coded properly, I can’t find what I need.

Functional Performance Criteria: Cannot perceive visual content such as text, images, or video.

Assistive technology: Screen readers, braille displays

What I need from ICT:

-   Accurate text alternatives for images and graphics.

-   Clear semantic structure with headings, lists, and labels.

-   Keyboard access to every function.

## 2. With Limited Vision

“I can see some things, but not everything.”

I can read larger text and see certain details if I use a screen magnifier or zoom in on my browser. Sometimes I switch to high-contrast mode so I can better distinguish text from the background. When websites don’t scale well or text overlaps, I get stuck.

Assistive technology: Screen magnification, browser zoom, high-contrast modes, text resizing.

What I need from ICT:

-   Content that reflows properly when I zoom.

-   Strong contrast between text and background.

-   No reliance on color alone to communicate important information.

## 3. Without Perception of Color

"I don’t see color the way others do."

When colors are close in shade, I can’t always tell them apart. A red error message or a green success message looks like the same box to me. I sometimes use filters to adjust color or look for context clues, but this doesn’t always work.

Assistive technology: Browser extensions or OS-level color filters.

What I need from ICT:

-   Information presented with symbols, text, or patterns in addition to color.

-   Charts and graphs that use labels, not just colors, to distinguish data.

## 4. Without Hearing

"I can’t hear the audio."

When video or audio content plays, I can’t follow along without captions or a transcript. If an app uses sounds to alert me to notifications, I won’t know unless there’s also a visual cue.

Assistive technology: Captions, transcripts, transcription services, sign language services, visual alerting systems, text based communication tools, CART (Communication Access Real-Time Translation) and RCC (Remote Conference Captioning).

What I need from ICT:

-   Accurate, synchronized captions for synchronized media.

-   Text transcripts for audio-only content.

-   Visual indicators in place of sound alerts.

## 5. With Limited Hearing

"I can hear, but I miss parts of the conversation."

I use hearing aids and sometimes rely on captions when audio isn’t clear. Background noise makes it harder to understand speech. If captions are missing or inaccurate, I struggle to follow along.

Assistive technology: Sound amplification apps, bluetooth streaming, hearing aids, assistive listening devices

What I need from ICT:

-   Clear and accurate captions.

-   Adjustable volume and playback controls.

-   Options for text-based communication in meetings or calls.

## 6. Without Speech

"I can’t use my voice to communicate."

When a website or service requires me to call or use voice commands, I can’t participate. I rely on text-to-speech devices or communication boards to interact. These tools generate spoken words from what I type, but they don’t always work with every system.

Assistive technology: Speech-generating devices, text-to-speech apps, augmentative and alternative communication (AAC).

What I need from ICT:

-   Alternatives to voice-only features.

-   Compatibility with text-to-speech or AAC devices.

-   Authentication methods that don’t require speaking.

## 7. With Limited Manipulation

"I can’t easily use my hands to control a keyboard or mouse."

Because of limited motor control, I may use an alternative keyboard, a switch device, or voice recognition software. If a site only works with precise mouse clicks or has tiny buttons, it’s nearly impossible for me to use.

Assistive technology: Alternative keyboards, switch devices, head pointers, eye-tracking, speech recognition.

What I need from ICT:

-   Full keyboard functionality for all tasks.

-   Large, easy-to-activate targets for buttons and links.

-   Avoidance of time limits or rapid interactions I can’t manage.

-   Web, documents, software that works with assistive technology

## 8. With Limited Reach and Strength

"I don’t have the strength or reach to interact with all devices."

I can’t always press hard, hold buttons down, or reach across a screen. I use adaptive hardware and sometimes voice input to control devices. If the system requires long presses or constant pressure, I can’t complete the task.

Assistive technology: Adaptive input devices, speech input, remote controls.

What I need from ICT:

-   Sensitive interfaces that respond to delicate interactions.

-   Adjustable settings for sensitivity and repeat rates.

-   Alternatives to drag-and-hold gestures.

## 9. With Limited Language, Cognitive, and Learning Abilities

"I have trouble understanding complex instructions or remembering steps."

I use tools that help me focus, like screen readers with simplified reading or reminders to keep me on task. Long, complex instructions or cluttered layouts overwhelm me and make me lose track of where I am.

Assistive technology: Screen readers, simplified reading, reminders, text-to-speech, focus tools, dictation software

What I need from ICT:

-   Clear, consistent navigation.

-   Plain, concise language.

-   Options to reduce distractions, like animations or auto-updating content.

Accessibility is not just a checklist — it’s about making ICT usable for real people with real needs. By understanding how people with different disabilities experience technology, we can design ICT that is effective, inclusive, and empowering.   When you design with the Functional Performance Criteria in mind, you’re not only meeting Section 508 requirements — you’re ensuring that technology works for everyone.

## Related Resources

-   [Designing Digital Content For Users With Cognitive Disabilities]({{site.baseurl}}/design/digital-content-users-with-cognitive-disabilities/)

-   [Sample Personas for Users With Disabilities]({{site.baseurl}}develop/sample-personas/)

-   [Tips for Usability Testing with People with Disabilities]({{site.baseurl}}test/usability-testing-with-people-with-disabilities/)

-   [Sample User Stories for Accessible ICT]({{site.baseurl}}/develop/user-stories/)
