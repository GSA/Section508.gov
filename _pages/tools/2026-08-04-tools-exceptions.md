---
layout: page
sidenav: false
title: 'Section 508 Exceptions Authoring Tool (SEAT)'
permalink: tools/section-508-exceptions-authoring-tool/
redirect_from:
- tools/seat/
description: "Answer a few questions and create a print-ready Section 508 Exceptions Authorization Request Form."
topic:
- Buy
sub-topic:
- Acquisition Documentation
- Tools
audience:
- Buyers
- Contracting Officers (CO & COR)
- IT Program & Project Managers
- Section 508 Program Managers
resource-type: Tool
format: HTML
created: 2026-08-04
version: "1.0"
hide-date: true
custom-script:
- copy-content.js
- exceptions-request-generator.js
---

<div class="searg" data-searg data-seat-version="{{ page.version }}">
  <script id="searg-agencies" type="application/json">{{ site.data.agencies-and-components | jsonify }}</script>
  <noscript>
    <div class="usa-alert usa-alert--error">
      <div class="usa-alert__body">
        <h2 class="usa-alert__heading">JavaScript is required</h2>
        <p class="usa-alert__text">This tool uses JavaScript to show the questions that apply to your selected exception.</p>
      </div>
    </div>
  </noscript>

  <div class="searg__intro">
    <p>The Section 508 Exceptions Authoring Tool (SEAT) generates standardized Section 508 exception request forms for use as part of an agency's exception process. Where permitted by agency policy, SEAT creates a print-ready request that can be reviewed, signed, and completed by the appropriate agency authorizing official.</p>
    <div class="usa-alert usa-alert--info usa-alert--slim">
      <div class="usa-alert__body">
        <p class="usa-alert__text"><strong>This tool does not submit or authorize an exception.</strong> Your agency determines its own review process and authorizing official. For official instructions, refer to your agency's Section 508 exceptions policy.</p>
      </div>
    </div>
    <div class="usa-alert usa-alert--info usa-alert--slim">
      <div class="usa-alert__body">
        <p class="usa-alert__text"><strong>No information</strong> entered here is sent to or stored by Section508.gov.</p>
      </div>
    </div>
  </div>

  <div class="searg__app" hidden>
    <nav class="searg__progress no-print" aria-label="Form progress">
      <ol class="searg__progress-list">
        <li data-progress="exception">Exception</li>
        <li data-progress="screening">Screening</li>
        <li data-progress="details">Request details</li>
        <li data-progress="review">Review</li>
      </ol>
    </nav>

    <div id="searg-status" class="usa-sr-only" role="status" aria-live="polite"></div>
    <div id="searg-errors" tabindex="-1"></div>
    <form id="searg-form" class="searg__form" novalidate>
      <div id="searg-question"></div>
      <div class="searg__actions no-print">
        <button type="button" class="usa-button usa-button--outline" id="searg-back">Back</button>
        <button type="submit" class="usa-button" id="searg-next">Continue</button>
      </div>
    </form>
    <section id="searg-document" class="searg__document" hidden aria-labelledby="searg-document-title"></section>
  </div>
</div>
