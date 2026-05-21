---
title: "Tooltips"
source_url: "https://m3.material.io/components/tooltips/guidelines"
lastmod: "2026-01-30"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/fc4acead3529-me6qnzgx-01.png"
  - "assets/images/ea6a708d7ce6-me6qs96y-02.png"
  - "assets/images/a30e9e6b742c-me6qu5gx-03-do.png"
  - "assets/images/9047d1d8b3dc-me6quvhe-04-dont.png"
  - "assets/images/d5d26372a500-me6qx7on-05-do.png"
  - "assets/images/518f64e7585b-me6qywbu-6-dont.png"
  - "assets/images/b73332c818aa-me6r0a08-07.png"
  - "assets/images/c522afd8edd5-me6r2ci0-08-do.png"
  - "assets/images/797a6c984b15-me6r3rse-09-caution.png"
  - "assets/images/62ec63018786-mk6kierd-10.png"
  - "assets/images/15a35d12195c-me6r9edz-11-do.png"
  - "assets/images/e545adae6cb9-me6ra39j-12-dont.png"
  - "assets/images/c685790362e1-me6rdax0-13-Caution.png"
  - "assets/images/78c616416f37-me6rg1hz-14.png"
  - "assets/images/52bddabe4337-me6riq0z-15.png"
  - "assets/videos/f383c924f087-lwj9io0m-GM3-Components-ToolTips-Guidelines-1-v01.mp4"
  - "assets/images/66d16e207550-me6ro0ii-17-dont.png"
  - "assets/images/5cb93eeb9f5e-me6rq50p-18-dont.png"
---

# Tooltips

Tooltips display brief labels or messages

## Guidelines

![A plain tooltip labeling a button, and a rich tooltip announcing new settings available.](../../../assets/images/fc4acead3529-me6qnzgx-01.png)

_Plain and rich tooltips serve different purposes_

## Usage

A tooltip provides additional context for a UI element. 

**Plain tooltips**
Plain tooltips briefly describe a UI element. They're best used for labelling UI elements with no text, like icon-only buttons and fields.

**Rich tooltips**
Rich tooltips provide additional context about a UI element. They can optionally contain a subhead, buttons, and hyperlinks.

Rich tooltips are best used for longer text like definitions or explanations.

![2 variants of tooltips.](../../../assets/images/ea6a708d7ce6-me6qs96y-02.png)

_Plain tooltip; Rich tooltip_

![Plain tooltip labeling an icon-only button in Google Meet as "Present now".](../../../assets/images/a30e9e6b742c-me6qu5gx-03-do.png)

_Use plain tooltips to label icon-only buttons_

![Button with an icon and label text saying "Edit". It has a plain tooltip on hover that also says "Edit".](../../../assets/images/9047d1d8b3dc-me6quvhe-04-dont.png)

_Plain tooltips aren't needed when the UI element already has label text_

![Rich tooltip describing a new button for adding people. It has a subhead, description, and a button to learn more.](../../../assets/images/d5d26372a500-me6qx7on-05-do.png)

_Use rich tooltips to provide extra information and actions about a UI element or new feature_

![Rich tooltip explaining that an action is destructive and permanently deletes files.](../../../assets/images/518f64e7585b-me6qywbu-6-dont.png)

_Don't hide critical information within tooltips as it’s easy to miss. Use an interruptive dialog instead._

## Anatomy

### Plain tooltip

![2 elements of a plain tooltip.](../../../assets/images/b73332c818aa-me6r0a08-07.png)

_Container; Supporting text_

### Supporting text

![Plain tooltip for an icon-only button shaped like a gear. The tooltip text is "Settings".](../../../assets/images/c522afd8edd5-me6r2ci0-08-do.png)

_Briefly describe a UI element_

![Plain tooltip for the account switcher. The supporting text includes the user's name and email address on new lines.](../../../assets/images/797a6c984b15-me6r3rse-09-caution.png)

_Avoid wrapping text to multiple lines or including many pieces of information_

### Rich tooltip

![4 elements of a rich tooltip.](../../../assets/images/62ec63018786-mk6kierd-10.png)

_Subhead (optional); Container; Supporting text; Text button (optional)_

### Subhead (optional)

Keep subheads brief, ideally to one line. They should summarize or describe the message of the rich tooltip.

Subheads are important to include when the rich tooltip appears automatically, like when the page loads.

![Rich tooltip with a brief subhead, supporting text, and a text button.](../../../assets/images/15a35d12195c-me6r9edz-11-do.png)

_Summarize the message in a few words_

![Rich tooltip with a subhead wrapping to multiple lines.](../../../assets/images/e545adae6cb9-me6ra39j-12-dont.png)

_Avoid wrapping to more than one line_

### Text buttons (optional)

Rich tooltips can have up to two text buttons. These should be brief and relevant to the message in the supporting text.

Keep buttons short so they can be side by side. Avoid stacking them when possible.

![Rich tooltip with 2 buttons stacked on each other.](../../../assets/images/c685790362e1-me6rdax0-13-Caution.png)

_Avoid stacking buttons_

## Placement

### Plain tooltips

By default, plain tooltips are positioned directly above the parent element. 

-   If there's a visual boundary, like a button, the distance is 4dp
-   If there's no visual boundary, like with text baselines, the distance is 8dp

If the element is in an app bar, the plain tooltip appears below the element at the same distance.

![Plain tooltip appearing 4dp below a button with a clear visual boundary.](../../../assets/images/78c616416f37-me6rg1hz-14.png)

_Plain tooltip with a 4dp distance between the target and tooltip_

### Rich tooltips

By default, rich tooltips are positioned to the bottom right of the parent element. They adjust position to avoid going off screen.  Tooltips shouldn't cover the parent element. 

**Dynamic positioning**
The position of the tooltip adjusts in increments of 8dp to avoid going off-screen.

**Desktop placement**
On desktop, tooltips may appear centered below the parent element and remain visible while moving within the target region.

![A rich tooltip in 4 different corners. It   changes position to remain fully on screen.](../../../assets/images/52bddabe4337-me6riq0z-15.png)

_Four different rich tooltip locations based on dynamic positioning_

## Behavior

To show a tooltip, hover on the parent element on desktop, or tap and hold the element on mobile. Persistent rich tooltips only appear when clicked or tapped.

### Transient by default

Both plain and rich tooltips disappear 1.5 seconds after navigating away from the target region.

Triggering a new tooltip immediately closes any other open tooltip.

<video controls src="../../../assets/videos/f383c924f087-lwj9io0m-GM3-Components-ToolTips-Guidelines-1-v01.mp4" title="Hovering and moving from a button with a plain tooltip."></video>

[Open video](../../../assets/videos/f383c924f087-lwj9io0m-GM3-Components-ToolTips-Guidelines-1-v01.mp4)

![2 buttons both showing plain tooltips at once.](../../../assets/images/66d16e207550-me6ro0ii-17-dont.png)

_Only display one tooltip at a time_

### Persistent rich tooltips

Persistent rich tooltips appear when either:

-   The parent element is clicked
-   The page loads and a new feature is being explained

Persistent rich tooltips remain active even when leaving the target region. They only disappear once a person interacts with another UI element. Hovering doesn't trigger the tooltip.

When appearing on page load, the tooltip can introduce and explain new features on various parent elements.

Avoid using persistent rich tooltips on icon buttons.

![Persistent rich tooltip about a new sharing feature in the Photos app. The button says  "Learn more.”](../../../assets/images/5cb93eeb9f5e-me6rq50p-18-dont.png)

_Don’t use a persistent rich tooltip on icon buttons_
