const apiAssertions = {
  elementIsVisible: (selector: string) => {
    cy.get(selector).should('be.visible');
  },
};

export default apiAssertions;
