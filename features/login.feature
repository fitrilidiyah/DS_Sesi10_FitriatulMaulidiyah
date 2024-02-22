@digital-skola login
Feature: Swag Labs - Login
  Background: User on the login page
    Given Fitria is on the login page

  @positive
  Scenario: As a standard_user, I want to log in successfully 
    When Fitria login with "standard_user" credential 
    Then Fitria should see home page

  @negative
  Scenario: As a locked_out_user, I should get error message
    When Fitria login with "locked_out_user" credential 
    Then Fitria should see error "Epic sadface: Sorry, this user has been locked out."

