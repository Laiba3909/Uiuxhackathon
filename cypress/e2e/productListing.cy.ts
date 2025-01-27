interface Product {
  _id: string;
  name: string;
  imagePath: string;
  description: string;
  discountPercentage: number;
  price: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
}
it('should display the correct product details', () => {
  const product: Product = {
    _id: '10',
    name: "Alpha Table",
    imagePath: "https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 900,
    description: "A sturdy oak chair with a sleek and minimalist design.",
    discountPercentage: 10,
    isFeaturedProduct: false,
    stockLevel: 18,
    category: "Table"
  };

  cy.visit(`/product/${product._id}`, { failOnStatusCode: false });

  // Check if the product details are rendered correctly
  cy.get('h1').should('contain', product.name);
  cy.get('p').should('contain', `Rs.${product.price}`);

  // Check if the image is displayed and contains the optimized image URL
  cy.get('img').should('have.attr', 'src').and('include', '/_next/image'); // Check for Next.js image optimization

  cy.get('p').should('contain', product.description);
  cy.get('span').should('contain', product.category);
  cy.get('span').should('contain', product.stockLevel);
  cy.get('span').should('contain', product.isFeaturedProduct ? 'Yes' : 'No');

 
});
