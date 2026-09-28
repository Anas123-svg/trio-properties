export function FeaturedSlider() {
  const items = [
    'Hands-on Property Management',
    'Multifamily Expertise',
    'Development Consulting',
    'New Construction Lease-Up',
    'Acquisition Due Diligence',
    'Repositioning Plans',
  ];

  return (
    <section className="relative bg-[#073F58] py-4 overflow-hidden border-y border-white/10">
      <div className="flex animate-trio-scroll whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={`${item}-${i}`} className="shrink-0 px-5 sm:px-8 flex items-center gap-5 text-white/90">
            <span className="text-[12px] sm:text-[14px] tracking-[0.04em]" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2C76F]" />
          </div>
        ))}
      </div>
      <style>{`@keyframes trio-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.animate-trio-scroll{width:max-content;animation:trio-scroll 30s linear infinite}.animate-trio-scroll:hover{animation-play-state:paused}`}</style>
    </section>
  );
}
