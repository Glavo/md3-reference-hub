---
title: "Design for watches"
source_url: "https://m3.material.io/foundations/watches/styles"
lastmod: "2026-05-19"
snapshot_at: "2026-05-21T02:20:48.794Z"
section: "foundations"
assets:
  - "assets/images/cd6d62700ad7-mp5bgujn-22.png"
  - "assets/images/755af3a74f8e-mp5bhh41-23.png"
  - "assets/images/4caf00d2011f-mp5bibde-1.png"
  - "assets/images/9432dbaf6e4e-mp5bjd95-21.png"
  - "assets/images/9d24e6ec6671-mp5bkn4t-22.png"
  - "assets/images/e72fb39ed4da-mp5bls9w-23.png"
  - "assets/images/82b23727981a-mp5bmhyv-24.png"
  - "assets/images/e7799a639a98-mp5bn2dm-28.png"
  - "assets/images/324ea752c8ae-mp5bnriq-30.png"
  - "assets/images/cc7e16523b63-mp5bof6i-27.png"
  - "assets/images/348196780e06-mp5bp0a1-31.png"
  - "assets/images/6e981ca19928-mp5bqjda-x.png"
---

# Design for watches

Watches have special design considerations and interaction patterns

## Styles

## Resources

| Type | Resource |
| --- | --- |
| Design | [M3 Expressive on Wear OS](https://developer.android.com/design/ui/wear/guides/get-started) |
| [Typography for Wear OS](https://developer.android.com/design/ui/wear/guides/styles/typography) |  |
| [Color for Wear OS](https://developer.android.com/design/ui/wear/guides/styles/color) |  |
| [Motion for Wear OS](https://developer.android.com/design/ui/wear/guides/get-started/apply#shape-motion) |  |
| Implementation | [Android Developers: Wear OS](https://developer.android.com/training/wearables) |
| [Jetpack Compose for Wear OS](https://developer.android.com/training/wearables/compose?version=3) |  |

## Typography

M3 Expressive adds two type styles specially designed for watches. [More on the type scale for Wear OS](https://developer.android.com/design/ui/wear/guides/styles/typography/type-scale-tokens)

### Numerals

Numeral text styles display numbers, usually only a few digits at a time. This text can take on more expressive properties at larger display sizes without the accommodations usually required by text that must be localized.

![A watch face with an indication for the numeral text style used to show the time.](../../../assets/images/cd6d62700ad7-mp5bgujn-22.png)

_Numeral Large_

### Arc text

Arc text is specially designed for text following a curved path on a round screen, such as page titles, confirmation overlays, or a call to action. It optimizes character spacing for text displayed along a curve at the top or bottom of a round screen.

![A close-up of a watch face with arc text showing “check your phone” hugging the bottom bevel of a round screen.](../../../assets/images/755af3a74f8e-mp5bhh41-23.png)

_Arc Large_

## Color

Material for Wear OS provides a custom [color system](https://developer.android.com/design/ui/wear/guides/styles/color/system) to create vibrant experiences and clear visual hierarchy.

### Build from black

Watches are designed with a black background, instead of the tinted background that phones use.

![2 watch screens showing sleeping app and a number picker.](../../../assets/images/4caf00d2011f-mp5bibde-1.png)

_Watches use a black background to conserve battery_

### Color roles

Since watches are used throughout the day, color tokens for Wear OS are specifically tailored for dark themes in low-light environments and light themes for daylight environments.

[More on color roles for Wear OS](https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens)

![3 examples of “Accept” and “Decline” buttons that are legible.](../../../assets/images/9432dbaf6e4e-mp5bjd95-21.png)

_Buttons with (2) on primary on (1) primary and (4) on primary container on (3) primary container stay legible as the contrast level changes_

![2 of 3 “Accept” buttons and 1 of 3 “Decline” buttons are shown with poor contrast.](../../../assets/images/9d24e6ec6671-mp5bkn4t-22.png)

_Buttons with (2) primary dim on (1) primary or (4) primary dim on (3) primary container become illegible as contrast levels shift_

### Recommended color combinations for Wear OS

Below are some common color pairings that can help establish priority, function, and elevation.

-   Use **primary dim** to highlight important elements and **tertiary** to provide standout feedback, such as tap responses

-   When the main action isn't clear, use **tertiary** and **primary** for main actions and **secondary container** for complementary actions

-   Use **secondary** and **primary container** to show two equally important options or containers, while maintaining contrast

![Three buttons, with the center one in Primary and side ones in Primary Dim. ](../../../assets/images/e72fb39ed4da-mp5bls9w-23.png)

_Primary; Primary dim_

![ A number pad with most keys in Primary Dim and the pressed key in Tertiary. ](../../../assets/images/82b23727981a-mp5bmhyv-24.png)

_Primary dim; Tertiary_

![Call button in tertiary color, open button in primary color and open on phone button in secondary-container.](../../../assets/images/e7799a639a98-mp5bn2dm-28.png)

_Tertiary; Primary; Secondary container_

![accept button in primary and delete button in primary container.](../../../assets/images/324ea752c8ae-mp5bnriq-30.png)

_Primary; Tertiary; Primary container_

![Plus button in primary color, date button is in tertiary color and appointment summary is in primary container color.](../../../assets/images/cc7e16523b63-mp5bof6i-27.png)

_Primary dim; Tertiary dim_

![Bicycle button in primary, weight button in tertiary dim.](../../../assets/images/348196780e06-mp5bp0a1-31.png)

_Primary; Tertiary dim_

## Motion

The [M3 motion system](../../styles/motion/overview/how-it-works.md) makes interactions feel more alive, fluid, and natural. Well-designed transitions make an experience feel high quality and expressive, and give intuitive feedback to understand how an app works. [More on transitions in Wear OS](../../styles/motion/transitions/transition-patterns.md)

## Haptics

Haptics are tactile effects used to grab a person’s attention for something important, or add emphasis to an interaction on the screen. You can use haptics to provide responsive feedback to scrolling and selecting items from a list, or controlling volume.

Use system-defined patterns and tokens (when available) to reinforce interaction expectations. Synchronize haptics with UI motion and sound to provide richer feedback.

-   Use stronger haptics for key interactions, such as a payment confirmation

-   Use subtler haptics for precision interactions, such as scrolling through a list


[More on haptics for Wear OS](https://developer.android.com/develop/ui/views/haptics/haptics-principles)

![2 watch faces with lines indicating haptics for a payment being accepted and scrolling through notifications.](../../../assets/images/6e981ca19928-mp5bqjda-x.png)

_Use stronger haptics for key interactions and subtler feedback for precision interactions_
