#!/usr/bin/env node
/**
 * Lighthouse desktop audit — 6 pages
 * Usage: node scripts/qa/lighthouse-desktop-audit.js [page-slug]
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://bltes-production.up.railway.app';

const PAGES = [
    { slug: 'home',           url: `${BASE_URL}/fr` },
    { slug: 'sejour',         url: `${BASE_URL}/fr/sejour` },
    { slug: 'savourer',       url: `${BASE_URL}/fr/savourer` },
    { slug: 'vivre',          url: `${BASE_URL}/fr/vivre` },
    { slug: 'notre-histoire', url: `${BASE_URL}/fr/notre-histoire` },
    { slug: 'a-savoir',       url: `${BASE_URL}/fr/a-savoir` },
];

const OUT_DIR = path.resolve(__dirname, '../../docs/qa/lighthouse');
fs.mkdirSync(OUT_DIR, { recursive: true });

const filter = process.argv[2];
const pages = filter ? PAGES.filter(p => p.slug.includes(filter)) : PAGES;
const results = [];

for (const page of pages) {
    const outFile = path.join(OUT_DIR, `${page.slug}-desktop.json`);
    console.log(`\n→ Lighthouse desktop: ${page.slug}`);
    try {
        execSync(
            `npx lighthouse "${page.url}" \
                --output=json \
                --output-path="${outFile}" \
                --preset=desktop \
                --chrome-flags="--headless --no-sandbox" \
                --quiet`,
            { stdio: 'inherit', timeout: 120000 }
        );
        const raw = JSON.parse(fs.readFileSync(outFile, 'utf8'));
        const cats = raw.categories;
        const perf = Math.round(cats.performance.score * 100);
        const a11y = Math.round(cats.accessibility.score * 100);
        const bp   = Math.round(cats['best-practices'].score * 100);
        const seo  = Math.round(cats.seo.score * 100);
        const lcp  = raw.audits['largest-contentful-paint'].numericValue;
        const cls  = raw.audits['cumulative-layout-shift'].numericValue;
        const tbt  = raw.audits['total-blocking-time'].numericValue;
        results.push({ slug: page.slug, perf, a11y, bp, seo, lcp: (lcp/1000).toFixed(2), cls: cls.toFixed(3), tbt: Math.round(tbt) });
        console.log(`   Perf=${perf} A11y=${a11y} BP=${bp} SEO=${seo} LCP=${(lcp/1000).toFixed(2)}s CLS=${cls.toFixed(3)} TBT=${Math.round(tbt)}ms`);
    } catch (err) {
        console.error(`   ERROR: ${err.message}`);
        results.push({ slug: page.slug, perf: 'ERR', a11y: '-', bp: '-', seo: '-', lcp: '-', cls: '-', tbt: '-' });
    }
}

console.log('\n\n=== LIGHTHOUSE DESKTOP SUMMARY ===');
console.log('| Page | Perf | A11y | BP | SEO | LCP | CLS | TBT |');
console.log('|------|------|------|----|-----|-----|-----|-----|');
for (const r of results) {
    console.log(`| ${r.slug} | **${r.perf}** | ${r.a11y} | ${r.bp} | ${r.seo} | ${r.lcp} s | ${r.cls} | ${r.tbt} ms |`);
}
