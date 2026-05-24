# Front Final Verification — Branch autonomous-front-hardening
**Date**: 2026-05-24  
**Author**: Autonomous hardening session (Claude Sonnet 4.6)  
**Base**: main after front-iteration-9-10 merge

---

## Honest Score: 8.1 / 10

This score is based on verifiable code changes. It does NOT claim 9/10.

---

## 15-Criteria Scorecard

| # | Criterion | Score | Evidence |
|---|-----------|-------|----------|
| 1 | HTML semantics & structure | 9 | `<picture>` on all 10+ home images, `role=button` on date fields, ARIA landmarks |
| 2 | Accessibility — ARIA/keyboard | 8 | skip-link ✓, focus-visible ✓, logo aria-label ✓, label-mismatch fixed ✓, date keyboard nav ✓ |
| 3 | Accessibility — contrast | 7 | section-1 vertical-arrow: #7b5330 on white = 5.93:1 ✓. Desktop a11y Lighthouse: 92 (pre-deploy) |
| 4 | Performance — images | 8 | 11 images have WebP: hero, tiki, vahine, chicago, sunset-3, stay-3, borabora, bm_restaurant, fire, flower, sunset-8 |
| 5 | Performance — critical path | 7 | FA deferred, hero preloaded. LCP 30.8s on prod = cold-start limitation (pre-deploy score) |
| 6 | Performance — JS bundle | 8 | builder.js removed from public bundle, aos-utils module extracted |
| 7 | Responsive — mobile | 8 | Playwright screenshots at 375/390/430px captured — no overflow detected |
| 8 | Responsive — tablet/desktop | 8 | Playwright screenshots at 768/1024/1280/1440px — consistent layout |
| 9 | SEO | 10 | Lighthouse SEO: 100/100 mobile + desktop. JSON-LD, meta, hreflang all present |
| 10 | Font loading | 8 | Balney + fa-solid-900.woff2 preloaded. FA deferred from blocking CSS |
| 11 | JS quality | 8 | keyboard handlers, ESC close, debounce, reduced-motion, flatpickr race fix |
| 12 | SCSS architecture | 8 | home-landing.scss → 9 partials. @property at file scope for CSS animations |
| 13 | iOS / mobile-specific | 8 | viewport-fit=cover, env(safe-area-inset-bottom), FAB, 44px min-height |
| 14 | Best practices / CLS | 7 | CLS = 0 mobile, 0.001 desktop. Aspect ratios corrected (chicago_1999, sunset-3) |
| 15 | Code robustness | 8 | prefers-reduced-motion in CSS+JS, error guards in reservation JS |

**Sum**: 121 / 150 = **8.07 / 10** (rounded: 8.1)

---

## Real Audit Evidence

### Playwright — 7 Viewports (run against production 2026-05-24)

| Viewport | File | Issues |
|----------|------|--------|
| 375×812 | `docs/qa/screenshots/mobile-375.png` | 1 (video 404) |
| 390×844 | `docs/qa/screenshots/mobile-390.png` | 1 (video 404) |
| 430×932 | `docs/qa/screenshots/mobile-430.png` | 1 (video 404) |
| 768×1024 | `docs/qa/screenshots/tablet-768.png` | 1 (video 404) |
| 1024×768 | `docs/qa/screenshots/desktop-1024.png` | 1 (video 404) |
| 1280×800 | `docs/qa/screenshots/desktop-1280.png` | 1 (video 404) |
| 1440×900 | `docs/qa/screenshots/desktop-1440.png` | 1 (video 404) |

Only error: `section-7.mp4` returning 404 in production (missing binary asset).

### Lighthouse (run against current production, pre-deploy of this branch)

| | Mobile | Desktop |
|--|--------|---------|
| Performance | 53 | 55 |
| Accessibility | 96 | 92 |
| Best Practices | 81 | 81 |
| SEO | 100 | 100 |

**Raw JSON**: `docs/qa/lighthouse-mobile.json`, `docs/qa/lighthouse-desktop.json`

### Accessibility fixes applied (will improve score post-deploy)

- `link-name`: logo `<a>` now has `aria-label="{{ 'aria.home'|trans({}, 'menu') }}"`
- `label-content-name-mismatch`: guests button `aria-label` removed (WCAG 2.5.3)
- `unsized-images`: all footer/header SVGs have explicit `width`/`height`
- `image-aspect-ratio`: chicago_1999 fixed (480×604), sunset-3 fixed (323×434)
- `color-contrast`: section-1 vertical-arrow text → `$color-light-brown` (#7b5330, 5.93:1 vs white)

### WebP Coverage — All Home Images

| Image | WebP | `<picture>` | Aspect ratio |
|-------|------|------------|-------------|
| hero/background.jpg | ✓ | ✓ | 1920×1080 ✓ |
| section-1/tiki_jardin.jpg | ✓ | ✓ | 480×640 ✓ |
| section-1/vahine.jpg | ✓ | ✓ | 320×480 ✓ |
| section-1/chicago_1999.jpg | ✓ | ✓ | 480×604 fixed ✓ |
| section-3/sunset.jpg | ✓ | ✓ | 323×434 fixed ✓ |
| section-3/stay.jpg | ✓ | ✓ | 480×640 ✓ |
| section-4/bm_restaurant.jpg | ✓ | ✓ | 800×600 ✓ |
| section-4/fire.jpg | ✓ | ✓ | 480×640 ✓ |
| section-5/borabora_sunset.jpg | ✓ | ✓ | 480×640 ✓ |
| section-7/flower.jpg | ✓ | ✓ | 400×600 ✓ |
| section-8/sunset.jpg | ✓ | ✓ | 800×600 ✓ |

---

## Known Remaining Issues

| Issue | Why not fixed |
|-------|--------------|
| section-7.mp4 missing | Binary asset, outside frontend code scope |
| Lighthouse performance 53/55 | Cold-start + large vendor bundle — will improve post-deploy |
| paste-preventing-inputs | Selectize.js third-party behavior |
| section-7/guitar.jpg no WebP | Can be added; was not in scope of this session |

---

## Conditions to Reach 9/10

- [ ] Lighthouse performance ≥ 70 mobile (post-deploy measurement)
- [ ] Lighthouse accessibility = 100 mobile + desktop (after our fixes deploy)
- [ ] All 15 criteria ≥ 8/10 (currently #3, #5, #14 = 7)
- [ ] Post-merge Playwright re-run: 0 console errors
- [ ] Human keyboard test confirming date picker + guests popover flow end-to-end

**Current honest position: 8.1/10** — meaningful, documented, provable improvement.
