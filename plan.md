# Door Panel Designer

## Overview
A PWA for designing door panel dimensions with a live visual preview, multi-door session management, and PDF spec sheet export. Built for carpenters, joiners, and their teams.

## Problem
Designing door panel layouts requires precise proportional thinking — getting the panel heights, widths, gaps, and margins right relative to the door dimensions. Currently done manually, with no live feedback and no way to compare multiple doors side by side in the same session.

## Tech Stack
- **Frontend:** React 18 + Vite — component model maps cleanly to the designer's distinct UI zones
- **PWA:** vite-plugin-pwa — zero-config service worker and manifest, makes the app installable offline
- **PDF:** jsPDF — in-browser PDF generation, no backend required
- **Styling:** CSS Modules — scoped styles, no build-time overhead
- **Hosting:** Vercel — deploys from GitHub on push to main, free tier

## Architecture
Single-page React app with all state in memory (no persistence). Top-level `App` holds an array of door configs and the active door ID. Three leaf components — `DoorPreview` (visual), `ControlPanel` (sliders), `DoorStats` (numbers + PDF export) — each receive the active config as props. All calculation logic lives in `src/utils/calculations.js` and is pure (no side effects), making it easily testable. PDF generation is a standalone utility in `src/utils/pdfExport.js` that uses jsPDF directly.

## Features

### Must-Have
- **Live door preview:** Scaled visual of the door with two panels that update in real time as sliders move. Shows gap indicator and overflow warning.
- **Dimension sliders:** Controls for door width/height, panel width (both panels), top panel height, bottom panel height, and edge margin.
- **Stats panel:** Derived values — panel dimensions, gap, edge margin, coverage percentage with progress bar.
- **Multiple door configs:** Add, remove, and rename door configurations in a single session. Switch between them via tabs at the top.
- **PDF spec sheet export:** Per-door export via jsPDF with a dimension table, scaled panel layout diagram, and metadata.
- **PWA / installable:** Service worker + manifest so the app can be installed on phone or desktop and works offline.

### Nice-to-Have
- None identified

## Data Model
No persistence. Session state only:

```js
// Door config shape
{
  id: Number,
  name: String,
  doorW: Number,   // mm, 600–900
  doorH: Number,   // mm, 1800–2200
  panelW: Number,  // mm, 300–doorW
  topH: Number,    // mm, 100–1000
  botH: Number,    // mm, 100–1000
  margin: Number   // mm, 20–200
}
```

## API / Integration Contracts
None.

## Auth
No auth required.

## Deployment
Vercel free tier. Deploy from `main` branch on GitHub push. No environment variables needed.

## Constraints
None.

## Development Phases

### Phase 1 — Core port + PWA scaffold
- [ ] Scaffold Vite + React project with vite-plugin-pwa and jsPDF
- [ ] Port calculation logic to `src/utils/calculations.js` (pure functions)
- [ ] Build `DoorPreview` component — visual door with scaled panels
- [ ] Build `ControlPanel` component — all sliders with live labels
- [ ] Build `DoorStats` component — derived values table + coverage bar
- [ ] Wire single door config in `App.jsx` — confirm feature parity with original HTML
- [ ] Add unit tests for `calculations.js`

### Phase 2 — Multiple door configs
- [ ] Build `DoorList` component — tab bar with add/remove/rename
- [ ] Lift door config state to array in `App.jsx`
- [ ] Wire active door selection through to all child components

### Phase 3 — PDF export
- [ ] Implement `src/utils/pdfExport.js` using jsPDF
- [ ] Render dimension table + scaled door diagram in PDF
- [ ] Add "Export PDF spec sheet" button to `DoorStats`

### Phase 4 — PWA + deploy
- [ ] Configure vite-plugin-pwa manifest (icons, theme color, display mode)
- [ ] Add placeholder PWA icons to `public/`
- [ ] Verify offline capability with `vite build && vite preview`
- [ ] Deploy to Vercel from GitHub, confirm live URL

## Open Questions
- None
