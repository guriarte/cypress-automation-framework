export const ProductPage = () => {
  const selectors = {
    increaseQuantityButton: '[data-test="increase-quantity"]',
    addToCartButton: '[data-test="add-to-cart"]',
  };

  const pageActions = {
    clickIncreaseQuantityButton() {
      cy.get(selectors.increaseQuantityButton).click();
      return pageActions;
    },

    clickAddToCartButton() {
      cy.get(selectors.addToCartButton).click();
      return pageActions;
    },
  };

  return { selectors, pageActions };
};
