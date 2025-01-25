const apiUrl = Cypress.env('API_URL');

export const loginMocks = {
  interceptServerError() {
    cy.intercept('POST', `${apiUrl}/users/login`, {
      statusCode: 500,
      body: { message: 'Internal Server Error' },
    }).as('loginApi');
  },
};
