const apiUrl = Cypress.env('API_URL');

describe('Purchase Cart API Tests', () => {
  it.only('Should create a purchase cart and retrieve it', () => {
    cy.request('POST', `${apiUrl}/carts`)
      .verifyStatusCode(201)
      .verifyBodyContainsProperties(['id'])
      .verifyHeaders({ 'content-type': 'application/json;charset=UTF-8' })
      .verifyDurationIsLessThan(1000);
    // cy.wrap(response.body.id).should('match', /^[A-Za-z0-9]+$/);
  });
});
