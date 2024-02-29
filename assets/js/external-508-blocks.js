---
sidenav: false
---
{% raw %}
document.addEventListener('DOMContentLoaded', function() {
 let header = `{% endraw %}{% include header_banner.html %}{% include menu.html primary_navigation=site.primary_navigation  secondary_navigation=site.secondary_navigation %}{% raw %}`;
 const footer = `{% endraw %}{% include footer.html %}{% raw %}`;
 header += '<div id="main-content"></div>';
 document.getElementById('header-508').innerHTML = header
   .replace(/src="\//g, 'src="{% endraw %}{{ site.url }}{% raw %}/')
   .replace(/href="\//g, 'href="{% endraw %}{{ site.url }}{% raw %}/');
 document.getElementById('footer-508').innerHTML = footer
   .replace(/src="\//g, 'src="{% endraw %}{{ site.url }}{% raw %}/')
   .replace(/href="\//g, 'href="{% endraw %}{{ site.url }}{% raw %}/');
});
{% endraw %}