---
layout: page
sidenav: true
type: training
title: 'Tools for Testing Information and Communications Technology'
permalink: tools/tools-for-testing-ict/
redirect_from: 
- test/web-software/ 
- test/about-testing-tools/ #See archive 2018-05-22-test-about-testing-tools.md
disclaimer: true
topic: "Testing (test)"
sub-topic: "Websites"
audience:
- "Developers and Testers (dev-test)"
- "508 Program Manager (508pm)"
- "Content Creators (creator)"
- "Designer (design)"
- "Website Managers/Content Managers (wcm)"
resource-type: "Training"
format: "HTML (html)"
created: 2025-08-12 
---

Web designers, developers, and content managers play a key role in ensuring websites and digital services are accessible, and conform to the <A href="https://www.access-board.gov/ict/" target="_blank" class="usa-link--external">Section 508 Standards</a>. 

## Testing Tools

The tools used in the Trusted Tester Test Process (and [ICT Testing Baseline][4] tests) have been chosen based on several factors including ease of use, ease of teaching, and accuracy of results. They are also free to install and use.

<ul class="usa-icon-list maxw-full">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>ANDI (Accessible Name & Description Inspector)</strong>, developed by the Social Security Administration, is a free open-source bookmarklet. This means the tool does not require installation as a plugin and can be added to multiple browsers as a bookmark.  
      <div>
        <a href="https://www.ssa.gov/accessibility/andi/help/install.html" target="_blank" class="usa-link--external">Install ANDI</a>
      </div>
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Browser-based developer tools</strong> are built-in utilities in modern web browsers that help developers build, debug, and optimize web applications. You can open these tools directly in the browser, usually by right-clicking on a webpage and selecting "Inspect" or through the browser's menu, such as "More tools" > "Developer tools". Following are links to information for commonly used browsers: <a href="https://developer.chrome.com/docs/devtools" target="_blank" class="usa-link--external">Chrome</a> , <a href="https://learn.microsoft.com/en-us/microsoft-edge/devtools/overview" target="_blank" class="usa-link--external">Edge</a>, <a href="https://firefox-source-docs.mozilla.org/devtools-user/" target="_blank" class="usa-link--external">Firefox</a>, and <a href="https://developer.apple.com/safari/tools/" target="_blank" class="usa-link--external">Safari</a>.
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>Color Contrast Analyzer (CCA)</strong> is a free open-source tool that displays the contrast ratio for two selected colors. It is especially useful when contrast cannot be programmatically identified by ANDI.  
      <div>
        <a href="https://www.tpgi.com/color-contrast-checker/" target="_blank" class="usa-link--external">Download CCA for Windows or macOS</a>
      </div>
    </div>
  </li>
  <li class="usa-icon-list__item">
   <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#push_pin"></use></svg>
    </div>
    <div class="usa-icon-list__content">
      <strong>WebAIM Contrast Checker</strong> is a free, web-based tool that displays the contrast ratio for two selected colors. It is useful when contrast cannot be programmatically identified by ANDI.  
      <div>
        <a href="https://webaim.org/resources/contrastchecker/" target="_blank" class="usa-link--external">Use the WebAIM Contrast Checker</a>
      </div>
    </div>
  </li>
</ul>

## Training Videos

---

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-3 display-flex flex-column flex-align-self-center">
    <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/)"><img src="{{site.baseurl}}/assets/images/thumbnails/training-video-andi-13-thumb.jpg" alt="Accessible Name & Description Inspector (ANDI) Tool Overview" style="width:100%; border: 1px black solid;" class="radius-lg" /></a>
  </div>
  <div class="desktop:grid-col-9">
    <h4><a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/">Accessible Name & Description Inspector (ANDI) Color Contrast</a></h4>
    <p>In Module 13 of the Accessible Name & Description Inspector (ANDI) Tool video series, learn how to use the <em>Color Contrast</em> module to <a href="{{site.baseurl}}/tools/glossary/#programmatically-determinable" >programmatically determined</a> whether text in a webpage has enough contrast with its background to be readable by people with moderately low vision—especially those who do not typically use contrast-enhancing assistive technology.</p>
    <p>Duration 2m 9s | Module 13 of an 18-Part Video Series</p>
  </div>
</div>

---
  
<div class="grid-row grid-gap">
  <div class="desktop:grid-col-3 display-flex flex-column flex-align-self-center">
    <a href="{{site.baseurl}}/training/create/making-color-usage-accessible/color-contrast-analyzer/"><img src="{{site.baseurl}}/assets/images/thumbnails/training-video-cca-thumb.jpg" alt="How to Test Color Contrast using the Color Contrast Analyser" style="width:100%; border: 1px black solid;" class="radius-lg" /></a>
  </div>
  <div class="desktop:grid-col-9">
    <h3><a href="{{site.baseurl}}/training/create/making-color-usage-accessible/color-contrast-analyzer/">How to Use the Color Contrast Analyzer (CCA)</a></h3>
    <p>In this video, we’ll show you how to use the <a href="https://developer.paciellogroup.com/resources/contrastanalyser/" target="_blank" class="usa-link--external">Colour Contrast Analyser (CCA)</a> and the programmatic color values&mdash;or HEX codes&mdash;to check contrast between text, images of text, and background colors in digital content and documents. This tool is especially useful when automated tools like <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/">ANDI</a> can’t <a href="{{site.baseurl}}/tools/glossary/#programmatically-determinable" >programmatically determined</a> contrast issues, or when a standalone application is preferred.</p>
    <p>Duration 6m 07s | 1-Part Video Tutorial</p>
  </div>
</div>
  
---

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-3 display-flex flex-column flex-align-self-center">
    <a href="{{site.baseurl}}/training/create/making-color-usage-accessible/webaim-contrast-checker/"><img src="{{site.baseurl}}/assets/images/thumbnails/training-video-webaim-thumb.jpg" alt="How to Test Color Contrast using the Color Contrast Analyser" style="width:100%; border: 1px black solid;" class="radius-lg" /></a>
  </div>
  <div class="desktop:grid-col-9">
    <h3><a href="{{site.baseurl}}/training/create/making-color-usage-accessible/webaim-contrast-checker/">How to Use the WebAIM Contrast Checker</a></h3>
    <p>In this video, you’ll learn how to use <a href="https://webaim.org/resources/contrastchecker/" target="_blank" class="usa-link--external">WebAIM’s Contrast Checker</a> to evaluate the contrast between text—or images of text—and background colors in documents. This tool is especially helpful when contrast issues can’t be <a href="{{site.baseurl}}/tools/glossary/#programmatically-determinable" >programmatically determined</a> by tools like <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast/">ANDI</a> or when those tools aren’t available.</p>
    <p>Duration 5m 22s | 1-Part Video Tutorial</p>
  </div>
</div>
  
---

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-3 display-flex flex-column flex-align-self-center">
    <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast-analyzer/"><img src="{{site.baseurl}}/assets/images/thumbnails/training-video-andi-14-thumb.jpg" alt="How to Test Color Contrast using the Color Contrast Analyser" style="width:100%; border: 1px black solid;" class="radius-lg" /></a>
  </div>
  <div class="desktop:grid-col-9">
    <h3><a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast-analyzer/">How to Test Color Contrast using the Color Contrast Analyser (CCA)</a></h3>
    <p>In Module: 14 of the Accessible Name & Description Inspector (ANDI) Tool video series, learn how to use the <a href="https://developer.paciellogroup.com/resources/contrastanalyser/" target="_blank" class="usa-link--external">Color Contrast Analyzer's (CCA)</a> built-in color sampler to ensure the contrast ratio between text, and images of text, and it&apos;s background is sufficient. CCA can be used to when contrast cannot <a href="{{site.baseurl}}/tools/glossary/#programmatically-determinable" >programmatically determined</a> by ANDI.</p>
    <p>Duration 2m 33s | 1-Part Video Tutorial</p>
  </div>
</div>
  
<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
  <strong>Note:</strong> Your government-issued device may not allow you to download or use certain software. Contact your agency’s IT Helpdesk to check if the software is available for installation.
</div>

## Related Resources

  * [ICT Testing Baseline Portfolio]({{site.baseurl}}/test/ict-testing-baseline-portfolio/)
  * [Test ICT for Accessibility]({{site.baseurl}}/test/)
  * [Trusted Tester Program]({{site.baseurl}}/test/trusted-tester/) 
  * [Universal Design]({{site.baseurl}}/develop/universal-design/)
  * <a href="https://www.w3.org/WAI/Tools/" target="_blank" class="usa-link--external">WAI - tools Project</a>

**Reviewed/Updated:** August 2025