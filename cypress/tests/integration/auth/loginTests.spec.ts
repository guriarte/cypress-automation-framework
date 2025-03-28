import userCredentials from '../../../fixtures/userCredentials.json';
import { loginPageSelectors } from '../../../support/selectors/loginPageSelectors';

const customerUserPassword = Cypress.env('CUSTOMERUSER_PASSWORD');

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('/auth/login');
  });

  it('Should succesfully log in with a valid user', () => {
    cy.loginUI(userCredentials.customerUser.email, customerUserPassword);
    cy.contains(userCredentials.customerUser.userName).should('be.visible');
    cy.url().should('contain', '/account');
  });

  it('Should show up error message with invalid email format', () => {
    cy.loginUI('invalidemailformat', 'password');
    cy.contains('Email format is invalid').should('be.visible');
  });
  it('Should show up error message with a short password', () => {
    cy.loginUI(userCredentials.customerUser.email, 'ad');
    cy.contains('Password length is invalid');
  });
  it('Should unmask password when button is pressed', () => {
    cy.get(loginPageSelectors.passwordTextBox).should('have.attr', 'type', 'password');
  });
  it('Should show up error message with non-existing user/password combination', () => {});
  it('Should show up error messages with no inputs', () => {});
});
