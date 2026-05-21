---
title: "Extended FABs"
source_url: "https://m3.material.io/components/extended-fab/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/0a7a08bc5326-ma3rfc55-01-3P.png"
  - "assets/images/c08cbeb513b6-ma3rfwo5-02-3P.png"
  - "assets/images/6312ddb56a64-ma3rgmo9-03-3P.png"
  - "assets/images/ce1f182a9511-ma3rha4a-04-3P.png"
  - "assets/images/ac6f8cdc99e9-ma3ri2r1-05-3P.png"
  - "assets/images/725545795226-maljqck5-06-3P.png"
  - "assets/images/a6868cb7ae56-ma3rj563-07-3P.png"
  - "assets/images/8e4790c6a96e-ma3rjn8g-08-3P.png"
  - "assets/images/0ffeeca0fbb4-ma3rm9q3-10-3P.png"
  - "assets/images/952983238f04-ml9o6q6p-15-3P.png"
  - "assets/images/ad2847b8dbde-ml9o6v12-16-3P.png"
  - "assets/images/d1f6d27d7e5b-ma3rmvmo-11-3P.png"
  - "assets/images/6e1db152da5c-ma3rnofz-12-3P.png"
  - "assets/images/ea5474e7eeaf-maljrky7-13-3P.png"
  - "assets/images/ffab5c35f570-maebvm3w-14-3P.png"
  - "assets/images/3dfffa03a2ce-maebvv3o-15-3P.png"
---

# Extended FABs

## Specs

## Variants

![3 variants of extended FABs.](../../../assets/images/0a7a08bc5326-ma3rfc55-01-3P.png)

_Small extended FABMedium extended FABLarge extended FAB_

### Baseline variants

The baseline extended FAB is no longer recommended in the M3 expressive update. Use a small extended FAB; the type style was updated from **label large** to **title medium**, and the inner padding was reduced. [View baseline extended FAB specs](specs.md#01e114e6-8c3d-4d39-9376-65aa5c10e01b)

![1 baseline extended FAB.](../../../assets/images/c08cbeb513b6-ma3rfwo5-02-3P.png)

_Extended FAB_

Variant

M3

M3 Expressive

Small extended FAB

\--

Available

Medium extended FAB

\--

Available

Large extended FAB

\--

Available

Extended FAB (baseline) 

Available

Not recommended.
Use **small extended FAB.**

## Tokens & specs

Use the table's menu to select a token set. Extended FAB tokens are organized by size and color.

### TOKEN_TABLE

- **system:** Google Material 3

## Anatomy

![3 elements of extended FABs.](../../../assets/images/6312ddb56a64-ma3rgmo9-03-3P.png)

_ContainerLabel textIcon_

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### Color styles

Extended FABs can use several combinations of **color** and **on color** styles, such as **primary** and **on primary**. The following color mappings provide the same level of contrast and functionality, so choose a color mapping based on visual preference.

![6 extended FAB color styles.](../../../assets/images/ce1f182a9511-ma3rha4a-04-3P.png)

_Extended FAB color roles used for light and dark schemes:Primary container & on primary container (default)Secondary container & on secondary containerTertiary container & on tertiary containerPrimary & on primarySecondary & on secondaryTertiary & on tertiary_

### Baseline color styles

Extended FABs should no longer use surface color styles. They’re still available, but not recommended.

![1 baseline extended FAB color style.](../../../assets/images/ac6f8cdc99e9-ma3ri2r1-05-3P.png)

_Surface container FAB_

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

When using a non-default color mapping for extended FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for primary mapping should be md.sys.color.primary.

![4 states of extended FABs.](../../../assets/images/725545795226-maljqck5-06-3P.png)

_Enabled Hovered - elevation 4Focused Pressed_

## Measurements

![Extended FAB padding and size measurements.](../../../assets/images/a6868cb7ae56-ma3rj563-07-3P.png)

_Size and padding measurements of the small, medium, and large extended FABs_

![Extended FAB margin measurements.](../../../assets/images/8e4790c6a96e-ma3rjn8g-08-3P.png)

_Extended FABs should have margins of 16dp_

## Baseline extended FAB

![3 elements of baseline extended FAB.](../../../assets/images/0ffeeca0fbb4-ma3rm9q3-10-3P.png)

_ContainerLabel textIcon_

### Baseline configurations

![Baseline extended FAB with icon.](../../../assets/images/952983238f04-ml9o6q6p-15-3P.png)

_With icon_

![Baseline extended FAB without icon.](../../../assets/images/ad2847b8dbde-ml9o6v12-16-3P.png)

_Without icon_

### Baseline tokens

Use the table's menu to select a token set. The baseline extended FAB token sets are organized by common tokens, then by surface and branded color styles. Other color styles like primary, secondary, and tertiary are still used by the latest extended FABs.

### TOKEN_TABLE

- **system:** Google Material 3

### Baseline colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![3 baseline extended FAB color roles.](../../../assets/images/d1f6d27d7e5b-ma3rmvmo-11-3P.png)

_Extended FAB color roles used for light and dark schemes:Primary container + shadowOn primary containerOn primary container_

#### Additional color mappings

Extended FABs can use other combinations of container and icon colors. The color mappings below provide the same legibility and functionality as the default, so the color mapping you use depends on style alone.

![3 deprecated extended FABs with different container and icon colors.](../../../assets/images/6e1db152da5c-ma3rnofz-12-3P.png)

_Extended FABs can use different combinations of container and icon colors_

### Baseline states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states)

![4 states of baseline extended FAB.](../../../assets/images/ea5474e7eeaf-maljrky7-13-3P.png)

_Enabled Hovered Focused Pressed_

### Baseline measurements

![Margins of baseline extended FAB.](../../../assets/images/ffab5c35f570-maebvm3w-14-3P.png)

_Extended FABs have a padding of 16dp_

![Size of baseline extended FAB while on screen.](../../../assets/images/3dfffa03a2ce-maebvv3o-15-3P.png)

_Extended FAB height, width, and icon size_

Attribute

Value

Container height

56dp

Container width

Dynamic, 80dp min

Container shape

16dp corner radius

Icon size

24dp

Padding

16dp
