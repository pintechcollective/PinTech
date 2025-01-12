import React from 'react';
import Robot from '@/public/Product.png';
import Image from 'next/image';
const ProductShowCase = () => {
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
        <Image alt="Product Screenshot" src={Robot} className="mt-14 p-8" />
      </div>
    </div>
  );
};

export default ProductShowCase;
