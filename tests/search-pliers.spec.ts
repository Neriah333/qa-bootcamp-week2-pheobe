import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/searchpages';

test('Search for pliers and display matching products', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.open();
    await searchPage.searchFor('pliers');

    await expect(searchPage.pliersResult).toBeVisible();
});