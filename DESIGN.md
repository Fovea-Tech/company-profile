# Design System

This document outlines the visual language and tokens for Fovea Technology, following a premium, minimalist B2B SaaS style.

## Core Visual Identity
- **Theme**: Light Theme by default (clean, bright, and professional).
- **Aesthetic**: Minimalist B2B SaaS, Dashboard-Centric. Displays actual dashboard widgets, statistics tables, or clean user interface screens to show competence.
- **Rhythm**: Generous whitespace (`py-24` / `py-32` on sections, `gap-12` or `gap-16` on major items) to allow content to breathe.

## Colors (OKLCH Guidance & Hex Equivalents)
We use a clean, professional palette representing **Focus, Clarity, and Vision**.

- **Primary / Ink**: Deep Slate Blue
  - Hex: `#0F172A` (Slate 900)
  - Role: Headings, body text, primary buttons background.
- **Secondary**: Electric Blue
  - Hex: `#3B82F6` (Blue 500)
  - Role: Primary branding color, focus outlines, primary buttons background (variant), accents.
- **Accent**: Teal
  - Hex: `#14B8A6` (Teal 500)
  - Role: Highlights, status indicators, subtle graphic elements.
- **Background / Canvas**: Very Light Slate
  - Hex: `#F8FAFC` (Slate 50)
  - Role: Main page background.
- **Surface**: Pure White
  - Hex: `#FFFFFF`
  - Role: Cards, containers, headers.
- **Muted / Borders**: Cool Gray
  - Hex: `#E5E7EB` (Gray 200) / `#F1F5F9` (Slate 100)
  - Role: Dividers, borders, subtle text elements.

## Typography
- **Heading Font Stack**: Geist, Inter, sans-serif.
  - Scale: Large display headings should be clamped to keep them elegant (e.g., `text-4xl md:text-6xl`, max `clamp(2rem, 5vw, 4.5rem)`).
  - Letter Spacing: display headings should have `tracking-tight` (approx `-0.02em` to `-0.04em`). No cramped overlapping.
- **Body Font Stack**: Inter, system-ui, sans-serif.
  - Line Length: Cap paragraph widths at `max-w-2xl` or `max-w-3xl` (~65-75ch) for maximum readability.
  - Line Height: `leading-relaxed` for prose, `leading-snug` for headers.

## Components & Visual Rules
- **Cards**:
  - Border: Thin border `border border-[#E5E7EB]` (no side-stripes, no thick borders).
  - Corner Radius: Soft, modern rounding of `rounded-2xl` (16px) or `rounded-[20px]`. Max `20px`, do not exceed.
  - Shadow: Soft, low-contrast shadow `shadow-sm` or `shadow-md` using slate colors (e.g., `shadow-slate-200/50`). No hard black shadows.
- **Buttons**:
  - Corner Radius: `rounded-lg` (8px) or `rounded-xl` (12px).
  - Transition: Smooth hover state with scaling/opacity shifts using `transition-all duration-200 ease-out-quart`.
- **Bans**:
  - No side-stripe borders as card accents.
  - No text-gradient.
  - No cartoonish flat illustrations or hand-drawn icons.
  - No big, saturated neon background shapes except subtle, blurred background gradients (`bg-gradient-to-tr from-blue-500/10 to-teal-500/10 blur-3xl`).

## Motion & Transitions
- **Reveal animations**: Fade-in and translate-up (`opacity-0 translate-y-4` to `opacity-100 translate-y-0`) with cubic bezier easing.
- **Hover effects**: Micro-interactions like slight lift (`hover:-translate-y-0.5`), subtle border color shifts, or clean background transitions.
- **Accessibility**: Wrap transitions in `@media (prefers-reduced-motion: reduce)` to disable motion for users with motion sensitivity.
