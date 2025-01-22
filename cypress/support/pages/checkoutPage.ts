export const CheckoutPage = () => {
  const selectors = {
    productTable: 'table > tbody',
  };

  const pageActions = {
    setQuantityForProduct: (productName: string, quantity: number) => {
      cy.get(selectors.productTable)
        .children(`:contains("${productName}")`)
        .find('input')
        .clear()
        .type(quantity.toString());
    },
  };

  return { selectors, pageActions };
};
