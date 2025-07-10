document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("#filter input[type='checkbox']");
  const cards = document.querySelectorAll("#library-cards li");
  const pillContainer = document.getElementById("active-filters-list");
  const noFiltersText = document.getElementById("no-filters");
  const resetButton = document.getElementById("reset-filters");

  const filterAttributes = [
    "data-topic",
    "data-sub_topic",
    "data-audience",
    "data-resource_type",
    "data-format"
  ];

  function getSelectedFilters() {
    return Array.from(checkboxes)
      .filter(cb => cb.checked && cb.dataset.filter)
      .map(cb => cb.dataset.filter);
  }

  function matchesFilter(card, filterVal) {
    return filterAttributes.some(attr => {
      const val = card.getAttribute(attr) || "";
      return val.split(",").map(s => s.trim()).includes(filterVal);
    });
  }

  function updateFilterPills(selectedFilters) {
    const pillItems = pillContainer.querySelectorAll("li[data-filter]");
    let anyVisible = false;

    pillItems.forEach(pill => {
      const isMatch = selectedFilters.includes(pill.dataset.filter);
      pill.classList.toggle("display-none", !isMatch);
      if (isMatch) anyVisible = true;
    });

    noFiltersText.classList.toggle("display-none", anyVisible);
  }

  function updateFilterUI() {
  const selectedFilters = getSelectedFilters();
  updateFilterPills(selectedFilters);

  cards.forEach(card => {
    const isMatch =
      selectedFilters.length === 0 ||
      selectedFilters.some(filter => matchesFilter(card, filter));

    if (isMatch) {
      card.classList.remove("display-none");
      card.style.opacity = "1";
      card.style.transform = "scale(1)";
      card.style.pointerEvents = "auto";
    } else {
      card.style.opacity = "0";
      card.style.transform = "scale(0.95)";
      card.style.pointerEvents = "none";
      setTimeout(() => {
        card.classList.add("display-none");
        updateCardCount(); // ✅ update after fade-out finishes
      }, 200);
    }
  });

  // Also call immediately in case no timeout runs
    setTimeout(updateCardCount, 210);
    }

  // Listen for checkbox changes
  checkboxes.forEach(cb => {
    cb.addEventListener("change", updateFilterUI);
  });

  // Click a pill to uncheck associated checkbox
  pillContainer.addEventListener("click", function (e) {
    const anchor = e.target.closest("a");
    const pillLi = anchor?.closest("li[data-filter]");
    if (pillLi) {
    const filterVal = pillLi.dataset.filter;
      const checkbox = document.querySelector(`#filter input[data-filter='${filterVal}']`);
      if (checkbox) {
        checkbox.checked = false;
        // manually trigger change event so updateFilterUI fires
        checkbox.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  });

  // Reset all checkboxes
  if (resetButton) {
    resetButton.addEventListener("click", function (e) {
      e.preventDefault();
      checkboxes.forEach(cb => {
        cb.checked = false;
        cb.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });
  }

  updateFilterUI(); // Run on load
 
  function updateCardCount() {
    const visibleCards = Array.from(cards).filter(card => !card.classList.contains("display-none"));
    const countSpan = document.getElementById("filter-count");
    if (countSpan) {
      countSpan.textContent = visibleCards.length;
    }
  }
});

