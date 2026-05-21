---
title: "Button groups"
source_url: "https://m3.material.io/components/button-groups/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/903458bca688-ma6nan75-01-3P.png"
  - "assets/images/45e8f5419300-mae9tpw8-standard.png"
  - "assets/images/9bc91477cad8-ma6nc084-anatomy.png"
  - "assets/images/62ae79f8877f-ma6ncj54-common-layouts.png"
  - "assets/images/f2b12ed2948b-mliwoj5d-05.png"
  - "assets/videos/4ffc63a9a39b-mack7ok2-GM3_Expressive_Button-Group_Selection-activation_Standard_3P_AI_v01.mp4"
  - "assets/videos/657c73ea9207-mack8xlo-GM3_Button-group_Specs_Selection-&-activation_Connected_IA_v01.mp4"
  - "assets/images/5e37d4e4e7f6-mobjzmlh-07-key01-3P.png"
  - "assets/images/e52ac7772f2a-mhsvti2a-08-3P.png"
  - "assets/images/1c4064893344-mhsvu5c7-09-3P.png"
  - "assets/images/45704a567ee3-mhsvuqev-10-3P.png"
  - "assets/images/eda2fd2bb4ca-ma6nhwkj-padding.png"
  - "assets/images/aec841637b39-ma6nj8kr-connected-padding.png"
  - "assets/images/2eaacf6db53f-ma6njl4y-connected.png"
  - "assets/images/978d828f189b-ma6nk25f-mind-width.png"
  - "assets/images/38dfa5046441-ma6nkg98-density.png"
---

# Button groups

Button groups organize buttons and add interactions between them

## Specs

## Variants

![Various colors and shapes of standard and connected button groups.](../../../assets/images/903458bca688-ma6nan75-01-3P.png)

_Standard button group; Connected button group_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Standard button group | \-- | Available |
| Connected button group | Available as segmented button | Available |

## Configurations

![Five sizes of button groups and two shapes of button groups.](../../../assets/images/45e8f5419300-mae9tpw8-standard.png)

_Configurations for both variants of button groups: Extra small; Small; Medium; Large; Extra large; Single-select and multi-select; Round and square_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Size | XS, S, M, L, XL | \-- | Available |
| Default shape | Round, square | \-- | Available |
| Selection | Single-select, multi-select, selection-required | Available as segmented button | Available |

## Tokens & specs

Standard and connected button group tokens are organized by size. Select the variant and size from the token set menu. Go to the [button](https://m3.material.io/m3/pages/common-buttons/specs/) and [icon button](https://m3.material.io/m3/pages/icon-buttons/specs/) pages to view their tokens. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

Component: Button groups

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Button group connected - Size - Large | md.comp.button-group.connected.large | COMPONENT | For large connected button groups. |
| Button group connected - Size - Medium | md.comp.button-group.connected.medium | COMPONENT | For medium connected button groups. |
| Button group connected - Size - Small | md.comp.button-group.connected.small | COMPONENT | For small connected button groups. |
| Button group connected - Size - Xlarge | md.comp.button-group.connected.xlarge | COMPONENT | For XL connected button groups. |
| Button group connected - Size - Xsmall | md.comp.button-group.connected.xsmall | COMPONENT | For XS connected button groups. |
| Button group standard - Size - Large | md.comp.button-group.standard.large | COMPONENT | For large standard button groups. |
| Button group standard - Size - Medium | md.comp.button-group.standard.medium | COMPONENT | For medium standard button groups. |
| Button group standard - Size - Small | md.comp.button-group.standard.small | COMPONENT | For small standard button groups. |
| Button group standard - Size - Xlarge | md.comp.button-group.standard.xlarge | COMPONENT | For XL standard button groups. |
| Button group standard - Size - Xsmall | md.comp.button-group.standard.xsmall | COMPONENT | For XS standard button groups. |

## Anatomy

Button groups are invisible containers that add padding between buttons and modify button shape. They don’t contain any buttons by default.

![The container outlined on both variants of button groups.](../../../assets/images/9bc91477cad8-ma6nc084-anatomy.png)

_Container_

### Common layouts

Mix and match buttons and icon buttons for different scenarios.

![4 common layouts of button groups.](../../../assets/images/62ae79f8877f-ma6ncj54-common-layouts.png)

_Label buttons; Label buttons and icon buttons; Extra small icon buttons; Large icon buttons_

### Color

Button groups have no color properties. They can use the default button or toggle button color styles, like filled, tonal, and outlined. Avoid using standard icon buttons or text buttons, as they have no container treatment.

![The container outlined on both variants of button groups.](../../../assets/images/f2b12ed2948b-mliwoj5d-05.png)

_Filled; Tonal; Outlined; Elevated_

## Selection & activation

**Standard button groups** add interaction between adjacent buttons when a button is selected or activated.

This interaction changes the width, shape, and padding of the selected or activated button, which adjusts the width of buttons directly next to it.

<video controls src="../../../assets/videos/4ffc63a9a39b-mack7ok2-GM3_Expressive_Button-Group_Selection-activation_Standard_3P_AI_v01.mp4" title="A selected button in a standard group bounces against its adjacent button, changing their widths."></video>

[Open video](../../../assets/videos/4ffc63a9a39b-mack7ok2-GM3_Expressive_Button-Group_Selection-activation_Standard_3P_AI_v01.mp4)

**Connected button groups** don’t add any interaction between buttons when selected or activated. 

They only affect the shape of the button being selected or activated.

<video controls src="../../../assets/videos/657c73ea9207-mack8xlo-GM3_Button-group_Specs_Selection-&-activation_Connected_IA_v01.mp4" title="A selected button in a connected button group only changes its own shape."></video>

[Open video](../../../assets/videos/657c73ea9207-mack8xlo-GM3_Button-group_Specs_Selection-&-activation_Connected_IA_v01.mp4)

## States

### Standard button group

When a button is pressed, standard button groups modify the width and shape of that button and adjacent buttons.

![5 states of a standard button group.](../../../assets/images/5e37d4e4e7f6-mobjzmlh-07-key01-3P.png)

_Enabled; Disabled; Hovered; Focused; Pressed_

When a toggle button is selected in a standard button group, its shape should change between square and round. The color should change according to the [button specs](../buttons/specs.md).

![5 states of a standard button group with toggle buttons.](../../../assets/images/e52ac7772f2a-mhsvti2a-08-3P.png)

_Enabled; Disabled; Hovered; Focused; Pressed_

### Connected button group

Connected button groups have different shape changes than standard button groups. Selecting a button does not affect adjacent buttons.

![5 states of a segmented button group.](../../../assets/images/1c4064893344-mhsvu5c7-09-3P.png)

_Connected button group unselected states: Enabled; Disabled; Hovered; Focused; Pressed_

![4 states of a segmented button group with toggle buttons.](../../../assets/images/45704a567ee3-mhsvuqev-10-3P.png)

_Connected button group selected states: Enabled; Hovered; Focused; Pressed_

## Measurements

### Standard button group

Standard groups apply padding between all buttons. The amount of padding changes based on button size to ensure a minimum accessible target size of 48dp. More details on padding: [Button specs](../buttons/specs.md), [icon button specs](../icon-buttons/specs.md)

![Standard button group padding measurements.](../../../assets/images/eda2fd2bb4ca-ma6nhwkj-padding.png)

_Standard button group inner padding: XS: 18dp; S: 12dp; M: 8dp; L: 8dp; XL: 8dp_

### Connected button group

For all connected button groups, use 2dp padding. This provides visual consistency at scale.

![Connected button group padding and corner radius measurements.](../../../assets/images/aec841637b39-ma6nj8kr-connected-padding.png)

_Round connected button group inner padding is 2dp at every size. The outer shape is fully round, and the inner shape remains square with the following corner sizes: XS: 4dp; S: 8dp; M: 8dp; L: 16dp; XL: 20dp; /_

![Connected button group padding and corner radius measurements for square buttons.](../../../assets/images/2eaacf6db53f-ma6njl4y-connected.png)

_Square connected button group inner padding is 2dp at every size. The outer shape has the following corner sizes: XS: 4dp; S: 8dp; M: 8dp; L: 16dp; XL: 20dp_

### Minimum widths

Extra small and small connected button groups have 48dp target areas and a minimum width of 48dp.

![48x48dp accessible target areas on the XS and S connected button groups.](../../../assets/images/978d828f189b-ma6nk25f-mind-width.png)

_Extra small; Small_

## Density

Button groups adapt to density of the buttons inside. [More on density](../../foundations/layout/grids-spacing/density.md)

![Connected button groups at 0, -1, -2, and -3 density.](../../../assets/images/38dfa5046441-ma6nkg98-density.png)

_Button groups adapt to the height of the buttons inside, including when density is applied_
