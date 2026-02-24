---
layout: post
type: article
title: 'Accessibility Bytes No. 16: Using Accessible Personas'
permalink: blog/accessibility-bytes/using-accessible-personas/
redirect_from:
- blog/accessibility-bytes/16/ #Allows users to navigate by number
description: Did you know that you can use semi-fictional characters that portray an individual or group of users to improve the design, development and accessibility of your agency’s electronic information or digital service? Learn how semi-fictional characters, called personas, can be are primarily used in the research and design for a service, product, or website. 
disclaimer: 
tags: Accessibility-Bytes Content-Creation Policy-and-Management Testing #choose one or more (space separated): Accessibility-Bytes Acquisition Content-Creation Design-and-Develop Events Policy-and-Management Testing
social_img: "assets/images/social-media-og-image-bytes.jpg"
social_img_alt: "Accessibility Bytes. GSA logo with Section508.gov. Buy. Build. Be Accessible."
created: 2026-02-24
---
<h2 style="line-height:1.2;">Did you know that you can use semi-fictional characters that portray an individual or group of users to improve the design, development and accessibility of your agency’s electronic information or digital service?</h2>

These semi-fictional characters, called [_personas_]({{ site.baseurl }}/tools/glossary/#personas), are primarily used in the research and design phase of a project to ensure that the user experience — including equivalent access to information for people with disabilities — is considered for a service, product, or website. 

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
   <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/byte-016-figure-1.jpg" alt="UX Persona template with attributes for personality, motivations, needs and technology." aria-describedby="figure-1" class="border-2px border-base-light shadow-2 padding-1"></div>
   <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-1"><strong>Figure 1: </strong>Generic UX Persona template with attributes for personality, motivations, needs and technology.</span>
   </div>
</div>

<ul class="usa-card-group  margin-top-5">
  <li class="usa-card flex-1">
    <div class="usa-card__container thumbnail-card">
      <div class="usa-card__body">
        <p>
          <img src="{{site.baseurl}}/assets/images/persona-enzo.jpg" alt="An african american man sitting on a park bench with dark sunglasses on. He is wearing a beige jacket, a gray scarf and plaid blue pants. He is putting headphones into his ears to listen to his phone while a white cane leans against the bench." class="padding-1 padding-left-2 padding-bottom-2 radius-lg" style="width:250px;height:250px;float:right;border-radius: 0.5rem !important;"/>
          <strong>Name</strong>: Enzo<br>
          <strong>Age</strong>: 40 <br> 
          <strong>Occupation</strong>: Program Analyst at a federal agency  <br>
          <strong>Location</strong>: Billings, Montana  <br>
          <strong>Disability</strong>: Blind since birth  <br>
          <strong>Assistive Technology</strong>: Enzo uses a screen reader and Braille display.<br>  
          <strong>Home life</strong>: Married with four children still at home  <br>
          <strong>Goals</strong>: Complete forms, understand the information being presented, understand summary reports.  <br> 
          <strong>Frustrations</strong>: Unable to determine what information is being asked by a form, difficulty reading charts due to missing labels, images that do not have description, things are out of order when navigating with a screen reader.  <br>
          <strong>Quote</strong>: “If it's not properly labeled, I can only make a best guess as to what's on the screen.”  <br>
          <strong>Design Considerations</strong>:
        </p>
        <ul>
           <li>Ensure semantic HTML and ARIA labels for form fields.</li> 
           <li>Provide Section 508 conformant data visualizations with text equivalents.</li> 
           <li>Support keyboard and screen reader navigation.</li>
        </ul>  
      </div>
    </div>
  </li>
</ul>

## Design Considerations
Using multiple, various personas helps uncover the different needs and expectations --- called design considerations --- of various user types by illustrating how individuals interact with content and assistive technologies. 

Personas should also reflect attributes that align with <a href="https://www.access-board.gov/ict/#302-functional-performance-criteria" target="_blank" class="usa-link--external">functional performance criteria</a>, based on how people use products and services to interact with technology. These criteria include:

* Without Vision
* Limited Vision
* Without Perception of Color
* Without Hearing
* Limited Hearing
* Without Speech
* Limited Manipulation
* Limited Reach and Strength
* Limited Language, Cognitive, and Learning Abilities

## Development Considerations
Business analysts and other requirements officials should use persona-based design considerations to develop acceptance criteria for [ICT accessibility-centered user stories]({{ site.baseurl }}/develop/user-stories/), ensuring new products or features conform to accessibility standards --- minimizing the need for costly remediation.

<div class="grid-col-12 border-base radius-lg padding-1" style="border: 1px solid black; background-color: #f5f9fc;">
  <strong>TIP:</strong> Before creating your new personas, check with your agency Web Content Manager or <a href="{{site.baseurl}}/tools/program-manager-listing/">Section 508 Program Manager</a> to see if personas already exist for your users and mission.</div>

For more information on creating personas for accessible ICT—including sample personas for various disability types that you can  use in your user stories—visit [Sample Personas for Users With Disabilities]({{ site.baseurl }}/develop/sample-personas/).

**Reviewed/Updated:** February 2026

