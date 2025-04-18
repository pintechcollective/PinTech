'use client';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { RiSubtractFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../Cards/Card';
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
      types: [
        {
          title: 'Preventative Maintenance:',
          description:
            'PinTech will take care of routine preventative maintenance on a schedule that best suits your robots to avoid downtime and breaks. This service typically includes an overall physical inspection and greasing of any components like casters.',
        },
        {
          title: 'Robot Deployment:',
          description:
            'Deployment services ranging from receiving robot shipment, setup, programming for service, and launch at the site.',
        },
        {
          title: 'Emergency Break-Fix Services:',
          description:
            'Robots break unexpectedly. We will respond to emergency breaks and quickly fix them to maximize uptime and remain within SLAs.',
        },
        {
          title: 'Non-Emergency Site Visits/Repairs:',
          description:
            'An option between preventative maintenance and emergency break-fix services. Non-critical repairs that are needed outside of preventative maintenance and emergency break-fixes.',
        },
      ],
      commitment:
        'With our maintenance services, you can rely on your robots to perform consistently, allowing you to focus on your core business activities.',
    },
  ];

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

  const AccordionItem = ({
    id,
    section,
    text,
    details,
    commitment,
    types,
  }: {
    id: number;
    section: string;
    text?: string;
    details?: {
      purpose?: string;
      description: string;
    }[];
    commitment: string;
    types?: {
      title: string;
      description: string;
    }[];
  }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <div>
        <div className="flex flex-wrap justify-evenly ">
          {solutions
            .filter((solution) => solution.title === section)
            .map(({ id, title, statement, image }) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                key={id}
                className="block sm:hidden"
              >
                <Card
                  id={id}
                  title={title}
                  statement={statement}
                  image={image}
                />
              </motion.div>
            ))}
        </div>
        <div
          key={id}
          className="py-7 border-b border-secondary/30 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            <span
              className={
                !isOpen
                  ? 'text-white flex-1 text-4xl sm:text-6xl font-bold font-Headings'
                  : 'flex-1  text-4xl sm:text-6xl font-bold text-secondary font-Headings'
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
                    <ul
                      className="text-start  text-lg list-disc p-4 sm:p-2 sm:m-6 m-6"
                      key={index}
                    >
                      <li className="mt-4 sm:mt-2 p-2 sm:p-1 text-accent">
                        {detail.purpose}:
                      </li>{' '}
                      {detail.description}
                    </ul>
                  ))}
                <div className="flex flex-col md:flex-row lg:flex-row flex-wrap justify-center gap-6 items-center">
                  {types &&
                    types.map((type, index) => (
                      <div
                        className="border border-secondary/30 px-5 py-10 text-center rounded-xl flex-1 sm:max-w-sm relative flex-row "
                        key={index}
                      >
                        <p className="mt-4 sm:mt-2 p-2 sm:p-1 text-accent">
                          {type.title}:
                        </p>{' '}
                        <p>{type.description}</p>
                      </div>
                    ))}
                  {commitment && <p className="mt-4">{commitment}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white pt-[72px] sm:pt-14">
      <div className="container p-4 max-w-screen-lg mx-auto px-4">
        <div className=" flex justify-center flex-col lg:items-center items-start lg:text-center  text-start p-4 ">
          <h1 className=" text-center text-4xl sm:text-6xl tracking-tighter  text-secondary">
            Solutions
          </h1>
          <h2 className=" font-extrabold lg:text-center text-start text-2xl tracking-tighter sm:text-xl ">
            Tailored Solutions For Your Needs
          </h2>
        </div>
        <div className="mt-12 max-w-[648px] lg:max-w-[4000px] mx-auto ">
          {sections.map(({ id, section, text, details, commitment, types }) => (
            <AccordionItem
              section={section}
              commitment={commitment}
              text={text}
              types={types}
              details={details}
              id={id}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAccordion;
