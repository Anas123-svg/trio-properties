import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const principles = [
  'Empower Talented Teams',
  'Provide Exceptional Tenant Service',
  'Deliver Outstanding Results to drive Client and Investor Satisfaction',
];

export function LegacyIntro() {
  return (
    <section className="bg-[#073F58] text-white px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/10">
      <div className="max-w-[1180px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-[760px] mx-auto">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#D2C76F] font-bold mb-3">Trio Properties</p>
          <h2 className="text-[clamp(2rem,4.2vw,4rem)] leading-[1.02] tracking-[-0.035em] font-extrabold">Guiding multifamily development from vision to vibrant community.</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 border-t border-white/12 pt-9">
          <motion.div initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[13px] sm:text-[14px] leading-[1.85] text-white/72">
              Trio Properties brings institutional property management service and real estate expertise to investors seeking a management partner at a personal scale.
            </p>
            <p className="mt-4 text-[11px] leading-[1.7] text-white/48 uppercase tracking-[0.08em]">
              Property Management Company of the Year · CTAA 2014–2018 & 2021–2022
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#D2C76F] font-bold">Our success is founded on three principles</p>
            <div className="mt-5 space-y-3">
              {principles.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[12px] sm:text-[13px] text-white/78 leading-[1.55]">
                  <span className="mt-[2px] w-5 h-5 rounded-full border border-[#D2C76F]/55 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#D2C76F]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
