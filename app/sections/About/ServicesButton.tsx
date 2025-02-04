import React from 'react';
import Link from 'next/link';
const ServicesButton = () => {
  return (
    <div className="bg-gradient-to-b from-black to-accent/25 text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          View Our Services
        </h2>
        <p className="text-xl text-white/70 mt-5"></p>
        <form className="mt-10 flex flex-col gap-2.5 justify-center items-center max-w-sm mx-auto sm:flex-row">
          <Link href={'/pages/services'}>
            <button className="bg-secondary hover:bg-accent text-center text-black clip-diagonal font-medium px-5 py-2 w-[150px] ">
              Services
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ServicesButton;
