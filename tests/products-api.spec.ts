import { test, expect } from '@playwright/test';

test('GET products API returns products successfully', async ({ request }) => {
    const response = await request.get(
        'https://api.practicesoftwaretesting.com/products'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.total).toBeGreaterThan(0);
});