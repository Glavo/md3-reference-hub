---
title: "Icon buttons"
source_url: "https://m3.material.io/components/icon-buttons/specs"
lastmod: "2026-02-11"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/1314d57a6ba7-macn9b93-1.png"
  - "assets/images/b7960af7d3c5-macn9wle-2.png"
  - "assets/images/1625e25895c3-macngrp0-3.png"
  - "assets/images/ae63520871c5-macnmn5n-4.png"
  - "assets/images/d80347bb7b72-macny1bg-7.png"
  - "assets/images/4798047f809b-macnyuzs-8.png"
  - "assets/images/99bb22175870-maco0ivh-9.png"
  - "assets/images/54a5599e55d9-maco1xul-10.png"
  - "assets/images/e008d13a13ea-maco30ip-11.png"
  - "assets/images/dc78afc26f10-maco3sgl-12.png"
  - "assets/images/6dd52a77f008-maco50jx-13.png"
  - "assets/images/d17d6226e6a9-maco5p31-14.png"
  - "assets/images/36f9a63a8fe0-mal45bxj-15.png"
  - "assets/images/bed05e041ede-mafeboyy-16.png"
  - "assets/images/e8bb16886226-macoq4wo-17.png"
  - "assets/images/0589307ae8e2-macosw5f-18.png"
  - "assets/images/25e4f0b935bb-mafelwts-19.png"
---

# Icon buttons

Icon buttons help people take minor actions with one tap

## Specs

## Variants

![Side by side view of default and toggle icon buttons.](../../../assets/images/1314d57a6ba7-macn9b93-1.png)

_Default icon buttonToggle icon button_

Variant

M3

M3 Expressive

Default

Available

Available

Toggle (selection)

Available

Available

## Configurations

![Side by side view of size, shape, color, and width variations.](../../../assets/images/b7960af7d3c5-macn9wle-2.png)

_Five sizesTwo shapesFour color stylesThree widths_

Category

Options

M3

M3 Expressive

Size

Small (default)

Available

Available

XS, M, L, XL

\--

Available

Shape

Round (default)

Available

Available

Square

\--

Available

Color

Filled (default), tonal, outlined, standard

Available

Available

Width

Default

Available

Available

Narrow, wide

\--

Available

## Tokens & specs

Icon button token sets are organized by common tokens, color, and size. Select the token set from the table’s menu. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

- **system:** Google Material 3

## Anatomy

![Diagram indicating anatomy of filled icon button.](../../../assets/images/1625e25895c3-macngrp0-3.png)

_Icon Container_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

There are four built-in color styles: filled, tonal, outlined, and standard. Default and toggle buttons use different color roles per style.

star

Note:

These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.

![Color roles of default and toggle buttons in 4 visual styles.](../../../assets/images/ae63520871c5-macnmn5n-4.png)

_A: Filled, B: Tonal, C: Outlined, D: StandardDefaultToggle, unselectedToggle, selected_

1\. Default

2\. Toggle, unselected

3\. Toggle, selected

Filled container

Filled icon

Primary 

On primary

Surface container

On surface variant

Primary

On primary

Tonal container

Tonal icon

Secondary container

On secondary container

Secondary container

On secondary container

Secondary

On secondary

Outlined container

Outlined icon

Outline variant (outline)

On surface variant

Outline variant (outline)

On surface variant

Inverse surface

Inverse on surface

Standard icon

On surface variant

On surface variant

Primary

## States

States are visual representations used to communicate the status of a component or interactive element. State layers slightly change button color. Disabled states have different base colors. [View tokens for details](../../foundations/design-tokens/overview.md)

### Filled button states

#### Default

![5 states of filled icon button.](../../../assets/images/d80347bb7b72-macny1bg-7.png)

_Enabled Disabled (10% state layer)Hovered (8% state layer)Focused (10% state layer)Pressed (10% state layer)_

#### Toggle

![5 states of filled toggle icon button.](../../../assets/images/4798047f809b-macnyuzs-8.png)

_A: Unselected. B: SelectedEnabled Disabled (10% state layer)Hovered (8% state layer)Focused (10% state layer)Pressed (10% state layer)_

### Tonal button states

#### Default

![5 states of tonal icon button.](../../../assets/images/99bb22175870-maco0ivh-9.png)

_Enabled Disabled (10% state layer)Hovered (8% state layer)Focused (10% state layer)Pressed (10% state layer)_

#### Toggle

![5 states of tonal toggle icon button.](../../../assets/images/54a5599e55d9-maco1xul-10.png)

_A: Unselected. B: SelectedEnabled Disabled (10% state layer)Hovered (8% state layer)Focused (10% state layer)Pressed (10% state layer)_

### Outlined button states

#### Default

![5 states of outlined icon button.](../../../assets/images/e008d13a13ea-maco30ip-11.png)

_Enabled Disabled (10% state layer)Hovered (8% state layer)Focused (10% state layer)Pressed (10% state layer)_

#### Toggle

![5 states of outlined toggle icon button.](../../../assets/images/dc78afc26f10-maco3sgl-12.png)

_A: Unselected. B: SelectedEnabled Disabled (10% state layer)Hovered (8% state layer)Focused (10% state layer)Pressed (10% state layer)_

### Standard icon button states

The standard icon button’s container is invisible at rest, but visible when the state layer is applied.

#### Default

![5 states of standard icon button.](../../../assets/images/6dd52a77f008-maco50jx-13.png)

_Enabled Disabled (10% state layer)Hovered (8% state layer)Focused (10% state layer)Pressed (10% state layer)_

#### Toggle

![5 states of standard toggle icon button.](../../../assets/images/d17d6226e6a9-maco5p31-14.png)

_A: Unselected. B: SelectedEnabled Disabled (10% state layer)Hovered (8% state layer)Focused (10% state layer)Pressed (10% state layer)_

## Shape morph

### Pressed state

While pressed, icon buttons can morph to become more square. 

Both round and square icon buttons should have the same pressed shape radius.

The corner radius value differs for each button size. [See full icon button corner measurements](specs.md#b3df1f02-d313-44e9-9542-37f7e0e24dc7)

![Shape changes for round and square icon buttons in 3 states.](../../../assets/images/36f9a63a8fe0-mal45bxj-15.png)

_A. Round, B. SquareEnabledHoveredPressed_

### When selected

In addition to changing shape when pressed, toggle icon buttons also change the resting shape from round (unselected) to square (selected) by default.

If the resting shape is square, the selected shape should be round.

![Shape changes for round and square toggle icon buttons in 3 states.](../../../assets/images/bed05e041ede-mafeboyy-16.png)

_A. Round, B. SquareEnabledHoveredPressedSelected_

## Measurements

![Diagram of 5 sizes of icon buttons in 4 widths.](../../../assets/images/e8bb16886226-macoq4wo-17.png)

_A. Extra small B. Small C. Medium D. Large E. Extra largeIcon sizeDefault width size Narrow width size Wide width size_

### Target sizes

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.

![Diagram of target sizes.](../../../assets/images/0589307ae8e2-macosw5f-18.png)

_A. Extra small icon button size B. Small icon button sizeNarrow width Default widthWide width_

### Button corner radius

![Diagram of icon button corner radius.](../../../assets/images/25e4f0b935bb-mafelwts-19.png)

__

XS

S

M

L

XL

A. Round button

Full

Full

Full

Full

Full

B. Square button

12dp

12dp

16dp

28dp

28dp

C. Pressed state

8dp

8dp

12dp

16dp

16dp

## Baseline tokens

Use the table's menu to select a token set. Filled, tonal, and outlined icon button tokens are no longer recommended. Standard tokens are still available in the module at the top of the page.

### TOKEN_TABLE

- **system:** Google Material 3
