'use client'

import React from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';

const Fact = ({
  id,
  hours,
  service,
}: {
  id: number;
  hours: number;
  service: string;
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
      className="px-5 py-10 text-center rounded-xl flex-1 sm:max-w-sm relative"
    >
      <motion.div
        className="absolute inset-0 border-4 border-accent rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      ></motion.div>
      <motion.div
        className="inline-flex bg-white text-black justify-center items-center rounded-lg"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
      ></motion.div>
      <div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white/90">{`${hours} + ${service}`}</h2>
      </div>
    </div>
  );
};

export default Fact;
