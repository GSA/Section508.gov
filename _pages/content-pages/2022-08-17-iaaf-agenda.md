---
layout: wide
sidenav: false
permalink: iaaf/agenda-2022/
type: page
title: Interagency Accessibility Forum (IAAF) Event Agenda - 2022
created: 1600981839
---

<h1><a href="{{site.baseurl}}/iaaf/"><img alt="Annual Interagency Accessibility Forum. October 11 - 13, 2023. Accessibility: A foundation for inclusion, diversity, and equity" src="https://assets.section508.gov/files/bio-images/iaaf-web-banner.png" style="width:100%" class="border-base radius-lg border-0px"></a></h1>

<div class="program-header margin-bottom-2" style="margin-top: 2em;">
  <b><span class="text-large">PROGRAM</span> Day 1/Tuesday, October 11th | <a href="#progday2" title="Skip to Day 2 Program">Day 2/Wednesday, October 12th</a> | <a href="#progday3" title="Skip to Day 3 Program">Day 3/Thursday, October 13th</a></b>
</div>

{% for day in site.data.iaaf_sessions.iaaf_2022 %}
  <!-- BEGIN DAY {{ day.day }} -->
  <h2 class="font-body-lg" id="progday2">PROGRAM Day {{ day.day }}: {{ day.time_start | date: "%A, %B %d" }}</h2>
  
  <div class="usa-graphic-list__row container" id="day{{ day.day }}">
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
                  {% assign moderators = track.roles | where: "name", "Moderator" %}
                  {% assign panelists = track.roles | where: "name", "Panelist" %}
                  <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                    <span class="session-type text-highlight">Moderator:</span>
                  </div>
                    {% for moderator in moderators %}
                      {% assign bio_id = moderator.who %}
                      {% for bio in site.bios_iaaf %}
                        {% if bio.bio_id == bio_id %}
                        <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                          <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/biographies-2022#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.affiliation_short }}    
                        </div>
                        {% endif %}
                      {% endfor %}
                    {% endfor %}
                  <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                    <span class="session-type text-highlight">Panelists:</span>
                  </div>
                    {% for panelist in panelists %}
                      {% assign bio_id = panelist.who %}
                      {% for bio in site.bios_iaaf %}
                        {% if bio.bio_id == bio_id %}
                        <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                          <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/biographies-2022#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.affiliation_short }}    
                        </div>
                        {% endif %}
                      {% endfor %}
                    {% endfor %}
                  {% if track.downloads %}
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
              <div class="desktop:grid-col-9 tablet:grid-col-9 cell {{ descr-class }} agenda-description padding-1">
                <span class="session-type padding-top-1 padding-left-sm padding-right-sm">{{ session.subtitle }}</span>
                <span class="session-description padding-top-1 padding-left-sm padding-right-sm">{{ session.description }}</span>
                {% assign noroles = session.roles | where: "name", nil %}
                {% assign moderators = session.roles | where: "name", "Moderator" %}
                {% assign panelists = session.roles | where: "name", "Panelist" %}
                {% if noroles.size > 0 %}
                  {% for speaker in noroles %}
                    {% assign bio_id = speaker.who %}
                    {% for bio in site.bios_iaaf %}
                      {% if bio.bio_id == bio_id %}
                      <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                        <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/biographies-2022#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.position }}, {{ bio.affiliation_long }}
                      </div>
                      {% endif %}
                    {% endfor %}
                  {% endfor %}
                {% endif %}
                {% if moderators.size > 0 %}
                  <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                    <span class="session-type text-highlight">Moderator:</span>
                  </div>
                  {% for moderator in moderators %}
                    {% assign bio_id = moderator.who %}
                    {% for bio in site.bios_iaaf %}
                      {% if bio.bio_id == bio_id %}
                      <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                        <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/biographies-2022#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.position }}, {{ bio.affiliation_long }}
                      </div>
                      {% endif %}
                    {% endfor %}
                  {% endfor %}
                {% endif %}
                {% if panelists.size > 0 %}
                  <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                  <span class="session-type text-highlight">Panelists:</span>
                </div>
                  {% for panelist in panelists %}
                    {% assign bio_id = panelist.who %}
                    {% for bio in site.bios_iaaf %}
                      {% if bio.bio_id == bio_id %}
                      <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                        <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/biographies-2022#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{ bio.position }}, {{ bio.affiliation_long }}
                      </div>
                      {% endif %}
                    {% endfor %}
                  {% endfor %}
                {% endif %}
                {% if track.downloads %}
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
              <div class="desktop:grid-col-9 tablet:grid-col-9 cell {{ descr-class }} agenda-description padding-1">
              {% assign noroles = session.roles | where: "name", nil %}
              {% assign introductions = session.roles | where: "name", "Introduction" %}
              {% if session.subtitle %}
                <span class="session-type padding-top-1 padding-left-sm padding-right-sm">{{ session.subtitle }}</span>
              {% endif %}
              {% for role in noroles %}
                {% assign bio_id = role.who %}
                {% for bio in site.bios_iaaf %}
                  {% if bio.bio_id == bio_id %}
                    <div class="speaker-info padding-top-1">
                      <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/biographies-2022#{{ bio_id }}">{{ bio.display_name }}</a></b></span>
                      <span>{{ bio.position }}, {{ bio.affiliation_long }}</span>
                    </div>      
                  {% endif %}
                {% endfor %}
              {% endfor %}
              {% if introductions.size > 0 %}
                  <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                    <span class="session-type text-highlight">Introduction:</span>
                  </div>
                {% for role in introductions %}
                  {% assign bio_id = role.who %}
                    {% for bio in site.bios_iaaf %}
                      {% if bio.bio_id == bio_id %}
                      <div class="speaker-info padding-top-1 padding-left-sm padding-right-sm">
                        <span class="speaker-name"><b><a href="{{site.baseurl}}/iaaf/biographies-2022#{{ bio_id }}">{{ bio.display_name }}</a></b>, </span>{{bio.position}}, {{ bio.affiliation_long }}    
                      </div>
                      {% endif %}
                    {% endfor %}
                {% endfor %}
              {% endif %}
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
<p><strong>Reviewed/Updated: </strong>August 15, 2022</p>
