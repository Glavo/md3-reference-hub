---
title: "States"
source_url: "https://m3.material.io/foundations/interaction/states/state-layers"
lastmod: "2025-08-05"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "foundations"
assets:
  - "assets/images/f5d12d9567f6-ly2qh1yi-1p_State-Layers_1.png"
  - "assets/images/70bd8fc28627-ly2qhye4-1p_State-Layers_2.png"
  - "assets/images/42256eb932d7-ly2qisol-1p_on_colors.png"
  - "assets/images/76fafd900c26-ly2qnx2g-1p_state_layer_tokens&value.png"
---

# States

States show the interaction status of a component or UI element

## State layers

## State layers

A state layer is a semi-transparent covering on an element that indicates its state. State layers provide a systematic approach to visualizing states by using opacity. A layer can be applied to an entire element or in a circular shape and only one state layer can be applied at a given time.

To transition from an enabled style to a stateful style requires the addition of a state layer.

The state layer is an overlay with a fixed opacity for each state and uses the same color as the content. 

For example, if the enabled style uses the **secondary container** color for the container and **on secondary container** for content, the state layer will be an overlay using the **on secondary container** color.  

If the enabled style uses the **surface** color for the container and the **primary** color role for content, then the state layer will be an overlay using the **primary** color.

![State layer sandwiched between the container and content.](../../../../assets/images/f5d12d9567f6-ly2qh1yi-1p_State-Layers_1.png)

_ContainerState layerContent_

The size of state layers is 40dp while the interactive target size is 48dp.

![Interaction target is larger than the state layer.](../../../../assets/images/70bd8fc28627-ly2qhye4-1p_State-Layers_2.png)

_State layerInteractive target_

### On colors

By default, a component’s state layer color is derived from the color of its content, either the color of an icon or label text if no icon is present.

An [on color](../../../styles/color/roles.md#19e75989-7485-4f5b-a769-940c4e4364bc) is a color role used by the content. Each container color has its own corresponding on color. 

For example, if a container color is **secondary container**, the content will use the **on secondary container** color role.

![State layer sandwiched between  the content and container.](../../../../assets/images/42256eb932d7-ly2qisol-1p_on_colors.png)

_Order of surface layers shows the state layer (2) between the container (1) and content (3) layers_

### State layer tokens & values

The state layer uses a fixed percentage for the opacity for each state. A state layer uses the color used by content (usually the [on color](../../../styles/color/roles.md#19e75989-7485-4f5b-a769-940c4e4364bc)) and the percentage opacity for its respective state.

![The opacity values of four overlay states.](../../../../assets/images/76fafd900c26-ly2qnx2g-1p_state_layer_tokens&value.png)

_Four overlay states and their values:Hover +8% opacity Focus +10% opacity Press +10% opacityDrag +16% opacity_

### TOKEN_TYPE_UNSPECIFIED

- **system:** Google Material 3
