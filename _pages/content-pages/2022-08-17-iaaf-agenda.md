---
layout: wide
sidenav: false
permalink: iaaf/agenda-2022/
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
                        <span class="speaker-name"><a href="https://assets.section508.gov/files/bio-images/presentations/{{download.file_name}}" target="_blank">{{ download.link_name }}</a></span>
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
                      <span class="speaker-name"><a href="https://assets.section508.gov/files/bio-images/presentations/{{download.file_name}}" target="_blank">{{ download.link_name }}</a></span>
                    </div>
                  {% endfor %}
                {% endif %}
              </div>
            {% elsif session.roles and session.type != "panel" %}
            <!-- GENERAL SESSION -->
              <div class="desktop:grid-col-9 tablet:grid-col-9 cell {{ descr-class }} agenda-description padding-1">
              {% if session.subtitle %}
                <span class="session-type padding-top-1 padding-left-sm padding-right-sm">{{ session.subtitle }}</span>
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
              </div>
            {% endif %}
        </div>
      {% endif %}
    {% endfor %}
  </div>
{% endfor %}

<div class="border-base radius-lg border-1px" style="margin-top: 1.5em;">
  <div class="padding-1">
    <p class="text-large"><strong>Thank you</strong></p>
    <p>To all keynote speakers; breakout session moderators and panelists; attendees; IAAF volunteers, exhibitors and volunteers.</p>
  </div>
</div>
<p><strong>Reviewed/Updated: </strong>September 29, 2022</p>
