# DESIGN.md — Gapai Frontend Design System

> Extracted from [gapai.id](https://gapai.id) · April 2026
> Source of truth: `src/app/globals.css` (CSS vars + `@theme`) and `tailwind.config.ts`

---

## Design Principles

- **Green-first**: The brand is anchored in a vibrant teal-green (`#1EAB86`). Every UI surface should feel clean and fresh.
- **Semantic tokens only**: Never use raw hex or raw Tailwind palette classes in components. Always use `bg-primary`, `text-muted-foreground`, `border-border`, etc.
- **Mobile-first**: All layouts default to 375px and scale up.
- **Accessible contrast**: Light mode foreground (`#0d1524`) on white exceeds WCAG AA. Dark mode inverts appropriately.

---

## Color Tokens

### Brand Scale — Primary (Green)

| Token | Value | Usage |
|---|---|---|
| `primary-50` | `#edfaf5` | Hover backgrounds, tinted surfaces |
| `primary-100` | `#d0f5e8` | Light badges, highlights |
| `primary-200` | `#a3ebd4` | Borders on tinted surfaces |
| `primary-300` | `#6ddcba` | Decorative accents |
| `primary-400` | `#41c69e` | Dark mode primary hover |
| `primary-500` | `#1eab86` | **Brand primary — buttons, links, icons** |
| `primary-600` | `#118a6d` | Hover state on primary |
| `primary-700` | `#0d6e58` | Active/pressed state |
| `primary-800` | `#0a5443` | Dark text on light green |
| `primary-900` | `#083d31` | Darkest text variant |

### Brand Scale — Secondary (Amber / Orange)

| Token | Value | Usage |
|---|---|---|
| `secondary-300` | `#fde68a` | Light amber tint |
| `secondary-400` | `#fec23f` | **Badges, highlights, warnings** |
| `secondary-500` | `#f88c08` | Active amber, stronger accent |
| `secondary-600` | `#d97206` | Dark amber text |

### Error / Destructive

| Token | Value | Usage |
|---|---|---|
| `error-300` | `#fca5a5` | Light error background |
| `error-400` | `#f56060` | Dark mode destructive |
| `error-500` | `#f23030` | Light mode destructive |
| `error-600` | `#c41a1a` | Hover on destructive |

### Neutral (Slate-tinted)

| Token | Value | Usage |
|---|---|---|
| `neutral-50`  | `#f8fafc` | App background (dark mode surface) |
| `neutral-100` | `#f0f4f8` | Muted background, table rows |
| `neutral-200` | `#dde5f0` | Borders, dividers |
| `neutral-300` | `#b8cce0` | Placeholder borders |
| `neutral-400` | `#8aa8c4` | Dark mode muted foreground |
| `neutral-500` | `#6b7a8f` | Muted text, captions |
| `neutral-600` | `#4a5a6e` | Secondary text |
| `neutral-700` | `#2d3a4a` | Dark mode border |
| `neutral-800` | `#1a2536` | Dark mode card / surface |
| `neutral-900` | `#0d1524` | Dark mode background / light mode foreground |

### Semantic Tokens

These adapt automatically between light and dark mode via CSS variables.
Always use these in components — never use raw palette values.

| Token | Light | Dark | Usage |
|---|---|---|---|
| `background` | `#ffffff` | `#0d1524` | Page background |
| `foreground` | `#0d1524` | `#f8fafc` | Primary text |
| `surface` | `#f8fafc` | `#141e30` | Panel / section backgrounds |
| `card` | `#ffffff` | `#1a2536` | Card backgrounds |
| `card-foreground` | `#0d1524` | `#f8fafc` | Text inside cards |
| `muted` | `#f0f4f8` | `#1a2536` | Muted backgrounds |
| `muted-foreground` | `#6b7a8f` | `#8aa8c4` | Placeholder, helper text |
| `border` | `#dde5f0` | `#2d3a4a` | All borders |
| `input` | `#dde5f0` | `#2d3a4a` | Input borders |
| `ring` | `#1eab86` | `#41c69e` | Focus rings |
| `primary` | `#1eab86` | `#1eab86` | Primary actions |
| `primary-foreground` | `#ffffff` | `#ffffff` | Text on primary |
| `secondary` | `#f0f4f8` | `#1a2536` | Secondary actions |
| `secondary-foreground` | `#0d1524` | `#f0f4f8` | Text on secondary |
| `accent` | `#edfaf5` | `#0d3828` | Subtle highlights |
| `accent-foreground` | `#118a6d` | `#41c69e` | Text on accent |
| `destructive` | `#f23030` | `#f56060` | Delete, error actions |
| `destructive-foreground` | `#ffffff` | `#ffffff` | Text on destructive |
| `success` | `#1eab86` | `#41c69e` | Success states |
| `warning` | `#fec23f` | `#fec23f` | Warning states |
| `info` | `#2d68f8` | `#6b9cfb` | Info states |

---

## Typography

### Font Families

| Role | Family | Usage |
|---|---|---|
| `font-sans` | Plus Jakarta Sans | Body text, UI labels, inputs |
| `font-display` | Poppins | Headings (h1–h4), hero text |
| `font-mono` | ui-monospace, SFMono-Regular, Menlo | Code blocks, IDs |

### Size Scale

| Token | rem | px | Line Height |
|---|---|---|---|
| `text-xs` | 0.75rem | 12px | 1rem |
| `text-sm` | 0.875rem | 14px | 1.25rem |
| `text-base` | 1rem | 16px | 1.5rem |
| `text-lg` | 1.125rem | 18px | 1.75rem |
| `text-xl` | 1.25rem | 20px | 1.75rem |
| `text-2xl` | 1.5rem | 24px | 2rem |
| `text-3xl` | 1.875rem | 30px | 2.25rem |
| `text-4xl` | 2.25rem | 36px | 2.5rem |

### Font Weights

| Token | Value | Usage |
|---|---|---|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Labels, nav items |
| `font-semibold` | 600 | Headings, button text |
| `font-bold` | 700 | Display headings, emphasis |

---

## Spacing & Layout

Base unit: **4px (0.25rem)**

| Token | rem | px |
|---|---|---|
| `1` | 0.25rem | 4px |
| `2` | 0.5rem | 8px |
| `3` | 0.75rem | 12px |
| `4` | 1rem | 16px |
| `5` | 1.25rem | 20px |
| `6` | 1.5rem | 24px |
| `8` | 2rem | 32px |
| `10` | 2.5rem | 40px |
| `12` | 3rem | 48px |
| `16` | 4rem | 64px |
| `20` | 5rem | 80px |
| `24` | 6rem | 96px |

Container max-width: `max-w-screen-xl` (1280px), centered with `mx-auto`.

---

## Border Radius

| Token | rem | px | Usage |
|---|---|---|---|
| `rounded-sm` | 0.25rem | 4px | Tags, small badges |
| `rounded` | 0.5rem | 8px | Inputs, small cards |
| `rounded-md` | 0.75rem | 12px | Buttons, dropdowns |
| `rounded-lg` | 1rem | 16px | Cards, modals |
| `rounded-xl` | 1.5rem | 24px | Featured cards, hero sections |
| `rounded-full` | 9999px | — | Avatars, pill badges, icon buttons |

---

## Shadow Styles

| Token | Value | Usage |
|---|---|---|
| `shadow-sm` | `0 1px 3px rgba(0,0,0,.10), 0 1px 2px -1px rgba(0,0,0,.10)` | Inputs, tags |
| `shadow` | `0px 5px 12px rgba(0,0,0,0.10)` | Dropdowns, tooltips |
| `shadow-md` | `0px 4px 12px rgba(13,10,44,0.06)` | Cards (default) |
| `shadow-lg` | `0px 12px 34px rgba(13,10,44,0.08), 0px 34px 26px rgba(13,10,44,0.05)` | Modals, drawers |
| `shadow-xl` | `0px 10px 15px rgba(5,13,29,0.18)` | Floating panels |

---

## Components

### Buttons

```tsx
// Primary
<button className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-hover active:scale-95 transition-colors">
  Button
</button>

// Secondary
<button className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-secondary-foreground bg-secondary border border-border rounded-md hover:bg-muted transition-colors">
  Button
</button>

// Destructive
<button className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-destructive-foreground bg-destructive border border-transparent rounded-md hover:bg-destructive-hover transition-colors">
  Delete
</button>

// Ghost / Outline
<button className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-foreground bg-transparent border border-border rounded-md hover:bg-muted transition-colors">
  Button
</button>
```

**Size variants:**
- `sm`: `px-3 py-1.5 text-xs rounded`
- `md` (default): `px-5 py-2.5 text-sm rounded-md`
- `lg`: `px-6 py-3 text-base rounded-lg`
- `icon`: `p-2 rounded-md`

### Forms

```tsx
// Input
<input className="w-full px-3 py-2 text-sm text-foreground bg-background border border-input rounded-md shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors" />

// Label
<label className="block text-sm font-medium text-foreground mb-1.5" />

// Helper text
<p className="mt-1 text-xs text-muted-foreground" />

// Error text
<p className="mt-1 text-xs text-destructive" />
```

### Tables

```tsx
<table className="w-full text-sm text-left">
  <thead>
    <tr className="border-b border-border bg-muted">
      <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide" />
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-border hover:bg-muted/50 transition-colors">
      <td className="px-4 py-3 text-sm text-foreground" />
    </tr>
  </tbody>
</table>
```

### Modals & Dialogs

```tsx
// Overlay
<div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50" />

// Dialog panel
<div className="relative bg-card text-card-foreground rounded-xl shadow-lg border border-border w-full max-w-md mx-auto p-6" />
```

### Navigation

```tsx
// Top nav shell
<header className="fixed top-0 inset-x-0 h-[72px] xl:h-[88px] flex items-center bg-background/80 backdrop-blur-sm border-b border-border z-40 px-4">
  <nav className="flex items-center gap-6 w-full max-w-screen-xl mx-auto" />
</header>

// Nav link
<a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" />

// Active nav link
<a className="text-sm font-medium text-primary" />
```

### Feedback (Toast, Alerts, Empty States, Error States)

```tsx
// Success badge
<span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-success-foreground bg-success/10 rounded-full" />

// Warning badge
<span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-warning-foreground bg-warning/20 rounded-full" />

// Error badge
<span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-destructive-foreground bg-destructive/10 rounded-full" />
```

---

## Icons

Library: **lucide-react** exclusively.

```tsx
import { ChevronRight, Search, Plus } from 'lucide-react'

// Standard size
<Icon className="w-4 h-4" />       // sm — inline with text-sm
<Icon className="w-5 h-5" />       // md — inline with text-base (default)
<Icon className="w-6 h-6" />       // lg — standalone icons

// Colored
<Icon className="w-5 h-5 text-primary" />
<Icon className="w-5 h-5 text-muted-foreground" />
```

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|---|---|---|
| (default) | 375px | Mobile — all default Tailwind classes |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptop / small desktop |
| `xl:` | 1280px | Desktop (main layout shift) |
| `2xl:` | 1440px | Wide desktop |

Header height: `h-[72px]` mobile → `h-[88px]` xl+.
Container: `max-w-screen-xl mx-auto px-4 lg:px-6`.

---

## Dark Mode

- Strategy: `class` on `<html>` (toggle by adding/removing the `dark` class)
- Managed by: `useThemeStore` in `src/stores/ui-store.ts`
- All semantic tokens in `:root` / `.dark` in `globals.css` handle the swap automatically
- Use `dark:` variant only when a semantic token is not sufficient

```tsx
// Prefer semantic tokens (no dark: needed)
<div className="bg-background text-foreground border-border" />

// Use dark: only for one-off adjustments
<div className="bg-white dark:bg-neutral-900" />
```

---

## Accessibility

- Minimum contrast ratio: **4.5:1** for normal text, **3:1** for large text (WCAG AA)
- Focus rings: `focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`
- Interactive elements must have visible focus styles — never `focus:outline-none` alone
- Use semantic HTML (`<button>`, `<nav>`, `<main>`, `<header>`)
- Images: always include `alt` text
- Form inputs: always paired with a `<label>`

---

## Changelog

| Date | Change |
|---|---|
| April 2026 | Initial extraction from gapai.id — colors, typography, spacing, shadows, border-radius, component patterns |
