import React from 'react';
import Fact from './Fact';
const Facts = () => {
  const Services = [
    {
      id: 1,
      hours: 8,
      service: 'years of experience',
      image:
        'https://images.pexels.com/photos/17049770/pexels-photo-17049770/free-photo-of-man-in-suit-and-necktie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      hours: 300,
      service: 'robots serviced',
      image:
        'https://images.pexels.com/photos/17049770/pexels-photo-17049770/free-photo-of-man-in-suit-and-necktie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      hours: 7000,
      service: 'service hours',
      image:
        'https://images.pexels.com/photos/17049770/pexels-photo-17049770/free-photo-of-man-in-suit-and-necktie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#0e83fe] to-black py-[42px] ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl sm:text-6xl tracking-tighter">
          Experience That Counts
        </h1>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {Services.map(({ id, hours, service, image }) => (
            <Fact
              key={id}
              id={id}
              hours={hours}
              service={service}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
