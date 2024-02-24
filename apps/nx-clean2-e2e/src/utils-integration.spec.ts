import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  expect(page.locator('p').getByText(/Shared utils/)).toBeTruthy();
});
