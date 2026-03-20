document.addEventListener("DOMContentLoaded", function () {
  function normalizeFilterValue(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/\+/g, " and ")
      .replace(/[_/]+/g, " ")
      .replace(/[-–—]+/g, " ")
      .replace(/[.,:;()[\]'"]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/ /g, "-");
  }

  function normalizeFilterList(value) {
    return Array.from(
      new Set(
        String(value || "")
          .split(",")
          .map(item => normalizeFilterValue(item))
          .filter(Boolean)
      )
    );
  }

  function normalizeDisplayText(value) {
    return String(value || "")
      .trim()
      .replace(/&/g, " and ")
      .replace(/\+/g, " and ")
      .replace(/[_/]+/g, " ")
      .replace(/[-–—]+/g, " ")
      .replace(/[.,:;()[\]'"]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function toTitleCase(value) {
    return normalizeDisplayText(value)
      .toLowerCase()
      .split(" ")
      .filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function getFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);
    const filters = {};

    for (const [key, value] of params.entries()) {
      if (!filters[key]) filters[key] = [];
      filters[key].push(normalizeFilterValue(value));
    }

    return filters;
  }

  let checkboxes = [];
  let cards = [];
  let pillItems = [];

  function refreshElements() {
    checkboxes = Array.from(document.querySelectorAll("#filter input[type='checkbox']"));
    cards = Array.from(document.querySelectorAll("#library-cards li"));
    pillItems = Array.from(document.querySelectorAll("#active-filters-list li[data-filter]"));
  }

  function normalizeCheckboxes() {
    const seenFilters = new Set();

    checkboxes.forEach(cb => {
      const group = cb.closest("fieldset")?.dataset.filterGroup;
      const wrapper = cb.closest(".filter-item");
      const label = wrapper?.querySelector("label");
      const canonicalValue = normalizeFilterValue(cb.dataset.filter || cb.value || label?.textContent);

      if (!group || !canonicalValue) {
        wrapper?.remove();
        return;
      }

      cb.dataset.filter = canonicalValue;
      cb.value = canonicalValue;
      cb.name = canonicalValue;

      const key = `${group}:${canonicalValue}`;
      if (seenFilters.has(key)) {
        wrapper?.remove();
        return;
      }

      seenFilters.add(key);
    });
  }

  function normalizePills() {
    const seenPills = new Set();

    pillItems.forEach(pill => {
      const group = pill.dataset.filterGroup;
      const canonicalValue = normalizeFilterValue(pill.dataset.filter || pill.textContent);

      if (!group || !canonicalValue) {
        pill.remove();
        return;
      }

      pill.dataset.filter = canonicalValue;

      const key = `${group}:${canonicalValue}`;
      if (seenPills.has(key)) {
        pill.remove();
        return;
      }

      seenPills.add(key);
    });
  }

  function normalizeCards() {
    cards.forEach(card => {
      Object.values(filterAttributes).forEach(attr => {
        const normalizedValues = normalizeFilterList(card.getAttribute(attr));
        card.setAttribute(attr, normalizedValues.join(","));
      });

      const heading = card.querySelector("span[class*='usa-card__heading']");
      if (heading) {
        heading.textContent = toTitleCase(heading.textContent);
      }
    });
  }

  function applyURLFilters() {
    const urlFilters = getFiltersFromURL();

    checkboxes.forEach(cb => {
      const group = cb.closest("fieldset")?.dataset.filterGroup;
      const value = normalizeFilterValue(cb.dataset.filter);

      if (group && value && urlFilters[group]?.includes(value)) {
        cb.checked = true;
      } else {
        cb.checked = false;
      }
    });
  }

  const pillContainer = document.getElementById("active-filters-list");
  const noFiltersText = document.getElementById("no-filters");
  const resetButton = document.getElementById("reset-filters");
  const countSpan = document.getElementById("filter-count");
  const cardFadeDuration = 220;
  const cardReflowDuration = 700;
  let hasInitializedCardLayout = false;
  let cardAnimationCycle = 0;

  const filterAttributes = {
    topic: "data-topic",
    sub_topic: "data-sub_topic",
    audience: "data-audience",
    resource_type: "data-resource_type",
    format: "data-format"
  };

  refreshElements();
  normalizeCheckboxes();
  normalizePills();
  normalizeCards();
  refreshElements();

  // Group selected filters by their filter group
  function getGroupedFilters() {
    const groups = {};
    checkboxes.forEach(cb => {
      if (cb.checked && cb.dataset.filter && cb.closest("fieldset")?.dataset.filterGroup) {
        const group = cb.closest("fieldset").dataset.filterGroup;
        if (!groups[group]) groups[group] = [];
        groups[group].push(normalizeFilterValue(cb.dataset.filter));
      }
    });
    return groups;
  }

  function matchesGroup(card, groupName, groupValues) {
    const attr = filterAttributes[groupName];
    if (!attr) return true;

    const cardValues = normalizeFilterList(card.getAttribute(attr));
    return groupValues.some(value => cardValues.includes(value));
  }

  function matchesAllGroups(card, groupedFilters) {
    return Object.entries(groupedFilters).every(([groupName, groupValues]) =>
      matchesGroup(card, groupName, groupValues)
    );
  }

  function updateFilterPills(groupedFilters) {
    const activeKeys = new Set(
      Object.entries(groupedFilters).flatMap(([group, values]) =>
        values.map(value => `${group}:${value}`)
      )
    );
    let anyVisible = false;

    pillItems.forEach(pill => {
      const pillKey = `${pill.dataset.filterGroup}:${pill.dataset.filter}`;
      const isActive = activeKeys.has(pillKey);
      pill.classList.toggle("display-none", !isActive);
      if (isActive) anyVisible = true;
    });

    noFiltersText.classList.toggle("display-none", anyVisible);
  }

  function updateCardCount() {
    const visibleCards = Array.from(cards).filter(card => !card.classList.contains("display-none"));
    if (countSpan) {
      countSpan.textContent = visibleCards.length;
    }
  }

  function getVisibleCards() {
    return cards.filter(card => !card.classList.contains("display-none"));
  }

  function captureCardPositions(cardList) {
    const positions = new Map();

    cardList.forEach(card => {
      positions.set(card, card.getBoundingClientRect());
    });

    return positions;
  }

  function animateCardReflow(previousPositions) {
    getVisibleCards().forEach(card => {
      const previousPosition = previousPositions.get(card);
      if (!previousPosition) return;

      const nextPosition = card.getBoundingClientRect();
      const deltaX = previousPosition.left - nextPosition.left;
      const deltaY = previousPosition.top - nextPosition.top;

      if (!deltaX && !deltaY) return;

      card.classList.add("library-card--is-moving");
      card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

      requestAnimationFrame(() => {
        card.style.transform = "";
      });

      window.setTimeout(() => {
        card.classList.remove("library-card--is-moving");
      }, cardReflowDuration);
    });
  }

  function setCardDescriptionExpanded(card, expanded) {
    if (!card) return;

    const truncated = card.querySelector(".library-card-description__truncated");
    const full = card.querySelector(".library-card-description__full");
    const expandLink = card.querySelector("[data-library-card-toggle='expand']");
    const collapseLink = card.querySelector("[data-library-card-toggle='collapse']");

    if (truncated && full) {
      truncated.classList.toggle("display-none", expanded);
      full.classList.toggle("display-none", !expanded);
    }

    if (expandLink) {
      expandLink.setAttribute("aria-expanded", expanded ? "true" : "false");
    }

    if (collapseLink) {
      collapseLink.setAttribute("aria-expanded", expanded ? "true" : "false");
    }
  }

  applyURLFilters();  // <-- load filters from URL
  updateFilterUI();   // then apply them visually

  function updateFilterUI() {
    const groupedFilters = getGroupedFilters();
    const currentCycle = ++cardAnimationCycle;
    const previousPositions = captureCardPositions(getVisibleCards());
    const cardsToHide = [];
    const cardsToShow = [];

    updateFilterPills(groupedFilters);

    cards.forEach(card => {
      const isMatch = matchesAllGroups(card, groupedFilters);
      const isHidden = card.classList.contains("display-none");

      if (card.hideTimer) {
        window.clearTimeout(card.hideTimer);
        card.hideTimer = null;
      }

      if (isMatch) {
        card.style.pointerEvents = "auto";
        card.classList.remove("library-card--is-hiding");

        if (isHidden) {
          cardsToShow.push(card);
        }
      } else {
        card.style.pointerEvents = "none";

        if (!isHidden) {
          cardsToHide.push(card);
          card.classList.add("library-card--is-hiding");
        }
      }
    });

    const revealMatchingCards = () => {
      if (currentCycle !== cardAnimationCycle) return;

      cardsToShow.forEach(card => {
        card.classList.remove("display-none");
        card.classList.add("library-card--is-entering");
      });

      animateCardReflow(previousPositions);

      requestAnimationFrame(() => {
        cardsToShow.forEach(card => {
          card.classList.remove("library-card--is-entering");
        });
      });

      updateCardCount();
    };

    if (!hasInitializedCardLayout) {
      cards.forEach(card => {
        const isMatch = matchesAllGroups(card, groupedFilters);
        card.classList.toggle("display-none", !isMatch);
        card.classList.remove("library-card--is-hiding", "library-card--is-entering", "library-card--is-moving");
        card.style.transform = "";
        card.style.pointerEvents = isMatch ? "auto" : "none";
      });

      updateCardCount();
      hasInitializedCardLayout = true;
    } else if (cardsToHide.length) {
      cardsToHide.forEach(card => {
        card.hideTimer = window.setTimeout(() => {
          if (currentCycle !== cardAnimationCycle) return;
          card.classList.add("display-none");
          card.classList.remove("library-card--is-hiding");
          card.hideTimer = null;
        }, cardFadeDuration);
      });

      window.setTimeout(revealMatchingCards, cardFadeDuration);
    } else {
      revealMatchingCards();
    }

    updateCheckboxStates(groupedFilters); // disable unavailable filters
    updateURLFromFilters(groupedFilters); // Update URL with current filters
  }

  function updateCheckboxStates(groupedFilters) {
    checkboxes.forEach(cb => {
      const group = cb.closest("fieldset")?.dataset.filterGroup;
      const value = normalizeFilterValue(cb.dataset.filter);
      const wrapper = cb.closest(".filter-item");
      if (!group || !value) return;

      // Always keep selected filters enabled
      if (cb.checked) {
        cb.disabled = false;
        wrapper?.classList.remove("filter-item--disabled");
        return;
      }

      // Create a test filter state:
      // Keep all other groups, but replace this group with only the checkbox's value
      const testFilters = { ...groupedFilters, [group]: [value] };

      const hasMatches = Array.from(cards).some(card => {
        return matchesAllGroups(card, testFilters);
      });

      cb.disabled = !hasMatches;
      wrapper?.classList.toggle("filter-item--disabled", cb.disabled);
    });
  }

  // Listen for checkbox changes
  checkboxes.forEach(cb => {
    cb.addEventListener("change", updateFilterUI);
    // Add Enter key support
    cb.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        cb.checked = !cb.checked;
        updateFilterUI();
      }
    });
  });
  

  // Remove filter when clicking a pill
  pillContainer.addEventListener("click", function (e) {
    const anchor = e.target.closest("a");
    const pillLi = anchor?.closest("li[data-filter]");
    if (pillLi) {
      e.preventDefault();
      const filterVal = pillLi.dataset.filter;
      const filterGroup = pillLi.dataset.filterGroup;
      const checkbox = document.querySelector(
        `#filter fieldset[data-filter-group='${CSS.escape(filterGroup)}'] input[data-filter='${CSS.escape(filterVal)}']`
      );
      if (checkbox) {
        checkbox.checked = false;
        updateFilterUI();
      }
    }
  });

  // Reset all checkboxes
  if (resetButton) {
    resetButton.addEventListener("click", function (e) {
      e.preventDefault();
      checkboxes.forEach(cb => {
        cb.checked = false;
      });
      updateFilterUI();
    });
  }

  const cardsContainer = document.getElementById("library-cards");
  if (cardsContainer) {
    cardsContainer.addEventListener("click", function (e) {
      const toggle = e.target.closest("[data-library-card-toggle]");
      if (!toggle) return;

      e.preventDefault();

      const card = toggle.closest("#library-cards li");
      const shouldExpand = toggle.dataset.libraryCardToggle === "expand";
      setCardDescriptionExpanded(card, shouldExpand);
    });
  }

  function updateURLFromFilters(groupedFilters) {
    const params = new URLSearchParams();

    for (const [group, values] of Object.entries(groupedFilters)) {
      values.forEach(value => params.append(group, normalizeFilterValue(value)));
    }

    const queryString = params.toString();
    const newURL = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
    history.replaceState(null, '', newURL); // don't reload
  }

  updateFilterUI(); // Run on load
});
