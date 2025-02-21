---
layout: page
sidenav: true
permalink: create/electronic-signatures/
type: create
title: 'Create Electronic Signatures'
created: 1576174077
topic: "Content creation (create)"
sub-topic: "Various Electronic Content (i.e. Multiple)"
audience:
- "Federal employee (fedemp)"
- "Public (public)"
- "Designer (design)"
resource-type: "Process/How-to"
format: "HTML (html)"
---

<p dir="ltr">
  Electronic signatures are used to digitally validate or acknowledge such things as PDF documents, online forms, or specialized e-signature software. As more government services move online, it's our responsibility to ensure that everyone can independently access and use electronic signature solutions, including:
</p>
<ul>
<li>
    <a href="#pdf-form">PDF form documents</a> - Electronic documents containing signatures, or signature form fields;
</li>

<li>
    <a href="#web-based">Websites & web-based applications</a> - Online form fields, radio buttons and checkboxes;&nbsp;
</li>

<li>
    <a href="#esig">E-signature software</a> - Software to automate workflows.
</li>
</ul>
<h2 dir="ltr" id="pdf-form">
  PDF Form Documents
</h2>

<p dir="ltr">
  One of the most common ways to create electronic signatures is through PDF documents, generally by the use of a fillable form, or scanning a person's written signature.
</p>

<h3 dir="ltr">
  Fillable Forms
</h3>

<p dir="ltr">
  PDF form documents provide information in a clean and legible manner, and allow users to provide their signature by typing, drawing, or inserting an image file with their name. Similar to websites, PDF forms must be designed to enable keyboard (non-mouse) users, ensure navigation follows a logical tab order, and provide the instructions and cues necessary to complete the form.
</p>

<p dir="ltr">
  To add a signature field to a PDF, use a &ldquo;pro&rdquo; version of Acrobat, InDesign or other document development tool (Figure 1), add tooltips that match the label or instruction, and validate that the tab order matches the visual/logical order of form fields. There is a bit more to making a fillable PDF, but that's a quick description of the electronic signature part.&nbsp;
</p>

<p style="text-align: center;">
  <img alt="Positioned above the signature block, a blue rectangle (with tiny red tag in the upper left-hand corner) indicates PDF form's electronic signature field." src="{{site.baseurl}}/assets/images/signature-electronic.jpg" title="Positioned above the signature block, a blue rectangle (with tiny red tag in the upper left-hand corner) indicates PDF form's electronic signature field." /><br />Figure 1: Example of an electronic signature field in a PDF document.
</p>

Learn more about specific considerations for creating [Accessible Forms in Acrobat][1] from WebAIM.org.

<h3 dir="ltr">
  Hand-Written Signatures
</h3>

<p dir="ltr">
  When someone prints out a document or form, signs it, then scans the signed document into an electronic file such as a PDF, the signature within the scanned document (sometimes called a &ldquo;wet signature&rdquo;) is simply an image. It should be marked as a &ldquo;figure&rdquo; and provided with equivalent alternative text (Figure 2).&nbsp;
</p>

<p dir="ltr" style="text-align: center;">
  <img alt=" Positioned above the signature block, a hand-written (wet) signature of a scanned document (tagged as a figure) indicates PDF form's signature field." src="{{site.baseurl}}/assets/images/signature-wet.jpg" style="width: 1082px; height: 394px;" /><br />Figure 2: Example of a hand-written signature field in a PDF document as depicted in Adobe Acrobat DC's Order view.
</p>

<p dir="ltr">
  As a best practice, particularly when the signature overlaps with the document text, simply mark the entire signature block as a figure and add all of the text as alternative text.&nbsp;
</p>

<p dir="ltr">
  Learn more about specific considerations for hand-written signatures on page 25 of the <a href="https://assets.section508.gov/assets/files/PDF%20Testing%20and%20Remediation%20Guide-Adobe%20Acrobat%20DC%20Pro-AED%20COP.docx">PDF Testing and Remediation Guide</a>.
</p>

<h2 dir="ltr" id="web-based">
  Websites & Web-based Applications
</h2>

<p dir="ltr">
  You are likely familiar with having to agree to an end-user license agreement (EULA) in order to use a software tool. By selecting the checkbox agreeing to the terms of the EULA, you have electronically signed a legal, valid, and enforceable agreement. The example below (Figure 3) shows two items the user could agree to upon selecting &ldquo;Sign up&rdquo;:
</p>

<ul>
<li>
    The website's &ldquo;terms of service, privacy policy and cookie policy&rdquo;.&nbsp;
</li>

<li>
    To "receive occasional product updates, user research invitations, company announcements, and digests&rdquo; - if they select the little checkbox.&nbsp;
</li>
</ul>

<p dir="ltr" style="text-align: center;">
  <img alt="Website login screen with a checkbox to opt into receiving occasional announcements, and notice that you are agreeing to website policies upon selecting &quot;Sign Up&quot;" src="{{site.baseurl}}/assets/images/signature-web-form.jpg" style="width: 795px; height: 184px;" /><br />Figure 3: Example of website login screen with a checkbox to opt in, and notice that you agree to website policies upon signing up
</p>

<p dir="ltr">
  Regardless of the user interface design for capturing their signature or consent, websites generally use HTML forms elements.
</p>

<p dir="ltr">
  Learn more about specific considerations for <a href="{{site.baseurl}}/content/guide-accessible-web-design-development#forms">website forms</a> design, development, and testing.&nbsp;
</p>

<h2 dir="ltr" id="esig">
  E-Signature Software
</h2>

<p dir="ltr">
  Electronic signature software allows a document to be signed with a legal signature. Users can create signatures by using a keyboard or mouse on a desktop computer, phone or tablet. Electronic signature platforms speed up workflows, automate tracking for increased efficiency, and enable greater access for people with disabilities, compared to paper forms.
</p>

<p dir="ltr">
  To ensure that everyone can use these tools to e-sign, electronic signature software <a href="{{site.baseurl}}/buy">procured</a> by your agency must conform with the <a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines">Revised 508 Standards</a> for <a href="{{site.baseurl}}/create/software-websites">Software & Websites</a>.
</p>

<h2 dir="ltr">
  CAPTCHA
</h2>

<p dir="ltr">
  You've probably visited websites that ask you to type in the text of an image of a distorted word, identify pictures, or solve a math problem before you can submit a form; this is called CAPTCHA. CAPTCHA is an acronym for Completely Automated Public Turing Test to Tell Computers and Humans Apart and is a way to identify whether a user is human or not.
</p>

<p dir="ltr">
  If you employ CAPTCHA, ensure it has a text alternative that describes its purpose. Also provide an alternate form of the CAPTCHA, using a different modality, to ensure that the electronic signature solution can accommodate different disabilities and work with <a href="https://mn.gov/admin/at/getting-started/understanding-at/what-is-it/">assistive technologies</a>.
</p>

<p dir="ltr">
  Learn more about specific considerations for <a href="{{site.baseurl}}/content/guide-accessible-web-design-development#captcha">CAPTCHA</a> content, design, and development.
</p>

<div class="border-base radius-lg border-1px">
  <div class="padding-1">
    <strong>Before You Go</strong>
<p dir="ltr">
      We're always working to improve the information and resources on this website. To suggest a new resource for this or another page, please <a href="mailto:section.508@gsa.gov">contact us</a>.
    </p>
  </div>
</div>

<p dir="ltr">
  <strong>Page Reviewed/Updated</strong>: December 2019
</p>

 [1]: https://webaim.org/techniques/acrobat/forms