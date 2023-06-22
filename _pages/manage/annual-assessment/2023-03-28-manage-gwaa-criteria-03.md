---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-03/
type: manage
title: "Policies, Procedures, and Practices - Government-wide Section 508 Assessment Criteria"
---

<H2 id="policies-procedures-and-practices">Policies, Procedures, and Practices</H2>
<p>The section asks about your agency's development, implementation, and continuous improvement of ICT accessibility related policies, procedures, directives and standards and the inclusion of digital accessibility into relevant policies across all business functions of your agency. </p>

<!-- Expand/Collapse All "Understanding" Content -->
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

<div class="usa-card-group">
<!-- begin insert criteria -->

<!-- Q:027-->
<div id="q27" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 27 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> What is the status of your agency's Section 508/ICT accessibility policy? (*Required) </strong>
            </p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Does not exist</li>
                <li>In draft</li>
                <li>High-level Section 508/ICT accessibility policy signed, but needs to be revised and/or more detail
                    included [upload written Section 508 policy]</li>
                <li>Signed, published Section 508/ICT accessibility policy that describes roles and responsibilities
                    agency-wide for implementing and ensuring Section 508 requirements [upload written Section 508
                    policy]</li>
                <li>Signed, published Section 508/ICT accessibility policy is appropriately referenced in other relevant
                    agency policies and is regularly reviewed and updated [upload written Section 508 policy]</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u27" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:028-->
<div id="q28" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 28 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> To what extent does your agency incorporate ICT accessibility in all relevant agency policies
                    and directives (i.e., policies and directives that govern procurement, development, maintenance,
                    and/or use of ICT)? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>ICT accessibility is not included in any agency policies/directives</li>
                <li>Agency has a signed ICT accessibility policy only</li>
                <li>ICT Accessibility included in some relevant policies/directives agency-wide</li>
                <li>ICT Accessibility included in most relevant policies/directives agency-wide</li>
                <li>Agency includes consideration for ICT accessibility in its policy/directive creation, review, and
                    management process, and most/all relevant policies include consideration for ICT accessibility
                    requirements</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u28" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:029-->
<div id="q29" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 29 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate if your agency has formal, written policies and procedures for processing and resolving
                    complaints filed in relation to Section 508 non-conformance issues. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>No, agency has not established any policies nor procedures to process Section 508-related complaints
                </li>
                <li>Agency manages Section 508-related complaints on an ad hoc basis and has a plan to establish formal
                    policies and procedures for processing and resolving complaints specifically related to Section 508
                    non-conformance</li>
                <li>Agency has a formally established complaint process with specific procedures for dealing with
                    Section 508-related complaints (e.g., under the process for managing Section 504 complaints)</li>
                <li>Agency has established specific, repeatable policies and/or procedures to process Section
                    508-related complaints and has established performance measures related to processing Section
                    508-related complaints</li>
                <li>Agency has an established specific policies and/or procedures to process Section 508-related
                    complaints with a tracking system and feedback loops for continuous improvement</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u29" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:030-->
<div id="q30" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 30 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency provide instructions about how the public and employees can file complaints
                    related to Section 508? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>No instructions are provided</li>
                <li>Instructions are provided upon request for employees and the public</li>
                <li>The agency maintains both public agency site(s) and intranet site(s) but instructions are only
                    provided on one or the other</li>
                <li>The agency maintains both public agency site(s) and intranet site(s) and instructions are provided
                    on both OR the agency only maintains either public agency site(s) or intranet site(s) and
                    instructions are provided there</li>
                <li>The agency maintains both public agency site(s) and intranet site(s) and instructions are provided
                    on both OR the agency only maintains either public agency site(s) or intranet site(s) and
                    instructions are provided there; AND instructions are regularly reviewed to incorporate feedback and
                    refine processes, including active monitoring of complaints</li>
                <li> The agency does not maintain any public internet or internal intranet websites, but it regularly
                    distributes instructions to employees and agency customers/constituents/stakeholders via other
                    communication channels; AND instructions are regularly reviewed to incorporate feedback and refine
                    processes, including active monitoring of complaints</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u30" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-02/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-04/"> Next > </a>
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