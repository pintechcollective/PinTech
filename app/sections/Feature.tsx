'use client';

import React, { useEffect, useRef } from 'react';
import { BsRobot } from 'react-icons/bs';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
const Feature = ({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;

      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [offsetX, offsetY]);
  return (
    <div
      key={id}
      className="border border-white/30 px-5 py-10 text-center rounded-xl flex-1 sm:max-w-sm relative "
    >
      <motion.div
        className="absolute inset-0 border-4 border-blue-500 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <motion.div
        className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
      >
        <BsRobot />
      </motion.div>
      <div>
        <h3 className="mt-6 font-bold">{title}</h3>
        <p className="mt-2 text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
