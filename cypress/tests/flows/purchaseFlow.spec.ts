import billingAddressData from '../../fixtures/billingAddress.json';
import creditCardInfo from '../../fixtures/creditCardInfo.json';

describe('Purchase Flow Tests', () => {
  it('Should log in with valid user, browse items, add to cart and finalize it', () => {
    cy.visit('/');
    cy.get('[data-test="nav-sign-in"]').click();
    cy.loginUI('customer@practicesoftwaretesting.com', 'welcome01');
    cy.url().should('contain', '/account');
    cy.get('.navbar-brand').click();
    cy.get('[data-test="search-query"]').type('Pliers{enter}');
    cy.contains('Combination Pliers').click();
    cy.get('[data-test="increase-quantity"]').click().click();
    cy.get('[data-test="add-to-cart"]').click();
    cy.contains('Product added to shopping cart').should('be.visible');
    cy.get('[data-test="nav-cart"]').click({ force: true });
    cy.url().should('contain', '/checkout');
    cy.get('[data-test="product-quantity"]').clear().type('1');
    cy.get('[data-test="proceed-1"]').click();
    cy.get('[data-test="proceed-2"]').click();
    cy.get('[data-test="address"]').clear().type(billingAddressData.address);
    cy.get('[data-test="city"]').clear().type(billingAddressData.city);
    cy.get('[data-test="state"]').clear().type(billingAddressData.state);
    cy.get('[data-test="country"]').clear().type(billingAddressData.country);
    cy.get('[data-test="postcode"]').clear().type(billingAddressData.postcode);
    cy.get('[data-test="proceed-3"]').click();
    cy.get('[data-test="payment-method"]').select('credit-card');
    cy.get('[data-test="credit_card_number"]').clear().type(creditCardInfo.creditCardNumber);
    cy.get('[data-test="expiration_date"]').clear().type(creditCardInfo.expirationDate);
    cy.get('[data-test="cvv"]').clear().type(creditCardInfo.cvv);
    cy.get('[data-test="card_holder_name"]').clear().type(creditCardInfo.cardHolderName);
    cy.get('[data-test="finish"]').click();
    cy.contains('Payment was successful').should('be.visible');
    cy.get('[data-test="finish"]').click();
    cy.contains('Thanks for your order! Your invoice number is INV').should('be.visible');
  });
});
