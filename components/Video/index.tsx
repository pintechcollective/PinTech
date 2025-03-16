'use client';
import anime from 'animejs';
import BackgroundVideo from 'next-video/background-video';
import mockVideo from '/videos/MockLoadInLogo.mp4.json';
import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Logo from '@/public/icons/PT - LogoMark - DBLBL.svg';

interface VideoProps {
  finishLoading: () => void;
}
const Video: React.FC<VideoProps> = ({ finishLoading }) => {
  const [isMounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader.add({
      targets: '#video',
      delay: 0,
      scale: 1,
      duration: 7000,
      easing: 'easeInOutExpo',
    });
  };
  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, [animate, isMounted]);

  return (
    <BackgroundVideo
      src={mockVideo}
      id="video"
      className="fixed top-0 left-0 w-full h-full object-cover min-h-screen min-w-screen bg-black"
    ></BackgroundVideo>
  );
};

export default Video;
