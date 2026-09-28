# TRIO Properties Homepage Redesign Concept

A homepage presentation adapted from the Homesolve front-end base and reworked around TRIO Properties' existing brand, content, services and corporate identity.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## V2 visual / viewport refinement
- Desktop announcement bar + navigation now total 100px in height.
- On screens 1024px and wider, the hero uses `calc(100svh - 100px)` so the complete top chrome + hero composition is designed to fit one laptop/desktop viewport.
- Hero typography, image height, buttons and supporting statistics were reduced/rebalanced for common 1366x768 and 1440x900 screens.
- Navigation spacing, logo block, hover details, overlays, accent line, shadows and card proportions were refined for a cleaner institutional property aesthetic.
- Tablet/mobile keeps content-driven height rather than forcing the desktop viewport behavior.
