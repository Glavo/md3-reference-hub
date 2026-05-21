---
title: "Progress indicators"
source_url: "https://m3.material.io/components/progress-indicators/specs"
lastmod: "2026-02-27"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/9253b2648ce8-mloz0082-01-3P.png"
  - "assets/images/72638a16985d-mloz0zuq-02-3P.png"
  - "assets/images/63bc8aec97fb-mloz1qik-03-3P.png"
  - "assets/images/cba7a19a73d2-mloz2lzv-04-3P.png"
  - "assets/images/716471b9ba53-mloz3iks-05-3P.png"
  - "assets/images/e3fbce4fdfbe-mloz3ss3-06-3P.png"
  - "assets/images/51047aa86b0a-mloz4e98-07-3P.png"
  - "assets/images/2a2e08582ff8-mloz4zbx-08-3P.png"
  - "assets/images/1d6cc20e6e56-mloz5p1v-09-3P.png"
---

# Progress indicators

## Specs

## Variants

![2 variant of progress indicators.](../../../assets/images/9253b2648ce8-mloz0082-01-3P.png)

_Linear progress indicator; Circular progress indicator_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Linear progress indicator | Available | Available |
| Circular progress indicator | Available | Available |

## Configurations

![4 configurations of the linear determinate progress indicator.](../../../assets/images/72638a16985d-mloz0zuq-02-3P.png)

_Behavior: Determinate and indeterminate; Thickness: Default (4dp) and variable; Shape: Flat and wavy_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Behavior | Determinate (default), Indeterminate | Available | Available |
| Track thickness | Fixed (4dp) | Available | Available |
| Configurable | \-- | Available |  |
| Shape | Flat (default) | Available | Available |
| Wavy | \-- | Available |  |

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [View baseline tokens](specs.md#c6f484b0-2bc6-4d37-bd75-f859a35a3594)

### TOKEN_TABLE

Component: Progress indicators

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Progress indicator - Circular | md.comp.progress-indicator.circular | COMPONENT | For circular progress indicators. |
| Progress Indicator - Common | md.comp.progress-indicator | COMPONENT | Common tokens for circular and linear progress indicators. |
| Progress indicator - Linear | md.comp.progress-indicator.linear | COMPONENT | For linear progress indicators. |
| [Deprecated] Progress indicator - Circular | md.comp.circular-progress-indicator | COMPONENT | This token set is deprecated. Use `md.comp.progress-indicator.circular` instead. Original tokens for the circular progress indicator. |
| [Deprecated] Progress indicator - Linear | md.comp.linear-progress-indicator | COMPONENT | This token set is deprecated. Use `md.comp.progress-indicator.linear` instead. Original tokens for the linear progress indicator. |

## Anatomy

![3 elements of a progress indicator.](../../../assets/images/63bc8aec97fb-mloz1qik-03-3P.png)

_Active indicator; Track; Stop indicator_

## Color

![2 color roles of a linear progress indicator in light and dark themes: the active indicator and stop indicator are primary and the track is secondary container.](../../../assets/images/cba7a19a73d2-mloz2lzv-04-3P.png)

_Progress indicator color roles used for light and dark schemes: Primary; Secondary container_

## Measurements

Wavy indicators use **amplitude** and **wavelength** to determine the shape of the wave. The height is the overall container height.

![Definitions of wave measurements for height and amplitude.](../../../assets/images/716471b9ba53-mloz3iks-05-3P.png)

_Amplitude measures from the center of the resting position to the center of the peak_

![Definitions of wave measurements for wavelength.](../../../assets/images/e3fbce4fdfbe-mloz3ss3-06-3P.png)

_Wavelength measures the distance between two adjacent peaks_

![Linear progress indicator measurements.](../../../assets/images/51047aa86b0a-mloz4e98-07-3P.png)

_Size measurements for linear progress indicators. The thicker variants are provided as sample measurement for makers to adjust the default version based on their use cases._

![Circular progress indicator measurements.](../../../assets/images/2a2e08582ff8-mloz4zbx-08-3P.png)

_Size measurements for circular progress indicators. The thicker variants are provided as sample measurement for makers to adjust the default version based on their use cases._

![4dp padding on the left and right of the linear progress indicator.](../../../assets/images/1d6cc20e6e56-mloz5p1v-09-3P.png)

_The linear progress indicator is inset from the edge of the screen by 4dp_

## Baseline tokens

The circular and linear progress indicator had separate token sets. These are no longer recommended.

### TOKEN_TABLE

Component: Progress indicators

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Progress indicator - Circular | md.comp.progress-indicator.circular | COMPONENT | For circular progress indicators. |
| Progress Indicator - Common | md.comp.progress-indicator | COMPONENT | Common tokens for circular and linear progress indicators. |
| Progress indicator - Linear | md.comp.progress-indicator.linear | COMPONENT | For linear progress indicators. |
| [Deprecated] Progress indicator - Circular | md.comp.circular-progress-indicator | COMPONENT | This token set is deprecated. Use `md.comp.progress-indicator.circular` instead. Original tokens for the circular progress indicator. |
| [Deprecated] Progress indicator - Linear | md.comp.linear-progress-indicator | COMPONENT | This token set is deprecated. Use `md.comp.progress-indicator.linear` instead. Original tokens for the linear progress indicator. |
