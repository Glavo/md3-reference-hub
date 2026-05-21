---
title: "Navigation drawer"
source_url: "https://m3.material.io/components/navigation-drawer/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:27:03.936Z"
section: "components"
assets:
  - "assets/images/39e28301e737-mobm461s-1-3P-3p.png"
  - "assets/images/b7067955cc8a-ma6b7pyr-2-3p.png"
  - "assets/images/93478c23447b-ma77ejxi-3b-3p.png"
  - "assets/images/c9dcad271b84-mobmv0i5-4-3p.png"
  - "assets/images/6ebb2d94cd70-ma6bb7nw-5-3p.png"
  - "assets/images/5fb358b10364-ma775z3o-6-3p-3p.png"
  - "assets/images/c6f33b4d74ba-ma7769l7-7-3p-3p.png"
---

# Navigation drawer

Navigation drawers let people switch between UI views on larger devices

## Specs

star

Note:

The navigation drawer is no longer recommended in the Material 3 Expressive update. For those who have updated, use an [expanded navigation rail](https://m3.material.io/m3/pages/navigation-rail/overview/), which has mostly the same functionality of the navigation drawer and adapts better across window size classes.

![Navigation drawer diagram numbering 7 elements](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmobm461s-1-3P-3p.png?alt=media&token=c824150d-669e-4277-a2a3-4fabbfe78c87>)

_Container; Headline; Label text; Active indicator; Badge label text; Scrim; Icon_

## Tokens & specs

The navigation drawer has one token set. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

Component: Navigation drawer

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Navigation drawers (baseline) | md.comp.navigation-drawer | COMPONENT | For the baseline navigation drawer. For expressive, use the expanded nav rail instead `md.comp.nav-rail.expanded`. |

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Navigation drawer diagram numbering 9 color roles.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma6b7pyr-2-3p.png?alt=media&token=9b66c873-2f9c-49a4-bddc-a1ea7b223280>)

_Navigation drawer color roles used for light and dark schemes: Surface container low; On surface variant; On secondary container; On secondary container; Secondary container; On secondary container; On surface variant; On surface variant; Scrim_

For divider color roles, go to [divider specs](../divider/specs.md).

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![4 navigation drawers illustrating enabled, hovered, focused, and pressed states.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma77ejxi-3b-3p.png?alt=media&token=3f75133e-ade4-4a4b-b6f0-bc72a90a7b3b>)

_Navigation drawer states: Enabled; Hovered; Focused; Pressed_

[State specs are in the tokens module above](specs.md#6207b00f-a259-41d2-8146-b6efc6380976)

## Measurements

### Standard navigation drawer

![Standard navigation drawer with measurements shown for various elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmobmv0i5-4-3p.png?alt=media&token=6731ae6e-d242-4f1b-9b2a-414bc4948d94>)

_Element size measurements_

![Standard navigation drawer with measurements shown for padding and margins.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma6bb7nw-5-3p.png?alt=media&token=109e0a51-8d58-487a-b1f1-07ceb2e97b6b>)

_Padding and margins_

| Attribute | Value |
| --- | --- |
| Container height | 100% |
| Container width | 360dp |
| Container shape | 0,16,16,0dp corner radii |
| Icon size | 24dp |
| Active indicator height | 56dp |
| Active indicator shape | 28dp |
| Active indicator width | 336dp |
| Horizontal label alignment | Start-aligned |
| Left padding | 28dp |
| Right padding | 28dp |
| Active indicator padding | 12dp |
| Padding between elements | 0dp |

### Modal navigation drawer

![Modal navigation drawer with measurements shown for various elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma775z3o-6-3p-3p.png?alt=media&token=554989e5-00c1-4338-8ab8-df73927626e4>)

_Element size measurements_

![Modal navigation drawer with measurements shown for padding and margins.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma7769l7-7-3p-3p.png?alt=media&token=caaccf88-701f-44bf-bcb9-2569e95d000c>)

_Padding and margins_

| Attribute | Value |
| --- | --- |
| Container height | 100% |
| Container width | 360dp |
| Icon size | 24dp |
| Active indicator height | 56dp |
| Active indicator shape | 28dp |
| Active indicator width | 336dp |
| Horizontal label alignment | Start-aligned |
| Left padding | 28dp |
| Right padding | 28dp |
| Active indicator padding | 12dp |
| Padding between elements | 0dp |
