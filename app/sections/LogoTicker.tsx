'use client';
import React from 'react';
// import Logo from '@/public/icons/Logo.png';
// import Logo2 from '@/public/icons/PT - LogoMark - BLABL.svg';
// import Logo3 from '@/public/icons/PT - LogoMark - BLGR.svg';
// import Logo4 from '@/public/icons/PT - LogoMark - DBLBL.svg';
import Logo1 from '@/public/icons/PT - LogoMark - DBLGR.svg';
import Logo2 from '@/public/icons/PT - ALT Mark - WHITE.svg';
import Image from 'next/image';
import RobotArm from '@/public/Robot - Iphone.png';
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: Logo1 },
  { id: 2, src: Logo2 },
  { id: 3, src: Logo1 },
  { id: 4, src: Logo2 },
  { id: 5, src: Logo1 },
  { id: 6, src: Logo2 },
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
              duration: 12,
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
      <motion.div
        initial={{ opacity: 0, y: -300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className=" flex justify-center items-center mt-16"
      >
        <Image
          src={RobotArm}
          alt="Robot Arm"
          height={900}
          width={900}
          className="relative transform translate-x-[5%] translate-y-[5%] mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default LogoTicker;
