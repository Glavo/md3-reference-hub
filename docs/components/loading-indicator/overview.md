---
title: "Loading indicator"
source_url: "https://m3.material.io/components/loading-indicator/overview"
lastmod: "2026-02-05"
snapshot_at: "2026-05-21T02:57:25.562Z"
section: "components"
assets:
  - "assets/videos/929ee2bfca47-m0fcl84h-Loading-Indicator-Overview-A-Sync.mp4"
  - "assets/videos/e718edf163d9-m0fcq8u9-Loading-Indicator-Overview-B.mp4"
---

# Loading indicator

Loading indicators show the progress for a short wait time

## Overview

-   Recommended as a replacement for indeterminate circular progress indicators

-   Always reflect an ongoing process and are never simply decorative

-   Used for pull-to-refresh interactions

-   Not used for processes that transition from indeterminate to determinate  

-   Capture attention through motion

<video controls src="../../../assets/videos/929ee2bfca47-m0fcl84h-Loading-Indicator-Overview-A-Sync.mp4" title="A looping sequence of morphs between 7 different shapes in a darker color, sitting on a circular background container in lighter color."></video>

[Open video](../../../assets/videos/929ee2bfca47-m0fcl84h-Loading-Indicator-Overview-A-Sync.mp4)

## Availability & resources

### STATUS_TABLE

| Type | Resource | Status | URL |
| --- | --- | --- | --- |
| ANDROID_IMPLEMENTATION | Android Views (MDC-Android): Expressive | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/LoadingIndicator.md |
| LIT_IMPLEMENTATION | Web: Expressive | UNAVAILABLE |  |
| JETPACK_IMPLEMENTATION | Jetpack Compose: Expressive | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#LoadingIndicator(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,kotlin.collections.List) |
| FIGMA | Design Kit (Figma) | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |

## M3 Expressive update

**May 2025**

The loading indicator is designed to show progress that loads in under five seconds. It should replace most uses of the indeterminate circular progress indicator. [More on M3 Expressive](../../blog/building-with-m3-expressive.md)

New component added to catalog.

Loading indicators:

-   Are used in pull-to-refresh functionality

-   Can be contained or uncontained

-   Use shape and motion to capture attention

-   Can scale in size

<video controls src="../../../assets/videos/e718edf163d9-m0fcq8u9-Loading-Indicator-Overview-B.mp4" title="Loading indicator in news app with pull-to-refresh."></video>

[Open video](../../../assets/videos/e718edf163d9-m0fcq8u9-Loading-Indicator-Overview-B.mp4)
