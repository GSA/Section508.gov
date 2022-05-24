---
layout: base
permalink: /art/process
title: Accessibility Requirements Tool
---
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
<link rel="stylesheet" href="/resources/demos/style.css">
<style>
#dialog label, #dialog input { display:block; }
#dialog label { margin-top: 0.5em; }
#dialog input, #dialog textarea { width: 95%; }
#tabs { margin-top: 1em; }
#tabs li .ui-icon-close { float: left; margin: 0.4em 0.2em 0 0; cursor: pointer; }
#add_tab { cursor: pointer; }
</style>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
<div class="grid-container pgov margin-top-9">
  <div id="dialog" title="Tab data">
    <form>
      <fieldset class="ui-helper-reset">
        <label for="tab_title">Solicitation Name</label>
        <input type="text" name="tab_title" id="tab_title" class="ui-widget-content ui-corner-all">
        <label for="tab_content">Survey</label>
        <textarea name="tab_content" id="tab_content" class="ui-widget-content ui-corner-all"></textarea>
      </fieldset>
    </form>
  </div>
  
  <button id="add_tab" class="usa-button usa-button--accent-warm">Add Solicitation</button>
  
  <div id="tabs">
    <ul>
      <li><a href="#tabs-1">Example Solicitation</a> <span class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
    </ul>
    <div id="tabs-1"><p></p>
    </div>
  </div>
</div>

<div class="grid-container pgov margin-top-9">
  <div class="grid-row grid-gap" id="tab-test">
    <div class="usa-layout-docs__sidenav desktop:grid-col-3 open" id="side-nav">
      <nav aria-label="Secondary navigation">
        <ul class="usa-sidenav">
          <li class="usa-sidenav__item">
            <a href="#section-1">Solicitation Type</a>
          </li>
          <li class="usa-sidenav__item">
            <a href="#section-3">ICT Type</a>
          </li>
          <li class="usa-sidenav__item">
            <a href="#section-4">Electronic Content</a>
          </li>
          <li class="usa-sidenav__item">
            <a href="#section-5">Software</a>
          </li>
          <li class="usa-sidenav__item">
            <a href="#section-6">Hardware</a>
          </li>
        </ul>
      </nav>
    <button id="backtotop" title="Go to top">˄ Top</button>
    </div>
    <main class="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs" id="main-content">
      <h1 class="site-preview-heading">How can ART help you?</h1>
      <section id="section-1">
        <h2 class="site-preview-heading">Solicitation Type</h2>
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
                <b>Project Planning</b>
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
                <b>Market Research</b>
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
                <b>Solicitation Development</b>
                <span class="usa-checkbox__label-description">
                  I want to obtain Section 508 requirements to include in my statement of work.
                </span>
              </label>
            </div>
          </fieldset>
        </div>
      </section>
      <section id="section-3">
        <h2 class="site-preview-heading">ICT Type</h2>
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
                <b>ICT Products</b>
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
                <b>ICT Services</b>
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
                <b>None of the above</b>
              </label>
            </div>
          </fieldset>
        </div>
      </section>
      <section id="section-4">
        <h2 class="site-preview-heading">Does your solicitation include electronic content?</h2>
        <div class="form-group form-group-outer">
          <fieldset class="usa-fieldset">
            <legend class="usa-legend">i.e. Electronic forms, surveys, web, multimedia, document templates, etc.</legend>
            <div class="usa-radio form-group">
              <input
                class="usa-radio__input usa-radio__input--tile"
                id="electronic-content-yes"
                type="radio"
                name="electronic-content"
                value="yes"
              />
              <label class="usa-radio__label" for="electronic-content-yes"
                >Yes</label
              >
            </div>
            <div class="usa-radio form-group form-group-outer">
              <input
                class="usa-radio__input usa-radio__input--tile"
                id="electronic-content-no"
                type="radio"
                name="electronic-content"
                value="no"
              />
              <label class="usa-radio__label" for="electronic-content-no"
                >No</label
              >
              <div>
                <div class="row sub-question is-hidden">
                  <h3>Is your product public facing?</h3>
                  <fieldset class="usa-fieldset">
                    <legend class="usa-legend">Select one of the answers below.</legend>
                    <div class="usa-radio form-group">
                      <input
                        class="usa-radio__input usa-radio__input--tile"
                        id="radio-public-yes"
                        type="radio"
                        name="audience"
                        value="public-yes"
                      />
                      <label class="usa-radio__label" for="radio-public-yes"
                        >Yes</label
                      >
                    </div>
                    <div class="usa-radio form-group form-group-outer">
                      <input
                        class="usa-radio__input usa-radio__input--tile"
                        id="radio-public-no"
                        type="radio"
                        name="audience"
                        value="public-no"
                      />
                      <label class="usa-radio__label" for="radio-public-no"
                        >No</label
                      >
                      <div>
                        <div class="row sub-question is-hidden">
                          <h3>Is your product agency official communication?</h3>
                          <fieldset class="usa-fieldset">
                            <legend class="usa-legend">i.e. emergency notification, educational or training material, program or policy announcement, a survey questionnaire, etc.</legend>
                            <div class="usa-radio form-group">
                              <input
                                class="usa-radio__input usa-radio__input--tile"
                                id="agency-communications-yes"
                                type="radio"
                                name="aoc"
                                value="aoc-yes"
                              />
                              <label class="usa-radio__label" for="agency-communications-yes"
                                >Yes</label
                              >
                            </div>
                            <div class="usa-radio form-group">
                              <input
                                class="usa-radio__input usa-radio__input--tile aoc-no"
                                id="agency-communications-no"
                                type="radio"
                                name="aoc"
                                value="aoc-no"
                              />
                              <label class="usa-radio__label" for="agency-communications-no"
                                >No</label
                              >
                              <div id="dialog_content" style="display: none">Electronic content that is not public facing shall conform to the accessibility requirements specified in E205.4.</div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </section>
      <section id="section-5">
        <h2 class="site-preview-heading">Are you purchasing any software items, deliverables, or licenses?</h2>
        <p>
          <span class="emphasized">Programs, procedures, rules, and related data and documentation that direct the use and operation of ICT and instruct it to perform a given task or function. Software includes, but is not limited to, applications, non-Web software, and platform software.</span>
        </p>
        <div>
          <fieldset class="usa-fieldset">
            <legend class="usa-legend">Please select all that apply.</legend>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-software-application"
                type="checkbox"
                name="software"
                value="software-application"
              />
              <label class="usa-checkbox__label" for="check-software-application">
                <b>Web, desktop, server, mobile client applications</b>
                <span class="usa-checkbox__label-description">
                    <div class="mobile-lg:grid-col-4 margin-top-4 mobile-lg:margin-top-0">
                      <ul class="usa-list usa-list--unstyled">
                        <li>Time and attendance software</li>
                        <li>DHS productivity applications</li>
                        <li>Web forms/applications</li>
                        <li>Call Center Support applications</li>
                        <li>Workflow applications</li>
                        <li>Content management systems</li>
                        <li>Learning management systems</li>
                      </ul>
                    </div>
                </span>
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-software-author"
                type="checkbox"
                name="software"
                value="software-author"
              />
              <label class="usa-checkbox__label" for="check-software-author">
                <b>Software authoring tools and platforms</b>
                <span class="usa-checkbox__label-description">
                    <div class="mobile-lg:grid-col-4 margin-top-4 mobile-lg:margin-top-0">
                      <ul class="usa-list usa-list--unstyled">
                        <li>Microsoft Office</li>
                        <li>Adobe Acrobat Professional</li>
                        <li>Adobe InDesign</li>
                        <li>PDF Generators and Converters</li>
                        <li>Graphing and Charting Programs</li>
                      </ul>
                    </div>
                </span>
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-software-infrastructure"
                type="checkbox"
                name="software"
                value="software-infrastructure"
              />
              <label class="usa-checkbox__label" for="check-software-infrastructure">
                <b>Software infrastructure</b>
                <span class="usa-checkbox__label-description">
                    <div class="mobile-lg:grid-col-4 margin-top-4 mobile-lg:margin-top-0">
                      <ul class="usa-list usa-list--unstyled">
                        <li>Operating Systems</li>
                        <li>Browsers</li>
                        <li>Systems/network administration software</li>
                        <li>Remote access software</li>
                        <li>User authentication software</li>
                        <li>Virtual meeting tools</li>
                      </ul>
                    </div>
                </span>
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-software-none"
                type="checkbox"
                name="software"
                value="None of the above"
              />
              <label class="usa-checkbox__label" for="check-software-none">
                <b>None of the above</b>
              </label>
            </div>
          </fieldset>
          <div id="software-followup" style="display: none">
            <h3>Does the software meet any of the following criteria?</h3>
            <fieldset class="usa-fieldset">
              <div class="usa-checkbox">
                <input
                  class="usa-checkbox__input usa-checkbox__input--tile"
                  id="check-software-interface"
                  type="checkbox"
                  name="software-criteria"
                  value="software-interface"
                />
                <label class="usa-checkbox__label" for="check-software-interface">
                  Does not have an end user interface (i.e. user screens)
                </label>
              </div>
              <div class="usa-checkbox">
                <input
                  class="usa-checkbox__input usa-checkbox__input--tile"
                  id="check-software-assistive"
                  type="checkbox"
                  name="software-criteria"
                  value="software-assistive"
                />
                <label class="usa-checkbox__label" for="check-software-assistive">
                  Principal function is assistive technology
                </label>
              </div>
              <div class="usa-checkbox">
                <input
                  class="usa-checkbox__input usa-checkbox__input--tile"
                  id="check-software-idk"
                  type="checkbox"
                  name="software-criteria"
                  value="software-idk"
                />
                <label class="usa-checkbox__label" for="check-software-idk">
                  I don't know
                </label>
              </div>
              <div class="usa-checkbox">
                <input
                  class="usa-checkbox__input usa-checkbox__input--tile"
                  id="check-software-criteria-none"
                  type="checkbox"
                  name="software-criteria"
                  value="software-none"
                />
                <label class="usa-checkbox__label" for="check-software-criteria-none">
                  None of the above
                </label>
              </div>
            </fieldset>
          </div>
        </div>
      </section>
      <section id="section-6">
        <h2 class="site-preview-heading">Are you purchasing any hardware items, deliverables, or licenses?</h2>
        <p>
          <span class="emphasized">Where components of ICT are hardware and transmit information or have a user interface, such components shall conform to the requirements in Chapter 4. Hardware is considered a tangible device, equipment, or physical component of ICT, such as telephones, computers, multifunction copy machines, and keyboards. 
          </span>
        </p>
        <div>
          <fieldset class="usa-fieldset">
            <legend class="usa-legend">Please select all that apply.</legend>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-hardware-laptop"
                type="checkbox"
                name="hardware"
                value="hardware-laptop"
              />
              <label class="usa-checkbox__label" for="check-hardware-laptop">
                Computers and laptops
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-hardware-tablet"
                type="checkbox"
                name="hardware"
                value="hardware-tablet"
              />
              <label class="usa-checkbox__label" for="check-hardware-tablet">
                Tablet
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-hardware-printer"
                type="checkbox"
                name="hardware"
                value="hardware-printer"
              />
              <label class="usa-checkbox__label" for="check-hardware-printer">
                Printers, scanners, or copiers
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-hardware-office-machine"
                type="checkbox"
                name="hardware"
                value="hardware-office-machine"
              />
              <label class="usa-checkbox__label" for="check-hardware-office-machine">
                Multi-function office machines
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-hardware-equipment"
                type="checkbox"
                name="hardware"
                value="hardware-equipment"
              />
              <label class="usa-checkbox__label" for="check-hardware-equipment">
                Peripheral equipment (i.e. keyboard, mouse)
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-hardware-kiosk"
                type="checkbox"
                name="hardware"
                value="hardware-kiosk"
              />
              <label class="usa-checkbox__label" for="check-hardware-kiosk">
                Information kiosks and transaction machines
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-hardware-phone"
                type="checkbox"
                name="hardware"
                value="hardware-phone"
              />
              <label class="usa-checkbox__label" for="check-hardware-phone">
                Mobile phones
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-hardware-teleconference"
                type="checkbox"
                name="hardware"
                value="hardware-teleconference"
              />
              <label class="usa-checkbox__label" for="check-hardware-teleconference">
                Video teleconference equipment
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-hardware-diplay"
                type="checkbox"
                name="hardware"
                value="hardware-diplay"
              />
              <label class="usa-checkbox__label" for="check-hardware-diplay">
                Video displays or monitors
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-hardware-server"
                type="checkbox"
                name="hardware"
                value="hardware-server"
              />
              <label class="usa-checkbox__label" for="check-hardware-server">
                Servers
              </label>
            </div>
            <div class="usa-checkbox">
              <input
                class="usa-checkbox__input usa-checkbox__input--tile"
                id="check-hardware-other"
                type="checkbox"
                name="hardware"
                value="hardware-other"
              />
              <label class="usa-checkbox__label" for="check-hardware-other">
                Other
              </label>
            </div>
          </fieldset>
          <div id="server-followup" style="display: none">
            <h3>Will the server require physical installation?[placeholder]</h3>
            <fieldset class="usa-fieldset">
              <legend class="usa-legend">Select one of the answers below.</legend>
              <div class="usa-radio form-group">
                <input
                  class="usa-radio__input usa-radio__input--tile"
                  id="radio-server-yes"
                  type="radio"
                  name="server-doublecheck"
                  value="server-yes"
                />
                <label class="usa-radio__label" for="radio-server-yes"
                  >Yes</label
                >
              </div>
              <div class="usa-radio form-group form-group-outer">
                <input
                  class="usa-radio__input usa-radio__input--tile"
                  id="radio-server-no"
                  type="radio"
                  name="server-doublecheck"
                  value="server-no"
                />
                <label class="usa-radio__label" for="radio-server-no"
                  >No</label
                >
              </div>
            </fieldset>
          </div>
        </div>
      </section>
      <div class="grid-container pgov margin-top-5">
        <div class="grid-row grid-gap">
          <button class="usa-button usa-button--accent-warm usa-focus" id="submit" type="button" onclick="displayRadioValue()">Submit</button>
        </div>
      </div>
    </main>
  </div>
</div>
<div class="grid-container pgov margin-top-9">
  <div class="grid-row grid-gap">
    <p>  </p>
    <div class="grid-row grid-gap">
      <div class="border-base radius-lg border-1px">
        <div class="padding-1">
          <p>
            <strong>Before You Go</strong>
          </p>
          <p dir="ltr">
            We're always working to improve the information and resources on this website. To suggest a new resource for this or another page, please <a class="mailto" href="mailto:section.508@gsa.gov">contact us</a>.
          </p>
        </div>
      </div>
    </div>
    <div>
      <p><span class="bold"><strong>Reviewed/Updated:</strong> April 2022 </span></p>
    </div>
  </div>
</div>

<style>
.module{margin-left:auto;margin-right:auto;padding:1.5rem;background-color:#fff;border-radius:3px}
.custom-bullet{margin-left:0;list-style:none;counter-reset:counter}
.custom-bullet li:before{counter-increment:counter;content:counter(counter)}
.custom-bullet-b li{position:relative;border:3px solid #00008b;padding:.75rem;border-radius:3px;float:left;margin:5px}
.custom-bullet-b li:before{position:absolute;top:-1.35rem;padding-left:.375rem;padding-right:.375rem;color:#00008b;background-color:#fff}
.custom-bullet-b li:after{font-size: 20px;}
.custom-bullet-b li:last-child{margin-bottom:0}

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