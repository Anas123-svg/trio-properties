import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Services } from '../components/Services';

export function BuildingServicesPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EB] overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />


      <Services />

      <section className="bg-[#F5F1EB] px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <div className="max-w-[980px] mx-auto rounded-[10px] border border-[#E0DAD0] bg-white/80 px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7">
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#444440]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            This approach to construction projects enables Homesolve to deliver the highest quality of build possible,
            ensuring that all works meet the regulatory requirements at a competitive price. As a result of the knowledge
            and experience within the team all projects are streamlined and produce high-quality building works,
            reducing the stress often associated with construction projects. The company pride themselves on delivering
            high-spec builds, on time in a manner that allows their clients to enjoy the experience.
          </p>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
