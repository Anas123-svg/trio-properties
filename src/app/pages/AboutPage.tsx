import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const founders = [
  {
    index: '01',
    name: 'Jacques Mellinger Bsc',
    role: 'Founding Partner — Head of Finance',
    bio: [
      'Jacques Mellinger, Co-Founder of Homesolve Ltd since 2010, has played a central role in the company\'s growth through meticulous planning, architectural insight, and strategic leadership.',
      'He leads budgeting, planning, and finance while upholding strict on-site health and safety standards. His earlier finance career built the commercial and marketing expertise that continues to support Homesolve\'s expansion.',
      'With project management studies at University College London and broad experience in rental and high-end domestic construction, he brings disciplined technical oversight to complex developments.',
    ],
    tags: ['Finance', 'Planning', 'Strategy'],
  },
  {
    index: '02',
    name: 'Barry Korman',
    role: 'Founding Partner — Head of Operations',
    bio: [
      'Barry Korman co-founded Homesolve Ltd in 2010 and oversees planning, delivery, and operational control to maintain high standards of quality and performance across every project.',
      'From apprentice to senior project roles in premium residential development, he developed deep expertise in project oversight, procurement, and site coordination backed by full CITB qualifications in site management and health and safety.',
      'His practical leadership and communication across teams help ensure reliable execution from concept through completion while supporting Homesolve\'s mentoring and community-focused initiatives.',
    ],
    tags: ['Operations', 'Site Management', 'Procurement'],
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EB] overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />

      {/* ── ABOUT SECTION (unchanged) ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-b border-[#E8E4DC] bg-[#F5F1EB] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#F5F1EB]/88" />
        </div>

        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <p
            className="text-[11px] uppercase tracking-[0.18em] text-[#2E9CCA] mb-3"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            About Us
          </p>
          <h1
            className="text-[34px] sm:text-[44px] md:text-[62px] text-[#1A1A1A] leading-none"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '1px' }}
          >
            ABOUT US
          </h1>
          <p
            className="text-[14px] md:text-[16px] text-[#2E9CCA] mt-3"
            style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.08em' }}
          >
            Specify | Manage | Build
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 bg-[#F5F1EB]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-[10px] overflow-hidden border border-[#E0DAD0]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Homesolve team at construction site"
                className="w-full h-[260px] sm:h-[320px] object-cover"
              />
            </div>
            <div className="rounded-[10px] overflow-hidden border border-[#E0DAD0]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                alt="Modern property development"
                className="w-full h-[305px] object-cover"
              />
            </div>
            <div className="rounded-[10px] overflow-hidden border border-[#E0DAD0]">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80"
                alt="Residential architecture detail"
                className="w-full h-[305px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 rounded-[10px] border border-[#E0DAD0] bg-white p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#444440]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Homesolve Ltd. is a professional construction and development company based in London, founded by Managing
              Directors Jacques Mellinger and Barry Korman in 2010. Over the years, we have grown significantly acquiring
              new clients and deepening partnerships with existing ones. Our team of highly experienced construction
              specialists regularly undertakes development projects comprising twenty to seventy flats, while also managing
              larger-scale assignments.
            </p>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#444440]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Specializing in residential projects, Homesolve Ltd. excels in converting existing buildings into multiple
              occupancies. Today, our construction portfolio includes not only the transformation of large houses but also
              the conversion of office blocks into residential spaces, alongside complete building developments. We work in
              close collaboration with property developers and private homeowners to ensure each project meets its defined
              requirements.
            </p>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#444440]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Our strong reputation in property development is built on our ability to deliver projects on time and within
              budget. This success is driven by our founding principle:
            </p>

            <blockquote
              className="border-l-4 border-[#2E9CCA] pl-4 sm:pl-5 py-1 text-[14px] sm:text-[15px] md:text-[16px] italic text-[#1A1A1A]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              "A high-standard and fully customized service, using tailor-made solutions to fulfil the client's
              construction and building requirements."
            </blockquote>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#444440]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              This philosophy guides every aspect of our work. Our experts manage designers and building contractors,
              consult with planning departments, and coordinate with utility providers and traffic management. By using our
              comprehensive framework - Envisage (or Conceive) - Manage - Build - we ensure every element of your project
              is handled with care, reducing the stress typically associated with building works.
            </p>
          </div>
        </div>
      </section>

      {/* ── REDESIGNED TEAM / FOUNDERS SECTION ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 bg-[#F5F1EB]">
        <div className="max-w-[1400px] mx-auto">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.18em] text-[#2E9CCA] mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Leadership
              </p>
              <h2
                className="text-[40px] sm:text-[52px] md:text-[64px] text-[#1A1A1A] leading-none"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.8px' }}
              >
                MEET THE FOUNDERS
              </h2>
            </div>
            <p
              className="text-[13px] text-[#888880] max-w-[260px] sm:text-right leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Partners since 2010, building London's most trusted residential developments.
            </p>
          </div>

          {/* Founders photo — editorial split layout */}
          <div className="relative mb-8 sm:mb-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-0 rounded-[14px] overflow-hidden border border-[#E0DAD0]" style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.07)' }}>

            {/* Photo side */}
            <div className="relative overflow-hidden bg-[#EDE9E2] min-h-[300px] sm:min-h-[420px] md:min-h-[500px]">
              <img
                src="/team.jpeg"
                alt="Homesolve founders"
                className="w-full h-full object-contain object-center"
                style={{ minHeight: '300px' }}
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1A1A1A]/20 pointer-events-none" />

              {/* Top-left corner badge */}
              <div className="absolute top-5 left-5">
                <div
                  className="bg-[#2E9CCA] text-white text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Est. 2010
                </div>
              </div>
            </div>

            {/* Info panel */}
            <div className="bg-[#1A1A1A] flex flex-col justify-between p-7 sm:p-8">

              {/* Top: decorative label */}
              <div>
                <p
                  className="text-[10px] uppercase tracking-[0.2em] text-[#2E9CCA] mb-6"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  The People Behind It
                </p>

                {/* Founder name list */}
                <div className="space-y-5 mb-8">
                  {founders.map((f) => (
                    <div key={f.name} className="border-l-2 border-[#2E9CCA] pl-4">
                      <p
                        className="text-[22px] sm:text-[26px] text-white leading-none mb-1"
                        style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.5px' }}
                      >
                        {f.name}
                      </p>
                      <p
                        className="text-[11px] uppercase tracking-[0.12em] text-[#2E9CCA]"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {f.role.split('—')[1]?.trim()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="text-[13px] sm:text-[14px] leading-relaxed text-[#AAAAAA] italic border-t border-white/10 pt-6"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  "A high-standard and fully customized service — tailor-made solutions for every client."
                </blockquote>
              </div>

              {/* Bottom: stats row */}
              <div className="flex gap-6 mt-8 pt-6 border-t border-white/10">
                {[
                  { value: '15+', label: 'Years' },
                  { value: '500+', label: 'Units' },
                  { value: '100%', label: 'Dedicated' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p
                      className="text-[26px] text-white leading-none"
                      style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                    >
                      {value}
                    </p>
                    <p
                      className="text-[10px] uppercase tracking-[0.12em] text-[#666660] mt-0.5"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Founder cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="group rounded-[12px] border border-[#E0DAD0] bg-white overflow-hidden"
                style={{ boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)' }}
              >
                {/* Card top accent bar */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#2E9CCA] to-[#1A7BA8]" />

                <div className="p-5 sm:p-6 md:p-8">
                  {/* Index + role row */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span
                      className="text-[52px] sm:text-[64px] leading-none text-[#E8E4DC] select-none"
                      style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '1px' }}
                    >
                      {founder.index}
                    </span>
                    <span
                      className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#2E9CCA] bg-[#EBF6FC] px-3 py-1.5 rounded-full shrink-0"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {founder.role.split('—')[0].trim()}
                    </span>
                  </div>

                  {/* Name */}
                  <h3
                    className="text-[26px] sm:text-[32px] text-[#1A1A1A] leading-none mb-1"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.5px' }}
                  >
                    {founder.name}
                  </h3>

                  {/* Role subtitle */}
                  <p
                    className="text-[12px] uppercase tracking-[0.12em] text-[#2E9CCA] mb-5"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {founder.role}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-[#EDE9E2] mb-5" />

                  {/* Bio paragraphs */}
                  <div className="space-y-3 mb-6">
                    {founder.bio.map((note, i) => (
                      <p
                        key={i}
                        className="text-[14px] sm:text-[15px] leading-relaxed text-[#555550]"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {note}
                      </p>
                    ))}
                  </div>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2">
                    {founder.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] uppercase tracking-[0.1em] text-[#888880] border border-[#E0DAD0] px-3 py-1 rounded-full bg-[#FAFAF8]"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>



        </div>
      </section>


      <CTA />
      <Footer />
    </div>
  );
}