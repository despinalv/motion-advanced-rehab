# UI/UX Design Spec Sheet: Motion Advanced Rehab

This document outlines the technical design specifications required to replicate the exact "Motion Advanced Rehab" aesthetic in other projects.

## 1. Color Palette

The design uses a high-contrast dark mode aesthetic with a signature electric purple accent.

| Token Name | HEX Code | Usage |
| :--- | :--- | :--- |
| **Motion Black** | `#000000` | Global background, scrollbars. |
| **Motion Subtle** | `#121212` | Very dark sections, mobile mockups. |
| **Motion Surface** | `#1c1c1e` | Cards, panels, inputs (resembles Apple dark mode). |
| **Motion Accent** | `#7c3aed` | Branding, buttons, active states, halos, selection. |
| **Motion Text** | `#f5f5f7` | Primary text (Off-white). |
| **Motion Muted** | `#86868b` | Secondary text, subheaders, inactive icons. |

### Gradient / Utilitarian
- **Hero Image Mask**: `linear-gradient(to bottom, black 70%, transparent 100%)` (Note: used for blending images into the black background).
- **Glass Effect**: `bg-black/90` with `backdrop-blur-md` (used in navigation/floating bars).
- **Hover Overlays**: `bg-white/5` or `bg-white/10`.

---

## 2. Typography

**Font Family**: `Inter`, sans-serif.

### Hierarchy & Scaling
*Standard Tailwind ranges applied.*

| Element | Size (Tailwind) | Size (px/rem) | Weight | Tracking | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Headline (H1)** | `text-6xl` to `text-9xl` | 60px - 128px | `semibold` (600) | `tracking-tighter` (-0.05em) | `leading-none` (1) |
| **Section Title (H2)** | `text-4xl` to `text-6xl` | 36px - 60px | `semibold` (600) | `tracking-tighter` | `leading-tight` |
| **Card Title (H3)** | `text-2xl` | 24px | `bold` (700) | Normal | Normal |
| **Body Text** | `text-lg` | 18px | `light` (300) | Normal | `leading-relaxed` |
| **Labels / Overlines** | `text-xs` | 12px | `bold` (700) | `tracking-widest` (0.1em) | Uppercase |

**Notes**:
- Use `text-motion-muted` for one part of a headline vs `text-white` for the other to create visual depth (e.g., "Move Better." in gray, "Train Pain Free" in white).
- Use `tracking-tighter` for large headings to tighten the visual lock-up.

---

## 3. UI Components

### Cards & Surfaces
- **Background**: `bg-motion-surface` (`#1c1c1e`).
- **Border Radius**: `rounded-xl` (12px) or `rounded-2xl` (16px) for larger featured cards.
- **Borders**: Generally `border-none` or subtle `border border-white/5` for definition.
- **Interaction**:
    - Hover: `hover:bg-white/5` (lightens the surface).
    - Active: `active:scale-95` (tactile feedback).

### Buttons
- **Primary**:
    - Bg: `bg-white` (High contrast against black).
    - Text: `text-black`.
    - Hover: `hover:bg-gray-200`.
    - Shadow: `shadow-[0_0_20px_rgba(255,255,255,0.1)]`.
- **Ghost**:
    - Bg: Transparent.
    - Text: `text-white`.
    - Hover: `text-motion-accent`.

### Shadows & Glows
- **Accent Glow**: `shadow-[0_0_15px_rgba(124,58,237,0.5)]` (Used on active bar chart elements or focused items).
- **Floating Element**: `drop-shadow-2xl` (e.g., WhatsApp button).
- **Inner Glow**: `border border-white/10` acts as a subtle rim light.

---

## 4. Layout & Spacing

- **Container**: `max-w-7xl` centered (`mx-auto`).
- **Section Padding**: `py-16` (64px) or `py-24` (96px).
- **Grid Gaps**: Generous spacing, typically `gap-12` (48px) to `gap-20` (80px).
- **Alignment**:
    - **Hero**: Center-aligned on mobile, Left-aligned on Desktop (or vice versa depending on specific block).
    - **Flex**: Heavy use of `flex justify-between items-center` for card headers.

---

## 5. Effects & Physics

The "feel" of the site relies on smooth, non-linear animations.

### Animation Primitives
- **Cubic Bezier**: `cubic-bezier(0.16, 1, 0.3, 1)`
    - *Usage*: This curve starts fast and lands gently, simulating an expensive "weighted" mechanical feel (like Apple's iOS springs).
- **Durations**:
    - Page Load: `1s` or `1.2s`.
    - Hover/Micro-interactions: `300ms`.

### Named Animations
1.  **`fadeInUp`**:
    - **From**: `opacity: 0`, `translateY(30px)`
    - **To**: `opacity: 1`, `translateY(0)`
    - **Duration**: `1s`
    - **Curve**: `cubic-bezier(0.16, 1, 0.3, 1)`

2.  **`scaleIn`**:
    - **From**: `opacity: 0`, `scale(1.05)` (Slow zoom out effect)
    - **To**: `opacity: 1`, `scale(1)`
    - **Duration**: `1.2s`

3.  **Scroll Reveal (Observer)**:
    - Elements start with `.reveal-on-scroll` (`opacity: 0`, `translateY(40px)`).
    - When intersecting: add class `.is-visible`.
    - Transition: `transition: opacity 1s ..., transform 1s ...`.

### Scrollbar
- **Width**: `8px`.
- **Track**: `#000000`.
- **Thumb**: `#333`, `rounded-full`.

---

## 6. Implementation Notes (CSS Variables)

To implement this quickly in a new project, add these to your `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      motion: {
        black: '#000000',
        subtle: '#121212',
        surface: '#1c1c1e',
        accent: '#7c3aed',
        text: '#f5f5f7',
        muted: '#86868b',
      }
    },
    animation: {
      'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    },
    keyframes: {
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(30px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      }
    }
  }
}
```
