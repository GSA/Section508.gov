---
layout: wide
sidenav: false
permalink: iaaf/archives/agenda-2022/
redirect_from: iaaf/agenda-2022/
type: page
title: Interagency Accessibility Forum (IAAF) Event Agenda - 2022
created: 1600981839
---

<h1><a href="{{site.baseurl}}/iaaf/"><img alt="Annual Interagency Accessibility Forum. October 11 - 13, 2022. Unlocking the Power of Accessibility." src="https://assets.section508.gov/files/images/iaaf-2022-web-banner.png" style="width:100%" class="border-base radius-lg border-0px"></a></h1>

<div class="program-header margin-bottom-2" style="margin-top: 2em;">
  <b><span class="text-large">PROGRAM</span> Day 1/Tuesday, October 11th | <a href="#day2" title="Skip to Day 2 Program">Day 2/Wednesday, October 12th</a> | <a href="#day3" title="Skip to Day 3 Program">Day 3/Thursday, October 13th</a></b>
</div>

{% for day in site.data.iaaf_sessions.iaaf_2022 %}
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
        <div class="grid-col-12 cell dark padding-1">{{ session.time_start | date: "%l:%M %p" }} – {{ session.time_end | date: "%l:%M %p" }}<br><span class="session-type">{{ session.name }}</span></div>
      </div>
      {% else %}
        <div class="grid-row">
          <div class="desktop:grid-col-3 tablet:grid-col-3 cell {{ session-class }} padding-1" id="{{ session.session_id }}">
            {{ session.time_start | date: "%l:%M %p" }} – {{ session.time_end | date: "%l:%M %p" }}<br>
            <span class="session-type">{{ session.name }}</span>
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
                          <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/biographies-2022#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.affiliation_short }}    
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
                        <span class="speaker-name"><a href="https://assets.section508.gov/files/presentations/iaaf/{{download.file_name}}" target="_blank">{{ download.link_name }}</a></span>
                      </div>
                    {% endfor %}
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
                        <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/biographies-2022#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.position}}, {{ bio.affiliation_long }}    
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
                      <span class="speaker-name"><a href="https://assets.section508.gov/files/presentations/iaaf/{{download.file_name}}" target="_blank">{{ download.link_name }}</a></span>
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
                      <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/biographies-2022#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.position}}, {{ bio.affiliation_long }}    
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
                    <span class="speaker-name"><a href="https://assets.section508.gov/files/presentations/iaaf/{{download.file_name}}" target="_blank">{{ download.link_name }}</a></span>
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

<h2>Virtual Vendors</h2>
<p>Virtual Vendor participation was performed through an open registration and selected on a first-come, first-serve basis. The Federal CIO Council, GSA, partner agencies and other contributing agencies do not endorse the products, services, and claims of participating vendors.</p>
<p>Explore products and services designed to support and enhance the lives of people with disabilities.</p>
<ul>
<li><strong><a href='https://www.5Moes.com'>5 Guys Named Moe, Inc.</a></strong>: We provide full Audio Description services (producing, writing, casting, recording, mixing and deliverables) for all media formats. For more information, contact: <a href='mailto:sethkrugliak@5moes.com'>Seth Krugliak </a>.</li>
<li><strong><a href='https://www.Access2Online.com'>Access2online Inc.</a></strong> (Find in GSA Contract # 47QTCA21D004D): We audit websites, remediate documents like PDFs, caption videos, and provide extended audio descriptions. We have 15 Trusted Testers certified by the federal Office of Accessible Systems and Technology. For more information, contact: <a href='mailto:pshikli@access2online.com'>Peter Shikli</a>.</li>
<li><strong><a href='https://www.accessibilityoz.com/products/ozart/'>AccessibilityOz</a></strong>: AccessibilityOz ART is an innovative accessibility reporting tool that makes it easy to comprehensively report on and maximize your site or app's accessibility. For more information, contact: <a href='mailto:gian@accessibilityoz.com'>Gian Wild </a>.</li>
<li><strong><a href='https://www.Allyant.com'>Allyant (CommonLook)</a></strong> (Find in GSA Schedule GS-35F-0161V): We offer many accessibility services and software solutions, spanning print and digital document remediation services, document remediation software, and digital accessibility auditing. For more information, contact: <a href='mailto:dsullivan@allyant.com'>Daniel Sullivan </a>.</li>
<li><strong><a href='https://www.AudioDescribe.com'>Audio Description Associates, LLC</a></strong> (Find in GSA Schedule GS-10F-0490X): Audio description: production, training, consultation. If captioning is also required, we provide captioning through a subcontract with VITAC. For more information, contact: <a href='mailto:jsnyder@audiodescribe.com'>Joel Snyder </a>.</li>
<li><strong><a href='https://www.e-508.com'>e-GovMarket, LLC</a></strong>: e-508 provides instant pricing, tracking and payment for document accessibility remediation. Users can search for prices from a marketplace of small firms, establish BPAs, and select standards. For more information, contact: <a href='mailto:tturner@e-govmarket.com'>Tracye Turner </a>.</li>
<li><strong><a href='https://equidox.co/'>Equidox Software Company</a></strong>: Equidox enables PDF accessibility through intelligent, automated solutions. Our software integrates automation to make remediation 90% faster for novice or pro users. Usable on-prem or cloud-based. For more information, contact: <a href='mailto:nina@onixnet.com'>Nina Overdorff </a>.</li>
<li><strong><a href='https://speechtotextcaptioning.org/'>Global Alliance of Speech-to-Text Captioning</a></strong>: Join us at the Global Alliance of Speech-to-Text Captioning! You will learn about different captioning methods and what to look for when procuring captioning services. We are a 501(c)(6) nonprofit. For more information, contact: <a href='mailto:info@speechtotextcaptioning.org'>Jennifer Schuck </a>.</li>
<li><strong><a href='https://iaccessible.com/'>iAccessible</a></strong>: At iAccessible, we perform automated testing and streamlined manual testing based on statistical sampling techniques to get the best accessibility conformance results. For more information, contact: <a href='mailto:lvelarde@optimalsolutionsgroup.com'>Luis Velarde</a>.</li>
<li><strong><a href='https://www.InnoCaption.com'>InnoCaption</a></strong>: InnoCaption is a mobile app for real-time captioning of phone calls through live stenographers or automated speech recognition - the user is in control. We are a certified IP CTS provider by the FCC. For more information, contact: <a href='mailto:cristina@innocaption.com'>Cristina Duarte</a>.</li>
<li><strong><a href='https://www.idcdigital.com/'>International Digital Center</a></strong>: Award winning, internationally recognized leaders in Audio Description. We feature the most diverse roster of talent in the industry including nearly two dozen members of the blind community. For more information, contact: <a href='mailto:Eric.W@IDCDigital.com'>Eric Wickstrom</a>.</li>
<li><strong><a href='https://www.JoyfulSigning.com'>Joyful Signing</a></strong> (Find in GSA Schedule 00CORP, and Schedule 70): Joyful Signing provides sign language interpretation and captioning services. For more information, contact: <a href='mailto:greg@joyfulsigning.com'>Greg Archambault</a>.</li>
<li><strong><a href='https://www.microassist.com/federal/'>Microassist</a></strong>: Microassist offers custom learning development, Section 508 accessibility compliance testing and remediation, document remediation, and digital training for government agencies. For more information, contact: <a href='mailto:drichard@microassist.com'>Dallas Richard</a>.</li>
<li><strong><a href='https://neweditions.net/services/accessibility-services'>New Editions Consulting</a></strong> (Find in <A href="https://neweditions.net/contract-info/contract-vehicles">Contract Vehicles</a>): New Editions provides unparalleled services in helping our clients implement Section 508 requirements, as well as conform to Section 508 standards and Success Criteria of the Web Content Accessibility Guidelines (WCAG 2.1 AAA). We provide advisory support to some of the Federal government’s largest civilian agencies, including support to develop policies and procedures to guide agency-wide implementation of Section 508 requirements. We also provide ongoing support to agencies to evaluate accessibility and help remediate conformance for websites, applications, electronic documents and other forms of Information and Communication Technology (ICT). For more information, contact: <a href='mailto:cryan@neweditions.net'>Cindy Ryan</a>.</li>
<li><strong><a href='https://iaccessible.com/'>Optimal Solutions Group</a></strong> (Find in GSA MAS; GSA Schedule 70; GSA OASIS SB Pool 1): iAccessible is SaaS that provides on-demand automated accessibility testing of websites, software applications, and documents combined with manual testing performed by DHS Trusted Testers. For more information, contact: <a href='mailto:info@iaccessible.com'>Mark Turner</a>.</li>
<li><strong><a href='http://rioglobal.io'>Rio Global</a></strong> (Find in GSA Schedule, NASA SEWP): AccessBot is a dedicated accessibility testing software with inbuilt support for the revised section 508 standards and the W3C Web Content Accessibility Guidelines (WCAG). It is a web-based tool. For more information, contact: <a href='mailto:chandra@rioglobal.io'>Chandra Sabbavarpu</a>.</li>
<li><strong><a href='https://youtube.com/channel/UCrbfJznG_DvUZojfyMAgB5Q'>Talking Eye Productions</a></strong>: Turnkey Audio description writing, recording, and post-production for videos for accessibility for the visually impaired. For more information, contact: <a href='mailto:PattiWong12@gmail.com'>Patti Wong</a>.</li>
<li><strong><a href='https://www.tpgi.com'>TPG Interactive</a></strong> (Find in GSA, SEWP, ITES): TPGi is a full-spectrum accessibility solutions provider. We offer a variety of software products and services intended to support enterprise organizations with their accessibility needs or programs. For more information, contact: <a href='mailto:tbrown@tpgi.com'>Travis Brown</a>.</li>
</ul>
<div class="border-base radius-lg border-1px" style="margin-top: 1.5em;">
  <div class="padding-1">
    <p class="text-large"><strong>Thank you</strong></p>
    <p>To all keynote speakers; breakout session moderators and panelists; attendees; IAAF volunteers, exhibitors and volunteers.</p>
  </div>
</div>
<p><strong>Reviewed/Updated: </strong>October 13, 2022</p>
