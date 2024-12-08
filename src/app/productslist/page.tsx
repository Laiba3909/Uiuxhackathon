
import Link from "next/link";
import Image from "next/image";

export default function ProductListing() {
  const Images = [
    { images: '/sofa.png' },
    { images: '/luxurysofa.png' },
    { images: '/sofa2.png' },
    { images: '/sofa3.png' }
  ];

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
        <div className="flex justify-center lg:flex-col space-x-0 lg:space-x-2">
          {Images.map((product, index) => (
            <div key={index} className="mb-4 lg:mb-0">
              <Image
                src={product.images}
                alt="loading"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
          ))}
        </div>

        <div className="bg-[#fbebb5] rounded-lg w-full lg:w-[500px] h-[400px] lg:mr-[20px] mt-8 lg:mt-32">
          <Image
            src={'/luxurysofa.png'}
            alt="loadingg"
            width={500}
            height={500}
          />
        </div>

        <div className="mr-0 lg:mr-24 mt-8 lg:mt-32 px-4 lg:px-0">
          <h1 className="text-3xl lg:text-6xl font-semibold">{/* Product name here */}Asgaard Sofa</h1>
          <p className="mt-4 text-xl lg:text-2xl text-gray-400">250,000.00</p>
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
            <button className="w-28 h-12 rounded border-2 border-gray-500">Add to cart</button>
          </div>

          <hr className="mt-5 border-gray-500" />
          <ul className="ml-6 text-gray-500 mt-2">
            <li>Sku: <span>SS001</span></li>
            <li>Category: <span>Sofas</span></li>
            <li>Tags: <span>Sofa, Chair, Home, Shop</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-7">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="flex overflow-x-auto space-x-6">
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
      </div>
    </main>
  );
}
