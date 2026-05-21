---
title: "Button groups"
source_url: "https://m3.material.io/components/button-groups/overview"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/9d31dcf7ad0e-m4sskpfx-1_alt.png"
  - "assets/images/000c5a02decf-m0ca0qix-1.png"
---

# Button groups

Button groups organize buttons and add interactions between them

## Overview

-   Two variants: **standard** and **connected**

-   Applies shape morph when pressed and selected

-   Connected button groups replace the segmented button

-   Works with all button sizes: XS, S, M, L, and XL

-   Support for single-select, multi-select, and selection-required

![A standard button group and a segmented button group.](../../../assets/images/9d31dcf7ad0e-m4sskpfx-1_alt.png)

_Button groups can contain buttons and icon buttons_

## Availability & resources

### STATUS_TABLE

| Type | Resource | Status | URL |
| --- | --- | --- | --- |
| ANDROID_IMPLEMENTATION | Android Views (MDC-Android): Expressive | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Button.md#button-groups |
| LIT_IMPLEMENTATION | Web: Expressive | UNAVAILABLE |  |
| JETPACK_IMPLEMENTATION | Jetpack Compose: Expressive | AVAILABLE | https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#ButtonGroup(androidx.compose.ui.Modifier,kotlin.Float,androidx.compose.foundation.layout.Arrangement.Horizontal,kotlin.Function1) |
| FIGMA | Design Kit (Figma) | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |

## M3 Expressive update

Button groups apply shape, motion, and width changes to buttons and icon buttons to make them more interactive. [More on M3 Expressive](../../blog/building-with-m3-expressive.md)

**May 2025**

New component added to catalog.

Variants and naming:

-   Added standard button group

-   Added connected button group

    -   Use instead of segmented button, which is no longer recommended


Configurations:

-   Works with all button sizes: XS, S, M, L, and XL

-   Applies default shape to all buttons: round or square

![Standard button group in 3 of 5 available sizes, and segmented button group with just icon buttons and just common buttons.](../../../assets/images/000c5a02decf-m0ca0qix-1.png)

_Button groups are containers that hold buttons of many shapes and sizes_
