---
title: "Bottom sheets"
source_url: "https://m3.material.io/components/bottom-sheets/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/df25caa58914-lvutved1-1.png"
  - "assets/images/7e92f1dbcbe8-lvutweax-2.png"
  - "assets/images/b54e6b3827c5-lvutx4kk-3.png"
---

# Bottom sheets

Bottom sheets show secondary content anchored to the bottom of the screen

## Specs

Modal bottom sheets are above a scrim while standard bottom sheets don't have a scrim. Besides this, both variants of bottom sheets have the same specs.

![Diagram of container, drag handle, scrim](../../../assets/images/df25caa58914-lvutved1-1.png)

_Container; Drag handle (optional); Scrim_

## Tokens and specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

Component: Bottom sheets

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Sheets - Bottom | md.comp.sheet.bottom | COMPONENT | For bottom sheets. |

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Two diagrams featuring color opposites of scrim, container, drag handle](../../../assets/images/7e92f1dbcbe8-lvutweax-2.png)

_Bottom sheet color roles used for both light and dark schemes: Scrim*; On surface variant; Surface container low; *On Android platforms, the scrim color and opacity is automatically handled by the system UI._

## Measurements

![Bottom sheet on larger device with 56dp top and 56dp side margins](../../../assets/images/b54e6b3827c5-lvutx4kk-3.png)

_Bottom sheet padding and size measurements_

Bottom sheets span the full window width up to 640dp. When the window width exceeds 640dp, bottom sheets adjust to have a top margin of 56dp and side margins of 56dp. 

| Attribute | Value |
| --- | --- |
| Drag handle alignment (horizontal) | Center |
| Drag handle padding top/bottom | 22dp |
| Top margin | 72dp |
| Top margin (window width > 640dp) | 56dp |
| Start/end margin (window width > 640dp) | 56dp |
| Width | Full width, up to max-width 640dp |
| Height | Variable |
