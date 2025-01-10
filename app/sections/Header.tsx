import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Logo from '@/public/icons/Logo.png';
import Image from 'next/image';
import { IoMenu } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="sticky top-0">
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
              height={50}
              width={50}
              className="text-center m-4"
            />
            <IoMenu className="h-10 w-10 md:hidden text-white m-2" />
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
