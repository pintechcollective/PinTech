import React from 'react';

import BackgroundVideo from 'next-video/background-video';
import getStarted from '/videos/get-started.mp4.json';
import mockVideo from '/videos/MockLoadInLogo.mp4.json';
const TestVideo = () => {
  return (
    <BackgroundVideo src={mockVideo} className='h-100vh w-screen'>
      <h1>next-video</h1>
      <p>
        A React component for adding video to your Next.js application. It
        extends both the video element and your Next app with features for
        automatic video optimization.
      </p>
    </BackgroundVideo>
  );
};

export default TestVideo;
