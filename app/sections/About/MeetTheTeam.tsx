import React from 'react';
import Member from './Member';
const MeetTheTeam = () => {
  const Members = [
    {
      id: 1,
      name: 'Chris Perez',
      title: 'Director',
      description: 'Description of Professional Background',
      image:
        'https://images.pexels.com/photos/17049770/pexels-photo-17049770/free-photo-of-man-in-suit-and-necktie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Jeffrey Borromeo',
      title: 'Director',
      description: 'Description of Professional Background',
      image:
        'https://images.pexels.com/photos/17049770/pexels-photo-17049770/free-photo-of-man-in-suit-and-necktie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Brandon',
      title: 'Director',
      description: 'Description of Professional Background',
      image:
        'https://images.pexels.com/photos/17049770/pexels-photo-17049770/free-photo-of-man-in-suit-and-necktie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#0e83fe] py-[72px] py-24">
      <div className="flex flex-col justify-center items-center py-[72px]">
        <div className="w-full md:w-1/2">
          <h2 className="text-center text-white font-bold text-5xl sm:text-6xl tracking-normal">
            Meet The Team
          </h2>
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {Members.map(({ id, name, title, description, image }) => (
            <Member
              key={id}
              id={id}
              name={name}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
