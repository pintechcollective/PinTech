import React from 'react';
import Form from '@/components/ContactPage';
import { Motion } from '@/app/animations/Motion';
const Contact = () => {
  return (
    <div>
      <Motion>
        <Form />
      </Motion>
    </div>
  );
};

export default Contact;
