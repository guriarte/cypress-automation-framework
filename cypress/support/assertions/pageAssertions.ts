const PageAssertions = {
  elementIsVisible: (selector: string) => {
    cy.get(selector).should('be.visible');
  },

  elementIsNotVisible: (selector: string) => {
    cy.get(selector).should('not.be.visible');
  },

  elementContainingTextIsVisible: (text: string) => {
    cy.contains(text).should('be.visible');
  },

  urlShouldContainText: (text: string) => {
    cy.url().should('contain', text);
  },
};

export default PageAssertions;
