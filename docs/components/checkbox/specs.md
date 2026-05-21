---
title: "Checkbox"
source_url: "https://m3.material.io/components/checkbox/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T03:01:23.896Z"
section: "components"
assets:
  - "assets/images/adec38612545-memmstmc-1-3P.png"
  - "assets/images/397c3a43a343-memmtsu5-2-3P.png"
  - "assets/images/1631d3d23279-memmvnkr-3-3P.png"
  - "assets/images/3e93318de949-memmxoan-4-3P.png"
  - "assets/images/0d6c7bb91103-memn204f-5-3P.png"
---

# Checkbox

Checkboxes let users select one or more items from a list, or turn an item on or off

## Specs

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.

### TOKEN_TABLE

Component: Checkbox

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Checkbox | md.comp.checkbox | COMPONENT | For checkboxes. |

## Checkbox

![Diagram of checkbox indicating the 2 parts of its anatomy.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmemmstmc-1-3P.png?alt=media&token=924643e8-47c7-4874-8271-434f69003145>)

_Container; Icon_

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Checkbox color roles in light and dark themes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmemmtsu5-2-3P.png?alt=media&token=ffcff7c9-bb3d-4de7-be55-117c9cf5fe0b>)

_Checkbox; State-layer; Icon; /_

### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

![Checkboxes with text labels. The text color is the same for checked and unchecked checkboxes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmemmvnkr-3-3P.png?alt=media&token=8ead9094-8d12-42db-9365-a68124755b51>)

_The text color remains the same regardless if the checkbox is selected or not_

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![Side by side view of states in light and dark themes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmemmxoan-4-3P.png?alt=media&token=9dc838c3-495c-4055-a7e4-aca61fe84f4e>)

_Enabled; Disabled; Hovered; Focused; Pressed_

## Measurements

![Diagram of a selected checkbox with a container width and height of 18dp and a state-layer width and height of 40dp.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmemn204f-5-3P.png?alt=media&token=f0da40bb-17ba-4681-9e12-b76629ef8f5e>)

| Attribute | Value |
| --- | --- |
| Container size | 18dp |
| Container corner shape | 2dp |
| Icon size | 18dp |
| Icon alignment | Center-aligned |
| Target size | 48dp |
| State-layer size | 40dp |
