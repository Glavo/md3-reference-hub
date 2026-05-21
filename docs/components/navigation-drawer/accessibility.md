---
title: "Navigation drawer"
source_url: "https://m3.material.io/components/navigation-drawer/accessibility"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/videos/12dd17fec8ea-lwoqqvsf-GM3-Components-NavDrawer-Accessibility-1-v01.mp4"
  - "assets/videos/1d3987dc1ade-lwoqr8nd-GM3-Components-NavDrawer-Accessibility-2-v01.mp4"
  - "assets/images/036c25d75ab3-lworf9hl-3.png"
  - "assets/images/ccadf075cffe-m36co6ff-navdrawer-tablet-do-md.png"
  - "assets/images/c6b64cda6d32-lworgt4a-4.png"
  - "assets/images/79499e1dbde9-lworfw7l-5.png"
  - "assets/images/0afd65a4923e-lworg85u-6.png"
  - "assets/images/8c53ca57eabb-lworh5ui-7.png"
  - "assets/images/658fe6af9fab-lworho52-8.png"
  - "assets/images/2fb0d6c9f674-lwori08q-9.png"
---

# Navigation drawer

Navigation drawers let people switch between UI views on larger devices

## Accessibility

star

Note:

The navigation drawer is no longer recommended in the Material 3 Expressive update. For those who have updated, use an [expanded navigation rail](https://m3.material.io/m3/pages/navigation-rail/overview/), which has mostly the same functionality of the navigation drawer and adapts better across window size classes.

## Use cases

Users should be able to: 

-   Move between navigation destinations with assistive technology
-   Select a particular navigation destination from a set
-   Get appropriate feedback based on input type

## Interaction & style

**Touch**

-   When a navigation item is tapped, the active indicator appears in place, providing feedback to the user that it is selected
-   A touch ripple passes through the indicator
-   The icon switches from outlined to filled
-   The icon changes color, becoming darker

<video controls src="../../../assets/videos/12dd17fec8ea-lwoqqvsf-GM3-Components-NavDrawer-Accessibility-1-v01.mp4" title="Active indicator and other visual cues appear when nav drawers are tapped."></video>

[Open video](../../../assets/videos/12dd17fec8ea-lwoqqvsf-GM3-Components-NavDrawer-Accessibility-1-v01.mp4)

**Cursor**

-   When hovered, the hover indicator appears providing a visual cue that the destination is interactive
-   When clicked, a ripple passes through the indicator
-   The icon switches from outlined to filled
-   The icon changes color, becoming darker in light theme and lighter in dark theme, to increase the contrast

<video controls src="../../../assets/videos/1d3987dc1ade-lwoqr8nd-GM3-Components-NavDrawer-Accessibility-2-v01.mp4" title="When a cursor goes over a navigation drawer, a hover indicator appears. When tapped, the active indicator appears."></video>

[Open video](../../../assets/videos/1d3987dc1ade-lwoqr8nd-GM3-Components-NavDrawer-Accessibility-2-v01.mp4)

## Initial focus

Initial focus lands directly on the first navigation item, since that is the first interactive element of the component.

![1. Tab lands on the first navigation item, Inbox. 2. Down arrow to get to the second navigation item, Outbox.](../../../assets/images/036c25d75ab3-lworf9hl-3.png)

_Focus lands on first navigation item_

## Closing

The modal navigation drawer can be dismissed by selecting the scrim that covers the rest of the screen.

![A navigation drawer with a scrim covering the body content. A touch target is selecting the scrim.](../../../assets/images/ccadf075cffe-m36co6ff-navdrawer-tablet-do-md.png)

_Select the scrim to close the navigation drawer_

## Visual indicators

Icons are the primary focus of the navigation and such give the dominant cue of its state. Use a filled icon for the selected destination to differentiate from the outlined icons of non-selected destinations.

![Space + enter is used to select the navigation item inbox.](../../../assets/images/c6b64cda6d32-lworgt4a-4.png)

_The navigation item is selected via Space/Enter_

![A navigation drawer with the home destination using a filled icon.](../../../assets/images/79499e1dbde9-lworfw7l-5.png)

_Use a filled icon for the selected navigation destination to differentiate from the other destinations_

![A navigation drawer with the home destination using an outlined icon.](../../../assets/images/0afd65a4923e-lworg85u-6.png)

_Avoid keeping the icon style for the selected navigation destination the same as unselected destination's icons. This removes an important visual indicator of which destination is active._

![A selected home icon using a filled icon and active indicator and a unselected home icon using an outlined icon.](../../../assets/images/8c53ca57eabb-lworh5ui-7.png)

_When selected, the icon fills, darkens in light theme (or lightens in dark theme), and is backed by an active indicator shape_

## Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| Tab | Focus lands on the first navigation destination |
| Space or Enter | Selects the focused navigation destination, and focus moves to the newly opened section (if applicable) |
| Arrow | Navigate between destinations within the navigation drawer |

## Labeling elements

The accessibility label for a navigation item is typically the same as the destination name.

If the UI text is correctly linked, assistive tech (such as a screenreader) will read the UI text followed by the component’s role.

For Android Views (MDC-Android), a more descriptive accessibility label is not available to be set and the role is not announced.

![A navigation drawer item’s label text and accessibility label both read “photos.” The role is “tab.”](../../../assets/images/658fe6af9fab-lworho52-8.png)

_A navigation drawer’s accessibility label can incorporate its adjacent UI text_

When the visible UI text is ambiguous, accessibility labels need to be more descriptive. For example, a navigation destination visibly labeled **Recents** would benefit from additional information in its accessibility label to clarify the destination’s intent.

![A navigation drawer item’s label text is “recents”, the accessibility label is “recent images.” The role is “tab.”](../../../assets/images/2fb0d6c9f674-lwori08q-9.png)

_While the visible label text reads Recents, the accessibility label for this destination clarifies its function: Recent images_
