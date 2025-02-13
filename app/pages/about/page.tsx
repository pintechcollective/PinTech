import React from 'react';
import AboutHero from '@/components/AboutPage/AboutHero';
import Facts from '@/components/AboutPage/Facts'
import { Motion } from '@/app/animations/Motion';
import Gallery from '@/components/AboutPage/Gallery';
import ServicesButton from '@/components/AboutPage/ServicesButton';
const About = () => {
  return (
    <div>
      <Motion>
        <AboutHero />
        <Facts/>
        <Gallery />
        <ServicesButton />
      </Motion>
    </div>
  );
};

export default About;
