"use client";
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

import {Tilt_Warp} from "@next/font/google"
import Link from "next/link";

const Navbar = () => {

  // const tilt_wrap = Tilt_Warp({
  //   weight: ['400'],
  //   subsets: ['latin'], // or 'latin-ext', depending on your language
  //   variable: '--font-roboto', // optional variable for custom CSS
  // });

  const links = [
    { name: "Components", href: "/", },
    // { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
  ];
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };


  return (
    <nav className="w-full bg-black">
      <div className="bg-mainGrey w-full h-[70px] rounded-t-md flex items-center justify-between border-b-4 border-black px-5">
        <div className='flex font-sans text-3xl font-bold h-full items-center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out transform'>
          CherryUI
        </div>
        <div className="h-full md:flex hidden">
          {links.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="font-sans text-lg font-bold h-full flex items-center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out transform"
            >
              {item.name}
              
            </Link>
          ))}
        </div>
        <div className="flex items-center md:w-[135.21px] md:justify-end">
          <a
            href="https://github.com/gingkoi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="hidden md:block hover:scale-110 transition-transform duration-300 ease-in-out transform" size={35} />
          </a>

          <GiHamburgerMenu
            size={35}
            className="md:hidden"
            onClick={handleNav}
          />
        </div>
      </div>
      <div className={nav ? "block" : "hidden"}>
        <div className="bg-mainGrey h-[480px] rounded-b-2xl absolute top-0 left-0 w-full border-8 border-b-8 border-black flex flex-col justify-between items-center z-10">
          <div className="w-full flex flex-col">
            {links.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="border-b-4 border-black font-bold text-2xl py-6 text-center"
                onClick={closeNav}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-b-4 border-black py-6 flex justify-center space-x-10">
              <a
                href="https://github.com/gingkoi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="hover:opacity-70" size={50} />
              </a>
            </div>
          </div>
          <div>
            <AiOutlineClose size={50} className="my-5" onClick={handleNav} />
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar