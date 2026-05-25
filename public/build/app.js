(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./assets/main.js");
/* harmony import */ var _js_reservation_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/reservation-hero */ "./assets/js/reservation-hero.js");
/* harmony import */ var _js_newsletter_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/newsletter-modal */ "./assets/js/newsletter-modal.js");
/* harmony import */ var _js_newsletter_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_newsletter_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_aos_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/aos-utils */ "./assets/js/aos-utils.js");
/* harmony import */ var _images_deco_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/deco.png */ "./assets/images/deco.png");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

// any JS you import will output into a single JS file (app.js in this case)







// any CSS you import will output into a single css file (app.css in this case)
// AOS : styles dans assets/styles/app.scss (entrée default), pas ici — sinon app.css n'est pas lié dans base.html.twig.

const pageLoadStart = Date.now();
const minimumLoaderDuration = 0;

// Scripts are at end of <body> — DOM is fully parsed here.
const body = document.body;
const mainLoader = document.querySelector('.main-loader');
let loaderHiding = false;
function runAosInit() {
  (0,_js_aos_utils__WEBPACK_IMPORTED_MODULE_5__.scaleDownAosDelaysForMobile)();
  const mobile = (0,_js_aos_utils__WEBPACK_IMPORTED_MODULE_5__.isMobileAosViewport)();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  aos__WEBPACK_IMPORTED_MODULE_4___default().init({
    once: true,
    easing: 'ease-out',
    // Mobile : déclenchement plus tôt (offset plus bas), animation plus courte.
    duration: reducedMotion ? 0 : mobile ? 500 : 1000,
    offset: mobile ? 24 : 120,
    throttleDelay: mobile ? 40 : 99,
    disable: reducedMotion
  });
}
const hideMainLoader = () => {
  if (loaderHiding || window.__loaderHiding) return;
  loaderHiding = true;
  if (!mainLoader) {
    body.classList.remove('is-loading');
    runAosInit();
    return;
  }
  mainLoader.classList.add('is-hiding');
  let isCleanedUp = false;
  const cleanup = () => {
    if (isCleanedUp) return;
    isCleanedUp = true;
    body.classList.remove('is-loading');
    mainLoader.remove();
    runAosInit();
  };
  mainLoader.addEventListener('transitionend', cleanup, {
    once: true
  });
  window.setTimeout(cleanup, 300);
};

// Register AOS callback for inline loader script, or run immediately if loader already gone.
window.__onLoaderHidden = runAosInit;
if (window.__loaderHidden) runAosInit();

// Falls back to window.load (non-home pages) and 2500ms cap (slow connections).
const scheduleHide = () => {
  const elapsed = Date.now() - pageLoadStart;
  const remaining = Math.max(0, minimumLoaderDuration - elapsed);
  window.setTimeout(hideMainLoader, remaining);
};
const heroImg = document.querySelector('.hero-section__background');
if (heroImg) {
  if (heroImg.complete) {
    scheduleHide();
  } else {
    heroImg.addEventListener('load', scheduleHide, {
      once: true
    });
    heroImg.addEventListener('error', scheduleHide, {
      once: true
    });
  }
}

// Absolute cap: 2500ms in case heroImg is absent or never fires.
window.setTimeout(hideMainLoader, 2500);
$(window).on('load', function () {
  scheduleHide();
  $(".copy-to-clipboard").on('click', function () {
    const textToCopy = $(this).attr('data-link');
    const tempTextarea = $('<textarea>');
    $('body').append(tempTextarea);
    tempTextarea.val(textToCopy).select();
    document.execCommand('copy');
    tempTextarea.remove();
  });
  const reservationModule = document.querySelector('.reservation-module');
  if (!reservationModule) {
    return;
  }
  const bookFab = document.querySelector('.book-fab');
  const moduleHeight = 145;
  let initialTop = window.innerHeight - moduleHeight;
  const updateReservationState = () => {
    const isPast = window.scrollY >= initialTop;
    reservationModule.classList.toggle('is-sticky', isPast);
    if (bookFab) bookFab.classList.toggle('is-visible', isPast);
  };
  updateReservationState();
  window.addEventListener('scroll', updateReservationState, {
    passive: true
  });
  window.addEventListener('resize', () => {
    initialTop = window.innerHeight - moduleHeight;
    updateReservationState();
  });
});

/***/ }),

/***/ "./assets/have-animation.js":
/*!**********************************!*\
  !*** ./assets/have-animation.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHaveAnimation: function() { return /* binding */ initHaveAnimation; }
/* harmony export */ });
/**
 * Ajoute la classe is-animated aux éléments .have-animation lorsqu'ils entrent dans la zone visible.
 * La classe n'est jamais retirée une fois ajoutée.
 *
 * Offset (marge intérieure du bas du viewport, en px) :
 * - attribut data-animation-offset sur l'élément
 * - sinon variable CSS héritée --have-animation-offset (ex. sur body.homepage)
 * - sinon 0
 */
function initHaveAnimation() {
  const nodes = document.querySelectorAll('.have-animation');
  if (!nodes.length) {
    return;
  }
  if (typeof IntersectionObserver === 'undefined') {
    nodes.forEach(el => el.classList.add('is-animated'));
    return;
  }
  const parseOffsetPx = el => {
    const dataAttr = el.getAttribute('data-animation-offset');
    if (dataAttr !== null && dataAttr !== '') {
      const parsed = parseInt(dataAttr, 10);
      if (Number.isFinite(parsed)) {
        return Math.max(0, parsed);
      }
    }
    const raw = getComputedStyle(el).getPropertyValue('--have-animation-offset').trim();
    const n = parseFloat(raw);
    return Number.isFinite(n) ? Math.max(0, n) : 0;
  };
  nodes.forEach(el => {
    if (el.classList.contains('is-animated')) {
      return;
    }
    const offsetPx = parseOffsetPx(el);
    const rootMargin = `0px 0px -${offsetPx}px 0px`;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin,
      threshold: 0
    });
    observer.observe(el);
  });
}

/***/ }),

/***/ "./assets/js/aos-utils.js":
/*!********************************!*\
  !*** ./assets/js/aos-utils.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMobileAosViewport: function() { return /* binding */ isMobileAosViewport; },
/* harmony export */   scaleDownAosDelaysForMobile: function() { return /* binding */ scaleDownAosDelaysForMobile; }
/* harmony export */ });
const MOBILE_AOS_MAX_WIDTH = 991;
function isMobileAosViewport() {
  return window.matchMedia(`(max-width: ${MOBILE_AOS_MAX_WIDTH}px)`).matches;
}

/**
 * Sur mobile, les data-aos-delay (200–600 ms) allongent trop la séquence d'apparition.
 * On les réduit avant AOS.init pour garder un léger décalage sans empiler les attentes.
 * Appelé une seule fois, avant AOS.init, après que le DOM est complet.
 */
function scaleDownAosDelaysForMobile() {
  if (!isMobileAosViewport()) {
    return;
  }
  document.querySelectorAll('[data-aos-delay]').forEach(el => {
    const raw = el.getAttribute('data-aos-delay');
    if (raw === null || raw === '') {
      return;
    }
    const v = parseInt(raw, 10);
    if (!Number.isFinite(v) || v <= 0) {
      return;
    }
    const scaled = Math.min(90, Math.round(v * 0.22));
    el.setAttribute('data-aos-delay', String(Math.max(0, scaled)));
  });
}

/***/ }),

/***/ "./assets/js/newsletter-modal.js":
/*!***************************************!*\
  !*** ./assets/js/newsletter-modal.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! selectize/dist/js/standalone/selectize.min.js */ "./node_modules/selectize/dist/js/standalone/selectize.min.js");
// Styles Selectize : importés dans app.scss (entrée « default »), sinon ils ne sont pas chargés (seul default l’est dans base.html.twig).

const countries = __webpack_require__(/*! i18n-iso-countries */ "./node_modules/i18n-iso-countries/index.js");
const enLocale = __webpack_require__(/*! i18n-iso-countries/langs/en.json */ "./node_modules/i18n-iso-countries/langs/en.json");
const frLocale = __webpack_require__(/*! i18n-iso-countries/langs/fr.json */ "./node_modules/i18n-iso-countries/langs/fr.json");
countries.registerLocale(enLocale);
countries.registerLocale(frLocale);
const SELECTORS = {
  modal: '[data-newsletter-modal]',
  trigger: '[data-newsletter-trigger]',
  close: '[data-newsletter-close]',
  form: '[data-newsletter-form]',
  feedback: '[data-newsletter-feedback]',
  captcha: '[data-newsletter-captcha]',
  countrySelect: '[data-newsletter-country]'
};
const OPEN_CLASS = 'is-open';
const BODY_OPEN_CLASS = 'has-newsletter-open';
const SUCCESS_FORM_CLASS = 'is-success-state';

/**
 * Liste unique de tous les pays / territoires ISO, tri alphabétique selon la langue d’affichage.
 *
 * @param {string} pageLocale
 * @returns {{ options: Array<Record<string, unknown>>, codes: Set<string>, flatForNative: Array<{ value: string, text: string }> }}
 */
function buildCountrySelectData(pageLocale) {
  const lang = pageLocale === 'en' ? 'en' : 'fr';
  const official = countries.getNames(lang, {
    select: 'official'
  });
  const opts = Object.keys(official).map(code => ({
    value: code,
    text: official[code]
  }));
  opts.sort((a, b) => a.text.localeCompare(b.text, lang, {
    sensitivity: 'base'
  }));
  opts.forEach((o, i) => {
    o.$order = i;
  });
  const codes = new Set(opts.map(o => o.value));
  const flatForNative = opts.map(_ref => {
    let {
      value,
      text
    } = _ref;
    return {
      value,
      text
    };
  });
  return {
    options: opts,
    codes,
    flatForNative
  };
}

/**
 * @param {HTMLFormElement} form
 * @param {Set<string>} codes
 */
function resolveInitialCountryCode(form, codes) {
  // 1) Suggestion Symfony (CF-IPCountry, défaut PF, …) — prioritaire : sinon une locale navigateur « en-US »
  //    faisait choisir US avant même de lire data-suggested-country (= PF hors CDN).
  const server = (form.dataset.suggestedCountry || '').trim().toUpperCase();
  if (server && codes.has(server)) {
    return server;
  }

  // 2) Secours : région navigateur (en-US → US, …), sauf fr-FR (« France » ne doit pas passer avant le défaut métier sans serveur)
  try {
    const list = typeof navigator !== 'undefined' ? navigator.languages || [navigator.language] : [];
    for (const raw of list) {
      const m = /^[a-z]{2}-([A-Z]{2})$/.exec(String(raw).replace('_', '-'));
      if (!m || !codes.has(m[1])) {
        continue;
      }
      if (m[1] === 'FR') {
        continue;
      }
      return m[1];
    }
  } catch (e) {
    // ignore
  }

  // 3) Polynésie française par défaut
  if (codes.has('PF')) {
    return 'PF';
  }
  if (codes.has('FR')) {
    return 'FR';
  }
  return Array.from(codes)[0] ?? 'PF';
}

/**
 * @param {HTMLSelectElement} selectEl
 * @param {Array<{ value: string, text: string }>} flatOptions
 * @param {string} initial
 */
function populateNativeCountrySelect(selectEl, flatOptions, initial) {
  selectEl.innerHTML = '';
  for (const o of flatOptions) {
    const opt = document.createElement('option');
    opt.value = o.value;
    opt.textContent = o.text;
    if (o.value === initial) {
      opt.selected = true;
    }
    selectEl.appendChild(opt);
  }
}

/**
 * @param {HTMLFormElement} form
 */
function initCountrySelectize(form) {
  const selectEl = form.querySelector(SELECTORS.countrySelect);
  if (!selectEl || !(selectEl instanceof HTMLSelectElement)) {
    return;
  }
  const pageLocale = form.dataset.pageLocale || 'fr';
  const placeholder = form.dataset.countryPlaceholder || '';
  let built;
  try {
    built = buildCountrySelectData(pageLocale);
  } catch (e) {
    console.error('[newsletter] Liste pays (i18n-iso-countries)', e);
    return;
  }
  const {
    options,
    codes,
    flatForNative
  } = built;
  const initial = resolveInitialCountryCode(form, codes);
  if (typeof $ === 'undefined' || !$.fn.selectize) {
    populateNativeCountrySelect(selectEl, flatForNative, initial);
    return;
  }
  const $select = $(selectEl);
  if ($select[0].selectize) {
    $select[0].selectize.destroy();
  }
  try {
    $select.selectize({
      options,
      items: [initial],
      valueField: 'value',
      labelField: 'text',
      searchField: ['text'],
      placeholder,
      maxItems: 1,
      create: false,
      allowEmptyOption: false,
      sortField: [{
        field: '$order',
        direction: 'asc'
      }],
      dropdownParent: 'body',
      copyClassesToDropdown: false,
      wrapperClass: 'selectize-control newsletter-country-selectize',
      dropdownClass: 'selectize-dropdown newsletter-country-dropdown'
    });
  } catch (err) {
    console.error('[newsletter] Selectize', err);
    populateNativeCountrySelect(selectEl, flatForNative, initial);
    return;
  }
  const inst = $select[0].selectize;
  form._newsletterCountrySelectize = inst;

  // Prevent Selectize's internal paste handler from calling preventDefault (Lighthouse BP audit).
  const inp = inst && inst.$control_input && inst.$control_input[0];
  if (inp) {
    inp.addEventListener('paste', function (e) {
      e.stopImmediatePropagation();
      setTimeout(() => {
        if (inp.value) inst.search(inp.value);
      }, 1);
    }, {
      capture: true
    });
  }
}

/**
 * @param {HTMLFormElement} form
 */
function refreshCountryFieldAfterReset(form) {
  if (form._newsletterCountrySelectize) {
    try {
      form._newsletterCountrySelectize.destroy();
    } catch (e) {
      // ignore
    }
    form._newsletterCountrySelectize = null;
  }
  initCountrySelectize(form);
}
function openModal(modal) {
  if (!modal) return;
  modal.hidden = false;
  modal.classList.add(OPEN_CLASS);
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add(BODY_OPEN_CLASS);
  const main = modal.querySelector('[data-newsletter-main]');
  const firstField = main && main.querySelector('input:not([type="hidden"]), select, textarea');
  if (firstField) {
    window.requestAnimationFrame(() => firstField.focus());
  }
}
function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove(OPEN_CLASS);
  modal.setAttribute('aria-hidden', 'true');
  modal.hidden = true;
  document.body.classList.remove(BODY_OPEN_CLASS);
  const feedback = modal.querySelector(SELECTORS.feedback);
  if (feedback) {
    feedback.textContent = '';
    feedback.classList.remove('is-success', 'is-error');
  }
  const form = modal.querySelector(SELECTORS.form);
  if (form) {
    form.classList.remove(SUCCESS_FORM_CLASS);
    form.reset();
    refreshCountryFieldAfterReset(form);
  }
}
async function handleSubmit(event, modal) {
  event.preventDefault();
  const form = event.currentTarget;
  const feedback = modal.querySelector(SELECTORS.feedback);
  const submitButton = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);
  const email = (formData.get('email') || '').toString().trim();
  const firstName = (formData.get('firstName') || '').toString().trim();
  const lastName = (formData.get('lastName') || '').toString().trim();
  const country = (formData.get('country') || '').toString().trim();
  const locale = (form.dataset.pageLocale || document.documentElement.getAttribute('lang') || document.documentElement.dataset.locale || '').trim();
  const genericErrorMessage = form.dataset.genericError || 'Une erreur s\'est produite, veuillez réessayer plus tard.';
  const incompleteMessage = form.dataset.incompleteError || 'Veuillez remplir tous les champs correctement.';
  const recaptchaEnabled = form.dataset.recaptchaEnabled === '1';
  const recaptchaSiteKey = form.dataset.recaptchaSiteKey || '';
  const captchaInput = form.querySelector(SELECTORS.captcha);
  if (feedback) {
    feedback.textContent = '';
    feedback.classList.remove('is-success', 'is-error');
  }
  form.classList.remove(SUCCESS_FORM_CLASS);
  if (submitButton) {
    submitButton.disabled = true;
  }
  if (!email || !firstName || !lastName || !country) {
    if (feedback) {
      feedback.textContent = incompleteMessage;
      feedback.classList.add('is-error');
    }
    if (submitButton) {
      submitButton.disabled = false;
    }
    return;
  }
  let captchaToken = '';
  if (recaptchaEnabled) {
    if (!window.grecaptcha || typeof window.grecaptcha.execute !== 'function' || recaptchaSiteKey === '') {
      if (feedback) {
        feedback.textContent = genericErrorMessage;
        feedback.classList.add('is-error');
      }
      if (submitButton) {
        submitButton.disabled = false;
      }
      return;
    }
    captchaToken = await new Promise((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(recaptchaSiteKey, {
          action: 'newsletter_subscribe'
        }).then(resolve).catch(reject);
      });
    });
  }
  if (captchaInput) {
    captchaInput.value = captchaToken;
  }
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        country,
        locale,
        captcha: captchaToken
      })
    });
    let payload = {};
    try {
      payload = await response.json();
    } catch (jsonError) {
      payload = {};
    }
    if (!response.ok || payload.success === false) {
      if (feedback) {
        feedback.textContent = payload.message || genericErrorMessage;
        feedback.classList.add('is-error');
      }
      return;
    }
    if (feedback) {
      feedback.textContent = payload.message || 'Thanks — you are on the list.';
      feedback.classList.add('is-success');
    }
    form.classList.add(SUCCESS_FORM_CLASS);
    form.reset();
    refreshCountryFieldAfterReset(form);
  } catch (error) {
    console.error('[newsletter] Erreur réseau ou inattendue lors de la soumission', error);
    if (feedback) {
      feedback.textContent = genericErrorMessage;
      feedback.classList.add('is-error');
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
    }
  }
}
function init() {
  const modal = document.querySelector(SELECTORS.modal);
  if (!modal) return;
  const form = modal.querySelector(SELECTORS.form);
  if (form) {
    try {
      initCountrySelectize(form);
    } catch (err) {
      console.error('[newsletter] Initialisation du sélecteur pays impossible (dépendances manquantes ? yarn install)', err);
    }
    form.addEventListener('submit', event => handleSubmit(event, modal));
  }
  document.addEventListener('click', event => {
    const trigger = event.target.closest(SELECTORS.trigger);
    if (trigger) {
      event.preventDefault();
      openModal(modal);
      return;
    }
    if (event.target.closest(SELECTORS.close) && modal.contains(event.target)) {
      event.preventDefault();
      closeModal(modal);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains(OPEN_CLASS)) {
      closeModal(modal);
    }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/***/ }),

/***/ "./assets/js/reservation-hero.js":
/*!***************************************!*\
  !*** ./assets/js/reservation-hero.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/l10n/fr.js */ "./node_modules/flatpickr/dist/l10n/fr.js");
/* harmony import */ var flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_l10n_default_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/l10n/default.js */ "./node_modules/flatpickr/dist/l10n/default.js");
/* harmony import */ var flatpickr_dist_l10n_default_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_default_js__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Flatpickr parcourt document.styleSheets et lit sheet.cssRules ; sur une feuille cross-origin
 * (ex. Google Fonts), l’accès lève SecurityError avant même le try/catch interne.
 * Une feuille <style> locale en tête du <head> garantit que la première feuille est lisible.
 */
function prependLocalStylesheetHook() {
  if (document.getElementById('flatpickr-local-stylesheet-hook')) {
    return;
  }
  const el = document.createElement('style');
  el.id = 'flatpickr-local-stylesheet-hook';
  el.appendChild(document.createTextNode('/* flatpickr: feuille locale pour accès cssRules */'));
  document.head.insertBefore(el, document.head.firstChild);
}
function debounce(fn, ms) {
  let t;
  return function () {
    clearTimeout(t);
    const args = arguments;
    t = setTimeout(function () {
      fn.apply(null, args);
    }, ms);
  };
}
function parseIntStrict(v, fallback) {
  const n = parseInt(String(v), 10);
  return Number.isFinite(n) ? n : fallback;
}

/** Locale ISO 2 lettres depuis le HTML (Symfony : lang + data-locale sur <html> ou <body>). */
function getSiteLocale() {
  const el = document.documentElement;
  const raw = el.getAttribute('data-locale') || el.getAttribute('lang') || document.body && document.body.getAttribute('data-locale') || 'fr';
  return String(raw).toLowerCase().split('-')[0];
}
function getFlatpickrLocale() {
  const loc = getSiteLocale();
  if (loc === 'fr') {
    return flatpickr_dist_l10n_fr_js__WEBPACK_IMPORTED_MODULE_1__.French;
  }
  return (flatpickr_dist_l10n_default_js__WEBPACK_IMPORTED_MODULE_2___default());
}

/** @typedef {{ adults_one: string, adults: string, kid_one: string, kids: string, sep: string }} GuestsSummaryI18n */

/** Remplace le marqueur __COUNT__ (issu des fichiers de traduction Symfony). */
function applyCountTemplate(template, count) {
  return String(template).split('__COUNT__').join(String(count));
}

/**
 * @param {number} adults
 * @param {number} kids
 * @param {GuestsSummaryI18n | null} i18n
 */
function formatGuestSummary(adults, kids, i18n) {
  const t = i18n || /** @type {GuestsSummaryI18n} */{
    adults_one: '1 adult',
    adults: '__COUNT__ adults',
    kid_one: '1 kid',
    kids: '__COUNT__ kids',
    sep: ' · '
  };
  const aLabel = adults === 1 ? t.adults_one : applyCountTemplate(t.adults, adults);
  if (kids === 0) {
    return aLabel;
  }
  const kLabel = kids === 1 ? t.kid_one : applyCountTemplate(t.kids, kids);
  return aLabel + t.sep + kLabel;
}
function initReservationHero() {
  const form = document.getElementById('hero-reservation-form');
  const datesBlock = document.querySelector('[data-reservation-dates]');
  const calendarMount = document.getElementById('reservation-calendar-mount');
  const anchorEl = document.getElementById('reservation-flatpickr-anchor');
  const checkinHidden = document.getElementById('reservation-checkin');
  const checkoutHidden = document.getElementById('reservation-checkout');
  const checkinDisplay = document.getElementById('reservation-checkin-display');
  const checkoutDisplay = document.getElementById('reservation-checkout-display');
  const guestsMount = document.getElementById('reservation-guests-popover-mount');
  const guestsTrigger = document.querySelector('.reservation-module__item[data-reservation-field="guests"]');
  const guestsSummary = document.getElementById('reservation-guests-summary');
  const adultsHidden = document.getElementById('reservation-adults');
  const kidsHidden = document.getElementById('reservation-kids');
  const guestsDone = document.getElementById('reservation-guests-done');
  if (!form || !datesBlock || !calendarMount || !anchorEl || !checkinHidden || !checkoutHidden || !checkinDisplay || !checkoutDisplay) {
    return;
  }

  /** @type {GuestsSummaryI18n | null} */
  let guestsSummaryI18n = null;
  const i18nRaw = form.getAttribute('data-guests-summary-i18n');
  if (i18nRaw) {
    try {
      guestsSummaryI18n = JSON.parse(i18nRaw);
    } catch (_e) {
      guestsSummaryI18n = null;
    }
  }
  prependLocalStylesheetHook();
  let fp = null;
  function lockYearInputs(instance) {
    if (!instance || !instance.calendarContainer) {
      return;
    }
    instance.calendarContainer.querySelectorAll('input.cur-year').forEach(function (el) {
      el.disabled = true;
      el.setAttribute('readonly', 'readonly');
      el.setAttribute('aria-readonly', 'true');
      el.setAttribute('tabindex', '-1');
    });
  }
  const calendarHook = function (_selectedDates, _dateStr, instance) {
    if (instance && instance.calendarContainer) {
      instance.calendarContainer.classList.add('reservation-flatpickr-calendar');
    }
    lockYearInputs(instance);
  };
  function showMonthsCount() {
    return window.innerWidth < 640 ? 1 : 2;
  }
  function syncFromSelection(selectedDates, instance) {
    const fmtYmd = 'Y-m-d';
    const fmtUi = 'j M Y';
    if (selectedDates.length >= 1) {
      checkinHidden.value = instance.formatDate(selectedDates[0], fmtYmd);
      checkinDisplay.value = instance.formatDate(selectedDates[0], fmtUi);
    } else {
      checkinHidden.value = '';
      checkinDisplay.value = '';
    }
    if (selectedDates.length >= 2) {
      checkoutHidden.value = instance.formatDate(selectedDates[1], fmtYmd);
      checkoutDisplay.value = instance.formatDate(selectedDates[1], fmtUi);
    } else {
      checkoutHidden.value = '';
      checkoutDisplay.value = '';
    }
  }
  function createFlatpickr() {
    if (fp) {
      return fp;
    }
    fp = (0,flatpickr__WEBPACK_IMPORTED_MODULE_0__["default"])(anchorEl, {
      mode: 'range',
      // true déclenche focusAndClose() → focus sur l’input caché → zoom iOS (WebKit) au 2ᵉ jour.
      closeOnSelect: false,
      // inline : open() est noop, mais évite tout listener focus/clic inutile sur l’ancre.
      clickOpens: false,
      showMonths: showMonthsCount(),
      dateFormat: 'Y-m-d',
      allowInput: false,
      inline: true,
      appendTo: calendarMount,
      disableMobile: true,
      minDate: 'today',
      locale: Object.assign({}, getFlatpickrLocale(), {
        firstDayOfWeek: 1
      }),
      monthSelectorType: 'static',
      onReady: calendarHook,
      onMonthChange: function (_selectedDates, _dateStr, instance) {
        lockYearInputs(instance);
      },
      onChange: function (selectedDates, _dateStr, instance) {
        syncFromSelection(selectedDates, instance);
        if (selectedDates.length >= 2 && calendarOpen) {
          requestAnimationFrame(function () {
            closeCalendar();
          });
        }
      },
      onClose: function (selectedDates, _dateStr, instance) {
        syncFromSelection(selectedDates, instance);
      }
    });
    if (checkinHidden.value && checkoutHidden.value) {
      fp.setDate([checkinHidden.value, checkoutHidden.value], false);
      syncFromSelection(fp.selectedDates, fp);
    }
    requestAnimationFrame(function () {
      if (fp) {
        fp.redraw();
        lockYearInputs(fp);
      }
    });
    return fp;
  }
  let calendarOpen = false;
  let guestsOpen = false;
  let suppressNextDocClick = false;
  let calendarTriggerEl = null;
  function isStickyModule() {
    const module = document.querySelector('.reservation-module');
    return !!(module && module.classList.contains('is-sticky'));
  }
  function setCalendarMountPlacementClass() {
    calendarMount.classList.toggle('reservation-module__calendar-mount--sticky', isStickyModule());
  }
  function setGuestsMountPlacementClass() {
    if (guestsMount) {
      guestsMount.classList.toggle('reservation-module__guests-popover-mount--sticky', isStickyModule());
    }
  }

  /** Aligne le bord droit du popover sur le champ Guests (montage = enfant du module, comme le calendrier). */
  function syncGuestsPopoverPosition() {
    if (!guestsMount || !guestsTrigger) {
      return;
    }
    const module = document.querySelector('.reservation-module');
    if (!module) {
      return;
    }
    if (window.innerWidth <= 500) {
      guestsMount.style.right = '';
      guestsMount.style.left = '';
      return;
    }
    const m = module.getBoundingClientRect();
    const t = guestsTrigger.getBoundingClientRect();
    guestsMount.style.left = 'auto';
    guestsMount.style.right = Math.max(0, m.right - t.right) + 'px';
  }
  function clearGuestsPopoverPosition() {
    if (guestsMount) {
      guestsMount.style.right = '';
      guestsMount.style.left = '';
    }
  }
  window.addEventListener('resize', debounce(function () {
    if (fp) {
      fp.set('showMonths', showMonthsCount());
      fp.redraw();
      lockYearInputs(fp);
    }
    if (guestsOpen) {
      setGuestsMountPlacementClass();
      syncGuestsPopoverPosition();
    }
  }, 200));
  window.addEventListener('scroll', debounce(function () {
    if (!guestsOpen) {
      return;
    }
    setGuestsMountPlacementClass();
    syncGuestsPopoverPosition();
  }, 50), {
    passive: true
  });
  function openCalendar(triggerEl) {
    if (guestsOpen) {
      closeGuests(false);
    }
    calendarTriggerEl = triggerEl || document.activeElement || null;
    setCalendarMountPlacementClass();
    calendarMount.classList.add('is-open');
    datesBlock.setAttribute('aria-expanded', 'true');
    calendarOpen = true;
    suppressNextDocClick = true;
    requestAnimationFrame(function () {
      createFlatpickr();
    });
  }
  function closeCalendar(returnFocus) {
    calendarMount.classList.remove('is-open');
    datesBlock.setAttribute('aria-expanded', 'false');
    calendarOpen = false;
    if (returnFocus !== false && calendarTriggerEl) {
      calendarTriggerEl.focus();
      calendarTriggerEl = null;
    }
  }
  function handleDatesInteraction(e) {
    if (e.target.closest('.flatpickr-calendar')) {
      return;
    }
    if (e.target.closest('.reservation-module__calendar-mount') && !e.target.closest('.flatpickr-calendar')) {
      return;
    }
    e.preventDefault();
    if (calendarOpen) {
      closeCalendar(true);
      return;
    }
    openCalendar(e.currentTarget || e.target);
  }
  datesBlock.addEventListener('click', handleDatesInteraction);
  datesBlock.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') {
      return;
    }
    handleDatesInteraction(e);
  });

  // -------------------------------------------------------------------------
  // Guests popover (steppers + champs cachés adults / kids)
  // -------------------------------------------------------------------------
  function getAdultsKids() {
    const a = adultsHidden ? parseIntStrict(adultsHidden.value, 2) : 2;
    const k = kidsHidden ? parseIntStrict(kidsHidden.value, 0) : 0;
    return {
      adults: Math.min(12, Math.max(1, a)),
      kids: Math.min(10, Math.max(0, k))
    };
  }
  function syncGuestStepperUi() {
    const {
      adults,
      kids
    } = getAdultsKids();
    document.querySelectorAll('[data-guest-stepper]').forEach(function (row) {
      const key = row.getAttribute('data-guest-stepper');
      const min = parseIntStrict(row.getAttribute('data-min'), 0);
      const max = parseIntStrict(row.getAttribute('data-max'), 99);
      const val = key === 'adults' ? adults : kids;
      const display = row.querySelector('[data-guest-stepper-value]');
      if (display) {
        display.textContent = String(val);
      }
      const down = row.querySelector('[data-guest-step="down"]');
      const up = row.querySelector('[data-guest-step="up"]');
      if (down) {
        down.disabled = val <= min;
      }
      if (up) {
        up.disabled = val >= max;
      }
    });
    if (guestsSummary) {
      guestsSummary.textContent = formatGuestSummary(adults, kids, guestsSummaryI18n);
    }
  }
  function setAdultsKids(adults, kids) {
    if (adultsHidden) {
      adultsHidden.value = String(Math.min(12, Math.max(1, adults)));
    }
    if (kidsHidden) {
      kidsHidden.value = String(Math.min(10, Math.max(0, kids)));
    }
    syncGuestStepperUi();
  }
  function openGuests() {
    if (!guestsMount || !guestsTrigger) {
      return;
    }
    if (calendarOpen) {
      closeCalendar();
    }
    setGuestsMountPlacementClass();
    guestsMount.classList.add('is-open');
    guestsMount.setAttribute('aria-hidden', 'false');
    guestsTrigger.classList.add('is-active');
    guestsTrigger.setAttribute('aria-expanded', 'true');
    guestsOpen = true;
    suppressNextDocClick = true;
    syncGuestStepperUi();
    requestAnimationFrame(function () {
      syncGuestsPopoverPosition();
      // Move focus to the first stepper button or Done when popover opens
      const firstBtn = guestsMount.querySelector('button:not([disabled])');
      if (firstBtn) firstBtn.focus();
    });
  }
  function closeGuests(returnFocus) {
    if (!guestsMount || !guestsTrigger) {
      return;
    }
    guestsMount.classList.remove('is-open');
    guestsMount.setAttribute('aria-hidden', 'true');
    clearGuestsPopoverPosition();
    guestsTrigger.classList.remove('is-active');
    guestsTrigger.setAttribute('aria-expanded', 'false');
    guestsOpen = false;
    if (returnFocus !== false && guestsTrigger) {
      guestsTrigger.focus();
    }
  }
  function toggleGuests() {
    if (guestsOpen) {
      closeGuests();
    } else {
      openGuests();
    }
  }
  if (guestsMount && guestsTrigger && adultsHidden && kidsHidden) {
    syncGuestStepperUi();
    guestsTrigger.addEventListener('click', function (e) {
      // Les +/- et « Done » sont dans l’item mais hors du résumé : ne pas traiter comme ouverture/fermeture du trigger
      if (guestsMount.contains(e.target)) {
        return;
      }
      e.preventDefault();
      toggleGuests();
    });
    guestsTrigger.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') {
        return;
      }
      if (guestsMount.contains(e.target)) {
        return;
      }
      e.preventDefault();
      toggleGuests();
    });
    document.querySelectorAll('[data-guest-stepper]').forEach(function (row) {
      row.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-guest-step]');
        if (!btn || btn.disabled) {
          return;
        }
        const key = row.getAttribute('data-guest-stepper');
        const min = parseIntStrict(row.getAttribute('data-min'), 0);
        const max = parseIntStrict(row.getAttribute('data-max'), 99);
        const {
          adults,
          kids
        } = getAdultsKids();
        const delta = btn.getAttribute('data-guest-step') === 'up' ? 1 : -1;
        if (key === 'adults') {
          const next = adults + delta;
          if (next < min || next > max) {
            return;
          }
          setAdultsKids(next, kids);
        } else if (key === 'kids') {
          const next = kids + delta;
          if (next < min || next > max) {
            return;
          }
          setAdultsKids(adults, next);
        }
      });
    });
    if (guestsDone) {
      guestsDone.addEventListener('click', function () {
        closeGuests();
      });
    }
  }
  document.addEventListener('click', function (e) {
    if (suppressNextDocClick) {
      suppressNextDocClick = false;
      return;
    }
    if (calendarOpen) {
      if (datesBlock.contains(e.target) || calendarMount.contains(e.target)) {
        return;
      }
      closeCalendar();
    }
    if (guestsOpen && guestsMount && guestsTrigger) {
      if (guestsTrigger.contains(e.target) || guestsMount.contains(e.target)) {
        return;
      }
      closeGuests();
    }
  }, true);

  // Focus trap inside guests popover
  if (guestsMount) {
    guestsMount.addEventListener('keydown', function (e) {
      if (!guestsOpen || e.key !== 'Tab') return;
      const focusable = Array.from(guestsMount.querySelectorAll('button:not([disabled])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') {
      return;
    }
    if (guestsOpen) {
      closeGuests(true);
      return;
    }
    if (calendarOpen) {
      closeCalendar(true);
    }
  });
  const errorEl = document.getElementById('reservation-dates-error');
  const datesErrorMsg = form.getAttribute('data-dates-error') || '';
  form.addEventListener('submit', function (e) {
    if (!checkinHidden.value || !checkoutHidden.value) {
      e.preventDefault();
      if (errorEl) {
        errorEl.textContent = datesErrorMsg;
      }
      if (!calendarOpen) {
        openCalendar(datesBlock);
      }
      const firstDateField = datesBlock.querySelector('[data-reservation-field]');
      if (firstDateField) {
        firstDateField.focus();
      }
      return;
    }
    if (errorEl) {
      errorEl.textContent = '';
    }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReservationHero);
} else {
  initReservationHero();
}

/***/ }),

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _have_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./have-animation */ "./assets/have-animation.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(function ($) {
  var $body = $('body');

  // Rooms slider — stay page
  let $stayRoomsSlider = $('.section-2__rooms');
  if ($stayRoomsSlider.length) {
    $stayRoomsSlider.slick({
      dots: false,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: false,
      cssEase: 'ease',
      autoplay: false,
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }
  let $sliderArticles = $('.slider_articles');
  if ($sliderArticles.length) {
    $sliderArticles.slick({
      dots: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      autoplay: false,
      autoplaySpeed: 7000,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: '100px'
        }
      }]
    });
  }
  let $sliderArticlesBuilder = $('.slider_articles_builder');
  if ($sliderArticlesBuilder.length) {
    $sliderArticlesBuilder.slick({
      dots: true,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      autoplay: false,
      autoplaySpeed: 7000,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: '100px'
        }
      }]
    });
  }
  let $sliderNews = $('.slider_news');
  if ($sliderNews.length) {
    $sliderNews.slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 7000,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
          centerMode: true,
          centerPadding: '100px'
        }
      }]
    });
  }
  let $sliderGallery = $('.slider_gallery');
  if ($sliderGallery.length) {
    $sliderGallery.slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      fade: false,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 7000,
      pauseOnHover: false
    });
  }
  if ($('.gallery_modal').length) {
    $body.on('click', '.gallery_modal', function () {
      const currentSlider = $(this).data('target');
      const currentSlide = $(this).data('slideto');
      if ($(currentSlider).length) {
        $(currentSlider).slick('slickGoTo', currentSlide);
      }
    });
  }
  $body.on('click', '.slidernews_actions', function () {
    const action = $(this).data('actions');
    if (action === 'prev') {
      $sliderNews.slick('slickPrev');
    } else if (action === 'next') {
      $sliderNews.slick('slickNext');
    }
  });
  (0,_have_animation__WEBPACK_IMPORTED_MODULE_0__.initHaveAnimation)();

  // Header drawer — open / close / backdrop / keyboard / scroll-spy FAB
  const siteHeader = document.getElementById('site-header');
  const headerMenuToggle = document.getElementById('header-menu-toggle');
  const headerMenuFab = document.getElementById('header-menu-fab');
  const headerDrawerBackdrop = document.querySelector('.js-header-drawer-backdrop');
  const headerDrawer = document.querySelector('.js-header-drawer');
  /** Prevents immediate re-close on iOS double-tap of burger button. */
  let headerMenuIgnoreCloseUntil = 0;
  function setDrawerFocusable(focusable) {
    if (!headerDrawer) return;
    headerDrawer.querySelectorAll('a, button').forEach(function (el) {
      if (focusable) {
        el.removeAttribute('tabindex');
      } else {
        el.setAttribute('tabindex', '-1');
      }
    });
  }
  // Drawer starts closed — remove all links from tab order
  setDrawerFocusable(false);
  function getHeaderMenuBarHeight() {
    if (!siteHeader) return 108;
    const bar = siteHeader.querySelector('.header__content');
    if (bar) return bar.offsetHeight;
    const raw = getComputedStyle(siteHeader).getPropertyValue('--header-bar-height').trim();
    const parsed = parseInt(raw, 10);
    return Number.isFinite(parsed) ? parsed : 108;
  }
  function updateHeaderMenuFabVisibility() {
    if (!headerMenuFab) return;
    const threshold = getHeaderMenuBarHeight() + 100;
    const y = window.scrollY || document.documentElement.scrollTop;
    if (y > threshold) {
      headerMenuFab.classList.add('header__menu-fab--visible');
      document.body.classList.add('menu-fab--visible');
      headerMenuFab.setAttribute('aria-hidden', 'false');
      headerMenuFab.removeAttribute('tabindex');
    } else {
      headerMenuFab.classList.remove('header__menu-fab--visible');
      document.body.classList.remove('menu-fab--visible');
      headerMenuFab.setAttribute('aria-hidden', 'true');
      headerMenuFab.setAttribute('tabindex', '-1');
    }
  }
  function getMenuLabel(btn, state) {
    const attr = state === 'open' ? 'data-label-open' : 'data-label-close';
    return btn && btn.getAttribute(attr) || btn && btn.getAttribute('aria-label') || '';
  }
  function syncHeaderMenuFabAria() {
    if (!headerMenuFab) return;
    const isOpen = document.documentElement.classList.contains('menu-drawer-open');
    headerMenuFab.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    headerMenuFab.setAttribute('aria-label', getMenuLabel(headerMenuFab, isOpen ? 'close' : 'open'));
  }
  function closeHeaderDrawer() {
    headerMenuIgnoreCloseUntil = 0;
    document.documentElement.classList.remove('menu-drawer-open');
    document.body.classList.remove('menu-drawer-open');
    if (siteHeader) siteHeader.classList.remove('header--drawer-open');
    if (headerMenuToggle) {
      headerMenuToggle.setAttribute('aria-expanded', 'false');
      headerMenuToggle.setAttribute('aria-label', getMenuLabel(headerMenuToggle, 'open'));
    }
    if (headerDrawer) headerDrawer.setAttribute('aria-hidden', 'true');
    if (headerDrawerBackdrop) headerDrawerBackdrop.setAttribute('aria-hidden', 'true');
    setDrawerFocusable(false);
    syncHeaderMenuFabAria();
  }
  function openHeaderDrawer() {
    document.documentElement.classList.add('menu-drawer-open');
    document.body.classList.add('menu-drawer-open');
    if (siteHeader) siteHeader.classList.add('header--drawer-open');
    if (headerMenuToggle) {
      headerMenuToggle.setAttribute('aria-expanded', 'true');
      headerMenuToggle.setAttribute('aria-label', getMenuLabel(headerMenuToggle, 'close'));
    }
    if (headerDrawer) headerDrawer.setAttribute('aria-hidden', 'false');
    if (headerDrawerBackdrop) headerDrawerBackdrop.setAttribute('aria-hidden', 'false');
    setDrawerFocusable(true);
    syncHeaderMenuFabAria();
  }

  /** `fromMenuButton`: after opening, briefly ignore close via burger/FAB (iOS double-tap). */
  function toggleHeaderDrawer(fromMenuButton) {
    if (document.documentElement.classList.contains('menu-drawer-open')) {
      if (fromMenuButton && Date.now() < headerMenuIgnoreCloseUntil) return;
      closeHeaderDrawer();
    } else {
      openHeaderDrawer();
      headerMenuIgnoreCloseUntil = Date.now() + 280;
    }
  }
  if (headerMenuToggle && siteHeader) {
    headerMenuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      toggleHeaderDrawer(true);
    });
  }
  if (headerMenuFab) {
    headerMenuFab.addEventListener('click', function (e) {
      e.preventDefault();
      toggleHeaderDrawer(true);
    });
  }
  updateHeaderMenuFabVisibility();
  window.addEventListener('scroll', updateHeaderMenuFabVisibility, {
    passive: true
  });
  window.addEventListener('resize', updateHeaderMenuFabVisibility);
  if (headerDrawerBackdrop) {
    headerDrawerBackdrop.addEventListener('click', closeHeaderDrawer);
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.documentElement.classList.contains('menu-drawer-open')) {
      closeHeaderDrawer();
    }
  });
  if (headerDrawer) {
    headerDrawer.querySelectorAll('a.header__drawer-link').forEach(function (anchor) {
      anchor.addEventListener('click', function () {
        closeHeaderDrawer();
      });
    });
  }
});

/***/ }),

/***/ "./assets/images/deco.png":
/*!********************************!*\
  !*** ./assets/images/deco.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/deco.22b155df.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_selectize_dist_js_standalone_selectize_min_js","vendors-node_modules_aos_dist_aos_js-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_mod-faf8c8"], function() { return __webpack_exec__("./assets/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlSLG9CQUFvQixFQUFFO0lBQ3RCQSxvQkFBb0IsQ0FBQ2xZLGdCQUFnQixDQUFDLE9BQU8sRUFBRWlaLGlCQUFpQixDQUFDO0VBQ3JFO0VBRUF6YSxRQUFRLENBQUN3QixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVXlILENBQUMsRUFBRTtJQUM5QyxJQUFJQSxDQUFDLENBQUNzRyxHQUFHLEtBQUssUUFBUSxJQUFJdlAsUUFBUSxDQUFDc04sZUFBZSxDQUFDbk0sU0FBUyxDQUFDc0QsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7TUFDdkZnVyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZCO0VBQ0osQ0FBQyxDQUFDO0VBRUYsSUFBSWQsWUFBWSxFQUFFO0lBQ2RBLFlBQVksQ0FBQ3BXLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUNHLE9BQU8sQ0FBQyxVQUFVbVgsTUFBTSxFQUFFO01BQzdFQSxNQUFNLENBQUNyWixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtRQUN6Q2laLGlCQUFpQixDQUFDLENBQUM7TUFDdkIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9oYXZlLWFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW9zLXV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9uZXdzbGV0dGVyLW1vZGFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZXNlcnZhdGlvbi1oZXJvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5cbi8vIGFueSBKUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgSlMgZmlsZSAoYXBwLmpzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xuaW1wb3J0ICcuL21haW4nO1xuaW1wb3J0ICcuL2pzL3Jlc2VydmF0aW9uLWhlcm8nO1xuaW1wb3J0ICcuL2pzL25ld3NsZXR0ZXItbW9kYWwnO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IHsgaXNNb2JpbGVBb3NWaWV3cG9ydCwgc2NhbGVEb3duQW9zRGVsYXlzRm9yTW9iaWxlIH0gZnJvbSAnLi9qcy9hb3MtdXRpbHMnO1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG4vLyBBT1MgOiBzdHlsZXMgZGFucyBhc3NldHMvc3R5bGVzL2FwcC5zY3NzIChlbnRyw6llIGRlZmF1bHQpLCBwYXMgaWNpIOKAlCBzaW5vbiBhcHAuY3NzIG4nZXN0IHBhcyBsacOpIGRhbnMgYmFzZS5odG1sLnR3aWcuXG5pbXBvcnQgJy4vaW1hZ2VzL2RlY28ucG5nJztcblxuY29uc3QgcGFnZUxvYWRTdGFydCA9IERhdGUubm93KCk7XG5jb25zdCBtaW5pbXVtTG9hZGVyRHVyYXRpb24gPSAwO1xuXG4vLyBTY3JpcHRzIGFyZSBhdCBlbmQgb2YgPGJvZHk+IOKAlCBET00gaXMgZnVsbHkgcGFyc2VkIGhlcmUuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbmNvbnN0IG1haW5Mb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1sb2FkZXInKTtcbmxldCBsb2FkZXJIaWRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gcnVuQW9zSW5pdCgpIHtcbiAgICBzY2FsZURvd25Bb3NEZWxheXNGb3JNb2JpbGUoKTtcbiAgICBjb25zdCBtb2JpbGUgPSBpc01vYmlsZUFvc1ZpZXdwb3J0KCk7XG4gICAgY29uc3QgcmVkdWNlZE1vdGlvbiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXM7XG4gICAgQU9TLmluaXQoe1xuICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXG4gICAgICAgIC8vIE1vYmlsZSA6IGTDqWNsZW5jaGVtZW50IHBsdXMgdMO0dCAob2Zmc2V0IHBsdXMgYmFzKSwgYW5pbWF0aW9uIHBsdXMgY291cnRlLlxuICAgICAgICBkdXJhdGlvbjogcmVkdWNlZE1vdGlvbiA/IDAgOiAobW9iaWxlID8gNTAwIDogMTAwMCksXG4gICAgICAgIG9mZnNldDogbW9iaWxlID8gMjQgOiAxMjAsXG4gICAgICAgIHRocm90dGxlRGVsYXk6IG1vYmlsZSA/IDQwIDogOTksXG4gICAgICAgIGRpc2FibGU6IHJlZHVjZWRNb3Rpb24sXG4gICAgfSk7XG59XG5cbmNvbnN0IGhpZGVNYWluTG9hZGVyID0gKCkgPT4ge1xuICAgIGlmIChsb2FkZXJIaWRpbmcgfHwgd2luZG93Ll9fbG9hZGVySGlkaW5nKSByZXR1cm47XG4gICAgbG9hZGVySGlkaW5nID0gdHJ1ZTtcblxuICAgIGlmICghbWFpbkxvYWRlcikge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcbiAgICAgICAgcnVuQW9zSW5pdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWFpbkxvYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1oaWRpbmcnKTtcbiAgICBsZXQgaXNDbGVhbmVkVXAgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc0NsZWFuZWRVcCkgcmV0dXJuO1xuICAgICAgICBpc0NsZWFuZWRVcCA9IHRydWU7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xuICAgICAgICBtYWluTG9hZGVyLnJlbW92ZSgpO1xuICAgICAgICBydW5Bb3NJbml0KCk7XG4gICAgfTtcblxuICAgIG1haW5Mb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNsZWFudXAsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB3aW5kb3cuc2V0VGltZW91dChjbGVhbnVwLCAzMDApO1xufTtcblxuLy8gUmVnaXN0ZXIgQU9TIGNhbGxiYWNrIGZvciBpbmxpbmUgbG9hZGVyIHNjcmlwdCwgb3IgcnVuIGltbWVkaWF0ZWx5IGlmIGxvYWRlciBhbHJlYWR5IGdvbmUuXG53aW5kb3cuX19vbkxvYWRlckhpZGRlbiA9IHJ1bkFvc0luaXQ7XG5pZiAod2luZG93Ll9fbG9hZGVySGlkZGVuKSBydW5Bb3NJbml0KCk7XG5cbi8vIEZhbGxzIGJhY2sgdG8gd2luZG93LmxvYWQgKG5vbi1ob21lIHBhZ2VzKSBhbmQgMjUwMG1zIGNhcCAoc2xvdyBjb25uZWN0aW9ucykuXG5jb25zdCBzY2hlZHVsZUhpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBwYWdlTG9hZFN0YXJ0O1xuICAgIGNvbnN0IHJlbWFpbmluZyA9IE1hdGgubWF4KDAsIG1pbmltdW1Mb2FkZXJEdXJhdGlvbiAtIGVsYXBzZWQpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGhpZGVNYWluTG9hZGVyLCByZW1haW5pbmcpO1xufTtcblxuY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXNlY3Rpb25fX2JhY2tncm91bmQnKTtcbmlmIChoZXJvSW1nKSB7XG4gICAgaWYgKGhlcm9JbWcuY29tcGxldGUpIHtcbiAgICAgICAgc2NoZWR1bGVIaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGVyb0ltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc2NoZWR1bGVIaWRlLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIGhlcm9JbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzY2hlZHVsZUhpZGUsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG59XG5cbi8vIEFic29sdXRlIGNhcDogMjUwMG1zIGluIGNhc2UgaGVyb0ltZyBpcyBhYnNlbnQgb3IgbmV2ZXIgZmlyZXMuXG53aW5kb3cuc2V0VGltZW91dChoaWRlTWFpbkxvYWRlciwgMjUwMCk7XG5cbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIHNjaGVkdWxlSGlkZSgpO1xuXG4gICAgJChcIi5jb3B5LXRvLWNsaXBib2FyZFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGV4dFRvQ29weSA9ICQodGhpcykuYXR0cignZGF0YS1saW5rJyk7XG4gICAgICAgIGNvbnN0IHRlbXBUZXh0YXJlYSA9ICQoJzx0ZXh0YXJlYT4nKTtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCh0ZW1wVGV4dGFyZWEpO1xuICAgICAgICB0ZW1wVGV4dGFyZWEudmFsKHRleHRUb0NvcHkpLnNlbGVjdCgpO1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICB0ZW1wVGV4dGFyZWEucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNlcnZhdGlvbk1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1tb2R1bGUnKTtcbiAgICBpZiAoIXJlc2VydmF0aW9uTW9kdWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBib29rRmFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stZmFiJyk7XG4gICAgY29uc3QgbW9kdWxlSGVpZ2h0ID0gMTQ1O1xuICAgIGxldCBpbml0aWFsVG9wID0gd2luZG93LmlubmVySGVpZ2h0IC0gbW9kdWxlSGVpZ2h0O1xuXG4gICAgY29uc3QgdXBkYXRlUmVzZXJ2YXRpb25TdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaXNQYXN0ID0gd2luZG93LnNjcm9sbFkgPj0gaW5pdGlhbFRvcDtcbiAgICAgICAgcmVzZXJ2YXRpb25Nb2R1bGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc3RpY2t5JywgaXNQYXN0KTtcbiAgICAgICAgaWYgKGJvb2tGYWIpIGJvb2tGYWIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdmlzaWJsZScsIGlzUGFzdCk7XG4gICAgfTtcblxuICAgIHVwZGF0ZVJlc2VydmF0aW9uU3RhdGUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlUmVzZXJ2YXRpb25TdGF0ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIGluaXRpYWxUb3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBtb2R1bGVIZWlnaHQ7XG4gICAgICAgIHVwZGF0ZVJlc2VydmF0aW9uU3RhdGUoKTtcbiAgICB9KTtcbn0pO1xuIiwiLyoqXG4gKiBBam91dGUgbGEgY2xhc3NlIGlzLWFuaW1hdGVkIGF1eCDDqWzDqW1lbnRzIC5oYXZlLWFuaW1hdGlvbiBsb3JzcXUnaWxzIGVudHJlbnQgZGFucyBsYSB6b25lIHZpc2libGUuXG4gKiBMYSBjbGFzc2Ugbidlc3QgamFtYWlzIHJldGlyw6llIHVuZSBmb2lzIGFqb3V0w6llLlxuICpcbiAqIE9mZnNldCAobWFyZ2UgaW50w6lyaWV1cmUgZHUgYmFzIGR1IHZpZXdwb3J0LCBlbiBweCkgOlxuICogLSBhdHRyaWJ1dCBkYXRhLWFuaW1hdGlvbi1vZmZzZXQgc3VyIGwnw6lsw6ltZW50XG4gKiAtIHNpbm9uIHZhcmlhYmxlIENTUyBow6lyaXTDqWUgLS1oYXZlLWFuaW1hdGlvbi1vZmZzZXQgKGV4LiBzdXIgYm9keS5ob21lcGFnZSlcbiAqIC0gc2lub24gMFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhhdmVBbmltYXRpb24oKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGF2ZS1hbmltYXRpb24nKTtcbiAgICBpZiAoIW5vZGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2lzLWFuaW1hdGVkJykpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VPZmZzZXRQeCA9IChlbCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhQXR0ciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24tb2Zmc2V0Jyk7XG4gICAgICAgIGlmIChkYXRhQXR0ciAhPT0gbnVsbCAmJiBkYXRhQXR0ciAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KGRhdGFBdHRyLCAxMCk7XG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHBhcnNlZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgcGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXcgPSBnZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhhdmUtYW5pbWF0aW9uLW9mZnNldCcpLnRyaW0oKTtcbiAgICAgICAgY29uc3QgbiA9IHBhcnNlRmxvYXQocmF3KTtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IE1hdGgubWF4KDAsIG4pIDogMDtcbiAgICB9O1xuXG4gICAgbm9kZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYW5pbWF0ZWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0UHggPSBwYXJzZU9mZnNldFB4KGVsKTtcbiAgICAgICAgY29uc3Qgcm9vdE1hcmdpbiA9IGAwcHggMHB4IC0ke29mZnNldFB4fXB4IDBweGA7XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAgICAgICAoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgfSk7XG59XG4iLCJjb25zdCBNT0JJTEVfQU9TX01BWF9XSURUSCA9IDk5MTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlQW9zVmlld3BvcnQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke01PQklMRV9BT1NfTUFYX1dJRFRIfXB4KWApLm1hdGNoZXM7XG59XG5cbi8qKlxuICogU3VyIG1vYmlsZSwgbGVzIGRhdGEtYW9zLWRlbGF5ICgyMDDigJM2MDAgbXMpIGFsbG9uZ2VudCB0cm9wIGxhIHPDqXF1ZW5jZSBkJ2FwcGFyaXRpb24uXG4gKiBPbiBsZXMgcsOpZHVpdCBhdmFudCBBT1MuaW5pdCBwb3VyIGdhcmRlciB1biBsw6lnZXIgZMOpY2FsYWdlIHNhbnMgZW1waWxlciBsZXMgYXR0ZW50ZXMuXG4gKiBBcHBlbMOpIHVuZSBzZXVsZSBmb2lzLCBhdmFudCBBT1MuaW5pdCwgYXByw6hzIHF1ZSBsZSBET00gZXN0IGNvbXBsZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZURvd25Bb3NEZWxheXNGb3JNb2JpbGUoKSB7XG4gICAgaWYgKCFpc01vYmlsZUFvc1ZpZXdwb3J0KCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hb3MtZGVsYXldJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgY29uc3QgcmF3ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kZWxheScpO1xuICAgICAgICBpZiAocmF3ID09PSBudWxsIHx8IHJhdyA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ID0gcGFyc2VJbnQocmF3LCAxMCk7XG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHYpIHx8IHYgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNjYWxlZCA9IE1hdGgubWluKDkwLCBNYXRoLnJvdW5kKHYgKiAwLjIyKSk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZGVsYXknLCBTdHJpbmcoTWF0aC5tYXgoMCwgc2NhbGVkKSkpO1xuICAgIH0pO1xufVxuIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgnc2VsZWN0aXplL2Rpc3QvanMvc3RhbmRhbG9uZS9zZWxlY3RpemUubWluLmpzJyk7XG4vLyBTdHlsZXMgU2VsZWN0aXplIDogaW1wb3J0w6lzIGRhbnMgYXBwLnNjc3MgKGVudHLDqWUgwqsgZGVmYXVsdCDCuyksIHNpbm9uIGlscyBuZSBzb250IHBhcyBjaGFyZ8OpcyAoc2V1bCBkZWZhdWx0IGzigJllc3QgZGFucyBiYXNlLmh0bWwudHdpZykuXG5cbmNvbnN0IGNvdW50cmllcyA9IHJlcXVpcmUoJ2kxOG4taXNvLWNvdW50cmllcycpO1xuY29uc3QgZW5Mb2NhbGUgPSByZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZW4uanNvbicpO1xuY29uc3QgZnJMb2NhbGUgPSByZXF1aXJlKCdpMThuLWlzby1jb3VudHJpZXMvbGFuZ3MvZnIuanNvbicpO1xuXG5jb3VudHJpZXMucmVnaXN0ZXJMb2NhbGUoZW5Mb2NhbGUpO1xuY291bnRyaWVzLnJlZ2lzdGVyTG9jYWxlKGZyTG9jYWxlKTtcblxuY29uc3QgU0VMRUNUT1JTID0ge1xuICAgIG1vZGFsOiAnW2RhdGEtbmV3c2xldHRlci1tb2RhbF0nLFxuICAgIHRyaWdnZXI6ICdbZGF0YS1uZXdzbGV0dGVyLXRyaWdnZXJdJyxcbiAgICBjbG9zZTogJ1tkYXRhLW5ld3NsZXR0ZXItY2xvc2VdJyxcbiAgICBmb3JtOiAnW2RhdGEtbmV3c2xldHRlci1mb3JtXScsXG4gICAgZmVlZGJhY2s6ICdbZGF0YS1uZXdzbGV0dGVyLWZlZWRiYWNrXScsXG4gICAgY2FwdGNoYTogJ1tkYXRhLW5ld3NsZXR0ZXItY2FwdGNoYV0nLFxuICAgIGNvdW50cnlTZWxlY3Q6ICdbZGF0YS1uZXdzbGV0dGVyLWNvdW50cnldJyxcbn07XG5cbmNvbnN0IE9QRU5fQ0xBU1MgPSAnaXMtb3Blbic7XG5jb25zdCBCT0RZX09QRU5fQ0xBU1MgPSAnaGFzLW5ld3NsZXR0ZXItb3Blbic7XG5jb25zdCBTVUNDRVNTX0ZPUk1fQ0xBU1MgPSAnaXMtc3VjY2Vzcy1zdGF0ZSc7XG5cbi8qKlxuICogTGlzdGUgdW5pcXVlIGRlIHRvdXMgbGVzIHBheXMgLyB0ZXJyaXRvaXJlcyBJU08sIHRyaSBhbHBoYWLDqXRpcXVlIHNlbG9uIGxhIGxhbmd1ZSBk4oCZYWZmaWNoYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTG9jYWxlXG4gKiBAcmV0dXJucyB7eyBvcHRpb25zOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIGNvZGVzOiBTZXQ8c3RyaW5nPiwgZmxhdEZvck5hdGl2ZTogQXJyYXk8eyB2YWx1ZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfT4gfX1cbiAqL1xuZnVuY3Rpb24gYnVpbGRDb3VudHJ5U2VsZWN0RGF0YShwYWdlTG9jYWxlKSB7XG4gICAgY29uc3QgbGFuZyA9IHBhZ2VMb2NhbGUgPT09ICdlbicgPyAnZW4nIDogJ2ZyJztcbiAgICBjb25zdCBvZmZpY2lhbCA9IGNvdW50cmllcy5nZXROYW1lcyhsYW5nLCB7IHNlbGVjdDogJ29mZmljaWFsJyB9KTtcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmtleXMob2ZmaWNpYWwpLm1hcCgoY29kZSkgPT4gKHtcbiAgICAgICAgdmFsdWU6IGNvZGUsXG4gICAgICAgIHRleHQ6IG9mZmljaWFsW2NvZGVdLFxuICAgIH0pKTtcblxuICAgIG9wdHMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgYS50ZXh0LmxvY2FsZUNvbXBhcmUoYi50ZXh0LCBsYW5nLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSksXG4gICAgKTtcbiAgICBvcHRzLmZvckVhY2goKG8sIGkpID0+IHtcbiAgICAgICAgby4kb3JkZXIgPSBpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29kZXMgPSBuZXcgU2V0KG9wdHMubWFwKChvKSA9PiBvLnZhbHVlKSk7XG4gICAgY29uc3QgZmxhdEZvck5hdGl2ZSA9IG9wdHMubWFwKCh7IHZhbHVlLCB0ZXh0IH0pID0+ICh7IHZhbHVlLCB0ZXh0IH0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IG9wdHMsXG4gICAgICAgIGNvZGVzLFxuICAgICAgICBmbGF0Rm9yTmF0aXZlLFxuICAgIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cbiAqIEBwYXJhbSB7U2V0PHN0cmluZz59IGNvZGVzXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVJbml0aWFsQ291bnRyeUNvZGUoZm9ybSwgY29kZXMpIHtcbiAgICAvLyAxKSBTdWdnZXN0aW9uIFN5bWZvbnkgKENGLUlQQ291bnRyeSwgZMOpZmF1dCBQRiwg4oCmKSDigJQgcHJpb3JpdGFpcmUgOiBzaW5vbiB1bmUgbG9jYWxlIG5hdmlnYXRldXIgwqsgZW4tVVMgwrtcbiAgICAvLyAgICBmYWlzYWl0IGNob2lzaXIgVVMgYXZhbnQgbcOqbWUgZGUgbGlyZSBkYXRhLXN1Z2dlc3RlZC1jb3VudHJ5ICg9IFBGIGhvcnMgQ0ROKS5cbiAgICBjb25zdCBzZXJ2ZXIgPSAoZm9ybS5kYXRhc2V0LnN1Z2dlc3RlZENvdW50cnkgfHwgJycpLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChzZXJ2ZXIgJiYgY29kZXMuaGFzKHNlcnZlcikpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZlcjtcbiAgICB9XG5cbiAgICAvLyAyKSBTZWNvdXJzIDogcsOpZ2lvbiBuYXZpZ2F0ZXVyIChlbi1VUyDihpIgVVMsIOKApiksIHNhdWYgZnItRlIgKMKrIEZyYW5jZSDCuyBuZSBkb2l0IHBhcyBwYXNzZXIgYXZhbnQgbGUgZMOpZmF1dCBtw6l0aWVyIHNhbnMgc2VydmV1cilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBsaXN0ID1cbiAgICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzIHx8IFtuYXZpZ2F0b3IubGFuZ3VhZ2VdXG4gICAgICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgZm9yIChjb25zdCByYXcgb2YgbGlzdCkge1xuICAgICAgICAgICAgY29uc3QgbSA9IC9eW2Etel17Mn0tKFtBLVpdezJ9KSQvLmV4ZWMoU3RyaW5nKHJhdykucmVwbGFjZSgnXycsICctJykpO1xuICAgICAgICAgICAgaWYgKCFtIHx8ICFjb2Rlcy5oYXMobVsxXSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtWzFdID09PSAnRlInKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtWzFdO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmVcbiAgICB9XG5cbiAgICAvLyAzKSBQb2x5bsOpc2llIGZyYW7Dp2Fpc2UgcGFyIGTDqWZhdXRcbiAgICBpZiAoY29kZXMuaGFzKCdQRicpKSB7XG4gICAgICAgIHJldHVybiAnUEYnO1xuICAgIH1cbiAgICBpZiAoY29kZXMuaGFzKCdGUicpKSB7XG4gICAgICAgIHJldHVybiAnRlInO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKGNvZGVzKVswXSA/PyAnUEYnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTFNlbGVjdEVsZW1lbnR9IHNlbGVjdEVsXG4gKiBAcGFyYW0ge0FycmF5PHsgdmFsdWU6IHN0cmluZywgdGV4dDogc3RyaW5nIH0+fSBmbGF0T3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGluaXRpYWxcbiAqL1xuZnVuY3Rpb24gcG9wdWxhdGVOYXRpdmVDb3VudHJ5U2VsZWN0KHNlbGVjdEVsLCBmbGF0T3B0aW9ucywgaW5pdGlhbCkge1xuICAgIHNlbGVjdEVsLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAoY29uc3QgbyBvZiBmbGF0T3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LnZhbHVlID0gby52YWx1ZTtcbiAgICAgICAgb3B0LnRleHRDb250ZW50ID0gby50ZXh0O1xuICAgICAgICBpZiAoby52YWx1ZSA9PT0gaW5pdGlhbCkge1xuICAgICAgICAgICAgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RFbC5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICovXG5mdW5jdGlvbiBpbml0Q291bnRyeVNlbGVjdGl6ZShmb3JtKSB7XG4gICAgY29uc3Qgc2VsZWN0RWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmNvdW50cnlTZWxlY3QpO1xuICAgIGlmICghc2VsZWN0RWwgfHwgIShzZWxlY3RFbCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZUxvY2FsZSA9IGZvcm0uZGF0YXNldC5wYWdlTG9jYWxlIHx8ICdmcic7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBmb3JtLmRhdGFzZXQuY291bnRyeVBsYWNlaG9sZGVyIHx8ICcnO1xuXG4gICAgbGV0IGJ1aWx0O1xuICAgIHRyeSB7XG4gICAgICAgIGJ1aWx0ID0gYnVpbGRDb3VudHJ5U2VsZWN0RGF0YShwYWdlTG9jYWxlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBMaXN0ZSBwYXlzIChpMThuLWlzby1jb3VudHJpZXMpJywgZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IG9wdGlvbnMsIGNvZGVzLCBmbGF0Rm9yTmF0aXZlIH0gPSBidWlsdDtcbiAgICBjb25zdCBpbml0aWFsID0gcmVzb2x2ZUluaXRpYWxDb3VudHJ5Q29kZShmb3JtLCBjb2Rlcyk7XG5cbiAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnIHx8ICEkLmZuLnNlbGVjdGl6ZSkge1xuICAgICAgICBwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3Qoc2VsZWN0RWwsIGZsYXRGb3JOYXRpdmUsIGluaXRpYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgJHNlbGVjdCA9ICQoc2VsZWN0RWwpO1xuICAgIGlmICgkc2VsZWN0WzBdLnNlbGVjdGl6ZSkge1xuICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGl6ZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgJHNlbGVjdC5zZWxlY3RpemUoe1xuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIGl0ZW1zOiBbaW5pdGlhbF0sXG4gICAgICAgICAgICB2YWx1ZUZpZWxkOiAndmFsdWUnLFxuICAgICAgICAgICAgbGFiZWxGaWVsZDogJ3RleHQnLFxuICAgICAgICAgICAgc2VhcmNoRmllbGQ6IFsndGV4dCddLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBtYXhJdGVtczogMSxcbiAgICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd0VtcHR5T3B0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIHNvcnRGaWVsZDogW3sgZmllbGQ6ICckb3JkZXInLCBkaXJlY3Rpb246ICdhc2MnIH1dLFxuICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICdib2R5JyxcbiAgICAgICAgICAgIGNvcHlDbGFzc2VzVG9Ecm9wZG93bjogZmFsc2UsXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICdzZWxlY3RpemUtY29udHJvbCBuZXdzbGV0dGVyLWNvdW50cnktc2VsZWN0aXplJyxcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3M6ICdzZWxlY3RpemUtZHJvcGRvd24gbmV3c2xldHRlci1jb3VudHJ5LWRyb3Bkb3duJyxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tuZXdzbGV0dGVyXSBTZWxlY3RpemUnLCBlcnIpO1xuICAgICAgICBwb3B1bGF0ZU5hdGl2ZUNvdW50cnlTZWxlY3Qoc2VsZWN0RWwsIGZsYXRGb3JOYXRpdmUsIGluaXRpYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdCA9ICRzZWxlY3RbMF0uc2VsZWN0aXplO1xuICAgIGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplID0gaW5zdDtcblxuICAgIC8vIFByZXZlbnQgU2VsZWN0aXplJ3MgaW50ZXJuYWwgcGFzdGUgaGFuZGxlciBmcm9tIGNhbGxpbmcgcHJldmVudERlZmF1bHQgKExpZ2h0aG91c2UgQlAgYXVkaXQpLlxuICAgIGNvbnN0IGlucCA9IGluc3QgJiYgaW5zdC4kY29udHJvbF9pbnB1dCAmJiBpbnN0LiRjb250cm9sX2lucHV0WzBdO1xuICAgIGlmIChpbnApIHtcbiAgICAgICAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBpZiAoaW5wLnZhbHVlKSBpbnN0LnNlYXJjaChpbnAudmFsdWUpOyB9LCAxKTtcbiAgICAgICAgfSwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICovXG5mdW5jdGlvbiByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKSB7XG4gICAgaWYgKGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3JtLl9uZXdzbGV0dGVyQ291bnRyeVNlbGVjdGl6ZS5kZXN0cm95KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICB9XG4gICAgICAgIGZvcm0uX25ld3NsZXR0ZXJDb3VudHJ5U2VsZWN0aXplID0gbnVsbDtcbiAgICB9XG4gICAgaW5pdENvdW50cnlTZWxlY3RpemUoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcbiAgICBtb2RhbC5oaWRkZW4gPSBmYWxzZTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKE9QRU5fQ0xBU1MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQk9EWV9PUEVOX0NMQVNTKTtcblxuICAgIGNvbnN0IG1haW4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXdzbGV0dGVyLW1haW5dJyk7XG4gICAgY29uc3QgZmlyc3RGaWVsZCA9IG1haW4gJiYgbWFpbi5xdWVyeVNlbGVjdG9yKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJyk7XG4gICAgaWYgKGZpcnN0RmllbGQpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBmaXJzdEZpZWxkLmZvY3VzKCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKE9QRU5fQ0xBU1MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIG1vZGFsLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKEJPRFlfT1BFTl9DTEFTUyk7XG5cbiAgICBjb25zdCBmZWVkYmFjayA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmZlZWRiYWNrKTtcbiAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZSgnaXMtc3VjY2VzcycsICdpcy1lcnJvcicpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5mb3JtKTtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoU1VDQ0VTU19GT1JNX0NMQVNTKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCwgbW9kYWwpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGZlZWRiYWNrID0gbW9kYWwucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMuZmVlZGJhY2spO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCBlbWFpbCA9IChmb3JtRGF0YS5nZXQoJ2VtYWlsJykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IChmb3JtRGF0YS5nZXQoJ2ZpcnN0TmFtZScpIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcbiAgICBjb25zdCBsYXN0TmFtZSA9IChmb3JtRGF0YS5nZXQoJ2xhc3ROYW1lJykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGNvdW50cnkgPSAoZm9ybURhdGEuZ2V0KCdjb3VudHJ5JykgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIGNvbnN0IGxvY2FsZSA9IChmb3JtLmRhdGFzZXQucGFnZUxvY2FsZSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdsYW5nJykgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQubG9jYWxlIHx8ICcnKS50cmltKCk7XG4gICAgY29uc3QgZ2VuZXJpY0Vycm9yTWVzc2FnZSA9IGZvcm0uZGF0YXNldC5nZW5lcmljRXJyb3IgfHwgJ1VuZSBlcnJldXIgc1xcJ2VzdCBwcm9kdWl0ZSwgdmV1aWxsZXogcsOpZXNzYXllciBwbHVzIHRhcmQuJztcbiAgICBjb25zdCBpbmNvbXBsZXRlTWVzc2FnZSA9IGZvcm0uZGF0YXNldC5pbmNvbXBsZXRlRXJyb3IgfHwgJ1ZldWlsbGV6IHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzIGNvcnJlY3RlbWVudC4nO1xuICAgIGNvbnN0IHJlY2FwdGNoYUVuYWJsZWQgPSBmb3JtLmRhdGFzZXQucmVjYXB0Y2hhRW5hYmxlZCA9PT0gJzEnO1xuICAgIGNvbnN0IHJlY2FwdGNoYVNpdGVLZXkgPSBmb3JtLmRhdGFzZXQucmVjYXB0Y2hhU2l0ZUtleSB8fCAnJztcbiAgICBjb25zdCBjYXB0Y2hhSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLmNhcHRjaGEpO1xuXG4gICAgaWYgKGZlZWRiYWNrKSB7XG4gICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1Y2Nlc3MnLCAnaXMtZXJyb3InKTtcbiAgICB9XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFNVQ0NFU1NfRk9STV9DTEFTUyk7XG5cbiAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbCB8fCAhZmlyc3ROYW1lIHx8ICFsYXN0TmFtZSB8fCAhY291bnRyeSkge1xuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gaW5jb21wbGV0ZU1lc3NhZ2U7XG4gICAgICAgICAgICBmZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpcy1lcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY2FwdGNoYVRva2VuID0gJyc7XG4gICAgaWYgKHJlY2FwdGNoYUVuYWJsZWQpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuZ3JlY2FwdGNoYSB8fCB0eXBlb2Ygd2luZG93LmdyZWNhcHRjaGEuZXhlY3V0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCByZWNhcHRjaGFTaXRlS2V5ID09PSAnJykge1xuICAgICAgICAgICAgaWYgKGZlZWRiYWNrKSB7XG4gICAgICAgICAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VibWl0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYXB0Y2hhVG9rZW4gPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuZ3JlY2FwdGNoYS5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmdyZWNhcHRjaGEuZXhlY3V0ZShyZWNhcHRjaGFTaXRlS2V5LCB7IGFjdGlvbjogJ25ld3NsZXR0ZXJfc3Vic2NyaWJlJyB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY2FwdGNoYUlucHV0KSB7XG4gICAgICAgIGNhcHRjaGFJbnB1dC52YWx1ZSA9IGNhcHRjaGFUb2tlbjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZvcm0uYWN0aW9uLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5LFxuICAgICAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgICAgICBjYXB0Y2hhOiBjYXB0Y2hhVG9rZW4sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHBheWxvYWQgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBheWxvYWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gY2F0Y2ggKGpzb25FcnJvcikge1xuICAgICAgICAgICAgcGF5bG9hZCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vayB8fCBwYXlsb2FkLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgICAgICBmZWVkYmFjay50ZXh0Q29udGVudCA9IHBheWxvYWQubWVzc2FnZSB8fCBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLWVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVlZGJhY2spIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gcGF5bG9hZC5tZXNzYWdlIHx8ICdUaGFua3Mg4oCUIHlvdSBhcmUgb24gdGhlIGxpc3QuJztcbiAgICAgICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2lzLXN1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoU1VDQ0VTU19GT1JNX0NMQVNTKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZWZyZXNoQ291bnRyeUZpZWxkQWZ0ZXJSZXNldChmb3JtKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbbmV3c2xldHRlcl0gRXJyZXVyIHLDqXNlYXUgb3UgaW5hdHRlbmR1ZSBsb3JzIGRlIGxhIHNvdW1pc3Npb24nLCBlcnJvcik7XG4gICAgICAgIGlmIChmZWVkYmFjaykge1xuICAgICAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSBnZW5lcmljRXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgZmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnaXMtZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMubW9kYWwpO1xuICAgIGlmICghbW9kYWwpIHJldHVybjtcblxuICAgIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy5mb3JtKTtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW5pdENvdW50cnlTZWxlY3RpemUoZm9ybSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW25ld3NsZXR0ZXJdIEluaXRpYWxpc2F0aW9uIGR1IHPDqWxlY3RldXIgcGF5cyBpbXBvc3NpYmxlIChkw6lwZW5kYW5jZXMgbWFucXVhbnRlcyA/IHlhcm4gaW5zdGFsbCknLCBlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiBoYW5kbGVTdWJtaXQoZXZlbnQsIG1vZGFsKSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SUy50cmlnZ2VyKTtcbiAgICAgICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvcGVuTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SUy5jbG9zZSkgJiYgbW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmIG1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhPUEVOX0NMQVNTKSkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcbn0gZWxzZSB7XG4gICAgaW5pdCgpO1xufVxuIiwiaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InO1xuaW1wb3J0IHsgRnJlbmNoIH0gZnJvbSAnZmxhdHBpY2tyL2Rpc3QvbDEwbi9mci5qcyc7XG5pbXBvcnQgZW5nbGlzaCBmcm9tICdmbGF0cGlja3IvZGlzdC9sMTBuL2RlZmF1bHQuanMnO1xuXG4vKipcbiAqIEZsYXRwaWNrciBwYXJjb3VydCBkb2N1bWVudC5zdHlsZVNoZWV0cyBldCBsaXQgc2hlZXQuY3NzUnVsZXMgOyBzdXIgdW5lIGZldWlsbGUgY3Jvc3Mtb3JpZ2luXG4gKiAoZXguIEdvb2dsZSBGb250cyksIGzigJlhY2PDqHMgbMOodmUgU2VjdXJpdHlFcnJvciBhdmFudCBtw6ptZSBsZSB0cnkvY2F0Y2ggaW50ZXJuZS5cbiAqIFVuZSBmZXVpbGxlIDxzdHlsZT4gbG9jYWxlIGVuIHTDqnRlIGR1IDxoZWFkPiBnYXJhbnRpdCBxdWUgbGEgcHJlbWnDqHJlIGZldWlsbGUgZXN0IGxpc2libGUuXG4gKi9cbmZ1bmN0aW9uIHByZXBlbmRMb2NhbFN0eWxlc2hlZXRIb29rKCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxhdHBpY2tyLWxvY2FsLXN0eWxlc2hlZXQtaG9vaycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGVsLmlkID0gJ2ZsYXRwaWNrci1sb2NhbC1zdHlsZXNoZWV0LWhvb2snO1xuICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcvKiBmbGF0cGlja3I6IGZldWlsbGUgbG9jYWxlIHBvdXIgYWNjw6hzIGNzc1J1bGVzICovJykpO1xuICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGVsLCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgbXMpIHtcbiAgICBsZXQgdDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICB9LCBtcyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJbnRTdHJpY3QodiwgZmFsbGJhY2spIHtcbiAgICBjb25zdCBuID0gcGFyc2VJbnQoU3RyaW5nKHYpLCAxMCk7XG4gICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBmYWxsYmFjaztcbn1cblxuLyoqIExvY2FsZSBJU08gMiBsZXR0cmVzIGRlcHVpcyBsZSBIVE1MIChTeW1mb255IDogbGFuZyArIGRhdGEtbG9jYWxlIHN1ciA8aHRtbD4gb3UgPGJvZHk+KS4gKi9cbmZ1bmN0aW9uIGdldFNpdGVMb2NhbGUoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgcmF3ID1cbiAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxvY2FsZScpIHx8XG4gICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnbGFuZycpIHx8XG4gICAgICAgIChkb2N1bWVudC5ib2R5ICYmIGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLWxvY2FsZScpKSB8fFxuICAgICAgICAnZnInO1xuICAgIHJldHVybiBTdHJpbmcocmF3KS50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJylbMF07XG59XG5cbmZ1bmN0aW9uIGdldEZsYXRwaWNrckxvY2FsZSgpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRTaXRlTG9jYWxlKCk7XG4gICAgaWYgKGxvYyA9PT0gJ2ZyJykge1xuICAgICAgICByZXR1cm4gRnJlbmNoO1xuICAgIH1cbiAgICByZXR1cm4gZW5nbGlzaDtcbn1cblxuLyoqIEB0eXBlZGVmIHt7IGFkdWx0c19vbmU6IHN0cmluZywgYWR1bHRzOiBzdHJpbmcsIGtpZF9vbmU6IHN0cmluZywga2lkczogc3RyaW5nLCBzZXA6IHN0cmluZyB9fSBHdWVzdHNTdW1tYXJ5STE4biAqL1xuXG4vKiogUmVtcGxhY2UgbGUgbWFycXVldXIgX19DT1VOVF9fIChpc3N1IGRlcyBmaWNoaWVycyBkZSB0cmFkdWN0aW9uIFN5bWZvbnkpLiAqL1xuZnVuY3Rpb24gYXBwbHlDb3VudFRlbXBsYXRlKHRlbXBsYXRlLCBjb3VudCkge1xuICAgIHJldHVybiBTdHJpbmcodGVtcGxhdGUpLnNwbGl0KCdfX0NPVU5UX18nKS5qb2luKFN0cmluZyhjb3VudCkpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBhZHVsdHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBraWRzXG4gKiBAcGFyYW0ge0d1ZXN0c1N1bW1hcnlJMThuIHwgbnVsbH0gaTE4blxuICovXG5mdW5jdGlvbiBmb3JtYXRHdWVzdFN1bW1hcnkoYWR1bHRzLCBraWRzLCBpMThuKSB7XG4gICAgY29uc3QgdCA9XG4gICAgICAgIGkxOG4gfHxcbiAgICAgICAgLyoqIEB0eXBlIHtHdWVzdHNTdW1tYXJ5STE4bn0gKi8gKHtcbiAgICAgICAgICAgIGFkdWx0c19vbmU6ICcxIGFkdWx0JyxcbiAgICAgICAgICAgIGFkdWx0czogJ19fQ09VTlRfXyBhZHVsdHMnLFxuICAgICAgICAgICAga2lkX29uZTogJzEga2lkJyxcbiAgICAgICAgICAgIGtpZHM6ICdfX0NPVU5UX18ga2lkcycsXG4gICAgICAgICAgICBzZXA6ICcgwrcgJyxcbiAgICAgICAgfSk7XG4gICAgY29uc3QgYUxhYmVsID0gYWR1bHRzID09PSAxID8gdC5hZHVsdHNfb25lIDogYXBwbHlDb3VudFRlbXBsYXRlKHQuYWR1bHRzLCBhZHVsdHMpO1xuICAgIGlmIChraWRzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBhTGFiZWw7XG4gICAgfVxuICAgIGNvbnN0IGtMYWJlbCA9IGtpZHMgPT09IDEgPyB0LmtpZF9vbmUgOiBhcHBseUNvdW50VGVtcGxhdGUodC5raWRzLCBraWRzKTtcbiAgICByZXR1cm4gYUxhYmVsICsgdC5zZXAgKyBrTGFiZWw7XG59XG5cbmZ1bmN0aW9uIGluaXRSZXNlcnZhdGlvbkhlcm8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZXJvLXJlc2VydmF0aW9uLWZvcm0nKTtcbiAgICBjb25zdCBkYXRlc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVzZXJ2YXRpb24tZGF0ZXNdJyk7XG4gICAgY29uc3QgY2FsZW5kYXJNb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jYWxlbmRhci1tb3VudCcpO1xuICAgIGNvbnN0IGFuY2hvckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWZsYXRwaWNrci1hbmNob3InKTtcbiAgICBjb25zdCBjaGVja2luSGlkZGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWNoZWNraW4nKTtcbiAgICBjb25zdCBjaGVja291dEhpZGRlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jaGVja291dCcpO1xuICAgIGNvbnN0IGNoZWNraW5EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWNoZWNraW4tZGlzcGxheScpO1xuICAgIGNvbnN0IGNoZWNrb3V0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1jaGVja291dC1kaXNwbGF5Jyk7XG5cbiAgICBjb25zdCBndWVzdHNNb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1ndWVzdHMtcG9wb3Zlci1tb3VudCcpO1xuICAgIGNvbnN0IGd1ZXN0c1RyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tbW9kdWxlX19pdGVtW2RhdGEtcmVzZXJ2YXRpb24tZmllbGQ9XCJndWVzdHNcIl0nKTtcbiAgICBjb25zdCBndWVzdHNTdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWd1ZXN0cy1zdW1tYXJ5Jyk7XG4gICAgY29uc3QgYWR1bHRzSGlkZGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uLWFkdWx0cycpO1xuICAgIGNvbnN0IGtpZHNIaWRkZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24ta2lkcycpO1xuICAgIGNvbnN0IGd1ZXN0c0RvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24tZ3Vlc3RzLWRvbmUnKTtcblxuICAgIGlmICghZm9ybSB8fCAhZGF0ZXNCbG9jayB8fCAhY2FsZW5kYXJNb3VudCB8fCAhYW5jaG9yRWwgfHwgIWNoZWNraW5IaWRkZW4gfHwgIWNoZWNrb3V0SGlkZGVuIHx8ICFjaGVja2luRGlzcGxheSB8fCAhY2hlY2tvdXREaXNwbGF5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge0d1ZXN0c1N1bW1hcnlJMThuIHwgbnVsbH0gKi9cbiAgICBsZXQgZ3Vlc3RzU3VtbWFyeUkxOG4gPSBudWxsO1xuICAgIGNvbnN0IGkxOG5SYXcgPSBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1ndWVzdHMtc3VtbWFyeS1pMThuJyk7XG4gICAgaWYgKGkxOG5SYXcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGd1ZXN0c1N1bW1hcnlJMThuID0gSlNPTi5wYXJzZShpMThuUmF3KTtcbiAgICAgICAgfSBjYXRjaCAoX2UpIHtcbiAgICAgICAgICAgIGd1ZXN0c1N1bW1hcnlJMThuID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXBlbmRMb2NhbFN0eWxlc2hlZXRIb29rKCk7XG5cbiAgICBsZXQgZnAgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gbG9ja1llYXJJbnB1dHMoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSB8fCAhaW5zdGFuY2UuY2FsZW5kYXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZS5jYWxlbmRhckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5jdXIteWVhcicpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBlbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcmVhZG9ubHknLCAndHJ1ZScpO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxlbmRhckhvb2sgPSBmdW5jdGlvbiAoX3NlbGVjdGVkRGF0ZXMsIF9kYXRlU3RyLCBpbnN0YW5jZSkge1xuICAgICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuY2FsZW5kYXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9uLWZsYXRwaWNrci1jYWxlbmRhcicpO1xuICAgICAgICB9XG4gICAgICAgIGxvY2tZZWFySW5wdXRzKGluc3RhbmNlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2hvd01vbnRoc0NvdW50KCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA2NDAgPyAxIDogMjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzeW5jRnJvbVNlbGVjdGlvbihzZWxlY3RlZERhdGVzLCBpbnN0YW5jZSkge1xuICAgICAgICBjb25zdCBmbXRZbWQgPSAnWS1tLWQnO1xuICAgICAgICBjb25zdCBmbXRVaSA9ICdqIE0gWSc7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIGNoZWNraW5IaWRkZW4udmFsdWUgPSBpbnN0YW5jZS5mb3JtYXREYXRlKHNlbGVjdGVkRGF0ZXNbMF0sIGZtdFltZCk7XG4gICAgICAgICAgICBjaGVja2luRGlzcGxheS52YWx1ZSA9IGluc3RhbmNlLmZvcm1hdERhdGUoc2VsZWN0ZWREYXRlc1swXSwgZm10VWkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tpbkhpZGRlbi52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgY2hlY2tpbkRpc3BsYXkudmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RlZERhdGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICBjaGVja291dEhpZGRlbi52YWx1ZSA9IGluc3RhbmNlLmZvcm1hdERhdGUoc2VsZWN0ZWREYXRlc1sxXSwgZm10WW1kKTtcbiAgICAgICAgICAgIGNoZWNrb3V0RGlzcGxheS52YWx1ZSA9IGluc3RhbmNlLmZvcm1hdERhdGUoc2VsZWN0ZWREYXRlc1sxXSwgZm10VWkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tvdXRIaWRkZW4udmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNoZWNrb3V0RGlzcGxheS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRmxhdHBpY2tyKCkge1xuICAgICAgICBpZiAoZnApIHtcbiAgICAgICAgICAgIHJldHVybiBmcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZwID0gZmxhdHBpY2tyKGFuY2hvckVsLCB7XG4gICAgICAgICAgICBtb2RlOiAncmFuZ2UnLFxuICAgICAgICAgICAgLy8gdHJ1ZSBkw6ljbGVuY2hlIGZvY3VzQW5kQ2xvc2UoKSDihpIgZm9jdXMgc3VyIGzigJlpbnB1dCBjYWNow6kg4oaSIHpvb20gaU9TIChXZWJLaXQpIGF1IDLhtYkgam91ci5cbiAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgLy8gaW5saW5lIDogb3BlbigpIGVzdCBub29wLCBtYWlzIMOpdml0ZSB0b3V0IGxpc3RlbmVyIGZvY3VzL2NsaWMgaW51dGlsZSBzdXIgbOKAmWFuY3JlLlxuICAgICAgICAgICAgY2xpY2tPcGVuczogZmFsc2UsXG4gICAgICAgICAgICBzaG93TW9udGhzOiBzaG93TW9udGhzQ291bnQoKSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6ICdZLW0tZCcsXG4gICAgICAgICAgICBhbGxvd0lucHV0OiBmYWxzZSxcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcbiAgICAgICAgICAgIGFwcGVuZFRvOiBjYWxlbmRhck1vdW50LFxuICAgICAgICAgICAgZGlzYWJsZU1vYmlsZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pbkRhdGU6ICd0b2RheScsXG4gICAgICAgICAgICBsb2NhbGU6IE9iamVjdC5hc3NpZ24oe30sIGdldEZsYXRwaWNrckxvY2FsZSgpLCB7IGZpcnN0RGF5T2ZXZWVrOiAxIH0pLFxuICAgICAgICAgICAgbW9udGhTZWxlY3RvclR5cGU6ICdzdGF0aWMnLFxuICAgICAgICAgICAgb25SZWFkeTogY2FsZW5kYXJIb29rLFxuICAgICAgICAgICAgb25Nb250aENoYW5nZTogZnVuY3Rpb24gKF9zZWxlY3RlZERhdGVzLCBfZGF0ZVN0ciwgaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBsb2NrWWVhcklucHV0cyhpbnN0YW5jZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChzZWxlY3RlZERhdGVzLCBfZGF0ZVN0ciwgaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBzeW5jRnJvbVNlbGVjdGlvbihzZWxlY3RlZERhdGVzLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRGF0ZXMubGVuZ3RoID49IDIgJiYgY2FsZW5kYXJPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUNhbGVuZGFyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoc2VsZWN0ZWREYXRlcywgX2RhdGVTdHIsIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3luY0Zyb21TZWxlY3Rpb24oc2VsZWN0ZWREYXRlcywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNoZWNraW5IaWRkZW4udmFsdWUgJiYgY2hlY2tvdXRIaWRkZW4udmFsdWUpIHtcbiAgICAgICAgICAgIGZwLnNldERhdGUoW2NoZWNraW5IaWRkZW4udmFsdWUsIGNoZWNrb3V0SGlkZGVuLnZhbHVlXSwgZmFsc2UpO1xuICAgICAgICAgICAgc3luY0Zyb21TZWxlY3Rpb24oZnAuc2VsZWN0ZWREYXRlcywgZnApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChmcCkge1xuICAgICAgICAgICAgICAgIGZwLnJlZHJhdygpO1xuICAgICAgICAgICAgICAgIGxvY2tZZWFySW5wdXRzKGZwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZwO1xuICAgIH1cblxuICAgIGxldCBjYWxlbmRhck9wZW4gPSBmYWxzZTtcbiAgICBsZXQgZ3Vlc3RzT3BlbiA9IGZhbHNlO1xuICAgIGxldCBzdXBwcmVzc05leHREb2NDbGljayA9IGZhbHNlO1xuICAgIGxldCBjYWxlbmRhclRyaWdnZXJFbCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBpc1N0aWNreU1vZHVsZSgpIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uLW1vZHVsZScpO1xuICAgICAgICByZXR1cm4gISEobW9kdWxlICYmIG1vZHVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXN0aWNreScpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDYWxlbmRhck1vdW50UGxhY2VtZW50Q2xhc3MoKSB7XG4gICAgICAgIGNhbGVuZGFyTW91bnQuY2xhc3NMaXN0LnRvZ2dsZSgncmVzZXJ2YXRpb24tbW9kdWxlX19jYWxlbmRhci1tb3VudC0tc3RpY2t5JywgaXNTdGlja3lNb2R1bGUoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0R3Vlc3RzTW91bnRQbGFjZW1lbnRDbGFzcygpIHtcbiAgICAgICAgaWYgKGd1ZXN0c01vdW50KSB7XG4gICAgICAgICAgICBndWVzdHNNb3VudC5jbGFzc0xpc3QudG9nZ2xlKCdyZXNlcnZhdGlvbi1tb2R1bGVfX2d1ZXN0cy1wb3BvdmVyLW1vdW50LS1zdGlja3knLCBpc1N0aWNreU1vZHVsZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBBbGlnbmUgbGUgYm9yZCBkcm9pdCBkdSBwb3BvdmVyIHN1ciBsZSBjaGFtcCBHdWVzdHMgKG1vbnRhZ2UgPSBlbmZhbnQgZHUgbW9kdWxlLCBjb21tZSBsZSBjYWxlbmRyaWVyKS4gKi9cbiAgICBmdW5jdGlvbiBzeW5jR3Vlc3RzUG9wb3ZlclBvc2l0aW9uKCkge1xuICAgICAgICBpZiAoIWd1ZXN0c01vdW50IHx8ICFndWVzdHNUcmlnZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uLW1vZHVsZScpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcbiAgICAgICAgICAgIGd1ZXN0c01vdW50LnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgICAgICAgICBndWVzdHNNb3VudC5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbSA9IG1vZHVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdCA9IGd1ZXN0c1RyaWdnZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGd1ZXN0c01vdW50LnN0eWxlLmxlZnQgPSAnYXV0byc7XG4gICAgICAgIGd1ZXN0c01vdW50LnN0eWxlLnJpZ2h0ID0gTWF0aC5tYXgoMCwgbS5yaWdodCAtIHQucmlnaHQpICsgJ3B4JztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckd1ZXN0c1BvcG92ZXJQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKGd1ZXN0c01vdW50KSB7XG4gICAgICAgICAgICBndWVzdHNNb3VudC5zdHlsZS5yaWdodCA9ICcnO1xuICAgICAgICAgICAgZ3Vlc3RzTW91bnQuc3R5bGUubGVmdCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdyZXNpemUnLFxuICAgICAgICBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZnApIHtcbiAgICAgICAgICAgICAgICBmcC5zZXQoJ3Nob3dNb250aHMnLCBzaG93TW9udGhzQ291bnQoKSk7XG4gICAgICAgICAgICAgICAgZnAucmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgbG9ja1llYXJJbnB1dHMoZnApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGd1ZXN0c09wZW4pIHtcbiAgICAgICAgICAgICAgICBzZXRHdWVzdHNNb3VudFBsYWNlbWVudENsYXNzKCk7XG4gICAgICAgICAgICAgICAgc3luY0d1ZXN0c1BvcG92ZXJQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDApLFxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Njcm9sbCcsXG4gICAgICAgIGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghZ3Vlc3RzT3Blbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEd1ZXN0c01vdW50UGxhY2VtZW50Q2xhc3MoKTtcbiAgICAgICAgICAgIHN5bmNHdWVzdHNQb3BvdmVyUG9zaXRpb24oKTtcbiAgICAgICAgfSwgNTApLFxuICAgICAgICB7IHBhc3NpdmU6IHRydWUgfSxcbiAgICApO1xuXG4gICAgZnVuY3Rpb24gb3BlbkNhbGVuZGFyKHRyaWdnZXJFbCkge1xuICAgICAgICBpZiAoZ3Vlc3RzT3Blbikge1xuICAgICAgICAgICAgY2xvc2VHdWVzdHMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNhbGVuZGFyVHJpZ2dlckVsID0gdHJpZ2dlckVsIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHwgbnVsbDtcbiAgICAgICAgc2V0Q2FsZW5kYXJNb3VudFBsYWNlbWVudENsYXNzKCk7XG4gICAgICAgIGNhbGVuZGFyTW91bnQuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xuICAgICAgICBkYXRlc0Jsb2NrLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgIGNhbGVuZGFyT3BlbiA9IHRydWU7XG4gICAgICAgIHN1cHByZXNzTmV4dERvY0NsaWNrID0gdHJ1ZTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlRmxhdHBpY2tyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlQ2FsZW5kYXIocmV0dXJuRm9jdXMpIHtcbiAgICAgICAgY2FsZW5kYXJNb3VudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgICAgIGRhdGVzQmxvY2suc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIGNhbGVuZGFyT3BlbiA9IGZhbHNlO1xuICAgICAgICBpZiAocmV0dXJuRm9jdXMgIT09IGZhbHNlICYmIGNhbGVuZGFyVHJpZ2dlckVsKSB7XG4gICAgICAgICAgICBjYWxlbmRhclRyaWdnZXJFbC5mb2N1cygpO1xuICAgICAgICAgICAgY2FsZW5kYXJUcmlnZ2VyRWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRGF0ZXNJbnRlcmFjdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuZmxhdHBpY2tyLWNhbGVuZGFyJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnJlc2VydmF0aW9uLW1vZHVsZV9fY2FsZW5kYXItbW91bnQnKSAmJiAhZS50YXJnZXQuY2xvc2VzdCgnLmZsYXRwaWNrci1jYWxlbmRhcicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChjYWxlbmRhck9wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlQ2FsZW5kYXIodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvcGVuQ2FsZW5kYXIoZS5jdXJyZW50VGFyZ2V0IHx8IGUudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBkYXRlc0Jsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGF0ZXNJbnRlcmFjdGlvbik7XG5cbiAgICBkYXRlc0Jsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgIT09ICdFbnRlcicgJiYgZS5rZXkgIT09ICcgJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZURhdGVzSW50ZXJhY3Rpb24oZSk7XG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gR3Vlc3RzIHBvcG92ZXIgKHN0ZXBwZXJzICsgY2hhbXBzIGNhY2jDqXMgYWR1bHRzIC8ga2lkcylcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24gZ2V0QWR1bHRzS2lkcygpIHtcbiAgICAgICAgY29uc3QgYSA9IGFkdWx0c0hpZGRlbiA/IHBhcnNlSW50U3RyaWN0KGFkdWx0c0hpZGRlbi52YWx1ZSwgMikgOiAyO1xuICAgICAgICBjb25zdCBrID0ga2lkc0hpZGRlbiA/IHBhcnNlSW50U3RyaWN0KGtpZHNIaWRkZW4udmFsdWUsIDApIDogMDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkdWx0czogTWF0aC5taW4oMTIsIE1hdGgubWF4KDEsIGEpKSxcbiAgICAgICAgICAgIGtpZHM6IE1hdGgubWluKDEwLCBNYXRoLm1heCgwLCBrKSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3luY0d1ZXN0U3RlcHBlclVpKCkge1xuICAgICAgICBjb25zdCB7IGFkdWx0cywga2lkcyB9ID0gZ2V0QWR1bHRzS2lkcygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ndWVzdC1zdGVwcGVyXScpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gcm93LmdldEF0dHJpYnV0ZSgnZGF0YS1ndWVzdC1zdGVwcGVyJyk7XG4gICAgICAgICAgICBjb25zdCBtaW4gPSBwYXJzZUludFN0cmljdChyb3cuZ2V0QXR0cmlidXRlKCdkYXRhLW1pbicpLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IHBhcnNlSW50U3RyaWN0KHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4JyksIDk5KTtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGtleSA9PT0gJ2FkdWx0cycgPyBhZHVsdHMgOiBraWRzO1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9IHJvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ndWVzdC1zdGVwcGVyLXZhbHVlXScpO1xuICAgICAgICAgICAgaWYgKGRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gU3RyaW5nKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkb3duID0gcm93LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWd1ZXN0LXN0ZXA9XCJkb3duXCJdJyk7XG4gICAgICAgICAgICBjb25zdCB1cCA9IHJvdy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ndWVzdC1zdGVwPVwidXBcIl0nKTtcbiAgICAgICAgICAgIGlmIChkb3duKSB7XG4gICAgICAgICAgICAgICAgZG93bi5kaXNhYmxlZCA9IHZhbCA8PSBtaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXApIHtcbiAgICAgICAgICAgICAgICB1cC5kaXNhYmxlZCA9IHZhbCA+PSBtYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZ3Vlc3RzU3VtbWFyeSkge1xuICAgICAgICAgICAgZ3Vlc3RzU3VtbWFyeS50ZXh0Q29udGVudCA9IGZvcm1hdEd1ZXN0U3VtbWFyeShhZHVsdHMsIGtpZHMsIGd1ZXN0c1N1bW1hcnlJMThuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFkdWx0c0tpZHMoYWR1bHRzLCBraWRzKSB7XG4gICAgICAgIGlmIChhZHVsdHNIaWRkZW4pIHtcbiAgICAgICAgICAgIGFkdWx0c0hpZGRlbi52YWx1ZSA9IFN0cmluZyhNYXRoLm1pbigxMiwgTWF0aC5tYXgoMSwgYWR1bHRzKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChraWRzSGlkZGVuKSB7XG4gICAgICAgICAgICBraWRzSGlkZGVuLnZhbHVlID0gU3RyaW5nKE1hdGgubWluKDEwLCBNYXRoLm1heCgwLCBraWRzKSkpO1xuICAgICAgICB9XG4gICAgICAgIHN5bmNHdWVzdFN0ZXBwZXJVaSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5HdWVzdHMoKSB7XG4gICAgICAgIGlmICghZ3Vlc3RzTW91bnQgfHwgIWd1ZXN0c1RyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsZW5kYXJPcGVuKSB7XG4gICAgICAgICAgICBjbG9zZUNhbGVuZGFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0R3Vlc3RzTW91bnRQbGFjZW1lbnRDbGFzcygpO1xuICAgICAgICBndWVzdHNNb3VudC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XG4gICAgICAgIGd1ZXN0c01vdW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICBndWVzdHNPcGVuID0gdHJ1ZTtcbiAgICAgICAgc3VwcHJlc3NOZXh0RG9jQ2xpY2sgPSB0cnVlO1xuICAgICAgICBzeW5jR3Vlc3RTdGVwcGVyVWkoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN5bmNHdWVzdHNQb3BvdmVyUG9zaXRpb24oKTtcbiAgICAgICAgICAgIC8vIE1vdmUgZm9jdXMgdG8gdGhlIGZpcnN0IHN0ZXBwZXIgYnV0dG9uIG9yIERvbmUgd2hlbiBwb3BvdmVyIG9wZW5zXG4gICAgICAgICAgICBjb25zdCBmaXJzdEJ0biA9IGd1ZXN0c01vdW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknKTtcbiAgICAgICAgICAgIGlmIChmaXJzdEJ0bikgZmlyc3RCdG4uZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VHdWVzdHMocmV0dXJuRm9jdXMpIHtcbiAgICAgICAgaWYgKCFndWVzdHNNb3VudCB8fCAhZ3Vlc3RzVHJpZ2dlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGd1ZXN0c01vdW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcbiAgICAgICAgZ3Vlc3RzTW91bnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIGNsZWFyR3Vlc3RzUG9wb3ZlclBvc2l0aW9uKCk7XG4gICAgICAgIGd1ZXN0c1RyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIGd1ZXN0c1RyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIGd1ZXN0c09wZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHJldHVybkZvY3VzICE9PSBmYWxzZSAmJiBndWVzdHNUcmlnZ2VyKSB7XG4gICAgICAgICAgICBndWVzdHNUcmlnZ2VyLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVHdWVzdHMoKSB7XG4gICAgICAgIGlmIChndWVzdHNPcGVuKSB7XG4gICAgICAgICAgICBjbG9zZUd1ZXN0cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3Blbkd1ZXN0cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGd1ZXN0c01vdW50ICYmIGd1ZXN0c1RyaWdnZXIgJiYgYWR1bHRzSGlkZGVuICYmIGtpZHNIaWRkZW4pIHtcbiAgICAgICAgc3luY0d1ZXN0U3RlcHBlclVpKCk7XG5cbiAgICAgICAgZ3Vlc3RzVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBMZXMgKy8tIGV0IMKrIERvbmUgwrsgc29udCBkYW5zIGzigJlpdGVtIG1haXMgaG9ycyBkdSByw6lzdW3DqSA6IG5lIHBhcyB0cmFpdGVyIGNvbW1lIG91dmVydHVyZS9mZXJtZXR1cmUgZHUgdHJpZ2dlclxuICAgICAgICAgICAgaWYgKGd1ZXN0c01vdW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZUd1ZXN0cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBndWVzdHNUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUua2V5ICE9PSAnRW50ZXInICYmIGUua2V5ICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3Vlc3RzTW91bnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdG9nZ2xlR3Vlc3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWd1ZXN0LXN0ZXBwZXJdJykuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWd1ZXN0LXN0ZXBdJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFidG4gfHwgYnRuLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcm93LmdldEF0dHJpYnV0ZSgnZGF0YS1ndWVzdC1zdGVwcGVyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWluID0gcGFyc2VJbnRTdHJpY3Qocm93LmdldEF0dHJpYnV0ZSgnZGF0YS1taW4nKSwgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gcGFyc2VJbnRTdHJpY3Qocm93LmdldEF0dHJpYnV0ZSgnZGF0YS1tYXgnKSwgOTkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYWR1bHRzLCBraWRzIH0gPSBnZXRBZHVsdHNLaWRzKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWd1ZXN0LXN0ZXAnKSA9PT0gJ3VwJyA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnYWR1bHRzJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gYWR1bHRzICsgZGVsdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0IDwgbWluIHx8IG5leHQgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRBZHVsdHNLaWRzKG5leHQsIGtpZHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAna2lkcycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IGtpZHMgKyBkZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPCBtaW4gfHwgbmV4dCA+IG1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldEFkdWx0c0tpZHMoYWR1bHRzLCBuZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGd1ZXN0c0RvbmUpIHtcbiAgICAgICAgICAgIGd1ZXN0c0RvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VHdWVzdHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChzdXBwcmVzc05leHREb2NDbGljaykge1xuICAgICAgICAgICAgICAgIHN1cHByZXNzTmV4dERvY0NsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbGVuZGFyT3Blbikge1xuICAgICAgICAgICAgICAgIGlmIChkYXRlc0Jsb2NrLmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBjYWxlbmRhck1vdW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsb3NlQ2FsZW5kYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChndWVzdHNPcGVuICYmIGd1ZXN0c01vdW50ICYmIGd1ZXN0c1RyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ3Vlc3RzVHJpZ2dlci5jb250YWlucyhlLnRhcmdldCkgfHwgZ3Vlc3RzTW91bnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xvc2VHdWVzdHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZSxcbiAgICApO1xuXG4gICAgLy8gRm9jdXMgdHJhcCBpbnNpZGUgZ3Vlc3RzIHBvcG92ZXJcbiAgICBpZiAoZ3Vlc3RzTW91bnQpIHtcbiAgICAgICAgZ3Vlc3RzTW91bnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoIWd1ZXN0c09wZW4gfHwgZS5rZXkgIT09ICdUYWInKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBmb2N1c2FibGUgPSBBcnJheS5mcm9tKGd1ZXN0c01vdW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknKSk7XG4gICAgICAgICAgICBpZiAoIWZvY3VzYWJsZS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gZm9jdXNhYmxlWzBdO1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IGZvY3VzYWJsZVtmb2N1c2FibGUubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsYXN0LmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFlLnNoaWZ0S2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3QpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZmlyc3QuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleSAhPT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ3Vlc3RzT3Blbikge1xuICAgICAgICAgICAgY2xvc2VHdWVzdHModHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGVuZGFyT3Blbikge1xuICAgICAgICAgICAgY2xvc2VDYWxlbmRhcih0cnVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZXJyb3JFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbi1kYXRlcy1lcnJvcicpO1xuICAgIGNvbnN0IGRhdGVzRXJyb3JNc2cgPSBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1kYXRlcy1lcnJvcicpIHx8ICcnO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIWNoZWNraW5IaWRkZW4udmFsdWUgfHwgIWNoZWNrb3V0SGlkZGVuLnZhbHVlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXJyb3JFbCkge1xuICAgICAgICAgICAgICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBkYXRlc0Vycm9yTXNnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjYWxlbmRhck9wZW4pIHtcbiAgICAgICAgICAgICAgICBvcGVuQ2FsZW5kYXIoZGF0ZXNCbG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmaXJzdERhdGVGaWVsZCA9IGRhdGVzQmxvY2sucXVlcnlTZWxlY3RvcignW2RhdGEtcmVzZXJ2YXRpb24tZmllbGRdJyk7XG4gICAgICAgICAgICBpZiAoZmlyc3REYXRlRmllbGQpIHtcbiAgICAgICAgICAgICAgICBmaXJzdERhdGVGaWVsZC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvckVsKSB7XG4gICAgICAgICAgICBlcnJvckVsLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0UmVzZXJ2YXRpb25IZXJvKTtcbn0gZWxzZSB7XG4gICAgaW5pdFJlc2VydmF0aW9uSGVybygpO1xufVxuIiwiaW1wb3J0IHsgaW5pdEhhdmVBbmltYXRpb24gfSBmcm9tICcuL2hhdmUtYW5pbWF0aW9uJztcblxuJChmdW5jdGlvbigkKSB7XG4gICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuXG4gICAgLy8gUm9vbXMgc2xpZGVyIOKAlCBzdGF5IHBhZ2VcbiAgICBsZXQgJHN0YXlSb29tc1NsaWRlciA9ICQoJy5zZWN0aW9uLTJfX3Jvb21zJyk7XG4gICAgaWYgKCRzdGF5Um9vbXNTbGlkZXIubGVuZ3RoKSB7XG4gICAgICAgICRzdGF5Um9vbXNTbGlkZXIuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE0MDAsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7IHNsaWRlc1RvU2hvdzogNCwgc2xpZGVzVG9TY3JvbGw6IDEgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTA4MCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHsgc2xpZGVzVG9TaG93OiAzLCBzbGlkZXNUb1Njcm9sbDogMSB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7IHNsaWRlc1RvU2hvdzogMSwgc2xpZGVzVG9TY3JvbGw6IDEgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0ICRzbGlkZXJBcnRpY2xlcyA9ICQoJy5zbGlkZXJfYXJ0aWNsZXMnKTtcbiAgICBpZiAoJHNsaWRlckFydGljbGVzLmxlbmd0aCkge1xuICAgICAgICAkc2xpZGVyQXJ0aWNsZXMuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHsgYnJlYWtwb2ludDogMTE5OSwgc2V0dGluZ3M6IHsgc2xpZGVzVG9TaG93OiAzIH0gfSxcbiAgICAgICAgICAgICAgICB7IGJyZWFrcG9pbnQ6IDk5MSwgc2V0dGluZ3M6IHsgc2xpZGVzVG9TaG93OiAyLCBzbGlkZXNUb1Njcm9sbDogMiB9IH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgJHNsaWRlckFydGljbGVzQnVpbGRlciA9ICQoJy5zbGlkZXJfYXJ0aWNsZXNfYnVpbGRlcicpO1xuICAgIGlmICgkc2xpZGVyQXJ0aWNsZXNCdWlsZGVyLmxlbmd0aCkge1xuICAgICAgICAkc2xpZGVyQXJ0aWNsZXNCdWlsZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcxMDBweCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCAkc2xpZGVyTmV3cyA9ICQoJy5zbGlkZXJfbmV3cycpO1xuICAgIGlmICgkc2xpZGVyTmV3cy5sZW5ndGgpIHtcbiAgICAgICAgJHNsaWRlck5ld3Muc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHsgYnJlYWtwb2ludDogMTE5OSwgc2V0dGluZ3M6IHsgc2xpZGVzVG9TaG93OiAzLCBhcnJvd3M6IGZhbHNlIH0gfSxcbiAgICAgICAgICAgICAgICB7IGJyZWFrcG9pbnQ6IDk5MSwgc2V0dGluZ3M6IHsgc2xpZGVzVG9TaG93OiAyLCBhcnJvd3M6IGZhbHNlIH0gfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzEwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0ICRzbGlkZXJHYWxsZXJ5ID0gJCgnLnNsaWRlcl9nYWxsZXJ5Jyk7XG4gICAgaWYgKCRzbGlkZXJHYWxsZXJ5Lmxlbmd0aCkge1xuICAgICAgICAkc2xpZGVyR2FsbGVyeS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQoJy5nYWxsZXJ5X21vZGFsJykubGVuZ3RoKSB7XG4gICAgICAgICRib2R5Lm9uKCdjbGljaycsICcuZ2FsbGVyeV9tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZXIgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNsaWRlID0gJCh0aGlzKS5kYXRhKCdzbGlkZXRvJyk7XG4gICAgICAgICAgICBpZiAoJChjdXJyZW50U2xpZGVyKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKGN1cnJlbnRTbGlkZXIpLnNsaWNrKCdzbGlja0dvVG8nLCBjdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkYm9keS5vbignY2xpY2snLCAnLnNsaWRlcm5ld3NfYWN0aW9ucycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gJCh0aGlzKS5kYXRhKCdhY3Rpb25zJyk7XG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICAgICAgJHNsaWRlck5ld3Muc2xpY2soJ3NsaWNrUHJldicpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgICAkc2xpZGVyTmV3cy5zbGljaygnc2xpY2tOZXh0Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGluaXRIYXZlQW5pbWF0aW9uKCk7XG5cbiAgICAvLyBIZWFkZXIgZHJhd2VyIOKAlCBvcGVuIC8gY2xvc2UgLyBiYWNrZHJvcCAvIGtleWJvYXJkIC8gc2Nyb2xsLXNweSBGQUJcbiAgICBjb25zdCBzaXRlSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyTWVudVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbWVudS10b2dnbGUnKTtcbiAgICBjb25zdCBoZWFkZXJNZW51RmFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1tZW51LWZhYicpO1xuICAgIGNvbnN0IGhlYWRlckRyYXdlckJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlci1kcmF3ZXItYmFja2Ryb3AnKTtcbiAgICBjb25zdCBoZWFkZXJEcmF3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyLWRyYXdlcicpO1xuICAgIC8qKiBQcmV2ZW50cyBpbW1lZGlhdGUgcmUtY2xvc2Ugb24gaU9TIGRvdWJsZS10YXAgb2YgYnVyZ2VyIGJ1dHRvbi4gKi9cbiAgICBsZXQgaGVhZGVyTWVudUlnbm9yZUNsb3NlVW50aWwgPSAwO1xuXG4gICAgZnVuY3Rpb24gc2V0RHJhd2VyRm9jdXNhYmxlKGZvY3VzYWJsZSkge1xuICAgICAgICBpZiAoIWhlYWRlckRyYXdlcikgcmV0dXJuO1xuICAgICAgICBoZWFkZXJEcmF3ZXIucXVlcnlTZWxlY3RvckFsbCgnYSwgYnV0dG9uJykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGlmIChmb2N1c2FibGUpIHsgZWwucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpOyB9XG4gICAgICAgICAgICBlbHNlIHsgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpOyB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBEcmF3ZXIgc3RhcnRzIGNsb3NlZCDigJQgcmVtb3ZlIGFsbCBsaW5rcyBmcm9tIHRhYiBvcmRlclxuICAgIHNldERyYXdlckZvY3VzYWJsZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXJNZW51QmFySGVpZ2h0KCkge1xuICAgICAgICBpZiAoIXNpdGVIZWFkZXIpIHJldHVybiAxMDg7XG4gICAgICAgIGNvbnN0IGJhciA9IHNpdGVIZWFkZXIucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY29udGVudCcpO1xuICAgICAgICBpZiAoYmFyKSByZXR1cm4gYmFyLm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3QgcmF3ID0gZ2V0Q29tcHV0ZWRTdHlsZShzaXRlSGVhZGVyKS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhlYWRlci1iYXItaGVpZ2h0JykudHJpbSgpO1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChyYXcsIDEwKTtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShwYXJzZWQpID8gcGFyc2VkIDogMTA4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5KCkge1xuICAgICAgICBpZiAoIWhlYWRlck1lbnVGYWIpIHJldHVybjtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gZ2V0SGVhZGVyTWVudUJhckhlaWdodCgpICsgMTAwO1xuICAgICAgICBjb25zdCB5ID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgaWYgKHkgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGhlYWRlck1lbnVGYWIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19tZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBoZWFkZXJNZW51RmFiLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlYWRlck1lbnVGYWIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19tZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWZhYi0tdmlzaWJsZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICAgIGhlYWRlck1lbnVGYWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TWVudUxhYmVsKGJ0biwgc3RhdGUpIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IHN0YXRlID09PSAnb3BlbicgPyAnZGF0YS1sYWJlbC1vcGVuJyA6ICdkYXRhLWxhYmVsLWNsb3NlJztcbiAgICAgICAgcmV0dXJuIChidG4gJiYgYnRuLmdldEF0dHJpYnV0ZShhdHRyKSkgfHwgKGJ0biAmJiBidG4uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHx8ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN5bmNIZWFkZXJNZW51RmFiQXJpYSgpIHtcbiAgICAgICAgaWYgKCFoZWFkZXJNZW51RmFiKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGlzT3BlbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtZHJhd2VyLW9wZW4nKTtcbiAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4gPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgaGVhZGVyTWVudUZhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBnZXRNZW51TGFiZWwoaGVhZGVyTWVudUZhYiwgaXNPcGVuID8gJ2Nsb3NlJyA6ICdvcGVuJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlSGVhZGVyRHJhd2VyKCkge1xuICAgICAgICBoZWFkZXJNZW51SWdub3JlQ2xvc2VVbnRpbCA9IDA7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1kcmF3ZXItb3BlbicpO1xuICAgICAgICBpZiAoc2l0ZUhlYWRlcikgc2l0ZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLWRyYXdlci1vcGVuJyk7XG4gICAgICAgIGlmIChoZWFkZXJNZW51VG9nZ2xlKSB7XG4gICAgICAgICAgICBoZWFkZXJNZW51VG9nZ2xlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBnZXRNZW51TGFiZWwoaGVhZGVyTWVudVRvZ2dsZSwgJ29wZW4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlckRyYXdlcikgaGVhZGVyRHJhd2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICBpZiAoaGVhZGVyRHJhd2VyQmFja2Ryb3ApIGhlYWRlckRyYXdlckJhY2tkcm9wLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICBzZXREcmF3ZXJGb2N1c2FibGUoZmFsc2UpO1xuICAgICAgICBzeW5jSGVhZGVyTWVudUZhYkFyaWEoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuSGVhZGVyRHJhd2VyKCkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1kcmF3ZXItb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtZHJhd2VyLW9wZW4nKTtcbiAgICAgICAgaWYgKHNpdGVIZWFkZXIpIHNpdGVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLS1kcmF3ZXItb3BlbicpO1xuICAgICAgICBpZiAoaGVhZGVyTWVudVRvZ2dsZSkge1xuICAgICAgICAgICAgaGVhZGVyTWVudVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgaGVhZGVyTWVudVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBnZXRNZW51TGFiZWwoaGVhZGVyTWVudVRvZ2dsZSwgJ2Nsb3NlJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJEcmF3ZXIpIGhlYWRlckRyYXdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgIGlmIChoZWFkZXJEcmF3ZXJCYWNrZHJvcCkgaGVhZGVyRHJhd2VyQmFja2Ryb3Auc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICBzZXREcmF3ZXJGb2N1c2FibGUodHJ1ZSk7XG4gICAgICAgIHN5bmNIZWFkZXJNZW51RmFiQXJpYSgpO1xuICAgIH1cblxuICAgIC8qKiBgZnJvbU1lbnVCdXR0b25gOiBhZnRlciBvcGVuaW5nLCBicmllZmx5IGlnbm9yZSBjbG9zZSB2aWEgYnVyZ2VyL0ZBQiAoaU9TIGRvdWJsZS10YXApLiAqL1xuICAgIGZ1bmN0aW9uIHRvZ2dsZUhlYWRlckRyYXdlcihmcm9tTWVudUJ1dHRvbikge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1kcmF3ZXItb3BlbicpKSB7XG4gICAgICAgICAgICBpZiAoZnJvbU1lbnVCdXR0b24gJiYgRGF0ZS5ub3coKSA8IGhlYWRlck1lbnVJZ25vcmVDbG9zZVVudGlsKSByZXR1cm47XG4gICAgICAgICAgICBjbG9zZUhlYWRlckRyYXdlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3BlbkhlYWRlckRyYXdlcigpO1xuICAgICAgICAgICAgaGVhZGVyTWVudUlnbm9yZUNsb3NlVW50aWwgPSBEYXRlLm5vdygpICsgMjgwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhlYWRlck1lbnVUb2dnbGUgJiYgc2l0ZUhlYWRlcikge1xuICAgICAgICBoZWFkZXJNZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZ2dsZUhlYWRlckRyYXdlcih0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGhlYWRlck1lbnVGYWIpIHtcbiAgICAgICAgaGVhZGVyTWVudUZhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0b2dnbGVIZWFkZXJEcmF3ZXIodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUhlYWRlck1lbnVGYWJWaXNpYmlsaXR5KTtcblxuICAgIGlmIChoZWFkZXJEcmF3ZXJCYWNrZHJvcCkge1xuICAgICAgICBoZWFkZXJEcmF3ZXJCYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlSGVhZGVyRHJhd2VyKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWRyYXdlci1vcGVuJykpIHtcbiAgICAgICAgICAgIGNsb3NlSGVhZGVyRHJhd2VyKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoZWFkZXJEcmF3ZXIpIHtcbiAgICAgICAgaGVhZGVyRHJhd2VyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EuaGVhZGVyX19kcmF3ZXItbGluaycpLmZvckVhY2goZnVuY3Rpb24gKGFuY2hvcikge1xuICAgICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsb3NlSGVhZGVyRHJhd2VyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJBT1MiLCJpc01vYmlsZUFvc1ZpZXdwb3J0Iiwic2NhbGVEb3duQW9zRGVsYXlzRm9yTW9iaWxlIiwicGFnZUxvYWRTdGFydCIsIkRhdGUiLCJub3ciLCJtaW5pbXVtTG9hZGVyRHVyYXRpb24iLCJib2R5IiwiZG9jdW1lbnQiLCJtYWluTG9hZGVyIiwicXVlcnlTZWxlY3RvciIsImxvYWRlckhpZGluZyIsInJ1bkFvc0luaXQiLCJtb2JpbGUiLCJyZWR1Y2VkTW90aW9uIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJpbml0Iiwib25jZSIsImVhc2luZyIsImR1cmF0aW9uIiwib2Zmc2V0IiwidGhyb3R0bGVEZWxheSIsImRpc2FibGUiLCJoaWRlTWFpbkxvYWRlciIsIl9fbG9hZGVySGlkaW5nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaXNDbGVhbmVkVXAiLCJjbGVhbnVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJfX29uTG9hZGVySGlkZGVuIiwiX19sb2FkZXJIaWRkZW4iLCJzY2hlZHVsZUhpZGUiLCJlbGFwc2VkIiwicmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImhlcm9JbWciLCJjb21wbGV0ZSIsIm9uIiwidGV4dFRvQ29weSIsImF0dHIiLCJ0ZW1wVGV4dGFyZWEiLCJhcHBlbmQiLCJ2YWwiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlc2VydmF0aW9uTW9kdWxlIiwiYm9va0ZhYiIsIm1vZHVsZUhlaWdodCIsImluaXRpYWxUb3AiLCJpbm5lckhlaWdodCIsInVwZGF0ZVJlc2VydmF0aW9uU3RhdGUiLCJpc1Bhc3QiLCJzY3JvbGxZIiwidG9nZ2xlIiwicGFzc2l2ZSIsImluaXRIYXZlQW5pbWF0aW9uIiwibm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJmb3JFYWNoIiwiZWwiLCJwYXJzZU9mZnNldFB4IiwiZGF0YUF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJwYXJzZWQiLCJwYXJzZUludCIsIk51bWJlciIsImlzRmluaXRlIiwicmF3IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0cmltIiwibiIsInBhcnNlRmxvYXQiLCJjb250YWlucyIsIm9mZnNldFB4Iiwicm9vdE1hcmdpbiIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJ1bm9ic2VydmUiLCJyb290IiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsIk1PQklMRV9BT1NfTUFYX1dJRFRIIiwidiIsInNjYWxlZCIsIm1pbiIsInJvdW5kIiwic2V0QXR0cmlidXRlIiwiU3RyaW5nIiwiY291bnRyaWVzIiwiZW5Mb2NhbGUiLCJmckxvY2FsZSIsInJlZ2lzdGVyTG9jYWxlIiwiU0VMRUNUT1JTIiwibW9kYWwiLCJ0cmlnZ2VyIiwiY2xvc2UiLCJmb3JtIiwiZmVlZGJhY2siLCJjYXB0Y2hhIiwiY291bnRyeVNlbGVjdCIsIk9QRU5fQ0xBU1MiLCJCT0RZX09QRU5fQ0xBU1MiLCJTVUNDRVNTX0ZPUk1fQ0xBU1MiLCJidWlsZENvdW50cnlTZWxlY3REYXRhIiwicGFnZUxvY2FsZSIsImxhbmciLCJvZmZpY2lhbCIsImdldE5hbWVzIiwib3B0cyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJjb2RlIiwidmFsdWUiLCJ0ZXh0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInNlbnNpdGl2aXR5IiwibyIsImkiLCIkb3JkZXIiLCJjb2RlcyIsIlNldCIsImZsYXRGb3JOYXRpdmUiLCJfcmVmIiwib3B0aW9ucyIsInJlc29sdmVJbml0aWFsQ291bnRyeUNvZGUiLCJzZXJ2ZXIiLCJkYXRhc2V0Iiwic3VnZ2VzdGVkQ291bnRyeSIsInRvVXBwZXJDYXNlIiwiaGFzIiwibGlzdCIsIm5hdmlnYXRvciIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwibSIsImV4ZWMiLCJyZXBsYWNlIiwiZSIsIkFycmF5IiwiZnJvbSIsInBvcHVsYXRlTmF0aXZlQ291bnRyeVNlbGVjdCIsInNlbGVjdEVsIiwiZmxhdE9wdGlvbnMiLCJpbml0aWFsIiwiaW5uZXJIVE1MIiwib3B0IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50Iiwic2VsZWN0ZWQiLCJhcHBlbmRDaGlsZCIsImluaXRDb3VudHJ5U2VsZWN0aXplIiwiSFRNTFNlbGVjdEVsZW1lbnQiLCJwbGFjZWhvbGRlciIsImNvdW50cnlQbGFjZWhvbGRlciIsImJ1aWx0IiwiY29uc29sZSIsImVycm9yIiwiZm4iLCJzZWxlY3RpemUiLCIkc2VsZWN0IiwiZGVzdHJveSIsIml0ZW1zIiwidmFsdWVGaWVsZCIsImxhYmVsRmllbGQiLCJzZWFyY2hGaWVsZCIsIm1heEl0ZW1zIiwiY3JlYXRlIiwiYWxsb3dFbXB0eU9wdGlvbiIsInNvcnRGaWVsZCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiZHJvcGRvd25QYXJlbnQiLCJjb3B5Q2xhc3Nlc1RvRHJvcGRvd24iLCJ3cmFwcGVyQ2xhc3MiLCJkcm9wZG93bkNsYXNzIiwiZXJyIiwiaW5zdCIsIl9uZXdzbGV0dGVyQ291bnRyeVNlbGVjdGl6ZSIsImlucCIsIiRjb250cm9sX2lucHV0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic2VhcmNoIiwiY2FwdHVyZSIsInJlZnJlc2hDb3VudHJ5RmllbGRBZnRlclJlc2V0Iiwib3Blbk1vZGFsIiwiaGlkZGVuIiwibWFpbiIsImZpcnN0RmllbGQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmb2N1cyIsImNsb3NlTW9kYWwiLCJyZXNldCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0Iiwic3VibWl0QnV0dG9uIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImVtYWlsIiwiZ2V0IiwidG9TdHJpbmciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImNvdW50cnkiLCJsb2NhbGUiLCJkb2N1bWVudEVsZW1lbnQiLCJnZW5lcmljRXJyb3JNZXNzYWdlIiwiZ2VuZXJpY0Vycm9yIiwiaW5jb21wbGV0ZU1lc3NhZ2UiLCJpbmNvbXBsZXRlRXJyb3IiLCJyZWNhcHRjaGFFbmFibGVkIiwicmVjYXB0Y2hhU2l0ZUtleSIsImNhcHRjaGFJbnB1dCIsImRpc2FibGVkIiwiY2FwdGNoYVRva2VuIiwiZ3JlY2FwdGNoYSIsImV4ZWN1dGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWR5IiwiYWN0aW9uIiwidGhlbiIsImNhdGNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXlsb2FkIiwianNvbiIsImpzb25FcnJvciIsIm9rIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJjbG9zZXN0Iiwia2V5IiwicmVhZHlTdGF0ZSIsImZsYXRwaWNrciIsIkZyZW5jaCIsImVuZ2xpc2giLCJwcmVwZW5kTG9jYWxTdHlsZXNoZWV0SG9vayIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiZGVib3VuY2UiLCJtcyIsInQiLCJjbGVhclRpbWVvdXQiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJwYXJzZUludFN0cmljdCIsImZhbGxiYWNrIiwiZ2V0U2l0ZUxvY2FsZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJnZXRGbGF0cGlja3JMb2NhbGUiLCJsb2MiLCJhcHBseUNvdW50VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImNvdW50Iiwiam9pbiIsImZvcm1hdEd1ZXN0U3VtbWFyeSIsImFkdWx0cyIsImtpZHMiLCJpMThuIiwiYWR1bHRzX29uZSIsImtpZF9vbmUiLCJzZXAiLCJhTGFiZWwiLCJrTGFiZWwiLCJpbml0UmVzZXJ2YXRpb25IZXJvIiwiZGF0ZXNCbG9jayIsImNhbGVuZGFyTW91bnQiLCJhbmNob3JFbCIsImNoZWNraW5IaWRkZW4iLCJjaGVja291dEhpZGRlbiIsImNoZWNraW5EaXNwbGF5IiwiY2hlY2tvdXREaXNwbGF5IiwiZ3Vlc3RzTW91bnQiLCJndWVzdHNUcmlnZ2VyIiwiZ3Vlc3RzU3VtbWFyeSIsImFkdWx0c0hpZGRlbiIsImtpZHNIaWRkZW4iLCJndWVzdHNEb25lIiwiZ3Vlc3RzU3VtbWFyeUkxOG4iLCJpMThuUmF3IiwicGFyc2UiLCJfZSIsImZwIiwibG9ja1llYXJJbnB1dHMiLCJpbnN0YW5jZSIsImNhbGVuZGFyQ29udGFpbmVyIiwiY2FsZW5kYXJIb29rIiwiX3NlbGVjdGVkRGF0ZXMiLCJfZGF0ZVN0ciIsInNob3dNb250aHNDb3VudCIsImlubmVyV2lkdGgiLCJzeW5jRnJvbVNlbGVjdGlvbiIsInNlbGVjdGVkRGF0ZXMiLCJmbXRZbWQiLCJmbXRVaSIsImZvcm1hdERhdGUiLCJjcmVhdGVGbGF0cGlja3IiLCJtb2RlIiwiY2xvc2VPblNlbGVjdCIsImNsaWNrT3BlbnMiLCJzaG93TW9udGhzIiwiZGF0ZUZvcm1hdCIsImFsbG93SW5wdXQiLCJpbmxpbmUiLCJhcHBlbmRUbyIsImRpc2FibGVNb2JpbGUiLCJtaW5EYXRlIiwiYXNzaWduIiwiZmlyc3REYXlPZldlZWsiLCJtb250aFNlbGVjdG9yVHlwZSIsIm9uUmVhZHkiLCJvbk1vbnRoQ2hhbmdlIiwib25DaGFuZ2UiLCJjYWxlbmRhck9wZW4iLCJjbG9zZUNhbGVuZGFyIiwib25DbG9zZSIsInNldERhdGUiLCJyZWRyYXciLCJndWVzdHNPcGVuIiwic3VwcHJlc3NOZXh0RG9jQ2xpY2siLCJjYWxlbmRhclRyaWdnZXJFbCIsImlzU3RpY2t5TW9kdWxlIiwibW9kdWxlIiwic2V0Q2FsZW5kYXJNb3VudFBsYWNlbWVudENsYXNzIiwic2V0R3Vlc3RzTW91bnRQbGFjZW1lbnRDbGFzcyIsInN5bmNHdWVzdHNQb3BvdmVyUG9zaXRpb24iLCJzdHlsZSIsInJpZ2h0IiwibGVmdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsZWFyR3Vlc3RzUG9wb3ZlclBvc2l0aW9uIiwic2V0Iiwib3BlbkNhbGVuZGFyIiwidHJpZ2dlckVsIiwiY2xvc2VHdWVzdHMiLCJhY3RpdmVFbGVtZW50IiwicmV0dXJuRm9jdXMiLCJoYW5kbGVEYXRlc0ludGVyYWN0aW9uIiwiZ2V0QWR1bHRzS2lkcyIsImsiLCJzeW5jR3Vlc3RTdGVwcGVyVWkiLCJyb3ciLCJkaXNwbGF5IiwiZG93biIsInVwIiwic2V0QWR1bHRzS2lkcyIsIm9wZW5HdWVzdHMiLCJmaXJzdEJ0biIsInRvZ2dsZUd1ZXN0cyIsImJ0biIsImRlbHRhIiwibmV4dCIsImZvY3VzYWJsZSIsImZpcnN0IiwibGFzdCIsInNoaWZ0S2V5IiwiZXJyb3JFbCIsImRhdGVzRXJyb3JNc2ciLCJmaXJzdERhdGVGaWVsZCIsIiRib2R5IiwiJHN0YXlSb29tc1NsaWRlciIsInNsaWNrIiwiZG90cyIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5maW5pdGUiLCJjc3NFYXNlIiwiYXV0b3BsYXkiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiJHNsaWRlckFydGljbGVzIiwibGF6eUxvYWQiLCJhdXRvcGxheVNwZWVkIiwicGF1c2VPbkhvdmVyIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCIkc2xpZGVyQXJ0aWNsZXNCdWlsZGVyIiwiJHNsaWRlck5ld3MiLCIkc2xpZGVyR2FsbGVyeSIsImZhZGUiLCJjdXJyZW50U2xpZGVyIiwiZGF0YSIsImN1cnJlbnRTbGlkZSIsInNpdGVIZWFkZXIiLCJoZWFkZXJNZW51VG9nZ2xlIiwiaGVhZGVyTWVudUZhYiIsImhlYWRlckRyYXdlckJhY2tkcm9wIiwiaGVhZGVyRHJhd2VyIiwiaGVhZGVyTWVudUlnbm9yZUNsb3NlVW50aWwiLCJzZXREcmF3ZXJGb2N1c2FibGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXRIZWFkZXJNZW51QmFySGVpZ2h0IiwiYmFyIiwib2Zmc2V0SGVpZ2h0IiwidXBkYXRlSGVhZGVyTWVudUZhYlZpc2liaWxpdHkiLCJ5Iiwic2Nyb2xsVG9wIiwiZ2V0TWVudUxhYmVsIiwic3RhdGUiLCJzeW5jSGVhZGVyTWVudUZhYkFyaWEiLCJpc09wZW4iLCJjbG9zZUhlYWRlckRyYXdlciIsIm9wZW5IZWFkZXJEcmF3ZXIiLCJ0b2dnbGVIZWFkZXJEcmF3ZXIiLCJmcm9tTWVudUJ1dHRvbiIsImFuY2hvciJdLCJzb3VyY2VSb290IjoiIn0=