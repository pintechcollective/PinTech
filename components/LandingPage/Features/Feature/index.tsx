'use client';
import Image from 'next/image';
import React from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';
const Feature = ({
  id,
  title,
  description,
  image,
}: {
  id: number;
  title: string;
  description: string;
  image: string;
}) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  React.useEffect(() => {
    const animateBorder = () => {
      animate(offsetX, [0, 200, 200, 0, 0], {
        duration: 6,
        repeat: Infinity,
        ease: 'linear',
      });
      animate(offsetY, [0, 0, 200, 200, 0], {
        duration: 6,
        repeat: Infinity,
        ease: 'linear',
      });
    };

    animateBorder();
  }, []);

 return (
    <div
      key={id}
      className="border border-white/30 px-8 py-12 text-center rounded-xl flex-1 sm:max-w-lg relative "
    >
      <motion.div
        className="absolute inset-0 border-4 border-blue-500 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
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
       <Image alt="icon" width={80}  height={80} src={image}/>
      </motion.div>
      <div>
        <h3 className="mt-6 font-bold font-[FusionFont] text-xl">{title}</h3>
        <p className="mt-2 text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
