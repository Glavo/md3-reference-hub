---
title: "Date pickers"
source_url: "https://m3.material.io/components/date-pickers/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:35:31.341Z"
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

![Diagram indicating the 11 elements of a docked date picker.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vnbm5-01-3P.png?alt=media&token=f8cfe189-33cd-4fc4-a6dc-bd6450d2e6a1>)

_Outlined text field; Menu button: Month selection; Menu button: Year selection; Icon button; Weekdays label text; Unselected date; Today’s date; Outside month date; Text buttons; Selected date; Container_

![Diagram indicating 8 elements of a docked date picker with an open dropdown menu showing the months May to November.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vo1av-02-3P.png?alt=media&token=cba8add3-87cc-4939-add2-d986a5c24e70>)

_Outlined text field; Menu button: Month selection (pressed); Menu button: Year selection (disabled); Header; Menu; Selected list item; Unselected menu list item; Container_

### Docked date picker color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![11 color roles of a docked date picker in light and dark themes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vofa8-03-3P.png?alt=media&token=3bd8bafd-1d95-4cf2-af69-9023191c7f36>)

_Docked date picker color roles used for light and dark themes: Primary; On surface variant; On surface variant; On surface; On surface; Primary; On surface variant; Primary; Surface container high; Primary; On primary_

![7 color roles of a docked date picker menu in light and dark themes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vovcl-04-3P.png?alt=media&token=1a14476e-327e-4930-8f5e-21b31ebe0633>)

_Docked date picker menu color roles used for light and dark themes: Primary; On surface variant; On surface; Outline variant; Surface container high; Surface variant; On surface_

### Docked date picker measurements

![Diagram of padding, size, and layout measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmel11ou5-05-3P.png?alt=media&token=02f8923f-d188-460f-af59-6fe54d826576>)

_Docked date picker padding and size measurements_

![Diagram of padding, size, and layout measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmel12gcl-06-3P.png?alt=media&token=9fa12372-b9a0-418d-9723-c45792f3ed8d>)

_Docked date picker month menu padding and size measurements_

### Docked date picker configurations

![3 configurations of docked date picker.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vrc28-07-3P.png?alt=media&token=85602f38-74d4-4677-9fab-3d0c70e3e2ab>)

_Day selection; Month selection; Year selection_

## Modal date picker

![Diagram indicating the 13 elements of a modal date picker in the day selection view.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vsstf-08-3P.png?alt=media&token=f8917782-dc39-459c-82c1-25a58cc38522>)

_Headline; Supporting text; Header; Container; Icon button; Icon buttons; Weekdays; Today’s date; Unselected date; Text buttons; Selected date; Menu button; Divider_

![10 elements of a modal date picker menu.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vtc2f-09-3P.png?alt=media&token=83ed57ad-19ce-49fd-ae71-8abbffaa04c0>)

_Headline; Supporting text; Header; Container; Icon button; Unselected year; Selected year; Text buttons; Divider; Menu button_

![Diagram indicating the 15 elements of a modal date picker when selecting a range of dates.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vtxo6-10-3P.png?alt=media&token=f05f53b5-59da-4e5f-9ec9-7203ad1f9580>)

_Headline; Supporting text; Icon button; Header; Text button; Icon button; Weekdays label text; Container; Today’s date; Unselected date; In-range active indicator; In-range date; Month subhead; Selected date; Divider_

### Modal date picker color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![12 color roles of a modal date picker day selection view.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vuima-11-3P.png?alt=media&token=1b73b296-3144-48af-8be5-d480a52c7c25>)

_Modal date picker color roles used for light and dark themes in a day selection menu: On surface; On surface variant; Surface container high; On surface variant; On surface variant; On surface; Primary; On surface; Primary; Primary; On surface variant; Outline variant_

![Diagram of 9 color roles of a modal date picker year selection view.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vuwh7-12-3P.png?alt=media&token=fb15589b-0448-409d-86f3-8abe2ea61b51>)

_Modal date picker color roles used for light and dark themes in a year selection menu: On surface; On surface variant; Surface container high; On surface variant; On surface variant; Primary; Primary; Outline variant; On surface variant_

![Diagram of 14 color roles of a modal date picker when selecting a range of dates.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vv9ft-13-3P.png?alt=media&token=2d71a3a0-7075-4060-b90d-8e7b4e923f91>)

_Modal date picker range selector color roles used for light and dark themes: / On surface; On surface variant; On surface variant; Surface container high; Primary; On surface variant; On surface; Primary; On surface; Secondary container; On secondary container; Outline variant; On surface variant; Primary_

### Modal date picker measurements

![Diagram of size and padding measurements in day selection view.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmel16bx5-14-3P.png?alt=media&token=32b56f0d-5b77-413c-9223-f2ae6d5cc275>)

_Modal date picker padding and size measurements_

![Diagram of size and padding measurements in year selection view.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmel16puv-15-3P.png?alt=media&token=dec9ac5f-f517-4f99-b9e8-4f0d672a76e0>)

_Modal date picker year selector padding and size measurements_

![Diagram of size and padding measurements when selecting a range of dates.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmel175wp-16-3P.png?alt=media&token=4cd021d6-ccee-4180-94d2-4cdc83d3b60f>)

_Modal date picker date range selector padding and size measurements_

### Modal date picker configurations

![3 configurations of a modal date picker shown in dark mode.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vxg0z-17-3P.png?alt=media&token=0c687b22-f9e0-400f-b021-a647102e0d5b>)

_Single date selection; Date range selection; Year selection_

## Modal date input

![Diagram indicating the 8 elements of a modal date input.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vxz7r-18-3P.png?alt=media&token=bd73746c-8b00-49a3-9e3c-e5424fedbc59>)

_Headline; Supporting text; Header; Container; Icon button; Outlined text field; Text buttons; Divider_

### Modal date input color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![Diagram indicating the 7 color roles of a modal date input.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vyfrl-19-3P.png?alt=media&token=78be5f98-a2b6-4572-85c3-b4f56cc6fecb>)

_Modal date input color roles used for light and dark themes: On surface; On surface variant; Surface container high; On surface variant; Primary; Primary; Outline variant_

### Modal date input measurements

![Diagram of the padding and size measurements of a modal date input.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vyzk0-20-3P.png?alt=media&token=48c3f31a-3c58-4f58-9d95-2ffbbec4ea12>)

_Modal date input padding and size measurements_

### Modal date input configurations

![2 configurations of modal date input.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6vzozd-21-3P.png?alt=media&token=9efa75cb-9f0e-4244-855d-97c76e55e80e>)

_Single date input; Date range input_

## Element states

![Diagram of 5 various states for date and year elements within date pickers.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fme6w02sb-22b-3P.png?alt=media&token=39741611-fe07-4d4f-a3ab-91c2ae665a5d>)

_States for date and year selection: Default (enabled); Disabled; Hovered; Focused; Pressed (ripple)_
