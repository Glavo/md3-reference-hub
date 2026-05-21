---
title: "Navigation bar"
source_url: "https://m3.material.io/components/navigation-bar/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/b3d9706bcad6-malqgvk7-01.png"
  - "assets/images/fa67ad8d2330-malnqdza-02.png"
  - "assets/images/78a688bb0788-malqhln7-03.png"
  - "assets/images/6bd42b1b3a1c-malqhs7x-04.png"
  - "assets/images/613b65676e97-malqi614-05-don't.png"
  - "assets/images/23fe5901e34e-malqimzs-06-dont.png"
  - "assets/images/5d39bcce70d5-malqir51-07-dont.png"
  - "assets/images/29f3d9d7d20b-m0fp4omq-08.png"
  - "assets/images/658e92a57d0f-m0fp4ti0-09.png"
  - "assets/images/704c5e4362ec-m3t918of-10.png"
  - "assets/images/d741c9eff8c4-m3t91cku-11.png"
  - "assets/images/cc32c3efce13-m3t91mur-12.png"
  - "assets/images/1cfce4e5df2f-m0fp9y48-13.png"
  - "assets/images/6065e83bb4ac-m0fpa2te-14.png"
  - "assets/images/cdae06ee62c6-malqnpkt-15-dont.png"
  - "assets/images/85828e5d3d42-malqo0n5-16-do.png"
  - "assets/images/5fda570a2374-malqo7ag-17-dont.png"
  - "assets/images/fb0113753fc2-m0fpamvs-18.png"
  - "assets/images/f6d5a48cd3a4-malqoweq-19-do.png"
  - "assets/images/44ea47a7161a-malqp27c-20-dont.png"
  - "assets/images/86c08c1ef715-malqpu1t-21-dont.png"
  - "assets/images/08a113553ed0-malqqg5m-22.png"
  - "assets/images/a0075020735d-malqqlk1-23.png"
  - "assets/images/5effd0f25694-malqqsyh-24-do.png"
  - "assets/images/9fe79d025fa0-malqqy0m-25-dont.png"
  - "assets/videos/cac8997e4217-malo9ujs-GM3_Expressive_NavBar_Guidelines_26_IA_v01.mp4"
  - "assets/videos/275b18f4c376-malo6njn-GM3-Expressive_NavBar_Guidelines_Responsive-Layout_27_IA_v04.mp4"
  - "assets/images/06ebc4e3e3a9-malo8a44-28.png"
  - "assets/images/1012c05d0d66-malqsfoq-29.png"
  - "assets/images/04c6f6665c77-m0fpt5k2-30.png"
  - "assets/videos/c838f72ea86c-m0fpu2iy-C-Switch-Destination-RENDER-2x_240821.mp4"
  - "assets/videos/a8a6ea11e8d2-malod84x-GM3_Expressive_Nav-Bar_Guidelines_Behavior_Scrolling_32_IA_V04.mp4"
  - "assets/videos/b2f63bf5aceb-maloebec-GM3_Expressive_Nav-Bar_Guidelines_Behavior_Scrolling_33_IA_V04.mp4"
  - "assets/videos/e9f572541e1f-malof0yh-GM3-Expressive_NavBar_Guidelines_34_IA_v01.mp4"
  - "assets/videos/d73b852ca214-m0fq2m3b-G-CU-Destination-Change-RENDER-2x_240821.mp4"
---

# Navigation bar

Navigation bars let people switch between UI views on smaller devices

## Guidelines

![A nav bar with vertical items in a compact window, and horizontal items in a medium window.](../../../assets/images/b3d9706bcad6-malqgvk7-01.png)

_Navigation bars adapt to different window sizes_

## Usage

Navigation bars provide access to three to five destinations. The nav bar is positioned at the bottom of windows for convenient access.

Each destination is represented by an icon and label text. One navigation destination is always active.

When a navigation bar icon is tapped or focused, people are taken to the navigation destination associated with that icon.

![A nav bar for a music app with 4 destinations: Home, Browse, Radio, Library, It’s in a compact window.](../../../assets/images/fa67ad8d2330-malnqdza-02.png)

_Navigation bars can have three to five destinations_

Navigation bars should be used for:

-   Three to five main pages in the product
-   Mobile or tablet only

Navigation bars shouldn’t be used for accessing single tasks, such as viewing one email.

![A nav bar for a music app with 4 destinations: Home, Browse, Radio, Library. It’s in a medium window.](../../../assets/images/78a688bb0788-malqhln7-03.png)

_On mobile or tablet, navigation bars should be used for top-level destinations_

The navigation items can be **vertical** or **horizontal**.

-   Use vertical items in compact windows, like mobile

-   Use horizontal items in medium windows, like tablets

![A nav bar with vertical items in a compact window, and horizontal items in a medium window.](../../../assets/images/6bd42b1b3a1c-malqhs7x-04.png)

_Vertical navigation items work best in compact windows. Horizontal items work best in medium windows._

For products with more than five navigation items, don’t use a navigation bar; the elements may collide and there likely won’t be enough space for translated text.

Instead, consider using tabs to organize similar content within a page, or hide the navigation behind a menu icon using a modal expanded navigation rail.

![A nav bar with 7 items in a compact window.](../../../assets/images/613b65676e97-malqi614-05-don't.png)

_Avoid putting more than five navigation items in a navigation bar_

![A nav bar with no labels for each page item.](../../../assets/images/23fe5901e34e-malqimzs-06-dont.png)

_Don’t remove the labels from navigation items_

![A nav bar with 2 page items.](../../../assets/images/5d39bcce70d5-malqir51-07-dont.png)

_Don’t use a navigation bar for fewer than three destinations. Instead, use tabs._

![A nav bar is on the Library page of a music app. Tabs at the top of the page have secondary navigation for playlists, artists, albums, and songs.](../../../assets/images/29f3d9d7d20b-m0fp4omq-08.png)

_Use navigation for distinct pages and tabs for related content within a page_

![Nav bar using horizontal items in a compact window. The items are too wide and flow off screen.](../../../assets/images/658e92a57d0f-m0fp4ti0-09.png)

_Navigation bar destinations have fixed positions. Don’t scroll them or modify their positions._

## Anatomy

![6 elements of the nav bar.](../../../assets/images/704c5e4362ec-m3t918of-10.png)

_Container; Icon; Label text; Active indicator; Large badge (optional); Small badge (optional)_

### Container

The container should always be placed at the bottom of the product and span the full length of the window. Navigation items are centered within the container.

The container has a color fill to provide separation from other content.

![The nav bar at the bottom of a medium window has a color fill to differentiate from the background.](../../../assets/images/d741c9eff8c4-m3t91cku-11.png)

_The navigation bar container holds all elements_

### Navigation items

Navigation items hold all elements for each destination: the icon, label text, and active indicator. They can be **vertical**, with the text below the icon and indicator, or **horizontal**, with the icon and text beside each other inside the indicator. 

Vertical items are best in compact windows, and horizontal items are best in medium windows.

Horizontal items are centered in the nav bar with outer margins.

![The nav bar in a medium window with padding on each side.](../../../assets/images/cc32c3efce13-m3t91mur-12.png)

_The navigation bar is divided into equal-width segments with padding from the window edge_

### Icons

Navigation rail items must use icons that symbolize the content of their page. Browse [popular icon](https://fonts.google.com/icons).

Use a filled icon for the active destination and outlined icons for inactive destinations. If an icon doesn’t have a filled version, apply **semibold** weight to the icon instead.

![An active nav item with a filled icon compared to inactive items with outlined icons.](../../../assets/images/1cfce4e5df2f-m0fp9y48-13.png)

_Use filled icons when the navigation item is active_

![An active nav item with a semibold icon compared to inactive items with outlined icons.](../../../assets/images/6065e83bb4ac-m0fpa2te-14.png)

_If a filled version of an icon is unavailable, the icon’s weight must increase_

Active and inactive icons must have a minimum 3:1 contrast ratio with the container.

![4 nav items that are each different colors with low contrast with the background.](../../../assets/images/cdae06ee62c6-malqnpkt-15-dont.png)

_Don’t use multiple or low-contrast colors in a navigation bar, as they make it harder for people to distinguish the active item and navigate to other destinations_

### Active indicator

The active indicator shows which page from the nav bar is currently being displayed.

![The current page in a nav bar has an active indicator.](../../../assets/images/85828e5d3d42-malqo0n5-16-do.png)

_Use the active indicator only for the active destination_

![All items in a nav bar have active indicators.](../../../assets/images/5fda570a2374-malqo7ag-17-dont.png)

_Don’t use the active indicator for more than one destination at a time_

### Label text

The label text should be a short, meaningful description of each navigation destination and another way for people to understand an icon’s meaning.

All navigation items require a label text. It should be 1-2 words.

![A nav bar on a music app with clearly labelled destinations: home, browse, radio, library.](../../../assets/images/fb0113753fc2-m0fpamvs-18.png)

_Label text must be brief and clear_

![A nav bar with 1-word labels for each page.](../../../assets/images/f6d5a48cd3a4-malqoweq-19-do.png)

_Use brief text labels to identify the purpose of a destination_

![A nav bar with “Music catalog” for a label. The label is truncated.](../../../assets/images/44ea47a7161a-malqp27c-20-dont.png)

_Don’t wrap or truncate text as it can make the label hard to understand_

![A nav bar with “Music catalog” for a label. The label is a smaller size to make the text fit.](../../../assets/images/86c08c1ef715-malqpu1t-21-dont.png)

_Don’t shrink longer text to fit on a single line_

### Badges (optional)

Navigation bars can display badges in the upper right corners of the destination icon.

Badges can contain dynamic information, such as the number of new messages.

![A nav bar with a destination called “Go” with a small badge and one called “Saved” with a large badge saying “3.”](../../../assets/images/08a113553ed0-malqqg5m-22.png)

_Use a small badge to indicate an update, and a large badge to show the amount of updates_

![Horizontal nav items with the badges in the same place of the icon as vertical nav items.](../../../assets/images/a0075020735d-malqqlk1-23.png)

_Badges overlap the icon in both vertical and horizontal navigation items_

## Placement

The floating action button (FAB) is placed above the navigation bar. Nav bars are always placed at the bottom of the window.

![The FAB should be right-aligned above the navigation bar](../../../assets/images/5effd0f25694-malqqsyh-24-do.png)

_The FAB should be right-aligned above the navigation bar_

![A mobile page with a FAB overlapping a nav bar.](../../../assets/images/9fe79d025fa0-malqqy0m-25-dont.png)

_Don’t cover the navigation bar with a FAB_

Navigation bars can be temporarily covered by dialogs, bottom sheets, navigation drawers, the on-screen keyboard, or other elements needed to complete a flow. They should not be permanently obstructed on any screen.

<video controls src="../../../assets/videos/cac8997e4217-malo9ujs-GM3_Expressive_NavBar_Guidelines_26_IA_v01.mp4" title="The navigation bar being covered by a bottom sheet when users take an action on screen."></video>

[Open video](../../../assets/videos/cac8997e4217-malo9ujs-GM3_Expressive_NavBar_Guidelines_26_IA_v01.mp4)

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. More on [adaptive design](https://m3.material.io/foundations/adaptive-design)

### Resizing

Only use navigation bars for compact and medium window size classes. 

**Compact**: For narrow windows, use a navigation bar or modal navigation rail.

**Medium**: Use a navigation bar or navigation rail. Decide based on whether horizontal or vertical space is more important.

**Expanded and extra-large**: Use a navigation rail instead. Decide based on available window space and the number of navigation destinations.

<video controls src="../../../assets/videos/275b18f4c376-malo6njn-GM3-Expressive_NavBar_Guidelines_Responsive-Layout_27_IA_v04.mp4" title="A music app with a nav bar adapting to larger screens, where it changes to horizontal items, and then into a nav rail."></video>

[Open video](../../../assets/videos/275b18f4c376-malo6njn-GM3-Expressive_NavBar_Guidelines_Responsive-Layout_27_IA_v04.mp4)

The navigation bar container spans 100% of the window width.

![Navigation bar spanning the full width of a compact window.](../../../assets/images/06ebc4e3e3a9-malo8a44-28.png)

_Navigation bars use 100% of the screen width_

The navigation bar is used on smaller devices. It’s not intended for desktop.

![Navigation bar spanning the full width of an expanded window size.](../../../assets/images/1012c05d0d66-malqsfoq-29.png)

_Don’t use navigation bars for desktop layouts. Instead, use a navigation rail or tabs._

### Presentation

In medium window sizes, use horizontal nav items to better use available space.

Horizontal nav items should remain centered with the same padding at each window size.

![Horizontal nav items have the same width in medium and expanded windows. Only the padding changes.](../../../assets/images/04c6f6665c77-m0fpt5k2-30.png)

_A navigation bar in horizontal orientation keeps the same spacing between destinations_

## Behavior

### Navigation

When selecting a navigation bar item not currently selected, the product navigates to that destination’s screen using a [top level](../../styles/motion/transitions/transition-patterns.md#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. It can either remember where you left off, or reset to the default view.

1.  **Preserve state**: If someone has interacted with this destination, it returns to their scroll position, current tab, and in-line search status.
2.  **Reset state**: Any prior user interactions are reset, including scroll position, tab selection, and in-line search.

Choose the behavior that best suits the product and user needs. For example, an app that requires frequent switching between sections should preserve each section’s state.

<video controls src="../../../assets/videos/c838f72ea86c-m0fpu2iy-C-Switch-Destination-RENDER-2x_240821.mp4" title="After selecting an item on the bottom navigation bar, the app navigates to that destination’s screen"></video>

[Open video](../../../assets/videos/c838f72ea86c-m0fpu2iy-C-Switch-Destination-RENDER-2x_240821.mp4)

Re-selecting the currently active destination should reset the scroll position to the top of the page.

**Don't swipe between destinations**
Swiping across the screen does not navigate between destinations, and is not supported by the navigation bar. Swipe behavior should be reserved for related items, such as cards in a carousel, or actions such as archiving a list item.

<video controls src="../../../assets/videos/a8a6ea11e8d2-malod84x-GM3_Expressive_Nav-Bar_Guidelines_Behavior_Scrolling_32_IA_V04.mp4" title="Selecting the currently active nav item scrolls the page content back to the top."></video>

[Open video](../../../assets/videos/a8a6ea11e8d2-malod84x-GM3_Expressive_Nav-Bar_Guidelines_Behavior_Scrolling_32_IA_V04.mp4)

### Scrolling

Upon scroll, the navigation bar can appear or disappear. 

Don’t hide the navigation bar on scroll when a [screen reader](../../foundations/overview/assistive-technology.md#ec6f3e84-a51c-4dc0-a353-6844f5bde698) is active.

<video controls src="../../../assets/videos/b2f63bf5aceb-maloebec-GM3_Expressive_Nav-Bar_Guidelines_Behavior_Scrolling_33_IA_V04.mp4" title="When scrolling on the page, the nav bar scrolls the opposite direction off screen."></video>

[Open video](../../../assets/videos/b2f63bf5aceb-maloebec-GM3_Expressive_Nav-Bar_Guidelines_Behavior_Scrolling_33_IA_V04.mp4)

### Selection

The icon becomes filled and the active indicator expands from the center of the icon when switching between destinations.

The active indicator animation should only apply on one axis to better represent a flat, shared plane.

<video controls src="../../../assets/videos/e9f572541e1f-malof0yh-GM3-Expressive_NavBar_Guidelines_34_IA_v01.mp4" title="The active indicator expands from the target when a destination is selected"></video>

[Open video](../../../assets/videos/e9f572541e1f-malof0yh-GM3-Expressive_NavBar_Guidelines_34_IA_v01.mp4)

When a destination is tapped, the destination screens use a [top level](../../styles/motion/transitions/transition-patterns.md#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. In addition, the icon becomes filled and the active indicator expands from the center of the icon.

<video controls src="../../../assets/videos/d73b852ca214-m0fq2m3b-G-CU-Destination-Change-RENDER-2x_240821.mp4" title="Selecting the home item changes the entire page contents."></video>

[Open video](../../../assets/videos/d73b852ca214-m0fq2m3b-G-CU-Destination-Change-RENDER-2x_240821.mp4)
