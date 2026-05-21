---
title: "Designing"
source_url: "https://m3.material.io/foundations/designing/overview"
lastmod: "2025-10-08"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "foundations"
assets:
  - "assets/images/411f00b5774d-lwj3q0f4-1.png"
  - "assets/images/d7acf0b9b075-lwj3qgpa-12.png"
  - "assets/images/c8b0293193f3-lwj3qva4-13.png"
---

# Designing

Implement intuitive, accessible layouts, considering structure, color, and flow

## Overview

Designing and implementing accessible product experiences involve a range of considerations. The framework Material uses draws on WCAG standards and industry best practices.

The three stages described in these tabs help **translate a visual UI into a text-based, linear user experience that maps to code**. Color and contrast also support accessible navigation.

### Accessibility markup

Accessibility markup is an integral part of creating documentation for design specs.

![Diagram of switches showing the Tab key changing the focus to the second switch and Space/Enter corresponding to changing the state of the switch. ](../../../assets/images/411f00b5774d-lwj3q0f4-1.png)

_1. Switch in the on state with visible focus 2. Switch in the off state with visible focus_

### Implementing accessibility

By using standard platform controls and semantic HTML (on the web), apps automatically contain the markup and code needed to work well with a platform’s assistive technology. Meeting each platform's accessibility standards and supporting its assistive technology (including shortcuts and structure) gives users an efficient experience.

![A dialog in a UI screen requesting user confirmation to discard calendar event](../../../assets/images/d7acf0b9b075-lwj3qgpa-12.png)

_Use native elements, such as the standard platform dialog_

![A banner requesting user confirmation to discard a calendar event](../../../assets/images/c8b0293193f3-lwj3qva4-13.png)

_Be wary of using non-standard elements, such as a non-standard platform dialog to perform a standard dialog task. It requires extra testing to work well with assistive technology._
