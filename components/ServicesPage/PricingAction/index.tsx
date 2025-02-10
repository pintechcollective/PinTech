import React from 'react';
import Link from 'next/link';
const PricingAction = () => {
  return (
    <div className="bg-gradient-to-b from-black to-secondary/25 text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl p-2">
          Fully customizable and tailored pricing for your exact needs
        </h2>
        <p className="text-xl text-white/70 mt-5"></p>
        <form className="mt-10 flex flex-col gap-2.5 justify-center items-center max-w-sm mx-auto sm:flex-row">
          <Link href={'/pages/contact'}>
            <button className="bg-secondary text-center text-black clip-diagonal font-medium px-5 py-2 w-[150px] ">
              Get A Quote
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PricingAction;
