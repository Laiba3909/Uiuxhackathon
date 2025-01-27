describe('Cart Functionality', () => {
  beforeEach(() => {
    // Directly visit the product page
    cy.visit('https://uiuxhackathon-two.vercel.app/product/10', {
      failOnStatusCode: false, // Prevents test from failing on redirects or 404
    });
  });

  it('should add a product to the cart and update cart contents', () => {
  
  });
});
