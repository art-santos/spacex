describe("search submit", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })
     it("should use the home search functionalities", () => {
         cy.get("#search-toggle").click();
         cy.get("#search-toggle").should('have.text', 'Rocket');
         cy.get("#search-input").type("test");
         cy.get("#search-input").should("have.value", "test");
         cy.get("#search-submit").click();
         cy.get("#mission-card").should("not.exist");
         cy.get("#search-input").should("have.value", "test");
         cy.get("#search-input").clear();
         cy.get("#search-input").type("falcon heavy");
         cy.get("#search-submit").click();
         cy.get("#mission-card").should("exist");
         cy.get("#search-toggle").click();
         cy.get("#search-toggle").should('have.text', 'Mission');
         cy.get("#mission-card").should("exist");
         cy.get("#search-input").clear();
         cy.get("#search-submit").click();
         cy.get("#mission-card").should("exist");
     })
     it("should test the loading functionality", () => {
         cy.get("#card-section").should("exist");
         cy.get("#card-section").should("not.have.class", "loading");
         cy.get("#loading").should("not.exist");
         cy.scrollTo("bottom");
         cy.get("#loading").should("exist");
         cy.get("#mission-card").should("exist");
     })
     it("should test theme toggle functionality", () => {
         cy.get("#theme-toggle").should("exist");
         cy.get("#theme-toggle").click();
         cy.get('body').should('have.css', 'background-color', 'rgb(26, 32, 44)')
         cy.get("#theme-toggle").click();
         cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
     })
     it("should test the theme cache persist card functionality", () => {
         cy.get("#theme-toggle").should("exist");
         cy.get("#theme-toggle").click();
         cy.get('body').should('have.css', 'background-color', 'rgb(26, 32, 44)')
         cy.reload();
         cy.get('body').should('have.css', 'background-color', 'rgb(26, 32, 44)')
         cy.get("#theme-toggle").click();
         cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
         cy.reload();
         cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
     })
    it('should test the mission card redirect functionality', () => {
        cy.get("#mission-card").should("exist");
        cy.get("#mission-card").click();
        cy.url().should('include', '/launch/');
    })
})