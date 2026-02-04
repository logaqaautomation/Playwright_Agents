// spec: specs/login-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Negative Login Tests - Invalid Password', () => {
  test('Login with invalid password', async ({ page }) => {
    // 1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Click on the Username field and type 'student'
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('student');

    // 3. Click on the Password field and type 'incorrectPassword'
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('incorrectPassword');

    // 4. Click the Submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // 5. Verify error message visibility
    await expect(page.locator('#error')).toBeVisible();
    await expect(page.locator('#error')).toContainText('Your password is invalid!');
    
    await page.waitForTimeout(5000);
  });
});
