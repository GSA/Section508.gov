---
layout: post
permalink: blog/accessibility-bytes/alternative-text/
type: article
title: 'Accessibility Bytes No. 5: Alternative Text'
tags: Accessibility-Bytes Content-Creation Testing #choose one or more (comma separated): Accessibility-Bytes, Acquisition, Content-Creation, Design-and-Develop, Events, Policy-and-Management, Testing 
social_img: '{{site.baseurl}}/assets/images/social-media-og-image-bytes.jpg'
created: 2024-09-12
description: "<strong>Do you know some people rely only on a meaningful description of an image to understand the information contained in the image?</strong><p>Alternative text, also known as alt text, is descriptive text that conveys the meaning of an image in digital content. It’s designed to make visual content accessible to people with vision disabilities."
contributors: 
redirect_from:
- blog/accessibility-bytes/5/ #Allows users to navigate by number
---
<h2 style="line-height:1.2;">Do you know some people rely only on a meaningful description of an image to understand the information contained in the image?</h2>

Alternative text, also known as alt text, is descriptive text that conveys the meaning of an image in digital content. It’s designed to make visual content accessible to people with vision disabilities. While there are other benefits of alt text for all users, this _Accessibility Bytes_ focuses on people who use screen readers.

When a person uses a screen reader, the screen reader will read the onscreen text aloud using text-to-speech technology. When the screen reader reaches an image, it will announce that it has detected an image and read the alt text for that image so the user can know what the image is meant to convey.

Without alt text, people who use screen readers cannot access the information provided in the images. This is why alt text is a requirement in the Section 508 standards for creating digital content.

Different authoring tools will have different ways of adding alt text. For example, to add alt text to an image in Microsoft Word, open the contextual menu (right-click) on the image, select “View Alt Text” (Figure 1), then enter text that appropriately describes the image and communicates its purpose (Figure 2).

<div class="tablet:grid-col" style="margin: auto; max-width: 100%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/byte-005-figure-1.jpg" alt="Screenshot of Microsoft Word with the contextual menu open for an image, highlighting the 'View Alt Text...' sub-menu." aria-describedby="figure-1" class="border-2px border-base-light shadow-2 padding-1">
    </div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-1"><strong>Figure 1.</strong> Image context menu opening the Alt Text task pane within Microsoft Word</span>
    </div>
</div>

<div class="tablet:grid-col" style="margin: auto; max-width: 100%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/byte-005-figure-2.jpg" alt="Screenshot of Microsoft Word with the Alt Text pane open for the selected image, and the following alt text description: Three people talking at a table. One types on a laptop while another writes notes." aria-describedby="figure-2" class="border-2px border-base-light shadow-2 padding-1">
    </div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-2"><strong>Figure 2.</strong> Entering an image description in the Alt Text task pane within Microsoft Word.</span>
    </div>
</div>

When writing alt text, follow these guidelines to ensure the text is as helpful and meaningful as possible.

If an image is only decorative and does not convey meaningful information, set the alt text as decorative so that screen readers recognize that the image does not need to be announced and can be skipped. In Microsoft Word, you can do this by viewing the alt text and checking the box that says, “Mark as decorative” (Figure 3). Any program you use should also have its own specific guidance on how to do this.

<div class="tablet:grid-col" style="margin: auto; max-width: 100%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/byte-005-figure-3.jpg" alt="Screenshot of Microsoft Word with the Alt Text pane open for the selected image, with the 'Mark as decorative' checkbox checked." aria-describedby="figure-3" class="border-2px border-base-light shadow-2 padding-1">
    </div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-3"><strong>Figure 3.</strong> Marking  image as decorative in the Alt Text task pane within Microsoft Word.</span>
    </div>
</div>

<div class="tablet:grid-col" style="margin: auto; max-width: 100%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/authoring-alt-text-figure-03.jpg" alt="GSA logo with text: Section508.gov Buy. Build. Be Accessible." aria-describedby="figure-4" class="border-2px border-base-light shadow-2 padding-1">
    </div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-4"><strong>Figure 4.</strong> Example for logos.</span>
    </div>
</div>

Keep your descriptions short and focused on the purpose of the image. Avoid repeating information that is already in the main text, and don’t use unnecessary phrases, like “this is a photo of…” or descriptions of irrelevant details in the image. For example, if your image is designed to show how a ramp helps wheelchair users, you do not need to include an in-depth description of the wheelchair user’s clothes or physical appearance in your alt text.

For more guidance on [alt text]({{site.baseurl}}/create/alternative-text/) and accessibility, visit the resources for [content creators]({{site.baseurl}}/create/).

<div class="border-base radius-lg border-1px padding-1" style="width: 100%; background-color: #f5f9fc;">
To subscribe to, manage, or unsubscribe from <em>Accessibility Bytes</em>, visit <a href="https://public.govdelivery.com/accounts/USGSA/subscriber/new?topic_id=USGSA_1324" target="_blank" class="usa-link--external">GSA Email Updates</a>.
</div>

**Reviewed/Updated:** September 2024