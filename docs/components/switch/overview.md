---
title: "Switch"
source_url: "https://m3.material.io/components/switch/overview"
lastmod: "2026-01-06"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/d6c2a0e6ec31-lwa9bnl5-1.png"
  - "assets/images/1cadefeab95f-mg65z0ro-02.png"
  - "assets/images/cbf45a40b10a-mg65zp7b-03.png"
---

# Switch

Switches toggle the selection of an item on or off

## Overview

-   Use switches (not radio buttons) if the items in a list can be independently controlled

-   Switches are the best way to let people adjust settings

-   Make sure the switch’s selection (on or off) is visible at a glance

![A switch in two states, off and on.](../../../assets/images/d6c2a0e6ec31-lwa9bnl5-1.png)

_Switches can be toggled on and off_

## Availability & resources

### STATUS_TABLE

| Type | Resource | Status | URL |
| --- | --- | --- | --- |
| ANDROID_IMPLEMENTATION | Android Views (MDC-Android) | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/Switch.md |
| LIT_IMPLEMENTATION | Web | AVAILABLE | https://github.com/material-components/material-web/blob/main/docs/components/switch.md |
| JETPACK_IMPLEMENTATION | Jetpack Compose | AVAILABLE | https://developer.android.com/develop/ui/compose/components/switch |
| FLUTTER_IMPLEMENTATION | Flutter | AVAILABLE | https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html |
| FIGMA | Design Kit (Figma) | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |

## Differences from M2

-   Accessibility: Visual presentation is more accessible

-   Color: New color mappings meet Material's non-text-contrast requirements in addition to compatibility with dynamic color

-   Icons: Ability to have an optional icon within the switch handle

-   Layout: Track is taller and wider

![M2 switches in off and on states.](../../../assets/images/1cadefeab95f-mg65z0ro-02.png)

_M2: Switches have a circular handle that extends beyond the edge of the track_

![M3 switch shown toggled off and toggled on. When switched on, it has a checkmark icon.](../../../assets/images/cbf45a40b10a-mg65zp7b-03.png)

_M3: Switches have a taller and wider track, new color mappings, and the ability to show an icon in the handle_
