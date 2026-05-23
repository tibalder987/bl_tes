/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
const $ = require('jquery');
require('bootstrap');

// any JS you import will output into a single JS file (app.js in this case)
import 'slick-carousel';
import './main';
import './js/reservation-hero';
import './js/newsletter-modal';
import './builder';
import AOS from 'aos';

// any CSS you import will output into a single css file (app.css in this case)
// AOS : styles dans assets/styles/app.scss (entrée default), pas ici — sinon app.css n’est pas lié dans base.html.twig.
import './images/deco.png';

const pageLoadStart = Date.now();

/** Largeur max. (px) : même ordre de grandeur que les breakpoints SCSS du site. */
const MOBILE_AOS_MAX_WIDTH = 991;

function isMobileAosViewport() {
    return window.matchMedia(`(max-width: ${MOBILE_AOS_MAX_WIDTH}px)`).matches;
}

/**
 * Sur mobile, les data-aos-delay (200–600 ms) allongent trop la séquence.
 * On les réduit avant AOS.init pour garder un léger décalage sans empiler les attentes.
 */
function scaleDownAosDelaysForMobile() {
    if (!isMobileAosViewport()) {
        return;
    }
    document.querySelectorAll('[data-aos-delay]').forEach((el) => {
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

$(window).on('load', function() {
    const body = document.body;
    const mainLoader = document.querySelector('.main-loader');
    const minimumLoaderDuration = 500;

    const hideMainLoader = () => {
        if (!mainLoader) {
            body.classList.remove('is-loading');
            return;
        }

        mainLoader.classList.add('is-hiding');
        let isCleanedUp = false;

        const cleanup = () => {
            if (isCleanedUp) {
                return;
            }
            isCleanedUp = true;
            body.classList.remove('is-loading');
            mainLoader.remove();
            scaleDownAosDelaysForMobile();
            const mobile = isMobileAosViewport();
            AOS.init({
                once: true,
                easing: 'ease-out',
                // Mobile : déclenchement plus tôt (offset plus bas), animation plus courte.
                duration: mobile ? 500 : 1000,
                offset: mobile ? 24 : 120,
                throttleDelay: mobile ? 40 : 99,
            });
        };

        mainLoader.addEventListener('transitionend', cleanup, { once: true });
        window.setTimeout(cleanup, 900);
    };

    const elapsed = Date.now() - pageLoadStart;
    const remaining = Math.max(0, minimumLoaderDuration - elapsed);
    window.setTimeout(hideMainLoader, remaining);

    $(".copy-to-clipboard").on('click', function() {
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

    const moduleHeight = 145;
    let initialTop = window.innerHeight - moduleHeight;

    const updateReservationState = () => {
        if (window.scrollY >= initialTop) {
            reservationModule.classList.add('is-sticky');
        } else {
            reservationModule.classList.remove('is-sticky');
        }
    };

    updateReservationState();
    window.addEventListener('scroll', updateReservationState, { passive: true });
    window.addEventListener('resize', () => {
        initialTop = window.innerHeight - moduleHeight;
        updateReservationState();
    });
});