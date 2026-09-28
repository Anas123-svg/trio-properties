import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function LeadershipSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-0">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.04fr_.96fr] border-x border-b border-[#E4E4DE]">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-7 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center order-2 lg:order-1">
          <p className="text-[10px] uppercase tracking-[0.17em] text-[#157E9A] font-bold">Leadership & experience</p>
          <h2 className="mt-4 text-[clamp(2rem,3.7vw,3.8rem)] leading-[1] tracking-[-0.04em] text-[#073F58] font-extrabold">Real estate & management services throughout the East Coast.</h2>
          <p className="mt-6 text-[14px] leading-[1.82] text-[#697479] max-w-[660px]">
            Trio Properties brings together professionals whose real estate management, development and investment strategies have enhanced more than 75,000 units since the 1980s.
          </p>
          <p className="mt-4 text-[13px] leading-[1.8] text-[#7B8589] max-w-[660px]">
            The team combines certifications, licenses, professional-board participation, new-construction experience and the education of other real estate professionals in the industry.
          </p>
          <button className="mt-7 w-fit inline-flex items-center gap-2 h-[44px] px-5 border border-[#CFCFC8] text-[10px] uppercase tracking-[0.1em] text-[#073F58] font-semibold hover:bg-[#073F58] hover:text-white transition-colors">Leadership <ArrowUpRight className="w-4 h-4 text-[#D2C76F]" /></button>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="min-h-[350px] sm:min-h-[460px] lg:min-h-[560px] overflow-hidden order-1 lg:order-2">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=86" alt="Multifamily real estate leadership" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
