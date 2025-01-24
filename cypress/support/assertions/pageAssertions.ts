const PageAssertions = {
  elementIsVisible: (selector: string) => {
    cy.get(selector).should('be.visible');
  },
  elementIsNotVisible: (selector: string) => {
    cy.get(selector).should('not.be.visible');
  }
};

export default PageAssertions;
