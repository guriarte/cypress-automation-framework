import assert from '../../support/assertions/pageAssertions';
import { AccountPage } from '../../support/pages/accountPage';
import { CheckoutPage } from '../../support/pages/checkoutPage';
import { HeaderComponent } from '../../support/pages/header';
import { HomePage } from '../../support/pages/homePage';
import { LoginPage } from '../../support/pages/loginPage';
import { ProductPage } from '../../support/pages/productPage';
import rawBillingData from '../../fixtures/billingAddress.json';
import { BillingData } from '../../support/types/billingInfo';
import rawCreditCardData from '../../fixtures/creditCardInfo.json';
import { CreditCardInfo } from '../../support/types/creditCardInfo';
import userCredentials from '../../fixtures/userCredentials.json';

const billingAddressData = rawBillingData as BillingData;
const creditCardData = rawCreditCardData as CreditCardInfo;
const customerUserEmail = userCredentials.customerUser.email;
const customerUserPassword = Cypress.env('CUSTOMERUSER_PASSWORD');
const { pageActions: header } = HeaderComponent();
const { pageActions: loginPage } = LoginPage();
const { pageActions: homePage } = HomePage();
const { pageActions: productPage } = ProductPage();
const { selectors: accountPageSelectors } = AccountPage();
const { pageActions: checkoutPage } = CheckoutPage();

describe('Purchase Flow Tests', () => {
  it('Purchase Flow Happy Path', () => {
    homePage.visit();
    header.clickSignInButton();
    loginPage.loginUI(customerUserEmail, customerUserPassword);
    assert.elementIsVisible(accountPageSelectors.profileButton);
    header.clickLogo();
    homePage.searchForProduct('Pliers').clickOnProduct('Combination Pliers');
    productPage
      .clickIncreaseQuantityButton()
      .clickIncreaseQuantityButton()
      .clickAddToCartButton()
      .clickAddedToCartModal(); // click it so it doesn't cover the shoppingCartButton
    header.clickShoppingCartButton();
    checkoutPage
      .setQuantityForProduct('Combination Pliers', 1)
      .clickProceedToCheckoutButtonInStepOne()
      .clickProceedToCheckoutButtonInStepTwo()
      .fillBillingInfoForm(billingAddressData)
      .clickProceedToCheckoutButtonInStepThree()
      .selectPaymentMethod('Credit Card')
      .fillCreditCardInfoForm(creditCardData)
      .clickConfirmButton();
    assert.elementContainingTextIsVisible('Payment was successful');
    checkoutPage.clickConfirmButton();
  });
});
