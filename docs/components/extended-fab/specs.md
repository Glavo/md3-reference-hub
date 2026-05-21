---
title: "Extended FABs"
source_url: "https://m3.material.io/components/extended-fab/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:53:59.363Z"
section: "components"
assets:
  - "assets/images/0a7a08bc5326-ma3rfc55-01-3P.png"
  - "assets/images/c08cbeb513b6-ma3rfwo5-02-3P.png"
  - "assets/images/6312ddb56a64-ma3rgmo9-03-3P.png"
  - "assets/images/ce1f182a9511-ma3rha4a-04-3P.png"
  - "assets/images/ac6f8cdc99e9-ma3ri2r1-05-3P.png"
  - "assets/images/725545795226-maljqck5-06-3P.png"
  - "assets/images/a6868cb7ae56-ma3rj563-07-3P.png"
  - "assets/images/8e4790c6a96e-ma3rjn8g-08-3P.png"
  - "assets/images/0ffeeca0fbb4-ma3rm9q3-10-3P.png"
  - "assets/images/952983238f04-ml9o6q6p-15-3P.png"
  - "assets/images/ad2847b8dbde-ml9o6v12-16-3P.png"
  - "assets/images/d1f6d27d7e5b-ma3rmvmo-11-3P.png"
  - "assets/images/6e1db152da5c-ma3rnofz-12-3P.png"
  - "assets/images/ea5474e7eeaf-maljrky7-13-3P.png"
  - "assets/images/ffab5c35f570-maebvm3w-14-3P.png"
  - "assets/images/3dfffa03a2ce-maebvv3o-15-3P.png"
---

# Extended FABs

## Specs

## Variants

![3 variants of extended FABs.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3rfc55-01-3P.png?alt=media&token=6a57bbbf-b6f3-4f09-8343-d327e4581fbc>)

_Small extended FAB; Medium extended FAB; Large extended FAB_

### Baseline variants

The baseline extended FAB is no longer recommended in the M3 expressive update. Use a small extended FAB; the type style was updated from **label large** to **title medium**, and the inner padding was reduced. [View baseline extended FAB specs](specs.md#01e114e6-8c3d-4d39-9376-65aa5c10e01b)

![1 baseline extended FAB.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3rfwo5-02-3P.png?alt=media&token=eb54fbf9-bad6-4aa9-8407-0ebd348d1787>)

_Extended FAB_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Small extended FAB | \-- | Available |
| Medium extended FAB | \-- | Available |
| Large extended FAB | \-- | Available |
| Extended FAB (baseline) | Available | Not recommended. Use **small extended FAB.** |

## Tokens & specs

Use the table's menu to select a token set. Extended FAB tokens are organized by size and color.

### TOKEN_TABLE

Component: Extended FAB

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Extended FAB - Color - Tonal primary | md.comp.extended-fab.primary-container | COMPONENT | For tonal primary container extended FABs. |
| Extended FAB - Color - Tonal secondary | md.comp.extended-fab.secondary-container | COMPONENT | For tonal secondary container extended FABs. |
| Extended FAB - Color - Tonal tertiary | md.comp.extended-fab.tertiary-container | COMPONENT | For tonal tertiary container extended FABs. |
| Extended FAB - Size - Baseline | md.comp.extended-fab | COMPONENT | For baseline extended FABs. For expressive, use the small extended FAB token set `md.comp.extended-fab.small` instead. |
| Extended FAB - Size - Large | md.comp.extended-fab.large | COMPONENT | For large extended FABs. |
| Extended FAB - Size - Medium | md.comp.extended-fab.medium | COMPONENT | For medium extended FABs. |
| Extended FAB - Size - Small | md.comp.extended-fab.small | COMPONENT | For expressive small extended FABs. |
| Extended FAB - Color - Primary | md.comp.extended-fab.primary | COMPONENT | For primary color extended FABs. |
| Extended FAB - Color - Surface | md.comp.extended-fab.surface | COMPONENT | For surface color extended FABs. Not recommended with expressive extended FABs. |
| Extended FAB - Color - Secondary | md.comp.extended-fab.secondary | COMPONENT | For secondary color extended FABs. |
| Extended FAB - Color - Tertiary | md.comp.extended-fab.tertiary | COMPONENT | For tertiary color extended FABs. |
| Extended FAB - Color - Branded | md.comp.extended-fab.branded | COMPONENT | For branded color extended FABs. Not recommended with expressive extended FABs. |

## Anatomy

![3 elements of extended FABs.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3rgmo9-03-3P.png?alt=media&token=79794fe0-1648-40c3-8ecf-5e5592d12d16>)

_Container; Label text; Icon_

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### Color styles

Extended FABs can use several combinations of **color** and **on color** styles, such as **primary** and **on primary**. The following color mappings provide the same level of contrast and functionality, so choose a color mapping based on visual preference.

![6 extended FAB color styles.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3rha4a-04-3P.png?alt=media&token=e58d72e9-c13e-4a24-946b-f34ef588516a>)

_Extended FAB color roles used for light and dark schemes: Primary container & on primary container (default); Secondary container & on secondary container; Tertiary container & on tertiary container; Primary & on primary; Secondary & on secondary; Tertiary & on tertiary_

### Baseline color styles

Extended FABs should no longer use surface color styles. They’re still available, but not recommended.

![1 baseline extended FAB color style.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3ri2r1-05-3P.png?alt=media&token=262c3137-4f81-4e54-a410-502c63d52210>)

_Surface container FAB_

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

When using a non-default color mapping for extended FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for primary mapping should be md.sys.color.primary.

![4 states of extended FABs.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmaljqck5-06-3P.png?alt=media&token=fd04f135-2a40-4ee3-bb14-9673911382d7>)

_Enabled; Hovered - elevation 4; Focused; Pressed_

## Measurements

![Extended FAB padding and size measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3rj563-07-3P.png?alt=media&token=a20a7b7a-2fb6-4c4d-829c-a97dc72e8f26>)

_Size and padding measurements of the small, medium, and large extended FABs_

![Extended FAB margin measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3rjn8g-08-3P.png?alt=media&token=22bc3f2b-72fe-4857-8ebe-662c70054166>)

_Extended FABs should have margins of 16dp_

## Baseline extended FAB

![3 elements of baseline extended FAB.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3rm9q3-10-3P.png?alt=media&token=621815a8-8ecf-4aef-accc-2997113f330e>)

_Container; Label text; Icon_

### Baseline configurations

![Baseline extended FAB with icon.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fml9o6q6p-15-3P.png?alt=media&token=f58280d6-56a7-4c66-815c-4325264115e5>)

_With icon_

![Baseline extended FAB without icon.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fml9o6v12-16-3P.png?alt=media&token=42cd1ef1-6133-4d16-bfbb-5fcc172a5834>)

_Without icon_

### Baseline tokens

Use the table's menu to select a token set. The baseline extended FAB token sets are organized by common tokens, then by surface and branded color styles. Other color styles like primary, secondary, and tertiary are still used by the latest extended FABs.

### TOKEN_TABLE

Component: Extended FAB

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Extended FAB - Color - Tonal primary | md.comp.extended-fab.primary-container | COMPONENT | For tonal primary container extended FABs. |
| Extended FAB - Color - Tonal secondary | md.comp.extended-fab.secondary-container | COMPONENT | For tonal secondary container extended FABs. |
| Extended FAB - Color - Tonal tertiary | md.comp.extended-fab.tertiary-container | COMPONENT | For tonal tertiary container extended FABs. |
| Extended FAB - Size - Baseline | md.comp.extended-fab | COMPONENT | For baseline extended FABs. For expressive, use the small extended FAB token set `md.comp.extended-fab.small` instead. |
| Extended FAB - Size - Large | md.comp.extended-fab.large | COMPONENT | For large extended FABs. |
| Extended FAB - Size - Medium | md.comp.extended-fab.medium | COMPONENT | For medium extended FABs. |
| Extended FAB - Size - Small | md.comp.extended-fab.small | COMPONENT | For expressive small extended FABs. |
| Extended FAB - Color - Primary | md.comp.extended-fab.primary | COMPONENT | For primary color extended FABs. |
| Extended FAB - Color - Surface | md.comp.extended-fab.surface | COMPONENT | For surface color extended FABs. Not recommended with expressive extended FABs. |
| Extended FAB - Color - Secondary | md.comp.extended-fab.secondary | COMPONENT | For secondary color extended FABs. |
| Extended FAB - Color - Tertiary | md.comp.extended-fab.tertiary | COMPONENT | For tertiary color extended FABs. |
| Extended FAB - Color - Branded | md.comp.extended-fab.branded | COMPONENT | For branded color extended FABs. Not recommended with expressive extended FABs. |

### Baseline colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![3 baseline extended FAB color roles.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3rmvmo-11-3P.png?alt=media&token=d7936f8b-e675-46ad-96c2-5ad14fd729cb>)

_Extended FAB color roles used for light and dark schemes: Primary container + shadow; On primary container; On primary container_

#### Additional color mappings

Extended FABs can use other combinations of container and icon colors. The color mappings below provide the same legibility and functionality as the default, so the color mapping you use depends on style alone.

![3 deprecated extended FABs with different container and icon colors.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma3rnofz-12-3P.png?alt=media&token=89b9a842-01e1-4dad-a525-edee128e9051>)

_Extended FABs can use different combinations of container and icon colors_

### Baseline states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states)

![4 states of baseline extended FAB.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmaljrky7-13-3P.png?alt=media&token=b2fa64b8-d9c7-42df-a65a-91b7b880aed6>)

_Enabled; Hovered; Focused; Pressed_

### Baseline measurements

![Margins of baseline extended FAB.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmaebvm3w-14-3P.png?alt=media&token=f68926a0-c6a7-44c6-9c70-5c603af855ac>)

_Extended FABs have a padding of 16dp_

![Size of baseline extended FAB while on screen.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmaebvv3o-15-3P.png?alt=media&token=c125c6fa-e299-426a-98d4-19e12ef62f0d>)

_Extended FAB height, width, and icon size_

| Attribute | Value |
| --- | --- |
| Container height | 56dp |
| Container width | Dynamic, 80dp min |
| Container shape | 16dp corner radius |
| Icon size | 24dp |
| Padding | 16dp |
