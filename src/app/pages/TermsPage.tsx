import { motion } from 'motion/react';
import { Link } from 'react-router';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const SECTIONS = [
  {
    num: '01',
    title: 'Acceptance of Terms',
    body: 'By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of the Terms, you must not use our services.',
  },
  {
    num: '02',
    title: 'Services',
    body: 'Homesolve provides building and construction related services. Descriptions of services on the website are for informational purposes only and do not constitute a contractual offer.',
  },
  {
    num: '03',
    title: 'Liability',
    body: 'To the fullest extent permitted by law, Homesolve will not be liable for any indirect, incidental, special, consequential or exemplary damages arising from your use of the website.',
  },
  {
    num: '04',
    title: 'Governing Law',
    body: 'These Terms are governed by the laws of England and Wales.',
  },
  {
    num: '05',
    title: 'Changes',
    body: 'We may revise these Terms from time to time. Continued use of the site means you accept any changes.',
  },
];

export function TermsPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: '#F7F4EF', fontFamily: 'DM Sans, sans-serif' }}
    >
      <AnnouncementBar />
      <Navbar />

      <section
        className="px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: 'clamp(2.5rem, 6vw, 4rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}
      >
        <div className="max-w-[860px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8 sm:mb-10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2E9CCA] mb-3">
              Legal
            </p>
            <h1
              className="text-[40px] sm:text-[52px] md:text-[60px] text-[#1A1A1A] leading-[0.98]"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-[14.5px] text-[#7A7570] max-w-[560px] mx-auto">
              These terms govern your use of Homesolve&rsquo;s website and services. Please read
              them carefully.
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[#A8A29A]">
              Last updated · July 2026
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-[12px] border border-[#ECE7DE] shadow-[0_1px_2px_rgba(20,20,20,0.03),0_8px_28px_-12px_rgba(20,20,20,0.08)] px-6 sm:px-12 py-8 sm:py-12"
          >
            {SECTIONS.map((s, i) => (
              <div
                key={s.num}
                style={{
                  paddingTop: i === 0 ? 0 : '2rem',
                  paddingBottom: '2rem',
                  borderBottom: '1px solid #F1ECE3',
                }}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span
                    className="text-[22px] leading-none text-[#2E9CCA] tabular-nums select-none"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                    aria-hidden="true"
                  >
                    {s.num}
                  </span>
                  <h2
                    className="text-[22px] sm:text-[24px] leading-none text-[#1A1A1A]"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    {s.title}
                  </h2>
                </div>
                <p className="text-[15px] leading-[1.75] text-[#555550] pl-[calc(22px+1rem)]">
                  {s.body}
                </p>
              </div>
            ))}

            {/* Contact */}
            <div style={{ paddingTop: '2rem' }}>
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  className="text-[22px] leading-none text-[#2E9CCA] tabular-nums select-none"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  aria-hidden="true"
                >
                  06
                </span>
                <h2
                  className="text-[22px] sm:text-[24px] leading-none text-[#1A1A1A]"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  Contact
                </h2>
              </div>
              <p className="text-[15px] leading-[1.75] text-[#555550] pl-[calc(22px+1rem)]">
                For questions about these Terms please contact us at{' '}
                <a
                  href="mailto:office@homesolve.co.uk"
                  className="text-[#2E9CCA] font-medium border-b border-[#2E9CCA]/30 hover:border-[#2E9CCA] transition-colors"
                >
                  office@homesolve.co.uk
                </a>
                .
              </p>
            </div>
          </motion.div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#2E9CCA] hover:gap-3 transition-all duration-200"
            >
              <span aria-hidden="true">←</span> Back to Home
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}