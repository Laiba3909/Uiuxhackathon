import Image from "next/image"
import Link from "next/link"
import sofa from '../../../public/sofa3.png'
import back from '../../../public/back2.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Cart(){
    return(
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
          <h2 className="lg:text-5xl sm:text-3xl">Cart</h2>
        </div>

        <div className="absolute inset-x-6 -mt-16 flex justify-center items-center space-x-2">
          <h2><Link href={'/'}>Home</Link></h2>
          <p className="mt-1"><i className="fa-solid fa-greater-than"></i></p>
          <h2><Link href={'/cart'}>Cart</Link></h2>
        </div>
      </div>


<br />



<div className="flex flex-wrap justify-between px-4 md:px-16">
  <div className="w-full lg:w-[65%] mt-8">
    <div className="bg-[#fff9e5] w-full md:w-[720px] mx-auto h-12 flex justify-center items-center">
      <ul className="flex gap-4 md:gap-20 text-sm md:text-base">
        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Subtotal</li>
      </ul>
    </div>

    <div className="flex flex-wrap items-center mt-6">
      <div className=" md:w-1/6 flex justify-center">
        <Image
          className="w-20 ml-20 md:w-48 bg-[#fff9e5] rounded"
          src={sofa}
          alt="loading..."
        />
      </div>
      <div className="w-2/3 md:w-1/3 text-gray-500 text-center md:text-left mt-4 md:mt-0">
        <h2 className="text-sm ml-24 md:text-base">Asgaard Sofa</h2>
      </div>
      <div className="w-1/2 md:w-1/6 text-center text-gray-500 mt-4 md:mt-0">
        Rs. 250,000.00
      </div>
      <div className=" md:w-1/12 text-center border-2 border-gray-500 rounded-lg w-8 h-8 flex justify-center items-center mt-4 md:mt-0">
        1
      </div>
      <div className="w-1/2 md:w-1/6 text-center text-gray-500 mt-4 md:mt-0">
        Rs. 250,000.00
      </div>
      <div className="w-1/12 text-center mt-4 md:mt-0">
        <i className="fa-solid fa-trash cursor-pointer text-[#fbebb5]"></i>
      </div>
    </div>
  </div>

  <div className="w-full lg:w-[30%] bg-[#fff9e5] rounded-lg p-6 mt-8 lg:mt-0">
    <h1 className="text-center text-2xl md:text-3xl font-semibold">Cart Totals</h1>
    <p className="mt-8 flex justify-between">
      Subtotal <span>Rs. 250,000.00</span>
    </p>
    <p className="mt-6 flex justify-between text-amber-500">
      Total <span>Rs. 250,000.00</span>
    </p>
    <button className="border-2 border-gray-400 rounded-lg mt-8 mx-auto block px-6 py-2 hover:bg-gray-200">
      <Link href={'/billing'}>Checkout</Link>
    </button>
  </div>
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
    )
}