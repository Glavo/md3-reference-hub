---
title: "Navigation bar"
source_url: "https://m3.material.io/components/navigation-bar/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/7a35a73c3a4d-ma3onczd-01.png"
  - "assets/images/2310714e9427-mkq5ef63-02-3P.png"
  - "assets/images/e976fc013ec4-ma3oovxg-7.png"
  - "assets/images/c36815af3da3-ma3opmda-1.png"
  - "assets/images/277ec09ee153-ma3oqa88-05.png"
  - "assets/images/b6044cc29e18-mah8b097-3.png"
  - "assets/images/58d1c3864eb2-ma3ovtkk-5.png"
  - "assets/images/ac57511e4374-ma3owffv-6.png"
  - "assets/images/0a65c2e4cd56-ma3ox4jl-3p_nav-bar_anatomy.png"
  - "assets/images/1fdd16920edc-ma3oxof4-3p_nav-bar_color.png"
  - "assets/images/57392fa2a5ea-mamkex4k-11-3P.png"
  - "assets/images/96f11f617ffa-mamkf93e-12-3P.png"
  - "assets/images/f681c2e46356-mamkhglx-13-3P.png"
  - "assets/images/c53ec582ca92-ma3ozytu-3p_nav-bar_config.png"
---

# Navigation bar

Navigation bars let people switch between UI views on smaller devices

## Specs

## Variants

![The recommended flexible navigation bar.](../../../assets/images/7a35a73c3a4d-ma3onczd-01.png)

_Flexible navigation bar_

### Baseline variants

The baseline nav bar is no longer recommended, and should be replaced by the flexible nav bar, which is shorter and supports horizontal navigation items in medium windows. [View baseline nav bar specs](specs.md#46dc2521-acf0-44e3-bbc0-78dc225b9749)

![1 baseline navigation bar.](../../../assets/images/2310714e9427-mkq5ef63-02-3P.png)

_Navigation bar (not recommended)_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Flexible navigation bar | \-- | Available |
| Navigation bar | Available | Not recommended. Use **flexible navigation bar**. |

## Configurations

In compact windows, navigation bars use vertical items. In medium windows, navigation bars should use horizontal items.

![Two size configurations for navigation bar and items.](../../../assets/images/e976fc013ec4-ma3oovxg-7.png)

_Vertical navigation items; Horizontal navigation items_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Navigation item layout | Vertical (default) | Available | Available |
| Horizontal | \-- | Available |  |

## Tokens & specs

Use the table's menu to switch between token sets for the navigation bar and the nav items. [](specs.md#3425f33a-0b11-492a-ae5a-40d63f939384)[Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

Component: Navigation bar

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Nav bar - Common | md.comp.nav-bar | COMPONENT | Common tokens for navigation bars. |
| Nav bar - Item - Horizontal | md.comp.nav-bar.item.horizontal | COMPONENT | For horizontal nav items, where elements are side-by-side. |
| Nav bar - Item - Vertical | md.comp.nav-bar.item.vertical | COMPONENT | For vertical nav items, where elements are stacked. |
| Navigation bar (baseline) | md.comp.navigation-bar | COMPONENT | For baseline navigation bar. For expressive, use `md.comp.nav-bar` and corresponding `.item` token sets instead. |

## Anatomy

![Seven elements of the navigation bar.](../../../assets/images/c36815af3da3-ma3opmda-1.png)

_Container; Icon; Label text; Active indicator; Small badge (optional); Large badge (optional); Large badge label_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Six color roles of the navigation bar.](../../../assets/images/277ec09ee153-ma3oqa88-05.png)

_Navigation bar color roles used for light and dark schemes: / Surface container; On-secondary container; Secondary; Secondary container; On-surface variant; On-surface variant_

For badge color roles, go to [badge specs](../badges/specs.md).

## States

States are visual representations used to communicate the status of a component or an interactive element.

![Four states of the navigation bar items.](../../../assets/images/b6044cc29e18-mah8b097-3.png)

_Enabled; Hovered (8% state layer); Focused (10% state layer); Pressed (10% state layer)_

## Measurements

The navigation bar stretches the full window width.

![Navigation bar padding and size measurements.](../../../assets/images/58d1c3864eb2-ma3ovtkk-5.png)

_Navigation bar padding and size measurements_

Vertical navigation items dynamically change width to equally fit the container. Horizontal navigation items have a fixed width, so extra space is added to the ends of the navigation bar instead.

![Navigation bar and item widths.](../../../assets/images/ac57511e4374-ma3owffv-6.png)

_Navigation bar width and margins for compact and medium windows. / Vertical navigation item; Margin from window edge; Horizontal navigation item_

* * *

## Baseline navigation bar

![7 elements of baseline navigation bar.](../../../assets/images/0a65c2e4cd56-ma3ox4jl-3p_nav-bar_anatomy.png)

_Container; Icon; Label text; Active indicator; Small badge; Large badge; Large badge label_

### Tokens & specs

These tokens are for the baseline navigation bar.

### TOKEN_TABLE

Component: Navigation bar

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Nav bar - Common | md.comp.nav-bar | COMPONENT | Common tokens for navigation bars. |
| Nav bar - Item - Horizontal | md.comp.nav-bar.item.horizontal | COMPONENT | For horizontal nav items, where elements are side-by-side. |
| Nav bar - Item - Vertical | md.comp.nav-bar.item.vertical | COMPONENT | For vertical nav items, where elements are stacked. |
| Navigation bar (baseline) | md.comp.navigation-bar | COMPONENT | For baseline navigation bar. For expressive, use `md.comp.nav-bar` and corresponding `.item` token sets instead. |

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![6 color roles of baseline navigation bar.](../../../assets/images/1fdd16920edc-ma3oxof4-3p_nav-bar_color.png)

_Navigation bar color roles used for light and dark schemes: / Surface; On secondary container; On surface; Secondary container; On surface variant; On surface variant_

For badge color roles, go to [badge specs](../badges/specs.md).

### States

States are visual representations used to communicate the status of a component or an interactive element.

![4 states of baseline navigation bar.](../../../assets/images/57392fa2a5ea-mamkex4k-11-3P.png)

_Navigation bar states: / Enabled; Hovered; Focused; Pressed_

## Measurements

![Baseline navigation bar padding and size measurements.](../../../assets/images/96f11f617ffa-mamkf93e-12-3P.png)

_Navigation bar padding and size measurements_

![Baseline navigation bar target size and margins.](../../../assets/images/f681c2e46356-mamkhglx-13-3P.png)

_Navigation bar target size and margins_

## Configurations

![3 configurations of the baseline navigation bar.](../../../assets/images/c53ec582ca92-ma3ozytu-3p_nav-bar_config.png)

_3 destinations; 4 destinations; 5 destinations_
