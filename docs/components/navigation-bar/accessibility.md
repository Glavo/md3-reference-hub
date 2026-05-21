---
title: "Navigation bar"
source_url: "https://m3.material.io/components/navigation-bar/accessibility"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/videos/b7e7f46c95e5-m7paivnz-GM3-Accessibility_Expressive_NavBar_a11y_01_V03.mp4"
  - "assets/videos/6f9404ea6598-m7paj7kh-GM3_Expressive_Accessibility_NavBar_a11y_02_V04.mp4"
  - "assets/images/e6bef93d4812-m2kua3ge-03.png"
  - "assets/images/77b0296e075f-m2kuaeol-04.png"
  - "assets/images/f0f21065f307-m0fr7kb3-03.png"
  - "assets/images/e4f7a9d8dcd8-m0fr7nd7-04.png"
  - "assets/images/acd7b4755837-m0fr7qqu-05.png"
  - "assets/images/337eab98ae8b-m0fr7ugl-06.png"
  - "assets/images/53e80b4ef714-m0fr7yfn-07.png"
  - "assets/images/579959630268-m0fr861i-08.png"
  - "assets/images/9260ba8a83de-m0fr8a8y-09.png"
---

# Navigation bar

Navigation bars let people switch between UI views on smaller devices

## Accessibility

## Use cases

People should be able to do the following using the assistive technology:

-   Move between navigation destinations
-   Select a particular navigation destination from a set
-   Get appropriate feedback based on input type

## Interaction & style

**Touch**

-   When a navigation item is tapped, the active indicator appears in place, providing feedback that it’s selected

-   A touch ripple passes through the indicator

-   The icon switches from outlined to filled

-   The icon changes color

<video controls src="../../../assets/videos/b7e7f46c95e5-m7paivnz-GM3-Accessibility_Expressive_NavBar_a11y_01_V03.mp4" title="On a navigation bar, when the Home and Explore icons are tapped, an active indicator is displayed as interaction feedback."></video>

[Open video](../../../assets/videos/b7e7f46c95e5-m7paivnz-GM3-Accessibility_Expressive_NavBar_a11y_01_V03.mp4)

**Cursor**

-   When hovered, the active indicator appears in a reduced state providing a visual cue that the destination is interactive

-   When clicked (in both active and inactive states), a ripple passes through the indicator

-   The icon switches from outlined to filled

-   The icon changes color, becoming darker

<video controls src="../../../assets/videos/6f9404ea6598-m7paj7kh-GM3_Expressive_Accessibility_NavBar_a11y_02_V04.mp4" title="On a navigation bar, the hover and click interactions on the Home and Explore icons have different interaction feedback."></video>

[Open video](../../../assets/videos/6f9404ea6598-m7paj7kh-GM3_Expressive_Accessibility_NavBar_a11y_02_V04.mp4)

### Text scaling and truncation

When someone sets their device to show a larger text size, the navigation bar should grow vertically to accommodate larger labels while retaining the default padding. It’s okay for scaled text to wrap in navigation items.

To remain accessible, ensure the full label is always visible on-screen at up to 2x text sizing. Beyond this size, text can truncate.

![Nav bar with text scaled to 1.5x size. Some labels are on two lines, others are on one line.](../../../assets/images/e6bef93d4812-m2kua3ge-03.png)

_Text scaled to 1.5 size_

![Nav bar with text scaled to 2x size. Some labels wrap to two lines.](../../../assets/images/77b0296e075f-m2kuaeol-04.png)

_Text scaled to 2x size_

## Initial focus

Initial focus lands directly on the first navigation item, since that is the first interactive element of the component.

![Focus order and keyboard navigation of a nav bar.](../../../assets/images/f0f21065f307-m0fr7kb3-03.png)

_Focus lands on first navigation item_

![Activating a nav item with space on a keyboard.](../../../assets/images/e4f7a9d8dcd8-m0fr7nd7-04.png)

_The navigation item is selected with Space/Enter_

## Visual indicators

Use a filled icon with a bold label for selected destinations. For unselected destinations use an outlined icon with a medium label.

If an icon doesn’t have a filled style, use a thicker or heavier version of the icon instead.

![A nav bar with a filled icon for the selected nav item.](../../../assets/images/acd7b4755837-m0fr7qqu-05.png)

_Use a filled icon for the selected navigation destination to differentiate from the other destinations_

![A nav bar with an outlined icon for the selected nav item.](../../../assets/images/337eab98ae8b-m0fr7ugl-06.png)

_Don’t use outlined icons on selected nav items_

![2 nav items, one selected, one unselected.](../../../assets/images/53e80b4ef714-m0fr7yfn-07.png)

_When selected, the icon fills, darkens, and is backed by an active indicator shape_

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Move between navigation items |
| Space / Enter | Selects the focused navigation item |

## Labeling elements

The accessibility label for a navigation item is typically the same as the destination name.

![Accessibility label and role defined for a Home icon on a navigation bar.](../../../assets/images/579959630268-m0fr861i-08.png)

_A navigation bar’s accessibility label can incorporate its adjacent UI text_

When the visible UI text is ambiguous, accessibility labels need to be more descriptive. For example, a navigation destination visibly labeled **Library** would benefit from additional information in its accessibility label to clarify the destination’s intent.

Note: On Android Views (MDC-Android), a more descriptive accessibility label is not available and the role is not announced.

![Accessibility labels of a navigation bar.](../../../assets/images/9260ba8a83de-m0fr8a8y-09.png)

_While the visible label text reads Library, the accessibility label for this destination clarifies its function: Music library_
