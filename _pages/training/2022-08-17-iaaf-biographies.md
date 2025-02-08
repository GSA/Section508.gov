---
layout: wide
sidenav: false
permalink: iaaf/archives/biographies-2022/
type: page
title: 'Interagency Accessibility Forum (IAAF) Speaker and Presenter Biographies'
created: 1601325079
topic: "Events (events)"
sub-topic: "N/A"
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

<p style="text-align:center;" id="top">
  {% assign last_initial = "" %}
  {% assign this_year = 2022 %}
  {% for bio in site.bios_iaaf %}
    {% if bio.iaaf_years == this_year or bio.iaaf_years contains this_year%}
      {% assign last_initial_new = bio.last_name | slice: 0 %}
      {% assign last_initial_new = last_initial_new | upcase %}
      {% if last_initial_new != last_initial %}
        {% if last_initial == "" %}
          <a class="" href="#{{ last_initial_new }}">{{ last_initial_new }}<span class="usa-sr-only"> Section</span></a>
        {% else %}
          | <a class="" href="#{{ last_initial_new }}">{{ last_initial_new }}<span class="usa-sr-only"> Section</span></a>
        {% endif %}
      {% endif %}
      {% assign last_initial = last_initial_new %}  
    {% endif %}
  {% endfor %}
</p>

<div class="usa-graphic-list__row container">
{% assign last_initial = "" %}
{% assign this_year = 2022 %}
{% for bio in site.bios_iaaf %}
  {% if bio.iaaf_years == this_year or bio.iaaf_years contains this_year%}
    {% assign last_initial_new = bio.last_name | slice: 0 %}
    {% assign last_initial_new = last_initial_new | upcase %}
    {% if last_initial_new != last_initial %}
    <h2 id="{{ last_initial_new }}">
      <strong>{{ last_initial_new }}</strong>
    </h2>
    {% endif %}
    {% assign last_initial = last_initial_new %}  
    <!-- NEW BIO -->
    <div class="grid-row border-bottom-1px border-base-lighter ">
      <div class="desktop:grid-col-2 tablet:grid-col-2">
        <img class="circle-card border-05 border-base-light shadow-1" src="{{ site.baseurl }}{{ bio.image_url }}" alt="Image of {{ bio.display_name }}" />
      </div>
      <div class="desktop:grid-col-10 tablet:grid-col-10 padding-left-4">
        <h3 id="{{ bio.bio_id }}" class="margin-top-0">{{ bio.display_name }}</h3>
        <p>
          <em><span>{{ bio.position }}</span></em><br /><span>{{ bio.affiliation_long }}</span>
        </p>
        <p>
          <span>
          {{ bio.content | markdownify }}
          </span>
        </p>
        <p>
        <!-- for each day/session/role -->
          {% for day in site.data.iaaf_sessions.iaaf_2022 %}
            {% for session in day.sessions %}
              {% if session.roles %}
                {% for role in session.roles %}
                  {% if role.who contains bio.bio_id %}
                    <em><span>{% if role.name %}{{ role.name }}: {% else %}Speaker: {% endif %}</span></em><a href="{{site.baseurl}}/iaaf/archives/agenda-2022#{{ session.session_id }}"><em><span>{% if session.subtitle %} {{ session.subtitle }}{% else %} {{ session.name }}{% endif %}</span></em></a>, Day {{ day.day }}<br> 
                  {% endif %}
                {% endfor %}
              {% endif %}
              {% if session.tracks %}
                {% for track in session.tracks %}
                  {% for role in track.roles %}
                    {% if role.who contains bio.bio_id %}
                    <em><span>{% if role.name %}{{ role.name }}: {% else %}Speaker: {% endif %}</span></em><a href="{{site.baseurl}}/iaaf/archives/agenda-2022#{{ track.track_id }}"><em><span> {{ track.name_breakout }}</span></em></a>, Day {{ day.day }}<br> 
                  {% endif %}
                  {% endfor %}
                {% endfor %}
              {% endif %}
            {% endfor %}
          {% endfor %}
        </p>
      </div>
    </div>
    <br>
  {% endif %}
{% endfor %}
</div>
<p><strong>Reviewed/Updated: </strong>October 11, 2022</p>