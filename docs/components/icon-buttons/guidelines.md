---
title: "Icon buttons"
source_url: "https://m3.material.io/components/icon-buttons/guidelines"
lastmod: "2026-02-11"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/videos/f6089c53c42a-m34mdbc5-icon-buttons-A_2.mp4"
  - "assets/images/aa0f525d905b-m0c0dz7i-2.png"
  - "assets/images/1701a0a3e6bb-mal4e7zr-3.png"
  - "assets/images/e0f96b5c8069-m0c0hfou-4.png"
  - "assets/images/650772a5e2a6-m0c0ir4x-5.png"
  - "assets/videos/dcb9bdc4c4b7-m34mf3vo-icon-buttons-B_1.mp4"
  - "assets/images/e63d2c767c9e-m0c0lz0p-7.png"
  - "assets/images/c52e04c1ccf0-m5xjqza2-8.png"
  - "assets/images/e2846b2b69fa-m5xk0kj1-10.png"
  - "assets/images/92fc2677f868-macq65s8-11.png"
  - "assets/images/a698d92b9ac3-m0dw9g2n-11.png"
  - "assets/images/7cdd99ff4b5c-m0c0tpl2-12.png"
  - "assets/images/059c02239f4b-mal4l31k-14.png"
  - "assets/images/6dcd77e5d380-m0c0wdzg-13.png"
  - "assets/images/6d9f9b3d92ac-m0c0xugp-14.png"
  - "assets/images/f2512942eaad-m0c0z5xa-15.png"
  - "assets/videos/7344703378a4-m8q92iv1-Gm3_Expressive_Icon_buttons_guidelines_18_IA_v02.mp4"
  - "assets/videos/e052cf50db8e-m34mfwtu-icon-buttons-D-2.mp4"
  - "assets/videos/110a1b3e2625-m34mg1cq-icon-buttons-E-2.mp4"
  - "assets/videos/a2a80fd1e1ad-m0dz2qbs-icon-button-F.mp4"
---

# Icon buttons

Icon buttons help people take minor actions with one tap

## Guidelines

<video controls src="../../../assets/videos/f6089c53c42a-m34mdbc5-icon-buttons-A_2.mp4" title="Illustrative example of icon buttons in a variety of sizes and shapes."></video>

[Open video](../../../assets/videos/f6089c53c42a-m34mdbc5-icon-buttons-A_2.mp4)

## Usage

Use icon buttons to display common actions. There are two variants: **default** and **toggle**. 

-   Default icon buttons can open other elements, such as a menu or search.

-   Toggle icon buttons can represent binary actions that can be toggled on and off, such as **favorite** or **bookmark**.


Icon buttons can be placed directly on the background or in most container components, such as cards, app bars, and toolbars.

Multiple icon buttons can be placed in a standard button group to add interaction and motion between the buttons when pressed. [More about standard button groups](../button-groups/overview.md)

![Icon buttons in a toolbar.](../../../assets/images/aa0f525d905b-m0c0dz7i-2.png)

_Icon buttons can be used within other components, such as in a toolbar or card_

### Color

There are four icon button color styles, in order of emphasis:

1.  Filled
2.  Tonal
3.  Outlined
4.  Standard

For the highest emphasis, use the filled style. For the lowest emphasis, use standard.

![Diagram of default and toggle icon buttons in 4 color styles.](../../../assets/images/1701a0a3e6bb-mal4e7zr-3.png)

_The default (left) and toggle (right) icon buttons are available in all four color styles_

Use a filled, tonal, or outlined icon button when the button needs more visual separation from the background.

Choose the right style and emphasis for the situation.

![‘Heart” icon on a background about a cooking show.](../../../assets/images/e0f96b5c8069-m0c0hfou-4.png)

_Use icons with a background to make them easy to see on any surface_

![Text button and icon button in an app together.](../../../assets/images/650772a5e2a6-m0c0ir4x-5.png)

_When mixing button variants, use color styles to make the primary action clear_

Use the **filled** style for visual impact and key actions that require high emphasis.

Avoid overusing the filled style on a screen. Use them sparingly.

<video controls src="../../../assets/videos/dcb9bdc4c4b7-m34mf3vo-icon-buttons-B_1.mp4" title="Cards that swipe to reveal buttons with actions."></video>

[Open video](../../../assets/videos/dcb9bdc4c4b7-m34mf3vo-icon-buttons-B_1.mp4)

Use the **tonal** style as a middle ground between filled and outlined icon buttons. It’s useful for secondary actions paired with a high emphasis action.

For example, use the tonal style for actions like **Raise hand** in a video meeting. When selected, its visual emphasis is greater than the outlined menu button, but less than the filled **End call** button.

![Icons found on the bottom of a telephone screen, including a “hang up” icon with a bright red tone.](../../../assets/images/e63d2c767c9e-m0c0lz0p-7.png)

_Leverage the different color styles to establish emphasis and direct people to important actions_

Use the **outlined** style for medium-emphasis buttons. It’s useful when the button isn’t the main focus of the interaction, such as browsing through sets of cards.

Use the **standard** style for low-emphasis buttons, or when placing buttons on a colorful surface.

![Left and right arrow outlined icon buttons indicating that more cards are available to browse.  ](../../../assets/images/c52e04c1ccf0-m5xjqza2-8.png)

_Outlined buttons indicate that more content is available without grabbing attention_

### Size & width

Icon buttons are available in five different sizes:

-   Extra small - 32dp
-   Small - 40dp (default)
-   Medium - 56dp
-   Large - 96dp
-   Extra large - 136dp

And three widths:

-   Default
-   Narrow
-   Wide

Use size and width to provide emphasis and visual hierarchy in a page with multiple buttons. The main action should be the most visually prominent, whether through color or size, like starting and stopping a timer or playing and pausing a song.

![Variety of buttons in a timer app.](../../../assets/images/e2846b2b69fa-m5xk0kj1-10.png)

_Use different button colors and sizes to provide visual hierarchy and emphasize primary actions_

Not all icon buttons will need to emphasize a primary and secondary action. 

When buttons have a similar importance, they should be the same size.

![Uniform button sizes in a calculator app.](../../../assets/images/92fc2677f868-macq65s8-11.png)

_When everything should have the same emphasis, use icon buttons that are the same size_

## Anatomy

![Diagram of anatomy of outlined, standard, and filled icon buttons. ](../../../assets/images/a698d92b9ac3-m0dw9g2n-11.png)

_IconContainer_

### Icon

Icons visually communicate the button’s action. Their meaning should be clear and unambiguous. [Browse popular icons](https://fonts.google.com/icons)

Default icon buttons should use filled icons.

Toggle buttons should use an outlined icon when unselected, and a filled version of the icon when selected.

![“Heart” icon in a restaurant app.](../../../assets/images/7cdd99ff4b5c-m0c0tpl2-12.png)

_Ensure the meaning of the icon is clear, such as a heart indicating Favorite_

#### Icon accessibility requirements

For selected toggle buttons, if a filled version of an icon doesn’t exist, increase the icon weight to semibold. If semibold doesn’t provide enough visual change, use bold.

This is to ensure that selection is communicated through at least two properties, rather than just color. This requirement doesn't apply to default non-toggle buttons.

![Selected, semi-bold icon in a text editing app.](../../../assets/images/059c02239f4b-mal4l31k-14.png)

_Icons without a fill should be semibolded when selected_

### Container

The container provides increased contrast and hierarchy in places that need more visual separation from the background or other elements.

![Container separating a video call preview with actions you can take.](../../../assets/images/6dcd77e5d380-m0c0wdzg-13.png)

_The container provides visual separation from the background image_

## Placement

Icon buttons are commonly used in other components, such as app bars and cards. 

These buttons should be used for common, easily understandable actions. 

Only use a few icon buttons at once.

![App bar with icon buttons.](../../../assets/images/6d9f9b3d92ac-m0c0xugp-14.png)

_App bars often contain icon buttons_

In dense layouts, group popular actions by placing many icon buttons next to each other in components like a toolbar or button group. 

These components draw attention or add interaction between buttons.

![Toolbar with icon buttons and FAB.](../../../assets/images/f2512942eaad-m0c0z5xa-15.png)

_A toolbar is a collection of icon buttons and other components_

## Behavior

### Hover

On hover, the icon button displays a tooltip describing its action, rather than the name of the icon itself.

<video controls src="../../../assets/videos/7344703378a4-m8q92iv1-Gm3_Expressive_Icon_buttons_guidelines_18_IA_v02.mp4" title="The text Add to favorites appears as a tooltip when the curser is placed on a heart shaped icon. "></video>

[Open video](../../../assets/videos/7344703378a4-m8q92iv1-Gm3_Expressive_Icon_buttons_guidelines_18_IA_v02.mp4)

### Selection

Toggle icon buttons allow a single choice to be selected or deselected, such as adding or removing something from favorites. 

When placed in a button group, icon buttons change shape to help the selected button stand out.

[More on button groups](../button-groups/overview.md)

<video controls src="../../../assets/videos/e052cf50db8e-m34mfwtu-icon-buttons-D-2.mp4" title="A star-shaped toggle icon button to add or remove a song from favorites.
"></video>

[Open video](../../../assets/videos/e052cf50db8e-m34mfwtu-icon-buttons-D-2.mp4)

<video controls src="../../../assets/videos/110a1b3e2625-m34mg1cq-icon-buttons-E-2.mp4" title="A toggle icon button to open an overflow menu."></video>

[Open video](../../../assets/videos/110a1b3e2625-m34mg1cq-icon-buttons-E-2.mp4)

The icon should become filled to represent selection.

If a filled version of the icon doesn't exist, use semibold weight instead.

<video controls src="../../../assets/videos/a2a80fd1e1ad-m0dz2qbs-icon-button-F.mp4" title="An outlined-style bookmark icon in an unselected state changing to a filled-style selected state."></video>

[Open video](../../../assets/videos/a2a80fd1e1ad-m0dz2qbs-icon-button-F.mp4)
