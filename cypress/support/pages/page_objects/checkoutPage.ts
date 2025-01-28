import { BillingData } from '../../types/billingInfo';
import { CreditCardInfo } from '../../types/creditCardInfo';

export const CheckoutPage = () => {
  const selectors = Object.freeze({
    productTable: 'table > tbody',
    proceedToCheckoutButtonInStepOne: '[data-test="proceed-1"]',
    proceedToCheckoutButtonInStepTwo: '[data-test="proceed-2"]',
    proceedToCheckoutButtonInStepThree: '[data-test="proceed-3"]',
    addressTextField: '[data-test="address"]',
    cityTextField: '[data-test="city"]',
    stateTextField: '[data-test="state"]',
    countryTextField: '[data-test="country"]',
    postcodeTextField: '[data-test="postcode"]',
    paymentMethodDropdown: '[data-test="payment-method"]',
    creditCardNumberTextField: '[data-test="credit_card_number"]',
    creditCardExpirationDateTextField: '[data-test="expiration_date"]',
    creditCardCVV: '[data-test="cvv"]',
    creditCardName: '[data-test="card_holder_name"]',
    orderConfirmation: '#order-confirmation',
  });

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

    clickProceedToCheckoutButtonInStepThree: () => {
      cy.get(selectors.proceedToCheckoutButtonInStepThree).click();
      return pageActions;
    },

    clickConfirmButton: () => {
      cy.get('[data-test="finish"]').click();
      return pageActions;
    },

    fillBillingInfoForm(billingData: BillingData) {
      cy.get(selectors.addressTextField).clear().type(billingData.address);
      cy.get(selectors.cityTextField).clear().type(billingData.city);
      cy.get(selectors.stateTextField).clear().type(billingData.state);
      cy.get(selectors.countryTextField).clear().type(billingData.country);
      cy.get(selectors.postcodeTextField).clear().type(billingData.postcode);
      return pageActions;
    },

    selectPaymentMethod(paymentMethod: string) {
      cy.get(selectors.paymentMethodDropdown).select(paymentMethod);
      return pageActions;
    },

    fillCreditCardInfoForm(creditCardData: CreditCardInfo) {
      cy.get(selectors.creditCardNumberTextField)
        .clear()
        .type(creditCardData.creditCardNumber);
      cy.get(selectors.creditCardExpirationDateTextField)
        .clear()
        .type(creditCardData.expirationDate);
      cy.get(selectors.creditCardCVV).clear().type(creditCardData.cvv);
      cy.get(selectors.creditCardName)
        .clear()
        .type(creditCardData.cardHolderName);

      return pageActions;
    },
  };

  return { selectors, pageActions };
};
