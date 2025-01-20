
// 'use client'
// import Link from "next/link";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useCart } from "../../Components/cartcontext";

// interface Product {
//   _id: string;
//   name: string;
//   imagePath: string;
//   description: string;
//   price: number;
//   category: string;
//   stockLevel: number;
//   isFeaturedProduct: boolean;
// }

// export default function ProductListing() {
//   const { id } = useParams();
//   const [singleProduct, setSingleProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [furtherProducts, setFurtherProducts] = useState<Product[]>([]);

//   const { addToCart } = useCart();

//   // Fetch product details
//   useEffect(() => {
//     const fetchProductData = async () => {
//       try {
//         const productsData: Product[] = await client.fetch(`*[_type == 'product']`);
//         if (!id) {
//           setLoading(false);
//           return;
//         }

//         const product = productsData.find((product) => product._id === id);
//         if (product) {
//           setSingleProduct(product);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//         setLoading(false);
//       }
//     };

//     fetchProductData();
//   }, [id]);

//   // Fetch further products (like recommendations)
//   useEffect(() => {
//     const fetchFurtherProducts = async () => {
//       try {
//         const productsData: Product[] = await client.fetch(
//           `*[_type == 'product'] | order(_createdAt desc)[0..3]`
//         );
//         setFurtherProducts(productsData);
//       } catch (error) {
//         console.error("Error fetching further products:", error);
//       }
//     };

//     fetchFurtherProducts();
//   }, []);

//   // Loading or error state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!singleProduct) {
//     return <div className="text-3xl">Product not found</div>;
//   }

//   // Add to cart function
//   const handleAddToCart = () => {
//     if (singleProduct) {
//       const productToAdd = {
//         id: parseInt(singleProduct._id),
//         name: singleProduct.name,
//         price: singleProduct.price,
//         imageUrl: singleProduct.imagePath,
//         quantity: 1,
//       };
//       addToCart(productToAdd);
//       alert(`${singleProduct.name} is added to cart`);
//     }
//   };

//   return (
//     <main>
//       {/* Breadcrumbs */}
//       <div className="ml-6 mt-3 space-x-2">
//         <h2>
//           <Link href={'/'}>Home <span><i className="fa-solid fa-greater-than"></i></span></Link>
//           <span><Link href={'/shop'}>Shop <span><i className="fa-solid fa-greater-than"></i></span></Link></span>
//         </h2>
//       </div>

//       {/* Product details */}
//       <div className="flex flex-col lg:flex-row justify-between">
//         {/* Product images */}
//         <div className="flex justify-center md:-mt-6 ml-2 gap-3 lg:flex-col space-x-0 lg:space-x-2">
//           {[...Array(4)].map((_, index) => (
//             <div key={index} className="bg-[#fbebb5] w-[122px] ml-2 mb-4 lg:mb-0">
//               <Image
//                 src={singleProduct.imagePath}
//                 alt={`Product image ${index + 1}`}
//                 width={200}
//                 height={200}
//                 className="rounded-md"
//                 priority
//                 objectFit="cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Main product image */}
//         <div className="mt-2">
//           <div className="bg-[#fbebb5] rounded-lg w-full lg:w-[500px] lg:mr-[20px] mt-10 lg:mt-32 lg:ml-20 flex justify-center h-auto items-center">
//             <Image
//               src={singleProduct.imagePath}
//               alt="Main product image"
//               width={500}
//               height={500}
//               priority
//               objectFit="contain"
//             />
//           </div>
//         </div>

//         {/* Product info */}
//         <div className="mr-0 lg:mr-24 mt-8 lg:mt-32 px-4 lg:px-0">
//           <h1 className="text-3xl lg:text-6xl font-semibold">{singleProduct.name}</h1>
//           <p className="mt-4 text-xl lg:text-2xl text-gray-400">Rs.{singleProduct.price}</p>
//           <p className="mt-2 text-lg text-gray-500">
//             <i className="fa-solid fa-star text-yellow-500"></i>
//             <i className="fa-solid fa-star text-yellow-500"></i>
//             <i className="fa-solid fa-star text-yellow-500"></i>
//             <i className="fa-solid fa-star text-yellow-500"></i>
//             <i className="fa-solid fa-star text-yellow-500"></i> | 5 Customer Ratings
//           </p>
//           <p className="mt-4 text-gray-500">{singleProduct.description}</p>

//           <p className="text-gray-500 mt-4">Size</p>
//           <div className="ml-7 inline-flex gap-2">
//             <button className="bg-[#fbebb5] w-10 h-10 rounded">Lg</button>
//             <button className="bg-[#fbebb5] w-10 h-10 rounded">Xl</button>
//             <button className="bg-[#fbebb5] w-10 h-10 rounded">XS</button>
//           </div>

//           <p className="text-gray-500 mt-4">Color</p>
//           <div className="ml-8 mt-3 inline-flex gap-4">
//             <div className="bg-black w-10 h-10 rounded-full"></div>
//             <div className="bg-blue-600 w-10 h-10 rounded-full"></div>
//             <div className="bg-gray-600 w-10 h-10 rounded-full"></div>
//           </div>

//           {/* Add to cart section */}
//           <div className="ml-5 mt-5 space-x-4">
//             <button className="w-28 h-12 rounded border-2 border-gray-500">- 1 +</button>
//             <button onClick={handleAddToCart} className="w-28 h-12 rounded bg-[#fbebb5] text-black">
//               Add to cart
//             </button>
//           </div>

//           {/* Product details */}
//           <ul className="ml-6 text-gray-500 mt-2">
//             <li>Sku: <span>SS001</span></li>
//             <li>Category: <span>{singleProduct.category}</span></li>
//             <li>Stock Level: <span>{singleProduct.stockLevel}</span></li>
//             <li>Featured Product: <span>{singleProduct.isFeaturedProduct ? "Yes" : "No"}</span></li>
//           </ul>
//           <hr className="mt-5 border-gray-500" />
//         </div>
//       </div>

//      <br />
//      <br />
//       <div>
//         <h2 className="text-center space-x-6 text-xl mt-5">
//           <span>Description</span>
//           <span className="text-gray-600">Additional Information</span>
//           <span className="text-gray-600">Reviews (5)</span>
//         </h2>
//         <div className="flex justify-center items-center mt-7">
//           <p className="w-[900px] text-gray-400">Embodying the raw, wayward spirit of rock and roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
//         </div>
//         <div className="flex justify-center items-center mt-12">
//           <p className="text-center text-gray-400 w-[1000px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio...</p>
//         </div>
//       </div>
//       <hr className="text-gray-500 mt-12" />

//       <br />
//       <div className="flex lg:justify-center lg:items-center overflow-x-auto space-x-6">
//   {furtherProducts.map((product, index) => (
//     <div key={index} className="flex-none w-[300px]"> {/* Set a fixed width for consistency */}
//       <Image
//         src={product.imagePath}
//         alt={product.name}
//         width={300} 
//         height={300} 
//         className="rounded-md object-cover" 
//         priority
//       />
//       <h3 className="text-xl mt-2">{product.name}</h3>
//       <h3 className="text-2xl font-semibold">Rs.{product.price}</h3>
//     </div>
//   ))}
// </div>

     
     
    //   <div className="text-center text-gray-500 py-4">
      
    //     <div className="mt-20">
    //      <Link href={'/shop'}><h2 className="text-3xl text-center mb-4">View More</h2></Link>
    //  </div>
    //  <br />
    //     <p>&copy; 2025 Sofa.co All rights reserved.</p>
    //   </div>
//     </main>
//   );
// }



'use client'
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../../Components/cartcontext";

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

export default function ProductListing() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [furtherProducts, setFurtherProducts] = useState<Product[]>([]);

  const { addToCart } = useCart();

  // Fetch product details
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productsData: Product[] = await client.fetch(`*[_type == 'product']`);
        if (!id) {
          setLoading(false);
          return;
        }

        const product = productsData.find((product) => product._id === id);
        if (product) {
          setSingleProduct(product);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  // Fetch further products (like recommendations)
  useEffect(() => {
    const fetchFurtherProducts = async () => {
      try {
        const productsData: Product[] = await client.fetch(
          `*[_type == 'product'] | order(_createdAt desc)[0..3]`
        );
        setFurtherProducts(productsData);
      } catch (error) {
        console.error("Error fetching further products:", error);
      }
    };

    fetchFurtherProducts();
  }, []);

  // Loading or error state
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!singleProduct) {
    return <div className="text-3xl">Product not found</div>;
  }

  // Add to cart function
  const handleAddToCart = () => {
    if (singleProduct) {
      const productToAdd = {
        id: parseInt(singleProduct._id),
        name: singleProduct.name,
        price: singleProduct.price,
        imageUrl: singleProduct.imagePath,
        quantity: 1,
      };
      addToCart(productToAdd);
      alert(`${singleProduct.name} is added to cart`);
    }
  };

  return (
    <main>
      {/* Breadcrumbs */}
      <div className="ml-6 mt-3 space-x-2">
        <h2>
          <Link href={'/'}>Home <span><i className="fa-solid fa-greater-than"></i></span></Link>
          <span><Link href={'/shop'}>Shop <span><i className="fa-solid fa-greater-than"></i></span></Link></span>
        </h2>
      </div>

      {/* Product details */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Product images */}
        <div className="flex justify-center md:-mt-6 ml-2 gap-3 lg:flex-col space-x-0 lg:space-x-2">
          {singleProduct.imagePath && [...Array(4)].map((_, index) => (
            <div key={index} className="bg-[#fbebb5] w-[122px] ml-2 mb-4 lg:mb-0">
              <Image
                src={singleProduct.imagePath}
                alt={`Product image ${index + 1}`}
                width={200} // Maintain consistent width and height
                height={200}
                className="rounded-md"
                priority
                objectFit="cover" // Cover works well for thumbnails
              />
            </div>
          ))}
        </div>

        {/* Main product image */}
        <div className="mt-2">
          <div className="bg-[#fbebb5] rounded-lg w-full lg:w-[500px] lg:mr-[20px] mt-10 lg:mt-32 lg:ml-20 flex justify-center h-auto items-center">
            <Image
              src={singleProduct.imagePath}
              alt="Main product image"
              width={500}
              height={500}
              priority
              objectFit="contain" // Contain works better for the main image
            />
          </div>
        </div>

        {/* Product info */}
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
          <p className="mt-4 text-gray-500">{singleProduct.description}</p>

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

          {/* Add to cart section */}
          <div className="ml-5 mt-5 space-x-4">
            <button className="w-28 h-12 rounded border-2 border-gray-500">- 1 +</button>
            <button onClick={handleAddToCart} className="w-28 h-12 rounded bg-[#fbebb5] text-black">
              Add to cart
            </button>
          </div>

          {/* Product details */}
          <ul className="ml-6 text-gray-500 mt-2">
            <li>Sku: <span>SS001</span></li>
            <li>Category: <span>{singleProduct.category}</span></li>
            <li>Stock Level: <span>{singleProduct.stockLevel}</span></li>
            <li>Featured Product: <span>{singleProduct.isFeaturedProduct ? "Yes" : "No"}</span></li>
          </ul>
          <hr className="mt-5 border-gray-500" />
        </div>
      </div>

     <br />
     <br />
      <div>
        <h2 className="text-center space-x-6 text-xl mt-5">
          <span>Description</span>
          <span className="text-gray-600">Additional Information</span>
          <span className="text-gray-600">Reviews (5)</span>
        </h2>
        <div className="flex justify-center items-center mt-7">
          <p className="w-[900px] text-gray-400">Embodying the raw, wayward spirit of rock and roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        </div>
        <div className="flex justify-center items-center mt-12">
          <p className="text-center text-gray-400 w-[1000px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio...</p>
        </div>
      </div>
      <hr className="text-gray-500 mt-12" />

      <br />
      <div className="flex lg:justify-center lg:items-center overflow-x-auto space-x-6">
        
        {furtherProducts.map((product, index) => (
          <div key={index} className="flex-none w-[300px]"> 
          <Link href={`/product/${product._id}`}>
            <Image
              src={product.imagePath}
              alt={product.name}
              width={300} 
              height={300} 
              className="rounded-md object-cover" 
              priority
            />
            </Link>
            <h3 className="font-bold mt-2">{product.name}</h3>
            <p className="text-gray-500">Rs. {product.price}</p>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-500 py-4">
      
      <div className="mt-20">
       <Link href={'/shop'}><h2 className="text-3xl text-center mb-4">View More</h2></Link>
   </div>
   <br />
      <p>&copy; 2025 Sofa.co All rights reserved.</p>
    </div>

    </main>
  );
}
