---
title: "Text fields"
source_url: "https://m3.material.io/components/text-fields/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/4a67db93abb5-m2j3wjd6-1.png"
  - "assets/images/1e7b23e6ae40-m2j3x0d6-2-3P.png"
  - "assets/images/6902c75bf75b-lyqwy2pr-3.png"
  - "assets/images/a6fc462532ae-lyqx5pjx-4.png"
  - "assets/images/240c4da25c72-lyqxam89-5.png"
  - "assets/images/fa25e532c808-lyqxhgvg-6.png"
  - "assets/images/6920bff8b7bc-m4adcnvc-7-3P.png"
  - "assets/images/c2563cb5fcec-m84goiff-8-3P.png"
  - "assets/images/a516b444f343-mhk4c6jn-09-3P.png"
  - "assets/images/ca994a0b6710-m2j3xtlg-10-3P.png"
  - "assets/images/9e46ee37dd16-lyqy69rp-11.png"
  - "assets/images/61ba0085222b-lyqya4uw-12.png"
  - "assets/images/2ba658ab29ab-lyqys303-13.png"
  - "assets/images/a204788e1163-lyqyuu9g-14.png"
  - "assets/images/c72343eb4dd4-lyqywif5-15.png"
  - "assets/images/7b5fd2232386-m84gq17k-16-3P.png"
---

# Text fields

Text fields let users enter text into a UI

## Specs

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

Component: Text fields

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Text field - Select, outlined | md.comp.outlined-select | COMPONENT | For outlined select text fields. |
| Text field - Autocomplete, filled | md.comp.filled-autocomplete | COMPONENT | For filled autocomplete text fields. |
| Text field - Autocomplete, outlined | md.comp.outlined-autocomplete | COMPONENT | For outlined autocomplete text fields. |
| Text field - Select, filled | md.comp.filled-select | COMPONENT | For filled select text fields. |
| Text field - Filled | md.comp.filled-text-field | COMPONENT | For filled text fields. |
| Text field - Outlined | md.comp.outlined-text-field | COMPONENT | For outlined text fields. |

## Filled text field

![Diagram of a filled text field indicating the 10 parts of its anatomy.](../../../assets/images/4a67db93abb5-m2j3wjd6-1.png)

_Container; Leading icon (optional); Label text in empty field; Label text in populated field; Trailing icon (optional); Focused active Indicator; Caret; Input text; Supporting text (optional); Enabled active indicator_

### Filled text field color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Diagram of a filled text field indicating its color mappings. ](../../../assets/images/1e7b23e6ae40-m2j3x0d6-2-3P.png)

_Filled text field color roles used for light and dark schemes: Surface container highest; On surface variant; On surface variant; Primary; On surface variant; Primary; Primary; On surface; On surface variant; On surface_

### Filled text field states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![Side by side view of empty and populated filled text fields across different states, showing the differences between enabled, focused, hovered, and disabled. ](../../../assets/images/6902c75bf75b-lyqwy2pr-3.png)

_Enabled (empty); Focused (empty); Hovered (empty); Disabled (empty); Enabled (populated); Focused (populated); Hovered (populated); Disabled (populated)_

### Filled text field error states

Error states are visual representations used to communicate the status of a component or interactive element. An error message can display instructions on how to fix it. Error messages are displayed below the text field as supporting text until fixed.

![Side by side view of empty and populated filled text fields across different error states, showing the differences between enabled, focused, hovered. ](../../../assets/images/a6fc462532ae-lyqx5pjx-4.png)

_Enabled (empty); Focused (empty); Hovered (empty); Enabled (populated); Focused (populated); Hovered (populated)_

### Filled text field measurements

![Diagram showing layout values and paddings for filled text fields without icons. ](../../../assets/images/240c4da25c72-lyqxam89-5.png)

_Padding and size measurements without icons_

![Diagram showing layout values and paddings for outlined text fields with leading and trailing icons. ](../../../assets/images/fa25e532c808-lyqxhgvg-6.png)

_Padding and size measurements with icons_

![A diagram showing layout values and paddings for supporting text, and supporting text in combination with a character count. ](../../../assets/images/6920bff8b7bc-m4adcnvc-7-3P.png)

_Padding and size measurements with supporting text and character count_

| Attribute | Value |
| --- | --- |
| Default container height | 56dp |
| Label alignment (unpopulated) | Vertically centered |
| Top/bottom padding | 8dp |
| Left/right padding without icons | 16dp |
| Left/right padding with icons | 12dp |
| Icon alignment | Vertically centered |
| Padding between icons and text | 16dp |
| Supporting text and character counter top padding | 4dp |
| Padding between supporting text and character counter | 16dp |
| Target size | 56dp |

### Filled text field configurations

![Side by side view of filled text fields in different configurations.](../../../assets/images/c2563cb5fcec-m84goiff-8-3P.png)

_Empty and populated filled text fields with: Supporting text; Trailing icon; Leading icon; Leading and trailing icons; Prefix; Suffix; Multi-line text field_

## Outlined text field

![Diagram of an outlined text field indicating the 9 parts of its anatomy](../../../assets/images/a516b444f343-mhk4c6jn-09-3P.png)

_Enabled container outline; Leading icon (optional); Label text in empty field; Label text in populated field; Trailing icon (optional); Focused container outline; Caret; Input text; Supporting text (optional)_

### Outlined text field color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Diagram of an outlined text field indicating its color mappings ](../../../assets/images/ca994a0b6710-m2j3xtlg-10-3P.png)

_Outlined text field color roles used for light and dark schemes: Outline; On surface variant; On surface variant; Primary; On surface variant; Primary; Primary; On surface; On surface variant_

### Outlined text field states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![Side by side view of empty and populated outlined text fields across different states, showing the differences between enabled, focused, hovered, and disabled. ](../../../assets/images/9e46ee37dd16-lyqy69rp-11.png)

_Enabled (empty); Focused (empty); Hovered (empty); Disabled (empty); Enabled (populated); Focused (populated); Hovered (populated); Disabled (populated)_

### Outlined text field error states

Error states are visual representations used to communicate the status of a component or interactive element. An error message can display instructions on how to fix it. Error messages are displayed below the text field as supporting text until fixed.

![Side by side view of empty and populated filled text fields across different error states, showing the differences between enabled, focused, hovered. ](../../../assets/images/61ba0085222b-lyqya4uw-12.png)

_Enabled (empty); Focused (empty); Hovered (empty); Enabled (populated); Focused (populated); Hovered (populated)_

### Outlined text field measurements

![A diagram showing layout values and paddings for outlined text fields without icons. ](../../../assets/images/2ba658ab29ab-lyqys303-13.png)

_Padding and size measurements without icons_

![A diagram showing layout values and paddings for outlined text fields with leading and trailing icons. ](../../../assets/images/a204788e1163-lyqyuu9g-14.png)

_Padding and size measurements with icons_

![A diagram showing layout values and paddings for supporting text, and supporting text in combination with a character count. ](../../../assets/images/c72343eb4dd4-lyqywif5-15.png)

_Padding and size measurements with supporting text and character count_

| Attribute | Value |
| --- | --- |
| Container height | 56dp |
| Left/right padding without icons | 16dp |
| Left/right padding with icons | 12dp |
| Padding between icons and text | 16dp |
| Icon alignment | Vertically centered |
| Supporting text and character counter top padding | 4dp |
| Padding between supporting text and character counter | 16dp |
| Label alignment | Vertically centered |
| Left/right padding populated label text | 4dp |
| Target size | 56dp |

### Outlined text field configurations

![A side by side view of outlined text fields in different configurations.](../../../assets/images/7b5fd2232386-m84gq17k-16-3P.png)

_Empty and populated outlined text fields with: Supporting text; Trailing icon; Leading icon; Leading and trailing icons; Prefix; Suffix; Multi-line text field_
