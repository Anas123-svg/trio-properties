import { useState } from 'react';
import { Link } from 'react-router';
import { Calendar, MapPin, Clock, ArrowUpRight, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTA } from '../components/CTA';
import { Process } from '../components/Process';
import { TrustRibbon } from '../components/TrustRibbon';

function getProjectName(title: string) {
  return title
    .replace(/\s+Retrofit\s*&\s*Roof\s*Extension$/i, '')
    .replace(/\s+Conversion\s*&\s*Extension$/i, '')
    .replace(/\s+Structural\s+Retrofit$/i, '')
    .replace(/\s+Residential\s+Retrofit$/i, '')
    .replace(/\s+Retrofit$/i, '')
    .trim();
}

const PROJECT_TABS = [
  { label: 'All', value: 'all' },
  ...projectsData.map((project) => ({
    label: `${getProjectName(project.title)} - ${project.location}`,
    value: project.slug,
  })),
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.slug === activeFilter);

  return (
    <div className="min-h-screen" style={{ background: '#F7F4EF', fontFamily: 'DM Sans, sans-serif' }}>
      <AnnouncementBar />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{ background: '#111110', minHeight: 'clamp(60vh, 100vh, 88vh)' }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1769699703386-3560314d02e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwbW9kZXJuJTIwYnVpbGRpbmclMjBhZXJpYWx8ZW58MXx8fHwxNzc1NDY5NTg2fDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Construction site aerial"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* Layered overlays */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(17,17,16,0.97) 0%, rgba(17,17,16,0.82) 50%, rgba(17,17,16,0.55) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,17,16,1) 0%, transparent 40%)' }} />
        </div>

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
            opacity: 0.6,
          }}
        />

        {/* Accent orb */}
        <div
          className="absolute"
          style={{
            right: '-8rem',
            top: '20%',
            width: '36rem',
            height: '36rem',
            background: 'radial-gradient(circle, rgba(46,156,202,0.18) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto w-full">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: '2rem', height: '1px', background: '#2E9CCA' }} />
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  color: '#2E9CCA',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Our Portfolio
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
              {/* Left: headline */}
              <div>
                <h1
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 'clamp(42px, 8vw, 130px)',
                    lineHeight: 0.9,
                    color: '#FFFFFF',
                    letterSpacing: '2px',
                  }}
                >
                  Featured<br />
                  <span style={{ color: '#2E9CCA' }}>Projects</span>
                </h1>

                <p
                  style={{
                    marginTop: '1.75rem',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    color: 'rgba(255,255,255,0.55)',
                    maxWidth: '480px',
                    lineHeight: 1.7,
                  }}
                >
                  Transforming spaces across London and the UK with precision,
                  quality, and innovation — from luxury extensions to complete renovations.
                </p>
              </div>

              {/* Right: stats column */}
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full sm:w-auto" style={{ minWidth: 'auto' }}>
                {[
                  { number: '500+', label: 'Projects Completed' },
                  { number: '20+', label: 'Years Experience' },
                  { number: '98%', label: 'Client Satisfaction' },
                ].map((stat, i) => (
                  <div key={i} className="flex-1 sm:flex-none">
                    <div
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: 'clamp(28px, 5vw, 48px)',
                        color: '#FFFFFF',
                        lineHeight: 1,
                        letterSpacing: '1px',
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      style={{
                        fontSize: 'clamp(9px, 2vw, 11px)',
                        color: 'rgba(255,255,255,0.4)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginTop: '4px',
                      }}
                    >
                      {stat.label}
                    </div>
                    {i < 2 && (
                      <div style={{ marginTop: '1.5rem', width: '2rem', height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade into page bg */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: '4rem', background: 'linear-gradient(to bottom, transparent, #F7F4EF)' }}
        />
      </section>

      {/* ── INTRO + FILTER BAR ──────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8" style={{ background: '#F7F4EF', paddingTop: 'clamp(2rem, 5vw, 5rem)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 lg:gap-8 pb-6 sm:pb-10"
            style={{ borderBottom: '1px solid #E2DDD6' }}
          >
            {/* Intro copy */}
            <div style={{ maxWidth: '640px' }}>
              <p style={{ fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.18em', color: '#2E9CCA', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>
                Selected Work
              </p>
              <h2 style={{ fontSize: 'clamp(20px, 4vw, 32px)', color: '#1A1A1A', fontWeight: 700, lineHeight: 1.3 }}>
                Recent builds, renovations, and extensions delivered for homeowners across London.
              </h2>
            </div>

            {/* Count */}
            <div style={{ fontSize: 'clamp(11px, 2vw, 13px)', color: '#999', flexShrink: 0 }}>
              Showing <strong style={{ color: '#1A1A1A' }}>{filtered.length}</strong> projects
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-2" style={{ paddingTop: 'clamp(0.75rem, 2vw, 1.5rem)', paddingBottom: '0.5rem', minHeight: 'auto' }}>
            {PROJECT_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                style={{
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: 'clamp(11px, 2vw, 12px)',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: activeFilter === tab.value ? 'none' : '1px solid #D8D3CB',
                  background: activeFilter === tab.value ? '#2E9CCA' : 'transparent',
                  color: activeFilter === tab.value ? '#fff' : '#555',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS GRID ───────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8" style={{ background: '#F7F4EF', paddingTop: 'clamp(1.5rem, 4vw, 3rem)', paddingBottom: 'clamp(2rem, 6vw, 6rem)' }}>
        <div className="max-w-[1400px] mx-auto">

          {/* Editorial mixed grid */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(0.75rem, 2vw, 1.25rem)',
            }}
          >
            {filtered.map((project) => {
              // Simple responsive approach - let grid handle layout
              let imgHeight = 'clamp(200px, 50vw, 280px)';

              return (
                <div
                  key={project.id}
                  style={{ display: 'block' }}
                >
                  <Link to={`/projects/${project.slug}`} style={{ display: 'block', height: '100%' }}>
                    <article
                      className="group translate-y-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        height: '100%',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
                      }}
                    >
                      {/* Image */}
                      <div style={{ position: 'relative', height: imgHeight, overflow: 'hidden' }}>
                        <img
                          src={project.portfolioImage ?? project.mainImage}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="transition-transform duration-500 group-hover:scale-[1.04]"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        {/* Type badge */}
                        <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                          <span style={{
                            background: 'rgba(17,17,16,0.72)',
                            backdropFilter: 'blur(8px)',
                            color: '#fff',
                            fontSize: '10px',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            padding: '0.35rem 0.8rem',
                            borderRadius: '9999px',
                          }}>
                            {project.type}
                          </span>
                        </div>
                        {/* Arrow icon on hover */}
                        <div
                          className="opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"
                          style={{
                            position: 'absolute',
                            bottom: '1rem',
                            right: '1rem',
                            width: '2.5rem',
                            height: '2.5rem',
                            background: '#2E9CCA',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <ArrowUpRight size={16} color="#fff" />
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{ padding: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
                        {/* Meta row */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: 'clamp(10px, 2vw, 12px)', color: '#999' }}>
                            <MapPin size={12} />
                            {project.location}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: 'clamp(10px, 2vw, 12px)', color: '#999' }}>
                            <Calendar size={10} />
                            {project.year}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: 'clamp(10px, 2vw, 12px)', color: '#999' }}>
                            <Clock size={10} />
                            {project.duration}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 style={{
                          fontSize: 'clamp(14px, 3vw, 17px)',
                          fontWeight: 700,
                          color: '#1A1A1A',
                          lineHeight: 1.25,
                          marginBottom: '0.5rem',
                        }}>
                          {getProjectName(project.title)}
                        </h3>

                        {/* Description */}
                        <p style={{
                          fontSize: 'clamp(12px, 2vw, 13px)',
                          color: '#777',
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}>
                          {project.description}
                        </p>

                        {/* CTA link */}
                        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 'clamp(11px, 2vw, 12px)', fontWeight: 600, color: '#2E9CCA', letterSpacing: '0.04em' }}>
                          View Project <ArrowRight size={13} />
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'clamp(2rem, 8vw, 6rem) 0', color: '#aaa', fontSize: 'clamp(13px, 2vw, 15px)' }}>
              No projects found for this selection.
            </div>
          )}
        </div>
      </section>

      <TrustRibbon />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}