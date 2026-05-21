---
title: "Button groups"
source_url: "https://m3.material.io/components/button-groups/accessibility"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/ab4633f30afe-m0dgm57d-tap-targets.png"
  - "assets/images/e912cc87f888-m0dgsbc6-focus.png"
  - "assets/images/bb967ca9c3c6-m0dgutj5-keyboard-nav.png"
  - "assets/images/2761dfe76b8d-m0dh20ef-label.png"
---

# Button groups

Button groups organize buttons and add interactions between them

## Accessibility

## Use cases

People should be able to do the following with assistive technology:

-   Navigate to and interact with each button in the group 
-   Identify when buttons are selected

## Interaction & style

Each button in a group should have a minimum 48x48dp target. 

Extra small and small button groups have larger inner padding to ensure accessible targets. Avoid reducing the padding in these sizes.

![Extra small and small button groups with 48x48dp target areas annotated over top. The area is larger than the buttons.](../../../assets/images/ab4633f30afe-m0dgm57d-tap-targets.png)

_Extra small button groupSmall button group_

### Initial focus

The button group container is not a focusable element. Initial focus should land on the first button in the group and then move to each button.

![Focus order lands on the first button, then the next buttons.](../../../assets/images/e912cc87f888-m0dgsbc6-focus.png)

_Initial focus should land on the first button, not on the container_

Use **Tab** to navigate through each item in the group, and **Space** or **Enter** to select buttons.

![Button group with annotations for navigation with Tab and selecting with Space or Enter.](../../../assets/images/bb967ca9c3c6-m0dgutj5-keyboard-nav.png)

_Initial focusSelected button_

## Keyboard navigation

Keys

Actions

Tab

Navigates to the next button

Space or Enter

Activates the focused button

## Labeling elements

The button group container does not need to be labeled. Label each button according to the button and icon button accessibility guidance.

![In a messaging products, an email icon is labelled “email” with the role “button”.](../../../assets/images/2761dfe76b8d-m0dh20ef-label.png)

_Label each button within the button group_
