@digital-skola @login
Feature: Swag Labs - Login
  Background: User on the login page
    Given Fitria is on the login page

  @positive
  Scenario: As a standard_user, I want to log in successfully 
    When Fitria login with "standard_user" credential 
    Then Fitria should be on home page

  @negative-01
  Scenario: As a locked_out_user, I should get error message
    When Fitria login with "locked_out_user" credential 
    Then Fitria should see error "Epic sadface: Sorry, this user has been locked out."

  @negative-02
  Scenario: As a problem_user, I can log in but can't use the Sort feature
    When Fitria login with "problem_user" credential 
    Then Fitria should be on home page but can't use the Sort feature

  @negative-03
  Scenario: As a error_user, I can log in but can't use the Remove button
    When Fitria login with "error_user" credential 
    Then Fitria should be on home page but can't use the Remove button
  
  @negative-04
  Scenario: As a visual_user, I can log in but home page doesn't display properly
    When Fitria login with "visual_user" credential 
    Then Fitria should be on home page but home page doesn't display properly

  @negative-05
  Scenario: As a user, I can't log in with invalid username
    When Fitria login with "standard user" credential 
    Then Fitria should get error "Epic sadface: Username and password do not match any user in this service"

