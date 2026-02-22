// spec: specs/tab-validation-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Tab Validation Tests', () => {
  test('Validate All Tabs Load Correctly', async ({ page }, testInfo) => {
    // 1. Login successfully using the seed script
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

    // 2. Click on the HOME tab
    await page.getByRole('link', { name: 'Home' }).click();
    // expect: Page displays "Hello"
    await expect(page.getByRole('heading', { name: 'Hello', level: 1 })).toBeVisible();
    const homeScreenshot = await page.screenshot();
    await testInfo.attach('Home Tab', { body: homeScreenshot, contentType: 'image/png' });

    // 3. Click on the PRACTICE tab
    await page.getByRole('link', { name: 'Practice', exact: true }).click();
    // expect: Page displays "Practice"
    await expect(page.getByRole('heading', { name: 'Practice', level: 1 })).toBeVisible();
    const practiceScreenshot = await page.screenshot();
    await testInfo.attach('Practice Tab', { body: practiceScreenshot, contentType: 'image/png' });

    // 4. Click on the COURSES tab
    await page.getByRole('link', { name: 'Courses' }).click();
    // expect: Page displays "Courses"
    await expect(page.getByRole('heading', { name: 'Courses', level: 1 })).toBeVisible();
    const coursesScreenshot = await page.screenshot();
    await testInfo.attach('Courses Tab', { body: coursesScreenshot, contentType: 'image/png' });

    // 5. Click on the BLOG tab
    await page.getByRole('link', { name: 'Blog', exact: true }).click();
    // expect: Page contains "Unlock your future"
    await expect(page.getByRole('heading', { name: /Unlock Your Future/i }).first()).toBeVisible();
    const blogScreenshot = await page.screenshot();
    await testInfo.attach('Blog Tab', { body: blogScreenshot, contentType: 'image/png' });

    // 6. Click on the CONTACT tab
    await page.getByRole('link', { name: 'Contact' }).click();
    // expect: Page displays "Contact"
    await expect(page.getByRole('heading', { name: 'Contact', level: 1 })).toBeVisible();
    const contactScreenshot = await page.screenshot();
    await testInfo.attach('Contact Tab', { body: contactScreenshot, contentType: 'image/png' });
  });
});
