export const HomePage = () => {
  const selectors = Object.freeze({
    productSearchInputBox: '[data-test="search-query"]',
    productCard: '[data-test="product-name"]',
  });

  const pageActions = {
    visit() {
      cy.visit('/');
      return pageActions;
    },

    searchForProduct(productName: string) {
      cy.get(selectors.productSearchInputBox).type(`${productName}{enter}`);
      return pageActions;
    },

    clickOnProduct(productName: string) {
      cy.get(selectors.productCard)
        .filter(`:contains("${productName}")`)
        .click();
      return pageActions;
    },
  };

  return { selectors, pageActions };
};
