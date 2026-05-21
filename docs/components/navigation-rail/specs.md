---
title: "Navigation rail"
source_url: "https://m3.material.io/components/navigation-rail/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/53fe40f8defa-mal9f2lt-01-3P.png"
  - "assets/images/afa1b241b275-mkvenn9g-02-3P.png"
  - "assets/images/5d576a0c2aef-mal9fbzs-03-3P.png"
  - "assets/images/90c385738ea6-mg0uznol-04-3P.png"
  - "assets/images/5dc4b25d7fee-mmyzgq71-05-3P.png"
  - "assets/images/d153df0cdd67-mal9s5f0-06-3P.png"
  - "assets/images/cf3c6f95c227-mal9sbiq-07-3P.png"
  - "assets/images/332fb514003c-mal9t1mb-08-3P.png"
  - "assets/images/84c1b24eb1cf-mal9twwq-09-3P.png"
  - "assets/images/53268226c34c-mal9u2w3-10-3P.png"
  - "assets/images/6cbbb9848915-mal9uv1q-11-3P.png"
  - "assets/images/cf91569e8a84-mal9vzs8-12-3P.png"
  - "assets/images/2d86b7af4cbb-mal9x9ol-13-3P.png"
  - "assets/images/f99ca485ece5-mal9xiu7-14-3P.png"
  - "assets/images/dcb83794ef4c-mal9xyxt-15-3P.png"
  - "assets/images/4e222d13a79d-mal9yote-16-3P.png"
---

# Navigation rail

Navigation rails let people switch between UI views on mid-sized devices

## Specs

## Variants

![2 variants of navigation rails.](../../../assets/images/53fe40f8defa-mal9f2lt-01-3P.png)

_Collapsed navigation railExpanded navigation rail_

### Baseline variants

The baseline navigation rail is no longer recommended, and should be replaced by the collapsed navigation rail. [View baseline tokens](specs.md#d4d97764-20ec-496f-a6f3-0d423940ec5a)

![Baseline navigation rail.](../../../assets/images/afa1b241b275-mkvenn9g-02-3P.png)

_The baseline navigation rail is no longer recommended_

Variant

M3

M3 Expressive

Collapsed navigation rail

\--

Available

Expanded navigation rail 

\--

Available

Navigation rail (baseline)

Available

Not recommended.

Use **collapsed navigation rail**.

## Configurations

![Standard and modal layouts of navigation rail.](../../../assets/images/5d576a0c2aef-mal9fbzs-03-3P.png)

_Expanded layout: standardExpanded layout: modal_

Category

Configuration

M3

      M3 Expressive

Expanded layout

Standard (default)

Available as navigation drawer

Available

Modal

Available as navigation drawer

Available

Expanded behavior

Hide when collapsed

\--

Available

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

- **system:** Google Material 3

## Anatomy

![9 elements of collapsed and expanded navigation rails.](../../../assets/images/90c385738ea6-mg0uznol-04-3P.png)

_Collapsed and expanded navigation rail elements:ContainerMenu (optional)FAB or Extended FAB (optional)IconActive indicatorLabel textLarge badge (optional)Large badge label (optional)Small badge (optional)_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Color roles of 9 elements of collapsed and expanded navigation rails in light and dark color schemes.](../../../assets/images/5dc4b25d7fee-mmyzgq71-05-3P.png)

_Navigation rail color roles used for light and dark schemes:Surface container (optional)On secondary containerSecondary containerSecondary (vertical), On secondary container (horizontal)On surface variantOn surface variantErrorOn errorError_

## States

States are visual representations used to communicate the status of a component or an interactive element.

The navigation item’s target area always spans the full width of the nav rail, even if the item container hugs its contents.

![4 states of collapsed navigation rails.](../../../assets/images/d153df0cdd67-mal9s5f0-06-3P.png)

__

![4 states of expanded navigation rails.](../../../assets/images/cf3c6f95c227-mal9sbiq-07-3P.png)

_EnabledHoveredFocusedPressed_

## Measurements

![Padding and measurements for expanded and collapsed navigation rails.](../../../assets/images/332fb514003c-mal9t1mb-08-3P.png)

_Navigation rail padding and size measurements_

## Common layouts

![4 common layouts of collapsed navigation rail.](../../../assets/images/84c1b24eb1cf-mal9twwq-09-3P.png)

![4 common layouts of expanded navigation rail.](../../../assets/images/53268226c34c-mal9u2w3-10-3P.png)

_Three navigation items Three navigation items with a menuThree navigation items with a FABThree navigation items with a menu and FAB_

* * *

## Baseline navigation rail

![8 elements of baseline navigation rail.](../../../assets/images/6cbbb9848915-mal9uv1q-11-3P.png)

_ContainerMenu icon (optional)IconActive indicatorLabel textLarge badge label (optional)Large badge (optional)Badge (optional)_

### Tokens & specs

### TOKEN_TABLE

- **system:** Google Material 3

### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![8 color roles of baseline navigation rail.](../../../assets/images/cf91569e8a84-mal9vzs8-12-3P.png)

_Navigation rail color roles used for light and dark themes:On secondary containerSecondary containerOn surfaceOn surface variantOn surface variantErrorOn errorError_

### States

States are visual representations used to communicate the status of a component or interactive element.

![8 states of baseline navigation rail.](../../../assets/images/2d86b7af4cbb-mal9x9ol-13-3P.png)

_Navigation rail states:Enabled (on active destination)Hovered (on active destination)Focused (on active destination)Pressed (on active destination)Enabled (on inactive destination)Hovered (on inactive destination)Focused (on inactive destination)Pressed (on inactive destination)_

### Measurements

![Baseline nav rail size measurements.](../../../assets/images/f99ca485ece5-mal9xiu7-14-3P.png)

_Navigation rail size measurements_

![Baseline nav rail padding and margin measurements.](../../../assets/images/dcb83794ef4c-mal9xyxt-15-3P.png)

_Navigation rail padding and margin measurements_

### Configurations

Common arrangements of elements within a navigation rail.

![5 configurations of the baseline navigation rail.](../../../assets/images/4e222d13a79d-mal9yote-16-3P.png)

_With a menuWith a FABWith menu and FAB, without labelsAll destinations with text labelsWith menu, FAB, and label text for all destinations_
