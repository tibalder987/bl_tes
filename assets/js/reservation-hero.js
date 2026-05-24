import flatpickr from 'flatpickr';
import { French } from 'flatpickr/dist/l10n/fr.js';
import english from 'flatpickr/dist/l10n/default.js';

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
    const raw =
        el.getAttribute('data-locale') ||
        el.getAttribute('lang') ||
        (document.body && document.body.getAttribute('data-locale')) ||
        'fr';
    return String(raw).toLowerCase().split('-')[0];
}

function getFlatpickrLocale() {
    const loc = getSiteLocale();
    if (loc === 'fr') {
        return French;
    }
    return english;
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
    const t =
        i18n ||
        /** @type {GuestsSummaryI18n} */ ({
            adults_one: '1 adult',
            adults: '__COUNT__ adults',
            kid_one: '1 kid',
            kids: '__COUNT__ kids',
            sep: ' · ',
        });
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

        fp = flatpickr(anchorEl, {
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
            locale: Object.assign({}, getFlatpickrLocale(), { firstDayOfWeek: 1 }),
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
            },
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

    window.addEventListener(
        'resize',
        debounce(function () {
            if (fp) {
                fp.set('showMonths', showMonthsCount());
                fp.redraw();
                lockYearInputs(fp);
            }
            if (guestsOpen) {
                setGuestsMountPlacementClass();
                syncGuestsPopoverPosition();
            }
        }, 200),
    );

    window.addEventListener(
        'scroll',
        debounce(function () {
            if (!guestsOpen) {
                return;
            }
            setGuestsMountPlacementClass();
            syncGuestsPopoverPosition();
        }, 50),
        { passive: true },
    );

    function openCalendar() {
        if (guestsOpen) {
            closeGuests();
        }
        setCalendarMountPlacementClass();
        calendarMount.classList.add('is-open');
        datesBlock.setAttribute('aria-expanded', 'true');
        calendarOpen = true;
        suppressNextDocClick = true;

        requestAnimationFrame(function () {
            createFlatpickr();
        });
    }

    function closeCalendar() {
        calendarMount.classList.remove('is-open');
        datesBlock.setAttribute('aria-expanded', 'false');
        calendarOpen = false;
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
            closeCalendar();
            return;
        }

        openCalendar();
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
            kids: Math.min(10, Math.max(0, k)),
        };
    }

    function syncGuestStepperUi() {
        const { adults, kids } = getAdultsKids();
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
        });
    }

    function closeGuests() {
        if (!guestsMount || !guestsTrigger) {
            return;
        }
        guestsMount.classList.remove('is-open');
        guestsMount.setAttribute('aria-hidden', 'true');
        clearGuestsPopoverPosition();
        guestsTrigger.classList.remove('is-active');
        guestsTrigger.setAttribute('aria-expanded', 'false');
        guestsOpen = false;
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
                const { adults, kids } = getAdultsKids();
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

    document.addEventListener(
        'click',
        function (e) {
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
        },
        true,
    );

    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') {
            return;
        }
        if (guestsOpen) {
            closeGuests();
            return;
        }
        if (calendarOpen) {
            closeCalendar();
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReservationHero);
} else {
    initReservationHero();
}
