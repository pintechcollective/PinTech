import React from 'react';
import { Motion } from '@/app/sections/About/Motion';
const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: 'I had the opportunity to work with the founders of Pinnacle Technology Collective during their time at Cobalt Robotics, where they were integral to running a smooth and efficient Operations and Maintenance program. By building strong teams, they ensured reliable support and had a tremendous impact on the success of the company. Im excited to see Pinnacle Technology Collective offer the same level of consistency and expertise to its clients.',
      name: 'Sam Johnson',
      title: 'Former Director of Field Operations @ Cobalt Robotics',
    },
    {
      id: 2,
      text: 'Jeff and Chris, the Founders of Pinnacle Technology Collective, played a key role in scaling our field operations and maintenance program during their tenure at Cobalt Robotics. Their practical approach and deep understanding of robotics operations made them a valuable part of the team. Im confident that with Pinnacle Technology Collective, businesses will receive solid, dependable service and support for their robot operations.',
      name: 'Mark Powers',
      title:
        'Former Director of Senior VP of Operations and Maintenance @ Cobalt Robotics',
    },
  ];

  const firstColumn = reviews.slice(0, 3);
  // const secondColumn = reviews.slice(3, 6);
  // const thirdColumn = reviews.slice(6, 9);
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Testimonials
        </h2>
      </div>
      <div className="flex py-24 items-center justify-evenly flex-col sm:flex-row ">
        {firstColumn.map(({ text, name, title, id }) => (
          <div
            key={id}
            className=" px-5 py-10 text-center rounded-xl flex-1 sm:max-w-sm relative "
          >
            <Motion>
              <div className="text-xl">
                {'"'}
                {text}
                {'"'}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-md text-accent">-{name}</p>
                <p className="text-md text-accent">{title}</p>
              </div>
            </Motion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
