import React from 'react';
import TermsStatement from '@/components/TermsPage';

export const metadata = {
  title: 'Terms of Service - Pinnacle Technology Collective',
  description:
    'Review the Terms of Service for Pinnacle Technology Collective, outlining the rules and regulations for using our services.',
  keywords: [
    'Terms of Service',
    'Pinnacle Technology Collective',
    'User Agreement',
    'Service Terms',
    'Legal Information',
  ],
  author: 'Pinnacle Technology Collective',
  openGraph: {
    title: 'Terms of Service - Pinnacle Technology Collective',
    description:
      'Understand the terms and conditions governing the use of Pinnacle Technology Collective services.',
    url: 'https://yourcompany.com/terms',
    type: 'website',
    images: [
      {
        url: '/NewIcon.png',
        width: 800,
        height: 600,
        alt: 'Pinnacle Technology Collective Logo',
      },
    ],
  },
};


const Terms = () => {
  return (
    <div>
      <TermsStatement />
    </div>
  );
};

export default Terms;
