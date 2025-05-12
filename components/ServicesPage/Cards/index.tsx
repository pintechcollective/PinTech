'use client';
import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
const Cards = () => {
  const solutions = [
    {
      id: 1,
      title: 'Train',
      statement: '',
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
    <div className="hidden sm:block bg-black text-white py-[24px] sm:py-4 ">
      <div className="flex flex-wrap justify-evenly ">
        {solutions.map(({ id, title, statement, image }) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            key={id}
          >
            <Card id={id} title={title} statement={statement} image={image} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
