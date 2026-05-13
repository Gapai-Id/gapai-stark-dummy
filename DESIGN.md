# DESIGN.md — STARK v2 Design System

> Source of truth: `src/app/globals.css` (STARK v2 token block)
> Last updated: 2026-05-12

---

## Design Principles

- **Green-first**: Brand anchored in deep teal-green (`--brand-green-500: #118A6D`). Every screen should feel clean, warm, and purposeful.
- **Babbel-vibe**: Manrope for all headings — rounded geometric, friendly, confident. Plus Jakarta Sans for body.
- **Semantic tokens only**: Never use raw hex values in components. Always use CSS custom property tokens (`--brand-green-700`, `--text-primary`, etc.).
- **Mobile-first**: All layouts default to 375px max-width.
- **Surface hierarchy**: `--surface-page` (off-white) → `--surface-card` (white) → `--surface-card-tinted` (light green).

---

## Typography

### Font Families

| Token | Family | Usage |
|---|---|---|
| `--font-heading` | **Manrope** | All headings `h1–h6` — applied globally in `globals.css` |
| `--font-body` | **Plus Jakarta Sans** | Body text, labels, inputs, descriptions |
| `--font-mono` | ui-monospace, SFMono-Regular, Menlo | Code blocks, IDs |

> `--font-display` (Poppins) is legacy — loaded but not applied to any heading. Do not use in new screens.

### Applying Fonts

```css
/* Headings — automatic via globals.css base layer */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading); /* Manrope */
}

/* Body — default font-sans */
body {
  font-family: var(--font-body); /* Plus Jakarta Sans */
}
```

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
| `text-2xs` *(custom)* | 0.625rem | 10px | 1rem |

### Font Weights

| Token | Value | Usage |
|---|---|---|
| `font-normal` | 400 | Body text, descriptions |
| `font-medium` | 500 | Labels, nav items |
| `font-semibold` | 600 | Headings, button text, section titles |
| `font-bold` | 700 | Display headings, emphasis |

---

## Color Tokens

### Brand Green Scale

| Token | Value | Usage |
|---|---|---|
| `--brand-green-50` | `#E8F5F0` | Tinted card backgrounds (`--surface-card-tinted`) |
| `--brand-green-100` | `#C5E8DC` | Status done/active background |
| `--brand-green-200` | `#8BCFBA` | Decorative accents |
| `--brand-green-300` | `#51B698` | Light UI accents |
| `--brand-green-400` | `#2AA07D` | Hover states |
| `--brand-green-500` | `#118A6D` | **Primary brand — buttons, links, CTAs, `--text-brand`** |
| `--brand-green-600` | `#0E7A60` | Hover on primary |
| `--brand-green-700` | `#0B6A53` | **Hero backgrounds, `--surface-inverse`** |
| `--brand-green-800` | `#085A45` | Dark green text on light surfaces |
| `--brand-green-900` | `#054A38` | Darkest green variant |

### Neutral Scale

| Token | Value | Usage |
|---|---|---|
| `--neutral-0` | `#FFFFFF` | Card surfaces (`--surface-card`) |
| `--neutral-50` | `#F8FAF9` | Page background (`--surface-page`) |
| `--neutral-100` | `#F0F2F1` | Muted backgrounds, row alternates |
| `--neutral-200` | `#E0E4E2` | Subtle borders (`--border-subtle`) |
| `--neutral-300` | `#C8CEC9` | Default borders (`--border-default`) |
| `--neutral-400` | `#A8B0AC` | Placeholder text |
| `--neutral-500` | `#808A86` | Muted text (`--text-muted`) |
| `--neutral-600` | `#606A66` | Secondary text (`--text-secondary`) |
| `--neutral-700` | `#404A46` | Supporting dark text |
| `--neutral-800` | `#283028` | Dark backgrounds |
| `--neutral-900` | `#141A14` | Primary text (`--text-primary`) |

### Accent — Amber

| Token | Value | Usage |
|---|---|---|
| `--accent-amber-100` | `#FFF3CC` | Warning/waiting status background |
| `--accent-amber-500` | `#FFCC44` | Warning highlights, badges |
| `--accent-amber-700` | `#996600` | Warning/waiting status text |

### Accent — Blue

| Token | Value | Usage |
|---|---|---|
| `--accent-blue-100` | `#E6F0FF` | Info status background |
| `--accent-blue-500` | `#4488EE` | Info highlights, learning accents |
| `--accent-blue-700` | `#1144AA` | Info status text |

### Semantic Error

| Token | Value | Usage |
|---|---|---|
| `--semantic-error-100` | `#FFE6E6` | Error background |
| `--semantic-error-500` | `#EE4444` | Error primary |
| `--semantic-error-700` | `#AA1111` | Error text (`--text-error`) |

---

## Semantic Tokens

Use these in components — never use raw scale values directly.

### Surface

| Token | Value | Usage |
|---|---|---|
| `--surface-page` | `--neutral-50` (#F8FAF9) | Page/screen background |
| `--surface-card` | `--neutral-0` (#FFFFFF) | Card backgrounds |
| `--surface-card-tinted` | `--brand-green-50` | Tinted card variant |
| `--surface-card-cream` | `#FAF5E8` | Warm cream card variant |
| `--surface-inverse` | `--brand-green-700` | Dark green hero sections |

### Text

| Token | Value | Usage |
|---|---|---|
| `--text-primary` | `--neutral-900` | Main content text |
| `--text-secondary` | `--neutral-600` | Supporting text, descriptions |
| `--text-muted` | `--neutral-500` | Placeholders, captions, timestamps |
| `--text-inverse` | `--neutral-0` | Text on dark/green backgrounds |
| `--text-brand` | `--brand-green-500` | Links, brand-colored text |
| `--text-error` | `--semantic-error-700` | Inline error messages |

### Border

| Token | Value | Usage |
|---|---|---|
| `--border-subtle` | `--neutral-200` | Dividers, section separators |
| `--border-default` | `--neutral-300` | Input borders, card borders |
| `--border-brand` | `--brand-green-500` | Focus rings, selected states |

### Status

| Token | Background | Foreground | Usage |
|---|---|---|---|
| `--status-done-*` | `--brand-green-100` | `--brand-green-700` | Completed steps, verified |
| `--status-active-*` | `--brand-green-100` | `--brand-green-700` | In-progress, active state |
| `--status-waiting-*` | `--accent-amber-100` | `--accent-amber-700` | Pending, awaiting review |
| `--status-locked-*` | `--neutral-100` | `--neutral-500` | Locked, not yet available |
| `--status-error-*` | `--semantic-error-100` | `--semantic-error-700` | Failed, rejected |
| `--status-info-*` | `--accent-blue-100` | `--accent-blue-700` | Informational, learning |

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Inputs, tags, subtle lift |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.10)` | Cards (default) |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.14)` | Modals, bottom sheets, drawers |

---

## Border Radius

Base unit: `--radius: 0.5rem` (8px)

| Token | Value | Usage |
|---|---|---|
| `rounded-sm` | 4px | Tags, small badges |
| `rounded` | 8px | Inputs, small cards |
| `rounded-md` | 12px | Buttons, dropdowns |
| `rounded-lg` | 16px | Cards, modals |
| `rounded-xl` | 24px | Featured cards, hero bottom edge |
| `rounded-2xl` | 28px | Bottom sheets (`rounded-t-[28px]`) |
| `rounded-full` | 9999px | Avatars, pill badges, icon containers |

---

## Spacing & Layout

Base unit: **4px (0.25rem)**. Mobile-first, max-width 375px for candidate-facing screens.

| Common usage | Class | Value |
|---|---|---|
| Screen horizontal padding | `px-5` | 20px |
| Card internal padding | `p-4` | 16px |
| Section vertical gap | `space-y-4` / `space-y-5` | 16–20px |
| Hero top padding | `pt-12` | 48px |
| Bottom CTA margin | `pb-8` | 32px |
| Bottom nav height | `h-16` | 64px |

---

## Component Patterns

### Hero Zone (every main screen)

Every screen must have a visual anchor. Two patterns:

**Pattern A — Dark green hero** (Dashboard, success, result screens)
```tsx
<div className="bg-[var(--surface-inverse)] px-5 pt-12 pb-10 relative overflow-hidden">
  {/* Decorative circles */}
  <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
  <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/5" />
  {/* Content — white text */}
</div>
```

**Pattern B — White with strong green element** (Form flows, settings)
```tsx
<div className="pt-12 pb-8 text-center">
  {/* Logo, icon, or bold heading with green accent */}
</div>
```

### Buttons

```tsx
// Primary — brand green
<Button variant="primary">Lanjutkan</Button>
// bg: --brand-green-500, text: white, full width, h-[52px]

// Secondary — neutral surface
<Button variant="secondary">Batal</Button>
// bg: --neutral-100, text: --text-primary

// Outline — border only
<Button variant="outline">Lihat Detail</Button>
// border: --border-default, text: --text-primary
```

### Input Fields

```tsx
<InputField
  label="Nomor HP"
  type="tel"
  value={phone}
  onChange={setPhone}
  placeholder="Contoh: 081234567890"
  error={errors.phone}
/>
// Border: --border-default → focus: --border-brand
// Height: h-[52px], rounded-[8px]
// Error: red-400 border + red-500 text below
```

### Cards

```tsx
<Card variant="default">   // bg: --surface-card, shadow-md
<Card variant="tinted">    // bg: --surface-card-tinted (--brand-green-50)
```

### Status Badges

```tsx
<span className="px-2 py-0.5 rounded-full text-xs font-medium
  bg-[var(--status-done-bg)] text-[var(--status-done-fg)]">
  Selesai
</span>
```

### Icon Containers

```tsx
// On dark hero background
<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
  <Icon size={28} className="text-white" />
</div>

// On light background — use solid brand color
<div className="w-10 h-10 rounded-full bg-[var(--brand-green-100)] flex items-center justify-center">
  <Icon size={20} className="text-[var(--brand-green-700)]" />
</div>
```

---

## Icons

Library: **lucide-react** exclusively.

```tsx
import { ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react'

<Icon size={16} />   // xs — inline with small text
<Icon size={20} />   // sm — inline with body text (default)
<Icon size={24} />   // md — standalone icons
<Icon size={32} />   // lg — hero icons in containers
```

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| (default) | 375px | All candidate-facing screens — `max-w-[375px] mx-auto` |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |

---

## Changelog

| Date | Change |
|---|---|
| April 2026 | Initial extraction from gapai.id |
| 2026-05-12 | Full rewrite — aligned to STARK v2 token system (Figma Make spec). Updated heading font Poppins → Manrope. Added surface, text, border, status semantic tokens. Updated brand green scale, neutral scale, shadow values. |
