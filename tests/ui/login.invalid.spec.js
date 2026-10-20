const { test, expect } = require('../../fixtures/testFixtures');

test.describe('OrangeHRM login - invalid and incomplete credentials', () => {
  test('invalid password is rejected', async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.login(process.env.ORANGEHRM_USERNAME || 'Admin', 'InvalidPassword!123');
    await expect(page).toHaveURL(/\/auth\/login/);
    await expect(loginPage.loginError).toBeVisible();
    await expect(loginPage.loginError).toContainText(/invalid credentials/i);
  });

  test('invalid username is rejected', async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.login('invalid.orangehrm.user', process.env.ORANGEHRM_PASSWORD || 'admin123');
    await expect(page).toHaveURL(/\/auth\/login/);
    await expect(loginPage.loginError).toBeVisible();
    await expect(loginPage.loginError).toContainText(/invalid credentials/i);
  });

  test('blank credentials show required field validation', async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.submitEmptyLogin();
    await expect(page).toHaveURL(/\/auth\/login/);
    await expect(loginPage.requiredMessages).toHaveCount(2);
    await expect(loginPage.requiredMessages).toContainText(['Required', 'Required']);
  });

  test('password field masks entered characters', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.passwordInput.fill('ExamplePassword123');
    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
  });
});
