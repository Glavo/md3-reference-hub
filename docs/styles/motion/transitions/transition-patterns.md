---
title: "Transitions"
source_url: "https://m3.material.io/styles/motion/transitions/transition-patterns"
lastmod: "2025-09-26"
snapshot_at: "2026-05-21T02:46:50.991Z"
section: "styles"
assets:
  - "assets/videos/356db3dca250-lyfqbdij-GM3-Transitions-TransitionPatterns-1-v01.mp4"
  - "assets/videos/7f23527ca4f9-lyfqc556-GM3-Transitions-TransitionPatterns-2-v01.mp4"
  - "assets/videos/9fac559798f3-lyfqdipk-GM3-Transitions-TransitionPatterns-3-1-v01.mp4"
  - "assets/videos/a3081dfc0546-lyfrbw3w-GM3-Transitions-TransitionPatterns-3-2-v01.mp4"
  - "assets/videos/a9040badce9e-lyfrcr6e-GM3-Transitions-TransitionPatterns-3-3-v01.mp4"
  - "assets/videos/409262821763-lyfrdrxa-GM3-Transitions-TransitionPatterns-3-4-v01.mp4"
  - "assets/videos/6c3ac0233a86-lyfrem0q-GM3-Transitions-TransitionPatterns-3-5-v01.mp4"
  - "assets/videos/01dae70ff2da-lyfrf9ld-GM3-Transitions-TransitionPatterns-3-6-v01.mp4"
  - "assets/videos/189cfb0bf931-lyfrilua-GM3-Transitions-TransitionPatterns-4-v01.mp4"
  - "assets/videos/19245716b8d8-lyfrjhm3-GM3-Transitions-TransitionPatterns-4-1-v01.mp4"
  - "assets/videos/d554d7f84b5b-lyfrkcfn-GM3-Transitions-TransitionPatterns-4-2-v01.mp4"
  - "assets/videos/1a58c6ab4004-lyfrldpn-GM3-Transitions-TransitionPatterns-4-3-v01.mp4"
  - "assets/videos/fea3ddf80878-lyfrmnfg-GM3-Transitions-TransitionPatterns-4-4-v01.mp4"
  - "assets/videos/c74d3e2a1b42-lyfrnslm-GM3-Transitions-TransitionPatterns-5-1-v01.mp4"
  - "assets/videos/10f8bcf6de27-lyfroshf-GM3-Transitions-TransitionPatterns-5-2-v01.mp4"
  - "assets/videos/fe56f7bed3ed-lyfrpmn2-GM3-Transitions-TransitionPatterns-5-3-v01.mp4"
  - "assets/videos/487fe47b9923-lyfrrw39-GM3-Transitions-TransitionPatterns-6-1-v01.mp4"
  - "assets/videos/705d5cbe1254-lyfs0nn2-GM3-Transitions-TransitionPatterns-6-2-v01.mp4"
  - "assets/videos/95bb50dc19d1-lyfs1jfp-GM3-Transitions-TransitionPatterns-6-3-v01.mp4"
  - "assets/videos/6935297f2de1-lyfs2znj-GM3-Transitions-TransitionPatterns-7-1-v01.mp4"
  - "assets/videos/4858c3a0fe42-lyfs4dk9-GM3-Transitions-TransitionPatterns-7-2-v01.mp4"
  - "assets/videos/1d5a42ef6c82-lyfs56ki-GM3-Transitions-TransitionPatterns-7-3-v01.mp4"
  - "assets/videos/31373e115b97-lyfs6out-GM3-Transitions-TransitionPatterns-7-4-v01.mp4"
  - "assets/videos/752548751189-lygxnh2p-GM3-Transitions-TransitionPatterns-7-5-v01.mp4"
  - "assets/videos/3b3e64ca62b1-lygxorck-GM3-Transitions-TransitionPatterns-7-6-v01.mp4"
  - "assets/videos/1cd1de81c699-lygxpdy1-GM3-Transitions-TransitionPatterns-7-7-v01.mp4"
  - "assets/videos/633628cee03b-lygxqtbv-GM3-Transitions-TransitionPatterns-7-8-v01.mp4"
  - "assets/videos/6a3ca7191b60-lygxs24v-GM3-Transitions-TransitionPatterns-8-1-v01.mp4"
  - "assets/videos/b0218a7ef29f-lygxtkjx-GM3-Transitions-TransitionPatterns-8-2-v01.mp4"
  - "assets/videos/754dcd9a49d8-lygxuime-GM3-Transitions-TransitionPatterns-8-3-v01.mp4"
---

# Transitions

Transitions help guide people as they navigate an app

## Transition patterns

star

Note:

M3 transitions use the legacy easing and duration system. They'll eventually be updated to use the motion physics system.

Transitions are short animations that connect individual elements or full-screen views of an app. They are fundamental to a great user experience because they help users understand how an app works. Well-designed transitions makes an experience feel high quality and expressive. They should be the top priority for a strong motion implementation. 

These are six common transition patterns:

1.  [Container transform](transition-patterns.md#b67cba74-6240-4663-a423-d537b6d21187)
2.  [Forward and backward](transition-patterns.md#df9c7d76-1454-47f3-ad1c-268a31f58bad)
3.  [Lateral](transition-patterns.md#8d4ec98f-60dc-47a9-901e-88fa2c43f18a)
4.  [Top level](transition-patterns.md#f852afd2-396f-49fd-a265-5f6d96680e16)
5.  [Enter and exit](transition-patterns.md#e1c2a650-d7a4-4a6d-9025-e6b7845291ed)
6.  [Skeleton loaders](transition-patterns.md#b39a0641-1b44-4864-83f5-fac38e0bd94a)

<video controls src="../../../../assets/videos/356db3dca250-lyfqbdij-GM3-Transitions-TransitionPatterns-1-v01.mp4" title="Small, colorful blobs are animated with different motion styles corresponding to the six transition patterns."></video>

[Open video](../../../../assets/videos/356db3dca250-lyfqbdij-GM3-Transitions-TransitionPatterns-1-v01.mp4)

## Container transform

This pattern is used to seamlessly transform an element to show more detail, like a Card expanding into a details page.

-   **Commonly used with:** Cards, lists, image galleries, search boxes, sheets, FABs, and chips
-   **Read more:** [UX Research](https://material.io/blog/motion-research-container-transform), [Guidelines](applying-transitions.md#50f9fc3f-c7e2-4099-b614-7c36b1c5285d), [Android implementation](https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md#container-transform)

Persistent elements are used to seamlessly connect the start and end state of the transition. The most common persistent element is a container, which is a shape used to represent an enclosed area. It can also be an important element, like a hero image. Of all transition patterns, this one creates the strongest relationship between elements. It's also perceived to be the most expressive.

<video controls src="../../../../assets/videos/7f23527ca4f9-lyfqc556-GM3-Transitions-TransitionPatterns-2-v01.mp4" title="Podcast app is selected from home screen, then individual card is selected, both taking over the screen."></video>

[Open video](../../../../assets/videos/7f23527ca4f9-lyfqc556-GM3-Transitions-TransitionPatterns-2-v01.mp4)

#### Between full-screen views

<video controls src="../../../../assets/videos/9fac559798f3-lyfqdipk-GM3-Transitions-TransitionPatterns-3-1-v01.mp4" title="1-year memory of flowers is selected within a carousel and takes over screen."></video>

[Open video](../../../../assets/videos/9fac559798f3-lyfqdipk-GM3-Transitions-TransitionPatterns-3-1-v01.mp4)

<video controls src="../../../../assets/videos/a3081dfc0546-lyfrbw3w-GM3-Transitions-TransitionPatterns-3-2-v01.mp4" title="Individual message is selected in messaging app and expands to view complete message."></video>

[Open video](../../../../assets/videos/a3081dfc0546-lyfrbw3w-GM3-Transitions-TransitionPatterns-3-2-v01.mp4)

<video controls src="../../../../assets/videos/a9040badce9e-lyfrcr6e-GM3-Transitions-TransitionPatterns-3-3-v01.mp4" title="Grocery list is selected within notes and expands to take over screen."></video>

[Open video](../../../../assets/videos/a9040badce9e-lyfrcr6e-GM3-Transitions-TransitionPatterns-3-3-v01.mp4)

#### Within a screen

<video controls src="../../../../assets/videos/409262821763-lyfrdrxa-GM3-Transitions-TransitionPatterns-3-4-v01.mp4" title="Search box for replies within messaging app expands to reveal recent searches and contacts."></video>

[Open video](../../../../assets/videos/409262821763-lyfrdrxa-GM3-Transitions-TransitionPatterns-3-4-v01.mp4)

<video controls src="../../../../assets/videos/6c3ac0233a86-lyfrem0q-GM3-Transitions-TransitionPatterns-3-5-v01.mp4" title="FAB is selected and expands to reveal  Compose Now action and shortlist of contacts."></video>

[Open video](../../../../assets/videos/6c3ac0233a86-lyfrem0q-GM3-Transitions-TransitionPatterns-3-5-v01.mp4)

<video controls src="../../../../assets/videos/01dae70ff2da-lyfrf9ld-GM3-Transitions-TransitionPatterns-3-6-v01.mp4" title="Song is selected from banner on bottom of screen and expands to take over."></video>

[Open video](../../../../assets/videos/01dae70ff2da-lyfrf9ld-GM3-Transitions-TransitionPatterns-3-6-v01.mp4)

## Forward and backward

This pattern is used for navigating between screens at consecutive levels of hierarchy, like navigating from an inbox to a message thread.

-   **Commonly used with**: Lists, cards, buttons, links
-   **Read more:** [Guidelines](applying-transitions.md#41b11a78-b88f-4972-904c-880bc348acc8), [Android implementation](https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md#shared-axis)

A horizontal sliding motion indicates moving forward or backward between screens. Android and iOS have different default styles:

**1\. Android** uses a fade as screens slide. This reduces the amount of motion, since the screens don't have to slide the full width of the device.

**2.** **iOS** uses a parallax effect, meaning the background slides slower than the foreground. This also reduces the amount of motion.

<video controls src="../../../../assets/videos/189cfb0bf931-lyfrilua-GM3-Transitions-TransitionPatterns-4-v01.mp4" title="Two motions contrasted in messaging app, with top showing Android’s fading movement and bottom showing iOS’s swiftly moving foreground transition."></video>

[Open video](../../../../assets/videos/189cfb0bf931-lyfrilua-GM3-Transitions-TransitionPatterns-4-v01.mp4)

<video controls src="../../../../assets/videos/19245716b8d8-lyfrjhm3-GM3-Transitions-TransitionPatterns-4-1-v01.mp4" title="WiFi set-up screen demonstrates Android fade effect when next button is selected."></video>

[Open video](../../../../assets/videos/19245716b8d8-lyfrjhm3-GM3-Transitions-TransitionPatterns-4-1-v01.mp4)

<video controls src="../../../../assets/videos/d554d7f84b5b-lyfrkcfn-GM3-Transitions-TransitionPatterns-4-2-v01.mp4" title="Music card uses iOS transition to move back to music app."></video>

[Open video](../../../../assets/videos/d554d7f84b5b-lyfrkcfn-GM3-Transitions-TransitionPatterns-4-2-v01.mp4)

<video controls src="../../../../assets/videos/1a58c6ab4004-lyfrldpn-GM3-Transitions-TransitionPatterns-4-3-v01.mp4" title="Fading transitions between photos app search bar and selection of Family &amp;amp; friends option."></video>

[Open video](../../../../assets/videos/1a58c6ab4004-lyfrldpn-GM3-Transitions-TransitionPatterns-4-3-v01.mp4)

<video controls src="../../../../assets/videos/fea3ddf80878-lyfrmnfg-GM3-Transitions-TransitionPatterns-4-4-v01.mp4" title="Email is selected from inbox demonstrating Android transition."></video>

[Open video](../../../../assets/videos/fea3ddf80878-lyfrmnfg-GM3-Transitions-TransitionPatterns-4-4-v01.mp4)

## Lateral

This pattern is used for navigating between peer content at the same level of hierarchy, like swiping between tabs of a content library.

-   **Commonly used with:** Tabs, carousels, and image galleries
-   **Read more:** [Guidelines](applying-transitions.md#3d5c16ce-7350-4a33-9d2b-598a7591d4e6)

Lateral transitions use a sliding motion similar to a forward and backward pattern, but it does not use a fade or parallax effect. Instead elements are grouped and slide in unison, creating a strong peer relationship. This also hints at being able to gesturally swipe elements to navigate.

<video controls src="../../../../assets/videos/c74d3e2a1b42-lyfrnslm-GM3-Transitions-TransitionPatterns-5-1-v01.mp4" title="Toggling between tabs for artists and albums in music app reveals lateral movement."></video>

[Open video](../../../../assets/videos/c74d3e2a1b42-lyfrnslm-GM3-Transitions-TransitionPatterns-5-1-v01.mp4)

<video controls src="../../../../assets/videos/10f8bcf6de27-lyfroshf-GM3-Transitions-TransitionPatterns-5-2-v01.mp4" title="Photos are swiped through horizontally, each filling the screen."></video>

[Open video](../../../../assets/videos/10f8bcf6de27-lyfroshf-GM3-Transitions-TransitionPatterns-5-2-v01.mp4)

<video controls src="../../../../assets/videos/fe56f7bed3ed-lyfrpmn2-GM3-Transitions-TransitionPatterns-5-3-v01.mp4" title="Carousel is scrolled through horizontally without use of fades."></video>

[Open video](../../../../assets/videos/fe56f7bed3ed-lyfrpmn2-GM3-Transitions-TransitionPatterns-5-3-v01.mp4)

## Top level

This pattern is used to navigate between top-level destinations of an app, like tapping a destination in a Navigation bar.

-   **Commonly used with:** Navigation bar, navigation rail, and navigation drawer
-   **Read more:** [Guidelines](applying-transitions.md#ab8885f6-5517-419d-80de-bea50cd10467), [Android implementation](https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md#fade-through)

The exiting screen quickly fades out and then the entering screen fades in. Since the content of top level destinations isn't necessarily related, the motion intentionally does not use grouping or persistent elements to create a strong relationship between screens.

<video controls src="../../../../assets/videos/487fe47b9923-lyfrrw39-GM3-Transitions-TransitionPatterns-6-1-v01.mp4" title="Home and Music options in the navigation are toggled between with fading indicating distinctness of items."></video>

[Open video](../../../../assets/videos/487fe47b9923-lyfrrw39-GM3-Transitions-TransitionPatterns-6-1-v01.mp4)

<video controls src="../../../../assets/videos/705d5cbe1254-lyfs0nn2-GM3-Transitions-TransitionPatterns-6-2-v01.mp4" title="Inbox menu item selected fades to reveal inbox contents."></video>

[Open video](../../../../assets/videos/705d5cbe1254-lyfs0nn2-GM3-Transitions-TransitionPatterns-6-2-v01.mp4)

<video controls src="../../../../assets/videos/95bb50dc19d1-lyfs1jfp-GM3-Transitions-TransitionPatterns-6-3-v01.mp4" title="Chat and Mail options in navigation both produce swift transitions."></video>

[Open video](../../../../assets/videos/95bb50dc19d1-lyfs1jfp-GM3-Transitions-TransitionPatterns-6-3-v01.mp4)

## Enter and exit

This pattern is used to introduce or remove a component on the screen. Components can enter and exit within the screen bounds, like a dialog appearing over an app. They can also enter and exit by crossing the screen bounds, like a navigation drawer or bottom sheet that slides on and off screen.

### Within screen bounds

-   **Commonly used with:** FABs, dialogs, menus, snackbars, time pickers and tooltips
-   **Read more:** [Guidelines](applying-transitions.md#56675bd6-5e69-4fa8-b075-d694e8cb3ad4)

**Android** components expand and collapse along the x or y axis as they enter and exit. Scale and z-axis motion is avoided since they imply elevation change, which doesn't match M3's reduced elevation model.

**iOS** components uniformly scale as they enter and fade out to exit.

<video controls src="../../../../assets/videos/6935297f2de1-lyfs2znj-GM3-Transitions-TransitionPatterns-7-1-v01.mp4" title="Message to permanently delete an email pops up without elevation for both Android and iOS."></video>

[Open video](../../../../assets/videos/6935297f2de1-lyfs2znj-GM3-Transitions-TransitionPatterns-7-1-v01.mp4)

The direction a component enters is informed by their location on screen, expanding away from the device edge. A menu at the top of the screen expands downwards, and a snackbar at the bottom of the screen expands upwards.

<video controls src="../../../../assets/videos/4858c3a0fe42-lyfs4dk9-GM3-Transitions-TransitionPatterns-7-2-v01.mp4" title="Image menu in upper right corner expands downward."></video>

[Open video](../../../../assets/videos/4858c3a0fe42-lyfs4dk9-GM3-Transitions-TransitionPatterns-7-2-v01.mp4)

<video controls src="../../../../assets/videos/1d5a42ef6c82-lyfs56ki-GM3-Transitions-TransitionPatterns-7-3-v01.mp4" title="A snackbar alert pops up from bottom of inbox screen and FAB emerges from lower right."></video>

[Open video](../../../../assets/videos/1d5a42ef6c82-lyfs56ki-GM3-Transitions-TransitionPatterns-7-3-v01.mp4)

### Beyond screen bounds

-   **Commonly used with:** App bars, banners, navigation bar, navigation rail, navigation drawer, and sheets
-   **Read more:** [Guidelines](applying-transitions.md#1b704202-167d-48d5-bca1-614cf050de1b)

**Android** components expand and collapse along the x or y axis as they slide on and off screen. This emphasizes their shape, making an otherwise simple transition more expressive.

**iOS** components slide on and off screen without changing shape.

<video controls src="../../../../assets/videos/31373e115b97-lyfs6out-GM3-Transitions-TransitionPatterns-7-4-v01.mp4" title="Android and iOS demonstrations of navigation emerging from left edge and new message alert emerging from top edge."></video>

[Open video](../../../../assets/videos/31373e115b97-lyfs6out-GM3-Transitions-TransitionPatterns-7-4-v01.mp4)

Components like a side sheet can also enter and exit at the same elevation as the main content. Coplanar sheets shrink the available area for content.

<video controls src="../../../../assets/videos/752548751189-lygxnh2p-GM3-Transitions-TransitionPatterns-7-5-v01.mp4" title="Selection of comments icon shrinks the main draft field."></video>

[Open video](../../../../assets/videos/752548751189-lygxnh2p-GM3-Transitions-TransitionPatterns-7-5-v01.mp4)

Components can enter and exit from beyond the screen bounds based on a scroll gesture. This allows for more screen space to browse.

<video controls src="../../../../assets/videos/3b3e64ca62b1-lygxorck-GM3-Transitions-TransitionPatterns-7-6-v01.mp4" title="Top Stories header disappears as user scrolls deeper into news."></video>

[Open video](../../../../assets/videos/3b3e64ca62b1-lygxorck-GM3-Transitions-TransitionPatterns-7-6-v01.mp4)

<video controls src="../../../../assets/videos/1cd1de81c699-lygxpdy1-GM3-Transitions-TransitionPatterns-7-7-v01.mp4" title="Scrolling lower through photos hides navigation, saving room for browsing."></video>

[Open video](../../../../assets/videos/1cd1de81c699-lygxpdy1-GM3-Transitions-TransitionPatterns-7-7-v01.mp4)

The location components enter and exit help establish a coherent spatial model of an app:

1.  A **notification** enters from the top indicating the notification drawer can also be pulled down from the top
2.  A **nav drawer** enters from the left helping users understand where it's located when it's off screen
3.  A **bottom sheet** and the keyboard enters from the bottom of the screen. This is a sensible default location for sheets to enter since the bottom of the screen is easiest to reach.

<video controls src="../../../../assets/videos/633628cee03b-lygxqtbv-GM3-Transitions-TransitionPatterns-7-8-v01.mp4" title="Email notification emerges from top of screen, navigation emerges from left, and keyboard enter from below, all in sequence."></video>

[Open video](../../../../assets/videos/633628cee03b-lygxqtbv-GM3-Transitions-TransitionPatterns-7-8-v01.mp4)

## Skeleton loaders

This pattern is used to transition from a temporary loading state to a fully loaded UI.

-   **Read more**: [Guidelines](applying-transitions.md#b82b5150-609b-4540-903b-2b900ef830aa)

Skeleton loaders are UI abstractions that hint at where content will appear once it's loaded. They're used in combination with other transitions to reduce perceived latency and stabilize layouts as content loads.

<video controls src="../../../../assets/videos/6a3ca7191b60-lygxs24v-GM3-Transitions-TransitionPatterns-8-1-v01.mp4" title="Music app is selected, producing a skeleton soon populated by individual music items in each corresponding outline."></video>

[Open video](../../../../assets/videos/6a3ca7191b60-lygxs24v-GM3-Transitions-TransitionPatterns-8-1-v01.mp4)

Skeleton loaders have a subtle pulsing animation to indicate indeterminate progress. It starts at the top left of the screen and moves down to the bottom right.

Once content is loaded, it quickly fades in on top of the skeleton loader.

<video controls src="../../../../assets/videos/b0218a7ef29f-lygxtkjx-GM3-Transitions-TransitionPatterns-8-2-v01.mp4" title="&lt;p&gt;A pulsing animation indicates indeterminant loading&lt;/p&gt;"></video>

[Open video](../../../../assets/videos/b0218a7ef29f-lygxtkjx-GM3-Transitions-TransitionPatterns-8-2-v01.mp4)

<video controls src="../../../../assets/videos/754dcd9a49d8-lygxuime-GM3-Transitions-TransitionPatterns-8-3-v01.mp4" title="&lt;p&gt;Content quickly fades in once it's loaded&lt;/p&gt;"></video>

[Open video](../../../../assets/videos/754dcd9a49d8-lygxuime-GM3-Transitions-TransitionPatterns-8-3-v01.mp4)
