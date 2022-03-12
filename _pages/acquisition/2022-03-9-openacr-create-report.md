---
layout: page 
sidenav: true 
permalink: openacr/create-report 
type: acquisition 
title: Creating an OpenACR report
created: 1527569659
---

An Accessibility Conformance Report (ACR) is a document that explains how well a digital product meets certain standards for accessibility. Agencies request ACRs from vendors during the procurement process because they want to ensure that government services and platforms are usable by everyone.

Instead of a traditional PDF or document format, OpenACR allows you to generate a report in a machine-readable format which helps everyone - from procurement teams to accessibility experts and vendors - get a clearer understanding of the true accessibility conformance of a digital product. It's also easier to update as your product evolves.

Here is the process for creating an OpenACR report.

## Step 1: Product review with your team

You will need to audit your product's accessibility in a number of areas before filling out the sections for the report. Many people can work together to evaluate accessibility: product owners, developers, designers, and accessibility subject matter experts (SMEs). Seeking input from an external organization that specializes in accessibility is often helpful.

## Step 2: Go to the OpenACR editor tool

The [OpenACR editor tool](https://gsa.github.io/openacr-editor/) is a free online platform that walks you step-by-step through the requirements for a validated ACR. The tool structure is based on the widely-known [VPAT template](https://en.wikipedia.org/wiki/Voluntary_Product_Accessibility_Template), so it should look familiar if you have completed an ACR before.

When you have finished all the steps, you will be able to export your report in YAML (machine-readable data) or as a zip file with both YAML and a readable HTML (web page) format. You can also import your report to Microsoft Word or print as a PDF if needed.

Read all the sections on the [Overview page](https://gsa.github.io/openacr-editor) to learn about the editor tool's structure, tips for using it, and how to choose your level of conformance for each criteria.

## Step 3: Complete the About page

On the [About page](https://gsa.github.io/openacr-editor/about), you will provide an overall summary of the product or tool you are submitting the report for. It includes information like:

- Company name
- Name of your product (and version number, if applicable)
- Report date (month and year)
- Description of the product
- Contact information
- Additional notes (if any)
- Evaluation methods:

  - how your product was tested (manual, automated, both),
  - testing tools used
  - testing with people with disabilities, etc.

### Hiding sections

On the About page, or on any section of the report, you have the option to "hide" sections that are not relevant to your product. For example, if your product is not subject to the Web Content Accessibility Guidelines (WCAG), you won't need to fill out the sections labeled A, AA, and AAA. (Review the steps below to learn more about sections and their requirements.)

Select the checkbox to "Hide section?" if the section is not relevant and you don't need it to appear in your report. You can also re-enable sections at any time.

For any hidden section, it's important to add an explanation in the Notes box to show evaluators why the section is not relevant to your product.

## Step 4: Choose levels of conformance

When filling out all sections of the report that are relevant to your product or tool, you will select a level of conformance to show how well your product meets that particular criteria. The levels are:

### Supports

The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.

### Partially Supports

Some functionality of the product does not meet the criterion.

### Does Not Support

The majority of product functionality does not meet the criterion.

### Not Applicable

The criterion is not relevant to the product.

### Not Evaluated

The product has not been evaluated against the criterion. (This option may ONLY be used for section AAA, because this is the only criteria section that is not required to be evaluated.)

**Note** boxes are available for you to type remarks and explanations, which are required if the product either "partially supports" or "does not support" the guideline. Use that space to give evaluators more information about how and why the product does not fully meet the standards.

For areas where your product "fully supports" the standards, no remarks are required – but they are encouraged! The more information you provide, the easier it is for your product to be accurately evaluated.

As you go through the sections evaluating your product's conformance, you will find links in each criteria that point to the official guidelines and standards for that criteria. This makes it easier for you to assess how well your product meets the standards.

## Step 5: Complete sections (A) and (AA) if applicable

The sections labeled A, AA, and AAA measure how well your product meets the Web Content Accessibility Guidelines (WCAG) 2.x guidelines. If your product has one or more of the following categories, then these sections apply to you:

- Web Content
- Electronic Documents
- Software
- Authoring Tool

If your product does not fall under any of these four categories, you may click the checkbox to "Hide section" – but remember to add an explanation in the Notes box of each hidden section to show evaluators why the section is not relevant.

Only Level A and Level AA are required for an ACR for a product that must meet WCAG success criteria. But if your product does satisfy some (or all) criteria for Level AAA, it is worth completing that table as well. Showing where and how you meet AAA conformance can provide extra motivation for organizations to choose your product.

## Step 6: Complete following sections as applicable.

The remaining sections of the report measure how well your product meets the [U.S. Revised Section 508](https://www.section508.gov/about-us/) standards for accessibility. For any section that is not applicable to your product, (...)

Remember to add notes wherever possible to give more information about how your product does (or does not) fully meet each criteria.

The sections are:

### [Functional Performance Criteria (FPC)](https://gsa.github.io/openacr-editor/chapter/functional_performance_criteria)

If your product has any accessibility barriers or features that are NOT covered elsewhere in your report, describe them here.

It can be useful to fill out all other sections first, then return to this one to summarize accessibility features that are described in more detail throughout the report. The key is to include as much information as possible to make your product easier to evaluate.

### [Hardware](https://gsa.github.io/openacr-editor/chapter/hardware)

Complete this section if your product contains Hardware (physical components such as central processing unit (CPU), keyboard, webcam, monitor, etc.)

### [Software](https://gsa.github.io/openacr-editor/chapter/software)

Complete this section if your product contains Software (digital components such as applications, programs, electronic data, etc.)

### [Support Documentation and Services](https://gsa.github.io/openacr-editor/chapter/support_documentation_and_services)

Complete this section to show how well people with disabilities will be able to access support services or documentation for your product. (For example, if you have documentation in PDFs or Word documents, those need to meet certain accessibility standards). Review all criteria in this section to see which parts are applicable to your product.

## Step 7: Finishing up

Now you can go to the [Report section](https://gsa.github.io/openacr-editor/report) to review your completed OpenACR. If everything looks good, you can export it as a YAML (machine-readable) file or as a zip file with both YAML and a readable HTML (web page) format. You can also import your report to Microsoft Word or print as a PDF if needed.

## Final checklist

- Are you using the correct version? Make sure you are using the latest version of OpenACR to build your report. If you have an older OpenACR file (ending with a .yaml extension) you should be able to load it into the OpenACR Editor to verify that it still validates.
- Save the OpenACR report to your computer (we don't store it on our servers). You will need the YAML file to edit the report in the future,
- Make sure you have added Notes to any sections where:

  - You have "hidden" a section because it is not relevant to your product
  - Your product "partially supports" or "does not support" a criterion
  - Anywhere else you can add information to help evaluators understand your product

- Publish links to your OpenACR report from the product page of your site. If you have an Accessibility Statement on your site, outlining your commitment & processes for accessibility, consider including links to it there as well.

- Consider posting it to a public git repository so that people can easily find and subscribe to updates as they occur. Some teams will proactively include a copy of their OpenACR with their codebase so it is easy to find. ...

This content was adapted from NASA's 2021 guide, [Demystifying Section 508: An Industry Guide to Understanding Section 508 of the Rehabilitation Act (PDF)](https://sewp.nasa.gov/documents/Section_508_Guide_111821.pdf).

**Reviewed/Updated:** March 2022
