import React from 'react';
// import ServicesGrid from '@/app/sections/Services/ServicesGrid';
import { Motion } from '@/app/animations/Motion';
import ServicesAccordion from '@/components/ServicesPage/ServicesAccordion';
// import Cards from '@/components/ServicesPage/Cards';
import PricingAction from '@/components/ServicesPage/PricingAction';
export const metadata = {
  title: 'Our Services - Pinnacle Technology Collective',
  description:
    'Explore the range of services offered by Pinnacle Technology Collective, designed to enhance your robotics and automation capabilities.',
  keywords: [
    'Services',
    'Pinnacle Technology Collective',
    'Robotics Services',
    'Automation Solutions',
    'Technology Consulting',
  ],
  author: 'Pinnacle Technology Collective',
  openGraph: {
    title: 'Our Services - Pinnacle Technology Collective',
    description:
      'Discover how Pinnacle Technology Collective can support your business with our comprehensive robotics and automation services.',
    url: 'https://yourcompany.com/services',
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

const Services = () => {
  return (
    <div>
      <Motion>
        {/* <ServicesGrid /> */}
        <ServicesAccordion />
        {/* <Cards /> */}
        <PricingAction />
      </Motion>
    </div>
  );
};

export default Services;
