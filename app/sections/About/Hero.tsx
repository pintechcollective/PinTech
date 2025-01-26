import React from 'react';
import Logo from '@/public/icons/PT - ALT Mark - BLUE.svg';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <div className="flex py-[72px] justify-evenly items-center max-w-screen-lg mx-auto px-4 md:flex-wrap-reverse flex-wrap-reverse">
      <div className="w-full lg:pr-[100px] md:w-1/2 flex  mb-8 md:mb-0">
        <Image
          src={Logo}
          alt="Pintech Logo"
          className="m-4"
          height={600}
          width={600}
        />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-center text-white font-bold text-5xl sm:text-6xl tracking-normal">
          About Us
        </h2>
        <p className="text-xl text-white/70 text-center mt-5">
          At Pintech, we’re pioneers in robotics and automation solutions,
          transforming industries with innovative technology. Our mission is
          simple: to streamline complex tasks and improve productivity through
          cutting-edge robotics. From advanced machine learning algorithms to
          automated workflows, we empower businesses to stay ahead in a rapidly
          evolving world.
        </p>
        <p className="text-xl text-white/70 text-center mt-5">
          With our tailored solutions, we help businesses optimize operations,
          reduce costs, and increase efficiency. Our team of experts works
          closely with clients to deliver personalized automation systems that
          seamlessly integrate into existing processes. Whether you’re in
          manufacturing, logistics, or service industries, Pintech is your
          trusted partner in driving digital transformation.
        </p>
        <p className="text-xl text-white/70 text-center mt-5">
          Join us on our journey to revolutionize the future of automation.
          Let’s build smarter, more efficient solutions together.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
