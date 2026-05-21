---
title: "Magic, utility, and redesigning Material.io"
source_url: "https://m3.material.io/blog/material-io-redesign"
lastmod: "2024-12-23"
snapshot_at: "2026-05-21T03:01:23.896Z"
section: "blog"
assets:
  - "assets/images/394799d84e53-n1AFrqnEqCS6Ntd1UZtqoFZOgSmhYk_YX-CQa9J69XFZoChDhW1tyui1uGpBfh-VJOIJXYbDGfsVrFJfD0Lx9KpaHRguiAo_.png"
  - "assets/images/090b7dca9fcb-6aaoMqll-RgC38h6pundoR1u46I6QWJzsGK_r4ONvfy0Omj-7l6ZY9-j0SCYNvcjlOSwme89PLeQskYEj2i9_zMNOix1FwRN.png"
  - "assets/images/b80a669e3c28-ZBWTcgEGUl9hiLnxRhFSuNLeWHYP6zv5Y2XhiLY7p0wns-p9jGcpczu_jaKGEOYAtaaCgsc4HnTZ8rRu2uv59WJqlX6s61Bt.png"
  - "assets/images/2130f140f321-hvoUcqePmGD08I30r_OJ9pzPsw7C0Nx5EZRk18Qw0Q4Z8dRJ186EImpJ4zZOzk5h7eVM-TXX-DjEw_Y7YLypAdakn4KJiwT2.png"
  - "assets/images/6b6ea06dff9b-j3pjWkdHIUoL5rdspLQGwuRv9Q8jAcaMRr0qZLLSXmqAlt4GNe0u6_wRx2vHrbIRiUgJcjqbj8bnhJ2XwN7ca4xVeBpZGBIK.png"
  - "assets/images/597d75ad7700-Q-DgxCIfJG0OmK9wo6FaCX6ugHS9XMYn6aS_48F-wFV_tLGk5t6R2bmeOEAmqF2WmW5Uuo17mWo3z7bQiQPGkmU7sL7SMcg4.png"
  - "assets/images/c884438ddc98-WyHHFm8QKPYsw_7qEdU3e2FtQ1kE3oHEReMoJJEG343LN1FW4T5-nciw0sUqXK4JBeL780AEyl0g7ULf8iziAbI5JBsl2QUw.png"
  - "assets/videos/63ebebe4e569-colors-articles.mov"
  - "assets/videos/47ddad999c61-component-card.mov"
  - "assets/videos/556aa4341a47-dark-mode-cards.mov"
  - "assets/videos/ba37f3942ca7-nav-drawer-1080.mov"
  - "assets/videos/a1df18620d15-mio-tabs.mov"
  - "assets/videos/f747efefa510-toc.mov"
  - "assets/videos/c3d06fcd0c69-top-level-transition.mov"
  - "assets/videos/255d0dd8368b-tabs-transition.mov"
  - "assets/videos/9093cb62ef44-symbols-animation-nav.mov"
  - "assets/videos/dcc3904139b3-gs-text.mov"
  - "assets/videos/b219928f65e7-bookend-opt.mov"
---

# Magic, utility, and redesigning Material.io

Pushing visual and interactive expression in design guidelines with Material Design 3

![Image](<https://lh3.googleusercontent.com/n1AFrqnEqCS6Ntd1UZtqoFZOgSmhYk_YX-CQa9J69XFZoChDhW1tyui1uGpBfh-VJOIJXYbDGfsVrFJfD0Lx9KpaHRguiAo_wG87UMyXc3VJSuwHHxTR>)

Published: 2022-10-18T10:00:00

I often tell people that I am the design lead for Google’s design system “textbook”. Material.io is the online textbook where readers learn, discover and reference design guidelines and is the core of Material Design’s public offering. It contains a trove of specialized information about digital product design, written by a group of the smartest and most creative people I have ever met.

In 2021, Material Design 3 was introduced with an iconoclastic approach to visual expression and inclusive perspective on usability in digital products. In October of 2022, we launched a redesigned Material.io which reinforces Material Design 3’s balance between spirit and usability.

For this refresh, the Material.io team showcased new features and components while also demonstrating how Material 3 principles can be extended to solve product-specific use cases, in our case, a rich library of information to help designers and developers build beautiful products.

[Click here](https://material.io/) to check out the new Material.io

![Homepage of Material.io](<https://lh3.googleusercontent.com/6aaoMqll-RgC38h6pundoR1u46I6QWJzsGK_r4ONvfy0Omj-7l6ZY9-j0SCYNvcjlOSwme89PLeQskYEj2i9_zMNOix1FwRN7-ZmRSZfq5KBHpV3ky4>)

## Connecting imagery, dynamic color and guidelines

Dynamic color is a tentpole feature of Material You, a subset of features of Material Design 3 that make digital products feel personal based on a person’s device wallpaper or preferences. When designing for Material.io, we considered how we could showcase dynamic color and the new color system while still maintaining the site’s use-case as a reference material.

![Image of themed components against an illustrative background](<https://lh3.googleusercontent.com/ZBWTcgEGUl9hiLnxRhFSuNLeWHYP6zv5Y2XhiLY7p0wns-p9jGcpczu_jaKGEOYAtaaCgsc4HnTZ8rRu2uv59WJqlX6s61BtiaitbDHQLjf8Oef4AWY>)

To achieve this balance, we implemented a sub-feature of dynamic color called [content-based dynamic color](https://m3.material.io/styles/color/dynamic-color/user-generated-color) to modify the colors of Material.io’s UI. This is similar to dynamic color, but instead of relying on personal preferences we relied on a beautiful set of imagery ranging in style, color and subject matter. These images were commissioned by [Oddfellows](https://material.io/blog/interview-oddfellows-m3-art-style) and [Jamie Chung](https://material.io/blog/jamie-chung-photography-interview) and are styled specifically to compliment the diagrammatic and UI example images found across the site.

The dynamic color transformation creates a holistic visual experience by having the site reflect the content a reader is consuming, and demonstrates Material Design 3’s new color system which uses a unique palette of tones and compliments.


[Video: Examples of article pages sliding in and out of view](../../assets/videos/63ebebe4e569-colors-articles.mov)

Component guideline articles are considered the bread and butter of Material Design’s offerings on Material.io. With that in mind, the team wanted to bring the content-based dynamic color story into the reading experience of articles. Following the same theme categories as the component catalog, each component’s article assets are themed accordingly, and Material.io’s UI transforms to reflect that.

## Component catalog

![Component catalog page on Material.io](<https://lh3.googleusercontent.com/hvoUcqePmGD08I30r_OJ9pzPsw7C0Nx5EZRk18Qw0Q4Z8dRJ186EImpJ4zZOzk5h7eVM-TXX-DjEw_Y7YLypAdakn4KJiwT2irwoPAOY27mMDi7KIILE>)

A beautiful example of combining imagery, color and utility, the component catalog page assists readers in finding the best component for their use case. Component cards are organized into categories based on their function, and each of these categories has a unique theme color to showcase how the new color system applies to different components.


[Video: Component card animating between default and hovered states](../../assets/videos/47ddad999c61-component-card.mov)

When a reader hovers over a component card, a beautiful background image appears, and the card’s colors transform to match that component’s theme. Giving the reader a sense of energetic power, this interaction begins to establish the connection between color and imagery that is a trademark of Material You.


[Video: Component catalog cards switching between light and dark mode](../../assets/videos/556aa4341a47-dark-mode-cards.mov)

A highly requested feature from Material.io readers was support for dark mode, and we thought we could take the request and push it a bit further. Each of the component catalog images (along with header images across the site) also respond to dark and light mode, transforming to reflect a reader’s preference while also demonstrating Material Design 3’s support for a dark context.

## **Wayfinding and navigation**

When designing for print, the designer is primarily concerned with one interaction: the turning of a page (sometimes supplemented by cross-referencing of indexes, footnotes and glossaries).

In digital products like Material.io, information is inherently hidden behind more complex information architecture, and the user has to perform a number of gestures or actions to reveal it, this is magic. To help readers perform this spellwork, we wanted to provide a consistent wayfinding experience to help them find what they are looking for.

![Juxtaposed view of navigation rail, drawer and tabs on Material.io](<https://lh3.googleusercontent.com/j3pjWkdHIUoL5rdspLQGwuRv9Q8jAcaMRr0qZLLSXmqAlt4GNe0u6_wRx2vHrbIRiUgJcjqbj8bnhJ2XwN7ca4xVeBpZGBIK_t-dPAGXuLAa0Pz_gW4>)

The consistent visual treatment of Material.io’s navigation components establishes a functional gestalt through shape and color, signaling to readers that these UI elements are part of a family, and they share a function in helping them traverse the content on the site.


[Video: Hovering over navigation rail items to expand the navigation drawer](../../assets/videos/ba37f3942ca7-nav-drawer-1080.mov)

We combined the new navigation rail with the navigation drawer using a simple hover interaction which gives readers a sense of ergonomic speed and quickly provides an overview of the site’s content with relative ease.


[Video: Guideline article tabs expanding and contracting upon scrolling](../../assets/videos/a1df18620d15-mio-tabs.mov)

Tabs allow readers to switch between different pages of an article on Material.io. We took the opportunity to create custom tabs to align with other navigation elements and express Material 3’s shape language.


[Video: Guideline article table of contents shifting up and down between article sections](../../assets/videos/f747efefa510-toc.mov)

A tertiary form of navigation, the table of contents component allows a reader to traverse up and down an article page. A notable addition to this component is the generous article title, giving readers persistent context for what article they are currently referencing.

## **Marginalia**

Marginalia, a beautiful word I learned not too long ago from a colleague which is used to describe elements found in the margins of a page. When redesigning the article experience for Material.io, the team considered some of these small, sometimes invisible details of the reading experience such as bullet points, semantic colors and list numerals.

![An example of a do and don't on Material.io using blue and red as semantic colors](<https://lh3.googleusercontent.com/Q-DgxCIfJG0OmK9wo6FaCX6ugHS9XMYn6aS_48F-wFV_tLGk5t6R2bmeOEAmqF2WmW5Uuo17mWo3z7bQiQPGkmU7sL7SMcg4d0cFp0c-6CF0CPfibw>)

We redesigned Do and Don’t labels that avoid the semantic use of red and green, and instead used blue as the affirmative color. Nearly 10% of people struggle with red-green colorblindness (including myself). With that in mind, and with the assurance of 3 signifiers: text, icon, and color, we felt confident in making the call to depart from typical affirmative and negative semantic colors.

![Example of custom, star shaped bullets on material.io](<https://lh3.googleusercontent.com/WyHHFm8QKPYsw_7qEdU3e2FtQ1kE3oHEReMoJJEG343LN1FW4T5-nciw0sUqXK4JBeL780AEyl0g7ULf8iziAbI5JBsl2QUws7A0OOyofY-7gYOsLFI>)

Material 3’s shape story is dotted with the use of highly expressive “cookie” shapes, as the team likes to call them. Applying these shapes to bullet points at such a small scale, and randomly rotating them with some simple CSS provides a sense of understated iconoclasm, pushing visual expression for the sake of expression, rather than strict utility.

## Expressing spirit through motion

From full-screen page transitions to navigation component animations, the new Material.io expresses an energetic spirit through its motion, from changes in pixels to entire views.

[Video: Material.io pages transitioning with a vertical slide animation](../../assets/videos/c3d06fcd0c69-top-level-transition.mov)

Top-level pages use a vertical slide transition, to reinforce the vertical nature of the navigation rail and drawer. Whole page transitions provide a sense of speed and cohesion by animating an entire page and its elements together, rather than having them load piece by piece.


[Video: Article pages transitioning using a horizontal slide animation](../../assets/videos/255d0dd8368b-tabs-transition.mov)

When navigating between article tabs the view transitions using a lateral slide transition to reflect the horizontal layout of the tabs.

## Variable Google Sans and Symbols

Variable fonts and symbols allowed Material.io to implement them in a way to supplement states, providing distinct visual signals for interaction.

[Video: Symbols in navigation rail increasing in weight upon hover and decreasing upon press](../../assets/videos/9093cb62ef44-symbols-animation-nav.mov)

Material Symbols are a new set of variable icons from Google Fonts that feature weight, grade and fill axes. Rather than relying solely on color to indicate state change, readers are also given the visual signals of icon weight and fill. Icons react by increasing in weight while hovering and decreasing in weight upon press; this again again provides a sense of magical energy and utility. For navigation components, icons become filled when an item is selected.


[Video: Google Sans increasing in weight upon hover and decreasing upon press](../../assets/videos/dcc3904139b3-gs-text.mov)

Similarly, we implemented a variable version of Google Sans and utilized its grade axes to add another signifier to component states. By using grade rather than weight, text strings don’t become longer and remain the same width as it’s default state.


[Video: Illustrative video with a heart gently floating in a sea of blue and green grain texture](../../assets/videos/b219928f65e7-bookend-opt.mov)

As the Material.io design team, our goal is to represent the incredible work that Material Design does at Google as best as possible. So many incredible people are behind this work and it is a pleasure to act as both a steward and a catalyst for one of the most prevalent design systems in the world.

[Click here](https://material.io/) to check out the new Material.io

To more systemagic,
David Allin, on behalf of the Material.io team
