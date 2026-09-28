import { motion } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion as framerMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useParams, Link } from 'react-router';
import { Calendar, MapPin, Clock, DollarSign, CheckCircle  } from 'lucide-react';
import { projectsData } from '../data/projects';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTA } from '../components/CTA';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);
  const heroPreviewImages = project?.gallery.slice(0, 3) ?? [];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[48px] text-[#1A1A1A] mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Project Not Found
          </h1>
          <Link to="/projects" className="text-[#2E9CCA] underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }


  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const galleryImages = project?.gallery || [];

  const activeImage = useMemo(() => {
    if (activeImageIndex === null) return null;
    return galleryImages[activeImageIndex] ?? null;
  }, [activeImageIndex, galleryImages]);

  useEffect(() => {
    if (activeImageIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImageIndex(null);
      }
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => {
          if (prev === null) return prev;
          return prev === 0 ? galleryImages.length - 1 : prev - 1;
        });
      }
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((prev) => {
          if (prev === null) return prev;
          return prev === galleryImages.length - 1 ? 0 : prev + 1;
        });
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [activeImageIndex, galleryImages.length]);

  const openPrevImage = () => {
    setActiveImageIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? galleryImages.length - 1 : prev - 1;
    });
  };

  const openNextImage = () => {
    setActiveImageIndex((prev) => {
      if (prev === null) return prev;
      return prev === galleryImages.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[52vh] sm:h-[50vh] md:h-[52vh] overflow-hidden">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/50" />

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-20">
          
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >


                < div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center bg-[#2E9CCA] text-white text-[10px] uppercase px-3 py-1.5 rounded-full tracking-[0.12em]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {project.type}
                  </span>
</div>

                <h1 className="text-[34px] sm:text-[44px] md:text-[62px] text-white leading-tight mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.8px' }}>
                  {project.title}
                </h1>

                <div className="flex items-center gap-2 text-[14px] md:text-[15px] text-white/90" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <MapPin className="w-5 h-5" />
                  {project.location}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-white/90" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <span className="text-[11px] uppercase tracking-[0.12em]">Gallery</span>
                  <span className="w-1 h-1 rounded-full bg-white/65" />
                  <span className="text-[14px] font-semibold">{project.gallery.length} Images</span>
                </div>
                
              </motion.div>

              {heroPreviewImages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="hidden lg:block"
                >
                  <div className="rounded-[10px] border border-white/20 bg-black/35 p-3 backdrop-blur-sm w-[340px]">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/75" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Project Preview
                      </p>
                      <span className="text-[10px] text-white/70" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {project.gallery.length} total
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {heroPreviewImages.map((image, index) => (
                        <div key={`${project.id}-hero-preview-${index}`} className="rounded-[6px] overflow-hidden border border-white/15 h-[82px]">
                          <img
                            src={image}
                            alt={`${project.title} preview ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="bg-[#F5F1EB] px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white p-3 rounded-[8px] text-center min-h-[96px] flex flex-col items-center justify-center"
            >
              <Calendar className="w-5 h-5 text-[#2E9CCA] mx-auto mb-1" />
              <div className="text-[16px] md:text-[18px] text-[#1A1A1A] font-bold mb-0.5 leading-none" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {project.year}
              </div>
              <div className="text-[9px] md:text-[10px] text-[#888880] uppercase tracking-[0.08em]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Completed
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white p-3 rounded-[8px] text-center min-h-[96px] flex flex-col items-center justify-center"
            >
              <Clock className="w-5 h-5 text-[#2E9CCA] mx-auto mb-1" />
              <div className="text-[16px] md:text-[18px] text-[#1A1A1A] font-bold mb-0.5 leading-none" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {project.duration}
              </div>
              <div className="text-[9px] md:text-[10px] text-[#888880] uppercase tracking-[0.08em]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Duration
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-3 rounded-[8px] text-center min-h-[96px] flex flex-col items-center justify-center"
            >
              <DollarSign className="w-5 h-5 text-[#2E9CCA] mx-auto mb-1" />
              <div className="text-[16px] md:text-[18px] text-[#1A1A1A] font-bold mb-0.5 leading-none" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {project.budget}
              </div>
              <div className="text-[9px] md:text-[10px] text-[#888880] uppercase tracking-[0.08em]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Budget
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white p-3 rounded-[8px] text-center min-h-[96px] flex flex-col items-center justify-center"
            >
              <CheckCircle className="w-5 h-5 text-[#2E9CCA] mx-auto mb-1" />
              <div className="text-[16px] md:text-[18px] text-[#1A1A1A] font-bold mb-0.5 leading-none" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                100%
              </div>
              <div className="text-[9px] md:text-[10px] text-[#888880] uppercase tracking-[0.08em]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                On Time
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 bg-[#F5F1EB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[28px] sm:text-[36px] text-[#1A1A1A] mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 900 }}>
                Project Overview
              </h2>
              <p className="text-[14px] sm:text-[16px] text-[#666660] leading-relaxed mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {project.description}
              </p>

              <h3 className="text-[20px] sm:text-[24px] text-[#1A1A1A] mb-3 mt-8" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
                The Challenge
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#666660] leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {project.challenge}
              </p>

              <h3 className="text-[20px] sm:text-[24px] text-[#1A1A1A] mb-3 mt-8" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
                Our Solution
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#666660] leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {project.solution}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-5 sm:p-8 rounded-[6px] h-fit lg:sticky lg:top-24"
            >
              <h3 className="text-[20px] text-[#1A1A1A] mb-6" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] text-[#888880] uppercase mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Project Type
                  </div>
                  <div className="text-[15px] text-[#1A1A1A] font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {project.type}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-[#888880] uppercase mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Location
                  </div>
                  <div className="text-[15px] text-[#1A1A1A] font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {project.location}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-[#888880] uppercase mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Year
                  </div>
                  <div className="text-[15px] text-[#1A1A1A] font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {project.year}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-[#888880] uppercase mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Duration
                  </div>
                  <div className="text-[15px] text-[#1A1A1A] font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {project.duration}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E0DAD0]">
                <h4 className="text-[14px] text-[#1A1A1A] font-semibold mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Interested in a similar project?
                </h4>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#2E9CCA] text-white text-[13px] font-medium py-3 rounded-[3px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Get a Free Quote
                </motion.button>
                <motion.a
                  href="tel:02084556961"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-2 block text-center bg-[#1A1A1A] text-white text-[13px] font-medium py-3 rounded-[3px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Call 0208 455 6961
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}

      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-20 bg-[#F5F1EB]">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] text-[#1A1A1A] mb-10 text-center"
            style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 900 }}
          >
            Project Gallery
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-[220px] sm:h-[260px] lg:h-[300px] rounded-[6px] overflow-hidden cursor-pointer"
                onClick={() => setActiveImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {activeImage && (
              <framerMotion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[120] bg-black/90 flex items-center justify-center p-3 sm:p-4 md:p-8"
                onClick={() => setActiveImageIndex(null)}
              >
                <button
                  type="button"
                  aria-label="Close image modal"
                  onClick={(e) => { e.stopPropagation(); setActiveImageIndex(null); }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(event) => { event.stopPropagation(); openPrevImage(); }}
                  className="absolute left-2 sm:left-3 md:left-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <framerMotion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.22 }}
                  className="w-full max-w-[1100px]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <img
                    src={activeImage}
                    alt={`${project.title} Large Preview`}
                    className="w-full max-h-[70vh] sm:max-h-[78vh] object-contain rounded-[6px]"
                  />
                  <div className="mt-4 text-center">
                    <p className="text-white text-[11px] uppercase tracking-[0.12em] mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {project.type}
                    </p>
                    <h3 className="text-white text-[16px] sm:text-[18px] md:text-[22px]" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-[12px] sm:text-[13px] mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {project.location}
                    </p>
                  </div>
                </framerMotion.div>

                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(event) => { event.stopPropagation(); openNextImage(); }}
                  className="absolute right-2 sm:right-3 md:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </framerMotion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
