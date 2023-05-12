---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-07/
type: manage
title: "Technology Lifecycle Activities - Government-wide Section 508 Assessment Criteria"
---

<H2 id="technology-lifecycle-activities">Technology Lifecycle Activities</H2>
<p>This section asks about your agency's level of inclusion of accessibility in the technology lifecycle to include design, development, operation, and maintenance of ICT. If your agency does not have a formal technology lifecycle process, please select N/A as needed.</p>

<!-- Expand/Collapse All "Understanding" Content -->
<!-- 
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>
-->

<div class="usa-card-group">
<!-- begin insert criteria -->

<!-- Q:042-->
<div id="q42" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 42 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how your agency identifies and prioritizes risk of Section 508 non-conformant ICT
                    throughout the technology development lifecycle. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Risk related to Section 508 non-conformance is not assessed during any part of the technology
                    development lifecycle</li>
                <li>Any Section 508-related risk assessment is ad hoc or sometimes used</li>
                <li>A risk model for ICT development and defect remediation that incorporates Section 508 considerations
                    exists and is regularly used</li>
                <li>A risk model is frequently used to determine risk related to Section 508 non-conformance during the
                    technology development lifecycle, including prioritization for remediating ICT products</li>
                <li>A risk model is almost always used to determine risk related to Section 508 non-conformance during
                    the technology development lifecycle, including prioritization for remediating almost all ICT
                    products, and resulting risk assessments are incorporated into milestone reviews and deployment
                    decisions</li>
                <li>N/A - the agency does not engage in any technology lifecycle activities</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u42" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:043-->
<div id="q43" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 43 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> To what extent do your quality assurance activities include actions to address
                    vendors/contractors who produce or deliver inaccessible ICT despite contractual requirements to
                    conform to Section 508 standards? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>No action is taken to address vendor non-compliance</li>
                <li>Escalation occurs sometimes, but generally on an ad hoc basis, resulting in limited actions taken
                    (e.g., contract actions and/or consequences rarely occur)</li>
                <li>Processes are developed for complaint escalation for vendor non-compliance and actions are regularly
                    taken to enforce accessibility</li>
                <li>Processes are developed for complaint escalation for vendor non-compliance and actions are
                    frequently taken to enforce accessibility</li>
                <li>Processes are almost always used for complaint escalation, when necessary, and actions are almost
                    always taken to enforce accessibility and/or penalties (e.g., financial penalties are applied,
                    vendors/contractors removed from future consideration when ICT accessibility standards are not met
                    or regular complaints are lodged and not addressed)</li>
                <li>N/A - agency does not rely on contract/vendor support for ICT development or does not develop ICT
                </li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u43" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:044-->
<div id="q44" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 44 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate the extent to which agency staff who are involved in technology development lifecycle
                    activities have sufficient knowledge and skill to ensure ICT is accessible. (*Required) </strong>
            </p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>We do not have knowledgeable agency staff</li>
                <li>Knowledgeable staff is not integrated into lifecycle activities</li>
                <li>Knowledgeable agency staff is sometimes integrated in lifecycle development activities</li>
                <li>Knowledgeable agency staff is regularly integrated in lifecycle development activities</li>
                <li>Knowledgeable agency staff is frequently integrated in lifecycle development activities</li>
                <li>Knowledgeable agency staff is almost always integrated into lifecycle development activities and
                    active feedback loops create innovative ways to meet accessibility needs</li>
                <li>N/A - agency does not have a formal technology development lifecycle</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u44" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:045-->
<div id="q45" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 45 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate the extent to which ICT accessibility is integrated throughout technology development
                    lifecycle activities. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>ICT accessibility considerations are never included in the technology development lifecycle</li>
                <li>ICT accessibility considerations are sometimes included in the technology development lifecycle</li>
                <li>ICT accessibility requirements are regularly included in the technology development lifecycle</li>
                <li>ICT accessibility requirements are frequently included in the technology development lifecycle,
                    usability, accessibility and AT testing are performed, and post-implementation IT reviews are
                    conducted</li>
                <li>ICT accessibility requirements are almost always included in the technology development lifecycle,
                    universal design best practices are followed and accessible component re-use & sharing of accessible
                    concepts and solutions</li>
                <li>N/A - agency does not have a formal technology development lifecycle</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u45" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-06/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-08/"> Next > </a>
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