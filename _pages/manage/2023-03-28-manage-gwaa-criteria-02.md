---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-02/
type: manage
title: "IT Accessibility Program Office - Government-wide Section 508 Assessment Criteria"
---

<H2 id="it-accessibility-program-office">IT Accessibility Program Office</H2>
<p>This section asks about your agency's program management, reporting, benchmarking, risk management, continuous process improvement, and other business-related functions that align to the development, implementation, and maintenance of your agency's Section 508 program or equivalent. </p>

<!-- Expand/Collapse All "Understanding" Content -->
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

<div class="usa-card-group">
<!-- begin insert criteria -->

<!-- Q:022-->
<div id="q22" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 22 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> What is the status of your agency's Section 508 Program or equivalent? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency does not have a formal Section 508 program or equivalent</li>
                <li>Agency's formal Section 508 program or equivalent is in development and has the ability to provide
                    support on an ad hoc basis</li>
                <li>A Section 508 program or equivalent exists with defined organizational ownership</li>
                <li>The Section 508 program or equivalent is widely known and relied on to inform policies, practices
                    and decision-making related to digital content, technology development, and acquisitions</li>
                <li>The Section 508 program or equivalent has actively measured and well-defined performance metrics as
                    well as authority in decision-making processes related to ICT</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u22" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:023-->
<div id="q23" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 23 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> What is the status of your agency's Section 508 Program Manager or equivalent position?
                    (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency does not have a formal position nor duties assigned to perform the role of a Section 508
                    Program Manager or equivalent</li>
                <li>Agency has defined a formal role and/or duties of a Section 508 Program Manager or equivalent, but
                    the Section 508 Program Manager's duties are not consistently measured and/or the Section 508
                    Program Manager does not possess specialized training nor subject matter expertise in the area of
                    ICT Accessibility</li>
                <li>Agency's Section 508 Program Manager or equivalent has clearly defined roles and responsibilities
                    with well-aligned performance goals and measures</li>
                <li>Agency's Section 508 Program Manager or equivalent has clearly defined roles and responsibilities
                    with well-aligned performance measures and has sufficient authority and time allowed to effectively
                    manage and coordinate agency's efforts to promote and ensure its ICT is accessible</li>
                <li>Agency's Section 508 Program Manager or equivalent possesses expertise in the field of ICT
                    accessibility, regularly meets and exceeds performance goals, and contributes to best practices in
                    Section 508 Program Management across government</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u23" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:024-->
<div id="q24" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 24 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate your Section 508 program's (or equivalent) ability to provide support in response to
                    ICT accessibility-related questions and support requests. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>The agency does not have a Section 508 program or equivalent</li>
                <li>The agency Section 508 Program or equivalent has little to no ability to provide support in response
                    to ICT accessibility-related requests and questions</li>
                <li>Agency Section 508 Program or equivalent sometimes provides support in response to ICT
                    accessibility-related requests and questions but generally occurs on an ad hoc basis</li>
                <li>Agency Section 508 Program or equivalent regularly provides support in response to ICT
                    accessibility-related requests and questions</li>
                <li>Agency Section 508 Program or equivalent frequently provides support in response to ICT
                    accessibility-related requests and questions</li>
                <li>Agency Section 508 Program or equivalent almost always provides support in response to ICT
                    accessibility-related requests and questions and feedback loops are established to refine processes
                </li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u24" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:025-->
<div id="q25" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 25 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate the extent to which Section 508 is integrated into ICT governance processes (e.g.,
                    milestone reviews, publication/deployment decisions, change control reviews). (*Required) </strong>
            </p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency never includes Section 508 requirements in ICT governance</li>
                <li>Agency sometimes includes Section 508 requirements in ICT governance, but inclusion is typically ad
                    hoc</li>
                <li>Agency has formal policy requiring inclusion of Section 508 requirements, and agency regularly
                    includes Section 508 requirements in ICT governance processes</li>
                <li>Agency has formal policy requiring inclusion of Section 508 requirements, and agency frequently
                    includes Section 508 requirements in ICT governance processes</li>
                <li>Agency has formal policy requiring inclusion of Section 508 requirements, and agency almost always
                    includes Section 508 requirements in ICT governance processes</li>
                <li>Unknown</li>
                <li>N/A - agency does not engage in any form of ICT governance</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u25" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:026-->
<div id="q26" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 26 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate the resources (not including staffing) available within your agency's Section 508
                    Program or equivalent (e.g., training, tools, staff support, etc.) (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency does not have a Section 508 Program or equivalent, or resource needs are not well defined and
                    available only on an ad hoc basis</li>
                <li>Resource needs are identified, but the resources provided or available are insufficient to support
                    the Section 508 program's (or equivalent) needs</li>
                <li>Resource needs are well defined, and my agency has a plan to provide resources to support the
                    Section 508 program or equivalent and agency-wide implementation of Section 508 requirements</li>
                <li>Agency provides the appropriate amount and type of resources necessary to achieve Section 508
                    program or equivalent goals and objectives on an ongoing basis</li>
                <li>Agency provides resources to support research, innovation, process improvement, and development of
                    new solutions and approaches while using feedback channels to inform adjustments in resource
                    allocation to support Section 508 implementation</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u26" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-01/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-03/"> Next > </a>
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