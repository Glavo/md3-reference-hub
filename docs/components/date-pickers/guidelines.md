---
title: "Date pickers"
source_url: "https://m3.material.io/components/date-pickers/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/6e5275896f1b-md5o0x3j-01.png"
  - "assets/images/fe524b8ae9fd-md5sha07-02.png"
  - "assets/images/e59479bf3d09-md5si8zx-03.png"
  - "assets/images/2f4e326bf3de-md5sj3v5-04.png"
  - "assets/images/0deef76f50dd-me1yy2eb-05.png"
  - "assets/images/0c59546a1867-md5skthv-06.png"
  - "assets/images/f17674d414f4-md5slanf-07.png"
  - "assets/images/50d7b1cfd14b-md5sma00-08.png"
  - "assets/images/d75e9fbefc9e-md5smpl6-09.png"
  - "assets/images/548d3b96e577-md5sng56-10.png"
  - "assets/images/a3949bbf44b7-md5srxxg-11.png"
  - "assets/images/acfcb6892234-lwhhvs4s-12.png"
  - "assets/images/a4dd3241a690-md5swv36-13.png"
  - "assets/videos/d0d8981cec9e-lwhi1ze1-GM3-Components-DatePickers-Guidelines-1-v01.mp4"
  - "assets/videos/d9d54e5333de-lwhi7618-GM3-Components-DatePickers-Guidelines-1-2-v01.mp4"
  - "assets/images/b93774499f1c-md5sxs60-16.png"
  - "assets/images/3bebf1cc5063-md5t0t93-17.png"
  - "assets/videos/263487cbe234-lwhkhvz2-GM3-Components-DatePickers-Guidelines-2-v01.mp4"
  - "assets/videos/4de6b0c566f1-lwhkizck-GM3-Components-DatePickers-Guidelines-2-1-v01.mp4"
  - "assets/videos/3f70eefbf48a-lwhklm21-GM3-Components-DatePickers-Guidelines-3-1-v01.mp4"
  - "assets/videos/51b8de49fa53-lwhkmci9-GM3-Components-DatePickers-Guidelines-3-2-v01.mp4"
  - "assets/images/c39de4ba2013-md5t2vbx-22.png"
  - "assets/images/e1b2afd6816b-md5t44vn-23-do.png"
  - "assets/images/ead7d0274169-md5t675k-24-do.png"
  - "assets/videos/251ac0fb1b48-lwhkrz7i-GM3-Components-DatePickers-Guidelines-4-1-v01.mp4"
  - "assets/videos/fc262a4e0325-lwhksla9-GM3-Components-DatePickers-Guidelines-4-2-v01.mp4"
  - "assets/images/33404469b62d-md5t84q0-27.png"
  - "assets/images/41aa087cfb7a-md5t9e1o-28.png"
  - "assets/videos/0d1b8d5c70d9-lwhkykpc-GM3-Components-DatePickers-Guidelines-5-v01.mp4"
  - "assets/videos/f1b138ac1117-lwhl1ir9-GM3-Components-DatePickers-Guidelines-6-1-v01.mp4"
  - "assets/videos/56b302a022fc-lwhl2xgp-GM3-Components-DatePickers-Guidelines-6-2-v01.mp4"
  - "assets/images/98b940a3d4cc-md5tb2d5-32.png"
---

# Date pickers

Date pickers let people select a date, or a range of dates

## Guidelines

![A date picker opens in a form UI.](../../../assets/images/6e5275896f1b-md5o0x3j-01.png)

_Docked date picker on desktop_

## Usage

Date pickers let people select a date or range of dates. They should be suitable for the context in which they appear.

Date pickers can be embedded into:

1.  Dialogs on compact [window sizes](../../foundations/layout/breakpoints/compact.md) like mobile

2.  Text field drop-downs on medium and expanded window sizes like tablet and desktop

![2 date picker variations: a dialog on mobile and a dropdown within a text field on desktop.](../../../assets/images/fe524b8ae9fd-md5sha07-02.png)

_Date picker dialog on mobile Date picker text field dropdown on desktop_

There are three variants of date pickers:

1.  Docked date picker

2.  Modal date picker

3.  Modal date input

![A docked date picker component.](../../../assets/images/e59479bf3d09-md5si8zx-03.png)

_1. Docked date picker_

![A modal date picker component.](../../../assets/images/2f4e326bf3de-md5sj3v5-04.png)

_2. Modal date picker_

![A modal date input component.](../../../assets/images/0deef76f50dd-me1yy2eb-05.png)

_3. Modal date input_

## Anatomy

### Docked date picker

![7 elements of a docked date picker.](../../../assets/images/0c59546a1867-md5skthv-06.png)

_Text fieldMenu buttonIcon buttonLabel textMenuText buttonsContainer_

![3 elements of a docked date picker.](../../../assets/images/f17674d414f4-md5slanf-07.png)

_1. Text field 2. Menu button 3. Menu_

### Modal date picker

![12 elements of a modal date picker.](../../../assets/images/50d7b1cfd14b-md5sma00-08.png)

_Headline Supporting textContainerIcon buttonPrevious/next month buttonsDay of week labelsToday’s date Unselected date Text buttonsSelected date Menu buttonDivider_

![9 elements of a modal date picker.](../../../assets/images/d75e9fbefc9e-md5smpl6-09.png)

_HeadlineSupporting textContainerIcon buttonUnselected year Selected year Text buttonsDividerMenu button_

### Modal date input

![7 elements of a modal date input.](../../../assets/images/548d3b96e577-md5sng56-10.png)

_1. Headline 2. Supporting text3. Container4. Icon button5. Date input6. Text buttons7. Divider_

### Full-screen date picker

![14 elements of a full-screen date picker.](../../../assets/images/a3949bbf44b7-md5srxxg-11.png)

_1. Headline2. Supporting text3. Icon button4. Container5. Text button6. Icon button7. Divider8. Day of week labels9. Today’s date 10. Selected date range 11. Unselected date 12. Text buttons13. Selected date range start date 14. Month label_

## Docked date picker

### Usage

Docked date pickers allow the selection of a specific date and year. The docked date picker displays a date input field by default, and a dropdown calendar appears when the user taps on the input field. Either form of date entry can be interacted with.

Docked date pickers are ideal for navigating dates in both the near future or past and the distant future or past, as they provide multiple ways to select dates.

![Docked date picker on a desktop screen.](../../../assets/images/acfcb6892234-lwhhvs4s-12.png)

_Docked date picker on desktop_

### Behavior

Dates can be added by using a keyboard or by navigating the calendar UI; both options are immediately available when the docked date picker is accessed.

![Docked date picker with a text field and the UI picker showing the selected date. ](../../../assets/images/a4dd3241a690-md5swv36-13.png)

_Docked date picker_

<video controls src="../../../assets/videos/d0d8981cec9e-lwhi1ze1-GM3-Components-DatePickers-Guidelines-1-v01.mp4" title="Animation of a docked date picker adjusting its size to the selected month."></video>

[Open video](../../../assets/videos/d0d8981cec9e-lwhi1ze1-GM3-Components-DatePickers-Guidelines-1-v01.mp4)

<video controls src="../../../assets/videos/d9d54e5333de-lwhi7618-GM3-Components-DatePickers-Guidelines-1-2-v01.mp4" title="Animation of a docked date picker changing from calendar view to year selection menu view."></video>

[Open video](../../../assets/videos/d9d54e5333de-lwhi7618-GM3-Components-DatePickers-Guidelines-1-2-v01.mp4)

### Month selection

Month selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

![Docked date picker with a list of months May through September. August is selected.](../../../assets/images/b93774499f1c-md5sxs60-16.png)

_Docked date picker month selection_

### Year selection

Year selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

![Docked date picker with a list of years 2025 to 2029. 2025 is selected.](../../../assets/images/3bebf1cc5063-md5t0t93-17.png)

_Docked date picker year selection_

## Modal date picker

### Behavior

Modal date pickers navigate across dates in several ways:

-   To navigate across months, swipe horizontally
-   To navigate across years, scroll vertically
-   To access the year picker, tap the year

Don’t use a modal date picker to prompt for dates in the distant past or future, such as a date of birth. In these cases, use a modal input picker or a docked date picker instead.

<video controls src="../../../assets/videos/263487cbe234-lwhkhvz2-GM3-Components-DatePickers-Guidelines-2-v01.mp4" title="Animation of a docked date picker being swiped horizontally to navigate across months. "></video>

[Open video](../../../assets/videos/263487cbe234-lwhkhvz2-GM3-Components-DatePickers-Guidelines-2-v01.mp4)

<video controls src="../../../assets/videos/4de6b0c566f1-lwhkizck-GM3-Components-DatePickers-Guidelines-2-1-v01.mp4" title="Animation of a year picker in a docked date picker being tapped and scrolled vertically to navigate across years."></video>

[Open video](../../../assets/videos/4de6b0c566f1-lwhkizck-GM3-Components-DatePickers-Guidelines-2-1-v01.mp4)

### Date range selection

Date range selection provides a start and end date. Common use cases include:

-   Booking a flight
-   Reserving a hotel

Modal date pickers navigate across date ranges in several ways:

-   To select a range of dates, tap the start and end dates on the calendar
-   To navigate across months, scroll vertically

<video controls src="../../../assets/videos/3f70eefbf48a-lwhklm21-GM3-Components-DatePickers-Guidelines-3-1-v01.mp4" title="Animation of a date range being selected on a modal date range picker."></video>

[Open video](../../../assets/videos/3f70eefbf48a-lwhklm21-GM3-Components-DatePickers-Guidelines-3-1-v01.mp4)

<video controls src="../../../assets/videos/51b8de49fa53-lwhkmci9-GM3-Components-DatePickers-Guidelines-3-2-v01.mp4" title="Animation of a modal date range picker being scrolled vertically to navigate across months."></video>

[Open video](../../../assets/videos/51b8de49fa53-lwhkmci9-GM3-Components-DatePickers-Guidelines-3-2-v01.mp4)

## Modal date input

### Usage

Modal date inputs allow the manual entry of dates using the numbers on a keyboard. People can input a date or a range of dates in a dialog.

![A modal date input component.](../../../assets/images/c39de4ba2013-md5t2vbx-22.png)

_Modal date with manual input_

![A modal date input component showing a day in 1979, which would be difficult to choose using UI.](../../../assets/images/e1b2afd6816b-md5t44vn-23-do.png)

_For dates that don’t require a calendar view, the modal date input can be the default view_

![A modal date input with hint text for entering the date.](../../../assets/images/ead7d0274169-md5t675k-24-do.png)

_Alternatively, a text field with appropriate hint text can prompt for dates, such as in a form_

### Behavior

You can swap between the modal date picker and modal date input using the edit or calendar icon.

<video controls src="../../../assets/videos/251ac0fb1b48-lwhkrz7i-GM3-Components-DatePickers-Guidelines-4-1-v01.mp4" title="Animation of a modal date picker switching to a modal date input when the range selection icon is tapped."></video>

[Open video](../../../assets/videos/251ac0fb1b48-lwhkrz7i-GM3-Components-DatePickers-Guidelines-4-1-v01.mp4)

<video controls src="../../../assets/videos/fc262a4e0325-lwhksla9-GM3-Components-DatePickers-Guidelines-4-2-v01.mp4" title="Animation of a modal date picker switching to a modal date input when the edit icon is tapped."></video>

[Open video](../../../assets/videos/fc262a4e0325-lwhksla9-GM3-Components-DatePickers-Guidelines-4-2-v01.mp4)

### Compact window size

On compact [window sizes](../../foundations/layout/breakpoints/compact.md), such as mobile, a full-screen modal date picker is recommended to increase readability and touch target size. It can cover the entire screen.

![A full-screen view of modal date picker on a mobile device.](../../../assets/images/33404469b62d-md5t84q0-27.png)

_A full-screen modal date picker on mobile_

### Medium and expanded window sizes

The docked date picker works best for medium and expanded window sizes. It displays a date input field by default, and a dropdown calendar appears when a person taps on the input field. A person can interact with either form of date entry.

Docked date pickers are ideal for navigating dates in both the near future or past, and in the distant future or past, as they provide multiple ways to select dates.

![A docked date picker displaying a full calendar view on a large screen device.](../../../assets/images/41aa087cfb7a-md5t9e1o-28.png)

_A docked date picker with a full calendar view is best used on larger devices_

### Selection

Selection is indicated through color, drawing visual attention. In date ranges, start and end dates are selected, while dates in-between appear connected with a subtle highlight.

<video controls src="../../../assets/videos/0d1b8d5c70d9-lwhkykpc-GM3-Components-DatePickers-Guidelines-5-v01.mp4" title="Animation of a modal date range picker showing visual differences between selecting a date range and today's date. "></video>

[Open video](../../../assets/videos/0d1b8d5c70d9-lwhkykpc-GM3-Components-DatePickers-Guidelines-5-v01.mp4)

### Appearing and disappearing

Like other kinds of dialogs, modal date pickers use an enter and exit transition pattern to appear on the screen.

To exit a date picker, the input can either be confirmed (**OK**) or dismissed (**Cancel**). Interacting outside of the dialog will also dismiss the time picker. Unless one of these actions is taken, a time picker will continue to retain focus. Mobile full-screen pickers also have an additional close affordance (x) icon button and **Save** confirmation.

Docked date pickers appear just below the input field.

<video controls src="../../../assets/videos/f1b138ac1117-lwhl1ir9-GM3-Components-DatePickers-Guidelines-6-1-v01.mp4" title="Animation of a modal date picker's enter and exit transition."></video>

[Open video](../../../assets/videos/f1b138ac1117-lwhl1ir9-GM3-Components-DatePickers-Guidelines-6-1-v01.mp4)

<video controls src="../../../assets/videos/56b302a022fc-lwhl2xgp-GM3-Components-DatePickers-Guidelines-6-2-v01.mp4" title="Animation of a docked date picker's calendar icon being clicked making the calendar view appear for date selection."></video>

[Open video](../../../assets/videos/56b302a022fc-lwhl2xgp-GM3-Components-DatePickers-Guidelines-6-2-v01.mp4)

### Responsive layout

The sizing of the docked and modal date picker components don’t scale responsively to different window sizes.

![Docked date picker enlarged on a large screen responsively.](../../../assets/images/98b940a3d4cc-md5tb2d5-32.png)

_Don’t scale the date picker responsively to a larger size_
