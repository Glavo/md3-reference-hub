---
title: "Layout overview"
source_url: "https://m3.material.io/foundations/layout/layout-overview/parts-of-layout"
lastmod: "2026-05-19"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "foundations"
assets:
  - "assets/images/014ba3740cfc-mp3yuwss-01.png"
  - "assets/images/9f3271bca016-mp3z1fl4-02.png"
  - "assets/images/c89c55abad2e-mp3z8y9f-03.png"
  - "assets/images/75a82aa58034-mp45sv4u-04.png"
  - "assets/images/7d558474b19d-mp45u0ar-05.png"
  - "assets/images/58f0489ba28b-mp46vx4x-07.png"
  - "assets/images/8a83457177f0-mp46z833-08.png"
  - "assets/images/5b8c1dab98cc-mp472v90-08.png"
  - "assets/videos/fbcc34496b23-mp4771l5-GM3_Applaying-Layout_Understanding_Part_11_IA_v01.mp4"
  - "assets/images/b53a284a9ad5-mp47dohx-10.png"
---

# Layout overview

Layout is the visual and strategic arrangement of elements on a screen

## Parts of layout

## Parts of layout

### Windows

A window frames and contains an app or product.

Many systems support multi-window views, which display multiple apps at once.

[Multi-window support guide for Android](https://developer.android.com/develop/ui/compose/layouts/adaptive/support-multi-window-mode)

![Stacked windows with a single taskbar underneath.](../../../../assets/images/014ba3740cfc-mp3yuwss-01.png)

_Two windows can be shown at once with a taskbar underneath_

On desktop, windows can be resized and moved around freely. They should adapt to various screen sizes.

[More on adaptive design](adaptive-design.md)

![2 overlapping desktop windows.](../../../../assets/images/9f3271bca016-mp3z1fl4-02.png)

_Windows can be moved around, resized, and adapt to different screen sizes_

### Grids

The layout grid is the foundation for every layout. It provides a structural framework for organizing components, content, and actions.

Use the grid to:

-   Group related information in columns

-   Apply spacing consistently

-   Create focal points for primary actions

-   Align building blocks like bars, rails, and panes


[More on grids](../grids-spacing/grids.md)

![Side-by-side compact and expanded windows with different grid spacing.](../../../../assets/images/c89c55abad2e-mp3z8y9f-03.png)

_Column count, width, and spacing dynamically adjust to different breakpoints_

## Layout scaffold

### Bars

Bars help people navigate through a product. Use bars to:

-   Frame the main content

-   Contain an app bar or navigation bar

-   Span one or multiple panes  


[More on bars](../scaffold/bars.md)

![A photo app with an app bar below the safety region.](../../../../assets/images/75a82aa58034-mp45sv4u-04.png)

_1. App bars are placed at the top of the screen to help people navigate by providing a description of the screen and 1–2 essential actions, like search or back navigation_

### Rails

Rails are the next level in layout after bars, filling the perimeter space surrounding panes, or floating above them. They contain key elements such as navigation rails, toolbars, chat inputs, FABs, and other primary controls.

[More on rails](../scaffold/rails.md)

![Mobile layout with a toolbar, and a desktop layout with a start-aligned navigation rail.](../../../../assets/images/7d558474b19d-mp45u0ar-05.png)

_On mobile, the rail region can contain a toolbarOn desktop, the rail region can contain the navigation rail_

### Panes

Just like panes of glass that make up a window in the real world, panes in Material make up most of the layout in a window.

All content must be in a pane. A layout can contain 1–3 panes of various widths, which adapt dynamically to the breakpoint (formerly window size class) and the person’s language setting. For right-to-left (RTL) languages, navigation components will be on the right.

People can navigate to or between panes. Presenting multiple panes at once can make a product more efficient and easier to use.

[More on panes](https://m3.material.io/m3/pages/scaffold/panes/)

![2-pane layout on a tablet.](../../../../assets/images/58f0489ba28b-mp46vx4x-07.png)

_First paneSecond pane_

#### Containment

On most devices, panes can blend in with the background. This is called implicit grouping, and helps show relationships between panes.

Explicit grouping uses distinct colors or outlines to visually delineate content.

[More on spacing to group content](../grids-spacing/spacing.md#e7e6d1ac-031a-4757-afcf-b223f23654ea)

![2 panes in an email app, with the same color as the background.](../../../../assets/images/8a83457177f0-mp46z833-08.png)

_In multiple-pane layouts, use color to show emphasis and close spacing to group related content_

In spatial environments, panes use a container color to separate them from the passthrough or virtual environment.

![2-pane layout in a spatialized environment, with a virtual reality background.](../../../../assets/images/5b8c1dab98cc-mp472v90-08.png)

_Use contrast between panes and the background to create a spatial effect in XR_

### Drag handles

Drag handles can be used to resize panes in a layout. They can:

-   Adjust the width of flexible panes

-   Fully collapse and expand fixed panes to quickly switch between a single and two-pane layout

<video controls src="../../../../assets/videos/fbcc34496b23-mp4771l5-GM3_Applaying-Layout_Understanding_Part_11_IA_v01.mp4" title="A drag handle is used to collapse a two-pane layout into a single-pane layout."></video>

[Open video](../../../../assets/videos/fbcc34496b23-mp4771l5-GM3_Applaying-Layout_Understanding_Part_11_IA_v01.mp4)

### Rulers

Rulers are a set of global alignment lines. They help to align elements across all layers of the layout.

[How to implement rulers in Compose](https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/Ruler)

![A 2-pane email in box, with rulers.](../../../../assets/images/b53a284a9ad5-mp47dohx-10.png)

_Rulers ensure global alignment across a product, keeping margins and placement consistent_
