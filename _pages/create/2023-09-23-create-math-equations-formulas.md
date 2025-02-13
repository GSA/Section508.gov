---
layout: page
sidenav: true
permalink: create/accessible-equations-formulas/
type: create
title: Creating Accessible Equations and Formulas
contributors: smith-frances, usfs
topic: "Content creation (create)"
sub-topic: "Various Electronic Content (i.e. Multiple)"
audience:
- "Federal employee (fedemp)"
- "Public (public)"
- "Designer (design)"
resource-type: "Process/How-to"
format: "HTML (html)"
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


## Above the Basic Equation

Equations must meet the same expectations as text when it comes to Section 508 requirements. This includes equations used as examples, formulas with variables, scientific scenarios, and especially equations that do not read correctly with assistive technologies. So how can this be accomplished?

You create an image of the equation. Turning the equation into an image is the best option available today when implementing 508 requirements. It does take some extra steps when converting an equation into an image and ensuring that image conveys the same information as a text-based equation. And, the alt text needs to include the linearized form of the equation.

There are free resources that can help you create equation images, convert an equation image to text, and even work with handwritten equations and theories. Plus, they provide you with a critical piece you will need - a linearized text-based version of the equation (your alt text). For this resource, MathCast is used to demonstrate the graphic process for equations.
   
### MathCast

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

## Final Thoughts

The two main points to take away from this resource are:

* Use the correct Unicode character for the mathematical operator.
* You need a linearized form of the equation as part of your alt text when using equation graphics.

Equations, formulas, and theories are not that difficult to make accessible. You need to use the right tools and the correct Unicode character to make these types of visuals read properly. There are other equation editors on the market you may be interested in; therefore, do the research to find one you like and are comfortable with when understanding how equations are created and read by assistive technologies.

## Resources

The following resources were used in the creation of this resource:
<ul>
    <li><a href="https://mathcast.sourceforge.net/home.html" target="_blank" class="usa-link--external">MathCast</a></li>
    <li><a href="https://unicode.org/charts/#symbols" target="_blank" class="usa-link--external">Unicode lists</a></li>
    <li><a href="https://www.nvaccess.org/download/" target="_blank" class="usa-link--external">NVDA (free screen reader software similar to JAWS)</a></li>
</ul>

**Reviewed/Updated:** September 2023