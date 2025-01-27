describe('API Error Handling Test', () => {
  it('should handle invalid product data gracefully', () => {
    // Place cy.intercept() inside the test block
    cy.intercept('GET', '/product/*', {
      statusCode: 404,
      body: { error: 'Product not found' },
    }).as('getInvalidProductData');

    // Continue with the test
    cy.visit('/shop');
    cy.wait('@getInvalidProductData', { timeout: 15000 }).then((interception) => {
      expect(interception.response?.statusCode).to.eq(404);  // Ensure the response is 404
    });
  });
});


