---
layout: post
sidenav: true
type: article
title: What's New on Section508.gov? 
permalink: whats-new/
description: "Stay up to date with the latest additions and changes to Section508.gov. This page lists updated content from the past 30 days—making it easy to find new accessibility training, tools, guidance, and policy updates."
created: 2025-07-01
exclude-changelog: true
---

Stay up to date with the latest additions and changes to Section508.gov. This page lists updated content from the past 30 days—making it easy to find new accessibility training, tools, guidance, and policy updates.

{% assign recent_pages = "" | split: "" %}
{% assign fallback_pages = "" | split: "" %}
{% assign today = "now" | date: "%s" %}
{% assign thirty_days_ago = today | minus: 2592000 %}

{%- assign all_entries = site.pages | concat: site.posts -%}

{% for page in all_entries %}
  {% unless page.exclude-changelog %}
    {% assign created_epoch = page.created | date: "%s" | plus: 0 %}
    {% if page.updated %}
      {% assign updated_epoch = page.updated | date: "%s" | plus: 0 %}
    {% else %}
      {% assign updated_epoch = created_epoch %}
    {% endif %}

    {% if updated_epoch > created_epoch %}
      {% assign most_recent_epoch = updated_epoch %}
    {% else %}
      {% assign most_recent_epoch = created_epoch %}
    {% endif %}

    {% assign most_recent_date = most_recent_epoch | plus: 0 %}
    {% assign display_date = page.updated | default: page.created %}
    {% assign description = page.description | strip | replace: "|", "&#124;" %}

    {%- comment -%}
    Pack: title|url|date|description|epoch
    {%- endcomment -%}
    {% assign packed = page.title | append: "|" | append: page.url | append: "|" | append: display_date | append: "|" | append: description | append: "|" | append: most_recent_date %}

    {% if most_recent_date >= thirty_days_ago %}
      {% assign recent_pages = recent_pages | push: packed %}
    {% endif %}

    {% assign fallback_pages = fallback_pages | push: packed %}
  {% endunless %}
{% endfor %}

{% assign sorted_recent = recent_pages | sort_natural | reverse %}
{% assign sorted_fallback = fallback_pages | sort_natural | reverse %}

{% assign recent_count = sorted_recent.size %}
{% if recent_count == 0 %}
  {% assign display_items = sorted_fallback %}
  {% assign display_limit = 5 %}
{% else %}
  {% assign display_items = sorted_recent %}
  {% assign display_limit = recent_count %}
{% endif %}

<ul class="list-item-spacer">
  {% for item in display_items limit:display_limit %}
    {% assign parts = item | split: "|" %}
    <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon">
        <svg class="usa-icon" aria-hidden="true" role="img">
          <use href="{{ site.baseurl }}/assets/img/sprite.svg#thumb_up_alt"></use>
        </svg>
      </div>
      <div class="usa-icon-list__content">
        <a href="{{ parts[1] }}">{{ parts[0] }}</a>
        {% if parts[3] and parts[3] != "" %}
          &mdash; {{ parts[3] }}
        {% endif %}
        ({{ parts[4] | date: "%B %Y" }})
      </div>
    </li>
  {% endfor %}
</ul>

**Reviewed/Updated:** {{ today | date: "%B %Y" }}