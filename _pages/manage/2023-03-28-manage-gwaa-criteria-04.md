---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-04/
type: manage
title: " - Government-wide Section 508 Assessment Criteria"
---

<H2 id="communications">Communications</H2>
<p>Questions in this section ask about your agency's internal and external communication accessibility considerations. If your agency does not release communications, please select N/A as needed.  </p>

<!-- Expand/Collapse All "Understanding" Content -->
<!-- 
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>
-->

<div class="usa-card-group">
<!-- begin insert criteria -->

<!-- Q:031-->
<div id="q31" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 31 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> To what extent does your agency communicate with employees and contractors about Section 508
                    requirements. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency does not distribute agency-wide communications regarding ICT accessibility or Section 508
                    requirements</li>
                <li>Agency sometimes distributes some formal communications about ICT accessibility, but communications
                    are typically ad hoc</li>
                <li>Agency regularly distributes formal communications from agency leadership regarding ICT
                    accessibility policies, issues, best practices, tools, support, etc.</li>
                <li>Agency frequently distributes formal communications from agency leadership regarding ICT
                    accessibility and has defined a communications plan to coordinate key messaging, scheduling, and
                    modes of communication</li>
                <li>In addition to response (d), agency has defined clear goals and objectives for ICT
                    accessibility-related communications to promote awareness and education regarding Section 508
                    requirements, regularly measures communication outcomes, and incorporates feedback mechanisms to
                    continually update and improve communications</li>
                <li>Unknown</li>
                <li>N/A - agency does not issue any formal communications (internal or external)</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u31" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:032-->
<div id="q32" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 32 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate to what extent your agency has a formalized process or plan for creating accessible,
                    agency official communications (internal and external). (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency does not have any formalized plan or process to ensure formal communications are accessible
                </li>
                <li>Agency sometimes takes steps to ensure formal communications are accessible, but efforts to ensure
                    accessibility are typically ad hoc</li>
                <li>Agency has defined and regularly follows formal processes to ensure formal communications are
                    accessible</li>
                <li>Agency frequently follows formal processes to ensure formal communications are accessible, including
                    formal review and Section 508 conformance validation prior to publication, resulting in few
                    accessibility issues for communications recipients</li>
                <li>Agency almost always follows formal processes to ensure communications are accessible, resulting in
                    little to no accessibility issues for recipients, and agency employs feedback mechanisms to improve
                    accessibility and usability of communication content</li>
                <li>Unknown</li>
                <li>N/A - agency does not issue any formal communications (internal or external)</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u32" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:033-->
<div id="q33" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 33 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how your agency provides accessible information and associated resources to employees
                    in response to an emergency (e.g., Continuity of Operations, Active Shooter, pandemic-related,
                    etc.). (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency does not have any formalized plan or process to ensure emergency communications are
                    accessible</li>
                <li>Agency sometimes takes steps to ensure emergency communications are accessible, but efforts to
                    ensure accessibility of these resources are typically ad hoc</li>
                <li>Agency has defined and regularly follows formal processes to ensure emergency communications are
                    accessible</li>
                <li>Agency frequently follows formal processes to ensure emergency communications are accessible,
                    including formal quick-turn process for review and Section 508 conformance validation prior to
                    publication, resulting in few accessibility issues for recipients</li>
                <li>Agency almost always follows formal processes to ensure emergency communications are accessible,
                    resulting in little to no accessibility issues for recipients, and agency employs feedback
                    mechanisms to improve accessibility and usability of emergency communication content and associated
                    resources</li>
                <li>Unknown</li>
                <li>N/A - agency does not issue any formal internal emergency communications</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u33" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:034-->
<div id="q34" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 34 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how your agency provides accessible, mission-related emergency communications to
                    external stakeholders (e.g., public safety, law enforcement, disaster-related, weather-related,
                    etc.). (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency does not have any formalized plan or process to ensure external emergency communications are
                    accessible</li>
                <li>Agency sometimes takes steps to ensure external emergency communications and associated resources
                    are accessible, but efforts to ensure accessibility of these resources are typically ad hoc</li>
                <li>Agency has defined and regularly follows formal processes to ensure external emergency
                    communications and associated resources are accessible</li>
                <li>Agency frequently follows formal processes to ensure external emergency communications and
                    associated resources are accessible, including formal quick-turn process for review and Section 508
                    conformance validation prior to publication, resulting in few accessibility issues for recipients
                </li>
                <li>Agency almost always follows formal processes to ensure external emergency communications and
                    associated resources are accessible, resulting in little to no accessibility issues for recipients,
                    and agency employs feedback mechanisms to improve accessibility and usability of external emergency
                    communication content and associated resources</li>
                <li>Unknown</li>
                <li>N/A - agency does not issue any formal external emergency communications</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u34" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-03/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-05/"> Next > </a>
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