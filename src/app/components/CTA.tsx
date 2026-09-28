import { ArrowUpRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="resources" className="bg-[#F3F1EC] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          ['Resources', 'Explore company insights and information', 'Learn more'],
          ['Communities', 'See the portfolio and communities Trio serves', 'View portfolio'],
          ['Careers', 'Join a team focused on people and performance', 'See open positions'],
        ].map(([title, text, action]) => (
          <article key={title} className="bg-white border border-[#D9D9D2] p-7 sm:p-8 min-h-[210px] flex flex-col">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#157E9A] font-bold">{title}</p>
            <h3 className="mt-4 text-[23px] leading-tight text-[#073F58] font-bold">{text}</h3>
            <button className="mt-auto pt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.09em] text-[#073F58] font-semibold">{action} <ArrowUpRight className="w-4 h-4 text-[#D2C76F]" /></button>
          </article>
        ))}
      </div>
    </section>
  );
}
