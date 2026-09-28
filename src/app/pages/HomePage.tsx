import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { FeaturedSlider } from '../components/FeaturedSlider';
import { Portfolio } from '../components/Portfolio';
import { Principles } from '../components/Principles';
import { TrustRibbon } from '../components/TrustRibbon';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { Process } from '../components/Process';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <FeaturedSlider />
      <Portfolio />
      <Principles />
      <TrustRibbon />
      <Services />
      <Testimonials />
      <Process />
      <Footer />
    </div>
  );
}
