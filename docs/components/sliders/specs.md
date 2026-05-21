---
title: "Sliders"
source_url: "https://m3.material.io/components/sliders/specs"
lastmod: "2026-05-08"
snapshot_at: "2026-05-21T02:57:25.562Z"
section: "components"
assets:
  - "assets/images/e6ea7ef4d189-ma6a7kht-01-3P.png"
  - "assets/images/661083c87bc1-ma6a86b2-02-3P.png"
  - "assets/images/a4a38e048b81-ma6a8q7u-03-3P.png"
  - "assets/images/fd29369eb6b2-ma6a99lg-04-3p.png"
  - "assets/images/55944bc73cc2-ma6aa21o-05-3P.png"
  - "assets/images/ced01732b171-ma6aaode-06-3P.png"
  - "assets/images/ff884732fc93-ma6abaty-07-3P.png"
  - "assets/images/20eb937ccd2b-ma6absmo-07-3P.png"
---

# Sliders

Sliders let users make selections from a range of values

## Specs

## Variants

![3 variants of sliders.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma6a7kht-01-3P.png?alt=media&token=1f16d3a6-fc72-447e-83d7-ef38b37ff8fd>)

_Standard; Centered; Range_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Standard | Available as “continuous” slider | Available |
| Centered | Available (web only) | Available |
| Range | Available | Available |
| Discrete | Available | Available as “stops” configuration |

## Configurations

![Orientation and size configurations of sliders.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma6a86b2-02-3P.png?alt=media&token=fbacd23b-0918-427c-9803-cd4c7050ed9f>)

_Orientation: Horizontal, vertical; Size: XS, S, M, L, XL_

![Optional anatomy configurations of sliders.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma6a8q7u-03-3P.png?alt=media&token=799e249c-9c5f-496b-b4ce-ef9b61ae2466>)

_Inset icon; Stops; Value indicator_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Inset icon | No (default) | Available | Available |
| Yes | \-- | Available |  |
| Orientation | Horizontal (default) | Available | Available |
| Vertical | \-- | Available |  |
| Size | XS (default) | Available | Available |
| S, M, L, XL | \-- | Available on Android Views (MDC-Android). Available as tokens on other platforms.\* |  |
| Stop indicators | No (default), Yes | Available as “discrete” slider | Available |
| Value Indicator | No (default), Yes | Available | Available |

> \*Configurations only available using tokens don’t have implemented presets in code. To change the size, swap the default size tokens md.comp.slider.**xsmall**.\[...\] with those of the desired size.

## Tokens & specs

Slider tokens are organized into a common token set, and token sets for each size. Switch token sets from the table’s menu. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

Component: Sliders

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Slider - Size - Large | md.comp.slider.large | COMPONENT | For expressive large sliders. |
| Slider - Size - Medium | md.comp.slider.medium | COMPONENT | For expressive medium sliders. |
| Slider - Size - Small | md.comp.slider.small | COMPONENT | For expressive small sliders. |
| Slider - Size - Xlarge | md.comp.slider.xlarge | COMPONENT | For expressive XL sliders. |
| Slider - Size - Xsmall | md.comp.slider.xsmall | COMPONENT | For expressive XS sliders. |
| Slider | md.comp.slider | COMPONENT | Common tokens for all expressive slider sizes, and baseline sliders. |

## Anatomy

![6 elements of a slider.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma6a99lg-04-3p.png?alt=media&token=c1f10fb4-9cb1-4093-8305-6d3df903a22d>)

_Value indicator (optional); Stop indicators (optional); Active track; Handle; Inactive track; Inset icon (optional)_

## Color

![9 color roles of a slider.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma6aa21o-05-3P.png?alt=media&token=d3fe982f-6f76-4973-aaf6-aa65a59956d3>)

_Slider color roles used for light and dark schemes: Inverse surface; Inverse on surface; Primary; On primary; Primary; Secondary container; On secondary container; On secondary container; On primary_

## States

![5 states of sliders in light and dark schemes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma6aaode-06-3P.png?alt=media&token=5b594eb5-38dd-45e4-a53e-2a976e720a09>)

_Enabled; Disabled; Hovered; Focused; Pressed_

## Measurements

![Common slider padding and size measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma6abaty-07-3P.png?alt=media&token=ecddf256-7f72-45c7-a4b2-64a91b405704>)

_Padding and size measurements for common sliders_

![Slider padding and size measurements at each size configuration, XS to XL.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fma6absmo-07-3P.png?alt=media&token=e564d492-18b4-45d1-8efe-a62a5278e577>)

_Padding and size measurements for XS, S, M, L, and XL sliders_

| Attribute | XS | S | M | L | XL |
| --- | --- | --- | --- | --- | --- |
| Track height | 16dp | 24dp | 40dp | 56dp | 96dp |
| Label container height | 44dp |  |  |  |  |
| Label container width | 48dp |  |  |  |  |
| Handle height | 44dp | 44dp | 52dp | 68dp | 108dp |
| Handle width | 4dp |  |  |  |  |
| Track shape | 8dp | 8dp | 12dp | 16dp | 28dp |
| Inset icon size | \-- | \-- | 24dp | 24dp | 32dp |
