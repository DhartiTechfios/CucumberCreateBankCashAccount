
Feature: Techfios bank and cash New Account Functionality

@DbScenario
Scenario Outline: User should be able to login with valid credentials and open a new account
Given User is on the techfios login page
When User enters the "<username>"
When User enters as "<password>"
Then User clicks on signin button
Then User should land on dashboard page
And User clicks on bankCash button
And User clicks on new Account
And User enters accountTitle in "<accounttitle>"
And User enters description as "<description>"
And User enters intialBalance as "<intialBalance>"
And User enters accountNumber as "<accountNumber>"
And User enters contactPerson as "<contactPerson>"
And User enters phone as "<Phone>"
And User enters internetBankURL as "<internetBankURL>"
And User enters clicks on submit button
Then User should be able to validate account created successfully

    Examples: 
      |username|password | accounttitle|description|intialBalance|accountNumber|contactPerson|Phone|internetBankURL|  |
      |demo@techfios.com |abc123 |CheckingAccount|CucumberTest|2000|12345|Dharti|1234567891|www.yahoo.com| |
      
