import React from 'react';
// import ServicesGrid from '@/app/sections/Services/ServicesGrid';
import { Motion } from '@/app/animations/Motion';
import ServicesAccordion from '@/components/ServicesPage/ServicesAccordion';
import Cards from '@/components/ServicesPage/Cards';
import PricingAction from '@/components/ServicesPage/PricingAction';
const Services = () => {
  return (
    <div>
      <Motion>
        {/* <ServicesGrid /> */}
        <Cards />
        <ServicesAccordion />
        <PricingAction />
      </Motion>
    </div>
  );
};

export default Services;
