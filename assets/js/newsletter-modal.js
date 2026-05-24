const $ = require('jquery');
require('selectize/dist/js/standalone/selectize.min.js');
// Styles Selectize : importés dans app.scss (entrée « default »), sinon ils ne sont pas chargés (seul default l’est dans base.html.twig).

const countries = require('i18n-iso-countries');
const enLocale = require('i18n-iso-countries/langs/en.json');
const frLocale = require('i18n-iso-countries/langs/fr.json');

countries.registerLocale(enLocale);
countries.registerLocale(frLocale);

const SELECTORS = {
    modal: '[data-newsletter-modal]',
    trigger: '[data-newsletter-trigger]',
    close: '[data-newsletter-close]',
    form: '[data-newsletter-form]',
    feedback: '[data-newsletter-feedback]',
    captcha: '[data-newsletter-captcha]',
    countrySelect: '[data-newsletter-country]',
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
    const official = countries.getNames(lang, { select: 'official' });
    const opts = Object.keys(official).map((code) => ({
        value: code,
        text: official[code],
    }));

    opts.sort((a, b) =>
        a.text.localeCompare(b.text, lang, { sensitivity: 'base' }),
    );
    opts.forEach((o, i) => {
        o.$order = i;
    });

    const codes = new Set(opts.map((o) => o.value));
    const flatForNative = opts.map(({ value, text }) => ({ value, text }));

    return {
        options: opts,
        codes,
        flatForNative,
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
        const list =
            typeof navigator !== 'undefined'
                ? navigator.languages || [navigator.language]
                : [];
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

    const { options, codes, flatForNative } = built;
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
            sortField: [{ field: '$order', direction: 'asc' }],
            dropdownParent: 'body',
            copyClassesToDropdown: false,
            wrapperClass: 'selectize-control newsletter-country-selectize',
            dropdownClass: 'selectize-dropdown newsletter-country-dropdown',
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
        inp.addEventListener('paste', function(e) {
            e.stopImmediatePropagation();
            setTimeout(() => { if (inp.value) inst.search(inp.value); }, 1);
        }, { capture: true });
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
                window.grecaptcha.execute(recaptchaSiteKey, { action: 'newsletter_subscribe' })
                    .then(resolve)
                    .catch(reject);
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
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify({
                email,
                firstName,
                lastName,
                country,
                locale,
                captcha: captchaToken,
            }),
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
        form.addEventListener('submit', (event) => handleSubmit(event, modal));
    }

    document.addEventListener('click', (event) => {
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

    document.addEventListener('keydown', (event) => {
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
