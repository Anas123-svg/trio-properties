import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export function ClientTestimonialsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
