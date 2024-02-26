---
sidenav: false
---
{% raw %}
document.addEventListener('DOMContentLoaded', function() {
 const header = `{% endraw %}{% include header.html %}{% include menu.html primary_navigation=site.primary_navigation  secondary_navigation=site.secondary_navigation %}{% raw %}`;
 const footer = `{% endraw %}{% include footer.html %}{% raw %}`;
 document.getElementById('header-508').innerHTML = header;
 document.getElementById('footer-508').innerHTML = footer;
});
{% endraw %}