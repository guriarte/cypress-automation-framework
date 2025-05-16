import { BillingData } from '../../../types/billingInfo';
import { CreditCardInfo } from '../../../types/creditCardInfo';

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      fillCheckoutBillingAddressForm(billingDataForm: BillingData): Chainable<void>;
      fillCreditCardForm(creditCardDataForm: CreditCardInfo): Chainable<void>;
    }
  }
}
