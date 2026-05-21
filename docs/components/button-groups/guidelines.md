---
title: "Button groups"
source_url: "https://m3.material.io/components/button-groups/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/videos/7bc21ce78aaa-m34lmgn1-Button-Group-Hero-alt-2.mp4"
  - "assets/images/83f6bcddaacc-m0di4v84-1.png"
  - "assets/images/ec696a673de5-m0diaau3-same-shapes.png"
  - "assets/images/41942a4c6940-m0dibcom-different-shapes.png"
  - "assets/videos/d8f323fd9d37-m34llls1-Button-Group-B-2.mp4"
  - "assets/images/3a8d3cab4c26-m0dijxcq-16.png"
  - "assets/images/82e4474e6cb6-m0diog82-18.png"
  - "assets/images/97aa9e737d98-mk2jyzbl-04.png"
  - "assets/images/e1d7003fb915-m4sznpeh-5.png"
  - "assets/images/3df510a84ebb-m0diztnf-6.png"
  - "assets/images/af0ade68dc19-m0dj3wcm-18-1.png"
  - "assets/images/e355234879f5-m0djrht4-1.png"
  - "assets/videos/f7b06a88e998-ma2ph39h-GM3_Expressive_Button-Groups_Guidelines_12_IA_v01.mp4"
  - "assets/videos/78094e4fddf4-ma2pii3g-Gm3_Expressive_Button-groups_Guidelines_13_IA_v01.mp4"
  - "assets/videos/4470591be69c-ma2pjcic-GM3_Expressive_Button-Groups_Guidelines_14_IA_v01.mp4"
  - "assets/videos/af9f49948459-m0fljnt9-Button-Group-D.mp4"
  - "assets/videos/c30eb619830e-m34lm16p-Button-Group-Hero-alt-2.mp4"
---

# Button groups

Button groups organize buttons and add interactions between them

## Guidelines

<video controls src="../../../assets/videos/7bc21ce78aaa-m34lmgn1-Button-Group-Hero-alt-2.mp4" title="A video call with a standard button group. Selecting the mic changes shape and color, and bounces against adjacent buttons."></video>

[Open video](../../../assets/videos/7bc21ce78aaa-m34lmgn1-Button-Group-Hero-alt-2.mp4)

## Usage

There are two variants of button groups: **standard** and **connected**. 

**Standard button groups** add interaction between adjacent buttons so they respond to each other. When a button in a standard group is selected:

-   The selected button changes shape and width

-   A selected toggle button also changes color

-   Adjacent buttons move and temporarily change width

![A welcome screen with a colorful standard button group. 2 pink icon buttons are narrow, and 1 purple button is labelled “Get started".](../../../assets/images/83f6bcddaacc-m0di4v84-1.png)

_Button groups add more expression to a product_

Mix and match the different button variants, widths, and colors to emphasize what’s important, and to visually group related buttons.

By default, all buttons in a standard group should be the same size (XS to XL) and shape (round or square).

-   Only use multiple sizes in a group for hero moments

-   Avoid mixing sizes frequently

-   Only use a different shape in a group when a button is selected, or to add meaning or contrast

![A standard button group with 3 buttons of different colors but the same square shape.](../../../assets/images/ec696a673de5-m0diaau3-same-shapes.png)

_Use the same shapes for buttons in a group, but change other properties like width and color_

![A standard button group with 3 buttons, including a round primary button. A square button is used to add items.](../../../assets/images/41942a4c6940-m0dibcom-different-shapes.png)

_Reserve shape differences in button groups for key interactions_

**Connected button groups** help people select options, switch views, or sort elements in a page. 

They behave similarly to standard groups, except they don’t affect adjacent buttons.

Connected groups should replace the baseline segmented button, which is no longer recommended.

<video controls src="../../../assets/videos/d8f323fd9d37-m34llls1-Button-Group-B-2.mp4" title="Selecting a button in a connected button group labelled “My files,” “Shared,” and “Computers.”"></video>

[Open video](../../../assets/videos/d8f323fd9d37-m34llls1-Button-Group-B-2.mp4)

Use connected button groups when the button content is related, and buttons can be selected.

![A shopping app with an option to choose the volume of an item using a connected button group.](../../../assets/images/3a8d3cab4c26-m0dijxcq-16.png)

_Closely related actions work well in a connected button group_

Connected button groups should be used for single or multi-select patterns that use toggle buttons. 

Avoid using a connected group when none of the buttons can be toggled.

![2 filters using connected button groups of 2 and 4 items. The group with 4 items has multiple buttons selected.](../../../assets/images/82e4474e6cb6-m0diog82-18.png)

_Use the connected button group with single or multi-select patterns_

### Color

Avoid mixing color styles in connected button groups; it can make selection and emphasis unclear.

![Selecting a button in a connected button group labelled “My files,” “Shared,” and “Computers.”](../../../assets/images/97aa9e737d98-mk2jyzbl-04.png)

_Don’t mix color styles in connected button groups_

## Anatomy

![1 element of a button group.](../../../assets/images/e1d7003fb915-m4sznpeh-5.png)

_Container_

### Container

The standard button group container has padding between buttons so they can animate width and shape without disrupting the product layout. 

The standard button group hugs the width of the buttons inside.

![The container hugs the buttons. Inner padding is highlighted.](../../../assets/images/3df510a84ebb-m0diztnf-6.png)

_Button groups can animate without affecting their surroundings_

The connected button group should span the width of the page or surface it’s placed on, increasing the button widths inside. 

In larger windows, consider adding a maximum width to the connected group to avoid it growing too wide.

![2 connected button groups, with 2 and 4 buttons respectively, spanning the same width on a screen, with margins from the edge.](../../../assets/images/af0ade68dc19-m0dj3wcm-18-1.png)

_Connected button groups increase the widths of each button inside and expand to their container width_

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. [More on adaptive design](https://m3.material.io/m3/pages/layout-overview/adaptive-design/)

### Resizing

Button groups should move through layouts together in a single line. They shouldn’t wrap to a second line. Multiple button groups can be stacked to keep items close together. However, button groups don’t interact vertically.

Button groups and individual buttons can be set to **fixed** or **flexible** resizing:

-   **Fixed**: Manually define the button width (narrow to wide), size (XS to XL), or padding at each window size.

-   **Flexible**: Automatically increase or decrease the width of buttons and the button group. Button groups grow until all flexible buttons are at their largest width.

If adjusting button width manually, avoid stretching icon buttons beyond the wide setting.

![Two button groups, each with distinct width, size, and padding adjusted to fit two different window sizes.](../../../assets/images/e355234879f5-m0djrht4-1.png)

_Buttons can have width, size, and padding manually adjusted to fit different window sizes_

In compact windows, consider using smaller, narrower buttons so all buttons in the button group can fit. In large and extra large windows, consider using larger, wider buttons to better fill in the available space.

Flexible buttons or button groups will automatically adjust width.

<video controls src="../../../assets/videos/f7b06a88e998-ma2ph39h-GM3_Expressive_Button-Groups_Guidelines_12_IA_v01.mp4" title="Button group is adjusted to fill the window size."></video>

[Open video](../../../assets/videos/f7b06a88e998-ma2ph39h-GM3_Expressive_Button-Groups_Guidelines_12_IA_v01.mp4)

When scaling to larger window sizes, make sure that the visual hierarchy of each button is preserved using qualities like color and size. 

For example, the primary action should remain the largest, widest, or most visually prominent button at all window sizes.

<video controls src="../../../assets/videos/78094e4fddf4-ma2pii3g-Gm3_Expressive_Button-groups_Guidelines_13_IA_v01.mp4" title="Narrow buttons in a group on a compact window become a mixture of wide and narrow buttons on a larger window."></video>

[Open video](../../../assets/videos/78094e4fddf4-ma2pii3g-Gm3_Expressive_Button-groups_Guidelines_13_IA_v01.mp4)

### Presentation

Buttons at the trailing edge of the button group can be customized to collapse into an overflow menu at smaller window sizes, and become visible again at larger sizes. Place the overflow menu at the trailing end of the group.

Buttons outside the group aren’t affected by button group behavior.

<video controls src="../../../assets/videos/4470591be69c-ma2pjcic-GM3_Expressive_Button-Groups_Guidelines_14_IA_v01.mp4" title="Buttons collapse into an overflow menu when window size shrinks, and reappear when window size expands."></video>

[Open video](../../../assets/videos/4470591be69c-ma2pjcic-GM3_Expressive_Button-Groups_Guidelines_14_IA_v01.mp4)

## Behavior

### Pressed

When a button is pressed, it changes width and shape.

In a standard button group, pressing a button also affects the width of adjacent buttons.

In a connected button group, only the shape of the pressed button changes.

<video controls src="../../../assets/videos/af9f49948459-m0fljnt9-Button-Group-D.mp4" title="In a calculator app, pressing numbers changes the width of adjacent numbers."></video>

[Open video](../../../assets/videos/af9f49948459-m0fljnt9-Button-Group-D.mp4)

### Selected

A selected button should change shape from round to square, or square to round.

<video controls src="../../../assets/videos/c30eb619830e-m34lm16p-Button-Group-Hero-alt-2.mp4" title="A video call with a standard button group. Selecting the mic changes shape and color, and bounces against adjacent buttons."></video>

[Open video](../../../assets/videos/c30eb619830e-m34lm16p-Button-Group-Hero-alt-2.mp4)
