import { Motion } from './sections/About/Motion';
import CallToAction from './sections/CallToAction';
import FAQs from './sections/FAQs';
import Features from '@/components/Features';
import Testimonials from './sections/Testimonials';
import Hero from '@/components/Hero';
import LogoTicker from './sections/LogoTicker';
import ProductShowCase from './sections/ProductShowCase';
import RobotArmSection from '@/components/RobotArm';
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
