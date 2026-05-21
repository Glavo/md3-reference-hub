---
title: "Split buttons"
source_url: "https://m3.material.io/components/split-button/specs"
lastmod: "2026-02-05"
snapshot_at: "2026-05-21T03:17:26.113Z"
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

![1 type of split button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3o4mdr-1-3P.png?alt=media&token=1ccc3f10-8e6e-42e6-b8b8-1c0c728e68e2>)

_/_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Split button | \-- | Available |

## Configurations

![4 colors and 5 sizes of split buttons.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3o55u8-2-3P.png?alt=media&token=9bebc1e1-45eb-4425-853d-06e6a5182a32>)

_Color configurations: Elevated, filled, tonal, outlined; Size configurations: XS, S, M, L, XL_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Size | XS, S, M, L, XL | \-- | Available |
| Color | Elevated, filled, tonal, outlined | \-- | Available |

## Tokens & specs

Use the table's menu to select a token set. Split button token sets are organized by size. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

Component: Split buttons

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Button - Color - Elevated | md.comp.button.elevated | COMPONENT | For elevated buttons. |
| Button - Color - Filled | md.comp.button.filled | COMPONENT | For filled buttons. |
| Button - Color - Outlined | md.comp.button.outlined | COMPONENT | For outlined buttons. |
| Button - Color - Tonal | md.comp.button.tonal | COMPONENT | For tonal buttons. |
| Split button - Size - Large | md.comp.split-button.large | COMPONENT | For large split buttons. |
| Split button - Size - Medium | md.comp.split-button.medium | COMPONENT | For medium split buttons. |
| Split button - Size - Small | md.comp.split-button.small | COMPONENT | For small split buttons. |
| Split button - Size - Xlarge | md.comp.split-button.xlarge | COMPONENT | For XL split buttons. |
| Split button - Size - Xsmall | md.comp.split-button.xsmall | COMPONENT | For XS split buttons. |

## Anatomy

![4 elements of a split button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3o642r-3-3P.png?alt=media&token=01e1f664-be22-431f-adae-f93b4adba0d0>)

_Leading button; Icon; Label text; Trailing button_

The leading button in split buttons can have an icon, label text, or both. The trailing button should always have a menu icon.

![3 customizations of the leading button in the split button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3o6fum-4-3P.png?alt=media&token=97f5490e-2d3f-47fc-af1b-146fa020f08f>)

_Label + icon; Label; Icon_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

Split buttons use the same color schemes as standard buttons. However, unlike toggle buttons, the split button color doesn’t change when selected—only a state layer is applied.

Split buttons use the same colors and state layers as buttons, shown in the following token module. [Go to buttons](../buttons/overview.md) for more details.

![4 color roles of the split button when unselected and selected in light and dark theme.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3oa90h-5-3P.png?alt=media&token=e3ae73ad-cbc5-4cd7-adc7-d947456fd70b>)

_A: Unselected, B: Selected trailing icon / Elevated; Filled; Tonal; Outlined_

### TOKEN_TABLE

Component: Split buttons

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Button - Color - Elevated | md.comp.button.elevated | COMPONENT | For elevated buttons. |
| Button - Color - Filled | md.comp.button.filled | COMPONENT | For filled buttons. |
| Button - Color - Outlined | md.comp.button.outlined | COMPONENT | For outlined buttons. |
| Button - Color - Tonal | md.comp.button.tonal | COMPONENT | For tonal buttons. |
| Split button - Size - Large | md.comp.split-button.large | COMPONENT | For large split buttons. |
| Split button - Size - Medium | md.comp.split-button.medium | COMPONENT | For medium split buttons. |
| Split button - Size - Small | md.comp.split-button.small | COMPONENT | For small split buttons. |
| Split button - Size - Xlarge | md.comp.split-button.xlarge | COMPONENT | For XL split buttons. |
| Split button - Size - Xsmall | md.comp.split-button.xsmall | COMPONENT | For XS split buttons. |

## States

States are visual representations used to communicate the status of a component or an interactive element. 

Split button states use the same colors and state layers as buttons and icon buttons. Go to those specs for details.

### Leading button shape

The inner corners change shape for hovered, focused, and pressed states.

![5 states of the leading button in the split button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3oaphp-6-3P.png?alt=media&token=b62c03ab-eed1-43e8-b6cd-14619a24b107>)

_Enabled; Disabled; Hovered; Focused; Pressed, pressed with focus_

### Trailing button shape

The inner corners change shape for hovered, focused, and pressed states, and the icon becomes centered when selected.

![6 states of the trailing menu button in the split button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3ob3p2-7-3P.png?alt=media&token=26516240-0901-4684-85a7-a42eb3336c7b>)

_Enabled; Disabled; Hovered; Focused; Pressed, pressed with focus; Selected, selected with focus_

## Measurements

Text and icons are optically centered when the buttons are asymmetrical. They’re centered normally when symmetrical.

![Padding and size measurements of the split button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma5hz28q-8-3P.png?alt=media&token=66b410e7-ae0a-4f9a-bf57-d2b1bbb5910d>)

_Menu icon offset when unselected: XS: -1dp from center; S: -1dp from center; M: -2dp from center; L: -3dp from center; XL: -6dp from center_

The inner corner radius changes depending on button sizing. The space should always be 2dp.

![Inner padding and inner corner measurements of the split button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3ocky0-9-3P.png?alt=media&token=9524b24f-f746-4de8-8544-26ddcae0df17>)

_Extra small 4dp; Small 4dp; Medium 4dp; Large 8dp; Extra large 12dp_
