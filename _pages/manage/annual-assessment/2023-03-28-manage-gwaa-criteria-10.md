---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-10/
type: manage
title: "Training - Government-wide Section 508 Assessment Criteria"
---

<H2 id="training">Training</H2>
<p>This section asks about your agency's development, use, and tracking of ICT accessibility related training. </p>

<!-- Expand/Collapse All "Understanding" Content -->
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

<div class="usa-card-group">
<!-- begin insert criteria -->

<!-- Q:058-->
<div id="q58" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 58 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate to what extent your agency's Section 508 training plan defines training needs and
                    training curriculum by ICT roles and responsibilities. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency has no Section 508 training plan</li>
                <li>Agency has a general Section 508 training plan but does not specify training needs and training
                    curriculum by ICT roles and responsibilities</li>
                <li>Agency has a Section 508 training plan that identifies training needs and training curriculum for
                    some ICT roles and responsibilities</li>
                <li>Agency has a Section 508 training plan that identifies training needs and training curriculum for
                    most ICT roles and responsibilities</li>
                <li>Agency has a Section 508 training plan that identifies training needs and training curriculum for
                    almost all ICT roles and responsibilities and the Section 508 training plan is regularly reviewed
                    and revised, as needed</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u58" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:059-->
<div id="q59" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 59 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate to what extent your agency requires Section 508 awareness training for employees.
                    (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency does not offer any Section 508 awareness training</li>
                <li>Agency offers an optional Section 508 awareness training that employees sometimes take, but
                    generally on an ad hoc basis</li>
                <li>Agency requires Section 508 awareness training as a one-time requirement (e.g., as part of employee
                    onboarding)</li>
                <li>Agency requires Section 508 awareness training on a regular basis (e.g., annually)</li>
                <li>Agency requires annual Section 508 awareness training on a regular basis, and feedback loops are
                    established to refine and update training content regularly</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u59" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:060-->
<div id="q60" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 60 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate to what extent your agency provides ICT accessibility-related training for employees.
                    (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency has no capacity to provide training</li>
                <li>Training is sometimes provided, but generally provided on an ad hoc basis, and for a limited
                    selection of ICT accessibility topics</li>
                <li>Training is regularly provided for most ICT accessibility topics</li>
                <li>Training is frequently provided for most ICT accessibility topics, and new topics for training are
                    actively identified based on changing need and/or emerging technologies</li>
                <li>Training is almost always provided for any ICT accessibility topic, new topics are actively
                    identified based on changing need and/or emerging technologies, and feedback loops ensure regular
                    review and refinement of training content</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u60" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:061-->
<div id="q61" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 61 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate the level of employee training on guidance, templates and tools used to create
                    accessible content. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>No training on how to use guides, templates and tools</li>
                <li>Some training on how to use guides, templates and tools is available but only sometimes delivered
                    and generally on an ad hoc basis</li>
                <li>Training on how to use guides, templates and tools is regularly delivered to employees</li>
                <li>Training on how to use guides, templates and tools is frequently delivered to employees</li>
                <li>Training on how to use guides, templates and tools is delivered to all employees on at least an
                    annual basis and feedback loops are employed to improve training content</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u61" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-09/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-11/"> Next > </a>
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