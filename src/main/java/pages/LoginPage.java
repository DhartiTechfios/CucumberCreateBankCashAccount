package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {

		WebDriver driver;
		
		public LoginPage(WebDriver driver) {
			this.driver = driver;		
		}
		
		// Element Library
		@FindBy(how = How.XPATH, using = "//input[@id='username']")WebElement UserName;
		
		@FindBy(how = How.XPATH, using = "//input[@id='password']")WebElement Password;
		
		@FindBy(how = How.XPATH, using = "//button[@name='login']")WebElement SignInButton;
		
		//@FindBy(how = How.XPATH, using = "//button[@name='login']")WebElement dashboardPage;
		@FindBy(how = How.XPATH, using = "//span[contains(text(),'Bank & Cash')]")WebElement bankCashButton;
		@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]")WebElement newAccount;
		@FindBy(how = How.XPATH, using = "//input[@id='account']")WebElement accountTitle;
		@FindBy(how = How.XPATH, using = "//input[@id='description']")WebElement descriptionField;
		@FindBy(how = How.XPATH, using = "//input[@id='balance']")WebElement intialBalanceField;
		@FindBy(how = How.XPATH, using = "//input[@id='account_number']")WebElement accountNumberField;
		@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")WebElement contactPersonField;
		@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")WebElement PhoneField;
		@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")WebElement internetBankURLField;
		@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")WebElement submitButton;
		
		
	//	@FindBy(how = How.XPATH, using = "//h2[text()=' Accounts ']")WebElement validateAccount;
		
		
		// Methods to interact with the elements
			public void enterUserName(String username) {
				UserName.sendKeys(username);
				try {
					Thread.sleep(2000);
				} catch (InterruptedException e) {
						e.printStackTrace();
				}
			}
			
			public void enterPassword(String password) {
				Password.sendKeys(password);
				try {
					Thread.sleep(2000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
			public void clickSignInButton() {
				SignInButton.click();
				try {
					Thread.sleep(2000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}	
	
			public String getPageTitle() {
				try {
					Thread.sleep(2000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return driver.getTitle();
				
			}
			public void clickbankCashButton() {
				bankCashButton.click();
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			public void clicknewAccount() {
				newAccount.click();
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			public String validateAccountPage() {
				try {
					Thread.sleep(2000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return driver.getTitle();
			}
			public void enteraccountTitle(String accounttitle) {
		         accountTitle.sendKeys(accounttitle);
		         try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			 public void enterDescription(String description) {
				 descriptionField.sendKeys(description);
				 try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 }
			 public void enterIntialBalanceField(String intialBalance) {
			      intialBalanceField.sendKeys(intialBalance);
			      try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 }
			 public void enteraccountNumberField(String accountNumber) {
			      accountNumberField.sendKeys(accountNumber);
			      try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 }
			 public void entercontactPersonField(String accountPerson) {
				 contactPersonField.sendKeys(accountPerson);
				 try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 }
			 public void enterPhoneField(String Phone) {
				 PhoneField.sendKeys(Phone);
				 try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 }
			 public void internetBankURLField(String internetBankURL) {
				 internetBankURLField.sendKeys(internetBankURL);
				 try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 }
			 public void clicksubmitButton() {
				 submitButton.click();
				 try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 }
			 public void validateAccount() {
				driver.getTitle();
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 }
			
		
}