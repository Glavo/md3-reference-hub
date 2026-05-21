---
title: "Lists"
source_url: "https://m3.material.io/components/lists/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/74fff6d874e2-miq1b43h-frame.png"
  - "assets/images/3b456ca935e2-mio97lfj-01-3P.png"
  - "assets/images/8df4fd50f3b7-mio98r05-02-3P-VQA.png"
  - "assets/images/5d9f6ffce6ef-mio99zjp-03-3P.png"
  - "assets/images/721caf98b739-mio9bca0-04-3P-singleaction.png"
  - "assets/images/7ac3e4ab8082-mio9ecsb-05-3P-multiaction.png"
  - "assets/images/8ccd3c969c13-mio9x63z-06-3P-singleselect.png"
  - "assets/images/923759cc421f-mio9xiam-07-3P-multiselect.png"
  - "assets/videos/d882401ef931-miqm268j-GM3-Expressive-Specs-08-3P-v01-(1).mp4"
  - "assets/images/3826f2ff6539-mioasn71-11-3P-VQA.png"
  - "assets/images/2111c46ec444-mioecnyy-12-3P.png"
  - "assets/images/f40db4fff3bf-mioefhsu-13-3P-VQA.png"
  - "assets/images/d66a2e490fbc-mioehno9-14-do-3P.png"
  - "assets/images/4956ccec91eb-mioek6y5-15-dont-3P.png"
  - "assets/images/85549be8a1ab-mion9qya-16-3P.png"
  - "assets/images/6218de9f92c6-mionai1i-17-3P.png"
  - "assets/images/f254a2d7d520-mioncezo-18-3P.png"
  - "assets/images/f4d212c91b55-miondj5y-19-3P.png"
  - "assets/images/d387ffffe098-miq3n8p4-20-3P.png"
  - "assets/images/df279fe63fbb-miq3rr3p-21-3P.png"
  - "assets/images/f6a6166a3e80-miofu0i1-22-3P.png"
  - "assets/images/abd718195815-miogaa9o-23-3P.png"
  - "assets/images/10d6930cda55-miogazt3-24-3P.png"
  - "assets/images/6a10f7a62b4b-miogcld0-25-3P.png"
  - "assets/images/4158b3632bff-miogdayj-26-3P.png"
  - "assets/images/66b7a47d4f12-miogduex-27-3P.png"
  - "assets/images/c7f68d2e6d5c-mioh5e7e-28-3P.png"
  - "assets/images/c4120dba3e34-mioh5246-29-3P.png"
  - "assets/images/f8c8fd9257e0-mioh4nys-30-3P.png"
  - "assets/images/4e1e18904259-mioh3zha-31-3P.png"
  - "assets/images/2df5141fe05f-mioh3lil-32-3P.png"
  - "assets/images/bf8ea0c73a06-mioh2vwf-33-3P.png"
  - "assets/images/a47fa496da60-mioh2gxb-34-3P.png"
  - "assets/images/9bca09bd4728-mioh0mgk-35-3P.png"
---

# Lists

Lists are continuous, vertical indexes of text or images.

![Lists](../../../assets/images/74fff6d874e2-miq1b43h-frame.png)

## Specs

## Variants

### Expressive lists

Use the expressive list variant for more flexible styling, highlighted selection states, and customizable slots.

![2 expressive lists: a photos list on a tablet, and a song list on mobile.](../../../assets/images/3b456ca935e2-mio97lfj-01-3P.png)

_An expressive list has a segmented style and round corners_

### Baseline lists

In M3 Expressive, baseline lists are still available to use, but don’t have the latest visual style, selection treatment, and slot functionality.

[See baseline list specs](specs.md#94cf7f4d-fe29-4fab-9aae-a99e9b754329)

![3 baseline list items with square corners.](../../../assets/images/8df4fd50f3b7-mio98r05-02-3P-VQA.png)

_Baseline list items have square corners and standard colors_

**Variants**

**M3**

**M3 Expressive**

List (expressive)

\--

Available

List (baseline)

Available

Available

## Configurations

### Styles

The standard and segmented styles are a visual choice, and don’t affect a list’s behavior.

![A standard list and segmented list in dark mode.](../../../assets/images/5d9f6ffce6ef-mio99zjp-03-3P.png)

_StandardSegmented_

### List selection modes

A list can have only one selection mode at a time. For example, a single-action list can change to a multi-select list, but can’t be both at once.

![A single-action list with 4 items and no additional actions.](../../../assets/images/721caf98b739-mio9bca0-04-3P-singleaction.png)

_In a single-action list, each item is a single tappable area_

![A list with 4 items. Each item has 2 trailing icons for additional actions.](../../../assets/images/7ac3e4ab8082-mio9ecsb-05-3P-multiaction.png)

_Multi-action list items include a primary action and one or more secondary actions_

![A list with 1 item selected.](../../../assets/images/8ccd3c969c13-mio9x63z-06-3P-singleselect.png)

_A single-select list_

![A list with 2 items selected.](../../../assets/images/923759cc421f-mio9xiam-07-3P-multiselect.png)

_A multi-select list_

### List interactions

#### Expand

On Android, lists can [expand and collapse](guidelines.md#90a236ee-b587-4361-8911-34006f25a6f1).

<video controls src="../../../assets/videos/d882401ef931-miqm268j-GM3-Expressive-Specs-08-3P-v01-(1).mp4" title="A dropdown list item expands into a list with 6 items, then collapses."></video>

[Open video](../../../assets/videos/d882401ef931-miqm268j-GM3-Expressive-Specs-08-3P-v01-(1).mp4)

**Category**

**Configuration**

**M3**

**M3 Expressive**

Styles

Standard

Available

Available

Segmented

\--

Available

Selection modes

Single-action, multi-action,

single-select, multi-select

Available

Available

Interactions

Expand

Available

Available

## Tokens & specs

Use the table's menu to select a token set. The **common** set combines baseline tokens with new expressive shapes and sizes. The **expand** set has tokens for the expand interaction. [Learn about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

- **system:** Google Material 3

## Anatomy

![Diagram with 10 elements that can be included in lists.](../../../assets/images/3826f2ff6539-mioasn71-11-3P-VQA.png)

_Container and label text are required. All other elements are optional:ContainerOverlineLabel textTrailing textSupporting textTrailing iconDividerLeading avatarLeading iconLeading media - image or video_

### Flexibility & slots

The [M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) includes lists with custom slots for designing flexible item layouts. Think of a custom list as a container with three different slots: leading, content, and trailing. Each slot can hold a different element.

#### **Slot accessibility**

Slots are not accessible by default. Consider the following:

-   Elements must follow the rules, structure, and interaction patterns for lists

-   Use standard list item padding

-   Target size must be at least 48x48dp

-   Don't add interactive elements that make the list item difficult to navigate, especially for people using screen readers


[More on required accessibility guidelines](accessibility.md#538f23f7-689c-4516-bfc8-5f6933a43f5e)

![A diagram with leading, content, and trailing slots.](../../../assets/images/2111c46ec444-mioecnyy-12-3P.png)

_Reserve the use of slots for use cases that maintain the list’s accessibility and functionalityLeading slotContent slot Trailing slot_

warning

Caution:

Slots require custom code implementation that you must create and maintain

The **leading** and **trailing** slot positions must be a smaller width than the **content** section.

1\. **Leading slots** can contain:

-   Visual elements: Avatar, icon, image, or video thumbnail

-   Selection controls: Checkbox, radio button, or switch

-   Customizations: Badge or larger image


2\. **Content slots** must be the largest-width slot and can contain:

-   Default content: Label text, supporting text

-   Optional add-ons: Badge, icon, in-line label, or more text elements

-   Avoid long lines of text to preserve readability


3. **Trailing slots** can contain:

-   Action elements or text: Icon, icon button, or trailing text

-   Selection controls: Checkbox, radio button, or switch

![Slot diagram showing slot placement in the middle of the list.](../../../assets/images/f40db4fff3bf-mioefhsu-13-3P-VQA.png)

_The content slot must be the largest section, placed in the middle of the list item_

#### Selection lists

For selection lists, use only one selection interaction per list item.

![A selected list item with a checkmark in the leading slot.](../../../assets/images/d66a2e490fbc-mioehno9-14-do-3P.png)

_Use only one selection interaction per list item_

![A selected list item with both a checkmark in the leading slot and a bookmark in the trailing slot.](../../../assets/images/4956ccec91eb-mioek6y5-15-dont-3P.png)

_Don't use multiple selection interactions in one item_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![10 list element color roles in light mode and dark mode.](../../../assets/images/85549be8a1ab-mion9qya-16-3P.png)

_List color roles used for light and dark themes:Surface On surface variantOn surface On surface variantOn surface variant On surface variantOutline variantPrimary containerOn primary containerOn surface variant_

## States

States are visual representations used to communicate the status of a component or an interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

### Default list items

![6 default list states in light and dark mode.](../../../assets/images/6218de9f92c6-mionai1i-17-3P.png)

_Enabled DisabledHoveredFocusedPressedDragged_

### Selected list items

![6 selected list states in light and dark mode.](../../../assets/images/f254a2d7d520-mioncezo-18-3P.png)

_Enabled DisabledHoveredFocusedPressedDragged_

## Measurements

![Size and padding measurements for list items.](../../../assets/images/f4d212c91b55-miondj5y-19-3P.png)

_List item alignment, padding, and size measurements. The icon button height is dynamic, and automatically adjusts to fill the list item height._

## List (baseline)

The baseline list variant is available and continues to work in existing products. However, the [expressive list](specs.md#ebf87f58-d5bf-4cb5-a856-d2bb104eec4d) variant is recommended for new designs.

### Tokens & specs

Baseline list tokens are in the **common** token set. Note: This set also includes several expressive tokens.

### TOKEN_TABLE

- **system:** Google Material 3

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![9 baseline list element color roles in light and dark mode.](../../../assets/images/d387ffffe098-miq3n8p4-20-3P.png)

_List color roles used for light and dark themes:SurfaceOn surfaceOn surface variantOn surface variantOn surface variantOutline variantPrimary containerOn primary containerOn surface variant_

### States

States are visual representations used to communicate the status of a component or interactive element.

![6 baseline list states in light and dark mode.](../../../assets/images/df279fe63fbb-miq3rr3p-21-3P.png)

_1. Enabled2. Disabled3. Hovered4. Focused5. Pressed6. Dragged_

### Layout

#### One-line lists

![Alignment, padding, and size specifications for baseline list items with 1 line of text.](../../../assets/images/f6a6166a3e80-miofu0i1-22-3P.png)

_Baseline one-line list alignment, padding, and size measurements_

![Measurements for a 3-item list with 1 line each.](../../../assets/images/abd718195815-miogaa9o-23-3P.png)

_Baseline list item measurements and padding_

#### Two-line lists

![Alignment, padding, and size specifications for baseline list items with 2 lines of text.](../../../assets/images/10d6930cda55-miogazt3-24-3P.png)

_Baseline two-line list alignment, padding, and size measurements_

![Measurements for a 3-item list with 2 lines each.](../../../assets/images/6a10f7a62b4b-miogcld0-25-3P.png)

_Baseline list item measurements and padding_

#### Three-line lists

![Alignment, padding, and size specifications for baseline list items with 3 lines of text.](../../../assets/images/4158b3632bff-miogdayj-26-3P.png)

_Baseline three-line list alignment, padding, and size measurements_

![Measurements for a 3-item list with 3 lines each.](../../../assets/images/66b7a47d4f12-miogduex-27-3P.png)

_Baseline list item measurements and padding_

Attribute

Value

Label alignment

Center

Label alignment when height is 88dp or taller

Top

Label left padding

16dp

Leading element alignment (vertical)

Center

Leading element alignment (vertical) when height is 88dp or taller

Top

Leading element left padding

16dp

Leading icon alignment (vertical)

Top

Leading icon top padding

8dp

Leading icon top padding when height is 88dp or taller

12dp

Trailing element alignment (vertical)

Center

Trailing element alignment (vertical) when height is 88dp or taller

Top

Trailing element left padding

16dp

Trailing element right padding

24dp

Padding above/below divider

0dp

Targets

48dp

Divider full-width

100%

Divider inset left padding

16dp

Divider inset right padding

24dp

### Configurations

#### Leading avatar

![1, 2, and 3-line list items with and without a leading avatar and trailing checkbox, in dark mode.](../../../assets/images/c7f68d2e6d5c-mioh5e7e-28-3P.png)

_With leading avatarWith leading avatar and trailing checkbox_

#### Leading image or thumbnail

![1, 2, and 3-line list items with and without a leading image and trailing checkbox, in dark mode.](../../../assets/images/c4120dba3e34-mioh5246-29-3P.png)

_With leading imageWith leading image and trailing checkbox_

#### Leading video

![1, 2, and 3-line list items with and without a leading video and trailing checkbox, in dark mode.](../../../assets/images/f8c8fd9257e0-mioh4nys-30-3P.png)

_With leading videoWith leading video and trailing checkbox_

#### Leading icon

![1, 2, and 3-line list items with and without a leading icon and trailing checkbox, in dark mode.](../../../assets/images/4e1e18904259-mioh3zha-31-3P.png)

_With leading iconWith leading icon and trailing checkbox_

#### Text-only

![1, 2, and 3-line text only list items with and without a trailing checkbox, in dark mode.](../../../assets/images/2df5141fe05f-mioh3lil-32-3P.png)

_With text onlyWith text and trailing checkbox_

#### Leading checkbox

![1, 2, and 3-line list items with and without a leading checkbox and trailing text, in dark mode.](../../../assets/images/bf8ea0c73a06-mioh2vwf-33-3P.png)

_With leading checkboxWith leading checkbox and trailing text_

#### Leading radio button

![1, 2, and 3-line list items with and without a leading radio button and trailing text, in dark mode.](../../../assets/images/a47fa496da60-mioh2gxb-34-3P.png)

_With leading radio buttonWith leading radio button and trailing text_

#### Trailing switch

![1, 2, and 3-line list items with and without a leading icon and trailing switch, in dark mode.](../../../assets/images/9bca09bd4728-mioh0mgk-35-3P.png)

_With trailing switchWith leading icon and trailing switch_
