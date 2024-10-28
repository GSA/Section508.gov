---
layout: page
sidenav: true
permalink: manage/section-508-assessment/faq/
type: manage
title: "Government-wide Section 508 Assessment Frequently Asked Questions"
topic: "Manage (program)"
sub-topic: "Reporting"
audience:
- "508 Program Manager (508pm)"
- "Agency Head (head)"
- "Public (public)"
- "Federal employee (fedemp)"
- "Lawmakers and Policy Officials (law-policy)"
resource-type: "Long form article"
format: "HTML (html)"
---
<!-- Expand/Collapse All "Understanding" Content -->
<div class="margin-bottom-3">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

{% assign current_h = "" %} 
{% comment %} Headings are: (1xx) Overview, (2xx) Submitting Data, (3xx) Interpreting Criteria, (4xx) Point of Contact Information, (5xx) Assistance. To reference directly, append '#q-id', e.g., section508.gov/manage/section-508-assessment/faq/#q-101 {% endcomment %}

{% for faq in site.data.gwaa_faq %}

{% if faq.h == current_h %} 
    {% comment %}Do nothing{% endcomment %}
{% else %}
{% assign current_h = faq.h %}
<h2>{{faq.h}}</h2>
{% endif %}
<div class="usa-accordion">
    <h3 class="usa-accordion__heading faq_heading" id="q-{{ faq.id }}">
        <button type="button" class="usa-accordion__button faq_button" aria-expanded="false" aria-controls="a-{{ faq.id }}">
        {{ faq.q }}
        </button>
    </h3>
    <div id="a-{{ faq.id }}" class="usa-accordion__content faq_content usa-prose">
        <div class="margin-x-auto">
        {{ faq.a | markdownify }}
        </div>
    </div>
</div>
{% endfor %}

**Reviewed/Updated:** July 2024

<!-- Expand/Collapse All Understanding Content script -->
<script>
    $("#expand-all").on("click", function (){
        $(".faq_button").attr("aria-expanded", "true");
        $(".faq_content").removeAttr("hidden");
    });
    $("#collapse-all").on("click", function (){
        $(".faq_button").attr("aria-expanded", "false");
        $(".faq_content").attr("hidden","");
    });
</script>

<!-- Unhide hash/anchor from external url (#q-id, e.g., #q-2) -->
<script>
    $(function(){
        var window_hash = window.location.hash;
        if ($(window_hash).hasClass("faq_heading")){
            let a_hash = window_hash.replace("q", "a");
            $(a_hash).removeAttr("hidden");
            $(a_hash).prev().children(".faq_button").attr("aria-expanded", "true");
        }
    });
</script>