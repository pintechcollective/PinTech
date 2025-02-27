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
  title: 'Pintech | HomePage | Innovative Robotic Automation Solutions',
  description:
    'Pintech specializes in cutting-edge robotic automation systems, revolutionizing industries with advanced technology and efficient solutions.',
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
