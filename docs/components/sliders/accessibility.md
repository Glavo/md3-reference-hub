---
title: "Sliders"
source_url: "https://m3.material.io/components/sliders/accessibility"
lastmod: "2026-05-08"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/videos/49270f5c3c90-lx2tjccg-GM3-Components-accessibility-Sliders-1-v01_1.mp4"
  - "assets/videos/0b27410d239d-lx2tk5qd-GM3-Components-accessibility-Sliders-2-v01.mp4"
  - "assets/images/d9f05f8d228f-lx1s6sg3-3.png"
  - "assets/images/2a6b00f6382e-lx1s73wl-4.png"
  - "assets/images/2b9d038dfe5b-m0o6wp1l-5.png"
  - "assets/images/b77f00b0dcfa-m3601h6w-6.png"
---

# Sliders

Sliders let users make selections from a range of values

## Accessibility

## Use cases

People should be able to do the following using assistive technology:

-   Navigate to a slider 
-   Select a range by controlling a handle along a track
-   Get appropriate feedback based on input type

## Interaction & style

The slider handle shrinks in width and the value appears to provide a visual cue to the user that the handle is being pressed.

**Touch**

When tapped or dragged, the handle width shrinks to provide interaction feedback, and the value appears.

**Cursor**

When hovered, the cursor changes. When clicked and dragged, the handle width shrinks, and the value appears.

<video controls src="../../../assets/videos/49270f5c3c90-lx2tjccg-GM3-Components-accessibility-Sliders-1-v01_1.mp4" title="Dragging a slider using a mouse cursor and by touch. Handle width shrinks when dragged."></video>

[Open video](../../../assets/videos/49270f5c3c90-lx2tjccg-GM3-Components-accessibility-Sliders-1-v01_1.mp4)

### Focus and navigation

Initial focus lands directly on the handle, since it’s the primary interactive element of the slider.

The slider value can then be adjusted using the arrow keys or other keyboard navigation options.

<video controls src="../../../assets/videos/0b27410d239d-lx2tk5qd-GM3-Components-accessibility-Sliders-2-v01.mp4" title="Using keyboard navigation on a slider. Tab to the handle, and use arrow keys to change the value."></video>

[Open video](../../../assets/videos/0b27410d239d-lx2tk5qd-GM3-Components-accessibility-Sliders-2-v01.mp4)

## Color contrast

Use visual anchors so the end of the slider’s inactive track has at least 3:1 contrast with the background. The stop indicator makes the end easily visible on most backgrounds.

![The inactive track has contrast below 3:1 with the background. The stop indicator is above 3:1. Slider is accessible.](../../../assets/images/d9f05f8d228f-lx1s6sg3-3.png)

_A stop indicator on the inactive track makes it easier to identify the end of the slider on a low-contrast background_

Alternatively, icons or other elements that have a 3:1 contrast with the background can be used to indicate the ends of the slider’s inactive track.

![The inactive track has contrast ratio below 3:1 with the background. The icon is above 3:1. The slider is accessible.](../../../assets/images/2a6b00f6382e-lx1s73wl-4.png)

_Icons make it easier to identify the ends of the slider on a low-contrast background_

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Moves focus to the slider handle |
| Arrows | Increase and decrease the value by one value or one stop indicator |
| Space & Arrows | Increase and decrease the value by one interval or one stop indicator |
| Home or End | Set the slider to the first and last values on the slider |

## Labeling elements

The accessibility label for a slider is typically the same as the slider's adjacent text label. It should have the **slider** role.

![Annotated aria tags of a slider.](../../../assets/images/2b9d038dfe5b-m0o6wp1l-5.png)

_A slider’s accessibility label should match the adjacent UI text_

If the UI text is correctly linked to the slider, assistive tech (such as a screenreader) will read the UI text followed by the component’s role.

![Annotated aria tags of a slider with stepper icons.](../../../assets/images/b77f00b0dcfa-m3601h6w-6.png)

_Icon buttons placed outside the slider should have the button role_
