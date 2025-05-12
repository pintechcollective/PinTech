import React from 'react';
import Logo from '@/public/icons/PT - ALT Mark - BLUE.svg';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-[#0e83fe]">
      <div className="flex py-[72px] justify-evenly items-center max-w-screen-lg mx-auto px-4  flex-wrap-reverse ">
        <div className="w-full lg:pr-[100px] md:w-1/2 lg:flex  mb-8 md:mb-0 hidden">
          <Image
            src={Logo}
            alt="Pintech Logo"
            className="m-4"
            height={600}
            width={600}
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-center text-4xl sm:text-6xl tracking-tighter text-white">
          About Us
          </h1>

          <p className="text-xl text-white/70 text-center mt-5">
        PinTech specializes in providing skilled
            technicians and consulting services for Autonomous Mobile Robot
            (AMR) companies. Our focus is on deploying and maintaining robots,
            offering AMR companies an affordable and reliable Operations and
            Maintenance Program provider.
          </p>
          <p className="text-xl text-white/70 text-center mt-5">
            Our mission is to enable businesses to enhance efficiency and
            streamline operations through effective robotic solutions, ensuring
            optimal performance and longevity of their robotic assets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

//adding new header