const { $, expect } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
  get fieldUsername() {
    return $("#user-name");
  }

  get fieldPassword() {
    return $("#password");
  }

  get buttonLogin() {
    return $("#login-button");
  }

  errorLockedOutUser = (message) => $(`//h3[text()="${message}"]`);

  invalidCredentials = (msg5) => $(`//h3[text()="${msg5}"]`);

  async login(username) {
    await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
    await this.fieldUsername.setValue(username);
    await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
    await this.buttonLogin.click();
  }

  async validateLockedOutUserError(message) {
    await this.errorLockedOutUser(message).waitForDisplayed({ timeout: 2500 });
    await expect(this.errorLockedOutUser(message)).toBeDisplayed();
  }

  async validateInvalidCredentials(msg5) {
    await expect(this.invalidCredentials(msg5)).toBeDisplayed();
  }

  open() {
    return super.open("/");
  }
}

module.exports = new LoginPage();
