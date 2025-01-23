"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./Components/button";
import "@fortawesome/fontawesome-free/css/all.min.css";
import sofa from "../../public/sofa.png";
import sofa2 from "../../public/sofa2.png";
import table from "../../public/table.png";
import luxurysofa from "../../public/luxurysofa.png";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  imagePath: string;
  description: string;
  price: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
}

export default function Home() {
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [load, setload] = useState(true);
  useEffect(() => {
    const fetchFurtherProducts = async () => {
      try {
        const productsData: Product[] = await client.fetch(
          `*[_type == 'product'] | order(_createdAt desc)[0..3]`
        );
        setDisplayProducts(productsData);
        setload(true);
      } catch (error) {
        console.error("error while fetching products from sanity ", error);
      } finally {
        setload(false);
      }
    };

    fetchFurtherProducts();
  }, []);

  const articles = [
    {
      title: "Going all-in with millennial design",
      readTime: "5 min",
      date: "12th Oct 2022",
      image: "/article1.jpg",
    },
    {
      title: "Going all-in with millennial design",
      readTime: "5 min",
      date: "12th Oct 2022",
      image: "/article2.jpg",
    },
    {
      title: "Going all-in with millennial design",
      readTime: "5 min",
      date: "12th Oct 2022",
      image: "/article3.jpg",
    },
  ];

  return (
    <main>
      <div className="w-full lg:h-[630px] md:h-[730px] bg-[#fbebb5] overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:gap-10 px-4 lg:px-20 py-10">
          <div className="family text-center lg:text-left lg:ml-[10%] mt-[16%] lg:mt-[20%] sm:mt-[9%]">
            <h1 className="text-4xl lg:w-96 sm:text-5xl lg:text-[60px]">
              Rocket single <span className="lg:mt-7 lg:block"> seater </span>
            </h1>
            <Link href="/shop">
              <Button
                name="Shop now"
                style="underline underline-offset-8 hover:text-gray-500 mt-4"
              />
            </Link>
          </div>

          <div className="mt-10 lg:mt-0">
            <Image
              src={sofa}
              alt="Sofa"
              className="mx-auto lg:mr-10 lg:-mt-9 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
              width={600}
              style={{height:'auto'}}
           
              priority
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 md:h-[920px] bg-[#faf4f4] h-[1000px] sm:h-[1000px] lg:h-[480px] xl:h-[480px]">
        <div>
          <Image
            src={table}
            className="mt-6 xl:w-[520px] md:ml-32 lg:mt-8 lg:ml-20 lg:w-[350px] md:[220px]"
            alt="Table"
            width={350}
         
            style={{height:'auto'}}
             loading="lazy"

          />
          <div className="family2 -mt-20 ml-12 md:-mt-40 md:ml-[180px] xl:ml-[210px]">
            <h1 className="text-3xl">Side table</h1>
            <Link href="/shop">
              <Button
                name="View More"
                style="mt-4 underline underline-offset-8 hover:text-gray-500"
              />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={sofa2}
            className="mt-6 xl:w-[550px] lg:ml-6 lg:w-[400px]"
            alt="Sofa"
            width={400}
            height={250}
            loading="lazy"
          />
          <div className="family2 md:-mt-40 md:ml-[180px] xl:ml-[210px] xl:-mt-36 lg:-mt-24 lg:ml-[160px] -mt-20 ml-20">
            <h1 className="text-3xl">Side table</h1>
            <Link href="/shop">
              <Button
                name="View More"
                style="mt-4 underline underline-offset-8 hover:text-gray-500"
              />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h1 className="mt-8 text-center text-4xl">Top Picks For You</h1>
        <p className="text-center mt-3 text-gray-500">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>
      <div>
        {load && (
          <div className="text-2xl mt-6 text-center">
            Loading Products .......🚌
          </div>
        )}

        {!load && displayProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 px-4 sm:px-8 md:px-12">
            {displayProducts.map((product) => (
              <div
                key={product._id}
                className="border p-4 rounded-lg shadow-md"
              >
                <div className="w-full h-48 mb-4">
                  <Link href={`/product/${product._id}`}>
                    <Image
                      className="w-full h-full object-cover"
                      src={product.imagePath}
                      alt={product.name}
                      width={400}
                      height={400}
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="justify-between flex">
                  <div>
                    <h3 className="mt-5 w-44">{product.name}</h3>
                    <p className="mt-2 text-xl font-semibold">
                      {product.price}
                    </p>
                  </div>
                  <Link href={`/product/${product._id}`}>
                    <button className="bg-[#f8e29b] text-black py-2 px-4 mt-7 rounded">
                      Click Here
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/*  no products  found if in sanity */}
        {!load && displayProducts.length === 0 && (
          <div className="text-xl mt-6">No products available.</div>
        )}
      </div>

      <div>
        <h1 className="text-center text-2xl mt-16 underline underline-offset-[18px]">
          View More
        </h1>
      </div>

      <br />

      <div className="bg-[#fff9e5] mt-6 w-full h-[580px] lg:h-[540px] lg:flex lg:justify-between block">
        <div className="md:flex md:items-center md:justify-center">
          <Image
            className="lg:w-[700px] w-[500px] lg:ml-7"
            src={luxurysofa}
            alt="Luxury Sofa"
            width={700}
            style={{height:'auto'}}
            loading="lazy"
          />
        </div>

        <div className="lg:mr-20 ml-5 lg:mt-52">
          <p className="text-center font-semibold">New Arrivals</p>
          <h1 className="font-semibold text-center text-4xl lg:text-4xl xl:text-5xl">
            Asgaard sofa
          </h1>
          <div className="flex items-center justify-center">
            <Link href="/cart">
              <Button
                name="Order Now"
                style="xl:ml-16 xl:mt-10 mt-7 lg:ml-24 border-2 border-black w-44 h-12"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <h1 className="text-3xl">Our Blogs</h1>
        <p>Find a bright ideal to suit your taste with our great selection</p>
      </div>

      <div className="sm:flex-row flex-col flex justify-center items-center gap-12 mt-20">
        {articles.map((item, index) => (
          <div key={index}>
            <Image
              className="rounded-xl"
              src={item.image}
              alt="Article Image"
              width={300}
              height={300}
              loading="lazy"
            />
            <h2 className="mt-5 text-center">{item.title}</h2>
            <div className="flex justify-center">
              <Link href="/blogabout">
                <Button
                  name="Read More"
                  style="text-center mt-2 font-semibold underline underline-offset-[10px] text-xl"
                />
              </Link>
            </div>
            <div className="text-center mt-3">
              <p className="text-gray-400 text-sm">
                {item.date} &bull; {item.readTime}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-2xl">
        <h1>
          <Link href="/blogabout">Looking for more?</Link>
        </h1>
      </div>
      <br />
      <hr />
      <br />
    </main>
  );
}
