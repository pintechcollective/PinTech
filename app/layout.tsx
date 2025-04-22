import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Pintech | Innovative Robotic Automation Solutions',
  description:
    'Pintech specializes in cutting-edge robotic automation systems, revolutionizing industries with advanced technology and efficient solutions.',
  keywords:
    'robotic automation, industrial robots, automation systems, robotics technology, Pintech solutions',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Head>
          <title>Pintech | Innovative Robotic Automation Solutions</title>
          <meta
            name="description"
            content="Pintech specializes in cutting-edge robotic automation systems, revolutionizing industries with advanced technology and efficient solutions."
          />
          <meta
            name="keywords"
            content="robotic automation, industrial robots, automation systems, robotics technology, Pintech solutions"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/Logo.png" type="image/png" />
        </Head>
      </head>
      <body className="font-ClashDisplay antialiased">
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
