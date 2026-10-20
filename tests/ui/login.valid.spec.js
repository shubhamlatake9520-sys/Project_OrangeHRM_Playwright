const { test, expect } = require('../../fixtures/testFixtures');

test.describe('OrangeHRM login - valid credentials', () => {
  test('valid demo credentials authenticate and display the dashboard', async ({ page, loginPage }) => {
    const username = process.env.ORANGEHRM_USERNAME || 'Admin';
    const password = process.env.ORANGEHRM_PASSWORD || 'admin1234';

    await loginPage.open();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

    await loginPage.login(username, password);
    await expect(page).toHaveURL(/\/dashboard\/index/);
    await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
  });
});
