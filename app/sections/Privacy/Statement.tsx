'use client';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { RiSubtractFill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const Statement = () => {
  const sections = [
    {
      id: 1,
      section: 'Introduction',
      text: "Pinnacle Technology Collective ('we,' 'our,' or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, pintechcollective.com (the 'Site'). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.",
      effectiveDate: '09/15/2024',
    },
    {
      id: 2,
      section: 'Information We Collect',
      details: [
        {
          type: 'Personal Information',
          description:
            'We may collect personal information such as your name, email address, phone number, and any other details you voluntarily provide when you contact us or request services.',
        },
        {
          type: 'Technical Information',
          description:
            "We collect information about your device and your use of the Site, such as IP addresses, browser type, and access times. This information is used to improve the Site's performance and user experience.",
        },
        {
          type: 'Cookies and Tracking Technologies',
          description:
            'We use cookies and similar tracking technologies to monitor your activity on our Site and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
        },
      ],
    },
    {
      id: 3,
      section: 'How We Use Your Information',
      details: [
        {
          purpose: 'To Provide Services',
          description:
            'We may use your information to respond to your inquiries, provide requested services, and communicate with you about your account or the services we offer.',
        },
        {
          purpose: 'To Improve Our Site',
          description:
            'We analyze the data we collect to enhance the functionality and content of our Site, ensuring that it meets your needs and preferences.',
        },
        {
          purpose: 'To Comply with Legal Obligations',
          description:
            'We may use your information to comply with applicable laws, regulations, or legal processes.',
        },
      ],
    },
    {
      id: 4,
      section: 'How We Share Your Information',
      details: [
        {
          category: 'Service Providers',
          description:
            'We may share your information with third-party service providers who assist us in operating the Site or providing our services. These service providers are bound by contractual obligations to protect your information and use it only for the purposes for which it was disclosed.',
        },
        {
          category: 'Legal Compliance',
          description:
            'We may disclose your information if required to do so by law or if we believe that such action is necessary to comply with legal obligations, protect our rights, or respond to legal claims.',
        },
      ],
    },
    {
      id: 5,
      section: 'Cookies and Tracking Technologies',
      text: 'We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies help us understand how you use our Site, personalize your experience, and improve our services. You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect your ability to use certain features of the Site.',
    },
    {
      id: 6,
      section: 'Data Security',
      text: 'We implement appropriate technical and organizational measures to safeguard your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmitting data over the internet or storing data is completely secure, and we cannot guarantee the absolute security of your information.',
    },
    {
      id: 7,
      section: 'Your Privacy Rights',
      rights: [
        {
          name: 'Right to Access',
          description:
            'You have the right to request access to the personal information we collect about you.',
        },
        {
          name: 'Right to Delete',
          description:
            'You may request that we delete your personal information, subject to certain exceptions.',
        },
        {
          name: 'Right to Opt-Out',
          description:
            'You have the right to opt out of the sale of your personal information, if applicable.',
        },
      ],
      action:
        'To exercise these rights, please contact us using the information provided below. We will respond to your request in accordance with applicable law.',
    },
    {
      id: 8,
      section: 'Third-Party Links',
      text: 'Our Site may contain links to third-party websites or services that are not owned or controlled by Pinnacle Technology Collective. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.',
    },
    {
      id: 9,
      section: 'Childrens Privacy',
      text: 'Our Site is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information as soon as possible.',
    },
    {
      id: 10,
      section: 'Changes to This Privacy Policy',
      text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated Privacy Policy on this page with an updated date. Your continued use of the Site after any changes signifies your acceptance of the updated Privacy Policy.',
    },
    {
      id: 11,
      section: 'Contact Us',
      contactInfo: {
        company: 'Pinnacle Technology Collective',
        address: '30 N Gould St Ste R, Sheridan, Wyoming 82801',
        email: 'info@pintechcollective.com',
      },
    },
  ];

  const AccordionItem = ({
    id,
    section,
    text,
    details,
    rights,
    contactInfo,
  }: {
    id: number;
    section: string;
    text?: string;
    details?: { type: string; description: string }[];
    rights?: { name: string; description: string }[];
    contactInfo?: { company: string; address: string; email: string };
  }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <div
        key={id}
        className="py-7 border-b border-white/30"
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
                    <strong>{detail.type}:</strong> {detail.description}
                  </div>
                ))}
              {rights &&
                rights.map((right, index) => (
                  <div key={index}>
                    <strong>{right.name}:</strong> {right.description}
                  </div>
                ))}
              {contactInfo && (
                <div>
                  <strong>Contact Information:</strong>
                  <div>Company: {contactInfo.company}</div>
                  <div>Address: {contactInfo.address}</div>
                  <div>Email: {contactInfo.email}</div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container p-4 max-w-screen-lg mx-auto px-4">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl sm:max-w-[648px] mx-auto">
          Privacy Policy Statement
        </h2>
        <p className="text-md text-white/70 m-8  text-center">
          Pintech, Inc. Privacy Policy
        </p>
        <div className="mt-12 max-w-[648px] mx-auto">
          {sections.map(
            ({ id, contactInfo, section, text, details, rights }) => (
              <AccordionItem
                section={section}
                text={text}
                details={details}
                rights={rights}
                contactInfo={contactInfo}
                id={id}
                key={id}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Statement;
