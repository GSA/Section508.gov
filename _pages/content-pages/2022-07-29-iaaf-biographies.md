---
layout: wide
sidenav: false
permalink: iaaf/biographies-2022/
type: page
title: 'Interagency Accessibility Forum (IAAF) Speaker and Presenter Biographies'
created: 1601325079
---

<p style="text-align:center;"><a href="{{site.baseurl}}/iaaf/">
  <img alt="Annual Interagency Accessibility Forum. October 11 & 13, 2022." src="https://assets.section508.gov/files/bio-images/iaaf-web-banner.png" style="width:100%" /></a>
</p>

<p style="text-align:center;" id="top">
  {% assign last_initial = "" %}
  {% for bio in site.bios_iaaf %}
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
  {% endfor %}
</p>

<div class="usa-graphic-list__row container">
{% assign last_initial = "" %}
{% for bio in site.bios_iaaf %}
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
      <img class="circle-card border-05 border-base-light shadow-1" src="{{ bio.image_url }}" alt="Image of {{ bio.display_name }}" />
    </div>
    <div class="desktop:grid-col-10 tablet:grid-col-10 padding-left-4">
      <h3 id="{{ bio.name }}" class="margin-top-0">{{ bio.display_name }}</h3>
      <p>
        <em><span>{{ bio.position }}</span></em><br /><span>{{ bio.affiliation_long }}</span>
      </p>
      <p>
        <span>
        {{ bio.content | markdownify }}
        </span>
      </p>
      <p>
        <em><span>Panelist: </span></em><a href="{{site.baseurl}}/iaaf/agenda-2021#d1gs1"><em><span>Session_Name</span></em></a>
      </p>
    </div>
  </div>
{% endfor %}

</div>
