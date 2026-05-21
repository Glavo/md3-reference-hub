---
title: "Gestures"
source_url: "https://m3.material.io/foundations/interaction/gestures"
lastmod: "2026-01-09"
snapshot_at: "2026-05-21T02:57:25.562Z"
section: "foundations"
assets:
  - "assets/videos/cef768e47ec3-lx1faal8-1P-Tap-2_NewSize.mp4"
  - "assets/videos/c624fa29cb5d-lx1fboct-1P-Double-tap_NewSize.mp4"
  - "assets/videos/65d6ff3cf22d-lx1fdbcl-1P-Long-press_NewSize.mp4"
  - "assets/images/7a633d4bc2a4-lfspc3ip-Frame-1321316884.png"
  - "assets/videos/a3e52c4f36fa-lx1ffjk8-1P-Swipe_NewSize.mp4"
  - "assets/videos/f9075a454f43-lx1fhayy-BottomSheet_NewSize.mp4"
  - "assets/videos/9d0bd588b0d6-lx1fj7qz-1P-Drag-2_NewSize.mp4"
  - "assets/images/15b6cf9fda06-lfspfq2u-Frame-1321316884.png"
  - "assets/images/9402af8212ef-lfspfz4b-Frame-1321316884.png"
  - "assets/images/d943e95d255e-lfspgde2-Frame-1321316884.png"
---

# Gestures

Gestures are all the ways people interact with UI elements using touch

-   Gestures help people navigate, take action, or transform content

-   UI elements should respond to gestures in real time

-   Tap, scroll, and swipe are common gestures

## Resources

| Type | Link | Status |
| --- | --- | --- |
| Design | [Design Kit (Figma)](http://goo.gle/m3-design-kit) | Available |

## Types of gestures

### Tap

People can navigate to destinations and interact with elements through touch.

<video controls src="../../../assets/videos/cef768e47ec3-lx1faal8-1P-Tap-2_NewSize.mp4" title="Mobile UI shows a tap on the 1st of 3 news cards. The card opens to show the full article."></video>

[Open video](../../../assets/videos/cef768e47ec3-lx1faal8-1P-Tap-2_NewSize.mp4)

### Double tap

Two quick taps allows people to zoom in and out of content.

<video controls src="../../../assets/videos/c624fa29cb5d-lx1fboct-1P-Double-tap_NewSize.mp4" title="Mobile UI shows a double tap on a floral photo. The image expands to fill the screen."></video>

[Open video](../../../assets/videos/c624fa29cb5d-lx1fboct-1P-Double-tap_NewSize.mp4)

### Long press

People can access additional functionality by pressing on elements for an extended time.

<video controls src="../../../assets/videos/65d6ff3cf22d-lx1fdbcl-1P-Long-press_NewSize.mp4" title="A long press on an email reveals a selection checkmark and a container color change."></video>

[Open video](../../../assets/videos/65d6ff3cf22d-lx1fdbcl-1P-Long-press_NewSize.mp4)

### Scroll and pan

People can slide surfaces vertically, horizontally, or in any direction to move through content.

![Scrolling a feed.Scrolling up and down in a photo feed.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flfspc3ip-Frame%201321316884.png?alt=media&token=b441d0e3-4be2-4893-bb70-0dad4009f2fd>)

_Vertical scrolling reveals more content_

### Swipe

People can navigate horizontally to:

-   Switch between peer views like tabs

-   Complete actions

<video controls src="../../../assets/videos/a3e52c4f36fa-lx1ffjk8-1P-Swipe_NewSize.mp4" title="A swipe right on an email reveals a favorites icon."></video>

[Open video](../../../assets/videos/a3e52c4f36fa-lx1ffjk8-1P-Swipe_NewSize.mp4)

### Predictive back

On Android, a person can swipe left or right on certain components as a way to navigate to a previous destination. This gesture is called [predictive back](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md).

Before completing the swipe, the person can decide to continue to the previous view or stay in the current view.

Compatible components are:

-   Bottom sheet

-   Navigation bar

-   Navigation rail

-   Search bar

-   Side sheet

<video controls src="../../../assets/videos/f9075a454f43-lx1fhayy-BottomSheet_NewSize.mp4" title="Back swipe on a bottom sheet takes s person back to the previous screen of a photo feed."></video>

[Open video](../../../assets/videos/f9075a454f43-lx1fhayy-BottomSheet_NewSize.mp4)

### Drag

People can move elements around and slide surfaces in and out of view.

<video controls src="../../../assets/videos/9d0bd588b0d6-lx1fj7qz-1P-Drag-2_NewSize.mp4" title="A person drags the second email in a mobile inbox to the third position and back to the second position."></video>

[Open video](../../../assets/videos/9d0bd588b0d6-lx1fj7qz-1P-Drag-2_NewSize.mp4)

### Pick up and move

A long press and drag allows people to reorder content.

![Picking up and moving a calendar event to a new time.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flfspfq2u-Frame%201321316884.png?alt=media&token=7826053f-c367-4de0-bfe5-360152375e90>)

_A calendar event can be picked up and moved to a new time_

### Pinch

People can scale surfaces to navigate between screens.

![Dragging two points apart opens photo to full screen, dragging them towards each other collapses the photo.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flfspfz4b-Frame%201321316884.png?alt=media&token=11ef608d-a1db-47e3-a91b-a9c9a2316b72>)

_A photo can be pinched outward to a full screen view_

### Compound gestures

People can fluidly transition between various gestures, like panning and pinching in a map view.

![Pan gesture moves map, then pinch gesture is used to zoom out then in.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flfspgde2-Frame%201321316884.png?alt=media&token=325102a5-744b-4ac4-bcaa-8353bab5298f>)

_A map UI can be navigated through a combination of pan and pinch_
