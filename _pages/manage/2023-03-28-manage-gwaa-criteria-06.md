---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-06/
type: manage
title: "Human Capital, Culture, and Leadership - Government-wide Section 508 Assessment Criteria"
---

<H2 id="human-capital-culture-and-leadership">Human Capital, Culture, and Leadership</H2>
<p>This section asks about your agency's leadership and professional development, and how ICT accessibility is integrated into mission-related strategic planning. </p>

<!-- Expand/Collapse All "Understanding" Content -->
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

<div class="usa-card-group">
<!-- begin insert criteria -->

<!-- Q:038-->
<div id="q38" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 38 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how your agency includes ICT accessibility as a core value in your DEIA and/or
                    mission-related strategic planning. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency has not defined any ICT accessibility related goals or objectives</li>
                <li>Agency plans to update ICT accessibility core values in the DEIA and/or mission-related strategic
                    plan in the next strategic plan update (less than 5 years)</li>
                <li>Agency is expected to update ICT accessibility core values in the DEIA and/or mission-related
                    strategic plan in the next strategic plan update (1-3 years)</li>
                <li>Agency is currently updating ICT accessibility core values in the DEIA and/or mission-related
                    strategic plan in the next strategic plan update (less than 1 year)</li>
                <li>ICT accessibility core values have been included in the agency DEIA and/or mission-related strategic
                    plan, and leadership regularly communicates this core value</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u38" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
        {% for each in site.data.gwaa_understanding %}
            {% if each.uid == this-uid %}
            <!-- Understanding -->
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
                            {{ each.descr | markdownify }}
                        </div>
                    </div>
                </div>
            </div>
            {% endif %}
        {% endfor %}
    </div>
</div>
<!-- Q:039-->
<div id="q39" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 39 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate if your agency includes Section 508 conformance in ICT-related leadership and
                    management performance plans. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>No, and have no plans to do so</li>
                <li>No, but agency has a timetable to begin implementation</li>
                <li>Yes, for some ICT leadership and management performance plans</li>
                <li>Yes, for a majority of ICT leadership and management performance plans</li>
                <li>Yes, for all or almost all ICT leadership and management performance plans</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u39" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
        {% for each in site.data.gwaa_understanding %}
            {% if each.uid == this-uid %}
            <!-- Understanding -->
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
                            {{ each.descr | markdownify }}
                        </div>
                    </div>
                </div>
            </div>
            {% endif %}
        {% endfor %}
    </div>
</div>
<!-- Q:040-->
<div id="q40" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 40 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how your agency integrates ICT accessibility skills and capabilities into competency
                    and professional development planning for agency staff who are responsible for ensuring ICT is
                    accessible. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency has not integrated ICT accessibility into professional development plans for responsible
                    staff, and has no plans to do so</li>
                <li>Agency has not integrated ICT accessibility into professional development plans for responsible
                    staff, but plans to do so</li>
                <li>Agency includes ICT accessibility into professional development plans for some responsible staff
                </li>
                <li>Agency includes ICT accessibility into professional development plans for most responsible staff
                </li>
                <li>Agency includes ICT accessibility into professional development plans for most responsible staff,
                    and continually updates capabilities and professional development plans to address emerging trends
                    and technologies</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u40" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
        {% for each in site.data.gwaa_understanding %}
            {% if each.uid == this-uid %}
            <!-- Understanding -->
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
                            {{ each.descr | markdownify }}
                        </div>
                    </div>
                </div>
            </div>
            {% endif %}
        {% endfor %}
    </div>
</div>
<!-- Q:041-->
<div id="q41" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 41 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate the level of engagement your agency's Section 508 program or equivalent has with
                    disability-related affinity groups (external and/or internal to your agency) to inform ICT
                    accessibility program maturity. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency Section 508 program or equivalent never engages with disability-related affinity groups</li>
                <li>Agency Section 508 program or equivalent sometimes engages with disability-related affinity
                    group(s), but generally on an ad hoc basis</li>
                <li>Agency Section 508 program or equivalent regularly engages with disability-related affinity group(s)
                </li>
                <li>Agency Section 508 program or equivalent frequently engages with disability-related affinity
                    group(s)</li>
                <li>Agency Section 508 program or equivalent almost always engages with disability-related affinity
                    group(s) and affinity groups have an active voice and role in ICT accessibility considerations</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u41" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
        {% for each in site.data.gwaa_understanding %}
            {% if each.uid == this-uid %}
            <!-- Understanding -->
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
                            {{ each.descr | markdownify }}
                        </div>
                    </div>
                </div>
            </div>
            {% endif %}
        {% endfor %}
    </div>
</div>

<!-- end insert criteria -->
</div>

<div id="prev-next-section">
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-05/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-07/"> Next > </a>
</div>

**Reviewed/Updated:** May 2023

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