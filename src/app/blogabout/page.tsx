
// import Image from "next/image";
// import Head from "next/head";
// import Link from "next/link";
// import Button from "../Components/button";
// import Script from "next/script";

// export default function BlogAbout() {
//   const blogs = [
//     {
//       title: "Going all-in with millennial design",
//       date: "10 Oct 2022",
//       author: "Admin",
//       category: "Wood",
//       image: "/article2.jpg",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       readMoreLink: "Read more",
//     },
//     {
//       title: "Exploring new ways of decorating",
//       date: "10 Oct 2022",
//       author: "Admin",
//       category: "Interior",
//       image: "/blog1.jpg",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       readMoreLink: "Read more",
//     },
//     {
//       title: "Handmade pieces that took time to make",
//       date: "10 Oct 2022",
//       author: "Admin",
//       category: "Wood",
//       image: "/blog2.jpg",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       readMoreLink: "Read more",
//     },
//   ];

//   const Images = [
//     {
//       title: "Going all-in with millennial design",
//       image: "/post1.jpg",
//     },
//     {
//       title: "Exploring new ways of decorating",
//       image: "/post2.jpg",
//     },
//     {
//       title: "Handmade pieces that took time to make",
//       image: "/post3.jpg",
//     },
//     {
//       title: "Modern Home in Milan",
//       image: "/post4.jpg",
//     },
//     {
//       title: "Colorful Office Redesigned",
//       image: "/post5.jpg",
//     },
//   ];

//   return (
//     <>
//       <Head>
//         <link rel="preload" href="/logo.png" as="image" />
//         <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
//         <title>Blog | BlogAbout</title>
//         <meta
//           name="description"
//           content="Explore our latest blogs about millennial designs, interior decorations, and handmade crafts."
//         />
//       </Head>

//       <main>
//         <div className="relative w-full h-60 bg-gradient-to-r from-blue-500 to-green-500">
//           <div className="absolute inset-0 bg-white bg-opacity-50"></div>

//           <div className="absolute inset-0 flex justify-center items-center mt-6">
//             <Image
//               className="lg:w-[80px] -mt-20 w-[45px] h-[45px] lg:h-[80px]"
//               src={"/logo.png"}
//               alt="Logo"
//               width={100}
//               height={100}
//               priority
//             />
//           </div>

//           <div className="absolute inset-x-6 mt-32 flex justify-center items-center space-x-2">
//             <h2><Link href={'/'}>Home</Link></h2>
//             <p className="mt-1"> &gt; </p>
//             <h2><Link href={'/blogabout'}>Blog</Link></h2>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-6 lg:px-36 px-6">
//           <div className="space-y-7 lg:w-3/4 w-full">
//             {blogs.map((blog, index) => (
//               <div key={index}>
//                 <Image
//                   className="rounded-lg mt-4"
//                   src={blog.image}
//                   alt={blog.title}
//                   width={580}
//                   height={500}
//                   quality={80}
//                   sizes="(max-width: 768px) 100vw, 580px "
//                   loading="lazy"
//                 />
//                 <h3 className="mt-3 space-x-7 text-gray-500">
//                   <span role="img" aria-label="user">👤</span>
//                   <span>{blog.author}</span>
//                   <span>
//                     <span role="img" aria-label="calendar">📅</span> {blog.date}
//                   </span>
//                   <span>
//                     <span role="img" aria-label="tag">🏷️</span> {blog.category}
//                   </span>
//                 </h3>
//                 <h2 className="mt-3 text-2xl font-semibold">{blog.title}</h2>
//                 <p className="mt-2 xl:w-[550px]">{blog.description}</p>
//                 <button className="underline underline-offset-[12px] mt-6">
//                   {blog.readMoreLink}
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="lg:w-1/4 w-full flex flex-col items-start mt-6 lg:mt-0">
//             <div className="relative w-full bg-[#f5f5f5] rounded">
//               <input
//                 className="w-full h-12 bg-transparent rounded pl-4 pr-12 outline-none"
//                 type="search"
//                 placeholder="Search blogs..."
//                 aria-label="Search blogs"
//               />
//               <Image
//                 src={"/glass.png"}
//                 alt="Search Icon"
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
//                 width={24}
//                 height={24}
//                 loading="lazy"
//               />
//             </div>

//             <h2 className="text-xl font-semibold mt-6">Category</h2>
//             <ul className="mt-7 space-y-5 text-gray-500">
//               <li>
//                 Crafts <span className="float-right">2</span>
//               </li>
//               <li>
//                 Design <span className="float-right">8</span>
//               </li>
//               <li>
//                 HandMade <span className="float-right">7</span>
//               </li>
//               <li>
//                 Interior <span className="float-right">1</span>
//               </li>
//               <li>
//                 Wood <span className="float-right">6</span>
//               </li>
//             </ul>

//             <h2 className="text-2xl mt-6">Recent Posts</h2>
//             <div className="block mt-6">
//               {Images.map((image, index) => (
//                 <div key={index} className="flex items-center space-x-4 mb-4">
//                   <Image
//                     className="rounded"
//                     src={image.image}
//                     alt={image.title}
//                     width={100}
//                     height={100}
//                     quality={80}
//                     sizes="100px"
//                     loading="lazy"
//                   />
//                   <span className="text-lg font-medium">{image.title}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center items-center space-x-4 mt-8">
//           <Button name="1" style="w-10 h-10 bg-[#fbebb5] rounded" />
//           <Button name="2" style="w-10 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded" />
//           <Button name="3" style="w-10 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded" />
//           <Button name="Next" style="w-20 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded" />
//         </div>
//       </main>
//     </>
//   );
// }
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Button from "../Components/button";
import Script from "next/script";

export default function BlogAbout() {
  const blogs = [
    {
      title: "Going all-in with millennial design",
      date: "10 Oct 2022",
      author: "Admin",
      category: "Wood",
      image: "/article2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readMoreLink: "Read more",
    },
    {
      title: "Exploring new ways of decorating",
      date: "10 Oct 2022",
      author: "Admin",
      category: "Interior",
      image: "/blog1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readMoreLink: "Read more",
    },
    {
      title: "Handmade pieces that took time to make",
      date: "10 Oct 2022",
      author: "Admin",
      category: "Wood",
      image: "/blog2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readMoreLink: "Read more",
    },
  ];

  const Images = [
    {
      title: "Going all-in with millennial design",
      image: "/post1.jpg",
    },
    {
      title: "Exploring new ways of decorating",
      image: "/post2.jpg",
    },
    {
      title: "Handmade pieces that took time to make",
      image: "/post3.jpg",
    },
    {
      title: "Modern Home in Milan",
      image: "/post4.jpg",
    },
    {
      title: "Colorful Office Redesigned",
      image: "/post5.jpg",
    },
  ];

  return (
    <>
      <Head>
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <title>Blog | BlogAbout</title>
        <meta
          name="description"
          content="Explore our latest blogs about millennial designs, interior decorations, and handmade crafts."
        />
        {/* Preload fonts and images for better performance */}
        <link rel="preload" href="/article2.jpg" as="image" />
        <link rel="preload" href="/blog1.jpg" as="image" />
        <link rel="preload" href="/blog2.jpg" as="image" />
      </Head>

      <main>
        <div className="relative w-full h-60 bg-gradient-to-r from-blue-500 to-green-500">
          <div className="absolute inset-0 bg-white bg-opacity-50"></div>

          <div className="absolute inset-0 flex justify-center items-center mt-6">
            <Image
              className="lg:w-[80px] -mt-20 w-[45px] h-[45px] lg:h-[80px]"
              src={"/logo.png"}
              alt="Logo"
              width={100}
              height={100}
              priority // Image priority for above the fold
            />
          </div>

          <div className="absolute inset-x-6 mt-32 flex justify-center items-center space-x-2">
            <h2><Link href={'/'}>Home</Link></h2>
            <p className="mt-1"> &gt; </p>
            <h2><Link href={'/blogabout'}>Blog</Link></h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-6 lg:px-36 px-6">
          <div className="space-y-7 lg:w-3/4 w-full">
            {blogs.map((blog, index) => (
              <div key={index}>
                <Image
                  className="rounded-lg mt-4"
                  src={blog.image}
                  alt={blog.title}
                  width={580}
                  height={500}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 580px"
                  loading="lazy" // Lazy load images
                />
                <h3 className="mt-3 space-x-7 text-gray-500">
                  <span role="img" aria-label="user">👤</span>
                  <span>{blog.author}</span>
                  <span>
                    <span role="img" aria-label="calendar">📅</span> {blog.date}
                  </span>
                  <span>
                    <span role="img" aria-label="tag">🏷️</span> {blog.category}
                  </span>
                </h3>
                <h2 className="mt-3 text-2xl font-semibold">{blog.title}</h2>
                <p className="mt-2 xl:w-[550px]">{blog.description}</p>
                <button className="underline underline-offset-[12px] mt-6">
                  {blog.readMoreLink}
                </button>
              </div>
            ))}
          </div>

          <div className="lg:w-1/4 w-full flex flex-col items-start mt-6 lg:mt-0">
            <div className="relative w-full bg-[#f5f5f5] rounded">
              <input
                className="w-full h-12 bg-transparent rounded pl-4 pr-12 outline-none"
                type="search"
                placeholder="Search blogs..."
                aria-label="Search blogs"
              />
              <Image
                src={"/glass.png"}
                alt="Search Icon"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                width={24}
                height={24}
                loading="lazy" // Lazy load search icon
              />
            </div>

            <h2 className="text-xl font-semibold mt-6">Category</h2>
            <ul className="mt-7 space-y-5 text-gray-500">
              <li>
                Crafts <span className="float-right">2</span>
              </li>
              <li>
                Design <span className="float-right">8</span>
              </li>
              <li>
                HandMade <span className="float-right">7</span>
              </li>
              <li>
                Interior <span className="float-right">1</span>
              </li>
              <li>
                Wood <span className="float-right">6</span>
              </li>
            </ul>

            <h2 className="text-2xl mt-6">Recent Posts</h2>
            <div className="block mt-6">
              {Images.map((image, index) => (
                <div key={index} className="flex items-center space-x-4 mb-4">
                  <Image
                    className="rounded"
                    src={image.image}
                    alt={image.title}
                    width={100}
                    height={100}
                    quality={80}
                    sizes="100px"
                    loading="lazy" // Lazy load images
                  />
                  <span className="text-lg font-medium">{image.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-8">
          <Button name="1" style="w-10 h-10 bg-[#fbebb5] rounded" />
          <Button name="2" style="w-10 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded" />
          <Button name="3" style="w-10 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded" />
          <Button name="Next" style="w-20 h-10 bg-[#fff9e5] hover:bg-[#fbebb5] rounded" />
        </div>
      </main>

      <Script
        strategy="afterInteractive"
        src="https://www.google-analytics.com/analytics.js"
      />
    </>
  );
}

