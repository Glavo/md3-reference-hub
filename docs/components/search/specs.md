---
title: "Search"
source_url: "https://m3.material.io/components/search/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T03:01:23.896Z"
section: "components"
assets:
  - "assets/videos/cc13cedade94-mm28azl5-GM3-Search-Bar-Specs-01-3P-v02.mp4"
  - "assets/images/e72b830c0bbd-mm17d95o-02-3P.png"
  - "assets/images/27a92b217a6e-mm17dfzg-03-3P.png"
  - "assets/images/b24f651bb378-mm17dsh8-04-3P.png"
  - "assets/images/eb1258bee04e-mm17e01j-05-3P.png"
  - "assets/images/fb7ab3a77092-mm17e8r8-06-3P.png"
  - "assets/images/605b285aed65-mm17efaq-07-3P.png"
  - "assets/images/c3a3be87873e-mm17eoxh-08-3P.png"
  - "assets/images/1d8ea319aede-mm17exdj-10-3P.png"
  - "assets/images/d5c2a23f12c2-mm17f6n2-12-3P.png"
  - "assets/images/3fa3e854e091-mm17g3kb-13.png"
  - "assets/images/904e413437a4-mm17mvvh-14-3P.png"
  - "assets/images/dbb466c63389-mm17n640-15-3P.png"
  - "assets/images/64591caf5b81-mm17ne69-16.png"
  - "assets/images/c280aac50706-mm17njuh-17.png"
  - "assets/images/7685928172ae-mm17o030-18.png"
  - "assets/images/73a6081bf344-mm17o810-19.png"
  - "assets/images/0e820989ebfa-mm17on8b-20.png"
  - "assets/images/be03f5af6db5-mm17oub1-21.png"
  - "assets/images/cedbf1a2455b-mm17p24v-22-3P.png"
  - "assets/images/16af1471b48a-mm17p7ru-23-3P.png"
---

# Search

Search lets people enter a keyword or phrase to get relevant information

## Specs

## Variants

<video controls src="../../../assets/videos/cc13cedade94-mm28azl5-GM3-Search-Bar-Specs-01-3P-v02.mp4" title="Typing “Ping” into a search bar reveals a list of email results."></video>

[Open video](../../../assets/videos/cc13cedade94-mm28azl5-GM3-Search-Bar-Specs-01-3P-v02.mp4)

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Search | Available | Available |

## Configurations

### Style

Search comes in two styles:

-   Contained: Has an expressive look and feel. It uses a filled container to separate a search bar from a list of suggestions or results

-   Divided (baseline): Doesn’t have the latest visual style, motion, or flexibility

![An email inbox search bar in a contained style.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17d95o-02-3P.png?alt=media&token=3dd43ef8-9815-432c-a639-2096e63eecab>)

_The contained style has a persistent, filled container, expressive motion, and rounded shape_

![An email inbox search bar in a divided style.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17dfzg-03-3P.png?alt=media&token=a5179e49-d0ca-4f96-bba7-c00613a268e3>)

_The divided (baseline) style uses a divider to separate the search bar from suggestions and results_

### Layout

Search suggestions and results appear in customizable lists, with two layout options: full-screen and docked. [More on search layouts](guidelines.md#4f6c921c-795f-4e06-9b12-27ae7d502adb)

![Full-screen search results with a search bar in the contained style.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17dsh8-04-3P.png?alt=media&token=7f0819f0-1c4c-4a4c-94ed-8cedf764f46b>)

_Full-screen layout in the contained style_

![Docked search results with a search bar in the contained style.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17e01j-05-3P.png?alt=media&token=2ae8c274-80c6-40f8-97e9-8d234a057db5>)

_Docked layout in the contained style_

![Full-screen search results with a search bar in the divided style.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17e8r8-06-3P.png?alt=media&token=5b199df1-1199-4653-b21d-dc28174c9195>)

_Full-screen layout in the divided style_

![Docked search results with a search bar in the divided style.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17efaq-07-3P.png?alt=media&token=a5cba1d3-cd20-463b-90ee-e5c20d299f1e>)

_Docked layout in the divided style_

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Style | Contained | \-- | Available |
|  | Divided | Available | Not recommended. Use contained. |
| Layout | Docked, full-screen | Available | Available |

## Tokens & specs

Use the table's menu to select a token set. The **search bar** set only contains tokens for the unfocused search bar. The **search view** set contains all other tokens when interacting with search, including all styles and layouts. [Learn more about design tokens](../../foundations/design-tokens/overview.md)

### TOKEN_TABLE

Component: Search

| Token set | Name | Type | Description |
| --- | --- | --- | --- |
| Search - Bar | md.comp.search-bar | COMPONENT | For baseline search bar and expressive search. |
| Search - View | md.comp.search-view | COMPONENT | For baseline search view and expressive search when activated. |

## Anatomy

Search includes a search bar and a container for suggestions and results. The container is empty by default. Use the list component to add content. In the divided (baseline) style, a divider separates the search bar and results.

![6 elements of search.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17eoxh-08-3P.png?alt=media&token=0b029fa9-9818-4d4b-bf50-0e31ac6f028b>)

_Search bar container; Leading icon; Supporting text; Trailing icon and avatar (optional); Input text; Container for search suggestions or results_

### Examples

1.  With avatar

2.  With one trailing icon button

3.  With two trailing icon buttons

4.  With trailing icon button and avatar

![4 search bars with different trailing elements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17exdj-10-3P.png?alt=media&token=5506d812-c90c-4751-9449-d72f1842589e>)

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

### Full-screen layout

![6 full-screen search color roles in light and dark themes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17f6n2-12-3P.png?alt=media&token=9857d8cf-493e-4ba0-bec5-d819cb3dd0d2>)

_Full-screen search color roles used in light and dark themes: Surface container low; On surface variant; On surface variant; Surface container high; On surface variant; On surface_

### Docked layout

![6 docked search color roles in light and dark themes.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17g3kb-13.png?alt=media&token=91890bd0-2429-40dc-ba11-945fe2ca3e6e>)

_Docked search color roles used in light and dark themes: Surface container high; On surface variant; On surface variant; Surface container high; On surface variant; On surface_

## States

States are visual representations used to communicate the status of a component or an interactive element. In [focused search](guidelines.md#a9b2df31-8561-4326-82cd-41ed6532b765), individual elements maintain their own interaction states. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

### Search bar

![4 search bar states in light and dark mode.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17mvvh-14-3P.png?alt=media&token=992b5b83-efa3-4964-8f53-39e96f3f2f2c>)

_Enabled; Hovered; Focused; Pressed (ripple)_

### Search suggestions & results

Search includes a container for suggestions and results. The container is empty by default. Use the list component to add content.

![4 search result states in light and dark mode.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17n640-15-3P.png?alt=media&token=953f72ef-b883-441c-abda-7a67010a712d>)

_Enabled; Hovered; Focused; Pressed (ripple)_

## Measurements

### Search bar

![Search bar with leading and trailing icon size and padding measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17ne69-16.png?alt=media&token=786cbf19-9e17-44e0-af46-b1529da17e45>)

_Unfocused search bar with leading and trailing icon measurements_

![Search bar with trailing avatar size and padding measurements.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17njuh-17.png?alt=media&token=b754034d-5aba-4479-9e77-b487f599fa00>)

_Unfocused search bar with avatar measurements_

In M3 Expressive, the search bar expands when focused. The margins change from 24dp to 12dp.

![Unfocused search bar margins of 24dp.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17o030-18.png?alt=media&token=8850da02-b54e-4ab3-b287-8cf416d92e98>)

_Unfocused search bar margin measurements_

![Focused search bar margins of 12dp.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17o810-19.png?alt=media&token=039ffe87-1dfe-4131-ba73-0b062518d946>)

_Focused search bar margin measurements_

| Element | Attribute | Value |
| --- | --- | --- |
| Container | Width | Min: 360dp, max: 720dp |
| Height | 56dp |  |
| Label alignment | Start-aligned |  |
| Leading padding | Unfocused: 24dp, focused: 12dp |  |
| Trailing padding | Unfocused: 24dp, focused: 12dp |  |
| Leading icon and label padding (from tap target) | 4dp |  |
| Label and trailing icon padding (from tap target) | 4dp |  |
| Avatar | Size | 30dp |

### Focused search

#### Contained style

![Full-screen layout size and padding measurements in contained style.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17on8b-20.png?alt=media&token=afb59bc7-c6e5-4d5d-9cf4-64eae9f48d57>)

_Full-screen search padding and size measurements for contained style_

![Docked layout size and padding measurements in contained style.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17oub1-21.png?alt=media&token=208c144b-ecb2-4f7b-8f10-e8b23a404d0f>)

_Docked search padding and size measurements for contained style_

| Element | Attribute | Value |
| --- | --- | --- |
| Full-screen container | Width | Full width |
| Height | Full height |  |
| Docked container | Width | Min: 360dp, max: 720dp |
| Height | Min: 240dp, max: 2/3 of screen height |  |
| Search bar container | Height | 56dp |
| Label alignment | Start-aligned |  |
| Leading padding | 16dp |  |
| Trailing padding | 16dp |  |
| Leading icon and label padding (from tap target) | 4dp |  |
| Leading icon and label padding (from tap target) | 4dp |  |

#### Divided style

![Full-screen layout size and padding measurements in divided style.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17p24v-22-3P.png?alt=media&token=5c455e0b-4880-49d8-a4af-679db21c48e1>)

_Full-screen search padding and size measurements for divided style_

![Docked layout size and padding measurements in divided style.](<https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmm17p7ru-23-3P.png?alt=media&token=992a87d3-eac3-48d0-b226-932a3b1a9015>)

_Docked search padding and size measurements for divided style_
