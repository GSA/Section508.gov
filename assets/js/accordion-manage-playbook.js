/* Expand/Collapse All */
$("#expand-all").on("click", function () {
  $("#accordion-group-kpi .usa-accordion__button").attr("aria-expanded", "true");
  $("#accordion-group-kpi .usa-accordion__content").removeAttr("hidden");
  updateHashFromOpenAccordions();
});

$("#collapse-all").on("click", function () {
  $("#accordion-group-kpi .usa-accordion__button").attr("aria-expanded", "false");
  $("#accordion-group-kpi .usa-accordion__content").attr("hidden", "");
  updateHashFromOpenAccordions();
});

/* Sync hash with all open accordions */
function updateHashFromOpenAccordions() {
  const openButtons = document.querySelectorAll(
    ".usa-accordion__button[aria-expanded='true']"
  );
  if (openButtons.length > 0) {
    const ids = Array.from(openButtons).map(btn => btn.id).join(",");
    history.replaceState(null, "", "#" + ids);
  } else {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

/* Open/Focus Accordions from Hash */
function openAccordionFromHash() {
  const hash = window.location.hash; // e.g., "#kpi-1,kpi-2"

  // Only act if a hash is present
  if (hash) {
    // Collapse everything first
    document.querySelectorAll(
      "#accordion-group-checklist .usa-accordion__button, #accordion-group-kpi .usa-accordion__button"
    ).forEach(button => button.setAttribute("aria-expanded", "false"));
    document.querySelectorAll(
      "#accordion-group-checklist .usa-accordion__content, #accordion-group-kpi .usa-accordion__content"
    ).forEach(content => content.setAttribute("hidden", ""));

    let focusTarget = null;

    const ids = hash.slice(1).split(",");
    ids.forEach(id => {
      const button = document.getElementById(id);
      if (button) {
        const contentId = button.getAttribute("aria-controls");
        const content = document.getElementById(contentId);
        if (content) {
          button.setAttribute("aria-expanded", "true");
          content.removeAttribute("hidden");
          if (!focusTarget) {
            focusTarget = button; // first one in hash
          }
        }
      }
    });

    if (focusTarget) {
      focusTarget.focus();
    }
  }
}

// Run on page load
window.addEventListener("DOMContentLoaded", () => {
  openAccordionFromHash();

  // Attach listeners to keep hash updated
  document.querySelectorAll(".usa-accordion__button").forEach(button => {
    button.addEventListener("click", () => {
      // Toggle handled by USWDS JS, so wait a tick
      setTimeout(updateHashFromOpenAccordions, 0);
    });
  });
});