import React from 'react';
import Card from './Card';
const Cards = () => {
  const solutions = [
    {
      id: 1,
      title: 'Train',
      statement: 'Empowering success for your team and ours',
      image: '/robots/Mock bot Small 2.jpg',
    },
    {
      id: 2,
      title: 'Deploy',
      statement: '',
      image: '/robots/Mock Bot 1.jpg',
    },
    {
      id: 3,
      title: 'Maintain',
      statement: '',
      image: '/robots/Mock bot Small 3.jpg',
    },
  ];
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="flex justify-center items-center">
        <h1 className=" font-extrabold text-start text-2xl tracking-tighter sm:text-4xl ">
          TAILORED SOLUTIONS FOR YOUR NEEDS
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly ">
        {solutions.map(({ id, title, statement, image }) => (
          <Card
            key={id}
            id={id}
            title={title}
            statement={statement}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
