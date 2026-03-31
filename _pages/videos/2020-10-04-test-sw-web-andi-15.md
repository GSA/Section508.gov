---
layout: video
sidenav: true
type: ANDI training
title: 'Module 15: Data Tables'
permalink: training/web-software/andi-training-videos/data-tables/
redirect_from:
- test/web-software/anditraining-videos/data-tables/
description: In Module 15 of the Accessible Name &amp; Description Inspector (ANDI) Tool video series, understand how to use the ANDI <em>Tables</em> module to inspect data tables for accessibility and ensure that the information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
disclaimer: 
audience:
- Federal Employees
- Section 508 Program Managers
- Developers
- Content Creators
- Members of the Public
topic: Training
subtopic: Design, Develop, Testing for Accessibility Training or Tools
resource-type: Training
format: Video
created: 2020-10-05
updated: 2026-03-03
exclude-changelog: true
---

In Module 15 of the Accessible Name &amp; Description Inspector (ANDI) Tool video series, understand how to use the ANDI _Tables_ module to inspect [data tables][1] for accessibility and ensure that the information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

<video controls="controls" poster="{{site.baseurl}}/assets/images/thumbnails/training-video-andi-poster.jpg" data-vscid="3qesx4ovd" style="width:100%"><source src="https://assets.section508.gov/assets/videos/training-video-andi-15-oc.mp4" type="video/mp4"></video>

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button id="transcript" type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a1">Transcript</button>
  </h4>
  <div id="a1" class="usa-accordion__content">
    <p>Voice Over (VO): Welcome to the ANDI Data Tables module. The purpose of this module is to inspect data tables for accessibility. To start, open a web page and launch ANDI. Next, choose the Select Module drop-down menu and navigate to the Tables module. Once selected, the number of data tables displays. If there are no programmatic tables on the page or if the tables are contained within iframes, the ANDI tables module will not appear. Review the iframes video for more information on inspecting content within iframes. To evaluate data tables, select the Analyze Next Table or Analyze Previous Table button to navigate between tables. Once the table receives focus, it is highlighted with a pink outline. Then, select the Next Element or Previous Element button to navigate between each data cell. When a data cell receives focus, it is highlighted with a solid pink outline. Light pink background shading shows the relationship between the cell and its associated headers. The ANDI output will display the text from any associated headers in purple and the data cell in light green. A data table passes if the ANDI element attribute table role is defined as table and the ANDI output accurately displays the header and data cell associations. A data table fails if the ANDI element attribute table role is defined as presentation or the ANDI output does not accurately display the header and data cell associations. The test does not apply if data tables do not exist. This concludes the ANDI data tables module. Users are encouraged to view the other videos for more information on how to utilize ANDI.</p>
  </div>
</div>

<h2 class="block-title">Related ANDI Video Series Modules</h2>
<div class="item-list">
   <ul>
      <li class="views-row views-row-1 views-row-odd views-row-first">
         <div class="views-field views-field-title">        
            <span class="field-content"><a class="active" href="{{site.baseurl}}/training/web-software/andi-training-videos/overview">Module 1: Overview of ANDI</a></span>  
         </div>
      </li>
      <li class="views-row views-row-2 views-row-even">
         <div class="views-field views-field-title">
            <span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/focus-element">Module 2: Focus Element</a></span>
         </div>
      </li>
      <li class="views-row views-row-3 views-row-odd">
         <div class="views-field views-field-title">
            <span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/links-buttons">Module 3: Links &amp; Buttons</a></span>
         </div>
      </li>
      <li class="views-row views-row-4 views-row-even">
         <div class="views-field views-field-title">
            <span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/images">Module 4: Images</a></span>
         </div>
      </li>
      <li class="views-row views-row-5 views-row-odd">
         <div class="views-field views-field-title">
            <span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/structure-headings">Module 5: Structure Headings</a></span>
         </div>
      </li>
      <li class="views-row views-row-6 views-row-even">
         <div class="views-field views-field-title">
<span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/heading-levels">Module 6: Heading Levels</a></span>  </div>
      </li>
      <li class="views-row views-row-7 views-row-odd">
         <div class="views-field views-field-title">        
<span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/structure-lists">Module 7: Structure Lists</a></span>  </div>
      </li>
      <li class="views-row views-row-8 views-row-even">
         <div class="views-field views-field-title">        
<span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/page-language">Module 8: Page Language</a></span>  </div>
      </li>
      <li class="views-row views-row-9 views-row-odd">
         <div class="views-field views-field-title">        
<span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/language-parts">Module 9: Language of Parts</a></span>  </div>
      </li>
      <li class="views-row views-row-10 views-row-even">
         <div class="views-field views-field-title"><span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/andi-page-title">Module 10: Page Title</a></span>  </div>
      </li>
      <li class="views-row views-row-11 views-row-odd">
         <div class="views-field views-field-title">        <span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/frames">Module 11: Frames</a></span>  </div>
      </li>
      <li class="views-row views-row-12 views-row-even">
         <div class="views-field views-field-title">        <span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/iframes">Module 12: iFrames</a></span>  </div>
      </li>
      <li class="views-row views-row-13 views-row-odd">
         <div class="views-field views-field-title">        <span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast">Module 13: Color Contrast</a></span>  </div>
      </li>
      <li class="views-row views-row-14 views-row-even">
         <div class="views-field views-field-title">        <span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/color-contrast-analyzer">Module 14: Color Contrast Analyzer</a></span>  </div>
      </li>
      <li class="views-row views-row-15 views-row-odd">
         <div class="views-field views-field-title">        <span class="field-content">Module 15: Data Tables</span>  </div>
      </li>
      <li class="views-row views-row-16 views-row-even">
         <div class="views-field views-field-title">        <span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/layout-tables">Module 16: Layout Tables</a></span>  </div>
      </li>
      <li class="views-row views-row-17 views-row-odd">
         <div class="views-field views-field-title">        <span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/css-content-positioning">Module 17: CSS Content and Positioning</a></span>  </div>
      </li>
      <li class="views-row views-row-18 views-row-even views-row-last">
         <div class="views-field views-field-title">        <span class="field-content"><a href="{{site.baseurl}}/training/web-software/andi-training-videos/live-regions">Module 18: Live Regions</a></span>  </div>
      </li>
   </ul>
</div>


 [1]: {{site.baseurl}}/tools/glossary/#data-table
