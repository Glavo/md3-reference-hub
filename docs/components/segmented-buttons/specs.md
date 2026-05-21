---
title: "Segmented buttons"
source_url: "https://m3.material.io/components/segmented-buttons/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/a5c87cac171f-ma6l9syf-1.png"
  - "assets/images/53be60785054-ma6lafzx-2.png"
  - "assets/images/970c0380fb29-ma6law70-3b.png"
  - "assets/images/8582229b5f74-ma6lbdzb-4b.png"
  - "assets/images/266b6c355664-mmp8rn0c-5-3P.png"
  - "assets/images/e8a3a3d38ec4-ma6lc5hl-6.png"
---

# Segmented buttons

Segmented buttons help people select options, switch views, or sort elements

## Specs

star

Note:

Segmented buttons are no longer recommended in the Material 3 expressive update. For those who have updated, use the [connected button group](https://m3.material.io/m3/pages/button-groups/overview/) instead, which has mostly the same functionality but with an updated visual design.

![Diagram of segmented button indicating 3 parts of its anatomy.](../../../assets/images/a5c87cac171f-ma6l9syf-1.png)

_Container; Icon (optional for unselected state); Label text_

## Tokens and specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

Component: Segmented buttons

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Segmented button - Outlined | md.comp.outlined-segmented-button | COMPONENT | This component is not recommended. Use connected button groups instead. For outlined segmented buttons. |

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Diagram of segmented button indicating its color mappings](../../../assets/images/53be60785054-ma6lafzx-2.png)

_Segmented button color roles used for light and dark schemes: On surface; Outline; Secondary container; On secondary container_

## States

States are visual representations used to communicate the status of a component or interactive element.  [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

### Unselected

![Side by side view of segmented buttons with 5 unselected states.](../../../assets/images/970c0380fb29-ma6law70-3b.png)

_Unselected button states: Enabled; Disabled; Hovered; Focused; Pressed; /_

### Selected

![Side by side view of segmented buttons with 4 selected states.](../../../assets/images/8582229b5f74-ma6lbdzb-4b.png)

_Selected button states: Selected; Hovered on selected; Focused on selected; Pressed on selected_

## Measurements

![Diagram indicating layout values, paddings, and target size for segmented buttons](../../../assets/images/266b6c355664-mmp8rn0c-5-3P.png)

_Padding and container size; Target size_

| Attribute | Value |
| --- | --- |
| Container width | Dynamic based on labels |
| Segment width | Container width / total segments (Example: 1/3) |
| Height | 40dp |
| Outline width | 1dp |
| Label alignment | Center |
| Left/right padding | Min 12dp |
| Padding between elements | 8dp |
| Target size | 48dp |

### Density

Density can be used in denser UIs where space is limited. Density is only applied to the height.

![Side by side view of segmented buttons with 4 different density heights](../../../assets/images/e8a3a3d38ec4-ma6lc5hl-6.png)

_Each step down in density removes 4dp from the height_
