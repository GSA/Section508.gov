---
layout: page
sidenav: true
permalink: manage/accessibility-faq/
type: manage
title: "ICT Accessibility Frequently Asked Questions"
topic: "Manage (program)"
sub-topic: "Accessibility Standards, Procedures, Guidance, Best Practices"
audience:
- "federal employee (fedemp)"
- "508 Program Manager (508pm)"
- "Website Managers/Content Managers (wcm)"
- "Information Technology Program and Project Managers (itpm)"
- "Content Creators (creator)"
resource-type: "Long form article"
format: "HTML (html)"
---
<!-- Expand/Collapse All "Accessibility FAQ" Content -->
<div class="margin-bottom-3">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

{% for faq in site.data.accessibility_faq %}
<div class="usa-accordion">
    <h2 class="usa-accordion__heading faq_heading" id="q-{{ faq.id }}">
        <button type="button" class="usa-accordion__button faq_button" aria-expanded="false" aria-controls="a-{{ faq.id }}">
        {{ faq.q }}
        </button>
    </h2>
    <div id="a-{{ faq.id }}" class="usa-accordion__content faq_content usa-prose">
        <div class="margin-x-auto">
        {{ faq.a | markdownify }}
        </div>
    </div>
</div>
{% endfor %}

**Reviewed/Updated:** March 2024

<!-- Expand/Collapse All Accessibility FAQ Content script -->
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

<!-- Unhide hash/anchor from external url -->
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