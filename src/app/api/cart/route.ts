import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

// Define the Product type
type Product = {
  id: number;
  name: string;
  price: number;
};

// Initialize an empty cart with the Product type
let cart: Product[] = [];  // In-memory cart; replace with DB in production

// GET request to retrieve the cart
export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  // If not authenticated, return a 401
  if (!userId) {
    return NextResponse.json({ message: 'User is not authenticated' }, { status: 401 });
  }

  // Return the current cart
  return NextResponse.json(cart);
}

// POST request to add a product to the cart
export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  // If not authenticated, return a 401
  if (!userId) {
    return NextResponse.json({ message: 'User is not authenticated' }, { status: 401 });
  }

  const newProduct: Product = await req.json();

  // Validate product data
  if (!newProduct.id || !newProduct.name || !newProduct.price) {
    return NextResponse.json({ message: 'Invalid product data' }, { status: 400 });
  }

  // Add the new product to the cart
  cart.push(newProduct);

  return NextResponse.json(cart);
}

// DELETE request to remove a product from the cart
export async function DELETE(req: NextRequest) {
  const { userId } = getAuth(req);

  // If not authenticated, return a 401
  if (!userId) {
    return NextResponse.json({ message: 'User is not authenticated' }, { status: 401 });
  }

  const { searchParams, pathname } = new URL(req.url);

  // If "clear=true" is passed, clear the entire cart
  if (searchParams.has('clear')) {
    cart = []; // Clear the cart
    return NextResponse.json(cart);
  }

  // Get the product ID from the URL
  const id = pathname.split('/').pop();
  if (!id) {
    return NextResponse.json({ message: 'ID parameter is required for DELETE' }, { status: 400 });
  }

  // Filter out the product with the given ID
  cart = cart.filter((product) => product.id !== parseInt(id as string));

  return NextResponse.json(cart);
}

