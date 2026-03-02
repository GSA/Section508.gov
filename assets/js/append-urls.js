/* BEGIN - APPEND URLS TO LINKS - DISABLED BY DEFAULT, THEN REVEALED BY PRINT STYLE*/
document.querySelectorAll('.usa-layout-docs__main a').forEach(link => {
  // Avoid duplicating
  if (!link.dataset.urlAppended) {
    let urlText = link.getAttribute('href');
    if (!urlText) return; // skip links without href

    // Prepend full base for relative links
    if (urlText.startsWith('/')) {
      urlText = 'https://www.section508.gov' + urlText;
    }

    // Create the span element for print
    const span = document.createElement('span');
    span.className = 'appended-url';
    span.textContent = ' (' + urlText + ')';

    // Append the span
    link.appendChild(span);

    // Mark as processed
    link.dataset.urlAppended = 'true';
  }
});
/* END */
 