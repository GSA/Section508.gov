---
layout: page
sidenav: true
permalink: manage/section-508-assessment/faq/
type: manage
title: "Government-wide Section 508 Assessment Frequently Asked Questions"
---
<!-- Expand/Collapse All "Understanding" Content -->
<div class="margin-bottom-3">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

{% for faq in site.data.gwaa_faq %}
<div class="usa-accordion">
    <h2 class="usa-accordion__heading">
        <button type="button" class="usa-accordion__button faq_button" aria-expanded="false" aria-controls="faq-{{ faq.id }}">
        {{ faq.q }}
        </button>
    </h2>
    <div id="faq-{{ faq.id }}" class="usa-accordion__content faq_content usa-prose">
        {{ faq.a | markdownify }}
    </div>
</div>
{% endfor %}

**Reviewed/Updated:** May 2023

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