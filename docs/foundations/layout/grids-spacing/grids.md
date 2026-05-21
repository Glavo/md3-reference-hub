---
title: "Grids &amp; spacing"
source_url: "https://m3.material.io/foundations/layout/grids-spacing/grids"
lastmod: "2026-05-15"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "foundations"
assets:
  - "assets/images/bc2847d8da88-mp54500h-03.png"
  - "assets/images/f8fb942cbc96-mp54dby8-04.png"
  - "assets/images/186c1e2c9226-mp54ejyh-05.png"
  - "assets/images/a0bacf544f4a-mp55v0r6-06.png"
  - "assets/images/7b99d1c77ba7-mp55w2g9-07.png"
  - "assets/images/12e546757c11-mp55yqda-08.png"
  - "assets/images/d0b9b7553bdd-mp56n0pg-09.png"
  - "assets/images/327557c0ee27-mp573btr-10.png"
  - "assets/images/10e51b980f57-mp574ab3-11-key02-TO-PUBLISH.png"
  - "assets/images/55ce23cb0b81-mp575wo3-12-key02-TO-PUBLISH.png"
  - "assets/videos/9ecb64637d72-mp5778zb-GM3-Layout-Grids-Spacing-13-Ruler-Hero-IA-v02.mp4"
  - "assets/videos/1d7f045dc5d9-mp578joa-GM3-Layout-Grids-Spacing-14-Ruler-Options-IA-v02.mp4"
  - "assets/images/14d999b5ee88-mp579mwo-15.png"
---

# Grids &amp; spacing

Grids and spacing organize content and actions for any layout

## Grids

-   Layouts in Material are based on a grid that adapts across all breakpoints (previously window size classes)

-   Parts of the layout scaffold like rails and panes are positioned on this grid to create consistent adaptive layouts

-   The structure and spacing values used in a grid can add personality to a product’s layout

## How to use grids

### Start with placing grid columns

Grids adapt across breakpoints. As the size increases, column count, width, and spacing change as well.

![A mockup of grid columns, showing compact, medium/expanded, and large/extra-large breakpoints.](../../../../assets/images/bc2847d8da88-mp54500h-03.png)

_The number and size of columns changes based on breakpoints_

When moving between sizes, column count may increase to show more content or controls.

![A course listing on a compact screen, with 4 columns.](../../../../assets/images/f8fb942cbc96-mp54dby8-04.png)

_On compact screens, fewer columns are used to create a focused layout_

![A course listing on a foldable screen, with 8 columns.](../../../../assets/images/186c1e2c9226-mp54ejyh-05.png)

_As screen size increases, for example when a foldable screen is unfolded, additional columns allow for a richer layout_

### Place bars & rails

Populate regions of the layout scaffold that are closest to the edges of the screen’s usable space first. This may include:

-   Bars like the navigation bar and rail

-   Components like toolbars and app bars

![A compact screen with a toolbar highlighted.](../../../../assets/images/a0bacf544f4a-mp55v0r6-06.png)

_The bar region can contain a toolbar_

![A large screen with a leading navigation rail highlighted.](../../../../assets/images/7b99d1c77ba7-mp55w2g9-07.png)

_The rail region on larger screens usually contains a navigation rail_

### Place panes

Next, populate the main region of the screen with panes with content and components, based on available space and structure.

See the [canonical layout examples](../canonical-examples/feed.md) for ideas on which panes are appropriate for a product.

![Mobile UI with 1 pane. Foldable UI with 2 panes in a supporting pane layout.](../../../../assets/images/12e546757c11-mp55yqda-08.png)

_Primary paneSupporting pane_

## Rulers & alignment

Rulers are a set of recommended global alignment lines that help create consistent focal points in a product, while keeping content and components consistently aligned.

[How to implement rulers in Compose](https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/Ruler)

![1 compact and 1 desktop UI mapping rulers.](../../../../assets/images/d0b9b7553bdd-mp56n0pg-09.png)

_MarginBar or safety regionTitleContent 1Content 2Content 3Content 4Bar or safety regionRail_

### Bar & safety rulers

Bar and safety rulers reserve space for [system UI](https://developer.android.com/training/system-ui) elements like the status bar and gesture navigation.

They ensure actionable content like app bars aren’t covered by system UI.

![2 mobile UIs showing bar and safety rulers at the top and bottom.](../../../../assets/images/327557c0ee27-mp573btr-10.png)

_Bar and safety rulers align to the edges of a screen’s usable space, providing a reference for where system UI like the status bar or gesture navigation appear_

### Title rulers

The title ruler creates consistency for the screen’s title, aligning the text, icons, and other components in an app bar.

![1 mobile and 1 desktop UI showing title rulers.](../../../../assets/images/10e51b980f57-mp574ab3-11-key02-TO-PUBLISH.png)

_The title ruler aligns with the title in an app bar_

### Content rulers

Use content rulers to align and anchor key content, such as headlines and carousels.

-   First content ruler: Emphasizes major blocks like hero images, headlines, or primary components

-   Secondary rulers: Determine where supplementary text or actions begin

![1 mobile and 1 desktop UI showing content rulers.](../../../../assets/images/55ce23cb0b81-mp575wo3-12-key02-TO-PUBLISH.png)

_Content rulers offer flexible alignment options to help create a consistent layout across a product_

<video controls src="../../../../assets/videos/9ecb64637d72-mp5778zb-GM3-Layout-Grids-Spacing-13-Ruler-Hero-IA-v02.mp4" title="Carousel and text resizing to align with content rulers, creating a structured layout."></video>

[Open video](../../../../assets/videos/9ecb64637d72-mp5778zb-GM3-Layout-Grids-Spacing-13-Ruler-Hero-IA-v02.mp4)

### Ruler options

Margin rulers come with some wiggle room to determine how tight or loose a product’s content feels on-screen. The standard ruler can be adjusted to the left or right.

Choosing a narrower or wider margin can create or remove negative space, or create expressive moments in a content-forward product.

<video controls src="../../../../assets/videos/1d7f045dc5d9-mp578joa-GM3-Layout-Grids-Spacing-14-Ruler-Options-IA-v02.mp4" title="Mobile UI showing a recipe layout where text margins narrow while the hero photo expands."></video>

[Open video](../../../../assets/videos/1d7f045dc5d9-mp578joa-GM3-Layout-Grids-Spacing-14-Ruler-Options-IA-v02.mp4)

Rulers can also be used to create more immersive experiences. For example, a photo grid can take the full width of the screen, while components like search use wider margins.

![Mobile UI for a photo app showing a full-width image grid and a search bar with wide margins.](../../../../assets/images/14d999b5ee88-mp579mwo-15.png)

_Rulers allow components and media to use different margin widths_
