---
title: "Carousel"
source_url: "https://m3.material.io/components/carousel/specs"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/f0e518717353-lyr7cydt-1.png"
  - "assets/images/2be75efbfb97-lyr7dtgs-2.png"
  - "assets/images/3695dcfc51fd-m8tafq6c-3.png"
  - "assets/images/0c336d4ca8f5-mi9mff4k-04-3P.png"
  - "assets/images/000adff82c57-lyr7hu8z-5.png"
  - "assets/images/846a186503f7-mi9meptr-06-3P.png"
  - "assets/images/4a744f97bb28-lyr7jh4c-7.png"
  - "assets/images/0a3859d1e761-mi9mdco2-08-3P.png"
  - "assets/images/c2fe72213218-mi9lyvnk-09-3P.png"
  - "assets/images/4ee2a855ee11-mi9m4p2v-10-3P.png"
  - "assets/images/3eeefcd335c2-lyr7l425-9.png"
  - "assets/images/62f9588f1cd5-mi9macpj-12-3P.png"
  - "assets/images/53b0df6870a5-lyr7mksj-11.png"
  - "assets/images/0d0e2776f890-mi9mb8nd-14-3P.png"
  - "assets/images/c7f20d827210-lyr7o850-13.png"
  - "assets/images/9295a1d247b7-mi9mbqt5-16-3P.png"
---

# Carousel

Carousels show a collection of items that can be scrolled on and off the screen

## Specs

![4 elements of a carousel.](../../../assets/images/f0e518717353-lyr7cydt-1.png)

_ContainerLarge carousel itemMedium carousel itemSmall carousel item_

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.

### TOKEN_TABLE

- **system:** Google Material 3

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/m3/pages/design-tokens/overview/)

![2 color roles of a carousel.](../../../assets/images/2be75efbfb97-lyr7dtgs-2.png)

_Carousel color roles used for light and dark schemes:ContainerSurface_

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](https://m3.material.io/m3/pages/interaction-states/overview)

![5 states of a carousel in light and dark schemes.](../../../assets/images/3695dcfc51fd-m8tafq6c-3.png)

_EnabledHoveredFocusedPressedDisabled_

## Carousel item dynamic widths

All kinds of carousel items dynamically adapt to the width of the container.

Large items have a customizable maximum width that's used to optimally fit carousel items into the available space.

Small carousel items have a minimum width of 40dp and a maximum width of 56dp.

Items change size as they move through the carousel layout.

![Measurements for a small carousel item.](../../../assets/images/0c336d4ca8f5-mi9mff4k-04-3P.png)

_Small carousel items have a minimum and maximum width_

## Multi-browse

The multi-browse layout shows at least one large, medium, and small carousel item.

![4 elements of a multi-browse carousel layout.](../../../assets/images/000adff82c57-lyr7hu8z-5.png)

_ContainerLarge carousel itemMedium carousel itemSmall carousel item_

### Measurements

![Measurements of a multi-browse carousel layout.](../../../assets/images/846a186503f7-mi9meptr-06-3P.png)

_Multi-browse carousels have padding on both sides of the container_

Attribute

Value

Alignment

Vertically centered

Leading/trailing padding

16dp

Top/bottom padding

8dp

Padding between elements

8dp

Large item width

Dynamic, or user-set

Medium item width

Dynamic

Small item width

40–56dp, dynamic

Item corner radius

28dp

## Uncontained

The uncontained layout shows items that scroll to the edge of the container.

![4 elements of an uncontained carousel layout.](../../../assets/images/4a744f97bb28-lyr7jh4c-7.png)

_ContainerLarge carousel item_

### Measurements

![Measurements of an uncontained carousel layout.](../../../assets/images/0a3859d1e761-mi9mdco2-08-3P.png)

_Uncontained carousel items bleed over the padding on each side when scrolling_

Attribute

Value

Alignment

Vertically centered

Leading padding

16dp

Top/bottom padding

8dp

Padding between elements

8dp

Item corner radius

28dp

## Uncontained mutli-aspect ratio

The uncontained multi-aspect ratio layout shows carousel items of various widths.

![4 elements of an uncontained carousel layout](../../../assets/images/c2fe72213218-mi9lyvnk-09-3P.png)

_ContainerCarousel item (16:9)Carousel item (9:16)Carousel item (1:1)Carousel item (3:4)_

### Measurements

![Image](../../../assets/images/4ee2a855ee11-mi9m4p2v-10-3P.png)

_Uncontained multi-aspect ratio carousels only have leading padding, with 8dp of padding between items._

Attribute

Value

Alignment

Vertically centered

Leading padding

16dp

Top/bottom padding

8dp

Padding between elements

8dp

Item corner radius

28dp

## Hero

The hero layout shows at least one large item and one small item.

![3 elements of a hero carousel layout.](../../../assets/images/3eeefcd335c2-lyr7l425-9.png)

_ContainerLarge carousel itemSmall carousel item_

### Measurements

![Measurements of a hero carousel layout.](../../../assets/images/62f9588f1cd5-mi9macpj-12-3P.png)

_Hero carousels have padding on both sides of the container_

Attribute

Value

Alignment

Vertically centered

Leading/Trailing padding

16dp

Top/bottom padding

8dp

Padding between elements

8dp

Large item width

Dynamic

Small item width

40-56dp, dynamic

Item corner radius

28dp

## Center-aligned hero

The center-aligned hero layout shows at least one large item and two small items.

![3 elements of a center-aligned hero carousel layout.](../../../assets/images/53b0df6870a5-lyr7mksj-11.png)

_ContainerLarge carousel itemSmall carousel item_

### Measurements

![Measurements of a center-aligned hero carousel layout.](../../../assets/images/0d0e2776f890-mi9mb8nd-14-3P.png)

_Center-aligned hero carousels have padding on both sides of the container_

Attribute

Value

Alignment

Vertically centered

Leading/Trailing padding

16dp

Top/bottom padding

8dp

Padding between elements

8dp

Large item width

Dynamic

Small item width

40-56dp, dynamic

Item corner radius

28dp

## Full-screen

The full-screen layout shows one edge-to-edge large item.

![2 elements of a full-screen carousel layout.](../../../assets/images/c7f20d827210-lyr7o850-13.png)

_ContainerLarge carousel item_

### Measurements

![Measurements of a full-screen carousel layout.](../../../assets/images/9295a1d247b7-mi9mbqt5-16-3P.png)

_Full-screen carousels fill the window edge-to-edge_

Attribute

Value

Alignment

Centered

Leading/Trailing padding

0dp

Top/bottom padding

0dp

Padding between elements

16dp
