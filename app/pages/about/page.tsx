import React from 'react';
import AboutHero from '@/components/AboutPage/AboutHero';
import Facts from '@/components/AboutPage/Facts';
import { Motion } from '@/app/animations/Motion';
import Gallery from '@/components/AboutPage/Gallery';
import ServicesButton from '@/components/AboutPage/ServicesButton';

export const metadata = {
  title: 'About Us - Pinnacle Technology Collective',
  description:
    'Learn more about Pinnacle Technology Collective, our mission, and the team dedicated to providing exceptional service in robotics and automation.',
  keywords: [
    'About Us',
    'Pinnacle Technology Collective',
    'Robotics',
    'Automation',
    'Our Team',
  ],
  author: 'Pinnacle Technology Collective',
  openGraph: {
    title: 'About Us - Pinnacle Technology Collective',
    description:
      'Discover our mission and the team behind Pinnacle Technology Collective, committed to excellence in robotics and automation.',
    url: 'https://yourcompany.com/about',
    type: 'website',
    images: [
      {
        url: '/icons/PT - WORDMARK TM - BLUE.svg',
        width: 50,
        height: 50,
        alt: 'Pinnacle Technology Collective Logo',
      },
    ],
  },
};

const About = () => {
  return (
    <div>
      <Motion>
        <AboutHero />
        <Facts />
        <Gallery />
        <ServicesButton />
      </Motion>
    </div>
  );
};

export default About;
