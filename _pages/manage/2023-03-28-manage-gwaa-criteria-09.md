---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-09/
type: manage
title: "Acquisition and Procurement - Government-wide Section 508 Assessment Criteria"
---

<H2 id="acquisition-and-procurement">Acquisition and Procurement</H2>
<p>Questions in this section ask about your agency's level of inclusion of ICT accessibility in procurement lifecycle processes. If your agency does not procure ICT, release solicitations, or  participate in development of business needs, please select N/A as needed.</p>

<!-- Expand/Collapse All "Understanding" Content -->
<!-- 
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>
-->

<div class="usa-card-group">
<!-- begin insert criteria -->

<!-- Q:052-->
<div id="q52" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 52 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate the extent to which your agency addresses ICT accessibility requirements in your
                    agency's solicitations. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Solicitations do not or rarely include ICT accessibility requirements</li>
                <li>ICT Accessibility requirements are sometimes included in solicitations but generally on an ad hoc
                    basis</li>
                <li>ICT Accessibility requirements are regularly included in solicitations according to agency
                    procurement standards</li>
                <li>ICT Accessibility requirements are frequently included in solicitations according to agency
                    procurement standards</li>
                <li>ICT Accessibility requirements are almost always included in solicitations according to agency
                    procurement standards and perform regular audits/reviews to ensure solicitations include appropriate
                    accessibility requirements</li>
                <li>N/A-agency does not release solicitations</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u52" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:053-->
<div id="q53" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 53 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how your agency identifies and prioritizes risk of Section 508-non-conformant ICT
                    throughout the acquisition lifecycle. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Risk related to Section 508 non-conformance is not assessed during any part of acquisitions</li>
                <li>Any Section 508-related risk assessment is ad hoc or sometimes used</li>
                <li>A risk model for ICT Acquisitions that incorporates Section 508 considerations exists and is
                    regularly used</li>
                <li>A risk model is frequently used to determine risk related to Section 508 non-conformance for ICT
                    acquisitions</li>
                <li>A risk model is almost always used to determine risk related to Section 508 non-conformance for
                    almost all ICT acquisitions and resulting risk assessments are incorporated into milestone reviews
                    and deliverable acceptance decisions</li>
                <li>N/A - the agency is not engaged in ICT acquisitions</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u53" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:054-->
<div id="q54" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 54 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how your agency performs market research for ICT products. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Section 508 conformance is not included in market research for ICT products</li>
                <li>Obtaining Section 508 conformance information (e.g., via Accessibility Conformance Reports (ACRs) or
                    equivalent) as part of market research sometimes occurs but generally on an ad hoc basis</li>
                <li>Section 508 conformance information is regularly obtained for all products and consideration for
                    Section 508 conformance is a formal part of review but may not contain all necessary information
                    related to accessibility requirements (e.g., ACRs do not match the current product version, ACR
                    provides limited information, ACRs are not obtained for all products under consideration, etc.)</li>
                <li>Sufficient Section 508 conformance information is frequently obtained for all products and Section
                    508 conformance is a formal part of review, which is frequently used to select the most accessible
                    ICT that meets the business need</li>
                <li>Sufficient Section 508 conformance information is almost always obtained for all products, a formal
                    review of Section 508 conformance is almost always used to select of the most accessible ICT that
                    meets the business need, and market research outputs/outcomes and processes are regularly reviewed
                    for improvement</li>
                <li>N/A - agency does not procure ICT products</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u54" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:055-->
<div id="q55" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 55 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate your agency's approach to verifying contract deliverables that are required to be
                    Section 508 conformant. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>No method is implemented for verifying contract deliverables that are required to be Section 508
                    conformant</li>
                <li>Contract deliverables that are required to be Section 508 conformant are only sometimes verified
                    prior to acceptance but generally on an ad hoc basis</li>
                <li>Contract deliverables that are required to be Section 508 conformant are regularly verified prior to
                    acceptance, including required remediation when necessary</li>
                <li>Contract deliverables that are required to be Section 508 conformant are frequently verified prior
                    to acceptance, including required remediation when necessary</li>
                <li>Contract deliverables that are required to be Section 508 conformant are almost always verified
                    prior to acceptance, including required remediation when necessary</li>
                <li>N/A - agency does not award contracts</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u55" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:056-->
<div id="q56" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 56 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how the needs of individuals with disabilities are included during assessment of
                    ICT-related business needs or equivalent acquisition planning process. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>The needs of individuals with disabilities are not deliberately considered when determining business
                    needs in ICT acquisitions</li>
                <li>Business needs sometimes consider/include needs of individuals with disabilities but generally on an
                    ad hoc basis (some consideration for user needs, some determination of applicable Section 508
                    standards, some determination of exception/exemption)</li>
                <li>The needs of individuals with disabilities are deliberately defined as part of the business needs
                    assessment, or equivalent, and are regularly considered/included in ICT acquisitions</li>
                <li>The needs of individuals with disabilities are deliberately defined as part of the business needs
                    assessment, or equivalent, and are frequently considered/included</li>
                <li>The needs of individuals with disabilities are integrated into business needs processes, or
                    equivalent, almost always included, and feedback loops are established for continuous refinement
                </li>
                <li>N/A- agency does not generate business needs or participate in acquisition planning processes or
                    equivalent</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u56" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:057-->
<div id="q57" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 57 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how your agency addresses Section 508 in the technical evaluation of proposals related
                    to ICT services and products. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Section 508 conformance is never included as a technical evaluation factor</li>
                <li>Section 508 conformance is sometimes included as a technical evaluation factor in but generally on
                    an ad hoc basis</li>
                <li>Section 508 conformance is regularly included as a technical evaluation factor</li>
                <li>Section 508 conformance is frequently included as a technical evaluation factor</li>
                <li>Section 508 conformance is almost always included as a technical evaluation factor in acquisitions
                </li>
                <li>N/A- agency does not award contracts</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u57" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-08/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-10/"> Next > </a>
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