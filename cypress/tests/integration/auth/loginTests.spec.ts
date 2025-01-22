describe('Login Integration Tests', () => {
  beforeEach(() => {
    cy.visit('/auth/login');
  });
  it('Should log in as a customer with valid credentials', () => {
    cy.get('[data-test="email"]').type('customer@practicesoftwaretesting.com');
    cy.get('[data-test="password"]').type('welcome01');
    cy.get('[data-test="login-submit"]').click();
    cy.url().should('contain', '/account');
  });

  it('Should display error messages when no email or password is entered', () => {
    cy.get('[data-test="login-submit"]').click();
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });

  it('Should display error messages when email or password are invalid', () => {
    cy.get('[data-test="email"]').type(
      'fakecustomer@practicesoftwaretesting.com',
    );
    cy.get('[data-test="password"]').type('fakepassword');
    cy.get('[data-test="login-submit"]').click();
    cy.contains('Invalid email or password').should('be.visible');
  });
});
