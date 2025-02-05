'use client';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { RiSubtractFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesAccordion = () => {
  const sections = [
    {
      id: 1,
      section: 'Train',
      text: 'Empowering Your Team and Ours',
      details: [
        {
          purpose: 'Operational Training',
          description:
            'Educating your staff on the best practices for using and managing AMRs within your workflow, ensuring smooth and efficient operations.',
        },
        {
          purpose: 'Technical Training',
          description:
            'Providing in-depth training for our technicians on the inner workings of servicing AMRs, keeping them updated with the latest advancements and repair techniques.',
        },
        {
          purpose: 'Consulting Services',
          description:
            'Offering expert advice and guidance on optimizing your robot operations, enhancing productivity, and reducing costs.',
        },
      ],
      commitment:
        'Our commitment to training ensures that both your team and ours are equipped with the knowledge and skills needed to excel in the ever-evolving field of robot operations.',
    },
    {
      id: 2,
      section: 'Deploy',
      text: 'Seamless Integration for Optimal Performance',
      details: [
        {
          purpose: 'Site Evaluation',
          description:
            'Conduct thorough site evaluations to determine the best configuration for your AMRs.',
        },
        {
          purpose: 'Installation',
          description:
            'Install robots and hardware infrastructure with precision and efficiency.',
        },
        {
          purpose: 'Customization & Configuration',
          description:
            'Customize and configure the system to meet your specific operational needs.',
        },
      ],
      commitment:
        'By leveraging our extensive experience and technical know-how, we guarantee a hassle-free deployment that sets the foundation for your AMRs’ success.',
    },
    {
      id: 3,
      section: 'Maintain',
      text: 'Ensuring Maximum Uptime and Reliability',
      details: [
        {
          purpose: 'Preventative Maintenance',
          description:
            'Regularly scheduled inspections and preventative maintenance to identify and address potential issues before they escalate.',
        },
        {
          purpose: 'Rapid Response Repairs',
          description:
            'Rapid response repair services to minimize downtime in case of malfunctions or damage.',
        },
        {
          purpose: 'Dedicated Support Team',
          description:
            'Access to a dedicated support team for troubleshooting and technical assistance.',
        },
      ],
      commitment:
        'With our maintenance services, you can rely on your robots to perform consistently, allowing you to focus on your core business activities.',
    },
  ];

  const AccordionItem = ({
    id,
    section,
    text,
    details,
  }: {
    id: number;
    section: string;
    text?: string;
    details?: {
      purpose?: string;
      description: string;
    }[];
  }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <div
        key={id}
        className="py-7 border-b border-secondary/30 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span
            className={
              !isOpen
                ? 'text-white flex-1 text-lg font-bold'
                : 'flex-1 text-lg font-bold text-accent'
            }
          >
            {section}
          </span>
          {!isOpen ? <IoMdAdd /> : <RiSubtractFill />}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
            >
              {text && <p>{text}</p>}
              {details &&
                details.map((detail, index) => (
                  <div key={index}>
                    <strong className="text-accent">{detail.purpose}:</strong>{' '}
                    {detail.description}
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container p-4 max-w-screen-lg mx-auto px-4">
        <h2 className=" font-extrabold text-center text-5xl tracking-tighter sm:text-6xl sm:max-w-[648px] mx-auto">
          TAILORED SOLUTIONS FOR YOUR NEEDS
        </h2>
        {/* <p className="text-md text-white/70 m-8  text-center">
          Pinnacle Technology Collective Privacy Policy
        </p> */}
        <div className="mt-12 max-w-[648px] lg:max-w-[1000px] mx-auto ">
          {sections.map(({ id, section, text, details }) => (
            <AccordionItem
              section={section}
              text={text}
              details={details}
              id={id}
              key={id}
            />
          ))}
        </div>
        <div>
          <p className="text-md text-white/70 m-8  text-start">
            Last Updated On: February 2nd, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesAccordion;
