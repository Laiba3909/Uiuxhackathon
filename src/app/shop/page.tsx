"use client";
import React, { useState, useEffect } from "react";
import { client } from "../../../sanityClient";
import Link from "next/link";
import Image from "next/image";
import back from "../../../public/back2.jpg";
import Button from "../Components/button";


interface Product {
  _id: string;
  name: string;
  imagePath: string;
  description: string;
  price: number;
  category: string;
  stockLevel: number;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [addwishlist, setWishlist] = useState<string[]>([]);
  const [Filtercount, setFilterCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [load, setload] = useState(true);
  const categories = ["Sofa", "Chair", "Table", "Bed"];
  const fetchCategory = async (category: string | null) => {
    const query = category
      ? `*[_type == 'product' && (category == '${category}' || name match '${category}' || description match '${category}')]`
      : `*[_type == 'product']`;
    try {
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
      setFilterCount(fetchedProducts.length)
      setload(true);
    } catch (error) {
      console.error("error while fetching products from sanity ", error);
      setFilterCount(0)
    } finally {
      setload(false);
    }
  };

  
  //  selection for different  filter products
  const categorySelection = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
   
    } else {
      setSelectedCategory(category);
    }
  };

  //  adding/removing products from the wishlist
  const togglingWishlist = (productId: string) => {
    let updateWishlist = [...addwishlist];
    if (updateWishlist.includes(productId)) {
      updateWishlist = updateWishlist.filter((id) => id !== productId);
      alert("Product Remove from wishlist");
    } else {
      updateWishlist.push(productId);
      alert(`Product Add To wishlist`); // Add to wishlist
    }
    setWishlist(updateWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updateWishlist));
  };

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);

    fetchCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <div className="relative">
        <Image
          className="w-full h-60"
          src={back}
          alt="background"
          style={{objectFit:"cover"}}
        />
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        <div className="absolute inset-0 flex justify-center items-center mt-6">
          <Image
            className="lg:w-[80px] -mt-24 w-[45px] h-[45px] lg:h-[80px]"
            src={"/logo.png"}
            alt="Logo"
            width={100}
            height={100}
            priority
            style={{objectFit:"cover"}}
          />
        </div>

        <div className="absolute inset-x-6 -mt-32 flex justify-center items-center">
          <h2 className="lg:text-5xl sm:text-3xl">Shop</h2>
        </div>

        <div className="absolute inset-x-6 -mt-16 flex justify-center items-center space-x-2">
          <h2>
            <Link href={"/"}>Home</Link>
          </h2>
          <p className="mt-1">
            <i className="fa-solid fa-greater-than"></i>
          </p>
          <h2>
            <Link href={"/shop"}>Shop</Link>
          </h2>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between w-full sm:h-24 h-28 lg:h-20 bg-[#faf4f4] mt-12 px-4 sm:px-8 md:px-12">
        <div className="flex items-center flex-wrap">
          <h2 className="ml-4 sm:ml-8 md:ml-28">
            <i className="fa-solid fa-sliders"></i>
          </h2>
          <p className="ml-2 sm:ml-3 font-semibold">Filter</p>

          <div className="ml-4 sm:ml-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => categorySelection(category)}
                className={`p-2 ${selectedCategory === category ? "bg-gray-300" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mr-4 sm:mr-8 md:mr-12 flex justify-center items-center space-x-4 sm:space-x-6">
          <h2 className="text-sm sm:text-base">Show</h2>
          <Button
            name={`${Filtercount}`}
            style="w-12 h-12 bg-white text-center text-gray-500"
          />
        </div>
      </div>

      {/* fetching products from sanity */}
      {load && (
        <div className="text-2xl mt-6 text-center">
          Loading Products .......🚌
        </div>
      )}
 
      {/* Display Products if loaded */}
      {!load && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 sm:px-8 md:px-12">
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-md">
              <div className="w-full h-48 mb-4">
                <Link href={`/product/${product._id}`}>
                  <Image
                    className="w-full h-full object-cover"
                    src={product.imagePath}
                    alt={product.name}
                    width={400}
                    height={400}
                    style={{objectFit:"cover"}}
                  />
                </Link>
              </div>
              <Link href={`/product/${product._id}`} passHref>
                <h3 className="font-semibold text-lg text-center">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                {product.stockLevel > 0
                  ? `${product.stockLevel} in stock`
                  : "Out of stock"}
              </p>
              <p className="text-sm text-gray-500">
                Category: {product.category}
              </p>
              <div className="justify-between flex">
                <Link href={`/product/${product._id}`} passHref>
                  <button className="bg-[#f8e29b] text-black py-2 px-4 mt-4 rounded">
                    Click Here
                  </button>
                </Link>
                <button onClick={() => togglingWishlist(product._id)}>
                  <i
                    className={`fa-solid fa-heart mt-8 w-5 h-8 ${addwishlist.includes(product._id) ? "text-red-500" : ""}`}
                  ></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* No Products Found from Sanity */}
      {!load && products.length === 0 && (
        <div className="text-xl mt-6">No products available.</div>
      )}

      <div className="w-full bg-[#faf4f4] xl:h-44 h-auto mt-16 flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 px-4 lg:px-8">
        <div className="text-center lg:text-left xl:space-x-16">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold">
            Free Delivery
          </h2>
          <p className="w-full lg:w-60 xl:w-80 mx-auto lg:mx-0 mt-4 text-gray-500 text-sm md:text-base">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>

        <div className="text-center lg:text-left xl:space-x-16">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold">
            90 Days Return
          </h2>
          <p className="w-full lg:w-60 xl:w-80 mx-auto lg:mx-0 mt-4 text-gray-500 text-sm md:text-base">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        <div className="text-center lg:text-left xl:space-x-16">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold">
            Secure Payments
          </h2>
          <p className="w-full lg:w-60 xl:w-80 mx-auto lg:mx-0 mt-4 text-gray-500 text-sm md:text-base">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <br />
      <br />

      <br />
      <br />
    </div>
  );
}
