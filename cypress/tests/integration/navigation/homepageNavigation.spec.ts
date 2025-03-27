describe('Homepage Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should sort products by name alphabetical order ASC', () => {
    cy.intercept('GET', 'http://localhost:8091/products?sort=name,asc&*').as('sortAscApi');
    cy.get('[data-test="sort"]').select('name,asc');
    cy.wait('@sortAscApi').its('response.statusCode').should('eq', 200);
    cy.get('[data-test="product-name"]').itsTextElementsAreInAscendingOrder();
  });

  it('Should sort products by price from lower to higher', () => {
    cy.intercept('GET', 'http://localhost:8091/products?sort=price,asc&*').as('sortPriceAscApi');
    cy.get('[data-test="sort"]').select('price,asc');
    cy.wait('@sortPriceAscApi').its('response.statusCode').should('eq', 200);
    cy.get('[data-test="product-price"]').itsTextElementsAreInAscendingOrder();
  });

  it('Should sort by keyword search', () => {
    cy.intercept('GET', 'http://localhost:8091/products/search?q=Hammer').as('searchApi');
    cy.get('[data-test="search-query"]').type('Hammer{enter}');
    cy.wait('@searchApi').its('response.statusCode').should('eq', 200);
    cy.get('[data-test="product-name"]').itsTextElementsInclude('Hammer');
  });

  it('Should filter by category', () => {
    cy.intercept('GET', /http:\/\/localhost:8091\/products\?between=price,1,100&by_category.*/).as(
      'productsApi'
    );
    cy.get('ul fieldset input[class="icheck"]').getRandomElement().check();
    cy.wait('@productsApi').then(interception => {
      cy.wrap(interception).its('response.statusCode').should('eq', 200);
      cy.wrap(interception.response?.body.data).then(data => {
        cy.wrap(data).each((product: any) => {
          cy.contains(`${product.name}`).should('be.visible');
          cy.get('ul fieldset input[class="icheck"]:checked')
            .parent('label')
            .invoke('text')
            .should('contain', `${product.category.name}`);
        });
      });
    });
  });
});
