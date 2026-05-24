# Plan de refactorisation front — Bloody Mary's Bora Bora

> Document opérationnel — 2026-05-23

---

## Ordre exact d'intervention

1. Variables SCSS → tokens manquants
2. Mixin boutons → élimination duplication
3. Accessibilité globale → focus-visible, h1
4. Découpage home Twig → 8 composants
5. Lazy loading images
6. Clavier sur stepper voyageurs
7. Découpage home-landing.scss (après validation visuelle)

---

## Fichiers à modifier

| Fichier | Action | Risque |
|---------|--------|--------|
| `assets/styles/variables.scss` | Ajouter tokens spacing, z-index, transitions, border-radius | Faible — ajout pur |
| `assets/styles/main.scss` | Extraire mixin btn-base, ajouter focus-visible | Moyen — tester tous les boutons |
| `assets/styles/home-landing.scss` | Découper en fichiers par section | Élevé — tester toute la home |
| `assets/styles/app.scss` | Importer les nouveaux fichiers section | Faible |
| `templates/home_page/index.html.twig` | Inclure les composants | Moyen — tester le rendu |
| `templates/base.html.twig` | Passer h1 dans le hero | Faible |

## Composants Twig à créer

| Fichier | Contenu |
|---------|---------|
| `templates/components/home/_hero.html.twig` | Section hero + module réservation |
| `templates/components/home/_section-story.html.twig` | Section 1 (histoire) |
| `templates/components/home/_section-atmosphere.html.twig` | Section 2 (atmosphère rouge) |
| `templates/components/home/_section-stay.html.twig` | Section 3 (hébergement) |
| `templates/components/home/_section-dine.html.twig` | Section 4 (restaurant) |
| `templates/components/home/_section-flow.html.twig` | Section 5 (expériences) |
| `templates/components/home/_section-media.html.twig` | Sections 6+7 (galerie vidéo) |
| `templates/components/home/_section-closing.html.twig` | Section 8 (clôture) |

## Fichiers SCSS à créer

| Fichier | Contenu |
|---------|---------|
| `assets/styles/home/_section-story.scss` | Styles section 1 |
| `assets/styles/home/_section-atmosphere.scss` | Styles section 2 |
| `assets/styles/home/_section-stay.scss` | Styles section 3 |
| `assets/styles/home/_section-dine.scss` | Styles section 4 |
| `assets/styles/home/_section-flow.scss` | Styles section 5 |
| `assets/styles/home/_section-media.scss` | Styles sections 6+7 |
| `assets/styles/home/_section-closing.scss` | Styles section 8 |
| `assets/styles/home/_hero.scss` | Styles hero |

## Modules JS à isoler

| Fichier actuel | Action |
|----------------|--------|
| `assets/js/reservation-hero.js` | Ajouter keydown sur steppers (Enter/Space) |
| `assets/main.js` | Extraire init AOS dans `assets/js/init-aos.js` |

## Dépendances à revoir

| Dépendance | Problème | Action |
|------------|---------|--------|
| FontAwesome `all.min.css` | ~400KB pour 4 icônes | Remplacer par SVG inline (trimestre suivant) |
| `select2` + `selectize` | Double dépendance | Garder selectize (newsletter), documenter le choix |
| jQuery | 87KB côté public | Garder pour l'instant, planifier la suppression |

## Optimisations images

- Ajouter `loading="lazy"` sur toutes les images hors `.hero-section__background`
- Ajouter `width` et `height` explicites pour éviter CLS
- Vérifier que la section-7 video a `preload="none"` (autoplay muted suffit)

## Corrections accessibilité

- `<div role="button">` → `<button type="button">` sur `.reservation-module__item--guests`
- Ajouter `:focus-visible` global dans main.scss
- Passer le titre hero de `<div>` à `<h1>`
- Vérifier le contraste des textes clairs sur fond or/brun

## Corrections responsive

- Section 4 : tester position image fire sur 375px-768px
- Section 7 : tester overlap images sur 375px
- Module réservation : vérifier sticky sur iOS Safari (barre d'URL dynamique)

## Corrections performance

- `loading="lazy"` sur images non-hero
- `preload="none"` sur la video section-7 (autoplay ne nécessite pas de preload)

---

## Risques de régression

| Risque | Zone | Mitigation |
|--------|------|-----------|
| Découpage Twig casse le rendu | Home complète | Tester section par section |
| Refonte SCSS casse les animations | Sections 3-6 | Ne pas toucher les @property |
| Remplacement div→button casse le JS | Module réservation | Tester le stepper et le calendrier |
| Magic numbers supprimés trop tôt | Spacing global | Valider visuellement avant commit |

## Tests à faire après chaque étape

1. **Après variables SCSS** : `yarn encore dev` sans erreur
2. **Après mixin boutons** : inspecter btn-primary, btn-secondary, btn-outline sur desktop et mobile
3. **Après découpage Twig** : valider `php bin/console lint:twig templates/`
4. **Après lazy loading** : vérifier que l'image hero reste `loading="eager"`
5. **Après fix clavier stepper** : naviguer au clavier dans le module de réservation
6. **Build final** : `yarn encore production --progress` sans warning
