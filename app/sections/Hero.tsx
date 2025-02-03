'use client';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
// import Logo from '@/public/icons/PT - LogoMark - BLGR.svg';
import Logo2 from '@/public/icons/PT - LogoMark - BLAGR.svg';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import Image from 'next/image';
// import RobotArm from '@/public/RobotArm,.png';
const Hero = () => {
  return (
    <div className=" bg-black text-white bg-[linear-gradient(to_bottom,#000,#06276d_34%,#0e83fe_52%,#9cd633_98%)] py-[72px] sm:py-24 relative overflow-clip ">
      <motion.div
        className="absolute top-32 lg:top-44 inset-0 flex items-center justify-center opacity-30"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 0.1,
        }}
        transition={{ duration: 3 }}
      >
        <Image
          src={Logo2}
          alt="Logo"
          className="w-[800px] h-[800px]"
          priority
        />
      </motion.div>
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#1BFC06_65%] bg-[radial-gradient(closest-side,#000_82%,#0e83fe)] top-[calc(100%-120px)]"></div>
      <div className="container relative ">
        <div className="flex items-center justify-center md:w-screen">
          <Link
            href={'/pages/pricing'}
            className=" inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#f87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              The Solutions are here
            </span>

            <span className="inline-flex items-center gap-1 text-sm text-white/70">
              Pricing
              <FaArrowRightLong className="h-2 w-2 inline-flex justify-center items-center" />
            </span>
          </Link>
        </div>
        <div className="flex justify-center md:w-screen">
          <h1 className="text-4xl sm:text-7xl lg:text-9xl font-bold tracking-tight text-center mt-8">
            <a className="text-accent block md:w-screen">AMR Fleet</a>
            <span className="block md:w-screen">Operations</span>
          </h1>
          {/* <Image
            src={RobotArm}
            alt="Robot Arm"
            height={400}
            width={400}
            className="absolute"
          /> */}
        </div>
        <div className="flex justify-center md:w-screen">
          <p className="text-center text-xl mt-8 max-w-md p-4">
          Pinnacle Technology Collective empowers Autonomous Mobile Robot (AMR) fleet operations and can reduce operational costs by up to 60%
          </p>
        </div>
        <div className="flex justify-center mt-8 md:w-screen">
          <button className="bg-accent text-black clip-diagonal font-medium px-4 py-2 w-[150px]">
            Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
