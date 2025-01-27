import React from 'react';
import AboutHero from '@/app/sections/About/Hero';
import MeetTheTeam from '@/app/sections/About/MeetTheTeam';
import { Motion } from '@/app/sections/About/Motion';
const About = () => {
  return (
    <div>
      <Motion>
        <AboutHero />
        <MeetTheTeam />
      </Motion>
    </div>
  );
};

export default About;
