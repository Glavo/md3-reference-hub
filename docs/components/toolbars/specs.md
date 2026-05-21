---
title: "Toolbars"
source_url: "https://m3.material.io/components/toolbars/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/63c55e59d127-ma23ultc-01-3P.png"
  - "assets/images/d25d5d91212a-ma24egim-1-deprecated.png"
  - "assets/images/09397b7ff3a1-ma24i061-02-3P.png"
  - "assets/images/2ef9fa86515b-ma24poz2-03-3P.png"
  - "assets/images/1a7f351b4113-ma25cmf1-04-3P.png"
  - "assets/images/e21e92c78fed-ma25fg6c-05-3P.png"
  - "assets/images/4a6336729d96-ma25hban-06-3P.png"
  - "assets/images/4076d0948ab3-ma25j41t-07-3P.png"
  - "assets/images/1ef0485d0e12-ma25jqfl-08-3P.png"
  - "assets/images/5627c1ae3114-ma25l6kh-09-3P.png"
  - "assets/images/fae72374dd60-ma25numd-10-3P.png"
  - "assets/images/0bb44c8b0c52-ma25or07-11-3P.png"
  - "assets/images/b3d21cc09a05-ma25qmnu-12-3P.png"
  - "assets/images/c2f04d3299d1-ma25vwtc-13-3P.png"
  - "assets/images/ca0944f9b9c2-ma25wn0p-14-3P.png"
  - "assets/images/3ccd13ffd70d-ma25xkg5-15-3P.png"
---

# Toolbars

Toolbars display frequently used actions relevant to the current page

## Specs

## Variants

![2 variants of toolbars.](../../../assets/images/63c55e59d127-ma23ultc-01-3P.png)

_Docked toolbar; Floating toolbar_

### Baseline variant

The baseline bottom app bar is no longer recommended. It should be replaced with the docked toolbar, which is very similar and more flexible.

![Baseline bottom app bar, which looks like the docked toolbar, but is not recommended.](../../../assets/images/d25d5d91212a-ma24egim-1-deprecated.png)

_Bottom app bar (not recommended)_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Docked toolbar | \-- | Available |
| Floating toolbar | \-- | Available |
| Bottom app bar | Available | Not recommended. Use **docked toolbar**. |

star

Note:

Implementation differs per platform. On Jetpack Compose, the floating toolbar is a separate component from the docked toolbar and bottom app bar.

## Configurations

![Color configuration of toolbars.](../../../assets/images/09397b7ff3a1-ma24i061-02-3P.png)

_Standard and vibrant toolbars; Vertical floating toolbar; Floating toolbar with FAB_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Color | Standard (default) | Available as bottom app bar | Available |
| Vibrant | \-- | Available |  |
| Floating toolbar layout | Horizontal (default) | \-- | Available |
| Vertical | \-- | Available |  |
| Other elements | With FAB | Available as bottom app bar | Available\* |

star

Note:

\*Implementation differs per platform. On Jetpack Compose, floating toolbar with FAB is [fully supported](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#HorizontalFloatingToolbar\(kotlin.Boolean,androidx.compose.ui.Modifier,androidx.compose.material3.FloatingToolbarColors,androidx.compose.foundation.layout.PaddingValues,androidx.compose.material3.FloatingToolbarScrollBehavior,androidx.compose.ui.graphics.Shape,kotlin.Function1,kotlin.Function1,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp,kotlin.Function1\)). On other platforms, each component needs to be added separately.

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Jump to baseline bottom app bar specs](specs.md#ad142675-3e3b-43b8-ba53-12c1f0b7138d)

### TOKEN_TABLE

Component: Toolbars

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Toolbar - Color - Standard | md.comp.toolbar.standard | COMPONENT | For standard docked and floating toolbars. |
| Toolbar - Color - Vibrant | md.comp.toolbar.vibrant | COMPONENT | For vibrant docked and floating toolbars. |
| Toolbar - Docked | md.comp.toolbar.docked | COMPONENT | For docked toolbars. |
| Toolbar - Floating | md.comp.toolbar.floating | COMPONENT | For floating toolbars. |
| Toolbar - Floating - FAB | md.comp.toolbar.floating.fab | COMPONENT | For floating toolbars with a FAB in them. |
| Bottom app bar (baseline) | md.comp.bottom-app-bar | COMPONENT | Baseline bottom app bar container tokens. For expressive, use `md.comp.toolbar.docked` and `md.comp.toolbar.standard` instead. |

## Anatomy

![2 elements of a toolbar.](../../../assets/images/2ef9fa86515b-ma24poz2-03-3P.png)

_Container; Placed components_

### Flexibility & slots

When configuring a toolbar, think of it as a container with several slots. 

Each slot can be a different element. The most common elements are icon buttons, buttons, and text fields.

![A toolbar with 5 slots, conceptual spaces for UI elements, next to each other.](../../../assets/images/1a7f351b4113-ma25cmf1-04-3P.png)

_A toolbar is essentially a container with configurable slots_

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

### Standard

![4 color roles in the standard color scheme  of the floating toolbar in light and dark scheme.](../../../assets/images/e21e92c78fed-ma25fg6c-05-3P.png)

_Standard color schemes and icon button types: Surface container; Filled button (Primary, On primary); Toggle tonal button (Secondary container, On secondary container); Standard button (Primary)_

### Vibrant

![4 color roles in the vibrant color scheme of the floating toolbar in light and dark scheme.](../../../assets/images/4a6336729d96-ma25hban-06-3P.png)

_Vibrant color scheme and icon button types: Primary container; Filled button (Primary, On primary); Toggle tonal button: (Surface container, On surface); Standard button (On primary container)_

## Measurements

By default all toolbars are 64dp high, center-aligned, have equal padding between items, and have a minimum outside padding of 16dp.

### Docked toolbar

![Default internal padding of a docked toolbar.](../../../assets/images/4076d0948ab3-ma25j41t-07-3P.png)

_Default margins and padding; Margins and padding with leading, middle, and trailing content_

![2 docked toolbars with different margins and alignment.](../../../assets/images/1ef0485d0e12-ma25jqfl-08-3P.png)

_Alignment and padding can be configured to create unique layouts: Left and right alignment; Center-aligned, 8dp padding between items_

### Floating toolbar

![Diagram noting margin around edge of floating toolbar.](../../../assets/images/5627c1ae3114-ma25l6kh-09-3P.png)

_Default padding of floating toolbar_

![Diagram noting layout measurements.](../../../assets/images/fae72374dd60-ma25numd-10-3P.png)

_Floating toolbar size and padding measurements_

![Diagram noting layout margins.](../../../assets/images/0bb44c8b0c52-ma25or07-11-3P.png)

_Floating toolbar margins_

* * *

## Bottom app bar (baseline)

![Diagram of bottom app bar indicating the container.](../../../assets/images/b3d21cc09a05-ma25qmnu-12-3P.png)

_Container_

### Tokens & specs

Bottom app bar tokens are in one token set.

### TOKEN_TABLE

Component: Toolbars

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Toolbar - Color - Standard | md.comp.toolbar.standard | COMPONENT | For standard docked and floating toolbars. |
| Toolbar - Color - Vibrant | md.comp.toolbar.vibrant | COMPONENT | For vibrant docked and floating toolbars. |
| Toolbar - Docked | md.comp.toolbar.docked | COMPONENT | For docked toolbars. |
| Toolbar - Floating | md.comp.toolbar.floating | COMPONENT | For floating toolbars. |
| Toolbar - Floating - FAB | md.comp.toolbar.floating.fab | COMPONENT | For floating toolbars with a FAB in them. |
| Bottom app bar (baseline) | md.comp.bottom-app-bar | COMPONENT | Baseline bottom app bar container tokens. For expressive, use `md.comp.toolbar.docked` and `md.comp.toolbar.standard` instead. |

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Diagram of bottom app bar indicating its color mappings.](../../../assets/images/c2f04d3299d1-ma25vwtc-13-3P.png)

_Bottom app bar color role used for light and dark themes: Surface container_

### Measurements

![Diagram showing layout values and paddings for bottom app bar.](../../../assets/images/ca0944f9b9c2-ma25wn0p-14-3P.png)

_Bottom app bar padding and size measurements_

### Common layouts

![Side by side view of bottom app bars in different configurations.](../../../assets/images/3ccd13ffd70d-ma25xkg5-15-3P.png)

_Icon buttons and FAB; Icon buttons and no FAB_
