---
title: "Introducing Tone-based Surfaces in Material 3"
source_url: "https://m3.material.io/blog/tone-based-surface-color-m3"
lastmod: "2024-12-23"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "blog"
assets:
  - "assets/images/219f67f71905-JsPGxLo5hiZrvqOpxpQWrKjOPOwBpJN-Rz8yWdmE-RBnFZX4VmZwnopcsoKW-9iRlh9_pdkcAky1XMs3tbAcoxpDsZCJNejc.png"
  - "assets/images/19fd8b16382f-Q5Jcvl4yPN_vcdif9enFF4waHTi7OCeL4pxk4YwV3C6pBQq_DlOdeSJG337YIIOCHgx-Ixs_aAspS44pS6-6LVNW1NGqSfIr.png"
  - "assets/images/b8015f57a33d-hV_-3MUEyg3e1lK09oWMcJidImOYRnJ_n81Z9cJUy5xSkIerF8-006gDKHGAt9bn00KV_L_yR7AC4XO21C_kax6CSve7xzGK.png"
  - "assets/images/a2ab6b285fab-cr46Jts0LQ9m4w5atTsCnxQ1rQib3TD7WspzgBZDW40bwCdyU4X0duBu-JV2trExfMftuVNQrrhxiayCQyfaocvLQUhk4458.png"
  - "assets/videos/062a3e6e5b73-surface-blog-sequence-old.mov"
  - "assets/videos/0dfd0632280b-surface-blog-sequence-new.mov"
---

# Introducing Tone-based Surfaces in Material 3

New surface color roles offer more flexibility for large screens and rich color features

![three skeleton UIs on a pink background](../../assets/images/219f67f71905-JsPGxLo5hiZrvqOpxpQWrKjOPOwBpJN-Rz8yWdmE-RBnFZX4VmZwnopcsoKW-9iRlh9_pdkcAky1XMs3tbAcoxpDsZCJNejc.png)

Published: 2023-03-23T13:00:00

The previous way makers could achieve tinted surfaces, which are a hallmark of the M3 design language, was to assign the color role “surface” to a component, and increase its elevation to achieve the desired tinting which was applied via an opacity layer.

[Video: Pre-update: A tinted overlay communicated the elevation of a component surface](../../assets/videos/062a3e6e5b73-surface-blog-sequence-old.mov)

The update introduces dedicated surface color roles that are no longer tied to elevation. Makers will be able to choose the right surface roles based on the containment needs of their products, and now have more layout flexibility for larger screens.

[Video: Video](../../assets/videos/0dfd0632280b-surface-blog-sequence-new.mov)

The new **surface container roles** and tokens include five colors.

“Surface container” is the recommended default color role for a contained area against the “surface” color role. It provides good contrast and can be flexibly combined with all other surface container roles ranging from “surface container lowest” with the lowest emphasis against the “surface” role,  to “surface container highest” with the highest emphasis against the “surface” role.

![two color palettes](../../assets/images/19fd8b16382f-Q5Jcvl4yPN_vcdif9enFF4waHTi7OCeL4pxk4YwV3C6pBQq_DlOdeSJG337YIIOCHgx-Ixs_aAspS44pS6-6LVNW1NGqSfIr.png)

New color roles in light and dark theme

## Migrating to the new surface color roles

All Material Components will automatically update to use the new surface container color roles. For makers using the previous opacity-based surface model for custom color mappings, we recommend remapping these to the new roles.

![diagram showing how color roles have been remapped](../../assets/images/b8015f57a33d-hV_-3MUEyg3e1lK09oWMcJidImOYRnJ_n81Z9cJUy5xSkIerF8-006gDKHGAt9bn00KV_L_yR7AC4XO21C_kax6CSve7xzGK.png)

-   Surface Container Lowest is a new role
-   Surface at elevation +1 becomes Surface Container Low
-   Surface at elevation +2 becomes Surface Container
-   Surface at elevation +3 becomes Surface Container High
-   Surface at elevation +4 and +5 are being deprecated, it is recommended to use Surface Container Highest by default as a replacement. As an alternative Surface Container High, or Surface Dim can be used depending on the specific use case.
-   Surface Variant becomes Surface Container Highest

![example UI using new color roles](../../assets/images/a2ab6b285fab-cr46Jts0LQ9m4w5atTsCnxQ1rQib3TD7WspzgBZDW40bwCdyU4X0duBu-JV2trExfMftuVNQrrhxiayCQyfaocvLQUhk4458.png)

Both methods will co-exist for an extended transition period, giving makers time to migrate to the new model.

This update also changes:

-   The default light theme surface role from tone 99 to tone 98
-   The chroma for the neutral palette is increased from 4 to 6
-   Surface roles in dark theme are slightly darkened

To learn more about applying the new color roles in your products, visit the [color system guidance](https://m3.material.io/styles/color/the-color-system).
