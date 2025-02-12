---
layout: page
sidenav: true
permalink: test/web-software/
type: test
title: 'Accessibility Testing for Websites and Software'
created: 1527026399
contributors: usab
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
---

Web designers, developers, and content managers play a key role in ensuring websites and digital tools are accessible, and conform to the [Revised 508 Standards][1] and the [W3C Web Content Accessibility Guidelines (WCAG)][2] 2.0 Level AA.

## ICT Testing Baseline

The [ICT Testing Baseline for Web][20] establishes the minimum tests for Section 508 conformance to be included in test methodologies for web content in the federal government. It is tool agnostic and supports the use of automated and manual testing tools to ensure a comprehensive and accurate assessment of web accessibility. Results from a baseline-aligned test process provide full coverage of all Section 508 requirements. A test process that aligns with the ICT Testing Baseline for Web can reliably and consistently determine if web content meets these requirements. The ICT Testing Baseline also supports harmonization of interpretation of the 508 Standards in test methodologies and sharing of conformance test results. 

The ICT Testing Baseline describes what to evaluate for conformance to [the Revised 508 Standards][21], which align with WCAG 2.0 Level A and AA Success Criteria. It is organized by categories to help you easily identify applicable requirements. Note that the Baseline is not a test process and does not include testing tools; rather, it should be used to ***create*** an accessibility test process or validate an existing test process for completeness.

Email the ICT Baseline Working Group at <ictbaseline@gsa.gov> with questions.

## Trusted Tester Program

The Interagency Trusted Tester Program promotes a unified, consistent, shareable, and repeatable test and evaluation approach for Section 508 standards conformance. The goal is to reduce redundant testing and save agencies money.

  * [Interagency Trusted Tester Program][3]

## Testing Tools for Web

The tools used in the Trusted Tester Test Process (and [ICT Testing Baseline][4] tests) have been chosen based on several factors including ease of use, ease of teaching, and accuracy of results. They are also free to install and use.

  * **ANDI (Accessible Name & Description Inspector)**, developed by the Social Security Administration, is a free open-source bookmarklet, which means that the tool does not require installation as a plugin and can be added to multiple browsers as a bookmark. 
      * [Install ANDI][5]
  * **Color Contrast Analyzer (CCA)**, developed by Steve Faulkner and the Paciello Group, is a free open-source tool that displays the contrast ratio for two selected colors. CCA is used to inspect color contrast when contrast cannot be programmatically identified by ANDI. 
      * [CCA 2.5 for Windows][6]
      * [CCA 2.4 for macOS][7]

## Training Videos

* * *

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-3 display-flex flex-column flex-align-self-center">
    <a href="{{site.baseurl}}/training/web-software/andi-training-videos/"><img alt="Accessible Name & Description Inspector (ANDI) Tool Overview" class="img-responsive" src="{{site.baseurl}}/assets/images/thumbnails/training-video-andi-00-thumb.jpg" style="width:220px; border-radius: 8px;" /></a>
  </div>
  
  <div class="desktop:grid-col-9">
    <p>
      <a href="{{site.baseurl}}/training/web-software/andi-training-videos/"><strong>Accessible Name & Description Inspector (ANDI) Tool Overview</strong></a>
    </p>
<p>
      Get a basic overview on how to use the Accessible Name & Description Inspector tool (ANDI) used to test websites and web-based applications for accessibility. ANDI is a free tool developed by the Social Security Administration.
    </p>
<p>
      Duration 31m 11s | 18-Part Video Series
    </p>
  </div>
</div>

* * *

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-3 display-flex flex-column flex-align-self-center">
    <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast-analyzer/"><img alt="How to Test Color Contrast using the Color Contrast Analyser" class="img-responsive" src="{{site.baseurl}}/assets/images/thumbnails/training-video-andi-14-thumb.jpg" style="width:220px; border-radius: 8px;" /></a>
  </div>
  
  <div class="desktop:grid-col-9">
    <p>
      <a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast-analyzer/"><strong>How to Test Color Contrast using the Color Contrast Analyser</strong></a>
    </p>
<p>
      Learn how to use <a href="https://developer.paciellogroup.com/resources/contrastanalyser/" target="_blank">The Paciello Group’s Color Contrast Analyzer (CCA)</a> to ensure the contrast ratio between text, and images of text, and it's background is sufficient. CCA is used to inspect color contrast when contrast cannot be <a href="{{site.baseurl}}/content/glossary#programmatically-determinable">programmatically identified</a> by ANDI.
    </p>
<p>
      Duration 2m 33s | 1-Part Video Tutorial
    </p>
  </div>
</div>

* * *

## W3C Guidance

A collection of tools and training from the World Wide Web Consortium (W3C).

  * [How People with Disabilities Use the Web: Overview][8] - Explains how people with disabilities, including age-related impairments, use the Web
  * [Web Accessibility Perspectives: Explore the Impact and Benefits for Everyone][9] - Short videos showing the impact of accessible design in a variety of situations
  * [Web Content Accessibility and Mobile Web: Making a Website Accessible Both for People with Disabilities and for Mobile Devices][10] - Explains the overlap between accessibility and mobile web design and development
  * [WAI-Tools Project][11] - Tools created by the Web Accessibility Initiative (WAI), which develops strategies, guidelines, and resources to improve Web accessibility

## Additional Guidance

  * [Universal Design][12] - Incorporate accessibility from the start
  * [18F Accessibility Guide][13] - An evolving collection of web accessibility resources
  * [Federal CrowdSource Mobile Testing Program][14] - Free compatibility testing service for devices, operating systems, and mobile browsers
  * [SSA Guide: Alternate Text For Images][16] (PDF)

## Related Resources

  * [Test for Accessibility][17]
  * [About AED COP Testing Tools][18]

The resources on this page were created through interagency collaborative efforts sponsored under the [Accessibility Community of Practice (ACoP)][19], a committee under the Federal Chief Information Officers (CIO) Council and the Federal Chief Acquisition Officer (CAO) Council. These resources are endorsed by the ACoP for use across the US Government for validating conformance to the [Revised 508 Standards][1]. (Note, resources created and hosted by Federal agencies other than GSA are not included in this endorsement.)

**Reviewed/Updated:** March 2024

 [1]: https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines
 [2]: http://www.w3.org/WAI/intro/wcag.php
 [3]: {{site.baseurl}}/test/trusted-tester
 [4]: https://section508coordinators.github.io/ICTTestingBaseline/
 [5]: https://www.ssa.gov/accessibility/andi/help/install.html
 [6]: https://github.com/ThePacielloGroup/CCA-Win/releases/tag/2.5.0
 [7]: https://github.com/ThePacielloGroup/CCA-OSX/releases/tag/2.4
 [8]: https://www.w3.org/WAI/intro/people-use-web/
 [9]: https://www.w3.org/WAI/perspectives/
 [10]: https://www.w3.org/WAI/mobile/overlap.html
 [11]: https://www.w3.org/WAI/Tools/
 [12]: {{site.baseurl}}/create/universal-design
 [13]: https://pages.18f.gov/accessibility/
 [14]: https://digital.gov/services/mobile-application-testing-program/tester-information-for-the-federal-crowdsource-mobile-testing-program/
 [15]: http://www.ssa.gov/accessibility/bpl/default.htm
 [16]: http://www.ssa.gov/accessibility/files/SSA_Alternative_Text_Guide.pdf
 [17]: {{site.baseurl}}/test
 [18]: {{site.baseurl}}/test/about-testing-tools
 [19]: https://www.cio.gov/about/members-and-leadership/accessibility-cop/
 [20]: https://ictbaseline.access-board.gov/
 [21]: https://www.access-board.gov/ict/