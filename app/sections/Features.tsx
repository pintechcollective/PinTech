import React from 'react';

import Feature from './Feature';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Integration System',
      description:
        'Seamlessly integrate our robotics solutions into your existing workflows with minimal disruption, ensuring efficiency and productivity.',
    },
    {
      id: 2,
      title: 'Goal Setting & Traction',
      description:
        'Define your objectives and track your progress with precision. Our system provides actionable insights to help you achieve your goals.',
    },
    {
      id: 3,
      title: 'Secure Data Encryption',
      description:
        'Protect sensitive data with state-of-the-art encryption, ensuring your robotics operations remain safe and secure at all times.',
    },
  ];

  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container max-w-screen-lg mx-auto px-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you Need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-white/70 text-center mt-5">
            Discover the features that make our robotics solutions the best in
            the industry. We deliver cutting-edge technology to help you achieve
            your business objectives effortlessly.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {features.map(({ id, title, description }) => (
            <Feature title={title} description={description} key={id} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
