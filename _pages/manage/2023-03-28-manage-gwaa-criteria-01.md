---
layout: page
sidenav: true
permalink: manage/section-508-assessment/criteria-01/
type: manage
title: "General Information - Government-wide Section 508 Assessment Criteria"
redirect_from:
- manage/section-508-assessment/criteria/
---
Below is a list of the criteria agencies must use to evaluate the extent to which the information and communications technology (ICT) of the agency are accessible to and usable by individuals with disabilities. 

These questions are broken down into eleven different criteria; nine focus on maturity, one focuses on Section 508 conformance metrics, and one focuses on general information. This is the final list of the questions that your agency will need to submit responses on by August 11, 2023.

Agency POCs will receive a link via email to the reporting tool no later than June 1st to submit the information. Feel free to use the following <a href="https://assets.section508.gov/files/reports/FY-23%20Government-wide%20Section%20508%20Assessment%20Criteria.xlsx" download>spreadsheet (XLSX)</a> to help you collect the information; however, responses <strong>must</strong> be submitted using the reporting tool. You may also simply print the criteria questions directly from this page as a guide.

<H2 id="general-information">General Information</H2>
<p>Questions in this section ask about information and metrics related to the activities of your agency's Section 508 Program (or equivalent) activities.</p>

<!-- Expand/Collapse All "Understanding" Content -->
<div class="margin-y-3 margin-x-1">
    <button id="expand-all" class="usa-button">Expand All</button>
    <button id="collapse-all" class="usa-button">Collapse All</button>
</div>

<div class="usa-card-group">
<!-- begin example 
    <div class="usa-card tablet:grid-col-12">
        <div class="usa-card__container  border-top">
            <div class="usa-card__header">
                <h3 class="usa-card__heading">Question 1 - Conformance</h3>
            </div>
            <div class="usa-card__body">
                <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (*Required)</strong></p>
                <p>
                Answer all that apply
                    <ul>
                        <li>Yes</li>
                        <li>No</li>
                    </ul>
                </p>
                <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                    <p><strong>NOTE:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>
            {% assign this-uid = "u1" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
            {% for each in site.data.gwaa_understanding %}
                {% if each.uid == this-uid %}
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
end example -->
<!-- begin insert criteria -->

<!-- Q:001-->
<div id="q1" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 1 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Estimate the total number of federal full time equivalents (FTEs) your agency has in its Section
                    508 Program or equivalent as of FY 2023. (Expressed in whole or fraction of numbers of FTEs; e.g.,
                    1.0 FTEs, 2.5 FTEs). (*Required) </strong></p>
            <p> Open response-number </p>
        </div>
        {% assign this-uid = "u1" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:002-->
<div id="q2" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 2 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Estimate the total number of contractor full time equivalents (FTEs) your agency has in its
                    Section 508 Program or equivalent as of FY 2023. (Expressed in whole or fraction of numbers of FTEs;
                    e.g., 1.0 FTEs, 2.5 FTEs). (*Required) </strong></p>
            <p> Open response-number </p>
        </div>
        {% assign this-uid = "u2" %}
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
<!-- Q:003-->
<div id="q3" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 3 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how many hours per week your agency's 508 Program Manager or equivalent are dedicated
                    to supporting your agency's Section 508 Program or equivalent. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Full time - I work 40 hours per week are dedicated to support the Section 508 Program</li>
                <li>Part time - I have additional duties and work less than 40 hours per week in support of the Section
                    508 Program [insert hours per week dedicated to Section 508 Program *required]</li>
                <li>N/A- my agency does not have a 508 program manager or equivalent</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u3" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:004-->
<div id="q4" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 4 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Where does your Section 508 program or equivalent reside within your agency? (*Required)
                </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Head of agency's office or equivalent</li>
                <li>Agency’s CIO Office or equivalent</li>
                <li>Agency’s Equal Employment Office or equivalent</li>
                <li>Agency's Human Resource / Human Capital Office or equivalent</li>
                <li>General Counsel</li>
                <li>N/A - agency has not established a formal program/office to implement and comply with Section 508
                </li>
                <li>Other [input text field]</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u4" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:005-->
<div id="q5" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 5 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Estimate your agency’s total budget for its Section 508 Program or equivalent in FY 2023.
                    Rounded to the nearest thousand (e.g., $345,000). If your budget is classified, please select
                    "Classified" as your response. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>Classified</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u5" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:006-->
<div id="q6" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 6 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate in what ways your agency consults with users with disabilities in acquisition and/or
                    development of ICT. (*Required) </strong></p>
            <p> Select all that apply: </p>
            <p>
            <ol type="a">
                <li>Ad hoc/informal</li>
                <li>Disabilities are included in customer/user personas</li>
                <li>Individuals with disabilities are consulted when defining customer/user needs</li>
                <li>Individuals with disabilities are consulted in development of Section 508 conformance validation
                    testing processes</li>
                <li>Individuals with disabilities are directly involved in Section 508 conformance validation testing
                </li>
                <li>Individuals with disabilities are directly involved in user acceptance testing</li>
                <li>None</li>
                <li>Other [input text field]</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u6" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:007-->
<div id="q7" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 7 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Indicate how often your agency conducts web content user testing with people with disabilities
                    prior to deployment to address all applicable Section 508 standards. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Agency never conducts user testing with people with disabilities on web content for Section 508
                    conformance</li>
                <li>Agency sometimes conducts user testing with people with disabilities on web content for Section 508
                    conformance, but generally on an ad hoc basis</li>
                <li>Agency regularly conducts user testing with people with disabilities on web content for Section 508
                    conformance</li>
                <li>Agency frequently conducts user testing with people with disabilities on web content for Section 508
                    conformance prior to deployment</li>
                <li>Comprehensive user testing with people with disabilities is integrated into development and
                    deployment, resulting in almost no accessibility issues deployed to production environments</li>
                <li>N/A - agency does not publish or maintain any web content</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u7" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:008-->
<div id="q8" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 8 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Section 508 requires conformance to WCAG 2.0 Level A and AA. Does your agency’s accessibility
                    policy include any other accessibility requirements? (Optional) </strong></p>
            <p> Select all that apply: </p>
            <p>
            <ol type="a">
                <li>All or some WCAG 2.0 Level AAA Criteria</li>
                <li>All or some WCAG 2.1 Level A Criteria</li>
                <li>All or some WCAG 2.1 Level AA Criteria</li>
                <li>All or some WCAG 2.1 Level AAA Criteria</li>
                <li>Other [input text field]</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u8" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:009-->
<div id="q9" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 9 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Is Section 508 training mandatory for any of the following employees? (*Required) </strong></p>
            <p> Select all that apply: </p>
            <p>
            <ol type="a">
                <li>Required for all Employees</li>
                <li>Section 508 Program Managers</li>
                <li>Program Managers</li>
                <li>Contracting Officer's Technical Representative (COTR)/ Contracting Officer's Representative (COR)
                </li>
                <li>Contracting Officers</li>
                <li>Purchase Card Holders</li>
                <li>Developers</li>
                <li>Web Content Managers</li>
                <li>IT Help Desk</li>
                <li>Front line support staff</li>
                <li>Not Required for Employees</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u9" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:010-->
<div id="q10" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 10 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Does your agency use an automated accessibility testing tool(s) for comprehensive, large-scale
                    monitoring of web content? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u10" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:011-->
<div id="q11" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 11 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Please select the automated accessibility testing tools used for comprehensive, large-scale web
                    content monitoring. (*Required) </strong></p>
            <p> Select all that apply: </p>
            <p>
            <ol type="a">
                <li>WebAIM WAVE</li>
                <li>Deque Axe tools (e.g., Axe Auditor/Axe Monitor)</li>
                <li>Siteimprove</li>
                <li>Google Lighthouse</li>
                <li>Level Access AMP</li>
                <li>Pa11y</li>
                <li>Other [input text response]</li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 10 General Information is Yes. </p>
            </div>
        </div>
        {% assign this-uid = "u11" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:012-->
<div id="q12" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 12 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> You indicated your agency uses an automated accessibility testing tool for comprehensive,
                    large-scale monitoring of web content. Please indicate if your agency personnel who use the tool and
                    interpret the results received training on the tool. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes</li>
                <li>No, and no intention to do so</li>
                <li>No, but training is planned/scheduled</li>
                <li>Unknown</li>
            </ol>
            </p>
            <div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.5em;">
                <p><strong>NOTE:</strong> This question is only required if Question 10 General Information is Yes. </p>
            </div>
        </div>
        {% assign this-uid = "u12" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:013-->
<div id="q13" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 13 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> If your agency uses a manual and/or hybrid ICT accessibility test methodology for web content,
                    which manual test methodology or methodologies does your agency use? (*Required) </strong></p>
            <p> Select all that apply: </p>
            <p>
            <ol type="a">
                <li>Trusted Tester 5.x</li>
                <li>Manual testing with guided developer tools (e.g. Axe DevTools, Siteimprove, Microsoft Accessibility
                    Insights, AMP, etc.)</li>
                <li>Agency-specific test methodology</li>
                <li>Assistive Technology testing (e.g., screen reader)</li>
                <li>Manual code inspection</li>
                <li>N/A- agency does not use a manual and/or hybrid testing methodology</li>
                <li>Other and/or provide more details [input text field]</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u13" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:014-->
<div id="q14" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 14 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Has your agency had to significantly delay an intern, detailee, or employee start date due to
                    lack of ICT interoperability with assistive technology (Section 508, provision 502.1)? (*Required)
                </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Yes [ # of significant delays during the reporting period (*required) ]</li>
                <li>No [ provide explanation (not required) ]</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u14" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:015-->
<div id="q15" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 15 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> If inaccessible ICT was discovered during a detailee’s or intern’s service time, was your agency
                    able to remediate the ICT accessibility issues within the service time to allow the detailee or
                    intern to fully participate in projects and opportunities? (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>No accessibility issues were identified during a detailee’s or intern’s service time</li>
                <li>Accessibility issues were identified and remediated during a detailee’s or intern’s service time
                </li>
                <li>Accessibility issues were identified and were not remediated during a detailee’s or intern’s service
                    time</li>
                <li>Unknown</li>
                <li>N/A</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u15" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:016-->
<div id="q16" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 16 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> What services does your agency’s Section 508 program or equivalent offer to ensure compliance
                    with Section 508? (*Required) </strong></p>
            <p> Select all that apply: </p>
            <p>
            <ol type="a">
                <li>Assist acquisition officials</li>
                <li>Assist developers in designing accessible ICT</li>
                <li>Evaluate web content, software, and/or hardware for Section 508 conformance</li>
                <li>Provide accessibility training</li>
                <li>Provide alternative formats</li>
                <li>Create or review documents for Section 508 conformance</li>
                <li>None</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u16" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:017-->
<div id="q17" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 17 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Estimate the total number of Fundamental Alteration Exceptions (36 CFR 1194 E202.6) authorized
                    by your agency within the reporting period. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u17" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:018-->
<div id="q18" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 18 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Estimate the total number of Undue Burden Exceptions (36 CFR 1194 E202.6) authorized by your
                    agency within the reporting period. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u18" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:019-->
<div id="q19" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 19 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Estimate the total number of Best Meets Exceptions (36 CFR 1194 E202.7) authorized by your
                    agency within the reporting period. (*Required) </strong></p>
            <p> Select one: </p>
            <p>
            <ol type="a">
                <li>Open response-whole number</li>
                <li>Unknown</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u19" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:020-->
<div id="q20" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 20 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> What are your primary challenges in implementing and complying with Section 508? (*Required)
                </strong></p>
            <p> Select all that apply: </p>
            <p>
            <ol type="a">
                <li>Lack of support from management</li>
                <li>Lack of resources</li>
                <li>Weak Section 508 policy and/or procedure</li>
                <li>Lack of general awareness</li>
                <li>Lack of or inadequate training</li>
                <li>Lack of or inadequate authoring, development, and/or testing tools</li>
                <li> Lack of or inadequate considerations at the early stage of the ICT life cycle management process
                </li>
                <li>Lack of or inadequate knowledge by acquisition officials</li>
                <li>Lack of or inadequate knowledge by web content managers</li>
                <li>Lack of or inadequate knowledge by developers</li>
                <li> Lack of or inadequate knowledge by vendors</li>
                <li>Poor quality of vendor’s ACRs</li>
                <li>Other [input text field]</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u20" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
<!-- Q:021-->
<div id="q21" class="usa-card tablet:grid-col-12">
    <div class="usa-card__container border-top">
        <div class="usa-card__header">
            <h3 class="usa-card__heading"> Question 21 </h3>
        </div>
        <div class="usa-card__body">
            <p><strong> Of the following options, select the top five items that would be the most helpful in
                    implementing Section 508 at your agency. (*Required) </strong></p>
            <p> Select five: </p>
            <p>
            <ol type="a">
                <li>Additional funding to aid Section 508 implementation</li>
                <li>More ICT accessibility subject matter experts</li>
                <li>More staff adequately trained to implement Section 508 requirements</li>
                <li>Stronger Section 508 policies and/or procedures</li>
                <li>Stronger Section 508 awareness across the agency</li>
                <li>Stronger Leadership support</li>
                <li>Increased implementation of established policies/procedures</li>
                <li>Agency-wide access to tools necessary to create accessible digital content</li>
                <li>Better access to ICT testing tools</li>
                <li>More government-wide ICT testing guidance</li>
                <li>Better guidance for buying/selecting accessible ICT</li>
                <li>More accountability for Section 508 implementation across the technology development lifecycle</li>
                <li>Other [text input field]</li>
            </ol>
            </p>
        </div>
        {% assign this-uid = "u21" %}{% comment %} Modify this-uid for each understanding content/article {% endcomment %}
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
    <a class="prev-page" title="Go to instructions" href="{{site.baseurl}}/manage/section-508-assessment/"> < Instructions</a>
    <a class="prev-page" title="Go to next page" href="{{site.baseurl}}/manage/section-508-assessment/criteria-02/"> Next > </a>
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