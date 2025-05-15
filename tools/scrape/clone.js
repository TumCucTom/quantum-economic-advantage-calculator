const playwright = require('playwright');
const fs = require('fs');
const path = require('path');
const beautify = require('js-beautify').js;
const beautifyHtml = require('js-beautify').html;
const beautifyCss = require('js-beautify').css;

(async () => {
  const baseUrl = 'https://quantum-economic-advantage.netlify.app';
  const outputDir = path.resolve(__dirname, 'site');

  await fs.promises.mkdir(outputDir, { recursive: true });

  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  async function ensureAllImagesLoaded(page) {
    await page.evaluate(async () => {
      const selectors = Array.from(document.images).map(img => {
        if (!img.complete || img.naturalWidth === 0) {
          return new Promise(resolve => {
            img.onload = img.onerror = resolve;
          });
        }
      });
      await Promise.all(selectors);
    });
  }

  // Save assets
  context.on('response', async (response) => {
    try {
      const url = response.url();
      const request = response.request();
      const resourceType = request.resourceType();
      const contentType = response.headers()['content-type'] || '';
      const isJson = contentType.includes('application/json');

      if (!url.startsWith(baseUrl)) return;

      if (
          ['document', 'stylesheet', 'script', 'image', 'font'].includes(resourceType) ||
          (['xhr', 'fetch'].includes(resourceType) && isJson)
      ) {
        const buffer = await response.body();

        const urlObj = new URL(url);
        let relativePath = urlObj.pathname;
        if (relativePath.endsWith('/')) {
          relativePath += isJson ? 'index.json' : 'index.html';
        } else if (isJson && !relativePath.endsWith('.json')) {
          relativePath += '.json';
        }

        if (urlObj.search) {
          const safeQuery = urlObj.search.replace(/[?&=]/g, '_').slice(0, 100);
          relativePath = relativePath.replace(/\\/g, '/').replace(/\/$/, '') + safeQuery + (isJson ? '.json' : '');
        }

        const localPath = path.join(outputDir, relativePath);
        await fs.promises.mkdir(path.dirname(localPath), { recursive: true });
        await fs.promises.writeFile(localPath, buffer);
        console.log(`Saved asset: ${localPath}`);
      }
    } catch (err) {
      console.error(`Failed to save resource: ${response.url()}`, err);
    }
  });

  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Define pages to capture by visible text of nav links
  const navLinks = [
    { text: 'How does it work?', filename: 'how-does-it-work.html' },
    { text: 'Team', filename: 'team.html' },
    { text: 'Documentation', filename: 'documentation.html' }
  ];

  for (const { text, filename } of navLinks) {
    try {
      console.log(`Navigating to section: ${text}`);
      await page.click(`text="${text}"`, { timeout: 5000 });
      await page.waitForTimeout(2000); // Wait for scroll/render

      if (text === 'Team') {
        await ensureAllImagesLoaded(page); // Wait for all photos to load
      }

      const html = await page.content();
      await fs.promises.writeFile(path.join(outputDir, filename), html);
      console.log(`Saved ${filename}`);
    } catch (err) {
      console.error(`Could not navigate to "${text}":`, err);
    }
  }

  // Beautify function
  async function beautifyFilesInDir(dir) {
    const files = await fs.promises.readdir(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = await fs.promises.stat(fullPath);

      if (stat.isDirectory()) {
        await beautifyFilesInDir(fullPath);
      } else if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
        const content = await fs.promises.readFile(fullPath, 'utf8');
        let beautified;
        if (file.endsWith('.js')) beautified = beautify(content, { indent_size: 2 });
        else if (file.endsWith('.css')) beautified = beautifyCss(content, { indent_size: 2 });
        else beautified = beautifyHtml(content, { indent_size: 2 });

        await fs.promises.writeFile(fullPath, beautified);
        console.log(`Beautified: ${fullPath}`);
      }
    }
  }

  await beautifyFilesInDir(outputDir);
  await browser.close();
  console.log(`Finished scraping and beautifying to ${outputDir}`);
})();
