'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
const Member = ({
  id,
  title,
  name,
  description,
  image,
}: {
  id: number;
  title: string;
  name: string;
  description: string;
  image: string;
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
      className=" px-5 py-10 text-center rounded-xl flex-1 sm:max-w-sm relative "
    >
      <motion.div
        className="absolute inset-0 border-4 border-accent rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <motion.div
        className="inline-flex  bg-white text-black justify-center items-center rounded-lg"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
      >
        <Image
          alt="professional headshot"
          src={image}
          height={500}
          width={500}
          className="object-cover"
        />
      </motion.div>
      <div>
        <h2 className="text-sm font-bold text-white">{name}</h2>
        <h3 className="mt-6 font-thin text-white/50">{title}</h3>
        <p className="mt-2 text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default Member;
