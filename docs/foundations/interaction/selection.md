---
title: "Selection"
source_url: "https://m3.material.io/foundations/interaction/selection"
lastmod: "2025-09-26"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "foundations"
assets:
  - "assets/images/70fe9c1e77cf-m1qhf1tb-1.png"
  - "assets/images/0d94b318f636-lwvowprh-2.png"
  - "assets/images/a71a80ac45fc-lfwnm6vf-1P-Touch-2x.png"
  - "assets/videos/459fc0d66720-lwvozn9v-GM3-Foundations-Interaction-Selection-Guidelines-2-v02.mp4"
  - "assets/images/13db9b9c2bc0-lfwnntlu-1P-Larger-selection-do.png"
  - "assets/images/3f4dc2a6f06f-lfwo38nu-1P-Larger-selection-dont.png"
  - "assets/images/95dc04e70036-lfwnp3as-1P-Click.png"
---

# Selection

Selection is how people interact with UI elements or choose which items to act on

-   Selection is shown through changes to surface color or other visible elements
-   An entire component can be selected, or just certain parts in a component
-   Selection can be performed via tap, cursor, keyboard, or voice

## Resources

Type

Link

Status

Design

[Design Kit (Figma)](http://goo.gle/m3-design-kit)

Available

## Selection indicators

Selections are displayed using a check mark icon, a checkbox component, a change in surface color, or a combination.

Selections are inherited by the following components: 

-   Cards
-   Checkboxes
-   Chips
-   Data tables
-   Icon buttons
-   List items
-   Menu items
-   Pickers
-   Radio buttons
-   Segmented buttons
-   Sliders
-   Switch

![Seven types of selected  components.](../../../assets/images/70fe9c1e77cf-m1qhf1tb-1.png)

_Selected components:Segmented buttonsChipsList items CheckboxesRadio buttons SwitchSlider_

The following components use an active indicator to represent which item is currently selected:

-   Navigation bar
-   Navigation drawer
-   Navigation rail
-   Tabs

The color and shape of the active indicator varies between components. In these components, only one item should be selected at a time.

![Tabs and navigation drawer with one destination item selected. Selection is identified with an active indicator.](../../../assets/images/0d94b318f636-lwvowprh-2.png)

_Selected components with active indicators:TabNavigation drawer_

## Types of selection

### Touch

On touch devices, select items using:

-   Long press touch or two-finger touch
-   Selection shortcut, if available, such as tapping an avatar

![Touch used to select 3 list items one after another.](../../../assets/images/a71a80ac45fc-lfwnm6vf-1P-Touch-2x.png)

_Items in a list selected via touch_

### Entering and exiting selection mode

To select an item and enter selection mode, long press the item or use a shortcut, such as tapping the item’s avatar. To select additional items, tap each of them.

To exit a selection mode, tap each selected item until they’re unselected, or tap an action on the toolbar.

<video controls src="../../../assets/videos/459fc0d66720-lwvozn9v-GM3-Foundations-Interaction-Selection-Guidelines-2-v02.mp4" title="List items are tapped to select and unselect them."></video>

[Open video](../../../assets/videos/459fc0d66720-lwvozn9v-GM3-Foundations-Interaction-Selection-Guidelines-2-v02.mp4)

### Larger selections

To select multiple items simultaneously, long press and drag across items. Don’t use this gesture combination if it is already in use to pick up and move items, like cards.

![Long press and drag used to select multiple images in a photo feed.](../../../assets/images/13db9b9c2bc0-lfwnntlu-1P-Larger-selection-do.png)

_Long press and drag can be used together to select items in batches_

![Long press and drag combination used to move cards, but can’t be used to batch select items while in use.](../../../assets/images/3f4dc2a6f06f-lfwo38nu-1P-Larger-selection-dont.png)

_If the long press and drag combination is already in use to pick up and move components, like cards, then the combined gesture can’t also be used for selecting items in batches_

### Click

On desktop, checkboxes are always visible when selection is the primary activity. When selection is secondary, checkboxes (or other indicators) are displayed:

-   As a single checkbox for that item on hover
-   For all items after one item is selected

To make a selection, hover over an item to reveal a checkbox. The checkbox can then be clicked.

![Checkboxes being selected and unselected.](../../../assets/images/95dc04e70036-lfwnp3as-1P-Click.png)

_Checkboxes are visible by default in this table because selection is a primary activity_
