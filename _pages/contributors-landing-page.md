--- 
layout: wide
sidenav: false
type: page
permalink: contributors/
title: Content Contributors
---
{% for contributors in site.contributors %}
<div class="grid-container border-bottom-2px">
    <div class="grid-row">
        <div class="grid-col-fill clearfix">
            <span class="float-left"><img class="circle-8" src="{{ contributors.image_url }}" alt="Photo: {{ contributors.display_name }}"></span>
            <p><a href="contributors.url">{{ contributors.display_name }}</a></p>
            {% if contributors.affiliation_short or contributors.location %}
                <p class="margin-top-05 margin-bottom-05">
                    {% if contributors.affiliation_short %}
                    {{ contributors.affiliation_short }}
                    {% endif %}
                    {% if contributors.affiliation_short and contributors.location %}
                    | 
                    {% endif %}
                    {% if contributors.location %}
                    {{ contributors.location }}
                    {% endif %}
                </p>
            {% endif %}
        </div>
    </div>
</div>
{% endfor %}

