---
title: "Text fields"
source_url: "https://m3.material.io/components/text-fields/guidelines"
lastmod: "2026-05-18"
snapshot_at: "2026-05-21T00:38:04.260Z"
section: "components"
assets:
  - "assets/images/91d75ba7bf80-lyqb5o7k-1-(1).png"
  - "assets/images/e12fe4baa609-lx31ssyn-1.png"
  - "assets/images/bc3b290ff302-lx31t4yp-2.png"
  - "assets/images/17ead9bfb981-lx31tc9a-3.png"
  - "assets/images/ec21b18cefe0-lx31u7r0-4.png"
  - "assets/images/de6802c4c592-lx31v0nn-5.png"
  - "assets/images/e32fd1281c85-lx31vds5-6.png"
  - "assets/images/ed57cfadb92f-lx31vnye-7_do.png"
  - "assets/images/789deab14337-lx31vw2z-8_dont.png"
  - "assets/images/0a5d141f151a-m2j3kn4a-9.png"
  - "assets/images/9a41816dcf28-m2j3kqed-10.png"
  - "assets/images/683c2efbea0d-lx31y44j-11.png"
  - "assets/videos/ca194bd50285-lx32tcjs-GM3-Components-TextFields-Guidelines-1-v01.mp4"
  - "assets/images/e7111f817ebf-lx31ykco-13_dont.png"
  - "assets/images/473578279505-lx320mke-14_dont.png"
  - "assets/images/889b3667e6c3-lx32132w-15.png"
  - "assets/images/b20e1b59a29b-lx322ilp-16.png"
  - "assets/images/fae44945e682-lx322ww5-17.png"
  - "assets/videos/4ff0acdd0519-lx32tu4z-GM3-Components-TextFields-Guidelines-2-1-v01.mp4"
  - "assets/videos/9f84d2f4970b-lx32uir5-GM3-Components-TextFields-Guidelines-2-2-v01.mp4"
  - "assets/videos/cd461a65a094-lx32usx4-GM3-Components-TextFields-Guidelines-2-3-v01.mp4"
  - "assets/images/ef7f6d619aae-lx323bkz-21.png"
  - "assets/images/1684de899efb-lx323jpq-22.png"
  - "assets/images/d27adfae6fc7-lx3246iw-23.png"
  - "assets/images/a0c0d6b77a7d-lx324ofo-24.png"
  - "assets/videos/77dc205acb38-lx32v93h-GM3-Components-TextFields-Guidelines-3-1-v01.mp4"
  - "assets/videos/91c4562d4417-lx32vmu8-GM3-Components-TextFields-Guidelines-3-2-v01.mp4"
  - "assets/images/9287973ab801-lx325xha-27_caution.png"
  - "assets/images/8f00f0645c41-m5vj8xje-28.png"
  - "assets/images/b20542ce399d-lx3270td-28.png"
  - "assets/images/863ec78017c3-lx32b33u-29.png"
  - "assets/images/454abf725bc9-lx32b91b-30.png"
  - "assets/images/f2fc7a2788b3-lx32c2h0-Full-to-max-1P.png"
  - "assets/images/3ed321b3c5fa-lx32d5ny-responsive-layout-dont.png"
  - "assets/images/c748022bcbbf-lx32dfqc-31.png"
---

# Text fields

Text fields let users enter text into a UI

## Guidelines

![A side by side view of a filled and a outlined text field.](../../../assets/images/91d75ba7bf80-lyqb5o7k-1-(1).png)

_Filled and outlined text fields_

## Usage

Use a text field when someone needs to enter text into a UI, such as filling in contact or payment information.

![Mobile UI of contact form with several text fields. ](../../../assets/images/e12fe4baa609-lx31ssyn-1.png)

_Contact form using outlined text fields_

There are two variants of text fields:

1.  Filled text fields

2.  Outlined text fields


Both variants of text fields use a container to provide a visual cue for interaction and provide the same functionality.

![Side by side view of a populated and unpopulated filled text field. ](../../../assets/images/bc3b290ff302-lx31t4yp-2.png)

_Filled text field_

![Side by side view of a populated and unpopulated outlined text field. ](../../../assets/images/17ead9bfb981-lx31tc9a-3.png)

_Outlined text field_

### Outlined text fields

Outlined text fields have less visual emphasis than filled text fields. When they appear in places like forms (where many text fields are placed together), their reduced emphasis helps simplify the layout.

![App screen with 1 focused and 1 unfocused outlined text field.](../../../assets/images/ec21b18cefe0-lx31u7r0-4.png)

_Login screen with outlined text fields_

## Choosing text fields

### Choosing text fields

Both variants of text field provide the same functionality. The variant of text field used can depend on style alone.

Choose the variant that:

-   Works best with an app’s visual style

-   Best accommodates the UI's goals

-   Is most distinct from other components (like buttons) and surrounding content

![Mobile UI of a contact form with several filled text fields. ](../../../assets/images/de6802c4c592-lx31v0nn-5.png)

_Mobile form using filled text fields_

![Mobile UI of a contact form with several outlined text fields. ](../../../assets/images/e32fd1281c85-lx31vds5-6.png)

_The same mobile form using outlined text fields_

### Using both text field variants on the same screen

If both variants of text field are used in a UI, they should be used consistently within different sections, and not intermixed within the same region. 

For example, use outlined text fields in one section and filled text fields in another.

![Mobile UI of a contact form with several filled text fields, and an open dialog on top using an outlined text field. ](../../../assets/images/ed57cfadb92f-lx31vnye-7_do.png)

_When using both variants of text fields in a UI, separate them by region_

![Mobile UI of a contact form with a mix of outlined and filled text fields.](../../../assets/images/789deab14337-lx31vw2z-8_dont.png)

_When using both variants of text fields, don't use both next to each other or within the same form_

## Anatomy

### Filled text field

![Diagram of filled text field indicating the 10 parts of its anatomy.](../../../assets/images/0a5d141f151a-m2j3kn4a-9.png)

_ContainerLeading icon (optional)Label text in empty fieldLabel text in populated fieldTrailing icon (optional)Focused active IndicatorCaretInput textSupporting text (optional)Enabled active Indicator_

### Outlined text field

![Diagram of an outlined text field indicating the 9 parts of its anatomy.](../../../assets/images/9a41816dcf28-m2j3kqed-10.png)

_Enabled container outlineLabel text in empty fieldLeading icon (optional)Label text in populated fieldTrailing icon (optional)Focused container outlineCaretInput textSupporting text (optional)_

### Containers

Containers improve the discoverability of text fields by creating contrast between the text field and surrounding content.

**Fill and stroke**
A text field container has a fill and a stroke either around the entire container, or just the bottom edge. The color and thickness of a stroke can change to indicate when the text field is active. 

**Rounded corners**
The container of an outlined text field has rounded corners, while the container of a filled text field has rounded top corners and square bottom corners.

![Side by side view of the containers of a filled and outlined text field.](../../../assets/images/683c2efbea0d-lx31y44j-11.png)

_Text field containers_

### Label text

Label text tells people what information is requested. Every text field should have a label.

Label text should be aligned with the input text, and always visible. It can be placed in the middle of a text field, or rest near the top of the container.

Label text shouldn't be truncated or take up multiple lines. Keep it short, clear, and fully visible.

<video controls src="../../../assets/videos/ca194bd50285-lx32tcjs-GM3-Components-TextFields-Guidelines-1-v01.mp4" title="Animation of 2 text field’s label text changing position when empty and populated."></video>

[Open video](../../../assets/videos/ca194bd50285-lx32tcjs-GM3-Components-TextFields-Guidelines-1-v01.mp4)

![Text field with very long label text, too long to display fully display inside the text field container.](../../../assets/images/e7111f817ebf-lx31ykco-13_dont.png)

_Don’t truncate label text. Keep it short, clear, and fully visible._

![Text field with very long label text split into 2 lines. ](../../../assets/images/473578279505-lx320mke-14_dont.png)

_Label text shouldn’t take up multiple lines_

### Adjacent label

A text field doesn't require a label if the field's purpose is indicated by a separate, adjacent label. 

Adjacent labels should be aligned to the leading edge of the text field container.

![Mobile UI of a contact form with label texts placed outside and on top of the text fields. ](../../../assets/images/889b3667e6c3-lx32132w-15.png)

_Text fields with adjacent labels_

### Required text indicator

To show a field is required, display an asterisk (\*) next to the label text, and explain that asterisks indicate required fields in one of two ways:

-   Supporting text

-   A single note at the beginning of the form

Additional best practices include:

-   Indicate all required fields

-   If required text has a particular color, use the same color for the asterisk

![Mobile UI of a contact form showing supporting text below the text field, indicating an input is required. ](../../../assets/images/b20e1b59a29b-lx322ilp-16.png)

_Asterisk with required supporting text_

### Input text

Input text is text a person has entered into a text field.

Text fields can display input text in the following ways:

-   **Single line** text fields display only one line of text
-   **Multi-line** text fields grow to accommodate multiple lines of text
-   **Text areas** are fixed-height fields

![Text field with populated input text. ](../../../assets/images/fae44945e682-lx322ww5-17.png)

_Input text in a filled text field_

<video controls src="../../../assets/videos/4ff0acdd0519-lx32tu4z-GM3-Components-TextFields-Guidelines-2-1-v01.mp4" title="Text field with very long input text that scrolls sideways. "></video>

[Open video](../../../assets/videos/4ff0acdd0519-lx32tu4z-GM3-Components-TextFields-Guidelines-2-1-v01.mp4)

<video controls src="../../../assets/videos/9f84d2f4970b-lx32uir5-GM3-Components-TextFields-Guidelines-2-2-v01.mp4" title="Text field with very long input text that wraps into a second line, expanding the text field container. "></video>

[Open video](../../../assets/videos/9f84d2f4970b-lx32uir5-GM3-Components-TextFields-Guidelines-2-2-v01.mp4)

<video controls src="../../../assets/videos/cd461a65a094-lx32usx4-GM3-Components-TextFields-Guidelines-2-3-v01.mp4" title="Text area with enough space to allow a very long input text to wrap into a second line without the need to expand the container."></video>

[Open video](../../../assets/videos/cd461a65a094-lx32usx4-GM3-Components-TextFields-Guidelines-2-3-v01.mp4)

### Prefix text

Text fields can contain prefix text such as currency symbol.

![Text field with a currency prefix before the input text. ](../../../assets/images/ef7f6d619aae-lx323bkz-21.png)

_A text field with a currency symbol text prefix_

### Suffix text

Text fields can contain suffix text such as unit of measurement or email domain.

![Text field with a suffix after the input text indicating a maximum input of 100. ](../../../assets/images/1684de899efb-lx323jpq-22.png)

_A text field with a grading scale as suffix_

![Text field with a suffix after the input text indicating an email address. ](../../../assets/images/d27adfae6fc7-lx3246iw-23.png)

_A text field with an email domain suffix_

### Supporting text & character counter

Supporting text conveys additional information about the input field, such as how it will be used. It should ideally be one line, though may wrap to multiple lines if required. It can be either persistently visible or visible only on focus.

If there is a character or word limit, include a character or word counter. They display the ratio of characters used and the total character limit.

![A side by side view of a text field with supporting text aligned with the trailing side, and a character counter aligned with the trailing side. ](../../../assets/images/a0c0d6b77a7d-lx324ofo-24.png)

_Supporting textCharacter counter_

### Error text

For text fields that validate their content such as passwords, replace supporting text with error text. Swapping supporting text with error text prevents new lines of text from bumping content and changing the layout.

-   If only one error is possible, error text should describe how to avoid the error
-   If multiple errors are possible, error text should describe how to avoid the most likely error

<video controls src="../../../assets/videos/77dc205acb38-lx32v93h-GM3-Components-TextFields-Guidelines-3-1-v01.mp4" title="Mobile UI of a sign up form indicating a invalid entry, and a hint on how to resolve as supporting text below the container. "></video>

[Open video](../../../assets/videos/77dc205acb38-lx32v93h-GM3-Components-TextFields-Guidelines-3-1-v01.mp4)

<video controls src="../../../assets/videos/91c4562d4417-lx32vmu8-GM3-Components-TextFields-Guidelines-3-2-v01.mp4" title="Mobile UI of a sign up form with an invalid text field entry. The regular supporting text remains above the error message. "></video>

[Open video](../../../assets/videos/91c4562d4417-lx32vmu8-GM3-Components-TextFields-Guidelines-3-2-v01.mp4)

![Mobile UI of a sign up form with an invalid text field entry. The error message wraps to 2 lines. ](../../../assets/images/9287973ab801-lx325xha-27_caution.png)

_Long errors can wrap to multiple lines if there isn't enough space to clearly describe the error. In this case, ensure padding between text fields is sufficient to prevent multi-lined errors from bumping layout content._

### Error icon

It’s strongly recommended to show an error icon when the text field is in the error state. 

This highlights the error for people with visual impairments, and provides an additional sensory indicator.

![2 text fields with error messages. The active text field has a thicker border. Both text fields have a trailing error icon.](../../../assets/images/8f00f0645c41-m5vj8xje-28.png)

_The error icon is an important second visual indicator that a text field has an error_

### Icons & images

Icons in text fields are optional. Text field icons can: 

-   Describe valid input methods such as a microphone icon
-   Provide affordances to access additional functionality such as clearing the content of a field
-   Express an error

Leading and trailing icons change their position based on LTR or RTL contexts.

Images that are 24dp in height can be placed inside of text fields. This image height allows for optimal top and bottom padding within the field and is consistent with icon size recommendations.

1.  **Icon signifier** Icon signifiers can describe the type of input a text field requires, and be touch targets for nested components. For example, a calendar icon may be tapped to reveal a date picker.
2.  **Valid or error icon
    **Iconography can indicate both valid and invalid inputs, making error states clear for colorblind users. 
3.  **Clear icon
    **Clear icons let a person clear an entire input field. They appear only when input text is present.
4.  **Voice input icon
    **A microphone icon signifies that people can input characters using voice. 
5.  **Dropdown icon
    **A dropdown arrow indicates that a text field has a nested selection component.
6.  **Image
    **An image can help contextualize the required input text such as a credit card number.

![Side by side view of text fields with different icons and images as trailing elements within the container. ](../../../assets/images/b20542ce399d-lx3270td-28.png)

_Icon signifierValid or error icon Clear icon Voice input iconDropdown iconImage_

### Read-only fields

Read-only text fields display pre-filled text that people cannot edit. 

A read-only text field is styled the same as a regular text field and is clearly labeled as read-only.

![Read only filled text field. ](../../../assets/images/863ec78017c3-lx32b33u-29.png)

_A filled read-only text field_

![Read only outlined text field. ](../../../assets/images/454abf725bc9-lx32b91b-30.png)

_An outlined read-only text field_

## Adaptive design

As layouts adapt to larger screens and different window size classes, apply flexible container dimensions to text fields. Set minimum and maximum values for margins, padding, and container dimensions as layouts scale so that typography adjusts for better reading experiences.

![UI for creating a new album in a side by side view on mobile and tablet. ](../../../assets/images/f2fc7a2788b3-lx32c2h0-Full-to-max-1P.png)

_For compact window sizes, text fields can span the full width of the display. For medium and expanded window sizes, text fields should be bound by flexible margins or other containers._

As text fields expand in fluid layouts, avoid maintaining fixed margins and typography properties. This can lead to extra long text fields. 

For example, text fields should not span the full width of a large screen.

![Tablet UI with text fields spanning the complete width of the screen. ](../../../assets/images/3ed321b3c5fa-lx32d5ny-responsive-layout-dont.png)

_Don’t use fixed text field margins on large devices. Text fields shouldn’t span the full width of a large screen._

### Density

Dense text fields enable people to scan and take action on large amounts of information.

![Tablet UI with desne text field as part of event creation form. ](../../../assets/images/c748022bcbbf-lx32dfqc-31.png)

_A form with dense text fields_

#### **Avoid applying density by default**

Don't apply density to text fields by default. This lowers their targets below the recommended 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure this density setting can be easily reverted when it's active, keep all the targets to change it at a minimum of 48x48 CSS pixels each.
