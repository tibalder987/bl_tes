// Playwright visual + functional audit for Bloody Mary's Bora Bora
// Usage: node scripts/qa/front-visual-audit.js
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const URL = 'https://bltes-production.up.railway.app/fr/';
const VIEWPORTS = [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1024', width: 1024, height: 768 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];
const OUT_DIR = path.join(__dirname, '../../docs/qa/screenshots');

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const results = [];

  for (const vp of VIEWPORTS) {
    console.log(`\nCapturing ${vp.name} (${vp.width}x${vp.height})...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36',
    });
    const page = await context.newPage();

    const issues = [];

    // Collect console errors
    page.on('console', msg => {
      if (msg.type() === 'error') issues.push(`console-error: ${msg.text()}`);
    });
    // Collect failed requests (ignore video/media streams that timeout normally)
    page.on('requestfailed', req => {
      const url = req.url();
      const isMediaStream = /\.(mp4|webm|ogv|ogg|mov|avi)$/i.test(url);
      if (!isMediaStream) issues.push(`request-failed: ${url}`);
    });

    try {
      await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
    } catch (e) {
      issues.push(`navigation-timeout: ${e.message}`);
    }

    // Wait for AOS / JS to settle
    await page.waitForTimeout(1500);

    // Full-page screenshot
    const screenshotPath = path.join(OUT_DIR, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    // === Automated checks ===
    const checks = await page.evaluate((viewportWidth) => {
      const r = {};

      // 1. H1 count
      r.h1Count = document.querySelectorAll('h1').length;

      // 2. Skip link exists and is correct
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
      r.imgsWithoutDimensions = contentImgs.filter(img => !img.width && !img.getAttribute('width')).map(i => i.src?.split('/').pop()).slice(0, 5);

      // 6. Picture / WebP sources
      r.pictureCount = document.querySelectorAll('picture').length;
      r.webpSourceCount = document.querySelectorAll('source[type="image/webp"]').length;

      // 7. Reservation module present
      r.reservationForm = !!document.querySelector('#hero-reservation-form');
      r.reservationCheckin = !!document.querySelector('#reservation-checkin');
      r.reservationCheckout = !!document.querySelector('#reservation-checkout');

      // 8. Interactive reservation items have tabindex
      const dateItems = document.querySelectorAll('[data-reservation-field]');
      r.dateItemsTabindex = Array.from(dateItems).every(el => {
        const tag = el.tagName.toLowerCase();
        return tag === 'button' || el.getAttribute('tabindex') === '0' || el.tabIndex >= 0;
      });

      // 9. Guest button type
      const guestBtn = document.querySelector('[data-reservation-field="guests"]');
      r.guestButtonType = guestBtn ? guestBtn.tagName.toLowerCase() + (guestBtn.getAttribute('type') ? '[type=' + guestBtn.getAttribute('type') + ']' : '') : null;

      // 10. FAB visible on mobile
      const fab = document.querySelector('.book-fab');
      if (fab) {
        const style = window.getComputedStyle(fab);
        r.fabDisplay = style.display;
      } else {
        r.fabDisplay = null;
      }

      // 11. Horizontal overflow detection
      const bodyWidth = document.body.scrollWidth;
      const viewWidth = window.innerWidth;
      r.horizontalOverflow = bodyWidth > viewWidth + 2;
      r.bodyScrollWidth = bodyWidth;
      r.viewportWidth = viewWidth;

      // 12. Buttons have accessible labels
      const buttons = Array.from(document.querySelectorAll('button'));
      r.unlabeledButtons = buttons
        .filter(b => !b.textContent.trim() && !b.getAttribute('aria-label') && !b.getAttribute('aria-labelledby'))
        .map(b => b.className.slice(0, 50));

      // 13. Links have accessible names
      const links = Array.from(document.querySelectorAll('a[href]'));
      r.unlabeledLinks = links
        .filter(a => !a.textContent.trim() && !a.getAttribute('aria-label') && !a.querySelector('img[alt]'))
        .map(a => a.href?.split('/').slice(-2).join('/'))
        .slice(0, 5);

      // 14. Heading hierarchy (no skipped levels) — exclude aria-hidden containers
      const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6,[role="heading"]'))
        .filter(h => !h.closest('[aria-hidden="true"]'))
        .map(h => {
          const level = h.tagName.startsWith('H') ? parseInt(h.tagName[1]) : parseInt(h.getAttribute('aria-level') || '2');
          return { level, text: h.textContent.trim().slice(0, 40) };
        });
      r.headings = headings;

      // 15. JSON-LD present
      r.jsonLd = !!document.querySelector('script[type="application/ld+json"]');

      // 16. Canonical link
      const canonical = document.querySelector('link[rel="canonical"]');
      r.canonical = canonical ? canonical.href : null;

      // 17. lang attribute on html
      r.htmlLang = document.documentElement.getAttribute('lang');

      return r;
    }, vp.width);

    // Report any overflow
    if (checks.horizontalOverflow) {
      issues.push(`horizontal-overflow: body=${checks.bodyScrollWidth}px, viewport=${checks.viewportWidth}px`);
    }
    if (checks.imgsWithoutAlt.length > 0) {
      issues.push(`imgs-no-alt: ${checks.imgsWithoutAlt.join(', ')}`);
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

    results.push({
      viewport: vp.name,
      size: `${vp.width}x${vp.height}`,
      screenshot: path.basename(screenshotPath),
      issues,
      checks,
    });

    await context.close();

    const statusIcon = issues.filter(i => !i.includes('request-failed: ') || !i.includes('video')).length === 0 ? '✓' : issues.length === 1 && issues[0].includes('video') ? '≈' : '✗';
    console.log(`  ${statusIcon} issues: ${issues.length} | picture: ${checks.pictureCount} | webp: ${checks.webpSourceCount} | h1: ${checks.h1Count} | overflow: ${checks.horizontalOverflow ? 'YES' : 'no'}`);
    if (issues.length > 0) issues.forEach(i => console.log(`    - ${i}`));
  }

  await browser.close();

  // Write JSON report
  const reportPath = path.join(__dirname, '../../docs/qa/playwright-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  // Console summary
  console.log('\n=== AUDIT SUMMARY ===');
  const videoOnlyIssue = r => r.issues.length === 1 && r.issues[0].includes('video');
  const passed = results.filter(r => r.issues.length === 0).length;
  const videoOnly = results.filter(videoOnlyIssue).length;
  const failed = results.filter(r => r.issues.length > 0 && !videoOnlyIssue(r)).length;
  console.log(`Viewports: ${VIEWPORTS.length} | Pass: ${passed} | Video-only: ${videoOnly} | Fail: ${failed}`);
  console.log('Horizontal overflow: ' + (results.some(r => r.checks.horizontalOverflow) ? 'DETECTED' : 'none'));
  console.log('H1 unique: ' + (results.every(r => r.checks.h1Count === 1) ? 'yes' : 'NO'));
  console.log('Skip link: ' + (results.every(r => r.checks.skipLink) ? 'present' : 'MISSING'));
  console.log('JSON-LD: ' + (results[0].checks.jsonLd ? 'present' : 'missing'));
  console.log('HTML lang: ' + results[0].checks.htmlLang);
  console.log('Heading hierarchy:');
  if (results[0].checks.headings) {
    results[0].checks.headings.forEach(h => console.log(`  H${h.level}: ${h.text}`));
  }
  console.log(`\nReport: ${reportPath}`);
}

run().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
