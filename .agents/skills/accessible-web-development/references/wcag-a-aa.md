# WCAG A/AA development and testing reference

Local criterion catalog. The original generator is not bundled here. Read normative sources for complete definitions, conditions and exceptions. These authored actions are implementation/test aids, not a replacement standard. Instruction coverage is draft; case coverage and observed outcomes are separate.

## Contents

- [1.1.1 Non-text Content](#sc-1-1-1)
- [1.2.1 Audio-only and Video-only (Prerecorded)](#sc-1-2-1)
- [1.2.2 Captions (Prerecorded)](#sc-1-2-2)
- [1.2.3 Audio Description or Media Alternative (Prerecorded)](#sc-1-2-3)
- [1.2.4 Captions (Live)](#sc-1-2-4)
- [1.2.5 Audio Description (Prerecorded)](#sc-1-2-5)
- [1.3.1 Info and Relationships](#sc-1-3-1)
- [1.3.2 Meaningful Sequence](#sc-1-3-2)
- [1.3.3 Sensory Characteristics](#sc-1-3-3)
- [1.3.4 Orientation](#sc-1-3-4)
- [1.3.5 Identify Input Purpose](#sc-1-3-5)
- [1.4.1 Use of Color](#sc-1-4-1)
- [1.4.2 Audio Control](#sc-1-4-2)
- [1.4.3 Contrast (Minimum)](#sc-1-4-3)
- [1.4.4 Resize Text](#sc-1-4-4)
- [1.4.5 Images of Text](#sc-1-4-5)
- [1.4.10 Reflow](#sc-1-4-10)
- [1.4.11 Non-text Contrast](#sc-1-4-11)
- [1.4.12 Text Spacing](#sc-1-4-12)
- [1.4.13 Content on Hover or Focus](#sc-1-4-13)
- [2.1.1 Keyboard](#sc-2-1-1)
- [2.1.2 No Keyboard Trap](#sc-2-1-2)
- [2.1.4 Character Key Shortcuts](#sc-2-1-4)
- [2.2.1 Timing Adjustable](#sc-2-2-1)
- [2.2.2 Pause, Stop, Hide](#sc-2-2-2)
- [2.3.1 Three Flashes or Below Threshold](#sc-2-3-1)
- [2.4.1 Bypass Blocks](#sc-2-4-1)
- [2.4.2 Page Titled](#sc-2-4-2)
- [2.4.3 Focus Order](#sc-2-4-3)
- [2.4.4 Link Purpose (In Context)](#sc-2-4-4)
- [2.4.5 Multiple Ways](#sc-2-4-5)
- [2.4.6 Headings and Labels](#sc-2-4-6)
- [2.4.7 Focus Visible](#sc-2-4-7)
- [2.4.11 Focus Not Obscured (Minimum)](#sc-2-4-11)
- [2.5.1 Pointer Gestures](#sc-2-5-1)
- [2.5.2 Pointer Cancellation](#sc-2-5-2)
- [2.5.3 Label in Name](#sc-2-5-3)
- [2.5.4 Motion Actuation](#sc-2-5-4)
- [2.5.7 Dragging Movements](#sc-2-5-7)
- [2.5.8 Target Size (Minimum)](#sc-2-5-8)
- [3.1.1 Language of Page](#sc-3-1-1)
- [3.1.2 Language of Parts](#sc-3-1-2)
- [3.2.1 On Focus](#sc-3-2-1)
- [3.2.2 On Input](#sc-3-2-2)
- [3.2.3 Consistent Navigation](#sc-3-2-3)
- [3.2.4 Consistent Identification](#sc-3-2-4)
- [3.2.6 Consistent Help](#sc-3-2-6)
- [3.3.1 Error Identification](#sc-3-3-1)
- [3.3.2 Labels or Instructions](#sc-3-3-2)
- [3.3.3 Error Suggestion](#sc-3-3-3)
- [3.3.4 Error Prevention (Legal, Financial, Data)](#sc-3-3-4)
- [3.3.7 Redundant Entry](#sc-3-3-7)
- [3.3.8 Accessible Authentication (Minimum)](#sc-3-3-8)
- [4.1.2 Name, Role, Value](#sc-4-1-2)
- [4.1.3 Status Messages](#sc-4-1-3)

## Criterion entries

<a id="sc-1-1-1"></a>

### 1.1.1 Non-text Content (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Give meaningful graphics equivalent alternatives; make decoration ignorable; name controls and provide appropriate alternatives for complex images and CAPTCHA.

**Test:** Compare every image, chart, icon and non-text object with its exposed name/description and surrounding content; check purpose, decorative handling and criterion exceptions.

**Documents:** Use native alternative-text/decorative or PDF artifact mechanisms; give complex charts equivalent narrative or accessible data. An empty cell is not itself an accessibility failure.

**Baseline contributions:** web: 6.A-MeaningfulImage, 6.B-DecorativeImage, 6.C-Captcha, 7.C-AudibleCues, 10.A-FormName; documents: 6.A-MeaningfulImage, 6.B-DecorativeImage, 7.C-AudibleCues, 10.A-FormName. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#text-equiv-all) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#non-text-content) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

<a id="sc-1-2-1"></a>

### 1.2.1 Audio-only and Video-only (Prerecorded) (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Provide an equivalent transcript for prerecorded audio-only and an equivalent text or audio alternative for prerecorded video-only, subject to the text-alternative exception.

**Test:** Compare the entire recording with its alternative; include relevant sounds, speaker identity and visual information as appropriate.

**Documents:** Include linked and embedded recordings, not just visible document text.

**Baseline contributions:** web: 16.A-AudioOnlyTranscript, 16.B-VideoOnlyAlt, 16.C-AudioMediaAlternative, 16.D-VideoMediaAlternative; documents: 16.A-AudioOnlyTranscript, 16.B-VideoOnlyAlt, 16.C-AudioMediaAlternative, 16.D-VideoMediaAlternative. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-av-only-alt) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#audio-only-and-video-only-prerecorded) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html)

<a id="sc-1-2-2"></a>

### 1.2.2 Captions (Prerecorded) (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Provide accurate synchronized captions for prerecorded synchronized media, subject to the labeled text-alternative exception.

**Test:** Play the full media with captions; compare speech, meaningful sounds, timing and placement.

**Documents:** A slide transcript alone does not replace synchronized captions.

**Baseline contributions:** web: 17.D-CaptionsPrerecorded; documents: 17.D-CaptionsPrerecorded. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-captions) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#captions-prerecorded) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html)

<a id="sc-1-2-3"></a>

### 1.2.3 Audio Description or Media Alternative (Prerecorded) (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Provide audio description or an equivalent time-based media alternative for prerecorded synchronized media under the Level A rule.

**Test:** Check the Level A alternative and its exception; at AA also evaluate the stricter audio-description requirement of 1.2.5.

**Documents:** The Baselines use 1.2.5 for AA rather than a separate 1.2.3 outcome; retain this relationship in coverage records.

**Baseline contributions:** web: 17.G-SyncMediaAlternative; documents: 17.G-SyncMediaAlternative. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-audio-desc) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html)

<a id="sc-1-2-4"></a>

### 1.2.4 Captions (Live) (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Provide synchronized captions for live synchronized media.

**Test:** Observe the live broadcast and compare captions with speech and meaningful sounds; distinguish broadcasts from excluded two-way calls in the Baseline.

**Documents:** Record the live delivery environment; a static document without live media can have a justified non-applicability finding.

**Baseline contributions:** web: 17.F-CaptionsLive; documents: 17.F-CaptionsLive. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-real-time-captions) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#captions-live) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html)

<a id="sc-1-2-5"></a>

### 1.2.5 Audio Description (Prerecorded) (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Describe important prerecorded visual information not already conveyed in the soundtrack.

**Test:** Play the entire synchronized recording with description enabled; compare meaningful actions, changes, graphics and on-screen text.

**Documents:** Include exported narrated slide presentations and their delivered playback versions.

**Baseline contributions:** web: 17.E-ADPrerecorded; documents: 17.E-ADPrerecorded. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-audio-desc-only) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#audio-description-prerecorded) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html)

<a id="sc-1-3-1"></a>

### 1.3.1 Info and Relationships (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Represent headings, lists, labels, table relationships and other visually conveyed structure programmatically or in text.

**Test:** Compare visual relationships with the accessibility tree or native structure and assistive technology output; evaluate all meaningful structures.

**Documents:** Use styles, native lists, table headers, chart alternatives and PDF structure. Assess merged cells by actual header relationships and navigation, not a blanket prohibition.

**Baseline contributions:** web: 10.A-FormName, 12.A-DataTableRole, 12.B-DataTableHeaderAssociation, 13.B-VisHeadingProg, 13.C-ProgHeadingVisual, 13.D-List; documents: 10.A-FormName, 12.A-DataTableRole, 12.B-DataTableHeaderAssociation, 13.B-VisHeadingProg, 13.C-ProgHeadingVisual, 13.D-List, 18.A-MeaningfulContent. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-programmatic) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#info-and-relationships) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

<a id="sc-1-3-2"></a>

### 1.3.2 Meaningful Sequence (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Keep a meaningful reading sequence in both presentation and programmatic order.

**Test:** Read complex layouts in their exposed sequence; compare the meaning with the visual layout, including positioned or floating content.

**Documents:** Inspect Word object anchors, Excel navigation, PowerPoint object order and PDF tag order independently of visual coordinates.

**Baseline contributions:** web: 18.B-CSSPositionedContent; documents: 18.B-MeaningfulSequence. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-sequence) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#meaningful-sequence) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)

<a id="sc-1-3-3"></a>

### 1.3.3 Sensory Characteristics (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Write instructions that do not rely solely on position, shape, size, sound or orientation.

**Test:** Follow each instruction without relying on the cited sensory property and check for a text/name equivalent.

**Documents:** Identify worksheet cells, slides and controls with meaningful names or text as well as spatial cues.

**Baseline contributions:** web: 7.B-SensoryCharacteristics; documents: 7.B-SensoryCharacteristics. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-understanding) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#sensory-characteristics) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)

<a id="sc-1-3-4"></a>

### 1.3.4 Orientation (AA)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Support portrait and landscape unless one orientation is essential.

**Test:** Rotate or change the display orientation and check access and operation; substantiate the essential-orientation exception.

**Documents:** A printed page's portrait layout is not the same as locking device orientation; evaluate the delivered reader/content behavior using WCAG2ICT.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#orientation) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)

<a id="sc-1-3-5"></a>

### 1.3.5 Identify Input Purpose (AA)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Expose the defined input purpose for fields collecting information about the user when the technology supports it.

**Test:** Inspect applicable user-data fields against the criterion's input-purpose taxonomy and supported programmatic mechanism.

**Documents:** Evaluate supported native/PDF form properties; document an unsupported mechanism and human interpretation rather than pretending HTML autocomplete exists.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#identify-input-purpose) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)

<a id="sc-1-4-1"></a>

### 1.4.1 Use of Color (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Communicate status and distinctions with more than color alone.

**Test:** Compare color-coded meaning with text, patterns, symbols or programmatic cues; check links and charts in context.

**Documents:** Use labels and patterns for conditional formatting and charts; do not remove meaningful color when adding another cue.

**Baseline contributions:** web: 7.A-Color; documents: 7.A-Color. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-without-color) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#use-of-color) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)

<a id="sc-1-4-2"></a>

### 1.4.2 Audio Control (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Provide control of automatically playing audio that lasts more than three seconds.

**Test:** Trigger automatic playback; verify an appropriate stop/pause or independent volume control and its keyboard operation.

**Documents:** Check embedded media and presentation startup states; ordinary system volume alone is insufficient for the independent-volume option.

**Baseline contributions:** web: 3.A-NonInterference, 21.D-AudioControl; documents: 3.A-NonInterference, 21.D-AudioControl. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-dis-audio) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#audio-control) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)

<a id="sc-1-4-3"></a>

### 1.4.3 Contrast (Minimum) (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Choose text/background combinations meeting 4.5:1, or 3:1 for qualifying large text, with the criterion's exceptions.

**Test:** Measure actual foreground/background combinations, including states, images of text and gradients; apply large-text and exception definitions.

**Documents:** Check text inside charts, tables, slide masters and exported PDFs, not only body text.

**Baseline contributions:** web: 8.A-ContrastMinimum; documents: 8.A-ContrastMinimum. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#contrast-minimum) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

<a id="sc-1-4-4"></a>

### 1.4.4 Resize Text (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Allow text to enlarge to 200 percent without losing content or functionality, subject to criterion exceptions.

**Test:** Enlarge text in the delivered environment; inspect clipping, overlap, controls and hidden information.

**Documents:** Use a format-appropriate text-resize method. A page magnifier alone is not proof of text-resize support; record reader limitations.

**Baseline contributions:** web: 22.A-ResizeText; documents: 22.A-ResizeText. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#resize-text) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

<a id="sc-1-4-5"></a>

### 1.4.5 Images of Text (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Use real text rather than images of text when the technology can achieve the presentation, subject to customizable/essential exceptions.

**Test:** Identify text rendered as images; check whether real text can achieve the result and whether a stated exception actually applies.

**Documents:** OCR can restore text availability but does not automatically repair relationships, reading order or image-of-text issues.

**Baseline contributions:** web: 6.D-ImageText; documents: 6.D-ImageText. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-text-presentation) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#images-of-text) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html)

<a id="sc-1-4-10"></a>

### 1.4.10 Reflow (AA)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Support reflow without two-dimensional scrolling at the criterion's 320 CSS-pixel width or 256 CSS-pixel height equivalent, with the stated two-dimensional-layout exception.

**Test:** Test the applicable narrow/zoomed view; check that information and functionality remain, and limit any exception to content requiring two-dimensional layout.

**Documents:** Test the actual document reader's reflow and content. A table or sheet may qualify for a two-dimensional exception; that does not exempt unrelated text or the entire document.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#reflow) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

<a id="sc-1-4-11"></a>

### 1.4.11 Non-text Contrast (AA)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Provide 3:1 contrast for required visual control/state and meaningful graphic information against adjacent colors, with criterion exceptions.

**Test:** Measure boundaries, state indicators and meaningful graphical parts; distinguish essential information from decorative detail and unmodified user-agent styling.

**Documents:** Check chart distinctions, author-provided form borders and focus indicators; assess reader-owned controls separately.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#non-text-contrast) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

<a id="sc-1-4-12"></a>

### 1.4.12 Text Spacing (AA)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Avoid loss when users set line height to 1.5 times font size, paragraph spacing to 2 times, letter spacing to .12 times and word spacing to .16 times.

**Test:** Apply the specified spacing settings where applicable; inspect clipping, overlap and loss of functionality while preserving other styles.

**Documents:** Interpret with WCAG2ICT for the format; document technology/reader support and applicable language exceptions instead of inventing HTML styling controls.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#text-spacing) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)

<a id="sc-1-4-13"></a>

### 1.4.13 Content on Hover or Focus (AA)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Make qualifying author-controlled hover/focus content dismissible, hoverable and persistent, with the criterion's exceptions.

**Test:** Reveal the content by pointer and keyboard; try dismissing it, moving into it and keeping it open until the trigger ends or it is dismissed.

**Documents:** Evaluate author-created popups and tooltips; distinguish reader-controlled presentation and its responsible software.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#content-on-hover-or-focus) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)

<a id="sc-2-1-1"></a>

### 2.1.1 Keyboard (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Provide keyboard access to all functionality without timing individual keystrokes, subject to the path-dependent-input exception.

**Test:** Exercise every function with keyboard alone, including hidden/expanded controls and equivalent controls; check keystroke timing.

**Documents:** Use the intended reading/presentation mode and test content interactions separately from the authoring application's ribbon.

**Baseline contributions:** web: 1.A-KeyboardAccess; documents: 1.A-KeyboardAccess. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#keyboard-operation-keyboard-operable) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#keyboard) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)

<a id="sc-2-1-2"></a>

### 2.1.2 No Keyboard Trap (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Allow keyboard focus to leave every component, with instructions for any nonstandard exit keys.

**Test:** Navigate into and out of every interactive region in both directions; verify any documented exit mechanism.

**Documents:** Include PDF forms, embedded objects and slide media; absence of controls may justify non-applicability only after inspection.

**Baseline contributions:** web: 1.B-NoKeyboardTrap, 3.A-NonInterference; documents: 1.B-NoKeyboardTrap, 3.A-NonInterference. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#keyboard-operation-trapping) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#no-keyboard-trap) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)

<a id="sc-2-1-4"></a>

### 2.1.4 Character Key Shortcuts (A)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Allow single-character shortcuts to be disabled or remapped, or limit them to focused components as specified.

**Test:** Exercise character shortcuts with and without component focus; verify an allowed mitigation.

**Documents:** Check author-created macros or content interactions, not unrelated reader/global shortcuts.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#character-key-shortcuts) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html)

<a id="sc-2-2-1"></a>

### 2.2.1 Timing Adjustable (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Allow users to turn off, adjust or extend content time limits under one of the criterion's permitted options or exceptions.

**Test:** Find time limits and exercise the selected option; for extension verify the warning interval and allowed repetitions against the normative criterion.

**Documents:** Include timed slides, forms and linked completion processes; check real-time/essential exceptions explicitly.

**Baseline contributions:** web: 21.A-TimingAdjustable; documents: 21.A-TimingAdjustable. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#time-limits-required-behaviors) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#timing-adjustable) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)

<a id="sc-2-2-2"></a>

### 2.2.2 Pause, Stop, Hide (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Provide required pause/stop/hide or update-frequency controls for qualifying moving, blinking, scrolling and auto-updating content.

**Test:** Observe startup and updates; check movement lasting more than five seconds alongside other content and the separate auto-update rule.

**Documents:** Check slide transitions, animations, media and changing data; do not apply the five-second threshold to all auto-updating information.

**Baseline contributions:** web: 3.A-NonInterference, 21.B-MovingInfo, 21.C-AutoUpdate; documents: 3.A-NonInterference, 21.B-MovingInfo, 21.C-AutoUpdate. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#time-limits-pause) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#pause-stop-hide) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)

<a id="sc-2-3-1"></a>

### 2.3.1 Three Flashes or Below Threshold (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Avoid flashes above the permitted rate or satisfy the general/red flash thresholds.

**Test:** Identify flashing regions and use an appropriate analyzer or qualified review when necessary; do not expose a tester to unsafe flashing.

**Documents:** Review animations and media in the delivered file; a thumbnail or source inspection cannot establish flash thresholds.

**Baseline contributions:** web: 3.A-NonInterference, 9.A-Flashes; documents: 3.A-NonInterference, 9.A-Flashes. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#seizure-does-not-violate) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)

<a id="sc-2-4-1"></a>

### 2.4.1 Bypass Blocks (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Provide a way to bypass repeated blocks in web content.

**Test:** Use the bypass mechanism and verify that it reaches the relevant content; check keyboard and programmatic behavior.

**Documents:** E205.4 exempts non-web documents from this criterion; optional document navigation aids remain good practice without becoming a Section 508 obligation.

**Baseline contributions:** web: 4.A-BypassBlocks; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-skip) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#bypass-blocks) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)

<a id="sc-2-4-2"></a>

### 2.4.2 Page Titled (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Give each page/document a title identifying topic or purpose.

**Test:** Inspect the exposed title and compare it with the content and purpose.

**Documents:** Set document title metadata and appropriate reader display settings; do not substitute an unexplained filename for the actual document title.

**Baseline contributions:** web: 11.A-PageTitled; documents: 11.A-DocumentTitled. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-title) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#page-titled) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)

<a id="sc-2-4-3"></a>

### 2.4.3 Focus Order (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Keep focus order meaningful and operable where sequence matters.

**Test:** Traverse focus forward and backward through all states; compare order with task meaning and operation.

**Documents:** Check form tab order, reading/presentation mode and PDF annotation order; visual order and tag order do not automatically establish focus order.

**Baseline contributions:** web: 2.B-FocusOrder; documents: 2.B-FocusOrder. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-focus-order) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#focus-order) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)

<a id="sc-2-4-4"></a>

### 2.4.4 Link Purpose (In Context) (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Make link purpose determinable from its text and permitted programmatic context.

**Test:** Inspect links and their context as exposed to assistive technology; check image links and repeated ambiguous text.

**Documents:** Use meaningful links in Word, sheets, slides and PDF annotations; include valid destinations in generated files.

**Baseline contributions:** web: 14.A-LinkPurpose; documents: 14.A-LinkPurpose. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-refs) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#link-purpose-in-context) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)

<a id="sc-2-4-5"></a>

### 2.4.5 Multiple Ways (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Offer more than one way to locate a web page within a set, except process-result/step pages.

**Test:** Identify the set and verify at least two usable location methods or the stated exception.

**Documents:** E205.4 exempts non-web documents; a useful table of contents or bookmarks does not become this mandatory test.

**Baseline contributions:** web: 23.A-MultipleWays; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-mult-loc) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#multiple-ways) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html)

<a id="sc-2-4-6"></a>

### 2.4.6 Headings and Labels (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Use headings and labels that describe topic or purpose.

**Test:** Compare each heading/label with the content or control it introduces; assess wording separately from structural markup.

**Documents:** Use clear worksheet/table names and field labels; headings/labels guidance does not require adding headings where none are needed.

**Baseline contributions:** web: 10.B-FormDescriptiveLabel, 13.A-HeadingDescriptive; documents: 10.B-FormDescriptiveLabel, 13.A-HeadingDescriptive. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-descriptive) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#headings-and-labels) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)

<a id="sc-2-4-7"></a>

### 2.4.7 Focus Visible (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Keep a perceivable keyboard focus indicator visible throughout focus.

**Test:** Navigate every relevant component, pause to detect timed changes, and inspect indicator visibility in each state.

**Documents:** Test content controls in the reader/presentation environment; a caret or other clear indicator may satisfy the requirement without an outline.

**Baseline contributions:** web: 2.A-FocusVisible; documents: 2.A-FocusVisible. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-focus-visible) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#focus-visible) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)

<a id="sc-2-4-11"></a>

### 2.4.11 Focus Not Obscured (Minimum) (AA)

**Authority:** introduced in WCAG 2.2; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Keep a focused component from being entirely hidden by author-created content, applying the normative notes.

**Test:** Navigate beneath sticky regions, overlays and scrolling containers; observe the component when focus arrives and apply user-opened/movable-content notes.

**Documents:** Check author-created layers and presentation overlays in the actual reader; do not label normal partial coverage a failure of this minimum criterion.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)

<a id="sc-2-5-1"></a>

### 2.5.1 Pointer Gestures (A)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Provide a single-pointer alternative to multipoint/path-based gestures unless essential.

**Test:** Exercise each gesture and verify an equivalent simple-pointer action or the essential exception.

**Documents:** For static documents without authored gesture interactions record justified non-applicability; assess reader-owned gestures separately.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#pointer-gestures) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html)

<a id="sc-2-5-2"></a>

### 2.5.2 Pointer Cancellation (A)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Avoid irreversible activation on pointer down, using a permitted completion, abort, undo or essential option.

**Test:** Test down/up actions, moving away before release and cancellation/undo for each authored pointer action.

**Documents:** Evaluate interactive document controls; do not infer cancellation from the appearance of a button.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#pointer-cancellation) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html)

<a id="sc-2-5-3"></a>

### 2.5.3 Label in Name (A)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Include the visible text label in the accessible name, preferably at its start.

**Test:** Compare visible labels with computed/exposed names, including speech-input use where appropriate.

**Documents:** Check form-field names, PDF tooltips and clickable shapes; maintain visible wording in the programmatic name.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#label-in-name) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)

<a id="sc-2-5-4"></a>

### 2.5.4 Motion Actuation (A)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Provide interface alternatives to device/user motion and allow motion response to be disabled, except supported/essential cases.

**Test:** Trigger motion-actuated functions and exercise a conventional interface alternative and disable option.

**Documents:** Determine whether the document authors any motion behavior; do not assign reader features to the document without justification.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#motion-actuation) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html)

<a id="sc-2-5-7"></a>

### 2.5.7 Dragging Movements (AA)

**Authority:** introduced in WCAG 2.2; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Provide a single-pointer alternative to dragging unless dragging is essential or unmodified user-agent behavior.

**Test:** Perform each drag task using the non-drag alternative and compare the result.

**Documents:** Check author-created drag exercises; a static document without dragging has a different applicability finding from its editor's drag tools.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#dragging-movements) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)

<a id="sc-2-5-8"></a>

### 2.5.8 Target Size (Minimum) (AA)

**Authority:** introduced in WCAG 2.2; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Make pointer targets at least 24 by 24 CSS pixels or meet a specific spacing or other exception.

**Test:** Measure targets in the rendered environment; for undersized targets assess the 24 CSS-pixel spacing-circle test or the applicable exception.

**Documents:** Use a defensible reader/unit conversion for content targets; do not apply CSS pixels directly to point values without accounting for rendering.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#target-size-minimum) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

<a id="sc-3-1-1"></a>

### 3.1.1 Language of Page (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Declare the primary human language.

**Test:** Compare the programmatic language with the content's primary language and assistive technology behavior.

**Documents:** Set native language properties and PDF document language; test the delivered file, not just its template.

**Baseline contributions:** web: 15.A-LanguagePage; documents: 15.A-LanguageDocument. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#meaning-doc-lang-id) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#language-of-page) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)

<a id="sc-3-1-2"></a>

### 3.1.2 Language of Parts (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Declare language changes where required, applying proper-name/technical-term and other exceptions.

**Test:** Inspect passages/phrases in another language and their programmatic language properties.

**Documents:** Check run/paragraph/shape/tag language support in each format; record unsupported mechanisms and actual exposure.

**Baseline contributions:** web: 15.B-LanguagePart; documents: 15.B-LanguageParts. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#meaning-other-lang-id) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#language-of-parts) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html)

<a id="sc-3-2-1"></a>

### 3.2.1 On Focus (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Avoid an unexpected change of context merely when a component receives focus.

**Test:** Move focus onto every applicable control and observe navigation, dialogs and other context changes.

**Documents:** Check focus-driven actions in document forms and interactive presentations; do not confuse a content update with every change of context.

**Baseline contributions:** web: 2.C-OnFocus; documents: 2.C-OnFocus. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-receive-focus) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#on-focus) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html)

<a id="sc-3-2-2"></a>

### 3.2.2 On Input (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Do not change context on input without prior advice.

**Test:** Change each setting and inspect the resulting behavior and instructions given before input.

**Documents:** Check form fields and interactive document controls; ordinary data updates are not automatically context changes.

**Baseline contributions:** web: 10.C-OnInput; documents: 10.C-OnInput. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-unpredictable-change) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#on-input) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)

<a id="sc-3-2-3"></a>

### 3.2.3 Consistent Navigation (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Keep repeated navigation in the same relative order unless the user initiates a change.

**Test:** Compare repeated navigation across the relevant set of web pages.

**Documents:** E205.4 exempts non-web documents; optional consistency across a document set is supplemental practice.

**Baseline contributions:** web: 4.B-ConsistentNavigation; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-consistent-locations) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#consistent-navigation) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html)

<a id="sc-3-2-4"></a>

### 3.2.4 Consistent Identification (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Identify components with the same function consistently across a set of pages.

**Test:** Compare names/icons/labels for repeated functions across the relevant set.

**Documents:** E205.4 exempts non-web documents; optional naming consistency remains useful authoring practice.

**Baseline contributions:** web: 4.C-ConsistentIdentification; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-consistent-functionality) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#consistent-identification) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html)

<a id="sc-3-2-6"></a>

### 3.2.6 Consistent Help (A)

**Authority:** introduced in WCAG 2.2; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Keep repeated specified help mechanisms in a consistent relative order unless the user initiates a change.

**Test:** Identify the criterion's help mechanisms and compare their placement across the set; do not interpret this as a requirement to add help.

**Documents:** Use WCAG2ICT interpretation for a set of documents and identify any applicability limits; the Baselines do not map this newer criterion.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#consistent-help) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html)

<a id="sc-3-3-1"></a>

### 3.3.1 Error Identification (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Identify detected input errors and describe them in text.

**Test:** Submit or otherwise trigger invalid input safely and compare each detected error with its text identification and associated field.

**Documents:** Use synthetic data for interactive forms; static reports without user input may not present an applicable error-detection function.

**Baseline contributions:** web: 10.D-ErrorIdentification; documents: 10.D-ErrorIdentification. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-identified) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#error-identification) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)

<a id="sc-3-3-2"></a>

### 3.3.2 Labels or Instructions (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Provide labels and instructions when content requires input.

**Test:** Inspect each required input, format constraint and mandatory field for understandable labels/instructions.

**Documents:** Check native/PDF forms and spreadsheet templates used for input; a tooltip alone may not provide a visible label.

**Baseline contributions:** web: 10.E-FormHasLabel; documents: 10.E-FormHasLabel. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-cues) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#labels-or-instructions) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)

<a id="sc-3-3-3"></a>

### 3.3.3 Error Suggestion (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Suggest corrections for detected errors when known, unless security or purpose would be jeopardized.

**Test:** Trigger representative errors and assess whether actionable correction advice is supplied or a valid exception applies.

**Documents:** Check author-controlled form validation and calculations; do not test only the reader's generic error messages.

**Baseline contributions:** web: 10.F-ErrorSuggestion; documents: 10.F-ErrorSuggestion. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-suggestions) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#error-suggestion) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html)

<a id="sc-3-3-4"></a>

### 3.3.4 Error Prevention (Legal, Financial, Data) (AA)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Make covered legal/financial, stored-data or test-response submissions reversible, checked or confirmable as required.

**Test:** Exercise an appropriate review/correction, checking or reversal path without real transactions or destructive changes.

**Documents:** Identify content-driven submission workflows and document the covered trigger; ordinary contact forms are not automatically covered.

**Baseline contributions:** web: 10.G-ErrorPrevention; documents: 10.G-ErrorPrevention. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-reversible) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html)

<a id="sc-3-3-7"></a>

### 3.3.7 Redundant Entry (A)

**Authority:** introduced in WCAG 2.2; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Avoid making users re-enter information in the same process; allow reuse or selection subject to the exceptions.

**Test:** Complete the process with synthetic data and check repeated requested information, including expired/security/essential cases.

**Documents:** Evaluate the whole author-controlled multi-document/form process, not only one file in isolation.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#redundant-entry) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html)

<a id="sc-3-3-8"></a>

### 3.3.8 Accessible Authentication (Minimum) (AA)

**Authority:** introduced in WCAG 2.2; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Avoid cognitive-function tests for authentication unless an allowed alternative, mechanism, object-recognition or personal-content exception applies.

**Test:** Exercise authentication with password-manager support and paste, and assess any cognitive task against the exact allowed exceptions.

**Documents:** Distinguish document-authored authentication from the separate reader/service; do not claim accessible authentication from a document password label alone.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html)

<a id="sc-4-1-2"></a>

### 4.1.2 Name, Role, Value (A)

**Authority:** introduced in WCAG 2.0; incorporated WCAG 2.0 content requirement, subject to Section 508 scope and exceptions.

**Develop:** Expose interface name, role and current states/values; convey changes through accessibility-supported mechanisms.

**Test:** Inspect each control through accessibility APIs/native structure and exercise state/value updates with applicable assistive technology.

**Documents:** Check PDF/native form properties and interactive shapes; do not require HTML ARIA in a file format with different native semantics.

**Baseline contributions:** web: 5.A-ControlName, 5.B-ControlRole, 5.C-ControlState, 5.D-ControlValue, 6.A-MeaningfulImage, 10.A-FormName, 12.A-DataTableRole, 12.C-LayoutTable, 14.A-LinkPurpose, 19.A-FrameTitle, 19.B-iFrameName; documents: 5.A-ControlName, 5.B-ControlRole, 5.C-ControlState, 5.D-ControlValue, 10.A-FormName, 12.A-DataTableRole, 12.C-LayoutTable, 14.A-LinkPurpose. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[Incorporated WCAG 2.0 criterion](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-rsv) · [WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#name-role-value) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

<a id="sc-4-1-3"></a>

### 4.1.3 Status Messages (AA)

**Authority:** introduced in WCAG 2.1; supplemental; neither cited Baseline maps this newer success criterion.

**Develop:** Expose qualifying status messages without moving focus, using an appropriate role/property mechanism.

**Test:** Trigger success, progress, errors and other qualifying status updates; observe programmatic exposure and assistive technology announcements without forced focus.

**Documents:** Apply supported native accessibility events for author-created updates; ordinary static text and viewer-owned notices need separate applicability decisions.

**Baseline contributions:** web: not covered; documents: not covered / non-web exception where stated. A listed procedure contributes targeted evidence, not automatic full-criterion coverage.

[WCAG 2.2 development criterion](https://www.w3.org/TR/WCAG22/#status-messages) · [Informative explanation](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)

## Omitted active test

4.1.1 Parsing is not an active check. Preserve both Baselines' 24.A no-test-required disposition and assess real defects under affected criteria. See the bundled scope reference.
