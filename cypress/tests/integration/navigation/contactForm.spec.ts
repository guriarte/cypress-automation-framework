describe('Contact Form Tests', () => {
  it('Should fill a Contact form with valid data', () => {
    cy.intercept('POST', 'http://localhost:8091/messages').as('messagesApi');
    cy.intercept('POST', 'http://localhost:8091/messages/*/attach-file').as('fileUpload');
    cy.visit('/contact');
    cy.get('[data-test="first-name"]').type('German');
    cy.get('[data-test="last-name"]').type('Uriarte');
    cy.get('[data-test="email"]').type('uriarte.german@gmail.com');
    cy.get('[data-test="subject"]').select('return');
    cy.get('#message').type(
      'This is a message.This is a message.This is a message.This is a message.This is a message.This is a message.This is a message.This is a message.This is a message.This is a message.This is a message.'
    );
    // cy.get('input[type=file]').selectFile('file.json')
    cy.get('[data-test="attachment"]').selectFile('cypress/fixtures/textFile.txt');
    cy.get('[data-test="contact-submit"]').click();
    cy.wait('@messagesApi').normalizeInterceptResponse().verifyStatusCode(200);
  });
});
