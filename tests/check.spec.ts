import { test, expect } from '@playwright/test';

test('Open website', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});