---
title: "Search"
source_url: "https://m3.material.io/components/search/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "components"
assets:
  - "assets/videos/fa840541e836-mlfkefwf-GM3-Search-Bar-Guidelines-01-v02.mp4"
  - "assets/images/02395ed63864-mlfkhcoi-02.png"
  - "assets/images/f1cccaebb505-mlfkodgz-03.png"
  - "assets/images/a341bd549244-mlfkpcee-04.png"
  - "assets/images/e6b121bda848-mlfkq5y2-05.png"
  - "assets/images/41e586affee4-mlfkz1fo-06.png"
  - "assets/images/c0d8b779a94d-mlfkth1m-07.png"
  - "assets/images/da4c4e0d8252-mlflqra9-09.png"
  - "assets/images/9a97eaba0869-mlfm1yld-10.png"
  - "assets/images/02e3a484782c-mlfmbc2s-21.png"
  - "assets/images/94e6244a0a0f-mlfmc255-22.png"
  - "assets/images/1ff8cd236458-mlfmcmiv-23.png"
  - "assets/images/8b47ab87fb29-mlfmf49n-08.png"
  - "assets/images/f7ac5940910f-mlfmg7bg-07.png"
  - "assets/images/1ea04606732a-mlgr3p93-11.png"
  - "assets/images/83bc4a0a2baf-mlfmu14l-13.png"
  - "assets/images/a4a5761bace3-mlfmvyj4-14.png"
  - "assets/images/d071fc7d5fbf-mlfn371r-15.png"
  - "assets/images/5f792375f5ee-mlfn8hr6-16.png"
  - "assets/images/cf08ead7b3ea-mlfnb1td-17.png"
  - "assets/images/e89cb00490dc-mlfncrm8-18.png"
  - "assets/images/1ee6290b89d8-mlfndiyw-19-VQA.png"
  - "assets/videos/767a51c45738-mlfngra0-GM3-Search-Bar-Guidelines-20-v02.mp4"
  - "assets/videos/2b93d4c1b026-mlfnplfk-GM3-Search-Bar-Guidelines-24-v01.mp4"
  - "assets/images/4244901ebb6c-mlfnv4wh-25.png"
  - "assets/videos/5e7e702516d5-mlfo0cyf-GM3-Search-Bar-Guidelines-26-v02.mp4"
  - "assets/videos/49bdf0611a2a-mlgr7r58-GM3-Search-Bar-Guidelines-27-v02.mp4"
  - "assets/videos/18636f3ff023-mlgr95m2-GM3-Search-Bar-Guidelines-30-v01.mp4"
  - "assets/videos/a41c05e8842f-mlgrahif-GM3-Search-Bar-Guidelines-29-v01.mp4"
  - "assets/images/5ec379fcbc0d-mlgrceqs-32.png"
  - "assets/videos/951908e75e03-mlgrdhl9-GM3-Search-Bar-Guidelines-33-v02.mp4"
  - "assets/videos/fbf421fb5345-mlgrejsr-GM3-Search-Bar-Guidelines-34-v02.mp4"
---

# Search

Search lets people enter a keyword or phrase to get relevant information

## Guidelines

<video controls src="../../../assets/videos/fa840541e836-mlfkefwf-GM3-Search-Bar-Guidelines-01-v02.mp4" title="A mobile UI search with hinted text “Search recipes”, “Mexican dishes” is entered, and a list of recipe results appear."></video>

[Open video](../../../assets/videos/fa840541e836-mlfkefwf-GM3-Search-Bar-Guidelines-01-v02.mp4)

## Usage

Search helps people find information quickly.

Use search for products with many items to manage, such as files or messages.

![Mobile UI shows a search bar at the top of a message inbox.](../../../assets/images/02395ed63864-mlfkhcoi-02.png)

_Search helps people find information in large inboxes like messages or emails_

### Different ways to search

The search entry point is dependent on a product’s needs, and should be easy to find:

-   Search bar: Use to search contents in a specific view, like **Search your messages**

-   Search app bar: Use this app bar variant when search is the primary, global function

-   Search icon button: Use when search is a secondary action or not the main focus

![A mobile app with a search bar below the page title.](../../../assets/images/f1cccaebb505-mlfkodgz-03.png)

_Add a search bar below a title to search specific content_

![A mobile app with a search app bar.](../../../assets/images/a341bd549244-mlfkpcee-04.png)

_For global search, use a persistent search app bar, integrated into an app bar_

![A mobile app with a magnifying glass icon on the leading side of the app bar.](../../../assets/images/e6b121bda848-mlfkq5y2-05.png)

_Use a search icon button when search is a secondary action_

### Focused search

When a search entry point is selected, it opens focused search.  

-   Search suggestions can appear before text is entered

-   Search results can show as someone is typing or after a search is executed

-   Individual elements maintain their own interaction states when search is focused


[More on search states](specs.md#65c58b10-4569-43d6-9c11-64a5b02f3099)

![Focused search with a list of suggestions on a mobile screen.](../../../assets/images/41e586affee4-mlfkz1fo-06.png)

_When focused, a search bar expands to show search suggestions or results in a list_

If search is the primary action, focused search can be a standalone destination reached from a navigation bar.

![Focused search on a mobile screen with a list of suggested contacts.](../../../assets/images/c0d8b779a94d-mlfkth1m-07.png)

_Focused search can be a standalone destination, reached by selecting an item in a navigation bar_

### Search suggestions & results

Search suggestions and results both appear in a list component by default.

To help people find information quickly, consider adding variety and context, such as:

-   Leading icons related to suggestions

-   Category labels, like **Recent**, **Contacts**, or **Suggestions**

-   Avatars or other high-priority items

-   Filter chips to narrow down results

![Search with suggestions organized in a column, ending with a row of 5 contact avatars with names.](../../../assets/images/da4c4e0d8252-mlflqra9-09.png)

_Include high-priority items like avatars in search suggestions or results_

### Gaps

Use gaps to separate a list of suggestions or results into groups.

[More on using gaps in lists](../lists/guidelines.md#9e96fd72-5bf3-49df-9baf-e025dcca344d)

![A gap separates the location and calendar list items from people and pets avatars.](../../../assets/images/9a97eaba0869-mlfm1yld-10.png)

_To separate list items into distinct groups, use a gap_

## Placement

A search bar is typically placed at the top of a screen to remain prominent and accessible. Its location depends on whether search is the primary focus of a product or a secondary action.

![Mobile UI with a search bar directly below a Settings headline.](../../../assets/images/02e3a484782c-mlfmbc2s-21.png)

_A search bar can be the primary focus of a page_

![Mobile UI with a search bar centered at the top of the screen, above a row of Favorites avatars.](../../../assets/images/94e6244a0a0f-mlfmc255-22.png)

_Search bars should usually be placed at the top of the content_

![A photos app with a search icon.](../../../assets/images/1ff8cd236458-mlfmcmiv-23.png)

_Search can be a secondary action_

### Focused search layouts

When focused, search suggestions and results appear in a list below the search bar.  

There are two layout options:

-   **Docked** opens a list below the search bar, with a scrim covering main content

-   **Full-screen** expands to fill the screen


[More on adaptive design](guidelines.md#eb45ccc4-d1b5-4ea1-bee5-ea1c3d1c5436)

![Tablet UI shows a list of search results docked below the search bar.](../../../assets/images/8b47ab87fb29-mlfmf49n-08.png)

_Docked layout on a tablet_

![Mobile UI shows a list of search results filling the screen.](../../../assets/images/f7ac5940910f-mlfmg7bg-07.png)

_Full-screen layout on mobile_

## Anatomy

![6 elements of search.](../../../assets/images/1ea04606732a-mlgr3p93-11.png)

_Search bar container; Leading icon; Supporting text; Avatar or trailing icon (optional); Input text; Container for search suggestions or results_

### Search bar container

In the contained style, the search bar container remains the same shape in both the unfocused and focused states. Avoid changing the container behavior.

The container’s margins should be:

-   Unfocused: 24dp

-   Focused: 12dp


In the divided (baseline) style, a divider separates the search bar and results.

![Side-by-side comparison of a search container in unfocused and focused states.](../../../assets/images/83bc4a0a2baf-mlfmu14l-13.png)

_Search bar containers have persistent, rounded corners_

#### Container color

Search bars use the **surface container high** color role. This role applies when the screen background is white or a tonal **surface** color, ensuring the container has clear contrast.

![2 mobile UIs show search bars on white and tonal backgrounds.](../../../assets/images/a4a5761bace3-mlfmvyj4-14.png)

_Search bars use surface container high to provide clear contrast_

Avoid using a **surface container high** color on a **surface container** background. This can cause the search bar to blend in, making it difficult for people to find.

To ensure proper contrast, use surface container roles that are more than one step apart.

![A “surface container high” search bar on a “surface container” background.](../../../assets/images/d071fc7d5fbf-mlfn371r-15.png)

_Using a surface container high color on a surface container background reduces contrast and may affect accessibility_

### Icons & icon buttons

#### Leading icons

The leading side of a search bar should include either:

-   A navigational icon button, such as a menu or arrow

-   A non-functional search icon

![A search bar on a tablet screen contains a non-functional search icon and a trailing avatar.](../../../assets/images/5f792375f5ee-mlfn8hr6-16.png)

_A search bar can contain a non-functional search icon_

#### Trailing icons

A search bar should have one or two trailing icons or icon buttons.

Trailing actions can include:

-   Additional modes of searching like voice search

-   A separate high-level action such as current location or profile

-   An overflow menu

-   A decorative search icon

![A search bar with 2 trailing icon buttons: a microphone and an overflow menu.](../../../assets/images/cf08ead7b3ea-mlfnb1td-17.png)

_Use a maximum of two trailing icons_

![A search bar with a trailing microphone icon and avatar.](../../../assets/images/e89cb00490dc-mlfncrm8-18.png)

_Combine an avatar with up to one other trailing icon button_

![Focused search with a trailing x icon to clear input text.](../../../assets/images/1ee6290b89d8-mlfndiyw-19-VQA.png)

_Focused search can show an optional clear icon to remove input text_

### Text

#### Hinted search text

Provide a short description of the information people can search, like **Search replies** or **Search your messages**.

#### Input text

When a person starts typing, the hinted text is replaced with the input text.

<video controls src="../../../assets/videos/767a51c45738-mlfngra0-GM3-Search-Bar-Guidelines-20-v02.mp4" title="A search bar labeled “Search replies”. “Peanut is entered and “Quick results” appear."></video>

[Open video](../../../assets/videos/767a51c45738-mlfngra0-GM3-Search-Bar-Guidelines-20-v02.mp4)

## Adaptive design

The search bar position and alignment should scale with the layout, and stay close to the searchable content.

In most cases, a search bar should:

-   Stay in its pane and scale in width accordingly

-   Internal elements anchor to the left and right as the parent container scales


[More on applying layout](https://m3.material.io/m3/pages/layout-overview/)

<video controls src="../../../assets/videos/2b93d4c1b026-mlfnplfk-GM3-Search-Bar-Guidelines-24-v01.mp4" title="A search bar keeps its layout region and scales with different window sizes and layouts."></video>

[Open video](../../../assets/videos/2b93d4c1b026-mlfnplfk-GM3-Search-Bar-Guidelines-24-v01.mp4)

### Focused search

When focused, search can switch between showing suggestions or results in a:

-   **Docked layout**: Best for medium and expanded windows

-   **Full-screen layout**: Default for compact window sizes


[More on search layouts](specs.md#fc12e839-f356-4f48-9bd5-0ed210565bfe)

![Search suggestions in docked and full screen layouts.](../../../assets/images/4244901ebb6c-mlfnv4wh-25.png)

_A docked layout on a large screen; A full-screen layout, the default for compact screens_

Search suggestions or results should swap from full-screen in compact windows to docked in larger window sizes.

<video controls src="../../../assets/videos/5e7e702516d5-mlfo0cyf-GM3-Search-Bar-Guidelines-26-v02.mp4" title="Animation shows search suggestions adapting from full-screen on mobile to a docked layout as the window size increases."></video>

[Open video](../../../assets/videos/5e7e702516d5-mlfo0cyf-GM3-Search-Bar-Guidelines-26-v02.mp4)

## Behavior

### Focused search

When a search bar is selected, search becomes focused and can:

-   Show historical suggestions before typing

-   Show suggestions or results as someone is typing

-   Wait to show suggestions or results until a search is queried 


The **back** icon releases focus, dismisses any suggestions or results, and returns the search bar to its original state.

<video controls src="../../../assets/videos/49bdf0611a2a-mlgr7r58-GM3-Search-Bar-Guidelines-27-v02.mp4" title="When a search bar is tapped, it becomes focused, and suggestions appear in a list. "></video>

[Open video](../../../assets/videos/49bdf0611a2a-mlgr7r58-GM3-Search-Bar-Guidelines-27-v02.mp4)

<video controls src="../../../assets/videos/18636f3ff023-mlgr95m2-GM3-Search-Bar-Guidelines-30-v01.mp4" title="A person searches a photo app. The back icon returns the search bar to its original state."></video>

[Open video](../../../assets/videos/18636f3ff023-mlgr95m2-GM3-Search-Bar-Guidelines-30-v01.mp4)

### Scroll

Depending on needs, a search bar can:

-   Scroll away with content, then reappear when a person begins scrolling up

-   Remain fixed at the top of the screen

<video controls src="../../../assets/videos/a41c05e8842f-mlgrahif-GM3-Search-Bar-Guidelines-29-v01.mp4" title="Scrolling up hides the search bar. It reappears when scrolling down."></video>

[Open video](../../../assets/videos/a41c05e8842f-mlgrahif-GM3-Search-Bar-Guidelines-29-v01.mp4)

### Search results

To execute a search, a person can:

-   Type a query and press **Enter**

-   Select a suggestion or result without querying a search


Search results appear in a list below the bar, and scroll beneath the bar.   

For accessibility, focused search needs a clear status indicator that it’s searching content, like a search icon or **Results** label. [More on search accessibility](https://m3.material.io/m3/pages/search/accessibility/)

![“Peanut” is the entered search query and the first suggestion in the list.](../../../assets/images/5ec379fcbc0d-mlgrceqs-32.png)

_Show search results in a compact, organized list, with an indicator like Quick results_

When search results are queried, the input text should remain visible, but not in focus.

<video controls src="../../../assets/videos/951908e75e03-mlgrdhl9-GM3-Search-Bar-Guidelines-33-v02.mp4" title="“Pla” is entered into the search bar, “Plants” is suggested and selected."></video>

[Open video](../../../assets/videos/951908e75e03-mlgrdhl9-GM3-Search-Bar-Guidelines-33-v02.mp4)

### Predictive back

On Android, [predictive back](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md) allows a person to swipe left or right on search. 

-   Search detaches from the screen edge to signal the full-screen layout will minimize

-   The previous screen is revealed in a preview


[More predictive back design guidance](https://developer.android.com/guide/navigation/custom-back/predictive-back-gesture)

<video controls src="../../../assets/videos/fbf421fb5345-mlgrejsr-GM3-Search-Bar-Guidelines-34-v02.mp4" title="Swiping left on search causes the Android screen to scale left."></video>

[Open video](../../../assets/videos/fbf421fb5345-mlgrejsr-GM3-Search-Bar-Guidelines-34-v02.mp4)
