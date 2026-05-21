---
title: "Snackbar"
source_url: "https://m3.material.io/components/snackbar/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/fc6da0d2c294-m6a9x4e1-1.png"
  - "assets/images/cd3c915e5819-m6a9y0k8-2.png"
  - "assets/images/e5e228f91bc0-m8ov80w7-4.png"
  - "assets/images/e74646f749e8-lwoxyec0-5.png"
  - "assets/images/9214dba87d5e-lwoy0ibw-6.png"
  - "assets/images/64e54e95e4a5-lwoy1q93-7.png"
  - "assets/images/5df8dba98543-lwoy2p4f-8.png"
  - "assets/images/059a50d6e5d6-lwoy3zcx-9.png"
  - "assets/images/f3313f185da1-lwoy4zjx-10.png"
  - "assets/images/16a84c6dce3a-lwoy6dj7-11.png"
  - "assets/images/f0a5eef448a2-lwoy7luk-12.png"
  - "assets/images/cdd224a0f496-mkvoz7q4-13.png"
  - "assets/images/c182a05f5466-mkvoydmj-14.png"
  - "assets/images/62ecc32ea445-lwoyabsh-13.png"
  - "assets/images/a585df56b0d5-lwoyc9yp-14.png"
  - "assets/images/918ea7936272-lwoydoed-15.png"
  - "assets/images/101ee617ca97-lwoyf085-16.png"
  - "assets/images/bfc40f3e621e-lxktjsxn-19.png"
  - "assets/images/f8c58749cc1f-lwoz8scg-20.png"
  - "assets/images/d02b7f2baf30-lwoza8yz-21.png"
  - "assets/images/aa76215baccb-m6aa5hcy-22.png"
  - "assets/images/c2118cc6811e-m6aa6688-23.png"
  - "assets/images/5c6d9646a8a2-mkvpb7sp-24.png"
  - "assets/images/d1d02508c1c2-mkvpbire-25.png"
  - "assets/images/8ba9baaf9f87-m6aa171j-26.png"
  - "assets/images/3892d29c5f2d-m6aa25mm-27.png"
  - "assets/images/ff337915c3d5-m6aa35y8-28.png"
  - "assets/images/f1b5ee5cbc42-m6aa41vd-29.png"
  - "assets/images/6cb9be415d7b-lxktk5oy-28.png"
  - "assets/images/7cc5e59d26da-lwoztb40-29.png"
  - "assets/images/bf3ff7dacaf9-lwozw4lz-30.png"
  - "assets/images/0e751edc6745-lwozx768-31.png"
  - "assets/images/e7ca866134e6-mkvpdu5k-34.png"
  - "assets/images/bb72fd4f5d8e-mkvpefif-35.png"
  - "assets/videos/f50b017c565b-lwp03p7p-GM3-Components-Snackbar-Guidelines-1-v01.mp4"
  - "assets/videos/2704281dd3fc-m7ca02x7-m6f92ux5-GM3-Components-Snackbar-Behavior-1-v01.mp4"
  - "assets/videos/48755fd23a5a-lwp06c42-GM3-Components-Snackbar-Guidelines-2-4-v02.mp4"
  - "assets/videos/bb3b4dd8020c-lwp08dxf-GM3-Components-Snackbar-Guidelines-3-v01.mp4"
  - "assets/videos/863937fa439b-lwp0a03k-GM3-Components-Snackbar-Guidelines-2-3-v01.mp4"
---

# Snackbar

Snackbars show short updates about app processes at the bottom of the screen

## Guidelines

![Snackbar at the bottom of a mobile device.](../../../assets/images/fc6da0d2c294-m6a9x4e1-1.png)

## Usage

Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen.

They shouldn't interrupt the user experience. People can browse the page content without being required to interact with the snackbar.

**Frequency**
Only one snackbar may be displayed at a time.

**Actions**
A snackbar can contain a single action. "Dismiss" or "cancel" actions are optional.

![Snackbar showing 'Email archived' text with an 'Undo' text button.](../../../assets/images/cd3c915e5819-m6a9y0k8-2.png)

### Similar components

Dialogs are also designed to show important messages.

Choose the right component based on the importance of the message. This component messaging strategy can help avoid overusing snackbars.

![Dialog on a phone requiring the user to sign in to continue. Dismissing prevents them from progressing.](../../../assets/images/e5e228f91bc0-m8ov80w7-4.png)

_Dialogs require immediate action_

**When to use snackbars**
Snackbars communicate messages that are minimally interruptive and don’t require user action.

| Component | Priority | User action |
| --- | --- | --- |
| Snackbar | Low priority | Optional: Snackbars disappear automatically |
| Dialog | High priority | Required: Dialogs block app usage until the user takes a dialog action or exits the dialog (if available) |

### Accessibility requirements for web

On web, auto-dismissing snackbars are inaccessible for people with low vision or who require additional time to perceive information. This can be solved in 2 ways:

#### 1\. Add inline feedback

Information in auto-dismissing snackbars must also be communicated using another accessible method inline or near the action that triggered the snackbar. 

For example, update the label on a "Save" button to “Saved”, and trigger an auto-dismissing snackbar that communicates the same message. 

#### 2\. Make the snackbar actionable

Alternatively, add actions to the snackbar so it doesn't dismiss until acted on.

![A button labelled "Save" changes to "Saved" after a moment. A snackbar confirms all changes are saved.](../../../assets/images/e74646f749e8-lwoxyec0-5.png)

_Also communicate snackbar information near the action that triggered the snackbar_

## Anatomy

![4 elements of a snackbar.](../../../assets/images/9214dba87d5e-lwoy0ibw-6.png)

_Container; Supporting text; Action (optional); Close button (optional)_

### Text label

Snackbars contain a text label that directly relates to the process being performed. In compact window sizes, the text label can contain up to two lines of text.

![Snackbar on a mobile device reading: "Saved in Vacation album".](../../../assets/images/64e54e95e4a5-lwoy1q93-7.png)

_Text labels are short, clear updates on processes that have been performed_

![Snackbar on mobile with one line of content.](../../../assets/images/5df8dba98543-lwoy2p4f-8.png)

_Keep the snackbar text label to one line long when possible_

![Snackbar on mobile with two lines of content.](../../../assets/images/059a50d6e5d6-lwoy3zcx-9.png)

_On mobile, the text label can be up to two lines long_

![Snackbar on mobile with an icon and one line of content.](../../../assets/images/f3313f185da1-lwoy4zjx-10.png)

_Avoid adding icons to snackbars. If your message needs an icon, consider using a different component such as a dialog._

![Snackbar on mobile with bolded and hyperlinked words.](../../../assets/images/16a84c6dce3a-lwoy6dj7-11.png)

_Avoid using stylized text or inline links in snackbars; they can add unwanted complexity. If your message needs a link, add a button instead, or use a different component._

### Container

Snackbars are displayed in rectangular containers with a grey background. Containers should be completely opaque, so that text labels remain legible.

![Snackbar showing a light text label on a black color container.](../../../assets/images/f0a5eef448a2-lwoy7luk-12.png)

_Snackbar containers use a solid background color with a shadow to stand out against content_

![A snackbar with button text the same color as supporting text.](../../../assets/images/cdd224a0f496-mkvoz7q4-13.png)

_The text label shouldn’t share the same color as the text button_

![A snackbar with the action in elevated style.](../../../assets/images/c182a05f5466-mkvoydmj-14.png)

_Don’t use a filled or elevated button in a snackbar, as it draws too much attention_

![An extended snackbar on tablet with a long text label. ](../../../assets/images/62ecc32ea445-lwoyabsh-13.png)

_In wide layouts, extend the container width to accommodate longer text labels_

![Snackbar with a slightly transparent container and a clearly visible text label.](../../../assets/images/a585df56b0d5-lwoyc9yp-14.png)

_An app can apply slight transparency to the container background, as long as text remains clearly legible_

![Image](../../../assets/images/918ea7936272-lwoydoed-15.png)

_Avoid significantly altering the shape of a snackbar container_

### Action

Snackbars can display a single text button that lets users take action on a process performed by the app. Snackbars shouldn’t be the only way to access a core use case, to make an app usable.

![A snackbar container with rounded corners.](../../../assets/images/101ee617ca97-lwoyf085-16.png)

_To distinguish the action from the text label, text buttons should display colored text_

![Snackbar with a long text button displayed on a third line.](../../../assets/images/bfc40f3e621e-lxktjsxn-19.png)

_If an action is long, it can be displayed on a third line_

![Snackbar with a single text button labeled undo.](../../../assets/images/f8c58749cc1f-lwoz8scg-20.png)

_To allow users to amend choices, display an "Undo" action_

![Snackbar with a single text button labeled dismiss.](../../../assets/images/d02b7f2baf30-lwoza8yz-21.png)

_A dismiss action is unnecessary, as snackbar disappears on their own by default_

## Placement

### At the bottom of a UI

Snackbars should be placed at the bottom of a UI, in front of the main content. In some cases, snackbars can be nudged upwards to avoid overlapping with other UI elements near the bottom, such as FABs or docked toolbars.

Avoid placing a snackbar in front of frequently used touch targets or navigation.

![Snackbar appearing in front of photo content. ](../../../assets/images/aa76215baccb-m6aa5hcy-22.png)

_Place a snackbar in front of the main content_

![Snackbar placed in front of the navigation components.](../../../assets/images/c2118cc6811e-m6aa6688-23.png)

_Avoid placing snackbars in front of navigation components_

To ensure accessibility for keyboard users on the web, avoid positioning the snackbar in a way that completely obscures actionable elements. Blocking elements makes it difficult to know what is being focused and selected.

![Thin snackbar in front of a focused element that is still visible.](../../../assets/images/5c6d9646a8a2-mkvpb7sp-24.png)

_Adjust the size of the snackbar to avoid blocking elements in focus_

![Larger snackbar that is obscuring a focused element.](../../../assets/images/d1d02508c1c2-mkvpbire-25.png)

_Don’t let the snackbar fully cover elements in focus_

Snackbars can span the entire width of the screen only when a UI does not use persistent navigation components like app bars or navigation bars.

Snackbars that span the entire width of a UI can push up FABs when they appear.

![Snackbar spanning the width of a mobile device is placed in front of the navigation components and FAB.](../../../assets/images/8ba9baaf9f87-m6aa171j-26.png)

_Snackbars can span the entire width of a UI. However, they should not appear in front of navigation or other important UI elements like floating action buttons._

**Snackbars and floating action buttons (FABs)**

Snackbars should appear above FABs.

![Snackbar placed above a FAB on a mobile device.](../../../assets/images/3892d29c5f2d-m6aa25mm-27.png)

_Snackbar above a FAB_

![Snackbar placed in front of a FAB on a mobile device.](../../../assets/images/ff337915c3d5-m6aa35y8-28.png)

_Don’t place a snackbar in front of a FAB_

![Snackbar placed behind a FAB on a mobile device.](../../../assets/images/f1b5ee5cbc42-m6aa41vd-29.png)

_Don’t place a snackbar behind a FAB_

## Responsive layout

### Compact window size

In compact window sizes, snackbars should expand vertically from 48dp to 64dp to accommodate one or two lines of text, while maintaining a  fixed distance from the leading, trailing, and bottom edges of the screen.

![Snackbar with its label text extending to the second line and maintaining fixed distance from the edges of a mobile device.  ](../../../assets/images/6cb9be415d7b-lxktk5oy-28.png)

### Medium & expanded window sizes

On medium and expanded window sizes, like tablet and desktop, snackbars should scale horizontally to accommodate longer text strings, keeping in mind that the ideal line length for text is typically between 40-60 characters.

Snackbars use a flexible distance from the trailing edge of the screen. Whenever possible, snackbars on medium and large displays should aim for a single line of text with an  optional button.

![A horizontally expanded snackbar placed at the bottom of screen on a medium-size device.](../../../assets/images/7cc5e59d26da-lwoztb40-29.png)

In wider layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen.

![A left-aligned snackbar placed at the bottom of screen on a medium-size device.](../../../assets/images/bf3ff7dacaf9-lwozw4lz-30.png)

_Left-aligned snackbar_

![A center-aligned snackbar placed at the bottom of screen on a medium-size device.](../../../assets/images/0e751edc6745-lwozx768-31.png)

_Center-aligned snackbar_

![Snackbar displayed at the left edge of the screen, near the bottom, on a medium-sized device.
](../../../assets/images/e7ca866134e6-mkvpdu5k-34.png)

_Don’t place snackbars flush to one edge of the layout_

![2 snackbars placed side-by-side at the bottom of the screen on a medium-size device.](../../../assets/images/bb72fd4f5d8e-mkvpefif-35.png)

_Don’t place consecutive snackbars side by side or next to one another_

## Behavior

### Appearing and disappearing

Snackbars appear without warning, but they don’t block users from interacting with page content.

Snackbars without actions can auto-dismiss after 4–10 seconds, depending on platform. Avoid using auto-dismissing snackbars on web unless there's also inline feedback.

<video controls src="../../../assets/videos/f50b017c565b-lwp03p7p-GM3-Components-Snackbar-Guidelines-1-v01.mp4" title="Snackbar without an action button appearing and disappearing within 4 seconds from the screen of a mobile device."></video>

[Open video](../../../assets/videos/f50b017c565b-lwp03p7p-GM3-Components-Snackbar-Guidelines-1-v01.mp4)

Snackbars with actions should remain on the screen until the user takes an action on the snackbar, or dismisses it.

<video controls src="../../../assets/videos/2704281dd3fc-m7ca02x7-m6f92ux5-GM3-Components-Snackbar-Behavior-1-v01.mp4" title="Snackbars with actions should remain on the screen until the user takes an action on the snackbar, or dismisses it."></video>

[Open video](../../../assets/videos/2704281dd3fc-m7ca02x7-m6f92ux5-GM3-Components-Snackbar-Behavior-1-v01.mp4)

### Consecutive snackbars

Consecutive snackbars must appear one at a time. 

Snackbars without actions appear and disappear automatically, while those with actions remain on screen until dismissed. However, a snackbar with updated information can immediately replace an outdated snackbar.

<video controls src="../../../assets/videos/48755fd23a5a-lwp06c42-GM3-Components-Snackbar-Guidelines-2-4-v02.mp4" title="Two snackbars appear sequentially on a mobile device. The first includes an action button."></video>

[Open video](../../../assets/videos/48755fd23a5a-lwp06c42-GM3-Components-Snackbar-Guidelines-2-4-v02.mp4)

<video controls src="../../../assets/videos/bb3b4dd8020c-lwp08dxf-GM3-Components-Snackbar-Guidelines-3-v01.mp4" title="2 snackbars appear sequentially on a mobile device and are stacked on top of one another. The first includes an action button."></video>

[Open video](../../../assets/videos/bb3b4dd8020c-lwp08dxf-GM3-Components-Snackbar-Guidelines-3-v01.mp4)

<video controls src="../../../assets/videos/863937fa439b-lwp0a03k-GM3-Components-Snackbar-Guidelines-2-3-v01.mp4" title="FAB's position is displaced when a snackbar enters the screen of a mobile device."></video>

[Open video](../../../assets/videos/863937fa439b-lwp0a03k-GM3-Components-Snackbar-Guidelines-2-3-v01.mp4)
