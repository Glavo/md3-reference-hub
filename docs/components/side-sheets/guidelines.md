---
title: "Side sheets"
source_url: "https://m3.material.io/components/side-sheets/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/13c02ec3c4c9-meqqqohk-01.png"
  - "assets/images/fe7358410aeb-meqr6mnd-02.png"
  - "assets/images/64ab6c664415-meqrab5f-03.png"
  - "assets/images/53b5af8e0c1b-meqrlvws-04-do.png"
  - "assets/images/eb24d8c24330-meqrngv8-05-don't.png"
  - "assets/images/45a544965186-meqrqfpt-06.png"
  - "assets/images/e3ad6ec359ff-meqrrjh7-07.png"
  - "assets/images/3055603658f7-meqsampe-08.png"
  - "assets/images/88e4eafab075-meqsgqgs-09.png"
  - "assets/images/7f3eab6695a1-meqsns8t-10.png"
  - "assets/images/4f8b7ade2ba1-meqsw3fe-11.png"
  - "assets/images/e0b584e61dc7-meqsz2ma-12.png"
  - "assets/images/723d17e8bbff-meqt0pai-13.png"
  - "assets/videos/ca5eced4bfd1-lw8ytzch-GM3-Components-SideSheets-Guidelines-1-v01.mp4"
  - "assets/videos/78cd687195be-lw8yw08l-GM3-Components-SideSheets-Guidelines-2-v01.mp4"
  - "assets/images/fe62d001a210-meqwb27c-16.png"
  - "assets/videos/183815bd8cdf-lw8yz6fq-GM3-Components-SideSheets-Guidelines-3-v01.mp4"
  - "assets/images/524a747f0836-lw8z3x56-19_don't.png"
  - "assets/videos/63c8814839a8-lw8z7v0k-GM3-Components-SideSheets-Guidelines-4-v02.mp4"
---

# Side sheets

Side sheets show secondary content anchored to the side of the screen

## Guidelines

![Side by side comparison of a standard and a modal side sheet.](../../../assets/images/13c02ec3c4c9-meqqqohk-01.png)

_Standard side sheet Modal side sheet_

## Usage

Standard side sheets are supplementary surfaces used mostly in medium to expanded window sizes, like tablet and desktop. They provide a consistent and predictable surface for contextual actions and information.

Standard side sheets display content that complements the screen’s primary content. They remain visible while people interact with primary content.

Common uses include:

-   Displaying a list of actions that affect the screen’s primary content, such as filters

-   Displaying supplemental content and features

![Standard side sheet showing supplementary information about a photo.](../../../assets/images/fe7358410aeb-meqr6mnd-02.png)

_Information about a photo in a standard side sheet_

Modal side sheets are preferred in compact window sizes, like mobile, due to limited screen size. 

They can display the same kinds of content as standard side sheets, but must be dismissed in order to interact with the underlying content.

![Modal side sheet showing filter controls.](../../../assets/images/64ab6c664415-meqrab5f-03.png)

_Modal side sheet with filter controls_

Side sheets have a fixed width and typically span the height of the screen. 

Their dimensions depend on how the app’s layout is subdivided into UI regions.

![A modal sheet at the right of a screen, with the correct inset.](../../../assets/images/53b5af8e0c1b-meqrlvws-04-do.png)

_Place side sheets along the edge of the screen, usually on the right side to avoid interference with any navigational components on the left edge. They can be slightly inset by 16dp._

![A modal side sheet at the right of the screen with the wrong inset.](../../../assets/images/eb24d8c24330-meqrngv8-05-don't.png)

_Don’t inset a side sheet from the screen edges far beyond the recommended margin. This makes the sheet’s position and scroll behavior unclear, while obscuring primary content._

## Anatomy

![4 elements of a standard side sheet.  ](../../../assets/images/45a544965186-meqrqfpt-06.png)

_Divider (optional)HeadlineContainerClose icon button_

![7 elements of a modal side sheet.](../../../assets/images/e3ad6ec359ff-meqrrjh7-07.png)

_Back icon button (optional)HeadlineContainer Close icon buttonDivider (optional) Action buttons (optional) Scrim_

### Container

Side sheet containers hold all side sheet elements. Their size is determined by the space those elements occupy.
 
The container is the only required element of a side sheet.

![A modal side sheet’s container.](../../../assets/images/3055603658f7-meqsampe-08.png)

_Container_

### Back icon button (optional)

Icon buttons can provide ways to exit a side sheet or move to a different experience.

Because the primary content behind or beside a side sheet is always visible, it’s important to provide affordances for leaving a side sheet and returning to the primary content.

![Back icon button on the upper left of a modal side sheet.](../../../assets/images/88e4eafab075-meqsgqgs-09.png)

_Back icon button_

### Close icon button (optional)

A close affordance provides a consistent method for dismissing a side sheet. 

A close icon button is highly recommended, increases accessibility, and makes focused side sheets easier to close.

![Close icon button on the upper right of a modal side sheet.](../../../assets/images/7f3eab6695a1-meqsns8t-10.png)

_Close icon button_

### Action buttons (optional)

Buttons represent actions available from a side sheet. Examples: **Save**, **Edit**, **Download**

Use elevation, fill, and tone to call attention to specific actions.

![Save and cancel buttons at the bottom of a modal side sheet.](../../../assets/images/4f8b7ade2ba1-meqsw3fe-11.png)

_Action buttons_

### Divider (optional)

Dividers can separate different kinds of content and create distinct regions in a side sheet. 


Use a divider to separate:

-   Action buttons from content

-   User-generated content from system-generated content

![Horizontal divider on a modal side sheet.](../../../assets/images/e0b584e61dc7-meqsz2ma-12.png)

_Divider_

### Content (optional)

Side sheets can display a wide variety of content and layouts, ranging from a list of actions to supplemental content in a tabular layout.

![2 side sheets with different content displayed side by side.](../../../assets/images/723d17e8bbff-meqt0pai-13.png)

_Form controls shown in a side sheet for app settings_

<video controls src="../../../assets/videos/ca5eced4bfd1-lw8ytzch-GM3-Components-SideSheets-Guidelines-1-v01.mp4" title="As a small screen changes to a larger size the modal side sheet transitions to a standard side sheet."></video>

[Open video](../../../assets/videos/ca5eced4bfd1-lw8ytzch-GM3-Components-SideSheets-Guidelines-1-v01.mp4)

## Adaptive design

Side sheets have a default width, but can be resized depending on the needs of the layout. 

When a standard side sheet opens, the body area shrinks to accommodate the sheet’s width while maintaining a margin on the body’s trailing edge.

<video controls src="../../../assets/videos/78cd687195be-lw8yw08l-GM3-Components-SideSheets-Guidelines-2-v01.mp4" title="Body area of a screen adjusts to accommodate entrance and exit of side sheet. "></video>

[Open video](../../../assets/videos/78cd687195be-lw8yw08l-GM3-Components-SideSheets-Guidelines-2-v01.mp4)

### RTL language support

In right-to-left (RTL) languages, side sheets should appear on the left edge of the window with all elements reversed.

![Side sheet along the left edge of a screen. All buttons and icons are reversed.](../../../assets/images/fe62d001a210-meqwb27c-16.png)

_Side sheet elements are reversed in RTL languages_

## Behavior

Side sheets can vertically scroll independent of the rest of the UI. 

This allows their scroll position and content to persist while the page is scrolled, and vice versa.

Side sheets cannot scroll horizontally.

<video controls src="../../../assets/videos/183815bd8cdf-lw8yz6fq-GM3-Components-SideSheets-Guidelines-3-v01.mp4" title="Animation showing a side sheet being scrolled vertically to view all the options."></video>

[Open video](../../../assets/videos/183815bd8cdf-lw8yz6fq-GM3-Components-SideSheets-Guidelines-3-v01.mp4)

![A side sheet appears to scroll horizontally.](../../../assets/images/524a747f0836-lw8z3x56-19_don't.png)

_Don’t allow horizontal scrolling or lay out the side sheet in a way that suggests horizontal scrolling. A side sheet’s narrow width leaves limited space to fully view items._

### Predictive back

On Android, a gesture called [predictive back](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md) allows a person to swipe left or right on the side sheet. 

When predictive back is used:

-   The side sheet detaches from the top and bottom edges of the screen to signal it will close

-   The previous screen is revealed in a preview

-   The side sheet and its content always scales in the direction of the gesture


[Find a list of compatible components](../../foundations/interaction/gestures.md#22462fb2-fbe8-4e0c-b3e7-9278bd18ea0d)

<video controls src="../../../assets/videos/63c8814839a8-lw8z7v0k-GM3-Components-SideSheets-Guidelines-4-v02.mp4" title="Swiping to go back shows a preview of the previous screen."></video>

[Open video](../../../assets/videos/63c8814839a8-lw8z7v0k-GM3-Components-SideSheets-Guidelines-4-v02.mp4)
