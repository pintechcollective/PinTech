'use client';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { RiSubtractFill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';

const FAQs = () => {
  const items = [
    {
      id: 1,
      questions: 'What kind of robots do you offer for automation?',
      answers:
        'We provide a range of robots designed for different industries, including industrial robots, service robots, and collaborative robots (cobots) for tasks such as assembly, packaging, and customer service.',
    },
    {
      id: 2,
      questions: 'How can automation improve my business efficiency?',
      answers:
        'Automation helps streamline repetitive tasks, reduce human error, improve safety, and increase overall productivity. By integrating robotics into your operations, you can achieve higher output and cost savings in the long run.',
    },
    {
      id: 3,
      questions: 'What is the ROI for implementing automation in my business?',
      answers:
        'The return on investment (ROI) for automation varies depending on your business needs, but many companies see a significant improvement in efficiency, cost reduction, and profitability within the first few months to a year of implementation.',
    },
    {
      id: 4,
      questions:
        'Do you offer after-sales support and maintenance for your robots?',
      answers:
        'Yes, we provide comprehensive after-sales support, including maintenance services, troubleshooting, and software updates to ensure your robots continue to function optimally throughout their lifespan.',
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
          <span className="flex-1 text-lg font-bold">{questions}</span>
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
    <div className="bg-black text-white bg-gradient-to-b from-[#0e83fe] to-black py-[72px] sm:py-24">
      <div className="container p-4 max-w-screen-lg mx-auto px-4">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl sm:max-w-[648px] mx-auto">
          Frequently Asked Questions
        </h2>
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
