package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinitaion extends TestBase{
	LoginPage loginPage;

	@Before
	public void beforeRun() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);

	}
   
	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
	   driver.get("https://techfios.com/billing/?ng=login/");
	   
	}

	@When("^User enters the \"([^\"]*)\"$")
	public void user_enters_the(String username)  {
		loginPage.enterUserName(username);
	    	}
	
	@When("^User enters as \"([^\"]*)\"$")
	public void user_enters_as(String password)  {
	   loginPage.enterPassword(password);
	}

	@Then("^User clicks on signin button$")
	public void user_clicks_on_signin_button()  {
	   loginPage.clickSignInButton();
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling",loginPage.getPageTitle());
	   
	}

	@Then("^User clicks on bankCash button$")
	public void user_clicks_on_bankCash_button() {
		loginPage.clickbankCashButton();
	    
	}

	@Then("^User clicks on new Account$")
	public void user_clicks_on_new_Account()  {
		loginPage.clicknewAccount();
	  
	}

	@Then("^User enters accountTitle in \"([^\"]*)\"$")
	public void user_enters_accountTitle_in(String accounttitle)  {
		loginPage.enteraccountTitle(accounttitle);
	    
	}

	@Then("^User enters description as \"([^\"]*)\"$")
	public void user_enters_description_as(String description) {
	    loginPage.enterDescription(description);
	}

	@Then("^User enters intialBalance as \"([^\"]*)\"$")
	public void user_enters_intialBalance_as(String intialBalance) {
	  loginPage.enterIntialBalanceField(intialBalance);
	}

	@Then("^User enters accountNumber as \"([^\"]*)\"$")
	public void user_enters_accountNumber_as(String accountNumber) {
	   loginPage.enteraccountNumberField(accountNumber);
	}

	@Then("^User enters contactPerson as \"([^\"]*)\"$")
	public void user_enters_contactPerson_as(String contactPerson){
	    loginPage.entercontactPersonField(contactPerson);
	}

	@Then("^User enters phone as \"([^\"]*)\"$")
	public void user_enters_phone_as(String Phone)  {
	    loginPage.enterPhoneField(Phone);
	}

	@Then("^User enters internetBankURL as \"([^\"]*)\"$")
	public void user_enters_internetBankURL_as(String internetBankURL)  {
	    loginPage.internetBankURLField(internetBankURL);
	}

	@Then("^User enters clicks on submit button$")
	public void user_enters_clicks_on_submit_button() {
	   loginPage.clicksubmitButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
	    Assert.assertEquals("Accounts- iBilling", loginPage.getPageTitle());
	}
	
}
