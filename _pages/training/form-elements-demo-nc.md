---
sidenav: false
layout: page
type: training
title: Accessible Forms Demonstration (Non-Conformant)
permalink: training/at-forms-demo-non-conformant/
exclude-changelog: false
---
<style>
  .usa-header, .page-landing-page, .banner-title-color, .usa-footer__primary-section, .usa-identifier {
    display: none;
  }
  
  .usa-legend {
    font-weight: bold;
  }

  .usa-checkbox__input {
    outline: 2px solid #b50909;
  }

  .usa-error-message[hidden] {
    display: none !important;
  }

  .usa-error-message {
    color: #b50909;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .usa-form {
    max-width: 400px;
  }  

</style>

<div class="grid-container grid-col-12">
  <div class="usa-graphic-list">
    <form class="usa-form" action="#" method="post" novalidate>
      <p>All fields marked with an asterisk (*) are required.</p>
      <div id="topics-error" class="usa-error-message summary-box" role="alert" tabindex="-1" hidden>A required field is missing a response.</div>
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
      <fieldset class="usa-fieldset margin-top-6" aria-describedby="topics-error">
        <legend class="usa-legend">Topics you want updates about <span aria-hidden="true">*</span></legend>
        <!-- Hidden error message initially -->
        <div class="usa-checkbox">
          <input class="usa-checkbox__input" id="topic-design" type="checkbox" name="topics" value="design"/>
          <label class="usa-checkbox__label" for="topic-design">Design</label>
        </div>
        <div class="usa-checkbox">
          <input class="usa-checkbox__input" id="topic-development" type="checkbox" name="topics" value="development"/>
          <label class="usa-checkbox__label" for="topic-development">Development</label>
        </div>
        <div class="usa-checkbox">
          <input class="usa-checkbox__input" id="topic-testing" type="checkbox" name="topics" value="testing"/>
          <label class="usa-checkbox__label" for="topic-testing">Testing</label>
        </div>
      </fieldset>
    <br>
    <!-- SUBMIT -->
    <button class="usa-button" type="submit">Submit</button>
    </form>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".usa-form");
    const error = document.getElementById("topics-error");
    const checkboxes = form.querySelectorAll(
      'input[type="checkbox"][name="topics"]'
    );

    // Accessible validation function
    function validateCheckboxes() {
      const isChecked = Array.from(checkboxes).some(cb => cb.checked);
      if (!isChecked) {
        // Show error and move focus for screen readers
        error.hidden = false;
        error.focus();
        return false;
      } else {
        error.hidden = true;
        return true;
      }
    }

    // Make function callable from buttons outside JS scope
    window.validateCheckboxes = validateCheckboxes;

    // Validate on normal form submission
    form.addEventListener("submit", function (event) {
      if (!validateCheckboxes()) {
        event.preventDefault(); // block submission if invalid
      }
    });
  });
</script>