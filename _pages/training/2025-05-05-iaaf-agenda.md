---
layout: wide
sidenav: false
type: page
title: Interagency Accessibility Forum (IAAF) Event Agenda - 2025
permalink: iaaf/archives/agenda-2025/
redirect_from: iaaf/agenda-2025/
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
social_img: "assets/images/social-media-og-image-iaaf.jpg"
social_img_alt: "IAAF: Interagency Accessibility Forum"
created: 2025-05-05
---

<h1><a href="{{site.baseurl}}/iaaf/"><img alt="Annual Interagency Accessibility Forum. Ideas that Enable Agencies to Buy, Build, and Be Accessible. Logo and Seals for GSA, IAAF, and U.S. Access Board." src="{{site.baseurl}}/assets/images/iaaf-banner-standard.jpg" style="width:100%" class="border-base radius-lg border-0px"></a></h1>

<div class="program-header margin-bottom-2" style="margin-top: 2em;">
  <b><span class="text-large">PROGRAM:</span> Day 1/Tuesday, May 20th | <a href="#day2" title="Skip to Day 2 Program">Day 2/Wednesday, May 21st</a></b>
</div>

{% for day in site.data.iaaf_sessions.iaaf_2025 %}
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
                          <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/archives/biographies-2025#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.affiliation_short }}    
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
                        <span class="speaker-name"><a href="{{site.baseurl}}/assets/files/iaaf/2025/{{download.file_name}}" target="_blank">{{ download.link_name }}</a></span>
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
                        <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/archives/biographies-2025#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.position}}, {{ bio.affiliation_long }}    
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
                      <span class="speaker-name"><a href="{{site.baseurl}}/assets/files/iaaf/2025/{{download.file_name}}" target="_blank">{{ download.link_name }}</a></span>
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
                      <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/archives/biographies-2025#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.position}}, {{ bio.affiliation_long }}    
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
                    <span class="speaker-name"><a href="{{site.baseurl}}/assets/files/iaaf/2025/{{download.file_name}}" target="_blank">{{ download.link_name }}</a></span>
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

<!-- 
<div class="border-base radius-lg border-1px" style="margin-top: 1.5em;">
  <div class="padding-1">
    <p class="text-large"><strong>Thank you</strong></p>
    <p>To this year's keynote speakers, presenters, panelists and moderators, our many attendees, exhibitors and volunteers, and to the FDIC's friendly and dedicate staff. Thank you!</p>
  </div>
</div>
-->

**Reviewed/Updated:** May 2025
