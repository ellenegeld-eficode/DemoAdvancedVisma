const { test, expect } = require('@playwright/test');

async function pressButtons(page, labels) {
  for (const label of labels) {
    await page.getByRole('button', { name: label, exact: true }).click();
  }
}

test.beforeEach(async ({ page }) => {
  await page.goto('/calculator.html');
});

test('enters numbers into the display', async ({ page }) => {
  await pressButtons(page, ['7', '8', '9']);

  await expect(page.locator('.display')).toHaveValue('789');
});

test('adds two numbers', async ({ page }) => {
  await pressButtons(page, ['2', '+', '3', '=']);

  await expect(page.locator('.display')).toHaveValue('5');
});

test('clears the display', async ({ page }) => {
  await pressButtons(page, ['9', 'C']);

  await expect(page.locator('.display')).toHaveValue('');
});