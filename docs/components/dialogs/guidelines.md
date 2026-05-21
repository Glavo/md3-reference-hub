---
title: "Dialogs"
source_url: "https://m3.material.io/components/dialogs/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/68c0d68b0c0b-m8sf9qay-01.png"
  - "assets/images/5a83b92362be-m8sfc7pz-02.png"
  - "assets/images/2a1ac7ea588f-m8sfcqhr-03_do.png"
  - "assets/images/8d72e57553b5-m8sfdc9w-03_dont.png"
  - "assets/images/2e5c14f2fb3b-mk29xmfo-05-3P.png"
  - "assets/images/f43e2f6859e9-m8sfhos4-07.png"
  - "assets/images/e1f2ebc441bd-m8sfick9-08.png"
  - "assets/images/c12d338c63b5-m8sfkf69-09.png"
  - "assets/images/3005ac8a7032-m8sfl8j1-10_do.png"
  - "assets/images/cb93420c4936-m8sflmm0-11_don't.png"
  - "assets/images/aec4bc7d7b07-m8sfm2yt-12_Caution.png"
  - "assets/images/52bdf11c9faf-m8sfmezr-13_do.png"
  - "assets/images/13682c558c7d-m8sfmqqd-14_do.png"
  - "assets/images/c429265de68d-m8sfn276-15_don't.png"
  - "assets/images/e55f733114df-m8sfq9tm-16_do.png"
  - "assets/images/adc7f98339ff-m8sfqm2i-17_don't.png"
  - "assets/images/16e187a18df7-m8sfqzp1-18_do.png"
  - "assets/images/65f3db822f85-m8sfre4i-19_caution.png"
  - "assets/images/a30479224065-m8sfrskh-20.png"
  - "assets/images/60bf0a95128b-m8sfumns-21.png"
  - "assets/images/72910fb3e183-m8sfuxlx-22.png"
  - "assets/images/dc551dc323b4-m8sfzk1g-23.png"
  - "assets/images/73ee67854bb1-m8sfxxnd-24.png"
  - "assets/videos/1b9adc245bca-mbh08c2v-GM3_Dialogs_Guidelines_25_IA_v02.mp4"
  - "assets/videos/c6770af6c866-mbh098mh-GM3_Dialogs_Guidelines_26_IA_v01.mp4"
  - "assets/images/83bba68e7400-m8sg5wkr-27_do.png"
  - "assets/images/90e965be2a17-m8sg67kv-28_don't.png"
  - "assets/images/cc6acd80cedf-m8sg91cq-29_do.png"
  - "assets/images/b3d5ca89bd70-m8sg9bz5-30_don't.png"
  - "assets/images/7a8e8bd321d1-m8sg9nzm-31_do.png"
  - "assets/images/bf9d87d70df6-m8sg9xoh-32_caution.png"
  - "assets/images/f9b0cf4c1831-m8sgbmj3-33.png"
  - "assets/images/d35a9869f73a-m8sgc676-34.png"
  - "assets/images/cb38994ebed9-m8sgj2r1-35.png"
  - "assets/images/63d995855586-m8sgjir4-36.png"
  - "assets/videos/f66f23831234-mbh0yk3u-GM3_Dialogs_Guidelines_37_IA_v01.mp4"
  - "assets/images/2cd98a20af27-m8sgqe15-38.png"
  - "assets/videos/20ce13f6c76a-mbh0z34p-GM3_Dialogs_Guidelines_39_IA_v01.mp4"
---

# Dialogs

Dialogs provide important prompts in a user flow

## Guidelines

![Basic dialog in isolation](../../../assets/images/68c0d68b0c0b-m8sf9qay-01.png)

_A basic dialog_

## Usage

A dialog is a modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly. A less disruptive alternative is to use a dropdown menu, which provides options without interrupting a user’s experience.

![Diagram of basic and full-screen dialogs.](../../../assets/images/5a83b92362be-m8sfc7pz-02.png)

_There are two variants of dialogs:Basic dialogFull-screen dialog_

![Dialog in front of app content.](../../../assets/images/2a1ac7ea588f-m8sfcqhr-03_do.png)

_Use dialogs for prompts that block an app’s normal operation, and for critical information that requires a specific user task, decision, or acknowledgement_

![Low-priority dialog in front of app content.](../../../assets/images/8d72e57553b5-m8sfdc9w-03_dont.png)

_Don’t use dialogs for low- or medium-priority information. Instead use a snackbar, which can be dismissed or disappear automatically._

### Similar components

Snackbars are also designed to show important messages.

Choose the right component based on the importance of the message. This component messaging strategy helps avoid overusing dialogs.

![Snackbar on a phone saying that new photos were synced to the device. No buttons exist.](../../../assets/images/2e5c14f2fb3b-mk29xmfo-05-3P.png)

_Snackbars can disappear automatically_

**Component**

**Importance**

**Action needed**

Snackbar

Low importance

Optional: Snackbars may not have a button, and can disappear automatically

Dialog

High importance

Required: Dialogs block the main content until an action is confirmed

## Anatomy

### Basic dialog

![Diagram of 7 elements of basic dialog.](../../../assets/images/f43e2f6859e9-m8sfhos4-07.png)

_ContainerIcon (optional)Headline (optional)Supporting textDivider (optional)Buttons label textScrim_

### Full-screen dialog

![6 elements of full-screen dialog.](../../../assets/images/e1f2ebc441bd-m8sfick9-08.png)

_ContainerHeader regionIcon (close affordance)Headline (optional)Button label textDivider (optional)_

### Container and scrim

Dialog containers appear above other screen elements and hold the dialog’s headline, text, buttons, and list items.

To focus attention on the dialog, surfaces behind the container are scrimmed with a temporary overlay to make them less prominent.

![Basic dialog shown above a scrim overlay that reduces the prominence of the background elements.](../../../assets/images/c12d338c63b5-m8sfkf69-09.png)

_Basic dialogs appear over a background scrim_

### Headline (optional)

A dialog’s purpose should be communicated by its headline and buttons or actionable items.

Headlines should:

-   Contain a brief, clear statement or question
-   Avoid apologies (“Sorry for the interruption”), alarm (“Warning!”), or ambiguity (“Are you sure?”)

![Dialog title asking “Use location service?”](../../../assets/images/3005ac8a7032-m8sfl8j1-10_do.png)

_This dialog title poses a specific question, concisely explains what’s involved in the request, and provides clear actions_

![Dialog title asking “Are you sure?”](../../../assets/images/cb93420c4936-m8sflmm0-11_don't.png)

_Don’t use dialog titles that pose an ambiguous question_

Headlines should always be succinct. They can wrap to a second line if necessary, and be truncated.

In full-screen dialogs, long headlines or headlines of variable lengths (such as translations), can be placed in the content area instead of the app bar.

![Example full-screen dialog with truncated long headline.](../../../assets/images/aec4bc7d7b07-m8sfm2yt-12_Caution.png)

_Avoid placing long headlines in a full-screen dialog’s app bar (1), as the truncated text may lead to misunderstanding_

![Example full-screen dialog with short headline, and longer text in content area.](../../../assets/images/52bdf11c9faf-m8sfmezr-13_do.png)

_Find ways to shorten app bar text, and place longer headlines into the content area (1) of a full-screen dialog_

### Buttons 

Dialog actions are most often represented as buttons and allow users to confirm, dismiss, or acknowledge something.

Buttons are aligned to the trailing edge of the dialog for easier interaction. The confirmation button is always closest to the edge. 

Button alignment responds automatically for right-to-left languages, where the confirmation button is aligned to the left edge.

![Dialog with the confirmation button disabled because a required radio selection is missing.](../../../assets/images/13682c558c7d-m8sfmqqd-14_do.png)

_Disable confirming actions (1) until a choice is made. Dismissive actions are never disabled._

![Dialog with the dismissing action "Cancel" on the right of the 2 buttons.](../../../assets/images/c429265de68d-m8sfn276-15_don't.png)

_Don’t place dismissive actions (1) to the right of confirming actions. Instead, place them to the left of confirming actions._

![Dialog with a single-action button: “OK”.](../../../assets/images/e55f733114df-m8sfq9tm-16_do.png)

_A single action may be provided only if it’s an acknowledgement_

![Dialog with 2 button choices: “Cancel”, “Got it”.](../../../assets/images/adc7f98339ff-m8sfqm2i-17_don't.png)

_Avoid presenting people with unclear choices. Cancel doesn't make sense here because no clear action is proposed._

Dialogs should contain a maximum of two actions.

-   If a single action is provided, it must be an acknowledgement action
-   If two actions are provided, one must be a confirming action, and the other a dismissing action

![Dialog with 2 buttons side-by-side: “Disagree”, “Agree”.](../../../assets/images/16e187a18df7-m8sfqzp1-18_do.png)

_Display two text buttons next to one another_

![Dialog with 2 stacked buttons: “Turn on speed boost”, “No thanks”.](../../../assets/images/65f3db822f85-m8sfre4i-19_caution.png)

_Stacked buttons accommodate longer button text, but take up more room. Confirming actions appear above dismissive actions._

Providing a third action, such as **Learn more**, is not recommended as it navigates the user away from the dialog, leaving the dialog task unfinished.

Rather than adding a third action, an inline expansion can display more information. If more extensive information is needed, provide it prior to entering the dialog.

![Dialog with 3 text buttons: Learn more, Disagree, Agree.](../../../assets/images/a30479224065-m8sfrskh-20.png)

_The Learn more action (1) navigates away from this dialog, potentially leaving it in an indeterminate state_

## Basic dialog

Basic dialogs interrupt users with urgent information, details, or actions. Common use cases for basic dialogs include alerts, quick selection, and confirmation.

![Example of basic dialog action request.](../../../assets/images/60bf0a95128b-m8sfumns-21.png)

_Basic dialogs require a person to take action before it will close_

![Example of basic dialog confirmation.](../../../assets/images/72910fb3e183-m8sfuxlx-22.png)

_Basic dialogs can give people the ability to provide confirmation of a choice before committing to it_

Basic dialogs most often appear as alerts or lists, but can have a variety of layouts and component combinations, including lists, date pickers, and time pickers.

![Date picker dialog.](../../../assets/images/dc551dc323b4-m8sfzk1g-23.png)

_Date picker dialogs allow people to tap a date, then confirm it by tapping OK_

![Time picker dialog.](../../../assets/images/73ee67854bb1-m8sfxxnd-24.png)

_Time picker dialogs allow people to move the clock hand and then confirm by tapping OK_

## Full-screen dialog

Full-screen dialogs fill the entire screen, containing actions that require a series of tasks to complete. One example is creating a calendar entry with the event title, date, location, and time.

Because they take up the entire screen, full-screen dialogs are the only dialogs over which other dialogs can appear.

Use a [container transform](../../styles/motion/transitions/transition-patterns.md#b67cba74-6240-4663-a423-d537b6d21187) pattern to transition a FAB into a full-screen dialog.

<video controls src="../../../assets/videos/1b9adc245bca-mbh08c2v-GM3_Dialogs_Guidelines_25_IA_v02.mp4" title="A FAB transitioning into a full-screen dialog."></video>

[Open video](../../../assets/videos/1b9adc245bca-mbh08c2v-GM3_Dialogs_Guidelines_25_IA_v02.mp4)

When a full-screen dialog is closed without being saved, a basic dialog appears in front of it to confirm selections should be discarded without saving changes.

<video controls src="../../../assets/videos/c6770af6c866-mbh098mh-GM3_Dialogs_Guidelines_26_IA_v01.mp4" title="Closing a full-screen dialog triggers a basic dialog asking to discard the changes."></video>

[Open video](../../../assets/videos/c6770af6c866-mbh098mh-GM3_Dialogs_Guidelines_26_IA_v01.mp4)

Full-screen dialogs may be used for content or tasks that meet any of these criteria:

-   Dialogs that include components which require keyboard input, such as form fields

-   When changes aren’t saved instantly

-   When components within the dialog open additional dialogs


Full-screen dialogs are for compact window sizes only, like mobile devices. For medium and expanded window sizes, use a basic dialog.

### Saving selections

To save a selection in a full-screen dialog, use **Save**.  The close icon or dismissive action, such as **Cancel** or **Back**, should close the dialog.

### Confirmation

The confirmation action should be clear about what happens next, like **Send** or **Create**. Avoid using vague terms like **Done**, **OK**, or **Close**. Only trigger an additional basic dialog if the action fails. Don’t disable the confirmation button.

![Full-screen dialog with create button as confirmation action.](../../../assets/images/83bba68e7400-m8sg5wkr-27_do.png)

_A Create button is clear that the event will be created_

![Full-screen dialog with an additional basic dialog asking if you want to create this event.](../../../assets/images/90e965be2a17-m8sg67kv-28_don't.png)

_Don’t trigger a basic dialog when the confirming action is selected_

### Dismissing

When someone dismisses a full-screen dialog, a basic dialog should appear to confirm that they want to discard the unsaved changes.

![A basic dialog with options to either keep editing or discard unsaved changes.](../../../assets/images/cc6acd80cedf-m8sg91cq-29_do.png)

_Use a basic dialog to confirm that the user wants to discard unsaved changes_

![A full-screen dialog with a Close button as the confirming action.](../../../assets/images/b3d5ca89bd70-m8sg9bz5-30_don't.png)

_Don’t use the confirming action to dismiss the full-screen dialog_

### Error messages

Errors about the dialog fields should always appear inline where they occur. Some components like text fields have built-in error messaging, while others like checkboxes and radio buttons need error messages to be added next to the fields.

General errors such as network issues preventing saving or submitting should appear in a basic dialog when the confirming action fails.

Error messages should clearly but briefly explain the source of the error and how to fix it. Show all errors on the page at once so people can fix everything before trying again.

![A full-screen dialog with inline error messages for text fields.](../../../assets/images/7a8e8bd321d1-m8sg9nzm-31_do.png)

_Error messages related to the fields should be displayed inline_

![A basic dialog mentioning that entries were not saved due to a connection issue.](../../../assets/images/bf9d87d70df6-m8sg9xoh-32_caution.png)

_Errors unrelated to the fields can be displayed in a basic dialog_

### Dialog windows

Launching a full-screen dialog temporarily resets the app’s perceived elevation, allowing simple menus or dialogs to appear above the full-screen dialog. They cover the screen and don’t appear as a floating modal window.

### Navigation

Because full-screen dialogs can only be completed, dismissed, or closed, the close “X” icon button should be the only navigation option in the app bar.

## Adaptive design

Dialogs can swap variants as the window size class changes. For example, a full-screen dialog can change into a basic dialog at larger breakpoints.

![Example of full-screen dialog on left, simple dialog on right](../../../assets/images/f9b0cf4c1831-m8sgbmj3-33.png)

_Full-screen dialog on mobileDialog on a tablet_

### Medium window size

Basic dialogs appear in a center position by default.

Their position can be overridden to provide a more ergonomic experience.

![Basic dialog on tablet photos app.](../../../assets/images/d35a9869f73a-m8sgc676-34.png)

_Dialog custom positioned on the right side of the screen_

### Expanded window size

Dialogs on expanded window sizes, like desktop, are modal windows above a scrim. This puts the dialog at the forefront of a person's view, calling attention to the action prompted in the dialog.

![Example of desktop dialog.](../../../assets/images/cb38994ebed9-m8sgj2r1-35.png)

_Desktop dialogs call attention to the required action_

Basic dialogs can be custom-positioned anywhere on larger screens, respecting margins to prevent edge collision.

![Basic dialog position diagram.](../../../assets/images/63d995855586-m8sgjir4-36.png)

_Custom placement area for basic dialogs that respects a 56dp margin from the edges of the screen_

## Behavior

### Appearing

Dialogs appear without warning, requiring users to stop their current task. They should be used sparingly, as not every choice or setting warrants interruption.

Dialogs use an [enter and exit](../../styles/motion/transitions/transition-patterns.md#e1c2a650-d7a4-4a6d-9025-e6b7845291ed) transition pattern to appear on screen.

<video controls src="../../../assets/videos/f66f23831234-mbh0yk3u-GM3_Dialogs_Guidelines_37_IA_v01.mp4" title="Dialog entering and exiting screen using fade transition."></video>

[Open video](../../../assets/videos/f66f23831234-mbh0yk3u-GM3_Dialogs_Guidelines_37_IA_v01.mp4)

### Position

Dialogs retain focus until dismissed or an action has been taken, such as choosing a setting. They shouldn’t be obscured by other elements or appear partially on screen, with the exception of full-screen dialogs.

![A basic dialog covering a full-screen dialog.](../../../assets/images/2cd98a20af27-m8sgqe15-38.png)

_Dialogs shouldn’t be obscured by other elements except for full-screen dialogs_

### Scrolling

Most dialog content should avoid scrolling. Even when scrolling is required, the dialog title is pinned at the top, with buttons pinned at the bottom. This ensures selected content remains visible alongside the title and buttons, even upon scroll.

Dialogs don’t scroll with elements outside of the dialog, such as the background.

<video controls src="../../../assets/videos/20ce13f6c76a-mbh0z34p-GM3_Dialogs_Guidelines_39_IA_v01.mp4" title="Example of fixed dialog title and buttons."></video>

[Open video](../../../assets/videos/20ce13f6c76a-mbh0z34p-GM3_Dialogs_Guidelines_39_IA_v01.mp4)
