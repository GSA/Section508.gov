---
layout: page
sidenav: true
permalink: openacr/initiative/
type: acquisition
title: OpenACR initiative
created: 1527569659
---

# OpenACR initiative

OpenACR is an initiative by the General Services Administration (GSA) to modernize and standardize Accessibility Conformance Reports (ACRs). The vision of this project is to improve the use and effectiveness of ACRs in evaluating accessibility of digital products, tools, and services.

This page explains the OpenACR project approach, tools and technologies, standards, and roadmap. For an overview of what OpenACR is and why it is important, visit []"Why OpenACR"](openacr/about/).

## Project approach

The OpenACR team is creating an open standard that will allow all ACRs to have a common structure, making them easier to find, create, update, and manage. Many people and organizations have contributed to this project.

### Frameworks

OpenACR is built on the [VPAT®](https://en.wikipedia.org/wiki/Voluntary_Product_Accessibility_Template) framework from the Information Technology Industry Council (ITI) because VPATs are widely recognized. The project is using VPAT version 2.4Rev 508 (March 07, 2020) (Word) and aligns with Web Content Accessibility Guidelines (WCAG) 2.0 specifications.

### Format

A digital ACR should be highly structured and machine-readable so that its functionality can be extended (for example, a comparison tool or search features could be added). The chosen format is [YAML, or Yet Another Markup Language](https://en.wikipedia.org/wiki/YAML), because it allows the text to be human-readable. Earlier attempts at producing a machine-readable ACR used Extensible Markup Language (XML).

Although YAML is human-readable, most people will view an OpenACR as an accessible HTML document in a web browser, as they view a web page. This will look much like a current VPAT® document. However, its functionality and practicality will exceed the traditional VPAT.

### Styling

Vendors will likely want to customize the look and feel of their ACR to include their branding. So the HTML output of an OpenACR is built to allow vendors to edit it later and add style elements using CSS.

However, the reports will also be produced in a format that allows procurement officers to compare various documents without presentation getting in the way. The ultimate goal is to create a standard that more easily shows the differences between reports (and thus, between the accessibility of different products).

## Public examples of OpenACRs

Part of the goal of this project is to build ACRs with version control in a repository like GitHub or Gitlab. That makes it easier to see the history of each report, note where accessibility has improved, and track changes over time. This is also important for ensuring that accessibility barriers are addressed.

You can find several [example OpenACR YAML files](https://github.com/GSA/openacr/tree/main/openacr) in the GitHub repository. Over time, more OpenACRs could be stored in a common location for easier sharing of important accessibility information.

## OpenACR editor tool

The [OpenACR editor tool](https://gsa.github.io/openacr-editor/) walks ACR authors through a step-by-step form that addresses all the aspects of accessibility for digital products. Alternatively, the report results can be written in YAML. Either way, the resulting document must validate against the [JSON Schema](https://github.com/GSA/openacr/tree/main/schema) that we have published in the central [GitHub repository](https://github.com/GSA/openacr/).

The OpenACR editor is a work-in-progress, and we [invite feedback](https://github.com/GSA/openacr/issues). It is built on a tool from the Web Accessibility Initiative (WAI) called the [ATAG Report Tool](https://wai-atag-report-tool.netlify.app/), which evaluates the accessibility of authoring tools. Building on this existing standard allows OpenACR to align with [Web Accessibility Initiatives (WAI)](https://www.w3.org/WAI/) from the [Word Wide Web Consortium (W3C)](https://www.w3.org/), and allows the editor tool to be extended in the future. Every effort has been made to make the editor tool itself accessible (which is fitting, given the nature of this project).

The editor is built with JavaScript, and allows you to either build an OpenACR file from scratch, or import one that has already been written. Then you can save the resulting OpenACR in both a YAML and HTML format. You can experiment with editing files by downloading the [Drupal YAML file](https://github.com/GSA/openacr/blob/main/openacr/drupal-9.yaml) and then loading it into the editor.

This is a stand-alone JavaScript application. Any changes are stored exclusively in your browser. You will need to save the YAML file to your computer in order to access this information in the future. We recommend saving it into a git repository so that changes can be effectively tracked over time.

Learn more about [creating an OpenACR report here](openacr/create-report).
