---
title: "Chips"
source_url: "https://m3.material.io/components/chips/accessibility"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/42035becc577-m99z66s4-01.png"
  - "assets/videos/45c424ffcd21-m9a4c1yw-GM3_Chips_Guidelines_07_IA_v01.mp4"
  - "assets/videos/fa71311341f8-m9a4cs1u-GM3_Chips_Guidelines_08_IA_v01.mp4"
  - "assets/images/2f93d0d1f8d0-mderzcwe-02.png"
  - "assets/images/e955111e41b9-mderoau5-25.png"
  - "assets/images/1d8545f7507c-md78nzr3-04.png"
  - "assets/images/ff9006ee9499-mdfzbasm-06.png"
  - "assets/images/6b395598ebf7-mn7orxd0-09.png"
  - "assets/images/a74b418d1d88-mn7p0i6r-10.png"
  - "assets/images/07762d9e0343-mn7ot1xs-11.png"
  - "assets/images/c9059c8aee9f-mn7p0649-11-(1).png"
---

# Chips

Chips help people enter information, make selections, filter content, or trigger actions

## Accessibility

## Use cases

People should be able to do the following with assistive technology:

-   Use a chip to perform an action
-   Navigate to a chip 
-   Activate a chip

## Interaction & style

The chip label needs at least 3:1 contrast with the background.

A chip that performs an action should present the same semantics as a button to a platform's accessibility API.

![The chip label needs to pass 3:1 contrast.](../../../assets/images/42035becc577-m99z66s4-01.png)

_High contrast helps differentiate chips clustered together_

### Horizontal overflow

When there are too many chips to fit on one row, provide a way to display them all at once and avoid scrolling. 

**Reflow method:** Use a filter chip as a leading element to reflow the horizontal list. This should shift down the content below and make room for all chips to show.

<video controls src="../../../assets/videos/45c424ffcd21-m9a4c1yw-GM3_Chips_Guidelines_07_IA_v01.mp4" title="Selecting a leading button pushes chips previously reachable only by scroll below, making them all visible."></video>

[Open video](../../../assets/videos/45c424ffcd21-m9a4c1yw-GM3_Chips_Guidelines_07_IA_v01.mp4)

**Menu method:** Create a leading button to display all chip options in a menu. Use this option to avoid shifting the position of the content below.

Don’t use the menu method on chips with a second action, like a remove icon.

<video controls src="../../../assets/videos/fa71311341f8-m9a4cs1u-GM3_Chips_Guidelines_08_IA_v01.mp4" title="Selecting a filter button produces a menu with all previously hidden chips visible."></video>

[Open video](../../../assets/videos/fa71311341f8-m9a4cs1u-GM3_Chips_Guidelines_08_IA_v01.mp4)

### Avoid applying density by default

Don't apply density to chips by default — this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure that this density setting can be easily reverted when it's active, keep all the targets to change it at minimum 48x48 CSS pixels each.

## Keyboard navigation

Keys

Actions

**Tab**

Moves focus to enabled chip or chip group

**Space** or **Enter**

Activates, selects, or deselects the focused chip

**Backspace** or **Delete**

Removes currently focused input chip

**Arrows**

Moves focus between chips

## Labeling elements

Element

A11y label

Role (Web)

Role (Android Views (MDC-Android))

Role (Jetpack Compose)

Image / Icon within chip

Hide image

\-

\-

\-

Basic chip (one action)

“{chip content}”

gridcell

button

button

Selectable chip

“{chip content}”

gridcell

radio button

checkbox

Remove icon (no other action)

“Remove {chip content}”

\-

\-

\-

Two actions (e.g., select + remove)

“{chip content}.” Then

“Remove {chip content}”.

button or checkbox

button or checkbox

button or checkbox

The accessibility label for a chip is the chip's label text. Additional actions, like remove, are labeled separately.

![Accessibility tags for a chip.](../../../assets/images/2f93d0d1f8d0-mderzcwe-02.png)

_Accessibility tags should include both the label and role_

### Multi-select

For multi-select chip sets, **Space** or **Enter** will select the focused chip and allow you to select all of the chips. **Space** or **Enter** will also deselect a focused selected chip.

![Accessibility tags for a multi-select chip.](../../../assets/images/e955111e41b9-mderoau5-25.png)

_While multiple chips can be selected, only one can be in focus_

### Drop-down list

The accessibility label should align with each list item’s text label. 

For list items with text and an icon, the accessibility label should be marked as decorative to avoid redundant verbalizations.

![Accessibility tags for a drop-down list chip.](../../../assets/images/1d8545f7507c-md78nzr3-04.png)

_The accessibility label should be the text label_

### Input chip remove action

Display the remove icon whenever a chip can be removed. On mobile, if remove is the only chip action, the remove icon isn't necessary. Instead the chip can be removed by selecting it and pressing the **Delete** key on the keyboard.

Each chip is a focusable element. 

-   If a chip only has a remove icon, the entire chip and icon are one focusable element. 
-   If a chip has a second action, like select, then the chip content and remove icon are two separate focusable elements.

![A focused remove action within a chip.](../../../assets/images/ff9006ee9499-mdfzbasm-06.png)

_The remove action is focused when the chip can also be selected_

### Showing chip interactivity

Material requires that chips use a secondary indicator to show that they are interactive in context, allowing users with low vision and cognitive disabilities to see them.

Use one of the following methods: 

-   Add a label before the chip group suggesting interaction, such as **Select type**

![Label saying “Select type” above a series of chips, with “Extra soft” selected.](../../../assets/images/6b395598ebf7-mn7orxd0-09.png)

_Labels introducing a chip group can indicate that they are selectable_

-   Provide interactive page context, such as **Filter results**, indicating chips can be selected to narrow results

![Page context saying “Filter results” above chips listing different categories.](../../../assets/images/a74b418d1d88-mn7p0i6r-10.png)

_Page context can indicate how search results will be narrowed by selecting chips_

-   Use the **outline** color role, instead of **outline variant**, to ensure a minimum 3:1 contrast

-   Include an interactive chip label, such as **Turn on lights**, or leading icon

![A selectable chip with more pronounced outline stroke.](../../../assets/images/07762d9e0343-mn7ot1xs-11.png)

_Chips can show they are interactive with a darker outline color stroke_

![A chip labeled “Turn on lights” with a leading icon related to lights.](../../../assets/images/c9059c8aee9f-mn7p0649-11-(1).png)

_Chips can also use a leading icon or label to show interactivity_
