/**
 * Reusable copy-to-clipboard behavior.
 *
 * Add `copy-content.js` to a page's `custom-script` front matter before any
 * script that renders copy controls:
 *
 * custom-script:
 * - copy-content.js
 * - your-page.js
 *
 * Required markup:
 *
 * <button class="copy-content-button" type="button"
 *   data-copy-content
 *   data-copy-target="#content-to-copy"
 *   aria-label="Copy content"
 *   title="Copy content">
 *   <svg class="usa-icon" aria-hidden="true" focusable="false">
 *     <use href="/assets/img/sprite.svg#content_copy"></use>
 *   </svg>
 * </button>
 * <div id="content-to-copy">Content copied as plain text.</div>
 *
 * Optional data attributes:
 * - data-copy-status="#status-id" uses an existing ARIA live region. When
 *   omitted, the script creates a visually hidden live region after the button.
 * - data-copy-duration="1000" controls the success state in milliseconds.
 * - data-copy-success-icon="check" controls the temporary USWDS sprite icon.
 * - data-copy-success-message="Content copied." customizes the announcement.
 * - data-copy-error-message="Copy failed." customizes the error announcement.
 *
 * The script uses event delegation, so it also works for controls added to the
 * page after initial load. The icon swap is optional; text-only buttons work.
 */
(function () {
  "use strict";

  if (document.documentElement.dataset.copyContentInitialized === "true") return;
  document.documentElement.dataset.copyContentInitialized = "true";

  document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-copy-content]");
    if (!button) return;

    const targetSelector = button.dataset.copyTarget;
    const target = targetSelector ? document.querySelector(targetSelector) : null;
    if (!target) {
      announce(button, button.dataset.copyErrorMessage || "The content could not be copied.");
      return;
    }

    const copyText = target.innerText.trim();
    const copyOperation = navigator.clipboard && window.isSecureContext
      ? navigator.clipboard.writeText(copyText)
      : Promise.resolve().then(function () { fallbackCopy(copyText); });

    copyOperation.then(function () {
      showSuccess(button);
      announce(button, button.dataset.copySuccessMessage || "Content copied to the clipboard.");
    }).catch(function () {
      announce(button, button.dataset.copyErrorMessage || "The content could not be copied. Select and copy it manually.");
    });
  });

  function fallbackCopy(copyText) {
    const temporary = document.createElement("textarea");
    temporary.value = copyText;
    temporary.setAttribute("readonly", "");
    temporary.style.position = "fixed";
    temporary.style.opacity = "0";
    document.body.appendChild(temporary);
    temporary.select();
    const copied = document.execCommand("copy");
    temporary.remove();
    if (!copied) throw new Error("Copy command failed");
  }

  function showSuccess(button) {
    const duration = Number(button.dataset.copyDuration || 1000);
    const originalLabel = button.getAttribute("aria-label") || "Copy content";
    const originalTitle = button.getAttribute("title") || originalLabel;
    const icon = button.querySelector(".usa-icon");
    const iconUse = icon ? icon.querySelector("use") : null;
    const originalIcon = iconUse ? iconUse.getAttribute("href") : "";
    const successIcon = button.dataset.copySuccessIcon || "check";

    button.classList.add("is-copied");
    button.setAttribute("aria-label", "Copied");
    button.setAttribute("title", "Copied");
    if (icon) icon.classList.add("text-green");
    if (iconUse && originalIcon) iconUse.setAttribute("href", originalIcon.replace(/#[^#]+$/, "#" + successIcon));

    window.setTimeout(function () {
      button.classList.remove("is-copied");
      button.setAttribute("aria-label", originalLabel);
      button.setAttribute("title", originalTitle);
      if (icon) icon.classList.remove("text-green");
      if (iconUse && originalIcon) iconUse.setAttribute("href", originalIcon);
    }, duration);
  }

  function announce(button, message) {
    let status = button.dataset.copyStatus ? document.querySelector(button.dataset.copyStatus) : null;
    if (!status) {
      status = button.nextElementSibling && button.nextElementSibling.dataset.copyGeneratedStatus === "true"
        ? button.nextElementSibling
        : null;
    }
    if (!status) {
      status = document.createElement("span");
      status.className = "usa-sr-only";
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      status.dataset.copyGeneratedStatus = "true";
      button.insertAdjacentElement("afterend", status);
    }
    status.textContent = "";
    window.setTimeout(function () { status.textContent = message; }, 10);
  }
})();
