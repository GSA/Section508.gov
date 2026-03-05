(function () {
  const MANAGED_GROUP_SELECTOR = "[data-accordion-manage]";
  let hashOpenObserver = null;

  function getManagedGroups() {
    return Array.from(document.querySelectorAll(MANAGED_GROUP_SELECTOR));
  }

  function getManagedButtons() {
    return getManagedGroups().flatMap((group) =>
      Array.from(group.querySelectorAll(".usa-accordion__button"))
    );
  }

  function getManagedContents() {
    return getManagedGroups().flatMap((group) =>
      Array.from(group.querySelectorAll(".usa-accordion__content"))
    );
  }

  function clearExpandedStyle(content) {
    content.classList.remove("usa-accordion__content--expanded");
    content.style.removeProperty("max-height");
    content.style.removeProperty("overflow-y");
  }

  function closeAllManagedAccordions() {
    getManagedButtons().forEach((btn) => btn.setAttribute("aria-expanded", "false"));
    getManagedContents().forEach((content) => {
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
      .map((token) => decodeURIComponent(token).trim())
      .filter(Boolean);
  }

  function normalizeToken(token) {
    return token.toLowerCase().replace(/[^a-z0-9-]/g, "-");
  }

  function getTokenCandidates(token) {
    const normalized = normalizeToken(token);
    return [
      token,
      token.toLowerCase(),
      token.toUpperCase(),
      normalized,
    ];
  }

  function buildButtonLookup() {
    const lookup = new Map();
    getManagedButtons().forEach((button) => {
      const keys = new Set();
      const id = button.id || "";
      const panelId = button.getAttribute("aria-controls") || "";
      const aliases = (button.dataset.hashAliases || "")
        .split(",")
        .map((alias) => alias.trim())
        .filter(Boolean);

      if (id) {
        getTokenCandidates(id).forEach((candidate) => keys.add(candidate));
      }
      if (panelId) {
        getTokenCandidates(panelId).forEach((candidate) => keys.add(candidate));
      }
      aliases.forEach((alias) => {
        getTokenCandidates(alias).forEach((candidate) => keys.add(candidate));
      });

      keys.forEach((key) => {
        if (!lookup.has(key)) {
          lookup.set(key, button);
        }
      });
    });
    return lookup;
  }

  function findAccordionButtonFromToken(token, lookup) {
    const candidates = getTokenCandidates(token);
    for (const candidate of candidates) {
      const button = lookup.get(candidate);
      if (button?.classList.contains("usa-accordion__button")) {
        return button;
      }
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

  function updateHashFromOpenAccordions() {
    const openButtons = getManagedButtons().filter(
      (button) => button.getAttribute("aria-expanded") === "true"
    );

    if (!openButtons.length) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
      return;
    }

    const ids = openButtons
      .map((button) => button.id)
      .filter(Boolean)
      .join(",");

    if (ids) {
      history.replaceState(null, "", `#${ids}`);
    }
  }

  function openAccordionFromHash() {
    const tokens = getHashTokens();
    if (!tokens.length) return false;

    const lookup = buildButtonLookup();
    const resolvedButtons = tokens
      .map((token) => findAccordionButtonFromToken(token, lookup))
      .filter(Boolean);

    if (!resolvedButtons.length) {
      return false;
    }

    closeAllManagedAccordions();

    let focusTarget = null;
    resolvedButtons.forEach((button) => {
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

  function handleGroupToggle(event) {
    const trigger = event.currentTarget;
    const action = trigger.getAttribute("data-action");
    const expand = action === "expand";
    const targetIds = (trigger.getAttribute("data-target") || "")
      .split(/\s+/)
      .map((id) => id.trim())
      .filter(Boolean);

    targetIds.forEach((targetId) => {
      const group = document.getElementById(targetId);
      if (!group || !group.matches(MANAGED_GROUP_SELECTOR)) {
        return;
      }

      group.querySelectorAll(".usa-accordion__button").forEach((button) => {
        button.setAttribute("aria-expanded", expand ? "true" : "false");
      });

      group.querySelectorAll(".usa-accordion__content").forEach((content) => {
        if (expand) {
          content.removeAttribute("hidden");
        } else {
          content.setAttribute("hidden", "");
        }
        clearExpandedStyle(content);
      });
    });

    updateHashFromOpenAccordions();
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

  function init() {
    if (!getManagedGroups().length) {
      return;
    }

    document
      .querySelectorAll(".usa-button[data-action][data-target]")
      .forEach((button) => button.addEventListener("click", handleGroupToggle));

    document.addEventListener("click", (event) => {
      const button = event.target.closest(".usa-accordion__button");
      if (!button) return;
      const inManagedGroup = !!button.closest(MANAGED_GROUP_SELECTOR);
      if (!inManagedGroup) return;

      setTimeout(updateHashFromOpenAccordions, 0);
    });

    setTimeout(() => {
      if (!openAccordionFromHash()) {
        connectHashObserver();
      }
    }, 50);
  }

  document.addEventListener("DOMContentLoaded", init);
  window.addEventListener("hashchange", () => {
    setTimeout(() => {
      if (!openAccordionFromHash()) {
        connectHashObserver();
      }
    }, 0);
  });
})();
