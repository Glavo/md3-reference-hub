---
title: "Writing and text"
source_url: "https://m3.material.io/foundations/writing/text-truncation"
lastmod: "2025-09-26"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "foundations"
assets:
  - "assets/images/e229e5cc3f66-lwj5ao0k-18.png"
  - "assets/images/ac20efad34f3-lwj5b36c-19.png"
  - "assets/images/3b873d197d14-lwj5bfye-20.png"
  - "assets/images/20a328394471-lwj5c5w5-21.png"
  - "assets/videos/f7c1f26f2a25-lwj5e7k2-GM3-Foundations-WritingAndText-Accessibility-1-v01.mp4"
  - "assets/images/713796caf353-m0qvmgvh-24.png"
---

# Writing and text

Ensure text is helpful, clear, and resilient to change

## Text truncation

## Text truncation

Information should always be available to readers, even if text is truncated or wrapped.

### Background

Increased size of text, increased spacing between text, and translation into longer languages shouldn’t result in losing content. This requires designing for text truncation and creating designs flexible enough to accommodate any viewport size or increase in zoom. Some common methods of designing for larger text include text wrapping, increased height or width of components, and truncation with ellipses and hover or link.

### Requirements

Content, understandability, and functionality must not be lost when users modify their type settings. There may be exceptions to these requirements for non-Latin alphabet languages.

### Text wrapping

-   “Wrapped” text extends from one line to another, increasing the height of the text container
-   Text should be wrapped when it’s critical, to ensure understandability, or when there’s space in the component

![Body copy  text wrapped  inside a dialogue with an option to expand content.](../../../assets/images/e229e5cc3f66-lwj5ao0k-18.png)

_Wrap text, and if it still doesn’t fit, provide a way for users to see more_

![Body copy  text wrapped  inside a dialogue, cut off at the bottom, without an option to expand.](../../../assets/images/ac20efad34f3-lwj5b36c-19.png)

_Don’t cut off text without providing a way for users to view it_

### Height and width of components

-   Some components can extend vertically or horizontally for more text

![Layout of UI- cards of different sizes organized in a stacked grid.](../../../assets/images/3b873d197d14-lwj5bfye-20.png)

_Use flexible component containers that change size to fit their content_

![A stretched UI card  with a small headline and a large photograph. ](../../../assets/images/20a328394471-lwj5c5w5-21.png)

_Avoid setting text size limits that don’t fit the space in a component. Use all space available._

### Ellipses with hover or link

-   Truncated text can be replaced with an ellipsis if the text is available through a tooltip or link
-   Links can be used when they’re contained in the text that’s truncated, and when the link displays what's been truncated
-   If there's an ellipsis, but no way to show the truncated text, it is not accessible
-   Note that this option can add difficulty for some people

<video controls src="../../../assets/videos/f7c1f26f2a25-lwj5e7k2-GM3-Foundations-WritingAndText-Accessibility-1-v01.mp4" title="A calendar with a cursor hovering  over a day of the week displays a tooltip that reads “Tuesday.”"></video>

[Open video](../../../assets/videos/f7c1f26f2a25-lwj5e7k2-GM3-Foundations-WritingAndText-Accessibility-1-v01.mp4)

![On a multiple selection list, the marked checkbox’s label is truncated by an ellipsis.](../../../assets/images/713796caf353-m0qvmgvh-24.png)

_Don’t truncate content without providing users another way to see it_
