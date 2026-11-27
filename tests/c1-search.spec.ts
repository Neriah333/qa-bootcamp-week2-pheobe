import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/searchpages';

test('C1 Search by name', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.open();
    await searchPage.searchFor('pliers');

    
    await expect(searchPage.productNames).toHaveCount(4);

    
    for (let i = 0; i < await searchPage.productNames.count(); i++) {
        await expect(searchPage.productNames.nth(i))
            .toContainText(/pliers/i);
    }
});