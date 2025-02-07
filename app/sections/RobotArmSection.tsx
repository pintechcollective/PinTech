'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import RobotArm from '@/public/Robot - Iphone.png';
const RobotArmSection = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className=" flex justify-center items-center m-6"
      >
        <Image
          src={RobotArm}
          alt="Robot Arm"
          height={900}
          width={900}
          className="relative transform translate-x-[5%] translate-y-[3%] lg:translate-y-[5%] mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default RobotArmSection;
