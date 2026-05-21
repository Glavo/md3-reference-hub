---
title: "Layout overview"
source_url: "https://m3.material.io/foundations/layout/layout-overview/adaptive-design"
lastmod: "2026-05-19"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "foundations"
assets:
  - "assets/images/8a749cfc127b-mp3w1k0w-01.png"
  - "assets/images/1fbc0241ec59-mp3w5izv-02.png"
  - "assets/images/fdce0d838507-mp3wl9n4-03.png"
  - "assets/images/70c259d1b9f6-mp3wz2eh-04.png"
  - "assets/images/10e6160d9c6d-mp3xrm51-Placeholder.png"
  - "assets/images/ad42d01bdb5a-mp3xtdfv-Placeholder-(1).png"
  - "assets/images/e094e00e90db-mp3xuwp5-Placeholder-(Cmd+V-to-replace).png"
  - "assets/images/9508001e7206-mp3xf0z5-05.png"
  - "assets/images/a4d794f4b6f0-mp3xgph2-06.png"
  - "assets/images/bb03d32fd142-mp3xiwiu-07.png"
---

# Layout overview

Layout is the visual and strategic arrangement of elements on a screen

## Adaptive design

## What’s adaptive design?

Adaptive design is a set of techniques to change an interface to fit different contexts. While responsive design scales a single layout to fit any screen, adaptive design customizes a product to optimize the experience on each device.

Designing adaptive experiences goes beyond customizable properties like color, typography, and shape. The structure, individual components, and entire layouts can adapt based on:

-   People: Individual preferences and settings

-   Devices: Watch, phone, foldable, tablet, desktop, or XR device

-   Usage: Screens dynamically change as a person resizes windows, changes orientation, or switches device

## Designing adaptive experiences

Layouts must be versatile, designed to adapt fluidly across three primary experience types: **mobile**, **desktop**, and **spatial**. Start with mobile and make sure your product's layout and components can scale and adapt seamlessly all the way up to spatial environments.

While each experience has different primary input methods, designs should be built with all inputs in mind—touch, pointer, and physical keyboard—since users may use your product in a desktop environment regardless of their device type.

### Mobile

Mobile experiences include phones, foldables, and tablets.

On mobile, an app can be shown in several window modes:

-   Full-screen: The app takes up the entire screen, the default for mobile

-   Split-screen: Two or more apps share the screen simultaneously, common on tablets and foldables

-   Bubbles: Floating windows that let people multitask without leaving their current context

![A mobile app in full screen mode.](../../../../assets/images/8a749cfc127b-mp3w1k0w-01.png)

_Mobile layouts default to a full-screen window_

### Desktop

Desktop experiences use free-form windows that adapt across breakpoints.

People can use split screens, floating windows, and free-form windows for multi-tasking.

A tablet can convert to a desktop experience when a physical keyboard and mouse are connected. Similarly, Android mobile devices can transition into a desktop-like environment when connected to an external monitor.

![2 desktop layouts adapted to large and medium breakpoints.](../../../../assets/images/1fbc0241ec59-mp3w5izv-02.png)

_A desktop layout can adjust from three to two columns to fit a medium breakpoint_

### Spatial

Extended reality (XR) experiences use multiple free-form windows within virtually limitless screens. Immersive modes, such as Android XR’s [full space](https://developer.android.com/design/ui/xr/guides/foundations), allow components to be positioned freely in 3D space.

[More on XR design](../../xr/design/accessibility.md)

![An XR layout inimmersive full space mode.](../../../../assets/images/fdce0d838507-mp3wl9n4-03.png)

_In an XR full space layout, a navigation rail can become an orbiter, and float to the side of the main pane_

## Adaptive layouts

The Material 3 adaptive system uses panes and breakpoints to organize content into adaptive layouts.

Panes are the building blocks of layout; a pane is a single destination in the product. For example, in a messaging app, the list of messages is one pane, and and a specific conversation thread is another.

![Mobile and tablet in portrait layout with 1 pane. Tablet in landscape layout with 2 panes.](../../../../assets/images/70c259d1b9f6-mp3wz2eh-04.png)

_Panes are the primary segments of a layout, and can change based on context_

As the pane or window resizes—or as someone navigates a product—panes may change size, enter and exit the screen, and reorganize themselves to make the experience more usable or easier to navigate. These patterns are called adaptive strategies. Material has three adaptive strategies that create a cohesive experience across breakpoints: [show and hide](../scaffold/panes.md#bbe68948-bc05-4f7c-b870-6254439e4fd8), [levitate](../scaffold/panes.md#96bf71b8-04b8-4fff-97c7-9bc782fbf401), and [reflow](../scaffold/panes.md#e0a573e9-8c62-4772-8d81-47955ff83196).

![A foldable open screen with 2 co-planar panes displayed side by side.](../../../../assets/images/10e6160d9c6d-mp3xrm51-Placeholder.png)

_Co-planar: Panes are displayed side by side_

![A  foldable open screen with a floating pane displayed above other elements. ](../../../../assets/images/ad42d01bdb5a-mp3xtdfv-Placeholder-(1).png)

_Floating: A pane is displayed above other panes or content, like a dialog_

![A  foldable open screen with a docked pane to the bottom of the screen displayed above other elements. ](../../../../assets/images/e094e00e90db-mp3xuwp5-Placeholder-(Cmd+V-to-replace).png)

_Docked: A pane is displayed above other panes and one of its edges extends beyond one side of the screen, like a bottom sheet_

### Adapting components

Components can adapt in appearance, placement, and behavior based on factors like:

-   Where components are placed in relation to their containers, content, and pane boundaries

-   How components use space

-   How components enable usage across different device and input types


Most Material components respond using three main strategies: resizing, showing and hiding, and presentation changes.

#### Resizing

Components should resize in response to their content and their placement in a layout.

For example, buttons may scale along with their parent container, or hug their contents and maintain a left or right alignment.

![A card with a button that spans the full width, and a card with a button that’s start-aligned and hugs its contents.](../../../../assets/images/9508001e7206-mp3xf0z5-05.png)

_Buttons can hug their contents or span their containers based on context_

#### Showing & hiding

Components should show and hide information, or collapse and expand to selectively reveal content that best suits the space.

For example, list items may reveal descriptions or other additional information as their parent container scales.

![A list on mobile and on tablet. List items show additional text on tablet.](../../../../assets/images/a4d794f4b6f0-mp3xgph2-06.png)

_List items can reveal more text on a tablet_

#### Presentation changes

Presentation changes include the orientation of elements and changes to specific properties, like color, type, and shape.

Components can also change configurations. For example, when a window size increases, a FAB can change to an extended FAB, and navigation rails can be automatically expanded.

![A large desktop window with an extended FAB. A smaller window shows a standard FAB. ](../../../../assets/images/bb03d32fd142-mp3xiwiu-07.png)

_The extended FAB can change to a standard FAB when the window is smaller_
