import React from 'react';
import Statement from '@/components/PrivacyPage';
import { Motion } from '@/app/animations/Motion';
export const metadata = {
  title: 'Privacy Policy - Pinnacle Technology Collective',
  description:
    'Read our Privacy Policy to understand how Pinnacle Technology Collective collects, uses, and protects your information.',
  keywords: [
    'Privacy Policy',
    'Pinnacle Technology Collective',
    'Data Protection',
    'User Privacy',
    'Information Security',
  ],
  author: 'Pinnacle Technology Collective',
  openGraph: {
    title: 'Privacy Policy - Pinnacle Technology Collective',
    description:
      'Learn about our commitment to protecting your privacy and how we handle your personal information.',
    url: 'https://yourcompany.com/privacy',
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

const Privacy = () => {
  return (
    <div>
      <Motion>
        <Statement />
      </Motion>
    </div>
  );
};

export default Privacy;
