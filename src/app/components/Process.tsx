'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const image =
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90';

export function Process() {
  return (
    <section
      id="partner"
      className="
        bg-white
        px-4
        py-12
        sm:px-6
        sm:py-14
        lg:px-8
        lg:py-16
      "
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="
          mx-auto
          grid
          max-w-[1400px]
          grid-cols-1
          overflow-hidden
          border
          border-[#E1E1DB]
          lg:grid-cols-[0.9fr_1.1fr]
        "
      >
        <div className="relative min-h-[240px] overflow-hidden sm:min-h-[280px] lg:min-h-[340px]">
          <img
            src={image}
            alt="Real estate investment partnership"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#073F58]/35 via-transparent to-transparent" />
        </div>

        <div className="flex items-center bg-[#F8F7F3] px-7 py-9 sm:px-10 sm:py-10 lg:px-12">
          <div className="max-w-[620px]">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#D2C76F]" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#157E9A]">
                Investment Partner
              </p>
            </div>

            <h2 className="max-w-[600px] text-[clamp(2rem,3.6vw,3.7rem)] font-[500] leading-[0.98] tracking-[-0.032em] text-[#073F58]">
              Explore opportunities with
              <span className="text-[#157E9A]"> Oceanport Realty Capital.</span>
            </h2>

            <p className="mt-4 max-w-[540px] text-[13px] leading-[1.7] text-[#6A757A] sm:text-[14px]">
              Selective real estate opportunities backed by experienced operators and disciplined execution.
            </p>

            <button className="group mt-6 inline-flex h-[44px] items-center gap-2 bg-[#073F58] px-5 text-[9px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-[#0A506D]">
              Explore opportunities
              <ArrowUpRight className="h-4 w-4 text-[#D2C76F] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
