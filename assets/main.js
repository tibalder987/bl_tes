import { initHaveAnimation } from './have-animation';

$(function($) {
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
            responsive: [
                {
                    breakpoint: 1400,
                    settings: { slidesToShow: 4, slidesToScroll: 1 },
                },
                {
                    breakpoint: 1080,
                    settings: { slidesToShow: 3, slidesToScroll: 1 },
                },
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 1, slidesToScroll: 1 },
                },
            ],
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
            responsive: [
                { breakpoint: 1199, settings: { slidesToShow: 3 } },
                { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                        dots: false,
                        centerMode: true,
                        centerPadding: '100px',
                    },
                },
            ],
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
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                        dots: false,
                        centerMode: true,
                        centerPadding: '100px',
                    },
                },
            ],
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
            responsive: [
                { breakpoint: 1199, settings: { slidesToShow: 3, arrows: false } },
                { breakpoint: 991, settings: { slidesToShow: 2, arrows: false } },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        infinite: false,
                        centerMode: true,
                        centerPadding: '100px',
                    },
                },
            ],
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
            pauseOnHover: false,
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

    initHaveAnimation();

    // Header drawer — open / close / backdrop / keyboard / scroll-spy FAB
    const siteHeader = document.getElementById('site-header');
    const headerMenuToggle = document.getElementById('header-menu-toggle');
    const headerMenuFab = document.getElementById('header-menu-fab');
    const headerDrawerBackdrop = document.querySelector('.js-header-drawer-backdrop');
    const headerDrawer = document.querySelector('.js-header-drawer');
    /** Prevents immediate re-close on iOS double-tap of burger button. */
    let headerMenuIgnoreCloseUntil = 0;

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
        return (btn && btn.getAttribute(attr)) || (btn && btn.getAttribute('aria-label')) || '';
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
    window.addEventListener('scroll', updateHeaderMenuFabVisibility, { passive: true });
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
