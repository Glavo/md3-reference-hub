---
title: "Dialogs"
source_url: "https://m3.material.io/components/dialogs/accessibility"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/c4ce5ffeac41-m8sgve0z-01_do.png"
  - "assets/images/cea84b42587b-m8sgvt7t-02_don't.png"
  - "assets/images/a875a029e2ce-m8sh8mb2-03_caution.png"
  - "assets/images/3d3cde0719fa-m8x3m4cu-04.png"
  - "assets/images/98094c1a0261-m8wqpp2r-05.png"
  - "assets/images/7e69ef57285e-m8wqq56l-06.png"
  - "assets/images/1f5240e6e4f7-mk2a1j0z-07.png"
  - "assets/images/9acef1b5de95-mk2a20m5-08.png"
---

# Dialogs

Dialogs provide important prompts in a user flow

## Accessibility

## Use cases

People should be able to use assistive technology to:

-   Open and close a dialog
-   Provide and submit other inputs if the dialog is interactive, such as a text field or selectable list
-   Scroll the dialog to access all of its contents if that content extends beyond the container of the dialog

## Interaction & style

### Use sparingly

Dialogs are purposefully interruptive. This means they appear in front of app content and disrupt the flow of content for people who may, for example, be using a screen reader to navigate the page.

As such, dialogs should be used sparingly and only to provide critical information. Less critical information should be presented in a non-blocking way within the flow of app content.

![An inline tooltip doesn’t block a photo app’s content on a mobile screen.
A modal dialog blocks the content of a photo app on a mobile screen.](../../../assets/images/c4ce5ffeac41-m8sgve0z-01_do.png)

_Present non-critical information using other UI within the flow of app content_

![A modal dialog blocks the content of a photo app on a mobile screen.
A modal dialog blocks the content of a photo app on a mobile screen.](../../../assets/images/cea84b42587b-m8sgvt7t-02_don't.png)

_Avoid putting non-critical information in a dialog_

### 200% text size

Avoid excessive text wrapping or truncation by choosing concise strings. 

On Android, headlines should be kept concise enough to fit within **four** lines after the text size is increased to 200%. If a headline exceeds this limit and gets truncated, provide an alternative way to access the full content in a single tap.

![A dialog with 200% text wraps multiple times in the header and description. It covers most of the mobile screen.](../../../assets/images/a875a029e2ce-m8sh8mb2-03_caution.png)

_Avoid excessive text wrapping or truncation by choosing concise strings_

### Elements within dialogs

Because dialogs can contain various elements within them, refer to the relevant accessibility guidelines for each element. 

Some common examples include:

1.  Text fields
2.  Typography
3.  Buttons

![3 elements of a full-screen dialog.](../../../assets/images/3d3cde0719fa-m8x3m4cu-04.png)

_Full-screen dialogs can contain various elements such as (1) text fields, (2) typography, and (3) buttons, which each may have their own accessibility guidelines_

## Initial focus

When a dialog appears, focus should automatically land on the first interactive element within the dialog.

![A modal dialog titled “Permanently delete?” whose second interactive element is focused by selecting the Tab key.](../../../assets/images/98094c1a0261-m8wqpp2r-05.png)

_Initial focus lands on the first interactive element within a dialog. The tab key moves focus through the next interactive elements in a cycle._

![A modal dialog titled “Permanently delete?” whose previous interactive element is focused on by selecting both the Shift and Tab keys.](../../../assets/images/7e69ef57285e-m8wqq56l-06.png)

_The shift and tab keys together move focus in the opposite direction. The space or enter key triggers or commits the action of the focused element._

## Keyboard navigation

Keys

Actions

Tab

Focus lands on the next interactive element contained in the dialog, or the first element if focus is currently on the last element

Shift + Tab

Focus lands on the previous interactive element contained in the dialog, or the last element if focus is currently on the first element

Space or Enter

Triggers or commits the action of the focused element

Escape

Closes the dialog

## Labeling elements

The accessibility label for a dialog is typically the same as the dialog’s title or headline.

On web, basic dialogs should have the **alert dialog** role.

![An alert dialog with a title “Set up traffic updates?”  Its label is “Set up traffic updates?” and its role as “Alert Dialog.”](../../../assets/images/1f5240e6e4f7-mk2a1j0z-07.png)

_Basic dialogs are known as alert dialogs on web_

Components contained within the dialog, such as buttons, should be labeled according to the guidelines specific to those components.

For common examples, see:

-   Buttons
-   Text fields

![A full-screen dialog titled “New event” containing a “Save” button and a text field, both with their own accessibility labels.](../../../assets/images/9acef1b5de95-mk2a20m5-08.png)

_Elements within a dialog should be labeled according to their guidelines_
