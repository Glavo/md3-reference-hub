---
title: "Breakpoints"
source_url: "https://m3.material.io/foundations/layout/breakpoints/overview"
lastmod: "2026-05-19"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "foundations"
assets:
  - "assets/images/a2b539d17417-mp3zlnnl-01.png"
  - "assets/images/e5482670e944-mp3zmg9g-02.png"
  - "assets/images/d198ccdf05d7-mp3znkbk-03-a-USE-AS-STATIC-ASSET.png"
  - "assets/images/1ccd48aaecc1-mp3zoh5f-04-a.png"
  - "assets/images/f02afd75e620-mp3zwt8a-05.png"
  - "assets/images/733d35825a23-mp3zxlki-06.png"
  - "assets/images/3fd6ff202e10-mp3zyjaf-07.png"
  - "assets/images/b7a17aaa3227-mp5k02j7-08.png"
  - "assets/images/93b0b262bd6e-mp400qwl-09.png"
  - "assets/images/17a45ee219d1-mp401fhs-10.png"
  - "assets/images/5ff407832d30-mp402bv2-11.png"
  - "assets/images/33a45ccd00ed-mp40fx5f-12.png"
  - "assets/images/79e04fd62cd9-mp40h750-13.png"
  - "assets/images/7473db75a097-mp40iha0-14.png"
  - "assets/images/98907456d8cd-mp40ja5v-15.png"
  - "assets/images/33f5ef9bb5bf-mp4067x5-16.png"
---

# Breakpoints

Breakpoints ensure layouts work across a wide range of devices

## Overview

Material uses breakpoints to create adaptive designs that work across devices:

-   There are five main breakpoints: compact, medium, expanded, large, and extra-large

-   Layouts typically transition from a single pane to two or three panes as window size increases

-   When moving across breakpoints, decide which elements to reveal, divide, resize, reposition, or swap

## Breakpoints overview

A breakpoint (previously window size class) is the window size at which a layout needs to change to match available space, device conventions, and ergonomics. These apply to Android and web.

All devices fall into one of five Material breakpoints:

-   Compact

-   Medium

-   Expanded

-   Large

-   Extra-large


Rather than designing for an ever-increasing number of display states, focusing on breakpoints ensures layouts work across a wide range of devices.

![3 breakpoints from small to expanded.](../../../../assets/images/a2b539d17417-mp3zlnnl-01.png)

_CompactMediumExpanded_

Large and extra-large breakpoints are used on devices like laptops, desktops, and external monitors.

![2 devices with large and extra-large breakpoints.](../../../../assets/images/e5482670e944-mp3zmg9g-02.png)

_LargeExtra-large_

**Design for breakpoints instead of specific devices because:**

-   The amount of available window space is dynamic and changes based on user behavior, such as multi-window modes or unfolding a foldable device

-   Devices fall into different breakpoints based on orientation

Breakpoint

Width (dp)

Common devices

Compact

Under 600dp

Phone in portrait

Medium

600–839dp

Tablet in portrait

Foldable in portrait (unfolded)

Expanded

840–1199dp

Phone in landscape

Tablet in landscape

Foldable in landscape (unfolded)

Desktop

Large

1200–1599dp

Desktop

Extra-large

1600dp+

Desktop

Ultra-wide monitors

### Height breakpoints

On Android, compact, medium, and expanded breakpoints are also available for [height](https://developer.android.com/develop/ui/compose/layouts/adaptive/support-different-display-sizes#window_size_classes). These can be used to adjust the layout when available vertical space is unusually small or large. However, since most layouts contain vertically scrolling content, it's rare that layouts need to adjust to available height.

## Designing across breakpoints

![An email app shown at 3 breakpoints: compact, medium, and expanded.](../../../../assets/images/d198ccdf05d7-mp3znkbk-03-a-USE-AS-STATIC-ASSET.png)

_Products should automatically adapt to any breakpoint_

![2 screens at large and extra-large breakpoints.](../../../../assets/images/1ccd48aaecc1-mp3zoh5f-04-a.png)

_A product’s layout should adjust to fit each breakpoint. For example, a large window can have two panes, while an extra-large window can have three._

Each product view should have a layout for the breakpoints most appropriate for your platform and users.

Different components are recommended for performing the same function across the five layouts.

Breakpoint

Panes

Navigation

Communication

Action

Compact

1

Navigation bar, modal expanded

navigation rail

Simple dialog

Full-screen dialog

Bottom sheet

Medium

1 (recommended) or 2

Navigation bar, modal expanded

navigation rail

Simple dialog

Menu

Expanded

1 or 2 (recommended)

Modal or standard expanded

navigation rail

Simple dialog

Menu

Large

1 or 2 (recommended)

Modal or standard expanded

navigation rail

Simple dialog

Menu

Extra-large

1 to 3 (recommended)

Modal or standard expanded

navigation rail

Simple dialog

Menu

Start by designing for one breakpoint, then adjust the layout for the next size by asking these five questions:

### 1\. What should be revealed?

Parts of the UI that are hidden on smaller devices can be revealed in larger layouts. 

For example:

-   On mobile, the navigation rail is collapsed by default

-   On an expanded device, the navigation rail can be open by default, revealing more actions and features

![Email app layouts in compact and expanded windows.](../../../../assets/images/f02afd75e620-mp3zwt8a-05.png)

_A product’s navigation rail can be revealed in an expanded layout_

The same can be applied to [panes](../scaffold/panes.md). Larger layouts can simultaneously display an inbox pane and a pane containing a selected conversation. Additional space doesn’t just mean making the same thing bigger.

![Messaging app layouts in compact and expanded windows.](../../../../assets/images/733d35825a23-mp3zxlki-06.png)

_An expanded layout for a messaging app reveals a second pane with the selected conversation_

### 2\. How should a screen be divided?

When dividing a screen into layout panes, consider the breakpoint: 

-   Compact and medium breakpoints:  A single pane works best

-   Expanded and large breakpoints:  Two panes are recommended

-   Extra-large breakpoints: Consider using three panes

![A compact and medium window have a single pane. A larger window has 2 panes.](../../../../assets/images/3fd6ff202e10-mp3zyjaf-07.png)

_Compact and medium breakpoints should use a single pane, while larger breakpoints can use two_

At medium breakpoints, two panes are useful when they contain low-density content with clear actions.  

Don’t use two panes in medium layouts with high information density, as it can reduce usability.

![Medium window with 2 panes with low-density content: an email setting menu and a list of setting switches.](../../../../assets/images/b7a17aaa3227-mp5k02j7-08.png)

_A settings view with low-density content and quick actions is a good use of two panes in a medium layout_

![Video app in a medium window has 1 pane in portrait layout and 2 in landscape.](../../../../assets/images/93b0b262bd6e-mp400qwl-09.png)

_Rotating a device often changes the breakpoint. A layout can have two panes in landscape orientation, and one pane in portrait._

Single-pane layouts can focus attention on one action or view, creating a distraction-free environment for a specific goal such as:

-   Playing a game

-   Watching a movie

-   Video calls

-   Creative applications

![Video app in a single-pane landscape layout at an expanded breakpoint.](../../../../assets/images/17a45ee219d1-mp401fhs-10.png)

_Consider using an immersive single-pane layout for video calls_

### 3\. What should be resized?

UI elements that are small on compact screens can grow as breakpoints increase. Panes can also expand to rearrange elements and make better use of space.

Consider resizing:

-   Cards

-   Feeds

-   Lists

-   Panes

Resizing can highlight imagery and improve text readability. This type of adaptation affects the scale of content and the relationship between objects on screen. For example, a vertical card on mobile can adjust its margins, orientation, text size, and density to better fit a tablet.

Across all breakpoints, adjust margins and type styles to keep text between 40–60 characters per line.

![2 cards in compact and medium layouts. The image and text are rearranged and resized to be more legible in the medium layout.](../../../../assets/images/5ff407832d30-mp402bv2-11.png)

_A small card in a compact layout can be resized larger in a medium or expanded layout_

### 4\. What should be repositioned?

A UI and its components can reflow or reposition to make use of additional space on expanded screens and in resized panes. Repositioning is also a way to match the ergonomic and input needs that change across device sizes, such as shifting actions from the bottom of a compact window to the leading edge of medium and expanded windows. This method is similar to responsive design on the web.

Consider:

-   Repositioning cards

-   Adding a second column of content

-   Creating a more complex layout of photos

-   Introducing more negative space

-   Ensuring reachability for navigation and interactive elements

Internal elements can be anchored to the left, right, or center as a parent container scales. Internal elements can also maintain fixed positions, such as a floating action button (FAB) in a navigation rail.

![Comparison of compact and medium breakpoints with tabs anchored to the middle of each layout.](../../../../assets/images/33a45ccd00ed-mp40fx5f-12.png)

_Tabs can remain anchored to the middle of a layout at both compact and medium breakpoints_

In the case of a button, the icon and text label within the button container can remain anchored to each other, staying centered as the button container scales horizontally.

![Label text remains the same size and centered as button size increases.](../../../../assets/images/79e04fd62cd9-mp40h750-13.png)

_Button icons and label text can remain anchored to each other no matter the width_

### 5\. What should be swapped?

As a layout changes across breakpoints, components with similar functions can also be exchanged. This makes it possible to adjust a layout for large-scale changes to the ergonomic and functional qualities of an interface.

For example, a bottom navigation bar in a compact layout can be swapped with a navigation rail in a medium layout.

![A compact layout’s navigation bar becomes a navigation rail in an expanded layout.](../../../../assets/images/7473db75a097-mp40iha0-14.png)

_Swap a navigation bar in a compact layout for a navigation rail in a medium or expanded layout_

Likewise, a navigation rail can swap from collapsed to expanded at larger breakpoints.

Use caution when swapping components. Make sure: 

-   The interchangeable components are functionally equivalent

-   The component swap serves a functional and ergonomic purpose


Don’t swap a button for a chip. Be careful when changing between list items and cards.

![A compact layout’s navigation rail expands in an extra-large layout.](../../../../assets/images/98907456d8cd-mp40ja5v-15.png)

_A collapsed navigation rail in medium or expanded layouts can become an expanded navigation rail in large or extra-large layouts_

![A button is swapped out for a menu in a food delivery app.](../../../../assets/images/33f5ef9bb5bf-mp4067x5-16.png)

_Don’t arbitrarily swap components that aren’t functionally equivalent, such as swapping a button with a menu_

### Common swappable components

Component type

Compact

Medium

Expanded

Navigation

Navigation bar

Collapsed navigation rail

Collapsed navigation rail

Navigation

Modal expanded navigation rail

Modal expanded navigation rail

Standard expanded navigation rail

Communication

Basic or full-screen dialog

Basic dialog

Basic dialog

Supplemental selection

Bottom sheet

Menu

Menu
