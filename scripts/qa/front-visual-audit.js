// Playwright visual + functional audit for Bloody Mary's Bora Bora
// Usage: node scripts/qa/front-visual-audit.js
// Optional: node scripts/qa/front-visual-audit.js sejour   (single page)
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE = 'https://bltes-production.up.railway.app';
const PAGES = [
  { slug: 'home',         url: `${BASE}/fr/`,               isHome: true  },
  { slug: 'sejour',       url: `${BASE}/fr/sejour`,          isHome: false },
  { slug: 'savourer',     url: `${BASE}/fr/savourer`,        isHome: false },
  { slug: 'vivre',        url: `${BASE}/fr/vivre`,           isHome: false },
  { slug: 'notre-histoire', url: `${BASE}/fr/notre-histoire`, isHome: false },
  { slug: 'a-savoir',     url: `${BASE}/fr/a-savoir`,        isHome: false },
];
const VIEWPORTS = [
  { name: 'mobile-375',    width: 375,  height: 812  },
  { name: 'mobile-390',    width: 390,  height: 844  },
  { name: 'mobile-430',    width: 430,  height: 932  },
  { name: 'tablet-768',    width: 768,  height: 1024 },
  { name: 'desktop-1024',  width: 1024, height: 768  },
  { name: 'desktop-1280',  width: 1280, height: 800  },
  { name: 'desktop-1440',  width: 1440, height: 900  },
];
const OUT_DIR = path.join(__dirname, '../../docs/qa/screenshots');

// Allow single-page runs: node front-visual-audit.js sejour
const filterSlug = process.argv[2] || null;
const pagesToRun = filterSlug ? PAGES.filter(p => p.slug === filterSlug) : PAGES;

async function auditPage(browser, pageDef) {
  const pageResults = [];
  const pageDir = path.join(OUT_DIR, pageDef.slug);
  fs.mkdirSync(pageDir, { recursive: true });

  for (const vp of VIEWPORTS) {
    console.log(`\n  [${pageDef.slug}] ${vp.name} (${vp.width}x${vp.height})...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36',
    });
    const page = await context.newPage();

    const issues = [];

    page.on('console', msg => {
      if (msg.type() === 'error') issues.push(`console-error: ${msg.text()}`);
    });
    page.on('requestfailed', req => {
      const url = req.url();
      const isMediaStream = /\.(mp4|webm|ogv|ogg|mov|avi)$/i.test(url);
      if (!isMediaStream) issues.push(`request-failed: ${url}`);
    });

    try {
      await page.goto(pageDef.url, { waitUntil: 'networkidle', timeout: 45000 });
    } catch (e) {
      issues.push(`navigation-timeout: ${e.message}`);
    }

    await page.waitForTimeout(1500);

    const screenshotPath = path.join(pageDir, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    const checks = await page.evaluate((ctx) => {
      const r = {};
      const isHome = ctx.isHome;

      // 1. H1 count
      r.h1Count = document.querySelectorAll('h1').length;

      // 2. Skip link
      const skipLink = document.querySelector('.skip-to-content, [href="#main-content"]');
      r.skipLink = !!skipLink;
      r.skipLinkHref = skipLink ? skipLink.getAttribute('href') : null;

      // 3. Unique IDs
      const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
      const idCounts = {};
      allIds.forEach(id => { idCounts[id] = (idCounts[id] || 0) + 1; });
      r.duplicateIds = Object.keys(idCounts).filter(id => idCounts[id] > 1);

      // 4. Images without alt
      const imgs = Array.from(document.querySelectorAll('img'));
      r.imgsWithoutAlt = imgs.filter(img => !img.hasAttribute('alt')).map(i => i.src?.split('/').pop());

      // 5. Images without explicit dimensions
      const contentImgs = imgs.filter(img => !img.closest('svg') && img.src && !img.src.includes('data:'));
      r.imgsWithoutDimensions = contentImgs
        .filter(img => !img.width && !img.getAttribute('width'))
        .map(i => i.src?.split('/').pop())
        .slice(0, 10);

      // 6. Picture / WebP sources
      r.pictureCount = document.querySelectorAll('picture').length;
      r.webpSourceCount = document.querySelectorAll('source[type="image/webp"]').length;

      // 7. Home-only: reservation module
      if (isHome) {
        r.reservationForm = !!document.querySelector('#hero-reservation-form');
        r.reservationCheckin = !!document.querySelector('#reservation-checkin');
        r.reservationCheckout = !!document.querySelector('#reservation-checkout');
        const dateItems = document.querySelectorAll('[data-reservation-field]');
        r.dateItemsTabindex = Array.from(dateItems).every(el => {
          const tag = el.tagName.toLowerCase();
          return tag === 'button' || el.getAttribute('tabindex') === '0' || el.tabIndex >= 0;
        });
        const fab = document.querySelector('.book-fab');
        r.fabDisplay = fab ? window.getComputedStyle(fab).display : null;
      }

      // 8. Horizontal overflow detection — use documentElement so that
      // intentional overflow-x:hidden on <html> (required for AOS) does not
      // produce false positives.  body.scrollWidth is the raw layout width and
      // will always be large on pages with Slick carousels / AOS offsets.
      const docScrollW = document.documentElement.scrollWidth;
      const docClientW = document.documentElement.clientWidth;
      r.horizontalOverflow = docScrollW > docClientW + 2;
      r.bodyScrollWidth = docScrollW;
      r.viewportWidth = docClientW;

      // 9. Buttons with no accessible label
      const buttons = Array.from(document.querySelectorAll('button'));
      r.unlabeledButtons = buttons
        .filter(b => !b.textContent.trim() && !b.getAttribute('aria-label') && !b.getAttribute('aria-labelledby'))
        .map(b => b.className.slice(0, 50));

      // 10. Links with no accessible name
      const links = Array.from(document.querySelectorAll('a[href]'));
      r.unlabeledLinks = links
        .filter(a => !a.textContent.trim() && !a.getAttribute('aria-label') && !a.querySelector('img[alt]'))
        .map(a => a.href?.split('/').slice(-2).join('/'))
        .slice(0, 5);

      // 11. Heading hierarchy — exclude aria-hidden containers
      const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6,[role="heading"]'))
        .filter(h => !h.closest('[aria-hidden="true"]'))
        .map(h => {
          const level = h.tagName.startsWith('H') ? parseInt(h.tagName[1]) : parseInt(h.getAttribute('aria-level') || '2');
          return { level, text: h.textContent.trim().slice(0, 50) };
        });
      r.headings = headings;

      // 12. Sections with aria-labelledby / aria-label
      const sections = Array.from(document.querySelectorAll('section'));
      r.sectionCount = sections.length;
      r.sectionsWithLabel = sections.filter(s =>
        s.hasAttribute('aria-labelledby') || s.hasAttribute('aria-label') || s.getAttribute('aria-hidden') === 'true'
      ).length;

      // 13. Meta: JSON-LD, canonical, lang
      r.jsonLd = !!document.querySelector('script[type="application/ld+json"]');
      const canonical = document.querySelector('link[rel="canonical"]');
      r.canonical = canonical ? canonical.href : null;
      r.htmlLang = document.documentElement.getAttribute('lang');

      // 14. Page title non-empty
      r.title = document.title;

      return r;
    }, { isHome: pageDef.isHome });

    if (checks.horizontalOverflow) {
      issues.push(`horizontal-overflow: body=${checks.bodyScrollWidth}px, viewport=${checks.viewportWidth}px`);
    }
    if (checks.imgsWithoutAlt.length > 0) {
      issues.push(`imgs-no-alt: ${checks.imgsWithoutAlt.join(', ')}`);
    }
    if (checks.imgsWithoutDimensions.length > 0) {
      issues.push(`imgs-no-dimensions: ${checks.imgsWithoutDimensions.join(', ')}`);
    }
    if (checks.unlabeledButtons.length > 0) {
      issues.push(`unlabeled-buttons: ${checks.unlabeledButtons.join(', ')}`);
    }
    if (checks.unlabeledLinks.length > 0) {
      issues.push(`unlabeled-links: ${checks.unlabeledLinks.join(', ')}`);
    }
    if (checks.duplicateIds.length > 0) {
      issues.push(`duplicate-ids: ${checks.duplicateIds.join(', ')}`);
    }
    if (checks.h1Count !== 1) {
      issues.push(`h1-count: ${checks.h1Count} (expected 1)`);
    }

    pageResults.push({
      page: pageDef.slug,
      url: pageDef.url,
      viewport: vp.name,
      size: `${vp.width}x${vp.height}`,
      screenshot: `${pageDef.slug}/${vp.name}.png`,
      issues,
      checks,
    });

    await context.close();

    const realIssues = issues.filter(i => !i.startsWith('request-failed:') || !i.includes('video'));
    const statusIcon = realIssues.length === 0 ? '✓' : '✗';
    console.log(`    ${statusIcon} issues: ${issues.length} | picture: ${checks.pictureCount} | webp: ${checks.webpSourceCount} | h1: ${checks.h1Count} | overflow: ${checks.horizontalOverflow ? 'YES' : 'no'}`);
    if (issues.length > 0) issues.forEach(i => console.log(`      - ${i}`));
  }

  return pageResults;
}

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const allResults = [];

  for (const pageDef of pagesToRun) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`PAGE: ${pageDef.slug.toUpperCase()} — ${pageDef.url}`);
    console.log('='.repeat(60));
    const pageResults = await auditPage(browser, pageDef);
    allResults.push(...pageResults);
  }

  await browser.close();

  // Write JSON report
  const reportPath = path.join(__dirname, '../../docs/qa/playwright-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(allResults, null, 2));

  // Console summary — grouped by page
  console.log('\n' + '='.repeat(60));
  console.log('AUDIT SUMMARY');
  console.log('='.repeat(60));

  const pagesSeen = [...new Set(allResults.map(r => r.page))];
  for (const slug of pagesSeen) {
    const rows = allResults.filter(r => r.page === slug);
    const withIssues = rows.filter(r => r.issues.length > 0);
    const overflowVps = rows.filter(r => r.checks.horizontalOverflow).map(r => r.viewport);
    const h1ok = rows.every(r => r.checks.h1Count === 1);
    const pictureAvg = Math.round(rows.reduce((s, r) => s + r.checks.pictureCount, 0) / rows.length);
    console.log(`\n  ${slug}:`);
    console.log(`    viewports: ${rows.length} | fail: ${withIssues.length} | h1: ${h1ok ? 'ok' : 'PROBLEM'} | picture avg: ${pictureAvg}`);
    if (overflowVps.length) console.log(`    overflow: ${overflowVps.join(', ')}`);
    if (withIssues.length) {
      const uniqueIssues = [...new Set(withIssues.flatMap(r => r.issues))];
      uniqueIssues.forEach(i => console.log(`    ✗ ${i}`));
    } else {
      console.log('    ✓ no issues');
    }
  }

  const totalFail = allResults.filter(r => r.issues.length > 0).length;
  const totalPass = allResults.filter(r => r.issues.length === 0).length;
  console.log(`\nTotal: ${allResults.length} runs | Pass: ${totalPass} | Fail: ${totalFail}`);
  console.log(`Report: ${reportPath}`);
}

run().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
