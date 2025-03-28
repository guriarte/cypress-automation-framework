import { loginPageSelectors } from '../selectors/loginPageSelectors';

Cypress.Commands.add('loginUI', (email: string, password: string) => {
  cy.get(loginPageSelectors.emailTextBox).type(email);
  cy.get(loginPageSelectors.passwordTextBox).type(password);
  cy.get(loginPageSelectors.submitButton).click();
});

Cypress.Commands.add('fillPasswordWith', (password: string) => {
  cy.get('[data-test="password"]').type(password);
});
