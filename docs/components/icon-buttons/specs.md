---
title: "Icon buttons"
source_url: "https://m3.material.io/components/icon-buttons/specs"
lastmod: "2026-02-11"
snapshot_at: "2026-05-21T03:01:23.896Z"
section: "components"
assets:
  - "assets/images/1314d57a6ba7-macn9b93-1.png"
  - "assets/images/b7960af7d3c5-macn9wle-2.png"
  - "assets/images/1625e25895c3-macngrp0-3.png"
  - "assets/images/ae63520871c5-macnmn5n-4.png"
  - "assets/images/d80347bb7b72-macny1bg-7.png"
  - "assets/images/4798047f809b-macnyuzs-8.png"
  - "assets/images/99bb22175870-maco0ivh-9.png"
  - "assets/images/54a5599e55d9-maco1xul-10.png"
  - "assets/images/e008d13a13ea-maco30ip-11.png"
  - "assets/images/dc78afc26f10-maco3sgl-12.png"
  - "assets/images/6dd52a77f008-maco50jx-13.png"
  - "assets/images/d17d6226e6a9-maco5p31-14.png"
  - "assets/images/36f9a63a8fe0-mal45bxj-15.png"
  - "assets/images/bed05e041ede-mafeboyy-16.png"
  - "assets/images/e8bb16886226-macoq4wo-17.png"
  - "assets/images/0589307ae8e2-macosw5f-18.png"
  - "assets/images/25e4f0b935bb-mafelwts-19.png"
---

# Icon buttons

Icon buttons help people take minor actions with one tap

## Specs

## Variants

![Side by side view of default and toggle icon buttons.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmacn9b93-1.png?alt=media&token=eaccf9c1-f0f1-4ca1-bdd0-1bd695733cf8>)

_Default icon button; Toggle icon button_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Default | Available | Available |
| Toggle (selection) | Available | Available |

## Configurations

![Side by side view of size, shape, color, and width variations.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmacn9wle-2.png?alt=media&token=d72ef6d8-9fd8-465e-858b-fbae2febebb5>)

_Five sizes; Two shapes; Four color styles; Three widths_

| Category | Options | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Size | Small (default) | Available | Available |
| XS, M, L, XL | \-- | Available |  |
| Shape | Round (default) | Available | Available |
| Square | \-- | Available |  |
| Color | Filled (default), tonal, outlined, standard | Available | Available |
| Width | Default | Available | Available |
| Narrow, wide | \-- | Available |  |

## Tokens & specs

Icon button token sets are organized by common tokens, color, and size. Select the token set from the table’s menu. [Learn about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

### TOKEN_TABLE

Component: Icon buttons

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Icon button - Color - Filled | md.comp.icon-button.filled | COMPONENT | For filled icon buttons. |
| Icon button - Color - Outlined | md.comp.icon-button.outlined | COMPONENT | For outlined icon buttons. |
| Icon button - Color - Standard | md.comp.icon-button.standard | COMPONENT | For standard icon buttons. |
| Icon button - Color - Tonal | md.comp.icon-button.tonal | COMPONENT | For tonal icon buttons. |
| Icon button - Size - Large | md.comp.icon-button.large | COMPONENT | For large icon buttons. |
| Icon button - Size - Medium | md.comp.icon-button.medium | COMPONENT | For medium icon buttons. |
| Icon button - Size - Small | md.comp.icon-button.small | COMPONENT | For small icon buttons. |
| Icon button - Size - Xlarge | md.comp.icon-button.xlarge | COMPONENT | For XL icon buttons. |
| Icon button - Size - Xsmall | md.comp.icon-button.xsmall | COMPONENT | For XS icon buttons. |
| Icon button (baseline) | md.comp.icon-button | COMPONENT | This token set is not recommended. For baseline icon buttons. For expressive, use a size `md.comp.icon-button.small` and color `md.comp.icon-button.filled` token set instead. |
| [Deprecated] Icon button - Outlined | md.outlined-icon-button | COMPONENT | This token set is deprecated. Use `md.comp.icon-button.outlined` instead. |
| [Deprecated] Icon button - Tonal | md.comp.filled-tonal-icon-button | COMPONENT | This token set is deprecated. Use `md.comp.icon-button.tonal` instead. |
| [Deprecated] Icon button - Filled | md.comp.filled-icon-button | COMPONENT | This token set is deprecated. Use `md.comp.icon-button.filled` instead. |

## Anatomy

![Diagram indicating anatomy of filled icon button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmacngrp0-3.png?alt=media&token=6f49a2d7-daed-42bb-8a28-29f66f842591>)

_Icon; Container_

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

There are four built-in color styles: filled, tonal, outlined, and standard. Default and toggle buttons use different color roles per style.

star

Note:

These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.

![Color roles of default and toggle buttons in 4 visual styles.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmacnmn5n-4.png?alt=media&token=a93643fc-01ad-4c96-b27f-6fc44e197485>)

_A: Filled, B: Tonal, C: Outlined, D: Standard / Default; Toggle, unselected; Toggle, selected_

|  | 1\. Default | 2\. Toggle, unselected | 3\. Toggle, selected |
| --- | --- | --- | --- |
| Filled container Filled icon | Primary On primary | Surface container On surface variant | Primary On primary |
| Tonal container Tonal icon | Secondary container On secondary container | Secondary container On secondary container | Secondary On secondary |
| Outlined container Outlined icon | Outline variant (outline) On surface variant | Outline variant (outline) On surface variant | Inverse surface Inverse on surface |
| Standard icon | On surface variant | On surface variant | Primary |

## States

States are visual representations used to communicate the status of a component or interactive element. State layers slightly change button color. Disabled states have different base colors. [View tokens for details](../../foundations/design-tokens/overview.md)

### Filled button states

#### Default

![5 states of filled icon button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmacny1bg-7.png?alt=media&token=d9a12639-84db-4ce0-a2ab-cb94ea1fd49f>)

_Enabled; Disabled (10% state layer); Hovered (8% state layer); Focused (10% state layer); Pressed (10% state layer)_

#### Toggle

![5 states of filled toggle icon button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmacnyuzs-8.png?alt=media&token=a503edb9-66a1-467f-9012-2a0d190db399>)

_A: Unselected. B: Selected Enabled; Disabled (10% state layer); Hovered (8% state layer); Focused (10% state layer); Pressed (10% state layer)_

### Tonal button states

#### Default

![5 states of tonal icon button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmaco0ivh-9.png?alt=media&token=608bddef-1cc2-456c-8fa7-7b483a1f3bfb>)

_Enabled; Disabled (10% state layer); Hovered (8% state layer); Focused (10% state layer); Pressed (10% state layer)_

#### Toggle

![5 states of tonal toggle icon button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmaco1xul-10.png?alt=media&token=b3419078-228a-4fe2-b312-3c4cf1ffd2c5>)

_A: Unselected. B: Selected Enabled; Disabled (10% state layer); Hovered (8% state layer); Focused (10% state layer); Pressed (10% state layer)_

### Outlined button states

#### Default

![5 states of outlined icon button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmaco30ip-11.png?alt=media&token=46194872-3ef7-4efe-9f06-2b4ad86432ea>)

_Enabled; Disabled (10% state layer); Hovered (8% state layer); Focused (10% state layer); Pressed (10% state layer)_

#### Toggle

![5 states of outlined toggle icon button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmaco3sgl-12.png?alt=media&token=f038a5f8-56b3-4d57-9642-60dd620a55fc>)

_A: Unselected. B: Selected Enabled; Disabled (10% state layer); Hovered (8% state layer); Focused (10% state layer); Pressed (10% state layer)_

### Standard icon button states

The standard icon button’s container is invisible at rest, but visible when the state layer is applied.

#### Default

![5 states of standard icon button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmaco50jx-13.png?alt=media&token=e436ef4e-3ce4-4ab4-8823-46785a508376>)

_Enabled; Disabled (10% state layer); Hovered (8% state layer); Focused (10% state layer); Pressed (10% state layer)_

#### Toggle

![5 states of standard toggle icon button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmaco5p31-14.png?alt=media&token=6dd172e4-9231-405e-9d91-885cfcb639ed>)

_A: Unselected. B: Selected Enabled; Disabled (10% state layer); Hovered (8% state layer); Focused (10% state layer); Pressed (10% state layer)_

## Shape morph

### Pressed state

While pressed, icon buttons can morph to become more square. 

Both round and square icon buttons should have the same pressed shape radius.

The corner radius value differs for each button size. [See full icon button corner measurements](specs.md#b3df1f02-d313-44e9-9542-37f7e0e24dc7)

![Shape changes for round and square icon buttons in 3 states.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmal45bxj-15.png?alt=media&token=8748a957-b64c-4f67-82ee-a19fddf12a3b>)

_A. Round, B. Square Enabled; Hovered; Pressed_

### When selected

In addition to changing shape when pressed, toggle icon buttons also change the resting shape from round (unselected) to square (selected) by default.

If the resting shape is square, the selected shape should be round.

![Shape changes for round and square toggle icon buttons in 3 states.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmafeboyy-16.png?alt=media&token=d78d1634-d6a5-4e93-b964-74dd5828ea0a>)

_A. Round, B. Square Enabled; Hovered; Pressed; Selected_

## Measurements

![Diagram of 5 sizes of icon buttons in 4 widths.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmacoq4wo-17.png?alt=media&token=6ba00bd8-8461-4d22-a064-b844353a3598>)

_A. Extra small B. Small C. Medium D. Large E. Extra large Icon size; Default width size; Narrow width size; Wide width size_

### Target sizes

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.

![Diagram of target sizes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmacosw5f-18.png?alt=media&token=25d269f8-b0c4-4510-be2c-e503f0a9c48a>)

_A. Extra small icon button size B. Small icon button size Narrow width; Default width; Wide width_

### Button corner radius

![Diagram of icon button corner radius.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmafelwts-19.png?alt=media&token=e4d6f03c-43da-4306-bdd0-eabc58424088>)

_/_

|  | XS | S | M | L | XL |
| --- | --- | --- | --- | --- | --- |
| A. Round button | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp | 8dp | 12dp | 16dp | 16dp |

## Baseline tokens

Use the table's menu to select a token set. Filled, tonal, and outlined icon button tokens are no longer recommended. Standard tokens are still available in the module at the top of the page.

### TOKEN_TABLE

Component: Icon buttons

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Icon button - Color - Filled | md.comp.icon-button.filled | COMPONENT | For filled icon buttons. |
| Icon button - Color - Outlined | md.comp.icon-button.outlined | COMPONENT | For outlined icon buttons. |
| Icon button - Color - Standard | md.comp.icon-button.standard | COMPONENT | For standard icon buttons. |
| Icon button - Color - Tonal | md.comp.icon-button.tonal | COMPONENT | For tonal icon buttons. |
| Icon button - Size - Large | md.comp.icon-button.large | COMPONENT | For large icon buttons. |
| Icon button - Size - Medium | md.comp.icon-button.medium | COMPONENT | For medium icon buttons. |
| Icon button - Size - Small | md.comp.icon-button.small | COMPONENT | For small icon buttons. |
| Icon button - Size - Xlarge | md.comp.icon-button.xlarge | COMPONENT | For XL icon buttons. |
| Icon button - Size - Xsmall | md.comp.icon-button.xsmall | COMPONENT | For XS icon buttons. |
| Icon button (baseline) | md.comp.icon-button | COMPONENT | This token set is not recommended. For baseline icon buttons. For expressive, use a size `md.comp.icon-button.small` and color `md.comp.icon-button.filled` token set instead. |
| [Deprecated] Icon button - Outlined | md.outlined-icon-button | COMPONENT | This token set is deprecated. Use `md.comp.icon-button.outlined` instead. |
| [Deprecated] Icon button - Tonal | md.comp.filled-tonal-icon-button | COMPONENT | This token set is deprecated. Use `md.comp.icon-button.tonal` instead. |
| [Deprecated] Icon button - Filled | md.comp.filled-icon-button | COMPONENT | This token set is deprecated. Use `md.comp.icon-button.filled` instead. |
