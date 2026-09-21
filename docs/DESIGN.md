# ForgeFit - Design System & UI Guidelines

This document establishes the UI design language, color palette, typography, component patterns, and styling standards for **ForgeFit**.

---

## 1. Design Philosophy

ForgeFit is built with a **modern, athletic, dark-mode-first aesthetic** inspired by cutting-edge fitness platforms (such as Whoop, Gymshark, and Apple Fitness).

Key UI characteristics:
- **Dark Canvas:** Deep slate and zinc backgrounds provide high visual contrast, reduce eye strain, and give a sleek performance feel.
- **Vibrant Functional Accents:** Color is used intentionally to communicate health metrics:
  - **Emerald Green:** Health, workout progress, active streaks, XP gains.
  - **Electric Cyan / Blue:** Hydration, water intake, informational badges.
  - **Amber / Orange:** Nutrition, calories consumed, warm-ups.
  - **Crimson Red:** High heart rates, personal records (PRs), destructive actions, errors.
- **Tactile & Responsive:** Smooth hover states, subtle micro-interactions, clean cards, and clear typography.
- **Mobile-First Utility:** Gym-goers log sets on mobile screens with one hand; tap targets must be at least `44px` high with clear touch feedback.

---

## 2. Color Palette & Design Tokens

ForgeFit utilizes Tailwind CSS v4 colors mapped to consistent semantic tokens:

### 2.1 Surfaces & Backgrounds
| Token | Hex Value | Tailwind Class | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#09090b` | `bg-zinc-950` | Primary page background |
| **Surface (Card / Panel)**| `#18181b` | `bg-zinc-900` | Card, sidebar, modal, dropdown container |
| **Elevated Surface** | `#27272a` | `bg-zinc-800` | Hover states, active list items, input fields |
| **Border / Divider** | `#27272a` | `border-zinc-800` | Subtle borders, table separators |
| **Subtle Border** | `#3f3f46` | `border-zinc-700` | Card hover borders, focused input rings |

### 2.2 Functional Accents
| Metric / Feature | Accent Name | Primary Hex | Tailwind Classes |
| :--- | :--- | :--- | :--- |
| **Workouts & XP** | Emerald | `#10b981` | `text-emerald-400`, `bg-emerald-500`, `border-emerald-500/30` |
| **Hydration / Water** | Cyan / Sky | `#06b6d4` | `text-cyan-400`, `bg-cyan-500`, `border-cyan-500/30` |
| **Nutrition / Calories**| Amber | `#f59e0b` | `text-amber-400`, `bg-amber-500`, `border-amber-500/30` |
| **Destructive / Error** | Rose / Red | `#ef4444` | `text-rose-400`, `bg-rose-500`, `border-rose-500/30` |
| **AI Fitness Coach** | Violet / Purple | `#8b5cf6` | `text-violet-400`, `bg-violet-500`, `border-violet-500/30` |

### 2.3 Typography & Text Colors
| Role | Tailwind Class | Appearance |
| :--- | :--- | :--- |
| **Primary Text** | `text-zinc-100` | High-contrast headings and primary values |
| **Secondary Text** | `text-zinc-400` | Subtitles, descriptions, secondary stats |
| **Muted Text** | `text-zinc-500` | Helper text, disabled states, timestamps |

---

## 3. Typography Scale

ForgeFit uses clean sans-serif typography (`Inter`, `system-ui`).

- **Display / Metric Header:** `text-3xl font-extrabold tracking-tight` (e.g., "2,450 kcal", "Level 12")
- **Page Title:** `text-2xl font-bold text-zinc-100` (e.g., "Workout Tracker")
- **Section Heading:** `text-lg font-semibold text-zinc-200` (e.g., "Today's Logged Sets")
- **Body Regular:** `text-sm font-normal text-zinc-300` (General body copy and inputs)
- **Caption / Badge:** `text-xs font-medium uppercase tracking-wider text-zinc-400` (Tags, muscle groups)

---

## 4. Component Patterns & Rules

### 4.1 Class Merging with `cn()`
All reusable components must use `@/utils/cn` to merge default Tailwind classes with custom caller classes safely:

```typescript
import { cn } from '@/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export function Card({ className, elevated, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-zinc-800 bg-zinc-900 p-5 shadow-sm transition-all',
        elevated && 'bg-zinc-800/80 border-zinc-700',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

### 4.2 Standard Button Variants
Buttons must support clear states: `primary`, `secondary`, `outline`, `ghost`, and `destructive`.
- **Height & Touch Target:** Minimum `h-10` (`40px`) on desktop, `h-11` (`44px`) on mobile touch devices.
- **Corner Radius:** `rounded-lg`.
- **Loading State:** Must display an animated spinner (e.g. `Loader2` from `lucide-react`) and disable interactions.

### 4.3 Form Inputs
- Background: `bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500`
- Focus state: `focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500`
- Error state: `border-rose-500 focus:border-rose-500 focus:ring-rose-500`
- Always pair with clear labels (`text-xs font-medium text-zinc-300`) and field error messages.

### 4.4 Stat & Metric Cards
Used across the dashboard to display metrics (Calories, Water, XP, Workouts):
- Top row: Metric label + subtle icon badge (`p-2 rounded-lg bg-emerald-500/10 text-emerald-400`).
- Middle row: Large bold value (`text-2xl font-extrabold text-zinc-100`).
- Bottom row: Progress bar or percentage difference comparison.

---

## 5. Iconography Standards

- Use **Lucide React** (`lucide-react`) consistently across all components.
- Standard icon sizing:
  - Navigation / Sidebar: `w-5 h-5`
  - Badges / Inline text: `w-4 h-4`
  - Stat card icon containers: `w-6 h-6` inside a `p-2` rounded container
- Standard stroke width: `stroke-[1.75]` or `stroke-2`.

---

## 6. Notification & Feedback Guidelines

- Use **Sonner** (`sonner`) for non-blocking toast notifications.
- Placement: Bottom-right on desktop, top-center on mobile devices.
- Feedback types:
  - **Success:** `toast.success("Workout logged! +50 XP")`
  - **Error:** `toast.error("Failed to save changes. Please try again.")`
  - **Info:** `toast.info("Daily water target reached!")`

---

## 7. Tailwind CSS v4 Theme Specification

To ensure exact consistency across all UI features, the frontend uses the following `@theme` configuration:

```css
@import "tailwindcss";

@theme {
  /* Font Family */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;

  /* Functional Accents */
  --color-brand-emerald: #10b981;
  --color-brand-cyan: #06b6d4;
  --color-brand-amber: #f59e0b;
  --color-brand-rose: #ef4444;
  --color-brand-violet: #8b5cf6;

  /* Dark Surface Scale */
  --color-surface-canvas: #09090b;   /* zinc-950 */
  --color-surface-card: #18181b;     /* zinc-900 */
  --color-surface-elevated: #27272a; /* zinc-800 */
  --color-surface-border: #27272a;   /* border-zinc-800 */
  --color-surface-border-subtle: #3f3f46; /* border-zinc-700 */
}
```

### Font Loading Standard (`index.html`)
The application uses Google Fonts `Inter` (weights: 400, 500, 600, 700, 800) loaded via standard preconnect tags:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

