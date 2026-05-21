---
title: "Loading indicator"
source_url: "https://m3.material.io/components/loading-indicator/accessibility"
lastmod: "2026-02-05"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/aa4cedab2b70-magv3srk-1.png"
  - "assets/images/877a99e6770b-maguuv6h-2_do.png"
  - "assets/images/d8923baca602-maguuziu-3_dont.png"
  - "assets/videos/1eca82867f73-mbf509tn-GM3_Expressive_Loading-Indicator_Accesibility_16_04_v01.mp4"
  - "assets/images/5c282179ce15-m0cb8rsa-5.png"
---

# Loading indicator

Loading indicators show the progress for a short wait time

## Accessibility

## Use cases

People should be able to do the following with assistive technology:

-   Navigate to the loading indicator
-   Understand what progress the indicator is communicating
-   Initiate a content refresh without relying on a gesture

## Interaction & style

The active indicator, which displays progress, provides visual contrast of at least 3:1 against most container and surface colors.

The indicator itself must have 3:1 contrast with the background, but the container does not.

![Loading indicator with 3:1 color contrast.](../../../assets/images/aa4cedab2b70-magv3srk-1.png)

_The loading indicator provides visual contrast of at least 3:1 against most background colors_

When integrated into another component, such as a button, make sure that the active indicator provides a visual contrast of at least 3:1 against the other component.

![Loading indicator with correct color contrast.](../../../assets/images/877a99e6770b-maguuv6h-2_do.png)

_Ensure at least 3:1 contrast between the indicator and the surface it's on_

![Loading indicator with incorrect color contrast.](../../../assets/images/d8923baca602-maguuziu-3_dont.png)

_Avoid using when the contrast is under 3:1_

Pull-to-refresh interactions can’t be accessible by just swiping. Provide an alternate way to refresh the content with a single pointer, such as placing a refresh button in a menu or directly alongside the content.

<video controls src="../../../assets/videos/1eca82867f73-mbf509tn-GM3_Expressive_Loading-Indicator_Accesibility_16_04_v01.mp4" title="Refreshing content initiated by an app bar action."></video>

[Open video](../../../assets/videos/1eca82867f73-mbf509tn-GM3_Expressive_Loading-Indicator_Accesibility_16_04_v01.mp4)

## Labeling elements

Since the loading indicator is a visual cue, it needs an accessibility label to assist people who can't rely on visuals.

It should use the **progress bar** accessibility role. Write a label describing the purpose of the loading indicator, such as **loading news article** or **refreshing page**.

![Loading indicator accessibility label and role.](../../../assets/images/5c282179ce15-m0cb8rsa-5.png)

_Loading indicator labels should explain which items are loading_
