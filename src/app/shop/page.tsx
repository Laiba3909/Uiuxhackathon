import { client } from "../../../sanityClient";
import Button from '../Components/button'
import Link from "next/link";
import Image from "next/image";
import back from '../../../public/back2.jpg'
// Define the shape of a product object
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

export default async function Home() {
  const products: Product[] = await client.fetch(`*[_type == 'product']`);

  return (
    <div>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 sm:px-8 md:px-12">
      
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-md">
             
              <div className="w-full h-48 mb-4">
                
                
              <Link href={`/product/${product._id}`} >
                <Image
                  className="w-full h-full object-cover"
                  src={product.imagePath}
                  alt={`${product.name} image`}
                  width={400}
                  height={400}
                  priority={true}
                />
               
             </Link>

              </div>
              <Link href={`/product/${product._id}`} passHref>
                <h3 className="font-semibold text-lg text-center">{product.name}</h3>
              </Link>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                {product.stockLevel > 0 ? `${product.stockLevel} in stock` : 'Out of stock'}
              </p>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
              <button className="bg-[#f8e29b] text-black py-2 px-4 mt-4 rounded">
                Add to Cart
              </button>
            </div>
          ))
}
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



     
    </div>
  );
}
