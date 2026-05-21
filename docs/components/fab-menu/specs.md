---
title: "FAB menu"
source_url: "https://m3.material.io/components/fab-menu/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:46:50.991Z"
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

![The FAB menu in its single variant.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3q0apv-01-3p.png?alt=media&token=6052e914-0b73-49b5-bb94-06710b22c865>)

_There’s one variant of FAB menu_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| FAB menu | \-- | Available |

## Configurations

![3 color configurations of FAB menus.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3q1bvc-02-3p.png?alt=media&token=999f9b38-e4fc-4555-9211-9a525aa24230>)

_Three color sets: Primary; Secondary; Tertiary_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Color | Primary set, secondary set, tertiary set | \-- | Available |

## Tokens & specs

Use the table's menu to switch token sets. The FAB menu has a common token set and six color sets, three for each element (close button and menu item). [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

Component: FAB menu

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| FAB menu - Common | md.comp.fab-menu | COMPONENT | Common tokens for all FAB menus. |
| FAB menu close button - Color - Primary | md.comp.fab-menu.primary.close-button | COMPONENT | Primary color tokens for the close button in the FAB menu. |
| FAB menu close button - Color - Secondary | md.comp.fab-menu.secondary.close-button | COMPONENT | Secondary color tokens for the close button in the FAB menu. |
| FAB menu close button - Color - Tertiary | md.comp.fab-menu.tertiary.close-button | COMPONENT | Tertiary color tokens for the close button in the FAB menu. |
| FAB menu list items - Color - Primary | md.comp.fab-menu.primary-container | COMPONENT | Primary container color tokens for the items in the FAB menu. |
| FAB menu list items - Color - Secondary | md.comp.fab-menu.secondary-container | COMPONENT | Secondary container color tokens for the items in the FAB menu. |
| FAB menu list items - Color - Tertiary | md.comp.fab-menu.tertiary-container | COMPONENT | Tertiary container color tokens for the items in the FAB menu. |

## Anatomy

![2 elements of a FAB menu.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3q41o4-03-3p.png?alt=media&token=0a40cd6b-762e-4236-b0a9-29363434bd34>)

_Close button; Menu item_

![5 FAB menus showing the range of 2–6 items.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3q4pvy-04-3p.png?alt=media&token=aeafe6af-aacf-413b-91ec-ae1551e1721f>)

_The FAB menu can have up to six items_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![12 colors of the FAB menu.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3q6ipd-05-3p.png?alt=media&token=faa394aa-1701-4038-a704-c838e6b7e5f9>)

_On primary container; Primary container; On primary; Primary; On secondary container; Secondary container; On secondary; Secondary; On tertiary container; Tertiary container; On tertiary; Tertiary_

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states)

### Close button

![4 states of the FAB menu close button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3q7h0v-06-3p.png?alt=media&token=9965cb9f-131e-4e9d-951d-e2d96a9fa291>)

_Close button states in light and dark themes: Enabled; Hovered; Focused; Pressed_

### Menu item

![4 states of the FAB menu items.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3q8bqk-07-3p.png?alt=media&token=66a1f615-4317-43a0-b515-c235023816c1>)

_Menu item states in light and dark themes: Enabled; Hovered; Focused; Pressed_

## Measurements

FAB menu items share the same measurements as the medium button specs. 

The close button should always be 56dp.

![FAB menu size measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3qcpur-08-3p.png?alt=media&token=cc0e1910-0146-45cb-a930-422d7dd365ab>)

_FAB menu size measurements_

The FAB menu animates from the top trailing edge of the FAB to ensure a smooth animation.

![FAB on a mobile screen with 16dp margins annotated.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3qf9rm-08-3p.png?alt=media&token=69caec5c-3f45-4ee5-9f75-b7acd8485b0b>)

_The FAB should always have 16dp margins_

![FAB menu opened from a FAB has matching margins of 16dp.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3qfqs9-10-3p.png?alt=media&token=a87058b9-e220-4aca-ab98-eeba2686baa5>)

_The close button and FAB share the top trailing corner as an anchor and appear in the same place_

Larger FABs will place the FAB menu slightly higher, with larger margins underneath.

![Medium FAB on a mobile screen with 16dp margins annotated.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3qhher-11-3p.png?alt=media&token=e738416d-1893-44e5-814a-c614176b3709>)

_The medium FAB placement has 16dp margins_

![FAB menu opened from the medium FAB has a 40dp margin from bottom of screen.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3qhtwe-12-3p.png?alt=media&token=f67723d9-0b12-44fd-9c53-5072affd847a>)

_The close button is placed higher to align with the top of the medium FAB_

![Large FAB on a mobile screen with 16dp margins annotated.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3qj0c0-13-3p.png?alt=media&token=c0c1bcf6-a3a5-4579-8b5f-934d4a89ae59>)

_The large FAB placement has 16dp margins_

![FAB menu opened from the large FAB has a 56dp margin from bottom of screen.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3qjff7-14-3p.png?alt=media&token=2882a5b7-fdeb-4fb5-b3dc-c1ef40868c81>)

_The close button is placed higher to align with the top of the large FAB_

On web, the FAB menu opens from the FAB, and inherits its states and specs from the baseline menu component. 

The gap between the FAB and menu can vary, but 4dp is recommended.

![FAB menu on web states and specifications.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmn7ox1xs-04-3P.png?alt=media&token=3539736b-2946-4a4b-afe4-50c9e6ed50e6>)

_Spacing and interaction on FAB menu for web: Enabled; Hovered; Selected_
