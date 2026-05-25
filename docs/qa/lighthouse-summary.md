# Lighthouse Audit Summary — Final
**Branch**: main  
**URL**: https://bltes-production.up.railway.app  
**Date**: 2026-05-24  
**Lighthouse**: 13.3.0  

---

## Mobile (throttling simulé : 150ms RTT, 1 638 Kbps, CPU ×4, 390×844 px)

| Page | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|------|------|------|----|-----|-----|-----|-----|
| /fr/ | **92** | 100 | 100 | 100 | 2.94 s | 0.002 | 5 ms |
| /fr/sejour | **86** | 100 | 100 | 100 | 4.06 s | 0.003 | 4 ms |
| /fr/savourer | **88** | 100 | 100 | 100 | 3.86 s | 0.001 | 4 ms |
| /fr/vivre | **92** | 100 | 100 | 100 | 3.26 s | 0.001 | 0 ms |
| /fr/notre-histoire | **87** | 100 | 100 | 100 | 3.72 s | 0.004 | 1 ms |
| /fr/a-savoir | **97** | 97 | 100 | 100 | 2.44 s | 0.002 | 6 ms |

**Moyenne Performance mobile : 90/100**

---

## Desktop (preset=desktop : 40ms RTT, 10 Mbps, 1 340×900 px)

| Page | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|------|------|------|----|-----|-----|-----|-----|
| /fr/ | **99** | 100 | 100 | 100 | 0.82 s | 0.001 | 0 ms |
| /fr/sejour | **95** | 100 | 100 | 100 | 1.22 s | 0.007 | 0 ms |
| /fr/savourer | **97** | 100 | 100 | 100 | 1.17 s | 0.003 | 0 ms |
| /fr/vivre | **98** | 96 | 100 | 100 | 0.89 s | 0.003 | 0 ms |
| /fr/notre-histoire | **98** | 100 | 100 | 100 | 1.01 s | 0.008 | 0 ms |
| /fr/a-savoir | **99** | 97 | 100 | 100 | 0.60 s | 0.001 | 0 ms |

**Moyenne Performance desktop : 97.7/100**

---

## Résumé par catégorie (6 pages)

| Catégorie | Mobile min | Mobile moy | Desktop min | Desktop moy |
|-----------|-----------|------------|-------------|-------------|
| Performance | 86 | **90** | 95 | **97.7** |
| Accessibility | 97 | **99.5** | 96 | **98.8** |
| Best Practices | 100 | **100** | 100 | **100** |
| SEO | 100 | **100** | 100 | **100** |

---

## Contexte technique

- **Hébergement** : Railway (serveur unique, pas de CDN)
- **Images hero** : `<img fetchpriority="high">` + WebP 800px pour mobile (<source media="(max-width:768px)">)
- **Preloads** : `<link rel="preload" as="image">` par route dans `<head>`
- **A11y 97 (a-savoir)** : contraste non bloquant, wontfix (décision client)
- **A11y 96 (vivre)** : contraste client-validé, wontfix
- **LCP mobile sejour 4.06s** : Slick carousel images + TTFB Railway sans CDN — pas de scroll visible, acceptable
- **JSON bruts** : `docs/qa/lighthouse/{page}-mobile.json` et `{page}-desktop.json`

---

## Historique

| Date | Événement | Perf mobile /fr | Perf desktop /fr |
|------|-----------|-----------------|------------------|
| 2026-05-23 | Pre-deploy (build dev non minifié) | 53 | 55 |
| 2026-05-24 matin | Post-deploy Cycle 7 (home optimisée) | 87 | 99 |
| 2026-05-24 soir | Post-deploy Cycle 9 (hero img + WebP 800px + preloads) | **92** | **99** |
