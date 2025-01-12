import React from 'react';
import Logo from '@/public/icons/Logo.png';
import Image from 'next/image';
import RobotArm from '@/public/RobotArm,.png';
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
      <div className="container max-w-screen-lg mx-auto px-4">
        <h2 className="text-lg text-center text-white/70">
          Trusted by the worlds most innovative teams
        </h2>
        <div className="relative mt-9 overflow-hidden before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-16 after:w-16 before:bg-gradient-to-r before:from-black before:to-transparent after:bg-gradient-to-l after:from-black after:to-transparent">
          <div className="flex gap-16 lg:gap-32 w-max animate-scroll">
            {images.map(({ id, src }) => (
              <Image
                key={id}
                src={src}
                alt="logo"
                height={50}
                width={50}
                className="h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-16">
        <Image
          src={RobotArm}
          alt="Robot Arm"
          height={600}
          width={600}
          className="relative transform translate-x-[10%] translate-y-[15%] mx-auto"
        />
      </div>
    </div>
  );
};

export default LogoTicker;
