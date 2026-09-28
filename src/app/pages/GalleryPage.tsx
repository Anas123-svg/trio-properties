import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { projectsData } from '../data/projects';
import { CTA } from '../components/CTA';

export function GalleryPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const allImages = projectsData.flatMap(project => 
    project.gallery.map(image => ({
      url: image,
      projectTitle: project.title,
      projectType: project.type,
      location: project.location
    }))
  );

  const activeImage = useMemo(() => {
    if (activeImageIndex === null) return null;
    return allImages[activeImageIndex] ?? null;
  }, [activeImageIndex, allImages]);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImageIndex(null);
      }
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => {
          if (prev === null) return prev;
          return prev === 0 ? allImages.length - 1 : prev - 1;
        });
      }
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((prev) => {
          if (prev === null) return prev;
          return prev === allImages.length - 1 ? 0 : prev + 1;
        });
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [activeImageIndex, allImages.length]);

  const getTileSpan = (pattern: number) => {
    if (pattern === 0) return 'md:col-span-7';
    if (pattern === 1) return 'md:col-span-5';
    if (pattern === 5) return 'md:col-span-12';
    return 'md:col-span-4';
  };

  const getTileHeight = (pattern: number) => {
    if (pattern === 0 || pattern === 1) return 'clamp(220px, 42vw, 340px)';
    if (pattern === 5) return 'clamp(240px, 52vw, 420px)';
    return 'clamp(180px, 34vw, 260px)';
  };

  const openPrevImage = () => {
    setActiveImageIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? allImages.length - 1 : prev - 1;
    });
  };

  const openNextImage = () => {
    setActiveImageIndex((prev) => {
      if (prev === null) return prev;
      return prev === allImages.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      
      {/* Gallery Intro */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8 border-b border-[#E8E4DC] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2000&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#F5F1EB]/88" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <h1
            className="text-[34px] sm:text-[44px] md:text-[56px] text-[#1A1A1A] leading-none mb-3 sm:mb-4"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '1px' }}
          >
            Our Gallery
          </h1>
          <p
            className="text-[14px] sm:text-[15px] md:text-[16px] text-[#666660] max-w-[760px] mx-auto leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Explore a selection of completed projects, including home extensions, refurbishments, and bespoke construction work delivered across London.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-12 sm:pb-20 bg-[#F5F1EB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            {allImages.map((image, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveImageIndex(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={`relative col-span-1 ${getTileSpan(index % 6)} rounded-[6px] overflow-hidden cursor-pointer group`}
              >
                <img
                  src={image.url}
                  alt={image.projectTitle}
                  style={{ height: getTileHeight(index % 6) }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <span className="inline-block bg-[#2E9CCA] text-white text-[8px] sm:text-[9px] uppercase px-2 py-1 rounded-full mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {image.projectType}
                    </span>
                    <h3 className="text-[13px] sm:text-[14px] text-white font-semibold mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {image.projectTitle}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-white/70" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {image.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeImage && (
          <motion.div
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
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                openPrevImage();
              }}
              className="absolute left-2 sm:left-3 md:left-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="w-full max-w-[1100px]"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeImage.url}
                alt={activeImage.projectTitle}
                className="w-full max-h-[70vh] sm:max-h-[78vh] object-contain rounded-[6px]"
              />
              <div className="mt-4 text-center">
                <p className="text-white text-[11px] uppercase tracking-[0.12em] mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {activeImage.projectType}
                </p>
                <h3 className="text-white text-[16px] sm:text-[18px] md:text-[22px]" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
                  {activeImage.projectTitle}
                </h3>
                <p className="text-white/70 text-[12px] sm:text-[13px] mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {activeImage.location}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                openNextImage();
              }}
              className="absolute right-2 sm:right-3 md:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}

      <CTA />
      <Footer />
    </div>
  );
}