# Door Panel Designer

## What This Is

Door Panel Designer is a PWA for carpenters and joiners who need to design door panel layouts precisely. Getting panel heights, widths, gaps, and margins right relative to door dimensions is currently done manually with no live feedback and no way to compare multiple doors side-by-side in a single session. This app solves that with a live scaled preview, dimension sliders, derived stats, multi-door session management, and one-click PDF spec sheet export — all offline-capable with no backend.

## Core Value

A live door preview that updates in real time as dimension sliders change — if this doesn't work accurately and instantly, nothing else matters.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

(None yet — ship to validate)

### Active

<!-- Current scope. Building toward these. -->

- [ ] Live door preview: scaled SVG of the door with two panels, gap indicator, and overflow warning — updates in real time
- [ ] Dimension sliders: controls for door width/height, panel widths (both panels), top/bottom panel heights, and edge margin
- [ ] Stats panel: derived values table — panel dimensions, gap, edge margin, coverage percentage with progress bar
- [ ] Multiple door configs: add, remove, and rename configurations in a single session; switch via tabs
- [ ] PDF spec sheet export: per-door jsPDF export with dimension table and scaled panel layout diagram
- [ ] PWA / installable: service worker + manifest so the app works offline and can be installed on phone or desktop

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- Server / backend — local-only app; no data needs to leave the browser
- Auth / login — no user accounts; no concept of users
- Data persistence — session state only; no saving between sessions

## Context

React 18 + Vite SPA with all state in memory (no persistence). Top-level `App` holds an array of door configs and the active door ID. Three leaf components — `DoorPreview`, `ControlPanel`, `DoorStats` — each receive the active config as props. All calculation logic lives in `src/utils/calculations.js` as pure functions. PDF generation is a standalone utility in `src/utils/pdfExport.js` using jsPDF directly.

## Constraints

- **Tech stack**: React 18 + Vite + CSS Modules + jsPDF + vite-plugin-pwa — chosen for component model fit, zero-config PWA, and in-browser PDF generation
- **Hosting**: Vercel free tier — deploys from `main` on GitHub push; no environment variables needed

## Key Decisions

<!-- Decisions that constrain future work. Add throughout project lifecycle. -->

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| All state in memory, no persistence | No backend required; session-only use case | — Pending |
| Pure calculation functions in utils/ | Easily testable; no side effects | — Pending |
| CSS Modules for styling | Scoped styles with no build-time overhead | — Pending |

---
*Last updated: 2026-03-30 after GSD structure initialised from plan.md*
