---
title: "Radio button"
source_url: "https://m3.material.io/components/radio-button/specs"
lastmod: "2026-02-16"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/be3b2c0d46fc-md8jp5v6-01-3P.png"
  - "assets/images/7ad7a0a2f710-md8jpn14-02-3P.png"
  - "assets/images/ed806f993259-md8jq2c4-03-3P.png"
  - "assets/images/6a5dc5a66fbf-md8jqfvs-04-3P.png"
  - "assets/images/6b77551cb8ae-md8juo16-05-3P.png"
---

# Radio button

Radio buttons let people select one option from a set of options

## Specs

![Diagram of enabled radio button.](../../../assets/images/be3b2c0d46fc-md8jp5v6-01-3P.png)

_Radio button icon_

## Tokens & specs

[Learn more about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

- **system:** Google Material 3

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Diagram of selected and unselected radio button colors.](../../../assets/images/7ad7a0a2f710-md8jpn14-02-3P.png)

_Radio button color roles used for light and dark themes:PrimaryOn surface variant_

### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

![Radio buttons with labels. The labels are the same color for both selected and unselected radio buttons.](../../../assets/images/ed806f993259-md8jq2c4-03-3P.png)

_The text color remains the same regardless if the button is selected or not_

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![Diagram of radio button states including enabled, hover, focus, pressed, and disabled.](../../../assets/images/6a5dc5a66fbf-md8jqfvs-04-3P.png)

_Enabled Hover Focus PressedDisabled_

[State specs are in the token module above](specs.md#3eef19a6-cdcb-4ecf-b1af-2b8095d485ac)

## Measurements

![Diagram of radio button layout values.](../../../assets/images/6b77551cb8ae-md8juo16-05-3P.png)

_Radio button size measurements_

Attribute

Value

Icon size

20dp

State layer size

40dp

Target size

48dp
