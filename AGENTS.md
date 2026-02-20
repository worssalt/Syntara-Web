# AGENTS.md - Syntara Web Project

Essential information for agentic coding agents working in this repository.

## Project Overview

**Next.js 16** website for SYNTARA — selling digital products and services to entrepreneurs and SMEs (B2C/B2SMB). Stack: React 19, TypeScript (strict), Tailwind CSS v4, shadcn/ui + Radix primitives, Framer Motion. Statically exported (`output: 'export'`). All UI text is in **Spanish**. Dark mode always active (`className="dark"` on `<html>`).

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

**Tests:** No test framework configured. When adding tests, use Vitest (preferred for Next.js/ESM) or Jest. No single test command available yet.

**CI pipeline** (`.github/workflows/ci.yml`) runs on push/PR to `main`/`develop`: `npx tsc --noEmit` → `npm run lint` → `npm run build`. Always ensure all three pass before committing.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout: Navbar + Footer, lang="es", className="dark"
│   ├── page.tsx            # Home page (server component)
│   ├── globals.css         # Tailwind v4 @theme block + CSS variables
│   ├── contacto/page.tsx
│   ├── nosotros/page.tsx   + NosotrosContent.tsx
│   ├── servicios-web/page.tsx + ServiciosWebContent.tsx
│   ├── sistemas-medida/page.tsx + SistemasMedidaContent.tsx
│   ├── privacidad/page.tsx
│   └── terminos/page.tsx
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Navbar, Footer, Logo
│   ├── sections/           # Page sections: Hero, Features
│   └── forms/              # ContactForm (react-hook-form + zod + Web3Forms)
└── lib/
    └── utils.ts            # cn() helper (clsx + tailwind-merge)
```

## Page Splitting Pattern

Pages with animations use a **two-file pattern**: `page.tsx` (server component with `Metadata` export) renders `*Content.tsx` (`"use client"` with Framer Motion).

## Code Style

### Directives & Imports

Place `"use client"` on line 1 (no blank line before first import). Group imports with a blank line between groups; no semicolons; double quotes.

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

**Import order:** React/Next.js → Third-party (alphabetical) → Internal `@/` aliases → Relative imports. Always use `@/` aliases.

### TypeScript

Strict mode on. All code must pass `npx tsc --noEmit` with zero errors.

- `interface` for component props, extending native element props when appropriate
- `type` for unions, utility types, non-component type aliases
- Infer form types from Zod: `type FormValues = z.infer<typeof formSchema>`
- Avoid `any`; use `unknown` + type narrowing

### React & Components

- **Server Components by default.** Add `"use client"` only for hooks, event handlers, browser APIs, or Framer Motion.
- Named exports: `export function Hero() {}`
- `React.forwardRef` + `displayName` for shadcn/ui primitives

### Naming Conventions

| Target | Convention | Example |
|--------|------------|---------|
| Component files | PascalCase | `ContactForm.tsx` |
| Component functions | PascalCase | `export function ContactForm()` |
| Utility functions | camelCase | `handleSubmit`, `cn` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_RETRIES` |
| Config objects | camelCase | `formSchema` |
| Types/Interfaces | PascalCase | `ButtonProps`, `FormValues` |

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
- Gradient: `className="bg-gradient-to-r from-primary to-accent"`

### Animations (Framer Motion)

Use only inside `"use client"` components:

```tsx
// Entry
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

// Scroll-triggered (runs once)
<motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}>

// Staggered
transition={{ delay: index * 0.1 }}
```

### Forms & Validation

- `react-hook-form` + `zod` + `zodResolver` for all forms
- Define Zod schema at top, infer type from it
- All validation messages in Spanish

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

Client-side variables require `NEXT_PUBLIC_` prefix.

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Form submission via Web3Forms |
| `NEXT_PUBLIC_GA_ID` | (optional) Google Analytics 4 ID |

Copy `.env.example` to `.env.local`. ContactForm simulates success when key is absent.

## Static Export Constraints

- `output: 'export'` in `next.config.ts` — no Node.js server at runtime
- No API routes (`app/api/` breaks build)
- `next/image` requires `unoptimized: true` (already set)
- Use external services for server-side logic (Web3Forms, etc.)

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
