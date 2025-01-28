import {
  getPurchaseCartResponse,
  postPurchaseCartResponse,
} from '../../support/types/cartsApi';

const apiUrl = Cypress.env('API_URL');

describe('Purchase Cart API Tests', () => {
  it.only('Should create a purchase cart and retrieve it', () => {
    cy.request<postPurchaseCartResponse>('POST', `${apiUrl}/carts`).as(
      'postPurchaseCartApiResponse',
    );
    cy.get<Cypress.Response<postPurchaseCartResponse>>(
      '@postPurchaseCartApiResponse',
    ).then(response => {
      expect(response.body.id).to.exist;
    });

    cy.get<Cypress.Response<postPurchaseCartResponse>>(
      '@postPurchaseCartApiResponse',
    ).then(response => {
      const cartId = response.body.id;
      cy.request<getPurchaseCartResponse>(
        'GET',
        `${apiUrl}/carts/${cartId}`,
      ).as('getPurchaseCartApiResponse');
      cy.get<Cypress.Response<getPurchaseCartResponse>>(
        '@getPurchaseCartApiResponse',
      ).then(response => {
        cy.get<Cypress.Response<postPurchaseCartResponse>>(
          '@postPurchaseCartApiResponse',
        ).then(postResponse => {
          expect(response.body.id).to.eq(postResponse.body.id);
        });
      });
    });
  });
});
