# AGENTS.md - Syntara Web Project

Essential information for agentic coding agents working in this repository.

## Project Overview

**Next.js 16.1.6** website for SYNTARA — selling digital products and services to entrepreneurs and SMEs (B2C/B2SMB). Stack: React 19, TypeScript (strict), Tailwind CSS v4, shadcn/ui + Radix primitives, Framer Motion v12. Statically exported (`output: 'export'`). All UI text is in **Spanish**. Dark mode always active (`className="dark"` on `<html>`).

## Commands

```bash
# Development server
npm run dev

# Production build (static export to /out)
npm run build

# TypeScript type check (no emit) — run before every commit
npx tsc --noEmit

# Lint entire project
npm run lint

# Lint specific file(s)
npx eslint src/components/ui/button.tsx

# Run tests (Vitest — not yet in package.json scripts, install first)
npx vitest                        # all tests
npx vitest src/hooks/useCurrency  # single test file
```

**Tests:** Vitest is used (see `src/hooks/useCurrency.test.ts`). No `test` script in `package.json` yet — add it or run `npx vitest` directly. Use Vitest (preferred) or Jest for new tests.

**CI pipeline** (`.github/workflows/ci.yml`) runs on push/PR to `main`/`develop`: `npx tsc --noEmit` → `npm run lint` → `npm run build`. All three must pass before committing.

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout: Navbar + Footer, lang="es", className="dark"
│   ├── page.tsx                # Home page (server component)
│   ├── globals.css             # Tailwind v4 @theme block + CSS variables + keyframes
│   ├── error.tsx               # "use client" Next.js error boundary
│   ├── not-found.tsx           # 404 page (server component)
│   ├── contacto/               page.tsx + ContactoContent.tsx
│   ├── nosotros/               page.tsx + NosotrosContent.tsx
│   ├── servicios-web/          page.tsx + ServiciosWebContent.tsx
│   ├── sistemas-medida/        page.tsx + SistemasMedidaContent.tsx
│   ├── casos/sistema-restaurante/  page.tsx + RestaurantSystemContent.tsx
│   ├── privacidad/page.tsx     # Static legal page (server component)
│   └── terminos/page.tsx       # Static legal page (server component)
├── components/
│   ├── ui/                     # shadcn/ui primitives (button, card, form, input, …)
│   ├── layout/                 # Navbar (client), Footer, Logo
│   ├── sections/               # Hero, Features, CaseStudy, SystemMonitor, Testimonials, ContactSection
│   └── forms/                  # ContactForm (react-hook-form + zod + Cloudflare Worker/Web3Forms)
├── hooks/
│   ├── useCurrency.ts          # Detects user locale → "$" or "S/" symbol via ipapi.co
│   └── useCurrency.test.ts     # Vitest unit tests
└── lib/
    └── utils.ts                # cn() helper (clsx + tailwind-merge)

cloudflare/contact-worker/      # Standalone Cloudflare Worker (email relay via Resend)
```

## Page Splitting Pattern

Pages with animations use a **two-file pattern**: `page.tsx` (server component with `Metadata` export) renders `*Content.tsx` (`"use client"` with Framer Motion).

```tsx
// page.tsx — server component
import type { Metadata } from "next"
import { NosotrosContent } from "./NosotrosContent"

export const metadata: Metadata = { title: "Nosotros | SYNTARA" }
export default function NosotrosPage() { return <NosotrosContent /> }

// NosotrosContent.tsx — client component
"use client"
import { motion } from "framer-motion"
export function NosotrosContent() { /* Framer Motion JSX */ }
```

## Code Style

### Directives & Imports

Place `"use client"` on line 1 (no blank line before first import). Group imports with a blank line between groups; no semicolons; double quotes.

```tsx
"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
```

**Import order:** React/Next.js → Third-party (alphabetical) → Internal `@/` aliases → Relative imports. Always use `@/` aliases, never relative `../`.

### TypeScript

Strict mode on. All code must pass `npx tsc --noEmit` with zero errors. Note: `**/*.test.ts` files are excluded from `tsconfig.json`.

- `interface` for component props, extending native element props when appropriate
- `type` for unions, utility types, non-component type aliases
- Infer form types from Zod: `type FormValues = z.infer<typeof formSchema>`
- Avoid `any`; use `unknown` + type narrowing

### React & Components

- **Server Components by default.** Add `"use client"` only for hooks, event handlers, browser APIs, or Framer Motion.
- Named exports only: `export function Hero() {}`
- `React.forwardRef` + `displayName` for shadcn/ui primitives

### Naming Conventions

| Target | Convention | Example |
|--------|------------|---------|
| Component files | PascalCase | `ContactForm.tsx` |
| Component functions | PascalCase | `export function ContactForm()` |
| Utility / handler functions | camelCase | `handleSubmit`, `cn` |
| Module-level constants | camelCase or SCREAMING_SNAKE_CASE | `formSchema`, `MAX_RETRIES` |
| Config/schema objects | camelCase | `formSchema` |
| Types / Interfaces | PascalCase | `ButtonProps`, `FormValues` |
| Content components | `[Name]Content.tsx` | `NosotrosContent.tsx` |

### Formatting

- No semicolons
- Double quotes for strings
- 2-space indentation
- No trailing commas in imports/exports

### Styling

- **Tailwind CSS v4 exclusively.** No custom CSS except tokens/keyframes in `globals.css`.
- Use `cn()` for conditional/merged classes
- Use semantic tokens: `className="bg-primary text-primary-foreground"`, NOT `className="bg-[#00B7C7]"`
- Brand colors: Primary `#00B7C7` (hsl 187 100% 39%), Accent `#2ECBD3` (hsl 184 72% 47%)
- Neon accents: `--color-syntara-cyan: #00E5FF`, `--color-syntara-green: #39FF14`
- Gradient: `className="bg-gradient-to-r from-primary to-accent"`

### Animations (Framer Motion v12)

Use only inside `"use client"` components:

```tsx
// Entry (on mount)
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

// Scroll-triggered (runs once)
<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>

// Staggered children
transition={{ delay: index * 0.2 }}

// Slide in from left/right
initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}

// Scale entrance
initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}

// Modal overlay with AnimatePresence
<AnimatePresence>
  {isOpen && (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}>
```

### Forms & Validation

- `react-hook-form` + `zod` + `zodResolver` for all forms
- Define Zod schema at module top level, infer type from it
- All validation messages in **Spanish**
- Include a hidden honeypot field (`website`) to detect bots
- Reject submissions made in < 2500 ms (timing check via `useRef(Date.now())`)

```tsx
const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Ingresa un correo electrónico válido" }),
  website: z.string().max(0, { message: "Se detectó actividad inválida." }).optional(), // honeypot
})
type FormValues = z.infer<typeof formSchema>
```

### Error Handling

```tsx
try {
  const response = await fetch(url, { method: "POST", body: JSON.stringify(values) })
  if (!response.ok) throw new Error((await response.text()) || "Error del servidor")
  setIsSuccess(true)
  form.reset()
} catch (error) {
  console.error(error)
  setErrorMessage(error instanceof Error ? error.message : "Ha ocurrido un error inesperado")
} finally {
  setIsSubmitting(false)
}
```

Render errors inline in Spanish: `"Ha ocurrido un error inesperado"`. Silence non-critical errors (e.g., analytics) with empty `catch {}`.

## Environment Variables

All variables require `NEXT_PUBLIC_` prefix (static export — no server runtime). Copy `.env.example` to `.env.local`.

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Optional | Cloudflare Worker URL — primary form endpoint |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Optional | Cloudflare Turnstile site key (bot protection) |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Optional | Web3Forms fallback if Worker endpoint absent |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 measurement ID |

`ContactForm` submission priority: Cloudflare Worker → Web3Forms → simulated success (dev/demo).

## Static Export Constraints

- `output: 'export'` in `next.config.ts` — no Node.js server at runtime
- No API routes (`app/api/` breaks the build)
- `next/image` requires `unoptimized: true` (already set)
- Use external services for server-side logic (Cloudflare Worker, Web3Forms, ipapi.co)

## Common Tasks

**Add new page with animations:**
1. Create `src/app/[route]/page.tsx` — server component with `Metadata`, renders `*Content`
2. Create `src/app/[route]/*Content.tsx` — `"use client"` with Framer Motion
3. Add nav link in `src/components/layout/Navbar.tsx`

**Add shadcn/ui component:**
```bash
npx shadcn@latest add <component-name>
```
New components land in `src/components/ui/`.

**Add a custom hook with tests:**
1. Create `src/hooks/useMyHook.ts`
2. Create `src/hooks/useMyHook.test.ts` using Vitest (`describe`, `it`, `expect`, `vi`)
3. Note: test files are excluded from `tsconfig.json` — import Vitest APIs from `"vitest"`
