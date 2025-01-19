'use client';
import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Logo from '@/public/icons/PT - LogoLock - Dark  BG.svg';
import Image from 'next/image';
import { IoMenu } from 'react-icons/io5';
import { IoIosClose } from 'react-icons/io';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10">
      <div className="flex gap-3 justify-center items-center py-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">
          Automate your workflow and boost productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for Free</p>
          <FaArrowRightLong className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5 bg-black">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src={Logo}
              alt="sas logo"
              height={150}
              width={150}
              className="text-center m-4 object-cover"
            />
            <div className="relative">
              <IoMenu
                className={
                  !isOpen
                    ? 'absolute top-[-30px] right-4 h-10 w-10 md:hidden text-white m-2'
                    : 'hidden'
                }
                onClick={() => setOpen(!isOpen)}
              />

              <div
                className={
                  isOpen
                    ? 'fixed top-0 left-0 flex justify-center items-center h-[100%] w-[100%] bg-gray-900/50 md:hidden lg:hidden'
                    : 'hidden'
                }
              >
                <IoIosClose
                  className="absolute top-[50px] right-4 left-4 h-14 w-14 md:hidden text-white "
                  onClick={() => setOpen(!isOpen)}
                />
                <nav className="flex justify-center flex-col items-center text-white/90 gap-16 text-4xl">
                  <a href="#">About</a>
                  <a href="#">Pricing</a>
                  <a href="#">Contact Us</a>
                </nav>
              </div>
            </div>
            <nav className="hidden md:flex gap-6  text-white/90 items-center">
              <a href="#">About</a>
              <a href="#">Pricing</a>
              <a href="#">Contact Us</a>
              <button className="bg-accent text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-right">
                Get for Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
