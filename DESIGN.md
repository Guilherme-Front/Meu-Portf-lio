---
name: Vibrant Synthetic
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#cfc2d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#988ca0'
  outline-variant: '#4d4354'
  surface-tint: '#ddb8ff'
  primary: '#ddb8ff'
  on-primary: '#490080'
  primary-container: '#9333ea'
  on-primary-container: '#f6e6ff'
  inverse-primary: '#861fdd'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb86b'
  on-tertiary: '#492900'
  tertiary-container: '#9a5c00'
  on-tertiary-container: '#ffe8d4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb8ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6800b4'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdcbc'
  tertiary-fixed-dim: '#ffb86b'
  on-tertiary-fixed: '#2c1700'
  on-tertiary-fixed-variant: '#683d00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 16px
  container-max: 1280px
---

## Brand & Style
The design system is built on a foundation of high-performance technology and digital precision. It targets a sophisticated audience of developers, creators, and power users who value speed and clarity. 

The aesthetic is a fusion of **Minimalism** and **Glassmorphism**, set against a deep, immersive dark canvas. It emphasizes a "Synthetic" feel—clean, sharp, and intentional. The emotional response is one of focused energy and reliability. Every interface element is designed to feel like a high-end tool: lightweight yet powerful.

## Colors
This design system utilizes a "Deep Dark" palette optimized for OLED displays and long-duration focus. 

- **Primary**: A true, vibrant purple (#9333ea) serves as the core action color. It is used for primary buttons, active states, and critical brand moments.
- **Secondary**: A sharp cyan (#06b6d4) provides a technical contrast, used for secondary data visualizations or accents.
- **Neutral**: The foundation is built on deep navies and slates to maintain a cooler, more professional tone than pure black.
- **Backgrounds**: Surfaces use varying levels of transparency and backdrop blurs to create a sense of verticality without relying on heavy borders.

## Typography
The typography strategy leverages high-readability sans-serifs and monospaced fonts to reinforce the technical narrative.

- **Headlines & Body**: Use *Geist* for its clean, geometric, and developer-friendly proportions. It maintains exceptional clarity at all sizes.
- **Labels & Data**: Use *JetBrains Mono* for functional metadata, code snippets, and labels. The monospaced nature ensures data alignment and adds to the "Synthetic" aesthetic.
- **Scale**: Headlines use tighter letter spacing and heavier weights to command attention, while body text is spaced for maximum legibility.

## Layout & Spacing
The layout follows a **Fluid Grid** system based on an 8px base unit (4px for micro-adjustments).

- **Desktop**: A 12-column grid with a maximum container width of 1280px. Gutters are fixed at 24px to provide ample breathing room between functional modules.
- **Mobile**: A 4-column grid with 16px side margins. Elements typically stack vertically, but compact components (like chips) may use horizontal scrolling.
- **Consistency**: Spacing should always be a multiple of the 4px unit to ensure mathematical harmony across the UI.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Tonal Layers** rather than traditional shadows.

- **Base Level**: The deepest background layer (#020617).
- **Surface Level**: Cards and containers use a semi-transparent fill (#1e1b4b33) with a `backdrop-filter: blur(12px)`.
- **Borders**: Instead of heavy shadows, use a subtle "Inner Glow" or a low-opacity 1px border (#ffffff1a) to define edges.
- **Active Elevation**: Elements being interacted with increase in background opacity and may gain a subtle outer glow using the primary purple color at 20% opacity.

## Shapes
The design system uses **Soft** roundedness to balance the technical sharpness of the fonts.

- **Standard Elements**: Buttons and input fields use a 0.25rem (4px) radius.
- **Large Elements**: Cards and modals use a 0.75rem (12px) radius.
- **Interactive States**: Focus rings should follow the shape of the parent element exactly, with a 2px offset.

## Components
- **Buttons**: Primary buttons are solid #9333ea with white text. Secondary buttons use a ghost style with a 1px #9333ea border. All buttons have a high-speed hover transition (150ms).
- **Chips**: Small, pill-shaped indicators using the secondary cyan color for status and the primary purple for selections.
- **Input Fields**: Dark, semi-transparent backgrounds with a 1px border that glows primary purple on focus. Labels use the monospaced font.
- **Lists**: Interactive rows with a subtle hover state (background opacity increase) and a left-side accent bar in primary purple for active items.
- **Cards**: Glass-morphic surfaces with blurred backgrounds. Content inside should be strictly aligned to the internal padding (24px).
- **Modals**: Centered overlays with a heavy backdrop blur (20px) and a subtle 1px border.