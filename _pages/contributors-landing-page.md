--- 
layout: base
sidenav: false
type: page
permalink: contributors/
title: Section508.gov Content Contribution
---
{% include banner.html %}
<div id="main-content" class="usa-layout-docs usa-section grid-container">
<p>This site includes content developed in collaboration with other agencies and/or content that is directly contributed by members of the federal IT accessibility community. Our growning list of contributors is displayed below.</p>
<p>We welcome any feedback and suggestions for improvement. We also welcome suggestions for new content and updates to existing content. If you have suggestions, or if you are interested in contributing content, please email us at <a href="mailto:section.508@gsa.gov">section.508@gsa.gov</a>.</p>
<div>
    <div class="margin-top-2 margin-bottom-neg-05">
        <ul class="usa-button-group usa-button-group--segmented">
            <li class="usa-button-group__item">
                <button id="btn-contrib" class="contribs-button usa-button" aria-controls="contributor-tab" aria-expanded="true">Contributors</button>
            </li>
            <li class="usa-button-group__item">
                <button id="btn-agency" class="contribs-button contribs-button-click usa-button usa-button--outline" aria-controls="agency-tab" aria-expanded="false">Contributions by Agency</button>
            </li>
        </ul>
    </div>
    <div id="contrib-grid" class="grid-container margin-bottom-2 border-1px border-base-light radius-md shadow-2">
        <div id="contributor-tab" class="contribs-tab">
            {% for contributor in site.contributors %}
                {% if contributor.contributor_type == "individual" %}
                    <div class="grid-row flex-wrap margin-y-1 padding-y-1 grid-gap-1 border-bottom-1px border-base-lighter">
                        <div class="grid-col-auto">
                            <img class="circle-8 border-05 border-base-light shadow-1" src="{{ contributor.image_url }}" alt="Photo: {{ contributor.display_name }}" style="vertical-align:middle">
                        </div>
                        <div class="grid-col-9 padding-y-1">
                            <a href="{{ site.baseurl }}{{ contributor.url }}{{ contributor.output_ext }}"><strong>{{ contributor.display_name }}</strong></a><br>
                            {% if contributor.affiliation_long or contributor.affiliation_short or contributor.location %}
                                {% if contributor.affiliation_long %}
                                    {{ contributor.affiliation_long }}
                                {% endif %}
                                {% if contributor.affiliation_long and contributor.affiliation_short %}
                                    &lpar;{{ contributor.affiliation_short }}&rpar;
                                {% else %}    
                                    {% if contributor.affiliation_short %}
                                        {{ contributor.affiliation_short }}
                                    {% endif %}
                                {% endif %}
                                {% if contributor.affiliation_short and contributor.location %}
                                | 
                                {% endif %}
                                {% if contributor.location %}
                                    {{ contributor.location }}
                                {% endif %}
                            {% endif %}
                        </div>
                    </div>
                {% endif %}
            {% endfor %}
        </div>
        <div id="agency-tab" class="contribs-tab display-none">
            {% for contributor in site.contributors %}
                {% if contributor.contributor_type == "organization" %}
                    <div class="grid-row">
                        <h3 class="margin-bottom-0 margin-top-3"><a href="{{ site.baseurl }}{{ contributor.url }}{{ contributor.output_ext }}">{{ contributor.display_name }} ({{ contributor.affiliation_short }})</a></h3>
                    </div>
                    <div class="grid-row">
                        <ul class="margin-top-0 margin-bottom-3">
                            {% assign this_agency = contributor.contributor_id | downcase %}
                            {% for page in site.pages %}
                                {% assign contribs = page.contributors | downcase %}
                                {% if contribs contains this_agency %}
                                    <li class="margin-y-1"><a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a></li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    </div>
                {% endif %}
            {% endfor %}
        </div>
    </div>
</div>
</div>
<script>
    $("button.contribs-button").click(function() {
        var y = $(this).attr("id");
        var z = $(this).attr("aria-controls");
        $("button.contribs-button").each(function(){
            if ($(this).attr("id") == y)
            {
                $(this).removeClass("usa-button--outline");
                $(this).attr("aria-expanded", "true");
            } else {
                $(this).addClass("usa-button--outline");
                $(this).attr("aria-expanded", "false");
            }
        });
        $(".contribs-tab").each(function(){
            if ($(this).attr("id") == z)
            {
                $(this).removeClass("display-none");
            } else {
                $(this).addClass("display-none");
            }
        });
    });
</script>
