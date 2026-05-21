---
title: "Date pickers"
source_url: "https://m3.material.io/components/date-pickers/overview"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/8f1d06b15e8c-md5mxu7o-01.png"
  - "assets/images/f5978056930c-le4qmou9-1P-datepicker_whatsnew_1.png"
  - "assets/images/f7df50246451-md5mtxw0-03.png"
---

# Date pickers

Date pickers let people select a date, or a range of dates

## Overview

-   Date pickers can display past, present, or future dates

-   Three variants: docked, modal, modal input

-   Clearly indicate important dates, such as current and selected days

-   Follow common patterns, like a calendar view

![3 variants of date pickers side-by-side. The docked date picker has an outlined text field above a calendar view. The modal date picker allows people to select a date from a calendar view. The modal date input lets someone type in a date.](../../../assets/images/8f1d06b15e8c-md5mxu7o-01.png)

_Docked date pickerModal date pickerModal date input_

## Availability & resources

### STATUS_TABLE

| Type |Resource |Status |URL |
| --- |--- |--- |--- |
| ANDROID_IMPLEMENTATION | Android Views (MDC-Android) | AVAILABLE | https://github.com/material-components/material-components-android/blob/master/docs/components/DatePicker.md |
| LIT_IMPLEMENTATION | Web | UNAVAILABLE |  |
| FLUTTER_IMPLEMENTATION | Flutter | AVAILABLE | https://api.flutter.dev/flutter/material/DatePickerDialog-class.html |
| JETPACK_IMPLEMENTATION | Jetpack Compose | AVAILABLE | https://developer.android.com/develop/ui/compose/components/datepickers |
| FIGMA | Design Kit (Figma) | AVAILABLE | https://www.figma.com/community/file/1035203688168086460 |

## Differences from M2

-   Typography and spacing: Titles and labels are larger and have increased spacing to accommodate 48dp target size

-   Color: New color mappings and compatibility with dynamic color

-   Variants: The three variants of date pickers have been renamed to not be device-dependent. The former desktop date picker is now known as the docked date picker. The former mobile date picker and date input are now known as modal date picker and modal date input to reinforce that the user must take an action.

![Old version of a date picker with a white background and shadows.](../../../assets/images/f5978056930c-le4qmou9-1P-datepicker_whatsnew_1.png)

_M2: Date pickers had a drop shadow and different color mappings_

![New version of date picker with a colorful background, rounded corners, and no shadows.](../../../assets/images/f7df50246451-md5mtxw0-03.png)

_M3: Date pickers have larger typography, no shadow, and new color mappings compatible with dynamic color_
