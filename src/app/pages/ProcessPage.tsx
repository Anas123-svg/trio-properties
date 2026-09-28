import { motion } from 'motion/react';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We fully understand your project requirements, discuss site-specific restrictions, and give you everything needed to take the next step.',
  },
  {
    number: '02',
    title: 'Documentation Review',
    description: 'We carefully review all documents — architectural drawings, structural surveys, and planning conditions — before proceeding.',
  },
  {
    number: '03',
    title: 'Site Inspection',
    description: 'Our team visits the site to assess its condition, access points, and any potential issues or limitations.',
  },
  {
    number: '04',
    title: 'Second Meeting',
    description: 'We present our findings and discuss further, ensuring we have everything needed to provide an accurate, surprise-free quote.',
  },
  {
    number: '05',
    title: 'Formal Quote',
    description: 'Based on our meetings and site visit, we deliver a precise, itemised quote with no hidden extras.',
  },
  {
    number: '06',
    title: 'Contract Signing',
    description: 'A clear contract outlining responsibilities for both parties is signed — giving you full confidence before work begins.',
  },
  {
    number: '07',
    title: 'Schedule of Works',
    description: 'You receive a complete project schedule with milestones and deadlines so you always know what to expect and when.',
  },
  {
    number: '08',
    title: 'Progress Meetings',
    description: 'Regular check-ins keep you up to date at every stage of the build.',
  },
  {
    number: '09',
    title: 'Sign Off',
    description: 'Once work is complete, it\'s assessed against our quality management system before you sign off.',
  },
  {
    number: '10',
    title: 'Aftercare & Guarantees',
    description: 'You receive a full project folder containing all aftercare information and guarantee documents.',
  },
];

export function ProcessPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#F7F4EF', fontFamily: 'DM Sans, sans-serif' }}>
      <AnnouncementBar />
      <Navbar />

      {/* ── PAGE HEADER ───────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'clamp(2.5rem, 6vw, 4rem)', background: '#F7F4EF' }}>
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(247, 244, 239, 0.88)' }} />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* Label row */}

          {/* Headline + subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
            style={{ paddingBottom: '3rem', borderBottom: '1px solid #E2DDD6' }}
          >
            <h1 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(52px, 7vw, 96px)',
              lineHeight: 0.92,
              color: '#1A1A1A',
              letterSpacing: '2px',
              textAlign: 'center',
            }}>
              Our <span style={{ color: '#2E9CCA' }}>Process</span>
            </h1>

            <p style={{ fontSize: 'clamp(13px, 2vw, 15px)', color: '#7A7570', maxWidth: '560px', lineHeight: 1.75, textAlign: 'center' }}>
              A clear, structured approach designed to keep every project on time, on budget, and completely stress-free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS GRID ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'clamp(2.5rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}>
        <div className="max-w-[1400px] mx-auto">

          {/* Steps grid — 2 cols on md, 3 on lg, with first card spanning 2 */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: '1.25rem' }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
                style={{
                  // Make step 5 (index 4) and step 9 (index 8) span 2 cols for rhythm
                  gridColumn: (index === 4 || index === 8) ? 'span 1' : 'span 1',
                }}
              >
                <article
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '10px',
                    padding: 'clamp(1.1rem, 3vw, 2rem)',
                    height: '100%',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                    transition: 'box-shadow 0.25s, transform 0.25s',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Large ghost number background */}
                  <span
                    style={{
                      position: 'absolute',
                      right: '1.25rem',
                      bottom: '-0.5rem',
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '80px',
                      color: '#F0EDE8',
                      lineHeight: 1,
                      userSelect: 'none',
                      pointerEvents: 'none',
                      letterSpacing: '2px',
                    }}
                  >
                    {step.number}
                  </span>

                  {/* Step indicator */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '1.4rem', height: '2px', background: '#2E9CCA', borderRadius: '1px' }} />
                    <span style={{ fontSize: '10.5px', color: '#2E9CCA', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      Step {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.25, margin: 0 }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: 'clamp(12px, 2vw, 13.5px)', color: '#7A7570', lineHeight: 1.75, margin: 0, flex: 1 }}>
                    {step.description}
                  </p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}