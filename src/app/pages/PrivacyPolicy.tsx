import { motion } from 'motion/react';
import { Link } from 'react-router';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const SECTIONS = [
  {
    num: '01',
    title: 'Introduction',
    body: 'Homesolve LTD ("we", "us", "our") is committed to protecting your privacy. This policy explains what personal information we collect, how we use it, and the rights you have under UK GDPR and the Data Protection Act 2018.',
  },
  {
    num: '02',
    title: 'Information We Collect',
    body: 'We collect information you provide directly when you request a quote or contact us, including your name, email address, phone number, postal address, and details about the works you are enquiring about. We also collect limited technical information automatically, such as your IP address, browser type, and pages visited.',
  },
  {
    num: '03',
    title: 'How We Use Your Information',
    body: 'We use your information to respond to enquiries, prepare quotations, deliver contracted services, keep records required for regulatory and tax purposes, and improve our website. We do not sell your personal information to third parties.',
  },
  {
    num: '04',
    title: 'Legal Basis',
    body: 'We process your data under the following lawful bases: your consent, the performance of a contract with you, our legitimate interests in running our business, and compliance with legal obligations such as HMRC and CIS record keeping.',
  },
  {
    num: '05',
    title: 'Sharing & Third Parties',
    body: 'We share information only with trusted providers who help us run our business, such as accounting, hosting, and email services. All providers are bound by confidentiality and data processing agreements. We may also disclose information where required by law.',
  },
  {
    num: '06',
    title: 'Data Retention',
    body: 'We retain your information only for as long as necessary to fulfil the purposes it was collected for, including satisfying any legal, accounting, or reporting requirements. Contract and financial records are typically kept for six years.',
  },
  {
    num: '07',
    title: 'Your Rights',
    body: 'You have the right to access, correct, or request deletion of your personal information, to object to or restrict processing, and to withdraw consent at any time. To exercise these rights, contact us using the details below. You may also lodge a complaint with the Information Commissioner\u2019s Office (ICO).',
  },
  {
    num: '08',
    title: 'Cookies',
    body: 'Our website uses only essential cookies required for the site to function, along with anonymous analytics to help us understand how visitors use the site. You can control cookies through your browser settings.',
  },
  {
    num: '09',
    title: 'Changes to This Policy',
    body: 'We may update this policy from time to time. The latest version will always be published on this page with the "Last updated" date revised accordingly.',
  },
];

export function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-[14.5px] text-[#7A7570] max-w-[560px] mx-auto">
              How Homesolve collects, uses, and protects your personal information when you visit
              our website or engage our services.
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
                  10
                </span>
                <h2
                  className="text-[22px] sm:text-[24px] leading-none text-[#1A1A1A]"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  Contact
                </h2>
              </div>
              <p className="text-[15px] leading-[1.75] text-[#555550] pl-[calc(22px+1rem)]">
                For any privacy-related questions, or to exercise your data rights, contact us at{' '}
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