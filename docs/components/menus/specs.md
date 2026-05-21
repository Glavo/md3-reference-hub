---
title: "Menus"
source_url: "https://m3.material.io/components/menus/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/545fcc0e9973-mhp3tuy7-01-3P.png"
  - "assets/images/ac47a512f481-mhp47zoj-02-3P.png"
  - "assets/images/f0cf9e8fa83b-mhp4bydj-03-3P.png"
  - "assets/images/73d30fc27a4f-mhp4i2in-05-3P.png"
  - "assets/images/2dd13ba0baee-mhp4jv7k-07-3P.png"
  - "assets/images/47b2b0fa21d6-mhp4r65m-08-3P.png"
  - "assets/images/40f062cfb9f1-mhp4scno-10-3P.png"
  - "assets/images/e7162c531f34-mhp4upew-14-3P.png"
  - "assets/images/2f5c6a18bddc-mi5nwcqt-17-3P.png"
  - "assets/images/9a6efb43efd7-mhp5x7zn-19-3P.png"
  - "assets/images/dcc62b78f411-mhp5xzj4-20-3P.png"
  - "assets/images/cc760ae85cc1-mhp6035c-21-3P.png"
  - "assets/images/8fe1055974fd-mhp61n8r-22-3P.png"
  - "assets/images/a03caf2318fb-mhp6b6dr-23-3P.png"
  - "assets/images/fdc182de8e53-mhp6c83m-24-3P.png"
---

# Menus

## Specs

## Variants

### Vertical menus

Use vertical menus for a more expressive look and feel, including rounded corners, standard and vibrant color styles, more selection states, and submenu motion.

![2 vertical menus use shape and color to indicate selected state.](../../../assets/images/545fcc0e9973-mhp3tuy7-01-3P.png)

_Vertical menu with gap; Vertical menu with divider_

### Baseline variant

In M3 Expressive, baseline menu is still available to use, but doesn’t have the latest shapes, color styles, selection states, and motion. [See baseline menu specs](specs.md#a80df2f9-8610-4ce0-b3a3-b9ee749d5c98)

![A baseline menu variant with square corners and standard colors.](../../../assets/images/ac47a512f481-mhp47zoj-02-3P.png)

_A baseline menu has square corners, as compared to a vertical menu’s round corners and expressive styling_

| **Variant** | **M3** | **M3 Expressive** |
| --- | --- | --- |
| Vertical menus | \-- | Available |
| Menu (baseline) | Available | Available |

## Configurations

### Vertical menus layout

![2 menus: 1 standard, and 1 with a gap, creating groups.](../../../assets/images/f0cf9e8fa83b-mhp4bydj-03-3P.png)

_Standard; Grouped_

| **Category ** | **Configuration ** | **M3** | **M3 Expressiv****e** |
| --- | --- | --- | --- |
| Color | Standard | Available | Available |
| Vibrant | \-- | Available |  |
| Layout | Standard | Available | Available |
| Grouped | \-- | Available |  |

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

Component: Menus

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Menus - Color - Standard | md.comp.menus.standard | COMPONENT | Color tokens for the standard expressive menu. |
| Menus - Color - Vibrant | md.comp.menus.vibrant | COMPONENT | Color tokens for the vibrant expressive menu. |
| Menus - Common | md.comp.menus | COMPONENT | Common tokens for expressive menus. For baseline menus, use "Menu (baseline)" tokens `md.comp.menu`. |
| Menu (baseline) | md.comp.menu | COMPONENT | Tokens for baseline GM3 menus. For expressive menus, use `md.comp.menus` instead. |

## Anatomy

### Vertical menus

![A diagram of a vertical menu.](../../../assets/images/73d30fc27a4f-mhp4i2in-05-3P.png)

_Menu item; Leading icon (optional); Menu item text; Trailing icon (optional); Badge (optional); Trailing text (optional); Container; Supporting text (optional); Label text (optional); Gap (optional); Divider (optional); /_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

Menus have two color mappings:

-   Standard: Surface-based
-   Vibrant: Tertiary-based

These mappings provide options for lower or higher visual emphasis. Vibrant menus are more prominent so should be used sparingly.

![2 vertical menus: 1 with lower visual emphasis, and 1 vibrant menu with bold shades.](../../../assets/images/2dd13ba0baee-mhp4jv7k-07-3P.png)

_Standard color scheme; Vibrant color scheme_

### Standard colors

![2 vertical menus with standard color roles mapped to 11 elements.](../../../assets/images/47b2b0fa21d6-mhp4r65m-08-3P.png)

_Vertical menus color roles used for light and dark themes: On surface variant; On surface; On surface (state layer); Surface container low; On surface variant; On surface variant; Tertiary container (selected); On tertiary container (selected); On surface variant; On surface variant; On tertiary container (selected); /_

### Vibrant colors

![2 vertical menus with vibrant color roles mapped to 11 elements.](../../../assets/images/40f062cfb9f1-mhp4scno-10-3P.png)

_Vertical menus color roles used for light and dark themes: On tertiary container; On tertiary container; On tertiary container (state layer); Tertiary container; On tertiary container; On tertiary container; Tertiary (selected); On tertiary (selected); On tertiary container; On tertiary container; On tertiary (selected)_

## States

States are visual representations used to communicate the status of a component or an interactive element. [More on interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

Shape morphing in vertical menus creates an expressive active state. As focus moves between submenus, the corner shape changes to highlight the active menu. [More on menu focus](guidelines.md#7cc1d01b-a454-48c7-8306-e60347ffd17f)

![6 vertical menu states in light and dark themes.](../../../assets/images/e7162c531f34-mhp4upew-14-3P.png)

_Enabled; Disabled; Hovered; Focused; Pressed; Active (main menu reveals submenu); /_

## Measurements

![Vertical menu marked with spacing and padding measurements.](../../../assets/images/2f5c6a18bddc-mi5nwcqt-17-3P.png)

_Vertical menu padding and size measurements_

## Menu (baseline)

The baseline menu variant is available and continues to work in existing products. However, M3 expressive vertical menus are recommended for new designs.

### Baseline tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

Component: Menus

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Menus - Color - Standard | md.comp.menus.standard | COMPONENT | Color tokens for the standard expressive menu. |
| Menus - Color - Vibrant | md.comp.menus.vibrant | COMPONENT | Color tokens for the vibrant expressive menu. |
| Menus - Common | md.comp.menus | COMPONENT | Common tokens for expressive menus. For baseline menus, use "Menu (baseline)" tokens `md.comp.menu`. |
| Menu (baseline) | md.comp.menu | COMPONENT | Tokens for baseline GM3 menus. For expressive menus, use `md.comp.menus` instead. |

### Anatomy

![Diagram of 6 elements of a baseline menu.](../../../assets/images/9a6efb43efd7-mhp5x7zn-19-3P.png)

_List item; List item leading icon; List item trailing icon; Container; List item trailing text; Divider; /_

### Color

![9 color roles of a baseline menu in light and dark themes.](../../../assets/images/dcc62b78f411-mhp5xzj4-20-3P.png)

_Baseline menu color roles used for light and dark themes: On surface variant; On surface; On surface - opacity: 0.08; Surface container; On surface variant; On surface variant; On surface variant; Surface container highest; Outline variant_

### States

#### Default menu items

![Diagram numbering the 5 default states of a baseline menu.](../../../assets/images/cc760ae85cc1-mhp6035c-21-3P.png)

_Enabled; Disabled; Hovered; Focused; Pressed_

#### Selected menu items

![5 states of a selected baseline menu item.](../../../assets/images/8fe1055974fd-mhp61n8r-22-3P.png)

_Enabled; Disabled; Hovered; Focused; Pressed; /_

[State specs are in the token module above](specs.md#c811d2fa-469a-4e4e-9d9f-0f535c5c9b4c)

### Measurements

![Diagram of a baseline menu’s padding, text alignment, height, and width.](../../../assets/images/a03caf2318fb-mhp6b6dr-23-3P.png)

_Baseline menu padding and size measurements_

| Attribute | Value |
| --- | --- |
| Container width | 112dp min, 280dp max |
| Corner radius | 4dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding | 12dp |
| Left/right padding with-icon | 12dp |
| List item height | 48dp |
| Padding between elements within a list item | 12dp |
| Divider top/bottom padding | 8dp |
| Divider height | 1dp |
| Divider width | Dynamic |
| Leading/trailing icon size | 24dp |

### Configurations

A baseline menu appears when a person interacts with a button, action, or other control. 

A few examples:

1.  Button
2.  Text field
3.  Icon button
4.  Selected text

![Examples of 4 baseline menu inputs.](../../../assets/images/fdc182de8e53-mhp6c83m-24-3P.png)
