import LoginPage from '../support/pages/loginPage';

describe('Simplilearn Test Case 3 with Page Object Model', () => {
  before(() => {
    // Access Simplilearn.com
    LoginPage.visit();
  });

  it('should handle invalid login credentials and verify error messages', () => {

    // Click on Login Button
    LoginPage.clickLoginButton();

    // Verify the text “Welcome back!”
    LoginPage.verifyWelcomeText();

    // Identify Email and Enter invalid email
    LoginPage.enterEmail('invalidemail@example.com');
    
    // Verify the text on Email field
    LoginPage.verifyEmailField();

    // Identify Password and Enter invalid pwd
    LoginPage.enterPassword('invalidpassword');

    // Verify the text on Password field
    LoginPage.verifyPasswordField();

    // Identify Login and click
    LoginPage.clickLogin();

    // Verify the text “Please fill in all required fields”
    LoginPage.verifyErrorText();
    
  });
});