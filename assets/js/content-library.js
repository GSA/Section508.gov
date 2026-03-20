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

  applyURLFilters();  // <-- load filters from URL
  updateFilterUI();   // then apply them visually

  function updateFilterUI() {
    const groupedFilters = getGroupedFilters();
    updateFilterPills(groupedFilters);

    cards.forEach(card => {
      const isMatch = matchesAllGroups(card, groupedFilters);

      if (isMatch) {
        card.classList.remove("display-none");
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
        card.style.pointerEvents = "auto";
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.95)";
        card.style.pointerEvents = "none";
        setTimeout(() => card.classList.add("display-none"), 200);
      }
    });

    setTimeout(updateCardCount, 210);
    updateCheckboxStates(groupedFilters); // disable unavailable filters
    updateURLFromFilters(groupedFilters); // Update URL with current filters
  }

  function updateCheckboxStates(groupedFilters) {
    checkboxes.forEach(cb => {
      const group = cb.closest("fieldset")?.dataset.filterGroup;
      const value = normalizeFilterValue(cb.dataset.filter);
      if (!group || !value) return;

      // Always keep selected filters enabled
      if (cb.checked) {
        cb.disabled = false;
        return;
      }

      // Create a test filter state:
      // Keep all other groups, but replace this group with only the checkbox's value
      const testFilters = { ...groupedFilters, [group]: [value] };

      const hasMatches = Array.from(cards).some(card => {
        return matchesAllGroups(card, testFilters);
      });

      cb.disabled = !hasMatches;
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
