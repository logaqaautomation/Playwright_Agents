# Login Page Test Plan

## Application Overview

This test plan covers the Practice Test Automation login page (https://practicetestautomation.com/practice-test-login/). The login page is a practice application designed for test automation engineers to write simple positive and negative login tests. The application has a username and password field with a submit button, and provides error messages for invalid credentials. Valid test credentials are Username: student, Password: Password123.

## Test Scenarios

### 1. Positive Login Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with valid credentials

**File:** `tests/login/positive-login.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
    - expect: Username field is visible and empty
    - expect: Password field is visible and empty
    - expect: Submit button is visible and enabled
  2. Click on the Username field and type 'student'
    - expect: Text 'student' is entered in the Username field
  3. Click on the Password field and type 'Password123'
    - expect: Password text is masked in the Password field
  4. Click the Submit button
    - expect: Page redirects to logged-in-successfully page
    - expect: Page URL contains 'practicetestautomation.com/logged-in-successfully/'
  5. Verify success message and logout button
    - expect: Page displays success message containing 'Congratulations' or 'successfully logged in'
    - expect: Logout button is visible on the new page

### 2. Negative Login Tests - Invalid Username

**Seed:** `tests/seed.spec.ts`

#### 2.1. Login with invalid username

**File:** `tests/login/negative-invalid-username.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
    - expect: Error message area is visible
  2. Click on the Username field and type 'incorrectUser'
    - expect: Text 'incorrectUser' is entered in the Username field
  3. Click on the Password field and type 'Password123'
    - expect: Password text is masked in the Password field
  4. Click the Submit button
    - expect: Page remains on login page (URL does not change)
    - expect: Error message 'Your username is invalid!' is displayed
  5. Verify error message visibility and styling
    - expect: Error message is clearly visible to the user
    - expect: Username and Password fields retain their values for correction

#### 2.2. Login with empty username field

**File:** `tests/login/negative-empty-username.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Leave the Username field empty
    - expect: Username field remains empty
  3. Click on the Password field and type 'Password123'
    - expect: Password text is masked in the Password field
  4. Click the Submit button
    - expect: Error message is displayed
    - expect: Page remains on login page
  5. Verify the error message
    - expect: Error indicates missing or invalid username

#### 2.3. Login with special characters in username

**File:** `tests/login/negative-special-chars-username.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Click on the Username field and type '<script>alert(1)</script>'
    - expect: Special characters are entered in the Username field
  3. Click on the Password field and type 'Password123'
    - expect: Password field is filled
  4. Click the Submit button
    - expect: Error message is displayed
    - expect: Page remains on login page
    - expect: No JavaScript alerts or malicious behavior occurs

#### 2.4. Login with SQL injection attempt in username

**File:** `tests/login/negative-sql-injection-username.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Click on the Username field and type \"' OR '1'='1\"
    - expect: SQL injection syntax is entered in the Username field
  3. Click on the Password field and type 'Password123'
    - expect: Password field is filled
  4. Click the Submit button
    - expect: Error message is displayed indicating invalid credentials
    - expect: Page remains on login page
    - expect: No database attack or unauthorized access occurs

### 3. Negative Login Tests - Invalid Password

**Seed:** `tests/seed.spec.ts`

#### 3.1. Login with invalid password

**File:** `tests/login/negative-invalid-password.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Click on the Username field and type 'student'
    - expect: Text 'student' is entered in the Username field
  3. Click on the Password field and type 'incorrectPassword'
    - expect: Password text is masked in the Password field
  4. Click the Submit button
    - expect: Page remains on login page (URL does not change)
    - expect: Error message 'Your password is invalid!' is displayed
  5. Verify error message visibility
    - expect: Error message is clearly visible
    - expect: Username field still shows 'student'
    - expect: Password field is cleared or still visible for re-entry

#### 3.2. Login with empty password field

**File:** `tests/login/negative-empty-password.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Click on the Username field and type 'student'
    - expect: Text 'student' is entered in the Username field
  3. Leave the Password field empty
    - expect: Password field remains empty
  4. Click the Submit button
    - expect: Error message is displayed
    - expect: Page remains on login page
  5. Verify the error message
    - expect: Error indicates missing or invalid password

#### 3.3. Login with very long password

**File:** `tests/login/negative-long-password.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Click on the Username field and type 'student'
    - expect: Text 'student' is entered in the Username field
  3. Click on the Password field and type a 500-character string
    - expect: Long password string is entered in the Password field
  4. Click the Submit button
    - expect: Page responds appropriately
    - expect: Either error message is displayed or password is validated

#### 3.4. Login with space-padded password

**File:** `tests/login/negative-padded-password.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Click on the Username field and type 'student'
    - expect: Text 'student' is entered in the Username field
  3. Click on the Password field and type '  Password123  ' (with leading/trailing spaces)
    - expect: Password with spaces is entered in the Password field
  4. Click the Submit button
    - expect: Either login succeeds (if spaces are trimmed) or error message is displayed
    - expect: Application behavior is consistent

### 4. Form Interaction & Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 4.1. Tab navigation through form fields

**File:** `tests/login/form-tab-navigation.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Press Tab key to focus the Username field
    - expect: Username field is focused (visible focus indicator)
  3. Press Tab key to move to Password field
    - expect: Password field receives focus
  4. Press Tab key to move to Submit button
    - expect: Submit button receives focus
  5. Press Enter on the Submit button
    - expect: Form submission is attempted with empty fields

#### 4.2. Submit button behavior with empty form

**File:** `tests/login/submit-empty-form.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
    - expect: Both Username and Password fields are empty
  2. Click the Submit button without entering any data
    - expect: Error message(s) are displayed
    - expect: Page remains on login page
    - expect: Submit button does not redirect to success page

#### 4.3. Case sensitivity testing

**File:** `tests/login/case-sensitivity.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Click on the Username field and type 'Student' (with capital S)
    - expect: Username 'Student' is entered
  3. Click on the Password field and type 'password123' (all lowercase)
    - expect: Password field is filled
  4. Click the Submit button
    - expect: Error message is displayed indicating invalid credentials
    - expect: Verify that credentials are case-sensitive

#### 4.4. Multiple failed login attempts

**File:** `tests/login/multiple-failed-attempts.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Attempt login with invalid credentials (username: 'wrong', password: 'wrong')
    - expect: Error message is displayed on first attempt
  3. Clear the fields and attempt again with different invalid credentials
    - expect: Error message is displayed on second attempt
  4. Repeat invalid login attempt for third time
    - expect: Either page allows continued login attempts or applies rate limiting

#### 4.5. Form reset after error

**File:** `tests/login/form-reset-after-error.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Enter invalid username 'incorrectUser' and password 'Password123'
    - expect: Form fields contain the entered values
  3. Click Submit button
    - expect: Error message is displayed
  4. Refresh the page or navigate back to login page
    - expect: Form fields are cleared
    - expect: Error message is cleared

#### 4.6. Copy-paste functionality in password field

**File:** `tests/login/password-copy-paste.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Click on Username field and type 'student'
    - expect: Username field contains 'student'
  3. Click on Password field and paste password 'Password123'
    - expect: Password field accepts pasted content
    - expect: Password is masked while displayed
  4. Click the Submit button
    - expect: Login succeeds with copy-pasted password
    - expect: Paste functionality works correctly

### 5. Accessibility & UI Tests

**Seed:** `tests/seed.spec.ts`

#### 5.1. Form labels are properly associated with inputs

**File:** `tests/login/accessibility-labels.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Inspect Username field label
    - expect: Label 'Username' is visible and properly associated with the input field
  3. Click on the 'Username' label
    - expect: Focus moves to the Username input field
  4. Inspect Password field label
    - expect: Label 'Password' is visible and properly associated with the input field
  5. Click on the 'Password' label
    - expect: Focus moves to the Password input field

#### 5.2. Submit button is visible and accessible

**File:** `tests/login/accessibility-submit-button.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Submit button is visible on the page
  2. Verify Submit button text
    - expect: Button displays 'Submit' text
  3. Verify button is clickable
    - expect: Button is not disabled by default
    - expect: Button has proper hover state
  4. Use keyboard navigation to reach Submit button
    - expect: Tab key navigation allows reaching the Submit button
    - expect: Button can be activated with Enter key

#### 5.3. Error message accessibility

**File:** `tests/login/accessibility-error-messages.spec.ts`

**Steps:**
  1. Navigate to the login page https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
  2. Trigger error by submitting invalid credentials
    - expect: Error message appears on page
  3. Verify error message is in page content
    - expect: Error message is readable by screen readers
    - expect: Error message is not just visual
  4. Verify error message provides clear guidance
    - expect: Message indicates which field has invalid input
    - expect: Message is specific (not just 'Error')

#### 5.4. Page layout on mobile viewport

**File:** `tests/login/responsive-mobile-layout.spec.ts`

**Steps:**
  1. Set viewport to mobile size (375x667)
    - expect: Page is responsive and viewable on mobile
  2. Navigate to the login page
    - expect: All form elements are visible without horizontal scrolling
  3. Click on Username field and type 'student'
    - expect: Keyboard appears and does not obscure form
  4. Enter valid credentials and submit
    - expect: Form is fully usable on mobile viewport
    - expect: No UI elements are cut off

#### 5.5. Page layout on tablet viewport

**File:** `tests/login/responsive-tablet-layout.spec.ts`

**Steps:**
  1. Set viewport to tablet size (768x1024)
    - expect: Page layout adapts to tablet size
  2. Navigate to the login page
    - expect: Form is properly centered and readable
  3. Verify all elements are accessible
    - expect: All buttons and fields have adequate touch targets
    - expect: Form remains usable on tablet viewport
