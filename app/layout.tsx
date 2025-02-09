import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from './sections/Footer';

export const metadata: Metadata = {
  title: 'Pintech | Innovative Robotic Automation Solutions',
  description:
    'Pintech specializes in cutting-edge robotic automation systems, revolutionizing industries with advanced technology and efficient solutions.',
  keywords:
    'robotic automation, industrial robots, automation systems, robotics technology, Pintech solutions',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-ClashDisplay antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
