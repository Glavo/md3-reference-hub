---
title: "FABs"
source_url: "https://m3.material.io/components/floating-action-button/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:27:03.936Z"
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

![An icon on the container of a FAB, medium FAB, and large FAB.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6atia-01-3P.png?alt=media&token=2f73681d-69d8-4486-a35b-e3e28c1eaa41>)

_FAB; Medium FAB; Large FAB_

### Baseline variants

The small FAB is still available, but no longer recommended. [Jump to baseline specs](specs.md#cd336045-e97d-4a6d-ac23-f778fa695e3c)

![An icon on the container of a small FAB.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6bkq8-02-3P.png?alt=media&token=00146424-866a-4818-b7a1-f65a6214d47e>)

_1. Small FAB_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| FAB | Available | Available |
| Medium FAB | \-- | Available |
| Large FAB | Available | Available |
| Small FAB | Available | Not recommended. Use a larger size. |

## Configurations

In the expressive update, the **primary**, **secondary**, and **tertiary** set colors were renamed to **primary container**, **secondary container**, and **tertiary container** to match the actual color roles used. New primary, secondary, and tertiary color styles were created to match the corresponding color roles. [View details in the color styles section](specs.md#67e71ec7-b520-405a-aa06-2decfa0b92a3)

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Color | Primary container, secondary container, tertiary container | Available as primary, secondary, tertiary | Available |
| Primary. secondary, tertiary | \-- | Available |  |

## Tokens & specs

Use the table's menu to select a token set. FAB tokens are organized by size and color. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

Component: Floating action buttons (FABs)

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| [Deprecated] FAB - Size - Small | md.comp.fab.small | COMPONENT | For small FABs. Not used in expressive FABs. |
| FAB - Color - Tonal primary | md.comp.fab.primary-container | COMPONENT | For tonal primary container FABs. |
| FAB - Color - Tonal secondary | md.comp.fab.secondary-container | COMPONENT | For tonal secondary container FABs. |
| FAB - Color - Tonal tertiary | md.comp.fab.tertiary-container | COMPONENT | For tonal tertiary container FABs. |
| FAB - Size - Large | md.comp.fab.large | COMPONENT | For large FABs. |
| FAB - Size - Medium | md.comp.fab.medium | COMPONENT | For medium FABs. |
| FAB - Size - Regular | md.comp.fab | COMPONENT | For the default, regular FAB size. |
| [Deprecated] FAB - Primary, large | md.comp.fab.primary.large | COMPONENT | This token set is deprecated. Use large fab size `md.comp.fab.large` and tonal primary container fab `md.comp.fab.primary-container` token sets instead. |
| [Deprecated] FAB - Tertiary, small | md.comp.fab.tertiary.small | COMPONENT | This token set is deprecated. Use expressive small fab `md.comp.fab` or baseline small fab `md.comp.fab.small` and tonal tertiary container fab `md.comp.fab.tertiary-container` token sets instead. |
| [Deprecated] FAB - Secondary, large | md.comp.fab.secondary.large | COMPONENT | This token set is deprecated. Use large fab size `md.comp.fab.large` and tonal secondary container fab `md.comp.fab.secondary-container` token sets instead. |
| FAB - Color - Tertiary | md.comp.fab.tertiary | COMPONENT | For the tertiary style fab. |
| FAB - Color - Primary | md.comp.fab.primary | COMPONENT | For primary color FABs. |
| FAB - Color - Surface | md.comp.fab.surface | COMPONENT | For surface color FABs. Not recommended with expressive FABs. |
| [Deprecated] FAB - Surface, large | md.comp.fab.surface.large | COMPONENT | This token set is deprecated. Use large fab size `md.comp.fab.large` and surface fab `md.comp.fab.surface` token sets instead. |
| [Deprecated] FAB - Secondary, small | md.comp.fab.secondary.small | COMPONENT | This token set is deprecated. Use expressive small fab `md.comp.fab` or baseline small fab `md.comp.fab.small` and tonal secondary container fab `md.comp.fab.secondary-container` token sets instead. |
| [Deprecated] FAB - Tertiary, large | md.comp.fab.tertiary.large | COMPONENT | This token set is deprecated. Use large fab size `md.comp.fab.large` and tonal tertiary container fab `md.comp.fab.tertiary-container` token sets instead. |
| FAB - Color - Secondary | md.comp.fab.secondary | COMPONENT | For secondary color FABs. |
| [Deprecated] FAB - Surface, small | md.fab.surface.small | COMPONENT | This token set is deprecated. Use expressive small fab `md.comp.fab` or baseline small fab `md.comp.fab.small` and surface fab `md.comp.fab.surface` token sets instead. |
| [Deprecated] FAB - Primary, small | md.comp.fab.primary.small | COMPONENT | This token set is deprecated. Use expressive small fab `md.comp.fab` or baseline small fab `md.comp.fab.small` and tonal primary container fab `md.comp.fab.primary-container` token sets instead. |
| FAB - Color - Branded | md.comp.fab.branded | COMPONENT | For branded color FABs. Not recommended in expressive FABs. |
| [Deprecated] FAB - Branded, large | md.comp.fab.branded.large | COMPONENT | This token set is deprecated. Use large fab size `md.comp.fab.large` and branded fab `md.comp.fab.branded` token sets instead. |

## Anatomy

![2 elements of the FAB.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6cml8-03-3P.png?alt=media&token=b76c428a-d4ed-4ec1-b6ab-cdec99f0afff>)

_1. Container 2. Icon_

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/how-to-use-tokens.md)

### Color styles

FABs can use several combinations of **color** and **on-color** styles, such as **primary** and **on-primary**. The following color mappings provide the same legibility and functionality, so the color mapping you use depends on style alone.

![6 FAB color styles in light and dark themes. Each style has 2 color roles, 1 for the container and icon.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6diiz-04-3P.png?alt=media&token=d50706b5-2254-4cd5-afb1-852c728e47b2>)

_Primary container & On primary container (default); Secondary container & On secondary container; Tertiary container & On tertiary container; Primary & On primary; Secondary & On secondary; Tertiary & On tertiary_

### Baseline color styles

Surface FAB color styles are still available, but no longer recommended.

![Baseline FAB style in all 3 sizes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6empp-05-3P.png?alt=media&token=63065aac-7292-44cb-be02-7632eba1af38>)

_Surface FABs_

## States

States are visual representations used to communicate the status of a component or interactive element.

When using a non-default color mapping for FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for the **primary** color style should be md.sys.color.primary.

![4 states of a FAB shown in light and dark themes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6fdu1-06-3P.png?alt=media&token=ef3a63fe-b331-4553-a51a-f1e0ca0c3b9b>)

_Enabled; Hovered (8% state layer) - elevation 4; Focused (10% state layer); Pressed (10% state layer)_

## Measurements

### FAB

![FAB size measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6fz4n-07-3P.png?alt=media&token=de1a1525-dae3-446e-8546-21b8320985ce>)

_FAB size measurements_

![FAB padding measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6gdhg-08-3P.png?alt=media&token=816f05ba-1ad7-4d96-a205-d86e3be8772e>)

_FAB padding measurements_

### Medium FAB

![Medium FAB size measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6gu0p-09-3P.png?alt=media&token=26b5fc9c-0d30-48cb-abc9-724ec0b42f3e>)

_Medium FAB size measurements_

![Medium FAB padding measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6ha1z-10-3P.png?alt=media&token=07048e86-e793-4f9e-98d7-816d1c2292dd>)

_Medium FAB padding measurements_

### Large FAB

![Large FAB size measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6hrgc-11-3P.png?alt=media&token=bb7d4869-9309-4cde-b2f7-824004d2f429>)

_Large FAB size measurements_

![Large FAB padding measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkc6i508-12-3P.png?alt=media&token=d1de97fa-e91b-40c9-aff1-63fcd3535ebb>)

_Large FAB padding measurements_

## Baseline tokens & specs

Use the table's menu to select a token set. This only includes tokens for small and surface FABs, which are both no longer recommended. It doesn't include other colors, or large or regular FABs, since those are still currently used.

### TOKEN_TABLE

Component: Floating action buttons (FABs)

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| [Deprecated] FAB - Size - Small | md.comp.fab.small | COMPONENT | For small FABs. Not used in expressive FABs. |
| FAB - Color - Tonal primary | md.comp.fab.primary-container | COMPONENT | For tonal primary container FABs. |
| FAB - Color - Tonal secondary | md.comp.fab.secondary-container | COMPONENT | For tonal secondary container FABs. |
| FAB - Color - Tonal tertiary | md.comp.fab.tertiary-container | COMPONENT | For tonal tertiary container FABs. |
| FAB - Size - Large | md.comp.fab.large | COMPONENT | For large FABs. |
| FAB - Size - Medium | md.comp.fab.medium | COMPONENT | For medium FABs. |
| FAB - Size - Regular | md.comp.fab | COMPONENT | For the default, regular FAB size. |
| [Deprecated] FAB - Primary, large | md.comp.fab.primary.large | COMPONENT | This token set is deprecated. Use large fab size `md.comp.fab.large` and tonal primary container fab `md.comp.fab.primary-container` token sets instead. |
| [Deprecated] FAB - Tertiary, small | md.comp.fab.tertiary.small | COMPONENT | This token set is deprecated. Use expressive small fab `md.comp.fab` or baseline small fab `md.comp.fab.small` and tonal tertiary container fab `md.comp.fab.tertiary-container` token sets instead. |
| [Deprecated] FAB - Secondary, large | md.comp.fab.secondary.large | COMPONENT | This token set is deprecated. Use large fab size `md.comp.fab.large` and tonal secondary container fab `md.comp.fab.secondary-container` token sets instead. |
| FAB - Color - Tertiary | md.comp.fab.tertiary | COMPONENT | For the tertiary style fab. |
| FAB - Color - Primary | md.comp.fab.primary | COMPONENT | For primary color FABs. |
| FAB - Color - Surface | md.comp.fab.surface | COMPONENT | For surface color FABs. Not recommended with expressive FABs. |
| [Deprecated] FAB - Surface, large | md.comp.fab.surface.large | COMPONENT | This token set is deprecated. Use large fab size `md.comp.fab.large` and surface fab `md.comp.fab.surface` token sets instead. |
| [Deprecated] FAB - Secondary, small | md.comp.fab.secondary.small | COMPONENT | This token set is deprecated. Use expressive small fab `md.comp.fab` or baseline small fab `md.comp.fab.small` and tonal secondary container fab `md.comp.fab.secondary-container` token sets instead. |
| [Deprecated] FAB - Tertiary, large | md.comp.fab.tertiary.large | COMPONENT | This token set is deprecated. Use large fab size `md.comp.fab.large` and tonal tertiary container fab `md.comp.fab.tertiary-container` token sets instead. |
| FAB - Color - Secondary | md.comp.fab.secondary | COMPONENT | For secondary color FABs. |
| [Deprecated] FAB - Surface, small | md.fab.surface.small | COMPONENT | This token set is deprecated. Use expressive small fab `md.comp.fab` or baseline small fab `md.comp.fab.small` and surface fab `md.comp.fab.surface` token sets instead. |
| [Deprecated] FAB - Primary, small | md.comp.fab.primary.small | COMPONENT | This token set is deprecated. Use expressive small fab `md.comp.fab` or baseline small fab `md.comp.fab.small` and tonal primary container fab `md.comp.fab.primary-container` token sets instead. |
| FAB - Color - Branded | md.comp.fab.branded | COMPONENT | For branded color FABs. Not recommended in expressive FABs. |
| [Deprecated] FAB - Branded, large | md.comp.fab.branded.large | COMPONENT | This token set is deprecated. Use large fab size `md.comp.fab.large` and branded fab `md.comp.fab.branded` token sets instead. |
