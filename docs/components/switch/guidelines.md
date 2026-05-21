---
title: "Switch"
source_url: "https://m3.material.io/components/switch/guidelines"
lastmod: "2026-01-06"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/4aefc7eba60c-mg7sxhp8-01.png"
  - "assets/videos/06f256abdd2d-lwa9phy3-GM3-Components-Switch-1-v01.mp4"
  - "assets/images/71920a172821-mg7txet6-03.png"
  - "assets/images/a42a4184c323-mg7uio91-05-do.png"
  - "assets/images/a8aacfaeec0a-mg7ukia8-06-dont.png"
  - "assets/images/6bf26a16ee78-mg7ul4t0-07.png"
  - "assets/images/b46e98b7bca0-mg7ulhxp-08.png"
  - "assets/images/88ff3fe42453-mg7ustxv-09_Do.png"
  - "assets/images/f59618e66a1e-mg7ut60g-10_Don't.png"
  - "assets/images/93eab5c03ca8-mg7uvzmf-11_do.png"
  - "assets/images/42bec459bdd4-mg7vc3q1-12_don't.png"
  - "assets/images/12315816fa63-mg7vge0i-13.png"
  - "assets/videos/fadf6d96cdff-lwabkmev-GM3-Components-Switch-2-v01.mp4"
  - "assets/images/06fc31d0595f-mg7vjfr0-15_Do.png"
  - "assets/images/e178b0f06039-mg7vpyog-16_Don't.png"
  - "assets/images/6210ccb8918b-mg7vyj3y-17_do.png"
  - "assets/images/d2c776ded9a3-mg7vz4xm-18_don't.png"
  - "assets/images/210aa0ae31fb-mg7xvplw-19_placement.png"
  - "assets/videos/1fae96f42f6a-lwabqhfg-GM3-Components-Switch-3-v01.mp4"
  - "assets/videos/06f0465e3262-lwabqzdx-GM3-Components-Switch-4-v01.mp4"
---

# Switch

Switches toggle the selection of an item on or off

## Guidelines

![A switch in 2 states, off and on.](../../../assets/images/4aefc7eba60c-mg7sxhp8-01.png)

_Switches change settings and other options immediately_

## Usage

Switches are best used to adjust settings and other standalone options. 

They make a binary selection:

-   On and off

-   True and false


The effects of a switch should start immediately, without needing to save.

<video controls src="../../../assets/videos/06f256abdd2d-lwa9phy3-GM3-Components-Switch-1-v01.mp4" title="Toggling a switch turns on dark mode in Settings on a mobile device."></video>

[Open video](../../../assets/videos/06f256abdd2d-lwa9phy3-GM3-Components-Switch-1-v01.mp4)

Use switches to:

-   Toggle a single item on or off
-   Immediately activate or deactivate something

![Switch used in notification settings to turn on and off the "play over notifications" function.](../../../assets/images/71920a172821-mg7txet6-03.png)

_Switches are commonly used on mobile to turn settings on or off_

Switches control binary options, not opposing ones. A binary option represents a single selection that's either on or off.

Opposing options are when only one option in a set can be selected at a time, like a list or map view. Use a connected button group instead.

![A connected button group with options of List View and Map View.](../../../assets/images/a42a4184c323-mg7uio91-05-do.png)

_Use a connected button group to choose between opposing options_

![A switch with non-binary options of List View and Map View.](../../../assets/images/a8aacfaeec0a-mg7ukia8-06-dont.png)

_Avoid using switches to toggle between opposing options_

### Alternate selection controls

Checkboxes, radio buttons, and switches are the three main kinds of selection controls. They help people make choices, like selecting options or turning settings on and off.

Use checkboxes to select multiple related options in a list.

Use radio buttons to select a single option in a list.

Use switches to select standalone or more verbose options in a list, like settings.

![2 checkboxes, 1 unchecked and 1 checked.](../../../assets/images/6bf26a16ee78-mg7ul4t0-07.png)

_Checkboxes_

![2 radio buttons, 1 in an enabled state, 1 in a disabled state.](../../../assets/images/b46e98b7bca0-mg7ulhxp-08.png)

_Radio buttons_

![Mobile screen with checkboxes to select list items and call to action button to update the list.](../../../assets/images/88ff3fe42453-mg7ustxv-09_Do.png)

_Use checkboxes (not switches) to let people select one or more options from a list_

![Mobile screen with checkboxes to select list items and call to action switch to update the list.](../../../assets/images/f59618e66a1e-mg7ut60g-10_Don't.png)

_A switch can't replace a button. People expect a call to action to be a button, not a switch._

![Radio buttons used to select a language for a mobile app.](../../../assets/images/93eab5c03ca8-mg7uvzmf-11_do.png)

_Use radio buttons (not switches) when only one item can be selected from a list_

![Mobile screen with switches to select list items and call to action button to update the list.](../../../assets/images/42bec459bdd4-mg7vc3q1-12_don't.png)

_Avoid using a switch to select multiple options that require people to save. Switches should be immediate. Use checkboxes instead._

## Anatomy

![3 elements of a switch. ](../../../assets/images/12315816fa63-mg7vge0i-13.png)

_Track; Handle; Icon (optional)_

### Icon (optional)

The switch handle can contain an optional icon.

<video controls src="../../../assets/videos/fadf6d96cdff-lwabkmev-GM3-Components-Switch-2-v01.mp4" title="A checkmark appears on the filled circle of a handle when the switch is toggled on."></video>

[Open video](../../../assets/videos/fadf6d96cdff-lwabkmev-GM3-Components-Switch-2-v01.mp4)

Icons can be used to visually emphasize the switch’s selection. The icon’s meaning should be clear and unambiguous to help the people understand whether switch is on or off.

![2 switches, the unselected state icon is an X, and the selected state is a checkmark.](../../../assets/images/06fc31d0595f-mg7vjfr0-15_Do.png)

_Use icons that clearly communicate whether the switch is on or off, such as an X and a checkmark_

![A switch’s unselected handle icon is a moon and the selected state icon is a pencil.](../../../assets/images/e178b0f06039-mg7vpyog-16_Don't.png)

_Avoid using more ambiguous or non-binary icons, such as a moon or edit icon_

### Label text

Switches should always be paired with an inline label describing what the switch controls when selected.

![Switch label text: 1. Permission manager, App has access to your data. 2. Camera access, app has access to your camera. 3. Show password.](../../../assets/images/6210ccb8918b-mg7vyj3y-17_do.png)

_Keep labels short and direct. A label should describe what the control does when the switch is on._

![On a mobile screen’s privacy settings, 2 switches have “On” label text and checkmark icons. The last switch has “Off” label text and no icon.](../../../assets/images/d2c776ded9a3-mg7vz4xm-18_don't.png)

_Don't add label text into the switch; the font size would be too small to be accessible. Use an appropriate icon instead._

## Placement

Switches are often arranged in stacked layouts.

![Screen showing labels and stacked switches in varying on/off modes.](../../../assets/images/210aa0ae31fb-mg7xvplw-19_placement.png)

_Settings screens are common places to use switches_

## Behavior

A switch is successfully toggled when the handle slides to the other side of the track after an interaction.

<video controls src="../../../assets/videos/1fae96f42f6a-lwabqhfg-GM3-Components-Switch-3-v01.mp4" title="A switch is toggled to turn on airplane mode and Wi-Fi switch automatically turns off."></video>

[Open video](../../../assets/videos/1fae96f42f6a-lwabqhfg-GM3-Components-Switch-3-v01.mp4)

When a person toggles a switch, its handle size changes and the corresponding action takes effect immediately.

<video controls src="../../../assets/videos/06f0465e3262-lwabqzdx-GM3-Components-Switch-4-v01.mp4" title="When selected the switch’s handle gets larger and a checkmark appears on the filled circle."></video>

[Open video](../../../assets/videos/06f0465e3262-lwabqzdx-GM3-Components-Switch-4-v01.mp4)
