---
version: "alpha"
name: "Neumorphism Portfolio"
description: "Soft UI design system inspired by physical extruded plastic — raised surfaces, recessed inputs, and a single accent color."

colors:
  primary: "#6D5DFC"
  secondary: "#4A4A4A"
  tertiary: "#7A7A7A"
  neutral: "#E0E5EC"
  on-neutral: "#FFFFFF"
  shadow-source: "#A3B1C6"

typography:
  h1:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 1.1
  h2:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 1.875rem
    fontWeight: 700
    lineHeight: 1.3
  h3:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: 600
    letterSpacing: 0.025em
  caption:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 0.75rem
    fontWeight: 600
    letterSpacing: 0.05em

rounded:
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px

components:
  button-primary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.lg}"
    padding: 8px 32px
  button-icon:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    padding: 16px
  card:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.xl}"
  card-interactive:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.xl}"
  input-field:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  tag:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.full}"
    padding: 4px 12px
---

# Neumorphism Portfolio

## Overview

Soft UI meets Minimal Geometry. The interface evokes the tactile feel of
extruded plastic — every surface is either **raised** (floating above the
base) or **recessed** (pressed into it). Depth is created exclusively
through dual-light shadows, not borders or color fills. The palette is
deliberately muted: a single blue-purple accent against a warm gray canvas,
letting shadow and light do the visual storytelling.

Target feel: calm, approachable, quietly premium — like a well-designed
consumer electronics product.

## Colors

The palette is built around a neutral gray canvas with a single accent.

- **Primary (#6D5DFC):** Soft violet — the sole accent. Used for focus rings,
  timeline year labels, the hero name, and interactive hover states. It
  provides just enough color to guide attention without overwhelming the
  soft aesthetic.
- **Secondary (#4A4A4A):** Dark gray for headings and primary text. Dark
  enough for readability, warm enough to sit comfortably on the gray base.
- **Tertiary (#7A7A7A):** Medium gray for descriptions, labels, metadata,
  and placeholder text.
- **Neutral (#E0E5EC):** The canvas. Every surface lives on this color. It is
  the midpoint between the light source (on-neutral) and the shadow source
  (shadow-source), which is what makes the neumorphic illusion possible.
- **On-neutral (#FFFFFF):** Pure white — the light source color. Used as the
  light-side shadow component to create the raised illusion.
- **Shadow-source (#A3B1C6):** Cool gray — the shadow source color. Used as
  the dark-side shadow component. Its blue undertone keeps shadows looking
  natural on the warm base.

## Typography

Inter is the sole typeface — clean, neutral, and well-suited to the soft
aesthetic. The system uses six levels:

- **h1:** Hero name display (4.5rem / 72px, bold). The largest element on
  the page, given neumorphic text-shadow for embossed depth.
- **h2:** Section headings (1.875rem / 30px, bold). Centered with
  text-shadow for consistency.
- **h3:** Card and item titles (1.25rem / 20px, bold).
- **body:** Default body text (1rem / 16px). Used for descriptions and
  paragraphs.
- **body-sm:** Small body text (0.875rem / 14px). Reserved for future use
  in dense layouts or secondary descriptions.
- **label:** Form labels and role subtitles (0.875rem / 14px, semi-bold,
  tracked).
- **caption:** Tags and micro-text (0.75rem / 12px, semi-bold, wide-tracked).

## Layout

The layout uses a **centered max-width** model with responsive breakpoints.

- Mobile: single-column, full-width with 24px side padding.
- Desktop (md: 768px+): wider layouts, side-by-side arrangements.
- Max widths: 6xl (1152px) for Hero/Works, 4xl (896px) for Timeline,
  3xl (768px) for Contact.

Spacing follows an 8px base grid with 4px half-steps:

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Image container padding |
| sm | 8px | Form element gaps, tag padding |
| md | 16px | Card image container padding, content padding |
| lg | 24px | Card content padding, section side padding |
| xl | 32px | Contact form outer padding |
| xxl | 48px | Section vertical padding (py-20 equivalent) |

## Elevation & Depth

Depth is the defining characteristic of this design system. Every surface
exists in one of four shadow states. Shadows are **dual-light**: a dark
shadow offset in one direction paired with a light highlight offset in the
opposite direction, simulating a single overhead light source.

**Flat (raised surface):**
Cards, buttons, timeline dots, tags.
```
9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.6)
```

**Pressed (recessed surface):**
Inputs, image wells, timeline groove, active buttons.
```
inset 6px 6px 10px 0 rgba(163, 177, 198, 0.7), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.8)
```

**Hover (elevated surface):**
Interactive card hover state — a more pronounced flat shadow.
```
12px 12px 20px rgba(163, 177, 198, 0.7), -12px -12px 20px rgba(255, 255, 255, 0.7)
```

**Small (subtle raised):**
Tags and small decorative elements.
```
5px 5px 10px rgba(163, 177, 198, 0.6), -5px -5px 10px rgba(255, 255, 255, 0.6)
```

**Text shadow** for embossed headings:
```
2px 2px 4px rgba(163, 177, 198, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.8)
```

> **Note:** Shadow tokens are maintained manually in `src/index.css` because
> the DESIGN.md YAML schema does not support shadow values. The prose above
> is the authoritative documentation for these values.

## Shapes

The shape language is **softly rounded**. No sharp corners exist in the
system. The rounding scale provides four levels:

| Token | Value | Usage |
|-------|-------|-------|
| sm | 12px | Reserved for future small elements |
| md | 16px | Work card image containers |
| lg | 20px | Buttons, form inputs |
| xl | 24px | Cards |
| full | 9999px | Timeline dots, icon buttons, tags, timeline groove |

## Components

### Button

Two variants sharing the same base style:
- **Primary (`button-primary`):** Rectangular with rounded-lg corners,
  flat shadow, accent-colored text on hover, pressed shadow on active.
  Padding varies by context (default 8px 32px, can be wider for CTAs).
- **Icon (`button-icon`):** Circular (rounded-full), flat shadow,
  same hover/active pattern. Padding 16px, content centered.

Both variants use `focus:ring-2 ring-primary/50` for keyboard accessibility.

### Card

Content container with flat shadow and rounded-xl corners.
Interactive variant adds a hover transition to the elevated shadow.

### Input Field

Text inputs and textareas use the pressed (inset) shadow to appear
recessed into the surface. Rounded-lg corners, generous horizontal
padding (24px). Labels sit above in tertiary color.

### Tag

Small chip elements with subtle flat shadow (small), rounded-full,
tertiary text color. Used for technology labels on project cards.

## Do's and Don'ts

- Do use dual-light shadows (one dark, one light) for every elevation
- Do keep the base color (#E0E5EC) as the background for all raised elements
- Do use the primary accent sparingly — it should highlight, not dominate
- Do apply text-shadow only to section headings, never to body text
- Don't use borders — depth comes from shadows alone
- Don't mix flat and pressed shadows on the same logical surface
- Don't use more than two font weights (400 regular, 700 bold) per component
- Don't change the shadow directionality — light always comes from the
  top-left
