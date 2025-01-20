import CallToAction from './sections/CallToAction';
import FAQs from './sections/FAQs';
import Features from './sections/Features';

import Hero from './sections/Hero';
import LogoTicker from './sections/LogoTicker';
import ProductShowCase from './sections/ProductShowCase';
import Footer from './sections/Footer';
export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowCase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
