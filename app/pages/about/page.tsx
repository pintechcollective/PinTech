import React from 'react';
import AboutHero from '@/components/AboutPage/AboutHero';
import MeetTheTeam from '@/app/sections/About/Facts';
import { Motion } from '@/app/animations/Motion';
import Gallery from '@/components/AboutPage/Gallery';
import ServicesButton from '@/components/AboutPage/ServicesButton';
const About = () => {
  return (
    <div>
      <Motion>
        <AboutHero />
        <MeetTheTeam />
        <Gallery />
        <ServicesButton />
      </Motion>
    </div>
  );
};

export default About;
