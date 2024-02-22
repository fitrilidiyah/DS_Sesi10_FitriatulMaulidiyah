const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page.js");
const HomePage = require("../pageobjects/home.page.js");

Given(/^Fitria is on the login page$/, async () => {
  await LoginPage.open();
});

When(/^Fitria login with "(.*)" credential$/, async (username) => {
  await LoginPage.login(username);
});

Then(/^Fitria should see home page$/, async () => {
  await HomePage.validateHomePage();
});

Then(/^Fitria should see error "(.*)"$/, async (message) => {
  await LoginPage.validateLockedOutUserError(message);
});

// Then
