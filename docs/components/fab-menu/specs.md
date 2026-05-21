---
title: "FAB menu"
source_url: "https://m3.material.io/components/fab-menu/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/d0bd754269cd-ma3q0apv-01-3p.png"
  - "assets/images/4b37ca20fbc0-ma3q1bvc-02-3p.png"
  - "assets/images/c4b41ea32b7d-ma3q41o4-03-3p.png"
  - "assets/images/3d2a4094a6e4-ma3q4pvy-04-3p.png"
  - "assets/images/b73b88f6ee01-ma3q6ipd-05-3p.png"
  - "assets/images/961437ab47d3-ma3q7h0v-06-3p.png"
  - "assets/images/8cfdc1c811e1-ma3q8bqk-07-3p.png"
  - "assets/images/0572aeaa0379-ma3qcpur-08-3p.png"
  - "assets/images/8e656409b2d4-ma3qf9rm-08-3p.png"
  - "assets/images/cfc74b92876e-ma3qfqs9-10-3p.png"
  - "assets/images/ea1892131227-ma3qhher-11-3p.png"
  - "assets/images/50d06d44c5fb-ma3qhtwe-12-3p.png"
  - "assets/images/5c9183243f3b-ma3qj0c0-13-3p.png"
  - "assets/images/e77bcf70677a-ma3qjff7-14-3p.png"
  - "assets/images/8b53b0cc6636-mn7ox1xs-04-3P.png"
---

# FAB menu

The floating action button (FAB) menu opens from a FAB to display multiple related actions

## Specs

## Variants

![The FAB menu in its single variant.](../../../assets/images/d0bd754269cd-ma3q0apv-01-3p.png)

_There’s one variant of FAB menu_

Variant

M3

M3 Expressive

FAB menu

\--

Available

## Configurations

![3 color configurations of FAB menus.](../../../assets/images/4b37ca20fbc0-ma3q1bvc-02-3p.png)

_Three color sets:PrimarySecondaryTertiary_

Category

Configuration

M3

M3 Expressive

Color

Primary set, secondary set, tertiary set

\--

Available

## Tokens & specs

Use the table's menu to switch token sets. The FAB menu has a common token set and six color sets, three for each element (close button and menu item). [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

- **system:** Google Material 3

## Anatomy

![2 elements of a FAB menu.](../../../assets/images/c4b41ea32b7d-ma3q41o4-03-3p.png)

_Close buttonMenu item_

![5 FAB menus showing the range of 2–6 items.](../../../assets/images/3d2a4094a6e4-ma3q4pvy-04-3p.png)

_The FAB menu can have up to six items_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![12 colors of the FAB menu.](../../../assets/images/b73b88f6ee01-ma3q6ipd-05-3p.png)

_On primary containerPrimary containerOn primaryPrimaryOn secondary containerSecondary containerOn secondarySecondaryOn tertiary containerTertiary containerOn tertiaryTertiary_

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states)

### Close button

![4 states of the FAB menu close button.](../../../assets/images/961437ab47d3-ma3q7h0v-06-3p.png)

_Close button states in light and dark themes: EnabledHoveredFocusedPressed_

### Menu item

![4 states of the FAB menu items.](../../../assets/images/8cfdc1c811e1-ma3q8bqk-07-3p.png)

_Menu item states in light and dark themes:EnabledHoveredFocusedPressed_

## Measurements

FAB menu items share the same measurements as the medium button specs. 

The close button should always be 56dp.

![FAB menu size measurements.](../../../assets/images/0572aeaa0379-ma3qcpur-08-3p.png)

_FAB menu size measurements_

The FAB menu animates from the top trailing edge of the FAB to ensure a smooth animation.

![FAB on a mobile screen with 16dp margins annotated.](../../../assets/images/8e656409b2d4-ma3qf9rm-08-3p.png)

_The FAB should always have 16dp margins_

![FAB menu opened from a FAB has matching margins of 16dp.](../../../assets/images/cfc74b92876e-ma3qfqs9-10-3p.png)

_The close button and FAB share the top trailing corner as an anchor and appear in the same place_

Larger FABs will place the FAB menu slightly higher, with larger margins underneath.

![Medium FAB on a mobile screen with 16dp margins annotated.](../../../assets/images/ea1892131227-ma3qhher-11-3p.png)

_The medium FAB placement has 16dp margins_

![FAB menu opened from the medium FAB has a 40dp margin from bottom of screen.](../../../assets/images/50d06d44c5fb-ma3qhtwe-12-3p.png)

_The close button is placed higher to align with the top of the medium FAB_

![Large FAB on a mobile screen with 16dp margins annotated.](../../../assets/images/5c9183243f3b-ma3qj0c0-13-3p.png)

_The large FAB placement has 16dp margins_

![FAB menu opened from the large FAB has a 56dp margin from bottom of screen.](../../../assets/images/e77bcf70677a-ma3qjff7-14-3p.png)

_The close button is placed higher to align with the top of the large FAB_

On web, the FAB menu opens from the FAB, and inherits its states and specs from the baseline menu component. 

The gap between the FAB and menu can vary, but 4dp is recommended.

![FAB menu on web states and specifications.](../../../assets/images/8b53b0cc6636-mn7ox1xs-04-3P.png)

_Spacing and interaction on FAB menu for web:EnabledHoveredSelected_
