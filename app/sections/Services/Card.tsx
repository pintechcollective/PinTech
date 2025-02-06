import React from 'react';
import Image from 'next/image';
const Card = ({
  id,
  title,
  statement,
  image,
}: {
  id: number;
  title: string;
  statement?: string;
  image: string;
}) => {
  return (
    <article
      className="relative shadow-md shadow-accent isolate flex flex-col lg:w-[500px] lg:h-[500px] w-[400px] h-[400px] justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-auto mx-auto mt-24"
      key={id}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-secondary/10"></div>
      <h1 className="z-10 mt-3 text-3xl font-bold text-white">{title}</h1>
      {statement && (
        <div className="z-10 gap-y-1 overflow-hidden text-lg leading-6 text-gray-300">
          {statement}
        </div>
      )}
    </article>
  );
};

export default Card;
