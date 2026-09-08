---
layout: page
sidenav: true
permalink: 'fy26-styleguide/'
type: report2025
title: "FY 2026 Assessment Style Guide"
created: 2026-09-02
updated: 
exclude-changelog:
---

## Colors and Contrast
### Blue
<div class="grid-col-12 summary-box text-white fy26-blue-bg margin-bottom-1">
  HEX: #022E5E; <br>
  CSS classes: fy26-red-bg and fy26-red-text <br>
  CR is 13.5:1 when used with white text (#ffffff; or text-white)
</div>

### Green
<div class="grid-col-12 summary-box text-white fy26-green-bg margin-bottom-1">
  HEX: #538200; <br>
  CSS classes: fy26-green-bg and fy26-green-text <br>
  CR 4.6:1 when used with white text (#ffffff; or text-white)
</div>

### Purple
<div class="grid-col-12 summary-box text-white fy26-purple-bg margin-bottom-1">
  HEX: #4B1340; <br>
  CSS classes: fy26-purple-bg and fy26-purple-text <br>
  CR 14.3:1 when used with white text (#ffffff; or text-white)
</div>

### Red
<div class="grid-col-12 summary-box text-white fy26-red-bg margin-bottom-1">
  HEX: #C5171E; <br>
  CSS classes: fy26-red-bg and fy26-red-text <br>
  CR 6:1 when used with white text (#ffffff; or text-white)
</div>

### Yellow
<div class="grid-col-12 summary-box fy26-yellow-bg margin-bottom-1">
  HEX: #FFBE2E; <br>
  CSS Classes: fy26-yellow-bg and fy26-yellow-text <br>
  CR 12.6:1 when used with default black text
</div>

## Charts and YOY Graphics
### FY25
Background: White (#ffffff; or text-white)  
Stripes: Purple (#4B1340; or fy26-purple-bg) ??pt/px
<div class="grid-col-12 summary-box margin-bottom-1 diagonal-stripes">
  &nbsp;
</div>

### FY26
Background: Red (#C5171E; fy26-red-bg)
<div class="grid-col-12 summary-box margin-bottom-1 fy26-red-bg">
  &nbsp;
</div>

## Images and Charts 
* Black font on white background
* Public Sans font
* Font at least 12 pt (16px) for non-heading text (if 12pt won’t work, use 11 pt- nothing smaller)
* Heading should be at least 14-16 pt (~18-21 px) bold- depending on length
* For indices outcomes, 2 decimals. everything else, whole number
* All graphs, when referencing the 0-5 scale, should have axis ranging from 0-5 just to keep all the numbers aligned
* For indices outcomes, 2 decimals. everything else, whole number
* Label based on caption name or something else easily identifiable 
* For charts, use 
  * Violet (<span style="color:#481441;">#481441</span>) 
  * Blue (<span style="color:#0076d6;">#0076d6</span>) 
  * Green (<span style="color:#538200;">#538200</span>) 
  * Where required, use diagonal stripes and crosshatch
* Add alt to the final chart in the gdoc

### Image Format
* Export to JPG/JPEG format
* Save to [2026 Assessment Images](https://drive.google.com/drive/folders/1gTDHuWIIE5zpm9QuVjJoDazOV7YKq8yV) folder so that the figure desc match
* Mike will resolve Figure #, Table #, asset sequencing, file names, and image compresison prior to publishing.

## Summary Box

### summary-box--icon-prompt
summary-box--icon-prompt is one of 4 similar styles of callouts with small icons, and icons can be customized
<div class="grid-col-12 summary-box--icon-prompt">
   <ul class="usa-icon-list padding-right-2 force-max-width">
       <li class="usa-icon-list__item">
           <div class="usa-icon-list__icon"><svg class="usa-icon icon-size" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/ai-generative.svg"></use></svg></div>
           <div class="usa-icon-list__content force-max-width">
               <div class="box-heading"><strong>Heading</strong><hr></div>
               <div class="box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
           </div>
       </li>
   </ul>
</div>

### summary-box--icon-lg
<div class="grid-col-12 summary-box--icon-lg">
   <ul class="usa-icon-list padding-right-2 force-max-width">
       <li class="usa-icon-list__item">
           <div class="usa-icon-list__icon"><svg class="usa-icon icon-size" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sound.svg"></use></svg></div>
           <div class="usa-icon-list__content margin-left-1 force-max-width">
               <div class="box-heading"><strong>Heading Optional</strong></div>
               <div class="box-text">Created in response to the echo callout in the draft assessment summary-box--icon-lg is similar to summary-box--icon-prompt, but has a large icon, no fill and Y borders. The icon is example, and can be customized. Heading font weight is the same regardless of heading size (H2-H6).
               </div>
           </div>
       </li>
   </ul>
</div>

### summary-box--fy26-blue
<div class="grid-col-12 summary-box margin-bottom-2">
    tbd
</div>

### summary-box--fy26-purple
<div class="grid-col-12 summary-box margin-bottom-2">
    tbd
</div>
<div class="border-base radius-lg padding-1" style="width: 100%; border: 1px solid #022E5E; background-color: #f5f9fc;">
   tbd
</div>

### Assessment Alternate
<div class="border-base radius-lg padding-1 margin-bottom-2" style="width: 100%; border: 1px solid #93348c; background-color: #fbdcff;">
   tbd
</div>

## Callout Box: Small Icon — Shown as Embeded
<!--
<div class="display-none tablet:display-block border-base padding-1 callout-box-top-left" style="float:right; margin-left:10px; width:50%; border-bottom-color: #14671B;">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col">
        <ul class="usa-icon-list">
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use></svg></div>
            <div class="usa-icon-list__content">
              <h3 class="usa-icon-list__title">How does Dracula count?</h3>
              <ul class="list-item-spacer" style="padding:15px">
                <li>one</li>
                <li>two</li>
                <li>three - ha ha ha!</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. -->

<div class="display-none tablet:display-block border-base padding-1 callout-box-top-left-violet" style="float:right; margin-left:10px; width:50%;">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col">
        <ul class="usa-icon-list">
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon text-green" style="color:#481441;"><svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use></svg></div>
            <div class="usa-icon-list__content">
              <h3 class="usa-icon-list__title">How does Dracula count?</h3>
              <ul style="padding:15px">
                <li>one</li>
                <li>two</li>
                <li>three - ha ha ha!</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Callout Box: Large Icon
<!-- BEGIN CALLOUT -->      
<!-- <div class="callout-box-changes grid-row flex-no-wrap" style="border-bottom-color: #538100;"> -->
<div class="callout-box-changes grid-row" style="border-bottom-color: #538100;">
  <div class="center-middle">
    <div class="spot-div">
      <div class="spot-text" style="background-size: 70px; background-color:#FFF; background-image: url('{{site.baseurl}}/assets/images/icon-checklist.png');"></div>
    </div>
  </div>
  <div class="tablet:grid-col center-left text-div" style="background-color:#E0F2EB;">
    <p><strong>C-Index Change YoY</strong><br>
    Conformance from 1.79 down to 1.74</p>
  </div>
  <div class="tablet:grid-col center-middle radius-right-lg arrow-div" style="background-color:#E0F2EB; color:#538100;">
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#arrow_downward"></use></svg>
  </div>
</div>
<!-- END CALLOUT -->

## Callout Box: Numbered
<div class="callout-box-changes grid-row flex-no-wrap">
  <div class="center-middle">
    <div class="spot-div">
      <div class="spot-text">+31%</div>
    </div>
  </div>
  <div class="tablet:grid-col center-left text-div">
    <p><strong>Training</strong></p>
  </div>
  <div class="tablet:grid-col center-middle radius-right-lg arrow-div">
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#arrow_upward"></use></svg>
  </div>
</div>

## Callout Box: Dual border
<div class="callout-box-dual margin-bottom-1">
  <h3>Callout Box: Dual Boarder </h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <ul>
    <li>border: #162E51; bg: #F5F9FC; tetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  </ul>
</div>

## Callout Box: Dual border Alt
<div class="callout-box-dual-alt margin-bottom-1">
  <h3>Callout Box: Dual Boarder Alt </h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <ul>
    <li>border: #162E51; bg: #d9e8f6; tetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  </ul>
</div>

## Callout Box: Bordered Both Violet
<div class="callout-box-dual-violet margin-bottom-1">
  <strong>For reporting entities with no YOY change for public internet web pages:</strong>
  <ul>
    <li>2 entities noted they did not have public internet web pages both years.<sup><a href="#fn14" id="fr14">14</a></sup></li>
    <li>14 entities remained at 100% conformance for internet web pages.</li>
    <li>4 entities maintained the same level of compliance (between 10% - 40%).</li>
    <li>121 entities reported no change due to either a lack of resources to test content both years or 0% conformance of pages tested both years.</li>
  </ul>
</div>

## Horizontal rule: Default
<hr style="color: #56093b">

## Horizontal rule: different color
<hr class="breaker-bar-green margin-top-3" style="color: #481441">

## Callout Box: Limited — for Key Takeaways and Assessment sections only
<div class="border-left-1 padding-2 margin-bottom-2 text-white" style="background-color:#481441; border-color:#f4b2ff;">
  <div class="callout-box-img font-sans-3xl"><svg class="usa-icon text-white" aria-hidden="true" focusable="false" role="img"><use href="/assets/img/sprite.svg#verified"></use></svg></div>
  <div class="callout-box-text"><h3>Key Takeaways</h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
</div>

<div class="border-right-1 padding-2 margin-bottom-2" style="background-color:#fef2ff; border-color:#481441;">
  <div class="callout-box-img font-sans-3xl"><svg class="usa-icon violet-warm-70v" aria-hidden="true" focusable="false" role="img"><use href="/assets/img/sprite.svg#assessment"></use></svg>
  </div>
  <div class="callout-box-text"><h3>Assessment</h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
</div>

### Callout Box: Border Left Icon
<div class="callout-box-left-icon border-right-1 padding-2 margin-bottom-2" style="background-color:#fef2ff; border-color:#481441;">
  <div class="callout-box-img font-sans-3xl"><svg class="usa-icon violet-warm-70v" aria-hidden="true" focusable="false" role="img"><use href="/assets/img/sprite.svg#assessment"></use></svg>
  </div>
  <div class="callout-box-text"><h3>Heading 3</h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
</div>


<!-- -->

## Callout: Top
<div style="width: 100%;" class="border-base padding-1 callout-box-top-left-violet">
  <div class="callout-box-img font-sans-3xl"><svg class="usa-icon violet-warm-70v" aria-hidden="true" focusable="false" role="img"><use href="/assets/img/sprite.svg#forum"></use></svg></div>
  <div class="callout-box-text">
      <h4>(b)(1)(A)</h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>

## Callout: Bottom
<div class="border-base padding-1 callout-box-bottom-left-violet" style="width: auto;">
  <div class="callout-box-img font-sans-3xl"><svg class="usa-icon violet-warm-70v" aria-hidden="true" focusable="false" role="img"><use href="/assets/img/sprite.svg#push_pin"></use></svg></div>
  <div class="callout-box-text">
      <h4>(b)(1)(A)</h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>

## Callout: Left only
<div class="border-left-05 padding-left-2 fy26-purple-border" style="">
Border<br>
the length<br>
of text.
</div>

## Callout: right only
<div class="border-right-05 padding-left-2 fy26-purple-border" style="">
Border<br>
the length<br>
of text.
</div>

## Table: Blue (Borderless striped)
<table class="usa-table usa-table--borderless striped grid-col-12">
  <caption>Table #: Description</caption>
  <thead>
    <tr>
      <th scope="col">Document title</th>
      <th scope="col">Description</th>
      <th scope="col">Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Bob</th>
      <td>Placeholder</td>
      <td>2026</td>
    </tr>
    <tr>
      <th scope="row">Bob</th>
      <td>Placeholder</td>
      <td>2026</td>
    </tr>
    <tr>
      <th scope="row">Bob</th>
      <td>Placeholder</td>
      <td>2026</td>
    </tr>
  </tbody>
</table>

## Table: Red (Borderless striped)
<table class="usa-table usa-table--borderless striped-fy26-red grid-col-12">
  <caption>Table #: Description</caption>
  <thead>
    <tr>
      <th scope="col">Document title</th>
      <th scope="col">Description</th>
      <th scope="col">Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Bob</th>
      <td>Placeholder</td>
      <td>2026</td>
    </tr>
    <tr>
      <th scope="row">Bob</th>
      <td>Placeholder</td>
      <td>2026</td>
    </tr>
    <tr>
      <th scope="row">Bob</th>
      <td>Placeholder</td>
      <td>2026</td>
    </tr>
  </tbody>
</table>

## Table: Heatmap
<table id="table-3" class="usa-table usa-table--borderless">
<caption>Table 3. Heat map of reporting entity count by maturity and conformance brackets</caption>
<thead>
  <tr>
    <th scope="col" aria-label="blank"></th>
    <th scope="col" class="center">Very Low Maturity</th>
    <th scope="col" class="center">Low Maturity</th>
    <th scope="col" class="center">Moderate Maturity</th>
    <th scope="col" class="center">High Maturity</th>
    <th scope="col" class="center">Very High Maturity</th>
  </tr>
</thead>
<tbody>
  <tr>
      <th scope="row">Very High Conformance</th>
      <td class="bg-blue-0">0</td>
      <td class="bg-blue-2">2</td>
      <td class="bg-blue-6">6</td>
      <td class="bg-blue-9">9</td>
      <td class="bg-blue-0">0</td>
  </tr>
  <tr>
      <th scope="row">High Conformance</th>
      <td class="bg-blue-2">2</td>
      <td class="bg-blue-3">3</td>
      <td class="bg-blue-8">8</td>
      <td class="bg-blue-5">5</td>
      <td class="bg-blue-3">3</td>
  </tr>
  <tr>
      <th scope="row">Moderate Conformance</th>
      <td class="bg-blue-0">0</td>
      <td class="bg-blue-12">12</td>
      <td class="bg-blue-23">23</td>
      <td class="bg-blue-8">8</td>
      <td class="bg-blue-4">4</td>
  </tr>
  <tr>
      <th scope="row">Low Conformance</th>
      <td class="bg-blue-4">4</td>
      <td class="bg-blue-39">39</td>
      <td class="bg-blue-37">37</td>
      <td class="bg-blue-5">5</td>
      <td class="bg-blue-1">1</td>
  </tr>
  <tr>
      <th scope="row">Very Low Conformance</th>
      <td class="bg-blue-21">21</td>
      <td class="bg-blue-25">25</td>
      <td class="bg-blue-27">27</td>
      <td class="bg-blue-4">4</td>
      <td class="bg-blue-1">1</td>
  </tr>
</tbody>
</table>

## Accordion: Bordered
<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="true"
      aria-controls="b-a1"
    >
      First Amendment
    </button>
  </h4>
  <div id="b-a1" class="usa-accordion__content usa-prose">
    <p>
      Congress shall make no law respecting an establishment of religion, or
      prohibiting the free exercise thereof; or abridging the freedom of speech,
      or of the press; or the right of the people peaceably to assemble, and to
      petition the Government for a redress of grievances.
    </p>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a2"
    >
      Second Amendment
    </button>
  </h4>
  <div id="b-a2" class="usa-accordion__content usa-prose">
    <p>
      A well regulated Militia, being necessary to the security of a free State,
      the right of the people to keep and bear Arms, shall not be infringed.
    </p>
    <ul>
      <li>This is a list item</li>
      <li>Another list item</li>
    </ul>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a3"
    >
      Third Amendment
    </button>
  </h4>
  <div id="b-a3" class="usa-accordion__content usa-prose">
    <p>
      No Soldier shall, in time of peace be quartered in any house, without the
      consent of the Owner, nor in time of war, but in a manner to be prescribed
      by law.
    </p>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a4"
    >
      Fourth Amendment
    </button>
  </h4>
  <div id="b-a4" class="usa-accordion__content usa-prose">
    <p>
      The right of the people to be secure in their persons, houses, papers, and
      effects, against unreasonable searches and seizures, shall not be
      violated, and no Warrants shall issue, but upon probable cause, supported
      by Oath or affirmation, and particularly describing the place to be
      searched, and the persons or things to be seized.
    </p>
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b-a5"
    >
      Fifth Amendment
    </button>
  </h4>
  <div id="b-a5" class="usa-accordion__content usa-prose">
    <p>
      No person shall be held to answer for a capital, or otherwise infamous
      crime, unless on a presentment or indictment of a Grand Jury, except in
      cases arising in the land or naval forces, or in the Militia, when in
      actual service in time of War or public danger; nor shall any person be
      subject for the same offence to be twice put in jeopardy of life or limb;
      nor shall be compelled in any criminal case to be a witness against
      himself, nor be deprived of life, liberty, or property, without due
      process of law; nor shall private property be taken for public use,
      without just compensation.
    </p>
  </div>
</div>