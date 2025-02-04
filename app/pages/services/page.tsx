import React from 'react';
import ServicesGrid from '@/app/sections/Services/ServicesGrid';
import { Motion } from '@/app/sections/About/Motion';
const Services = () => {
  return (
    <div>
      <Motion>
        <ServicesGrid />
      </Motion>
    </div>
  );
};

export default Services;
