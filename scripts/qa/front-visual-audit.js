// Playwright visual audit for Bloody Mary's Bora Bora
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
    console.log(`Capturing ${vp.name} (${vp.width}x${vp.height})...`);
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
    // Collect failed requests
    page.on('requestfailed', req => {
      issues.push(`request-failed: ${req.url()}`);
    });

    try {
      await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
    } catch (e) {
      issues.push(`navigation-timeout: ${e.message}`);
    }

    // Wait for AOS animations to settle
    await page.waitForTimeout(1200);

    // Full-page screenshot
    const screenshotPath = path.join(OUT_DIR, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    // Accessibility checks
    const a11y = await page.evaluate(() => {
      const checks = {};

      // skip-link present
      checks.skipLink = !!document.querySelector('.skip-to-content');

      // lang attribute on html
      checks.htmlLang = document.documentElement.getAttribute('lang') || null;

      // All images have alt text
      const imgs = Array.from(document.querySelectorAll('img'));
      const imgsWithoutAlt = imgs.filter(img => !img.hasAttribute('alt')).map(i => i.src);
      checks.imgsWithoutAlt = imgsWithoutAlt;

      // Buttons have accessible label
      const btns = Array.from(document.querySelectorAll('button'));
      const btnsWithoutLabel = btns.filter(b => !b.textContent.trim() && !b.getAttribute('aria-label')).map(b => b.className);
      checks.btnsWithoutLabel = btnsWithoutLabel;

      // Headings hierarchy
      const h1s = document.querySelectorAll('h1');
      checks.h1Count = h1s.length;

      // Reservation form
      checks.reservationForm = !!document.querySelector('#hero-reservation-form');
      checks.checkinInput = !!document.querySelector('#reservation-checkin');
      checks.checkoutInput = !!document.querySelector('#reservation-checkout');

      // WebP images actually loaded
      const sources = Array.from(document.querySelectorAll('source[type="image/webp"]'));
      checks.webpSourceCount = sources.length;

      // picture elements
      checks.pictureCount = document.querySelectorAll('picture').length;

      return checks;
    });

    // Check font awesome loaded
    const faLoaded = await page.evaluate(() => {
      const icons = document.querySelectorAll('.fa-arrow-right, .fa-calendar, .fa-user-group');
      if (!icons.length) return 'no-fa-icons-found';
      const style = window.getComputedStyle(icons[0], '::before');
      return style.fontFamily || 'unknown';
    });

    results.push({
      viewport: vp.name,
      size: `${vp.width}x${vp.height}`,
      screenshot: screenshotPath,
      issues,
      a11y,
      faLoaded,
    });

    await context.close();
    console.log(`  → screenshot saved: ${path.basename(screenshotPath)}`);
    console.log(`  → issues: ${issues.length}, webp sources: ${a11y.webpSourceCount}, pictures: ${a11y.pictureCount}`);
  }

  await browser.close();

  // Write JSON report
  const reportPath = path.join(__dirname, '../../docs/qa/playwright-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\nReport saved: ${reportPath}`);

  // Summary
  console.log('\n=== AUDIT SUMMARY ===');
  for (const r of results) {
    const status = r.issues.length === 0 ? '✓' : `✗ (${r.issues.length} issues)`;
    console.log(`${r.viewport}: ${status} | webp sources: ${r.a11y.webpSourceCount} | pictures: ${r.a11y.pictureCount} | h1: ${r.a11y.h1Count}`);
    if (r.issues.length > 0) r.issues.forEach(i => console.log(`  - ${i}`));
  }
}

run().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
