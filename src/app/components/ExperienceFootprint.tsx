import { motion } from 'motion/react';

const markets = [
  'Birmingham, AL','Huntsville, AL','Glastonbury, CT','Hartford, CT','New Haven, CT','Stamford, CT','Washington, DC',
  'Aventura, FL','Bonita Springs, FL','Boynton Beach, FL','Celebration, FL','Fort Lauderdale, FL','Fort Myers, FL','Jacksonville, FL',
  'Jupiter, FL','Miami, FL','Naples, FL','Ocala, FL','Orlando, FL','Pensacola, FL','Sarasota, FL','Tampa, FL','West Palm Beach, FL','Ybor City, FL',
  'Savannah, GA','Boston, MA','Hoboken, NJ','Westchester, NY','Newport, RI','Charleston, SC','Nashville, TN','Dallas, TX','Houston, TX','Alexandria, VA','Arlington, VA'
];

export function ExperienceFootprint() {
  return (
    <section className="bg-[#F7F7F4] px-4 sm:px-6 lg:px-8 py-0">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] border-x border-[#E3E4DF]">
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#66C7CA] min-h-[430px] sm:min-h-[520px] lg:min-h-[620px] p-6 sm:p-10 flex items-center justify-center overflow-hidden">
          <img src="/trio-map.png" alt="Trio Properties market experience map" className="w-full max-w-[820px] h-auto object-contain drop-shadow-[0_18px_25px_rgba(7,63,88,0.08)]" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-7 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#157E9A] font-bold">Geographic experience</p>
          <h2 className="mt-3 text-[clamp(2.15rem,3.8vw,4rem)] leading-[1] tracking-[-0.04em] text-[#073F58] font-extrabold">Trust in our experience.</h2>
          <p className="mt-5 text-[13px] sm:text-[14px] leading-[1.75] text-[#6D787D]">A track record across markets in the East Coast, Southeast and beyond.</p>
          <div className="mt-7 grid grid-cols-2 gap-x-7 gap-y-2.5 max-h-[360px] sm:max-h-none overflow-auto pr-2">
            {markets.map((market) => <span key={market} className="text-[10px] sm:text-[11px] leading-[1.45] text-[#707A7F] border-b border-[#ECECE7] pb-2">{market}</span>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
