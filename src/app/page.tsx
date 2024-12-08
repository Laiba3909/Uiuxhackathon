'use client'
import Image from "next/image";
import Button from './Components/button'
import '@fortawesome/fontawesome-free/css/all.min.css';
import sofa from '../../public/sofa.png'
import sofa2 from '../../public/sofa2.png'
import table from '../../public/table.png'
import luxurysofa from '../../public/luxurysofa.png'
import back from '../../public/back.jpg'
export default function Home(){
  const furnitureItems = [
    {
      id:1,
      name: "Trenton modular sofa, 3",
      price: "Rs. 25,000.00",
      image: "/chair.png"
    },
    {
      id:2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/dining.png"
    },
    {

      id:3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/cafedining.png"
    },
    {
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/board.png"
    }
  ];

  const articles = [
    {
      title: "Going all-in with millennial design",
      readTime: "5 min",
      date: "12th Oct 2022",
      image: "/article1.jpg"
    },
    {
      title: "Going all-in with millennial design",
      readTime: "5 min",
      date: "12th Oct 2022",
      image: "/article2.jpg"
    },
    {
      title: "Going all-in with millennial design",
      readTime: "5 min",
      date: "12th Oct 2022",
      image: "/article3.jpg"
    }
  ];
  
  
  return(
    <>
<main>
  <div className="w-full lg:h-[630px] md:h-[730px] bg-[#fbebb5] overflow-hidden">
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:gap-10 px-4 lg:px-20 py-10">
    
      <div className="family text-center lg:text-left lg:ml-[10%] mt-[16%] lg:mt-[20%] sm:mt-[9%]">
        <h1 className="text-4xl lg:w-96 sm:text-5xl lg:text-[60px]  ">
          Rocket single <span className="lg:mt-7 lg:block"> seater </span>
        </h1>
        <Button name="Shop now" style="underline underline-offset-8 hover:text-gray-500 mt-4" />
      </div>

      <div className="mt-10 lg:mt-0">
        <Image
          src={sofa}
          alt=""
          className="mx-auto lg:mr-10 lg:-mt-9 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
        />
      </div>
    </div>
  </div>


   <div className="grid md:grid-cols-1 lg:grid-cols-2 md:h-[920px]  bg-[#faf4f4] h-[1000px] sm:h-[1000px] lg:h-[480px] xl:h-[480px]">
    <div>
      <Image src={table}
      className="mt-6   xl:w-[520px] md:ml-32 lg:mt-8  lg:ml-20  lg:w-[350px] md:[220px]"
      alt=""
      />
     <div className="family2 -mt-20 ml-12 md:-mt-40 md:ml-[180px] xl:ml-[210px] xl:-mt-36 lg:-mt-24  lg:ml-[160px]">
     <h1 className="text-3xl">Side table</h1>
     <Button name="View More" style="mt-4 underline underline-offset-8 hover:text-gray-500 "/>
     </div>
    </div>
    <div>
    <Image src={sofa2}
    className="mt-6   xl:w-[550px] lg:ml-6 lg:w-[400px] "
      alt=""
      />
      <div className="family2  md:-mt-40 md:ml-[180px] xl:ml-[210px] xl:-mt-36 lg:-mt-24 lg:ml-[160px] -mt-20 ml-20">
     <h1 className="text-3xl">Side table</h1>
     <Button name="View More" style="mt-4 underline underline-offset-8 hover:text-gray-500 "/>
     </div>
    </div>
    
  </div> 

<div>

  <h1 className="mt-8 text-center text-4xl">Top Picks For You</h1>
  <p className="text-center mt-3 text-gray-500">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
</div>

<div className={`md:grid sm:grid sm:grid-cols-2 md:grid-cols-4 mt-20`}>
      {furnitureItems.map((item, index) => (
        <div key={index}  className={` m-3 ${index === 1 || index === 3? 'mt-24': ''}`}>
          <Image
            src={item.image}
            alt={item.name}
           height={300}
           width={300}
          />
          <h3 className="mt-5 w-44">{item.name}</h3>
          <p className="mt-2 text-xl font-semibold">{item.price}</p>
        </div>
      ))}
    </div>

    <div>
      <h1 className="text-center text-2xl mt-16 underline underline-offset-[18px]">View More</h1>
    </div>
    <br />
   
  <div className="bg-[#fff9e5] mt-6 w-full h-[580px] lg:h-[540px] lg:flex lg:justify-between block ">
   <div className="md:flex md:items-center md:justify-center">
    <Image
    className="lg:w-[700px] w-[500px]  lg:ml-7"
    src={luxurysofa}
    alt=""
    />
   </div>

   <div className="lg:mr-20 ml-5 lg:mt-52">
    <p className="text-center font-semibold">New Arrivals</p>
    <h1 className="font-semibold text-center text-4xl lg:text-4xl xl:text-5xl">Asgaard sofa</h1>
   <div className="flex items-center justify-center">
    <Button name="Order Now" style="xl:ml-16 xl:mt-10 mt-7 lg:ml-24 border-2 border-black  w-44 h-12"/>
   </div>
   </div>
  </div>


<div className="text-center mt-20 ">
  <h1 className="text-3xl">Our Blogs</h1>
  <p>Find a bright ideal to suit your taste with our great selection</p>
</div>

<div className="sm:flex-row flex-col flex  justify-center items-center gap-12 mt-20 ">
{articles.map((item,index)=>(
  <div key={index}>
      <Image
      className="rounded-xl"
    src={item.image}
    alt="loadingg"
    width={300}
    height={300}
    />
    <h2 className="mt-5 text-center">{item.title}</h2>
    <div className="flex justify-center ">
    <Button name="Read More" style=" text-center mt-2 font-semibold underline underline-offset-[10px]" />
     </div>
     <div className="flex justify-center mt-3">
    <p><i className="fa-regular fa-clock"></i> {item.readTime} <span><i className="fa-regular fa-calendar-days"> </i> {item.date}</span></p>
     </div>
    <br />
  </div>
))}
</div>
<div>
      <h1 className="text-center text-2xl mt-16 underline underline-offset-[18px]">View All Post</h1>
    </div>
    <div className="relative">
  <Image
    className="mt-12 w-full"
    src={back}
    alt="loadingg"
  />
  <div className="absolute inset-0  flex flex-col justify-center items-center text-center ">
    <h1 className="text-6xl text-black  font-bold">Our Instagram</h1>
    <p className="mt-3">Follow our store on Instagram</p>
    <Button name="Follow Us" style="rounded-xl bg-gray-300 w-32 mt-4 h-8" />
  </div>
</div>

</main>

</>
  )
}


