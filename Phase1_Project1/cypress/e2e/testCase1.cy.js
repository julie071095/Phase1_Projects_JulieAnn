describe('Simplilearn Test Case 1', () => {
  before(() => {
    // Access Simplilearn.com
    cy.visit('https://www.simplilearn.com');
  });

  it('should verify text, search for Selenium, and validate course name', () => {
    
    // Verify text “Resources”
    cy.xpath("//a[@class='resource-link']").should('be.visible');

    // Search Selenium
    cy.xpath("//input[@id='header_srch']").click().type('Selenium')

    // Click on the Search button
    cy.xpath("//span[@class='search_icon input-search-icon']").click();

    // Validate the course name “Automation Testing Masters Program
    cy.contains("Automation Testing Masters Program").should('be.visible');

    // Verify the visibility of the "Career Aligned Learning Path" text, as no checkbox is available 
    cy.xpath("//span[normalize-space()='Career Aligned Learning Path']").should('be.visible');

  });
});