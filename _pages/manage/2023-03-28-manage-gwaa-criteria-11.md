---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-11/
type: manage
title: "Conformance Metrics - Government-wide Section 508 Assessment Criteria"
---

<H2 id="conformance-metrics">Conformance Metrics</H2>
<p>Questions in Conformance Metrics ask about specific data points and outcomes related to measuring your program inclusion of ICT accessibility. </p>

<!-- Expand/Collapse All "Understanding" Content -->
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

<div class="usa-card-group">
<!-- begin insert criteria -->

<!-- Q:062-->
<div id="q62" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 62 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Estimate how many web pages are published on public internet websites owned or operated by your
                    agency? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u62" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:063-->
<div id="q63" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 63 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Estimate how many web pages published on public internet websites owned or operated by your
                    agency were evaluated for Section 508 conformance in the reporting period. (*Required) </strong></p>
            <p> Open response-whole number </p>
        </div>
        {% assign this-uid = "u63" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:064-->
<div id="q64" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 64 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> What percentage of public internet web pages, of those evaluated in the reporting period, fully
                    conform to Section 508 standards? Round to the nearest whole number. (*Required) </strong></p>
            <p> Open response-whole number </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 63 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u64" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:065-->
<div id="q65" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 65 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Across all public internet web pages evaluated in the reporting period, what is the average
                    number of Section 508 non-conformance issues per page? Round to the nearest whole number. (Optional)
                </strong></p>
            <p> Open response-whole number </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question will show only if Question 63 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u65" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:066-->
<div id="q66" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 66 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> How many public internet web pages were evaluated by only automated testing in the reporting
                    period? (*Required) </strong></p>
            <p> Open response-whole number </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 63 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u66" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:067-->
<div id="q67" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 67 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> How many public internet web pages were evaluated by only manual testing in the reporting
                    period? (*Required) </strong></p>
            <p> Open response-whole number </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 63 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u67" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:068-->
<div id="q68" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 68 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> How many public internet web pages were evaluated by a combination of both automated and manual
                    testing in the reporting period? (*Required) </strong></p>
            <p> Open response-whole number </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 63 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u68" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:069-->
<div id="q69" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 69 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Estimate how many web pages are published to internal intranet websites owned or operated by
                    your agency? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>N/A</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u69" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:070-->
<div id="q70" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 70 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> How many web pages, published to internal intranet websites owned or operated by your agency,
                    were evaluated for Section 508 conformance in the reporting period? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>N/A</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u70" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:071-->
<div id="q71" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 71 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> What percentage of internal intranet web pages, of those evaluated in the reporting period,
                    fully conform to Section 508 standards? Round to the nearest whole number. (*Required) </strong></p>
            <p> Open response-whole number </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 70 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u71" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:072-->
<div id="q72" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 72 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Across all internal intranet web pages evaluated in the reporting period, what is the average
                    number of Section 508 non-conformance issues per page? Round to the nearest whole number. (Optional)
                </strong></p>
            <p> Open response-whole number </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question will show only if Question 70 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u72" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:073-->
<div id="q73" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 73 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> How many internal intranet web pages were only evaluated by automated testing in the reporting
                    period? (*Required) </strong></p>
            <p> Open response-whole number </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 70 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u73" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:074-->
<div id="q74" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 74 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> How many internal intranet web pages were only evaluated by manual testing in the reporting
                    period? (*Required) </strong></p>
            <p> Open response-whole number </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 70 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u74" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:075-->
<div id="q75" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 75 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> How many internal intranet web pages were evaluated by a combination of both automated and
                    manual testing in the reporting period? (*Required) </strong></p>
            <p> Open response-whole number </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 70 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u75" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:076-->
<div id="q76" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 76 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency have a publicly posted website accessibility statement? (*Required) </strong>
            </p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes [will be required to provide URL to where accessibility statement resides]</li>
                <li>No</li>
                <li>N/A - agency does not have a public website</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u76" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:077-->
<div id="q77" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 77 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> You selected your agency has a publicly posted website accessibility statement; please select
                    all that apply: (*Required) </strong></p>
            <p> Select all that apply: </p>
            <p>
            <ol type="a">
                <li>Accessibility statement includes Section 508 Program or equivalent POC</li>
                <li>Accessibility statement includes last date updated</li>
                <li>Accessibility statement includes a mechanism for visitors to provide comments and/or feedback
                    regarding the agency Section 508 Program</li>
                <li>Accessibility statement is fully Section 508 conformant</li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 76 Conformance Metrics is Yes. </p>
            </div>
        </div>
        {% assign this-uid = "u77" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:078-->
<div id="q78" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 78 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Identify your agency's top ten viewed internal intranet pages within the reporting period. Test
                    each page for full conformance to Section 508 (this will require comprehensive manual testing in
                    addition to automated or a hybrid test process if utilized in your agency). For each page listed,
                    report the number of failures by Section 508 standard/WCAG Success Criterion. Provide page name and
                    page description (please use generic names/descriptions if appropriate). (*Required) </strong></p>
            <p>Select one:</p>
            <p>
            <ol type="a">
                <li>N/A- agency does not have intranet web pages</li>
                <li>Unavailable- agency does not have resources to test</li>
                <li>Agency has results to report [If selected, show the following:]
                    <ul>
                        <li>Web page name:</li>
                        <li>Web page description:</li>
                        <li>[Show Section 508 Standards/WCAG Success Criteria with input field next to each to input defect, default to zero for each]</li>
                    </ul>
                </li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> Layout of this question in the reporting tool may appear differently. </p>
            </div>
        </div>
        {% assign this-uid = "u78" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:079-->
<div id="q79" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 79 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Identify your agency's top ten viewed publicly available internet pages within the reporting
                    period. Test each page for full conformance to Section 508 (this will require comprehensive manual
                    testing in addition to automated or a hybrid test process if utilized in your agency). For each page
                    listed, report the number of failures by Section 508 standard/WCAG Success Criterion. Report the
                    number of times each SC failed by page. Provide page name, page description and URL. (*Required)
                </strong></p>
            <p>Select one:</p>
            <p>
            <ol type="a">
                <li>N/A- agency does not have public web pages</li>
                <li>Unavailable- agency does not have resources to test</li>
                <li>Agency has results to report [If selected, show the following:]
                    <ul>
                        <li>Web page name:</li>
                        <li>Web page description:</li>
                        <li>Web page URL:</li>
                        <li>[Show Section 508 Standards/WCAG Success Criteria with input field next to each to input defect, default to zero for each]</li>
                    </ul>
                </li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> Layout of this question in the reporting tool may appear differently. </p>
            </div>
        </div>
        {% assign this-uid = "u79" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:080-->
<div id="q80" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 80 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Identify your agency's top ten viewed electronic documents posted on your public website within
                    the reporting period. Test each document for full conformance to Section 508 (this will require
                    comprehensive manual testing in addition to automated or a hybrid test process if utilized in your
                    agency). For each document, report the number of failures by Section 508 standard/WCAG Success
                    Criterion. Please also provide the document name, document type, and document description.
                    (*Required) </strong></p>
            <p>Select one:</p>
            <p>
            <ol type="a">
                <li>N/A- agency does not have electronic documents</li>
                <li>Unavailable- agency does not have resources to test</li>
                <li>Agency has results to report [If selected, show the following:]
                    <ul>
                        <li>Document Name:</li>
                        <li>Document type:</li>
                        <li>URL of document:</li>
                        <li>[Show Section 508 Standards/WCAG Success Criteria with input field next to each to input defect, default to zero for each]</li>
                    </ul>
                </li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> Layout of this question in the reporting tool may appear differently. </p>
            </div>
        </div>
        {% assign this-uid = "u80" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:081-->
<div id="q81" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 81 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Identify your agency's top five most-viewed videos within the reporting period. Test each video
                    for Section 508 conformance. For each video, report the number of failures by Section 508
                    standard/WCAG Success Criterion. Provide the video name, video description, and URL where the video
                    resides, if applicable (please use generic names/descriptions if appropriate). Select N/A if your
                    agency does not host or produce any videos. (*Required) </strong></p>
            <p>Select one:</p>
            <p>
            <ol type="a">
                <li>N/A- agency does host or produce videos</li>
                <li>Unavailable- agency does not have resources to test</li>
                <li>Agency has results to report [If selected, show the following:]
                    <ul>
                        <li>Video Name:</li>
                        <li>URL of Video:</li>
                        <li>[Show Section 508 Standards/WCAG Success Criteria with input field next to each to input defect, default to zero for each]</li>
                    </ul>
                </li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> Layout of this question in the reporting tool may appear differently. </p>
            </div>
        </div>
        {% assign this-uid = "u81" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:082-->
<div id="q82" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 82 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency’s employee Time and Attendance system (e.g., employee time-tracking software
                    that integrates with payroll software) fully conform to all applicable Section 508 standards?
                    (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u82" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:083-->
<div id="q83" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 83 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Among your agency's digital training courses required for all employees, identify the most
                    widely viewed/completed training course (in case of a tie, select one). Does the required course
                    fully conform to all applicable Section 508 standards? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
                <li>Unknown</li>
                <li>N/A</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u83" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:084-->
<div id="q84" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 84 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency’s enterprise email application used by employees fully conform to all
                    applicable Section 508 standards? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u84" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:085-->
<div id="q85" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 85 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency’s enterprise virtual meeting platform (e.g., Teams, Zoom, WebEx, Google Meets)
                    fully conform to all applicable Section 508 standards? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
                <li>Unknown</li>
                <li>N/A- agency does not use an enterprise virtual meeting platform</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u85" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:086-->
<div id="q86" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 86 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Please provide Section 508 conformance validation results for your agency’s most
                    widely-distributed multifunction printers. Report the number of failures by Section 508 standard.
                    Provide the product make and model. (Optional) </strong></p>
            <p> Two stages of questions will be presented.
            <ol type="a">
                <li>Agency has Section 508 conformance validation test results to report (if a is selected, continue
                    answering this question and you will be required to input Section 508 standard/WCAG Success Criteria
                    failures and select where you got the test results]</li>
                <li>Agency could not retrieve test results (e.g. ACR) from vendor [move to Question 26 Conformance
                    Metrics]</li>
                <li>Agency did not test and assumed conformance as other agencies are using the product [move to
                    Question 26 Conformance Metrics]</li>
                <li>Agency does not test and does not have this data [move to Question 26 Conformance Metrics]</li>
                <li> N/A; Agency does not distribute multifunction printers [move to Question 26 Conformance Metrics]
                </li>
            </ol>If a is selected, show Section 508 Standards/WCAG Success Criteria with input field next to each to
            input defect, default to zero for each to input defects for the multifunction printer. If a is selected,
            where did you get these results?<ol type="a">
                <li>Current product version of ACR used to report results</li>
                <li>ACR of product used but ACR was not for the same version as agency uses</li>
                <li>Used another agency's test results</li>
                <li> Agency tested according to agency testing methodology</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u86" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:087-->
<div id="q87" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 87 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Do your agency’s custom developed desktop software or native mobile applications used by the
                    public fully conform to all applicable Section 508 standards? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes, all custom developed desktop software or native mobile applications are fully conformant</li>
                <li>Yes, but only some custom developed desktop software or native mobile applications are fully
                    conformant</li>
                <li>No, none of our agency's custom developed desktop software or native mobile applications are fully
                    conformant</li>
                <li>Unknown</li>
                <li>N/A-agency does not custom develop desktop software or mobile native applications</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u87" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:088-->
<div id="q88" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 88 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Do your agency’s kiosks that are used by the public fully conform to all applicable Section 508
                    standards? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes, all kiosks are fully conformant</li>
                <li>Yes, but only some kiosks are fully conformant</li>
                <li>No, none of our agency's kiosks are fully conformant</li>
                <li>Unknown</li>
                <li>N/A-agency does not have any kiosks used by the public</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u88" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:089-->
<div id="q89" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 89 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency's telework agreement form fully conform to all applicable Section 508
                    standards? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
                <li>Unknown</li>
                <li>N/A- agency does not have a telework agreement form</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u89" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:090-->
<div id="q90" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 90 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency use an enterprise single sign-on (SSO) solution for authentication services
                    that fully conforms to all applicable Section 508 standards? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
                <li>Unknown</li>
                <li>N/A- agency does not use an enterprise SSO solution</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u90" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:091-->
<div id="q91" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 91 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does the W-2 your agency sends yearly to employees fully conform to all applicable Section 508
                    standards? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
                <li>Unknown</li>
                <li>N/A- agency only provides a paper W-2</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u91" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:092-->
<div id="q92" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 92 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does every component of your agency's Section 508 feedback/complaint process fully conform to
                    all applicable Section 508 standards? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
                <li>Unknown</li>
                <li>N/A- agency does not offer a process for submitting Section-508 related feedback and complaints</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u92" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:093-->
<div id="q93" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 93 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency have a process for tracking and reporting Section 508 non-compliance related
                    complaints (i.e., administrative complaints filed by an individual or civil actions against the
                    agency as a result of non-compliance with Section 508)? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u93" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:094-->
<div id="q94" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 94 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency's process for tracking and reporting Section 508 non-compliance related
                    complaints incorporate complaints from contractors? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
                <li>Unknown</li>
                <li>N/A</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u94" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:095-->
<div id="q95" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 95 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate the total number of Section 508 non-compliance related complaints (i.e., administrative
                    complaints filed by an individual or civil actions) your agency has received within the reporting
                    period. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u95" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:096-->
<div id="q96" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 96 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Of the total number of Section 508 non-compliance related complaints received within the
                    reporting period, please provide the total number filed by an employee or applicant for employment.
                    (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>Unknown</li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 95 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u96" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:097-->
<div id="q97" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 97 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Of the total number of Section 508 non-compliance related complaints the agency received within
                    the reporting period, indicate how many were successfully addressed, resolved, or adjudicated by the
                    agency. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>Unknown</li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 95 Conformance Metrics is greater
                    than 0. </p>
            </div>
        </div>
        {% assign this-uid = "u97" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:098-->
<div id="q98" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 98 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency make available a public feedback mechanism on your primary agency website to
                    receive feedback on Section 508 accessibility issues as required by OMB guidance? (*Required)
                </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
                <li>Unknown</li>
                <li>N/A- agency does not have a public agency website</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u98" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:099-->
<div id="q99" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 99 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Please estimate the total number of public feedback responses about Section 508 accessibility
                    issues that were received through the standard feedback mechanism on your agency website in the
                    reporting period. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>Unknown</li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 98 Conformance Metrics is Yes. </p>
            </div>
        </div>
        {% assign this-uid = "u99" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:100-->
<div id="q100" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 100 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Of the total estimated public feedback responses about Section 508 accessibility issues that
                    were received through the standard feedback mechanism on your agency websites, estimate how many
                    were successfully addressed, resolved, or adjudicated by the agency within the reporting period.
                    (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>Unknown</li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 98 Conformance Metrics is Yes. </p>
            </div>
        </div>
        {% assign this-uid = "u100" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:101-->
<div id="q101" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 101 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Review the last 10 solicitations your agency released within the reporting period to procure ICT
                    and/or to procure services to produce ICT. If your agency did not have at least 10 solicitations
                    released to procure ICT and/or to procure services to produce ICT, review what is available. Of
                    those reviewed, what percentage of the solicitations included all applicable Section 508
                    requirements? Please input N/A if your agency has not issued any solicitations for ICT. (*Required)
                </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number (percentage)</li>
                <li>Unknown</li>
                <li>N/A- Agency does not release ICT solicitations</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u101" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:102-->
<div id="q102" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 102 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Please identify your agency's top five most common Section 508 non-conformance issues identified
                    by testing and/or user feedback. (*Required) </strong></p>
            <p> Select five: </p>
            <p>
            <ol type="a">
                <li>Keyboard access issues</li>
                <li>Interactive elements missing programmatic accessible name/description</li>
                <li>Forms with insufficient visible labels</li>
                <li>Insufficient color contrast</li>
                <li>Missing or insufficient text alternatives for images</li>
                <li>Missing or ambiguous link text</li>
                <li>Data tables not adequately marked up for Assistive Technology</li>
                <li>Color use only to convey meaning</li>
                <li>Missing skip navigation links</li>
                <li>Missing or insufficient captions for synchronized multimedia</li>
                <li>Missing or insufficient audio descriptions for synchronized multimedia</li>
                <li>Lack of visible focus</li>
                <li>Focus order does not preserve meaning and operability of the content</li>
                <li>Other [input text field which will allow up to 5 inputs]</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u102" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:103-->
<div id="q103" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 103 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency provide a shared service, a reimbursable service, and/or e-gov line of business
                    to other agencies or public entities? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u103" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:104-->
<div id="q104" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 104 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> You selected your agency provides a shared service, reimbursable service and/or e-gov line of
                    business to other agencies or public entities. Do the ICT services provided by your agency fully
                    conform to Section 508 standards? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes, all ICT services fully conform to Section 508 standards</li>
                <li>Yes, but only some ICT services fully conform to Section 508 standard</li>
                <li>No, none of the ICT services fully conform to Section 508 standards</li>
                <li>Unknown</li>
                <li>N/A- services provided are not ICT services</li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 103 Conformance Metrics is Yes.
                </p>
            </div>
        </div>
        {% assign this-uid = "u104" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:105-->
<div id="q105" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 105 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Is there anything additional to share regarding your agency's Section 508 program or equivalent?
                    Are there any aspects of your agency's Section 508 program or equivalent that were not included in
                    this assessment? (Optional) </strong></p>
            <p> Open response-text </p>
        </div>
        {% assign this-uid = "u105" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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

<div id="prev-next-section" style="justify-content: space-around;">
    <a class="prev-page" title="Go to previous page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-10/">
        < Previous</a>
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