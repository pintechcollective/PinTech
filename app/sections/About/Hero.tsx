import React from 'react';
import Logo from '@/public/icons/AboutLogo.jpg';
import Image from 'next/image';
const AboutHero = () => {
  return (
    <div className="flex flex-row justify-evenly max-w-screen-lg mx-auto px-4">
      <div className="bg-black text-white py-[72px] sm:py-24">
        <div className="container ">
          <Image src={Logo} alt="Pintech Logo" className="object-fill" />
          <div className="flex-grow max-w-xl">
            <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
              Everything you Need
            </h2>
            <p className="text-xl text-white/70 text-center mt-5">
              Discover the features that make our robotics solutions the best in
              the industry. We deliver cutting-edge technology to help you
              achieve your business objectives effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
