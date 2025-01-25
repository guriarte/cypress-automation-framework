const aliasHelper = {
  saveInvoiceNumberInAliasFromSelector: (selector: string) => {
    cy.get(selector)
      .invoke('text')
      .then(text => {
        const match = text.match(/(INV-\d+)/);
        if (match) {
          cy.wrap(match[1]).as('invoiceNumber');
        } else {
          cy.wrap('INVOICENUMBERNOTFOUND').as('invoiceNumber');
        }
      });
  },
};

export default aliasHelper;
