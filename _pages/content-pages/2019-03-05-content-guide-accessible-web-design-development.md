---
layout: wide
sidenav: false
permalink: content/guide-accessible-web-design-development/
type: develop
title: 'Guide to Accessible Web Design & Development'
created: 1551819388
contributors: usab
description: "Guide to Accessible Web Design & Development"
---

Do you know how to create accessible digital products and services? This guide recaps relevant [Web Content Accessibility Guidelines (WCAG)][1]requirements and calls out specific considerations for content, design, and development. It also clarifies how developers should work together with designers and content creators to ensure that federal websites and digital products meet the [Revised 508 Standards][2].

If you are a developer, designer, or content manager, keep reading! Bookmark this guide and refer to it whenever you’re developing new content, websites or digital tools.
## How To Use This Guide
Major topics are listed below in alphabetical order. Click on a topic name to jump to that topic for an explanation of the [WCAG][1] requirements (also known as Success Criteria) related to that topic.

<ul style="list-style-type:none;">
  <li>
    <a href="#audio-only_or_video-only">Audio-Only or Video-Only</a>
  </li>
  <li>
    <a href="#captcha">CAPTCHA</a>
  </li>
  <li>
    <a href="#changing_content">Changing (Dynamic) Content</a>
  </li>
  <li>
    <a href="#contrast">Contrast</a>
  </li>
  <li>
    <a href="#flashing">Flashing</a>
  </li>
  <li>
    <a href="#forms">Forms</a>
  </li>
  <li>
    <a href="#frames_iFrames">Frames & iFrames</a>
  </li>
  <li>
    <a href="#headings">Headings</a>
  </li>
  <li>
    <a href="#images">Images</a>
  </li>
  <li>
    <a href="#keyboard_and_focus">Keyboard and Focus</a>
  </li>
  <li>
    <a href="#language">Language</a>
  </li>
  <li>
    <a href="#links_and_buttons">Links and Buttons</a>
  </li>
  <li>
    <a href="#multiple_ways">Multiple Ways</a>
  </li>
  <li>
    <a href="#page_title">Page Title</a>
  </li>
  <li>
    <a href="#parsing">Parsing</a>
  </li>
  <li>
    <a href="#repetitive_content">Repetitive Content</a>
  </li>
  <li>
    <a href="#resizable_text">Resizable Text</a>
  </li>
  <li>
    <a href="#sensory_characteristics">Sensory Characteristics</a>
  </li>
  <li>
    <a href="#stylesheet">Stylesheet</a>
  </li>
  <li>
    <a href="#synchronized_media">Synchronized Media</a>
  </li>
  <li>
    <a href="#tables">Tables</a>
  </li>
  <li>
    <a href="#timed_events">Timed Events</a>
  </li>
</ul>

<h2 id="audio-only_or_video-only">
  Audio-Only or Video-Only
</h2>

### 1.2.1 Audio-only and Video-only (Prerecorded)

For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:

  * Prerecorded Audio-only: An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.
  * Prerecorded Video-only: Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

**Content/Design Considerations**

  * Audio-Only: Provide a text transcript for audio-only content.
  * Video-Only or Silent Animation: Provide a text transcript or an audio track for video-only (without sound) content.

**Development Considerations**

  * Provide a descriptive link to a text transcript or the audio track (for silent video/animation content) immediately after the audio-only or video-only content.

### 1.4.2 Audio Control

If any audio on a web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.

Failure to meet this requirement could interfere with any use of the page. Refer to [Requirement 5 - Non-Interference][3] to learn more.

**Content/Design Considerations**

  * Best Practice: Do not play any audio content automatically.

**Development Considerations**

  * Best Practice: Ensure that a mechanism to control the content is easy to locate, is keyboard operable, and its purpose is clearly labelled.

### 2.2.2 Pause, Stop, Hide

For moving, blinking, scrolling, or auto-updating information, ALL of the following are true:

  * Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it, unless the movement, blinking, or scrolling is part of an activity where it is essential; and
  * Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it, or to control the frequency of the update, unless the auto-updating is part of an activity where it is essential.

Failure to meet this requirement could interfere with any use of the page. Refer to [Requirement 5 - Non-Interference][3] to learn more.

**Content/Design Considerations**

  * Best Practice: Do not use content that automatically moves, blinks, or scrolls.
  * User must be able to configure auto-updates to content.


<h2 id="captcha">
  CAPTCHA
</h2>

### 1.1.1 CAPTCHA

If the purpose of non-text content is to confirm the content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.

**Content/Design Considerations**

  * If a CAPTCHA is used, require the CAPTCHA test to have a text alternative that describes its purpose, and require that an alternate form of the CAPTCHA, using a different modality, also be provided.

**Development Considerations**

  * Select a CAPTCHA provider that is already conformant to 508 standards. 3rd party CAPTCHA tools generally do not allow customization. Select a CAPTCHA that does not rely on images.


<h2 id="changing_content">
  Changing (Dynamic) Content
</h2>

### 4.1.2 Name, Role, Value

For all user interface components (including, but not limited to, form elements, links, and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies (Level A).

**Development Considerations**

  * Provide the name, role, state, value of all components.
  * For each element a user encounters, they need to know:
    * Name (e.g., the label)
    * State (e.g., checked/unchecked, expanded/collapsed, selected/unselected)
    * Role (e.g., input type)
    * Value

### 2.2.2 Pause, Stop, Hide

For moving, blinking, scrolling, or auto-updating information, ALL of the following are true:

  * Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it, unless the movement, blinking, or scrolling is part of an activity where it is essential; and
  * Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it, or to control the frequency of the update, unless the auto-updating is part of an activity where it is essential.

Failure to meet this requirement could interfere with any use of the page. Refer to [Requirement 5 - Non-Interference][3] to learn more.

**Content/Design Considerations**

  * Best Practice: Do not use content that automatically moves, blinks, or scrolls.
  * User must be able to configure auto-updates to content.


<h2 id="contrast">
  Contrast
</h2>

### 1.4.3 Contrast (Minimum)

The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

  * Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1.
  * Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
  * Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.

**Content/Design Considerations**

  * Select colors for text and background that exceed the contrast requirement.
    * Large Text is at least 18 point text or at least 14 point for bold text.
    * If using colors that have a gradient, use the lightest color in the gradient for the contrast ratio test.
    * Note: The default red color in CSS does not provide enough contrast against white if it's not large text. Use a slightly darker red, like #E60000 for standard font sizes.

  * Test color contrast with the [WebAIM color contrast checker][4]
  * Ensure style guidelines for your organization meet the minimum contrast requirements.


<h2 id="flashing">
  Flashing
</h2>

### 2.3.1 Three Flashes or Below Threshold

Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.

Failure to meet this requirement could interfere with any use of the page. Refer to [Requirement 5 - Non-Interference][3] to learn more.

Best Practice: Do not have content that flashes.


<h2 id="forms">
  Forms
</h2>

### 1.3.1 Info and Relationships

Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

**Content/Design Considerations**

  * The border around the grouped fields can be hidden programmatically if it conflicts with the design.
  * Best Practice: Put form instructions at the top of the form, instead of the middle.

**Development Considerations**

  * To hide the border around fieldset elements, put in the <b style="monospace"><head></head></b> or in a CSS file
    {% highlight ruby %}{% raw %}
    <style>  
    fieldset {  
    border: 0 none;  
    }  
    </style>
    {% endraw %}{% endhighlight %}
  * Grouping related form controls: 
      * Refer to [ARIA (radio buttons, segmented inputs)][5]
  * Fieldset/Legend and Label/ID (see also [WCAG H44][6] and [WCAG H71][7])
    {% highlight ruby %}{% raw %}
    <fieldset>
     <legend>Your Name</legend>
     <label for="title">Title (optional)</label>
     <input id="title" type="text">
     <label for="first-name">First name*</label>
     <input id="first-name" name="first-name" type="text" aria-required="true">
    <label for="middle-name">Middle name (optional)</label>
    <input id="middle-name" type="text">
    <label for="last-name">Last name*</label>
    <input id="last-name" name="last-name" type="text" aria-required="true">
   </fieldset>
   {% endraw %}{% endhighlight %}
  * Techniques for WCAG Success Criteria: 
    * [H44: Using label elements to associate text labels with form controls][6]
    * [H71: Providing a description for groups of form controls using fieldset and legend elements][7])
    * [H85: Using OPTGROUP to group OPTION elements inside a SELECT][8]

  * ARIA techniques: 
    * [aria-labelledby][9] - Reference ID(s) that have been assigned to the form instruction(s); useful if the instructions are on the page but not together or next to the input form
    * [aria-label][10] - useful if the form instruction is not visible on the page
    * [aria-describedby][11] - reference ID(s) that have been assigned to information on the page that supports the form instruction

### 3.2.2 On Input

Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component. Examples of changes in context are:

  1. Opening a new window
  2. Moving focus to a different component
  3. Going to a new page (or anything that would look to a user as if they had moved to a new page)
  4. Significantly re-arranging the content of a page

**Content/Design Considerations**

  * Automatic changes should not be initiated when a user makes a selection or enters information. Provide a clearly named to control (like a button) to initiate such changes.

**Development Considerations**

  * [Example - using an onchange event on a select element without causing a change of context][12]

### 3.3.1 Error Identification

If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.

**Content/Design Considerations**

  * Provide a description of the error that includes the location of the error.
  * Do not use ONLY color to indicate errors, such as a red outline around the field.

**Development Considerations**

  * Identify input errors by describing the errors. (Including only a mark without further explanation on a form field error is not adequate.)
  * If error is detected immediately when exiting the form, ensure the error notification is keyboard accessible.

Best Practices:

  1. Move focus to error/success message.
  2. Set error/success message container to tabindex="-1". Otherwise, focus cannot be set successfully on the message.
  3. Provide a count of errors.
  4. Associate error descriptions with form fields using aria-describedby so that screen reader users know how to fix the problem.
  5. Make error messages visible so that sighted users know how to fix the problems.
  6. Place error messages adjacent to the inputs so that screen magnification users can easily see which messages belong to which fields.

Tip: How to use “Alert” versus “Alert Dialog”

  1. An alert (role="alert") does not require a user action. It does not move the keyboard focus. No part of the page is hidden or obscured or made unavailable at any time.
  2. An alert dialog (role="alertdialog") requires a user action. It acts like a regular dialog, but it is supposed to convey more of a sense of urgency. Screen readers typically say "Alert dialog" when an alert dialog pops up. The focus moves to the dialog and the user is required to take action. Usually this means clicking a button, even if it may just be an "OK" button or a "Close" button. The user cannot navigate out of the dialog by just tabbing, and screen reader users cannot use keyboard shortcuts to access semantic elements (headings, landmarks, form elements, etc.) that are outside of the dialog.

### 3.3.2 Labels or Instructions

Labels or instructions are provided when content requires user input.

**Content/Design Considerations**

  * Provide adequate labels and instructions to help users accurately complete form fields.
  * Make all of the instructions easy to find.

### 3.3.3 Error Suggestion

If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.

**Content/Design Considerations**

  * Provide suggestions on how to correct an error if known fixes are available.

**Development Considerations**

  * Provide this information with the error notification (3.3.1)

### 3.3.4 Error Prevention (Legal, Financial, Data)

For web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:

  * Reversible: Submissions are reversible.
  * Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
  * Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

**Content/Design Considerations**

  * If your form is of the covered type, choose from the available options (Reversible, Checked, Confirmed) to meet this requirement.


<h2 id="frames_iFrames">
  Frames & iFrames
</h2>

### 4.1.2 Name, Role, Value

For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. (Level A)

Frames that contain repetitive content can be used to meet 2.4.1, however, _**frames are obsolete in HTML5**_.

### 2.4.1 Bypass Blocks

A mechanism is available to bypass blocks of content that are repeated on multiple web pages. (Level A)

**Development Considerations**

  * Frames - Add a title attribute that describes its content for each &lt;frame&gt;
      * [H64: Using the title attribute of the frame and iframe elements][13]
  * iFrames - Provide [accessible name/accessible description][14] for each &lt;iframe&gt;


<h2 id="headings">
  Headings
</h2>

### 2.4.6 Headings and Labels

Headings and labels describe topic or purpose. (Level AA).

Refer to WebAIM’s [Using Headings for Content Structure][15].

**Content/Design Considerations**

  * Provide descriptive headings for sections of content for content structure.

### 1.3.1 Info and Relationships

Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

**Development Considerations**

  * Assign headings structure and heading levels to headings. 
      * Best Practice: Do not skip heading levels or go out of sequence. If the default size of the headings is too big for the look you have in mind, use styles to change the size, rather than jumping down to a lower heading level.
  * Do not use heading tags <h1> through <h6> for non-heading content


<h2 id="images">
  Images
</h2>

### 1.1.1 Non-Text Content - Meaningful Images

All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.

Content owners are the best resource for text descriptions since they know what information they want the image to convey. Determine alt text by asking, "What text would I put here instead of this picture?"

  * Review [WebAIM Alternative Text][16] for appropriate use of alternative text.
  * Review [W3C's Alt Decision Tree][17] for guidance on how to describe images.

**Content/Design Considerations**

  * All images must have descriptions. Designers should provide (text) equivalent descriptions for images, and pass them along to the developer(s).

**Development Considerations**

  * ALL images must have the alt attribute (even decorative images should be tagged alt=""). IMG must have an alt attribute for valid HTML5.
  * The Accessible Name and Accessible Description for images is computed per [W3C’s HTML Accessibility API Mappings (HTML-AAM) for images][18]  
    **Examples** 
      * [alt][19]  
        &lt;img src="/whitehouse.jpg" alt="White House south entrance"&gt;
      * [aria-labelledby][9] (must reference the ID of the image description)  
        &lt;img aria-labelledby="steps" src="white-house-steps.jpg"&gt;  
        ...  
        &lt;p id="steps"&gt;The President waited on the White House front steps for the ambassador to arrive.&lt;/p&gt;
      * [aria-label][10] (contains the description)  
        &lt;img aria-label="home" src="/whitehouse.png"&gt;
      * [aria-describedby][11] (must reference the ID of supporting information for the image description)  
        &lt;img src="/plus.png" aria-label="close or open branch" aria-describedby="plus-expand"&gt;  
        ...  
        &lt;p id="plus-expand"&gt;Use the right arrow key to expand and the left arrow key to collapse. &lt;/p&gt;
      * [title][20]  
        &lt;img src="/whitehouse.jpg" title="White House south entrance"&gt; 
          * When title is provided with alt, aria-labelledby, or aria-label, the value of title is computed as the accessible description.  
            &lt;img src="/whitehouse.jpg" alt="White House south entrance" title="view from south lawn"&gt;
          * If title and aria-describedby are both provided, aria-describedby is the accessible description and title is ignored.

### 1.1.1 Non-Text Content - Decorative Images

All non-text content that is presented to the user should have a text alternative that serves the equivalent purpose; since decorative images do not convey any meaning for any user, they should include a blank alt tag.

**Content/Design Considerations**

  * Identify decorative content so developers can tag it appropriately.

**Development Considerations**

  * Tag decorative images with a blank alt tag. 
      * [alt][19]=""  
        &lt;img src="decorative_1.gif" alt=""&gt;
      * [role][21] ="presentation" (not as widely supported)  
        &lt;img src="border.png" role="presentation"&gt;

### 1.4.5 Images of Text

If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text.

  * Customizable: The image of text can be visually customized to the user's requirements;
  * Essential: A particular presentation of text is essential to the information being conveyed. 
      * Logotypes (text that is part of a logo or brand name) are considered essential. 

Avoid using images of text. Use text instead.

### 4.1.2 Name, Role, Value

For all user interface components (including but not limited to: form elements; links; and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.

**Content/Design Considerations**

  * If the name for a component is not obvious, provide it for the developer.

**Development Considerations**

  * Provide the name, role, state, value of all components.


<h2 id="keyboard_and_focus">
  Keyboard and Focus
</h2>

### 2.1.1 Keyboard

All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

**Development Considerations**

  * Do not remove standard keyboard accessibility behavior from native HTML interface elements (such as links, buttons, form elements).
  * Add keyboard accessibility to custom developed interface elements. 
      * Use the proper [ARIA][22] attributes, and javascript event handling.
  * Make tooltips mouse and keyboard accessible. Review [ARIA tooltip example][23].

### 2.1.2 No Keyboard Trap

If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.

Failure to meet this requirement could interfere with any use of the page. Refer to [Requirement 5 - Non-Interference][3] to learn more.

**Development Considerations**

  * This usually occurs when external content is embedded within a page. Ensure the keyboard user can exit the embedded content.

### 2.4.7 Focus Visible

Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

**Development Considerations**

  * Do not intentionally remove the outline or other visual indicators on interactive, focusable element.
  * After deactivating the element currently in focus, set the focus to a specific location. Otherwise, the focus will be lost, effectively sending the focus back to the top of the Document Object Model (DOM).

### 2.4.3 Focus Order

If a web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

**Development Considerations**

  * Code content so elements are tabbed to in a sequential order that matches visual presentation of content (left to right, top to bottom).
  * When adding an element to the keyboard tab order, use tabindex="0"
    * tabindex="-1": Makes the element focusable but **not** part of the (DOM) Tab sequence.
    * tabindex="0": Makes the element focusable **and** includes it in the (DOM) Tab sequence.

### 3.2.1 On Focus

When any component receives focus, it does not initiate a change of context.

**Content/Design Considerations**

  * Automatic changes should not be initiated when a component receives focus. Provide a clearly named control, such as a button, to initiate such changes.

**Development Considerations**

  * Examples of changes in context are: 
      * Opening a new window
      * Moving focus to a different component
      * Going to a new page (or anything that would look to a user as if they had moved to a new page)
      * Significantly re-arranging the content of a page

Don't use javascript to perform a function that changes the page's context on the focus event (onfocus).


<h2 id="language">
  Language
</h2>

### 3.1.1 Language of Page

The default human language of each web page can be programmatically determined.

**Development Considerations**  
Identify the default lang attribute on the HTML element:
{% highlight ruby %}{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>WAI application shell</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="styles/style.css">
</head>
{% endraw %}{% endhighlight %}

Review [list of lang values][24].

### 3.1.2 Language of Parts

The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.

**Content/Design Considerations**

  * Provide language of content that is in a different language from the rest of the page.

**Development Considerations**

  * For passages in a language other than the default language of the page, place a lang attribute with the appropriate value on the element or a parent element that contains the passage.


<h2 id="links_and_buttons">
  Links and Buttons
</h2>

### 2.4.4 Link Purpose (In Context)

The purpose of each link can be determined from the link text alone, or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.

Best Practice: Although the requirement allows for it, avoid vague link text like "click here" and "read more". Avoid using the same link text for links that have different destinations.

This requirement covers both links and buttons.

**Content/Design Considerations**

  * Give links a descriptive name so users will know where the link will take them if selected.
  * Similarly, label buttons so that their function is clear.

**Development Considerations**

  * The destination or function of each link/button should be clearly explained in the link/button text or programmatically-determined link context.
  * Tip: ARIA Links
    * Use HTML <a> element to create links whenever possible.
    * ARIA links do not have any native styling or functionality, so you will need to add things like keyboard support, underline and color.
    * Use CSS to change the cursor to a pointer (in most browsers this looks like a hand). If you don't, the cursor will look like a text selector, which will be confusing to sighted users.


<h2 id="multiple_ways">
  Multiple Ways
</h2>

### 2.4.5 Multiple Ways

More than one way is available to locate a web page within a set of web pages except where the web page is the result of, or a step in, a process.

**Content/Design Considerations**

  * Plan for a site map or other ways for a user to reach a page in more than one way.
  * Examples:
    * Links to navigate to related web pages
    * A site map
    * A search function to help users find content
    * A list of links to all other web pages
    * Linking to all of the pages on the site from the home page


<h2 id="page_title">
  Page Title
</h2>

### 2.4.2 Page Titled

Web pages have titles that describe topic or purpose.

**Content/Design Considerations**

  * Provide a descriptive title for each page or screen.
  * If the page is a result of a user action or scripted change of context, the TITLE should describe the result of change of context.

**Development Considerations**

  * Code the TITLE for the page. 
      * Child of &lt;head&gt;
      * Only one TITLE per page
  * Example:  
    {% highlight ruby %}{% raw %}
    <!DOCTYPE html>  
    <html>  
    <head>  
    <meta charset="utf-8">  
    **<title>WAI help for page title</title>**  
    <link rel="manifest" href="/manifest.json">  
    <meta http-equiv="X-UA-Compatible" content="IE=edge">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <link rel="stylesheet" type="text/css" href="styles/style.css">  
    </head>
    {% endraw %}{% endhighlight %}


<h2 id="parsing">
  Parsing
</h2>

### 4.1.1 Parsing

In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

Note: Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.

**Development Considerations**

  * Validate code meets requirements
  * Start and end tags that are missing a critical character in their formation, such as a closing angle bracket, or a mismatched attribute value quotation mark, are not complete.
  * IDs MUST be unique.


<h2 id="repetitive_content">
  Repetitive Content
</h2>

### 2.4.1 Bypass Blocks

A mechanism is available to bypass blocks of content that are repeated on multiple web pages.

**Content/Design Considerations**

  * Identify the repetitive content on pages and the location of where a skip mechanism should land.
  * If there are multiple repeated blocks of content, provide a mechanism to bypass each block.
  * The link can be made invisible until it gets focus so that sighted keyboard users can also use it.

**Development Considerations**

  * Provide a skip mechanism that is keyboard accessible.

### 3.2.3 Consistent Navigation

Navigational mechanisms that are repeated on multiple web pages within a set of web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.

**Content/Design Considerations**

  * Repeated content on multiple pages must be in a consistent order across the pages.
  * Navigation mechanisms can be any repeated information on pages and are not limited to links and menus.

**Development Considerations**

  * Building a website or web application using templates and reusable components provides familiarity and consistency for its users.

### 3.2.4 Consistent Identification

Components that have the same functionality within a set of web pages are identified consistently.

**Content/Design Considerations**

  * Give repeated functional components a consistent name.

**Development Considerations**

  * Building a website or web application using templates and reusable components provides familiarity and consistency for its users.


<h2 id="resizable_text">
  Resizable Text
</h2>

### 1.4.4 Resize Text

Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.

**Development Considerations**

  * Web pages should be designed to be "responsive" to the size of the display on which they are viewed. Performing a 200% zoom should not affect the content or functionality of the page.
  * If you need to specify height and width, using em units in padding can help keep things in proportion because em units are relative to font size.


<h2 id="sensory_characteristics">
  Sensory Characteristics
</h2>

### 1.3.3 Sensory Characteristics

Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.

**Content/Design Considerations**

  * Avoid referring to visual indicators, like "the red button," or "the left-hand side of the page," or "the square box."

### 1.4.1 Use of Color

Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

**Content/Design Considerations**

  * Where color is used to convey meaning, include another visual element (like a symbol or text) to convey the same meaning.


<h2 id="stylesheet">
  Stylesheet
</h2>

### 1.1.1 Non-Text Content

All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.

**Content/Design Considerations**

  * Avoid using meaningful images as background images.

**Development Considerations**

  * Insert a meaningful image with `<img>` instead of background image.
  * Meaningful background images must be supplemented with a text equivalent on the page.

### 1.3.1 Info and Relationships

Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

**Development Considerations**

  * Avoid using inserted CSS content (pseudo elements ::before and ::after) to add meaningful content.

### 1.3.2 Meaningful Sequence

When the sequence in which content is presented affects its meaning, a [correct reading sequence][25] can be [programmatically determined][26].

**Development Considerations**

  * Avoid using position: absolute to place content on page. It may not be read by in the correct order by assistive technology.


<h2 id="synchronized_media">
  Synchronized Media
</h2>

### 1.2.2 Captions (Prerecorded)

Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.

**Content/Design Considerations**

  * Provide the text caption files for time-based media.
  * Review [WebAIM captions][27] for a description.

**Development Considerations**

  * Associate multimedia files to caption files; label as captioned version.

### 1.2.3 Audio Description or Media Alternative (Prerecorded)

An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.

\*\*Please see 1.2.5 (below) for Section 508 conformance guidance, which requires audio description.\*\*

### 1.2.4 Captions (Live)

Captions are provided for all live audio content in synchronized media.

**Content/Design Considerations**

  * Arrange for a caption provider to caption live events.

**Development Considerations**

  * Provide a method to display captions for the live event.

### 1.2.5 Audio Description (Prerecorded)

Audio description is provided for all prerecorded video content in synchronized media.

**Content/Design Considerations**

  * Provide audio description track for time-based media.
  * [Audio descriptions][28] are not necessary if all visual descriptions are provided with the sound track narration.

**Development Considerations**

  * Associate multimedia files with audio description track; label as audio described version.

### 1.4.2 Audio Control

If any audio on a web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.

Failure to meet this requirement could interfere with any use of the page. Refer to [Requirement 5 - Non-Interference][3] to learn more.

**Content/Design Considerations**

  * Do not play any audio content automatically.

**Development Considerations**

  * Ensure that mechanism to control the content is easy to locate, is keyboard operable, and is clearly labelled as to its purpose.

### 2.2.2 Pause, Stop, Hide

For moving, blinking, scrolling, or auto-updating information, ALL of the following are true:

  * Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and
  * Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

Failure to meet this requirement could interfere with any use of the page. Refer to [Requirement 5 - Non-Interference][3] to learn more.

**Content/Design Considerations**

  * Best Practice: Do not use content that automatically moves, blinks, or scrolls.
  * Auto-updates to content must be user configurable.

### Section 508 Requirements for Synchronized Media

  


#### 503.4 User Controls for Captions and Audio Description.

Where ICT displays video with synchronized audio, ICT shall provide user controls for closed captions and audio descriptions.

#### 503.4.1 Caption Controls.

Where user controls are provided for volume adjustment, ICT shall provide user controls for the selection of captions at the same menu level as the user controls for volume or program selection.

#### 503.4.2 Audio Description Controls.

Where user controls are provided for program selection, ICT shall provide user controls for the selection of audio descriptions at the same menu level as the user controls for volume or program selection.

**Content/Design Considerations**

  * In designs show the media player with caption control (CC) and audio description control (AD) buttons visible along-side the other user controls.

**Development Considerations**

  * Select a media player with caption controls and audio description controls that meet this requirement.


<h2 id="tables">
  Tables
</h2>

### 1.3.1 Info and Relationships

Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

**Content/Design Considerations**

  * Use simple tables instead of complex tables whenever possible

**Development Considerations**

  * If tables are used for layout purposes, add role="presentation" and do not use structural elements like <th> and table summaries.
  * [Table cell association to headers][29]
  * Note: <td scope> is not supported in HTML5. Use <th scope> instead. 
    {% highlight ruby %}{% raw %}
    <table>
      <caption>Bordered table</caption>
      <thead>
        <tr>
          <th scope="col">Document title</th>
          <th scope="col">Description</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Declaration of Independence</th>
          <td>Statement adopted by the Continental Congress declaring independence from the British Empire.</td>
          <td>1776</td>
        </tr>
        <tr>
          <th scope="row">Bill of Rights</th>
          <td>The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.</td>
          <td>1791</td>
        </tr>
        </tbody>
    </table>
    {% endraw %}{% endhighlight %}

<h2 id="timed_events">
  Timed Events
</h2>

### 2.2.1 Timing Adjustable

For each time limit that is set by the content, at least ONE of the following is true:

  * Turn off: The user is allowed to turn off the time limit before encountering it; or
  * Adjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or
  * Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or
  * Real-time Exception: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or
  * Essential Exception: The time limit is essential and extending it would invalidate the activity; or
  * 20 Hour Exception: The time limit is longer than 20 hours.

**Content/Design Considerations**

  * Time limits are permitted, but users must have the ability to adjust them.

### 2.2.2 Pause, Stop, Hide

For moving, blinking, scrolling, or auto-updating information, ALL of the following are true:

  * Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and
  * Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

Failure to meet this requirement could interfere with any use of the page. Refer to [Requirement 5 - Non-Interference][3] to learn more.

**Content/Design Considerations**

  * Best Practice: Do not use content that automatically moves, blinks, or scrolls.
  * Auto-updates to content must be user configurable.

### 1.4.2 Audio Control

If any audio on a web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.

Failure to meet this requirement could interfere with any use of the page. Refer to [Requirement 5 - Non-Interference][3] to learn more.

**Content/Design Considerations**

  * Best Practice: Do not play any audio content automatically.

**Development Considerations**

  * Best Practice: Ensure that mechanism to control the content is easy to locate, is keyboard operable, and is clearly labelled as to its purpose.


<h2 id="wcag_conformance_requirements">
  WCAG Conformance Requirements
</h2>

### Requirement 1: Alternate Pages

**Development Considerations**

To meet the requirements of a conforming alternate version, it must:

<ol type="1">
  <li>Conform to all Level A and AA criteria, and</li>
  <li>Provide all of the same information and <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#functiondef" target="_blank">functionality</a> in the same <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#human-langdef" target="_blank">human language</a>, and</li>
  <li>Be as up to date as the non-conforming content, and</li>
  <li>
    At least one of the following is true:
    <ol type="a">
      <li>
          The conforming version can be reached from the non-conforming page via an <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#accessibility-supporteddef" target="_blank">accessibility-supported</a> <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#mechanismdef" target="_blank">mechanism</a>, or
      </li>
      <li>
            The non-conforming version can only be reached from the conforming version, or
        </li>
      <li>
          The non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the conforming version.
      </li>
    </ol>
  </li>
</ol>

Note 1: In this definition, "can only be reached" means that there is some mechanism, such as a conditional redirect, that prevents a user from "reaching" (loading) the non-conforming page unless the user had just come from the conforming version.

Note 2: The alternate version does not need to be matched page for page with the original (e.g., the conforming alternate version may consist of multiple pages).

Note 3: If multiple language versions are available, then conforming alternate versions are required for each language offered.

Note 4: Alternate versions may be provided to accommodate different technology environments or user groups. Each version should be as conformant as possible. One version would need to be fully conformant in order to meet [conformance requirement 1][32].

Note 5: The conforming alternative version does not need to reside within the scope of conformance, or even on the same website, as long as it is as freely available as the non-conforming version.

Note 6: Alternate versions should not be confused with [supplemental content][33], which support the original page and enhance comprehension.

Note 7: Setting user preferences within the content to produce a conforming version is an acceptable mechanism for reaching another version as long as the method used to set the preferences is accessibility supported.

See [Understanding Conforming Alternate Versions][34].

### Requirement 2: Full pages

Conformance (and conformance level) is for full web page(s) only, and cannot be achieved if part of a web page is excluded.

Note 1: For the purpose of determining conformance, alternatives to part of a page's content are considered part of the page when the alternatives can be obtained directly from the page, e.g., a long description or an alternative presentation of a video.

Note 2: Authors of web pages that cannot conform due to content outside of the author's control may consider a Statement of Partial Conformance.

### Requirement 3: Complete processes

When a web page is one of a series of web pages presenting a process (i.e., a sequence of steps that need to be completed in order to accomplish an activity), all web pages in the process conform at the specified level or better. (Conformance is not possible at a particular level if any page in the process does not conform at that level or better.)

Example: An online store has a series of pages that are used to select and purchase products. All pages in the series from start to finish (checkout) conform in order for any page that is part of the process to conform.

### Requirement 4: Only Accessibility-Supported Ways of Using Technologies

Only accessibility-supported ways of using technologies are relied upon to satisfy the success criteria. Any information or functionality that is provided in a way that is not accessibility supported is also available in a way that is accessibility supported. (See Understanding accessibility support.)

<h3 id="non-interference">
  Requirement 5: Non-Interference
</h3>

If technologies are used in a way that is not accessibility supported, or if they are used in a non-conforming way, then they do not block the ability of users to access the rest of the page. In addition, the web page as a whole continues to meet the conformance requirements under each of the following conditions:

  1. When any technology that is not relied upon is turned on in a user agent,
  2. When any technology that is not relied upon is turned off in a user agent, and
  3. When any technology that is not relied upon is not supported by a user agent

In addition, the following success criteria apply to all content on the page, including content that is not otherwise relied upon to meet conformance, because failure to meet them could interfere with any use of the page:

<ul style="list-style-type:none;">
  <li>
    1.4.2 - Audio Control
  </li>
  <li>
    2.1.2 - No Keyboard Trap
  </li>
  <li>
    2.3.1 - Three Flashes or Below Threshold
  </li>
  <li>
    2.2.2 - Pause, Stop, Hide
  </li>
</ul>


<h2 id="other_resources">
  Other Resources
</h2>

  * [Understanding Conformance][35] - W3C
  * [US Web Design System][36] - User Interface (UI) Components
  * [WebAIM][37]
  * [ARIA is Spackle, Not Rebar][38]
  * [Accessible Name and Description Inspector (ANDI) Developer Tips][39]

Created by the CIO Council’s [Accessibility Community of Practice][40], this information is presented in categories that align to the Baseline Tests for Revised 508 Standards, which cover all WCAG 2.0 Level A and AA requirements, and will be the basis of the updated [Trusted Tester][41] Test Process.

**Reviewed/Updated**: January 2023


 [1]: https://www.w3.org/TR/WCAG20/
 [2]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines
 [3]: #non-interference
 [4]: https://webaim.org/resources/contrastchecker/
 [5]: https://www.w3.org/TR/WCAG20-TECHS/ARIA17.html
 [6]: https://www.w3.org/TR/WCAG20-TECHS/H44.html
 [7]: https://www.w3.org/TR/WCAG20-TECHS/H71.html
 [8]: https://www.w3.org/TR/WCAG20-TECHS/H85.html
 [9]: https://www.ssa.gov/accessibility/andi/help/developerguide.html#aria-labelledby
 [10]: https://www.ssa.gov/accessibility/andi/help/developerguide.html#aria-label
 [11]: https://www.ssa.gov/accessibility/andi/help/developerguide.html#aria-describedby
 [12]: https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR19
 [13]: https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160628/H64
 [14]: https://www.w3.org/TR/html-aam-1.0/#iframe-element
 [15]: https://webaim.org/techniques/semanticstructure/#contentstructure
 [16]: https://webaim.org/techniques/alttext/
 [17]: https://www.w3.org/WAI/tutorials/images/decision-tree/
 [18]: https://www.w3.org/TR/html-aam-1.0/#img-element
 [19]: https://www.ssa.gov/accessibility/andi/help/developerguide.html#alt
 [20]: https://www.ssa.gov/accessibility/andi/help/developerguide.html#title
 [21]: https://www.ssa.gov/accessibility/andi/help/developerguide.html#Add-OnProperties
 [22]: https://www.w3.org/TR/using-aria/
 [23]: http://accessibility.athena-ict.com/aria/examples/tooltip.shtml
 [24]: https://gist.github.com/JamieMason/3748498
 [25]: https://www.w3.org/TR/2008/REC-WCAG20-20081211/#correct-reading-sequencedef
 [26]: https://www.w3.org/TR/2008/REC-WCAG20-20081211/#programmaticallydetermineddef
 [27]: https://webaim.org/techniques/captions/#captions
 [28]: https://webaim.org/techniques/captions/#ad
 [29]: https://www.ssa.gov/accessibility/andi/help/developerguide.html#dataTableCellAssociations
 [30]: https://www.w3.org/TR/2008/REC-WCAG20-20081211/#functiondef
 [31]: https://www.w3.org/TR/2008/REC-WCAG20-20081211/#human-langdef
 [32]: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#cc1
 [33]: https://www.w3.org/TR/2008/REC-WCAG20-20081211/#suppcontentdef
 [34]: http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conforming-alt-versions-head
 [35]: https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html
 [36]: https://designsystem.digital.gov/components/
 [37]: https://webaim.org/
 [38]: https://css-tricks.com/aria-spackle-not-rebar/
 [39]: https://www.ssa.gov/accessibility/andi/help/developerguide.html
 [40]: https://www.cio.gov/about/members-and-leadership/accessibility-cop/
 [41]: https://www.dhs.gov/trusted-tester