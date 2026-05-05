(function () {
  "use strict";

  const DEFAULTS = {
    confidenceLevel: 95,
    marginOfError: 5,
    populationSize: 1000
  };

  const P = 0.5;

  const Z_SCORES = {
    90: 1.645,
    95: 1.96,
    99: 2.576
  };

  function getZScore(confidenceLevel) {
    return Z_SCORES[confidenceLevel] || 1.96;
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("en-US").format(value);
  }

  function roundUp(value) {
    return Math.ceil(value);
  }

  function calculateInfinitePopulationSampleSize(z, marginDecimal, p = P) {
    return (Math.pow(z, 2) * p * (1 - p)) / Math.pow(marginDecimal, 2);
  }

  function calculateFinitePopulationSampleSize(populationSize, z, marginDecimal, p = P) {
    const n0 = calculateInfinitePopulationSampleSize(z, marginDecimal, p);
    return n0 / (1 + ((n0 - 1) / populationSize));
  }

  function calculateImpliedPopulationSize(sampleSize, z, marginDecimal, p = P) {
    const n0 = calculateInfinitePopulationSampleSize(z, marginDecimal, p);

    if (sampleSize >= n0) {
      return {
        valid: false,
        n0: n0
      };
    }

    const populationSize = (sampleSize * (n0 - 1)) / (n0 - sampleSize);

    return {
      valid: true,
      populationSize: populationSize,
      n0: n0
    };
  }

  function initCalculator(form) {
    const suffix = form.getAttribute("data-id-suffix");

    if (!suffix) {
      return;
    }

    const confidenceInput = document.getElementById("confidence-level-" + suffix);
    const marginInput = document.getElementById("margin-of-error-" + suffix);
    const populationInput = document.getElementById("population-size-" + suffix);
    const sampleInput = document.getElementById("sample-size-" + suffix);
    const resetButton = document.getElementById("reset-calculator-" + suffix);
    const summaryEl = document.getElementById("calculator-summary-" + suffix);
    const detailsEl = document.getElementById("calculator-details-" + suffix);
    const messageEl = document.getElementById("calculator-message-" + suffix);

    if (
      !confidenceInput ||
      !marginInput ||
      !populationInput ||
      !sampleInput ||
      !resetButton ||
      !summaryEl ||
      !detailsEl ||
      !messageEl
    ) {
      return;
    }

    function clearValidationState() {
      messageEl.textContent = "";
      populationInput.removeAttribute("aria-invalid");
      sampleInput.removeAttribute("aria-invalid");
      marginInput.removeAttribute("aria-invalid");
    }

    function setValidationMessage(message, fieldToFlag) {
      messageEl.textContent = message;

      if (fieldToFlag) {
        fieldToFlag.setAttribute("aria-invalid", "true");
      }
    }

    function getInputs() {
      const confidenceLevel = parseInt(confidenceInput.value, 10);
      const marginPercent = parseFloat(marginInput.value);
      const populationSize = parseFloat(populationInput.value);
      const sampleSize = parseFloat(sampleInput.value);

      return {
        confidenceLevel: confidenceLevel,
        marginPercent: marginPercent,
        marginDecimal: marginPercent / 100,
        populationSize: populationSize,
        sampleSize: sampleSize
      };
    }

    function validatePopulationMode(populationSize, marginPercent) {
      if (!Number.isFinite(populationSize) || populationSize < 1) {
        setValidationMessage("Enter a population size of 1 or greater.", populationInput);
        return false;
      }

      if (!Number.isFinite(marginPercent) || marginPercent <= 0) {
        setValidationMessage("Enter a margin of error greater than 0.", marginInput);
        return false;
      }

      return true;
    }

    function validateSampleMode(sampleSize, marginPercent) {
      if (!Number.isFinite(sampleSize) || sampleSize < 1) {
        setValidationMessage("Enter a sample size of 1 or greater.", sampleInput);
        return false;
      }

      if (!Number.isFinite(marginPercent) || marginPercent <= 0) {
        setValidationMessage("Enter a margin of error greater than 0.", marginInput);
        return false;
      }

      return true;
    }

    function updateRecommendedSampleResults(populationSize, sampleSize, confidenceLevel, marginPercent) {
      summaryEl.textContent = "Recommended sample size: " + formatNumber(sampleSize) + " items";

      detailsEl.textContent =
        "Based on a population size of " +
        formatNumber(populationSize) +
        ", " +
        confidenceLevel +
        "% confidence level, and ±" +
        marginPercent +
        "% margin of error.";

      messageEl.textContent = "";
    }

    function updateImpliedPopulationResults(populationSize, sampleSize, confidenceLevel, marginPercent) {
      summaryEl.textContent =
        "Estimated implied population size: approximately " +
        formatNumber(populationSize) +
        " items";

      detailsEl.textContent =
        "Based on a sample size of " +
        formatNumber(sampleSize) +
        ", " +
        confidenceLevel +
        "% confidence level, and ±" +
        marginPercent +
        "% margin of error.";

      messageEl.textContent =
        "This reverse calculation estimates the implied population size using the same Cochran formula assumptions.";
    }

    function recalculateFromPopulation() {
      clearValidationState();

      const inputs = getInputs();

      if (!validatePopulationMode(inputs.populationSize, inputs.marginPercent)) {
        return;
      }

      const z = getZScore(inputs.confidenceLevel);
      const sampleSize = roundUp(
        calculateFinitePopulationSampleSize(inputs.populationSize, z, inputs.marginDecimal)
      );

      sampleInput.value = sampleSize;

      updateRecommendedSampleResults(
        inputs.populationSize,
        sampleSize,
        inputs.confidenceLevel,
        inputs.marginPercent
      );
    }

    function recalculateFromSample() {
      clearValidationState();

      const inputs = getInputs();

      if (!validateSampleMode(inputs.sampleSize, inputs.marginPercent)) {
        return;
      }

      const z = getZScore(inputs.confidenceLevel);
      const result = calculateImpliedPopulationSize(
        inputs.sampleSize,
        z,
        inputs.marginDecimal
      );

      if (!result.valid) {
        summaryEl.textContent = "Estimated implied population size cannot be calculated.";
        detailsEl.textContent =
          "For a " +
          inputs.confidenceLevel +
          "% confidence level and ±" +
          inputs.marginPercent +
          "% margin of error, the entered sample size is at or above the infinite-population threshold of " +
          formatNumber(roundUp(result.n0)) +
          ".";

        setValidationMessage(
          "Enter a smaller sample size, a wider margin of error, or a lower confidence level.",
          sampleInput
        );
        return;
      }

      const populationSize = roundUp(result.populationSize);
      populationInput.value = populationSize;

      updateImpliedPopulationResults(
        populationSize,
        inputs.sampleSize,
        inputs.confidenceLevel,
        inputs.marginPercent
      );
    }

    function recalculateFromConfidenceOrMargin() {
      clearValidationState();

      const inputs = getInputs();

      if (!validatePopulationMode(inputs.populationSize, inputs.marginPercent)) {
        return;
      }

      const z = getZScore(inputs.confidenceLevel);
      const sampleSize = roundUp(
        calculateFinitePopulationSampleSize(inputs.populationSize, z, inputs.marginDecimal)
      );

      sampleInput.value = sampleSize;

      updateRecommendedSampleResults(
        inputs.populationSize,
        sampleSize,
        inputs.confidenceLevel,
        inputs.marginPercent
      );
    }

    function resetCalculator() {
      confidenceInput.value = String(DEFAULTS.confidenceLevel);
      marginInput.value = String(DEFAULTS.marginOfError);
      populationInput.value = String(DEFAULTS.populationSize);

      clearValidationState();
      recalculateFromPopulation();
    }

    populationInput.addEventListener("input", recalculateFromPopulation);
    sampleInput.addEventListener("input", recalculateFromSample);
    confidenceInput.addEventListener("change", recalculateFromConfidenceOrMargin);
    marginInput.addEventListener("input", recalculateFromConfidenceOrMargin);
    resetButton.addEventListener("click", resetCalculator);

    resetCalculator();
  }
  
function bootCalculator() {
document.querySelectorAll(".sample-size-calculator").forEach(initCalculator);
}

if (document.readyState === "loading") {
document.addEventListener("DOMContentLoaded", bootCalculator);
} else {
bootCalculator();
}
})();