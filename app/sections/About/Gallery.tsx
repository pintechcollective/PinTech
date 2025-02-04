import React from 'react';
import Image from 'next/image';
const Gallery = () => {
  const images = [
    {
      id: 1,
      src: '/robots/Mock Bot 2.jpg',
      alt: 'Mock Bot 2',
    },
    {
      id: 2,
      src: '/robots/Mock bot 3i.jpg',
      alt: 'Mock Bot 3',
    },
    {
      id: 3,
      src: '/robots/Mock bot Small 3.jpg',
      alt: 'Mock bot Small 2',
    },
  ];
  return (
    <div className="bg-black overflow-hidden">
      <div className="flex py-[72px] justify-evenly items-center max-w-screen-lg mx-auto px-4  flex-wrap-reverse ">
        <h2 className="text-center text-white font-bold text-5xl sm:text-6xl tracking-normal">
          Reliable Technology
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:auto-rows-[600px] md:grid-cols-2 md:auto-rows-[250px]">
        {images.map(({ id, alt, src }) => (
          <Image
            src={src}
            alt={alt}
            key={id}
            className="h-auto lg:m-4 p-2 w-auto shadow-sm shadow-accent"
            width={400}
            height={400}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
