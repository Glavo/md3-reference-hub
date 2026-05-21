---
title: "App bars"
source_url: "https://m3.material.io/components/app-bars/overview"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/3f91d2e3e3fd-mlktxqjf-01.png"
  - "assets/images/53e994347ad3-mlku5356-05.png"
  - "assets/images/8190ca6aabcb-mmdho0pd-04-3P.png"
  - "assets/images/c57ef9bfe14b-mlkui2vk-07.png"
---

# App bars

App bars are placed at the top of the screen to help people navigate through a product

## Overview

-   Focus on describing the current page and provide 1–2 essential actions

-   Displays labels and page navigation controls at the top of the page. (Use a toolbar to display page actions)

-   Four variants: Search app bar, small, medium flexible, large flexible

-   On scroll, apply a fill color to separate from body content

-   Can animate on and off screen with another bar of controls, like a row of chips

![4 configurations of app bars stacked vertically to show differences.](../../../assets/images/3f91d2e3e3fd-mlktxqjf-01.png)

_Search app bar; Small; Medium flexible; Large flexible_

## Availability & resources

### STATUS_TABLE

| Type | Resource | Status | URL |
| --- | --- | --- | --- |
| ANDROID_IMPLEMENTATION | Android Views (MDC-Android): Expressive | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/TopAppBar.md |
| ANDROID_IMPLEMENTATION | Android Views (MDC-Android) | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/TopAppBar.md |
| LIT_IMPLEMENTATION | Web | UNAVAILABLE |  |
| JETPACK_IMPLEMENTATION | Jetpack Compose: Expressive | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#AppBarRow(kotlin.Function1,androidx.compose.ui.Modifier,kotlin.Function1) |
| JETPACK_IMPLEMENTATION | Jetpack Compose | AVAILABLE | https://developer.android.com/develop/ui/compose/components/app-bars?hl=en |
| LIT_IMPLEMENTATION | Web: Expressive | UNAVAILABLE |  |
| FLUTTER_IMPLEMENTATION | Flutter | AVAILABLE | https://api.flutter.dev/flutter/material/AppBar-class.html |
| FIGMA | Design Kit (Figma) | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |

## M3 Expressive update

**May 2025**
The new **search app bar** supports icons inside and outside the search bar, and centered text. It opens the [search view](../search/overview.md) component when selected.

The new **medium flexible** and **large flexible** app bars come with significant improvements, and should replace **medium** and **large** app bars, which are no longer recommended. The **small** app bar is updated with the same flexible improvements. 

[More on M3 Expressive](../../blog/building-with-m3-expressive.md)

Variants and naming:

-   Renamed component from **top app bar** to **app bar**

-   Added **search app bar**

-   M**edium** and **large** app bars are no longer recommended

-   Added **medium flexible** and **large flexible** app bars with:

    -   Reduced overall height

    -   Larger title text

    -   Subtitle

    -   Left- and center-aligned text options

    -   Text wrapping

    -   More flexible elements for imagery and filled buttons

-   Added features to **small** app bar:

    -   Subtitle

    -   Center-aligned text option

    -   More flexible elements for imagery and filled buttons

![4 total app bar configurations.](../../../assets/images/53e994347ad3-mlku5356-05.png)

_Search app bar; Small; Medium flexible; Large flexible_

## Differences from M2

-   Color: New color mappings and compatibility with dynamic color
-   On scroll: No drop shadow, instead a color fill creates separation from content
-   Typography: Larger default text
-   Layout: Smaller default height

![M2 top app bar with elevation to separate it from main content.](../../../assets/images/8190ca6aabcb-mmdho0pd-04-3P.png)

_M2: Elevation and a drop shadow raise the top app bar when content is present underneath_

![M3 app bar with subtle color difference from main content.](../../../assets/images/c57ef9bfe14b-mlkui2vk-07.png)

_M3: On scroll, a color fill overlay separates the app bar from the content beneath_
