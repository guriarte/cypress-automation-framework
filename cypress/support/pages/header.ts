export const HeaderComponent = () => {
  const selectors = {
    signInButton: '[data-test="nav-sign-in"]',
    logoButton: '.navbar-brand',
    shoppingCartButton: '[data-test="nav-cart"]',
  };

  const pageActions = {
    clickSignInButton: () => {
      cy.get(selectors.signInButton).click();
      return pageActions;
    },

    clickLogo: () => {
      cy.get(selectors.logoButton).click();
      return pageActions;
    },

    clickShoppingCartButton: () => {
      cy.get(selectors.shoppingCartButton).click();
      return pageActions;
    },
  };

  return { selectors, pageActions };
};
