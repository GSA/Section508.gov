document.addEventListener("DOMContentLoaded", function () {
  function getFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);
    const filters = {};

    for (const [key, value] of params.entries()) {
      if (!filters[key]) filters[key] = [];
      filters[key].push(value);
    }

    return filters;
  }

  function applyURLFilters() {
    const urlFilters = getFiltersFromURL();

    checkboxes.forEach(cb => {
      const group = cb.closest("fieldset")?.dataset.filterGroup;
      const value = cb.dataset.filter;

      if (group && value && urlFilters[group]?.includes(value)) {
        cb.checked = true;
      } else {
        cb.checked = false;
      }
    });
  }

  const checkboxes = document.querySelectorAll("#filter input[type='checkbox']");
  const cards = document.querySelectorAll("#library-cards li");
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

  // Group selected filters by their filter group
  function getGroupedFilters() {
    const groups = {};
    checkboxes.forEach(cb => {
      if (cb.checked && cb.dataset.filter && cb.closest("fieldset")?.dataset.filterGroup) {
        const group = cb.closest("fieldset").dataset.filterGroup;
        if (!groups[group]) groups[group] = [];
        groups[group].push(cb.dataset.filter);
      }
    });
    return groups;
  }

  function matchesGroup(card, groupName, groupValues) {
    const attr = filterAttributes[groupName];
    if (!attr) return true;

    const cardAttrVal = card.getAttribute(attr) || "";
    const cardValues = cardAttrVal.split(",").map(s => s.trim());
    return groupValues.some(value => cardValues.includes(value));
  }

  function matchesAllGroups(card, groupedFilters) {
    return Object.entries(groupedFilters).every(([groupName, groupValues]) =>
      matchesGroup(card, groupName, groupValues)
    );
  }

  function updateFilterPills(groupedFilters) {
    const activeValues = Object.values(groupedFilters).flat();
    const pillItems = pillContainer.querySelectorAll("li[data-filter]");
    let anyVisible = false;

    pillItems.forEach(pill => {
      const isActive = activeValues.includes(pill.dataset.filter);
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
      const value = cb.dataset.filter;
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
      const checkbox = document.querySelector(`#filter input[data-filter='${filterVal}']`);
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
      values.forEach(value => params.append(group, value));
    }

    const newURL = window.location.pathname + '?' + params.toString();
    history.replaceState(null, '', newURL); // don't reload
  }

  updateFilterUI(); // Run on load
});