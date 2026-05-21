---
title: "Snackbar"
source_url: "https://m3.material.io/components/snackbar/accessibility"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/3c5be3b0373c-lwp0j72d-1.png"
  - "assets/images/a88447e0a773-lwp0k0la-2.png"
  - "assets/images/1e8f998b1200-lwp0kqjx-3.png"
  - "assets/videos/f2a85d549d5e-lwp0eako-GM3-Components-Snackbar-Accessibility-1-v01.mp4"
  - "assets/videos/f9de28226c1b-lwp0g1ed-GM3-Components-Snackbar-Accessibility-2-v01.mp4"
  - "assets/images/c602276d2bba-mff15na8-06.png"
---

# Snackbar

Snackbars show short updates about app processes at the bottom of the screen

## Accessibility

### Use cases

Users should be able to:

-   Be alerted, but not disrupted, when a snackbar appears
-   Move focus to an actionable snackbar
-   Take action on a snackbar using assistive technology

### Interaction & style

Snackbars with actions shouldn't auto-dismiss. This way, users can read and interact with it at their own pace.

Snackbars without actions can auto-dismiss after a sufficient amount of time, however this can still present difficulties on web without additional feedback. 

Each platform has its own requirements for auto-dismiss durations, however common acceptable durations are 4–10 seconds.

![A snackbar saying "Email marked as read" with no button.](../../../assets/images/3c5be3b0373c-lwp0j72d-1.png)

_Auto-dismissing snackbars should remain on screen long enough to read the information_

Snackbars use a color intended to stand out against UI elements. Use the default color mapping to avoid color conflict issues.

![Snackbar with a dark container on a UI page in light theme.](../../../assets/images/a88447e0a773-lwp0k0la-2.png)

_Snackbar should visually stand out_

### Accessibility requirements on web

On web, auto-dismissing snackbars can be difficult to navigate for people with low vision or who require additional time to perceive information. This information can be made clearer for all users in two ways:

#### 1\. Add inline feedback

Information in auto-dismissing snackbars must also be communicated inline or near the action that triggered the snackbar.

For example, update the label on a "Save" button to “Saved”, and trigger an auto-dismissing snackbar that communicates the same message.

#### 2\. Make the snackbar actionable

Alternatively, add actions to the snackbar so it doesn't dismiss until acted on. Actionable snackbars shouldn't auto-dismiss.

![A "save" button changes to say "saved", alongside a snackbar that confirms changes were saved.](../../../assets/images/1e8f998b1200-lwp0kqjx-3.png)

_Communicate snackbar information near the action that triggered the snackbar_

**Note: Material Web doesn't yet include the snackbar component. This guidance still applies to custom-made snackbars.**

### Focus

Snackbars have the following focus requirements:

-   When a snackbar appears, announce the message but don't move focus.
-   Don't automatically move focus.
-   Don't trap focus in the snackbar. Users should be able to freely navigate in and out.
-   On web, a shortcut should exist for users to move focus to snackbars with actions (like Alt+G). Ensure that this shortcut is clearly documented, like in a help article.

<video controls src="../../../assets/videos/f2a85d549d5e-lwp0eako-GM3-Components-Snackbar-Accessibility-1-v01.mp4" title="Taking a menu item action moves focus to a snackbar. Moving focus out of the snackbar returns it to the same menu item."></video>

[Open video](../../../assets/videos/f2a85d549d5e-lwp0eako-GM3-Components-Snackbar-Accessibility-1-v01.mp4)

Focus exits the snackbar differently per platform:

-   Ideally, focus should either return to the element that triggered the snackbar, or go to the next most logical element on the page. 
-   On Android Compose, focus may move to the nearest visible element, or to the first actionable item on the page.

<video controls src="../../../assets/videos/f9de28226c1b-lwp0g1ed-GM3-Components-Snackbar-Accessibility-2-v01.mp4" title="Confirming in a dialog moves focus to a snackbar. Moving focus out of the snackbar returns it to a page element."></video>

[Open video](../../../assets/videos/f9de28226c1b-lwp0g1ed-GM3-Components-Snackbar-Accessibility-2-v01.mp4)

### Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Moves focus between interactive elements |
| Esc | Dismisses the snackbar when in focus |

### Labeling elements

Snackbars should be announced once they appear on the screen, but shouldn’t grab focus or prevent people from completing their current task. 

-   On Android and web, use a live region with a polite (queued) announcement instead of an assertive announcement.
-   On iOS 17+, snackbars use polite announcements by default.

If a snackbar appears when the app is launched, it should be announced after the page’s title, but not receive focus.

![Snackbar accessibility label examples.](../../../assets/images/c602276d2bba-mff15na8-06.png)

_Snackbars are announced when they appear, but don't trap focus_
