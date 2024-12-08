"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
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

      <div className="hidden md:flex flex-grow justify-center">
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

      <div className={`space-x-7 mt-10 hidden md:flex`}>
        <button>
          <Link href="/myaccount">
            <i className="fa-regular fa-user text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
          </Link>
        </button>
        <button>
          <i className="fa-solid fa-magnifying-glass text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
        </button>
        <button>
          <i className="fa-regular fa-heart text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
        </button>
        <button>
          <Link href={'/cart'}><Image src="/cart.png" alt="Cart" width={24} height={24} className="hover:scale-110 transition-all duration-300" /></Link>
        </button>
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
          <button className="flex justify-between items-center">
            <Link href="/myaccount">
              <i className="fa-regular fa-user text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
            </Link>
            <span>Account</span>
          </button>
          <button className="flex justify-between items-center">
            <i className="fa-solid fa-magnifying-glass text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300" aria-hidden="true"></i>
            <span>Search</span>
          </button>
          <button className="flex justify-between items-center">
            <i className="fa-regular fa-heart text-2xl text-gray-800 hover:text-gray-600 transition-all duration-300"></i>
            <span>Favorites</span>
          </button>
          <button className="flex justify-between items-center">
            <Link href={'/cart'}><Image src="/cart.png" alt="Cart" width={24} height={24} className="hover:scale-110 transition-all duration-300" /></Link>
            <span>Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
