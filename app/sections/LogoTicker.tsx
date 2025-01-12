import React from 'react';
import Logo from '@/public/icons/Logo.png';
import Image from 'next/image';

const images = [
  { id: 1, src: Logo },
  { id: 2, src: Logo },
  { id: 3, src: Logo },
  { id: 4, src: Logo },
  { id: 5, src: Logo },
  { id: 6, src: Logo },
];
const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-24">
      <div className="container">
        <h2 className="text-lg text-center text-white/70 ">
          Trusted by the worlds most innovated teams
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative  after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <div className="flex gap-16 lg:gap-72">
            {images.map(({ id, src }) => (
              <Image
                key={id}
                src={src}
                alt="logo"
                height={50}
                width={50}
                className="flex-none h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
