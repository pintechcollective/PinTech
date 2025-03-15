'use client'
// import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Video from '@/components/Video';
import { usePathname } from 'next/navigation';
import { useState,useEffect } from 'react';

// export const metadata: Metadata = {
//   title: 'Pintech | Innovative Robotic Automation Solutions',
//   description:
//     'Pintech specializes in cutting-edge robotic automation systems, revolutionizing industries with advanced technology and efficient solutions.',
//   keywords:
//     'robotic automation, industrial robots, automation systems, robotics technology, Pintech solutions',
//   viewport: 'width=device-width, initial-scale=1.0',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const pathname=usePathname();
  const isHome= pathname ==='/';
  const [isLoading, setIsLoading]=useState(isHome)

  useEffect(()=>{
    if(isLoading)return
  }, [isLoading])
  return (
    <html lang="en">
      <body className="font-ClashDisplay antialiased">
        {isLoading && isHome ? (
          <Video finishLoading={()=>setIsLoading(false)}/>
        ): (

        <>
        <Header />
        {children}
        <Footer />
        </>
        )}
      </body>
    </html>
  );
}
