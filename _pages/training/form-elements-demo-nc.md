---
sidenav: false
layout: page
type: training
title: Accessible Forms Demonstration (Non-Conformant)
permalink: training/at-forms-demo-non-conformant/
exclude-changelog: false
---
<style>
  .usa-header,
  .page-landing-page,
  .banner-title-color,
  .usa-footer__primary-section,
  .usa-identifier {
    display: none;
  }

  .usa-legend {
    font-weight: bold;
  }
</style>

<div class="grid-container grid-col-12">
  <div class="usa-graphic-list">
    <form class="usa-form" action="#" method="post" novalidate>
      <!-- TEXT INPUTS -->
      <div>
        <div class="usa-legend">Personal Information</div>
        <label class="usa-label">First name</label>
        <span class="usa-hint">Given name.</span>
        <input class="usa-input" type="text" required />
        <label class="usa-label">Last name</label>
        <span class="usa-hint">Family name or surname.</span>
        <input class="usa-input" type="text" required />
      </div>
      <p>&nbsp;</p>
      <!-- RADIO BUTTONS -->
      <div>
        <div class="usa-legend">Preferred contact method</div>
        <span class="usa-hint">Choose one option.</span>
        <div class="usa-radio">
          <input
            class="usa-radio__input"
            type="radio"
            name="contact-method"
            value="email"
          />
          <label class="usa-radio__label">Email</label>
        </div>
        <div class="usa-radio">
          <input
            class="usa-radio__input"
            type="radio"
            name="contact-method"
            value="phone"
          />
          <label class="usa-radio__label">Phone</label>
        </div>
      </div>
      <p>&nbsp;</p>
      <!-- SELECT -->
      <label class="usa-label text-bold">Agency or organization</label>
      <span class="usa-hint">Select the option that best describes you.</span>
      <select class="usa-select">
        <option value="">- Select -</option>
        <option value="federal">Federal agency</option>
        <option value="state">State or local government</option>
        <option value="private">Private sector</option>
        <option value="other">Other</option>
      </select>
      <!-- DATE PICKER -->
      <div class="usa-form-group margin-top-6">
        <label class="usa-label text-bold">Appointment date</label>
        <div class="usa-hint">mm/dd/yyyy</div>
        <div class="usa-date-picker">
          <input class="usa-input" type="text" />
        </div>
      </div>
      <!-- CHECKBOXES -->
      <div>
        <div class="usa-legend">Topics you want updates about</div>
        <span class="usa-hint">Select all that apply.</span>
        <div class="usa-checkbox">
          <input class="usa-checkbox__input" type="checkbox" value="design"/>
          <label class="usa-checkbox__label">Design</label>
        </div>
        <div class="usa-checkbox">
          <input class="usa-checkbox__input" type="checkbox" value="development"/>
          <label class="usa-checkbox__label">Development</label>
        </div>
      </div>
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="topic-testing" type="checkbox" name="topics" value="testing"/>
        <label class="usa-checkbox__label" for="topic-testing">Testing</label>
      </div>
    </form>
    <!-- SUBMIT -->
    <button class="usa-button" type="submit">Submit</button>
  </div>
</div>