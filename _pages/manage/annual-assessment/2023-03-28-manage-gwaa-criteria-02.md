---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-02/
type: manage
title: "IT Accessibility Program Office - Government-wide Section 508 Assessment Criteria"
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

<H2 id="it-accessibility-program-office">IT Accessibility Program Office</H2>
<p>This section asks about your reporting entity's program management, reporting, benchmarking, risk management, continuous process improvement, and other business-related functions that align to the development, implementation, and maintenance of your reporting entity's Section 508 program or equivalent. </p>

<!-- Expand/Collapse All "Understanding" Content -->
<!-- Commented out as page has less than 1 Understanding
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>
-->
<div class="usa-card-group">
<!-- begin insert criteria -->
{% for each in site.data.gwaa_criteria_understanding %}
    {% if each.dimension == "program" %} {% comment %}Dimensions: general, program, policies, communications, content, hr, lifecycle, testing, acquisition, training, conformance{% endcomment %}
    {% assign this-qid = each.qid %}
    {% assign this-uid = each.uid %}
    <div id="{{ this-qid }}" class="usa-card tablet:grid-col-12">
        <div class="usa-card__container border-top">
            <div class="usa-card__header">
                <h3 class="usa-card__heading"> Question {{ this-qid | replace: "q", "" }}</h3>
            </div>
            <div class="usa-card__body">
                <p><strong>{{ each.q-descr }}</strong></p>
                {% if each.q-type %}
                <p>{{ each.q-type }}</p>
                {% endif %}
                {{ each.q-options }}
                {% if each.q-note %}
                <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE: </strong> {{ each.q-note }}</p>
                </div>
                {% endif %}
            </div>
            {% if each.uid %}
            <div class="border-top-05 border-primary margin-top-1">
                <div class="usa-accordion">
                    <h4 class="usa-accordion__heading">
                        <button
                        type="button"
                        class="usa-accordion__button understand_button padding-left-3 radius-bottom-lg"
                        aria-expanded="false"
                        aria-controls="{{ each.uid }}"
                        >
                        Understanding Question {{ each.uid | replace: "u", "" }}
                        </button>
                    </h4>
                    <div id="{{ each.uid }}" class="usa-accordion__content understand_content usa-prose padding-x-3 padding-y-0 bg-primary-lighter text-primary-darker border-top-05 border-primary radius-bottom-lg">
                        <div class="margin-x-auto margin-y-0">
                            {{ each.u-descr | markdownify }}
                        </div>
                    </div>
                </div>
            </div>
        {% endif %}
        </div>
    </div>
  {% endif %}
{% endfor %}
<!-- end insert criteria -->
</div>

<div id="prev-next-section">
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-01/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-03/"> Next > </a>
</div>

**Reviewed/Updated:** April 2024

<!-- Expand/Collapse All Understanding Content script -->
<script>
    $("#expand-all").on("click", function (){
        $(".understand_button").attr("aria-expanded", "true");
        $(".understand_button").toggleClass("radius-bottom-lg");
        $(".understand_content").removeAttr("hidden");
    });
    $("#collapse-all").on("click", function (){
        $(".understand_button").attr("aria-expanded", "false");
        $(".understand_button").toggleClass("radius-bottom-lg");
        $(".understand_content").attr("hidden","");
    });
    $(".understand_button").on("click", function(){
        $(this).toggleClass("radius-bottom-lg");
    });
</script>

<!-- Unhide hash/anchor from external url -->
<script>
    $(function(){
        var window_hash = window.location.hash;
        if ($(window_hash).hasClass("usa-card")){
            let u_hash = window_hash.replace("q", "u");
            $(u_hash).removeAttr("hidden");
            $(u_hash).prev().children(".understand_button").attr("aria-expanded", "true");
            $(u_hash).prev().children(".understand_button").toggleClass("radius-bottom-lg");
        }
    });
</script>