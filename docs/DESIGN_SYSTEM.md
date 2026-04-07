# Design System

## Overview

EcoNexus uses a custom design system built on TailwindCSS. All tokens are defined in `frontend/tailwind.config.js`.

---

## Color Palette

The primary palette uses **green** to reinforce the circular economy / sustainability theme. The secondary palette uses **sky blue** for informational and interactive elements.

### Primary — Forest Green

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#f0fdf4` | Page background, subtle tints |
| `primary-100` | `#dcfce7` | Hover backgrounds, badges |
| `primary-200` | `#bbf7d0` | Active states, highlights |
| `primary-300` | `#86efac` | Decorative accents |
| `primary-400` | `#4ade80` | Success icons |
| `primary-500` | `#22c55e` | Primary buttons (default state) |
| `primary-600` | `#16a34a` | Primary buttons (hover), links |
| `primary-700` | `#15803d` | Primary buttons (active), headings |
| `primary-800` | `#166534` | Dark mode surfaces |
| `primary-900` | `#14532d` | Dark text on light background |
| `primary-950` | `#052e16` | Maximum contrast |

### Secondary — Sky Blue

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-50` | `#f0f9ff` | Info backgrounds |
| `secondary-500` | `#0ea5e9` | Links, info icons |
| `secondary-600` | `#0284c7` | Link hover |
| `secondary-700` | `#0369a1` | Dark links |

### Neutrals (Tailwind defaults)

| Token | Usage |
|-------|-------|
| `gray-50` | Card backgrounds |
| `gray-100` | Input backgrounds |
| `gray-200` | Borders, dividers |
| `gray-400` | Placeholder text |
| `gray-600` | Secondary text |
| `gray-900` | Body text |
| `white` | Surfaces, modal backgrounds |

### Semantic Colors

| Color | Tailwind token | Usage |
|-------|---------------|-------|
| Success | `primary-500` / `green-500` | Confirmations, completed status |
| Warning | `amber-400` | Pending, reserved status |
| Error | `red-500` | Validation errors, alerts |
| Info | `secondary-500` | Informational banners |

---

## Typography

Font family: **Inter** (Google Fonts), fallback to `system-ui, sans-serif`.

| Scale | Class | Size | Weight | Line height | Usage |
|-------|-------|------|--------|-------------|-------|
| Display | `text-4xl font-bold` | 36px | 700 | 1.2 | Hero headings |
| H1 | `text-3xl font-bold` | 30px | 700 | 1.25 | Page titles |
| H2 | `text-2xl font-semibold` | 24px | 600 | 1.3 | Section headings |
| H3 | `text-xl font-semibold` | 20px | 600 | 1.4 | Card titles |
| H4 | `text-lg font-medium` | 18px | 500 | 1.4 | Sub-section labels |
| Body | `text-base` | 16px | 400 | 1.5 | Primary body text |
| Small | `text-sm` | 14px | 400 | 1.5 | Secondary text, captions |
| XSmall | `text-xs` | 12px | 400 | 1.6 | Badges, footnotes |

---

## Spacing

EcoNexus follows the Tailwind default 4px base grid. Key spacing values:

| Token | Value | Usage |
|-------|-------|-------|
| `p-1` / `m-1` | 4px | Micro spacing (icon padding) |
| `p-2` / `m-2` | 8px | Tight spacing inside components |
| `p-4` / `m-4` | 16px | Standard component padding |
| `p-6` / `m-6` | 24px | Card padding |
| `p-8` / `m-8` | 32px | Section padding |
| `p-12` / `m-12` | 48px | Large section gaps |
| `p-16` / `m-16` | 64px | Page-level vertical spacing |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 2px | Subtle rounding (chips) |
| `rounded` | 4px | Inputs, small buttons |
| `rounded-md` | 6px | Cards, dropdowns |
| `rounded-lg` | 8px | Modals, panels |
| `rounded-xl` | 12px | Feature cards |
| `rounded-full` | 9999px | Avatars, pill badges |

---

## Shadows

| Class | Usage |
|-------|-------|
| `shadow-sm` | Subtle card lift |
| `shadow` | Standard card |
| `shadow-md` | Hover state, dropdowns |
| `shadow-lg` | Modals, popovers |
| `shadow-none` | Flat / borderless |

---

## Component Library

### Buttons

| Variant | Classes | Usage |
|---------|---------|-------|
| Primary | `bg-primary-600 hover:bg-primary-700 text-white font-medium px-4 py-2 rounded-md` | Main CTAs |
| Secondary | `border border-primary-600 text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-md` | Secondary actions |
| Ghost | `text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-md` | Tertiary actions |
| Danger | `bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md` | Destructive actions |

Button sizes: `sm` (px-3 py-1 text-sm), `md` (px-4 py-2), `lg` (px-6 py-3 text-lg).

All buttons must have a visible `:focus-visible` ring: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500`.

### Cards

```
rounded-lg border border-gray-200 bg-white shadow-sm p-6
hover:shadow-md transition-shadow duration-200
```

Listing cards additionally include an image area (16:9 aspect ratio, `object-cover`) at the top.

### Form Inputs

```
w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
placeholder:text-gray-400
```

Error state: replace `border-gray-300` with `border-red-500`; add `text-red-600 text-sm mt-1` below the input.

### Badges / Status Chips

| Status | Classes |
|--------|---------|
| Available | `bg-primary-100 text-primary-800 text-xs px-2 py-0.5 rounded-full font-medium` |
| Reserved | `bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full font-medium` |
| Sold | `bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium` |

### Modals

- Backdrop: `fixed inset-0 bg-black/50 z-40` (Framer Motion fade-in)
- Panel: `relative bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto mt-20 z-50`
- Always trap focus inside modal; close on `Escape` key and backdrop click.

### Navigation

- Top navbar: `h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between`
- Active nav link: `text-primary-700 font-medium`
- Inactive nav link: `text-gray-600 hover:text-primary-600`

---

## Animation

Use **Framer Motion** for all motion. Follow the principle of purposeful, subtle animation.

| Use case | Motion |
|----------|--------|
| Page transitions | `opacity: 0→1`, `y: 10→0`, duration 0.2s |
| Modal open | `opacity: 0→1`, `scale: 0.95→1`, duration 0.15s |
| Card hover | CSS `transition-shadow` (no JS needed) |
| Notification toast | Slide in from top-right, duration 0.3s |
| List item enter | `opacity: 0→1`, stagger 50ms per item |

Respect `prefers-reduced-motion`: wrap animations in a check and skip them if the user has motion reduction enabled.

---

## Iconography

Use **lucide-react** for all icons. Guidelines:
- Default size: `size={20}` (20×20 px)
- Small (inside badges): `size={14}`
- Large (hero / empty state): `size={48}`
- Icons must always be accompanied by a text label or `aria-label` for accessibility.
- Stroke width: default `1.5`.

---

## Accessibility Guidelines

- Color contrast ratio: ≥ 4.5:1 for normal text, ≥ 3:1 for large text (WCAG AA).
- All interactive elements are reachable and operable by keyboard alone.
- Modals trap focus and return focus to the trigger element on close.
- Images have descriptive `alt` text; decorative images use `alt=""`.
- Form inputs are associated with `<label>` elements (or `aria-label`).
- Error messages are linked to inputs with `aria-describedby`.
- Status indicators use text/icons in addition to color.
- Skip-to-main-content link is the first focusable element on every page.
