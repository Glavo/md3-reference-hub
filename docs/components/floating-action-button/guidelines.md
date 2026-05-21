---
title: "FABs"
source_url: "https://m3.material.io/components/floating-action-button/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/68cda2352316-mkapod2e-01.png"
  - "assets/images/7463f4e628d6-mkapp0w4-02.png"
  - "assets/images/aeb55d9eaccd-mkappjdx-03.png"
  - "assets/images/faeb3f82e218-mkapq84r-04.png"
  - "assets/images/fd18cae909ce-mkapqn1b-05.png"
  - "assets/images/3c6321bb7e89-mkapr8x3-06-do.png"
  - "assets/images/f079666d7a77-mkaps2z9-07-don't.png"
  - "assets/images/0f4ce99dab85-mkc6tcz8-08.png"
  - "assets/images/af3ceb440f91-mkc6uyqo-09.png"
  - "assets/images/167aa2defc42-mkaptzjv-10.png"
  - "assets/images/e49130949bbb-mkapug9u-11.png"
  - "assets/images/9de6b9e8184c-mkapv2og-12.png"
  - "assets/images/2cc02bd62e89-mkaq0msf-13.png"
  - "assets/images/77b05b672fe6-mkaq1779-14.png"
  - "assets/images/75376101fe8c-mkaq1wxv-15.png"
  - "assets/images/523f94c96fea-mkaq2b6m-16.png"
  - "assets/images/0f0dcb3031fb-mkaq2qmb-17.png"
  - "assets/images/a500b3aabc80-mkaq35yc-18.png"
  - "assets/videos/77978e4bc39e-m0e6834q-FAB-A.mp4"
  - "assets/videos/f64916499722-m1l6g0wn-FAB-B-1.mp4"
  - "assets/videos/c7e48824843a-m1l6g857-FAB-C_1.mp4"
  - "assets/videos/c6c50d0b46fa-md8w19ca-GM3_Expressive_FAB_Guidelines_FAB-D_v02.mp4"
  - "assets/videos/2cf14d5fa88e-md8w1k06-GM3_Expressive_FAB_Guidelines_FAB-E_v02.mp4"
---

# FABs

## Guidelines

![3 screens with various FAB sizes.](../../../assets/images/68cda2352316-mkapod2e-01.png)

_FABs have multiple sizes that scale with the window size_

## Usage

Use a FAB for the most important action on a screen; it appears in front of all other content.

The FAB can be aligned left, center, or right. It can be positioned above the navigation bar, or nested within it.

![A Compose FAB is positioned above a nav bar on a mobile email inbox.](../../../assets/images/7463f4e628d6-mkapp0w4-02.png)

_FABs can use dynamic color_

There are three FAB sizes:

1.  FAB

2.  Medium FAB (most recommended)

3.  Large FAB


Choose the FAB size based on the visual hierarchy of your layout. 

Note: The small FAB is no longer recommended.

![3 FAB sizes.](../../../assets/images/aeb55d9eaccd-mkappjdx-03.png)

_FAB; Medium FAB; Large FAB_

The FAB is the smallest size, and is best used in compact windows where other actions may be present on screen.

The medium FAB is recommended for most situations, and works best in compact and medium windows. Use it for important actions without taking up too much space. 

A large FAB is useful in any window size when the layout calls for a clear and prominent primary action, but is best suited for expanded and larger window sizes, where its size helps draw attention.

![A medium FAB over an email app UI.](../../../assets/images/faeb3f82e218-mkapq84r-04.png)

_Use a medium FAB in most window sizes_

![A large FAB over an email app UI.](../../../assets/images/fd18cae909ce-mkapqn1b-05.png)

_Use a large FAB when the primary action needs to be prominent_

![A photo feed with no FAB.](../../../assets/images/3c6321bb7e89-mkapr8x3-06-do.png)

_FABs are not needed on every screen, such as when images represent primary actions_

![A screen with 3 FABs makes it hard to tell what the primary action should be.](../../../assets/images/f079666d7a77-mkaps2z9-07-don't.png)

_Don't display multiple FABs on a single screen_

A FAB can transform into an extended FAB on larger screens, or it can transition into a FAB menu when selected. Use a FAB menu when there are many kinds of actions relevant to the FAB. 

[More on FAB menus](../fab-menu/accessibility.md)

![A extended FAB saying “Share” with a less popular share icon.](../../../assets/images/0f4ce99dab85-mkc6tcz8-08.png)

_Use the extended FAB when label text is necessary_

![A FAB menu showing 3 actions related to sharing.](../../../assets/images/af3ceb440f91-mkc6uyqo-09.png)

_Use the FAB menu when there are many kinds of actions relevant to the FAB_

## Actions

A FAB can trigger an action on the current screen, or it can perform an action that creates a new screen.

A FAB promotes an important, constructive action such as:

-   Create
-   Favorite
-   Share
-   Start a process

![FABS for 12 common actions including, create, edit, and navigate.](../../../assets/images/167aa2defc42-mkaptzjv-10.png)

_Use FABs for primary, positive actions_

Avoid using a FAB for minor or destructive actions, such as:

-   Archive or trash

-   Alerts or errors

-   Limited tasks like cutting text

-   Controls better suited to a toolbar, like to adjust volume or font color

![FABs for 18 minor or destructive actions, such as cut, trash, and volume.](../../../assets/images/e49130949bbb-mkapug9u-11.png)

_Don’t use FABs for minor, overflow, unclear, or destructive actions_

## Anatomy

![2 elements of a FAB.](../../../assets/images/9de6b9e8184c-mkapv2og-12.png)

_Container; Icon_

### Container

The FAB is typically displayed in a square container. The container shouldn’t be covered by other elements, such as badges.

The container must have sufficient color contrast with the surface it’s placed on.

![A bright colored FAB has high contrast with the background.](../../../assets/images/2cc02bd62e89-mkaq0msf-13.png)

_A FAB container color needs to stand out from its background_

### Icon

An icon in a FAB should be clear and understandable. When hovering over a FAB on web products, FABs should display a tooltip with an accompanying icon text label. Use a filled icon instead of an outlined icon.

A FAB shouldn't contain notifications or actions found elsewhere on a screen.

![4 FABs each with a simple icon.](../../../assets/images/77b05b672fe6-mkaq1779-14.png)

_Use clear and simple icons such as add, message, or edit_

![4 FABs each with an ambiguous icon.](../../../assets/images/75376101fe8c-mkaq1wxv-15.png)

_Don’t use confusing or open-ended icons to symbolize less common actions_

## Adaptive design

In compact and medium window sizes, the best place for the FAB is typically the lower right corner of a screen, since it’s easy to reach and is less likely to cover important content.

In expanded window sizes, consider placing the FAB in the upper left corner, like in the navigation rail. This positions it as one of the first interactive elements people see when they land on the page.

Adjust the size of the FAB based on the context. Use a medium FAB for mobile layouts, and large FAB for tablets and large screens.

![Large screen layout showing FAB in upper left region of the screen, below navigation rail icon.](../../../assets/images/523f94c96fea-mkaq2b6m-16.png)

_For large screens, place the FAB in the upper left corner_

![A screen layout with several interactive elements. A single FAB is in the navigation rail.](../../../assets/images/0f0dcb3031fb-mkaq2qmb-17.png)

_A FAB can be used within a navigation component, such as a navigation rail_

![A busy screen layout with 8 cards, each with their own FAB.](../../../assets/images/a500b3aabc80-mkaq35yc-18.png)

_Individual components, such as cards, shouldn’t have their own FAB_

## Behaviors

### Appearing

When a FAB animates on screen, it expands outward from a central point. The icon within it can be animated as well.

While FABs should be relevant to screen content, they aren't attached to the surface on which content appears. FABs move separately from other UI elements because of their relative importance.

**Screen transitions
**FABs can morph to launch related actions. When a screen changes its layout, the FAB should disappear and reappear during the transition.

**Reappearance
**The FAB should only reappear if it's relevant to the new screen. It should reappear in the same position, if possible.

<video controls src="../../../assets/videos/77978e4bc39e-m0e6834q-FAB-A.mp4" title="FAB appearing from the bottom of the screen, moving to a position above the  navigation bar."></video>

[Open video](../../../assets/videos/77978e4bc39e-m0e6834q-FAB-A.mp4)

### Expanding

The FAB can expand and adapt to any shape using a container transform transition pattern. This includes a surface that's part of the app structure, or a surface that spans the entire screen.

The FAB can also transition into a FAB menu. 

[More on FAB menus](../fab-menu/accessibility.md)

<video controls src="../../../assets/videos/f64916499722-m1l6g0wn-FAB-B-1.mp4" title="Compose FAB expands to container size, opening a draft email screen."></video>

[Open video](../../../assets/videos/f64916499722-m1l6g0wn-FAB-B-1.mp4)

### Scrolling

FABs remain in place on scroll.

Extended FABs can collapse into a FAB on scroll and expand on reaching the bottom of the view.

<video controls src="../../../assets/videos/c7e48824843a-m1l6g857-FAB-C_1.mp4" title="Extended FAB collapsed into a FAB when scrolling on the page."></video>

[Open video](../../../assets/videos/c7e48824843a-m1l6g857-FAB-C_1.mp4)

### Moving across tabs

When tabs are present, the FAB should briefly disappear, then reappear when the new content moves into place. This shows that the FAB is not connected to any particular tab.

<video controls src="../../../assets/videos/c6c50d0b46fa-md8w19ca-GM3_Expressive_FAB_Guidelines_FAB-D_v02.mp4" title="FAB blinks away and reappears with new screen content."></video>

[Open video](../../../assets/videos/c6c50d0b46fa-md8w19ca-GM3_Expressive_FAB_Guidelines_FAB-D_v02.mp4)

Don't animate the FAB with body content.

<video controls src="../../../assets/videos/2cf14d5fa88e-md8w1k06-GM3_Expressive_FAB_Guidelines_FAB-E_v02.mp4" title="FAB moves horizontally when scrolling between tabs."></video>

[Open video](../../../assets/videos/2cf14d5fa88e-md8w1k06-GM3_Expressive_FAB_Guidelines_FAB-E_v02.mp4)
