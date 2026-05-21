---
title: "Chips"
source_url: "https://m3.material.io/components/chips/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:35:31.341Z"
section: "components"
assets:
  - "assets/images/54bfc07dcff0-m01dv1nz-1.png"
  - "assets/images/f4bb9f661b0e-m01dv6ou-2.png"
  - "assets/images/ba865ad1bc7f-m8sg1d2r-03-3P.png"
  - "assets/images/a88000314f8d-m01dvj22-4.png"
  - "assets/images/1479dde443b5-m01dvpzm-5.png"
  - "assets/images/847ee1a5d814-mmp8q5ab-06-3P.png"
  - "assets/images/35b44fea02b4-m8sg2d2t-07-3P.png"
  - "assets/images/e46181d9bf46-m01dwqif-8.png"
  - "assets/images/c62eef564280-m01dwxct-9.png"
  - "assets/images/ad2251e2f83a-m02q3wit-10-3p.png"
  - "assets/images/c63dff074446-m8sg4m8e-11-3P.png"
  - "assets/images/dc6a00912874-m34ufke8-12-3p.png"
  - "assets/images/fe132d2470ef-m01dxq8p-13.png"
  - "assets/images/d296853652eb-m01dxxwr-14.png"
  - "assets/images/e9892a50b458-m8sg5r6a-15-3P.png"
  - "assets/images/e07890296d55-m01dybi0-16.png"
---

# Chips

Chips help people enter information, make selections, filter content, or trigger actions

## Specs

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and values.

### TOKEN_TABLE

Component: Chips

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Chip - Input | md.comp.input-chip | COMPONENT | For input chips. |
| Chip - Assist | md.comp.assist-chip | COMPONENT | For assist chips. |
| Chip - Suggestion | md.comp.suggestion-chip | COMPONENT | For suggestion chips. |
| Chip - Filter | md.comp.filter-chip | COMPONENT | For filter chips. |

## Assist chip

![Assist chip diagram numbering 3 elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm01dv1nz-1.png?alt=media&token=8b66182d-b209-4110-a780-7c2fea9f89f8>)

_Container; Label text; Leading icon_

### Assist chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Assist chip diagram numbering 4 color elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm01dv6ou-2.png?alt=media&token=71af17c7-755b-4e82-8783-3d14e68afb74>)

_Assist chip color roles used for light and dark themes: Surface container low (optional); On surface; Outline; Primary_

### Assist chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![36 assist chips illustrating combinations of styles, selection and non-selection, and 6 interaction states.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm8sg1d2r-03-3P.png?alt=media&token=603c0499-acc9-4157-bebc-d11d56548e5e>)

_Selected and unselected assist chip states: Enabled; Disabled; Hovered; Focused; Pressed; Dragged_

### Assist chip measurements

![3 assist chips with measurements shown for variants with and without a leading icon.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm01dvj22-4.png?alt=media&token=6d55f422-809c-4299-b51f-a92f45987516>)

_Assist chip padding and size measurements_

| Attribute | Value |
| --- | --- |
| Height | 32dp |
| Shape | 8dp corner radius |
| Icon size | 18dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding | 16dp |
| Left/right padding with icon | 8dp |
| Padding between elements | 8dp |

## Filter chip

![Filter chip diagram numbering 4 elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm01dvpzm-5.png?alt=media&token=6302536e-9843-48e9-acf8-8f25e4616e14>)

_Container; Label text; Leading icon; Trailing icon_

### Filter chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Filter chip diagram numbering 4 color elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmp8q5ab-06-3P.png?alt=media&token=cb486b8e-952e-4d83-b7b7-f549bc909c33>)

_Filter chip color roles used for light and dark themes: On surface variant; On secondary container; Secondary container; Outline variant; Surface container low (optional)_

### Filter chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![24 filter chips showing combinations of elevated, non-elevated, selected, and non-selected styles, and 6 interaction states.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm8sg2d2t-07-3P.png?alt=media&token=33f4b292-c821-4621-8d79-e208cf3d41ca>)

_Selected and unselected filter chip states: Enabled; Disabled; Hovered; Focused; Pressed; Dragged_

### Filter chip measurements

![3 filter chips with measurements shown for types with and without a leading icon and trailing icon.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm01dwqif-8.png?alt=media&token=4fcc217b-122a-442a-b135-a812be0e2752>)

_Filter chip padding and size measurements_

| Attribute | Value |
| --- | --- |
| Container height | 32dp |
| Container shape | 8dp corner radius |
| Icon size | 18dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding | 16dp |
| Left/right padding with icon | 8dp |
| Padding between elements | 8dp |

## Input chip

![Input chip diagram numbering 4 elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm01dwxct-9.png?alt=media&token=f502e45b-c29b-4e36-b02a-19f61bf2cf1d>)

_Container; Label text; Trailing icon; Leading icon_

### Input chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Input chip diagram numbering 5 color elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm02q3wit-10-3p.png?alt=media&token=2930e234-d1bc-45d6-a0b7-5030aa65e856>)

_Input chip color roles used for light and dark themes: On surface variant; Surface container low (optional); On surface variant; On surface variant; Outline variant; Primary; Secondary container; On secondary container; On secondary container_

### Input chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![33 input chips illustrating combinations of styles, selection and non-selection, and 6 interaction states.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm8sg4m8e-11-3P.png?alt=media&token=f0519dc3-5dd1-4c3d-af7d-941f77fa286e>)

_Selected and unselected input chip states: Enabled; Disabled; Hovered; Focused; Pressed; Dragged_

### Input chip measurements

![2 input chips with measurements: 1 with a trailing icon only; 1 with an avatar as a leading icon and a trailing icon.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm34ufke8-12-3p.png?alt=media&token=accd17a3-9af8-478e-b57b-7ba29d34a792>)

_Input chip padding and size measurements_

| Attribute | Value |
| --- | --- |
| Container height | 32dp |
| Container shape | 8dp corner radius |
| Icon size | 18dp |
| Avatar shape | 12dp corner radius |
| Avatar size | 24dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left padding for avatar | 4dp |
| Right padding for avatar | 8dp |
| Left/right padding for icon | 8dp |
| Padding between elements | 8dp |
| Target size for close icon | Min 48dp |

## Suggestion chip

![Suggestion chip diagram numbering 2 elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm01dxq8p-13.png?alt=media&token=5f745c90-2770-48d3-a0bb-ccd1215ec1eb>)

_Container; Label text_

### Suggestion chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Suggestion chip diagram numbering 3 color elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm01dxxwr-14.png?alt=media&token=8f51719e-0531-4d6b-80a5-f7d44e6a84ae>)

_Suggestion chip color roles used for light and dark themes: Outline; Surface container low (optional); On surface variant_

### Suggestion chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![24 suggestion chips illustrating combinations of styles across 6 interaction states.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm8sg5r6a-15-3P.png?alt=media&token=990c5a71-7228-4c18-a655-2d23d4528be2>)

_Selected and unselected suggestion chip states: Enabled; Disabled; Hovered; Focused; Pressed; Dragged_

### Suggestion chip measurements

![2 suggestion chips with measurements shown for variants with and without a leading icon.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm01dybi0-16.png?alt=media&token=ed6c212f-362c-48c5-808e-8959ad55a5e3>)

_Suggestion chip padding and size measurements_

| Attribute | Value |
| --- | --- |
| Container height | 32dp |
| Container shape | 8dp corner radius |
| Icon size | 18dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding without icon | 16dp |
| Left/right padding with icon | 8dp |
| Padding between elements | 8dp |
