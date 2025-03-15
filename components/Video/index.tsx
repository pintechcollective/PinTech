'use client'
import anime from 'animejs';
import BackgroundVideo from 'next-video/background-video';
import mockVideo from '/videos/MockLoadInLogo.mp4.json';
import React, { useEffect, useState } from 'react';
interface VideoProps {
  finishLoading: () => void;
}
const Video: React.FC<VideoProps> = ({finishLoading}) => {
const [isMounted,setMounted]=useState(false);

const animate=()=>{
    const loader=anime.timeline({
        complete:()=> finishLoading()
    })

    loader.add({
        targets: "#video",
        delay:0,
        scale:3,
        duration:7000,
        easing: "easeInOutExpo"
    })
}
useEffect(()=>{
const timeout= setTimeout(()=>setMounted(true),10)
animate()
return ()=>clearTimeout(timeout)
}, [isMounted])
    
  return (
    <BackgroundVideo src={mockVideo} id="video" className=" w-screen h-screen object-cover">
    </BackgroundVideo>
  );
};

export default Video;
