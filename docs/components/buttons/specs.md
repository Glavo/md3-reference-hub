---
title: "Buttons"
source_url: "https://m3.material.io/components/buttons/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/69237f19b6c4-mnhhn4lk-01-3P.png"
  - "assets/images/8b8c280373e7-mmneq41m-02-3P.png"
  - "assets/images/cef051a7a748-mmneqix9-03-3P.png"
  - "assets/images/541937492a23-mmner6e7-04-3P.png"
  - "assets/images/3ce412947ae2-mmnesmjm-06-3P.png"
  - "assets/images/fcbd5765614b-mmnet1qn-07-3P.png"
  - "assets/images/4ccc8ece1219-mmneu2zl-08-3P.png"
  - "assets/images/f37fd3b5febd-mnhkhbya-09-3P.png"
  - "assets/images/667a6d930f94-mmneuv7c-10-3P.png"
  - "assets/images/39c5568fe0b1-mmnevsol-11-3P.png"
  - "assets/images/db8ffb04e721-mmnewg2s-12-3P.png"
  - "assets/images/4c1d06a35bc0-mmnexggd-13-3P.png"
  - "assets/images/7449244fafbc-mmneyf25-14-3P.png"
  - "assets/images/66b7aed7ffc0-mmneyrwe-15-3P.png"
  - "assets/images/6183600d7529-mmnezbyl-16-3P.png"
  - "assets/images/020667773421-mmnf0bsj-17-3P.png"
  - "assets/images/4d1260e9c76b-mmnf0o8e-18-3P.png"
  - "assets/images/6897638d4a1f-mmnf14u5-19-3P.png"
---

# Buttons

Buttons prompt most actions in a UI

## Specs

## Variants

![Diagram comparing buttons with toggle buttons.](../../../assets/images/69237f19b6c4-mnhhn4lk-01-3P.png)

_Default button; Toggle button_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Default | Available | Available |
| Toggle (selection) | \-- | Available |

## Configurations

![Diagram showing configurations of buttons.](../../../assets/images/8b8c280373e7-mmneq41m-02-3P.png)

_Size; Shape; Color; Small button padding_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Size | Small (default) | Available | Available |
| XS, M, L, XL | \-- | Available |  |
| Shape | Round (default) | Available | Available |
| Square | \-- | Available |  |
| Color | Elevated, filled (default), tonal, outlined, text | Available | Available |
| Small button padding | 24dp | Available | Not recommended. Use 16dp |
| 16dp | \-- | Available |  |

## Tokens & specs

Use the table's menu to select a token set. Button token sets are separated into common tokens, color, and size. [View baseline tokens](specs.md#c305d304-a6c0-466a-a48c-8d0718a29ae2)

### TOKEN_TABLE

Component: Buttons

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Button - Color - Elevated | md.comp.button.elevated | COMPONENT | For elevated buttons. |
| Button - Color - Filled | md.comp.button.filled | COMPONENT | For filled buttons. |
| Button - Color - Outlined | md.comp.button.outlined | COMPONENT | For outlined buttons. |
| Button - Color - Text | md.comp.button.text | COMPONENT | For text buttons. |
| Button - Color - Tonal | md.comp.button.tonal | COMPONENT | For tonal buttons. |
| Button - Size - Large | md.comp.button.large | COMPONENT | For large buttons. |
| Button - Size - Medium | md.comp.button.medium | COMPONENT | For medium buttons. |
| Button - Size - Small | md.comp.button.small | COMPONENT | For small buttons. |
| Button - Size - Xlarge | md.comp.button.xlarge | COMPONENT | For XL buttons. |
| Button - Size - Xsmall | md.comp.button.xsmall | COMPONENT | For XS buttons. |
| Button (baseline) | md.comp.button | COMPONENT | This token set is no longer recommended. Baseline GM3 tokens for the button. For expressive, make the button using a size (md.comp.button.large) and color (md.comp.button.filled) token set. |
| [Deprecated] Button - Tonal | md.comp.filled-tonal-button | COMPONENT | This token set is deprecated. Use `md.comp.button.tonal` instead. |
| [Deprecated] Button - Elevated | md.comp.elevated-button | COMPONENT | This token set is deprecated. Use `md.comp.button.elevated` instead. |
| [Deprecated] Button - Text | md.comp.text-button | COMPONENT | This token set is deprecated. Use `md.comp.button.text` instead. |
| [Deprecated] Button – Outlined | md.comp.outlined-button | COMPONENT | This token set is deprecated. Use `md.comp.button.outlined` instead. |
| [Deprecated] Button - Filled | md.comp.filled-button | COMPONENT | This token set is deprecated. Use `md.comp.button.filled` instead. |

## Anatomy

![Diagram labeling 3 parts of a button.](../../../assets/images/cef051a7a748-mmneqix9-03-3P.png)

_Container; Label text; Icon (optional)_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

-   There are five built-in button color styles: elevated, filled, tonal, outlined, and text

-   The default and toggle buttons use different colors

-   Toggle buttons don’t use the text style

star

Note:

These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.

![Diagram shows dark and light color schemes for buttons.](../../../assets/images/541937492a23-mmner6e7-04-3P.png)

_A. Elevated, B. Filled, C. Tonal, D. Outlined, E. Text Default; Toggle: unselected; Toggle: selected_

|  | 1\. Default | 2\. Toggle unselected | 3\. Toggle selected |
| --- | --- | --- | --- |
| Elevated container Elevated icon & label | Surface container low Primary | Surface container low Primary | Primary On primary |
| Filled container Filled icon & label | Primary On primary | Surface container On surface variant | Primary On primary |
| Tonal container Tonal icon & label | Secondary container On secondary container | Secondary container On secondary container | Secondary On secondary |
| Outlined container Outlined icon & label | Outline variant (outline) On surface variant | Outline variant (outline) On surface variant | Inverse surface Inverse on surface |
| Text icon & label | Primary | \-- | \-- |

## States

States are visual representations used to communicate the status of a component or interactive element.

### Elevated button states

The elevated button style has an elevation of 1 by default and 0 when disabled.

#### Default

![Elevated button states.](../../../assets/images/3ce412947ae2-mmnesmjm-06-3P.png)

_Enabled; Disabled; Hovered; Focused; Pressed_

#### Toggle

![Toggle elevated button states.](../../../assets/images/fcbd5765614b-mmnet1qn-07-3P.png)

_A. Unselected, B. Selected Enabled; Disabled; Hovered; Focused; Pressed_

### Filled button states

#### Default

![Filled button states.](../../../assets/images/4ccc8ece1219-mmneu2zl-08-3P.png)

_Enabled; Disabled; Hovered; Focused; Pressed_

#### Toggle

![Toggle filled button states.](../../../assets/images/f37fd3b5febd-mnhkhbya-09-3P.png)

_A. Unselected, B. Selected Enabled; Disabled; Hovered; Focused; Pressed_

### Tonal button states

#### Default

![Tonal button states.](../../../assets/images/667a6d930f94-mmneuv7c-10-3P.png)

_Enabled; Disabled; Hovered; Focused; Pressed_

#### Toggle

![Toggle tonal button states.](../../../assets/images/39c5568fe0b1-mmnevsol-11-3P.png)

_A. Unselected, B. Selected Enabled; Disabled; Hovered; Focused; Pressed_

### Outlined button states

The outlined button’s container fill is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed.

#### Default

![Outlined button states.](../../../assets/images/db8ffb04e721-mmnewg2s-12-3P.png)

_Enabled; Disabled; Hovered; Focused; Pressed_

#### Toggle

![Outlined button states.](../../../assets/images/4c1d06a35bc0-mmnexggd-13-3P.png)

_Enabled; Disabled; Hovered; Focused; Pressed_

### Text button style states

The text button’s container is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed. There is no toggle text button.

![Default text button style states.](../../../assets/images/7449244fafbc-mmneyf25-14-3P.png)

_Enabled; Disabled; Hovered; Focused; Pressed_

## Shape morph

### Pressed state

When pressed, buttons can morph to become more square. Both round and square buttons should have the same pressed shape.

The corner radius value differs for each button size. [See full button corner measurements](specs.md#b1f39738-6f3a-409b-8f08-4cab6d78d756)

![Shape changes of a button.](../../../assets/images/66b7aed7ffc0-mmneyrwe-15-3P.png)

_A. Round button, B. Square button Enabled; Hovered; Pressed_

### When selected

In addition to changing shape when pressed, toggle buttons also change the resting shape from round (unselected) to square (selected). 

If the resting unselected shape is square, the selected shape should be round.

![Shape changes of a toggle button.](../../../assets/images/6183600d7529-mmnezbyl-16-3P.png)

_A. Round button, B. Square button Enabled; Hovered; Pressed; Selected_

## Measurements

![Diagram of measurements of all button sizes.](../../../assets/images/020667773421-mmnf0bsj-17-3P.png)

_Padding and size measurements of each button size Extra small; Small; Medium; Large; Extra large_

### Target areas

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.

![Diagram of small button target areas.](../../../assets/images/4d1260e9c76b-mmnf0o8e-18-3P.png)

_A. Extra small B. Small Round button; Button with icon; Square button_

### Corner sizes

![Diagram of corner radii of buttons.](../../../assets/images/6897638d4a1f-mmnf14u5-19-3P.png)

_/_

|  | XS | S | M | L | XL |
| --- | --- | --- | --- | --- | --- |
| A. Round button | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp | 8dp | 12dp | 16dp | 16dp |

## Baseline tokens

Use the table's menu to switch token sets. The baseline button token sets are organized by color.

### TOKEN_TABLE

Component: Buttons

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Button - Color - Elevated | md.comp.button.elevated | COMPONENT | For elevated buttons. |
| Button - Color - Filled | md.comp.button.filled | COMPONENT | For filled buttons. |
| Button - Color - Outlined | md.comp.button.outlined | COMPONENT | For outlined buttons. |
| Button - Color - Text | md.comp.button.text | COMPONENT | For text buttons. |
| Button - Color - Tonal | md.comp.button.tonal | COMPONENT | For tonal buttons. |
| Button - Size - Large | md.comp.button.large | COMPONENT | For large buttons. |
| Button - Size - Medium | md.comp.button.medium | COMPONENT | For medium buttons. |
| Button - Size - Small | md.comp.button.small | COMPONENT | For small buttons. |
| Button - Size - Xlarge | md.comp.button.xlarge | COMPONENT | For XL buttons. |
| Button - Size - Xsmall | md.comp.button.xsmall | COMPONENT | For XS buttons. |
| Button (baseline) | md.comp.button | COMPONENT | This token set is no longer recommended. Baseline GM3 tokens for the button. For expressive, make the button using a size (md.comp.button.large) and color (md.comp.button.filled) token set. |
| [Deprecated] Button - Tonal | md.comp.filled-tonal-button | COMPONENT | This token set is deprecated. Use `md.comp.button.tonal` instead. |
| [Deprecated] Button - Elevated | md.comp.elevated-button | COMPONENT | This token set is deprecated. Use `md.comp.button.elevated` instead. |
| [Deprecated] Button - Text | md.comp.text-button | COMPONENT | This token set is deprecated. Use `md.comp.button.text` instead. |
| [Deprecated] Button – Outlined | md.comp.outlined-button | COMPONENT | This token set is deprecated. Use `md.comp.button.outlined` instead. |
| [Deprecated] Button - Filled | md.comp.filled-button | COMPONENT | This token set is deprecated. Use `md.comp.button.filled` instead. |
