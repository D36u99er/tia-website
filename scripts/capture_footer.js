const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  try {
    const baseUrl = 'file://' + path.resolve(__dirname, '..', 'index.html');
    const langs = ['de', 'en', 'zh'];
    const outDir = path.resolve(__dirname, '..', 'previews');
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    for (const lang of langs) {
      console.log(`[footer] capturing ${lang}`);
      const browser = await chromium.launch();
      const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
      await context.addInitScript((langCode) => {
        window.localStorage.setItem('tia-lang', langCode);
      }, lang);
      const page = await context.newPage();
      await page.goto(baseUrl, { waitUntil: 'load' });
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(750);
      const footer = page.locator('.site-footer');
      await footer.scrollIntoViewIfNeeded();
      await footer.waitFor({ state: 'visible' });
      const targetPath = path.join(outDir, `footer-${lang}.png`);
      await footer.screenshot({ path: targetPath });
      await browser.close();
      console.log(`[footer] saved ${targetPath}`);
    }

    console.log('[footer] all screenshots captured');
  } catch (error) {
    console.error('[footer] capture failed', error);
    process.exit(1);
  }
})();
