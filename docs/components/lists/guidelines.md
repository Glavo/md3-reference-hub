---
title: "Lists"
source_url: "https://m3.material.io/components/lists/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/74fff6d874e2-miq1b43h-frame.png"
  - "assets/images/4a9930535305-miewlynz-01.png"
  - "assets/images/602a26f6ba55-miewcuoc-02.png"
  - "assets/images/b0aa5a55a6b5-miewi9tz-03.png"
  - "assets/images/892d0ac2280d-miewmxat-04.png"
  - "assets/images/ba6ab990be9c-miewpdzm-05.png"
  - "assets/images/85e13e8531d9-miewsyte-06.png"
  - "assets/videos/5c4644db8ecb-miewwh4p-GM3-Expressive-Guidelines-07-v02.mp4"
  - "assets/images/7b7ea5582d37-miex0v5m-08.png"
  - "assets/images/356524314c6a-miexc5t2-9.png"
  - "assets/images/0936cc1efa93-miexhs7r-10.png"
  - "assets/images/73dfff7599d9-miexip9k-11.png"
  - "assets/images/65ffbd345c9d-miexkoay-12.png"
  - "assets/images/6a92f0772e2a-miexnuvs-13.png"
  - "assets/images/67d5ecf980a2-miexoaw7-14.png"
  - "assets/images/d925b77e4529-miextt91-15.png"
  - "assets/images/6697e28ef7aa-miexzfsy-16.png"
  - "assets/images/2001aa9206fd-miezuscb-17_do.png"
  - "assets/images/36cf999ae118-miezvi6d-18caution.png"
  - "assets/images/7b085a909f1b-miezxs4c-19_do.png"
  - "assets/images/b716cb5649b2-miezzrzc-20_do.png"
  - "assets/images/116dbc701674-mif01yxf-21_dont.png"
  - "assets/videos/dbb52655cce4-mif043uk-GM3-Expressive-Guidelines-22-v02.mp4"
  - "assets/videos/d56625eb3cbe-mif0dffm-GM3-Expressive-Guidelines-23-v02.mp4"
  - "assets/videos/109dbe74f03c-mif0fb1t-GM3-Expressive-Guidelines-24-v02.mp4"
  - "assets/videos/84a77c51fa29-mif0hg20-GM3-Expressive-Guidelines-25-v01.mp4"
  - "assets/images/b3f9c667ac79-mif0jzwl-26.png"
  - "assets/videos/a5b0cf01721b-mif0mtl7-GM3-Expressive-Guidelines-27-v02.mp4"
  - "assets/videos/de9fe073a6a1-mif0onle-GM3-Expressive-Guidelines-28-v02.mp4"
  - "assets/images/45cf85fd0616-mielqxgm-29.png"
  - "assets/images/6d0f1297c6e4-mielw5u4-30.png"
  - "assets/images/19c007732aeb-mielzpxu-31.png"
  - "assets/images/153627569f49-miem2107-32.png"
  - "assets/images/ba9828610a91-miem457u-33.png"
  - "assets/videos/d42240d6f62a-miem9cox-GM3-Expressive-Guidelines-34-v02.mp4"
---

# Lists

Lists are continuous, vertical indexes of text or images.

![Lists](../../../assets/images/74fff6d874e2-miq1b43h-frame.png)

## Guidelines

![3 list items show different layout options, with varying sizes of elements in the leading slot.](../../../assets/images/4a9930535305-miewlynz-01.png)

_Lists can include a range of layout combinations: Leading images, videos, icons, or avatars; Trailing text, icons, or icon buttons_

## Usage

Lists are vertical groups of text, icons, images, and other elements, optimized for reading comprehension.

List items can contain multiple actions at once, like selection, icon buttons, overflow menus, and more.

![3 list items with avatars using different expressive shapes.](../../../assets/images/602a26f6ba55-miewcuoc-02.png)

_A clear visual hierarchy makes lists easy to scan and read_

Use lists for communicating or selecting discrete items, such as choosing from a set of colors.

![A list of colors with Periwinkle selected.](../../../assets/images/b0aa5a55a6b5-miewi9tz-03.png)

_Lists are an organized way to add imagery and supporting elements to selection. In this color selection example, the list contains color swatches, color names, and a checkbox action._

A list should be easy to scan. Any element can be used to anchor and align list item content.

Place supporting visuals and primary text in the same position in each list item.

Don’t vary the position of elements within a list.

![4 versions of the same list highlighting avatar and text alignment.](../../../assets/images/892d0ac2280d-miewmxat-04.png)

_Sample list; Content placement in a row; Supporting visuals are aligned for easy scanning; Primary text is aligned for easy scanning_

List items can adapt to different lengths of text:

**Label text only
**A list item can contain a single line of label text. If the text doesn’t fit on one line, it can wrap or be truncated.

**Label text with supporting text
**A list item can include supporting text below the label text. Both the label and supporting text can wrap or be truncated.

![3 lists show items with label text only, label text with 1-line of supporting text, and label text with 2-lines of supporting text.](../../../assets/images/ba6ab990be9c-miewpdzm-05.png)

_Three examples of list item sizes: Label text only; Label text with supporting text on one line; Label text with supporting text that wraps to two lines_

## Anatomy

![List diagram with 10 elements.](../../../assets/images/85e13e8531d9-miewsyte-06.png)

_Container and label text are required. All other elements are optional: Container; Label text; Supporting text; Trailing text; Trailing icon; Trailing selection control - checkbox, radio button, switch; Leading avatar container; Leading avatar text; Leading icon; Leading media - image or video_

### Container

List containers hold all list items and their elements. List item size is determined by the tallest element within the list item. [See layout measurements](specs.md#1824b94d-7d17-4a29-889f-d277037a1313)  

When a list item features an image, consider customizing the container color to use a content-based color scheme. This should be applied to either the enabled state or for an interaction.

<video controls src="../../../assets/videos/5c4644db8ecb-miewwh4p-GM3-Expressive-Guidelines-07-v02.mp4" title="A song list with a leading images. When selected, a list item’s container matches the image’s color scheme."></video>

[Open video](../../../assets/videos/5c4644db8ecb-miewwh4p-GM3-Expressive-Guidelines-07-v02.mp4)

### Label & supporting text

Keep label text brief.   

To ensure list items are scannable:

-   Limit supporting text to one to three lines

-   Truncate supporting text, depending on screen size


[See adaptive guidance](guidelines.md#561cc637-aa43-4055-be1e-0716faeef7af)

![A list item with a leading image, concise label text “Art events”, and 2 lines of truncated supporting text.](../../../assets/images/7b7ea5582d37-miex0v5m-08.png)

_Limit supporting text to one to three lines_

### Icons

**Leading icon**
A leading icon should provide a quick visual cue that relates to the item's label text, helping people scan the list.

**Trailing icon**
A trailing icon is often used to communicate status or indicate an action, like **Show more**.

![Leading icons should relate to the label text
A list of items with leading and trailing icons on a mobile device.](../../../assets/images/356524314c6a-miexc5t2-9.png)

_Leading icons should relate to the label text; Trailing icons can communicate an action_

### Leading media

List items can contain a leading avatar, image, or video. Anchor visuals to the leading edge of the list to improve scannability.

Leading video thumbnails can open a video player or even play within the list.

![A list of plants with images at leading edge.](../../../assets/images/0936cc1efa93-miexhs7r-10.png)

_Place supporting visuals, like thumbnails, at the leading edge of a row to improve scannability_

![A list of plants with an image in the middle of the row makes it difficult to align the name and price.](../../../assets/images/73dfff7599d9-miexip9k-11.png)

_Avoid placing visuals in the center of a row because it makes the list difficult to scan_

**Avatars**
List items can include images in circular or expressive shapes to represent a person or entity.

Use square or rectangular images for other content, such as products or videos.

![List of contacts with avatars with a circular, expressive crop to indicate a person.](../../../assets/images/65ffbd345c9d-miexkoay-12.png)

_Use an expressive, circular avatar to represent a person or entity_

**Primary & secondary actions**

Use spacing to draw attention to the most important aspect of the list item, usually the primary action area or key content.

![A folder icon in the primary action area takes up the full height of the list item.](../../../assets/images/6a92f0772e2a-miexnuvs-13.png)

_The primary action takes up more space: 1. Primary action area 2. Secondary action area_

![A list item has an avatar in the more distinguishing content position on the left, and “15 min” trailing text on the right.](../../../assets/images/67d5ecf980a2-miexoaw7-14.png)

_Align content by importance: 1. More distinguishing content 2. Less distinguishing content_

### Trailing text

Trailing text can provide additional meta-information about a list item, such as a price, count, or other details.

![The date “Nov 17” as trailing text in a concert ticket list item.](../../../assets/images/d925b77e4529-miextt91-15.png)

_Use trailing text for supplemental details, like a price, count, or date_

### Selection controls

Selection controls display list item actions. Position controls at the leading or trailing end of a list item:

-   Use checkboxes to select multiple items

-   Use switches to toggle settings on or off

-   Use radio buttons to select a single item

![3 lists with different selection controls.](../../../assets/images/6697e28ef7aa-miexzfsy-16.png)

_List items with: Checkboxes; Switches; Radio buttons_

### Gaps & dividers

Gaps or dividers can separate lists into items and groups:

-   Use **gaps** for contained lists. Gaps leverage expressive shape and containment tactics.

-   Limit **dividers** to uncontained or complex lists, only when a stronger visual separation is necessary.

![Filled list items in an inbox separated by gaps.](../../../assets/images/2001aa9206fd-miezuscb-17_do.png)

_Use segmented gaps and filled list items to define a list group_

![An uncontained list with city names separated by dividers.](../../../assets/images/36cf999ae118-miezvi6d-18caution.png)

_Limit the use of dividers to uncontained lists_

## Adaptive design

### Line length

In fluid layouts, avoid excessively long lines of text when expanding containers and text-heavy components. This often means changing margins and typography properties as the container scales.

![4 list items with 2-line supporting text have adjusted margins to preserve readability.](../../../assets/images/7b085a909f1b-miezxs4c-19_do.png)

_Adjust margins to create a more comfortable line length for reading_

Adapt the width of the list container based on a line’s length, or by switching to a multi-column layout.

![List items in a 2-column layout, with each item showing text preview.](../../../assets/images/b716cb5649b2-miezzrzc-20_do.png)

_A multi-column layout can help break up content when needed_

The ideal line length for text is typically between 40 to 60 characters, but large-screen devices can accommodate up to 120 characters per line. If a line of text is close to 120 characters in length, consider increasing the line height to improve readability .

![List items with elongated line length.](../../../assets/images/116dbc701674-mif01yxf-21_dont.png)

_Don’t scale components without adjusting other affected areas of the screen, such as text length. This can result in line lengths that make reading difficult._

A list in a compact window can become part of a two-column layout in an expanded window, adjusting the amount of information shown in each list item.

<video controls src="../../../assets/videos/dbb52655cce4-mif043uk-GM3-Expressive-Guidelines-22-v02.mp4" title="Animation of a list on mobile and the same list adapted into a 2-column layout on desktop."></video>

[Open video](../../../assets/videos/dbb52655cce4-mif043uk-GM3-Expressive-Guidelines-22-v02.mp4)

### Adapt list elements & layout

Lists can change their layout to adapt to different window sizes. This affects the size and placement of content.

For example, a list in a compact window can adjust margins, spacing, or density to better fit an expanded window.

<video controls src="../../../assets/videos/d56625eb3cbe-mif0dffm-GM3-Expressive-Guidelines-23-v02.mp4" title="Photo list on mobile expands to allow larger images and longer descriptions on a tablet."></video>

[Open video](../../../assets/videos/d56625eb3cbe-mif0dffm-GM3-Expressive-Guidelines-23-v02.mp4)

### Swap components

Lists are just a compact composition of images, text, and actions. Other components, like cards and carousels, use the same elements but take up more space.   

On large screens, consider swapping a list to a component with a similar purpose to take advantage of available space.

<video controls src="../../../assets/videos/109dbe74f03c-mif0fb1t-GM3-Expressive-Guidelines-24-v02.mp4" title="A mobile photo list changes into cards in a larger window size."></video>

[Open video](../../../assets/videos/109dbe74f03c-mif0fb1t-GM3-Expressive-Guidelines-24-v02.mp4)

### Compact window size

Lists should extend edge-to-edge in compact windows. Selecting a list item should open a page with the details.

<video controls src="../../../assets/videos/84a77c51fa29-mif0hg20-GM3-Expressive-Guidelines-25-v01.mp4" title="When opened, a mobile photo list item expands to fill the width of the screen."></video>

[Open video](../../../assets/videos/84a77c51fa29-mif0hg20-GM3-Expressive-Guidelines-25-v01.mp4)

### Medium & expanded window sizes

Medium and expanded window sizes, such as tablet and desktop screens, can display primary and secondary content in the same view.

For example, a list and the detailed information can appear side-by-side.

![A larger screen displays list items and a detailed expansion of one item on the same screen.](../../../assets/images/b3f9c667ac79-mif0jzwl-26.png)

_On larger screens, a list-detail view can be more appropriate_

On a larger window size, a list may transform into a carousel.

<video controls src="../../../assets/videos/a5b0cf01721b-mif0mtl7-GM3-Expressive-Guidelines-27-v02.mp4" title="A photo list with thumbnails in a compact window expands into a carousel with large images in an expanded window."></video>

[Open video](../../../assets/videos/a5b0cf01721b-mif0mtl7-GM3-Expressive-Guidelines-27-v02.mp4)

Lists can also show more or less content as they scale up and down in size.

For example, a list item can reveal more content when the component expands.

<video controls src="../../../assets/videos/de9fe073a6a1-mif0onle-GM3-Expressive-Guidelines-28-v02.mp4" title="A list expands from a compact to a medium window. The expanded items show supporting text."></video>

[Open video](../../../assets/videos/de9fe073a6a1-mif0onle-GM3-Expressive-Guidelines-28-v02.mp4)

## Behavior

### List selection modes

The selected state applies to the entire list item. For example, when an item with a checkbox is selected, both the list item and the checkbox show a selected state.

**Single-select**

Lists can feature a single-selection component such as a radio button.

Single-select list items:

-   Don’t support multi-actions

-   Can’t have secondary nested actions

-   Shouldn’t use checkboxes

![A 3-item list with radio buttons, with 1 item selected.](../../../assets/images/45cf85fd0616-mielqxgm-29.png)

_Use radio buttons to allow a single selection in a list_

**Multi-select**

Multi-select lists allow for multiple list items to be toggled on.

Multi-select list items:

-   Pair well with checkboxes and switches

-   Can’t have secondary nested actions

-   Shouldn’t use radio buttons

![A 3-item list with checkboxes and 2 items selected.](../../../assets/images/6d0f1297c6e4-mielw5u4-30.png)

_Use checkboxes or switches for multi-select lists_

**Single-action**

In a single-action list, the entire list item performs one action, such as navigating to a new page.

Single-action list items:

-   Can’t have secondary nested actions

-   Can’t be toggled into a persistent selected state

![A 3-item list where each item is a single tappable area.](../../../assets/images/19c007732aeb-mielzpxu-31.png)

_Use a single-action list for a primary action, like navigation_

**Multi-action**

Multi-action lists can support multiple nested actions within a list item.

The primary action should take up the majority of the space in the leading and content positions.

Place supplementary actions, like a bookmark or menu, in the trailing position.  

[More on multi-action accessibility](accessibility.md#b69b89a9-7ca0-4249-b25b-2d0c85a41dc0)

![A 3-item song list where each item has 2 trailing icons: a bookmark and overflow menu.](../../../assets/images/153627569f49-miem2107-32.png)

_Place supplementary actions in the trailing position of a list item_

**Non-interactive**

Non-interactive lists can organize information in a scannable way. They don’t perform any actions and can’t be selected.

![A 3-item non-interactive list showing a historic timeline of space travel.](../../../assets/images/ba9828610a91-miem457u-33.png)

_Use non-interactive lists to make information easy to scan_

### List interactions

**Expand & collapse**

List items containing other list items can expand and collapse in a folder-like manner, to reveal or hide content. 

Tapping a list item expands it vertically across the entire screen using a container transform transition pattern.

<video controls src="../../../assets/videos/d42240d6f62a-miem9cox-GM3-Expressive-Guidelines-34-v02.mp4" title="On a to do list, an item expands, revealing nested child items."></video>

[Open video](../../../assets/videos/d42240d6f62a-miem9cox-GM3-Expressive-Guidelines-34-v02.mp4)
