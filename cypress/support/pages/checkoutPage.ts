import { BillingData } from "../types/billingInfo";

export const CheckoutPage = () => {
  const selectors = {
    productTable: 'table > tbody',
    proceedToCheckoutButtonInStepOne: '[data-test="proceed-1"]',
    proceedToCheckoutButtonInStepTwo: '[data-test="proceed-2"]',
    addressTextField: '[data-test="address"]',
    cityTextField: '[data-test="city"]',
    stateTextField: '[data-test="state"]',
    countryTextField: '[data-test="country"]',
    postcodeTextField: '[data-test="postcode"]',
  };

  const pageActions = {
    setQuantityForProduct: (productName: string, quantity: number) => {
      cy.get(selectors.productTable)
        .children(`:contains("${productName}")`)
        .find('input')
        .clear()
        .type(quantity.toString());

        return pageActions;
    },

    clickProceedToCheckoutButtonInStepOne: () => {
      cy.get(selectors.proceedToCheckoutButtonInStepOne).click();
      return pageActions;
    },

    clickProceedToCheckoutButtonInStepTwo: () => {
      cy.get(selectors.proceedToCheckoutButtonInStepTwo).click();
      return pageActions;
    },

    fillBillingInfoForm(billingData: BillingData) {
      cy.get(selectors.addressTextField).clear().type(billingData.address);
      cy.get(selectors.cityTextField).clear().type(billingData.city);
      cy.get(selectors.stateTextField).clear().type(billingData.state);
      cy.get(selectors.countryTextField).clear().type(billingData.country);
      cy.get(selectors.postcodeTextField).clear().type(billingData.postcode);
      return pageActions;
    }
  };

  return { selectors, pageActions };
};
