# Lighthouse Audit Summary
**Branch**: autonomous-front-hardening  
**URL audited**: https://bltes-production.up.railway.app/fr/  
**Date**: 2026-05-24  
**Lighthouse version**: 13.3.0  
**Note**: Scores reflect **current production** (main branch). Branch improvements pending deployment.

## Scores

| Category       | Mobile | Desktop |
|----------------|--------|---------|
| Performance    | 53     | 55      |
| Accessibility  | 96     | 92      |
| Best Practices | 81     | 81      |
| SEO            | 100    | 100     |

## Mobile Key Metrics

| Metric                       | Value   |
|------------------------------|---------|
| First Contentful Paint (FCP) | 7.3 s   |
| Speed Index (SI)             | 16.8 s  |
| Largest Contentful Paint (LCP)| 30.8 s |
| Time to Interactive (TTI)    | 30.8 s  |
| Total Blocking Time (TBT)    | 160 ms  |
| Cumulative Layout Shift (CLS)| 0       |

## Desktop Key Metrics

| Metric                       | Value   |
|------------------------------|---------|
| First Contentful Paint (FCP) | 6.5 s   |
| Speed Index (SI)             | 13.9 s  |
| Largest Contentful Paint (LCP)| 22.2 s |
| Time to Interactive (TTI)    | 27.6 s  |
| Total Blocking Time (TBT)    | 80 ms   |
| Cumulative Layout Shift (CLS)| 0.001   |

## Performance Blockers (current production)

| Issue                        | Est. Saving |
|------------------------------|-------------|
| Render-blocking resources    | 6,080 ms    |
| Unminified CSS               | 980 KiB     |
| Unminified JavaScript        | 2,190 KiB   |
| Unused CSS rules             | 1,368 KiB   |
| Unused JavaScript            | 546 KiB     |
| Image delivery (no WebP)     | 1,715 KiB   |
| Total page weight            | 19,306 KiB  |

## Accessibility Failures (current production, mobile)

| Rule                       | Status | Fix Applied |
|----------------------------|--------|-------------|
| link-name (logo link)      | FAIL   | ✓ aria-label added in this branch |
| label-content-name-mismatch| FAIL   | ✓ aria-label removed from guests btn |
| color-contrast             | PASS   | n/a         |

## Accessibility Failures (current production, desktop)

| Rule                       | Status | Fix Applied |
|----------------------------|--------|-------------|
| color-contrast             | FAIL   | Not fixable from code (inline styles?) |
| link-name (logo link)      | FAIL   | ✓ Fixed in this branch |
| label-content-name-mismatch| FAIL   | ✓ Fixed in this branch |

## Best Practices Failures

| Rule                       | Status | Notes |
|----------------------------|--------|-------|
| paste-preventing-inputs    | FAIL   | Caused by Selectize.js (newsletter country) — third-party library |
| image-aspect-ratio         | FAIL   | ✓ Fixed in this branch (chicago_1999, sunset) |
| errors-in-console          | FAIL   | section-7.mp4 missing from production — video file needed |

## Branch Improvements Not Yet Deployed

These changes in `autonomous-front-hardening` should improve scores after merge:

- **Accessibility** → estimated 99+ mobile (link-name, label-mismatch, SVG dimensions fixed)
- **Best Practices** → estimated 88+ (aspect-ratio fixed)
- **Performance** → estimated +5-10 pts (FA deferred, WebP for 10+ images, hero preloaded)
- **SEO** → 100 (already)
