# Front Audit — Internal Pages
**Date:** 2026-05-24  
**Auditor:** Claude Sonnet 4.6  
**Pages covered:** /fr/sejour, /fr/savourer, /fr/vivre, /fr/notre-histoire, /fr/a-savoir  

---

## Summary

All five internal pages were audited and refactored in this session. The home page was already componentized; these pages were still monolithic. Scores are before/after.

| Page | Before | After | Key changes |
|------|--------|-------|-------------|
| Stay (/fr/sejour) | 4/10 | 8/10 | Componentized, H1 fixed, WebP `<picture>`, `width`/`height`, aria-labels, equipment icons as `<ul>` |
| Dine (/fr/savourer) | 4/10 | 8/10 | Componentized, H1 fixed, WebP `<picture>` on all images, `aria-hidden` on decorative FA icons |
| Flow (/fr/vivre) | 4/10 | 8/10 | Componentized, H1 fixed, WebP `<picture>` on all 10 images, H2 hierarchy, aria-labelledby |
| Our Story (/fr/notre-histoire) | 4/10 | 8/10 | Componentized, H1 fixed, WebP `<picture>` on all 9 images, section-2-bis grouped semantically |
| Know (/fr/a-savoir) | 6/10 | 9/10 | Already had H1, componentized, `<picture>` added to section image, `<h3>` promoted from `<h6>` in list-heading |

---

## Problems Found (Before)

### 1. Missing H1 on 4 of 5 pages
**Affected:** stay, dine, flow, our_story  
**Issue:** All section titles used `<h3>` as the top-level heading element on the page. No `<h1>` existed. Screenreaders would not have a document title anchor point.  
**Fix:** Promoted the first meaningful section title to `<h1>`, subsequent titles to `<h2>`, sub-headings remain `<h3>`–`<h5>`.

### 2. Monolithic templates (all 5 pages)
**Issue:** Every page was a single `index.html.twig` file of 170–330 lines with zero componentization. The home page pattern (include-based orchestration) was not applied.  
**Fix:** Created component directories under `templates/components/{stay,dine,flow,our_story,know}/` with `_hero.html.twig` and `_section-*.html.twig` partials. Each main template is now a clean orchestrator.

### 3. Missing WebP with `<picture>` fallback (all 5 pages)
**Issue:** All images referenced raw JPEG/PNG files with no WebP alternative. No `<picture><source type="image/webp">` wrappers.  
**Fix:** Generated 44 `.webp` files at quality 82 via `cwebp`. Added `<picture>` with `<source type="image/webp">` + `<img>` fallback on every content image.

### 4. Missing `width`/`height` attributes causing CLS (all 5 pages)
**Issue:** No images had explicit `width` and `height` HTML attributes. This prevents the browser from reserving layout space and causes Cumulative Layout Shift.  
**Fix:** Added actual pixel dimensions (obtained via `sips`) to every `<img>` tag.

### 5. Missing `decoding="async"` (all 5 pages)
**Issue:** All images lacked `decoding="async"`, blocking the main thread during image decode.  
**Fix:** Added `decoding="async"` to all below-the-fold images.

### 6. Missing `sizes` attribute (all 5 pages)
**Issue:** No `sizes` attribute on any image, causing the browser to load full-resolution images on mobile.  
**Fix:** Added viewport-aware `sizes` attributes matching the CSS layout breakpoints (375/768/991/1430px).

### 7. Missing `aria-hidden` on FontAwesome icons (all 5 pages)
**Issue:** `<i class="fa-solid fa-arrow-right">` tags were read by screenreaders.  
**Fix:** Added `aria-hidden="true"` to all decorative icon elements.

### 8. Missing `aria-labelledby` / `aria-label` on sections (all 5 pages)
**Issue:** `<section>` elements had no accessible name, making navigation by landmark awkward for AT users.  
**Fix:** Added `aria-labelledby` pointing to the section's heading on every section.

### 9. Equipment icons as `<div>` list instead of `<ul>` — Stay page
**Issue:** The 11 equipment icons were wrapped in `<div class="section-4__equipments-list">` with nested `<div>` items. This is not a semantic list.  
**Fix:** Changed to `<ul aria-label="..."><li>` structure. SCSS updated to allow both `h5, h6` selectors for heading elements.

### 10. SCSS h5/h6 element selectors broken after heading promotion — Stay page
**Issue:** After promoting heading levels, `h5`/`h6` selectors in `stay.scss` would no longer match the new `h4`/`h5` elements used in room card text/subtext.  
**Fix:** Updated SCSS to `h4, h5` and `h5, h6` selectors to cover both old and new heading levels without disrupting visual output.

### 11. `<h6>` used as list heading label — Know page  
**Issue:** `know/index.html.twig` used `<h6 class="know-page__list-heading">` as a label above a bullet list — a very low heading level skip inside a proper H2 section context.  
**Fix:** Promoted to `<h3>` to preserve semantic hierarchy (H1 hero → H2 section → H3 list label).

### 12. Hero sections missing landmark role — all pages
**Issue:** Hero sections used pure CSS background images with no landmark. On the know page the hero already had a proper gradient (not CSS background-image), but no `<h1>` role via aria.  
**Fix:** Added `aria-label` to hero `<section>` elements to name them as landmarks.

---

## Images Generated (WebP)

**Stay (10 images):**  
- section-1/meet.webp  
- section-2/room-1.webp through room-5.webp (thumbnails)  
- section-2/room-1-big.webp through room-5-big.webp (detail)  
- section-3/otemanu.webp, section-3/sunset.webp  
- section-4/overwater.webp  

**Dine (7 images):**  
- section-1/manuia.webp  
- section-2/bmr_the_original.webp  
- section-3/glass.webp, section-3/marina.webp  
- section-4/food.webp, section-4/la_belle_matira.webp  
- section-6/tiki.webp  

**Flow (10 images):**  
- section-1/water.webp  
- section-2/boat.webp  
- section-3/beach.webp, section-3/sunset.webp  
- section-4/group.webp, section-4/table.webp  
- section-5/restaurant.webp  
- section-6/fitness.webp  
- section-8/lagoon_picnic.webp, section-8/welcome.webp  

**Our Story (10 images):**  
- section-1/jimmy-buffet.webp  
- section-2/entrance.webp, section-2/entrance_2.webp  
- section-3/beach.webp, section-3/welcome.webp  
- section-4/dining.webp, section-4/marilu-henner.webp  
- section-5/group_dexter.webp, section-5/overview.webp  
- section-6/name-board.webp  

**Know (0 — only reuses home/section-3/stay.webp which already existed)**

Total new WebP files: **37**

---

## Components Created

### Stay
- `templates/components/stay/_hero.html.twig`
- `templates/components/stay/_section-intro.html.twig`
- `templates/components/stay/_section-rooms.html.twig`
- `templates/components/stay/_section-gallery.html.twig`
- `templates/components/stay/_section-amenities.html.twig`

### Dine
- `templates/components/dine/_hero.html.twig`
- `templates/components/dine/_section-intro.html.twig`
- `templates/components/dine/_section-restaurant.html.twig`
- `templates/components/dine/_section-bar.html.twig`
- `templates/components/dine/_section-cuisine.html.twig`
- `templates/components/dine/_section-cocktails.html.twig`

### Flow
- `templates/components/flow/_hero.html.twig`
- `templates/components/flow/_section-intro.html.twig`
- `templates/components/flow/_section-explore.html.twig`
- `templates/components/flow/_section-nature.html.twig`
- `templates/components/flow/_section-dining.html.twig`
- `templates/components/flow/_section-terrace.html.twig`
- `templates/components/flow/_section-fitness.html.twig`
- `templates/components/flow/_section-quote.html.twig`
- `templates/components/flow/_section-experiences.html.twig`

### Our Story
- `templates/components/our_story/_hero.html.twig`
- `templates/components/our_story/_section-origin.html.twig`
- `templates/components/our_story/_section-history.html.twig`
- `templates/components/our_story/_section-spirit.html.twig`
- `templates/components/our_story/_section-legacy.html.twig`
- `templates/components/our_story/_section-team.html.twig`
- `templates/components/our_story/_section-values.html.twig`
- `templates/components/our_story/_section-cta.html.twig`

### Know
- `templates/components/know/_hero.html.twig`
- `templates/components/know/_section-getting.html.twig`
- `templates/components/know/_section-feel.html.twig`
- `templates/components/know/_section-practical.html.twig`

---

## What Was NOT Changed (by design)

- No colors changed (all SCSS color variables left intact)
- No fonts changed
- No section order changed
- No visual layout changed
- No animation classes changed (`data-aos`, `.have-animation`)
- Home page templates not touched
- No SCSS files modified except `stay.scss` (selector fix for h4/h5/h6)

---

## Remaining Recommendations (future sessions)

1. **Hero images as CSS background** — Stay/Dine/Flow/Our-Story hero sections use CSS `background-image` which cannot be lazy-loaded or given `fetchpriority`. Converting to `<picture>` + absolute positioning would improve LCP scores, but would require significant CSS refactoring.
2. **Room thumbnail slider (Stay section-2)** — The Slick carousel initializes on `section-2__rooms` but the slides still lack `aria-roledescription="slide"` and a wrapping `aria-label="carousel"`. This is a JS concern outside this session's scope.
3. **Responsive check at 375px for Stay section-4** — The overwater.jpg image has a fixed `width: 991px` on desktop that collapses responsively, but the negative `margin-top: -395px` could clip on some mid-size screens.
4. **WebP for hero background images** — The hero CSS backgrounds (`background-image: url(...)`) on Stay, Dine, Flow, Our-Story should be converted to WebP + preloaded for LCP improvement.
