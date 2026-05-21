---
title: "Design for immersive XR"
source_url: "https://m3.material.io/foundations/xr/design/accessibility"
lastmod: "2026-05-19"
snapshot_at: "2026-05-21T02:46:50.991Z"
section: "foundations"
assets:
  - "assets/images/c96d3c3a1421-mp6oo483-hero-image.png"
  - "assets/videos/817067f210fd-mowvgn9f-GM3-Color-01-v1.mp4"
  - "assets/videos/bfe26a15feb7-mowvrmua-Spatialize_SpacialPanels_2.mp4"
  - "assets/images/ab4134681d7e-mowvwpjp-04.png"
---

# Design for immersive XR

Resources and guidance for immersive extended reality (XR) devices

![Design for immersive XR](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmp6oo483-hero%20image.png?alt=media&token=e98832ea-27a5-45b3-8e22-8838005536d6>)

## Accessibility

## Use cases

XR presents unique physical constraints. Designing accessible XR products means accounting for different bodies, postures, and sensory abilities.

People should be able to do the following with assistive technology:

-   Navigate and interact with spatial content using their preferred input method

-   Understand the spatial environment and select interactive elements

-   Customize the experience to fit their physical posture and comfort


[More on Android XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app)

## System-level accessibility

Android XR adapts familiar Android assistive technologies for spatial environments.

To ensure an inclusive experience, design XR apps to work with system-level features like Google's [TalkBack](https://developer.android.com/guide/topics/ui/accessibility/testing) screen reader, voice to text, live captions, [dwell control](https://support.google.com/accessibility/android/answer/7071579), magnification, and color inversion and correction.  

[Android XR app quality guidelines](https://developer.android.com/docs/quality-guidelines/android-xr)

## Text accessibility & color contrast

Make sure text and UI are legible in different lighting conditions and environments. For example, in passthrough, the background might be a bright window or a dark room. 

-   Use a minimum 14dp body font size

-   Ensure high contrast between text and background

-   Use standard background color roles like **surface container**, rather than custom colors, so they dim automatically

-   Support light and dark themes

<video controls src="../../../../assets/videos/817067f210fd-mowvgn9f-GM3-Color-01-v1.mp4" title="5 container color roles change from light to dark themes."></video>

[Open video](../../../../assets/videos/817067f210fd-mowvgn9f-GM3-Color-01-v1.mp4)

## Physical accessibility

To support different mobility levels, provide flexible input methods and positions:

-   Actions should be achievable with one hand, voice, or eye control

-   Don’t require two-handed gestures

-   Design for seated, standing, and reclined positions

-   Allow people to recenter and pull UI closer to them

<video controls src="../../../../assets/videos/bfe26a15feb7-mowvrmua-Spatialize_SpacialPanels_2.mp4" title="A person uses 1 arm to push a spatial panel further out then closer in."></video>

[Open video](../../../../assets/videos/bfe26a15feb7-mowvrmua-Spatialize_SpacialPanels_2.mp4)

## Target size

Use large target sizes to make XR interactions precise and accessible.  

Interactive elements should have:

-   56x56dp or larger target

-   48x48dp or larger visual affordance

-   4dp offset


Don’t overlap targets of different elements.

Targets and icons should scale with their parent container or label text.

![A gear icon with a 56dp target size and 4dp offset.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowvwpjp-04.png?alt=media&token=63476ba4-7831-4848-9433-7b86f7f99e1e>)

_Use 56dp or larger target sizes for interactive elements_
