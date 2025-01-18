'use client'
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductListing() {

    const {id} = useParams()
    const productsData = [
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
      if (!id) {
        return <div>Loading...</div>;
      }

      const singleProduct = productsData.find(product => product.id === Number(id))
      if (!singleProduct) {
        return <div className="text-3xl">Product not found</div>;
      }
  const furtherProduts = [
    { id: 1, name: "Trenton modular sofa_3", image: "/chair.png", price: 25000 },
    { id: 2, name: "Granite dining table with dining chair", image: "/dining.png", price: 25000 },
    { id: 3, name: "Outdoor bar table and stool", image: "/cafedining.png", price: 25000 },
    { id: 4, name: "Plain console with teak mirror", image: "/board.png", price: 25000 },
  ];

  return (
    <main>
      <div className="ml-6 mt-3 space-x-2">
        <h2>
          <Link href={'/'}>Home <span><i className="fa-solid fa-greater-than"></i></span></Link>
          <span><Link href={'/shop'}>Shop <span><i className="fa-solid fa-greater-than"></i></span></Link></span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex justify-center md:-mt-6 ml-2 gap-3 lg:flex-col space-x-0 lg:space-x-2">
          
            <div className="bg-[#fbebb5] w-[122px] ml-2 mb-4 lg:mb-0">
              <Image
                src={singleProduct.image}
                alt="loading"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
        
            <div className="bg-[#fbebb5] mb-4 lg:mb-0">
              <Image
                src={singleProduct.image}
                alt="loading"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
            <div className="bg-[#fbebb5] mb-4 lg:mb-0">
              <Image
                src={singleProduct.image}
                alt="loading"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
            <div className="bg-[#fbebb5] -mb-4 lg:mb-0">
              <Image
                src={singleProduct.image}
                alt="loading"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
        </div>
<div className="mt-2">
        <div className="bg-[#fbebb5] rounded-lg w-full lg:w-[500px]  lg:mr-[20px] mt-10 lg:mt-32 lg:ml-20 flex justify-center h-auto items-center">
          <Image
            src={singleProduct.image}
            alt="loadingg"
            width={500}
            height={500}
          />
        </div>
        </div>
        <div className="mr-0 lg:mr-24 mt-8 lg:mt-32 px-4 lg:px-0">
          <h1 className="text-3xl lg:text-6xl font-semibold">{singleProduct.name}</h1>
          <p className="mt-4 text-xl lg:text-2xl text-gray-400">Rs.{singleProduct.price}</p>
          <p className="mt-2 text-lg text-gray-500">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i> | 5 Customer Ratings
          </p>
          <p className="mt-4 text-gray-500">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

          <p className="text-gray-500 mt-4">Size</p>
          <div className="ml-7 inline-flex gap-2">
            <button className="bg-[#fbebb5] w-10 h-10 rounded">Lg</button>
            <button className="bg-[#fbebb5] w-10 h-10 rounded">Xl</button>
            <button className="bg-[#fbebb5] w-10 h-10 rounded">XS</button>
          </div>

          <p className="text-gray-500 mt-4">Color</p>
          <div className="ml-8 mt-3 inline-flex gap-4">
            <div className="bg-black w-10 h-10 rounded-full"></div>
            <div className="bg-blue-600 w-10 h-10 rounded-full"></div>
            <div className="bg-gray-600 w-10 h-10 rounded-full"></div>
          </div>

          <div className="ml-5 mt-5 space-x-4">
            <button className="w-28 h-12 rounded border-2 border-gray-500">- 1 +</button>
            <Link href={'/cart'}><button className="w-28 h-12 rounded border-2 border-gray-500">Add to cart</button></Link>
          </div>

          <hr className="mt-5 border-gray-500" />
          <ul className="ml-6 text-gray-500 mt-2">
            <li>Sku: <span>SS001</span></li>
            <li>Category: <span>Sofas</span></li>
            <li>Tags: <span>Sofas, Chair, Home, Shop</span></li>
          </ul>
        </div>
      </div>
      <br />
      <div>
        <h2 className="text-center space-x-6 text-xl mt-5 "><span>Description</span><span className="text-gray-600">Additional Information</span><span className="text-gray-600">Reviews (5)</span></h2>
        <div className="flex justify-center items-center mt-7">
        <p className=" w-[900px] text-gray-400">Embodying the raw, wayward spirit of rock  roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <br />
        </div>
        <div className="flex justify-center items-center mt-12">
        <p className="text-center text-gray-400 w-[1000px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 mt-12">
          
          <div className="bg-[#fbebb5] w-[500px] rounded flex justify-center items-center">
            <Image
              src={singleProduct.image}
              alt="loading"
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>
      
          <div className="bg-[#fbebb5]  w-[500px] rounded flex justify-center items-center">
            <Image
              src={singleProduct.image}
              alt="loading"
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>
          </div>
      <br />
<hr  className="text-gray-600"/>
      <div className="mt-7">
        <h2 className="text-3xl text-center font-semibold mb-4">Related Products</h2>
        </div>
        <div className="flex lg:justify-center lg:items-center overflow-x-auto space-x-6">
          {furtherProduts.map((product, index) => (
            <div key={index} className="flex-none w-64">
              <Image
                src={product.image}
                alt="loading"
                width={400}
                height={400}
                className="rounded-md"
              />
              <h3 className="text-xl mt-2">{product.name}</h3>
              <h3 className="text-2xl font-semibold">Rs.{product.price}</h3>
            </div>
          ))}
        </div>
        <div className="mt-20">
        <Link href={'/shop'}><h2 className="text-3xl text-center  mb-4">View More</h2></Link>
        </div>
    </main>
  );
}
