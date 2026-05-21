---
title: "Navigation drawer"
source_url: "https://m3.material.io/components/navigation-drawer/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/33f4035768b1-lwopun3e-1.png"
  - "assets/images/2af25d0f64f9-lwopv1qw-2.png"
  - "assets/images/ac4f5a5de583-lwopvjco-3.png"
  - "assets/images/c43eac014795-lwopw575-4.png"
  - "assets/images/d3a5355caf66-lwopwhen-5.png"
  - "assets/images/5a5b0a9d639f-lwopx4a0-6.png"
  - "assets/images/d1e45b2bb0f1-lwopxvvj-7.png"
  - "assets/images/5f4a88ff3a85-lwopy7b1-8.png"
  - "assets/images/1cec3bea4376-lwopyjta-9.png"
  - "assets/images/41b8c40fb315-lwopzqbr-10.png"
  - "assets/images/70dfc5e1ff72-lwoq08ti-11.png"
  - "assets/images/8848c460c4ed-lwoq1xf0-12.png"
  - "assets/images/ab15380a717a-lwoq29df-13.png"
  - "assets/images/08f54c3dbd2c-lwoq2qbs-14.png"
  - "assets/images/81a7a70d7891-lwoq358i-15.png"
  - "assets/images/59c372d97520-lwoq3i6v-16.png"
  - "assets/images/43274b91b059-lwoq4gjj-17.png"
  - "assets/images/4da30d3f1f4f-lwoq4tkk-18.png"
  - "assets/images/6548e457211f-lwoq56gb-19.png"
  - "assets/images/91c68d906fca-lwoq67nf-20.png"
  - "assets/images/15ac240a88e9-lwoq6mto-21.png"
  - "assets/images/6b69285af8dc-lwoq710s-22.png"
  - "assets/images/94cd9f6d0e39-lwoq7esu-23.png"
  - "assets/images/899fc428ab99-lwoq7wck-24.png"
  - "assets/images/c4c99efbba92-lwoq8evf-25.png"
  - "assets/videos/c6b65b4baa12-lwoqh0d1-GM3-Components-NavDrawer-Guidelines-1-v01.mp4"
  - "assets/images/ba16f3e06197-lx54v3bi-27.png"
  - "assets/videos/07f895d41cf1-lwoqihhy-GM3-Components-NavDrawer-Guidelines-2-v01.mp4"
  - "assets/images/5a42728e6615-lwoqb1nm-27.png"
  - "assets/images/654f6ef8f1b7-lwoqf0gp-28.png"
  - "assets/videos/69f587ce7aa8-lwoqk3j4-GM3-Components-NavDrawer-Guidelines-3-v01.mp4"
---

# Navigation drawer

Navigation drawers let people switch between UI views on larger devices

## Guidelines

star

Note:

The navigation drawer is no longer recommended in the Material 3 Expressive update. For those who have updated, use an [expanded navigation rail](https://m3.material.io/m3/pages/navigation-rail/overview/), which has mostly the same functionality of the navigation drawer and adapts better across window size classes.

![Navigation drawer with 4 primary destinations ](../../../assets/images/33f4035768b1-lwopun3e-1.png)

## Usage

Navigation drawers provide access to destinations and app functionality, such as switching accounts. They can either be permanently on-screen or opened and closed by a navigation menu icon. One navigation destination is always active.

Navigation drawers are recommended for:

-   Apps with 5 or more top-level destinations
-   Apps with 2 or more levels of navigation hierarchy
-   Quick navigation between unrelated destinations
-   Replacing the navigation rail or navigation bar on large screens

![Navigation drawer with multiple destinations in a mail app.](../../../assets/images/2af25d0f64f9-lwopv1qw-2.png)

_Use a navigation drawer for 5 or more primary destinations, or more than 1 level of navigation hierarchy_

Avoid using a navigation drawer with other primary navigation components, such as a navigation bar.

Instead, choose a single navigation component based on product requirements, breakpoints, and window size class:

-   Navigation bars for compact window sizes

-   Navigation rails for medium and expanded window sizes 

-   Standard navigation drawers for expanded, large and extra-large window sizes

![Standard navigation drawer and navigation bar used together.](../../../assets/images/ac4f5a5de583-lwopvjco-3.png)

_Avoid using two navigation components on the same screen_

There are two variants of navigation drawers:

1.  Standard navigation drawer

2.  Modal navigation drawer

![Standard navigation drawer with destinations in mail app.](../../../assets/images/c43eac014795-lwopw575-4.png)

_Standard navigation drawer_

![Modal navigation drawer with destinations and scrim.](../../../assets/images/d3a5355caf66-lwopwhen-5.png)

_Modal navigation drawer_

### Standard navigation drawer

Standard navigation drawers provide access to drawer destinations and app content for layouts in expanded, large, and extra-large window sizes. 

Standard drawers can be permanently visible (best for frequently switching destinations) or opened and closed by tapping a menu icon (best for focusing more on screen content).

In medium and compact window sizes, use modal drawers instead.

![Standard navigation drawer in a mail app with active destination “Inbox” next to app content.](../../../assets/images/5a5b0a9d639f-lwopx4a0-6.png)

_Standard navigation drawer providing access to drawer destinations next to app content_

### Modal navigation drawer

Modal navigation drawers use a scrim to block interaction with the rest of an app’s content, and don’t affect the screen’s layout grid.

Modal navigation drawers can be used in any window size, but are primarily used in compact and medium sizes where space is limited or prioritized for app content.

They can be swapped with standard drawers on expanded, large, and extra-large window sizes.

![Modal navigation drawer with 1 active destination and scrim.](../../../assets/images/d1e45b2bb0f1-lwopxvvj-7.png)

_Modal navigation drawer using a scrim to block interaction with the rest of an app’s content_

Modal navigation drawers are always opened by an action outside of the drawer, such as clicking a navigation menu icon in a navigation rail.

Modal drawers can be dismissed by:

-   Selecting a drawer item
-   Tapping the scrim
-   Swiping toward the drawer’s anchoring edge (for example, swiping right-to-left for a left-aligned navigation drawer)

![Diagram noting a navigation menu icon in a navigation rail.](../../../assets/images/5f4a88ff3a85-lwopy7b1-8.png)

_A modal drawer opened by an action such as clicking a navigation menu icon (1)_

Modal drawers can be dismissed by tapping the scrim or swiping the drawer toward its anchoring screen edge.

![2 modal navigations illustrating tapping the scrim or swiping to dismiss a modal drawer](../../../assets/images/1cec3bea4376-lwopyjta-9.png)

_1. Dismiss by tapping the scrim2. Dismiss by swiping the drawer_

## Anatomy

Navigation drawers are essentially a list contained within a side sheet. They can also include headers, subheads, and dividers to organize longer lists.

![Navigation drawer diagram numbering 8 elements.](../../../assets/images/41b8c40fb315-lwopzqbr-10.png)

_Navigation drawers can include headers, subheads, and dividers to organize longer listsActive IndicatorIconLabelBadge labelSheetDividerSection label (optional)Scrim_

### Sheet

A sheet holds all navigation drawer elements. Side sheets are used as the container for standard and modal navigation drawers.

Navigation drawers that open from the side are always placed on the start edge of the screen, on the left for left-to-right (LTR) languages, and on the right for right-to-left (RTL) languages.

![Modal navigation drawer opening from left side of screen.](../../../assets/images/70dfc5e1ff72-lwoq08ti-11.png)

_A navigation drawer opens from the left side of the screen for left-to-right languages_

### Divider (optional)

Dividers can be used to separate groups of destinations within the navigation drawer.

![Navigation drawer using horizontal dividers to separate a group of destinations](../../../assets/images/8848c460c4ed-lwoq1xf0-12.png)

_Use full-width dividers (1) to separate groups of destinations_

![Navigation drawer using horizontal dividers to separate individual destinations](../../../assets/images/ab15380a717a-lwoq29df-13.png)

_Don’t use dividers to separate individual destinations_

### Active indicator

The active indicator is a background shape communicating which destination of the navigation drawer is currently being displayed.

![Navigation drawer diagram numbering 1 element.](../../../assets/images/08f54c3dbd2c-lwoq2qbs-14.png)

_The active indicator (1) is a background shape communicating which destination of the navigation drawer is currently being displayed_

### Label text and icons

Destinations in a navigation drawer take the form of actionable list items. Each item describes its destination using label text and an optional icon.

![Navigation drawer diagram numbering 2 elements.](../../../assets/images/81a7a70d7891-lwoq358i-15.png)

_Actionable list items in a navigation drawer describe each destination using (1) an optional icon and (2) required label text_

Label text should be clear and short enough that it isn’t cut off by the sheet.

![Navigation drawer using only label text for 4 destinations. Label text “Inbox” in active destination.](../../../assets/images/59c372d97520-lwoq3i6v-16.png)

_Navigation drawers can use text labels without icons_

![Navigation drawer with 1 truncated text label.](../../../assets/images/43274b91b059-lwoq4gjj-17.png)

_Keep text labels concise, but truncate them if they extend beyond the container width_

![Navigation drawer with 1 text label with wrapped label text.](../../../assets/images/4da30d3f1f4f-lwoq4tkk-18.png)

_Don’t wrap label text_

![Navigation drawer with 1 text label featuring smaller text.](../../../assets/images/6548e457211f-lwoq56gb-19.png)

_Don’t shrink text size in order to fit a text label on a single line_

Icons can supplement labels as indicators of a destination. When used, they should always be placed before text. Other app components and content should reference these icons.

![Navigation drawer with active destination “Inbox” featuring recognizable icon.](../../../assets/images/91c68d906fca-lwoq67nf-20.png)

_Use recognizable icons when conventions exist_

![Navigation drawer with 4 destinations, 2 with text label and icon, 2 with only text label.](../../../assets/images/15ac240a88e9-lwoq6mto-21.png)

_Don’t apply icons to some destinations and not others. Icons should be used for all destinations, or none._

### Section label (optional)

Short subhead section labels can help group related destinations in the navigation drawer.

![Navigation drawer showing subhead section labels.](../../../assets/images/6b69285af8dc-lwoq710s-22.png)

_Related destinations can be grouped using short subhead section labels in the navigation drawer_

### Scrim (modal only)

Modal navigation drawers use a scrim to block interaction with the rest of the app. The scrim is placed directly behind the drawer’s sheet and can be tapped or clicked to dismiss the drawer.

![Modal navigation drawer with scrim placed behind.](../../../assets/images/94cd9f6d0e39-lwoq7esu-23.png)

_Scrim applied behind a modal navigation drawer_

## Responsive layout

A product’s navigation component should change to suit the window size class and form factor of the screen.

Modal navigation drawers can be used at any window size but are most common in compact and medium window sizes.

Standard navigation drawers are best for expanded, large, and extra-large window sizes. 

Use a transition when swapping components. For example, when switching from a portrait to landscape layout, the navigation rail should transform into a navigation drawer.

![Navigation rail changing to navigation. drawer on a larger screen](../../../assets/images/899fc428ab99-lwoq7wck-24.png)

_Standard navigation drawers change size to suit the device’s screen_

### Compact window size

Use modal navigation drawers in compact window sizes. Or swap the drawer for a navigation bar.

On web, when the screen size is smaller than 320 CSS pixels, swap the navigation drawer for a navigation bar to ensure accessibility.

![Modal navigation drawer with 1 active destination.](../../../assets/images/c4c99efbba92-lwoq8evf-25.png)

_Use a modal navigation drawer on mobile screens_

### Medium & expanded window sizes

Use a modal navigation drawer alone or with a navigation rail on medium and expanded window sizes.

When a navigation rail and modal navigation drawer are used together, the drawer can repeat destinations in the navigation rail as long as the drawer offers enough visual separation between levels of the navigation hierarchy.

A standard navigation drawer can be used in [single pane layouts](https://m3.material.io/m3/pages/understanding-layout/parts-of-layout) in expanded window sizes.

<video controls src="../../../assets/videos/c6b65b4baa12-lwoqh0d1-GM3-Components-NavDrawer-Guidelines-1-v01.mp4" title="Navigation drawer on tablet with 1 active destination."></video>

[Open video](../../../assets/videos/c6b65b4baa12-lwoqh0d1-GM3-Components-NavDrawer-Guidelines-1-v01.mp4)

### Large and extra-large window sizes

For web experiences on laptop and desktop devices, use either a standard navigation drawer, or a navigation rail that transitions into a modal navigation drawer.

![Navigation drawer showing 1 active destination.](../../../assets/images/ba16f3e06197-lx54v3bi-27.png)

_Use a standard navigation drawer on large and desktop screens_

## Behavior

### Scrolling

Navigation drawers can be vertically scrolled, independent of the rest of the screen’s content and UI. If the list of navigation destinations is longer than the height of the drawer, the drawer’s contents can be scrolled within the drawer.

<video controls src="../../../assets/videos/07f895d41cf1-lwoqihhy-GM3-Components-NavDrawer-Guidelines-2-v01.mp4" title="A navigation drawer on the left region of an email app is scrolled vertically without disturbing the rest of the content."></video>

[Open video](../../../assets/videos/07f895d41cf1-lwoqihhy-GM3-Components-NavDrawer-Guidelines-2-v01.mp4)

### Visibility

**Dismissible standard drawers** can be used for layouts that prioritize content (such as a photo gallery) or for apps where users are unlikely to switch destinations often. They should use a visible navigation menu icon to open and close the drawer.

![Side-by-side standard navigation drawer opened and then closed after tapping menu bar.](../../../assets/images/5a42728e6615-lwoqb1nm-27.png)

_A standard dismissible navigation drawer is opened and closed by tapping the navigation menu icon in the app bar (1), and remains open until the menu icon is tapped again (2)_

**Permanently visible standard drawers** allow quick navigation between unrelated destinations. They can’t be closed or dismissed by the user.

![Standard navigation drawer moving between destinations.](../../../assets/images/654f6ef8f1b7-lwoqf0gp-28.png)

_A permanently-visible standard navigation drawer on desktop_

### Appearing

When a navigation drawer animates on screen, it uses an [enter and exit](../../styles/motion/transitions/applying-transitions.md) transition pattern.

<video controls src="../../../assets/videos/69f587ce7aa8-lwoqk3j4-GM3-Components-NavDrawer-Guidelines-3-v01.mp4" title="In an email app, navigation drawer opens on menu icon click, and closes on outside click."></video>

[Open video](../../../assets/videos/69f587ce7aa8-lwoqk3j4-GM3-Components-NavDrawer-Guidelines-3-v01.mp4)
