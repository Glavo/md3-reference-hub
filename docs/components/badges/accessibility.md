---
title: "Badges"
source_url: "https://m3.material.io/components/badges/accessibility"
lastmod: "2026-02-05"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/videos/a6a5ffaee75a-lvp03lg1-GM3-Components-Badges-Accessibility-1-v01.mp4"
  - "assets/images/e91ca3e52bb4-mg0x2h51-02_do.png"
  - "assets/images/2f8bb7386b8f-mg0x2kti-03_dont.png"
  - "assets/images/77ea3e1d4ad3-me8l8lhl-04.png"
  - "assets/images/3b18199b5fe5-me8l9na6-05.png"
---

# Badges

Badges show notifications, counts, or status information on navigation items and icons

## Accessibility

## Use cases

People should be able to use assistive technology to:

-   Understand the dynamic information conveyed in badges, such as counts or labels
-   Address badge announcements by selecting corresponding navigation destinations

## Interaction & style

Badges are most commonly used within other components, such as navigation bar, navigation rail, app bars, and tabs.

When a badge is used to indicate an unread notification, the badge gets hidden once it's selected.

<video controls src="../../../assets/videos/a6a5ffaee75a-lvp03lg1-GM3-Components-Badges-Accessibility-1-v01.mp4" title="An animation of a badge disappearing once it's tapped."></video>

[Open video](../../../assets/videos/a6a5ffaee75a-lvp03lg1-GM3-Components-Badges-Accessibility-1-v01.mp4)

## Visual indicators

Badges use a color intended to stand out against labels, icons, and navigation elements. Use the default color mapping to avoid color conflict issues.

![Diagram of large and small badges showing that they need to pass 3 to 1 contrast.](../../../assets/images/e91ca3e52bb4-mg0x2h51-02_do.png)

_Badges must use default color with at least 3:1 contrast_

![Diagram of large and small badges not passing 3 to 1 contrast.](../../../assets/images/2f8bb7386b8f-mg0x2kti-03_dont.png)

_Avoid using custom color roles for the badge container and label text. If custom roles are necessary, make sure they have contrast of at least 3:1._

## Labeling elements

The accessibility label for a badge item will be read after its navigation destination. Any numerical badges will have their number read, while non-counting badges will simply announce **New notification**.

![Navigation bar highlighting numerical badge.](../../../assets/images/77ea3e1d4ad3-me8l8lhl-04.png)

_Numerical badges will have their number read_

![Navigation bar highlighting non-counting badge.](../../../assets/images/3b18199b5fe5-me8l9na6-05.png)

_Non-counting badges will simply announce New notification_
