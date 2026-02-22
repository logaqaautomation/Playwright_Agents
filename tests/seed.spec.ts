import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    // generate code here.
    // 1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Click on the Username field and type 'student'
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('student');

    // 3. Click on the Password field and type 'Password123'
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');

    // 4. Click the Submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // 5. Verify success message and logout button
    await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  });
});
