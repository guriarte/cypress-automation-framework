const PageAssertions = {
  elementIsVisible: (selector: string) => {
    cy.get(selector).should('be.visible');
  },
};

export default PageAssertions;
