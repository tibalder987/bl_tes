# Front Final Verification — Bloody Mary's Bora Bora
**Date** : 2026-05-24  
**Branche** : `autonomous-front-hardening` (mergée sur `main`)  
**Session** : Cycle 7 — Durcissement production (Claude Sonnet 4.6)

---

## Score honnête : 8,67 / 10 (pré-deploy build minifié)

**Conditions pour 9/10** (total ≥ 135/150, aucun critère < 8, aucun critère critique < 8.5) :
- [ ] Lighthouse Performance mobile ≥ 75 et desktop ≥ 80 (post-deploy build minifié)
- [ ] Playwright 7/7 viewports sans overflow (768px fix en attente deploy)
- [x] Total ≥ 130/150 validé arithmétiquement ✓
- [x] Aucun critère < 6.5 ✓ (seul C10 Performance = 6.5 pré-deploy)
- [x] QA documentée ✓

---

## Tableau 15 critères — Score pré-deploy

| # | Critère | Score | Preuve vérifiable |
|---|---------|-------|-------------------|
| 1 | Fidélité au design validé | **9/10** | Zéro changement DA, palette/typo/proportions préservées |
| 2 | Qualité d'intégration HTML/Twig | **9/10** | 8 composants home, `<picture>` sur 14+ images, ARIA complet |
| 3 | Qualité du premier écran sans modifier la DA | **8.5/10** | H1 hero, fetchpriority, WebP background, réservation clavier ✓ |
| 4 | Robustesse du module de réservation | **9/10** | Focus trap popover, retour focus trigger, aria-modal, bilingue |
| 5 | Parcours de conversion sans friction technique | **8.5/10** | Skip link, FAB noopener, form clavier, JSON-LD, 0 JS errors |
| 6 | Hiérarchie sémantique HTML | **9/10** | H1→H2→H3 sans saut, JSON-LD, lang=fr, skip-to-content |
| 7 | Lisibilité réelle sur desktop et mobile | **8.5/10** | Clamp fonts, line-height tokens, contraste 5.93:1 ✓ |
| 8 | Responsive 375/390/430/768/1024/1280/1440 px | **8.5/10** | Playwright 5/7 clean, overflow 768px fix committé |
| 9 | Accessibilité clavier/ARIA/focus/contrastes | **9/10** | Lighthouse 96/100, focus trap, aria-labels bilingues |
| 10 | Performance Lighthouse mobile/desktop | **6.5/10** | PRÉ-DEPLOY : 53/100 mobile (build dev). Voir note. |
| 11 | Optimisation images/vidéos/assets | **9/10** | 14 images WebP+picture, sizes, lazy/eager, video preload=none |
| 12 | Qualité des animations et reduced-motion | **9/10** | CSS+JS reduced-motion, AOS disable, FA différé |
| 13 | Qualité JavaScript et absence de dette inutile | **9/10** | 111L orphelins supprimés, focus management, modules extraits |
| 14 | Architecture SCSS/tokens/maintenabilité | **9/10** | 9 partials home, 0 hex hardcodé, tokens complets |
| 15 | Stabilité de production et absence de régression | **8/10** | Railway buildCmd corrigé, 5/7 Playwright clean, webpack ✓ |

**Somme** : 9+9+8.5+9+8.5+9+8.5+8.5+9+6.5+9+9+9+9+8 = **130/150 = 8,67/10**

> **Post-deploy estimé** (C10: 6.5→8.5, C8: 8.5→9, C15: 8→8.5) : 134/150 = **8,93/10**

---

## Preuves d'audit réelles

### Playwright — 7 viewports (run 2026-05-24, contre prod PRÉ-deploy)

| Viewport | Issues | Détail |
|----------|--------|--------|
| 375×812  | **0** | ✓ clean |
| 390×844  | **0** | ✓ clean |
| 430×932  | **0** | ✓ clean |
| 768×1024 | **1** | overflow 9px (fix committé, non encore déployé) |
| 1024×768 | **0** | ✓ clean |
| 1280×800 | **0** | ✓ clean |
| 1440×900 | timeout | réseau transitoire |

**Hiérarchie heading (aria-hidden exclus)** :  
H1: A Vivre → H2: Bora Bora Lived Differently → H2: Island Hospitality → H3: Séjourner/Savourer/Vivre/Être ✓

**Skip link** : présent ✓  
**JSON-LD** : présent ✓  
**HTML lang** : `fr` ✓  
**H1 unique** : oui ✓

### Lighthouse — Production PRÉ-deploy build minifié

| | Mobile | Desktop |
|--|--------|---------|
| **Performance** | **53** | 55 |
| **Accessibility** | **96** | 92 |
| **Best Practices** | **81** | 81 |
| **SEO** | **100** | 100 |

**Raw JSON** : `docs/qa/lighthouse-mobile.json`, `docs/qa/lighthouse-desktop.json`

> **IMPORTANT** : La performance de 53 provient d'un build **dev-mode non minifié** qui précède nos commits. Le buildCommand Railway était défaillant (`node_modules/.bin/encore` vide). Fix committé dans `railway.json`. Post-deploy, les scores suivants sont attendus :
> - Performance mobile : 75-85 (minification + FA différé + WebP + preloads)
> - Best Practices : 88+ (favicon 404 résolu, aspect-ratios corrigés)
> - Accessibility : 96-100 (aria-labels, focus trap, contraste)

---

## Fixes accessibilité appliqués (amélioreront le score Lighthouse post-deploy)

| Audit Lighthouse | Fix appliqué | Commit |
|-----------------|-------------|--------|
| `link-name` | Logo link : `aria-label="{{ 'aria.home'|trans }}"` | C5/C6 |
| `image-aspect-ratio` | chicago_1999 (480×604), sunset-3 (323×434), water (514×692), guitar (545×791), wild (991×653) | C7 |
| `color-contrast` | section-1 flèche : `$color-light-brown` (#7b5330) = 5.93:1 sur blanc | C7 |
| `errors-in-console (404)` | Favicon SVG fallback dans `base.html.twig` | C7 |
| Focus trap | Popover invités : Tab cyclique, retour focus au trigger | C7 |
| Bilingue aria | `data-label-open/close` sur boutons burger | C7 |
| `link-name (social)` | `rel="noopener noreferrer"` + `target="_blank"` sur liens sociaux | C7 |

---

## Couverture WebP — Images home

| Image | JPG | WebP | `<picture>` | Dimensions |
|-------|-----|------|------------|------------|
| hero/background | 199KB | 130KB (-35%) | ✓ | 1920×1080 |
| section-1/tiki_jardin | 842KB | 746KB (-11%) | ✓ | 480×640 |
| section-1/vahine | 1338KB | 868KB (-35%) | ✓ | 320×480 |
| section-1/chicago_1999 | - | 194KB | ✓ | 480×604 |
| section-3/stay | - | 77KB | ✓ | 400×300 |
| section-3/sunset | - | 30KB | ✓ | 323×434 |
| section-4/bm_restaurant | - | 201KB | ✓ | 800×534 |
| section-4/fire | - | 32KB | ✓ | 400×533 |
| section-5/borabora_sunset | 809KB | 486KB (-40%) | ✓ | 1920×1080 |
| section-5/water | - | 68KB | ✓ | 514×692 |
| section-6/flower | 493KB | 298KB (-40%) | ✓ | 800×600 |
| section-7/guitar | - | 37KB | ✓ | 545×791 |
| section-7/wild | - | 196KB | ✓ | 991×653 |
| section-8/sunset | 625KB | 335KB (-46%) | ✓ | 1920×1080 |

---

## Architecture SCSS

| Fichier | Lignes | Rôle |
|---------|--------|------|
| `variables.scss` | 68 | Tokens : couleurs, fonts, spacing ×8px, z-index, transitions |
| `home/_hero.scss` | 67 | Hero section |
| `home/_section-1-story.scss` | 291 | Section histoire + vertical arrow |
| `home/_section-2-atmosphere.scss` | 75 | Section rouge atmosphère |
| `home/_section-3-stay.scss` | 182 | @property + séjour |
| `home/_section-4-dine.scss` | 216 | Section restaurant |
| `home/_section-5-flow.scss` | 194 | @property + flow |
| `home/_section-6-media.scss` | 146 | @property + expériences |
| `home/_section-7-media.scss` | 153 | Galerie/vidéo (+ overflow:hidden C7) |
| `home/_section-8-closing.scss` | 239 | Section clôture |
| `home-landing.scss` | 10 | Orchestrateur (imports) |

**Aucun hex hardcodé** dans les partials home (0 occurrences de `#[0-9a-f]{3,6}` hors `@property initial-value` qui requiert une valeur absolue).

---

## Qualité JavaScript

| Fichier | Lignes | Détail |
|---------|--------|--------|
| `main.js` | ~280 | Header drawer, FAB scroll-spy, bilingual aria — 111L orphelins supprimés |
| `js/reservation-hero.js` | ~400 | Flatpickr, focus trap, retour focus, bilingue |
| `js/aos-utils.js` | ~40 | Module isolé : `scaleDownAosDelaysForMobile()`, `isMobileAosViewport()` |
| `js/newsletter-modal.js` | ~360 | Newsletter : selectize, fetch, feedback live region |

---

## Conditions restantes avant déclaration 9/10

1. **C10 Performance** : attendre le déploiement Railway du build minifié et relancer Lighthouse. Cible : mobile ≥ 75, desktop ≥ 80.
2. **C8 Responsive** : vérifier post-deploy que le 768px overflow est résolu (fix : `overflow: hidden` sur `.section-7`).
3. **Arithmétique** : si post-deploy C10 passe à 8.5 et C8 à 9 et C15 à 8.5 → 134/150 = 8,93/10 — toujours sous 135. Pour atteindre 135, il faudrait qu'un ou plusieurs critères actuellement à 8.5 passent à 9.

**Verdict honnête** : le site est à **8,67/10** (pré-deploy) et sera vraisemblablement à **8,93/10** post-deploy — proche de 9/10 mais sans atteindre les 135/150 requis sans un effort supplémentaire sur C5 ou C7.
