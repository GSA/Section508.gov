--- 
layout: wide
sidenav: false
type: page
permalink: contributors/
title: Section508.gov Content Contribution
---
<h2>Section508.gov Content Contribution</h2>
<p>Much of the content on this site is developed in collaboration with other agencies and/or directly contributed by members of the federal IT accessibility community. Our growning list of contributors is displayed below.</p>
<p>We welcome any feedback and suggestions for improvement. We also welcome suggestions for new content and updates to existing content. If you have suggestions, or if you are interested in contributing content, please email us at <a href="mailto:section.508@gsa.gov">section.508@gsa.gov</a>.</p>
<h3>Contributors</h3>
<div class="grid-container margin-y-2 padding-x-0">
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

