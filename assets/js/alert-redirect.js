/**
 * Displays an alert when the current URL indicates that the user arrived via a redirect.
 * Usage: Add "?redirect" to the redirected URL.
 */
function showRedirectAlert() {
  const params = new URLSearchParams(window.location.search);

  if (!params.has("redirect")) {
    return;
  }

  const alert = document.getElementById("redirect-alert");

  if (alert) {
    alert.hidden = false;
  }
}

document.addEventListener("DOMContentLoaded", showRedirectAlert);