const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page.js");
const HomePage = require("../pageobjects/home.page.js");

Given(/^Fitria is on the login page$/, async () => {
  await LoginPage.open();
});

When(/^Fitria login with "(.*)" credential$/, async (username) => {
  await LoginPage.login(username);
});

Then(/^Fitria should be on home page$/, async () => {
  await HomePage.validateHomePage();
});

Then(/^Fitria should see error "(.*)"$/, async (message) => {
  await LoginPage.validateLockedOutUserError(message);
});

Then(
  /^Fitria should be on home page but can't use the Sort feature$/,
  async () => {
    await HomePage.validateProblemUser();
  }
);

Then(
  /^Fitria should be on home page but can't use the Remove button$/,
  async () => {
    await HomePage.validateErrorUser();
  }
);

Then(
  /^Fitria should be on home page but home page doesn't display properly$/,
  async () => {
    await HomePage.validateVisualUser();
  }
);

Then(/^Fitria should get error "(.*)"$/, async (msg5) => {
  await LoginPage.validateInvalidCredentials(msg5);
});
