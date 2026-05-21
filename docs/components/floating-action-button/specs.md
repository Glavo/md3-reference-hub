---
title: "FABs"
source_url: "https://m3.material.io/components/floating-action-button/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/decf24b70bcc-mkc6atia-01-3P.png"
  - "assets/images/49dcc6263da3-mkc6bkq8-02-3P.png"
  - "assets/images/5458bfd670a3-mkc6cml8-03-3P.png"
  - "assets/images/4806b1dfdb15-mkc6diiz-04-3P.png"
  - "assets/images/4f98d554e048-mkc6empp-05-3P.png"
  - "assets/images/2729476e3f5e-mkc6fdu1-06-3P.png"
  - "assets/images/882daea4d3ad-mkc6fz4n-07-3P.png"
  - "assets/images/22ca7c028dfd-mkc6gdhg-08-3P.png"
  - "assets/images/42928beea31d-mkc6gu0p-09-3P.png"
  - "assets/images/aa316fc00983-mkc6ha1z-10-3P.png"
  - "assets/images/5784a40b9f16-mkc6hrgc-11-3P.png"
  - "assets/images/7f09b3257bd7-mkc6i508-12-3P.png"
---

# FABs

## Specs

## Variants

![An icon on the container of a FAB, medium FAB, and large FAB.](../../../assets/images/decf24b70bcc-mkc6atia-01-3P.png)

_FABMedium FABLarge FAB_

### Baseline variants

The small FAB is still available, but no longer recommended. [Jump to baseline specs](specs.md#cd336045-e97d-4a6d-ac23-f778fa695e3c)

![An icon on the container of a small FAB.](../../../assets/images/49dcc6263da3-mkc6bkq8-02-3P.png)

_1. Small FAB_

Variant

M3

M3 Expressive

FAB

Available

Available

Medium FAB

\--

Available

Large FAB

Available

Available

Small FAB

Available

Not recommended.

Use a larger size.

## Configurations

In the expressive update, the **primary**, **secondary**, and **tertiary** set colors were renamed to **primary container**, **secondary container**, and **tertiary container** to match the actual color roles used. New primary, secondary, and tertiary color styles were created to match the corresponding color roles. [View details in the color styles section](specs.md#67e71ec7-b520-405a-aa06-2decfa0b92a3)

Category

Configuration

M3

M3 Expressive

Color

Primary container, secondary container, tertiary container

Available as primary, secondary, tertiary

Available

Primary. secondary, tertiary

\--

Available

## Tokens & specs

Use the table's menu to select a token set. FAB tokens are organized by size and color. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

- **system:** Google Material 3

## Anatomy

![2 elements of the FAB.](../../../assets/images/5458bfd670a3-mkc6cml8-03-3P.png)

_1. Container2. Icon_

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/how-to-use-tokens.md)

### Color styles

FABs can use several combinations of **color** and **on-color** styles, such as **primary** and **on-primary**. The following color mappings provide the same legibility and functionality, so the color mapping you use depends on style alone.

![6 FAB color styles in light and dark themes. Each style has 2 color roles, 1 for the container and icon.](../../../assets/images/4806b1dfdb15-mkc6diiz-04-3P.png)

_Primary container & On primary container (default)Secondary container & On secondary containerTertiary container & On tertiary containerPrimary & On primarySecondary & On secondaryTertiary & On tertiary_

### Baseline color styles

Surface FAB color styles are still available, but no longer recommended.

![Baseline FAB style in all 3 sizes.](../../../assets/images/4f98d554e048-mkc6empp-05-3P.png)

_Surface FABs_

## States

States are visual representations used to communicate the status of a component or interactive element.

When using a non-default color mapping for FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for the **primary** color style should be md.sys.color.primary.

![4 states of a FAB shown in light and dark themes.](../../../assets/images/2729476e3f5e-mkc6fdu1-06-3P.png)

_EnabledHovered (8% state layer) - elevation 4Focused (10% state layer)Pressed (10% state layer)_

## Measurements

### FAB

![FAB size measurements.](../../../assets/images/882daea4d3ad-mkc6fz4n-07-3P.png)

_FAB size measurements_

![FAB padding measurements.](../../../assets/images/22ca7c028dfd-mkc6gdhg-08-3P.png)

_FAB padding measurements_

### Medium FAB

![Medium FAB size measurements.](../../../assets/images/42928beea31d-mkc6gu0p-09-3P.png)

_Medium FAB size measurements_

![Medium FAB padding measurements.](../../../assets/images/aa316fc00983-mkc6ha1z-10-3P.png)

_Medium FAB padding measurements_

### Large FAB

![Large FAB size measurements.](../../../assets/images/5784a40b9f16-mkc6hrgc-11-3P.png)

_Large FAB size measurements_

![Large FAB padding measurements.](../../../assets/images/7f09b3257bd7-mkc6i508-12-3P.png)

_Large FAB padding measurements_

## Baseline tokens & specs

Use the table's menu to select a token set. This only includes tokens for small and surface FABs, which are both no longer recommended. It doesn't include other colors, or large or regular FABs, since those are still currently used.

### TOKEN_TABLE

- **system:** Google Material 3
