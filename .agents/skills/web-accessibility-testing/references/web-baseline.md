# Web Baseline 3.1 reference

Local Web Baseline procedure inventory. The original generator and source-case suite are not bundled here. For each applicable entry, read the official Identify Content, complete Test Instructions, Results, definitions and exceptions. The local checklist is a task aid. Use the bundled scope and criterion references for web delivery. The official procedures are linked, not bundled in full; if they cannot be retrieved, record that limitation rather than claiming their complete execution.

## Contents

- [1.A-KeyboardAccess](#1-a-keyboardaccess)
- [1.B-NoKeyboardTrap](#1-b-nokeyboardtrap)
- [2.A-FocusVisible](#2-a-focusvisible)
- [2.B-FocusOrder](#2-b-focusorder)
- [2.C-OnFocus](#2-c-onfocus)
- [3.A-NonInterference](#3-a-noninterference)
- [4.A-BypassBlocks](#4-a-bypassblocks)
- [4.B-ConsistentNavigation](#4-b-consistentnavigation)
- [4.C-ConsistentIdentification](#4-c-consistentidentification)
- [5.A-ControlName](#5-a-controlname)
- [5.B-ControlRole](#5-b-controlrole)
- [5.C-ControlState](#5-c-controlstate)
- [5.D-ControlValue](#5-d-controlvalue)
- [6.A-MeaningfulImage](#6-a-meaningfulimage)
- [6.B-DecorativeImage](#6-b-decorativeimage)
- [6.C-Captcha](#6-c-captcha)
- [6.D-ImageText](#6-d-imagetext)
- [7.A-Color](#7-a-color)
- [7.B-SensoryCharacteristics](#7-b-sensorycharacteristics)
- [7.C-AudibleCues](#7-c-audiblecues)
- [8.A-ContrastMinimum](#8-a-contrastminimum)
- [9.A-Flashes](#9-a-flashes)
- [10.A-FormName](#10-a-formname)
- [10.B-FormDescriptiveLabel](#10-b-formdescriptivelabel)
- [10.C-OnInput](#10-c-oninput)
- [10.D-ErrorIdentification](#10-d-erroridentification)
- [10.E-FormHasLabel](#10-e-formhaslabel)
- [10.F-ErrorSuggestion](#10-f-errorsuggestion)
- [10.G-ErrorPrevention](#10-g-errorprevention)
- [11.A-PageTitled](#11-a-pagetitled)
- [12.A-DataTableRole](#12-a-datatablerole)
- [12.B-DataTableHeaderAssociation](#12-b-datatableheaderassociation)
- [12.C-LayoutTable](#12-c-layouttable)
- [13.A-HeadingDescriptive](#13-a-headingdescriptive)
- [13.B-VisHeadingProg](#13-b-visheadingprog)
- [13.C-ProgHeadingVisual](#13-c-progheadingvisual)
- [13.D-List](#13-d-list)
- [14.A-LinkPurpose](#14-a-linkpurpose)
- [15.A-LanguagePage](#15-a-languagepage)
- [15.B-LanguagePart](#15-b-languagepart)
- [16.A-AudioOnlyTranscript](#16-a-audioonlytranscript)
- [16.B-VideoOnlyAlt](#16-b-videoonlyalt)
- [16.C-AudioMediaAlternative](#16-c-audiomediaalternative)
- [16.D-VideoMediaAlternative](#16-d-videomediaalternative)
- [17.A-MediaPlayerCCADControls](#17-a-mediaplayerccadcontrols)
- [17.B-MediaPlayerCCLevel](#17-b-mediaplayercclevel)
- [17.C-MediaPlayerADLevel](#17-c-mediaplayeradlevel)
- [17.D-CaptionsPrerecorded](#17-d-captionsprerecorded)
- [17.E-ADPrerecorded](#17-e-adprerecorded)
- [17.F-CaptionsLive](#17-f-captionslive)
- [17.G-SyncMediaAlternative](#17-g-syncmediaalternative)
- [18.B-CSSPositionedContent](#18-b-csspositionedcontent)
- [19.A-FrameTitle](#19-a-frametitle)
- [19.B-iFrameName](#19-b-iframename)
- [20.A-ConformingAltVersion](#20-a-conformingaltversion)
- [21.A-TimingAdjustable](#21-a-timingadjustable)
- [21.B-MovingInfo](#21-b-movinginfo)
- [21.C-AutoUpdate](#21-c-autoupdate)
- [21.D-AudioControl](#21-d-audiocontrol)
- [22.A-ResizeText](#22-a-resizetext)
- [23.A-MultipleWays](#23-a-multipleways)
- [24.A-Parsing](#24-a-parsing)

## Retained categories and moved slots

- Web 18.A moved to 6.B; use the current source and do not invent an active 18.A procedure.
- No document exceptions apply merely because web content is delivered as a file. Establish the actual content context.

## Procedure entries

<a id="1-a-keyboardaccess"></a>

### 1.A-KeyboardAccess

**Disposition:** active. **Requirements addressed:** 2.1.1.

**Local checklist:** Inventory every mouse-accessible function, including hidden states; execute it with keyboard alone and assess timing constraints.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/01Keyboard/#1a-test-procedure-for-keyboard-access)

<a id="1-b-nokeyboardtrap"></a>

### 1.B-NoKeyboardTrap

**Disposition:** active. **Requirements addressed:** 2.1.2.

**Local checklist:** Enter and leave each focusable region; exercise standard and documented alternative exit keys.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/01Keyboard/#1b-test-procedure-for-no-keyboard-trap)

<a id="2-a-focusvisible"></a>

### 2.A-FocusVisible

**Disposition:** active. **Requirements addressed:** 2.4.7.

**Local checklist:** Observe focus at every applicable stop, including delayed changes; determine whether the indication remains visible.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/02FocusVisible/#2a-test-procedure-for-focus-visible)

<a id="2-b-focusorder"></a>

### 2.B-FocusOrder

**Disposition:** active. **Requirements addressed:** 2.4.3.

**Local checklist:** Traverse focus in both directions and compare sequence with the task meaning and operation.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/02FocusVisible/#2b-test-procedure-for-focus-order)

<a id="2-c-onfocus"></a>

### 2.C-OnFocus

**Disposition:** active. **Requirements addressed:** 3.2.1.

**Local checklist:** Move focus onto controls without activating them and observe any unexpected context change.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/02FocusVisible/#2c-test-procedure-for-on-focus)

<a id="3-a-noninterference"></a>

### 3.A-NonInterference

**Disposition:** active. **Requirements addressed:** 1.4.2, 2.1.2, 2.2.2, 2.3.1, CR5.

**Local checklist:** Evaluate non-interference across all content, including inaccessible alternatives: audio, traps, flashing and movement/updates.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/03Noninterference/#3a-test-procedure-for-non-interference)

<a id="4-a-bypassblocks"></a>

### 4.A-BypassBlocks

**Disposition:** active. **Requirements addressed:** 2.4.1.

**Local checklist:** Exercise the mechanism that bypasses repeated blocks; verify its destination and usable keyboard behavior.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/04RepetitiveContent/#4a-test-procedure-for-bypass-blocks)

<a id="4-b-consistentnavigation"></a>

### 4.B-ConsistentNavigation

**Disposition:** active. **Requirements addressed:** 3.2.3.

**Local checklist:** Compare repeated navigation order across the identified page set, applying the user-initiated-change exception.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/04RepetitiveContent/#4b-test-procedure-for-consistent-navigation)

<a id="4-c-consistentidentification"></a>

### 4.C-ConsistentIdentification

**Disposition:** active. **Requirements addressed:** 3.2.4.

**Local checklist:** Compare identification of controls with the same function throughout the relevant page set.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/04RepetitiveContent/#4c-test-procedure-for-consistent-identification)

<a id="5-a-controlname"></a>

### 5.A-ControlName

**Disposition:** active. **Requirements addressed:** 4.1.2.

**Local checklist:** Inspect exposed control names and compare each with its purpose and visible context.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/05Controls/#5a-test-procedure-for-control-name)

<a id="5-b-controlrole"></a>

### 5.B-ControlRole

**Disposition:** active. **Requirements addressed:** 4.1.2.

**Local checklist:** Inspect exposed control roles and compare each with actual behavior.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/05Controls/#5b-test-procedure-for-control-role)

<a id="5-c-controlstate"></a>

### 5.C-ControlState

**Disposition:** active. **Requirements addressed:** 4.1.2.

**Local checklist:** Exercise controls and verify that exposed states reflect the current state and its changes.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/05Controls/#5c-test-procedure-for-control-state)

<a id="5-d-controlvalue"></a>

### 5.D-ControlValue

**Disposition:** active. **Requirements addressed:** 4.1.2.

**Local checklist:** Set/change applicable control values and verify programmatic values and change notifications.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/05Controls/#5d-test-procedure-for-control-value)

<a id="6-a-meaningfulimage"></a>

### 6.A-MeaningfulImage

**Disposition:** active. **Requirements addressed:** 1.1.1, 4.1.2.

**Local checklist:** Compare non-empty image alternatives with image purpose; check whether supposedly meaningful images should instead be ignored.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/06Images/#6a-test-procedure-for-images-with-a-non-empty-text-alternative)

<a id="6-b-decorativeimage"></a>

### 6.B-DecorativeImage

**Disposition:** active. **Requirements addressed:** 1.1.1.

**Local checklist:** Inspect empty/decorative handling, including backgrounds; verify it hides no meaningful, functional or focusable image information.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/06Images/#6b-test-procedure-for-images-with-an-empty-text-alternative)

<a id="6-c-captcha"></a>

### 6.C-Captcha

**Disposition:** active. **Requirements addressed:** 1.1.1.

**Local checklist:** Identify CAPTCHA purpose and verify alternatives accommodating different sensory modes using the official procedure.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/06Images/#6c-test-procedure-for-captchas)

<a id="6-d-imagetext"></a>

### 6.D-ImageText

**Disposition:** active. **Requirements addressed:** 1.4.5.

**Local checklist:** Identify images of text and test real-text feasibility or the applicable customization/essential exception.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/06Images/#6d-test-procedure-for-images-of-text)

<a id="7-a-color"></a>

### 7.A-Color

**Disposition:** active. **Requirements addressed:** 1.4.1.

**Local checklist:** Identify color-coded information and verify an equivalent cue independent of color.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/07Sensory/#7a-test-procedure-for-use-of-color)

<a id="7-b-sensorycharacteristics"></a>

### 7.B-SensoryCharacteristics

**Disposition:** active. **Requirements addressed:** 1.3.3.

**Local checklist:** Follow sensory instructions without relying solely on shape, position, size, orientation or sound.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/07Sensory/#7b-test-procedure-for-sensory-characteristics)

<a id="7-c-audiblecues"></a>

### 7.C-AudibleCues

**Disposition:** active. **Requirements addressed:** 1.1.1.

**Local checklist:** Compare audible-only notifications with equivalent visible or programmatically available information.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/07Sensory/#7c-test-procedure-for-audible-cues)

<a id="8-a-contrastminimum"></a>

### 8.A-ContrastMinimum

**Disposition:** active. **Requirements addressed:** 1.4.3.

**Local checklist:** Measure actual text/background contrast in all relevant states; apply large-text and normative exception rules.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/08Contrast/#8a-test-procedure-for-contrast-minimum)

<a id="9-a-flashes"></a>

### 9.A-Flashes

**Disposition:** active. **Requirements addressed:** 2.3.1.

**Local checklist:** Identify flashing content; obtain appropriate threshold analysis without exposing a tester to unsafe flashes.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/09Flashing/#9a-test-procedure-for-three-flashes-or-below-threshold)

<a id="10-a-formname"></a>

### 10.A-FormName

**Disposition:** active. **Requirements addressed:** 1.1.1, 1.3.1, 4.1.2.

**Local checklist:** Inspect the exposed names of form controls and their relationship to visible labels and purpose.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/10Forms/#10a-test-procedure-for-form-names)

<a id="10-b-formdescriptivelabel"></a>

### 10.B-FormDescriptiveLabel

**Disposition:** active. **Requirements addressed:** 2.4.6.

**Local checklist:** Compare form label wording with each field purpose; assess descriptive quality separately from name exposure.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/10Forms/#10b-test-procedure-for-form-labels-descriptive)

<a id="10-c-oninput"></a>

### 10.C-OnInput

**Disposition:** active. **Requirements addressed:** 3.2.2.

**Local checklist:** Change inputs and observe context changes, checking instructions supplied before input.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/10Forms/#10c-test-procedure-for-on-input)

<a id="10-d-erroridentification"></a>

### 10.D-ErrorIdentification

**Disposition:** active. **Requirements addressed:** 3.3.1.

**Local checklist:** Trigger detected input errors with safe synthetic data and verify text identifies each error.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/10Forms/#10d-test-procedure-for-error-identification)

<a id="10-e-formhaslabel"></a>

### 10.E-FormHasLabel

**Disposition:** active. **Requirements addressed:** 3.3.2.

**Local checklist:** Check visible field labels and instructions, including required input and expected formats.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/10Forms/#10e-test-procedure-for-form-has-a-visible-label)

<a id="10-f-errorsuggestion"></a>

### 10.F-ErrorSuggestion

**Disposition:** active. **Requirements addressed:** 3.3.3.

**Local checklist:** Trigger known errors and evaluate correction suggestions, applying security/purpose exceptions.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/10Forms/#10f-test-procedure-for-error-suggestion)

<a id="10-g-errorprevention"></a>

### 10.G-ErrorPrevention

**Disposition:** active. **Requirements addressed:** 3.3.4.

**Local checklist:** Identify covered legal/financial/data/test-response transactions; exercise a permitted review, checking or reversal safeguard.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/10Forms/#10g-test-procedure-for-error-prevention-legal-financial-data)

<a id="11-a-pagetitled"></a>

### 11.A-PageTitled

**Disposition:** active. **Requirements addressed:** 2.4.2.

**Local checklist:** Inspect the programmatic title and compare it with the page or document topic and purpose.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/11PageTitles/#11a-test-procedure-for-page-titled)

<a id="12-a-datatablerole"></a>

### 12.A-DataTableRole

**Disposition:** active. **Requirements addressed:** 1.3.1, 4.1.2.

**Local checklist:** Inspect table roles/structures and distinguish actual data tables from layout constructs.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/12DataTables/#12a-test-procedure-for-data-table-roles)

<a id="12-b-datatableheaderassociation"></a>

### 12.B-DataTableHeaderAssociation

**Disposition:** active. **Requirements addressed:** 1.3.1.

**Local checklist:** Follow exposed header associations for every relevant data cell, including multi-level headers.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/12DataTables/#12b-test-procedure-for-data-table-header-association)

<a id="12-c-layouttable"></a>

### 12.C-LayoutTable

**Disposition:** active. **Requirements addressed:** 4.1.2.

**Local checklist:** Check layout constructs do not expose misleading data-table structure or disrupt meaningful reading.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/12DataTables/#12c-test-procedure-for-layout-tables)

<a id="13-a-headingdescriptive"></a>

### 13.A-HeadingDescriptive

**Disposition:** active. **Requirements addressed:** 2.4.6.

**Local checklist:** Compare heading wording with the section it introduces.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/13Structure/#13a-test-procedure-for-descriptive-headings)

<a id="13-b-visheadingprog"></a>

### 13.B-VisHeadingProg

**Disposition:** active. **Requirements addressed:** 1.3.1.

**Local checklist:** Compare visually apparent headings with exposed heading structure.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/13Structure/#13b-test-procedure-for-visual-headings-programmatic)

<a id="13-c-progheadingvisual"></a>

### 13.C-ProgHeadingVisual

**Disposition:** active. **Requirements addressed:** 1.3.1.

**Local checklist:** Check programmatic headings are visually presented as headings according to the official procedure.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/13Structure/#13c-test-procedure-for-programmatic-headings-visual)

<a id="13-d-list"></a>

### 13.D-List

**Disposition:** active. **Requirements addressed:** 1.3.1.

**Local checklist:** Compare visually apparent lists with exposed list structure and item relationships.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/13Structure/#13d-test-procedure-for-visually-apparent-lists)

<a id="14-a-linkpurpose"></a>

### 14.A-LinkPurpose

**Disposition:** active. **Requirements addressed:** 2.4.4, 4.1.2.

**Local checklist:** Evaluate link names and permitted programmatic context for a determinable destination/purpose.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/14Links/#14a-test-procedure-for-link-purpose-in-context)

<a id="15-a-languagepage"></a>

### 15.A-LanguagePage

**Disposition:** active. **Requirements addressed:** 3.1.1.

**Local checklist:** Compare the exposed default language with the primary content language.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/15Language/#15a-test-procedure-for-language-of-page)

<a id="15-b-languagepart"></a>

### 15.B-LanguagePart

**Disposition:** active. **Requirements addressed:** 3.1.2.

**Local checklist:** Inspect programmatic language for changes in passages/phrases, applying the listed exceptions.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/15Language/#15b-test-procedure-for-language-of-parts)

<a id="16-a-audioonlytranscript"></a>

### 16.A-AudioOnlyTranscript

**Disposition:** active. **Requirements addressed:** 1.2.1.

**Local checklist:** Compare prerecorded audio-only content with its complete equivalent text alternative.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/16AudioVideo/#16a-test-procedure-for-audio-only-prerecorded)

<a id="16-b-videoonlyalt"></a>

### 16.B-VideoOnlyAlt

**Disposition:** active. **Requirements addressed:** 1.2.1.

**Local checklist:** Compare prerecorded video-only content with an equivalent text or audio alternative.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/16AudioVideo/#16b-test-procedure-for-video-only-prerecorded)

<a id="16-c-audiomediaalternative"></a>

### 16.C-AudioMediaAlternative

**Disposition:** active. **Requirements addressed:** 1.2.1.

**Local checklist:** Verify that labeled audio media-alternative content conveys no more information than its associated text before applying an exception.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/16AudioVideo/#16c-test-procedure-for-audio-media-alternative-prerecorded)

<a id="16-d-videomediaalternative"></a>

### 16.D-VideoMediaAlternative

**Disposition:** active. **Requirements addressed:** 1.2.1.

**Local checklist:** Verify that labeled video media-alternative content conveys no more information than its associated text before applying an exception.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/16AudioVideo/#16d-test-procedure-for-video-media-alternative-prerecorded)

<a id="17-a-mediaplayerccadcontrols"></a>

### 17.A-MediaPlayerCCADControls

**Disposition:** active. **Requirements addressed:** 503.4.

**Local checklist:** Enable and operate the caption and audio-description selection controls for synchronized video/audio.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/17SyncMedia/#17a-test-procedure-for-media-player-controls)

<a id="17-b-mediaplayercclevel"></a>

### 17.B-MediaPlayerCCLevel

**Disposition:** active. **Requirements addressed:** 503.4.1.

**Local checklist:** Compare caption-control menu placement with volume/program-selection controls under the procedure applicability conditions.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/17SyncMedia/#17b-test-procedure-for-media-player-caption-control-level)

<a id="17-c-mediaplayeradlevel"></a>

### 17.C-MediaPlayerADLevel

**Disposition:** active. **Requirements addressed:** 503.4.2.

**Local checklist:** Compare audio-description control menu placement with volume/program-selection controls under the procedure applicability conditions.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/17SyncMedia/#17c-test-procedure-for-media-player-audio-description-control-level)

<a id="17-d-captionsprerecorded"></a>

### 17.D-CaptionsPrerecorded

**Disposition:** active. **Requirements addressed:** 1.2.2.

**Local checklist:** Compare the entire prerecorded soundtrack with captions for content, timing and unobstructed meaningful visuals.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/17SyncMedia/#17d-test-procedure-for-captions-prerecorded)

<a id="17-e-adprerecorded"></a>

### 17.E-ADPrerecorded

**Disposition:** active. **Requirements addressed:** 1.2.5.

**Local checklist:** Compare important prerecorded visual information with the soundtrack including enabled description.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/17SyncMedia/#17e-test-procedure-for-audio-description-prerecorded)

<a id="17-f-captionslive"></a>

### 17.F-CaptionsLive

**Disposition:** active. **Requirements addressed:** 1.2.4.

**Local checklist:** Observe live synchronized media and compare captions with speech and meaningful sounds.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/17SyncMedia/#17f-test-procedure-for-captions-live)

<a id="17-g-syncmediaalternative"></a>

### 17.G-SyncMediaAlternative

**Disposition:** not-separately-tested-at-AA. **Requirements addressed:** 1.2.3.

**Local checklist:** Account for the AA audio-description test that subsumes the less strict Level A alternative; do not invent a separate test.

**Execution:** follow the official relationship to the AA audio-description check; do not invent a separately executed Level A test or infer success without evidence for the relied-upon AA check.

**Status accounting:** retain the explicit not-separately-tested-at-AA source disposition; no independent executed test or passing case classification is implied. Source/mapping review status: pending-human-review.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/17SyncMedia/#17g-test-procedure-for-sync-media-alternative-prerecorded)

<a id="18-b-csspositionedcontent"></a>

### 18.B-CSSPositionedContent

**Disposition:** active. **Requirements addressed:** 1.3.2.

**Local checklist:** Compare visual meaning and programmatic reading sequence for positioned content without indiscriminately disabling all presentation.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/18Stylesheet/#18b-test-procedure-for-css-positioned-content)

<a id="19-a-frametitle"></a>

### 19.A-FrameTitle

**Disposition:** active. **Requirements addressed:** 4.1.2.

**Local checklist:** Inspect each frame title for meaningful identification in its embedding context.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/19Frames/#19a-test-procedure-for-frames)

<a id="19-b-iframename"></a>

### 19.B-iFrameName

**Disposition:** active. **Requirements addressed:** 4.1.2.

**Local checklist:** Inspect each iframe accessible name for meaningful identification in its embedding context.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/19Frames/#19b-test-procedure-for-iframes)

<a id="20-a-conformingaltversion"></a>

### 20.A-ConformingAltVersion

**Disposition:** active. **Requirements addressed:** CR1.

**Local checklist:** Verify any relied-upon alternate version meets the conformance definition, is current and is reachable by an accessibility-supported mechanism.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/20AlternateVersions/#20a-test-procedure-for-conforming-alternate-version)

<a id="21-a-timingadjustable"></a>

### 21.A-TimingAdjustable

**Disposition:** active. **Requirements addressed:** 2.2.1.

**Local checklist:** Identify time limits and verify an allowed disabling, adjustment, extension or essential/realtime exception.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/21TimedEvents/#21a-test-procedure-for-timing-adjustable)

<a id="21-b-movinginfo"></a>

### 21.B-MovingInfo

**Disposition:** active. **Requirements addressed:** 2.2.2.

**Local checklist:** Test qualifying moving/blinking/scrolling content for pause, stop or hide controls.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/21TimedEvents/#21b-test-procedure-for-moving-information)

<a id="21-c-autoupdate"></a>

### 21.C-AutoUpdate

**Disposition:** active. **Requirements addressed:** 2.2.2.

**Local checklist:** Test qualifying auto-updating information for pause, stop, hide or update-frequency controls; do not import the movement time threshold.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/21TimedEvents/#21c-test-procedure-for-auto-updating-information)

<a id="21-d-audiocontrol"></a>

### 21.D-AudioControl

**Disposition:** active. **Requirements addressed:** 1.4.2.

**Local checklist:** Test automatically playing audio over three seconds for the permitted pause/stop or independent-volume options.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/21TimedEvents/#21d-test-procedure-for-audio-control)

<a id="22-a-resizetext"></a>

### 22.A-ResizeText

**Disposition:** active. **Requirements addressed:** 1.4.4.

**Local checklist:** Increase text to 200 percent and inspect loss of content or functionality using the format-appropriate method.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/22Resize/#22a-test-procedure-for-resize-text)

<a id="23-a-multipleways"></a>

### 23.A-MultipleWays

**Disposition:** active. **Requirements addressed:** 2.4.5.

**Local checklist:** Identify the relevant page set and verify multiple location methods or the process-step/result exception.

**Execution:** follow the official procedure, inspect actual programmatic/native structure and rendered behavior, capture specific evidence and obtain human judgment where needed. In documents use native format mechanisms; do not substitute HTML-specific inspection mechanically.

**Validation evidence:** no executable case suite or per-case mapping is bundled here; observed evaluation not-tested. Record evidence from the actual assessment. Missing cases do not establish non-applicability.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/23MultipleWays/#23a-test-procedure-for-related-web-pages)

<a id="24-a-parsing"></a>

### 24.A-Parsing

**Disposition:** no-test-required. **Requirements addressed:** 4.1.1.

**Local checklist:** Omit active Parsing testing; retain the no-test-required disposition for historical procedure traceability.

**Execution:** do not execute a Parsing test. Retain the official no-test-required disposition without claiming an observed pass.

**Status accounting:** retain the explicit no-test-required source disposition; no independent executed test or passing case classification is implied. Source/mapping review status: pending-human-review.

[Official procedure](https://ictbaseline.access-board.gov/web-baselines/24Parsing/#24a-test-procedure-for-parsing)
