import assert from '../../support/assertions/pageAssertions';
import { AccountPage } from '../../support/pages/accountPage';
import { HeaderComponent } from '../../support/pages/header';
import { HomePage } from '../../support/pages/homePage';
import { LoginPage } from '../../support/pages/loginPage';
import { ProductPage } from '../../support/pages/productPage';

describe('Purchase Flow Tests', () => {
  it('Purchase Flow Happy Path', () => {
    const header = HeaderComponent().pageActions;
    const loginPage = LoginPage().pageActions;
    const homePage = HomePage().pageActions;
    const productPage = ProductPage().pageActions;
    const accountPage = AccountPage().pageActions;
    const accountPageSelectors = AccountPage().selectors;
    cy.visit('/');
    /*
    cy.header()
      .clickSignInButton()
      .loginPage()
      .loginUI('customer@practicesoftwaretesting.com', 'welcome01')
      .header()
      .clickLogo()
      .homePage()
      .searchForProduct('Pliers')
      .clickOnProduct('Combination Pliers')
      .productPage()
      .clickIncreaseQuantityButton()
      .clickIncreaseQuantityButton()
      .clickAddToCartButton()
      // .contains('Product added to shopping cart')
      // .should('be.visible')
      // .click()
      .header()
      .clickShoppingCartButton();
*/

    header.clickSignInButton();
    loginPage.loginUI('customer@practicesoftwaretesting.com', 'welcome01');
    assert.elementIsVisible(accountPageSelectors.profileButton);
    header.clickLogo();
    homePage.searchForProduct('Pliers').clickOnProduct('Combination Pliers');
    productPage
      .clickIncreaseQuantityButton()
      .clickIncreaseQuantityButton()
      .clickAddToCartButton();
    header.clickShoppingCartButton();

    cy.get('table > tbody')
      .children(':contains("Combination Pliers")')
      .find('input')
      .clear()
      .type('1');
    cy.get('[data-test="proceed-1"]').click();
    cy.get('[data-test="proceed-2"]').click();
    cy.get('[data-test="address"]').clear().type('Fake Address 123');
    cy.get('[data-test="city"]').clear().type('Fake City');
    cy.get('[data-test="state"]').clear().type('Fake State');
    cy.get('[data-test="country"]').clear().type('Fake Country');
    cy.get('[data-test="postcode"]').clear().type('12345');
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
