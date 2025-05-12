'use client';
import React, { useRef } from 'react';
import Robot from '@/public/robots/Group of Bot - Mock 1.jpg';
import Image from 'next/image';
import Robot2 from '@/public/robots/Product.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
const ProductShowCase = () => {
  const image = useRef<HTMLImageElement>(null);
  const image2 = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: image,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#0e83fe] py-[72px] py-24">
      <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
        Reliable Technology
      </h2>
      <div className="max-w-xl mx-auto px-4">
        <p className="text-xl tex text-center text-white/70 mt-5">
          Celebrate the joy of productivity with automated products.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: '800px',
          }}
        >
          <Image
            alt="Product Screenshot"
            src={Robot2}
            className="mt-14 p-8"
            ref={image}
          />
          <Image
            alt="Product Screenshot"
            src={Robot}
            className="mt-14 p-8"
            ref={image2}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowCase;
