---
layout: post
sidenav: true
type: article
title: What's New on Section508.gov? 
permalink: whats-new/
description: "Stay up to date with the latest additions and changes to Section508.gov. This page lists updated content from the past 30 days—making it easy to find new accessibility training, tools, guidance, and policy updates."
created: 2025-07-01
updated: 2025-08-10
exclude-changelog: true
---

Stay up to date with the latest additions and changes to Section508.gov. This page displays the most recent content updates—making it easy to find new accessibility training, tools, guidance, and policy updates.

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

    {% assign most_recent_epoch = updated_epoch | plus: 0 %}
    {% assign display_date = page.updated | default: page.created %}
    {% assign description = page.description | strip | replace: "|", "&#124;" %}

    {%- comment -%}
    Reversed order: epoch|title|url|date|description — for sorting
    {%- endcomment -%}
    {% assign packed = most_recent_epoch | append: "|" | append: page.title | append: "|" | append: page.url | append: "|" | append: display_date | append: "|" | append: description %}

    {% if most_recent_epoch >= thirty_days_ago %}
      {% assign recent_pages = recent_pages | push: packed %}
    {% endif %}

    {% assign fallback_pages = fallback_pages | push: packed %}
  {% endunless %}
{% endfor %}

{%- assign sorted_recent = recent_pages | sort_natural | reverse -%}
{%- assign sorted_fallback = fallback_pages | sort_natural | reverse -%}

{% assign display_items = "" | split: "" %}

{%- comment -%}
Build combined list:
1. recent items first
2. then older fallback items
3. remove duplicates
4. take top 5
{%- endcomment -%}

{% assign combined = sorted_recent | concat: sorted_fallback %}

{%- comment -%}
Remove duplicates: since packed strings are unique by epoch, we can use uniq
{%- endcomment -%}
{% assign combined = combined | uniq %}

{%- comment -%}
Take only the top 5
{%- endcomment -%}
{% assign source_items = combined | slice: 0, 5 %}

{%- comment -%}
Restore original order for display: title|url|date|description|epoch
{%- endcomment -%}
{% for item in source_items limit:display_limit %}
  {% assign parts = item | split: "|" %}
  {% assign restored = parts[1] | append: "|" | append: parts[2] | append: "|" | append: parts[3] | append: "|" | append: parts[4] | append: "|" | append: parts[0] %}
  {% assign display_items = display_items | push: restored %}
{% endfor %}

<ul class="list-item-spacer">
  {% for item in display_items %}
    {% assign parts = item | split: "|" %}
    <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-blue">
        <svg class="usa-icon" aria-hidden="true" role="img">
          <use href="{{ site.baseurl }}/assets/img/sprite.svg#thumb_up_alt"></use>
        </svg>
      </div>
      <div class="usa-icon-list__content">
        <a href="{{site.baseurl}}{{ parts[1] }}">{{ parts[0] }}</a>
        {% if parts[3] and parts[3] != "" %}
          &mdash; {{ parts[3] }}
        {% endif %}
        ({{ parts[4] | date: "%B %Y" }})
      </div>
    </li>
  {% endfor %}
</ul>

**Reviewed/Updated:** {{ today | date: "%B %Y" }}