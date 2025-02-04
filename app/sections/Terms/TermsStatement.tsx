'use client';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { RiSubtractFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({
  id,
  section,
  text,
  details,
  contactInfo,
}: {
  id: number;
  section: string;
  text?: string;
  details?: { title: string; description: string }[];
  contactInfo?: { company: string; address: string; email: string };
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      key={id}
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center cursor-pointer">
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
            {text && <p className="text-white/80">{text}</p>}
            {details &&
              details.map((detail, index) => (
                <div key={index} className="mt-2">
                  <strong className="text-accent">{detail.title}:</strong>{' '}
                  {detail.description}
                </div>
              ))}
            {contactInfo && (
              <div className="mt-4">
                <strong>Contact Information:</strong>
                <div>
                  <div>
                    Company:{' '}
                    <span className="text-accent">{contactInfo.company}</span>
                  </div>
                  <div>
                    Address:{' '}
                    <span className="text-accent">{contactInfo.address}</span>
                  </div>
                  <div>
                    Email:{' '}
                    <a
                      className="text-accent"
                      href={`mailto:${contactInfo.email}`}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TermsStatement = () => {
  const termsOfService = [
    {
      id: 1,
      section: 'Introduction',
      text: "Welcome to Pinnacle Technology Collective ('we,' 'us,' or 'our'). These Terms of Service ('Terms') govern your use of our website, pintechcollective.com (the 'Site'). By accessing or using the Site, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use the Site.",
      effectiveDate: '09/15/2024',
    },
    {
      id: 2,
      section: 'Use of the Site',
      details: [
        {
          title: 'Eligibility',
          description:
            'You must be at least 18 years old to use the Site. By using the Site, you represent and warrant that you are of legal age to form a binding contract and comply with all applicable laws and regulations.',
        },
        {
          title: 'Permitted Use',
          description:
            'You may use the Site for lawful purposes only. You agree not to use the Site for any illegal or unauthorized purposes, including but not limited to violating intellectual property or privacy rights, or transmitting harmful code.',
        },
      ],
    },
    {
      id: 3,
      section: 'Intellectual Property Rights',
      details: [
        {
          title: 'Ownership',
          description:
            'All content on the Site, including text, graphics, logos, images, and software, is the exclusive property of Pinnacle Technology Collective or its licensors, protected by intellectual property laws.',
        },
        {
          title: 'Licence',
          description:
            'We grant you a limited, non-exclusive, non-transferable, and revocable licence to access and use the Site for personal, non-commercial purposes. You may not copy, distribute, modify, or create derivative works of any content without prior written consent.',
        },
      ],
    },
    {
      id: 4,
      section: 'User Content',
      details: [
        {
          title: 'Responsibility',
          description:
            'If you submit content to the Site, you are solely responsible for ensuring it complies with these Terms and applicable laws and does not infringe third-party rights.',
        },
        {
          title: 'Licence to Us',
          description:
            'By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free, perpetual, and irrevocable licence to use, reproduce, modify, distribute, and display your content in connection with our Site and business operations.',
        },
      ],
    },
    {
      id: 5,
      section: 'Disclaimers and Limitation of Liability',
      details: [
        {
          title: 'No Warranties',
          description:
            "The Site is provided 'as is' and 'as available' without any warranties, express or implied. We do not guarantee uninterrupted, error-free, or secure operation of the Site.",
        },
        {
          title: 'Limitation of Liability',
          description:
            'To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of the Site.',
        },
      ],
    },
    {
      id: 6,
      section: 'Indemnification',
      text: 'You agree to indemnify, defend, and hold harmless Pinnacle Technology Collective and its affiliates from any claims, damages, or expenses arising from your use of the Site, violation of these Terms, or submission of User Content.',
    },
    {
      id: 7,
      section: 'Governing Law and Dispute Resolution',
      details: [
        {
          title: 'Governing Law',
          description:
            'These Terms are governed by the laws of the State of Wyoming, without regard to conflict of law principles.',
        },
        {
          title: 'Dispute Resolution',
          description:
            'Disputes related to these Terms or the Site shall be resolved through binding arbitration in [Insert City, Wyoming], following the rules of the American Arbitration Association. Both parties waive any right to a jury trial.',
        },
      ],
    },
    {
      id: 8,
      section: 'Changes to These Terms',
      text: 'We may update these Terms at our discretion. Any significant changes will be posted on this page with an updated effective date. Continued use of the Site after updates signifies acceptance of the revised Terms.',
    },
    {
      id: 9,
      section: 'Termination',
      text: 'We reserve the right to terminate or suspend your access to the Site without notice if we determine, at our sole discretion, that you have violated these Terms or acted in a manner harmful to other users, our business, or third parties.',
    },
    {
      id: 10,
      section: 'Contact Us',
      contactInfo: {
        company: 'Pinnacle Technology Collective',
        address: '30 N Gould St. Ste. R, Sheridan, WY 82801',
        email: 'info@pintechcollective.com',
      },
    },
  ];
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container p-4 max-w-screen-lg mx-auto px-4">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl sm:max-w-[648px] mx-auto">
          Terms of Service
        </h2>
        <p className="text-md text-white/70 m-8 text-center">
          Pinnacle Technology Collective Terms of Service
        </p>
        <div className="mt-12 max-w-[648px] mx-auto">
          {termsOfService.map(({ id, contactInfo, section, text, details }) => (
            <AccordionItem
              key={id}
              id={id}
              section={section}
              text={text}
              details={details}
              contactInfo={contactInfo}
            />
          ))}
        </div>
        <div>
          <p className="text-md text-white/70 m-8 text-start">
            Last Updated On: February 2nd, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsStatement;
