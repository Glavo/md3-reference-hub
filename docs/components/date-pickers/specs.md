---
title: "Date pickers"
source_url: "https://m3.material.io/components/date-pickers/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/2106679f8d6e-me6vnbm5-01-3P.png"
  - "assets/images/fb4f93d04219-me6vo1av-02-3P.png"
  - "assets/images/a2750f27872f-me6vofa8-03-3P.png"
  - "assets/images/909b114ba230-me6vovcl-04-3P.png"
  - "assets/images/103eaca22971-mel11ou5-05-3P.png"
  - "assets/images/6ec427cb9670-mel12gcl-06-3P.png"
  - "assets/images/5a0ff6eb3236-me6vrc28-07-3P.png"
  - "assets/images/3c606d84cf7a-me6vsstf-08-3P.png"
  - "assets/images/dceaff480596-me6vtc2f-09-3P.png"
  - "assets/images/9202925dd008-me6vtxo6-10-3P.png"
  - "assets/images/38096f358f14-me6vuima-11-3P.png"
  - "assets/images/6ceec6c9c11b-me6vuwh7-12-3P.png"
  - "assets/images/3b4101cf282b-me6vv9ft-13-3P.png"
  - "assets/images/bc8368f1bd1e-mel16bx5-14-3P.png"
  - "assets/images/d991e038f36b-mel16puv-15-3P.png"
  - "assets/images/09f6a1e53604-mel175wp-16-3P.png"
  - "assets/images/c7d97a96bba0-me6vxg0z-17-3P.png"
  - "assets/images/0d599cb7db1a-me6vxz7r-18-3P.png"
  - "assets/images/f2bef903d3e5-me6vyfrl-19-3P.png"
  - "assets/images/f53597821e6c-me6vyzk0-20-3P.png"
  - "assets/images/49a20db468af-me6vzozd-21-3P.png"
  - "assets/images/b6a8383312e6-me6w02sb-22b-3P.png"
---

# Date pickers

Date pickers let people select a date, or a range of dates

## Specs

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values.

### TOKEN_TABLE

Component: Date pickers

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Date picker - Modal input | md.comp.date-input.modal | COMPONENT | For modal input date pickers. |
| Date picker - Modal | md.comp.date-picker.modal | COMPONENT | For modal calendar date pickers. |
| Date picker - Docked | md.comp.date-picker.docked | COMPONENT | For docked date pickers. |

## Docked date picker

![Diagram indicating the 11 elements of a docked date picker.](../../../assets/images/2106679f8d6e-me6vnbm5-01-3P.png)

_Outlined text field; Menu button: Month selection; Menu button: Year selection; Icon button; Weekdays label text; Unselected date; Today’s date; Outside month date; Text buttons; Selected date; Container_

![Diagram indicating 8 elements of a docked date picker with an open dropdown menu showing the months May to November.](../../../assets/images/fb4f93d04219-me6vo1av-02-3P.png)

_Outlined text field; Menu button: Month selection (pressed); Menu button: Year selection (disabled); Header; Menu; Selected list item; Unselected menu list item; Container_

### Docked date picker color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![11 color roles of a docked date picker in light and dark themes.](../../../assets/images/a2750f27872f-me6vofa8-03-3P.png)

_Docked date picker color roles used for light and dark themes: Primary; On surface variant; On surface variant; On surface; On surface; Primary; On surface variant; Primary; Surface container high; Primary; On primary_

![7 color roles of a docked date picker menu in light and dark themes.](../../../assets/images/909b114ba230-me6vovcl-04-3P.png)

_Docked date picker menu color roles used for light and dark themes: Primary; On surface variant; On surface; Outline variant; Surface container high; Surface variant; On surface_

### Docked date picker measurements

![Diagram of padding, size, and layout measurements.](../../../assets/images/103eaca22971-mel11ou5-05-3P.png)

_Docked date picker padding and size measurements_

![Diagram of padding, size, and layout measurements.](../../../assets/images/6ec427cb9670-mel12gcl-06-3P.png)

_Docked date picker month menu padding and size measurements_

### Docked date picker configurations

![3 configurations of docked date picker.](../../../assets/images/5a0ff6eb3236-me6vrc28-07-3P.png)

_Day selection; Month selection; Year selection_

## Modal date picker

![Diagram indicating the 13 elements of a modal date picker in the day selection view.](../../../assets/images/3c606d84cf7a-me6vsstf-08-3P.png)

_Headline; Supporting text; Header; Container; Icon button; Icon buttons; Weekdays; Today’s date; Unselected date; Text buttons; Selected date; Menu button; Divider_

![10 elements of a modal date picker menu.](../../../assets/images/dceaff480596-me6vtc2f-09-3P.png)

_Headline; Supporting text; Header; Container; Icon button; Unselected year; Selected year; Text buttons; Divider; Menu button_

![Diagram indicating the 15 elements of a modal date picker when selecting a range of dates.](../../../assets/images/9202925dd008-me6vtxo6-10-3P.png)

_Headline; Supporting text; Icon button; Header; Text button; Icon button; Weekdays label text; Container; Today’s date; Unselected date; In-range active indicator; In-range date; Month subhead; Selected date; Divider_

### Modal date picker color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![12 color roles of a modal date picker day selection view.](../../../assets/images/38096f358f14-me6vuima-11-3P.png)

_Modal date picker color roles used for light and dark themes in a day selection menu: On surface; On surface variant; Surface container high; On surface variant; On surface variant; On surface; Primary; On surface; Primary; Primary; On surface variant; Outline variant_

![Diagram of 9 color roles of a modal date picker year selection view.](../../../assets/images/6ceec6c9c11b-me6vuwh7-12-3P.png)

_Modal date picker color roles used for light and dark themes in a year selection menu: On surface; On surface variant; Surface container high; On surface variant; On surface variant; Primary; Primary; Outline variant; On surface variant_

![Diagram of 14 color roles of a modal date picker when selecting a range of dates.](../../../assets/images/3b4101cf282b-me6vv9ft-13-3P.png)

_Modal date picker range selector color roles used for light and dark themes: / On surface; On surface variant; On surface variant; Surface container high; Primary; On surface variant; On surface; Primary; On surface; Secondary container; On secondary container; Outline variant; On surface variant; Primary_

### Modal date picker measurements

![Diagram of size and padding measurements in day selection view.](../../../assets/images/bc8368f1bd1e-mel16bx5-14-3P.png)

_Modal date picker padding and size measurements_

![Diagram of size and padding measurements in year selection view.](../../../assets/images/d991e038f36b-mel16puv-15-3P.png)

_Modal date picker year selector padding and size measurements_

![Diagram of size and padding measurements when selecting a range of dates.](../../../assets/images/09f6a1e53604-mel175wp-16-3P.png)

_Modal date picker date range selector padding and size measurements_

### Modal date picker configurations

![3 configurations of a modal date picker shown in dark mode.](../../../assets/images/c7d97a96bba0-me6vxg0z-17-3P.png)

_Single date selection; Date range selection; Year selection_

## Modal date input

![Diagram indicating the 8 elements of a modal date input.](../../../assets/images/0d599cb7db1a-me6vxz7r-18-3P.png)

_Headline; Supporting text; Header; Container; Icon button; Outlined text field; Text buttons; Divider_

### Modal date input color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![Diagram indicating the 7 color roles of a modal date input.](../../../assets/images/f2bef903d3e5-me6vyfrl-19-3P.png)

_Modal date input color roles used for light and dark themes: On surface; On surface variant; Surface container high; On surface variant; Primary; Primary; Outline variant_

### Modal date input measurements

![Diagram of the padding and size measurements of a modal date input.](../../../assets/images/f53597821e6c-me6vyzk0-20-3P.png)

_Modal date input padding and size measurements_

### Modal date input configurations

![2 configurations of modal date input.](../../../assets/images/49a20db468af-me6vzozd-21-3P.png)

_Single date input; Date range input_

## Element states

![Diagram of 5 various states for date and year elements within date pickers.](../../../assets/images/b6a8383312e6-me6w02sb-22b-3P.png)

_States for date and year selection: Default (enabled); Disabled; Hovered; Focused; Pressed (ripple)_
