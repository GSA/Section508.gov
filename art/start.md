---
layout: base
permalink: /art/start
title: Accessibility Requirements Tool
---
<!--  <div class="grid-container">
  <div class="grid-row grid-gap">
    <div class="grid-col-3">
      <nav aria-label="Secondary navigation,,">
          <ul class="usa-sidenav">
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);" class="usa-current">Start</a>
              <ul class="usa-sidenav__sublist">
                <li class="usa-sidenav__item">
                  <a href="javascript:void(0);">Child link</a>
                </li>
                <li class="usa-sidenav__item">
                  <a href="javascript:void(0);">Child link</a>
                </li>
                <li class="usa-sidenav__item">
                  <a href="javascript:void(0);">Child link</a>
                </li>
                <li class="usa-sidenav__item">
                  <a href="javascript:void(0);">Child link</a>
                </li>
                <li class="usa-sidenav__item">
                  <a href="javascript:void(0);">Child link</a>
                </li>
              </ul>
            </li>
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Parent link</a>
            </li>
          </ul>
      </nav>
    </div> -->
<div class="grid-container pgov margin-top-9">
<div class="grid-row grid-gap">
    <div class="usa-layout-docs__sidenav desktop:grid-col-3 open" id="side-nav">
      <nav aria-label="Secondary navigation">
        <ul class="usa-sidenav">
          <li class="usa-sidenav__item">
            <a href="#section-1">Start</a>
          </li>
          <li class="usa-sidenav__item">
            <a href="#section-2">Project Name</a>
          </li>
          <li class="usa-sidenav__item">
            <a href="#section-3">ICT Type</a>
          </li>
          <li class="usa-sidenav__item">
            <a href="#section-4">Public or Agency</a>
          </li>
          <li class="usa-sidenav__item">
            <a href="#section-5">Electronic Items</a>
          </li>
          <li class="usa-sidenav__item">
            <a href="#section-6">Software</a>
          </li>
          <li class="usa-sidenav__item">
            <a href="#section-7">Hardware</a>
          </li>
        </ul>
      </nav>
    <button id="backtotop" title="Go to top">˄ Top</button>
    </div>
    <main class="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs" id="main-content">
      <h1 class="site-preview-heading">How can ART help you?</h1>
      <section id="section-1">
        <h2>Solicitation Type</h2>
        <div>
          <fieldset class="usa-fieldset">
            <legend class="usa-legend">Select any of the options below</legend>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-solicitation-project-planning"
                type="checkbox"
                name="solicitation-type-project-planning"
                value="project-planning"
              />
              <label class="usa-checkbox__label" for="check-solicitation-project-planning">
                Project Planning
                <span class="usa-checkbox__label-description">
                  I want to identify the applicable Section 508 standards I need to address during project planning.
                </span>
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-solicitation-market-research"
                type="checkbox"
                name="solicitation-type-market-research"
                value="market-research"
              />
              <label class="usa-checkbox__label" for="check-solicitation-market-research"> 
                Market Research
                <span class="usa-checkbox__label-description">
                  I want to obtain product documentation and/or capability statements to determine the availability of accessible products and services using a Request for Information (RFI).
                </span>
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-solicitation-development"
                type="checkbox"
                name="solicitation-type-solicitation-development"
                value="solicitation-development"
              />
              <label class="usa-checkbox__label" for="check-solicitation-development">
                Solicitation Development
                <span class="usa-checkbox__label-description">
                  I want to obtain Section 508 requirements to include in my statement of work.
                </span>
              </label>
            </div>
          </fieldset>
        </div>
      </section>
      <section id="section-2">
        <h2>Project Name</h2>
        <div>
          <label class="usa-label" for="input-focus">Name of Project</label>
          <input
            class="usa-input usa-focus"
            id="input-focus"
            name="input-focus"
            type="text"
          />
        </div>
      </section>
      <section id="section-3">
        <h2>ICT Type</h2>
        <div>
          <fieldset class="usa-fieldset">
            <legend class="usa-legend">What type of ICT do you have? Please select all that apply.</legend>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-ict-product"
                type="checkbox"
                name="ict-type-product"
                value="ict-product"
              />
              <label class="usa-checkbox__label" for="check-ict-product">
                ICT Products
                <span class="usa-checkbox__label-description">
                  I am purchasing ICT Products (example: web and non-web based electronic content, software licenses, hardware)
                </span>
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-ict-service"
                type="checkbox"
                name="ict-type-service"
                value="ict-service"
              />
              <label class="usa-checkbox__label" for="check-ict-service"> 
                ICT Services
                <span class="usa-checkbox__label-description">
                  I am purchasing ICT Services (example: cloud services; contractor services to develop, modify, install, configure, integrate, maintain, or host ICT)
                </span>
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-ict-none"
                type="checkbox"
                name="ict-type-none"
                value="None of the above"
              />
              <label class="usa-checkbox__label" for="check-ict-none">
                None of the above
              </label>
            </div>
          </fieldset>
        </div>
      </section>
      <section id="section-4">
        <h2>Is this for public or agency official communications?</h2>
        <div>
          <fieldset class="usa-fieldset">
            <legend class="usa-legend">Select one of the answers</legend>
            <div class="usa-radio">
              <input
                class="usa-radio__input usa-radio__input--tile"
                id="radio-public"
                type="radio"
                name="audience"
                value="public"
              />
              <label class="usa-radio__label" for="radio-public"
                >Public</label
              >
            </div>
            <div class="usa-radio">
              <input
                class="usa-radio__input usa-radio__input--tile"
                id="radio-agency"
                type="radio"
                name="audience"
                value="agency"
              />
              <label class="usa-radio__label" for="radio-agency"
                >Agency Official Communications</label
              >
            </div>
            <div class="usa-radio">
              <input
                class="usa-radio__input usa-radio__input--tile"
                id="radio-other"
                type="radio"
                name="audience"
                value="other"
              />
              <label class="usa-radio__label" for="radio-other"
                >Other</label
              >
            </div>
          </fieldset>
        </div>
      </section>
      <section id="section-5">
        <h2>Electronic Content</h2>
        <div>
          <fieldset class="usa-fieldset">
            <legend class="usa-legend">Are you purchasing any of the following electronic items, deliverables, or licenses? (Check all that apply)
            </legend>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-website"
                type="checkbox"
                name="electronic-content"
                value="website"
              />
              <label class="usa-checkbox__label" for="check-website">
                Internet or Intranet website
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-document"
                type="checkbox"
                name="electronic-content"
                value="e-document"
              />
              <label class="usa-checkbox__label" for="check-document"> 
                Electronic Documents
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-form"
                type="checkbox"
                name="electronic-content"
                value="e-form"
              />
              <label class="usa-checkbox__label" for="check-form">
                Electronic Forms
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-doc-template"
                type="checkbox"
                name="electronic-content"
                value="e-doc-template"
              />
              <label class="usa-checkbox__label" for="check-doc-template">
                Electronic Document Templates
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-emergency-notification"
                type="checkbox"
                name="electronic-content"
                value="e-emergency-notification"
              />
              <label class="usa-checkbox__label" for="check-emergency-notification">
                Electronic Emergency Notifications
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-survey"
                type="checkbox"
                name="electronic-content"
                value="e-survey"
              />
              <label class="usa-checkbox__label" for="check-survey">
                Electronic Surveys
              </label>
            </div>
          </fieldset>
        </div>
      </section>
      <section id="e-content">
        <div>
          <fieldset class="usa-fieldset">
            <legend class="usa-legend">Will the electronic be made accessible on a website?</legend>
            <div class="usa-radio">
              <input
                class="usa-radio__input usa-radio__input--tile"
                id="website-yes"
                type="radio"
                name="accessible-on-web"
                value="yes"
              />
              <label class="usa-radio__label" for="website-yes"
                >Yes</label
              >
            </div>
            <div class="usa-radio">
              <input
                class="usa-radio__input usa-radio__input--tile"
                id="website-no"
                type="radio"
                name="accessible-on-web"
                value="no"
              />
              <label class="usa-radio__label" for="website-no"
                >No</label
              >
            </div>
          </fieldset>
        </div>
      </section>
      <section id="section-6">
        <h2>Software</h2>
        <div>
          <fieldset class="usa-fieldset">
            <legend class="usa-legend">Are you purchasing any of the following electronic items, deliverables, or licenses? (Check all that apply)
            </legend>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-historical-truth-2"
                type="checkbox"
                name="historical-figures-2"
                value="ict-product"
              />
              <label class="usa-checkbox__label" for="check-historical-truth-2">
                ICT Products
                <span class="usa-checkbox__label-description">
                  I am purchasing ICT Products (example: web and non-web based electronic content, software licenses, hardware)
                </span>
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-historical-douglass-2"
                type="checkbox"
                name="historical-figures-2"
                value="ict-service"
              />
              <label class="usa-checkbox__label" for="check-historical-douglass-2"> 
                ICT Services
                <span class="usa-checkbox__label-description">
                  I am purchasing ICT Services (example: cloud services; contractor services to develop, modify, install, configure, integrate, maintain, or host ICT)
                </span>
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-historical-washington-2"
                type="checkbox"
                name="historical-figures-2"
                value="None of the above"
              />
              <label class="usa-checkbox__label" for="check-historical-washington-2">
                None of the above
              </label>
            </div>
          </fieldset>
        </div>
      </section>
    </main>

<style>
    @media (min-height: 300px) {
        #side-nav {
            position: sticky;
            top: 0;
            align-self: flex-start
        }
    }
</style>
<script>
    let mainNavLinks = document.querySelectorAll("li.usa-sidenav__item a");
    let mainSections = document.querySelectorAll("main section");
    let lastId;
    let cur = [];

    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY;

        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("usa-current");
            } else {
                link.classList.remove("usa-current");
            }
        });
    });


</script>