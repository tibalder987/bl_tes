# Audit Front-End — Bloody Mary's Bora Bora

> Réalisé le 2026-05-23 — Base : repo local `bl_tes`, branche `main`

---

## Note globale : **5,9 / 10**

L'intention créative est forte et cohérente. L'exécution technique présente des lacunes significatives qui pénalisent la performance, l'accessibilité et la maintenabilité sur un site à ambition premium.

---

## Tableau des 15 critères

| # | Critère | Note /10 | Problème principal |
|---|---------|----------|--------------------|
| 1 | Direction artistique | 8/10 | Palette riche, typographie distinctive — quelques incohérences de valeurs hard-codées |
| 2 | Storytelling | 7/10 | Bonne narration par sections, mais structure monolithique qui nuit à la lisibilité |
| 3 | Hero / Premier écran | 7/10 | Impactant visuellement, mais module de réservation trop bas et non visible sans scroll |
| 4 | Module de réservation | 7/10 | Fonctionnel, bien accessible — positionnement sticky fragile sur certains écrans |
| 5 | Parcours de conversion | 5/10 | CTAs présents mais sans hiérarchie claire, pas de sticky CTA secondaire |
| 6 | Hiérarchie visuelle | 6/10 | `h1`, `h2`, `h3` utilisés mais parfois inversés ; titres décoratifs confondus avec structure |
| 7 | Typographie | 7/10 | Balney + Epilogue cohérents ; `clamp()` bien utilisé — quelques tailles fixes résiduelles |
| 8 | Responsive mobile | 5/10 | Nombreux breakpoints custom, images positionnées absolument cassantes, touch targets insuffisants |
| 9 | Accessibilité | 4/10 | `role="button"` sur `<div>`, pas de focus visible cohérent, contraste gold/brun non vérifié |
| 10 | Performance | 4/10 | Aucun `loading="lazy"` sur images non-critiques, pas de WebP, FontAwesome complet chargé |
| 11 | Qualité des animations | 7/10 | AOS bien configuré, gradients CSS @property élégants — quelques délais trop longs sur mobile |
| 12 | Qualité du JavaScript | 6/10 | Modules bien découpés, mais jQuery omniprésent côté public, pas de gestion d'erreurs réseau |
| 13 | Architecture SCSS | 5/10 | Variables partielles (18 lignes), duplications importantes entre btn-primary/outline/secondary |
| 14 | Maintenabilité | 4/10 | Homepage = 295 lignes monolithiques, magic numbers partout, CSS sans tokens de spacing |
| 15 | Modernité technique | 5/10 | Vue 2 (admin), jQuery (public), pas de lazy loading natif, pas de `srcset` |

---

## Analyse par critère

### 1. Direction artistique — 8/10
**Diagnostic** : Palette cohérente (rouge #951914, or #e3cca3, brun, vert olive, bleu). Police Balney distinctive et bien dosée. Formes SVG décoratives homogènes.
**Problème** : Valeurs couleurs hard-codées dans 8+ fichiers SCSS au lieu d'utiliser les variables centralisées.
**Recommandation** : Migrer toutes les couleurs vers les variables, ajouter des tokens sémantiques (`$color-cta`, `$color-surface-warm`).

### 2. Storytelling — 7/10
**Diagnostic** : La narration par sections (Story → Stay → Dine → Flow) est logique et immersive.
**Problème** : Le template homepage fait 295 lignes monolithiques, impossible à maintenir ou réutiliser.
**Recommandation** : Découper en composants Twig (`_hero.html.twig`, `_section-story.html.twig`, etc.).

### 3. Hero / Premier écran — 7/10
**Diagnostic** : Image plein écran avec fetchpriority="high" — correct. Texte superposé lisible.
**Problème** : Le module de réservation est positionnement `absolute bottom: 56px`, invisible sur petits écrans sans scroll. Pas de fallback si l'image ne charge pas.
**Recommandation** : Ajouter une couleur de fond `background-color: $color-dark` sur `.hero-section`, tester la visibilité du module sur 375px.

### 4. Module de réservation — 7/10
**Diagnostic** : Excellent niveau d'accessibilité (aria-expanded, aria-modal, aria-label). Flatpickr bien configuré. Gestion clavier présente.
**Problème** : `data-guest-step` géré uniquement au clic, pas au clavier (Enter/Space). Sticky fragile si le viewport change de hauteur (iOS toolbar).
**Recommandation** : Ajouter `keydown` sur les steppers, tester la sticky position sur iOS Safari.

### 5. Parcours de conversion — 5/10
**Diagnostic** : CTAs présents sur chaque section (Séjourner, Savourer, Vivre). Module de réservation ancré en hero.
**Problème** : Pas de CTA flottant/sticky après scroll dépassant le hero. Pas de tracking des clics CTAs. Les boutons ne se distinguent pas visuellement selon leur priorité.
**Recommandation** : Ajouter un CTA sticky discret après dépassement du hero. Différencier visuellement les niveaux de CTA.

### 6. Hiérarchie visuelle — 6/10
**Diagnostic** : `h1` sur section-1 (histoire de la marque), `h2` sur section-2, `h3` sur sections 3-6. Logique mais discutable.
**Problème** : Le vrai titre principal de la page (hero) est un `<div class="hero-section__title">` sans balise sémantique.
**Recommandation** : Passer le titre hero en `<h1>`, descendre section-1 à `<h2>`.

### 7. Typographie — 7/10
**Diagnostic** : `clamp()` bien utilisé pour les titres display. Variable font Epilogue correctement chargée avec `display=swap`.
**Problème** : Quelques `font-size` fixes (15px, 20px dans les boutons) qui ne scalent pas. Pas de `line-height` global défini.
**Recommandation** : Définir `$line-height-body`, `$line-height-heading` en variables. Remplacer les tailles fixes résiduelles par des clamp.

### 8. Responsive mobile — 5/10
**Diagnostic** : Mixins de breakpoints présents et cohérents. `clamp()` pour la typo.
**Problème** : 10+ breakpoints custom dans `home-landing.scss` en plus des mixins. Images positionnées en `absolute` avec `translate(-50%, 0)` cassantes sur certains écrans. Touch targets < 44px sur certains éléments.
**Recommandation** : Consolider les breakpoints sur les 6 mixins existants, tester tous les points de rupture sur section-4 et section-7.

### 9. Accessibilité — 4/10
**Diagnostic** : Module de réservation bien annoté. Menu mobile avec aria-expanded. Escape key géré.
**Problème** : `<div role="button" tabindex="0">` sur le trigger voyageurs au lieu d'un vrai `<button>`. Pas de `:focus-visible` visible sur les liens. Contraste or (#e3cca3) sur brun (#7b5330) non vérifié (ratio estimé < 3:1). Pas de `skip-to-content`.
**Recommandation** : Remplacer le div role=button par un `<button>`. Ajouter `:focus-visible` avec outline visible. Tester le contraste avec WebAIM.

### 10. Performance — 4/10
**Diagnostic** : `fetchpriority="high"` sur l'image hero — correct. Webpack avec code splitting.
**Problème** : 0 `loading="lazy"` sur les 15+ images de la homepage. FontAwesome complet (`all.min.css`) chargé pour le public alors que seules 3-4 icônes sont utilisées. Pas de WebP. Google Fonts en bloquant (même avec preconnect).
**Recommandation** : Ajouter `loading="lazy"` sur toutes les images hors hero. Remplacer FontAwesome par les 4 icônes SVG inline ou un subset. Envisager l'auto-hébergement des fonts.

### 11. Qualité des animations — 7/10
**Diagnostic** : AOS bien calibré (durée réduite sur mobile, offset adapté). Gradients CSS @property élégants. `prefers-reduced-motion` respecté.
**Problème** : Certains délais AOS (600ms) sont trop lents sur mobile. La classe `.have-animation` n'est documentée nulle part.
**Recommandation** : Réduire les délais max à 400ms sur mobile. Documenter le pattern have-animation.

### 12. Qualité du JavaScript — 6/10
**Diagnostic** : `reservation-hero.js` (514 lignes) bien structuré avec debounce, RAF, gestion clavier. `newsletter-modal.js` complet.
**Problème** : jQuery toujours chargé côté public pour `main.js` (slick, menu) — 87KB inutilement. Pas de gestion d'erreur réseau dans le newsletter. `app.js` mélange initialisation et logique.
**Recommandation** : Isoler l'initialisation dans un fichier dédié. Ajouter try/catch réseau sur newsletter. Identifier si jQuery peut être évité sur les pages publiques.

### 13. Architecture SCSS — 5/10
**Diagnostic** : Fichiers SCSS bien séparés par page. Mixins de breakpoints présents.
**Problème** : `variables.scss` fait 18 lignes — pas de tokens pour spacing, z-index, border-radius, transitions. Duplication quasi-totale entre `btn-primary`, `btn-outline` et `btn-secondary` (80+ lignes identiques). Magic numbers partout (`80px`, `108px`, `56px`).
**Recommandation** : Étendre variables.scss avec tokens de design. Extraire un mixin `btn-base` partagé. Centraliser les magic numbers.

### 14. Maintenabilité — 4/10
**Diagnostic** : Structure de fichiers claire. Builder séparé du front public.
**Problème** : `home_page/index.html.twig` = 295 lignes monolithiques, pas de composants. `home-landing.scss` = 1553 lignes dans un seul fichier. Aucune documentation inline sur les patterns complexes (have-animation, gradient @property).
**Recommandation** : Découper la home en 8 composants Twig. Découper home-landing.scss en fichiers par section.

### 15. Modernité technique — 5/10
**Diagnostic** : CSS @property pour les gradients animés — moderne. Webpack Encore 4.0. Babel configuré.
**Problème** : Vue 2 (EOL décembre 2023). jQuery 3.6 côté public. Pas de `srcset` ni `<picture>`. Pas de Service Worker. `select2` ET `selectize` tous deux chargés.
**Recommandation** : Planifier la migration Vue 2 → Vue 3 (admin). Supprimer l'une des deux libs de select. Implémenter `srcset` pour les images clés.

---

## 10 problèmes les plus graves

1. **Aucun lazy loading** sur 15+ images → LCP dégradé, Lighthouse < 50 sur mobile
2. **Homepage monolithique** (295 lignes) → impossible à maintenir ou tester
3. **FontAwesome complet** chargé pour 3-4 icônes → ~200KB CSS inutile
4. **`<div role="button">`** sur le trigger voyageurs → non accessible au clavier natif
5. **Contraste insuffisant** or sur brun → WCAG AA probablement non atteint sur fond clair
6. **Pas de tokens de spacing/z-index** → magic numbers dans 10+ fichiers SCSS
7. **Duplication totale** des 3 variantes de boutons → 200+ lignes dupliquées
8. **home-landing.scss = 1553 lignes** → maintenance impossible
9. **Titre hero en `<div>`** → pas de `<h1>` sur la page d'accueil
10. **select2 + selectize** chargés simultanément → double dépendance inutile

---

## Risques si rien n'est corrigé

- Score Lighthouse mobile < 40 → pénalité SEO Google Core Web Vitals
- Maintenance quasi-impossible : ajouter une section = modifier 3 fichiers
- Accessibility lawsuit risk sur les marchés anglophones (WCAG AA requis)
- Performance catastrophique sur connexions lentes (Polynésie, 4G international)
- Vue 2 EOL = failles de sécurité non patchées côté admin

---

## Quick wins (< 1 heure chacun)

1. Ajouter `loading="lazy"` sur toutes les images hors hero
2. Passer le titre hero de `<div>` à `<h1>`
3. Remplacer `<div role="button">` par `<button>` sur le trigger voyageurs
4. Ajouter `width` et `height` sur les images pour éviter le CLS
5. Étendre `variables.scss` avec tokens spacing, z-index, border-radius
6. Extraire un mixin `btn-base` pour éliminer la duplication des boutons
7. Ajouter `:focus-visible` global dans `main.scss`

---

## Chantiers structurants

1. **Découpage home en composants Twig** (8 fichiers) — ~4h
2. **Refonte architecture SCSS** : tokens + découpage home-landing.scss — ~6h
3. **Remplacement FontAwesome** par SVG inline ou subset — ~3h
4. **Lazy loading + srcset** sur toutes les images clés — ~4h
5. **Migration Vue 2 → Vue 3** (admin uniquement) — ~2 sprints
6. **Suppression jQuery** côté front public — ~1 sprint

---

## Roadmap de correction

### Urgent (cette semaine)
- [ ] Lazy loading sur images non-hero
- [ ] Sémantique H1/H2/H3 correcte
- [ ] `<button>` vrai sur trigger voyageurs
- [ ] `:focus-visible` global
- [ ] Variables SCSS complètes (spacing, z-index)

### Important (ce mois)
- [ ] Découpage home en composants Twig
- [ ] Découpage home-landing.scss par section
- [ ] Mixin btn-base et élimination duplication
- [ ] Remplacement FontAwesome par subset SVG
- [ ] Tests responsive sur sections 4 et 7

### Amélioration premium (trimestre suivant)
- [ ] srcset + WebP sur images clés
- [ ] CTA sticky après dépassement hero
- [ ] Suppression jQuery côté public
- [ ] Migration Vue 2 → Vue 3
- [ ] Service Worker + offline shell
- [ ] Bandeau cookie consent RGPD

---

## Conclusion

**Le front est insuffisant pour un site hôtelier premium** dans son état actuel d'un point de vue technique, même si l'intention créative est au niveau. La dette technique est réelle (maintenabilité, performance, accessibilité) et représente un risque croissant. Avec la roadmap ci-dessus, un front de niveau **très bon** est atteignable en 3 à 4 semaines de travail ciblé.
