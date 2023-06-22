---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-08/
type: manage
title: "Testing and Validation - Government-wide Section 508 Assessment Criteria"
---

<H2 id="testing-and-validation">Testing and Validation</H2>
<p>This section asks about your agency's level of inclusion of ICT accessibility in the testing and evaluation of agency products and services, including processes, tools, templates, best practices and guidance. If your agency does not publish nor maintain any ICT, please select N/A as needed.  </p>

<!-- Expand/Collapse All "Understanding" Content -->
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

<div class="usa-card-group">
<!-- begin insert criteria -->

<!-- Q:046-->
<div id="q46" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 46 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate your agency's adoption and implementation of standard processes for validating web
                    content conformance to Section 508 standards. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency does not require any standard processes for validating web content conformance to Section 508
                    standards</li>
                <li>Widely accepted test processes are sometimes used but on an ad hoc basis and may depend on the
                    individual performing the test</li>
                <li>Agency requires a standard Section 508 conformance validation test process in formal policy and web
                    content testers regularly follow the required test process</li>
                <li>Web content testers typically adhere to agency's required Section 508 conformance validation test
                    process and have adequate training and access to the tools necessary to reliably produce consistent
                    test results</li>
                <li>Web content testers almost always adhere to the required Section 508 conformance validation test
                    process, have adequate training and tools reliably product consistent test results, and agency
                    regularly evaluates and updates the Section 508 test process to adjust to evolving technology and
                    Section 508 testing trends</li>
                <li>Unknown</li>
                <li>N/A - agency does not publish or maintain any web content</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u46" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:047-->
<div id="q47" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 47 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how often your agency conducts comprehensive manual conformance validation testing for
                    web content (internet and intranet) prior to deployment to address all applicable Section 508
                    standards. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency never conducts comprehensive manual tests on web content for Section 508 conformance</li>
                <li>Agency sometimes conducts comprehensive manual tests on web content for Section 508 conformance, but
                    generally on an ad hoc basis</li>
                <li>Agency regularly conducts comprehensive manual tests on web content for Section 508 conformance</li>
                <li>Agency frequently or almost always conducts comprehensive manual tests on web content for Section
                    508 conformance prior to deployment</li>
                <li>Comprehensive manual Section 508 validation testing for web content is integrated into development
                    and deployment, resulting in almost no accessibility issues deployed to production environments</li>
                <li>Unknown</li>
                <li>N/A - agency does not publish or maintain any web content</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u47" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:048-->
<div id="q48" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 48 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how often your agency conducts automated accessibility testing for comprehensive,
                    large-scale web content validation (internet and intranet) for Section 508 conformance prior to
                    deployment. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency never conducts automated tests on web content for Section 508 conformance</li>
                <li>Agency sometimes conducts automated tests on web content for Section 508 conformance, but generally
                    on an ad hoc basis</li>
                <li>Agency regularly conducts automated tests on web content for Section 508 conformance</li>
                <li>Agency frequently or almost always conducts automated tests on web content for Section 508
                    conformance prior to deployment</li>
                <li>Automated Section 508 validation testing for web content is integrated into development and
                    deployment, resulting in almost no accessibility issues deployed to production environments that can
                    be detected with automated testing</li>
                <li>Unknown</li>
                <li>N/A - agency does not publish or maintain any web content</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u48" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:049-->
<div id="q49" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 49 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate the extent to which public, online documents are tested for Section 508 conformance
                    prior to posting. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency never tests electronic documents prior to posting</li>
                <li>Agency sometimes tests electronic documents prior to posting, but is generally ad hoc</li>
                <li>Agency regularly tests electronic documents prior to posting</li>
                <li>Agency frequently tests electronic documents prior to posting</li>
                <li>Agency almost always tests electronic documents prior to posting</li>
                <li>Unknown</li>
                <li>N/A - agency does not have any public online documents</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u49" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:050-->
<div id="q50" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 50 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how your agency remediates Section 508 non-conformance issues. (*Required) </strong>
            </p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency never remediates Section 508 non-conformance issues after deployment/distribution</li>
                <li>Agency sometimes remediates Section 508 non-conformance issues after deployment/distribution, but
                    remediation typically occurs on an ad hoc basis</li>
                <li>Agency regularly remediates Section 508 non-conformance issues based on risk evaluation, and
                    includes accommodation plans</li>
                <li>Agency frequently remediates Section 508 non-conformance issues based on risk evaluation, and
                    includes accommodation plans</li>
                <li>Agency ranks severity of non-conformance issues and almost always remediates high severity issues
                    immediately, resulting in little to no impact on users with disabilities</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u50" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:051-->
<div id="q51" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 51 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate the extent to which your agency's development/testing professionals are trained in
                    Section 508 conformance validation testing for web content (Section 508 web testing). (*Required)
                </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>No development/testing professionals are trained in Section 508 web testing</li>
                <li>Some development/testing professionals have training in Section 508 web testing, but training is ad
                    hoc</li>
                <li>Training curriculum/certification in Section 508 web testing is identified for all
                    development/testing professionals but not required</li>
                <li>Training curriculum/certification in Section 508 web testing is identified and required for all
                    development/testing professionals</li>
                <li>Training curriculum/certification in Section 508 web testing is identified and required for all
                    development/testing professionals to meet current and future business needs and continuous education
                    is actively pursued to keep up with emerging accessibility testing needs</li>
                <li>Unknown</li>
                <li>N/A - agency does not publish or maintain any web content</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u51" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-07/"> < Previous</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-09/"> Next > </a>
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