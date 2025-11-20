// Handle Expand/Collapse All dynamically
document.querySelectorAll(".usa-button[data-action]").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const action = btn.getAttribute("data-action"); // "expand" or "collapse"
    const accordionButtons = document.querySelectorAll(`#${targetId} .usa-accordion__button`);
    const accordionContents = document.querySelectorAll(`#${targetId} .usa-accordion__content`);

    if (action === "expand") {
      accordionButtons.forEach(b => b.setAttribute("aria-expanded", "true"));
      accordionContents.forEach(c => c.removeAttribute("hidden"));
    } else if (action === "collapse") {
      accordionButtons.forEach(b => b.setAttribute("aria-expanded", "false"));
      accordionContents.forEach(c => c.setAttribute("hidden", ""));
    }

    updateHashFromOpenAccordions();
  });
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

function openAccordionFromHash() {
  const hash = window.location.hash; // e.g., "#overview-01,overview-02"
  if (!hash) return;

  // Collapse all accordions first
  document.querySelectorAll(".usa-accordion__button").forEach(button => {
    button.setAttribute("aria-expanded", "false");
  });
  document.querySelectorAll(".usa-accordion__content").forEach(content => {
    content.setAttribute("hidden", ""); // USWDS uses hidden attribute
  });

  let focusTarget = null;
  const ids = hash.slice(1).split(",");

  ids.forEach(id => {
    const button = document.getElementById(id);
    if (!button || !button.classList.contains("usa-accordion__button")) return;

    const contentId = button.getAttribute("aria-controls");
    const content = document.getElementById(contentId);
    if (content) {
      button.setAttribute("aria-expanded", "true");
      content.removeAttribute("hidden");

      // For extra safety: add USWDS class to make sure content shows
      content.classList.add("usa-accordion__content--expanded");

      if (!focusTarget) focusTarget = button; // focus first one
    }
  });

  if (focusTarget) {
    focusTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    focusTarget.focus({ preventScroll: true });
  }
}

// Run on page load after USWDS initializes
window.addEventListener("DOMContentLoaded", () => {
  // Wait a tick in case USWDS JS hasn't initialized accordions yet
  setTimeout(() => {
    openAccordionFromHash();

    // Attach listeners to update hash dynamically
    document.querySelectorAll(".usa-accordion__button").forEach(button => {
      button.addEventListener("click", () => {
        setTimeout(updateHashFromOpenAccordions, 0);
      });
    });
  }, 50);
});


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