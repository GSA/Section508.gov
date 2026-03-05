(function () {
  /**
   * Expand or collapse accordions by group
   * data-target = space-separated container IDs
   * data-action = expand | collapse
   */
  function handleGroupToggle(event) {
    const btn = event.currentTarget;
    const targets = btn.getAttribute("data-target")?.split(/\s+/) || [];
    const action = btn.getAttribute("data-action");

    targets.forEach(targetId => {
      const buttons = document.querySelectorAll(
        `#${targetId} .usa-accordion__button`
      );
      const contents = document.querySelectorAll(
        `#${targetId} .usa-accordion__content`
      );

      const expand = action === "expand";

      buttons.forEach(b =>
        b.setAttribute("aria-expanded", expand ? "true" : "false")
      );
      contents.forEach(c =>
        expand ? c.removeAttribute("hidden") : c.setAttribute("hidden", "")
      );
    });

    updateHashFromOpenAccordions();
  }

  /**
   * Sync URL hash with all open accordions
   */
  function updateHashFromOpenAccordions() {
    const openButtons = document.querySelectorAll(
      ".usa-accordion__button[aria-expanded='true']"
    );

    if (!openButtons.length) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
      return;
    }

    const ids = Array.from(openButtons)
      .map(btn => btn.id)
      .filter(Boolean)
      .join(",");

    if (ids) {
      history.replaceState(null, "", `#${ids}`);
    }
  }

  /**
   * Open accordions specified in the URL hash
   * Hash format: #accordion-id-1,accordion-id-2
   */
  function openAccordionFromHash() {
    const hash = window.location.hash;
    if (!hash) return;

    // Collapse everything first
    document.querySelectorAll(".usa-accordion__button").forEach(btn =>
      btn.setAttribute("aria-expanded", "false")
    );
    document.querySelectorAll(".usa-accordion__content").forEach(content =>
      content.setAttribute("hidden", "")
    );

    const ids = hash.slice(1).split(",");
    let focusTarget = null;

    ids.forEach(id => {
      const button = document.getElementById(id);
      if (!button?.classList.contains("usa-accordion__button")) return;

      const contentId = button.getAttribute("aria-controls");
      const content = document.getElementById(contentId);

      if (content) {
        button.setAttribute("aria-expanded", "true");
        content.removeAttribute("hidden");
        content.classList.add("usa-accordion__content--expanded");

        if (!focusTarget) focusTarget = button;
      }
    });

    if (focusTarget) {
      focusTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      focusTarget.focus({ preventScroll: true });
    }
  }

  /**
   * Initialization
   */
  function init() {
    // Group expand / collapse buttons
    document
      .querySelectorAll(".usa-button[data-action][data-target]")
      .forEach(btn => btn.addEventListener("click", handleGroupToggle));

    // Individual accordion buttons → update hash
    document.querySelectorAll(".usa-accordion__button").forEach(button => {
      button.addEventListener("click", () => {
        // Let USWDS finish toggling first
        setTimeout(updateHashFromOpenAccordions, 0);
      });
    });

    // Open accordions on initial load (after USWDS initializes)
    setTimeout(openAccordionFromHash, 50);
  }

  // Initial page load
  document.addEventListener("DOMContentLoaded", init);

  // In-page jump links & manual hash changes
  window.addEventListener("hashchange", () => {
    // Allow native anchor scroll to complete
    setTimeout(openAccordionFromHash, 0);
  });
})();