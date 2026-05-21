---
title: "Alt text"
source_url: "https://m3.material.io/foundations/content-design/alt-text"
lastmod: "2025-09-26"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "foundations"
assets:
  - "assets/images/2589cf097f70-lwj77km2-1_do.png"
  - "assets/images/d67014b7c856-lwj782ss-2_don't.png"
  - "assets/images/ee08a38e69cd-lwj79l11-3.png"
  - "assets/images/cb563b1a13a7-lwj7a0ft-4_do.png"
  - "assets/images/c1816aca39ed-lwj7aw71-5_don't.png"
  - "assets/images/5b1292cf1b19-lwkc2f9v-6_do.png"
  - "assets/images/56d8da527685-lwkc3gw3-7_don't.png"
  - "assets/images/1b9c4b98ed52-lwj7cw95-8_do.png"
  - "assets/images/47b5c3521503-lwj7dpkq-9_don't.png"
  - "assets/images/84a04e032414-lwj7ehhx-10_do.png"
  - "assets/images/3c30e8e024bc-lwj7f0me-11_do.png"
  - "assets/images/34a7db31484d-lwj7flrw-12_do.png"
  - "assets/images/c78592732877-lwj7i4ba-13_don't.png"
  - "assets/images/6a3e9adfb069-lwj7ik28-14_do.png"
  - "assets/images/ff2087230329-lwj7ixvo-15_do.png"
  - "assets/images/74132dbb96bc-lwj7jdth-16_don't.png"
  - "assets/images/6e33d42dd643-lwj7jync-17_do.png"
  - "assets/images/4ac2caf72d91-lwj7kb1h-18_don't.png"
  - "assets/images/96b29f447bcb-lwj7kr95-19.png"
  - "assets/images/8e606e49107a-m2ch16f9-20.png"
  - "assets/images/984bb3cf9fe7-m2ch1hb7-21_do.png"
  - "assets/images/adc16f8143c8-m2ch1sqk-22_don't.png"
  - "assets/images/1b127ee5b468-m5v7afru-02-Editorial-Chart-(1).png"
  - "assets/images/c0b54cae93c8-m2kctoq6-03-Analyst-Chart.png"
  - "assets/images/b29d34b797e2-m2kcv16w-03-Analyst-Chart-1.png"
  - "assets/images/625d54fa524e-m2kd1tma-Interactive-Chart.png"
  - "assets/videos/85b75d5ab792-lwj7ncxm-GM3-Foundations-ContentDesign-AltText-1-v01.mp4"
  - "assets/images/f78b12271458-lwj7mf38-24_do.png"
  - "assets/images/e2f1076d2b83-lwj7mptb-25_don't.png"
---

# Alt text

Effective alt text describes the meaning and context of images for screen reader users

## How to write great alt text

### Overview

Alternative text (alt text) refers to off-screen text that is used by screen reader accessibility software. Screen readers read out visible content such as paragraph and button text, as well as hidden content, including alt text for icons and headings.

Alt text also displays when an image doesn’t load. It tells people what they need to know about an image if they can’t see it.

![4 tin mugs and appropriate alt text.](../../../assets/images/2589cf097f70-lwj77km2-1_do.png)

_Write alt text for images to provide context to screen reader users.Alt text: Two large and two small tin mugs._

![4 tin mugs with file name as alt text.](../../../assets/images/d67014b7c856-lwj782ss-2_don't.png)

_Avoid leaving the automatically generated file number as alt text.Alt text: jpg - 0223939-330_

### When to use alt text

If you remove the image from the page and no information is lost, then the image is decorative and doesn’t need alt text or a caption.

An image can be marked decorative using a null alt attribute, such as **alt=””** in HTML, which will hide the content from screen reader users.

![A bitcoin decorative image in a crypto article.](../../../assets/images/ee08a38e69cd-lwj79l11-3.png)

_Images that don’t add information don’t need alt text.Alt text: “”_

### Focus on the meaning of the image

Describe the context and overall meaning, rather than focusing on the details. For example, in a shopping app, focus on the item for sale rather than the things around it.

Alt text can also help improve SEO, but its primary purpose should be to make sites usable for all.

![Watering can in a shopping app and good alt text.](../../../assets/images/cb563b1a13a7-lwj7a0ft-4_do.png)

_Focus on the important part of the image.Alt text: A Scandinavian-style, copper-handled, cream-colored watering can._

![Watering can in a shopping app and overly detailed alt text.](../../../assets/images/c1816aca39ed-lwj7aw71-5_don't.png)

_Avoid detailed descriptions that don’t contribute to the image’s meaning.Alt text: On a window sill, a child’s hands pours from copper handled cream colored watering can into a phoenix plant in a grey pot._

### Keep it short

The recommended length for alt text is 140 characters. 

If alt text is too long, it may be cut off by some screen readers, which is a poor user experience.

![Relates idea of keeping alt text to a max of 140 characters.](../../../assets/images/5b1292cf1b19-lwkc2f9v-6_do.png)

_Write brief alt text.Alt text: A small happy dog hanging out the passenger window of a vintage car._

![Long alt text can be overwhelming and ineffective.](../../../assets/images/56d8da527685-lwkc3gw3-7_don't.png)

_Don’t write more than 140 characters of alt text. Alt text: An aqua colored vintage car is driven by a woman in a cowboy hat. A poodle-mix dog sits in the passenger seat with its tongue out and paws out the window._

### Don’t start alt text with “image of”

Screen readers announce “image” when they come across an image. If your start your alt text with “image of” a screen reader will announce “image, image of.”

![Makes the point of not  using “image of” to start alt text.](../../../assets/images/1b9c4b98ed52-lwj7cw95-8_do.png)

_Describe the image, rather than the format.Alt text: A wooden box of artisan sourdough bread is carried by a baker._

![Makes the point that poor alt text starts with “Image of.”](../../../assets/images/47b5c3521503-lwj7dpkq-9_don't.png)

_Avoid writing “image of." The screen reader will announce it’s an image.Alt text: Image of a wooden box of artisan sourdough bread is carried by a baker._

## Context and nearby text

### Context matters

Use adjacent text to establish the context and word choices for alt text. Adjacent text includes all of the text near an image, such as body text, captions, and headlines. 

Don’t repeat the caption in alt text. It’s against best practices because the user will hear the same text twice, which is a poor experience.

Be consistent in your word choices. For example, don’t use “antique” in a caption and “vintage” in the alt text.

![Shopping app with image of a chair in a bathroom.](../../../assets/images/84a04e032414-lwj7ehhx-10_do.png)

_Alt text should always relate to the context.Alt text: Brown oak dining chair._

![Home decorating blog post heading and caption and image of a wooden chair in bathroom.](../../../assets/images/3c30e8e024bc-lwj7f0me-11_do.png)

_Change alt text for an image depending on where it’s used.Alt text: Books on a wooden chair next to a vintage bathtub._

### Alt text is subjective

Alt text is another layer of creative expression and should support the goals and style of its context.

The same image should have different alt text in different settings. Use the information in the app or article and the caption to decide what to emphasize in the alt text.

![Shows idea of alt text supporting the caption.](../../../assets/images/34a7db31484d-lwj7flrw-12_do.png)

_Make alt text consistent with the caption.Alt text: A well composed photo of a photographer waiting for the perfect shot of sailboats._

![Shows idea of alt text  missing key information from the image.](../../../assets/images/c78592732877-lwj7i4ba-13_don't.png)

_Don’t ignore the caption. Information in alt text should correspond to adjacent text.Alt text: A black and white photo of a woman standing on a pier while looking at sailboats._

![Shows idea of alt text focussing on the meaning of the image.](../../../assets/images/6a3e9adfb069-lwj7ik28-14_do.png)

_Focus on the meaning of the image.Alt text: A black and white photo of woman looking at sailboats from a pier._

![Shows idea of alt text reinforcing the caption theme.](../../../assets/images/ff2087230329-lwj7ixvo-15_do.png)

_Use alt text to reinforce ideas in the caption.Alt text: A photographer stands on a pier between 2 dock posts looking at sailboats._

![Shows idea of overly detailed alt text.](../../../assets/images/74132dbb96bc-lwj7jdth-16_don't.png)

_Don’t write alt text with details that aren’t relevant to the context of the image.Alt text: A black and white photo of a female photographer looking at sailboats while standing between 2 dock posts on a Venetian pier._

### Captions should benefit all users

A caption should be useful to someone who can see the image clearly, as well as a screen reader user. 

Good captions support the image rather than duplicating its information. A well-written caption makes it easier to write alt text.

![Alt text of “flying pigeons” supports the caption “Pigeons have a distinct silhouette.” ](../../../assets/images/6e33d42dd643-lwj7jync-17_do.png)

_Capture the meaning of the image in a few words.Alt text: Flying pigeons._

![The caption and alt text are both “Pigeons have a distinct silhouette.”](../../../assets/images/4ac2caf72d91-lwj7kb1h-18_don't.png)

_Don’t repeat the caption as the alt text.Alt text: Pigeons have a distinct silhouette._

## Types of imagery

### When to describe the type of image

Occasionally it benefits users to name the type of image. This can include:

-   Chart
-   Infographic
-   Map
-   Graph
-   Screenshot
-   Headshot
-   Diagram

![Map with alt text that begins with “map of.”](../../../assets/images/96b29f447bcb-lwj7kr95-19.png)

_Be careful when using alt text that describes the type of image.Alt text: Map of Denver Rd. Park and surrounding area._

### Charts and graphs

Alt text is particularly important for visualizations such as charts and graphs. 

Visualizations can either be editorial and meant to support a specific purpose or key takeaway, or more open-ended and used for general data analysis.

Consider the core purpose of the chart or graph, and what information someone would need to use it.

Link to the data that generated the chart or graph, if it’s available.

![Summary of interest in Manchester City, which is almost double that of Liverpool. Manchester interest peaks at 100 at 6pm. Liverpool peaks at 40 at 3am and 12:30pm.](../../../assets/images/8e606e49107a-m2ch16f9-20.png)

_Summarize the main purpose of the data. Here, the chart involves interest in Manchester City and Liverpool._

When possible, explain the key takeaways and meaning in context, rather than detailing every data point.

A general formula for chart alt text would be: “Summary of \[data type\] + \[reason for showing the chart\].”

![Alt text that summarizes the meaning of the chart.](../../../assets/images/984bb3cf9fe7-m2ch1hb7-21_do.png)

_Capture the meaning of the chart, along with key data pointsAlt text: Summary of interest in Manchester City, which is almost double that of Liverpool. Manchester interest peaks at 100 at 6pm. Liverpool peaks at 40 at 3am and 12:30pm._

![Alt text for a chart that details too many data points. ](../../../assets/images/adc16f8143c8-m2ch1sqk-22_don't.png)

_Avoid copying data pointsAlt text: Interest in Manchester City: 12am=40, 12pm=56, 6pm=100, 9pm=45. Liverpool interest 12am=20, 12:30pm=40, 6pm=30, 9pm=20._

**Charts for editorial use
**
Charts with an editorial focus are used to support a key takeaway. This takeaway and the main data points confirming it should be the focus of the alt text. To create the alt text, leverage existing content from the body text, labels, and any text in the graph.

For example, a chart from a weekly digest showing highlights of physical activity may have a written summary of the total change in step count. This can be used in the alt text.

![A fitness digest with a takeaway and metric highlighted in sample alt text.](../../../assets/images/1b127ee5b468-m5v7afru-02-Editorial-Chart-(1).png)

_In charts with an editorial focus, highlight the main takeaway and metricsAlt text: Your step count was 55% higher this week vs last week with 4,106 additional steps on average._

**Charts for analysis**

Charts for analysis are meant to be reviewed as a whole, and offer pieces of data to be analyzed. They can be dense, appear alongside related charts, and have many takeaways. 

For charts that have one or two key takeaways, include these insights in the alt text. 

To avoid introducing unintentional bias in charts with many possible takeaways, highlight opportunities for exploration, such as a link to the data’s source. Emphasize key data points or mention that there isn’t a single takeaway.

![Chart for analysis with alt text that describes general structure and provides link to data.](../../../assets/images/c0b54cae93c8-m2kctoq6-03-Analyst-Chart.png)

_In charts used for analysis, mention the general structure, and highlight opportunities for more investigationAlt text: Comparison of annual high, avg, and low temperatures. Visit the link provided to explore the data in detail._

![Chart for analysis with alt text that inaccurately summarizes it.](../../../assets/images/b29d34b797e2-m2kcv16w-03-Analyst-Chart-1.png)

_Don’t summarize a chart used for analysisAlt text: High, average, and low temperatures varied widely over the course of the year._

**Use interactive charts**

To improve the screen reader experience,  consider using interactive charts instead of static images, especially for complex visualizations that are used for analysis. For interactive charts, a tooltip can show additional detail for specific data points.

See [Top Tips for Data Accessibility](../../blog/data-visualization-accessibility.md) for more ways to make these visualizations accessible.

![Chart for analysis with alt text that describes general structure and provides link to data.](../../../assets/images/625d54fa524e-m2kd1tma-Interactive-Chart.png)

_Use interactive charts for complicated visualizations_

### Video and motion alt text

As with still images, if the animated information isn’t elsewhere on the screen, then it is informative and needs alt text.

Long-form video content uses video description to narrate the visual elements of a video, so it doesn’t need alt text.

<video controls src="../../../assets/videos/85b75d5ab792-lwj7ncxm-GM3-Foundations-ContentDesign-AltText-1-v01.mp4" title="A tooltip labeled “star” appears when a cursor hovers over a star icon."></video>

[Open video](../../../assets/videos/85b75d5ab792-lwj7ncxm-GM3-Foundations-ContentDesign-AltText-1-v01.mp4)

Alt text on informative GIFs or motion assets should highlight the important points. Think of a heading or title you might give it, and that’s likely your alt text.

![alt=""](../../../assets/images/f78b12271458-lwj7mf38-24_do.png)

_Write alt text that summarizes the motion asset.Alt text: A tooltip labeled “star” appears when a cursor hovers over a star icon._

![alt=""](../../../assets/images/e2f1076d2b83-lwj7mptb-25_don't.png)

_Don’t write about every aspect of the motion.Alt text: A hand-shaped cursor lands on a star-shaped icon and then a tooltip labeled “star” appears below the star._
