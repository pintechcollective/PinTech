import React from 'react';
import Statement from '@/components/PrivacyPage';
import { Motion } from '@/app/animations/Motion';
const Privacy = () => {
  return (
    <div>
      <Motion>
        <Statement />
      </Motion>
    </div>
  );
};

export default Privacy;
