import Image from "next/image";
import Link from "next/link";
import Button from '../Components/button';
import back from '../../../public/back2.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";

export default function ShopPage() {
  const products = [
    { id: 1, name: "Trenton modular sofa_3", image: "/chair.png", price: 25000 },
    { id: 2, name: "Granite dining table with dining chair", image: "/dining.png", price: 25000 },
    { id: 3, name: "Outdoor bar table and stool", image: "/cafedining.png", price: 25000 },
    { id: 4, name: "Plain console with teak mirror", image: "/board.png", price: 25000 },
    { id: 5, name: "Grain coffee table", image: "/pic1.png", price: 15000 },
    { id: 6, name: "Kent coffee table", image: "/pic2.png", price: 225000 },
    { id: 7, name: "Round coffee table_color 2", image: "/pic3.png", price: 251000 },
    { id: 8, name: "Reclaimed teak coffee table", image: "/pic4.png", price: 25200 },
    { id: 9, name: "Plain console", image: "/pic5.png", price: 258200 },
    { id: 10, name: "Reclaimed teak Sideboard", image: "/pic6.png", price: 20000 },
    { id: 11, name: "SJP_0825", image: "/pic7.png", price: 200000 },
    { id: 12, name: "Bella chair and table", image: "/pic8.png", price: 100000 },
    { id: 13, name: "Granite square side table", image: "/table.png", price: 258800 },
    { id: 14, name: "Asgard sofa", image: "/pic10.png", price: 250000 },
    { id: 15, name: "Maya sofa three seater", image: "/pic11.png", price: 115000 },
    { id: 16, name: "Outdoor sofa set", image: "/pic12.png", price: 244000 },
  ];

  return (
    <main>
      <div className="relative">
        <Image className="w-full h-60" src={back} alt="background" />
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>

        <div className="absolute inset-0 flex justify-center items-center mt-6">
          <Image
            className="lg:w-[80px] -mt-24 w-[45px] h-[45px] lg:h-[80px]"
            src={'/logo.png'}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="absolute inset-x-6 -mt-32  flex justify-center items-center">
          <h2 className="lg:text-5xl sm:text-3xl">Shop</h2>
        </div>

        <div className="absolute inset-x-6 -mt-16 flex justify-center items-center space-x-2">
          <h2><Link href={'/'}>Home</Link></h2>
          <p className="mt-1"><i className="fa-solid fa-greater-than"></i></p>
          <h2><Link href={'/shop'}>Shop</Link></h2>
        </div>
      </div>

      <div className="flex justify-between w-full sm:h-24 h-28 lg:h-20 bg-[#faf4f4] mt-12 px-4 sm:px-8 md:px-12">
        <div className="flex items-center flex-wrap">
          <h2 className="ml-4 sm:ml-8 md:ml-28">
            <i className="fa-solid fa-sliders"></i>
          </h2>
          <p className="ml-2 sm:ml-3 font-semibold">Filter</p>
          <p className="ml-4 sm:ml-6">
            <i className="fas fa-grip-horizontal"></i>
          </p>
          <p className="ml-4 sm:ml-6">
            <i className="fas fa-bars"></i>
          </p>
          <div className="w-1 h-10 bg-gray-400 ml-4 sm:ml-12 md:ml-12"></div>
          <p className="ml-4 sm:ml-6 md:ml-8">Showing 1-16 of 32 results</p>
        </div>
        <div className="mr-4 sm:mr-8 md:mr-12 flex justify-center items-center space-x-4 sm:space-x-6">
          <h2 className="text-sm sm:text-base">
            Show
            <Button name="16" style="w-12 h-12 bg-white text-center text-gray-500" />
          </h2>
          <h2 className="text-sm sm:text-base">
            Sort by
            <Button name="Default" style="w-20 h-12 bg-white text-center text-gray-500" />
          </h2>
        </div>
      </div>

      <div className='xl:grid xl:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-6 mt-20'>
        {products.map((product, inde) => (
          <div key={product.id} className={`flex flex-col items-center ${inde === 1 || inde === 3 || inde === 8 || inde === 14 ? 'mt-10' : ''} ${inde === 6 || inde === 15 ? '-mt-10' : ''}`}>
            <Link href='/productslist'><Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover"
            /></Link>
            <h2 className="mt-6 text-center">{product.name}</h2>
            <h2 className="text-center text-2xl font-semibold">{product.price}</h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-4 mt-8">
        <Button name='1' style="w-10 h-10 bg-[#fbebb5] rounded"/>
        <Button name='2' style="w-10 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded"/>
        <Button name='3' style="w-10 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded"/>
        <Button name='Next' style="w-20 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded"/>
      </div>

      <div className="w-full bg-[#faf4f4] xl:h-44 h-auto mt-16 flex flex-col sm:flex-row md:flex-row items-center justify-center space-y-12 sm:space-y-0 px-4 lg:px-8">
        <div className="text-center sm:text-left xl:space-x-16">
          <h2 className="text-2xl xl:text-4xl xl:ml-16 sm:text-xl md:text-xl lg:text-2xl font-semibold">Free Delivery</h2>
          <p className="w-full xl:w-80 sm:w-48 md:w-52 lg:w-60 mx-auto md:mx-0 mt-4 text-gray-500">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>

        <div className="text-center sm:text-left xl:space-x-16">
          <h2 className="text-2xl xl:text-4xl sm:text-xl md:text-xl lg:text-2xl font-semibold">90 Days Return</h2>
          <p className="w-full xl:w-80 sm:w-48 xl:ml-16 md:w-52 lg:w-60 mx-auto md:mx-0 mt-4 text-gray-500">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        <div className="text-center sm:text-left xl:space-x-16">
          <h2 className="text-2xl xl:text-4xl xl:ml-16 sm:text-xl md:text-xl lg:text-2xl font-semibold">Secure Payments</h2>
          <p className="w-full xl:w-80 sm:w-48 md:w-52 lg:w-60 mx-auto md:mx-0 mt-4 text-gray-500">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <br />
      <br />
    </main>
  );
}
