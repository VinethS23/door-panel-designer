# Requirements: Door Panel Designer

**Defined:** 2026-03-30
**Core Value:** Live door preview that updates in real time as dimension sliders change

## v1 Requirements

### Preview

- [ ] **PREV-01**: User can see a live scaled visual of the door and two panels that updates in real time as any slider changes
- [ ] **PREV-02**: User can see a gap indicator showing the space between the two panels
- [ ] **PREV-03**: User can see an overflow warning when panel dimensions exceed door bounds

### Controls

- [ ] **CTRL-01**: User can adjust door width, door height, both panel widths, top panel height, bottom panel height, and edge margin via sliders with live value labels

### Stats

- [ ] **STAT-01**: User can see derived values — panel dimensions, gap, edge margin, and coverage percentage with a visual progress bar

### Session

- [ ] **SESS-01**: User can add, remove, and rename door configurations within a single session
- [ ] **SESS-02**: User can switch between door configurations via a tab bar at the top of the app

### Export

- [ ] **EXPO-01**: User can export a per-door PDF spec sheet containing a dimension table and a scaled panel layout diagram

### PWA

- [ ] **PWA-01**: User can install the app on phone or desktop and use it fully offline

## v2 Requirements

None identified.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Server / backend | Local-only app; no data needs to leave the browser |
| Auth / login | No user accounts; no concept of users |
| Data persistence | Session state only; saving between sessions is out of scope for v1 |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| PREV-01 | Phase 1 | Pending |
| PREV-02 | Phase 1 | Pending |
| PREV-03 | Phase 1 | Pending |
| CTRL-01 | Phase 1 | Pending |
| STAT-01 | Phase 1 | Pending |
| SESS-01 | Phase 2 | Pending |
| SESS-02 | Phase 2 | Pending |
| EXPO-01 | Phase 3 | Pending |
| PWA-01 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 9 total
- Mapped to phases: 9
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-30*
*Last updated: 2026-03-30 after initial definition*
