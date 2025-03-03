import { Motion } from './animations/Motion';
import CallToAction from '../components/LandingPage/CallToAction';
import FAQs from '../components/LandingPage/FAQs';
import Features from '@/components/LandingPage/Features';
import Testimonials from '@/components/LandingPage/Testimonials';
import Hero from '@/components/LandingPage/Hero';
import LogoTicker from '../components/LandingPage/LogoTicker';
import ProductShowCase from '../components/LandingPage/ProductShowCase';
import RobotArmSection from '@/components/LandingPage/RobotArm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Pinnacle Technology Collective',
  description:
    'Welcome to Pinnacle Technology Collective, your partner in robotics and automation solutions. Discover our mission, services, and the team dedicated to innovation and excellence.',
  keywords: [
    'Home',
    'Pinnacle Technology Collective',
    'Robotics',
    'Automation',
    'Technology Solutions',
    'Innovation',
  ],
  openGraph: {
    title: 'Home - Pinnacle Technology Collective',
    description:
      'Explore Pinnacle Technology Collective, where we provide cutting-edge robotics and automation solutions tailored to your needs.',
    url: 'https://yourcompany.com',
    type: 'website',
    images: [
      {
        url: '/icons/PT - LogoMark - DBLBL.svg',
        width: 800,
        height: 600,
        alt: 'Pinnacle Technology Collective Logo',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Motion>
          <Hero />
          <RobotArmSection />
          <Features />
          <ProductShowCase />
          <FAQs />
          <Testimonials />
          <LogoTicker />
          <CallToAction />
        </Motion>
      </div>
    </>
  );
}
