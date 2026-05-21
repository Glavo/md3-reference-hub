---
title: "Badges"
source_url: "https://m3.material.io/components/badges/specs"
lastmod: "2026-02-05"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/827879794a3d-mamlcpos-1-3P.png"
  - "assets/images/e0ba99ad622c-mamlee0o-2-3P.png"
  - "assets/images/7298af6b76bd-mg0yc68n-03-3P.png"
  - "assets/images/eeb1cf35bfd7-lz9ep1tz-4.png"
  - "assets/images/4bae765a51e1-lz9eqf8f-badge_layout-correct.png"
  - "assets/images/3a82d4920907-lz9eqsps-6.png"
---

# Badges

Badges show notifications, counts, or status information on navigation items and icons

## Specs

![5 aspects of badge anatomy on a navigation bar.](../../../assets/images/827879794a3d-mamlcpos-1-3P.png)

_Navigation bar Small badge; Large badge container; Large badge label; Large badge maximum character count container; Large badge maximum character count label_

![5 aspects of badge anatomy on a navigation rail.](../../../assets/images/e0ba99ad622c-mamlee0o-2-3P.png)

_Navigation rail Small badge; Large badge container; Large badge label; Large badge maximum character count container; Large badge maximum character count label; /_

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.

### TOKEN_TABLE

Component: Badges

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Badges | md.comp.badge | COMPONENT | For badges. |

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![5 applications of badge color on light and dark theme navigation bars.](../../../assets/images/7298af6b76bd-mg0yc68n-03-3P.png)

_Badge color roles used for light and dark schemes in navigation bar: Error; Error; On error; On error; Error_

![5 applications of badge color on light and dark theme navigation rails.](../../../assets/images/eeb1cf35bfd7-lz9ep1tz-4.png)

_Badge color roles used for light and dark schemes in navigation rail: Error; On error; Error; On error; Error; /_

## Measurements

![Annotation of badge sizes, padding, and measurements from the corner of the icon to the badge opposite corner.](../../../assets/images/4bae765a51e1-lz9eqf8f-badge_layout-correct.png)

_Badge padding and size measurements_

| Attribute | Value |
| --- | --- |
| Small badge shape | 3dp corner radius |
| Small badge size (HxW) | 6dp |
| Large badge shape | 8dp corner radius |
| Large badge one digit size (HxW) | 16dp |
| Large badge max character count size (HxW) | 16x34dp |
| Small badge: distance from top trailing icon corner to bottom leading badge corner (HxW) | 6x6dp |
| Large badge: distance from top trailing icon corner to bottom leading badge corner (HxW) | 14x12dp |
| Large badge padding between badge and text container | 4dp |

## Configuration

Different badges are shown on navigation destinations in various states.

![Diagram of 3 badge variations shown on navigation destinations in various states.](../../../assets/images/3a82d4920907-lz9eqsps-6.png)

1.  Inactive with label - small badge
2.  Inactive with label - large badge
3.  Inactive with label - large badge max character count
4.  Inactive - small badge
5.  Inactive - large badge
6.  Inactive - large badge max character count
7.  Active with label - small badge
8.  Active with label - large badge
9.  Active with label - large badge max character count
10.  Active nav bar no label - small badge
11.  Active nav bar no label - large badge
12.  Active nav bar no label - large badge max character count
13.  Active nav rail no label - small badge
14.  Active nav rail no label - large badge
15.  Active nav rail no label - large badge max character count
