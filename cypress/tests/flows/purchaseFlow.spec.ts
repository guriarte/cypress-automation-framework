import billingAddressData from '../../fixtures/billingAddress.json';
import creditCardInfo from '../../fixtures/creditCardInfo.json';
import { checkoutPageSelectors } from '../../support/selectors/checkoutPageSelectors';
import { headerSelectors } from '../../support/selectors/headerSelectors';
import { productPageSelectors } from '../../support/selectors/productPageSelectors';
import { storefrontSelectors } from '../../support/selectors/storefrontSelectors';

describe('Purchase Flow Tests', () => {
  it('Should log in with valid user, browse items, add to cart and finalize it', () => {
    cy.visit('/');
    cy.get(headerSelectors.signInButton).click();
    cy.loginUI('customer@practicesoftwaretesting.com', 'welcome01');
    cy.url().should('contain', '/account');
    cy.get(headerSelectors.homePageLogo).click();
    cy.get(storefrontSelectors.searchBarTextBox).type('Pliers{enter}');
    cy.contains('Combination Pliers').click();
    cy.get(productPageSelectors.increaseQuantityButton).click().click();
    cy.get(productPageSelectors.addToCartButton).click();
    cy.contains('Product added to shopping cart').should('be.visible');
    cy.get(headerSelectors.goToCartButton).click({ force: true });
    cy.url().should('contain', '/checkout');
    cy.get(checkoutPageSelectors.quantityTextBox).clear().type('1');
    cy.get(checkoutPageSelectors.proceedButton).click();
    cy.contains('You can proceed to checkout').should('be.visible');
    cy.get(checkoutPageSelectors.proceedButton).click();
    cy.fillCheckoutBillingAddressForm(billingAddressData);
    cy.get(checkoutPageSelectors.proceedButton).click();
    cy.get(checkoutPageSelectors.paymentMethodDropdown).select('credit-card');
    cy.fillCreditCardForm(creditCardInfo);
    cy.get(checkoutPageSelectors.finishButton).click();
    cy.contains('Payment was successful').should('be.visible');
    cy.get(checkoutPageSelectors.finishButton).click();
    cy.contains('Thanks for your order! Your invoice number is INV').should('be.visible');
  });
});
