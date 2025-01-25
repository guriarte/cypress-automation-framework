export const LoginPage = () => {
  const selectors = Object.freeze({
    emailTextBox: '[data-test="email"]',
    passwordTextBox: '[data-test="password"]',
    submitButton: '[data-test="login-submit"]',
  });

  const pageActions = {
    visit() {
      cy.visit('/auth/login');
      return pageActions;
    },

    fillEmail(email: string) {
      cy.get(selectors.emailTextBox).type(email);
      return pageActions;
    },

    fillPassword(password: string) {
      cy.get(selectors.passwordTextBox).type(password);
      return pageActions;
    },

    clickSubmitButton() {
      cy.get(selectors.submitButton).click();
      return pageActions;
    },

    loginUI(email: string, password: string) {
      return pageActions
        .fillEmail(email)
        .fillPassword(password)
        .clickSubmitButton();
    },
  };

  return { selectors, pageActions };
};
