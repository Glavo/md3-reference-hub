---
title: "Switch"
source_url: "https://m3.material.io/components/switch/specs"
lastmod: "2026-01-06"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/6f5d06fe436f-mg66415n-01-3P.png"
  - "assets/images/91d6f68e8e51-mg66ckmz-02-3P.png"
  - "assets/images/ed601f47c795-mg66fz7u-03-3P.png"
  - "assets/images/0b2419a2bd7c-mg66iwsh-04-3P.png"
  - "assets/images/e7651cbc1b3e-mg66jzjg-05-3P.png"
  - "assets/images/b6027c0c94c7-mg66kbil-06-3P.png"
  - "assets/images/50964c685b37-mg66mxl5-07-3P.png"
  - "assets/images/a4a09dc75860-mg66nbzr-08-3P.png"
  - "assets/images/240ac99d8660-mg66of2m-09-3P.png"
---

# Switch

Switches toggle the selection of an item on or off

## Specs

![3 elements of a switch.](../../../assets/images/6f5d06fe436f-mg66415n-01-3P.png)

_Track Handle (formerly "thumb")Icon_

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

- **system:** Google Material 3

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![6 color roles of a switch in light and dark themes.](../../../assets/images/91d6f68e8e51-mg66ckmz-02-3P.png)

_Switch color roles used for light and dark themes:Surface container highestOutlineOutlinePrimaryOn primaryOn primary container_

### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

![The large body text adjacent to switches uses "on surface" color and the body text uses "on surface variant."](../../../assets/images/ed601f47c795-mg66fz7u-03-3P.png)

_The text label uses on surface. Supporting text may use on surface variant._

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states)

![5 states of a switch shown in light and dark themes.](../../../assets/images/0b2419a2bd7c-mg66iwsh-04-3P.png)

_Enabled Hovered Focused Pressed Disabled_

[State specs are in the token module above](specs.md#3708644e-b4d7-4237-bb0a-7afeeae4a9b0)

## Measurements

![Measurements of switches without icons.](../../../assets/images/e7651cbc1b3e-mg66jzjg-05-3P.png)

_Switches without icons_

![Measurements of pressed switches without icons.](../../../assets/images/b6027c0c94c7-mg66kbil-06-3P.png)

_Pressed switches without icons_

![Measurements of switches with icons.](../../../assets/images/50964c685b37-mg66mxl5-07-3P.png)

_Switches with icons_

![Measurements of pressed switches with icons.](../../../assets/images/a4a09dc75860-mg66nbzr-08-3P.png)

_Pressed switches with icons_

Element

Attribute

Value

Track

Height

32dp

Width

52dp

Outline width

2dp

Shape

[md.sys.shape.corner.full](../../styles/shape/corner-radius-scale.md#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e)

Handle

Height (unselected)

16dp

Height - with icon

24dp

Height (selected)

24dp

Height (pressed)

28dp

Width (unselected)

16dp

Width - with icon

24dp

Width (selected)

24dp

Width (pressed)

28dp

Shape

[md.sys.shape.corner.full](../../styles/shape/corner-radius-scale.md#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e)

State layer

Size

40dp

Shape

[md.sys.shape.corner.full](../../styles/shape/corner-radius-scale.md#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e)

Target

Size

48dp

Icon

Size (selected)

16dp

Icon

Size (unselected)

16dp

## Configurations

1.  Without icons
2.  Icon on selected switch
3.  Icon on selected and unselected switch

![3 example switches with and without icons in on and off states. ](../../../assets/images/240ac99d8660-mg66of2m-09-3P.png)
