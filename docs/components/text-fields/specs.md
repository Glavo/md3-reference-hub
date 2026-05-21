---
title: "Text fields"
source_url: "https://m3.material.io/components/text-fields/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:35:31.341Z"
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

![Diagram of a filled text field indicating the 10 parts of its anatomy.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm2j3wjd6-1.png?alt=media&token=03c85687-5f77-4b5c-a7b0-a38799a7b42b>)

_Container; Leading icon (optional); Label text in empty field; Label text in populated field; Trailing icon (optional); Focused active Indicator; Caret; Input text; Supporting text (optional); Enabled active indicator_

### Filled text field color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Diagram of a filled text field indicating its color mappings. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm2j3x0d6-2-3P.png?alt=media&token=f9e0224e-9c4d-4c73-b313-88a8d4c63bd3>)

_Filled text field color roles used for light and dark schemes: Surface container highest; On surface variant; On surface variant; Primary; On surface variant; Primary; Primary; On surface; On surface variant; On surface_

### Filled text field states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![Side by side view of empty and populated filled text fields across different states, showing the differences between enabled, focused, hovered, and disabled. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Flyqwy2pr-3.png?alt=media&token=b8865528-a6d3-496c-a968-29b0b626d31e>)

_Enabled (empty); Focused (empty); Hovered (empty); Disabled (empty); Enabled (populated); Focused (populated); Hovered (populated); Disabled (populated)_

### Filled text field error states

Error states are visual representations used to communicate the status of a component or interactive element. An error message can display instructions on how to fix it. Error messages are displayed below the text field as supporting text until fixed.

![Side by side view of empty and populated filled text fields across different error states, showing the differences between enabled, focused, hovered. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Flyqx5pjx-4.png?alt=media&token=ea761b5e-fc6e-4979-acd8-69d42c2737f2>)

_Enabled (empty); Focused (empty); Hovered (empty); Enabled (populated); Focused (populated); Hovered (populated)_

### Filled text field measurements

![Diagram showing layout values and paddings for filled text fields without icons. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Flyqxam89-5.png?alt=media&token=d571e1d6-c212-4d3e-bb44-522da83b6fb1>)

_Padding and size measurements without icons_

![Diagram showing layout values and paddings for outlined text fields with leading and trailing icons. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Flyqxhgvg-6.png?alt=media&token=3a26e5e8-ac4b-438d-b4c8-b56375deae62>)

_Padding and size measurements with icons_

![A diagram showing layout values and paddings for supporting text, and supporting text in combination with a character count. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm4adcnvc-7-3P.png?alt=media&token=0ceb08d6-a607-492b-a62f-a8b29e2db948>)

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

![Side by side view of filled text fields in different configurations.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm84goiff-8%20-%203P.png?alt=media&token=17771e17-b866-4a9b-800b-ad5beed90873>)

_Empty and populated filled text fields with: Supporting text; Trailing icon; Leading icon; Leading and trailing icons; Prefix; Suffix; Multi-line text field_

## Outlined text field

![Diagram of an outlined text field indicating the 9 parts of its anatomy](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmhk4c6jn-09-3P.png?alt=media&token=f55d7652-a5bb-4963-8395-791263662261>)

_Enabled container outline; Leading icon (optional); Label text in empty field; Label text in populated field; Trailing icon (optional); Focused container outline; Caret; Input text; Supporting text (optional)_

### Outlined text field color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![Diagram of an outlined text field indicating its color mappings ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm2j3xtlg-10-3P.png?alt=media&token=e7f9bb14-13e1-42e5-b79f-1ddd3178f252>)

_Outlined text field color roles used for light and dark schemes: Outline; On surface variant; On surface variant; Primary; On surface variant; Primary; Primary; On surface; On surface variant_

### Outlined text field states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![Side by side view of empty and populated outlined text fields across different states, showing the differences between enabled, focused, hovered, and disabled. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Flyqy69rp-11.png?alt=media&token=ff991447-ecb4-414e-9fa4-9b72b3537e1d>)

_Enabled (empty); Focused (empty); Hovered (empty); Disabled (empty); Enabled (populated); Focused (populated); Hovered (populated); Disabled (populated)_

### Outlined text field error states

Error states are visual representations used to communicate the status of a component or interactive element. An error message can display instructions on how to fix it. Error messages are displayed below the text field as supporting text until fixed.

![Side by side view of empty and populated filled text fields across different error states, showing the differences between enabled, focused, hovered. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Flyqya4uw-12.png?alt=media&token=4bd381a5-2489-4bdb-9d62-a5d37ae4fa2a>)

_Enabled (empty); Focused (empty); Hovered (empty); Enabled (populated); Focused (populated); Hovered (populated)_

### Outlined text field measurements

![A diagram showing layout values and paddings for outlined text fields without icons. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Flyqys303-13.png?alt=media&token=76e0ea27-3e53-4a3e-bf9d-50d6b1f67a2d>)

_Padding and size measurements without icons_

![A diagram showing layout values and paddings for outlined text fields with leading and trailing icons. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Flyqyuu9g-14.png?alt=media&token=84d6a030-ea94-4790-b658-cc477664a70c>)

_Padding and size measurements with icons_

![A diagram showing layout values and paddings for supporting text, and supporting text in combination with a character count. ](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Flyqywif5-15.png?alt=media&token=91409e82-1dbb-45a6-869d-f024ee50f193>)

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

![A side by side view of outlined text fields in different configurations.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fm84gq17k-16%20-%203P.png?alt=media&token=eefd975a-84d8-4f4b-9cc8-9707e31f383f>)

_Empty and populated outlined text fields with: Supporting text; Trailing icon; Leading icon; Leading and trailing icons; Prefix; Suffix; Multi-line text field_
