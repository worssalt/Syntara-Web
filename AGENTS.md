# AGENTS.md - Syntara Web Project

Essential information for agentic coding agents working in this repository.

## Project Overview

**Next.js 16** website for SYNTARA — selling digital products and services to entrepreneurs and SMEs (B2C/B2SMB). Stack: React 19, TypeScript (strict), Tailwind CSS v4, shadcn/ui + Radix primitives, Framer Motion. Statically exported (`output: 'export'`). All UI text is in **Spanish**. The site always renders in dark mode (`className="dark"` hardcoded on `<html>`).

## Commands

```bash
# Development server
npm run dev

# Production build (static export to /out)
npm run build

# TypeScript type check (no emit)
npx tsc --noEmit

# Lint entire project
npm run lint

# Lint specific file(s)
npx eslint src/components/ui/button.tsx
```

**Tests:** No test framework is configured. When adding tests, use Vitest (preferred for Next.js/ESM) or Jest. There is no command to run a single test yet.

**CI pipeline** (`.github/workflows/ci.yml`) runs on push/PR to `main`/`develop`:
1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run build`

Always ensure all three pass before committing.

## Project Structure

```
src/
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout: Navbar + Footer, lang="es", className="dark"
│   ├── page.tsx                 # Home page (server component)
│   ├── globals.css              # Tailwind v4 @theme block + CSS variable tokens
│   ├── contacto/page.tsx
│   ├── nosotros/
│   │   ├── page.tsx             # Server component with Metadata export
│   │   └── NosotrosContent.tsx  # Client component for animated content
│   ├── servicios-web/
│   │   ├── page.tsx
│   │   └── ServiciosWebContent.tsx
│   ├── sistemas-medida/
│   │   ├── page.tsx
│   │   └── SistemasMedidaContent.tsx
│   ├── privacidad/page.tsx
│   └── terminos/page.tsx
├── components/
│   ├── ui/                      # shadcn/ui primitives (button, card, form, input, …)
│   ├── layout/                  # Navbar, Footer, Logo
│   ├── sections/                # Page sections: Hero, Features
│   └── forms/                   # ContactForm (react-hook-form + zod + Web3Forms)
└── lib/
    └── utils.ts                 # cn() helper (clsx + tailwind-merge)
```

## Page Splitting Pattern

Pages that need animations follow a **two-file pattern**:

- `page.tsx` — server component, exports `Metadata`, renders a single `*Content` component
- `*Content.tsx` — `"use client"` component that uses Framer Motion

```tsx
// app/servicios-web/page.tsx  (server component)
import type { Metadata } from "next"
import { ServiciosWebContent } from "./ServiciosWebContent"

export const metadata: Metadata = { title: "..." }

export default function Page() {
  return <ServiciosWebContent />
}
```

## Code Style

### Directives & Imports

Place `"use client"` on line 1 when required (no blank line before first import).
Group imports with a blank line between groups; no semicolons; double quotes.

```tsx
"use client"

import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
```

Import order:
1. React / Next.js (`next/image`, `next/link`, `next/font/google`)
2. Third-party libraries (alphabetical)
3. Internal `@/` aliases (components, then lib)
4. Relative imports (avoid across directories)

Always use `@/` aliases — never relative paths like `../../components`.

### TypeScript

Strict mode is on. All code must pass `npx tsc --noEmit` with zero errors.

- `interface` for component props, extending native element props when appropriate
- `type` for unions, utility types, and non-component type aliases
- Infer form types from Zod schemas: `type FormValues = z.infer<typeof formSchema>`
- Avoid `any`; use `unknown` + type narrowing

```tsx
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined"
}
```

### React & Components

- **Server Components by default.** Add `"use client"` only when using hooks, event handlers, browser APIs, or Framer Motion.
- Named exports for all components: `export function Hero() {}`
- `React.forwardRef` + `displayName` for all shadcn/ui primitives:

```tsx
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => { … }
)
Button.displayName = "Button"
```

### Naming Conventions

| Target | Convention | Example |
|---|---|---|
| Component files | PascalCase | `ContactForm.tsx` |
| Component functions | PascalCase | `export function ContactForm()` |
| Utility functions | camelCase | `handleSubmit`, `cn` |
| True constants | SCREAMING_SNAKE_CASE | `MAX_RETRIES` |
| Config objects | camelCase | `formSchema` |
| Type / Interface | PascalCase | `ButtonProps`, `FormValues` |

### Formatting

- No semicolons
- Double quotes for strings
- 2-space indentation
- No trailing commas in import/export lists
- ESLint v9 flat config (`eslint.config.mjs`) extends `next/core-web-vitals` + `next/typescript`

### Styling

- **Tailwind CSS v4 exclusively.** No custom CSS except tokens/keyframes in `globals.css`.
- Use `cn()` from `@/lib/utils` for conditional/merged classes.
- All theme tokens are CSS variables; reference them via semantic names:

```tsx
// Good — semantic token
className="bg-primary text-primary-foreground"
// Avoid — raw color value
className="bg-[#00B7C7]"
```

Brand colors (defined in `globals.css`):
- Primary: `hsl(187 100% 39%)` → `#00B7C7` (SYNTARA Cyan)
- Accent: `hsl(184 72% 47%)` → `#2ECBD3` (SYNTARA Teal)

Gradient pattern used for CTAs and headings:
```tsx
className="bg-gradient-to-r from-primary to-accent"
className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-indigo-500"
```

Dark mode is always active via `.dark` on `<html>`. Do not add light-only styles.

### Animations (Framer Motion)

Use Framer Motion only inside `"use client"` components. Standard patterns:

```tsx
// Entry animation
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

// Scroll-triggered (runs once)
<motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}>

// Staggered list
transition={{ delay: index * 0.1 }}
```

### Forms & Validation

- `react-hook-form` + `zod` + `zodResolver` for all forms.
- Define the Zod schema at the top of the file; infer the type from it.
- All validation messages in Spanish.

```tsx
const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Ingresa un correo electrónico válido" }),
})
type FormValues = z.infer<typeof formSchema>
```

### Error Handling

```tsx
try {
  const response = await fetch(url)
  if (!response.ok) throw new Error(data.message || "Error del servidor")
} catch (error) {
  console.error(error)
  setError(error instanceof Error ? error.message : "Ha ocurrido un error inesperado")
} finally {
  setIsLoading(false)
}
```

## Environment Variables

Client-side variables must use the `NEXT_PUBLIC_` prefix.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Form submission via Web3Forms |
| `NEXT_PUBLIC_GA_ID` | (optional) Google Analytics 4 measurement ID (p.ej. G-XXXXXXXXXX) |

Copy `.env.example` to `.env.local` for local development. `ContactForm.tsx` gracefully simulates success when the key is absent.

## Static Export Constraints

- `output: 'export'` in `next.config.ts` — no Node.js server at runtime.
- No API routes (`app/api/` routes will break the build).
- `next/image` requires `unoptimized: true` (already set).
- Use external services for any server-side logic (Web3Forms for email, etc.).

## Common Tasks

### Add a New Page (with animations)

1. `mkdir src/app/[route]`
2. Create `page.tsx` — server component exporting `Metadata` + rendering `*Content`
3. Create `*Content.tsx` — `"use client"` component with Framer Motion layout
4. Add nav link in `src/components/layout/Navbar.tsx` if needed

### Add a New Section Component

1. Create `src/components/sections/SectionName.tsx` as a server component (default)
2. Use named export: `export function SectionName() {}`
3. Import in the relevant page or content component

### Add a shadcn/ui Component

```bash
npx shadcn@latest add <component-name>
```

New components land in `src/components/ui/`. Do not manually edit shadcn primitives unless necessary; prefer wrapping them.
