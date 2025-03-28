Cypress.Commands.add('itsTextElementsAreInAscendingOrder', { prevSubject: true }, textElements => {
  const textElementsArray = textElements
    .toArray()
    .map((textElements: { innerText: string }) => textElements.innerText.trim());
  const sortedArray = [...textElementsArray].sort((a, b) => +a - +b);
  expect(sortedArray, `Asserting if ${textElements} are sorted in ascending order`).to.deep.equal(
    textElementsArray
  );
});

Cypress.Commands.add('itsTextElementsInclude', { prevSubject: true }, (prevSubject, text) => {
  const regex = new RegExp(text, 'i');
  cy.wrap(prevSubject).each($el => {
    cy.wrap($el).invoke('text').should('match', regex);
  });
});

Cypress.Commands.add('getRandomElement', { prevSubject: true }, prevSubject => {
  const randomNumber = Math.floor(Math.random() * prevSubject.length);
  cy.wrap(prevSubject).eq(randomNumber);
});

Cypress.Commands.add(
  'verifyStatusCode',
  { prevSubject: true },
  (prevSubject, expectedStatusCode: number) => {
    cy.wrap(prevSubject).its('status').should('eq', expectedStatusCode);
    cy.wrap(prevSubject);
  }
);

Cypress.Commands.add(
  'verifyBodyContainsProperties',
  { prevSubject: true },
  (prevSubject, properties) => {
    cy.wrap(prevSubject)
      .its('body')
      .then(body => {
        properties.forEach(property => {
          expect(body).to.have.property(property);
        });
      });

    cy.wrap(prevSubject);
  }
);

Cypress.Commands.add('verifyHeaders', { prevSubject: true }, (prevSubject, headers) => {
  cy.log(JSON.stringify(prevSubject));
  cy.wrap(prevSubject)
    .its('headers')
    .then(header => {
      Object.entries(headers).forEach(([key, value]) => {
        expect(header).to.have.property(key, value);
      });
    });

  cy.wrap(prevSubject);
});

Cypress.Commands.add('verifyDurationIsLessThan', { prevSubject: true }, (prevSubject, time) => {
  cy.wrap(prevSubject).its('duration').should('be.lessThan', time);

  cy.wrap(prevSubject);
});

Cypress.Commands.add('normalizeInterceptResponse', { prevSubject: true }, interception => {
  const normalizedResponse = {
    body: interception.response.body,
    headers: interception.response.headers,
    status: interception.response.statusCode,
    statusText: interception.response.statusMessage,
  };
  cy.wrap(normalizedResponse);
});

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to create a purchase cart.
     * @example cy.postCreatePurchaseCart()
     */
    postCreatePurchaseCart(): Chainable<Cypress.Response<any>>;
    itsTextElementsAreInAscendingOrder(): Chainable<Cypress.Response<any>>;
    itsTextElementsInclude(text: string): Chainable<Cypress.Response<any>>;
    getRandomElement(): Chainable<Cypress.Response<any>>;
    verifyStatusCode(expectedStatusCode: number): Chainable<Cypress.Response<any>>;
    verifyBodyContainsProperties(properties: Array<string>): Chainable<Cypress.Response<any>>;
    verifyHeaders(headers: Object): Chainable<Cypress.Response<any>>;
    verifyDurationIsLessThan(time: number): Chainable<Cypress.Response<any>>;
    normalizeInterceptResponse(): Chainable<Cypress.Response<any>>;
  }
}
