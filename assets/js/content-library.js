---
---
document.addEventListener("DOMContentLoaded", function () {
  const topicStyles = {
    manage: { backgroundClass: "bg-blue", textClass: "text-white" },
    law: { backgroundClass: "bg-blue", textClass: "text-white" },
    policy: { backgroundClass: "bg-blue", textClass: "text-white" },
    buy: { backgroundClass: "bg-green", textClass: "text-white" },
    sell: { backgroundClass: "bg-green", textClass: "text-white" },
    create: { backgroundClass: "bg-red", textClass: "text-white" },
    design: { backgroundClass: "bg-magenta", textClass: "text-white" },
    develop: { backgroundClass: "bg-magenta", textClass: "text-white" },
    testing: { backgroundClass: "bg-accent-warm-dark", textClass: "text-white" },
    training: { backgroundClass: "bg-accent-cool-darker", textClass: "text-white" },
    tools: { backgroundClass: "bg-accent-cool-darker", textClass: "text-white" },
    events: { backgroundClass: "bg-accent-cool-darker", textClass: "text-white" },
    about: { backgroundClass: "bg-base-dark", textClass: "text-white" },
    other: { backgroundClass: "bg-base-dark", textClass: "text-white" }
  };

  function getTopicStyle(value) {
    return topicStyles[normalizeFilterValue(value)] || topicStyles.other;
  }

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

  function normalizeDisplayText(value) {
    return String(value || "")
      .trim()
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

  function parseRawFilterValues(value) {
    if (value === undefined || value === null || value === "") {
      return [];
    }

    if (Array.isArray(value)) {
      return value.map(item => normalizeDisplayText(item)).filter(Boolean);
    }

    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);

        if (Array.isArray(parsed)) {
          return parsed.map(item => normalizeDisplayText(item)).filter(Boolean);
        }

        return [normalizeDisplayText(parsed)].filter(Boolean);
      } catch (error) {
        return [normalizeDisplayText(value)].filter(Boolean);
      }
    }

    return [normalizeDisplayText(value)].filter(Boolean);
  }

  function normalizeSearchText(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/\+/g, " and ")
      .replace(/[_/]+/g, " ")
      .replace(/[-–—]+/g, " ")
      .replace(/[.,:;()[\]'"]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);
    const filters = {};

    for (const [key, value] of params.entries()) {
      if (key === "search") continue;
      if (!filters[key]) filters[key] = [];
      filters[key].push(normalizeFilterValue(value));
    }

    return filters;
  }

  function getSearchQueryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return normalizeDisplayText(params.get("search") || "");
  }

  const pillContainer = document.getElementById("active-filters-list");
  const noFiltersText = document.getElementById("no-filters");
  const resetButton = document.getElementById("reset-filters");
  const countSpan = document.getElementById("filter-count");
  const cardsContainer = document.getElementById("library-cards");
  const searchInput = document.getElementById("library-search");
  const searchClearButton = document.getElementById("library-search-clear");
  const cardFadeDuration = 220;
  const cardReflowDuration = 700;

  let hasInitializedCardLayout = false;
  let cardAnimationCycle = 0;
  let searchQuery = "";
  let checkboxes = [];
  let cards = [];
  let filterGroupConfigs = [];
  let documentLinkSources = [];

  function refreshElements() {
    checkboxes = Array.from(document.querySelectorAll("#filter input[type='checkbox']"));
    cards = Array.from(
      document.querySelectorAll("#library-cards li:not([data-library-excluded='true'])")
    );
    filterGroupConfigs = Array.from(document.querySelectorAll("#filter fieldset[data-filter-group]")).map(
      fieldset => ({
        group: fieldset.dataset.filterGroup,
        attr: fieldset.dataset.filterAttr || `data-${fieldset.dataset.filterGroup}`
      })
    );
  }

  function normalizeLinkTarget(value) {
    try {
      return new URL(String(value || ""), window.location.origin).href;
    } catch (error) {
      return String(value || "").trim();
    }
  }

  function initializeDocumentLinkSources() {
    documentLinkSources = Array.from(document.querySelectorAll("[data-library-link-source]")).map(source => ({
      title: normalizeDisplayText(source.dataset.libraryLinkSourceTitle || source.textContent || "Untitled page"),
      url: source.dataset.libraryLinkSourceUrl || "#",
      documents: (source.dataset.libraryLinkSourceDocuments || "")
        .split("|")
        .map(item => normalizeLinkTarget(item))
        .filter(Boolean)
    }));
  }

  function normalizeCheckboxes() {
    const seenFilters = new Set();

    checkboxes.forEach(cb => {
      const fieldset = cb.closest("fieldset");
      const group = fieldset?.dataset.filterGroup;
      const wrapper = cb.closest(".filter-item");
      const labelText = cb.dataset.filterLabel || wrapper?.querySelector("label")?.textContent || cb.value;
      const canonicalValue = normalizeFilterValue(labelText);

      if (!group || !canonicalValue) {
        wrapper?.remove();
        return;
      }

      cb.dataset.filter = canonicalValue;
      cb.dataset.filterLabel = normalizeDisplayText(labelText);
      cb.value = canonicalValue;

      const key = `${group}:${canonicalValue}`;
      if (seenFilters.has(key)) {
        wrapper?.remove();
        return;
      }

      seenFilters.add(key);
    });
  }

  function getCardRawValues(card, attr) {
    return parseRawFilterValues(card.getAttribute(attr));
  }

  function getCardNormalizedValues(card, attr) {
    return Array.from(
      new Set(
        getCardRawValues(card, attr)
          .map(item => normalizeFilterValue(item))
          .filter(Boolean)
      )
    );
  }

  function initializeCards() {
    cards.forEach(card => {
      const topicGroup = filterGroupConfigs.find(config => config.group === "topic");
      const topicValues = topicGroup ? getCardRawValues(card, topicGroup.attr) : [];
      const primaryTopic = topicValues[0] || "Other";
      const topicStyle = getTopicStyle(primaryTopic);
      const searchableParts = [
        card.dataset.searchTitle,
        card.dataset.searchDescription
      ];

      filterGroupConfigs.forEach(({ attr }) => {
        const rawValues = getCardRawValues(card, attr);
        const normalizedValues = getCardNormalizedValues(card, attr);
        searchableParts.push(rawValues.join(" "));
        card.setAttribute(attr, JSON.stringify(normalizedValues));
      });

      card.dataset.searchText = normalizeSearchText(searchableParts.join(" "));

      const header = card.querySelector("[data-card-topic-header]");
      const heading = card.querySelector("[data-card-topic-heading]");
      if (header) {
        header.classList.remove(
          "bg-blue",
          "bg-green",
          "bg-orange",
          "bg-red",
          "bg-magenta",
          "bg-gold",
          "bg-accent-cool",
          "bg-accent-warm-dark",
          "bg-accent-cool-darker",
          "bg-base-dark"
        );
        header.classList.add(topicStyle.backgroundClass);
      }
      if (heading) {
        heading.textContent = toTitleCase(primaryTopic);
        heading.classList.remove("text-white", "text-black");
        heading.classList.add(topicStyle.textClass);
      }
    });
  }

  function populateDocumentLinkAccordions() {
    cards.forEach(card => {
      if (card.dataset.librarySource !== "document") return;

      const documentPermalink = normalizeLinkTarget(card.dataset.documentPermalink);
      const accordion = card.querySelector("[data-library-linked-from]");
      const footer = card.querySelector(".library-card__footer");
      const linkList = card.querySelector("[data-library-linked-from-list]");
      const summary = card.querySelector(".library-card-linked-from__summary");

      if (!documentPermalink || !linkList) return;

      const matchedPages = documentLinkSources.filter(source => source.documents.includes(documentPermalink));
      linkList.innerHTML = "";

      matchedPages.forEach(source => {
        const item = document.createElement("li");
        item.className = "font-sans-3xs";

        const link = document.createElement("a");
        link.href = source.url;
        link.textContent = source.title;

        item.appendChild(link);
        linkList.appendChild(item);
      });

      const hasLinkedPages = matchedPages.length > 0;

      card.dataset.libraryExcluded = hasLinkedPages ? "false" : "true";
      card.classList.toggle("display-none", !hasLinkedPages);

      if (accordion) {
        accordion.open = false;
      }

      if (footer) {
        footer.classList.toggle("display-none", !hasLinkedPages);
      }

      if (summary) {
        summary.textContent = `Linked from (${matchedPages.length})`;
      }
    });
  }

  function getGroupedFilters() {
    const groups = {};

    checkboxes.forEach(cb => {
      const group = cb.closest("fieldset")?.dataset.filterGroup;
      if (!group || !cb.checked || !cb.dataset.filter) return;

      if (!groups[group]) groups[group] = [];
      groups[group].push(cb.dataset.filter);
    });

    return groups;
  }

  function matchesGroup(card, groupName, groupValues) {
    const config = filterGroupConfigs.find(item => item.group === groupName);
    if (!config) return true;

    const cardValues = parseRawFilterValues(card.getAttribute(config.attr));
    return groupValues.some(value => cardValues.includes(value));
  }

  function matchesAllGroups(card, groupedFilters) {
    return Object.entries(groupedFilters).every(([groupName, groupValues]) =>
      matchesGroup(card, groupName, groupValues)
    );
  }

  function matchesSearchQuery(card, query) {
    const normalizedQuery = normalizeSearchText(query);
    if (!normalizedQuery) return true;

    return normalizeSearchText(card.dataset.searchText).includes(normalizedQuery);
  }

  function updateSearchClearButton(query) {
    if (!searchClearButton) return;

    const hasQuery = Boolean(normalizeDisplayText(query));
    searchClearButton.hidden = !hasQuery;
    searchClearButton.disabled = !hasQuery;
  }

  function applyURLFilters() {
    const urlFilters = getFiltersFromURL();
    searchQuery = getSearchQueryFromURL();

    checkboxes.forEach(cb => {
      const group = cb.closest("fieldset")?.dataset.filterGroup;
      cb.checked = Boolean(group && urlFilters[group]?.includes(cb.dataset.filter));
    });

    if (searchInput) {
      searchInput.value = searchQuery;
    }

    updateSearchClearButton(searchQuery);
  }

  function updateFilterPills(groupedFilters) {
    if (!pillContainer) return;

    pillContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();

    Object.entries(groupedFilters).forEach(([group, values]) => {
      values.forEach(value => {
        const checkbox = checkboxes.find(cb => {
          const fieldset = cb.closest("fieldset");
          return fieldset?.dataset.filterGroup === group && cb.dataset.filter === value;
        });

        if (!checkbox) return;

        const item = document.createElement("li");
        item.className = "active-fliter-item bg-secondary-lighter border-solid radius-pill border-primary-vivid border-width-1px padding-left-05 padding-right-1";
        item.dataset.filterGroup = group;
        item.dataset.filter = value;

        const link = document.createElement("a");
        link.href = "javascript:void(0)";
        link.setAttribute(
          "aria-label",
          `Remove filter by ${group.replace(/_/g, " ")}: ${checkbox.dataset.filterLabel}`
        );

        link.innerHTML = `
          <svg class="usa-icon text-middle margin-bottom-05 text-secondary-darker" aria-hidden="true" focusable="false" role="img">
            <use href="{{site.baseurl}}/assets/img/sprite.svg#highlight_off"></use>
          </svg>
          ${checkbox.dataset.filterLabel}
        `;

        item.appendChild(link);
        fragment.appendChild(item);
      });
    });

    pillContainer.appendChild(fragment);
    const anyVisible = fragment.childNodes.length > 0 || pillContainer.children.length > 0;
    noFiltersText?.classList.toggle("display-none", anyVisible);
  }

  function updateCardCount() {
    if (!countSpan) return;
    countSpan.textContent = cards.filter(card => !card.classList.contains("display-none")).length;
  }

  function getVisibleCards() {
    return cards.filter(card => !card.classList.contains("display-none"));
  }

  function captureCardPositions(cardList) {
    const positions = new Map();
    cardList.forEach(card => positions.set(card, card.getBoundingClientRect()));
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

  function updateCheckboxStates(groupedFilters, query) {
    checkboxes.forEach(cb => {
      const group = cb.closest("fieldset")?.dataset.filterGroup;
      const value = cb.dataset.filter;
      const wrapper = cb.closest(".filter-item");
      if (!group || !value) return;

      if (cb.checked) {
        cb.disabled = false;
        wrapper?.classList.remove("filter-item--disabled");
        return;
      }

      const testFilters = { ...groupedFilters, [group]: [value] };
      const hasMatches = cards.some(
        card => matchesAllGroups(card, testFilters) && matchesSearchQuery(card, query)
      );

      cb.disabled = !hasMatches;
      wrapper?.classList.toggle("filter-item--disabled", cb.disabled);
    });
  }

  function updateURLFromFilters(groupedFilters, query) {
    const params = new URLSearchParams();

    Object.entries(groupedFilters).forEach(([group, values]) => {
      values.forEach(value => params.append(group, value));
    });

    const normalizedQuery = normalizeDisplayText(query);
    if (normalizedQuery) {
      params.set("search", normalizedQuery);
    }

    const queryString = params.toString();
    const newURL = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
    history.replaceState(null, "", newURL);
  }

  function updateFilterUI() {
    const groupedFilters = getGroupedFilters();
    const currentSearchQuery = searchInput ? searchInput.value : searchQuery;
    searchQuery = normalizeDisplayText(currentSearchQuery);
    updateSearchClearButton(searchQuery);
    const currentCycle = ++cardAnimationCycle;
    const previousPositions = captureCardPositions(getVisibleCards());
    const cardsToHide = [];
    const cardsToShow = [];

    updateFilterPills(groupedFilters);

    cards.forEach(card => {
      const isMatch = matchesAllGroups(card, groupedFilters) && matchesSearchQuery(card, searchQuery);
      const isHidden = card.classList.contains("display-none");

      if (card.hideTimer) {
        window.clearTimeout(card.hideTimer);
        card.hideTimer = null;
      }

      if (isMatch) {
        card.style.pointerEvents = "auto";
        card.classList.remove("library-card--is-hiding");

        if (isHidden) cardsToShow.push(card);
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
        const isMatch = matchesAllGroups(card, groupedFilters) && matchesSearchQuery(card, searchQuery);
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

    updateCheckboxStates(groupedFilters, searchQuery);
    updateURLFromFilters(groupedFilters, searchQuery);
  }

  function isFilterToggleKey(event) {
    return (
      event.key === "Enter" ||
      event.key === "Return" ||
      event.code === "Enter" ||
      event.code === "NumpadEnter" ||
      event.keyCode === 13
    );
  }

  refreshElements();
  initializeDocumentLinkSources();
  normalizeCheckboxes();
  refreshElements();
  initializeCards();
  populateDocumentLinkAccordions();
  refreshElements();
  applyURLFilters();

  checkboxes.forEach(cb => {
    cb.addEventListener("change", updateFilterUI);
    cb.addEventListener("keydown", function (event) {
      if (!isFilterToggleKey(event)) return;
      event.preventDefault();
      event.stopPropagation();
      cb.dataset.enterTogglePending = "true";
    });
    cb.addEventListener("keyup", function (event) {
      if (!isFilterToggleKey(event) || cb.dataset.enterTogglePending !== "true") return;
      event.preventDefault();
      event.stopPropagation();
      delete cb.dataset.enterTogglePending;
      cb.checked = !cb.checked;
      updateFilterUI();
    });
    cb.addEventListener("blur", function () {
      delete cb.dataset.enterTogglePending;
    });
  });

  searchInput?.addEventListener("input", updateFilterUI);

  searchClearButton?.addEventListener("click", function () {
    if (!searchInput) return;

    searchInput.value = "";
    searchInput.focus();
    searchQuery = "";
    updateFilterUI();
  });

  pillContainer?.addEventListener("click", function (event) {
    const anchor = event.target.closest("a");
    const pill = anchor?.closest("li[data-filter]");
    if (!pill) return;

    event.preventDefault();

    const checkbox = checkboxes.find(cb => {
      const fieldset = cb.closest("fieldset");
      return fieldset?.dataset.filterGroup === pill.dataset.filterGroup && cb.dataset.filter === pill.dataset.filter;
    });

    if (!checkbox) return;
    checkbox.checked = false;
    updateFilterUI();
  });

  if (resetButton) {
    resetButton.addEventListener("click", function (event) {
      event.preventDefault();
      checkboxes.forEach(cb => {
        cb.checked = false;
      });
      if (searchInput) {
        searchInput.value = "";
      }
      searchQuery = "";
      updateFilterUI();
    });
  }

  cardsContainer?.addEventListener("click", function (event) {
    const toggle = event.target.closest("[data-library-card-toggle]");
    if (!toggle) return;

    event.preventDefault();

    const card = toggle.closest("#library-cards li");
    const shouldExpand = toggle.dataset.libraryCardToggle === "expand";
    setCardDescriptionExpanded(card, shouldExpand);
  });

  updateFilterUI();
});
