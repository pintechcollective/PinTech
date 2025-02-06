import React from 'react';
// import ServicesGrid from '@/app/sections/Services/ServicesGrid';
import { Motion } from '@/app/sections/About/Motion';
import ServicesAccordion from '@/app/sections/Services/ServicesAccordion';
import Cards from '@/app/sections/Services/Cards';
import PricingAction from '@/app/sections/Services/PricingAction';
const Services = () => {
  return (
    <div>
      <Motion>
        {/* <ServicesGrid /> */}
        <ServicesAccordion />
        <Cards />
        <PricingAction />
      </Motion>
    </div>
  );
};

export default Services;
