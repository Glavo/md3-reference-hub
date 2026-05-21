---
title: "Tooltips"
source_url: "https://m3.material.io/components/tooltips/specs"
lastmod: "2026-01-30"
snapshot_at: "2026-05-21T02:46:50.991Z"
section: "components"
assets:
  - "assets/images/6317ea202a25-mg6beegk-01-3P.png"
  - "assets/images/91ab4f2fd776-mg6bfggt-02-3P.png"
  - "assets/images/4de82dc58f1d-mg6bgjww-03-3P.png"
  - "assets/images/730d115a0d28-mg6bgxay-04-3P.png"
  - "assets/images/51b8923b7d3f-mg6bi2oc-05-3P.png"
  - "assets/images/60ec4c031fed-mg6big7s-06-3P.png"
  - "assets/images/70add244d28c-mg6biuoq-07-3P.png"
---

# Tooltips

Tooltips display brief labels or messages

## Specs

## Tokens & specs

Select a component variant below to see its attributes, tokens, and values.

### TOKEN_TABLE

Component: Tooltips

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Tooltip - Plain | md.comp.plain-tooltip | COMPONENT | For plain tooltips. |
| Tooltip - Rich | md.comp.rich-tooltip | COMPONENT | For rich tooltips. |

## Plain tooltip

![2 elements of a plain tooltip.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg6beegk-01-3P.png?alt=media&token=bc9cfc37-50ed-4dc0-a792-31616c3b822e>)

_Supporting text; Container_

### Plain tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![2 color roles of a plain tooltip.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg6bfggt-02-3P.png?alt=media&token=77ecaad6-24fd-4b5b-83c6-31d409422518>)

_Plain tooltip color roles used for light and dark themes: Inverse on surface; Inverse surface_

### Plain tooltip measurements

![Measurements of a plain tooltip.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg6bgjww-03-3P.png?alt=media&token=9c29e9c5-7681-4a6a-b926-d0120e71350a>)

_Plain tooltip padding and size measurements_

| Attribute | Value |
| --- | --- |
| Container height | 24dp |
| Padding | 8dp |

## Rich tooltip

![4 elements of a rich tooltip.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg6bgxay-04-3P.png?alt=media&token=46a4b568-3a02-4814-8411-95ef51193943>)

_Subhead; Container; Supporting text; Text button_

### Rich tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![4 color roles of a rich tooltip.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg6bi2oc-05-3P.png?alt=media&token=dbe6be0c-aca7-490d-a39f-cca377a2fbd2>)

_Rich tooltip color roles used for light and dark themes: On surface variant; Surface container; On surface variant; Primary_

### Rich tooltip measurements

![Measurements of a rich tooltip.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg6big7s-06-3P.png?alt=media&token=2a5f5dbd-2798-4a2f-9d93-f1a7f23575fa>)

_Rich tooltip padding and size measurements_

| Attribute | Value |
| --- | --- |
| Top padding | 12dp |
| Bottom padding | 8dp |
| Left and right padding | 16dp |

### Rich tooltip configurations

Rich tooltips can have a headline, body, and up to two buttons. The headline and number of buttons can be configured.

![5 common configurations of a rich tooltip.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg6biuoq-07-3P.png?alt=media&token=0c5bd1c9-b9d9-4ee7-b940-80f5ed6189cc>)

_Subhead, supporting text, and two buttons; Subhead, supporting text, and one button; Subhead and supporting text; Supporting text and one button; Supporting text and two buttons_
