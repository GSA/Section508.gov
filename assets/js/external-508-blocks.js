---
sidenav: false
---
{% raw %}
document.addEventListener('DOMContentLoaded', function() {
 let header = `{% endraw %}{% include header.html %}{% include menu.html primary_navigation=site.primary_navigation  secondary_navigation=site.secondary_navigation %}{% raw %}`;
 const footer = `{% endraw %}{% include footer.html %}{% raw %}`;
 header += '<div id="main-content"></div>';
 document.getElementById('header-508').innerHTML = header
   .replace(/src="\//g, 'src="https://www.section508.gov/')
   .replace(/href="\//g, 'href="https://www.section508.gov/');
 document.getElementById('footer-508').innerHTML = footer
   .replace(/src="\//g, 'src="https://www.section508.gov/')
   .replace(/href="\//g, 'href="https://www.section508.gov/');
});
{% endraw %}