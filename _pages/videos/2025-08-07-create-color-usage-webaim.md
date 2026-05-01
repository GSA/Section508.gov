---
layout: page
sidenav: true
type: training
title: 'How to Use the WebAIM Contrast Checker'
permalink: training/create/making-color-usage-accessible/webaim-contrast-checker/
description: Learn how to use WebAIM’s Contrast Checker to test color contrast in documents. This video from Making Color Usage Accessible explains how to ensure readable text when automated tools like ANDI can't detect contrast issues.
disclaimer: true
audience:
topic: "Training"
sub-topic: 
resource-type: "Training"
format: "Video"
created: 2025-08-07
updated: 2026-03-03 
exclude-changelog: true
---
In this video from [Making Color Usage Accessible]({{site.baseurl}}/create/making-color-usage-accessible/), you’ll learn how to use <a href="https://webaim.org/resources/contrastchecker/" target="_blank" class="usa-link--external">WebAIM’s Contrast Checker</a> to evaluate the contrast between text—or images of text—and background colors in documents. This tool is especially helpful when contrast issues can’t be <a href="{{site.baseurl}}/tools/glossary/#programmatically-determinable" >programmatically determined</a> by tools like <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/">ANDI</a> or when those tools aren’t available.

<video controls="controls" poster="{{site.baseurl}}/assets/images/thumbnails/training-video-webaim-poster.jpg" data-vscid="3qesx4ovd" style="width:100%"><source src="{{site.baseurl}}/assets/videos/training-video-color-usage-webaim-oc.mp4" type="video/mp4" /></video>

<div class="usa-accordion usa-accordion--bordered">
  <h2 class="usa-accordion__heading">
    <button id="transcript" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a1">Transcript</button>
  </h2>
  <div id="a1" class="usa-accordion__content">
    <p>Voice Over (VO): Hello and welcome to the video tutorial on how to use the WebAIM color contrast checker.</p>
    <p>VO: The first thing you want to do is go to the color contrast checker on `webaim.org`. The link to it is immediately after this video.</p>
    <p>VO: You can use this checker any time you need to check your document or your web resource for color contrast.</p>
    <p>VO: For this tutorial, I'm going to use this sample PowerPoint slide on the dos and don'ts of Section 508 color contrast.</p>
    <p>VO: This slide has sections with dark blue text on a white background, dark red text on a light red background, and dark green text on a light green background.</p>
    <p>VO: To use the contrast checker, I need to get the exact hex codes of all of the colors I use on this slide.</p>
    <p>VO: For this, I'm going to start with my title. I know I have a white background.</p>
    <p>VO: To get the color of this title text, I'm going to act like I'm going to change the color and highlight the text, go to More Colors, and copy the hex code that it provides.</p>
    <p>VO: I'm just going to take the whole hex field and copy that text and close that little pop-up window.</p>
    <p>VO: Then I'm going to go back to the WebAIM contrast checker and paste that hex code into the foreground field because foreground refers to the main color of our content, and the background color is already set to white, which matches the background color of my content.</p>
    <p>VO: Now WebAIM shows that the contrast ratio for this color combination is `8.36 to 1`, which passes the requirements for normal text, large text, graphical objects, and user interface components.</p>
    <p>VO: It tells me that I pass all of those requirements.</p>
    <p>VO: The color that I use for my title text, and for the extra link at the end where it says learn more at `section508.gov`, and the icon that goes with that, all of those have high enough color contrast to meet the standard.</p>
    <p>VO: You do need to do this for all text and all backgrounds of your content.</p>
    <p>VO: Luckily, I've already copied down all of the hex codes I used in this presentation.</p>
    <p>VO: So I'm going to start checking the contrast of my dark green text on a light green background by copying the hex code for my dark green text, going to WebAIM, and pasting that into the foreground because that's the text color.</p>
    <p>VO: Then I go back to my presentation, get that light green background color that I used, copy that hex code, and go back to WebAIM and paste that hex value in the background field.</p>
    <p>VO: When I enter both of those, it tells us that the contrast ratio is `5.27`, which passes all of the standards for WCAG AA for normal text, large text, and graphics.</p>
    <p>VO: There's one standard that doesn't meet for AAA, but that's fine because for Section 508, we need to meet the AA standard.</p>
    <p>VO: So everything I have that's dark green on a light green background is a high enough contrast ratio to meet the standard.</p>
    <p>VO: Now let's say you didn't have all of these hex codes and you just needed to capture them. Luckily, there is a way to use the color picker to find the colors you need.</p>
    <p>VO: So I'm going to open my presentation. Let's say I didn't know what these shades of red are that I use for this dark red text on the light red background.</p>
    <p>VO: I'm going to open the WebAIM color contrast checker and, in the foreground field, select the button with the dropper icon.</p>
    <p>VO: With the dropper icon, I can put it anywhere on my screen and highlight whatever color I need to select.</p>
    <p>VO: So I'm going to select this dark red that I used for my red text, and I'm going to do the same thing for the background.</p>
    <p>VO: On WebAIM, in the background section, I'm going to go to the color picker, pick the eyedropper icon, hover it over my presentation for the background color, and select it.</p>
    <p>VO: This gives me a contrast ratio of `3.75`.</p>
    <p>VO: If you ever forget what those numbers mean, it automatically tells you which standards you pass and which ones you fail.</p>
    <p>VO: So normal text is not high-contrast enough. It fails to meet that standard.</p>
    <p>VO: It's good for large text and graphical objects, so I can keep the same red shade for my X icon and my header for that section, but for the main text, I need a darker color.</p>
    <p>VO: WebAIM can actually help with this. They have sliders for the foreground and background to make your colors lighter or darker.</p>
    <p>VO: I can drag the slider for the lightness of the foreground and slide it darker until all of the standards I need switch from failing to passing.</p>
    <p>VO: Now my contrast ratio is `4.95`. It passes all of the AA standards, which is what we need for Section 508.</p>
    <p>VO: It gives us the hex code for the darker shade of red it generated, which I can use to update the text color in my document.</p>
    <p>VO: I can copy the hex code, open my PowerPoint, highlight all of the text I want to change, go to color settings, select More Colors, and paste in the hex code that I just got.</p>
    <p>VO: Then I press the OK button.</p>
    <p>VO: Now it doesn't look visually that different, but it's just enough of a stronger color contrast that it meets the requirement.</p>
    <p>VO: So now all of the content I have on my slide, the blue title on the white background, the dark green text on the light green background, and the dark red text on the light red background, all of it meets the standard.</p>
    <p>VO: All of it has the color contrast ratios that I need for all of that content.</p>
    <p>VO: And that's how you use the WebAIM contrast checker.</p>
  </div>
</div>

## Related Color Contrast Training Videos
* [Accessible Name & Description Inspector (ANDI) Color Contrast]({{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/)
* [How to Use the Color Contrast Analyzer (CCA)]({{site.baseurl}}/training/making-color-usage-accessible/color-contrast-analyzer/)
* [How to Test Color Contrast using the Color Contrast Analyser (CCA)]({{site.baseurl}}/training/web-software/andi-training-videos/color-contrast-analyzer/)

## Additional Resources
* <a href="https://www.tpgi.com/color-contrast-checker/" target="_blank" class="usa-link--external">Colour Contrast Alayser (CCA)</a>
* <a href="https://webaim.org/resources/contrastchecker/" target="_blank" class="usa-link--external">WebAIM Contrast Checker</a>
