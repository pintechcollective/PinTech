import React from 'react';
import AboutHero from '@/app/sections/About/Hero';
import MeetTheTeam from '@/app/sections/About/Facts';
import { Motion } from '@/app/sections/About/Motion';
import Gallery from '@/app/sections/About/Gallery';
const About = () => {
  return (
    <div>
      <Motion>
        <AboutHero />
        <MeetTheTeam />
        <Gallery />
      </Motion>
    </div>
  );
};

export default About;
