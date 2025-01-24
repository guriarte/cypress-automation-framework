import assert from '../../support/assertions/pageAssertions';
import { AccountPage } from '../../support/pages/accountPage';
import { CheckoutPage } from '../../support/pages/checkoutPage';
import { HeaderComponent } from '../../support/pages/header';
import { HomePage } from '../../support/pages/homePage';
import { LoginPage } from '../../support/pages/loginPage';
import { ProductPage } from '../../support/pages/productPage';
import rawBillingData from '../../fixtures/billingAddress.json'
import { BillingData } from '../../support/types/billingInfo'

const billingAddressData = rawBillingData as BillingData;

describe('Purchase Flow Tests', () => {
  it('Purchase Flow Happy Path', () => {
    const header = HeaderComponent().pageActions;
    const loginPage = LoginPage().pageActions;
    const homePage = HomePage().pageActions;
    const checkoutPage = CheckoutPage().pageActions;

    const { pageActions: productPage, selectors: productPageSelectors } = ProductPage();
    const { pageActions: accountPage, selectors: accountPageSelectors } =
      AccountPage();
    cy.visit('/');
    header.clickSignInButton();
    loginPage.loginUI('customer@practicesoftwaretesting.com', 'welcome01');
    assert.elementIsVisible(accountPageSelectors.profileButton);
    header.clickLogo();
    homePage.searchForProduct('Pliers').clickOnProduct('Combination Pliers');
    productPage
      .clickIncreaseQuantityButton()
      .clickIncreaseQuantityButton()
      .clickAddToCartButton()
      .clickAddedToCartModal(); // click it so it doesn't cover the shoppingCartButton
    header.clickShoppingCartButton();
    checkoutPage.setQuantityForProduct('Combination Pliers', 1).clickProceedToCheckoutButtonInStepOne().clickProceedToCheckoutButtonInStepTwo();
    checkoutPage.fillBillingInfoForm(billingAddressData);
    cy.get('[data-test="proceed-3"]').click();
    cy.get('[data-test="payment-method"]').select('Credit Card');
    cy.get('[data-test="credit_card_number"]')
      .clear()
      .type('1234-5678-9012-3456');
    cy.get('[data-test="expiration_date"]').clear().type('11/2040');
    cy.get('[data-test="cvv"]').clear().type('123');
    cy.get('[data-test="card_holder_name"]').clear().type('Jane Doe');
    cy.get('[data-test="finish"]').click();
    cy.contains('Payment was successful').should('be.visible');
    cy.get('[data-test="finish"]').click();
  });
});
