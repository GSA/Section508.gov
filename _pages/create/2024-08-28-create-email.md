---
layout: page
sidenav: true
permalink: create/email-messages/
type: create
title: 'Creating Accessible Email Messages'
contributors: frith-chet, va
created: 2024-08-28
updated: 
topic: "Content creation (create)"
sub-topic: "Email"
audience:
- "Federal employee (fedemp)"
- "Public (public)"
- "Content Creators (creator)"
- "Developers and Testers (dev-test)"
resource-type: "Process/How-to"
format: "HTML (html)"
---
Email is a vital communication tool for federal employees to transmit [agency official communication]({{site.baseurl}}/content/glossary/#agency-official-communications). To ensure that all federal employees have access to the information contained within, and attached, to an email message, we must ensure that emails are conformant with Section 508 Standards. Below are easy steps we can take to create accessible email messages so that all individuals, including those with disabilities, can easily read, understand, and interact with the content.

It’s important to note that modern email clients increasingly offer users the ability to format messages using styles and tools similar to those found in document authoring tools. For example, Microsoft Outlook offers an HTML format similar to Word. 
Where email messages use plain text format and do not allow for images or other design features, some of the tips outlined in this guidance may not apply in all circumstances. 

## Step 1: Write your email
The body of email messages should clearly and concisely state the purpose of the message. Use <a href="https://www.plainlanguage.gov/" target="_blank" class="usa-link--external">plain language</a> appropriate for the intended audience.

### Know Your Audience
One of the most popular plain language myths is that you have to “dumb down” your content so that everyone everywhere can read it. That’s not true. The first rule of plain language is to write for your audience. Use language your audience knows and feels comfortable with. Take your audience’s current level of knowledge into account. Don’t write for an 8th-grade class if your audience is composed of doctoral candidates, small business owners, working parents, or immigrants. Only write for 8th graders if your audience is, in fact, an 8th grade class.

However, because you may be communicating with agency staff members or members of the public, do not assume they know what you are talking about or are familiar with jargon you may use daily. 

### Writing Styles
Plain language improves accessibility, and works with whatever style you follow. Below is a summary of the [Digital.gov Style Guide](https://digital.gov/style-guide/) and [18F Style Guide](https://guides.18f.gov/content-guide/our-style/) used at General Services Administration (GSA), which are similar to many of the [federal government style guides](https://www.plainlanguage.gov/resources/guides/) and other writing guidelines available on [plainlanguage.gov](http://www.plainlanguage.gov). These guidelines show employees how to write electronic content such as email messages, documents, and web pages.

* [Abbreviations and acronyms](https://guides.18f.gov/content-guide/our-style/abbreviations-and-acronyms/) - Acronyms often confuse readers. Avoid them whenever possible. If an acronym is necessary for future reference, spell the full word and follow with the acronym in parentheses on the first reference. For example, The General Services Administration (GSA).
* [Active voice](https://guides.18f.gov/content-guide/our-style/active-voice/) - Our writing should be concise and direct. We prefer the active voice because it supports brevity and makes written content more engaging, too.
* [Capitalization](https://guides.18f.gov/content-guide/our-style/capitalization/) - Follow a consistent capitalization scheme. Inconsistent spellings and capitalizations undermine your narrative authority.
* [Inclusive language](https://guides.18f.gov/content-guide/our-style/inclusive-language/) - The words we use can make the difference between forging positive connections or creating distance in our personal and professional lives.
* [Names](https://guides.18f.gov/content-guide/our-style/names/) - Use full names on first reference. On second reference, use first names when writing about our teams or our work, and otherwise follow AP style (which is to mostly use last names on second reference).
* [Numbers, percentages, and dates](https://guides.18f.gov/content-guide/our-style/numbers-and-percentages/) - In body copy, we prefer to spell out numbers one through nine, and use numerals for numbers 10 and greater.
* [Punctuation](https://guides.18f.gov/content-guide/our-style/punctuation/) - Capitalize the first word of every bullet. Don't use semicolons after points in a bulleted list. Include a period at the end of the bullet only if that point is a complete sentence.
* [Specific words and phrases](https://guides.18f.gov/content-guide/our-style/specific-words-and-phrases/) - As with other style rules, we use rules for how we use the accepted forms of common words and phrases for capitalization, hyphenation, punctuation.
* [Technical writing](https://guides.18f.gov/content-guide/our-style/technical-and-interface-writing/) - In most of these cases, it's safe to say the reader is learning something new or troubleshooting, and need you to write clear, concise instructions for the best possible experience.
* [Trademarks and brands](https://guides.18f.gov/content-guide/our-style/trademarks-and-brands/) - Avoid using a trademark unless you're referring to a specific product.
* [URLs and filenames](https://guides.18f.gov/content-guide/our-style/urls-and-filenames/) - It's important to remember that users of screen readers will often [skip from one link to another](https://webaim.org/techniques/hypertext/#link_to_link), skipping the text in between, as a way of skimming for the content they need. For filenames, use hyphens to separate words, just as with URLs. Lowercase filenames are better, because it's easier to type and to remember.
* [Voice and tone](https://guides.18f.gov/content-guide/our-style/voice-and-tone/) - Our voice is our unique personality. It can be helpful to think of a voice as analogous to a person's voice. Tone is more like attitude --- the emotional context of a piece. It can be helpful to think of authorial tone as analogous to a person's tone of voice.

### Things to Avoid
* Generic or non-descriptive message subject that is not searchable 
* Passive voice
* Abbreviations and acronyms (unless full word is followed with the acronym in parentheses on the first reference)
* Technical jargon and unfamiliar terms
* Run-on sentences, long paragraphs, and meaningless filler phrases
* Avoid references to shape, size, sound, color, or location
* Abbreviating the month or using numbers as in "10/22/2005." For formal writing, use the full, four-digit year such as "October 22, 2005," 
* Images in the signature block (other than required by policy).
* Email stationery (Microsoft Outlook) or layouts (Google Gmail)

### Style Guides
- Many federal agencies follow the AP style, with some notable exceptions:
  -   Use Oxford or serial comma.
  -   Only capitalize "federal" when used as part of a proper name or when used with "government."
  -   When writing time, a.m. and p.m. are always punctuated and lowercase.
  -   There is no "&" in "OIT."
-   Don't use ampersands "&" unless they are part of a corporate name e.g., AT&T. Most agency initialisms should not use an ampersand -- there is no "&" in "OIT" when denoting the Office of Information and Technology.

## Step 2: Use the Accessibility Checker
Microsoft Office authoring tools, including Outlook, have a built-in accessibility checker under the “Review” tab in the navigation ribbon.  Enable this tool  at the outset of creating your email and frequently check for and resolve errors.

The Accessibility Checker tool helps create accessible emails by identifying potential issues for people with disabilities in reading content or using the document. Regardless of the recipient, all failures must be remediated before sending the email. If you generate a great deal of email, you may want to add the “Check Accessibility” button to [main authoring ribbon](https://support.office.com/en-us/article/customize-the-ribbon-in-office-00f24ca7-6021-48d3-9514-a31a460ecb31) or [quick tools](https://support.office.com/en-us/article/customize-the-quick-access-toolbar-43fff1c9-ebc4-4963-bdbd-c2b6b0739e52) section.

<div class="tablet:grid-col" style="margin: auto; max-width: 100%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="https://www.oit.va.gov/accessibility/_media/img/outlook-accessibility.jpg" alt="" aria-describedby="figure-1" class="border-2px border-base-light shadow-2 padding-1">
    </div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-1"><strong>Figure 1.</strong> Outlook message interface.</span>
    </div>
</div>

1.  Go to the Review tab (keyboard *Alt+v*).
2.  Click on the Check Accessibility button (keyboard *a* or *Alt+a*).

The online version of Outlook also allows you to check accessibility.

<div class="tablet:grid-col" style="margin: auto; max-width: 100%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="https://www.oit.va.gov/accessibility/_media/img/outlook-online-accessibility.jpg" alt="" aria-describedby="figure-2" class="border-2px border-base-light shadow-2 padding-1">
    </div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-2"><strong>Figure 2.</strong> screenshot of Outlook online.</span>
    </div>
</div>

1.  In the main toolbar, click more actions (visually represented with three dots)
2.  At the bottom of the options, click *Check for accessibility issues*.

## Step 3: Ensure text and images provide sufficient contrast
An important aspect of color for both low vision and colorblind users is sufficient contrast between the foreground text and the background.

Federal government electronic content must meet Section 508 Standards, which incorporates <a href="https://www.w3.org/WAI/intro/wcag" target="_blank" class="usa-link--external">Web Content Accessibility Guidelines (WCAG)</a> version 2.0 A and AA criteria. All government emails, documents, and websites will meet a minimum AA rating, and should meet AAA wherever possible.

By default, email messages use a style of black text on a white background. Unless you have the ability to test for contrast, these settings should be unaltered. If you are able to determine or [test for color contrast]({{site.baseurl}}/training/web-software/andi-training-videos/color-contrast-analyzer/), make sure that the contrast ratio is 4.5:1 or greater. 

Never use color as the only method of meaning or emphasis. If your audience has certain color blindness, they may not be able to see the color you chose. Make sure to also bold text, or use text or symbols in addition to color in images and tables to make sure your information and meaning is clear to all.

### Additional Tools
* [North Carolina State Color Contrast Tool](https://accessibility.oit.ncsu.edu/tools/color-contrast/accessible-color-palette.php?&colors=205493,323a45,212121,aeb0b5,112e51,02bfe7,4c2c92,fdb81e,981b1e,2e8540,fdb71c,aeb0b5,0a1827,e65722,323a45,ffffff&main=aeb0b5&level=AA) (preloaded with legacy OIT colors)
* [WebAIM Color Contrast Tool](http://webaim.org/resources/contrastchecker/)
* [Accessible Palette Builder](https://toolness.github.io/accessible-color-matrix/)
* [Contrast Grid](http://contrast-grid.eightshapes.com/?background-colors=&foreground-colors=%23FFFFFF%2C%20White%0D%0A%23F2F2F2%0D%0A%23DDDDDD%0D%0A%23CCCCCC%0D%0A%23888888%0D%0A%23404040%2C%20Charcoal%0D%0A%23000000%2C%20Black%0D%0A%232F78C5%2C%20Effective%20on%20Extremes%0D%0A%230F60B6%2C%20Effective%20on%20Lights%0D%0A%23398EEA%2C%20Ineffective%0D%0A&es-color-form__tile-size=compact)

## Step 4: Add alt text to images
Images are a wonderful way to draw attention, build on a story, or provide visual reinforcement to a concept you are trying to explain. However, if your audience has a vision impairment that prevents them from seeing the image clearly, or at all, you need to provide a text description of that image.

Alternative text, also known as alt text, is descriptive text that conveys the meaning of an image in digital content. When a person uses assistive technology such as a screen reader, the screen reader will read the onscreen text aloud.

### Alt Text
To minimize the frustration and to increase understanding, images that are intended to convey meaning must have a textual equivalent. Fortunately, documents created in email can take advantage of an alternative text attribute — commonly referred to as alt text. Alt text is intended to provide the textual equivalent of the image which then allows screen readers to convey the meaning to the user.

#### General Guidance for Alt Text
* All images must have alt text or be marked as decorative.
* Images intended to convey meaning must have a textual equivalent available.
* Avoid text on images and do not use images that are just text.
* Alt text should consider the context in which the photo is being used and be as meaningful as possible.
* Describe the image, such as, “Group of people at an airport.”
* Keep the alt text clear, meaningful and concise (due to screen reader behavior and general usability, the text should be limited to less than 250 characters). If longer text is required to convey the message, use captions or the surrounding text, and then in the alt attribute use very basic text.
* End alt text with a period. This signals the screen reader to pause before proceeding.
* If the image is just decorative and conveys no real meaning, use the “Mark as decorative” checkbox (Microsoft Office). Minimize the use of decorative images – they can be a distraction and they increase the file size.
* If the image is a hyperlink without any text, it must have alt text. If the link includes the image and text, then the empty alt can be used to avoid redundancy.
* Do not use “a picture of,” “an image of,” “a photo of,” “the so-and-so icon.”
* For Microsoft Word, place any alt text in the Description field, not the Title field of the Format Picture dialog.
* Manually check that all alt text is entered correctly, Microsoft auto-generates alt text for images, but it should not be used unless it has been verified to be correct.

### Other Resources
* [Authoring Meaningful Alternative Text]({{site.baseurl}}//create/alternative-text/)
* [World Wide Web Consortium (W3C) Alt Techniques](https://w3c.github.io/alt-techniques/)
* [WebAIM Alternative Text](http://webaim.org/techniques/alttext/)

## Step 5: Provide Descriptive Links and Hypertext
Hyperlinks should tell people what action to take, where to go next, or what information to expect when they select the link. 

* Avoid generic terms and phrases such as “Click here,” “Learn more,” “Read more.”
* Create link text that’s as specific as possible. For example, use “Download the FY24 annual report” instead of using “Click here.”
* Create hyperlink using the most relevant word or phrase. 
* The link text should make sense out of context. Users navigating via screen readers often jump from link to link.
* Avoid using URLs as link text as they can be confusing and difficult to read, especially for screen readers.
* Make sure the voice and tone of your link text match those of the rest of the content to create a more consistent experience. 
* Include information about what a link leads to; this is especially important for mobile device users. For example, if you’re linking to a PDF, use “Download the FY24 annual report (PDF)” instead of “Download the FY24 annual report.”

### Link and Hypertext Resources
* [Accessibility Bytes No. 4: Descriptive Links and Hypertext]({{site.baseurl}}/blog/accessibility-bytes/descriptive-links-and-hypertext/)
* [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#text-equiv-all)
* [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=14%2C128&currentsidebar=%23col_overview#navigation-mechanisms-refs)

## Step 6: Use Proper Text Formatting and Styles
When creating emails, use approved agency fonts, do not use background images or stationery, and use heading levels to break up sections of text.

Neither WCAG or Section 508 specifies typefaces nor even a minimum font size for email messages. However, government email needs to have clear and consistent headings and highly legible text. 

In general, using built-in features, we recommend:

* Standard sans-serif fonts such as Public Sans, Segoe UI, Roboto, Verdana, Arial, Tahoma, or Helvetica. 
* Text that is at least 10 to 11pt (13 to 15px) 
* Black text on a white background to ensure the appropriate color contrast.
* Bulleted or numbered lists are created using the built-in list tools.
* Paragraph text must be left justified. Full justification should be avoided.
* Where Heading styles are used, apply the proper Heading level for the content structure (e.g., Heading 1, Heading 2, Heading 3), and not how the heading looks.

### Additional Text Resources
* [Understanding Accessible Fonts and Typography for Section 508 Compliance]({{site.baseurl}}/develop/fonts-typography/)
* [Font | U.S. Web Design System](https://designsystem.digital.gov/design-tokens/typesetting/font/)

## Step 7: Accessible Tables in Email
Tables can be very difficult for screen readers to understand unless there is a clear relationship between header and data cells. Not all email software offers built-in tools to create tables.

Where available, use built-in “Table” tool to insert simple data tables with one row of column headers and no nested rows, columns, or merged cells, and indicate header and row columns. Avoid blank rows, columns, or cells, or using tables for layout or formatting purposes, such as formatting a numbered list.

## Step 8: Simplify Your Signature Block
A signature block that does not contain images or hyperlinks are more accessible than those with images and hyperlinks.

Federal agencies typically have a policy regarding staff email signature blocks. Locate and follow this policy. If your agency does not have such a policy, your email should include your name, the name of your agency, your government telephone number, and government email address, and be used for all new and response messages.

If you place an image in your signature block (such as the <a href="https://www.oit.va.gov/design-guide/resources/logos/" target="_blank" class="usa-link--external">OIT signature logo</a>), use alt text to convey the meaning of the image (alt="Department of Veterans Affairs Office of Information and Technology").

Images with hyperlinks are acceptable as long as the alt text associate with the image describes the meaning or intent of the image so that the reader knows what to expect if the link is activated (e.g., Facebook logo linked to the VA's Facebook page: alt="Visit the VA Facebook page").

### Things to Avoid Placing in Your Signature Block
Government emails signatures blocks should refrain from using:
* Cursive or fancy typefaces and fonts.
* Slogans and personal or extraneous messages.

## Step 9: Verify email attachments are accessible
Documents attached to email messages that are public facing or [agency official communication]({{site.baseurl}}/content/glossary/#agency-official-communications) must conform with applicable electronic document standards.

Attachments should use a unique and descriptive file name.

Images attachments or include in the body of the email the information contained in the attachment.

For instance, when a memo needs to be distributed, the current method is to attach the memo to the email with a note making reference to the attachment. (e.g., open attached memo). The majority of Memos are sent out as scanned (.tif or .pdf) image files. Screen readers cannot read scanned image files.

To ensure accessibility with attachments, use one of the methods described below:

1.  Ensure that the attachment is accessible prior to distribution.  
2.  Include a link in the email to an accessible format (e.g., HTML) of the document - referred to as a conforming alternate version.
3.  Scanned documents processed through an OCR program (if the user has OCR software) can be made accessible using Adobe® Acrobat DC® and similar software to add necessary structure and style including headings, text, tables, alt tags for graphics and graphics, and signatures. As these types of files are accessible, it is not necessary to include a conforming alternate version.

Where an accessible attachment is not technically possible, 

1.  Attach a non-conformant document (e.g., scanned .tif or .pdf file) and insert the text of the memo in the body of the email message to match the .tif or .pdf file. Include a description of the attachment at the bottom of the email (e.g.: Attachment --- Veterans Day Scanned Memo).
2.  In addition to a scanned document, provide an additional attachment which is Section 508 conformant. Include a description of the attachments at the bottom of the email (e.g.: Attachment 1 -- Accessible Veterans Day Memo, Attachment 2 --- Scanned Veterans Day Memo).

### Things to Avoid When Attaching Files to Email
Urgency and lack of planning are not sufficient reasons for sending or distributing inaccessible attachments.

* Not drafting and creating electronic content with accessibility in mind. 

### Additional Resources 
* <a href="https://www.plainlanguage.gov/guidelines/words/minimize-abbreviations/" target="_blank" class="usa-link--external">Minimize Abbreviations | plainlanguage.gov</a>  
* <a href="https://www.plainlanguage.gov/resources/articles/keep-it-jargon-free/" target="_blank" class="usa-link--external">Keep It Jargon-free | plainlanguage.gov</a>
* [Checklist for Accessible Email]({{site.baseurl}}/test/checklist/email-messages/)

**Reviewed/Updated:** September 2024