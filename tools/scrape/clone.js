const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  // Base URL of the site to clone
  const baseUrl = 'https://quantum-economic-advantage.netlify.app';
  // Directory where files will be saved
  const outputDir = path.resolve(__dirname, 'downloaded_site');

  // Make sure output directory exists
  await fs.promises.mkdir(outputDir, { recursive: true });

  // Launch browser
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Intercept all responses and save assets
  context.on('response', async (response) => {
    try {
      const url = response.url();
      const request = response.request();
      const resourceType = request.resourceType();

      const contentType = response.headers()['content-type'] || '';
      const isJson = contentType.includes('application/json');

      // Only capture API calls or assets from base URL
      if (!url.startsWith(baseUrl)) return;

      if (
          ['document', 'stylesheet', 'script', 'image', 'font'].includes(resourceType) ||
          (['xhr', 'fetch'].includes(resourceType) && isJson)
      ) {
        const buffer = await response.body();

        // Clean URL and create a valid file path
        const urlObj = new URL(url);
        let relativePath = urlObj.pathname;
        if (relativePath.endsWith('/')) {
          relativePath += isJson ? 'index.json' : 'index.html';
        } else if (isJson && !relativePath.endsWith('.json')) {
          relativePath += '.json';
        }

        // Optional: include query parameters in filename
        if (urlObj.search) {
          const safeQuery = urlObj.search.replace(/[?&=]/g, '_').slice(0, 100);
          relativePath = relativePath.replace(/\\/g, '/').replace(/\/$/, '') + safeQuery + (isJson ? '.json' : '');
        }

        const localPath = path.join(outputDir, relativePath);
        await fs.promises.mkdir(path.dirname(localPath), { recursive: true });
        await fs.promises.writeFile(localPath, buffer);
        console.log(`Saved: ${localPath}`);
      }
    } catch (err) {
      console.error(`Failed to save resource: ${response.url()}`, err);
    }
  });


  // Navigate and wait for network to be idle
  await page.goto(baseUrl, { waitUntil: 'networkidle' });

  // Optionally, add interactions here (scroll, click) to trigger lazy-loaded assets

  await browser.close();
  console.log(`Site cloned to ${outputDir}`);
})();
