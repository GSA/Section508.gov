---
sidenav: false
---
{% assign myUrlPrefix = '' %}
{% if site.baseurl contains '/preview' %}
{% assign myUrlPrefix = 'https://federalist-7a132a2e-6307-4cd0-9f82-e30e871d214a.sites.pages.cloud.gov' %}
{% else %}
{% assign myUrlPrefix = site.url %}
{% endif %}
{% raw %}
document.addEventListener('DOMContentLoaded', function() {
 let header = `{% endraw %}{% include header_banner.html %}{% include menu.html primary_navigation=site.primary_navigation  secondary_navigation=site.secondary_navigation %}{% raw %}`;
 const footer = `{% endraw %}{% include footer.html %}{% raw %}`;
 document.getElementById('header-508').innerHTML = header
   .replace(/src="\//g, 'src="{% endraw %}{{ myUrlPrefix }}{% raw %}/')
   .replace(/href="\//g, 'href="{% endraw %}{{ myUrlPrefix }}{% raw %}/');
 document.getElementById('footer-508').innerHTML = footer
   .replace(/src="\//g, 'src="{% endraw %}{{ myUrlPrefix }}{% raw %}/')
   .replace(/href="\//g, 'href="{% endraw %}{{ myUrlPrefix }}{% raw %}/');
});
{% endraw %}

const express = require("express");
const app = express();
// Access-Control-Allow-Origin
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://federalist-7a132a2e-6307-4cd0-9f82-e30e871d214a.sites.pages.cloud.gov");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});