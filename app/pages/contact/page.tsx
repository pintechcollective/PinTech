import React from 'react';
import Form from '@/components/ContactPage';
import { Motion } from '@/app/animations/Motion';
export const metadata = {
  title: 'Contact Us - Pintech',
  description:
    'Get in touch with us to learn more about our services and how we can assist you. Fill out the form and let us know how we can help!',
  keywords: [
    'Contact Us',
    'Customer Support',
    'Get in Touch',
    'Service Inquiry',
    'Your Company Name',
  ],
  author: 'Pintech Inc.',
  openGraph: {
    title: 'Contact Us - Pintech',
    description:
      'Reach out to us for any inquiries or questions over our Service!',
    url: 'https://yourcompany.com/contact',
    type: 'website',
    images: [
      {
        url: '/icons/PT - LogoMark - DBLBL.svg',
        width: 800,
        height: 600,
        alt: 'Pintech Logo',
      },
    ],
  },
};
const Contact = () => {
  return (
    <div>
      <Motion>
        <Form />
      </Motion>
    </div>
  );
};

export default Contact;
