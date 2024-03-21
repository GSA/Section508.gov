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
    let externalHeader = anchorTag.closest("#header-508");
    let externalFooter = anchorTag.closest("#footer-508");
    if ((externalHeader && externalHeader.className === "section508-external-block") || (externalFooter && externalFooter.className === "section508-external-block")) {
        let result = confirm('Navigating to this link will navigate away from the ACR Editor. If you continue, you will lose the data you have entered so far. Click "Cancel" to remain in the ACR Editor. Click "OK" to proceed and lose any data already entered.');
        if (result == false) {
            //window.location.href = window.location.href;
            window.location.reload(false);
        }
        else {
            return true;
        }
    }
    return false;
}


{% endraw %}