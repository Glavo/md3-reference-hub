---
title: "Dialogs"
source_url: "https://m3.material.io/components/dialogs/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T03:17:26.113Z"
section: "components"
assets:
  - "assets/images/254aa0bf2934-mk29t71i-01-3P.png"
  - "assets/images/3fc776dec363-ml9yledn-02-3P.png"
  - "assets/images/a24212459066-ml9ynrkv-03-3P.png"
  - "assets/images/00b0a551f2f7-m9h7yor0-04-3P.png"
  - "assets/images/aadd1307d8b4-m9h7z23b-05-3P.png"
  - "assets/images/dac332b3a714-mafq2x4i-06-3P.png"
---

# Dialogs

Dialogs provide important prompts in a user flow

## Specs

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values.

### TOKEN_TABLE

Component: Dialogs

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Dialog - Full screen | md.comp.full-screen-dialog | COMPONENT | For full-screen dialogs. |
| Dialog - Basic | md.comp.dialog | COMPONENT | For basic dialogs. |

## Basic dialogs

![Anatomy diagram numbering dialog elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmk29t71i-01-3P.png?alt=media&token=107d201b-e3d7-4dcc-aa58-71f053c9364c>)

_Container; Icon (optional); Headline (optional); Supporting text; Divider (optional); Button label text; Scrim_

### Basic dialog color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Color mapping diagram labeling 6 color roles across the dialog and scrim.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fml9yledn-02-3P.png?alt=media&token=d1f0e8c8-54da-41e3-81a8-ad46dcb5d3b7>)

_Basic dialog color roles used for light and dark themes: Surface container high; Secondary; On surface; On surface variant; Primary; Scrim_

### Basic dialog measurements

![Annotated diagram showing padding values.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fml9ynrkv-03-3P.png?alt=media&token=8e554b7e-0509-4f02-8563-7453e0bb40e9>)

_Basic dialog padding and size measurements_

| Attribute | Value |
| --- | --- |
| Container shape | 28dp corner radius |
| Container height | Dynamic |
| Container width | Min 280dp; Max 560dp |
| Divider height | 1dp |
| Icon size | 24dp |
| Minimum width | 280dp |
| Maximum width | 560dp |
| Alignment with icon | Center-aligned |
| Alignment without icon | Start-aligned |
| Top/Left/right/bottom padding | 24dp |
| Padding between buttons | 8dp |
| Padding between title and body | 16dp |
| Padding between icon and title | 16dp |
| Padding between body and actions | 24dp |

## Full-screen dialogs

![Diagram numbering 6 full-screen dialog elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm9h7yor0-04-3P.png?alt=media&token=26b84960-cb4d-4ddc-b996-2fdc771c1432>)

_Container; Header; Icon (close affordance); Headline (optional); Text button; Divider (optional)_

### Full-screen dialog color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

![Color mapping diagram shows 5 callout markers across the dialog.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm9h7z23b-05-3P.png?alt=media&token=0db0c4c5-bdf2-4697-964e-4d38cf508d2b>)

_Full-screen dialog color roles used for light and dark themes: Surface container high; On surface; On surface; Primary; On surface variant_

### Full-screen dialog measurements

![Diagram noting layout measurements for padding values, title, height, and action regions.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmafq2x4i-06-3P.png?alt=media&token=4cc6deb6-b269-43d4-b21a-7234ae0d2d49>)

_Full-screen dialog padding and size measurements_

| Attribute | Value |
| --- | --- |
| Container shape | 0dp corner radius |
| Container height | Dynamic |
| Container width | Container width; Max 560dp |
| Header height | 56dp |
| Header width | Container width |
| Headline text alignment | Start-aligned |
| Divider height | 1dp |
| Icon (close affordance) size | 24dp |
| Bottom action bar height | 56dp |
| Bottom action bar width | Container width |
| Top/left/right padding | 24dp |
| Padding between elements | 8dp |
