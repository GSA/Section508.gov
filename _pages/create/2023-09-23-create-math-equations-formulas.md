---
layout: page
sidenav: true
type: create
title: Equations and Formulas
permalink: create/accessible-equations-formulas/
description: Learn how to create more accessible equations and formulas using Unicode characters, equation tools, and practical guidance for Word, PDF, and InDesign.
description-alt: Updated to include MathML
contributors: smith-frances, usfs
audience:
- Content Creators
- Designers
- Developers
- Federal Employees
- Members of the Public
topic:
- Create
subtopic:
- Best Practices
- Documents
- General Information
- Other
resource-type:
- Process & How-To
format: HTML
created: 2023-09-23
updated: 2026-09-12
disclaimer: true
---
It is quite common for those who work with equations and use screen reader technologies to get an error saying the equation does not read correctly. As creatures of habit, we are used to working with keyboard keys as mathematical components. However, there is a difference in using the key on your keyboard versus using a Unicode version of the mathematical component.

For example, the - (dash) is a heavily used key with many purposes, such as a ˗ (minus) symbol in equations. Assistive technologies, especially screen readers, will identify this symbol to the end user as either dash or minus. It makes a difference what you “type” as to which description the end user will receive. This is determined by the Unicode designation assigned to the character.

However, this is very limited as you only have 5 basic operators available to you for simple mathematical modifiers that is equivalent to the Unicode designation. Instead of using the number row of keys along the top of a standard keyboard, use the Numeric Keypad (Figure 1). When Num Lock (Clear on a mac keyboard) is activated, the numeric keyboard becomes active as a calculator. Instructions are sent to the computer to use the correct mathematical operator based on the user's input from the numeric keypad. However, this is very limited with only have five basic operators available to you: ˗ (minus), + (plus), × (multiplication), ÷ (division represented as a / forward slash), and = (equals).

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-math-equations-keypad.jpg" alt="Numerical Keypad" aria-describedby="figure-1" class="border-2px border-base-light shadow-2 padding-1"></div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-1">Figure 1—Screenshot of the Numeric Keypad integrated into standard keyboards.</span></div>
</div>

## Using Unicode Mapping  

Unicode is an information technology standard used in the programming and handling of text expressed in writing systems and software. This technology allows programmers with a base character set to use when programming technologies for end user experiences, especially in a different language. It is a platform that helps unify language and its use in computer software.

If you are on a PC, the Unicode Character Map is called Character Map. To access this reference, type “Character Map” in the Search field on your taskbar. The Character Map application should be listed at the top of the results. Click on the application and the Character Map window will pop-up (Figure 2).

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-math-equations-charmap.jpg" alt="Charcter Map" aria-describedby="figure-2" class="border-2px border-base-light shadow-2 padding-1"></div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-2">Figure 2—Screenshot of the Character Map application window for PC computers.</span></div>
</div>

You can search for any character within any font that is installed on your computer. Each character you select will give you the Unicode number (U+003C) plus the character name (Less-Than Sign) in both the bottom of the window and in a mouse hover. Not all fonts will have the same character sets. The sets will differ across languages, symbols, and special characters designed as part of the font. Pro tip: create a shortcut to the character map so you don’t have to search for it again.

For Mac users, there’s a semi-hidden way to access special symbol sets in Unicode and a more obscure method of searching for specific symbols across all macOS-included Unicode characters. This is using the Character Viewer (Figure 3). The easiest way to access the viewer is to go to the top menu bar and choose Edit → Special Characters (at the very bottom). This way you can access the Character Viewer at least in a lot of programs including Safari.

<div style="width: 100%; border: 1px solid black; background-color: #f5f9fc;" class="border-base radius-lg padding-1">
    <p>In Microsoft Word, insert Unicode characters by typing the 4- or 5-digit number followed by <strong>Alt</strong> + the <strong>x</strong> key.</p>
    <p>For example, an em dash (—) is typed as <strong>2014 Alt x</strong></p>
</div>

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-math-equations-charview.jpg" alt="Character Viewer" aria-describedby="figure-3" class="border-2px border-base-light shadow-2 padding-1"></div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-3">Figure 3—Screenshot of the Character Viewer application window for macOS.</span></div>
</div>

## Creating Equations/Formulas

Most content creators have two options available to them when working with equations and formulas, and they are based on the complexity of the equation. Most popular software applications can create simple equations and be read properly by assistive technologies as long as they are created correctly. This means making sure you are using a Unicode character that represents the mathematical symbol you want and not just a character on your keyboard that visually represents that symbol.

Some software programs, such as Excel, provide the user with more mathematical operators to create equations that are complicated. For this resource, Microsoft Word<sup>&copy;</sup>, Adobe Acrobat Pro<sup>&copy;</sup>, NVDA, and MathCast will be used to address the two most common situations in making equations accessible.

### Word to PDF Equations

In Word, you have the ability to insert ready-made equations or create your own using the Equation Editor located in the Symbols section of the Insert tab. This feature helps you work with equations utilizing Unicode-mapped operators, which you turn on in the Conversions section of the Equation Editor.

If creating equations without using the Equation Editor, use the Unicode equivalent of the mathematical symbols (not the symbol on your keyboard as a dash is different than a minus symbol) by inserting operators using the Character Map. In either case, once your equation is written, convert your Word document to PDF and the Unicode characters should read and be recognized correctly.

So how simple or complicated must the equation be to read correctly by assistive technologies? Even though Word enables us  to create a multitude of equations, the equations still fall short of the goal of being read properly by assistive technologies. For example, using NVDA screen reader:

<ul>
    <li>2+6=8 reads as 2 plus 6 equals 8, BUT</li>
    <li>(2+6)<sup>2</sup> reads as 2 plus 6 2, but should read as parenthesis 2 plus 6 parenthesis squared</li>
</ul>

And the above examples were created without using the Equation Editor but with the correct Unicode characters. Does using the Equation Editor make a difference? No. It is actually more problematic as the equation is created within its own container, which is read by screen readers, and very few of the alphanumeric characters and mathematical operators are readable. So, until the software fully meets assistive technologies, very basic and simple equations are the only accessible equations that can be made in Word without a lot of problems.

### inDesign to PDF equations

The process listed above is the same for working with formulas in inDesign, with one caveat. You need to create a style called Formula to format your equations. Since inDesign does a better job with using glyphs, which are assigned Unicode characters, we are able to create a bit higher than just very simple equations and easily format our equations using our style.

Once converted to PDF, you edit the role mapping settings for the mapped styles and DELETE the reference for /Formula /P (which maps the style Formula to a P tag) and all instances of this style in the tags tree will revert to the tag. This process does not work well with Word-converted PDF documents.

### Using MathML for the Web

While turning an equation into an image with alt text is a reliable option for documents, web content has a better native option: MathML (Mathematical Markup Language). MathML is a W3C standard for describing mathematical notation, and it carries both the visual structure and the semantic meaning of an equation directly in the markup. This means assistive technologies can read the equation in a meaningful, navigable way — rather than relying on a single block of alt text that a user cannot explore piece by piece.

#### Why MathML is preferred for the web

* It's machine-readable math, not a picture of math. Screen readers can interpret MathML and speak equations correctly, including structure like fractions, exponents, roots, and grouping.  
* It scales and reflows. Unlike an image, MathML text resizes cleanly when users zoom or change font size, supporting low-vision users and reflow requirements.  
* It supports navigation. Some assistive technologies allow users to step through an equation term by term, which a flat image with alt text cannot provide.  
* It reduces maintenance. You edit the markup directly rather than regenerating and re-alt-texting an image every time an equation changes.

#### Standard and browser support
<p>
<a href="https://www.w3.org/TR/MathML3/" target="_blank" class="usa-link--external" rel="noopener">MathML 3 has been a World Wide Web Consortium (W3C) recommendation since 2014</a>. More recently, the W3C published <a href="https://www.w3.org/TR/mathml-core/" target="_blank" class="usa-link--external" rel="noopener">MathML Core</a> — a precisely specified subset designed for consistent rendering in browsers — as a candidate recommendation in June 2025, with further work on a full <a href="https://www.w3.org/TR/mathml4/" target="_blank" class="usa-link--external" rel="noopener">MathML 4 in progress</a>.</p>

<p>Native browser support has improved substantially. All three major browser engines now support MathML natively: Firefox (Gecko), Safari (WebKit), and Chromium-based browsers such as Chrome and Edge (Blink) added native MathML Core support beginning with Chrome 109.</p>

<p>Support is strong but not perfectly uniform across every feature and every assistive technology. For that reason, many teams still use a rendering library such as MathJax, which accepts MathML (or LaTeX) input and renders it consistently across environments while preserving an accessible representation for assistive technologies. Whichever approach you choose, test your equations with the browsers and screen readers your audience uses.</p>

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;">
    <p><strong>A note on screen reader support:</strong> Screen reader handling of MathML varies by product and platform. VoiceOver reads MathML well in Safari; JAWS and NVDA also support MathML, though older NVDA versions historically required an add-on (MathPlayer) for full support. Because behavior differs across assistive technologies, it is recommended that you validate real equations with at least one screen reader before publishing.</p>
  </div>

#### Two Ways to Author MathML

1. Presentation MathML describes how the equation looks (its layout). This is the most common form and is generally sufficient for accessibility.  
2. Content MathML describes what the equation means (its mathematical semantics). This is more verbose but can be useful for advanced applications.

<h5><strong>A Simple Equation</strong></h5>
<p>The equation (2 + 6)² = 64 can be expressed in Presentation MathML as:</p>
<div class="summary-box--code">
<pre><code>
&lt;math xmlns="http://www.w3.org/1998/Math/MathML">
        &lt;msup>
            &lt;mrow>
            &lt;mo>(&lt;/mo>
            &lt;mn>2&lt;/mn>
            &lt;mo>+&lt;/mo>
            &lt;mn>6&lt;/mn>
            &lt;mo>)&lt;/mo>
            &lt;/mrow>
            &lt;mn>2&lt;/mn>
        &lt;/msup>
        &lt;mo>=&lt;/mo>
        &lt;mn>64&lt;/mn>
&lt;/math>
</code></pre>
</div>

Notice how the <code>&lt;msup&gt;</code> element explicitly ties the exponent (2) to the grouped expression (2 + 6). This is exactly the structure that was lost in the earlier <a href="{{site.baseurl}}/create/accessible-equations-formulas/#word-to-pdf-equations"> Word to PDF Equations example</a> mentioned above, where (2+6)² read incorrectly as "2 plus 6 2." With MathML, a screen reader can convey "open parenthesis 2 plus 6 close parenthesis squared equals 64."
 
The same example can be expressed in Content MathML as:
  <div class="summary-box--code">
<pre><code>&lt;math xmlns="http://www.w3.org/1998/Math/MathML"&gt;
    &lt;apply&gt;
        &lt;eq/&gt;
        &lt;apply&gt;
        &lt;power/&gt;
        &lt;apply&gt;
            &lt;plus/&gt;
            &lt;cn&gt;2&lt;/cn&gt;
            &lt;cn&gt;6&lt;/cn&gt;
        &lt;/apply&gt;
        &lt;cn&gt;2&lt;/cn&gt;
        &lt;/apply&gt;
        &lt;cn&gt;64&lt;/cn&gt;
    &lt;/apply&gt;
&lt;/math&gt;</code></pre>
</div>

Notice what changes. There are no parentheses and no visual layout. Instead:

<ul>
    <li>The outer <code>&lt;apply&gt;&lt;eq/&gt;</code> says the two sides are equal.</li>
    <li><code>&lt;apply&gt;&lt;power/&gt;</code> raises a base to an exponent. Its first argument is the whole sum (2 + 6) and its second argument is 2.</li>
    <li><code>&lt;apply&gt;&lt;plus/&gt;</code> groups 2 and 6 together as one quantity.</li>
   <li>The grouping that parentheses provide visually is now expressed by the nesting of the tree itself so there is no ambiguity about what gets squared.</li>
</ul>

<h5>An Advanced Example: The Quadratic Formula</h5>

<p>The equation:  x = ( −b ± √(b² − 4ac) ) / 2a can be expressed in Presentation MathML as:</p>
<div class="summary-box--code">
<pre><code>&lt;math xmlns="http://www.w3.org/1998/Math/MathML"&gt;
  &lt;mi&gt;x&lt;/mi&gt;
  &lt;mo&gt;=&lt;/mo&gt;
  &lt;mfrac&gt;
    &lt;mrow&gt;
      &lt;mo&gt;&amp;#x2212;&lt;/mo&gt;
      &lt;mi&gt;b&lt;/mi&gt;
      &lt;mo&gt;&amp;#x00B1;&lt;/mo&gt;
      &lt;msqrt&gt;
        &lt;mrow&gt;
          &lt;msup&gt;
            &lt;mi&gt;b&lt;/mi&gt;
            &lt;mn&gt;2&lt;/mn&gt;
          &lt;/msup&gt;
          &lt;mo&gt;&amp;#x2212;&lt;/mo&gt;
          &lt;mn&gt;4&lt;/mn&gt;
          &lt;mi&gt;a&lt;/mi&gt;
          &lt;mi&gt;c&lt;/mi&gt;
        &lt;/mrow&gt;
      &lt;/msqrt&gt;
    &lt;/mrow&gt;
    &lt;mrow&gt;
      &lt;mn&gt;2&lt;/mn&gt;
      &lt;mi&gt;a&lt;/mi&gt;
    &lt;/mrow&gt;
  &lt;/mfrac&gt;
&lt;/math&gt;</code></pre>
</div>


<p>The same quadratic formula can be expressed in Content MathML as:
<div class="summary-box--code">
<pre><code>&lt;math xmlns="http://www.w3.org/1998/Math/MathML"&gt;
  &lt;apply&gt;
    &lt;eq/&gt;
    &lt;ci&gt;x&lt;/ci&gt;
    &lt;apply&gt;
      &lt;divide/&gt;
      &lt;apply&gt;
        &lt;plusminus/&gt;
        &lt;apply&gt;
          &lt;minus/&gt;
          &lt;ci&gt;b&lt;/ci&gt;
        &lt;/apply&gt;
        &lt;apply&gt;
          &lt;root/&gt;
          &lt;apply&gt;
            &lt;minus/&gt;
            &lt;apply&gt;
              &lt;power/&gt;
              &lt;ci&gt;b&lt;/ci&gt;
              &lt;cn&gt;2&lt;/cn&gt;
            &lt;/apply&gt;
            &lt;apply&gt;
              &lt;times/&gt;
              &lt;cn&gt;4&lt;/cn&gt;
              &lt;ci&gt;a&lt;/ci&gt;
              &lt;ci&gt;c&lt;/ci&gt;
            &lt;/apply&gt;
          &lt;/apply&gt;
        &lt;/apply&gt;
      &lt;/apply&gt;
      &lt;apply&gt;
        &lt;times/&gt;
        &lt;cn&gt;2&lt;/cn&gt;
        &lt;ci&gt;a&lt;/ci&gt;
      &lt;/apply&gt;
    &lt;/apply&gt;
  &lt;/apply&gt;
&lt;/math&gt;</code></pre></div></p>


<p>How the meaning is encoded in Content MathML:</p>
<ul>
  <li><code>&lt;apply&gt;&lt;divide/&gt;</code> is the overall fraction; its first argument is the numerator, its second is the denominator 2a.</li>  
  <li><code>&lt;apply&gt;&lt;plusminus/&gt;</code> expresses the ± relationship between −b and the square root term.</li>  
  <li><code>&lt;apply&gt;&lt;minus/&gt;</code> with a single argument represents unary negation (i.e., −b), which is semantically distinct from subtraction.</li>  
  <li><code>&lt;apply&gt;&lt;root/&gt;</code> is the square root; the inner <code>&lt;apply&gt;&lt;minus/&gt;</code> is subtraction (b² − 4ac), which uses <code>&lt;minus/&gt;</code> with two arguments this time.</li>  
  <li><code>&lt;apply&gt;&lt;power/&gt;</code> gives b², and <code>&lt;apply&gt;&lt;times/&gt;</code> multiplies 4 · a · c.</li>
</ul>

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;">
    <strong>One small practical note:</strong> In HTML5, the <code>&lt;math&gt;</code> element is parsed as MathML automatically, so the xmlns attribute is technically optional in an HTML document. However, it's still good practice to include it; it's required for standalone XML/XHTML contexts, and it makes the markup portable and unambiguous.</div>

<h4>Styling MathML</h4>

You can style MathML to match your page design while keeping it accessible. A few guidelines:
<ul>

<li>Do not encode meaning in color or style alone. Color, bold, or size should never be the only way a relationship or distinction is communicated.</li>  
<li>Use the semantic element over visual substitutes. For example, use <code>&lt;msup&gt;</code> for an exponent rather than styling a raised, smaller number. The visual result may look similar, but only the semantic element reads correctly.</li>   
<li>Use CSS sparingly and test it. You can apply properties such as color, font-size, and background-color to <code>&lt;math&gt;</code> elements and their children. Always test the styled result with a screen reader to confirm the meaning is still conveyed.</li>   
<li>Maintain sufficient contrast. Equations must meet the same color-contrast requirements as body text. </li>  
<li>Allow equations to resize. Avoid fixed pixel sizing that prevents equations from scaling with the surrounding text when a user zooms.</li> 
</ul>

<div class="border-base radius-lg border-1px padding-1 bg-primary-lighter" style="margin-top: 1.0em;">
    <strong>Note:</strong> Because rendering can vary, it is good practice to provide a text alternative for environments where MathML is not supported. When using a library like MathJax, this is often handled automatically. If you author MathML directly, test across your supported browsers and assistive technologies, and be prepared to supply a linearized text equivalent as an alternative option.
  </div>

<h4>When to Still Use an Image</h4>

MathML is the recommended approach for web content. Continue to use the image-with-alt-text approach (for example, via MathCast) when:
<ul>
<li>You are producing a document or PDF rather than web content, or</li>  
<li>Your publishing platform does not support MathML and you cannot use a rendering library, or</li>   
<li>The equation is highly complex and reliable rendering cannot be confirmed through testing.</li></ul>

<h2>Above the Basic Equation</h2>

Equations must meet the same expectations as text when it comes to Section 508 requirements. This includes equations used as examples, formulas with variables, scientific scenarios, and especially equations that do not read correctly with assistive technologies. So how can this be accomplished?

You create an image of the equation. Turning the equation into an image is the best option available today when implementing 508 requirements. It does take some extra steps when converting an equation into an image and ensuring that image conveys the same information as a text-based equation. And, the alt text needs to include the linearized form of the equation.

There are free resources that can help you create equation images, convert an equation image to text, and even work with handwritten equations and theories. Plus, they provide you with a critical piece you will need - a linearized text-based version of the equation (your alt text). For this resource, MathCast is used to demonstrate the graphic process for equations.
   
<h3>MathCast</h3>

MathCast is an open source equation editor. You input your equation using the Rapid Mathline interface, which then renders a graphical representation of your equation. MathCast supports output image files (BMP, PNG, and EMF) that you can incorporate into documents, presentations and web pages. The user-friendly graphical interface is designed for simplicity while still providing powerful equation creation and editing (Figure 4). It supports the W3C MathML 2.0 and W3C XHTML 1.1.

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-math-equations-mathcast01.jpg" alt="MathCast screen" aria-describedby="figure-4" class="border-2px border-base-light shadow-2 padding-1"></div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-4">Figure 4—Screenshot of MathCast’s main screen; the Edit Screen.</span></div>
</div>

All creation and editing of equations is done using the Rapid Mathline. When you select Equation → New from the top menu tabs, an input field will appear at the bottom of the window. This is where you will enter your equation along with access to an extensive set of mathematical operators, symbols and functions (Figure 5).

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-math-equations-mathline.jpg" alt="MathCast's Rapid Mathlin" aria-describedby="figure-5" class="border-2px border-base-light shadow-2 padding-1"></div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-5">Figure 5—Screenshot of MathCast’s Rapid Mathline mechanism.</span></div>
</div>

All the basic operations will take place in this field. Even though the current view of the equation is linearized, the strength of this program happens when the line of text is converted to a mathematical representation. Once you feel your equation is ready, select the OK button and the text will be rendered in the main part of the screen as a visual representation (Figure 6). Just double-click your equation to take you back to edit mode and the Rapid Mathline.

<div class="tablet:grid-col" style="margin: auto; max-width: 90%; text-align: center; padding: 10px 0px">
    <div class="margin-top-1"><img src="{{site.baseurl}}/assets/images/create-math-equations-mathcast02.jpg" alt="Rapid Mathline generted expression" aria-describedby="figure-6" class="border-2px border-base-light shadow-2 padding-1"></div>
    <div class="font-mono-3xs margin-x-auto auto" style="max-width: 90%; text-align: center;"><span id="figure-6">Figure 6—Screenshot of mathematical expression generated from the Rapid Mathline.</span></div>
</div>

You can save your image when you are finished. Your alternative (alt) text for the image will be the linearized text-based equivalency of the graphic in the Rapid Mathline field. The symbols used to create the equation will directly translate to the correct spoken text. This provides the end user the same information as the visual representation of the equation. Just copy and paste into any software in which you are using the image.

Some things to consider for this equation editor is that, if you don’t have much math background, you can rely on the help guide that provides great examples on how to write out equations. You cannot change the font that is used in the equation image. You have some control over the size and color of the equation. But, at the writing of this resource, this program is only available for the PC. Still, MathCast can be a great tool for creating equation images and provides you with the equation part of your alt text.

<h2>Final Thoughts</h2>

The three main points to take away from this resource are:

<ul>
<li>Use the correct Unicode character for the mathematical operator.</li> 
<li>You need a linearized form of the equation as part of your alt text when using equation graphics.</li> 
<li>For web content, use MathML (optionally rendered through a library such as MathJax or KaTeX) rather than an image, so that equations are readable, navigable, and resizable by assistive technologies.</li></ul> 

Equations, formulas, and theories are not that difficult to make accessible. You need to use the right tools and the correct Unicode character to make these types of visuals read properly. There are other equation editors on the market you may be interested in; therefore, do the research to find one you like and are comfortable with when understanding how equations are created and read by assistive technologies.

<h2>Resources</h2>

The following resources were used in the creation of this resource:
<ul>
    <li><a href="https://mathcast.sourceforge.net/home.html" target="_blank" class="usa-link--external">MathCast</a></li>
    <li><a href="https://unicode.org/charts/#symbols" target="_blank" class="usa-link--external">Unicode lists</a></li>
    <li><a href="https://www.nvaccess.org/download/" target="_blank" class="usa-link--external">NVDA (free screen reader software similar to JAWS)</a></li>
</ul>