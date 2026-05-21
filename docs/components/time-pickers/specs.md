---
title: "Time pickers"
source_url: "https://m3.material.io/components/time-pickers/specs"
lastmod: "2026-02-05"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/225b19b4773b-mdcxf11n-01-3P.png"
  - "assets/images/d7a465e55694-mdcxfokb-02-3P.png"
  - "assets/images/9ed1cbeaf64b-l6nxwe4v-[1P]-color-time-pickers-(1).jpg"
  - "assets/images/4fa47e75ed79-l6nxy34v-[1P]-color-time-input-(1).jpg"
  - "assets/images/34ee69fc5e4a-m8t5j9hb-5b.png"
  - "assets/images/20ab4eef09ad-l6p241d2-[1P]-layout-time-pickers-vertical-(1).png"
  - "assets/images/3e022b55a3c8-l6p279e1-[1P]-layout-time-pickers-horizontal-(3).png"
  - "assets/images/d87e3dce624e-l6p28zo3-[1P]-layout-time-input-(1).png"
  - "assets/images/9a589b1f1767-l7ao2hx2-[1P]-guideline-time-pickers-configurations.png"
  - "assets/images/c73f655b3a55-l7ao3ny7-[1P]-guideline-time-pickers-configurations-24h.png"
  - "assets/images/2832c3e3089c-l7ao513q-[1P]-guideline-time-input-configurations.png"
---

# Time pickers

## Specs

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

Component: Time pickers

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Time picker - Dial | md.comp.time-picker | COMPONENT | For dial time pickers. |
| Time picker - Input | md.comp.time-input | COMPONENT | For input time pickers. |

## Anatomy

### Time picker dial

![Diagram indicating the 14 elements of a time picker dial.](../../../assets/images/225b19b4773b-mdcxf11n-01-3P.png)

_Headline; Time selector separator; Container; Period selector container; Period selector label text; Clock dial selector center; Clock dial selector track; Text button; Icon button; Clock dial selector container; Clock dial label text; Clock dial container; Time selector label text; Time selector container_

### Time picker input

![Diagram indicating the 10 elements of a time picker input.](../../../assets/images/d7a465e55694-mdcxfokb-02-3P.png)

_Headline; Time input field seperator; Container; Period selector container; Period selector label text; Text button; Icon button; Time input field supporting text; Time input field label text; Time input field container_

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

### Time picker dial color

![Side-by-side diagram indicating the 17 different color elements of a time picker dial.](../../../assets/images/9ed1cbeaf64b-l6nxwe4v-[1P]-color-time-pickers-(1).jpg)

_Time picker dial color roles used for light and dark themes: On surface variant; On surface; Surface container highest; On surface; Tertiary container; On tertiary container; Surface container high; Outline; On surface; Primary; On primary; Primary; On surface variant; On surface; Surface container highest; On primary container; Primary container_

### Time picker input color

![Side-by-side diagram indicating the 13 different color elements of a time picker input.](../../../assets/images/4fa47e75ed79-l6nxy34v-[1P]-color-time-input-(1).jpg)

_Time picker input color roles used for light and dark themes: On surface variant; On surface; Surface container highest; On surface; Tertiary container; On tertiary container; Surface container high; Outline; On surface; Primary; On surface variant; On primary container; Primary container_

## States

![Diagram showing the 4 interactive states of a time picker, in both light theme and dark theme.](../../../assets/images/34ee69fc5e4a-m8t5j9hb-5b.png)

_Enabled; Hover; Focus; Pressed_

[States specs can be found in the token module above](specs.md#2ccd9809-9246-4667-85fa-7747f4ac7349)

## Measurements

### Time picker dial - vertical

![Diagram of vertical time picker dial measurements.](../../../assets/images/20ab4eef09ad-l6p241d2-[1P]-layout-time-pickers-vertical-(1).png)

_Vertical time picker dial padding and size measurements_

| Element | Attribute | Value |
| --- | --- | --- |
| Container | Width | Dynamic |
| Height | Dynamic |  |
| Headline alignment | Left |  |
| Top/bottom padding | 24dp |  |
| Left/right padding | 24dp |  |
| Time selector container | Width | 96dp |
| Width (24h vertical) | 114dp |  |
| Height | 80dp |  |
| Period selector container | Width (vertical layout) | 52dp |
| Height (vertical layout) | 80dp |  |
| Width (horizontal layout) | 216dp |  |
| Height (horizontal layout) | 38dp |  |
| Clock dial container | Size | 256dp |
| Clock dial selector handle | Size | 48dp |
| Clock dial selector center | Size | 8dp |
| Clock dial selector track | Width | 2dp |

### Time picker dial - horizontal

![Diagram of horizontal time picker dial measurements.](../../../assets/images/3e022b55a3c8-l6p279e1-[1P]-layout-time-pickers-horizontal-(3).png)

_Horizontal time picker dial padding and size measurements_

| Element | Attribute | Value |
| --- | --- | --- |
| Container | Width | Dynamic |
| Height | Dynamic |  |
| Headline alignment | Left |  |
| Top/bottom padding | 24dp |  |
| Left/right padding | 24dp |  |
| Time selector container | Width | 96dp |
| Width (24h vertical) | 114dp |  |
| Height | 80dp |  |
| Period selector container | Width (vertical layout) | 52dp |
| Height (vertical layout) | 80dp |  |
| Width (horizontal layout) | 216dp |  |
| Height (horizontal layout) | 38dp |  |
| Clock dial container | Size | 256dp |
| Clock dial selector handle | Size | 48dp |
| Clock dial selector center | Size | 8dp |
| Clock dial selector track | Width | 2dp |

### Time picker input

![Diagram of time picker input measurements.](../../../assets/images/d87e3dce624e-l6p28zo3-[1P]-layout-time-input-(1).png)

_Time picker input padding and size measurements_

| Element | Attribute | Value |
| --- | --- | --- |
| Container | Width | Dynamic |
| Height | Dynamic |  |
| Headline alignment | Left |  |
| Top/bottom padding | 24dp |  |
| Left/right padding | 24dp |  |
| Time input field container | Width | 96dp |
| Height | 72dp |  |
| Period selector container | Width | 52dp |
| Height | 72dp |  |

## Configurations

### Vertical orientation and horizontal orientation

![Comparing vertical and horizontal time picker dials.](../../../assets/images/9a589b1f1767-l7ao2hx2-[1P]-guideline-time-pickers-configurations.png)

_Vertical layout (default on mobile); Horizontal layout_

### 24-hour time picker dial

![2 24-hour time picker dials with vertical and horizontal layouts.](../../../assets/images/c73f655b3a55-l7ao3ny7-[1P]-guideline-time-pickers-configurations-24h.png)

_24h dial in vertical layout (default on mobile); 24h dial in horizontal layout_

### 12-hour and 24-hour time picker inputs

![Compare 12-hour and 24-hour time picker inputs.](../../../assets/images/2832c3e3089c-l7ao513q-[1P]-guideline-time-input-configurations.png)

_12h input; 24h input_
