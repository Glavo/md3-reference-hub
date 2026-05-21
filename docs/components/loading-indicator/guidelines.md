---
title: "Loading indicator"
source_url: "https://m3.material.io/components/loading-indicator/guidelines"
lastmod: "2026-02-05"
snapshot_at: "2026-05-21T02:57:25.562Z"
section: "components"
assets:
  - "assets/videos/bc469fcfd1c3-m41ke7ak-Loading_Indicator-A2.mp4"
  - "assets/videos/683abd2c1e86-m0fd0ml7-Loading_Indicator-B.mp4"
  - "assets/videos/58c0ad50ddaf-m0fd16y4-Loading_Indicator-C.mp4"
  - "assets/videos/c58298ac3a0e-m0fd1o64-Loading_Indicator-D.mp4"
  - "assets/videos/29f469dc2179-m0fd27h6-Loading-Indicator-E.mp4"
  - "assets/videos/70b83f0df5bf-m5l84tah-Loading-Indicator-F3.mp4"
  - "assets/videos/83b50f23ffe6-m5l855gf-Loading-Indicator-G2.mp4"
  - "assets/images/9d877e4c5479-m0cads86-7.png"
  - "assets/images/0ff6b55c995f-m0cafeiy-8.png"
  - "assets/images/b42a35be0830-m0caha9b-9.png"
  - "assets/videos/ad901fb5b015-m41keuij-Loading-Indicator-H2.mp4"
  - "assets/videos/41b5ade710e2-m0fd4yi5-Loading-Indicator-I.mp4"
  - "assets/videos/51568296683a-m0fd5yv7-Loading-Indicator-J.mp4"
  - "assets/videos/a926fe0f5f11-m0fd65dd-Loading-Indicator-K.mp4"
  - "assets/images/fb5ac768c6e8-m0caprda-12.png"
  - "assets/videos/5282bb078db4-mbf4z7li-GM3_Expressive_Loading-Indicator_Guidelines_16_IA_v01.mp4"
  - "assets/videos/0b3c73985fff-m0fdewmr-Loading-Indicator-M.mp4"
  - "assets/videos/771e00454a06-m0fdfatx-Loading-Indicator-N.mp4"
  - "assets/videos/54d338f51a79-m0fdfhyq-Loading-Indicator-O.mp4"
  - "assets/videos/62ac3bab8056-m0fdfwxf-Loading-Indicator-P.mp4"
  - "assets/videos/78debf913996-m0fdg3wa-Loading-Indicator-Q.mp4"
---

# Loading indicator

Loading indicators show the progress for a short wait time

## Guidelines

<video controls src="../../../assets/videos/bc469fcfd1c3-m41ke7ak-Loading_Indicator-A2.mp4" title="Loading indicator on media player."></video>

[Open video](../../../assets/videos/bc469fcfd1c3-m41ke7ak-Loading_Indicator-A2.mp4)

## Usage

Loading indicators use animation to grab attention, mitigate perceived latency, and indicate that an activity is in progress.

They should be used when progress isn’t detectable, or when it’s not necessary to indicate how long an activity will take.

While similar in function to circular progress indicators, loading indicators are a better alternative for short processes between 200ms and 5s.

<video controls src="../../../assets/videos/683abd2c1e86-m0fd0ml7-Loading_Indicator-B.mp4" title="Loading indicator in loading state with “Getting your device ready...”."></video>

[Open video](../../../assets/videos/683abd2c1e86-m0fd0ml7-Loading_Indicator-B.mp4)

Choose a loading or progress indicator that corresponds to the expected wait time and type of process. 

If the wait is very long, consider allowing users to navigate away from the page while the process finishes up.

| Expected wait time | Recommendation |
| --- | --- |
| Instant (under 200ms) | No indicator |
| Short (between 200ms and 5s) | Loading indicator |
| Long (Over 5s) | Progress indicator |

<video controls src="../../../assets/videos/58c0ad50ddaf-m0fd16y4-Loading_Indicator-C.mp4" title="Content appearing on a screen quickly without a loading indicator."></video>

[Open video](../../../assets/videos/58c0ad50ddaf-m0fd16y4-Loading_Indicator-C.mp4)

<video controls src="../../../assets/videos/c58298ac3a0e-m0fd1o64-Loading_Indicator-D.mp4" title="Content appearing on a screen with a slight lag and a loading indicator."></video>

[Open video](../../../assets/videos/c58298ac3a0e-m0fd1o64-Loading_Indicator-D.mp4)

<video controls src="../../../assets/videos/29f469dc2179-m0fd27h6-Loading-Indicator-E.mp4" title="Content appearing on a screen with a long lag and a progress indicator."></video>

[Open video](../../../assets/videos/29f469dc2179-m0fd27h6-Loading-Indicator-E.mp4)

When a process can transition from indeterminate (unknown progress) to determinate (known remaining progress), transition between the corresponding progress indicators. 

Don’t transition a loading indicator into a progress indicator.

<video controls src="../../../assets/videos/70b83f0df5bf-m5l84tah-Loading-Indicator-F3.mp4" title="A screen transitioning from an indeterminate progress indicator to a determinate progress indicator. "></video>

[Open video](../../../assets/videos/70b83f0df5bf-m5l84tah-Loading-Indicator-F3.mp4)

<video controls src="../../../assets/videos/83b50f23ffe6-m5l855gf-Loading-Indicator-G2.mp4" title="A screen transitioning from a loading indicator to a determinate progress indicator."></video>

[Open video](../../../assets/videos/83b50f23ffe6-m5l855gf-Loading-Indicator-G2.mp4)

## Anatomy

![2 parts of an active indicator.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0cads86-7.png?alt=media&token=f27080ab-ebe2-410d-baa6-b0bc04ca5734>)

_Active indicator; Container (optional)_

### Active indicator

The active indicator is a looping shape morph sequence composed of seven unique Material 3 shapes.

[More about the Material shape library](../../styles/shape/overview-principles.md#579dd4ba-39f3-4e60-bd9b-1d97ed6ef1bf)

![Active indicator with shape morph.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0cafeiy-8.png?alt=media&token=bdcb1b69-8492-4871-b07b-2449155b0d42>)

_The active indicator morphs shape to capture attention_

### Container (optional)

When the container is visible, the active indicator should change color from **primary** to **on-primary-container**.

The container should be visible when the loading indicator is placed over other content. This helps it stand out better by giving it a stronger contrast. It’s not needed when the loading indicator is placed directly on a surface.

The container should be used with pull-to-refresh behavior.

![Active indicator with container.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0caha9b-9.png?alt=media&token=b9bf2aaa-19dd-4aa4-80f7-0484809b74dd>)

_The container is a circle that provides extra contrast from body content_

## Placement

While loading a page or container, the loading indicator should be centered on the element.

<video controls src="../../../assets/videos/ad901fb5b015-m41keuij-Loading-Indicator-H2.mp4" title="Active indicator with shape morph centered on a screen."></video>

[Open video](../../../assets/videos/ad901fb5b015-m41keuij-Loading-Indicator-H2.mp4)

When loading more items on a page with existing content, place the loading indicator in the empty space where the new content will appear. Avoid overlapping existing content.

<video controls src="../../../assets/videos/41b5ade710e2-m0fd4yi5-Loading-Indicator-I.mp4" title="Loading indicator with shape morph underneath photos in a photo app."></video>

[Open video](../../../assets/videos/41b5ade710e2-m0fd4yi5-Loading-Indicator-I.mp4)

Loading indicators can be placed within other components, such as buttons, to indicate that the action is ongoing, such as validating a form or checking for updates.

<video controls src="../../../assets/videos/51568296683a-m0fd5yv7-Loading-Indicator-J.mp4" title="Loading indicator in a button."></video>

[Open video](../../../assets/videos/51568296683a-m0fd5yv7-Loading-Indicator-J.mp4)

<video controls src="../../../assets/videos/a926fe0f5f11-m0fd65dd-Loading-Indicator-K.mp4" title="Loading indicator as the icon in a tab."></video>

[Open video](../../../assets/videos/a926fe0f5f11-m0fd65dd-Loading-Indicator-K.mp4)

## Responsive layout

Loading indicators default to 48dp, but the size is flexible. It should be between 24dp to 240dp, depending on the placement and the window size. Avoid exceeding the minimum and maximum sizes.

The ratio between the container and the active indicator stays the same when resizing the loading indicator. 

Reserve very large progress indicators for large and extra-large windows, like desktop.

![Loading indicators can range from 24dps to 240dps.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0caprda-12.png?alt=media&token=ac91d3fa-343a-4bc6-be14-466c85b2086d>)

_Loading indicators can range in size from 24–240dp_

### Larger windows

As the pane or window size grows, consider scaling the loading indicator as well, so it remains proportional in size to the empty space around it. The loading indicator shouldn’t exceed 240dp.

<video controls src="../../../assets/videos/5282bb078db4-mbf4z7li-GM3_Expressive_Loading-Indicator_Guidelines_16_IA_v01.mp4" title="Loading indicator on mobile and tablet screens."></video>

[Open video](../../../assets/videos/5282bb078db4-mbf4z7li-GM3_Expressive_Loading-Indicator_Guidelines_16_IA_v01.mp4)

## Behavior

### Pull-to-refresh

The loading indicator is used in [pull-to-refresh](https://developer.android.com/develop/ui/compose/components/pull-to-refresh) on Jetpack Compose only.

Pull-to-refresh is an Android system feature that manually refreshes screen content with an action or gesture. It’s used at the beginning of lists, grid lists, and card collections where the most recent content appears.

It’s best to use pull-to-refresh with dynamic content that can have frequent updates, where people have a high chance of seeing new content after refreshing.

<video controls src="../../../assets/videos/0b3c73985fff-m0fdewmr-Loading-Indicator-M.mp4" title="A loading indicator can appear above content in pull-to-refresh."></video>

[Open video](../../../assets/videos/0b3c73985fff-m0fdewmr-Loading-Indicator-M.mp4)

### Threshold requirements

To ensure intentional usage of the pull-to-refresh gesture, the loading indicator must pass a threshold before the app will refresh.

<video controls src="../../../assets/videos/771e00454a06-m0fdfatx-Loading-Indicator-N.mp4" title="Loading indicator with screen refresh after threshold time has passed."></video>

[Open video](../../../assets/videos/771e00454a06-m0fdfatx-Loading-Indicator-N.mp4)

<video controls src="../../../assets/videos/54d338f51a79-m0fdfhyq-Loading-Indicator-O.mp4" title="Loading indicator reversed can cancel refresh action."></video>

[Open video](../../../assets/videos/54d338f51a79-m0fdfhyq-Loading-Indicator-O.mp4)

The loading indicator remains visible until the refresh activity completes and any new content is visible, or someone navigates away from the refreshing content.

<video controls src="../../../assets/videos/62ac3bab8056-m0fdfwxf-Loading-Indicator-P.mp4" title="A loading indicator at the top of a screen, which appears until content loads."></video>

[Open video](../../../assets/videos/62ac3bab8056-m0fdfwxf-Loading-Indicator-P.mp4)

<video controls src="../../../assets/videos/78debf913996-m0fdg3wa-Loading-Indicator-Q.mp4" title="A loading indicator that scrolls off screen."></video>

[Open video](../../../assets/videos/78debf913996-m0fdg3wa-Loading-Indicator-Q.mp4)
