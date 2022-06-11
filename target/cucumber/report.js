$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechFiosBankCashFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@DbScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on bankCash button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on new Account",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle in \"\u003caccounttitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters intialBalance as \"\u003cintialBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters phone as \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters internetBankURL as \"\u003cinternetBankURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accounttitle",
        "description",
        "intialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankURL",
        ""
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "CheckingAccount",
        "CucumberTest",
        "2000",
        "12345",
        "Dharti",
        "1234567891",
        "www.yahoo.com",
        ""
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2071091400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@DbScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on bankCash button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on new Account",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters accountTitle in \"CheckingAccount\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters description as \"CucumberTest\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters intialBalance as \"2000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters accountNumber as \"12345\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters contactPerson as \"Dharti\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters phone as \"1234567891\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters internetBankURL as \"www.yahoo.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitaion.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 781076600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "LoginStepDefinitaion.user_enters_the(String)"
});
formatter.result({
  "duration": 2075348300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinitaion.user_enters_as(String)"
});
formatter.result({
  "duration": 2057789200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitaion.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 4755210300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitaion.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 2025358800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitaion.user_clicks_on_bankCash_button()"
});
formatter.result({
  "duration": 1042285900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitaion.user_clicks_on_new_Account()"
});
formatter.result({
  "duration": 1443884400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CheckingAccount",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinitaion.user_enters_accountTitle_in(String)"
});
formatter.result({
  "duration": 1100140300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucumberTest",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinitaion.user_enters_description_as(String)"
});
formatter.result({
  "duration": 1067034200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinitaion.user_enters_intialBalance_as(String)"
});
formatter.result({
  "duration": 1073938000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinitaion.user_enters_accountNumber_as(String)"
});
formatter.result({
  "duration": 1084795000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dharti",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinitaion.user_enters_contactPerson_as(String)"
});
formatter.result({
  "duration": 1085849900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567891",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinitaion.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 1090876900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.yahoo.com",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinitaion.user_enters_internetBankURL_as(String)"
});
formatter.result({
  "duration": 1088016500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitaion.user_enters_clicks_on_submit_button()"
});
formatter.result({
  "duration": 1845947900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitaion.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 2024964700,
  "status": "passed"
});
});