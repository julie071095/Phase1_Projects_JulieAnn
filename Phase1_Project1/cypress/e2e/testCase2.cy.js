describe('Simplilearn Test Case 2', () => {
    before(() => {
      // Access Simplilearn.com
      cy.visit('https://www.simplilearn.com');
    });
  
    it('should handle invalid login credentials and verify error messages', () => {
      
      // Click on Login Button
      cy.xpath("//a[normalize-space()='Log in']").click();
  
      // Verify the text “Welcome back!”
      cy.contains("Welcome back!").should('be.visible');
  
      // Identify Email and Enter invalid email
      cy.xpath("//input[@placeholder='Email Address*']").click();
      cy.xpath("//input[@placeholder='Email Address*']").type("invalid")
  
      // Verify the text on Email field
      cy.xpath("//input[@placeholder='Email Address*']").invoke('val').should('eq', 'invalid');
  
      // Identify Password and Enter invalid pwd
      cy.xpath("//input[@id='password']").click();
      cy.xpath("//input[@id='password']").type("invalid")

      // Verify the text on Password field
      cy.xpath("//input[@id='password']").invoke('val').should('eq', 'invalid');

      // Identify Login and click
      cy.xpath("//input[@title='Login']").click();

      // Verify the text “Please fill in all required fields”
      cy.contains("Please enter a valid email address").should('be.visible');
      
    });
  });