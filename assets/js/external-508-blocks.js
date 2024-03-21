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
document.addEventListener('DOMContentLoaded', function () {
    let header = `{% endraw %}{% include header_banner.html %} <div class="usa-overlay"></div> {% include menu.html primary_navigation=site.primary_navigation  secondary_navigation=site.secondary_navigation %}{% raw %}`;
    const footer = `{% endraw %}{% include footer.html %}{% raw %}`;
    document.getElementById('header-508').innerHTML = header
        .replace(/src="\//g, 'src="{% endraw %}{{ myUrlPrefix }}{% raw %}/')
        .replace(/href="\//g, 'href="{% endraw %}{{ myUrlPrefix }}{% raw %}/');
    document.getElementById('footer-508').innerHTML = footer
        .replace(/src="\//g, 'src="{% endraw %}{{ myUrlPrefix }}{% raw %}/')
        .replace(/href="\//g, 'href="{% endraw %}{{ myUrlPrefix }}{% raw %}/');
});
function navigate(anchorTag) {
    console.log(anchorTag);
    console.log(anchorTag.parentNode.nodeName);
    console.log(anchorTag.parentNode.id);

    if (anchorTag.parentNode.id === "header-508") {
        return 'Navigating to this link will navigate away from the ACR Editor. If you continue, you will lose the data you have entered so far. Click "Cancel" to remain in the ACR Editor. Click "OK" to proceed and lose any data already entered.';
    }
}

{% endraw %}