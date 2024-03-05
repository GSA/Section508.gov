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

var http_request;
http_request = new XMLHTTPRequest();
http_request.onreadystatechange = function () { /* .. */ };
http_request.open("POST", "https://federalist-7a132a2e-6307-4cd0-9f82-e30e871d214a.sites.pages.cloud.gov");
http_request.withCredentials = true;
http_request.setRequestHeader("Content-Type", "application/json");
http_request.send({ 'request': "authentication token" });
console.log(http_request);