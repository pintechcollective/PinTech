import React from 'react';
// import ServicesGrid from '@/app/sections/Services/ServicesGrid';
import { Motion } from '@/app/sections/About/Motion';
import ServicesAccordion from '@/app/sections/Services/ServicesAccordion';
import Cards from '@/app/sections/Services/Cards';
const Services = () => {
  return (
    <div>
      <Motion>
        {/* <ServicesGrid /> */}
        <Cards />
        <ServicesAccordion />
      </Motion>
    </div>
  );
};

export default Services;
