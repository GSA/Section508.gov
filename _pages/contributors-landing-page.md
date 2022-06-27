--- 
layout: wide
sidenav: false
type: page
permalink: contributors/
title: Section508.gov Content Contribution
---
<h2>Section508.gov Content Contribution</h2>
<p>This site includes content developed in collaboration with other agencies and/or content that is directly contributed by members of the federal IT accessibility community. Our growning list of contributors is displayed below.</p>
<p>We welcome any feedback and suggestions for improvement. We also welcome suggestions for new content and updates to existing content. If you have suggestions, or if you are interested in contributing content, please email us at <a href="mailto:section.508@gsa.gov">section.508@gsa.gov</a>.</p>
<div>
    <div class="margin-top-2 margin-bottom-neg-05">
        <ul class="usa-button-group usa-button-group--segmented">
            <li class="usa-button-group__item">
                <button class="usa-button">Contributors</button>
            </li>
            <li class="usa-button-group__item">
                <button class="usa-button usa-button--outline">Contributions by Agency</button>
            </li>
        </ul>
    </div>
    <div class="grid-container margin-bottom-2 border-2px border-base-light shadow-2">
        <div id="contrib-tab" class="">
            {% for contributors in site.contributors %}
                <div class="grid-row flex-wrap margin-y-1 grid-gap-1 border-bottom-1px border-base-lighter">
                    <div class="grid-col-auto">
                        <img class="circle-8 border-05 border-base-light shadow-1" src="{{ contributors.image_url }}" alt="Photo: {{ contributors.display_name }}" style="vertical-align:middle">
                    </div>
                    <div class="grid-col-9 padding-y-1">
                        <a href="{{ site.baseurl }}{{ contributors.url }}{{ contributors.output_ext }}"><strong>{{ contributors.display_name }}</strong></a><br>
                        {% if contributors.affiliation_long or contributors.affiliation_short or contributors.location %}
                                {% if contributors.affiliation_long %}
                                    {{ contributors.affiliation_long }}
                                {% endif %}
                                {% if contributors.affiliation_long and contributors.affiliation_short %}
                                    &lpar;{{ contributors.affiliation_short }}&rpar;
                                {% else %}    
                                    {% if contributors.affiliation_short %}
                                        {{ contributors.affiliation_short }}
                                    {% endif %}
                                {% endif %}
                                {% if contributors.affiliation_short and contributors.location %}
                                | 
                                {% endif %}
                                {% if contributors.location %}
                                {{ contributors.location }}
                                {% endif %}
                        {% endif %}
                    </div>
                </div>
            {% endfor %}
        </div>
        <div id="agency-tab" class="">
            {% assign str_agencies = "" %}
            {% assign str_agencies_short = "" %}
            {% for contributors in site.contributors %}
                {% assign contrib_agency_long = contributors.affiliation_long %}
                {% assign contrib_agency_short = contributors.affiliation_short %}
                {% capture str_contrib_agency %}{{ contrib_agency_long }} ({{ contrib_agency_short }}){% endcapture %}
                {% if str_agencies == "" %}
                    {% capture str_agencies %}{{str_contrib_agency}}{% endcapture %}
                {% else %}
                    {% capture str_agencies %}{{str_agencies}},{{str_contrib_agency}}{% endcapture %}
                {% endif %}
                {% if str_agencies_short == "" %}
                    {% capture str_agencies_short %}{{contrib_agency_short}}{% endcapture %}
                {% else %}
                    {% capture str_agencies_short %}{{str_agencies_short}},{{contrib_agency_short}}{% endcapture %}
                {% endif %}
            {% endfor %}
            {% assign agencies = str_agencies | split: "," | uniq %}
            {% assign agencies_short = str_agencies_short | split: "," | uniq %}
            {% assign agencies = agencies %}
            {% for item in agencies %}
                <div class="grid-row">
                    <h3>{{ item }}</h3>
                </div>
                <div class="grid-row">
                    <ul>
                    {% for page in site.pages %}
                        {% assign contribs = page.contributors | downcase %}
                        {% assign this_agency = "nasa" %}
                        {% if contribs contains this_agency %}
                            <li><a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a> {{ agencies_short[0] }}</li>
                        {% endif %}
                    {% endfor %}
                    </ul>
                </div>
            {% endfor %}
        </div>
    </div>
</div>
