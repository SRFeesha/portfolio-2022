# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev    # Start development server (localhost:3000)
npm run build  # Build for production
npm run start  # Start production server
```

## Architecture

**Stack:** Next.js 12 with React 18, Tailwind CSS v4, Motion (animations), Lucide React (icons)

**Routing:** File-based routing via `pages/` directory. Case studies live in `pages/case-studies/`.

**Path aliases (jsconfig.json):**
- `@/components/*` → `src/components/*`
- `@/assets/*` → `public/assets/*`
- `@/lib/*` → `src/lib/*`

## Styling Patterns

Tailwind CSS v4 with custom utilities defined in `styles/globals.css`:

- **Button variants:** `btn btn-primary`, `btn btn-secondary`, `btn btn-flat`, `btn btn-navigation`
- **Fonts:** Inter Tight (`font-display`) for headings, Inter (`font-sans`) for body
- **Design tokens:** Defined via `@theme` in globals.css

Use the `cn()` utility from `@/lib/utils` for conditional class composition:
```jsx
import { cn } from '@/lib/utils';
cn('base-class', condition && 'conditional-class')
```

## Component Structure

Components in `src/components/` use index files for exports. Import pattern:
```jsx
import Button from '@/components/button';
import Navigation from '@/components/navigation';
```

## Key Files

- `pages/_app.jsx` - App wrapper with Navigation, Footer, Analytics
- `styles/globals.css` - Tailwind config, custom utilities, animations
- `src/lib/utils.ts` - cn() helper for class merging
