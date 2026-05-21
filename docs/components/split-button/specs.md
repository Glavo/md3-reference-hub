---
title: "Split buttons"
source_url: "https://m3.material.io/components/split-button/specs"
lastmod: "2026-02-05"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/73b51fe13afa-ma3o4mdr-1-3P.png"
  - "assets/images/52851f14611f-ma3o55u8-2-3P.png"
  - "assets/images/f20a87ca8fe3-ma3o642r-3-3P.png"
  - "assets/images/bffadcabdca0-ma3o6fum-4-3P.png"
  - "assets/images/0d86f0708560-ma3oa90h-5-3P.png"
  - "assets/images/e440206d783e-ma3oaphp-6-3P.png"
  - "assets/images/da447c8cc759-ma3ob3p2-7-3P.png"
  - "assets/images/fc385185ceda-ma5hz28q-8-3P.png"
  - "assets/images/3f6dad905322-ma3ocky0-9-3P.png"
---

# Split buttons

Split buttons open a menu to give people more options related to an action

## Specs

## Variants

![1 type of split button.](../../../assets/images/73b51fe13afa-ma3o4mdr-1-3P.png)

__

Variant

M3

M3 Expressive

Split button

\--

Available

## Configurations

![4 colors and 5 sizes of split buttons.](../../../assets/images/52851f14611f-ma3o55u8-2-3P.png)

_Color configurations: Elevated, filled, tonal, outlinedSize configurations: XS, S, M, L, XL_

Category

Configuration

M3

M3 Expressive

Size

XS, S, M, L, XL

\--

Available

Color

Elevated, filled, tonal, outlined

\--

Available

## Tokens & specs

Use the table's menu to select a token set. Split button token sets are organized by size. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

- **system:** Google Material 3

## Anatomy

![4 elements of a split button.](../../../assets/images/f20a87ca8fe3-ma3o642r-3-3P.png)

_Leading buttonIconLabel textTrailing button_

The leading button in split buttons can have an icon, label text, or both. The trailing button should always have a menu icon.

![3 customizations of the leading button in the split button.](../../../assets/images/bffadcabdca0-ma3o6fum-4-3P.png)

_Label + iconLabelIcon_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

Split buttons use the same color schemes as standard buttons. However, unlike toggle buttons, the split button color doesn’t change when selected—only a state layer is applied.

Split buttons use the same colors and state layers as buttons, shown in the following token module. [Go to buttons](../buttons/overview.md) for more details.

![4 color roles of the split button when unselected and selected in light and dark theme.](../../../assets/images/0d86f0708560-ma3oa90h-5-3P.png)

_A: Unselected, B: Selected trailing iconElevatedFilledTonalOutlined_

### TOKEN_TABLE

- **system:** Google Material 3

## States

States are visual representations used to communicate the status of a component or an interactive element. 

Split button states use the same colors and state layers as buttons and icon buttons. Go to those specs for details.

### Leading button shape

The inner corners change shape for hovered, focused, and pressed states.

![5 states of the leading button in the split button.](../../../assets/images/e440206d783e-ma3oaphp-6-3P.png)

_EnabledDisabledHoveredFocusedPressed, pressed with focus_

### Trailing button shape

The inner corners change shape for hovered, focused, and pressed states, and the icon becomes centered when selected.

![6 states of the trailing menu button in the split button.](../../../assets/images/da447c8cc759-ma3ob3p2-7-3P.png)

_EnabledDisabledHoveredFocusedPressed, pressed with focusSelected, selected with focus_

## Measurements

Text and icons are optically centered when the buttons are asymmetrical. They’re centered normally when symmetrical.

![Padding and size measurements of the split button.](../../../assets/images/fc385185ceda-ma5hz28q-8-3P.png)

_Menu icon offset when unselected:XS: -1dp from centerS: -1dp from centerM: -2dp from centerL: -3dp from centerXL: -6dp from center_

The inner corner radius changes depending on button sizing. The space should always be 2dp.

![Inner padding and inner corner measurements of the split button.](../../../assets/images/3f6dad905322-ma3ocky0-9-3P.png)

_Extra small 4dpSmall 4dpMedium 4dpLarge 8dpExtra large 12dp_
