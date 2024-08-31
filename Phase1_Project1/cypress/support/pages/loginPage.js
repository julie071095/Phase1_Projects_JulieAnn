class LoginPage {
  visit() {
    cy.visit('https://www.simplilearn.com');
  }

  clickLoginButton() {
    cy.xpath("//a[normalize-space()='Log in']").click();
  }

  verifyWelcomeText() {
    cy.contains("Welcome back!").should('be.visible');
  }

  enterEmail(email) {
    cy.xpath("//input[@placeholder='Email Address*']").click().type("invalid")
  }

  verifyEmailField() {
    cy.xpath("//input[@placeholder='Email Address*']").invoke('val').should('eq', 'invalid');
  }

  enterPassword(password) {
    cy.xpath("//input[@id='password']").click().type("invalid")
  }

  verifyPasswordField() {
    cy.xpath("//input[@id='password']").invoke('val').should('eq', 'invalid');
  }

  clickLogin() {
    cy.xpath("//input[@title='Login']").click();
  }

  verifyErrorText() {
    cy.contains("Please enter a valid email address").should('be.visible');
  }
}

export default new LoginPage();