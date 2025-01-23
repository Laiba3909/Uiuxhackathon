'use client';
import React, { useEffect, useState } from 'react'; 
import { client } from "../../../sanityClient";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  imagePath: string;
  description: string;
  price: number;
  category: string;
  stockLevel: number;
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(savedWishlist);

    const fetchProducts = async () => {
      const query = `*[_type == 'product' && _id in ${JSON.stringify(savedWishlist)}]`;
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const removeFromWishlist = (productId: string) => {
   
    const updatedWishlist = wishlist.filter((id) => id !== productId);

   
    setWishlist(updatedWishlist);

   
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    setProducts(products.filter((product) => product._id !== productId));
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="bg-gray-100 p-8 rounded-full shadow-xl mb-6">
            <Image
              src="/wishlist.png"
              alt="Empty Wishlist"
              className="w-52 h-52 rounded-xl"
              width={300}
              height={300}
              priority
            />
          </div>
          <p className="text-lg text-gray-500 mb-6">Looks like you haven&apos;t added anything yet. Do Wishlist to fill it up!</p>
          <button
            onClick={() => window.location.href = '/shop'}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Let&apos;s Go
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="relative group">
                <Link href={`/product/${product._id}`}>
                  <Image
                    className="w-full h-64 object-cover group-hover:opacity-80"
                    src={product.imagePath}
                    alt={product.name}
                    width={400}
                    height={400}
                    objectFit="cover"
                  />
                </Link>
              </div>
              <div className="p-6">
                <Link href={`/product/${product._id}`}>
                  <h3 className="font-semibold text-lg text-center text-gray-800 hover:text-indigo-600">{product.name}</h3>
                </Link>
                <p className="text-gray-500 text-sm mt-2">{product.description}</p>
                <p className="text-sm text-gray-600 mt-4">
                  {product.stockLevel > 0 ? `${product.stockLevel} in stock` : 'Out of stock'}
                </p>
                <p className="text-sm text-gray-600 mt-2">Category: {product.category}</p>
                <div className="flex justify-center mt-4">
                  <Link href={`/product/${product._id}`} passHref>
                    <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700">
                      View Product
                    </button>
                  </Link>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => removeFromWishlist(product._id)}
                    className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
