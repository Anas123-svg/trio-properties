import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function ProcessIntro() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Free site visit & feasibility assessment',
    },
    {
      number: '02',
      title: 'Proposal',
      description: 'Fixed costs & realistic timeline',
    },
    {
      number: '03',
      title: 'Build',
      description: 'Fully managed quality delivery',
    },
    {
      number: '04',
      title: 'Aftercare',
      description: 'Ongoing support & warranty',
    },
  ];

  return (
    <section className="relative py-12 lg:py-14 px-8 overflow-hidden bg-[#F5F1EB]">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[12px] border p-8 sm:p-10 lg:p-12"
          style={{
            borderColor: 'rgba(26, 26, 26, 0.1)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 241, 235, 0.9) 100%)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
        >
          {/* Ambient decorative gradients */}
          <div
            className="absolute -top-24 -left-24 w-[400px] h-[300px] pointer-events-none blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(46, 156, 202, 0.08) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-[360px] h[240px] pointer-events-none blur-3xl"
            style={{ background: 'radial-gradient(ellipse, rgba(46, 156, 202, 0.06) 0%, transparent 70%)' }}
          />

          {/* Section Headline */}
          <h2
            className="relative z-10 text-center text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] mb-10"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 900,
              color: '#1A1A1A',
            }}
          >
            A proven process, refined over 20 years.
          </h2>

          {/* Process Steps - Horizontal Layout */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-[1200px] mx-auto mb-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group rounded-[10px] p-6"
                style={{
                  background: 'rgba(100, 100, 100, 0.02)',
                  border: '1px solid rgba(26, 26, 26, 0.08)',
                }}
              >
                {/* Connecting Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -translate-y-1/2 left-full w-6 flex items-center justify-center z-0 hidden lg:flex">
                    <ArrowRight
                      size={20}
                      style={{
                        color: 'rgba(46, 156, 202, 0.2)',
                      }}
                    />
                  </div>
                )}

                {/* Step Content */}
                <div className="relative text-center">
                  {/* Step Number */}
                  <div className="flex justify-center mb-4">
                    <div
                      className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'rgba(46, 156, 202, 0.1)',
                        border: '2px solid rgba(46, 156, 202, 0.6)',
                        borderRadius: '50%',
                      }}
                    >
                      <span
                        className="text-[18px]"
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: 800,
                          color: '#2E9CCA',
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3
                    className="text-[18px] mb-2"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      color: '#1A1A1A',
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p
                    className="text-[12px] leading-[1.6]"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      color: 'rgba(26, 26, 26, 0.55)',
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(46, 156, 202, 0.08), transparent 70%)',
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Link */}
          <div className="relative z-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[13px] group/link"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: '#2E9CCA',
                fontWeight: 600,
              }}
            >
              Schedule Your Free Consultation
              <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
