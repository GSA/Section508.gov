---
layout: page
sidenav: true
type: test
title: Sample vs Comprehensive Section 508 Conformance Testing
permalink: test/sample-vs-comprehensive-testing/
description: Learn how to choose the right sample size for ICT accessibility testing and compare confidence levels, margin of error, and testing approaches.
audience: 
- Content Creators
- Developers
- Federal Employees
- IT Accessibility Program Staff
- Manager & Supervisor
- Requirements & Business Analysts
- Section 508 Program Managers
- Section 508 Testers
- Specialists & SMEs
- Web Content Managers
topic: 
- Testing
subtopic: 
- Best Practices
- Documents
- General Information
- Hardware
- Requirements & Acceptance Criteria
- Software
- Testing (Automated)
- Testing (Manual)
- Websites
resource-type: 
- Article
format: HTML
custom-script: 
- accordion-management.js
- sample-size-calculator.js
created: 2026-05-04
updated: 
featured: true
---
Federal agencies face a key decision when testing information and communication technology (ICT) for Section 508 conformance: whether to conduct comprehensive testing or test a representative sample. 

Comprehensive testing provides the most precise results by testing all applicable Section 508 standards for every ICT item. However, this method can be resource-intensive and impractical for large inventories of webpages, documents, software, hardware, or complex systems.

Representative sample testing offers a more resource-efficient alternative. It allows agencies to benchmark Section 508 conformance, identify recurring issues, and monitor progress over time.

The decision between these two approaches depends on the return on investment (ROI), risks of non-conformance, the quantity of ICT, available resources, and the desired level of precision.

Use comprehensive testing when:

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use></svg></div>
    <div class="usa-icon-list__content">The system or ICT inventory is small enough to test every item practically.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use></svg></div>
    <div class="usa-icon-list__content">Section 508 conformance failures are considered high-risk.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use></svg></div>
    <div class="usa-icon-list__content">Precise results are required for Section 508 compliance reporting.</div>
  </li>
</ul>

Use representative sample testing when:

<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use></svg></div>
    <div class="usa-icon-list__content">The system or ICT inventory is too large for a complete review.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use></svg></div>
    <div class="usa-icon-list__content">The goal is to establish a baseline of Section 508 conformance across a broad range of assets.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use></svg></div>
    <div class="usa-icon-list__content">There is a need to balance precision with available resources.</div>
  </li>
  <li class="usa-icon-list__item"><div class="usa-icon-list__icon text-green"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#check_circle"></use></svg></div>
    <div class="usa-icon-list__content">Ongoing improvements are being monitored over time.</div>
  </li>
</ul>

## Illustrative Example: Website Testing

Consider a new website with 100 pages using a similar template, where a Section 508 conformance test typically involves 50 distinct checklist items.

### Comprehensive Testing:
If a skilled tester spends roughly one hour on each page, the total estimated effort could be 100 hours. A single coding defect found across all 100 pages will most likely be considered one defect with 100 instances, not 100 separate defects. Fixing this typically involves a single developer change applied across all pages. While precise, this method is resource-intensive and may not offer the best ROI, especially for content developed within templates that apply broadly across content.  

### Representative Sample Testing:
Instead of testing all content on every page of a website a tester might select a representative sample of 100 pages to include various content types such as text, forms, media, tables, lists, and various types of interactive content. If a defect is found on one page, the tester checks other pages to determine if it's an isolated or systemic issue. If isolated, the developer is advised to check the rest of the website for similar issues. If systemic, the developer remediates the defect and applies the solution throughout the website. This method ensures each of the accessibility checks is completed within the sample, reducing test time to a more reasonable level of effort with a better ROI. This testing may be further reduced if the webpages are heavily templated and there are little to no template deviations found across the website.

<table id="table-comparison" class="usa-table usa-table--borderless usa-table--striped striped margin-bottom-8">
<caption>Table 1. Comprehensive Testing vs. Sample Testing Comparison</caption>
  <thead>
    <tr>
      <th scope="col">Approach</th>
      <th scope="col">Benefits</th>
      <th scope="col">Drawbacks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Comprehensive Testing</th>
      <td>
        <ul>
          <li>Maximum precision of Section 508 conformance</li>
          <li>No reliance on estimates or statistical inferences</li>
          <li>Ensures rare or edge-case issues are identified</li>
        </ul>
      </td>
      <td>
        <ul>
         <li>Resource-intensive</li> 
         <li>May not be practical for large systems or large asset inventories</li>
         <li>Slows down remediation and reporting</li>
        </ul>
       </td>
    </tr>
        <tr>
      <th scope="row">Sample Testing</th>
      <td>
        <ul>
          <li>Efficient because it requires fewer resources</li>
         <li>Enables faster identification of recurring issues</li>
         <li>Allows ongoing monitoring and benchmarking</li>
         <li>Scales well for large systems or large asset inventories</li>
        </ul>
      </td>
      <td>
        <ul>
         <li>Findings are estimates, not guarantees</li>
         <li>Risk of missing critical Section 508 defects</li>
         <li>Confidence depends on representative sample size and selection method</li>
        </ul>
       </td>
    </tr>
    </tbody>
    </table>

## Determining Sample Size for Section 508 Conformance Testing

Federal agencies can benefit from a dependable method for assessing ICT conformance with Section 508 without the necessity of testing every page, screen, feature, or hardware product. By selecting a sample size that aligns with available resources and by understanding confidence level and margin of error, agencies can make well-informed decisions regarding testing scope. Start small if needed, but aim for a larger, representative sample when possible to build a strong baseline of conformance.

The reliability and precision of your findings depends on sample size, confidence level, and margin of error.

<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
    <strong>Tip:</strong> "Statistical sample size” calculators can assist in determining the necessary sample size by factoring in population, confidence intervals, and margin of error.</div>

<div class="usa-accordion usa-accordion--bordered usa-accordion--multiselectable margin-top-4" data-allow-multiple>
  <h3 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="sample-size-calculator-panel-1"
      id="sample-size-calculator">
      Sample size calculator
    </button>
  </h3>

  <div
    id="sample-size-calculator-panel-1"
    class="usa-accordion__content usa-prose">
    {% include sample-size-calculator.html id_suffix="1" %}{% comment %}modify id_suffix if calculator is used more than once on a page{% endcomment %}
  </div>
</div>


When you test a sample, you are making inferences about the entire system or asset inventory.  Population size is required in order to calculate the sample size needed for a specific confidence level and margin of error. Population size is the total number of assets you could test. In ICT accessibility, this could be:

* The total number of web pages owned or operated by the agency or the total number of web pages within a website.  
* The total number of software applications owned or operated by the agency or the total number of screens or views in a software application.  
* The total number of public facing electronic documents.  
* The number of hardware ICT owned or operated by the agency or the total number of screens available in hardware ICT.

Two key statistical concepts help describe the strength of those inferences:

### Confidence Level
Confidence level is the probability that your results reflect the true level of Section 508 conformance in the entire system or asset inventory. Common levels are 90%, 95%, and 99%.  
* A 90% confidence level is often used when speed and efficiency matter more than precision, such as early-stage assessments or internal diagnostics.  
* A 95% confidence level is the most commonly used standard across many fields, balancing reasonable certainty with practical effort.  
* A 99% confidence level is typically used in high-stakes or compliance-driven contexts, where decisions carry greater risk and a higher degree of certainty is required, though it usually requires larger sample sizes.

### Margin of Error
Margin of error is the range within which the true value is likely to fall. A smaller margin of error means your test results are closer to the total population’s outcomes, so you can trust them more. A larger margin of error means your results may differ more from the total population, making them less reliable. For example, a 95% confidence level with ±10% margin of error means you can be 95% certain the real Section 508 conformance rate of the total population is within 10 percentage points of your sample’s results.

<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
    <strong>Tip:</strong> Higher confidence levels and smaller margins of error require larger sample sizes.</div>

<div class="usa-accordion usa-accordion--bordered usa-accordion--multiselectable margin-top-4" data-allow-multiple>
  <h2 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="a1" id="sample-size-formula">
      Sample Size Formula</button>
  </h2>
  <div id="a1" class="usa-accordion__content ">
    <p>Cochran’s formula is used to estimate the number of items that should be tested to achieve a desired level of statistical confidence and precision.</p>

The formula is applied in two steps:
    <ol>
        <li>Initial sample size (for large or unknown populations). This calculates a baseline sample size assuming a very large population:
        <math xmlns="http://www.w3.org/1998/Math/MathML">
<msub>
<mi>n</mi>
<mrow class="MJX-TeXAtom-ORD">
<mn>0</mn>
</mrow>
</msub>
<mo>=</mo>
<mstyle displaystyle="true" scriptlevel="0">
<mfrac>
<mrow>
<msup>
<mi>z</mi>
<mrow class="MJX-TeXAtom-ORD">
<mn>2</mn>
</mrow>
</msup>
<mo>&#x22C5;<!-- ⋅ --></mo>
<mi>p</mi>
<mo>&#x22C5;<!-- ⋅ --></mo>
<mo stretchy="false">(</mo>
<mn>1</mn>
<mo>&#x2212;<!-- − --></mo>
<mi>p</mi>
<mo stretchy="false">)</mo>
</mrow>
<msup>
<mi>e</mi>
<mrow class="MJX-TeXAtom-ORD">
<mn>2</mn>
</mrow>
</msup>
</mfrac>
</mstyle>
</math>
        </li>
        <li>Adjusted sample size (for a known population). If the total population size (N) is known, apply the finite population correction:
            <math xmlns="http://www.w3.org/1998/Math/MathML">
<mi>n</mi>
<mo>=</mo>
<mstyle displaystyle="true" scriptlevel="0">
<mfrac>
<msub>
<mi>n</mi>
<mrow class="MJX-TeXAtom-ORD">
<mn>0</mn>
</mrow>
</msub>
<mrow>
<mn>1</mn>
<mo>+</mo>
<mfrac>
<mrow>
<msub>
<mi>n</mi>
<mrow class="MJX-TeXAtom-ORD">
<mn>0</mn>
</mrow>
</msub>
<mo>&#x2212;<!-- − --></mo>
<mn>1</mn>
</mrow>
<mi>N</mi>
</mfrac>
</mrow>
</mfrac>
</mstyle>
</math>
</li>
</ol>

Where: 
<ul>
<li>n₀ = initial sample size (assuming a large population)</li>  
<li>n = adjusted sample size (when population size is known)</li>  
<li>N = total population size (for example, total number of webpages, systems, or assets)</li>  
<li>e = margin of error, expressed as a decimal. For example:  
    <ul>
  <li>±5% precision gives e=0.05</li>   
  <li>±10% precision gives e=0.10</li></ul></li>   
<li>p = estimated proportion of the population (as percentage) with the attribute of interest 
    <ul>
  <li>If unknown, use p = 0.5 (most conservative assumption)</li></ul></li>
<li>Z = z-value corresponding to the selected confidence level</li>
</ul>

<h3>Determining the z-value</h3>
To determine the z value for a given confidence level: 
<ol>
<li>Convert the confidence level to decimal form. For example 95% = 0.95.</li>  
<li>Subtract from 1 and divide by 2:
    <ul>
   <li>(1 − 0.95) ÷ 2 = 0.025</li></ul></li> 
<li>Add this value back to the original decimal:
    <ul>
   <li>0.95 + 0.025 = 0.975</li></ul></li> 
<li>Look up 0.0975 in a standard normal (z) table.</li>   
<li>The corresponding z-value is 1.96.</li></ol>

<p> In practice, standard z-values are typically used, as shown in Table 2.</p>

<table id="table-confidence" class="usa-table usa-table--borderless usa-table--striped width-full" >
<caption>Table 2. Common confidence levels and associated z-value</caption>
  <thead>
    <tr>
      <th scope="col">Confidence Level</th>
      <th scope="col">Z-Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">90% Confidence</th>
      <td>1.65</td>
      </tr>
      <tr>
      <th scope="row"> 95% Confidence</th>
      <td >1.96</td></tr>
      <tr>
      <th scope="row">99% Confidence</th>
      <td>2.58</td>
    </tr>
    </tbody>
</table>

<h3>Example</h3>
Using a 95% confidence level, ±5% margin of error, and assuming p = 0.5, the initial sample size (n₀) is 385 (rounded up). If the population is large or unknown, testing at least 385 items provides 95% confidence that the results are within ±5 percentage points of the true population value.
<br>
<br>
<math xmlns="http://www.w3.org/1998/Math/MathML">
<msub>
<mi>n</mi>
<mrow class="MJX-TeXAtom-ORD">
<mn>0</mn>
</mrow>
</msub>
<mo>=</mo>
<mstyle displaystyle="true" scriptlevel="0">
<mfrac>
<mrow>
<msup>
<mn>1.96</mn>
<mrow class="MJX-TeXAtom-ORD">
<mn>2</mn>
</mrow>
</msup>
<mo>&#x22C5;<!-- ⋅ --></mo>
<mn>0.5</mn>
<mo>&#x22C5;<!-- ⋅ --></mo>
<mo stretchy="false">(</mo>
<mn>1</mn>
<mo>&#x2212;<!-- − --></mo>
<mn>0.5</mn>
<mo stretchy="false">)</mo>
</mrow>
<msup>
<mn>0.05</mn>
<mrow class="MJX-TeXAtom-ORD">
<mn>2</mn>
</mrow>
</msup>
</mfrac>
</mstyle>
<mo>=</mo>
<mn>384.16</mn>
</math>
<br>
<br>
If the population size is known (for example, N = 1,000 web pages), the adjusted sample size is smaller after applying the finite population correction (e.g., 278 webpages).
<br>
<math xmlns="http://www.w3.org/1998/Math/MathML">
<mi>n</mi>
<mo>=</mo>
<mstyle displaystyle="true" scriptlevel="0">
<mfrac>
<mrow>
<mn>384.16</mn>
</mrow>
<mrow>
<mn>1</mn>
<mo>+</mo>
<mfrac>
<mrow>
<mn>384.16</mn>
<mo>&#x2212;</mo>
<mn>1</mn>
</mrow>
<mn>1000</mn>
</mfrac>
</mrow>
</mfrac>
</mstyle>
<mo>=</mo>
<mn>277.5</mn>
</math>
</div>
</div>

## Sample Size Considerations
Determining your sample size depends on available resources, project scope, and the risk associated with Section 508 defects, which will help inform the best approach for sampling.

Some items to consider when selecting a representative sample set include:
<ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg></div>
    <div class="usa-icon-list__content">Prioritizing high traffic and high risk products.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg></div>
    <div class="usa-icon-list__content">Prioritizing critical functions and user paths to ensure testing of content users need most.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg></div>
    <div class="usa-icon-list__content">Ensuring different content types, components, and elements are included, such as text, forms, documents, dynamic pages, media, navigation, and tables. For instance, identify content variations across web pages and test a representative variety of those pages.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg></div>
    <div class="usa-icon-list__content">Avoiding repetitive testing of the same content type, as this may not accurately reflect your entire ICT inventory.</div>
  </li>
  <li class="usa-icon-list__item">
     <div class="usa-icon-list__icon text-blue"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg></div>
    <div class="usa-icon-list__content">Using the same sample set to track improvements over time and use consistent <a href="{{site.baseurl}}/test/">testing methodologies</a>.</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-blue"><svg class="usa-icon" aria-hidden="true" focusable="false"><use href="{{site.baseurl}}/assets/img/sprite.svg#thumb_up_alt"></use></svg></div>
    <div class="usa-icon-list__content">Clearly record how you selected the sample and what confidence level and margin of error apply.</div>
  </li>
</ul>

<table id="table-approaches-to-confidence" class="usa-table usa-table--borderless usa-table--striped">
<caption>Table 3: Approaches to Testing with Sample Size and Expected Confidence Intervals</caption>
<thead>
    <tr>
      <th scope="col">Approach</th>
      <th scope="col">Purpose</th>
      <th scope="col">Sample Size</th>
      <th scope="col">Expected Confidence</th>
      <th scope="col">Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Baseline Approach (Low Confidence)</th>
      <td>Quick insight into overall Section 508 conformance or used for baselining conformance.</td>
      <td>Five to ten items such as pages, screens, or documents</td>
      <td>High margin of error and low confidence. Testing may miss critical defects.</td>
      <td>Small teams or limited resources.</td>
    </tr>
    <tr>
      <th scope="row">Balanced Approach (Moderate Confidence)</th>
      <td>Balance between level of effort, ROI, and precision</td>
      <td>30–50 items such as pages, screens, or documents.</td>
      <td>About 90–95% confidence with a ±10–15% margin of error, depending on population size.</td>
      <td>Medium-sized agencies establishing a baseline or semi-resourced teams</td>
    </tr>
    <tr>
      <th scope="row">Robust Approach (High Confidence)</th>
      <td>More precision for decision-making and reporting.</td>
      <td>100+ items</td>
      <td>95% confidence with ±5–10% margin of error, depending on total population.</td>
      <td>Large agencies, well-resourced teams, full Section 508 compliance reporting, or systems with high risk such as high traffic or public use.</td>
    </tr>
    <tr>
      <th scope="row">Comprehensive Approach (Very High Confidence)</th>
      <td>Maximum precision of Section 508 conformance.</td>
      <td>All pages, screens, or documents</td>
      <td>100% confidence level and zero margin of error.</td>
      <td>Mission-critical systems or when Section 508 nonconformance creates high risk.</td>
    </tr>
  </tbody>
  </table>

The relationship between sample size and the total number of ICT assets, such as web pages, software applications, hardware, or electronic documents, being tested is illustrated in the table below. This relationship is shown in Table 4 using 90% and 95% confidence levels as standard reference points, highlighting how the required sample size changes. 

For smaller populations, a proportionally larger sample is needed, while for larger populations, the increase in sample size is modest. Once the population size exceeds 5,000 ICT assets, the sample size increases slowly. 

Online "statistical sample size” calculators can assist in determining the necessary sample size by factoring in population, confidence intervals, and margin of error. While 95% confidence is a common standard, it necessitates a slightly larger sample size. Opting for 90% confidence can reduce testing effort, though it provides slightly less certainty. In practical terms, for a mid-sized ICT population, the difference between 90% and 95% confidence typically amounts to 10 to 20 additional items tested.

<table id="table-approaches-to-confidence" class="usa-table usa-table--borderless usa-table--striped">
<caption>Table 4: Sample Size, 90% and 95% Confidence Level, and Approximate Margin of Error</caption>
<thead>
 <tr>
      <th scope="col">Total ICT (Population Size)</th>
      <th scope="col">Sample Size for 90% Confidence</th>
      <th scope="col">Sample Size for 95% Confidence</th>
      <th scope="col">Approximate Margin of Error</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">50</th>
      <td>26</td>
      <td>30</td>
      <td>±10%</td>
    </tr>
    <tr>
      <th scope="row">100</th>
      <td>41</td>
      <td>49</td>
      <td>±10%</td>
    </tr>
    <tr>
      <th scope="row">500</th>
      <td>70</td>
      <td>81</td>
      <td>±10%</td>
    </tr>
    <tr>
      <th scope="row">1,000</th>
      <td>73</td>
      <td>88</td>
      <td>±10%</td>
    </tr>
    <tr>
      <th scope="row">5,000+</th>
      <td>90–100</td>
      <td>100–150</td>
      <td>±8–10%</td>
    </tr>
  </tbody>
</table>

<h2> Related Resources</h2>
<ul>
<li> <a href="{{site.baseurl}}/manage/playbooks/technology-accessibility-playbook/9/">Technology Accessibility Playbook - Play 9: Integrate Accessibility Needs into Development Processes</a></li> 
<li> <a href="{{site.baseurl}}/manage/playbooks/technology-accessibility-playbook/10/">Technology Accessibility Playbook - Play 10: Conduct Information and Communication Technology Accessibility Testing</a></li>  
<li> <a href="{{site.baseurl}}/manage/playbooks/technology-accessibility-playbook/11/">Technology Accessibility Playbook - Play 11: Track and Resolve Accessibility Issues</a></li>
<li> <a href="{{site.baseurl}}/test/testing-lifecycle-overview/">Testing Lifecycle Overview</a></li>
<li> <a href="{{site.baseurl}}/test/testing-overview/">Testing Methods Overview</a></li>
<li> <a href="https://www.gao.gov/assets/pemd-10.1.6.pdf#page=59" target="_blank" class="usa-link--external">Using Statistical Sampling</a></li>
</ul>
