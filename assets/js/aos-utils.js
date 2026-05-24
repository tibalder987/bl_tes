const MOBILE_AOS_MAX_WIDTH = 991;

export function isMobileAosViewport() {
    return window.matchMedia(`(max-width: ${MOBILE_AOS_MAX_WIDTH}px)`).matches;
}

/**
 * Sur mobile, les data-aos-delay (200–600 ms) allongent trop la séquence d'apparition.
 * On les réduit avant AOS.init pour garder un léger décalage sans empiler les attentes.
 * Appelé une seule fois, avant AOS.init, après que le DOM est complet.
 */
export function scaleDownAosDelaysForMobile() {
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
