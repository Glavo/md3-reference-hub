---
title: "Switch"
source_url: "https://m3.material.io/components/switch/specs"
lastmod: "2026-01-06"
snapshot_at: "2026-05-21T03:22:19.498Z"
section: "components"
assets:
  - "assets/images/6f5d06fe436f-mg66415n-01-3P.png"
  - "assets/images/91d6f68e8e51-mg66ckmz-02-3P.png"
  - "assets/images/ed601f47c795-mg66fz7u-03-3P.png"
  - "assets/images/0b2419a2bd7c-mg66iwsh-04-3P.png"
  - "assets/images/e7651cbc1b3e-mg66jzjg-05-3P.png"
  - "assets/images/b6027c0c94c7-mg66kbil-06-3P.png"
  - "assets/images/50964c685b37-mg66mxl5-07-3P.png"
  - "assets/images/a4a09dc75860-mg66nbzr-08-3P.png"
  - "assets/images/240ac99d8660-mg66of2m-09-3P.png"
---

# Switch

Switches toggle the selection of an item on or off

## Specs

![3 elements of a switch.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg66415n-01-3P.png?alt=media&token=27830702-c236-42e4-9f51-90de8d2b302c>)

_Track; Handle (formerly "thumb"); Icon_

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

Component: Switch

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Switch | md.comp.switch | COMPONENT | For switches. |

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![6 color roles of a switch in light and dark themes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg66ckmz-02-3P.png?alt=media&token=a6c6fc8c-15bd-4364-bd5e-f9ba0422a8a4>)

_Switch color roles used for light and dark themes: Surface container highest; Outline; Outline; Primary; On primary; On primary container_

### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

![The large body text adjacent to switches uses "on surface" color and the body text uses "on surface variant."](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg66fz7u-03-3P.png?alt=media&token=2c476a53-996e-45b0-b337-e2b0cd25e166>)

_The text label uses on surface. Supporting text may use on surface variant._

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states)

![5 states of a switch shown in light and dark themes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg66iwsh-04-3P.png?alt=media&token=45f45be7-4760-4f45-b752-da18d5f646e4>)

_Enabled; Hovered; Focused; Pressed; Disabled_

[State specs are in the token module above](specs.md#3708644e-b4d7-4237-bb0a-7afeeae4a9b0)

## Measurements

![Measurements of switches without icons.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg66jzjg-05-3P.png?alt=media&token=03d410e2-0e07-4deb-b2d1-bffaf49c4e13>)

_Switches without icons_

![Measurements of pressed switches without icons.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg66kbil-06-3P.png?alt=media&token=0a28f42d-8777-4c2f-87c8-eccad6e33f66>)

_Pressed switches without icons_

![Measurements of switches with icons.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg66mxl5-07-3P.png?alt=media&token=5d9528c6-a0a0-4a9a-bad7-6247ad057d37>)

_Switches with icons_

![Measurements of pressed switches with icons.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg66nbzr-08-3P.png?alt=media&token=aabf8a3a-33eb-4ed4-8992-3de1ad2e7e57>)

_Pressed switches with icons_

| Element | Attribute | Value |
| --- | --- | --- |
| Track | Height | 32dp |
| Width | 52dp |  |
| Outline width | 2dp |  |
| Shape | [md.sys.shape.corner.full](../../styles/shape/corner-radius-scale.md#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |  |
| Handle | Height (unselected) | 16dp |
| Height - with icon | 24dp |  |
| Height (selected) | 24dp |  |
| Height (pressed) | 28dp |  |
| Width (unselected) | 16dp |  |
| Width - with icon | 24dp |  |
| Width (selected) | 24dp |  |
| Width (pressed) | 28dp |  |
| Shape | [md.sys.shape.corner.full](../../styles/shape/corner-radius-scale.md#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |  |
| State layer | Size | 40dp |
| Shape | [md.sys.shape.corner.full](../../styles/shape/corner-radius-scale.md#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |  |
| Target | Size | 48dp |
| Icon | Size (selected) | 16dp |
| Icon | Size (unselected) | 16dp |

## Configurations

1.  Without icons
2.  Icon on selected switch
3.  Icon on selected and unselected switch

![3 example switches with and without icons in on and off states. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmg66of2m-09-3P.png?alt=media&token=299c633b-e204-4717-bc64-c54b7a5100e6>)
