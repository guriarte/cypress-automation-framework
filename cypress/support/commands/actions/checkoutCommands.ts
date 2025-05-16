import { checkoutPageSelectors } from '../../selectors/checkoutPageSelectors';
import { BillingData } from '../../types/billingInfo';
import { CreditCardInfo } from '../../types/creditCardInfo';

Cypress.Commands.add('fillCheckoutBillingAddressForm', (billingAddressData: BillingData) => {
  cy.get(checkoutPageSelectors.addressTextBox).clear().type(billingAddressData.address);
  cy.get(checkoutPageSelectors.cityTextBox).clear().type(billingAddressData.city);
  cy.get(checkoutPageSelectors.stateTextBox).clear().type(billingAddressData.state);
  cy.get(checkoutPageSelectors.countryTextBox).clear().type(billingAddressData.country);
  cy.get(checkoutPageSelectors.postCodeTextBox).clear().type(billingAddressData.postcode);
});

Cypress.Commands.add('fillCreditCardForm', (creditCardData: CreditCardInfo) => {
  cy.get(checkoutPageSelectors.creditCardNumberTextBox)
    .clear()
    .type(creditCardData.creditCardNumber);
  cy.get(checkoutPageSelectors.creditCardExpirationDateTextBox)
    .clear()
    .type(creditCardData.expirationDate);
  cy.get(checkoutPageSelectors.creditCardCVVTextBox).clear().type(creditCardData.cvv);
  cy.get(checkoutPageSelectors.creditCardHolderNameTextBox)
    .clear()
    .type(creditCardData.cardHolderName);
});
