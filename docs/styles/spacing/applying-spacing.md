---
title: "Spacing"
source_url: "https://m3.material.io/styles/spacing/applying-spacing"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "styles"
assets:
  - "assets/images/ca6f6d354d27-mp472g1b-01.png"
  - "assets/images/462d65dccc9a-mp475gv4-02.png"
  - "assets/images/dd50411d6b43-mp475tmf-03.png"
  - "assets/images/c34b81555882-mp4783qn-04.png"
  - "assets/images/60bbb4600ac1-mp47e5lm-08.png"
  - "assets/images/414617edd287-mp47j8c0-09.png"
  - "assets/videos/4a85efa69fb7-mp47k75s-GM3-Spacing-Applying-01-IA-v01.mp4"
  - "assets/videos/783da11efacd-mp47kp67-GM3-Spacing-Applying-02-IA-v01.mp4"
---

# Spacing

Spacing is the distance around and between component and layout elements

## Applying spacing

Material’s spacing system is intentionally designed to be a simple linear scale. Unlike the color system, which adjusts light and dark theme logic across all components at once, tailored spacing logic is built within each component.

![Component and system token mapping for the leading padding of three different icon buttons.](../../../assets/images/ca6f6d354d27-mp472g1b-01.png)

_Components have padding tokens that map to system tokens, which resolve to final values_

## What to use

### Pre-tokenized components

Some Material components map to spacing system tokens out of the box. This mapping can be customized by products to adapt to form factor or density.

Note: Work is ongoing to hook up all Material components to spacing tokens.

### System tokens

Spacing system tokens define the recommended values. Apply these to your product’s custom components and layouts, replacing any hardcoded values.

If the right system token doesn’t exist, [customize the system](applying-spacing.md#f1a6df59-f03d-4949-b1e6-d2dd4422c730) and add your own.

![Button with spacing tokens for all padding and gaps.](../../../assets/images/462d65dccc9a-mp475gv4-02.png)

_Many Material components map to spacing system tokens_

![A list of spacing system tokens from 100 to 400.](../../../assets/images/dd50411d6b43-mp475tmf-03.png)

_System tokens define all spacing values recommended by Material_

### Spacing complements text scaling

When text is scaled up to 200%, the same spacing should be preserved by default.

![A button with text scaled to 200% uses the same spacing tokens as an unscaled button.](../../../assets/images/c34b81555882-mp4783qn-04.png)

_Keep the same spacing when text scales_

## Customizing the system

The spacing system is meant to capture Material’s design intent, but customization is expected and often necessary. How you customize the system depends on your needs:

### Customize Material’s existing component spacing

Use this approach to customize how the base component appears across the entire product.

-   For example, change the “button top padding” mapping from **space125** to **space200** for a taller default button.

![A button’s vertical padding is changed from space125 to space200.](../../../assets/images/60bbb4600ac1-mp47e5lm-08.png)

_Customize component spacing to change it across the entire product_

### Add custom system spacing & patterns

Use this approach when you need spacing units beyond what Material provides, or have common adaptive spacing patterns in your product.

-   Follow the multiplier pattern for new space tokens, so **space225 = 18dp** (8dp x 2.25).

-   Spacing patterns unique to your product can be tokenized.


-   For example, if cards and sheets adapt horizontal content padding the same way, you could create a **surface content horizontal padding** token for that pattern.

![An outlined card and a bottom sheet both use the surface-content.padding.horizontal spacing pattern token.](../../../assets/images/414617edd287-mp47j8c0-09.png)

_For products that adapt spacing the exact same way, consider creating a token for that pattern_

### Add adaptive layout & density

Use this approach when you want the same core component, but want it to appear differently in specific situations, like screen sizes and density settings.

-   Adaptive layout: Map the spacing to different system tokens for each device type, such as mobile or desktop

-   Density: Adapt vertical padding to different spacing values for each setting

<video controls src="../../../assets/videos/4a85efa69fb7-mp47k75s-GM3-Spacing-Applying-01-IA-v01.mp4" title="A button’s spacing changes based on if it’s on mobile, desktop, cars, XR, or TVs."></video>

[Open video](../../../assets/videos/4a85efa69fb7-mp47k75s-GM3-Spacing-Applying-01-IA-v01.mp4)

<video controls src="../../../assets/videos/783da11efacd-mp47kp67-GM3-Spacing-Applying-02-IA-v01.mp4" title="A list item’s spacing changes based on density settings of 0 to -4."></video>

[Open video](../../../assets/videos/783da11efacd-mp47kp67-GM3-Spacing-Applying-02-IA-v01.mp4)
