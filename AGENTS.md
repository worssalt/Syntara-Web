# AGENTS.md - Syntara Web Project

This document provides essential information for agentic coding agents working in this repository.

## Project Overview

This is a **Next.js 16** website for SYNTARA, focused on selling digital products and services to entrepreneurs and SMEs (B2C/B2SMB). The project uses React 19, TypeScript, Tailwind CSS v4, and shadcn/ui components. The site is statically exported (`output: 'export'`) and uses Spanish for all UI text.

## Build/Lint/Test Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server (after build)
npm run start

# Lint code
npm run lint

# Lint specific files
npm run lint src/components/ui/button.tsx
```

**Note:** No test framework is currently configured. When adding tests, consider Vitest or Jest.

## Type Checking

```bash
# TypeScript type check (no emit)
npx tsc --noEmit
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navbar/Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & CSS variables
│   └── [route]/            # Route segments (contact, servicios, etc.)
├── components/
│   ├── ui/                 # shadcn/ui primitives (button, input, etc.)
│   ├── layout/             # Layout components (Navbar, Footer, Logo)
│   ├── sections/           # Page sections (Hero, Features)
│   └── forms/              # Form components (ContactForm)
└── lib/
    └── utils.ts            # Utility functions (cn helper)
```

## Code Style Guidelines

### Imports

Order imports as follows, separated by blank lines:

1. React/Next.js imports
2. Third-party libraries (alphabetically)
3. Internal aliases (`@/components/...`, `@/lib/...`)
4. Relative imports

```tsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
```

### TypeScript

- **Strict mode is enabled.** All code must pass strict type checking.
- Use explicit types for function parameters and return values when not obvious.
- Use `interface` for component props; extend native element props.
- Use `type` for utility types, unions, and type aliases.

```tsx
// Component props interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
```

### React Conventions

- **Server Components by default.** Use `"use client"` directive only when needed (hooks, event handlers, browser APIs).
- Use named exports for components: `export function ComponentName() {}`
- Use `React.forwardRef` for UI primitives to allow ref forwarding.
- Set `displayName` on forwardRef components: `Button.displayName = "Button"`

```tsx
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // ...
  }
)
Button.displayName = "Button"
```

### Naming Conventions

- **Components:** PascalCase files matching component name (`Button.tsx`, `ContactForm.tsx`)
- **Functions:** camelCase (`handleSubmit`, `cn`)
- **Constants:** SCREAMING_SNAKE_CASE for true constants, camelCase for config objects
- **CSS classes:** Use Tailwind utility classes; no custom CSS classes except in globals.css
- **Type aliases:** PascalCase (`ButtonProps`, `formSchema`)

### Formatting

- Use double quotes for strings (consistent with Prettier defaults).
- No semicolons at end of statements (follow existing code).
- No trailing commas in imports/exports.
- 2-space indentation.

### Styling

- Use Tailwind CSS exclusively for styling.
- Use the `cn()` utility from `@/lib/utils` for conditional class merging.
- Use CSS variables for theming (defined in `globals.css`).
- Use Tailwind's `cn()` pattern for variant-based components:

```tsx
className={cn(buttonVariants({ variant, size, className }))}
```

### Forms & Validation

- Use `react-hook-form` with `zod` for form handling and validation.
- Define Zod schemas at the top of the file:

```tsx
const formSchema = z.object({
  name: z.string().min(2, { message: "..." }),
  email: z.string().email({ message: "..." }),
})
```

- Infer types from schemas: `z.infer<typeof formSchema>`

### Error Handling

- Use `try/catch` for async operations.
- Display user-friendly error messages in Spanish.
- Log errors to console with `console.error()`.

```tsx
try {
  const response = await fetch(url)
  if (!response.ok) throw new Error(data.message || "Error message")
} catch (error) {
  console.error(error)
  setErrorMessage(error instanceof Error ? error.message : "Ha ocurrido un error inesperado")
}
```

### Client Components

Mark components with `"use client"` when they use:
- React hooks (`useState`, `useEffect`, etc.)
- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs (`window`, `localStorage`, etc.)
- Framer Motion animations
- Form libraries with client-side state

### shadcn/ui Components

- This project uses shadcn/ui with Radix primitives.
- Components are in `src/components/ui/`.
- Use `components.json` configuration for adding new components.
- When adding new shadcn components: `npx shadcn@latest add <component>`

### Path Aliases

- `@/*` maps to `./src/*`
- Always use `@/` imports for internal modules, never relative paths across directories.

```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

## Environment Variables

- Environment variables must be prefixed with `NEXT_PUBLIC_` for client-side access.
- Example: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

## Static Export Considerations

- The project uses `output: 'export'` for static hosting.
- Images are unoptimized (`images: { unoptimized: true }`).
- No server-side API routes are available.
- Use external services (Web3Forms, Resend) for form submissions.

## UI Language

All user-facing text must be in **Spanish**:

```tsx
<Button>Enviar Solicitud</Button>
<p>Cuéntanos un poco más sobre tu proyecto</p>
```

## Common Tasks

### Adding a New Page

1. Create directory in `src/app/[route]/`
2. Add `page.tsx` with default export component
3. Import and compose section components

### Adding a New Section

1. Create in `src/components/sections/SectionName.tsx`
2. Export as named function
3. Import and use in relevant page

### Adding UI Components

```bash
npx shadcn@latest add <component-name>
```
