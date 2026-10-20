# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.valid.spec.js >> OrangeHRM login - valid credentials >> valid demo credentials authenticate and display the dashboard
- Location: tests\ui\login.valid.spec.js:4:3

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/dashboard\/index/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Timeout: 10000ms

Call log:
  - Expect "toHaveURL" with timeout 10000ms
    23 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- alert:
  - text: 
  - paragraph: Invalid credentials
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | const { test, expect } = require('../../fixtures/testFixtures');
  2  | 
  3  | test.describe('OrangeHRM login - valid credentials', () => {
  4  |   test('valid demo credentials authenticate and display the dashboard', async ({ page, loginPage }) => {
  5  |     const username = process.env.ORANGEHRM_USERNAME || 'Admin';
  6  |     const password = process.env.ORANGEHRM_PASSWORD || 'admin1234';
  7  | 
  8  |     await loginPage.open();
  9  |     await expect(loginPage.usernameInput).toBeVisible();
  10 |     await expect(loginPage.passwordInput).toBeVisible();
  11 |     await expect(loginPage.loginButton).toBeVisible();
  12 | 
  13 |     await loginPage.login(username, password);
> 14 |     await expect(page).toHaveURL(/\/dashboard\/index/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  15 |     await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
  16 |   });
  17 | });
  18 | 
```