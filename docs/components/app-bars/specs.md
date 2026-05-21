---
title: "App bars"
source_url: "https://m3.material.io/components/app-bars/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/6343539e762e-mmagk85x-01-3P.png"
  - "assets/images/d717360d52dd-mmar0379-01-deprecated-3P.png"
  - "assets/images/d52474fcf262-mmah1clb-02-3P.png"
  - "assets/images/7f0e55e42469-mmahcxrn-03-3P.png"
  - "assets/images/720625330525-mmahfvsg-04-3P.png"
  - "assets/images/94073505e16e-mmahnmz2-05-3P.png"
  - "assets/images/85fea7ec36ba-mmahv36y-06-3P.png"
  - "assets/images/56d3a803f47a-mmaiawq3-07-3P.png"
  - "assets/images/2af0cde47c10-mmaiezk5-08-3P.png"
  - "assets/images/83e6d853fb23-mmao48ka-09-3P.png"
  - "assets/images/190f1544e289-mmaoaorq-10-3P.png"
  - "assets/images/f1b469aecfe9-mmaod25k-11-3P.png"
  - "assets/images/e3514b62891d-mmaof4ew-12-3P.png"
  - "assets/images/00d15e4aadc3-mmaonw2d-13-3P.png"
  - "assets/images/6b5c4686eab0-mmaoprdb-14-3P.png"
  - "assets/images/50ac0565f56d-mmap4u9c-15-3P.png"
  - "assets/images/01c5eab435d1-mmapnkl4-16-3P.png"
  - "assets/images/6ab8e28aa8ed-mmaqk9ki-17-deprecated-3P.png"
  - "assets/images/109ad9f572b0-mmaqrta6-18-deprecated-3P.png"
  - "assets/images/0e84b2436bce-mmaquor6-19-deprecated-3P.png"
  - "assets/images/f9eed1682f54-mmaqwh2h-20-deprecated-3P.png"
---

# App bars

App bars are placed at the top of the screen to help people navigate through a product

## Specs

## Variants

![4 variants of app bars.](../../../assets/images/6343539e762e-mmagk85x-01-3P.png)

_Search app barSmallMedium flexibleLarge flexible_

### Baseline variants

The baseline M3 **medium** and **large** app bars are no longer recommended in M3 Expressive, and should be replaced with **medium flexible** and **large flexible** app bars, which are similar visually, but have multi-line support, a shorter height, and can contain a wide variety of elements, like images. [Jump to baseline app bar specs](specs.md#faec9baf-140f-41dc-8b88-2792e90d9d5d)

![2 baseline app bar variants, medium and large.](../../../assets/images/d717360d52dd-mmar0379-01-deprecated-3P.png)

_Baseline variantsMediumLarge_

Variant

M3

M3 Expressive

Search app bar

\--

Available

Small

Available

Available

Center-aligned

Available

Merged into **small**. 
Use centered-text configuration.

Medium (baseline)

Available

Not recommended.

Use **medium flexible**

Medium flexible

\--

Available

Large (baseline)

Available

Not recommended.

Use **large flexible**

Large flexible

\--

Available

## Configurations

### Text alignment

![4 variants of app bars with different left and center aligned text headlines.](../../../assets/images/d52474fcf262-mmah1clb-02-3P.png)

_Text labels, including supporting text, can be aligned to the leading edge or centered_

Category

Configuration

M3

M3 Expressive

Text alignment

Leading edge (default)

Available

Available

Centered

\--

Available

## Tokens & specs

Select a token set to view in the table's menu. App bar token sets are organized into a common token set, and size-specific tokens. [Learn about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

- **system:** Google Material 3

### Search component tokens & specs

The default search component tokens are used in the search app bar.

### TOKEN_TABLE

- **system:** Google Material 3

## Anatomy

![5 elements of the component.](../../../assets/images/7f0e55e42469-mmahcxrn-03-3P.png)

_ContainerLeading buttonTrailing elementsHeadlineSubtitle_

App bars can be customized to include:

-   An image or logo
-   A subtitle
-   A filled icon button

Avoid customizing the size of the heading and subtitle, or adding too many actions.

![3 app bars: 1 with a newspaper logo, 1 with a subtitle, and 1 with a filled icon button.](../../../assets/images/720625330525-mmahfvsg-04-3P.png)

_The app bar can have different layouts depending on which elements are shown_

### Search

The search app bar can include trailing actions inside and outside the search bar. When the search bar is selected, it should open the search view component.

![5 elements of the search app bar.](../../../assets/images/94073505e16e-mmahnmz2-05-3P.png)

_ContainerLeading icon buttonHinted search textTrailing icon or avatarSearch container_

![3 layouts of icons in the search app bar.](../../../assets/images/85fea7ec36ba-mmahv36y-06-3P.png)

_A leading element and a trailing element outside searchA leading element, a trailing element inside search, and a trailing element outside searchA leading element and two trailing elements outside search_

### Image 

An image can be placed in the app bar. In small app bars, this can replace the label text.

![Graphic replacing text headline content.](../../../assets/images/56d3a803f47a-mmaiawq3-07-3P.png)

_Images can be added to app bars and can replace label text on small app bars_

### Filled trailing icon button

The app bar's trailing icon buttons can be replaced with a single, primary, or tonal filled icon button in default or wide sizes.

![App bars configured with filled trailing icons.](../../../assets/images/2af0cde47c10-mmaiezk5-08-3P.png)

_The trailing icons can be configured to be a single filled icon button_

### Subtitle

![App bars configured with subtitles below their headlines.](../../../assets/images/83e6d853fb23-mmao48ka-09-3P.png)

_The medium flexible and large flexible app bars hug the text contents, so they are taller when a subtitle is visibleSmallSmall with subtitleMedium flexibleMedium flexible with subtitleLarge flexibleLarge flexible with subtitle_

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

All app bars share the same color roles. On scroll, the container changes color to **surface container**.

![4 color roles of the leading edge app bar in light and dark scheme.](../../../assets/images/190f1544e289-mmaoaorq-10-3P.png)

_App bar color roles used for light and dark themes:SurfaceOn surfaceOn surface variantOn surfaceOn surface variantSurface container (on scroll)_

![4 color roles of the center-aligned app bar in light and dark scheme.](../../../assets/images/f1b469aecfe9-mmaod25k-11-3P.png)

_Search app bar color roles used for light and dark themes:Surface On surface variantOn surface variantOn surface variantSurface containerSurface containerSurface container highest_

### Scroll states

![Color roles for app bars when flat and on scroll.](../../../assets/images/e3514b62891d-mmaof4ew-12-3P.png)

_The app bar changes color when flat or on scroll. The search bar can also change color on scroll.FlatOn scroll_

## Measurements

### Search app bar

![Search app bar size and padding measurements.](../../../assets/images/00d15e4aadc3-mmaonw2d-13-3P.png)

_Search app bar padding and size measurements_

### Small app bar

![Small app bar size and padding measurements.](../../../assets/images/6b5c4686eab0-mmaoprdb-14-3P.png)

_Small app bar padding and size measurements_

### Medium flexible app bar

![Medium flexible app bar padding and size measurements.](../../../assets/images/50ac0565f56d-mmap4u9c-15-3P.png)

_Medium flexible app bar padding and size measurements_

### Large flexible app bar

![Large flexible app bar padding and size measurements](../../../assets/images/01c5eab435d1-mmapnkl4-16-3P.png)

_Large flexible app bar padding and size measurements_

* * *

## Baseline app bars

The **medium** and **large** app bars are no longer recommended in M3 Expressive. Use the **medium flexible** and **large flexible** app bars in their place.

![4 elements of medium and large app bars.](../../../assets/images/6ab8e28aa8ed-mmaqk9ki-17-deprecated-3P.png)

_Medium and large app bars have the same elements:ContainerLeading buttonTrailing iconsHeadline_

### Tokens & specs

Select a token set to view in the table's menu. Baseline app bar token sets are organized into medium, large, and older baseline token sets. [Learn about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

- **system:** Google Material 3

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![4 color roles of the medium top app bar in light and dark scheme.](../../../assets/images/109ad9f572b0-mmaqrta6-18-deprecated-3P.png)

_Medium top app bar color roles used for light and dark schemes:SurfaceOn surfaceOn surfaceOn surface variant_

### Measurements

#### Medium app bar

![Diagram of medium app bar padding and size measurements.](../../../assets/images/0e84b2436bce-mmaquor6-19-deprecated-3P.png)

_Medium app bar padding and size measurements_

#### Large app bar

![Diagram of large app bar padding and size measurements.](../../../assets/images/f9eed1682f54-mmaqwh2h-20-deprecated-3P.png)

_Large app bar padding and size measurements_
