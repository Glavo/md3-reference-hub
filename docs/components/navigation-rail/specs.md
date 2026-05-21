---
title: "Navigation rail"
source_url: "https://m3.material.io/components/navigation-rail/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:46:50.991Z"
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

![2 variants of navigation rails.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9f2lt-01-3P.png?alt=media&token=e3d39033-8b0a-4cfb-834c-708b8a39d735>)

_Collapsed navigation rail; Expanded navigation rail_

### Baseline variants

The baseline navigation rail is no longer recommended, and should be replaced by the collapsed navigation rail. [View baseline tokens](specs.md#d4d97764-20ec-496f-a6f3-0d423940ec5a)

![Baseline navigation rail.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmkvenn9g-02-3P.png?alt=media&token=ef44fc56-2069-4191-8b8e-fdd672e4f136>)

_The baseline navigation rail is no longer recommended_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Collapsed navigation rail | \-- | Available |
| Expanded navigation rail | \-- | Available |
| Navigation rail (baseline) | Available | Not recommended. Use **collapsed navigation rail**. |

## Configurations

![Standard and modal layouts of navigation rail.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9fbzs-03-3P.png?alt=media&token=86384321-4a5b-4da1-8b96-269c108187c6>)

_Expanded layout: standard; Expanded layout: modal_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Expanded layout | Standard (default) | Available as navigation drawer | Available |
| Modal | Available as navigation drawer | Available |  |
| Expanded behavior | Hide when collapsed | \-- | Available |

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

Component: Navigation rail

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Nav rail - Collapsed | md.comp.nav-rail.collapsed | COMPONENT | For collapsed nav rail. |
| Nav rail - Common | md.comp.nav-rail | COMPONENT | Common tokens for nav rail. |
| Nav rail - Expanded | md.comp.nav-rail.expanded | COMPONENT | For expanded nav rail. |
| Nav rail item - Common | md.comp.nav-rail.item | COMPONENT | Common tokens for all nav items. |
| Nav rail item - Horizontal | md.comp.nav-rail.item.horizontal | COMPONENT | For horizontal nav rail items, where elements are side-by-side. |
| Nav rail item - Vertical | md.comp.nav-rail.item.vertical | COMPONENT | For vertical nav rail items, where elements are stacked. |
| Navigation rail (baseline) | md.comp.navigation-rail | COMPONENT | For baseline navigation rails. For expressive, use all nav rail token sets`md.comp.nav-rail` and corresponding `.collapsed` and `.item` token sets. |

## Anatomy

![9 elements of collapsed and expanded navigation rails.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg0uznol-04-3P.png?alt=media&token=bb0f488f-96f8-4128-9266-c8ff9bb70ce2>)

_Collapsed and expanded navigation rail elements: Container; Menu (optional); FAB or Extended FAB (optional); Icon; Active indicator; Label text; Large badge (optional); Large badge label (optional); Small badge (optional)_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Color roles of 9 elements of collapsed and expanded navigation rails in light and dark color schemes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmyzgq71-05-3P.png?alt=media&token=ac37fe4a-fbe3-4d2d-abf9-f753d00fc5f7>)

_Navigation rail color roles used for light and dark schemes: Surface container (optional); On secondary container; Secondary container; Secondary (vertical), On secondary container (horizontal); On surface variant; On surface variant; Error; On error; Error_

## States

States are visual representations used to communicate the status of a component or an interactive element.

The navigation item’s target area always spans the full width of the nav rail, even if the item container hugs its contents.

![4 states of collapsed navigation rails.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9s5f0-06-3P.png?alt=media&token=3900b54e-403f-4138-952a-22d9c5d47a68>)

__

![4 states of expanded navigation rails.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9sbiq-07-3P.png?alt=media&token=e367b797-932d-49fa-a72a-3ab34851205a>)

_Enabled; Hovered; Focused; Pressed_

## Measurements

![Padding and measurements for expanded and collapsed navigation rails.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9t1mb-08-3P.png?alt=media&token=8e32163c-6c4e-4d28-bf1b-5da584c4b46a>)

_Navigation rail padding and size measurements_

## Common layouts

![4 common layouts of collapsed navigation rail.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9twwq-09-3P.png?alt=media&token=9065bce5-6d1f-4c23-9090-27dc31f73d63>)

![4 common layouts of expanded navigation rail.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9u2w3-10-3P.png?alt=media&token=5b5ada66-3e11-40a7-a7f2-8559cb16e2ad>)

_Three navigation items; Three navigation items with a menu; Three navigation items with a FAB; Three navigation items with a menu and FAB_

* * *

## Baseline navigation rail

![8 elements of baseline navigation rail.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9uv1q-11-3P.png?alt=media&token=15c53656-c999-4f96-9e1d-77a16ca00b3a>)

_Container; Menu icon (optional); Icon; Active indicator; Label text; Large badge label (optional); Large badge (optional); Badge (optional)_

### Tokens & specs

### TOKEN_TABLE

Component: Navigation rail

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Nav rail - Collapsed | md.comp.nav-rail.collapsed | COMPONENT | For collapsed nav rail. |
| Nav rail - Common | md.comp.nav-rail | COMPONENT | Common tokens for nav rail. |
| Nav rail - Expanded | md.comp.nav-rail.expanded | COMPONENT | For expanded nav rail. |
| Nav rail item - Common | md.comp.nav-rail.item | COMPONENT | Common tokens for all nav items. |
| Nav rail item - Horizontal | md.comp.nav-rail.item.horizontal | COMPONENT | For horizontal nav rail items, where elements are side-by-side. |
| Nav rail item - Vertical | md.comp.nav-rail.item.vertical | COMPONENT | For vertical nav rail items, where elements are stacked. |
| Navigation rail (baseline) | md.comp.navigation-rail | COMPONENT | For baseline navigation rails. For expressive, use all nav rail token sets`md.comp.nav-rail` and corresponding `.collapsed` and `.item` token sets. |

### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![8 color roles of baseline navigation rail.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9vzs8-12-3P.png?alt=media&token=4d01ee27-7870-4c37-8095-067a9d64d37e>)

_Navigation rail color roles used for light and dark themes: On secondary container; Secondary container; On surface; On surface variant; On surface variant; Error; On error; Error_

### States

States are visual representations used to communicate the status of a component or interactive element.

![8 states of baseline navigation rail.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9x9ol-13-3P.png?alt=media&token=69b0b5ae-6f96-4d67-8a45-e77efecd6b17>)

_Navigation rail states: Enabled (on active destination); Hovered (on active destination); Focused (on active destination); Pressed (on active destination); Enabled (on inactive destination); Hovered (on inactive destination); Focused (on inactive destination); Pressed (on inactive destination)_

### Measurements

![Baseline nav rail size measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9xiu7-14-3P.png?alt=media&token=5970c991-6782-4784-bcbb-4fc5ed1dd423>)

_Navigation rail size measurements_

![Baseline nav rail padding and margin measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9xyxt-15-3P.png?alt=media&token=3229f7c0-780c-4bbc-9e2f-aa8a5d83e591>)

_Navigation rail padding and margin measurements_

### Configurations

Common arrangements of elements within a navigation rail.

![5 configurations of the baseline navigation rail.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal9yote-16-3P.png?alt=media&token=551b3b7f-1fd2-4e64-a69f-a57c4a7fe835>)

_With a menu; With a FAB; With menu and FAB, without labels; All destinations with text labels; With menu, FAB, and label text for all destinations_
