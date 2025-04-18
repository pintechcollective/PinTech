'use client';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { RiSubtractFill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';

const FAQs = () => {
  const items = [
    {
      id: 1,
      questions: 'How does it work? ',
      answers:
        'Our goal is to help robotics companies offload their most costly and cumbersome part of their business - fleet operations. We start by understanding your fleet’s needs, pricing would be personalized to those exact needs, we would welcome you to the family, onboard your team, then learn and maintain your fleet’s maintenance SOPs.',
    },
    {
      id: 2,
      questions: 'What types of robots do you service?',
      answers:
        'Our highly trained technicians can service any and all Autonomous Mobile Robots (AMRs).',
    },
    {
      id: 3,
      questions: 'Do you offer on-site servicing?',
      answers:
        'Yes, each of Pinnacle Technology Collective’s services are done on-site wherever your fleet is. Check our Services Page for more information.',
    },
    {
      id: 4,
      questions: 'How much is Pinnacle Technology Collective’s services?',
      answers:
        'We offer tailored pricing based on our customers’ specific fleet needs. Reach out to us directly for customized pricing for your fleet.',
    },
    {
      id: 5,
      questions: 'Are your technicians certified?',
      answers:
        'Yes. Every Pinnacle Technology Collective technician goes through a rigorous vetting and training process until they become “PinTech certified”. Each of our technicians are held to the highest standards of quality and continuous improvement.',
    },
  ];

  const AccordionItem = ({
    id,
    questions,
    answers,
  }: {
    id: number;
    questions: string;
    answers: string;
  }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <div
        key={id}
        className=" py-7 border-b border-white/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span
            className={
              isOpen
                ? 'flex-1 text-lg font-bold text-accent'
                : 'flex-1 text-lg font-bold text-white'
            }
          >
            {questions}
          </span>
          {!isOpen ? <IoMdAdd /> : <RiSubtractFill />}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
                marginTop: '16px',
              }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
            >
              {answers}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#0e83fe] to-black py-[24px] sm:py-14">
      <div className="container p-4 max-w-screen-lg mx-auto px-4">
        <h1 className="text-center text-4xl sm:text-6xl tracking-tighter sm:max-w-[648px] mx-auto">
          Frequently Asked Questions
        </h1>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ id, answers, questions }) => (
            <AccordionItem
              questions={questions}
              answers={answers}
              id={id}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
