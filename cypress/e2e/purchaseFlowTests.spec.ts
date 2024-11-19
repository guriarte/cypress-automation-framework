describe('Purchase Flow Tests', () => {
  it('Purchase Flow Happy Path', () => {
    cy.visit('/');
    cy.get('[data-test="nav-sign-in"]').click();
    cy.get('[data-test="email"]').type('customer@practicesoftwaretesting.com');
    cy.get('[data-test="password"]').type('welcome01');
    cy.get('[data-test="login-submit"]').click();
    cy.url().should('contain', '/account');
    cy.get('.navbar-brand').click();
  });
});
