import { test, expect } from '@playwright/test';

test('Invalid login is rejected', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');

    const emailInput = page.getByLabel('Email address *');
    const passwordInput = page.getByLabel('Password *');

    await emailInput.fill('invalid@example.com');
    await passwordInput.fill('WrongPassword123');

    await page.getByRole('button', { name: 'Login' }).click();

});