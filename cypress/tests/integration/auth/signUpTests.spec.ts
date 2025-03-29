describe('Sign Up Tests', () => {
  beforeEach(() => {
    cy.visit('/auth/register');
  });

  it('Should show a warning for all required fields', () => {
    cy.get('[data-test="register-submit"]').click();
    cy.contains('First name is required').should('be.visible');
    cy.contains('Date of Birth is required').should('be.visible');
    cy.contains('Address is required').should('be.visible');
    cy.contains('Postcode is required').should('be.visible');
    cy.contains('City is required').should('be.visible');
    cy.contains('State is required').should('be.visible');
    cy.contains('Country is required').should('be.visible');
    cy.contains('Phone is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
    cy.contains('Password must be minimal 6 characters long').should('be.visible');
    cy.contains('Password can not include invalid characters').should('be.visible');
    cy.get('.strength-bar').children().should('not.have.class', 'weak');
  });

  it('Should correctly show password strength', () => {
    const passwordMap: Map<string, string> = new Map<string, string>([
      ['weak', 'asd'],
      ['moderate', 'asdZXC'],
      ['strong', 'asdZXC$'],
      ['very-strong', 'asdZXC$Lkk'],
      ['excellent', 'asdZXC$Lkk234'],
    ]);

    passwordMap.forEach((password, strength) => {
      cy.get('[data-test="password"]').clear().type(password);
      cy.get('.strength-bar').find(`.${strength}`).should('exist');
    });
  });
});
