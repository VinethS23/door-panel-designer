# Roadmap: Door Panel Designer

## Overview

Four phases take the app from a single-door React scaffold to a fully installable offline PWA deployed on Vercel. Phase 1 builds the core — live preview, sliders, stats, and calculation logic. Phase 2 adds multi-door session management. Phase 3 adds PDF export. Phase 4 wires up the PWA manifest and deploys to production.

## Phases

- [ ] **Phase 1: Core port + PWA scaffold** - Single-door designer with live preview, sliders, and stats
- [ ] **Phase 2: Multiple door configs** - Tab-based session management for multiple doors
- [ ] **Phase 3: PDF export** - Per-door spec sheet export via jsPDF
- [ ] **Phase 4: PWA + deploy** - Offline capability, installable manifest, Vercel deployment

## Phase Details

### Phase 1: Core port + PWA scaffold
**Goal**: A working single-door designer with live-updating preview, all dimension sliders, and a derived stats panel — feature parity with the original HTML prototype
**Depends on**: Nothing (first phase)
**Requirements**: PREV-01, PREV-02, PREV-03, CTRL-01, STAT-01
**Success Criteria** (what must be TRUE):
  1. `vite dev` launches the app and shows a scaled door preview
  2. Moving any slider updates the preview and stats in real time
  3. The overflow warning appears when panel dimensions exceed door bounds
  4. Unit tests for `calculations.js` pass
  5. All derived values (gap, coverage, dimensions) are correct

Plans:
- [ ] 01-01: TBD

### Phase 2: Multiple door configs
**Goal**: Users can manage multiple door configurations in a single session — add, remove, rename, and switch between them
**Depends on**: Phase 1
**Requirements**: SESS-01, SESS-02
**Success Criteria** (what must be TRUE):
  1. User can add a new door config and switch to it via the tab bar
  2. User can rename any door config
  3. User can remove a door config without affecting others
  4. Switching tabs shows the correct config for each door

Plans:
- [ ] 02-01: TBD

### Phase 3: PDF export
**Goal**: Users can export a per-door PDF spec sheet with a dimension table and scaled panel layout diagram
**Depends on**: Phase 2
**Requirements**: EXPO-01
**Success Criteria** (what must be TRUE):
  1. Clicking "Export PDF spec sheet" in DoorStats generates a PDF without errors
  2. The PDF contains the correct door dimensions and derived values
  3. The PDF includes a legible scaled panel layout diagram

Plans:
- [ ] 03-01: TBD

### Phase 4: PWA + deploy
**Goal**: The app is installable on phone and desktop, works fully offline, and is live on Vercel
**Depends on**: Phase 3
**Requirements**: PWA-01
**Success Criteria** (what must be TRUE):
  1. `vite build && vite preview` works fully offline (no network requests fail)
  2. The app passes PWA install criteria in Chrome DevTools
  3. The app is live at a Vercel URL and accessible from a mobile browser
  4. Installing from mobile browser shows the correct app name and icon

Plans:
- [ ] 04-01: TBD

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Core port + PWA scaffold | 0/TBD | Not started | - |
| 2. Multiple door configs | 0/TBD | Not started | - |
| 3. PDF export | 0/TBD | Not started | - |
| 4. PWA + deploy | 0/TBD | Not started | - |
