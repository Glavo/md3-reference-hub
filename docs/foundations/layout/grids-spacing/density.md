---
title: "Grids &amp; spacing"
source_url: "https://m3.material.io/foundations/layout/grids-spacing/density"
lastmod: "2026-05-15"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "foundations"
assets:
  - "assets/videos/8afc04a4ecf5-mp5c4fqq-m6fec25z-GM3-Components-Density-2-v03.mp4"
  - "assets/videos/18f87849bcf4-mp5c5sj5-m6fedlg1-GM3-Components-Density-1-v02.mp4"
  - "assets/videos/b04d4bed8621-mp5but2k-m6feg3jn-GM3-Components-Density-3-v02.mp4"
  - "assets/images/c75aa85965a6-mp5bjd4j-03.png"
  - "assets/images/8088a95ed0ef-mp5bh69d-04.png"
  - "assets/images/cc4e107e53d6-mp5bi6cs-05.png"
  - "assets/images/29a86cba929e-mp5b9chq-07.png"
  - "assets/images/68493922f64d-mp5b68d4-08.png"
  - "assets/images/ba0897910e99-mp5b7f5f-09.png"
  - "assets/images/7528bf2a13bd-mp5b2pqp-10-dont.png"
  - "assets/images/2462dfafc05a-mp5b47ji-11-dont.png"
  - "assets/videos/7f630350f999-m7fb8wiw-GM3_Expressive_Density_12a_IA_v03.mp4"
  - "assets/images/2c933cf869cd-mp58kiob-13-caution.png"
  - "assets/images/f2e83cd61354-mp58gdij-14.png"
  - "assets/images/4eaa3f116fd9-mp58i79t-15.png"
  - "assets/images/60e62e8ca1cf-mp586kzq-16.png"
  - "assets/images/bdb1d5ac9809-mp587qzn-17.png"
  - "assets/images/7294e26c094e-mp57upl7-18.png"
  - "assets/images/8b70ea996968-mp57w9fy-19.png"
---

# Grids &amp; spacing

Grids and spacing organize content and actions for any layout

## Density

-   Information density is the consideration of the amount of information visible on the screen

-   The default target size should be at least 48x48 CSS pixels

-   People can change density as long as the density controls are accessible

-   Apply density thoughtfully; not every layout needs it

-   Layout and component scaling (component adaptation or component density) can allow people to scan, view, or compare more information at once

<video controls src="../../../../assets/videos/8afc04a4ecf5-mp5c4fqq-m6fec25z-GM3-Components-Density-2-v03.mp4" title="A website design with a denser arrangement of text and graphics."></video>

[Open video](../../../../assets/videos/8afc04a4ecf5-mp5c4fqq-m6fec25z-GM3-Components-Density-2-v03.mp4)

<video controls src="../../../../assets/videos/18f87849bcf4-mp5c5sj5-m6fedlg1-GM3-Components-Density-1-v02.mp4" title="5 components scaling with multiple size examples."></video>

[Open video](../../../../assets/videos/18f87849bcf4-mp5c5sj5-m6fedlg1-GM3-Components-Density-1-v02.mp4)

**Information density**

-   Information density can be achieved through layout and design decisions without using component scaling

-   Some people may not benefit from increased density

**Component scaling**

-   Components can adapt and change dimensions to help people scan, view, or compare different amounts of information

-   Don't apply component scaling by default if it would result in a target below 48x48 CSS pixels

<video controls src="../../../../assets/videos/b04d4bed8621-mp5but2k-m6feg3jn-GM3-Components-Density-3-v02.mp4" title="An email app with “Appearance settings” open to change information density between cozy, comfortable, and compact."></video>

[Open video](../../../../assets/videos/b04d4bed8621-mp5but2k-m6feg3jn-GM3-Components-Density-3-v02.mp4)

## Information density

Information density refers to the amount of content (such as text, images, or videos) in a given space.

A layout’s spacing dimensions, including margins, spacers, and padding, can change to increase or decrease its information density. High density layouts are useful when people need to scan, view, or compare a lot of information, such as in a data table. Increasing the layout density of lists, tables, and long forms makes more content available on-screen.

Consider density settings in the context of a device. Although a person may prefer a denser layout for desktop, they may not for mobile. Density shouldn’t automatically change across breakpoints or orientation unless a person changes it.

![2 layouts: 1 with low density and 1 with high density.](../../../../assets/images/c75aa85965a6-mp5bjd4j-03.png)

_Consider using higher density information design when people need to scan lots of information_

![News website on desktop displaying a high information density. ](../../../../assets/images/8088a95ed0ef-mp5bh69d-04.png)

_Consider the amount and priority of information on-screen. Higher density can be useful for data-rich products where people expect to scan lots of information quickly. Examples: News, financial portals, dashboards_

![News website on desktop displaying a low information density.](../../../../assets/images/cc4e107e53d6-mp5bi6cs-05.png)

_Lower density can be better for sites prioritizing aesthetics, a focused message, less information, or easier navigation_

## Component scaling

The component density scale controls the internal spacing of individual components.

The density scale is numbered, starting at 0 for a component’s default density. The scale moves to negative numbers (-1, -2, -3) as space decreases, creating higher density.

Higher density is typically applied by decreasing the top and bottom padding or overall height by 4dp.

![3 buttons with densities  of 0, -1, -2.](../../../../assets/images/29a86cba929e-mp5b9chq-07.png)

_Apply component density based on the needs and layout of a design_

Center the grouped element within the component container.

Text size shouldn’t change as the container size scales.

![Text field showing 20dp between label and input](../../../../assets/images/68493922f64d-mp5b68d4-08.png)

_The measurement between the label and input is 20dp_

![Parent container showing label above input.](../../../../assets/images/ba0897910e99-mp5b7f5f-09.png)

_The label and input are centered within their parent container_

![Dropdown menu with high density items and selectable space height of 38dp.](../../../../assets/images/7528bf2a13bd-mp5b2pqp-10-dont.png)

_Don’t increase density in UIs that involve focused tasks, such as selecting from a menu. It reduces usability by limiting selectable space._

![Single-line snackbar with high density.](../../../../assets/images/2462dfafc05a-mp5b47ji-11-dont.png)

_Don't increase the density in components that alert a person of changes, such as snackbars or dialogs_

### Avoid applying component scaling by default

People should be able to **opt in** to dense layouts and components.

To ensure density settings can be easily reverted, settings interactions must use default target sizes (48x48 CSS pixels).  

Don't scale layouts below 48x48dp by default.

<video controls src="../../../../assets/videos/7f630350f999-m7fb8wiw-GM3_Expressive_Density_12a_IA_v03.mp4" title="A density menu with large, medium, and small options to customize the screen layout of a table on desktop."></video>

[Open video](../../../../assets/videos/7f630350f999-m7fb8wiw-GM3_Expressive_Density_12a_IA_v03.mp4)

## Targets

Dense components can be less accessible because interactive elements are smaller, so use caution when increasing information density.

![Selectable target of only 40dp.](../../../../assets/images/2c933cf869cd-mp58kiob-13-caution.png)

_Use caution when applying component scaling where selectable targets will be reduced to less than 48x48dp. Only apply density where it provides a better experience._

Use caution when applying density to interaction targets. Accessible targets should retain a minimum of 48x48dp, even if the visual element, such as an icon, is smaller.

![Settings button icon is 24x24dp, but has interaction target of 48x48dp.](../../../../assets/images/f2e83cd61354-mp58gdij-14.png)

_The target should remain 48x48dp, even if the icon is smaller_

![Button with height of 36dp and interaction target of 48dp.](../../../../assets/images/4eaa3f116fd9-mp58i79t-15.png)

_The interaction target of a common button can be larger, as long as it meets the 48x48dp minimum size_

## Pixel density

Pixel density is the number of pixels per inch. High-density screens have more pixels per inch than low-density ones. Elements with the same pixel dimensions appear larger on low-density screens and smaller on high-density screens.

To calculate pixel density:

Pixel density = Screen width (or height) in pixels / Screen width (or height) in inches

![Magnified UI element  showing a high number of pixels in the focus area.](../../../../assets/images/60e62e8ca1cf-mp586kzq-16.png)

_High-density elements have more pixels per inch_

![Magnified UI element  showing a low number of pixels in the focus area.](../../../../assets/images/bdb1d5ac9809-mp587qzn-17.png)

_Low-density elements have fewer pixels per inch_

### Density-independent pixels

Density-independent pixels, written as dp, are flexible units that scale to have uniform dimensions on any screen. They provide a flexible way to accommodate a design across devices. The Material design system uses density-independent pixels to display elements consistently on screens with different densities.

A dp is equal to one physical pixel on a screen with a density of 160.

To calculate dp:
dp = (width in pixels \* 160) / screen density

![Screen with grid representing a low number of pixels.](../../../../assets/images/7294e26c094e-mp57upl7-18.png)

_Low-density screen displayed with density independence_

![Screen with grid representing a high number of pixels.](../../../../assets/images/8b70ea996968-mp57w9fy-19.png)

_High-density screen displayed with density independence_

| Screen physical width | Screen density | Screen width in pixels | Screen width in dps |
| --- | --- | --- | --- |
| 1.5 in | 120 | 180 px | 240dp |
| 1.5 in | 160 | 240 px |  |
| 1.5 in | 240 | 360 px |  |
