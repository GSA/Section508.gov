---
layout: wide
sidenav: false
permalink: iaaf/archives/agenda-2023/
redirect_from: iaaf/agenda-2023/
type: page
title: Interagency Accessibility Forum (IAAF) Event Agenda - 2023
created: 2023-09-23
topic: "Events (events)"
sub-topic: "Accessibility Standards, Procedures, Guidance, Best Practices"
audience:
- "federal employee (fedemp)"
- "508 Program Manager (508pm)"
- "Public (public)"
- "Content Creators (creator)"
- "Developers and Testers (dev-test)"
resource-type: "Training"
format: "HTML (html)"
---

<h1><a href="{{site.baseurl}}/iaaf/"><img alt="Annual Interagency Accessibility Forum." src="{{site.baseurl}}/assets/images/iaaf-2024-web-banner.jpg" style="width:100%" class="border-base radius-lg border-0px"></a></h1>


<div class="program-header margin-bottom-2" style="margin-top: 2em;">
  <b><span class="text-large">PROGRAM</span> Day 1/Tuesday, November 7th | <a href="#day2" title="Skip to Day 2 Program">Day 2/Wednesday, November 8th</a> | <a href="#day3" title="Skip to Day 3 Program">Day 3/Thursday, November 9th</a> | <a href="#exhibitors" title="Skip to Exhibitors Program">Exhibitors</a></b>
</div>

{% for day in site.data.iaaf_sessions.iaaf_2023 %}
  <!-- BEGIN DAY {{ day.day }} -->
  <h2 class="font-body-lg" id="day{{ day.day }}">PROGRAM Day {{ day.day }}: {{ day.time_start | date: "%A, %B %d" }}</h2>
  
  <div class="usa-graphic-list__row container">
    <!-- START AGENDA -->
    {% for session in day.sessions %}
    {% if session.type == "welcome" %}{% assign session-class = "navy" %}{% assign descr-class = "ltblue" %}{% endif %}
    {% if session.type == "breakout" %}{% assign session-class = "brown-breakout" %}{% assign descr-class = "tan-breakout" %}{% endif %}
    {% if session.type == "general" %}{% assign session-class = "olive" %}{% assign descr-class = "lt-olive" %}{% endif %}
    {% if session.type == "keynote" %}{% assign session-class = "brown" %}{% assign descr-class = "lt-olive" %}{% endif %}
    {% if session.type == "panel" %}{% assign session-class = "olive" %}{% assign descr-class = "lt-olive" %}{% endif %}
          <!-- START SESSION ROW -->
      {% if session.type == "break" %}
      <div class="grid-row break">
        <div class="grid-col-12 cell dark padding-1">{{ session.time_start | date: "%l:%M %p" }} – {{ session.time_end | date: "%l:%M %p" }}<br><span class="session-type">{{ session.name }} {% if session.room != nil %} - {{ session.room }}{% endif %}</span></div>
      </div>
      {% else %}
        <div class="grid-row">
          <div class="desktop:grid-col-3 tablet:grid-col-3 cell {{ session-class }} padding-1" id="{{ session.session_id }}">
            {{ session.time_start | date: "%l:%M %p" }} – {{ session.time_end | date: "%l:%M %p" }}<br>
            <span class="session-type">{{ session.name }}{% if session.type != "breakout" %}{% if session.room != nil %} - {{ session.room }}{% endif %}{% endif %}</span>
          </div>
            {% if session.type == "breakout" %}
              <!-- BREAKOUT TRACK -->
              {% for track in session.tracks %}
                <div class="desktop:grid-col tablet:grid-col cell tan-breakout padding-1 agenda-description" id="{{ track.track_id }}">
                  <div class="brown-breakout-header bbh-65">{{ track.name }}</div>
                  <span class="session-type padding-top-1 padding-left-sm padding-right-sm">{{ track.name_breakout }}</span> <span class="session-description padding-top-1 padding-left-sm padding-right-sm">{{ track.description }}</span>
                  {% assign track_roles = track.roles | map: "name" | uniq %}
                  {% for role in track_roles %}
                    <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                      <span class="session-type text-highlight">{{ role }}:</span>
                    </div>
                    {% assign this_role = track.roles | where: "name", role %}
                    {% for item in this_role %}
                      {% assign bio_id = item.who %}
                      {% for bio in site.bios_iaaf %}
                        {% if bio.bio_id == bio_id %}
                        <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                          <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/archives/biographies-2023#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.affiliation_short }}    
                        </div>
                        {% endif %}
                      {% endfor %}
                    {% endfor %}
                  {% endfor %}
                  {% if track.downloads[0].link_name != nil %}
                  <!-- DOWNLOADS -->
                    <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                      <span class="session-type text-highlight margin-top-3">Downloads:</span>
                    </div>
                    {% for download in track.downloads %}
                      <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                        <span class="speaker-name"><a href="https://assets.section508.gov/assets/files/iaaf/2023/{{download.file_name}}" target="_blank">{{ download.link_name }}</a></span>
                      </div>
                    {% endfor %}
                  {% endif %}
                  <!-- LOCATION -->
                  {% if track.room != nil %}
                    <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                      <span class="session-type text-highlight margin-top-3">Location:</span>
                    </div>
                      <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                        <span class="speaker-name">{{ track.room }}</span>
                      </div>                  
                  {% endif %}
                </div>
              {% endfor %}
            {% elsif session.type == "panel" %}
            <!-- PANEL SESSION -->
              <div class="desktop:grid-col-9 tablet:grid-col-9 cell {{ descr-class }} agenda-description padding-1">
                <span class="session-type padding-top-1 padding-left-sm padding-right-sm">{{ session.subtitle }}</span>
                <span class="session-description padding-top-1 padding-left-sm padding-right-sm">{{ session.description }}</span>
                {% assign session_roles = session.roles | map: "name" | uniq %}
                {% for role in session_roles %}
                  {% if role != nil %}
                  <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                    <span class="session-type text-highlight">{{ role }}:</span>
                  </div>
                  {% endif %}
                  {% assign this_role = session.roles | where: "name", role %}
                  {% for item in this_role %}
                    {% assign bio_id = item.who %}
                    {% for bio in site.bios_iaaf %}
                      {% if bio.bio_id == bio_id %}
                      <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                        <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/archives/biographies-2023#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.position}}, {{ bio.affiliation_long }}    
                      </div>
                      {% endif %}
                    {% endfor %}
                  {% endfor %}
                {% endfor %}
                {% if track.downloads[0].link_name != nil %}
                  <!-- DOWNLOADS -->
                  <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                    <span class="session-type text-highlight margin-top-3">Downloads:</span>
                  </div>
                  {% for download in track.downloads %}
                    <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                      <span class="speaker-name"><a href="https://assets.section508.gov/assets/files/iaaf/2023/{{download.file_name}}" target="_blank">{{ download.link_name }}</a></span>
                    </div>
                  {% endfor %}
                {% endif %}
              </div>
            {% elsif session.roles and session.type != "panel" %}
            <!-- GENERAL SESSION -->
              <div class="desktop:grid-col-9 tablet:grid-col-9 cell {{ descr-class }} agenda-description padding-1">
              {% if session.subtitle %}
                <span class="session-type padding-top-1 padding-left-sm padding-right-sm">{{ session.subtitle }}</span>
                <span class="session-description padding-top-1 padding-left-sm padding-right-sm">{{ session.description }}</span>
              {% endif %}
              {% assign session_roles = session.roles | map: "name" | uniq %}
              {% for role in session_roles %}
                {% if role != nil %}
                <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                  <span class="session-type text-highlight">{{ role }}:</span>
                </div>
                {% endif %}
                {% assign this_role = session.roles | where: "name", role %}
                {% for item in this_role %}
                  {% assign bio_id = item.who %}
                  {% for bio in site.bios_iaaf %}
                    {% if bio.bio_id == bio_id %}
                    <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                      <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/archives/biographies-2023#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.position}}, {{ bio.affiliation_long }}    
                    </div>
                    {% endif %}
                  {% endfor %}
                {% endfor %}
              {% endfor %}

              {% if session.downloads[0].link_name != nil %}
                <!-- DOWNLOADS -->
                <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                  <span class="session-type text-highlight margin-top-3">Downloads:</span>
                </div>
                {% for download in session.downloads %}
                  <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                    <span class="speaker-name"><a href="https://assets.section508.gov/assets/files/iaaf/2023/{{download.file_name}}" target="_blank">{{ download.link_name }}</a></span>
                  </div>
                {% endfor %}
              {% endif %}

              </div>
            {% endif %}           
        </div>
      {% endif %}
    {% endfor %}
  </div>
{% endfor %}

## Exhibitors
<p>The following vendors will be exhibiting outside of the Bair Auditorium on one of two days, Wednesday or Thursday, during the conference. Exhibitor participation was performed through an open registration and selected on a first-come, first-serve basis. The GSA, USAB, Federal CIO Council, FDIC, VA, partner and contributing agencies do not endorse the products, services, and claims of participating vendors.</p>
<p>Explore products and services designed to support and enhance the lives of people with disabilities and others.</p>
<ul>
  <li><strong><a href="https://www.adobe.com/" target="_blank">Adobe</a></strong> | For more information, contact: <a href="mailto:esakati@adobe.com">Elizabeth Sakati</a>.</li>
  <li><strong><a href="https://allyant.com/" target="_blank">Allyant</a></strong> | We make accessibility simple, seamless, and efficient for organizations—ensuring equitable access to digital, document, and printed information for people with disabilities. For more information, contact: <a href="mailto:dherr@allyant.com">David Herr</a>.</li>
  <li><strong><a href="http://www.ava.me/" target="_blank">Ava</a></strong> | Ava, www.ava.me provides AI & professionally-made real-time captioning services. For more information, contact: <a href="mailto:thibault@ava.me">Thibault Duchemin</a>.</li>
  <li><strong><a href="https://www.CCmaker.com" target="_blank">ClosedCaption Maker</a></strong> | We add subtitles to video to meet Section 508. For more information, contact: <a href="mailto:wgallant@ccmaker.com">Walter Gallant</a>.</li>
  <li><strong><a href="https://crawfordtech.com/industries/government/" target="_blank">Crawford Technologies</a></strong> | CrawfordTech Government Solutions offers simple, fast and affordable solutions for Section 508, ADA and WCAG 2.0 accessibility compliance/conformance. Unlike other companies, we bring cutting-edge accessibility solutions to both the government and public sectors without requiring complex, lengthy service engagements.  Our team of experts is committed to getting your company compliant and keeping you compliant, no matter how often your content changes. They are here to streamline document accessibility, reducing the cost, risk, time and complexity of conformance. For more information, contact: <a href="mailto:kwoedy@crawfordtech.com">Keith Woedy</a>.</li>
  <li><strong><a href="https://www.dotincorp.com/" target="_blank">Dot Inc.</a></strong> | For more information, contact: <a href="mailto:ahrum@dotincorp.con">Ahrum Choi</a>.</li>
  <li><strong><a href="https://e-govmarket.com/" target="_blank">e-GovMarket</a></strong> | For instant pricing, tracking and payment of Section 508 document remediation, try e-GovMarket's <a href="www.e-508.com">e-508.com</a>!  This year, we introduced a small business marketplace to search for qualified firms with various socioeconomic categories. Also new is document status change emails and texts.  Pay with purchase cards and/or through BPA invoices. e-508, e-editor and e-translators are within an AWS FedRAMP cloud.  Try us today! For more information, contact: <a href="mailto:info@e-govmarket.com">Tracye Turner</a>.</li>
  <li><strong><a href="https://www.iaccessible.com" target="_blank">iAccessible</a></strong> | <a href="https://optimalsolutionsgroup.com/">Optimal Solutions Group, LLC</a> has developed iAccessible to scan, test, analyze and report on website accessibility, readability and usability. With our robust microservice offerings, dashboards, role-based access and FedRAMP compliance, we can help organizations efficiently improve their digital experience! For more information, contact: <a href="mailto:info@optimalsolutionsgroup.com">Mark Turner</a>.</li>
  <li><strong><a href="https://www.microassist.com/" target="_blank">Microassist</a></strong> | For more information, contact: <a href="mailto:gspohn@microassist.com">George Sphon</a>.</li>
  <li><strong><a href="https://www.neweditions.net/services/accessibility-services" target="_blank">New Editions Consulting, Inc.</a></strong> | New Editions Consulting, Inc., is an award winning, customer-focused, woman-owned small business with a demonstrated history of managing Federal contracts related to disability and accessibility. With more than 20 years of experience, we help clients understand Section 508 Standards, Web Content Accessibility Guidelines (WCAG) 2.1 Level A, AA, and AAA Success Criteria, and the legal, technical, and policy framework of digital accessibility. For more information, contact: <a href="mailto:CRyan@neweditions.net">Cindy Ryan</a>.</li>
  <li><strong><a href="https://rioglobal.io/" target="_blank">Rio Global</a></strong> | For more information, contact: <a href="mailto:chandra@rioglobal.io">Chandra Sabbavarpu</a>.</li>
  <li><strong><a href="https://www.siteimprove.com/" target="_blank">Siteimprove Inc</a></strong> | For more information, contact: <a href="mailto:rbur@siteimprove.com">Ryan Burs</a> or <a href="mailto:bst@siteimprove.com">Brian Stewart</a>.</li>
  <li><strong><a href="https://www.splashbox.com/" target="_blank">Splashbox Marketing, LLC</a></strong> | Splash Box Marketing is a 508 compliance company that offers a full range of accessibility services for the hard-of-sight community. We believe it’s not just the law, it’s the right thing to do. For more information, contact: <a href="mailto:ryanshade@splashbox.com">Ryan Shade</a> or <a href="mailto:kennythomas@splashbox.com">Kenny Thomas</a>.</li>
  <li><strong><a href="https://standardari.org/" target="_blank">Standard Accessibility Reporting, Inc.</a></strong> | We are a nonprofit membership organization of industry professionals, developing industry consensus standards relating to the scoring and accessibility reporting of website and mobile apps, as well as everyday consumer technology products. For more information, contact: <a href="mailto:chrismlaw@accessibilitytrack.com" target="_blank">Chris Law</a> or <a href="mailto:chair-ceo@accessready.org">Doug Towne</a>.</li>
  <li><strong><a href="https://www.storm-interface.com/" target="_blank">Storm Interface</a></strong> | Storm’s Assistive Technology Products are ADA compliant, designed to offer system navigation by means of audible content description. They allow users with impaired vision, reading difficulties or impaired fine motor skills to navigate through information typically presented visually on a touch screen. Designed for use as the tactile/audio interface for any accessible self-service application such as kiosks, ticketing machines etc. For more information, contact: <a href="mailto:nickys@storm-keypads.com">Nicky Shaw</a>.</li>
  <li><strong><a href="https://www.tcsaccess.com" target="_blank">TCS Access</a></strong> | At TCS Access (TCSA), our mission is to create inclusive workplaces by empowering organizations with tailored assistive technology solutions, personalized training, and accessibility testing to unlock the potential of their diverse workforce. For more information, contact: <a href="mailtomatt.belcher@tcsteams.com">Matt Belcher</a>.</li>
  <li><strong><a href="https://vispero.com/" target="_blank">Vispero - TPGi</a></strong> | For more information, contact: <a href="mailto:jmarindin@vispero.com">Jerry Marindin</a>.</li>
  <li><strong><a href="https://wordwizardsinc.com/" target="_blank">Word Wizards</a></strong> | For more information, contact: <a href="mailto:ben@wordwizardsinc.com">Benjamin Gordon</a>.</li>
  <!-- <li><strong><a href=""></a></strong> | For more information, contact: <a href="mailto:"></a>.</li> -->
</ul>

<div class="border-base radius-lg border-1px" style="margin-top: 1.5em;">
  <div class="padding-1">
    <p class="text-large"><strong>Thank you</strong></p>
    <p>To this year's keynote speakers, presenters, panelists and moderators, our many attendees, exhibitors and volunteers, and to the FDIC's friendly and dedicate staff. Thank you!</p>
  </div>
</div>
<p><strong>Reviewed/Updated: </strong>November 2023</p>
