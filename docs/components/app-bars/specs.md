---
title: "App bars"
source_url: "https://m3.material.io/components/app-bars/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T03:01:23.896Z"
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

![4 variants of app bars.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmagk85x-01-3P.png?alt=media&token=f4b3768f-c723-4ad0-b874-8add82998732>)

_Search app bar; Small; Medium flexible; Large flexible_

### Baseline variants

The baseline M3 **medium** and **large** app bars are no longer recommended in M3 Expressive, and should be replaced with **medium flexible** and **large flexible** app bars, which are similar visually, but have multi-line support, a shorter height, and can contain a wide variety of elements, like images. [Jump to baseline app bar specs](specs.md#faec9baf-140f-41dc-8b88-2792e90d9d5d)

![2 baseline app bar variants, medium and large.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmar0379-01-deprecated-3P.png?alt=media&token=5bc2c581-dfea-4b04-af42-2eee017bc73a>)

_Baseline variants Medium; Large_

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Search app bar | \-- | Available |
| Small | Available | Available |
| Center-aligned | Available | Merged into **small**. Use centered-text configuration. |
| Medium (baseline) | Available | Not recommended. Use **medium flexible** |
| Medium flexible | \-- | Available |
| Large (baseline) | Available | Not recommended. Use **large flexible** |
| Large flexible | \-- | Available |

## Configurations

### Text alignment

![4 variants of app bars with different left and center aligned text headlines.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmah1clb-02-3P.png?alt=media&token=8bb55fe8-792f-4e9d-bbe4-b8087281207e>)

_Text labels, including supporting text, can be aligned to the leading edge or centered_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Text alignment | Leading edge (default) | Available | Available |
| Centered | \-- | Available |  |

## Tokens & specs

Select a token set to view in the table's menu. App bar token sets are organized into a common token set, and size-specific tokens. [Learn about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

Component: App bars

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| App bar - Common | md.comp.app-bar | COMPONENT | Common tokens for all app bars. |
| App bar - Size - Large (baseline) | md.comp.app-bar.large | COMPONENT | For the baseline large app bar. In expressive, consider using large flexible instead `md.comp.app-bar.large-flexible`. |
| App bar - Size - Large Flexible | md.comp.app-bar.large-flexible | COMPONENT | For the large flexible app bar. |
| App bar - Size - Medium (baseline) | md.comp.app-bar.medium | COMPONENT | For the baseline medium app bar. In expressive, consider using medium flexible instead `md.comp.app-bar.medium-flexible`. |
| App bar - Size - Medium Flexible | md.comp.app-bar.medium-flexible | COMPONENT | For the medium flexible app bar. |
| App bar - Size - Small | md.comp.app-bar.small | COMPONENT | For the expressive small app bar and search app bar. |
| [Deprecated] Top app bar - Large | md.comp.top-app-bar.large | COMPONENT | This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.large` tokens instead. Original tokens for the large top app bar. |
| [Deprecated] Top app bar - Medium | md.comp.top-app-bar.medium | COMPONENT | This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.medium` tokens instead. Original tokens for the medium top app bar. |
| [Deprecated] Top app bar - Small, Center-aligned | md.comp.top-app-bar.small.centered | COMPONENT | This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.small` tokens instead. Original component tokens for the center-aligned top app bar. |
| [Deprecated] Top app bar - Small | md.comp.top-app-bar.small | COMPONENT | This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.small` tokens instead. Original tokens for the small top app bar. |

### Search component tokens & specs

The default search component tokens are used in the search app bar.

### TOKEN_TABLE

Component: Search

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Search - Bar | md.comp.search-bar | COMPONENT | For baseline search bar and expressive search. |
| Search - View | md.comp.search-view | COMPONENT | For baseline search view and expressive search when activated. |

## Anatomy

![5 elements of the component.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmahcxrn-03-3P.png?alt=media&token=dee6a9ac-4550-46f7-afed-1503ba60e005>)

_Container; Leading button; Trailing elements; Headline; Subtitle_

App bars can be customized to include:

-   An image or logo
-   A subtitle
-   A filled icon button

Avoid customizing the size of the heading and subtitle, or adding too many actions.

![3 app bars: 1 with a newspaper logo, 1 with a subtitle, and 1 with a filled icon button.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmahfvsg-04-3P.png?alt=media&token=3c3da553-0d20-4215-a307-7355f3e97a41>)

_The app bar can have different layouts depending on which elements are shown_

### Search

The search app bar can include trailing actions inside and outside the search bar. When the search bar is selected, it should open the search view component.

![5 elements of the search app bar.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmahnmz2-05-3P.png?alt=media&token=22ee7ea7-1df4-4a7d-95ce-ff42f83ec483>)

_Container; Leading icon button; Hinted search text; Trailing icon or avatar; Search container_

![3 layouts of icons in the search app bar.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmahv36y-06-3P.png?alt=media&token=12c2ad1e-b608-4977-9dc6-b56085f99efd>)

_A leading element and a trailing element outside search; A leading element, a trailing element inside search, and a trailing element outside search; A leading element and two trailing elements outside search_

### Image 

An image can be placed in the app bar. In small app bars, this can replace the label text.

![Graphic replacing text headline content.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmaiawq3-07-3P.png?alt=media&token=7973518d-24eb-47d4-bf91-29091cde0f79>)

_Images can be added to app bars and can replace label text on small app bars_

### Filled trailing icon button

The app bar's trailing icon buttons can be replaced with a single, primary, or tonal filled icon button in default or wide sizes.

![App bars configured with filled trailing icons.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmaiezk5-08-3P.png?alt=media&token=35d786d8-d9a1-4c18-9e4b-db1606b4ac43>)

_The trailing icons can be configured to be a single filled icon button_

### Subtitle

![App bars configured with subtitles below their headlines.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmao48ka-09-3P.png?alt=media&token=c99d158e-422b-4454-b89c-359a5c99e7af>)

_The medium flexible and large flexible app bars hug the text contents, so they are taller when a subtitle is visible Small; Small with subtitle; Medium flexible; Medium flexible with subtitle; Large flexible; Large flexible with subtitle_

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

All app bars share the same color roles. On scroll, the container changes color to **surface container**.

![4 color roles of the leading edge app bar in light and dark scheme.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmaoaorq-10-3P.png?alt=media&token=81cfa880-1bee-497e-8e12-dd4fcd127a37>)

_App bar color roles used for light and dark themes: Surface; On surface; On surface variant; On surface; On surface variant; Surface container (on scroll)_

![4 color roles of the center-aligned app bar in light and dark scheme.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmaod25k-11-3P.png?alt=media&token=6c3264aa-5fc5-473a-9be6-7df09e087e18>)

_Search app bar color roles used for light and dark themes: Surface; On surface variant; On surface variant; On surface variant; Surface container; Surface container; Surface container highest_

### Scroll states

![Color roles for app bars when flat and on scroll.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmaof4ew-12-3P.png?alt=media&token=d415b2d4-018a-427e-8dd5-c04161f65b1f>)

_The app bar changes color when flat or on scroll. The search bar can also change color on scroll. Flat; On scroll_

## Measurements

### Search app bar

![Search app bar size and padding measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmaonw2d-13-3P.png?alt=media&token=d231e0ce-4b66-4e1e-bdf4-3d0c05add1eb>)

_Search app bar padding and size measurements_

### Small app bar

![Small app bar size and padding measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmaoprdb-14-3P.png?alt=media&token=eb64f015-3fda-4a6f-a1ac-851b7e2b622b>)

_Small app bar padding and size measurements_

### Medium flexible app bar

![Medium flexible app bar padding and size measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmap4u9c-15-3P.png?alt=media&token=2aba72f0-d565-4ee3-aeb9-e4583c00069e>)

_Medium flexible app bar padding and size measurements_

### Large flexible app bar

![Large flexible app bar padding and size measurements](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmapnkl4-16-3P.png?alt=media&token=98a8959d-34a9-40d4-9a2f-28f066ffdc74>)

_Large flexible app bar padding and size measurements_

* * *

## Baseline app bars

The **medium** and **large** app bars are no longer recommended in M3 Expressive. Use the **medium flexible** and **large flexible** app bars in their place.

![4 elements of medium and large app bars.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmaqk9ki-17-deprecated-3P.png?alt=media&token=b1be4d49-8395-4deb-9fb3-4cbb0c03fdb7>)

_Medium and large app bars have the same elements: Container; Leading button; Trailing icons; Headline_

### Tokens & specs

Select a token set to view in the table's menu. Baseline app bar token sets are organized into medium, large, and older baseline token sets. [Learn about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

Component: App bars

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| App bar - Common | md.comp.app-bar | COMPONENT | Common tokens for all app bars. |
| App bar - Size - Large (baseline) | md.comp.app-bar.large | COMPONENT | For the baseline large app bar. In expressive, consider using large flexible instead `md.comp.app-bar.large-flexible`. |
| App bar - Size - Large Flexible | md.comp.app-bar.large-flexible | COMPONENT | For the large flexible app bar. |
| App bar - Size - Medium (baseline) | md.comp.app-bar.medium | COMPONENT | For the baseline medium app bar. In expressive, consider using medium flexible instead `md.comp.app-bar.medium-flexible`. |
| App bar - Size - Medium Flexible | md.comp.app-bar.medium-flexible | COMPONENT | For the medium flexible app bar. |
| App bar - Size - Small | md.comp.app-bar.small | COMPONENT | For the expressive small app bar and search app bar. |
| [Deprecated] Top app bar - Large | md.comp.top-app-bar.large | COMPONENT | This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.large` tokens instead. Original tokens for the large top app bar. |
| [Deprecated] Top app bar - Medium | md.comp.top-app-bar.medium | COMPONENT | This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.medium` tokens instead. Original tokens for the medium top app bar. |
| [Deprecated] Top app bar - Small, Center-aligned | md.comp.top-app-bar.small.centered | COMPONENT | This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.small` tokens instead. Original component tokens for the center-aligned top app bar. |
| [Deprecated] Top app bar - Small | md.comp.top-app-bar.small | COMPONENT | This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.small` tokens instead. Original tokens for the small top app bar. |

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

![4 color roles of the medium top app bar in light and dark scheme.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmaqrta6-18-deprecated-3P.png?alt=media&token=a54e3621-ef99-4168-b3a9-9cdc9606eb71>)

_Medium top app bar color roles used for light and dark schemes: Surface; On surface; On surface; On surface variant_

### Measurements

#### Medium app bar

![Diagram of medium app bar padding and size measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmaquor6-19-deprecated-3P.png?alt=media&token=f4fa6be1-bfde-4707-8d64-1d868073e86e>)

_Medium app bar padding and size measurements_

#### Large app bar

![Diagram of large app bar padding and size measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmmaqwh2h-20-deprecated-3P.png?alt=media&token=57be919c-7a77-45d1-880e-9afae140b506>)

_Large app bar padding and size measurements_
