class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: /username/i });
    this.passwordInput = page.getByRole('textbox', { name: /password/i });
    this.loginButton = page.getByRole('button', { name: /login/i });
    this.loginError = page.locator('.oxd-alert-content-text');
    this.requiredMessages = page.locator('.oxd-input-field-error-message');
  }

  async open() {
    try {
      await this.page.goto('/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });
      await this.usernameInput.waitFor({ state: 'visible' });
    } catch (error) {
      throw new Error(`Unable to open OrangeHRM login page: ${error.message}`, { cause: error });
    }
  }

  async login(username, password) {
    try {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    } catch (error) {
      throw new Error(`Unable to submit OrangeHRM login form: ${error.message}`, { cause: error });
    }
  }

  async submitEmptyLogin() {
    try {
      await this.loginButton.click();
    } catch (error) {
      throw new Error(`Unable to submit empty login form: ${error.message}`, { cause: error });
    }
  }

  async getLoginErrorText() {
    try {
      await this.loginError.waitFor({ state: 'visible' });
      return (await this.loginError.textContent())?.trim() || '';
    } catch (error) {
      throw new Error(`Unable to read login error: ${error.message}`, { cause: error });
    }
  }
}

module.exports = { LoginPage };
