---
title: "Search"
source_url: "https://m3.material.io/components/search/accessibility"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/images/0f5ab2935961-mlgrjdxa-01.png"
  - "assets/images/4af7bd295e49-mlgrkpb6-02.png"
  - "assets/images/11a930c73337-mlgrl9ca-03.png"
  - "assets/images/efa4e59299fe-mlgrql4p-04.png"
  - "assets/images/6a291dd6b10c-mlgrt6xt-05.png"
  - "assets/images/d7df261d2039-mlgrwf25-06.png"
---

# Search

Search lets people enter a keyword or phrase to get relevant information

## Accessibility

## Use cases

People should be able to use assistive technology to:

-   Navigate to and focus on a search bar

-   View the hinted search text or persistent label

-   Input text and complete a search

-   Interact with a list of search suggestions and results

-   Clear the input text

## Interaction & style

### Autosuggest

When search suggestions and results appear, the screen reader must announce the change. This lets people know list items are available for selection.

![Hinted search text and autocomplete results on a mobile screen.](../../../assets/images/0f5ab2935961-mlgrjdxa-01.png)

_Autocomplete results should be announced by the screen reader_

## Initial focus

Initial focus lands on the first interactive element. This is often a leading icon button or text field. A leading icon button usually activates search directly or opens a navigation component.

![Search bar with a focused leading icon. ](../../../assets/images/4af7bd295e49-mlgrkpb6-02.png)

_Initial focus can land on a leading icon_

![Search bar with no leading icon. The text field is focused.](../../../assets/images/11a930c73337-mlgrl9ca-03.png)

_If there’s no leading icon, focus lands on the text field_

## Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| **Tab** or **Shift** + **Tab** | Navigate between interactive elements |
| **Space** or **Enter** | Activate the search text field for input |
| **Arrows** | Navigate between search result items |

## Labeling elements

The hinted search text should be used as the accessibility label describing the search bar.  

The role for the input field should be:

-   Android: **Text field**

-   iOS: **Search field**

![Search bar with “Label: Search messages” and “Role: Text field”.](../../../assets/images/efa4e59299fe-mlgrql4p-04.png)

_The accessibility label should match the hinted search text_

Leading and trailing icon buttons should be labeled according to their [accessibility guidance](../icon-buttons/accessibility.md).

![A search bar with accessibility labels for its leading icon button and trailing avatar.](../../../assets/images/6a291dd6b10c-mlgrt6xt-05.png)

_Use icon labels for icon buttons_

Search suggestions and results use the list component. Screen readers automatically announce the results as a list.

For accessibility labels, follow the [list accessibility guidelines](../lists/accessibility.md).

![A search bar on mobile, showing search results in a list.](../../../assets/images/d7df261d2039-mlgrwf25-06.png)

_Search suggestions and results are created using lists_
