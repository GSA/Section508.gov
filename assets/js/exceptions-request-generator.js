(function () {
  "use strict";

  const root = document.querySelector("[data-searg]");
  if (!root) return;
  if (root.dataset.seargInitialized === "true") return;
  root.dataset.seargInitialized = "true";

  const app = root.querySelector(".searg__app");
  const form = document.getElementById("searg-form");
  const question = document.getElementById("searg-question");
  const errors = document.getElementById("searg-errors");
  const status = document.getElementById("searg-status");
  const actions = root.querySelector(".searg__actions");
  const backButton = document.getElementById("searg-back");
  const nextButton = document.getElementById("searg-next");
  const documentPanel = document.getElementById("searg-document");
  const seatVersion = root.dataset.seatVersion;
  const agencyData = JSON.parse(document.getElementById("searg-agencies").textContent);

  const exceptionTypes = {
    legacy: {
      code: "E202.2",
      name: "Legacy ICT",
      summary: "ICT that conformed to the original Section 508 Standards and has not been altered since January 18, 2018.",
      screeningIntro: "All answers must be Yes for this exception to apply.",
      screening: [
        ["legacy_deployed", "Did your agency deploy, maintain, or use the ICT on or before January 18, 2018?", "yes"],
        ["legacy_conformed", "Did the ICT conform to the original Section 508 Standards before January 18, 2018?", "yes"],
        ["legacy_unchanged", "Since January 18, 2018, has the ICT remained unchanged regarding interoperability, its user interface, and access to information and data?", "yes"]
      ],
      fields: [
        textArea("ict_description", "Describe the ICT system, item, component, or portion covered by this request", "Include its intended use and the part of the ICT for which the exception is requested."),
        textArea("supporting_documentation", "Identify the supporting documentation attached to this request", "For example, evidence of conformance with the original standards and change or maintenance records.")
      ]
    },
    national_security: {
      code: "E202.3",
      name: "National Security Systems",
      summary: "ICT operated as part of a national security system as defined by 40 U.S.C. 1103(a). Routine administrative and business systems are not included.",
      screeningIntro: "At least one answer must be Yes. Routine payroll, finance, logistics, and personnel systems do not qualify merely because a national security agency uses them.",
      screeningMode: "any",
      screening: [
        ["ns_intelligence", "Does the ICT involve intelligence activities?", "yes"],
        ["ns_cryptologic", "Does the ICT involve cryptologic activities related to national security?", "yes"],
        ["ns_command", "Does the ICT involve command and control of military forces?", "yes"],
        ["ns_weapon", "Is the ICT integral to a weapon or weapons system?", "yes"],
        ["ns_mission", "Is the ICT critical to directly fulfilling a military or intelligence mission?", "yes"]
      ],
      fields: [
        radio("covered_entity", "Is the request for a system or an item?", [["system", "System"], ["item", "Item"]]),
        textArea("ict_description", "Describe the ICT system or item covered by this request", "Do not enter classified information."),
        textArea("national_security_rationale", "Explain why the selected national security criteria apply", "Do not enter classified information."),
        textArea("supporting_documentation", "Identify any unclassified supporting documentation attached to this request", "Do not enter classified information.", false)
      ],
      notice: "National Security Systems exception requests should be authorized at the department or agency level. Do not include classified information in this form."
    },
    federal_contracts: {
      code: "E202.4",
      name: "Federal Contracts — ICT incidental to a contract",
      summary: "ICT acquired, owned, and used exclusively by a contractor incidental to performing a federal contract.",
      screeningIntro: "All answers must be Yes for this exception to apply.",
      screening: [
        ["fc_contractor_acquires", "Will the vendor or contractor acquire the ICT?", "yes"],
        ["fc_contractor_only", "Will only vendor or contractor personnel access or use the ICT?", "yes"],
        ["fc_contractor_owns", "Will ownership remain with the vendor or contractor when the contract is complete?", "yes"]
      ],
      fields: [
        textArea("ict_description", "Describe the ICT the contractor will acquire", "Include how the contractor will use it to perform the contract."),
        text("contractor_name", "Contractor or vendor name"),
        textArea("contract_scope", "Explain how the ICT is incidental to the contract", "Confirm that it will be exclusively owned and used by the contractor."),
        radio("other_exceptions", "Will the procurement authorize another Section 508 exception?", [["yes", "Yes"], ["no", "No"]])
      ],
      clause: "E202.4 Federal Contracts. ICT acquired by a contractor incidental to a contract shall not be required to conform to the Revised 508 Standards."
    },
    maintenance: {
      code: "E202.5",
      name: "ICT Functions Located in Maintenance or Monitoring Spaces",
      summary: "Status indicators and operable parts located in spaces frequented only by service personnel for maintenance, repair, or occasional monitoring.",
      screeningIntro: "Both answers must be Yes. The exception applies only to the status indicators and operable parts in the restricted space—not to the entire ICT item.",
      screening: [
        ["mm_controls", "Does the ICT have status indicators or operable parts, such as physical controls?", "yes"],
        ["mm_space", "Are those functions located in a space frequented only by service personnel for maintenance, repair, or occasional monitoring?", "yes"]
      ],
      fields: [
        textArea("ict_description", "Describe the ICT and the functions covered by this request", "Identify the status indicators or operable parts for which the exception is requested."),
        radio("ict_kind", "Which kind of ICT is covered?", [["hardware", "Hardware"], ["software", "Software"], ["both", "Hardware and software"]]),
        textArea("space_description", "Describe the maintenance or monitoring space and who enters it", "For example, a server room or wiring closet entered only by service personnel."),
        textArea("access_explanation", "Explain how access to the covered functions is limited", "Address remote or regular access if software is included.")
      ],
      notice: "This exception is generally limited to physical controls and indicators. It does not normally cover software accessed remotely or software regularly used outside the maintenance or monitoring space."
    },
    fundamental_alteration: {
      code: "E202.6",
      name: "Fundamental Alteration",
      summary: "Conformance would change the fundamental nature of the ICT—not merely make it more difficult or expensive to provide.",
      screeningIntro: "All answers must be Yes for this exception to warrant further consideration.",
      screening: [
        ["fa_changes_nature", "Would conforming the affected features fundamentally change the nature of the ICT or its components?", "yes"],
        ["fa_scope", "Can you identify the specific features and functions for which conformance would cause that change?", "yes"],
        ["fa_alternative", "Will the agency provide people with disabilities an alternative means of access?", "yes"]
      ],
      fields: [
        textArea("ict_description", "Describe the ICT system or item covered by this request"),
        textArea("exception_scope", "Identify the specific features and functions covered by the request", "Explain whether the request applies to part or all of the ICT."),
        textArea("alteration_explanation", "Explain how conformance would fundamentally alter the ICT", "Explain how the ICT would no longer meet the essential business need or requirement."),
        textArea("alternative_access", "Describe the alternative means of access", "Explain how people with disabilities will receive the same information and services."),
        textArea("supporting_documentation", "Identify the supporting documentation attached to this request", "For example, test results, an Accessibility Conformance Report, technical analysis, or market research.")
      ]
    },
    undue_burden: {
      code: "E202.6",
      name: "Undue Burden",
      summary: "Conformance would cause significant difficulty or expense when considered against all resources available to the agency program or component.",
      screeningIntro: "All answers must be Yes for this exception to warrant further consideration.",
      screening: [
        ["ub_burden", "Would conformance for specific ICT features or functions impose significant difficulty or expense?", "yes"],
        ["ub_resources", "Have you quantified all resources available to the agency program or component?", "yes"],
        ["ub_documented", "Can the responsible agency official document why the difficulty or expense is significant relative to those resources?", "yes"],
        ["ub_scope", "Can you identify whether the request covers the entire ICT item or only specific features and functions?", "yes"],
        ["ub_alternative", "Will the agency provide people with disabilities an alternative means of access?", "yes"]
      ],
      fields: [
        textArea("ict_description", "Describe the ICT system or item covered by this request"),
        textArea("exception_scope", "Identify the specific features and functions covered by the request", "Explain whether the request applies to part or all of the ICT."),
        currency("available_resources", "Total resources available to the agency program or component"),
        currency("conformance_cost", "Estimated cost of conformance"),
        textArea("difficulty_expense", "Explain why the difficulty or expense is significant", "Address operational, budget, technical, and other relevant factors and compare the burden with all available resources."),
        textArea("market_research", "Summarize the accessibility market research", "Identify the alternatives considered and why a more conformant option would not meet the business need or would still impose an undue burden."),
        textArea("alternative_access", "Describe the alternative means of access", "Explain how people with disabilities will receive the same information and services."),
        textArea("supporting_documentation", "Identify the supporting documentation attached to this request", "For example, cost estimates, budget documentation, test results, an Accessibility Conformance Report, or market research.")
      ]
    },
    best_meets: {
      code: "E202.7",
      name: "Best Meets",
      summary: "No commercially available ICT fully conforms, and the agency will procure the option that best meets the standards and its business needs.",
      screeningIntro: "All answers must be Yes for this exception to warrant further consideration.",
      screening: [
        ["bm_research", "Did you perform market research addressing Section 508 conformance?", "yes"],
        ["bm_evidence", "Did you evaluate Accessibility Conformance Reports, test results, or equivalent evidence?", "yes"],
        ["bm_documented", "Did you document the market research and validation of conformance claims?", "yes"],
        ["bm_none_fully", "Among the options meeting the business need, were none fully conformant?", "yes"],
        ["bm_best", "Are you selecting the option that best meets the Revised 508 Standards?", "yes"],
        ["bm_alternative", "Will the agency provide people with disabilities an alternative means of access?", "yes"]
      ],
      fields: [
        number("user_count", "Estimated number of users", "1"),
        radio("contractors_only", "Will contractors be the only users?", [["yes", "Yes"], ["no", "No"]]),
        textArea("business_need", "Explain the business need and why the selected ICT best meets the Revised 508 Standards"),
        textArea("market_research", "Summarize the market research and how conformance claims were validated", "Identify attached ACRs, test results, or equivalent documentation."),
        marketOptionsField(),
        textArea("nonconforming_requirements", "Identify the Revised 508 Standards requirements the selected ICT cannot meet"),
        textArea("alternative_access", "Describe the alternative means of access", "Explain how people with disabilities will receive the same information and services.")
      ].flat()
    }
  };

  const requestorFields = [
    text("requestor_first_name", "Requestor first name", "", true, "given-name"),
    text("requestor_last_name", "Requestor last name", "", true, "family-name"),
    email("requestor_email", "Requestor email address"),
    tel("requestor_phone", "Requestor phone number"),
    select("agency", "Department or agency", agencyOptions(), "Choose a top-level department, CFO Act agency, or small independent agency."),
    select("component", "Component or bureau", [], "Choose a department or agency first. If the component is not listed, choose “Other.”", false, { dependsOn: "agency" }),
    text("office", "Requesting office"),
  ];

  const ictFields = [
    text("acquisition_reference", "Acquisition reference number", "", false),
    text("ict_name", "ICT product or service name"),
    text("ict_vendor", "ICT vendor", "", false),
    text("ict_version", "ICT version or model", "", false)
  ];

  const descriptionField = textArea("ict_description", "Describe the system, item, product, or service covered by this request", "Include its intended use, user population, and the specific part of the ICT for which the exception is requested.");
  const documentsField = textArea("supporting_documentation", "Identify the supporting documents attached to this request", "For example, an Accessibility Conformance Report, test results, market research, technical analysis, cost estimates, or an alternative access plan.", false);
  const commonFields = requestorFields.concat(ictFields);

  let state = { stage: "exception", index: 0, type: "", values: {} };
  let steps = [];

  function field(type, id, label, hint, required, extra) {
    return Object.assign({ type, id, label, hint: hint || "", required: required !== false }, extra || {});
  }
  function text(id, label, hint, required, autocomplete) { return field("text", id, label, hint, required, { autocomplete: autocomplete || "off" }); }
  function email(id, label) { return field("email", id, label, "", true, { autocomplete: "email" }); }
  function tel(id, label) { return field("tel", id, label, "", true, { autocomplete: "tel", labelNote: "Format: 000-000-0000", pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}", maxlength: "12" }); }
  function number(id, label, min) { return field("number", id, label, "", true, { min }); }
  function currency(id, label) { return field("text", id, label, "Enter a dollar amount.", true, { inputmode: "decimal" }); }
  function textArea(id, label, hint, required) { return field("textarea", id, label, hint, required); }
  function radio(id, label, options, hint) { return field("radio", id, label, hint, true, { options }); }
  function select(id, label, options, hint, required, extra) { return field("select", id, label, hint, required, Object.assign({ options }, extra || {})); }
  function agencyOptions() {
    return agencyData.groups.flatMap(function (group) {
      return group.agencies.map(function (agency) { return [agency.name, agency.name, group.label]; });
    });
  }
  function selectedAgency() {
    let result = null;
    agencyData.groups.some(function (group) {
      return group.agencies.some(function (agency) {
        if (agency.name === state.values.agency) { result = agency; return true; }
        return false;
      });
    });
    return result;
  }
  function componentOptions() {
    const agency = selectedAgency();
    if (!agency) return [];
    return (agency.components || []).map(function (name) { return [name, name]; }).concat([["Other", "Other or not listed"]]);
  }
  function marketOptionsField() {
    return field("market_options", "market_options", "Market research options", "", true);
  }
  function optionTitle(index) {
    return [
      "System or item evaluated & selected",
      "Second option evaluated",
      "Third option evaluated",
      "Fourth option evaluated",
      "Fifth option evaluated",
      "Sixth option evaluated",
      "Seventh option evaluated",
      "Eighth option evaluated",
      "Ninth option evaluated",
      "Tenth option evaluated"
    ][index - 1] || "Option " + index + " evaluated";
  }
  function optionFields(index, heading, prefixLabels) {
    const prefix = prefixLabels ? heading + ": " : "";
    return [
      field("heading", "option_" + index, heading, "", false),
      text("option_" + index + "_name", prefix + "System or item name"),
      text("option_" + index + "_vendor", prefix + "Vendor name"),
      text("option_" + index + "_version", prefix + "Version or model", "", false),
      textArea("option_" + index + "_justification", prefix + "Evaluation and justification", "Describe its Section 508 conformance and why it was or was not selected.")
    ];
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character];
    });
  }

  function buildSteps() {
    const selected = exceptionTypes[state.type];
    if (state.type === "federal_contracts") {
      steps = [{ kind: "screening_group" }, { kind: "screening_result" }];
      return;
    }
    const documentationRequired = ["fundamental_alteration", "undue_burden", "best_meets"].includes(state.type);
    steps = [
      { kind: "screening_group" },
      { kind: "screening_result" },
      { kind: "group", title: "Requestor information", text: "Provide the requestor and organization information used to identify this request.", fields: requestorFields },
      { kind: "group", title: "ICT information", text: "Provide the acquisition and product or service information.", fields: ictFields },
      { kind: "field", field: descriptionField },
      { kind: "field", field: Object.assign({}, documentsField, { required: documentationRequired }) },
      { kind: "section", title: selected.name + " request details", text: "These questions are specific to the selected exception." },
      ...selected.fields.filter(function (item) { return item.id !== "ict_description" && item.id !== "supporting_documentation"; }).map(function (item) { return { kind: "field", field: item }; }),
      { kind: "review" }
    ];
  }

  function currentStage(step) {
    if (state.stage === "exception") return "exception";
    if (state.type === "federal_contracts" && step && step.kind === "screening_result") return "review";
    if (!step || step.kind === "review") return "review";
    return ["screening_group", "screening_result"].includes(step.kind) ? "screening" : "details";
  }

  function updateProgress(step) {
    const active = currentStage(step);
    const order = ["exception", "screening", "details", "review"];
    root.querySelectorAll("[data-progress]").forEach(function (item) {
      const key = item.dataset.progress;
      item.classList.toggle("is-current", key === active);
      item.classList.toggle("is-complete", order.indexOf(key) < order.indexOf(active));
      if (key === active) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
    });
  }

  function render() {
    errors.innerHTML = "";
    documentPanel.hidden = true;
    form.hidden = false;
    const step = state.stage === "exception" ? null : steps[state.index];
    updateProgress(step);
    actions.hidden = false;
    backButton.hidden = state.stage === "exception";
    nextButton.textContent = step && step.kind === "review" ? "Create authorization request" : "Continue";

    if (state.stage === "exception") renderExceptionSelection();
    else if (step.kind === "screening_group") renderScreeningGroup();
    else if (step.kind === "screening_result") renderScreeningResult();
    else if (step.kind === "section") renderSection(step);
    else if (step.kind === "group") renderGroup(step);
    else if (step.kind === "field") renderField(step.field);
    else renderReview();

    const heading = question.querySelector("h2, legend");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus();
    }
    status.textContent = progressMessage(step);
  }

  function progressMessage(step) {
    if (!step) return "Choose an exception type.";
    const countable = steps.filter(function (candidate) { return candidate.kind === "screening_group" || candidate.kind === "field" || candidate.kind === "group"; });
    if (step.kind === "screening_group" || step.kind === "field" || step.kind === "group") {
      const position = countable.indexOf(step) + 1;
      return "Question " + position + " of " + countable.length;
    }
    return step.kind === "review" ? "Review your answers." : "Section: " + (step.title || exceptionTypes[state.type].name);
  }

  function renderExceptionSelection() {
    question.innerHTML = '<fieldset class="usa-fieldset"><legend class="usa-legend"><h2>Which exception are you requesting?</h2></legend>' +
      '<p class="text-base">Choose the exception that most closely matches the ICT and circumstances. The next questions will help screen whether it may apply.</p>' +
      '<div class="searg__choices">' + Object.keys(exceptionTypes).map(function (key) {
        const item = exceptionTypes[key];
        return '<div class="usa-radio searg__choice"><input class="usa-radio__input" id="type-' + key + '" type="radio" name="exception_type" value="' + key + '" ' + (state.type === key ? "checked" : "") + ' required><label class="usa-radio__label" for="type-' + key + '"><strong>' + item.code + " " + esc(item.name) + '</strong><span>' + esc(item.summary) + '</span></label></div>';
      }).join("") + '</div></fieldset>';
  }

  function renderScreeningGroup() {
    const item = exceptionTypes[state.type];
    question.innerHTML = '<h2>Check whether ' + esc(item.name) + ' may apply</h2>' +
      (item.notice ? '<div class="usa-alert usa-alert--warning"><div class="usa-alert__body"><p class="usa-alert__text">' + esc(item.notice) + '</p></div></div>' : "") +
      '<p>' + esc(item.screeningIntro) + '</p><p>This screening is informational. Your agency authorizing official makes the final determination.</p>' +
      '<div class="searg__screening-questions">' + item.screening.map(function (screeningItem, index) {
        return '<fieldset class="usa-fieldset"><legend class="usa-legend"><strong>' + (index + 1) + '. ' + esc(screeningItem[1]) + '</strong></legend>' + yesNo(screeningItem[0]) + '</fieldset>';
      }).join("") + '</div>';
  }

  function yesNo(id) {
    return '<div class="usa-radio"><input class="usa-radio__input" id="' + id + '-yes" type="radio" name="' + id + '" value="yes" ' + checked(id, "yes") + ' required><label class="usa-radio__label" for="' + id + '-yes">Yes</label></div>' +
      '<div class="usa-radio"><input class="usa-radio__input" id="' + id + '-no" type="radio" name="' + id + '" value="no" ' + checked(id, "no") + ' required><label class="usa-radio__label" for="' + id + '-no">No</label></div>';
  }

  function checked(id, value) { return state.values[id] === value ? "checked" : ""; }

  function qualifies() {
    const selected = exceptionTypes[state.type];
    const matches = selected.screening.map(function (item) { return state.values[item[0]] === item[2]; });
    return selected.screeningMode === "any" ? matches.some(Boolean) : matches.every(Boolean);
  }

  function renderScreeningResult() {
    const selected = exceptionTypes[state.type];
    if (state.type === "federal_contracts" && qualifies()) {
      question.innerHTML = '<div class="usa-alert usa-alert--success"><div class="usa-alert__body"><h2 class="usa-alert__heading" tabindex="-1">Include this exception in the solicitation</h2><p class="usa-alert__text">The screening responses support use of the E202.4 Federal Contracts exception. A formal exception request and authorization, or insertion into the solicitation may not be necessary. Where applicable, include the following excerpt in the ICT solicitation’s Section 508 requirements. For official instructions, refer to your agency’s Section 508 exceptions policy.</p></div></div>' +
        '<article class="searg__paper searg__solicitation-language" aria-labelledby="federal-contracts-language"><button class="copy-content-button no-print" id="copy-btn" type="button" aria-label="Copy solicitation language" title="Copy solicitation language" data-copy-content data-copy-target="#federal-contracts-copy-content" data-copy-status="#searg-status" data-copy-success-message="Solicitation language copied to the clipboard." data-copy-error-message="The solicitation language could not be copied. Select and copy the text manually."><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="/assets/img/sprite.svg#content_copy"></use></svg></button><div id="federal-contracts-copy-content"><h3 id="federal-contracts-language">Section 508 Applicable Exceptions</h3><p>Exceptions applicable to this work statement have been identified. Only the exceptions described below apply. If additional circumstances arise during contract performance that may warrant consideration of a Section 508 exception, the Government will evaluate those circumstances and make any determination in accordance with applicable policy.</p><p><strong>E202.4 Federal Contracts.</strong> ICT acquired by a contractor incidental to this contract is not required to conform to the Revised Section 508 Standards. This exception applies only to contractor-owned ICT used solely by contractor personnel in performing the requirements of this contract. It does not apply to any ICT deliverable, service, or item that will be delivered to, used by, or maintained for the Federal Government or used by members of the public.</p></div></article>' +
        '<div class="margin-top-3 no-print"><button class="usa-button usa-button--outline" type="button" data-reconsider>Reconsider my answers</button><button class="usa-button usa-button--unstyled" type="button" data-change-type>Choose another exception</button></div>';
      nextButton.hidden = true;
      backButton.hidden = true;
      actions.hidden = true;
      question.querySelector("[data-reconsider]").addEventListener("click", function () { state.index = steps.findIndex(function (step) { return step.kind === "screening_group"; }); nextButton.hidden = false; render(); });
      question.querySelector("[data-change-type]").addEventListener("click", restartException);
      return;
    }
    if (qualifies()) {
      question.innerHTML = '<div class="usa-alert usa-alert--success"><div class="usa-alert__body"><h2 class="usa-alert__heading" tabindex="-1">This exception may apply</h2><p class="usa-alert__text">Your answers support continuing with a ' + esc(selected.name) + ' request. The authorizing official will make the final determination.</p></div></div>';
    } else {
      question.innerHTML = '<div class="usa-alert usa-alert--warning"><div class="usa-alert__body"><h2 class="usa-alert__heading" tabindex="-1">Your answers do not support this exception</h2><p class="usa-alert__text">Based on the published decision questions, ' + esc(selected.name) + ' does not appear to apply. You can reconsider your answers or choose another exception.</p></div></div>' +
        '<div class="margin-top-3 no-print"><button class="usa-button usa-button--outline" type="button" data-reconsider>Reconsider my answers</button><button class="usa-button usa-button--unstyled" type="button" data-change-type>Choose another exception</button></div>';
      nextButton.hidden = true;
      question.querySelector("[data-reconsider]").addEventListener("click", function () { state.index = steps.findIndex(function (step) { return step.kind === "screening_group"; }); nextButton.hidden = false; render(); });
      question.querySelector("[data-change-type]").addEventListener("click", restartException);
    }
  }

  function renderSection(step) {
    question.innerHTML = '<h2>' + esc(step.title) + '</h2><p>' + esc(step.text) + '</p>';
  }

  function renderGroup(step) {
    const fieldRows = [];
    for (let index = 0; index < step.fields.length; index += 2) {
      fieldRows.push('<div class="searg__field-row">' + step.fields.slice(index, index + 2).map(function (item) { return renderControl(item, false); }).join("") + '</div>');
    }
    question.innerHTML = '<h2>' + esc(step.title) + '</h2><p>' + esc(step.text) + '</p><div class="searg__field-grid">' + fieldRows.join("") + '</div>';
    const agency = question.querySelector("#agency");
    const component = question.querySelector("#component");
    if (agency && component) {
      populateComponentSelect(component);
      agency.addEventListener("change", function () {
        state.values.agency = agency.value;
        state.values.component = "";
        populateComponentSelect(component);
        component.focus();
      });
    }
  }

  function populateComponentSelect(control) {
    const options = componentOptions();
    control.disabled = options.length === 0;
    control.innerHTML = '<option value="">' + (options.length ? "Select a component or bureau" : "Select a department or agency first") + '</option>' + options.map(function (option) {
      return '<option value="' + esc(option[0]) + '" ' + (state.values.component === option[0] ? "selected" : "") + '>' + esc(option[1]) + '</option>';
    }).join("");
  }

  function renderField(item) {
    if (item.type === "market_options") {
      renderMarketOptions();
      return;
    }
    if (item.type === "heading") {
      question.innerHTML = '<h2>' + esc(item.label) + '</h2><p>Provide information about this market research option.</p>';
      return;
    }
    question.innerHTML = renderControl(item, true);
  }

  function renderMarketOptions() {
    const count = Number(state.values.option_count || 2);
    question.innerHTML = '<h2>Market research options</h2><p>Document the selected ICT and the other commercially available options evaluated. Add more options when needed.</p><div class="searg__market-options">' +
      Array.from({ length: count }, function (_, offset) {
        const index = offset + 1;
        const title = optionTitle(index);
        const unavailable = state.values["option_" + index + "_status"] === "N/A — market non-availability";
        const unavailableControl = index === 1 ? "" : '<div class="usa-checkbox margin-bottom-2"><input class="usa-checkbox__input" type="checkbox" id="option_' + index + '_unavailable" name="option_' + index + '_unavailable" value="yes" ' + (unavailable ? "checked" : "") + '><label class="usa-checkbox__label" for="option_' + index + '_unavailable">N/A — market non-availability</label></div>';
        const controls = unavailable ? '<p class="text-base">No system or item details are required for this option.</p>' : optionFields(index, title, false).filter(function (optionField) { return optionField.type !== "heading"; }).map(function (optionField) { return renderControl(optionField, false); }).join("");
        const removeControl = index > 2 ? '<button type="button" class="usa-button usa-button--unstyled text-secondary-dark margin-top-2" data-remove-option="' + index + '">Remove ' + esc(title.toLowerCase()) + '</button>' : "";
        return '<fieldset class="usa-fieldset searg__market-option"><legend class="usa-legend"><h3>' + esc(title) + '</h3></legend>' + unavailableControl + controls + removeControl + '</fieldset>';
      }).join("") + '</div><button type="button" class="usa-button usa-button--outline margin-top-3" data-add-option>Add another option</button>';

    question.querySelectorAll('[id$="_unavailable"]').forEach(function (control) {
      control.addEventListener("change", function () {
        saveCurrent();
        const index = control.id.match(/option_(\d+)_unavailable/)[1];
        const statusKey = "option_" + index + "_status";
        if (control.checked) {
          state.values[statusKey] = "N/A — market non-availability";
          ["name", "vendor", "version", "justification"].forEach(function (suffix) { delete state.values["option_" + index + "_" + suffix]; });
        } else {
          delete state.values[statusKey];
        }
        render();
      });
    });
    question.querySelector("[data-add-option]").addEventListener("click", function () {
      saveCurrent();
      state.values.option_count = String(count + 1);
      render();
    });
    question.querySelectorAll("[data-remove-option]").forEach(function (control) {
      control.addEventListener("click", function () {
        saveCurrent();
        const removedIndex = Number(control.dataset.removeOption);
        const suffixes = ["name", "vendor", "version", "justification", "status", "unavailable"];
        for (let index = removedIndex; index < count; index += 1) {
          suffixes.forEach(function (suffix) {
            const currentKey = "option_" + index + "_" + suffix;
            const nextKey = "option_" + (index + 1) + "_" + suffix;
            if (Object.prototype.hasOwnProperty.call(state.values, nextKey)) state.values[currentKey] = state.values[nextKey];
            else delete state.values[currentKey];
          });
        }
        suffixes.forEach(function (suffix) { delete state.values["option_" + count + "_" + suffix]; });
        state.values.option_count = String(count - 1);
        render();
      });
    });
  }

  function renderControl(item, large) {
    const required = item.required ? ' <abbr title="required" class="usa-hint usa-hint--required">*</abbr>' : ' <span class="usa-hint">(optional)</span>';
    const labelNote = item.labelNote ? ' <span class="usa-hint">(' + esc(item.labelNote) + ')</span>' : "";
    const hint = item.hint ? '<div id="' + item.id + '-hint" class="usa-hint">' + esc(item.hint) + '</div>' : "";
    if (item.type === "radio") {
      return '<fieldset class="usa-fieldset"><legend class="usa-legend">' + (large ? "<h2>" : "") + esc(item.label) + required + labelNote + (large ? "</h2>" : "") + '</legend>' + hint + item.options.map(function (option) {
        return '<div class="usa-radio"><input class="usa-radio__input" type="radio" id="' + item.id + '-' + option[0] + '" name="' + item.id + '" value="' + option[0] + '" ' + checked(item.id, option[0]) + ' required><label class="usa-radio__label" for="' + item.id + '-' + option[0] + '">' + esc(option[1]) + '</label></div>';
      }).join("") + '</fieldset>';
    }
    const described = item.hint ? ' aria-describedby="' + item.id + '-hint"' : "";
    const requiredAttribute = item.required ? " required" : "";
    const value = esc(state.values[item.id] || "");
    let control = item.type === "textarea"
      ? '<textarea class="usa-textarea" id="' + item.id + '" name="' + item.id + '" rows="7"' + described + requiredAttribute + '>' + value + '</textarea>'
      : '<input class="usa-input" id="' + item.id + '" name="' + item.id + '" type="' + item.type + '" value="' + value + '"' + described + requiredAttribute + (item.autocomplete ? ' autocomplete="' + item.autocomplete + '"' : "") + (item.inputmode ? ' inputmode="' + item.inputmode + '"' : "") + (item.min ? ' min="' + item.min + '"' : "") + (item.pattern ? ' pattern="' + item.pattern + '"' : "") + (item.maxlength ? ' maxlength="' + item.maxlength + '"' : "") + '>';
    if (item.type === "select") {
      const options = item.id === "component" ? componentOptions() : item.options;
      const groups = {};
      options.forEach(function (option) { (groups[option[2] || ""] ||= []).push(option); });
      const optionMarkup = Object.keys(groups).map(function (group) {
        const entries = groups[group].map(function (option) { return '<option value="' + esc(option[0]) + '" ' + (state.values[item.id] === option[0] ? "selected" : "") + '>' + esc(option[1]) + '</option>'; }).join("");
        return group ? '<optgroup label="' + esc(group) + '">' + entries + '</optgroup>' : entries;
      }).join("");
      control = '<select class="usa-select" id="' + item.id + '" name="' + item.id + '"' + described + requiredAttribute + (item.dependsOn && !state.values[item.dependsOn] ? " disabled" : "") + '><option value="">Select an option</option>' + optionMarkup + '</select>';
    }
    const label = large
      ? '<h2><label for="' + item.id + '">' + esc(item.label) + required + labelNote + '</label></h2>'
      : '<label class="usa-label" for="' + item.id + '">' + esc(item.label) + required + labelNote + '</label>';
    return '<div class="usa-form-group">' + label + hint + control + '</div>';
  }

  function renderReview() {
    const selected = exceptionTypes[state.type];
    question.innerHTML = '<h2>Review your request</h2><p>Check the information below. You can go back to make changes. Selecting “Create authorization request” formats your answers for printing or saving as a static PDF.</p>' +
      '<div class="searg__review"><h3>' + selected.code + " " + esc(selected.name) + '</h3>' + reviewRows(commonFields.concat([descriptionField, documentsField], selected.fields.filter(function (item) { return item.id !== "ict_description" && item.id !== "supporting_documentation"; }))) + '</div>';
  }

  function reviewRows(fields) {
    return '<dl>' + expandMarketFields(fields).filter(function (item) { return item.type !== "heading" && state.values[item.id]; }).map(function (item) {
      return '<div><dt>' + esc(item.label) + '</dt><dd>' + displayValue(item, state.values[item.id]) + '</dd></div>';
    }).join("") + '</dl>';
  }

  function expandMarketFields(fields) {
    return fields.flatMap(function (item) {
      if (item.type !== "market_options") return [item];
      const count = Number(state.values.option_count || 2);
      return Array.from({ length: count }, function (_, offset) {
        const index = offset + 1;
        const title = optionTitle(index);
        if (state.values["option_" + index + "_status"]) {
          return [text("option_" + index + "_status", title, "", false)];
        }
        return optionFields(index, title, true);
      }).flat();
    });
  }

  function displayValue(item, value) {
    if (item.type === "radio") {
      const option = item.options.find(function (candidate) { return candidate[0] === value; });
      return esc(option ? option[1] : value);
    }
    return esc(value).replace(/\n/g, "<br>");
  }

  function saveCurrent() {
    const data = new FormData(form);
    data.forEach(function (value, key) { state.values[key] = String(value).trim(); });
  }

  function validateCurrent() {
    const controls = Array.from(question.querySelectorAll("input, textarea, select"));
    const invalid = controls.find(function (control) { return !control.checkValidity(); });
    if (!invalid) return true;
    errors.innerHTML = '<div class="usa-alert usa-alert--error margin-bottom-3" role="alert"><div class="usa-alert__body"><h2 class="usa-alert__heading">Answer this question</h2><p class="usa-alert__text">Complete the required field before continuing.</p></div></div>';
    errors.focus();
    invalid.setAttribute("aria-invalid", "true");
    return false;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!validateCurrent()) return;
    saveCurrent();
    if (state.stage === "exception") {
      state.type = new FormData(form).get("exception_type");
      state.values.exception_type = state.type;
      buildSteps();
      state.stage = "steps";
      state.index = 0;
      render();
      return;
    }
    const step = steps[state.index];
    if (step.kind === "review") {
      createDocument();
      return;
    }
    state.index += 1;
    render();
  });

  form.addEventListener("input", function (event) {
    if (event.target.id !== "requestor_phone") return;
    const digits = event.target.value.replace(/\D/g, "").slice(0, 10);
    event.target.value = digits.length > 6
      ? digits.slice(0, 3) + "-" + digits.slice(3, 6) + "-" + digits.slice(6)
      : digits.length > 3
        ? digits.slice(0, 3) + "-" + digits.slice(3)
        : digits;
  });

  backButton.addEventListener("click", function () {
    saveCurrent();
    nextButton.hidden = false;
    if (state.index > 0) state.index -= 1;
    else restartException();
    render();
  });

  function restartException() {
    state.stage = "exception";
    state.index = 0;
    state.type = "";
    steps = [];
    nextButton.hidden = false;
    render();
  }

  function createDocument() {
    const selected = exceptionTypes[state.type];
    const generationDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    }).format(new Date());
    form.hidden = true;
    documentPanel.hidden = false;
    updateProgress({ kind: "review" });
    const screeningRows = selected.screening.map(function (item) {
      return '<tr><th scope="row">' + esc(item[1]) + '</th><td>' + (state.values[item[0]] === "yes" ? "Yes" : "No") + '</td></tr>';
    }).join("");
    documentPanel.innerHTML = '<div class="searg__document-actions no-print"><button type="button" class="usa-button" data-print>Print or save as PDF</button><button type="button" class="usa-button usa-button--outline" data-edit>Edit request</button><button type="button" class="usa-button usa-button--unstyled" data-start-over>Start over</button><p class="text-base font-body-2xs">In the print dialog, choose “Save as PDF” to create a static PDF. Check the resulting PDF for accessibility before distributing it.</p></div>' +
      '<article class="searg__paper"><header><p>' + esc(state.values.agency) + '</p><h1 id="searg-document-title">' + selected.code + " " + esc(selected.name) + '<br>Exception Request and Authorization Form</h1><p class="searg__generated">Generated by Section508.gov/SEAT v' + esc(seatVersion) + " on " + esc(generationDate) + '.</p></header>' +
      (selected.notice ? '<aside><strong>Important:</strong> ' + esc(selected.notice) + '</aside>' : "") +
      '<section><h2>Requestor information</h2><div class="searg__requestor-columns"><div>' + documentRows(requestorFields.slice(0, 4)) + '</div><div>' + documentRows(requestorFields.slice(4)) + '</div></div></section>' +
      '<section><h2>ICT information and exception rationale</h2>' + documentRows(ictFields.concat([descriptionField, documentsField], selected.fields.filter(function (item) { return item.id !== "ict_description" && item.id !== "supporting_documentation"; }))) + '</section>' +
      '<section><h2>Eligibility responses</h2><table><caption>Table 1: Responses to ' + selected.code + ' screening questions</caption><thead><tr><th scope="col">Question</th><th scope="col">Response</th></tr></thead><tbody>' + screeningRows + '</tbody></table></section>' +
      (selected.clause ? '<section><h2>Recommended contract language</h2><p>' + esc(selected.clause) + '</p></section>' : "") +
      '<section><h2>Requestor certification</h2><p>By signing this form, I affirm that the information provided is accurate and that the ICT described will be used for the purposes identified.</p>' + signatureLines([["Requestor signature", ""], ["Date", ""]]) + '</section>' +
      '<section class="searg__authorization"><h2>Authorization determination</h2><p><strong>To be completed by the agency authorizing official.</strong></p><fieldset><legend>After reviewing this request, the authorizing official determines that the ICT:</legend><p>☐ Meets &nbsp;&nbsp;&nbsp; ☐ Does not meet the criteria for a ' + esc(selected.name) + ' exception.</p></fieldset><h3>Conditions, limitations, scope, rationale, and required mitigation</h3><div class="searg__writing-area" aria-label="Space for authorization determination details"></div>' + signatureLines([["Authorizing official name", ""], ["Title", ""], ["Email address", ""], ["Phone number", ""], ["Signature", ""], ["Authorization date", ""], ["Expiration or revalidation date", ""], ["Exception ID number", ""]]) + '</section>' +
      '<footer><p>Agency records should retain the completed request, determination, and supporting documents according to agency and NARA requirements. Review approved exceptions annually and revalidate them within the period established by agency policy.</p></footer></article>';
    documentPanel.querySelector("[data-print]").addEventListener("click", function () { window.print(); });
    documentPanel.querySelector("[data-edit]").addEventListener("click", function () { form.hidden = false; documentPanel.hidden = true; state.index = steps.length - 1; render(); });
    documentPanel.querySelector("[data-start-over]").addEventListener("click", function () {
      if (window.confirm("Start over and clear all answers?")) { state = { stage: "exception", index: 0, type: "", values: {} }; restartException(); }
    });
    document.getElementById("searg-document-title").setAttribute("tabindex", "-1");
    document.getElementById("searg-document-title").focus();
  }

  function documentRows(fields) {
    return '<dl class="searg__document-rows">' + expandMarketFields(fields).filter(function (item) { return item.type !== "heading"; }).map(function (item) {
      return '<div><dt>' + esc(item.label) + '</dt><dd>' + (state.values[item.id] ? displayValue(item, state.values[item.id]) : '<span aria-label="Not provided">—</span>') + '</dd></div>';
    }).join("") + '</dl>';
  }

  function signatureLines(items) {
    return '<dl class="searg__signature-lines">' + items.map(function (item) { return '<div><dt>' + esc(item[0]) + '</dt><dd>' + esc(item[1] || "") + '</dd></div>'; }).join("") + '</dl>';
  }

  app.hidden = false;
  render();
})();
