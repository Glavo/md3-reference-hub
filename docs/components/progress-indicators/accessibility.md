---
title: "Progress indicators"
source_url: "https://m3.material.io/components/progress-indicators/accessibility"
lastmod: "2026-02-27"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/430185c65104-mlepc1r2-01.png"
  - "assets/images/2df9282dbc18-mlepcmau-02.png"
  - "assets/images/ffeccbde50d5-mlepd6dk-03.png"
  - "assets/images/12d92dff1935-mlepdozy-04.png"
  - "assets/images/d2f8cf9228d9-mlepe18t-05.png"
  - "assets/images/0961d4b40c0a-mlepereg-06.png"
  - "assets/images/4b212f9d9e96-mlepf1vr-07.png"
---

# Progress indicators

## Accessibility

## Use cases

People should be able to do the following using the assistive technology:

-   Navigate to the progress indicator
-   Understand what progress the indicator is communicating

## Interaction & style

The active indicator, which displays progress, provides visual contrast of at least 3:1 against most background colors.

![Dark line of progress indicator stands out against the lighter colored track.](../../../assets/images/430185c65104-mlepc1r2-01.png)

_The progress indicator and stop indicator provide visual contrast of at least 3:1 against most background colors_

When integrated into another component, such as a button, make sure that the active indicator provides visual contrast of at least 3:1 against the other component. 

For the active indicator, use the same color as the label text or icon. The track should be removed.

![Circular indicator on button passes 3 to 1 contrast test.](../../../assets/images/2df9282dbc18-mlepcmau-02.png)

_Ensure the indicator’s color provides at least 3:1 contrast against the surface it's on_

![Circular indicator on button fails 3 to 1 contrast test.](../../../assets/images/ffeccbde50d5-mlepd6dk-03.png)

_Avoid using a color below 3:1 contrast_

For linear progress indicators, the stop indicator is required if the track has a contrast below 3:1 with its container or the surface behind the container.

Essentially, the end of the track must be easy to identify.

![Bright container holding the progress bar is on a dark surface, passing the 3:1 color contrast.](../../../assets/images/12d92dff1935-mlepdozy-04.png)

_Only remove the stop indicator when the linear progress indicator has at least a 3:1 color contrast with surrounding containers and surfaces_

![Bright container holding progress indicator is on a bright surface, failing the 3:1 color contrast.](../../../assets/images/d2f8cf9228d9-mlepe18t-05.png)

_Avoid removing the stop indicator if any adjacent containers or surfaces are below the 3:1 color contrast_

## Labeling elements

Since the progress indicator is a visual cue, it needs an accessibility label to describe the kind and amount of progress made.

Use the **progress bar** accessibility role, and write an accessibility label that describes the purpose of the progress indicator. The label should include the process, such as "loading,” and the affected content, such as a page, article, or episode. For example: "Loading news article" or "Refreshing page."

![Determinate linear progress indicator has an accessibility label of “loading news article” and role of “progressbar”.](../../../assets/images/0961d4b40c0a-mlepereg-06.png)

_Progress indicator labels should explain which items are loading_

![Indeterminate linear progress indicator has an accessibility label of “loading my episodes” and role of “progressbar.”](../../../assets/images/4b212f9d9e96-mlepf1vr-07.png)

_A label on an intedeterminate progress indicator on a screen which is loading a set of podcast episodes_
