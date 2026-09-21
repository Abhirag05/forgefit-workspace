# ForgeFit - Design System & UI Guidelines

This document establishes the UI design language, color palette, typography, component patterns, and styling standards for **ForgeFit**.

---

## 1. Design Philosophy: Solo Leveling "The System" Aesthetic

ForgeFit is built with a **dark-mode, RPG-inspired athletic aesthetic modeled after the "System Window" from the anime *Solo Leveling*** (*Na Honjamanman Rebeleop*), merged with cutting-edge fitness telemetry.

The user experience treats everyday fitness as a hunter’s awakening journey—transforming workout and nutrition logging into personal progression:

### Key Aesthetic Tenets:
- **The "Player HUD" & Holographic Windows:** All primary panels, cards, and modals feel like floating, semi-translucent quest and status windows granted by "The System" (`glass-panel` with subtle neon edge glow).
- **Abyssal Void Canvas:** Deep midnight/pitch black (`#0a0a12` / `#050508`) canvas symbolizing the dungeon depths and shadow domain.
- **Mana & Monarch Glows:**
  - **Mana Cyan (`#00f0ff`):** Used for "System" prompts, hydration telemetry, level-up notifications, and floating quest completions.
  - **Shadow Monarch Purple (`#6a00ff`):** Used for XP progress bars, rank badges (E-Rank to S-Rank), and mystical aura glows.
  - **Penalty / Blood Crimson (`#ff4d4d`):** Used for high-intensity workouts, primary action triggers, critical PR alerts, and failure/penalty states.
- **Sharply Defined Visual Hierarchy:** High contrast, sharp geometric corners with subtle rounded bevels (`rounded-xl` / `rounded-2xl`), intense neon glows (`box-shadow: 0 0 20px rgba(...)`), and clear tactical typography.
- **Tactile Gamification:** Every action (logging a set, drinking water, hitting calorie goals) provides tactile visual feedback reminiscent of completing a daily quest.

---

## 2. Color Palette & Design Tokens

ForgeFit utilizes Tailwind CSS v4 colors mapped to consistent semantic tokens:

### 2.1 Surfaces & Backgrounds
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Canvas Background** | `#0a0a12` | Deep midnight canvas background |
| **Glass Panel / Card** | `rgba(255, 255, 255, 0.04)` | Glassmorphic cards with `backdrop-blur-md` |
| **Hover Card** | `rgba(255, 255, 255, 0.08)` | Hover elevation surface |
| **Border / Divider** | `rgba(255, 255, 255, 0.08)` | Subtle glass borders |
| **Glowing Border** | `rgba(255, 77, 77, 0.20)` | Active card hover with crimson glow |

### 2.2 Signature Functional Accents (Solo Leveling System Mapping)
| Metric / Feature | Solo Leveling Theme | Primary Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Action / Intensity** | Penalty / Blood Crimson | `#ff4d4d` | Primary buttons, active highlights, intense PR workouts |
| **Gamification / Ranks** | Shadow Monarch Purple | `#6a00ff` | XP badges, Level progression, Hunter Ranks (E to S) |
| **Hydration / System Prompts** | Mana Cyan / HUD Blue | `#00f0ff` | System notices, hydration telemetry, quest clears |
| **Nutrition / Fuel** | Dungeon Core Amber | `#f59e0b` | Calorie intake, macro energy breakdown |
| **AI Fitness Coach** | Sovereign Violet | `#6a00ff` | Gemini AI coach (The "System" Voice) |

### 2.3 Typography & Text Colors
| Role | Tailwind Class | Appearance |
| :--- | :--- | :--- |
| **Primary Text** | `text-white` | High-contrast headings and primary values |
| **Secondary Text** | `text-zinc-400` | Subtitles, descriptions, secondary stats |
| **Muted Text** | `text-zinc-500` | Helper text, disabled states, timestamps |

---

## 3. Typography Scale

ForgeFit uses athletic, geometric sans-serif typography (**`Poppins`**, `sans-serif`).

- **Display / Metric Header:** `text-4xl sm:text-6xl font-extrabold tracking-tight`
- **Page Title:** `text-2xl sm:text-3xl font-bold text-white`
- **Section Heading:** `text-lg sm:text-xl font-semibold text-zinc-100`
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
  --font-sans: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Signature ForgeFit Athletic Colors */
  --color-forge-red: #ff4d4d;
  --color-forge-purple: #6a00ff;
  --color-forge-cyan: #00f0ff;
  --color-forge-dark: #0a0a12;
  --color-forge-card: rgba(255, 255, 255, 0.04);
  --color-forge-border: rgba(255, 77, 77, 0.15);
}
```

### Font Loading Standard (`index.html`)
The application uses Google Fonts `Poppins` (weights: 300, 400, 500, 600, 700, 800) loaded via standard preconnect tags:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
```

