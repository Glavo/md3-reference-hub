---
title: "Menus"
source_url: "https://m3.material.io/components/menus/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T03:01:23.896Z"
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

![2 vertical menus use shape and color to indicate selected state.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp3tuy7-01-3P.png?alt=media&token=53c53a22-2391-40c9-bb50-0a1bae72569e>)

_Vertical menu with gap; Vertical menu with divider_

### Baseline variant

In M3 Expressive, baseline menu is still available to use, but doesn’t have the latest shapes, color styles, selection states, and motion. [See baseline menu specs](specs.md#a80df2f9-8610-4ce0-b3a3-b9ee749d5c98)

![A baseline menu variant with square corners and standard colors.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp47zoj-02-3P.png?alt=media&token=b7fa2ee6-ebb2-4d3c-a6e1-19e4a8edc452>)

_A baseline menu has square corners, as compared to a vertical menu’s round corners and expressive styling_

| **Variant** | **M3** | **M3 Expressive** |
| --- | --- | --- |
| Vertical menus | \-- | Available |
| Menu (baseline) | Available | Available |

## Configurations

### Vertical menus layout

![2 menus: 1 standard, and 1 with a gap, creating groups.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp4bydj-03-3P.png?alt=media&token=2eb83f0c-2aa9-4736-9acc-8f10b6052dbf>)

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

![A diagram of a vertical menu.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp4i2in-05-3P.png?alt=media&token=8b39eb86-be0a-42d3-80cd-60b703d6180b>)

_Menu item; Leading icon (optional); Menu item text; Trailing icon (optional); Badge (optional); Trailing text (optional); Container; Supporting text (optional); Label text (optional); Gap (optional); Divider (optional); /_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

Menus have two color mappings:

-   Standard: Surface-based
-   Vibrant: Tertiary-based

These mappings provide options for lower or higher visual emphasis. Vibrant menus are more prominent so should be used sparingly.

![2 vertical menus: 1 with lower visual emphasis, and 1 vibrant menu with bold shades.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp4jv7k-07-3P.png?alt=media&token=f38379bf-4e9c-46ae-9d1f-83b879e3f729>)

_Standard color scheme; Vibrant color scheme_

### Standard colors

![2 vertical menus with standard color roles mapped to 11 elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp4r65m-08-3P.png?alt=media&token=e7a0a642-b2a5-4124-8710-f9fc5e508f25>)

_Vertical menus color roles used for light and dark themes: On surface variant; On surface; On surface (state layer); Surface container low; On surface variant; On surface variant; Tertiary container (selected); On tertiary container (selected); On surface variant; On surface variant; On tertiary container (selected); /_

### Vibrant colors

![2 vertical menus with vibrant color roles mapped to 11 elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp4scno-10-3P.png?alt=media&token=3e3303c5-3778-46df-929d-8433ac2a6d90>)

_Vertical menus color roles used for light and dark themes: On tertiary container; On tertiary container; On tertiary container (state layer); Tertiary container; On tertiary container; On tertiary container; Tertiary (selected); On tertiary (selected); On tertiary container; On tertiary container; On tertiary (selected)_

## States

States are visual representations used to communicate the status of a component or an interactive element. [More on interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

Shape morphing in vertical menus creates an expressive active state. As focus moves between submenus, the corner shape changes to highlight the active menu. [More on menu focus](guidelines.md#7cc1d01b-a454-48c7-8306-e60347ffd17f)

![6 vertical menu states in light and dark themes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp4upew-14-3P.png?alt=media&token=9a23182f-ffb3-4156-ae3c-9e6daf5e22f0>)

_Enabled; Disabled; Hovered; Focused; Pressed; Active (main menu reveals submenu); /_

## Measurements

![Vertical menu marked with spacing and padding measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmi5nwcqt-17-3P.png?alt=media&token=0bbb9bfb-50f9-405c-af84-504554eebb6f>)

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

![Diagram of 6 elements of a baseline menu.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp5x7zn-19-3P.png?alt=media&token=bb80c591-2185-4774-938d-ade6c787d2cb>)

_List item; List item leading icon; List item trailing icon; Container; List item trailing text; Divider; /_

### Color

![9 color roles of a baseline menu in light and dark themes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp5xzj4-20-3P.png?alt=media&token=608252b6-49b6-4fbb-950e-e34bb3b23874>)

_Baseline menu color roles used for light and dark themes: On surface variant; On surface; On surface - opacity: 0.08; Surface container; On surface variant; On surface variant; On surface variant; Surface container highest; Outline variant_

### States

#### Default menu items

![Diagram numbering the 5 default states of a baseline menu.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp6035c-21-3P.png?alt=media&token=0a96dac7-f21a-4e63-aab3-d77b4e2687d2>)

_Enabled; Disabled; Hovered; Focused; Pressed_

#### Selected menu items

![5 states of a selected baseline menu item.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp61n8r-22-3P.png?alt=media&token=c0c51609-bc02-4275-8017-41bedcf4de55>)

_Enabled; Disabled; Hovered; Focused; Pressed; /_

[State specs are in the token module above](specs.md#c811d2fa-469a-4e4e-9d9f-0f535c5c9b4c)

### Measurements

![Diagram of a baseline menu’s padding, text alignment, height, and width.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp6b6dr-23-3P.png?alt=media&token=be7b69e3-6291-4725-ab2c-ec443cfe07f0>)

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

![Examples of 4 baseline menu inputs.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhp6c83m-24-3P.png?alt=media&token=98b74598-7650-44d3-9fa5-ec73ed8b6564>)
