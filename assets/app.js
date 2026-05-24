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
import AOS from 'aos';
import { isMobileAosViewport, scaleDownAosDelaysForMobile } from './js/aos-utils';

// any CSS you import will output into a single css file (app.css in this case)
// AOS : styles dans assets/styles/app.scss (entrée default), pas ici — sinon app.css n'est pas lié dans base.html.twig.
import './images/deco.png';

const pageLoadStart = Date.now();
const minimumLoaderDuration = 0;

// Scripts are at end of <body> — DOM is fully parsed here.
const body = document.body;
const mainLoader = document.querySelector('.main-loader');
let loaderHiding = false;

function runAosInit() {
    scaleDownAosDelaysForMobile();
    const mobile = isMobileAosViewport();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({
        once: true,
        easing: 'ease-out',
        // Mobile : déclenchement plus tôt (offset plus bas), animation plus courte.
        duration: reducedMotion ? 0 : (mobile ? 500 : 1000),
        offset: mobile ? 24 : 120,
        throttleDelay: mobile ? 40 : 99,
        disable: reducedMotion,
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

    mainLoader.addEventListener('transitionend', cleanup, { once: true });
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
        heroImg.addEventListener('load', scheduleHide, { once: true });
        heroImg.addEventListener('error', scheduleHide, { once: true });
    }
}

// Absolute cap: 2500ms in case heroImg is absent or never fires.
window.setTimeout(hideMainLoader, 2500);

$(window).on('load', function() {
    scheduleHide();

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

    const bookFab = document.querySelector('.book-fab');
    const moduleHeight = 145;
    let initialTop = window.innerHeight - moduleHeight;

    const updateReservationState = () => {
        const isPast = window.scrollY >= initialTop;
        reservationModule.classList.toggle('is-sticky', isPast);
        if (bookFab) bookFab.classList.toggle('is-visible', isPast);
    };

    updateReservationState();
    window.addEventListener('scroll', updateReservationState, { passive: true });
    window.addEventListener('resize', () => {
        initialTop = window.innerHeight - moduleHeight;
        updateReservationState();
    });
});
