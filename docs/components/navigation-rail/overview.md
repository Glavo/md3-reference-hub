---
title: "Navigation rail"
source_url: "https://m3.material.io/components/navigation-rail/overview"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/videos/22ed6df490f4-mbs2h57x-GM3_Expressive_Nav-Rail_Overview_01_IA_v02.mp4"
  - "assets/images/1c72669471a5-m0fsz2c4-2.png"
  - "assets/images/f3adc7fbdba9-m0dtdapc-3.png"
  - "assets/images/bb1c71bb0544-m0fszcgl-4.png"
---

# Navigation rail

Navigation rails let people switch between UI views on mid-sized devices

## Overview

-   Use navigation rails in medium, expanded, large, or extra-large window sizes
-   Can contain 3-7 destinations plus an optional FAB
-   Always put the rail in the same place, even on different screens of an app

<video controls src="../../../assets/videos/22ed6df490f4-mbs2h57x-GM3_Expressive_Nav-Rail_Overview_01_IA_v02.mp4" title="Navigation rail with 4 destinations, 1 active, and FAB."></video>

[Open video](../../../assets/videos/22ed6df490f4-mbs2h57x-GM3_Expressive_Nav-Rail_Overview_01_IA_v02.mp4)

## Availability & resources

### STATUS_TABLE

| Type | Resource | Status | URL |
| --- | --- | --- | --- |
| ANDROID_IMPLEMENTATION | Android Views (MDC-Android): Expressive | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationRail.md |
| ANDROID_IMPLEMENTATION | Android Views (MDC-Android) | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/NavigationRail.md |
| JETPACK_IMPLEMENTATION | Jetpack Compose | AVAILABLE | https://developer.android.com/develop/ui/compose/components/navigation-rail |
| LIT_IMPLEMENTATION | Web | UNAVAILABLE |  |
| LIT_IMPLEMENTATION | Web: Expressive | UNAVAILABLE |  |
| JETPACK_IMPLEMENTATION | Jetpack Compose: Expressive | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#NavigationRail(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,kotlin.Function1,androidx.compose.foundation.layout.WindowInsets,kotlin.Function1) |
| FLUTTER_IMPLEMENTATION | Flutter | AVAILABLE | https://api.flutter.dev/flutter/material/NavigationRail-class.html |
| FIGMA | Design Kit (Figma) | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |

## M3 Expressive update

**May 2025**

A **collapsed** and **expanded** navigation rail have been introduced to replace the baseline nav rail. The expanded nav rail is meant to replace the navigation drawer. [More on M3 Expressive](../../blog/building-with-m3-expressive.md)

Variants and naming:

-   The baseline **navigation rail** is no longer recommended

-   Added two wider navigation rails:

    -   **Collapsed:** replaces baseline nav rail

    -   **Expanded**: replaces navigation drawer


Configurations:

-   Expanded rail modality:

    -   Non-modal

    -   Modal

-   Expanded behavior:

    -   Transition to collapsed navigation rail

    -   Hide when collapsed

-   Color:

    -   Active label on vertical items changed from **on surface variant** to **secondary**

![A collapsed and expanded navigation rail.](../../../assets/images/1c72669471a5-m0fsz2c4-2.png)

_The collapsed and expanded navigation rails match visually and can transition into each other_

## Differences from M2

-   Behavior: Predictive back interaction
-   Color: New color mappings and compatibility with dynamic color
-   States: The active destination can be indicated with a pill shape in a contrasting color

![M2 navigation rail with 1 colored and filled icon showing the active state and 3 inactive icons.](../../../assets/images/f3adc7fbdba9-m0dtdapc-3.png)

_M2: The navigation rail uses icon color, weight, and fill to communicate which destination is active_

![M3 navigation rail with 1 icon surrounded by a pill shape in contrasting color to show the active state.](../../../assets/images/bb1c71bb0544-m0fszcgl-4.png)

_M3: The navigation rail uses a pill-shaped active indicator to communicate which destination is active_
