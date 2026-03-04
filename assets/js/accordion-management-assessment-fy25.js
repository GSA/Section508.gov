(function () {
  let hashOpenObserver = null;

  function clearExpandedStyle(content) {
    content.classList.remove("usa-accordion__content--expanded");
    content.style.removeProperty("max-height");
    content.style.removeProperty("overflow-y");
  }

  function closeAllAccordions() {
    document.querySelectorAll(".usa-accordion__button").forEach(btn =>
      btn.setAttribute("aria-expanded", "false")
    );
    document.querySelectorAll(".usa-accordion__content").forEach(content => {
      content.setAttribute("hidden", "");
      clearExpandedStyle(content);
    });
  }

  function getHashTokens() {
    if (!window.location.hash) return [];
    const raw = window.location.hash.slice(1).trim();
    if (!raw) return [];
    return raw
      .split(",")
      .map(token => decodeURIComponent(token).trim())
      .filter(Boolean);
  }

  function normalizeToken(token) {
    return token.toLowerCase().replace(/[^a-z0-9-]/g, "-");
  }

  function escapeAttrValue(value) {
    if (window.CSS && typeof window.CSS.escape === "function") {
      return window.CSS.escape(value);
    }
    return value.replace(/["\\]/g, "\\$&");
  }

  function findAccordionButtonFromToken(token) {
    const normalized = normalizeToken(token);
    const tokenWithoutCommonPrefixes = normalized
      .replace(/^component-toggle-/, "")
      .replace(/^component-panel-/, "");

    const candidates = [
      token,
      token.toLowerCase(),
      normalized,
      tokenWithoutCommonPrefixes,
      `component-toggle-${token}`,
      `component-toggle-${token.toLowerCase()}`,
      `component-toggle-${normalized}`,
      `component-toggle-${tokenWithoutCommonPrefixes}`,
    ];

    for (const candidate of candidates) {
      const button = document.getElementById(candidate);
      if (button?.classList.contains("usa-accordion__button")) {
        return button;
      }
    }

    // Support links using component initials where dynamic IDs may include a numeric suffix
    // (for example, "ao-2"). Prefer exact initials and then a prefixed fallback.
    const escapedInitials = escapeAttrValue(tokenWithoutCommonPrefixes);
    const exactInitialsMatch = document.querySelector(
      `.usa-accordion__button[id="${escapedInitials}"]`
    );
    if (exactInitialsMatch) {
      return exactInitialsMatch;
    }

    const prefixedInitialsMatch = document.querySelector(
      `.usa-accordion__button[id^="${escapedInitials}-"]`
    );
    if (prefixedInitialsMatch) {
      return prefixedInitialsMatch;
    }

    return null;
  }

  function openAccordionButton(button) {
    const contentId = button.getAttribute("aria-controls");
    const content = contentId ? document.getElementById(contentId) : null;
    if (!content) return false;
    button.setAttribute("aria-expanded", "true");
    content.removeAttribute("hidden");
    clearExpandedStyle(content);
    return true;
  }

  /**
   * Expand or collapse accordions by group
   * data-target = space-separated container IDs
   * data-action = expand | collapse
   */
  function handleGroupToggle(event) {
    const btn = event.currentTarget;
    const targets = btn.getAttribute("data-target")?.split(/\s+/) || [];
    const action = btn.getAttribute("data-action");
    const expand = action === "expand";

    targets.forEach(targetId => {
      const buttons = document.querySelectorAll(
        `#${targetId} .usa-accordion__button`
      );
      const contents = document.querySelectorAll(
        `#${targetId} .usa-accordion__content`
      );

      buttons.forEach(b =>
        b.setAttribute("aria-expanded", expand ? "true" : "false")
      );
      contents.forEach(c => {
        if (expand) {
          c.removeAttribute("hidden");
        } else {
          c.setAttribute("hidden", "");
        }
        clearExpandedStyle(c);
      });
    });

    updateHashFromOpenAccordions();
  }

  /**
   * Sync URL hash with all open accordions
   */
  function updateHashFromOpenAccordions() {
    const openButtons = document.querySelectorAll(
      "#accordion-group-components .usa-accordion__button[aria-expanded='true']"
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
   * Supported hash formats:
   * - #accordion-id-1,accordion-id-2
   * - #AO (component initials resolved to component-toggle-ao)
   */
  function openAccordionFromHash() {
    const tokens = getHashTokens();
    if (!tokens.length) return false;

    const resolvedButtons = tokens
      .map(findAccordionButtonFromToken)
      .filter(Boolean);

    if (!resolvedButtons.length) {
      return false;
    }

    closeAllAccordions();

    let focusTarget = null;
    resolvedButtons.forEach(button => {
      if (openAccordionButton(button) && !focusTarget) {
        focusTarget = button;
      }
    });

    if (focusTarget) {
      focusTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      focusTarget.focus({ preventScroll: true });
    }

    return true;
  }

  function connectHashObserver() {
    if (hashOpenObserver) {
      hashOpenObserver.disconnect();
      hashOpenObserver = null;
    }

    if (!getHashTokens().length) return;

    hashOpenObserver = new MutationObserver(() => {
      if (openAccordionFromHash()) {
        hashOpenObserver.disconnect();
        hashOpenObserver = null;
      }
    });
    hashOpenObserver.observe(document.body, { childList: true, subtree: true });
  }

  /**
   * Initialization
   */
  function init() {
    // Group expand / collapse buttons
    document
      .querySelectorAll(".usa-button[data-action][data-target]")
      .forEach(btn => btn.addEventListener("click", handleGroupToggle));

    // Delegated listener so dynamically-created accordion buttons are covered.
    document.addEventListener("click", event => {
      const button = event.target.closest(".usa-accordion__button");
      if (!button) return;
      // Let USWDS finish toggling first
      setTimeout(updateHashFromOpenAccordions, 0);
    });

    // Open accordions on initial load (after USWDS + page scripts initialize)
    setTimeout(() => {
      if (!openAccordionFromHash()) {
        connectHashObserver();
      }
    }, 50);
  }

  // Initial page load
  document.addEventListener("DOMContentLoaded", init);

  // In-page jump links & manual hash changes
  window.addEventListener("hashchange", () => {
    // Allow native anchor scroll to complete
    setTimeout(() => {
      if (!openAccordionFromHash()) {
        connectHashObserver();
      }
    }, 0);
  });
})();
