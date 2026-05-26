# Portfolio Website

Neumorphism portfolio site built with React 19, TypeScript, Vite 6, and Tailwind CSS v4.

## Design System

**DESIGN.md** is the canonical source of truth for all design tokens (colors, typography, spacing, shadows).
Read it before making any visual changes.

Token flow: DESIGN.md (YAML) → manual sync → `src/index.css` (`@theme` block) → Tailwind utilities → Components

### Token naming mapping

| DESIGN.md token | CSS variable | Tailwind class prefix |
|---|---|---|
| `colors.neutral` | `--color-neu-base` | `bg-neu-base` |
| `colors.on-neutral` | `--color-neu-light` | `bg-neu-light` |
| `colors.shadow-source` | `--color-neu-dark` | `bg-neu-dark` |
| `colors.primary` | `--color-neu-accent` | `bg-neu-accent` / `text-neu-accent` |
| `colors.secondary` | `--color-neu-text-main` | `text-neu-text-main` |
| `colors.tertiary` | `--color-neu-text-sub` | `text-neu-text-sub` |

### Shadow tokens

Shadows are manually maintained in `src/index.css` (DESIGN.md YAML schema doesn't support shadow values).
See DESIGN.md "Elevation & Depth" section for documentation. When changing shadows, update both files.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (outputs to `docs/`)
- `npm run lint` — TypeScript type check
- `npm run design:lint` — validate DESIGN.md structure and WCAG contrast

## Architecture

- `src/index.css` — Tailwind v4 `@theme` block with all design tokens
- `src/components/` — all UI components use Tailwind utility classes referencing tokens
- `src/App.tsx` — single-page layout composing Hero, Timeline, Works, Contact sections
- Deploys to GitHub Pages via `.github/workflows/deploy.yml`

## Key conventions

- No borders — depth comes from dual-light shadows only
- Light source is top-left (dark shadow bottom-right, highlight top-left)
- `primary` accent color is used sparingly (focus rings, emphasis text, hover states)
- All interactive elements follow: rest → hover (accent color) → active (pressed shadow) → focus (ring)
