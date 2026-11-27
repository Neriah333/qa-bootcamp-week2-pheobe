import { test, expect } from '@playwright/test';
import { pathToFileURL } from 'node:url';

test('Unfixed drill - Save message', async ({ page }) => {
    const fileUrl = pathToFileURL(
        `${__dirname}/drill/index.html`
    ).href;

    await page.goto(fileUrl);

    await page.locator('#save').click();

    const status = page.locator('#status');

   // Wait until the expected message appears
   await expect(status).toHaveText('Saved');
});