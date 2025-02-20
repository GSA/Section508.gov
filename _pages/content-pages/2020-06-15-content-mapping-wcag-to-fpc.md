---
layout: wide_post
permalink: content/mapping-wcag-to-fpc/
type: article
title: 'Mapping of WCAG 2.0 to Functional Performance Criteria'
created: 1541532205
tags:
contributors: usab
description: Mapping of WCAG 2.0 to the Section 508 Functional Performance Criteria
topic: "Law (law)"
sub-topic: "Accessibility Standards, Procedures, Guidance, Best Practices"
audience:
- "508 Program Manager (508pm)"
- "Federal employee (fedemp)"
- "Information Technology Program and Project Managers (itpm)"
- "Content Creators (creator)"
- "Developers and Testers (dev-test)"
resource-type: "Process/How-to"
format: "HTML (html)"
---

<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css">
<script src="//cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
<script type="text/javascript">
jQuery(document).ready(function() {
jQuery('#example').dataTable( {
     columnDefs: [
       { type: 'natural', targets: [0, 9] }
     ],
"paging":   false,
responsive: false,
fixedHeader: true,
 "language": {
    "search": "Filter:"
  }
  } );
} );

</script>
<style type="text/css">td {
text-align: center;}
input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: searchfield-cancel-button;
    float: none;
    border-right: 2px solid;
}
</style>
<p>The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines</a> (WCAG) success criteria (SC) and the <a href="https://www.access-board.gov/ict/">Revised Section 508 Standards</a> share the same objective: to make <a href="{{site.baseurl}}/content/glossary#ict">information and communication technology</a> (ICT) accessible to individuals with disabilities. The revised Section 508 references WCAG 2.0 Level A and AA. The mapping in the table below relates each WCAG SC to the disabilities that may be impacted by non-conformance. In the table, the column headers (columns 2 through 9) represent the disabilities identified by the Section 508 Functional Performance Criteria.</p>
<p>Please note that the information provided in this table is intended solely as informal guidance and is neither a determination of your legal rights or responsibilities, nor a statement of the official views of the U.S. Access Board, the GSA Office of Government-wide Policy IT Accessibility Program, or any other federal agency. Any links to non-federal websites are provided as a courtesy and do not represent an endorsement of the linked information, products, or services.</p>
<p>Select one of the column headers to sort the table.</p>


<table class="display" id="example" style="width:100%" summary="An informal guide mapping the relationship between the web accessibility requirements of WCAG 2.0 to the Section 508 Functional Performance Criteria."><thead><tr><th scope="col">WCAG 2.0 SC</th><th scope="col">Without Vision</th><th scope="col">Limited Vision</th><th scope="col">Without Perception of Color</th><th scope="col">Without Hearing</th><th scope="col">Limited Hearing</th><th scope="col">Without Speech</th><th scope="col">Limited Manipulation</th><th scope="col">Limited Reach and Strength</th><th scope="col">Limited Language, Cognitive, and Learning Abilities</th></tr></thead><tbody><tr><th scope="row">1.1.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#non-text-content" target="_Non-text">Non-text content</a></th><td>X</td><td>X</td><td>-</td><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">1.2.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#audio-only-and-video-only-prerecorded" target="_wcagqr">Audio-only and video only (prerecorded)</a></th><td>X</td><td>X</td><td>-</td><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">1.2.2 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#captions-prerecorded" target="_wcagqr">Captions (prerecorded)</a></th><td>-</td><td>-</td><td>-</td><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">1.2.3 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#audio-description-or-media-alternative-prerecorded" target="_wcagqr">Audio description or media alternative (prerecorded)</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">1.2.4 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#captions-live" target="_wcagqr">Captions (live)</a></th><td>-</td><td>-</td><td>-</td><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">1.2.5 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#audio-description-prerecorded" target="_wcagqr">Audio description (precorded)</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">1.3.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#info-and-relationships" target="_wcagqr">Info and relationships</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">1.3.2 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#meaningful-sequence" target="_wcagqr">Meaningful sequence</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">1.3.3 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#sensory-characteristics" target="_wcagqr">Sensory characteristics</a></th><td>X</td><td>X</td><td>-</td><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">1.4.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#use-of-color" target="_wcagqr">Use of colour</a></th><td>X</td><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">1.4.2 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#audio-control" target="_wcagqr">Audio control</a></th><td>X</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">1.4.3 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#contrast-minimum" target="_wcagqr">Contrast (minimum)</a></th><td>-</td><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><th scope="row">1.4.4 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#resize-text" target="_wcagqr">Resize text</a></th><td>-</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><th scope="row">1.4.5 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#images-of-text" target="_wcagqr">Images of text</a></th><td>-</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">2.1.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#keyboard" target="_wcagqr">Keyboard</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">2.1.2 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#no-keyboard-trap" target="_wcagqr">No keyboard trap</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>-</td></tr><tr><th scope="row">2.2.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#timing-adjustable" target="_wcagqr">Timing adjustable</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">2.2.2 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#pause-stop-hide" target="_wcagqr">Pause, stop, hide</a></th><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">2.3.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#three-flashes-or-below-threshold" target="_wcagqr">Three flashes or below threshold</a></th><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><th scope="row">2.4.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#bypass-blocks" target="_wcagqr">Bypass blocks</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">2.4.2 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#page-titled" target="_wcagqr">Page titled</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">2.4.3 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#focus-order" target="_wcagqr">Focus order</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">2.4.4 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#link-purpose-in-context" target="_wcagqr">Link purpose (in context)</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">2.4.5 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#multiple-ways" target="_wcagqr">Multiple ways</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">2.4.6 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#headings-and-labels" target="_wcagqr">Headings and labels</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">2.4.7 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#focus-visible" target="_wcagqr">Focus visible</a></th><td>-</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">3.1.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#language-of-page" target="_wcagqr">Language of page</a></th><td>X</td><td>X</td><td>-</td><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">3.1.2 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#language-of-parts" target="_wcagqr">Language of parts</a></th><td>X</td><td>X</td><td>-</td><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">3.2.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#on-focus" target="_wcagqr">On focus</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">3.2.2 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#on-input" target="_wcagqr">On Input</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">3.2.3 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#consistent-navigation" target="_wcagqr">Consistent navigation</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">3.2.4 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#consistent-identification" target="_wcagqr">Consistent identification</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">3.3.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#error-identification" target="_wcagqr">Error identification</a></th><td>X</td><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">3.3.2 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#labels-or-instructions" target="_wcagqr">Labels or instructions</a></th><td>-</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td></tr><tr><th scope="row">3.3.3 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#error-suggestion" target="_wcagqr">Error suggestion</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">3.3.4 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#error-prevention-legal-financial-data" target="_wcagqr">Error prevention (legal, financial, data)</a></th><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">4.1.1 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#parsing" target="_wcagqr">Parsing</a></th><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><tr><th scope="row">4.1.2 <a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;currentsidebar=%23col_overview&amp;levels=aaa#name-role-value" target="_wcagqr">Name, role, value</a></th><td>X</td><td>X</td><td>-</td><td>-</td><td>-</td><td>-</td><td>X</td><td>-</td><td>X</td></tr><!--
 <tr>
        <th scope="row">18. Stylesheet Non-dependence</th>
        <td>1.3.2 Meaningful Sequence</td>
        <td>15.B / 1.3.2-content-order-meaning-CSS-position</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
  <tr>
        <th scope="row">19. Frames and iFrames</th>
        <td>4.1.2 Name, Role, Value</td>
        <td>12.C / 4.1.2-frame-title</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">19. Frames and iFrames</th>
        <td>4.1.2 Name, Role, Value</td>
        <td>12.D / 4.1.2-iframe-name</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">2. Focus Visible</th>
        <td>2.4.7 Focus Visible</td>
        <td>4.D / 2.4.7-focus-visible</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
  <tr>
        <th scope="row">20. Alternate Versions</th>
        <td>Conformance Requirement 1. Conformance Level</td>
        <td>1.A / Alt-version-conformant</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
  <tr>
        <th scope="row">20. Alternate Versions</th>
        <td>Conformance Requirement 1. Conformance Level</td>
        <td>1.B / Alt-version-equivalent</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">20. Alternate Versions</th>
        <td>Conformance Requirement 1. Conformance Level</td>
        <td>1.C / Alt-version-access</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">20. Alternate Versions</th>
        <td>Conformance Requirement 1. Conformance Level</td>
        <td>1.D / Alt-version-nc-access</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">21. Timed Events</th>
        <td>1.4.2 Audio Control</td>
        <td>2.A / 1.4.2-audio-control</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">21. Timed Events</th>
        <td>2.2.1 Timing Adjustable</td>
        <td>8.A / 2.2.1-timing-adjustable</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">21. Timed Events</th>
        <td>2.2.2 Pause, Stop, Hide</td>
        <td>2.B / 2.2.2-blinking-moving-scrolling</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">21. Timed Events</th>
        <td>2.2.2 Pause, Stop, Hide</td>
        <td>2.C / 2.2.2-auto-updating</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">21. Timed Events</th>
        <td>4.1.2 Name, Role, Value</td>
        <td>2.D / 4.1.2-change-notify-auto</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">22. Resize Text</th>
        <td>1.4.4 Resize text</td>
        <td>18.A / 1.4.4-resize-text</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">22. Resize Text</th>
        <td>1.4.4 Resize text</td>
        <td>18.A / 1.4.4-resize-text</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">23. Multiple Ways</th>
        <td>2.4.5 Multiple Ways</td>
        <td>19.A / 2.4.5-multiple-ways</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">24. Parsing</th>
        <td>4.1.1 Parsing</td>
        <td>20.A / 4.1.1-parsing</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">25. Non-Interference</th>
        <td>Conformance Requirement 5. Non-Interference</td>
        <td>1.E / non-interference</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">25. Non-Interference</th>
        <td>Conformance Requirement 5. Non-Interference</td>
        <td>2.A / 1.4.2-audio-control</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">25. Non-Interference</th>
        <td>Conformance Requirement 5. Non-Interference</td>
        <td>2.B / 2.2.2-blinking-moving-scrolling</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">25. Non-Interference</th>
        <td>Conformance Requirement 5. Non-Interference</td>
        <td>2.C / 2.2.2-auto-updating</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">25. Non-Interference</th>
        <td>Conformance Requirement 5. Non-Interference</td>
        <td>3.A / 2.3.1-flashing</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">3. Focus Order</th>
        <td>2.4.3 Focus Order</td>
        <td>4.F / 2.4.3-focus-order-meaning</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">3. Focus Order</th>
        <td>2.4.3 Focus Order</td>
        <td>4.G / 2.4.3-focus-order-reveal</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">3. Focus Order</th>
        <td>2.4.3 Focus Order</td>
        <td>4.H / 2.4.3-focus-order-return</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">3. Focus Order</th>
        <td>3.2.1 On Focus</td>
        <td>4.E / 3.2.1-on-focus</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">4. Repetitive Content</th>
        <td>2.4.1 Bypass Blocks</td>
        <td>9.A / 2.4.1-bypass-function</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">4. Repetitive Content</th>
        <td>3.2.3 Consistent Navigation</td>
        <td>9.B / 3.2.3-consistent- navigation</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">4. Repetitive Content</th>
        <td>3.2.4 Consistent Identification</td>
        <td>9.C / 3.2.4-consistent-identification</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">6. Images</th>
        <td>1.1.1 Non-text Content</td>
        <td>7.A / 1.1.1-meaningful-image-name</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">6. Images</th>
        <td>1.1.1 Non-text Content</td>
        <td>7.B / 1.1.1-decorative-image</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">6. Images</th>
        <td>1.1.1 Non-text Content</td>
        <td>7.C / 1.1.1- decorative-background-image</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">6. Images</th>
        <td>1.1.1 Non-text Content</td>
        <td>7.C / 1.1.1- decorative-background-image</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">6. Images</th>
        <td>1.1.1 Non-text Content</td>
        <td>7.D / 1.1.1-captcha-alternative</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">6. Images</th>
        <td>1.4.5 Images of Text</td>
        <td>7.E / 1.4.5-image-of-text</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">6. Images</th>
        <td>4.1.2 Name, Role, Value</td>
        <td>7.A / 1.1.1-meaningful-image-name</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">6. Images</th>
        <td>4.1.2 Name, Role, Value</td>
        <td>7.B / 1.1.1-decorative-image</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">6. Images</th>
        <td>4.1.2 Name, Role, Value</td>
        <td>7.C / 1.1.1- decorative-background-image</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">6. Images</th>
        <td>4.1.2 Name, Role, Value</td>
        <td>7.D / 1.1.1-captcha-alternative</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">7. Sensory Characteristics</th>
        <td>1.3.3 Sensory Characteristics</td>
        <td>13.B / 1.3.3-sensory-info</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">7. Sensory Characteristics</th>
        <td>1.4.1 Use of Color</td>
        <td>13.A / 1.4.1-color-meaning</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">8. Contrast</th>
        <td>1.4.3 Contrast (Minimum)</td>
        <td>13.C / 1.4.3-contrast</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">9. Flashing</th>
        <td>2.3.1 Three Flashes or Below Threshold</td>
        <td>3.A / 2.3.1-flashing</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">5. Changing Content</th>
        <td>4.1.2 Name, Role, Value</td>
        <td>2.D / 4.1.2-change-notify-auto</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">5. Changing Content</th>
        <td>4.1.2 Name, Role, Value</td>
        <td>5.E / 4.1.2-change-notify-form</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 <tr>
        <th scope="row">5. Changing Content</th>
        <td>4.1.2 Name, Role, Value</td>
        <td>6.B / 4.1.2-change-notify-links</td>
        <td>Burgundy</td>
<td>FPurple</td>
      </tr>
 --></tbody></table><p>&nbsp;</p>
<div class="border-base radius-lg border-1px">
  <div class="panel-body padding-3">
    <strong>Before You Go</strong> 
    <p dir="ltr">We&#39;re always working to improve the information and resources on this website. To suggest a new resource for this or another page, please <a class="mailto" href="mailto:section.508@gsa.gov">contact us</a>.</p>
  </div>
</div>
<p><span class="bold"><strong>Reviewed/Updated: </strong>November 2020</span></p>