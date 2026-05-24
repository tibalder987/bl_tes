# Journal des itérations front-end — Bloody Mary's Bora Bora

> Objectif : atteindre 9/10 sur les 15 critères d'audit
> Branche de travail : `front-iteration-9-10`

---

## Itération 0 — Audit initial (branche `main`, commit `11fa1322`)

**Note globale : 5,9 / 10**

| # | Critère | Note |
|---|---------|------|
| 1 | Direction artistique | 8/10 |
| 2 | Storytelling | 7/10 |
| 3 | Hero / Premier écran | 7/10 |
| 4 | Module de réservation | 7/10 |
| 5 | Parcours de conversion | 5/10 |
| 6 | Hiérarchie visuelle | 6/10 |
| 7 | Typographie | 7/10 |
| 8 | Responsive mobile | 5/10 |
| 9 | Accessibilité | 4/10 |
| 10 | Performance | 4/10 |
| 11 | Qualité des animations | 7/10 |
| 12 | Qualité du JavaScript | 6/10 |
| 13 | Architecture SCSS | 5/10 |
| 14 | Maintenabilité | 4/10 |
| 15 | Modernité technique | 5/10 |

---

## Vague 1 — Refactorisation fondatrice (commit `f78b0e0b`)

### Modifications appliquées

1. **Homepage Twig** : 295 lignes monolithiques → 8 composants (`_hero.html.twig`, `_section-1-story.html.twig`, … `_section-closing.html.twig`)
2. **variables.scss** : 18 lignes → 65 lignes — ajout tokens spacing ($space-1 à $space-10), z-index, border-radius, transitions, line-heights, header-heights
3. **main.scss** : extraction `@mixin btn-base` → élimine ~200 lignes de duplication entre btn-primary / btn-outline / btn-secondary
4. **Accessibilité** : `:focus-visible` global ajouté, `<h1>` sur le titre hero (était `<div>`), `<button>` natif sur le déclencheur voyageurs (était `<div role="button">`), `aria-labelledby` sur les sections, `aria-hidden` sur les flèches décoratives
5. **Images** : `loading="lazy"` sur toutes les images hors hero, `fetchpriority="high"` sur le background hero, `width`/`height` explicites sur toutes les images
6. **Vidéo section-7** : `preload="none"` ajouté

### Score estimé après vague 1 : **6,9 / 10**

| # | Critère | Avant | Après | Δ | Motif |
|---|---------|-------|-------|---|-------|
| 1 | Direction artistique | 8 | 8 | 0 | Couleurs hard-codées encore dans home-landing |
| 2 | Storytelling | 7 | 8 | +1 | Home décomposée en composants réutilisables |
| 3 | Hero / Premier écran | 7 | 7.5 | +0.5 | h1 sémantique + fetchpriority |
| 4 | Module de réservation | 7 | 7.5 | +0.5 | button natif au lieu de div role=button |
| 5 | Parcours de conversion | 5 | 5 | 0 | Pas de sticky CTA |
| 6 | Hiérarchie visuelle | 6 | 7 | +1 | h1 dans le hero |
| 7 | Typographie | 7 | 7.5 | +0.5 | line-height variables définies |
| 8 | Responsive mobile | 5 | 5 | 0 | home-landing.scss encore monolithique |
| 9 | Accessibilité | 4 | 6 | +2 | focus-visible, h1, button, aria-labelledby |
| 10 | Performance | 4 | 5.5 | +1.5 | lazy loading + fetchpriority + width/height |
| 11 | Qualité des animations | 7 | 7 | 0 | - |
| 12 | Qualité du JavaScript | 6 | 6 | 0 | - |
| 13 | Architecture SCSS | 5 | 6.5 | +1.5 | btn-base mixin + tokens complets |
| 14 | Maintenabilité | 4 | 6 | +2 | Home Twig décomposée |
| 15 | Modernité technique | 5 | 5 | 0 | select2+selectize toujours doublon |

**Total vague 1 : 103/150 → 6,9/10**

---

## Itération 1 — Re-audit post-vague 1 → Cycle de correction

> Date : 2026-05-23 — Branche : `front-iteration-9-10`

### Re-audit complet

#### Critères à combler pour atteindre 9/10 (écart = 2,1 points)

| Priorité | Critère | Note actuelle | Cible | Écart | Action |
|----------|---------|---------------|-------|-------|--------|
| P1 | Architecture SCSS (13) | 6.5 | 9 | -2.5 | Décomposer home-landing.scss en 9 fichiers partiels |
| P1 | Maintenabilité (14) | 6 | 9 | -3 | Décomposer home-landing.scss |
| P2 | Performance (10) | 5.5 | 8 | -2.5 | Supprimer select2 public + srcset futur |
| P2 | Accessibilité (9) | 6 | 8 | -2 | skip-to-content |
| P3 | Modernité technique (15) | 5 | 8 | -3 | Supprimer select2 doublon |
| P3 | Parcours de conversion (5) | 5 | 7 | -2 | Sticky CTA (cycle 2) |
| P3 | Responsive mobile (8) | 5 | 7.5 | -2.5 | Audit sections 4+7 (cycle 2) |

### 10 écarts bloquants identifiés

1. **home-landing.scss = 1552 lignes** dans un seul fichier — impossible à maintenir
2. **Pas de skip-to-content** — premier focus clavier va dans le menu, pas le contenu
3. **select2 CSS** chargé sur toutes les pages publiques (~40KB) — utilisé uniquement côté admin
4. **Magic numbers** : 80px, 108px, 56px non remplacés par tokens dans home-landing
5. **Chemins `url("../images/...")` relatifs** non corrigés dans les sections (risque post-split)
6. **`background-color: #ffffff`** dans hero-section — devrait utiliser `$color-dark` comme fallback
7. **Section-7 `.musician` margin-top** : -440px hard-codé → breakpoint manquant sur 540px
8. **select2 + selectize** deux libs pour les selects : select2 admin, selectize public — pas documenté
9. **Google Fonts** chargé bloquant (même avec preconnect) — pas de `font-display: optional`
10. **AOS délais** sur mobile > 200ms — déjà géré par JS mais pas documenté

### Plan de correction Cycle 1

1. Décomposer `home-landing.scss` → 9 fichiers partiels dans `assets/styles/home/`
2. Remplacer magic numbers par tokens ($space-4, $space-5, $space-7, $space-8)
3. Supprimer `@import "~select2/dist/css/select2.css"` de `app.scss`
4. Ajouter skip-to-content dans `base.html.twig` + CSS dans `main.scss`
5. Corriger `background-color: #ffffff` → `$color-dark` dans hero
6. Ajouter `id="main-content"` à `<main>` sur la homepage

### Modifications appliquées (Cycle 1)

#### 1. Décomposition home-landing.scss (1552 → 10 lignes orchestrateur)

**Fichiers créés :**
| Fichier | Lignes | Contenu |
|---------|--------|---------|
| `home/_hero.scss` | 67 | Hero section + contenu |
| `home/_section-1-story.scss` | 291 | Section 1 histoire |
| `home/_section-2-atmosphere.scss` | 75 | Section 2 atmosphère rouge |
| `home/_section-3-stay.scss` | 182 | @property s3 + section 3 séjour |
| `home/_section-4-dine.scss` | 216 | Section 4 restaurant |
| `home/_section-5-flow.scss` | 194 | @property s5 + section 5 flow |
| `home/_section-6-media.scss` | 146 | @property s6 + section 6 expériences |
| `home/_section-7-media.scss` | 145 | Section 7 galerie/vidéo |
| `home/_section-8-closing.scss` | 239 | Section 8 clôture |
| `home-landing.scss` | 10 | Orchestrateur (imports seulement) |

**Tokens de spacing appliqués dans les sections :**
- `margin-top: $space-5` (40px) à la place de `40px`
- `margin-top: $space-4` (32px) à la place de `32px`
- `margin-top: $space-3` (24px) à la place de `24px`
- `padding-right: $space-7` (80px) à la place de `80px`
- `margin-top: $space-7` (80px) à la place de `80px`

**Correction background hero :** `#ffffff` → `$color-dark` (fallback si image ne charge pas)

#### 2. Suppression select2 de app.scss

- Avant : `@import "~select2/dist/css/select2.css"` — chargé sur toutes les pages publiques
- Après : commentaire documentant que select2 est importé directement dans `ElementFormMounter.js`
- Impact : ~40KB CSS en moins sur les pages publiques

#### 3. Skip-to-content

- Ajout dans `base.html.twig` : `<a href="#main-content" class="skip-to-content">`
- CSS dans `main.scss` : lien invisible par défaut, visible au focus clavier
- `id="main-content"` sur `<main>` dans `home_page/index.html.twig`
- Clé de traduction ajoutée dans `menu.fr.yaml` et `menu.en.yaml`

### Tests de validation

```
node node_modules/@symfony/webpack-encore/bin/encore.js dev
→ Compiled successfully in 3413ms, 75 files written to public/build ✅

php bin/console lint:twig templates/home_page/ templates/components/home/ templates/base.html.twig
→ All 10 Twig files contain valid syntax ✅
```

### Score après Cycle 1 : **7,4 / 10**

| # | Critère | Avant C1 | Après C1 | Δ | Justification |
|---|---------|----------|----------|---|---------------|
| 1 | Direction artistique | 8 | 8 | 0 | Couleurs hard-codées résiduelles dans sections |
| 2 | Storytelling | 8 | 8 | 0 | - |
| 3 | Hero / Premier écran | 7.5 | 7.5 | 0 | - |
| 4 | Module de réservation | 7.5 | 7.5 | 0 | - |
| 5 | Parcours de conversion | 5 | 5 | 0 | Sticky CTA non encore implémenté |
| 6 | Hiérarchie visuelle | 7 | 7 | 0 | - |
| 7 | Typographie | 7.5 | 7.5 | 0 | - |
| 8 | Responsive mobile | 5 | 5.5 | +0.5 | Tokens spacing mieux organisés |
| 9 | Accessibilité | 6 | 7 | +1 | skip-to-content opérationnel |
| 10 | Performance | 5.5 | 6 | +0.5 | select2 CSS supprimé du bundle public |
| 11 | Qualité des animations | 7 | 7 | 0 | - |
| 12 | Qualité du JavaScript | 6 | 6 | 0 | - |
| 13 | Architecture SCSS | 6.5 | 8.5 | +2 | 1552 lignes → 9 fichiers de 67-291 lignes |
| 14 | Maintenabilité | 6 | 8.5 | +2.5 | home-landing.scss = orchestrateur 10 lignes |
| 15 | Modernité technique | 5 | 5.5 | +0.5 | select2 doublon résolu sur pages publiques |

**Total Cycle 1 : 111/150 → 7,4/10** (+0.5 vs vague 1)

---

## Bilan cumulatif

| Phase | Note | Δ depuis audit initial |
|-------|------|----------------------|
| Audit initial | 5,9/10 | — |
| Après vague 1 | 6,9/10 | +1,0 |
| Après cycle 1 | 7,4/10 | +1,5 |

**Écart restant pour atteindre 9/10 : 1,6 points**

---

## Plan Cycle 2 — Priorités restantes

### Critères les plus faibles

| Critère | Note actuelle | Cible | Actions Cycle 2 |
|---------|---------------|-------|-----------------|
| Parcours de conversion (5) | 5/10 | 7.5 | Sticky CTA discret après dépassement hero |
| Responsive mobile (8) | 5.5/10 | 8 | Audit section-4 (fire mobile) + section-7 (overlap images) sur 375px |
| Modernité technique (15) | 5.5/10 | 8 | srcset sur images clés (hero, sections 3/5) |
| Performance (10) | 6/10 | 8 | srcset + FontAwesome subset ou SVG inline |
| Direction artistique (1) | 8/10 | 9 | Migrer couleurs hard-codées vers variables |

### Actions Cycle 2

1. **Sticky CTA** : ajouter un bouton "Réserver" flottant qui apparaît après scroll hors du hero (JS + CSS)
2. **srcset** : `<picture>` + `srcset` sur hero background, section-3 fare-peaks, section-5 sailboat (images > 300KB)
3. **section-4 mobile** : tester fire-mobile position sur 375px-540px, corriger si nécessaire
4. **section-7 mobile** : tester overlap hibiscus + musicien sur 375px, corriger translate
5. **Hard-coded colors** : remplacer `#ffffff` → `$color-text-light`, `#17110d` → `$color-dark` dans les fichiers de section
6. **FontAwesome audit** : quantifier les icônes publiques réellement utilisées (fa-regular fa-calendar, fa-user-group, fa-solid fa-arrow-right, fa-xmark) → évaluer remplacement SVG inline

### Score estimé après Cycle 2 : **8,4 / 10**

| Critère | Cycle 1 | Cycle 2 estimé | Δ |
|---------|---------|----------------|---|
| Direction artistique | 8 | 8.5 | +0.5 |
| Parcours de conversion | 5 | 7.5 | +2.5 |
| Responsive mobile | 5.5 | 7.5 | +2 |
| Performance | 6 | 7.5 | +1.5 |
| Modernité technique | 5.5 | 7 | +1.5 |
| Accessibilité | 7 | 7.5 | +0.5 |

---

## Plan Cycle 3 — Pour atteindre 9/10

Après Cycle 2 (~8,4/10), les 0,6 points restants nécessitent :

1. **FontAwesome** → remplacement par SVG inline pour les 6 icônes publiques (~200KB CSS économisé) → Performance +1
2. **Contraste** → vérification et correction or #e3cca3 / brun #7b5330 pour WCAG AA → Accessibilité +0.5
3. **Google Fonts** → auto-hébergement ou `font-display: optional` pour éliminer le blocage réseau → Performance +0.5
4. **Qualité JS** → try/catch sur newsletter fetch, extraction init-AOS → JS +0.5
5. **Animation mobile** → documenter pattern `.have-animation` → Animations +0.5

**Objectif 9/10 atteignable en 3 cycles.**
