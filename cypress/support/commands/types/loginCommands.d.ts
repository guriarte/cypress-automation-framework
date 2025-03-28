export {};

declare global {
  namespace Cypress {
    interface Chainable {
      loginUI(email: string, password: string): Chainable<void>;
      fillPasswordWith(password: string): Chainable<void>;
    }
  }
}
