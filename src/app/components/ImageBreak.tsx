export function ImageBreak() {
  return (
    <section className="relative h-[230px] sm:h-[310px] lg:h-[390px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=2000&q=86"
        alt="Urban market experience"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#073F58]/14" />
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#D2C76F]" />
    </section>
  );
}
