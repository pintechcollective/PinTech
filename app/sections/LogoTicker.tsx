'use client';
import React from 'react';
import Logo from '@/public/icons/Logo.png';
import Image from 'next/image';
import RobotArm from '@/public/RobotArm,.png';
import { motion } from 'framer-motion';

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
        <div className="relative flex my-8 overflow-hidden  before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 after:top-0 before:h-full after:h-full before:w-16 after:w-16 before:bg-gradient-to-r before:from-black/50 before:to-transparent after:bg-gradient-to-l after:from-black/50 after:to-transparent">
          <motion.div
            className="flex flex-none gap-16 pr-16 "
            transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
            }}
            initial={{ translate: 0 }}
            animate={{ translateX: '-50%' }}
          >
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
          </motion.div>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-16">
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
