---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-05/
type: manage
title: "Content Creation - Government-wide Section 508 Assessment Criteria"
---

<H2 id="content-creation">Content Creation</H2>
<p>This section asks about your agency's development, testing, remediation, and conformance tracking of digital content, including but not limited to: documents, presentations, PDFs, spreadsheets, audio, video, multimedia, social media, and digital forms. </p>

<!-- Expand/Collapse All "Understanding" Content -->
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

<div class="usa-card-group">
<!-- begin insert criteria -->

<!-- Q:035-->
<div id="q35" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 35 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate whether your agency provides guidance, templates, and tools to agency employees to
                    ensure accessible electronic content creation. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency does not offer guides, templates or tools</li>
                <li>Agency provides a few guides, templates, and tools by request only</li>
                <li>Agency provides or links to some guides, templates and tools for several types of electronic content
                    on agency intranet/internet</li>
                <li>Agency provides or links to guides, templates and tools for many types of electronic content on
                    agency intranet/internet</li>
                <li>Agency provides or links to guides, templates and tools for most types of electronic content on
                    agency intranet/internet and uses employee feedback to regularly update and improve agency resources
                    for accessible content creation</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u35" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:036-->
<div id="q36" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 36 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how non-conformant digital content is tracked and remediated. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency does not track non-conformant digital content</li>
                <li>Agency tracks non-conformant digital content but only sometimes takes action to remediate the
                    content, and generally on an ad hoc basis</li>
                <li>Agency tracks non-conformant digital content and regularly creates and then takes action on a plan
                    to remediate the content</li>
                <li>Agency tracks non-conformant content and frequently creates and then takes action on a plan to
                    remediate the content</li>
                <li>Agency always or almost always creates conformant content that does not require remediation,
                    otherwise agency always or almost always takes action on a plan to remediate the non-conformant
                    content when identified</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u36" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:037-->
<div id="q37" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 37 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how your agency integrates accessibility reviews of electronic content prior to
                    publication. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency never includes accessibility reviews prior to electronic content publication</li>
                <li>Accessibility review is not formally integrated into the publication process, and agency sometimes
                    includes accessibility reviews prior to electronic content publication, but is generally ad hoc</li>
                <li>Accessibility review is formally integrated onto the publication process, and agency regularly
                    includes accessibility reviews prior to electronic content publication</li>
                <li>Accessibility review is formally integrated into the publication process, frequently includes
                    accessibility reviews prior to electronic content publication, and resulting in published content
                    with little to no accessibility defects</li>
                <li>Accessibility review is formally and fully integrated into the publication process, almost always
                    includes accessibility reviews prior to electronic content publication, and includes feedback loops
                    for continuous improvements/process refinement</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u37" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-04/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-06/"> Next > </a>
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