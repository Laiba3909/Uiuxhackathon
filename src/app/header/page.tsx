"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from "react";

import { useState } from "react";
import Cart from '../Components/cartcomponent'
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  const [isMobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#fbebb5]">
      <div className="flex items-center space-x-4">
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <i
            className={`fa ${isMobileMenu ? 'fa-times' : 'fa-bars'} text-3xl text-gray-800 hover:text-gray-600 transition-transform duration-300`}
          ></i>
        </button>
      </div>

      <div className="hidden md:flex flex-grow justify-center mt-8">
        <ul className="font-semibold flex gap-12">
          <li className="hover:text-gray-600 hover:underline-offset-2 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-600 hover:underline-offset-2 hover:underline">
            <Link className="cursor-pointer" href={'/shop'}>Shop</Link>
          </li>
          <li className="hover:text-gray-600 hover:underline-offset-2 hover:underline">
            <Link href="/blogabout">About</Link>
          </li>
          <li className="hover:text-gray-600 hover:underline-offset-2 hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
         
        </ul>
      </div>

      <div className={`space-x-7 mt-10 hidden md:flex `}>
      <SignedOut>
    <button className='relative group'>
      <SignInButton>
      <i className="fa-regular fa-user text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
      </SignInButton>
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
   Register

  </span>
    </button>
  </SignedOut>

  <SignedIn>
    <UserButton />
  </SignedIn>

        <button className="relative group">
  <Link href="/wishlist">
    <i className="fa-regular fa-heart text-2xl text-gray-800 group-hover:text-gray-600 transition-all duration-300"></i>
  </Link>
  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Wishlist
  </span>
</button>
<button className="relative group">
  <Link href="/search">
    <i className="fa-solid fa-magnifying-glass text-2xl text-gray-800 group-hover:text-gray-600 transition-all duration-300"></i>
  </Link>
  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-4 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
   search page
  </span>
</button>

    
          <Cart />
     
      </div>

      <div className={`md:hidden ${isMobileMenu ? 'block' : 'hidden'} relative top-2 right-32 bg-[#fbebb5] p-4`}>
        <ul className="hover:text-gray-500 font-semibold flex flex-col gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/blogabout">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex flex-col gap-4 mt-6">
        <SignedOut>
    <button className='relative group'>
      <SignInButton>
      <i className="fa-regular fa-user text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
      </SignInButton>
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
   Register

  </span>
    </button>
  </SignedOut>

  <SignedIn>
    <UserButton />
  </SignedIn>
       
          <button className="flex justify-between items-center">
          <Link href={'/wishlist'}>
            <i className="fa-regular fa-heart text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
           
            <span>WishList</span>
            </Link>
          </button>
          <button className="relative group">
        
  <Link href="/search">
    <i className="fa-solid fa-magnifying-glass text-2xl text-gray-800 group-hover:text-gray-600 transition-all duration-300"></i>
    <span>Search</span>
  </Link>
  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-4 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
   search page
  </span>
</button>
           <Cart />
         
        </div>
      </div>
    </div>
  );
}
