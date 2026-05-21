---
title: "Toolbars"
source_url: "https://m3.material.io/components/toolbars/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/f04a97c90886-m7xi1w6d-01.png"
  - "assets/images/04bee459ade7-m0akotbi-02.png"
  - "assets/images/9b4860a2d4b5-m0akx0bq-03.png"
  - "assets/images/cb6d4904c18e-m0akxxgm-04.png"
  - "assets/images/a6c4a142b4e6-m2ytl4us-05.png"
  - "assets/images/66922f68e8c1-m0al28lo-06.png"
  - "assets/images/08dcb321033f-m0al3avf-07.png"
  - "assets/images/57d91d52b3d2-m0al4vpg-08.png"
  - "assets/images/b7cc7c7f4926-m0alklw0-09.png"
  - "assets/images/801c15203f76-m0aln2r9-10.png"
  - "assets/images/a337b4208934-m7xiiwbe-11.png"
  - "assets/images/a078e039b868-m0als248-12.png"
  - "assets/images/487405ce34cf-m0alr7n0-13.png"
  - "assets/images/12d387104918-m0altzpa-22.png"
  - "assets/images/2b2bf48b5e48-m0alvr9d-14.png"
  - "assets/images/e1545bb09ea8-m0alwqwe-15.png"
  - "assets/images/006e93ad11ff-m7xiazxd-17.png"
  - "assets/images/112bf1c92cf5-m0aly7tp-16.png"
  - "assets/images/58cb6cc877fc-m0am06ae-18.png"
  - "assets/images/09b94b8fd249-m0am2tq8-19.png"
  - "assets/images/3f3e1f8ac189-m0am3wil-20.png"
  - "assets/images/d334e290c5f7-m7xigk3q-22.png"
  - "assets/images/bf154466780e-m0am631l-21.png"
  - "assets/images/53f2a276be54-m0ama5z3-22.png"
  - "assets/images/0ac941b88b06-m0amca2n-23.png"
  - "assets/images/c268916a3e7a-m7ximrxw-26.png"
  - "assets/images/2d57994807c2-m0amgeqc-24.png"
  - "assets/images/1bf26d50f033-m0amkwhr-TBD.png"
  - "assets/images/cbd648381a1e-ma2vff01-29.png"
  - "assets/images/68ce59c82a3e-ma6y2uq6-30.png"
  - "assets/images/dc6e3ec6421e-ma6y2g0q-31.png"
  - "assets/images/5bcb08a4c718-mbv5jv5l-33-Old.png"
  - "assets/images/8efc79e74400-ma1lkstz-32.png"
  - "assets/images/591d0eea46e3-ma1lm7ro-33-(1).png"
  - "assets/images/742ece2b2cd6-m7xmqa2l-34.png"
  - "assets/images/4d279abce58f-m0amsqw6-29.png"
  - "assets/images/7cb7a76c5414-m7xmw01r-36.png"
  - "assets/videos/42ffb0c646d1-ma1lvic4-GM3_Adaptive_ToolBar_Guidelines_37_IA_V01.mp4"
  - "assets/images/591ad4563c79-m7xmygdb-37.png"
  - "assets/images/971af6581c6b-m7xmz6n4-38.png"
  - "assets/videos/5b7d5989cb2f-m6kw6oe9-Toolbar-GUidelines-31a-RENDER-2x.mp4"
  - "assets/videos/066af9de23bb-m6kwfvv5-Toolbar-Guidelines-32a-RENDER.mp4"
  - "assets/videos/ac78f4927899-m6kwpm0p-Toolbar-Guidelines-33a-RENDER-2x.mp4"
  - "assets/videos/b6ad7743857d-m9ipmok3-GM3_Expressive_Toolbar_Guidelines_42_IA_v05.mp4"
---

# Toolbars

Toolbars display frequently used actions relevant to the current page

## Guidelines

![5 toolbars of various colors, elements, and actions.](../../../assets/images/f04a97c90886-m7xi1w6d-01.png)

_Toolbars can be used for a wide variety of use cases_

## Usage

Use a toolbar to provide actions related to the current page. 

Toolbars can contain many actions and can scale to show more actions in larger windows.

![Vibrant toolbar at bottom of mobile screen.](../../../assets/images/04bee459ade7-m0akotbi-02.png)

_A toolbar provides actions related to the current page_

There are two variants of toolbars:

-   **Docked toolbar** 
    Spans the full width of the window. It’s best used for global actions that remain the same across multiple pages.


-   **Floating toolbar** 
    Floats above the body content. It’s best used for contextual actions relevant to the body content or the specific page.


The baseline **bottom app bar** is no longer recommended, but is still supported.

![Docked toolbar example.](../../../assets/images/9b4860a2d4b5-m0akx0bq-03.png)

_Docked toolbar shows global controls_

![Floating toolbar example.](../../../assets/images/cb6d4904c18e-m0akxxgm-04.png)

_Floating toolbar show controls relevant to the current page_

When actions don’t fit in a toolbar, add a menu.

![Toolbar showing local navigation.](../../../assets/images/a6c4a142b4e6-m2ytl4us-05.png)

_Toolbar actions can open a menu_

There are two color configurations:

-   **Standard** 
    A low-emphasis color scheme best used for focusing attention on the body content.


-   **Vibrant** 
    A high-emphasis color scheme that draws attention to the controls. It can also indicate a temporary change in the page behavior, such as entering edit mode.

Consider using alternative color roles to create greater or lesser emphasis depending on the needs of the app. Experiment with different color roles to achieve different effects.

![Toolbar with low-emphasis controls.](../../../assets/images/66922f68e8c1-m0al28lo-06.png)

_Use the standard color scheme to draw focus to content outside the toolbar_

![Toolbar with high-emphasis controls.](../../../assets/images/08dcb321033f-m0al3avf-07.png)

_Use the vibrant color scheme to emphasize controls or actions_

### Toolbars & navigation bars

The toolbar and navigation bar are both placed at the bottom of the window, so should **not** be shown at the same time. Show the navigation bar on primary pages, and toolbars on subsequent pages with actions.

![A navigation bar shown on the main email Inbox page, and a toolbar shown when reading the email.](../../../assets/images/57d91d52b3d2-m0al4vpg-08.png)

_Navigation bar on a primary pageToolbar on a secondary page with contextual actions_

Floating toolbars can be used as tabs between related subsequent pages in the product hierarchy. 

This helps group similar pages together, and shows that the selection affects the body content underneath.

![Floating toolbar with secondary navigation labels.](../../../assets/images/b7cc7c7f4926-m0alklw0-09.png)

_Keep navigation distinct, and use a toolbar to display local navigation on a specific page_

Consider the existing app hierarchy when using a toolbar for local navigation. 

Avoid redundant or confusing navigation combinations in the same view.

![Floating toolbar with secondary navigation labels displaying above a bottom navigation bar.](../../../assets/images/801c15203f76-m0aln2r9-10.png)

_Don’t show a navigation bar and a toolbar with navigation controls at the same time_

## Anatomy

![Diagram of toolbar layouts.](../../../assets/images/a337b4208934-m7xiiwbe-11.png)

_ContainerElements_

### Container

The docked toolbar’s container spans the full width of the window. 

Avoid applying rounded corners to the container. This can imply the container expands or changes upon interaction.

![Docked toolbar with square corners.](../../../assets/images/a078e039b868-m0als248-12.png)

_Use straight corners for docked toolbars_

![Docked toolbar with rounded corners.](../../../assets/images/487405ce34cf-m0alr7n0-13.png)

_Avoid modifying the container shape_

As long as there's a minimum of 16dp padding on the leading and trailing edge, arrange controls inside however you see fit. The 32dp padding between items is just the default. 

All elements need a minimum 48x48dp target area to be accessible.

Be cautious of including too many controls as it can be overwhelming.

![Docked toolbar with too many controls.](../../../assets/images/12d387104918-m0altzpa-22.png)

_Don’t overwhelm people with too many controls_

The floating toolbar’s container should be fully visible on screen. If more actions are needed, use an overflow menu.

![Floating toolbar with overflow menu icon.](../../../assets/images/2b2bf48b5e48-m0alvr9d-14.png)

_Choose the most essential actions to show on screen by default_

![Floating toolbar that expands off edge of screen.](../../../assets/images/e1545bb09ea8-m0alwqwe-15.png)

_Floating toolbars shouldn’t exceed the edge of the window or pane_

#### Elevation

Floating toolbars have elevation by default. 

If the content beneath the toolbar is visually distinct, elevation can be removed.

![Vibrant floating toolbar that's easy to see in front of a neutral text background.](../../../assets/images/006e93ad11ff-m7xiazxd-17.png)

_The elevation on floating toolbars can be removed if on a visually distinct background_

### Flexibility & slots

When configuring a toolbar, think of it as a container with several slots.

These slots can be populated by buttons, icon buttons, images, text fields, or any kind of custom component.

Icon buttons provide an even hierarchy of controls. Mixing in a filled icon button can help add emphasis to a single action.

![5 toolbars with slots, and various combinations of buttons, icon buttons, filled icon buttons, and text fields.](../../../assets/images/112bf1c92cf5-m0aly7tp-16.png)

_Toolbars are made of slots that can contain many kinds of actions_

Visually emphasizing a single action more than others is an effective way to create hierarchy and guide people to controls they use most often. Avoid emphasizing more than one action at a time.

Some common ways to add emphasis to toolbar actions include:

-   Use different icon button color styles, such as filled, tonal, and standard
-   Customize the color roles of a single action, such as a primary or secondary palette
-   Use wide and narrow icon buttons 
-   Pair the toolbar with a FAB

![2 floating toolbars, 1 with a filled action button and 1 paired with a FAB.](../../../assets/images/58cb6cc877fc-m0am06ae-18.png)

_Two different ways to create a high emphasis action in toolbars_

![Floating toolbar with primary action and FAB.](../../../assets/images/09b94b8fd249-m0am2tq8-19.png)

_Don’t emphasize multiple buttons with bold, primary colors, such as a button and FAB together. Emphasize one action at a time._

![Floating toolbar with different control designs.](../../../assets/images/3f3e1f8ac189-m0am3wil-20.png)

_Avoid mixing too many different controls in the same toolbar. A consistent control design keeps things clear._

Avoid using square icon buttons in floating toolbars. Their square shape conflicts with the fully-rounded shape of the floating toolbar container.

Square buttons can be used in the docked toolbar.

![A floating toolbar, which is rounded, with squared icon buttons inside.](../../../assets/images/d334e290c5f7-m7xigk3q-22.png)

_Don’t use square filled icon buttons in floating toolbars_

### Floating toolbar with FAB

A FAB can be placed next to a floating toolbar to present one high-priority action alongside a unified set of toolbar actions.

Use a FAB for the highest-priority action in the view, or to complement the controls.

![3 toolbars paired with FABs.](../../../assets/images/bf154466780e-m0am631l-21.png)

_Floating toolbars can be paired with FABs_

## Position & orientation

Only place docked toolbars at the bottom of the window. 

If using other bottom-aligned elements, such as a navigation bar, don't use a docked toolbar.

![Docked toolbar on mobile.](../../../assets/images/53f2a276be54-m0ama5z3-22.png)

_Docked toolbars are always at the bottom of the window_

Floating toolbars can be horizontal or vertical. 

Horizontal toolbars should have a minimum 16dp margin from the edge of the window.

![Floating toolbar on mobile.](../../../assets/images/0ac941b88b06-m0amca2n-23.png)

_Horizontal floating toolbars should be at least 16dp from the edge of the window_

In larger window sizes, floating toolbars can be vertical and placed on either side of the screen.

Vertical toolbars should have a minimum 24dp margin.

![Vertical floating toolbar with 24dp margin.](../../../assets/images/c268916a3e7a-m7ximrxw-26.png)

_Maintain at least a 24dp margin for vertical toolbars_

To keep vertical toolbars compact, don’t use wide icon buttons. 

Use narrow or default icon buttons instead.

![Toolbar showing local navigation.](../../../assets/images/2d57994807c2-m0amgeqc-24.png)

_Using wide buttons with vertical toolbars can unnecessarily widen toolbar containers and hide other UI elements_

Vertical toolbars should be positioned opposite the navigation rail to balance out the screen and keep actions easy to access.

When showing a navigation rail and vertical floating toolbar at once, use the centered configuration of the navigation rail.

![Large screen UI showing both a navigation rail and vertical floating toolbar.](../../../assets/images/1bf26d50f033-m0amkwhr-TBD.png)

_When a nav rail is visible, the floating toolbar should be vertical on the opposite edge of the window_

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. [More on adaptive design](../../foundations/layout/layout-overview/adaptive-design.md)

### Resizing

#### Docked

The docked toolbar should always span 100% of the screen width.

In compact window sizes, elements in the toolbar should be evenly spaced.

In medium window sizes and larger, adjust the padding between controls to create a comfortable layout. This can be achieved by: 

-   Centering all elements

-   Customizing to center a key action, and aligning other elements to the edges

![Docked toolbar with evenly spaced elements.](../../../assets/images/cbd648381a1e-ma2vff01-29.png)

_Docked toolbar items should be evenly spaced in compact windows_

![Docked toolbar with centered elements.](../../../assets/images/68ce59c82a3e-ma6y2uq6-30.png)

_In medium window sizes and larger, create a spacious layout by centering all elements_

![Docked toolbar with central action and some elements pushed to the edge.](../../../assets/images/dc6e3ec6421e-ma6y2g0q-31.png)

_Align controls to the edge of the screen to make them easier to reach on tablets, and to better highlight a primary action in the middle_

On web and large screens, the docked toolbar can be rounded. Dividers can be used to organize large amounts of items. Only shrink the height and use extra small buttons if vertical space is limited.

![Docked toolbar with 15 actions for text editing on large screens, organized with dividers.](../../../assets/images/5bcb08a4c718-mbv5jv5l-33-Old.png)

_On web and other large screens, docked toolbars can be rounded and placed in different parts of the page_

#### Floating

The container should only be as big as needed to hold the items inside before reaching the 16dp margin.

If there’s not enough space for all items, put them in an overflow menu in the trailing slot. As the window size expands, more actions can be revealed.

The floating toolbar width can also be capped to keep it smaller and hide more elements.

![Floating toolbar in compact window with excess padding.](../../../assets/images/8efc79e74400-ma1lkstz-32.png)

_Don’t add extra space to a toolbar beyond its necessary items_

![Floating toolbar in expanded window class.](../../../assets/images/591d0eea46e3-ma1lm7ro-33-(1).png)

_At larger screen sizes, the container can display more controls before hitting the 16dp margin_

Vertical toolbars aren’t recommended for compact windows.

They take up a significant area of the screen and may feel visually overwhelming, especially on screens with complex layouts.

Only use them when the screen is simple or when the toolbar has a few controls.

![Vertical toolbar in a compact window.](../../../assets/images/742ece2b2cd6-m7xmqa2l-34.png)

_Vertical toolbars can cover important content in compact windows_

### Presentation

In larger window sizes, floating toolbars can be aligned to opposite edges of the screen so they're easy to reach and group similar actions. For example, consider placing the undo and redo actions in one toolbar, and editing controls like highlight, erase, and select in another. Stylistic differences can help emphasize each toolbar’s purpose and clarify hierarchy.

![2 toolbars, each with distinct stylistic treatment and actions.](../../../assets/images/4d279abce58f-m0amsqw6-29.png)

_Multiple toolbars with different stylistic treatments can create hierarchy and distinguish different kinds of actions_

Don’t use multiple toolbars in compact windows. There typically isn’t enough room on screen. 

Instead, use one toolbar for all actions.

![Multiple toolbars in a compact window.](../../../assets/images/7cb7a76c5414-m7xmw01r-36.png)

_Avoid using multiple toolbars in smaller windows_

Actions at the trailing edge of the toolbar can collapse into an overflow menu at smaller window sizes, and become visible again at larger sizes.

<video controls src="../../../assets/videos/42ffb0c646d1-ma1lvic4-GM3_Adaptive_ToolBar_Guidelines_37_IA_V01.mp4" title="App bar resizing to wider view."></video>

[Open video](../../../assets/videos/42ffb0c646d1-ma1lvic4-GM3_Adaptive_ToolBar_Guidelines_37_IA_V01.mp4)

### Right-to-left languages

In right-to-left (RTL) languages, mirror individual items that need it, like icons and text direction. If the order of actions is important, flip the order of the actions as well.

![Next button is on trailing edge for a LTR language.](../../../assets/images/591ad4563c79-m7xmygdb-37.png)

_In LTR languages, the Next button is intentionally placed on the trailing (right) edge_

![Next button is now on the trailing edge, at left, for RTL language.](../../../assets/images/971af6581c6b-m7xmz6n4-38.png)

_In RTL languages, reverse the order so Next remains on the trailing edge when flipped, now on the left. Text is not translated to illustrate mirroring._

## Behavior

### Scrolling

Docked toolbars can either remain on the screen during scroll, or animate offscreen.

<video controls src="../../../assets/videos/5b7d5989cb2f-m6kw6oe9-Toolbar-GUidelines-31a-RENDER-2x.mp4" title="Docked toolbar animating off screen."></video>

[Open video](../../../assets/videos/5b7d5989cb2f-m6kw6oe9-Toolbar-GUidelines-31a-RENDER-2x.mp4)

Floating toolbars can remain on the screen, animate offscreen, or collapse into a single, high-emphasis action on scroll.

<video controls src="../../../assets/videos/066af9de23bb-m6kwfvv5-Toolbar-Guidelines-32a-RENDER.mp4" title="Floating toolbar animating off screen."></video>

[Open video](../../../assets/videos/066af9de23bb-m6kwfvv5-Toolbar-Guidelines-32a-RENDER.mp4)

On Jetpack Compose, the floating toolbar can collapse to a FAB or key action on scroll.

<video controls src="../../../assets/videos/ac78f4927899-m6kwpm0p-Toolbar-Guidelines-33a-RENDER-2x.mp4" title="Floating toolbar with several actions animating on scroll to hide all actions except the center one."></video>

[Open video](../../../assets/videos/ac78f4927899-m6kwpm0p-Toolbar-Guidelines-33a-RENDER-2x.mp4)

Don't collapse actions and scroll at the same time.

<video controls src="../../../assets/videos/b6ad7743857d-m9ipmok3-GM3_Expressive_Toolbar_Guidelines_42_IA_v05.mp4" title="A toolbar collapsing to one action, and moving off screen when the page is scrolled."></video>

[Open video](../../../assets/videos/b6ad7743857d-m9ipmok3-GM3_Expressive_Toolbar_Guidelines_42_IA_v05.mp4)
