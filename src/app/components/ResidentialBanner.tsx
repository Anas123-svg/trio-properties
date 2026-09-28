export function ResidentialBanner() {
  return (
    <section className="relative h-[250px] sm:h-[340px] lg:h-[430px] overflow-hidden">
      <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2200&q=88" alt="Residential community" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#073F58]/32 via-transparent to-transparent" />
    </section>
  );
}
