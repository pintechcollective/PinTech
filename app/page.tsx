import { Motion } from './sections/About/Motion';
import CallToAction from './sections/CallToAction';
import FAQs from './sections/FAQs';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import Hero from './sections/Hero';
import LogoTicker from './sections/LogoTicker';
import ProductShowCase from './sections/ProductShowCase';
import RobotArmSection from './sections/RobotArmSection';
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
