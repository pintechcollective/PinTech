import Features from './sections/Features';
import Header from './sections/Header';
import Hero from './sections/Hero';
import LogoTicker from './sections/LogoTicker';
import ProductShowCase from './sections/ProductShowCase';
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowCase />
    </>
  );
}
