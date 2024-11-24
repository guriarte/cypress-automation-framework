export const HomePage = () => {
  const selectors = {
    productSearchInputBox: '[data-test="search-query"]',
    productCard: '[data-test="product-name"]',
  };

  const pageActions = {
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
