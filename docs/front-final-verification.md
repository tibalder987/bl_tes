# Vérification front-end finale — Bloody Mary's Bora Bora

> Date : 2026-05-23 — Branche : `main` après Cycle 6

---

## Correction du rapport précédent

Le tableau du Cycle 5 annonçait **9,1/10** mais la somme des notes détaillées donnait :

```
9 + 8,5 + 8,5 + 7,5 + 7 + 7 + 7,5 + 8 + 8,5 + 9 + 8,5 + 8,5 + 9 + 9 + 8 = 123,5 / 150 = 8,23/10
```

Le score 9,1/10 était mathématiquement faux. **Score réel après Cycle 5 : 8,23/10.**

---

## Audit Cycle 6 — Ce qui a été réellement corrigé

### 1. Bundle public pollué — `import './builder'` retiré

**Problème constaté :**
`assets/app.js` importait `./builder`, un script de 7 lignes qui gère `.data_bg` pour les templates admin (`templates/builder/`). Jamais utilisé sur aucune page publique.

**Vérification effectuée :**
```bash
grep -rn "data_bg\|data-bg" templates/ --include="*.twig" | grep -v "builder/"
# → aucun résultat
```

**Correction :** `import './builder'` supprimé de `assets/app.js`.

**Dépendances légitimes conservées :**
- `jquery` + `bootstrap` → menu mobile (`hide.bs.collapse`, `shown.bs.collapse`) dans `main.js`
- `slick-carousel` → slider chambres `stay/index.html.twig` `.section-2__rooms`
- `aos` → animations scroll sur toutes les pages publiques

### 2. Duplication AOS — état réel

**Vérification effectuée après Cycle 5 :**
```bash
grep -n "function scaleDownAos\|function isMobile" assets/app.js
# → aucun résultat
grep -n "import.*aos-utils" assets/app.js
# → import { isMobileAosViewport, scaleDownAosDelaysForMobile } from './js/aos-utils';
```
La duplication était **réellement absente** depuis le Cycle 5. Le rapport était correct sur ce point.

### 3. WebP réels générés avec cwebp

**Commande exécutée :**
```bash
cwebp -q 82 <image>.jpg -o <image>.webp
```

**Résultats mesurés :**

| Image | JPG | WebP | Gain |
|-------|-----|------|------|
| hero/background.jpg | 199 KB | 130 KB | -35% |
| section-1/vahine.jpg | 1 338 KB | 868 KB | -35% |
| section-1/tiki_jardin.jpg | 842 KB | 746 KB | -11% |
| section-5/borabora_sunset.jpg | 809 KB | 486 KB | -40% |
| section-7/flower.jpg | 493 KB | 298 KB | -40% |
| section-8/sunset.jpg | 625 KB | 335 KB | -46% |

**Implémentation :** `<picture><source type="image/webp"><img></picture>` sur les 5 images de section + hero. Le fallback JPG est conservé pour Safari < 14 et IE.

Preload hero mis à jour pour pointer sur le WebP :
```html
<link rel="preload" as="image" href="...background.webp" type="image/webp" fetchpriority="high">
```

---

## Ce que je ne peux pas vérifier depuis le terminal

Les éléments suivants **nécessitent un audit humain ou un navigateur** :

### Lighthouse
Je n'ai pas accès à un navigateur. Je ne peux pas lancer Lighthouse sur `https://bltes-production.up.railway.app/fr/`. **Aucun score Lighthouse n'est annoncé.**

Pour lancer un audit réel :
```
Chrome DevTools → Lighthouse → Mobile → Analyser la page
```
ou
```
npx lighthouse https://bltes-production.up.railway.app/fr/ --output=html --output-path=./lighthouse.html
```

### Audit clavier (à faire manuellement)

Points à vérifier sur le site en prod :

| Test | Attendu |
|------|---------|
| Tab depuis le haut de page | Skip-to-content visible au focus |
| Tab dans le module réservation | Checkin → Checkout → Guests → Search dans l'ordre |
| Escape sur le popover voyageurs | Ferme le popover, retour au bouton |
| Tab dans le calendrier Flatpickr | Navigation entre jours possible |
| Tab sur les boutons +/- voyageurs | Focus visible, incrémente au clavier |
| Enter/Space sur le FAB mobile | Redirige vers booking |
| Tab sur tous les liens de navigation | Focus-visible visible (outline 2px gold) |

### Audit responsive (à faire manuellement ou avec DevTools)

| Breakpoint | Points à vérifier |
|------------|-------------------|
| 375px (iPhone SE) | Module réservation pas tronqué, FAB visible, hero lisible |
| 390px (iPhone 14) | Idem |
| 430px (iPhone 14 Plus) | Sections 4 et 7 : fire + hibiscus pas superposés |
| 768px (iPad portrait) | Menu, sections 3-6 transition 2 colonnes |
| 1024px (iPad landscape) | Toutes sections en mode desktop |
| 1440px (desktop standard) | Marges et overlaps section-7 corrects |

### Contrastes WCAG AA (à vérifier)

Couples de couleurs non vérifiés (pas d'accès aux couleurs rendues) :
- `$color-gold` (#e3cca3) sur `$color-light-brown` (#7b5330) — ratio estimé 3,87:1 → **passe AA grand texte (≥3:1), échoue AA texte normal (≥4,5:1)**
- Boutons CTA `$color-text-light` (#ffffff) sur `$color-cta`/`$color-red` (#951914) — ratio estimé ~5,5:1 → **passe AA**
- Texte `$color-dark` (#17110d) sur `$color-white` (#ffffff) — ratio ~19:1 → **passe AAA**

**Action recommandée :** vérifier avec [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) les couples or/brun dans les sections 6 et 3.

### iPhone Safari
- `env(safe-area-inset-bottom)` implémenté sur le FAB — non testable sans device physique
- Flatpickr : comportement connu avec `inputmode="none"` pour éviter le clavier iOS — non testable

---

## Score corrigé et honnête après Cycle 6

**Méthode :** chaque critère est noté sur ce qui est *vérifiable dans le code*, avec mention explicite de ce qui est *non testé*.

| # | Critère | Note | Base | Non testé |
|---|---------|------|------|-----------|
| 1 | Direction artistique | 9/10 | Tokens couleur 100%, système cohérent | — |
| 2 | Storytelling | 8/10 | Composants Twig bien découpés, JSON-LD | — |
| 3 | Hero / Premier écran | 8/10 | h1, fetchpriority, WebP, preload LCP | Rendu visuel, LCP Lighthouse |
| 4 | Module de réservation | 7/10 | button natif, aria-expanded, aria-controls | Clavier, Escape, iPhone Safari |
| 5 | Parcours de conversion | 7/10 | FAB mobile, sticky module | Taux de clic réel |
| 6 | Hiérarchie visuelle | 7/10 | h1 hero, aria-labelledby sections | Contrastes WCAG non mesurés |
| 7 | Typographie | 7/10 | Balney preload, Epilogue, tokens | Rendu réel polices |
| 8 | Responsive mobile | 7/10 | Breakpoints documentés, safe-area | Aucun test breakpoint réel |
| 9 | Accessibilité | 7/10 | skip-to-content, focus-visible, touch 44px, reduced-motion | Audit clavier complet non fait |
| 10 | Performance | 8/10 | FA différé (-160KB), WebP (-35-46%), preloads | Aucun Lighthouse réel |
| 11 | Qualité des animations | 8/10 | prefers-reduced-motion CSS+JS, AOS disable | Rendu visuel non testé |
| 12 | Qualité du JavaScript | 7/10 | builder retiré, try/catch, module aos-utils | Aucun test E2E |
| 13 | Architecture SCSS | 9/10 | 9 fichiers partiels, zéro hex hard-codé, tokens complets | — |
| 14 | Maintenabilité | 8/10 | SCSS orchestrateur, Twig composants, module JS | — |
| 15 | Modernité technique | 7/10 | JSON-LD, WebP, FA async, preload | Aucun audit tooling complet |

**Total : 114/150 = 7,60/10**
_(9+8+8+7+7+7+7+7+7+8+8+7+9+8+7 = 114)_

### Écarts restants pour atteindre 9/10

| Critère | Note actuelle | Bloquant | Ce qui manque |
|---------|---------------|----------|---------------|
| Module réservation (4) | 7 | Audit clavier/Escape/iPhone | Test humain requis |
| Responsive mobile (8) | 7 | Test breakpoints réels | Test humain requis |
| Accessibilité (9) | 7 | Contrastes WCAG, audit Tab complet | Test humain + outils |
| Performance (10) | 8 | Score Lighthouse réel | Lighthouse requis |
| Modernité technique (15) | 7 | Audit complet outillage | — |

---

## Commandes exécutées dans ce cycle

```bash
# Vérification builder.js utilisé en public
grep -rn "data_bg|data-bg" templates/ --include="*.twig" | grep -v "builder/"
# → aucun résultat → suppression confirmée sûre

# Suppression de l'import
# assets/app.js : retrait de `import './builder';`

# Génération WebP
cwebp -q 82 public/images/home/hero-section/background.jpg -o public/images/home/hero-section/background.webp
cwebp -q 82 public/images/home/section-1/vahine.jpg -o section-1/vahine.webp
cwebp -q 82 public/images/home/section-1/tiki_jardin.jpg -o section-1/tiki_jardin.webp
cwebp -q 82 public/images/home/section-5/borabora_sunset.jpg -o section-5/borabora_sunset.webp
cwebp -q 82 public/images/home/section-7/flower.jpg -o section-7/flower.webp
cwebp -q 82 public/images/home/section-8/sunset.jpg -o section-8/sunset.webp

# Build
node node_modules/@symfony/webpack-encore/bin/encore.js dev
# → Compiled successfully in 2944ms, 76 files written ✅

# Lint Twig
php bin/console lint:twig templates/
# → All 120 Twig files contain valid syntax ✅
```
