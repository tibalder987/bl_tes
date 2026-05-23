/**
 * Ajoute la classe is-animated aux éléments .have-animation lorsqu'ils entrent dans la zone visible.
 * La classe n'est jamais retirée une fois ajoutée.
 *
 * Offset (marge intérieure du bas du viewport, en px) :
 * - attribut data-animation-offset sur l'élément
 * - sinon variable CSS héritée --have-animation-offset (ex. sur body.homepage)
 * - sinon 0
 */
export function initHaveAnimation() {
    const nodes = document.querySelectorAll('.have-animation');
    if (!nodes.length) {
        return;
    }

    if (typeof IntersectionObserver === 'undefined') {
        nodes.forEach((el) => el.classList.add('is-animated'));
        return;
    }

    const parseOffsetPx = (el) => {
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

    nodes.forEach((el) => {
        if (el.classList.contains('is-animated')) {
            return;
        }

        const offsetPx = parseOffsetPx(el);
        const rootMargin = `0px 0px -${offsetPx}px 0px`;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-animated');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin,
                threshold: 0,
            }
        );

        observer.observe(el);
    });
}
