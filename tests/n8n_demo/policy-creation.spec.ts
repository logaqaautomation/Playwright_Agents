// spec: N8N Demo - Policy Creation Test
// Automated test to create a policy and capture policy number and premium amount
// Execution speed: 2-second delay before each click or page navigation

import { test, expect } from '@playwright/test';

test.describe('N8N Demo - Policy Creation', () => {
  test('Create Policy and Capture Details', async ({ page }) => {
    // Increase timeout to 120 seconds for slow execution with delays
    test.setTimeout(120000);
    
    // 1. Navigate to https://loga-qa-auatomation.onrender.com/
    await page.goto('https://loga-qa-auatomation.onrender.com/');
    await expect(page).toHaveTitle('Loga QA Automation');
    await page.waitForTimeout(2000);
    
    // 2. Enter username logaautomation in the User ID field
    await page.getByRole('textbox', { name: 'User ID' }).fill('logaautomation');
    await page.waitForTimeout(2000);
    
    // 3. Enter password test123 in the Password field
    await page.getByRole('textbox', { name: 'Password' }).fill('test123');
    await page.waitForTimeout(2000);
    
    // 4. Click the Login button
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/home');
    await page.waitForTimeout(2000);
    
    // 5. Click on Start Practice App button
    await page.getByRole('link', { name: 'Start Practice App' }).click();
    await page.waitForURL('**/practice');
    await page.waitForTimeout(2000);
    
    // 6. Step 1: Enter Full Name
    await page.getByRole('textbox', { name: 'Full Name:' }).fill('John Doe');
    await page.waitForTimeout(2000);
    
    // 7. Enter Address
    await page.getByRole('textbox', { name: 'Address:' }).fill('123 Main St, New York, NY 10001');
    await page.waitForTimeout(2000);
    
    // 8. Enter Age
    await page.getByRole('spinbutton', { name: 'Age:' }).fill('30');
    await page.waitForTimeout(2000);
    
    // 9. Click Next Step button
    await page.getByRole('button', { name: 'Next Step →' }).click();
    await page.waitForURL('**/step2');
    await page.waitForTimeout(2000);
    
    // 10. Select Auto Insurance from the Line of Business dropdown
    await page.getByLabel('Select Line of Business (').selectOption('Auto Insurance - Vehicle coverage');
    await page.waitForTimeout(2000);
    
    // 11. Select Standard Coverage radio button
    await page.getByRole('radio', { name: 'Standard Coverage -' }).click();
    await page.waitForTimeout(2000);
    
    // 12. Click Next Step button
    await page.getByRole('button', { name: 'Next Step →' }).click();
    await page.waitForURL('**/step3');
    await page.waitForTimeout(2000);
    
    // 13. Select Liability Coverage checkbox
    await page.getByRole('checkbox', { name: 'Liability Coverage - Third' }).click();
    await page.waitForTimeout(2000);
    
    // 14. Select Collision Coverage checkbox
    await page.getByRole('checkbox', { name: 'Collision Coverage - Vehicle' }).click();
    await page.waitForTimeout(2000);
    
    // 15. Select Comprehensive Coverage checkbox
    await page.getByRole('checkbox', { name: 'Comprehensive Coverage - All-' }).click();
    await page.waitForTimeout(2000);
    
    // 16. Click Next Step button
    await page.getByRole('button', { name: 'Next Step →' }).click();
    await page.waitForURL('**/step4');
    await page.waitForTimeout(2000);
    
    // 17. Select Annual Payment option
    await page.getByRole('radio', { name: 'Annual Payment - $1200.00 (' }).click();
    await page.waitForTimeout(2000);
    
    // 18. Click Issue Policy button
    await page.getByRole('link', { name: 'Issue Policy →' }).click();
    await page.waitForURL('**/step5');
    await page.waitForTimeout(2000);
    
    // 19. Capture the Policy Number from the page
    const policyNumberElement = await page.locator('strong').filter({ hasText: /POL\d+/ }).first();
    const policyNumber = await policyNumberElement.textContent();
    console.log(`Policy Number: ${policyNumber}`);
    await page.waitForTimeout(2000);
    
    // 20. Capture the Annual Premium amount from the page
    const premiumCells = await page.locator('table strong').filter({ hasText: /\$\d+/ });
    const premiumAmount = await premiumCells.first().textContent();
    console.log(`Premium Amount: ${premiumAmount}`);
    await page.waitForTimeout(2000);
    
    // 21. Verify policy creation successful
    await expect(page.getByText(/Policy Successfully Issued/)).toBeVisible();
    await expect(page.locator('table')).toContainText('John Doe');
    await expect(page.locator('table')).toContainText('Auto Insurance');
    await expect(page.locator('table')).toContainText('✓ ACTIVE');
    
    // Verify captured information
    expect(policyNumber).toBeTruthy();
    expect(premiumAmount).toContain('1200');
  });
});
