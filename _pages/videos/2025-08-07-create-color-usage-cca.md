---
layout: page
sidenav: true
type: training
title: 'How to Use the Color Contrast Analyzer (CCA)'
permalink: training/create/making-color-usage-accessible/color-contrast-analyzer/
description: Learn how to use the Colour Contrast Analyser (CCA) to check color contrast in digital content using HEX codes. This Making Color Usage Accessible video is ideal when tools like ANDI can't detect contrast issues.
disclaimer: true
audience:
topic: "Training (train)"
sub-topic: 
resource-type: "Training"
format: "Video & Synchronized Media (video)"
created: 2025-08-07
updated: 2026-03-03
exclude-changelog: true
---
In this video from [Making Color Usage Accessible]({{site.baseurl}}/create/making-color-usage-accessible/), we’ll show you how to use the <a href="https://developer.paciellogroup.com/resources/contrastanalyser/" target="_blank" class="usa-link--external">Colour Contrast Analyser (CCA)</a> and the programmatic color values&mdash;or HEX codes&mdash;to check contrast between text, images of text, and background colors in digital content and documents. This tool is especially helpful when contrast issues can’t be <a href="{{site.baseurl}}/tools/glossary/#programmatically-determinable" >programmatically determined</a> by tools like <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/">ANDI</a> or when those tools aren’t available.

<video controls="controls" poster="{{site.baseurl}}/assets/images/thumbnails/training-video-cca-poster.jpg" data-vscid="3qesx4ovd" style="width:100%"><source src="{{site.baseurl}}/assets/videos/training-video-color-usage-cca-oc.mp4" type="video/mp4" /></video>

<div class="usa-accordion usa-accordion--bordered">
  <h2 class="usa-accordion__heading">
    <button id="transcript" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a1">Transcript</button>
  </h2>
  <div id="a1" class="usa-accordion__content">
    <p>Voice Over (VO): Hello and welcome to the video tutorial, How to Use the Color Contrast Analyzer.</p>
    <p>VO: The first step for using the Color Contrast Analyzer, or CCA, is to go to the link immediately after this video to download the software, either for Windows or Mac.</p>
    <p>VO: If you need help downloading the CCA, or if you're not sure if you're allowed to download it onto your device, contact your agency's IT professionals.</p>
    <p>VO: Once you have downloaded the CCA, you can use it any time you need to check your work for color contrast.</p>
    <p>VO: For this tutorial, I'm working on a PowerPoint slide on color usage in Section 508, and I'm going to use the CCA to make sure the colors that I'm using are conformant.</p>
    <p>VO: When you open the CCA, you will notice that it has several sections: a space to enter a foreground color, or the main color of your content; a space to enter a background color, or the color behind your content; a sample preview that shows you how your text will look with those colors chosen; and a results section that shows you your color contrast ratio and which criteria it passes.</p>
    <p>VO: These criteria are from WCAG, which is the Web Content Accessibility Guidelines. This is the same criteria used for Section 508 standards, so these results are very important in determining if our color contrast meets the Section 508 requirements.</p>
    <p>VO: To check the colors in my sample document, I'm going to start with the slide title, which is dark blue text on a white background.</p>
    <p>VO: But to use the CCA, I need the exact hex code of the colors I'm using. So I know the background is `FFF FFF`, which is just plain white.</p>
    <p>VO: To get the color of my text, I'm going to act like I'm editing the text by highlighting it and then selecting More Colors.</p>
    <p>VO: From here, I can go to Custom Colors, and in the hex field, I have the exact six-digit identification of the color I'm using for my text.</p>
    <p>VO: So I copy that, close the little pop-up for picking the colors, then in the Color Contrast Analyzer I paste that hex code that I copied into the foreground color, because in this case foreground refers to my text color.</p>
    <p>VO: Now that the foreground and background fields are set to the exact shades of dark blue and white that my document uses, the results section says that my color contrast ratio is `8.4 to 1` and that it passes all of the WCAG color contrast thresholds.</p>
    <p>VO: That means I can use these colors for all of my regular text, all of my large text, and all of my graphics and user interface elements.</p>
    <p>VO: This is not the only color combination in my presentation, so I will need to do these steps for all of the color combinations that I use on this slide.</p>
    <p>VO: Before making this video, I made a list of all of the colors I used on this slide.</p>
    <p>VO: There are parts of it that are dark green text on a light green background and other parts that are dark red text on a light red background.</p>
    <p>VO: I made a list of the hex codes for all of those colors, so I'm going to start by copying the hex code for my dark green text and then pasting it into the foreground field in the Color Contrast Analyzer.</p>
    <p>VO: Then I take the light green hex code that I used for my background for the green text and paste that into the Color Contrast Analyzer in the background field.</p>
    <p>VO: Now my sample field shows dark green text on a light green background, and the results show that my color contrast ratio is `5.3 to 1`.</p>
    <p>VO: It is a pass for all of the AA standards, and it fails at one AAA standard, which is fine for us because the Section 508 requirements only require AA, not AAA.</p>
    <p>VO: So any part of my slide that uses this dark green and light green color combination meets the standard.</p>
    <p>VO: For our first two checks, we used the exact hex codes and entered them into the fields. But what if you don't have access to the exact colors that your work uses and you need to check the color contrast?</p>
    <p>VO: Luckily, the CCA has a color picker tool.</p>
    <p>VO: Let's use the color picker to check our dark red text that's on a light red background.</p>
    <p>VO: To do this, we're going to open the CCA, but keep the PowerPoint slide visible so that we are able to use the color picker on this slide.</p>
    <p>VO: In CCA, the color picker is the button with the eyedrop icon, so I'm going to select that button for the foreground color and then use that to select the foreground color of my dark red text.</p>
    <p>VO: When I do that, the foreground color listed in the CCA updates to match the shade of red that I used on my slide.</p>
    <p>VO: We'll do the same thing to identify our background color. We'll select the color picker eyedrop button, hover it over the section of color that we need, which is the light red in the background of my slide, and then the hex code listed in the CCA for the background field updates to match the color I selected.</p>
    <p>VO: According to the results section for this color combination, my color contrast ratio is `3.8 to 1`, which is a pass for large text and graphical objects, but it's a fail for regular text.</p>
    <p>VO: So I'm going to need to change my regular text to something darker to contrast better against the light red background.</p>
    <p>VO: How do I fix this? I can actually adjust these colors in CCA.</p>
    <p>VO: I can go to the foreground field, drag the red slider to make it darker, and then in the results field, the results that said fail switch to pass.</p>
    <p>VO: Now the new color combination I made by dragging the slider gives me a passing result for large text, graphical objects, and regular text with a ratio of `4.8 to 1`.</p>
    <p>VO: It even gives me the new hex code for this darker red in the foreground field, so I can copy this new hex code and then use it to update the color in my document by editing the text, changing the color, selecting a custom color, and pasting that hex code that I got from CCA.</p>
    <p>VO: Visually, this shade of red isn't much different from the previous shade we used, but it is higher contrast, which means it's more usable and more accessible for our slide.</p>
    <p>VO: One last thing you can do in CCA is, in the results section, open the dropdown for the results to get more detailed descriptions of what counts as regular text, what counts as large text, and what counts as graphical objects.</p>
    <p>VO: That way, you can make sure that all of your content meets all of the required thresholds for the Section 508 standards.</p>
  </div>
</div>

## Related Color Contrast Training Videos
* [Accessible Name & Description Inspector (ANDI) Color Contrast]({{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/)
* [How to Use the WebAIM Contrast Checker]({{site.baseurl}}/training/making-color-usage-accessible/webaim-contrast-checker/)
* [How to Test Color Contrast using the Color Contrast Analyser (CCA)]({{site.baseurl}}/training/web-software/andi-training-videos/color-contrast-analyzer/)

## Additional Resources
* <a href="https://www.tpgi.com/color-contrast-checker/" target="_blank" class="usa-link--external">Colour Contrast Alayser (CCA)</a>
* <a href="https://webaim.org/resources/contrastchecker/" target="_blank" class="usa-link--external">WebAIM Contrast Checker</a>
