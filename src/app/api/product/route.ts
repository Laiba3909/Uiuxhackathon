import axios from 'axios';
import { client } from '@/sanity/lib/client';
import {  NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch data from the API
    const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');

    // Insert or update each product into Sanity
    for (const product of data) {
      // Ensure data validation before inserting
      if (!product.id || !product.name || typeof product.price !== 'number') {
        console.error(`Invalid product data: ${JSON.stringify(product)}`);
        continue;
      }

      await client.createOrReplace({
        _type: 'product',
        _id: product.id,
        name: product.name,
        image: product.imagePath,
        price: parseFloat(product.price),
        description: product.description || 'No description provided',
        discountPercentage: product.discountPercentage || 0,
        isFeaturedProduct: !!product.isFeaturedProduct,
        stockLevel: product.stockLevel || 0,
        category: product.category || 'Uncategorized',
      });
    }

    return NextResponse.json({ message: 'Data inserted or updated successfully!' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error inserting data into Sanity:', error.message);
      return NextResponse.json({ error: 'Failed to fetch or insert data into Sanity' }, { status: 500 });
    } else {
      console.error('Unexpected error:', error);
      return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
  }
}
