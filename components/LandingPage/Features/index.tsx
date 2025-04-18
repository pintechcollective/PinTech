import React from 'react';
import Link from 'next/link';
import Feature from './Feature';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Train',
      description: 'Empowering success for your team and ours',
    },
    {
      id: 2,
      title: 'Deploy',
      description: 'Seamless integration for optimal performance',
    },
    {
      id: 3,
      title: 'Maintain',
      description: 'Ensuring maximum uptime, reliability, and efficiency',
    },
  ];

  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container max-w-screen-lg mx-auto px-4">
        <h1 className="text-center text-4xl sm:text-6xl tracking-tighter">
          Everything you Need
        </h1>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-white/70 text-center mt-5">
            Empowering robotics companies to grow faster by offloading the most
            costly and cumbersome part of the business, fleet operations.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {features.map(({ id, title, description }) => (
            <Feature title={title} description={description} key={id} id={id} />
          ))}
        </div>
        <div className="mt-[50px] flex flex-col gap-2.5 justify-center items-center max-w-sm mx-auto sm:flex-row">
          <Link
            href={'/pages/services'}
            className="bg-accent text-center text-black clip-diagonal font-medium px-5 py-2 w-[150px] "
          >
            Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
