'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90',
    label: 'Multifamily Management',
    location: 'East Coast & Southeast',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90',
    label: 'Community Development',
    location: 'Residential Communities',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2000&q=90',
    label: 'Property Expertise',
    location: 'Management · Development',
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - 70;
    const behavior = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
      ? 'auto'
      : 'smooth';

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior,
    });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6200);

    return () => window.clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <section
      id="top"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#073F58]

        min-h-[calc(100svh-64px)]

        sm:min-h-[720px]

        lg:h-[calc(100svh-70px)]
        lg:min-h-[650px]
        lg:max-h-[900px]
      "
    >
      {/* Background images */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={currentSlide.image}
            src={currentSlide.image}
            alt={currentSlide.label}
            initial={false}
            animate={{
              opacity: 1,
              scale: 1.01,
            }}
            exit={{
              opacity: 0,
              scale: 1.03,
            }}
            transition={{
              opacity: {
                duration: 1.15,
                ease: 'easeInOut',
              },
              scale: {
                duration: 7,
                ease: 'easeOut',
              },
            }}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover

              object-[56%_center]

              sm:object-center
            "
          />
        </AnimatePresence>

        {/* Primary overlay */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-[#032B3D]/97
            via-[#073F58]/82
            to-[#073F58]/35

            sm:from-[#032B3D]/95
            sm:via-[#073F58]/76
            sm:to-[#073F58]/16
          "
        />

        {/* Bottom depth */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t

            from-[#031F2C]/82
            via-transparent
            to-[#031F2C]/10

            sm:from-[#031F2C]/75
          "
        />

        {/* Right highlight */}
        <div
          className="
            absolute
            right-0
            top-0

            hidden

            h-full
            w-[45%]

            bg-gradient-to-l
            from-white/[0.04]
            to-transparent

            sm:block
          "
        />

        {/* Subtle texture */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.06]
            mix-blend-soft-light
          "
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)',
            backgroundSize: '18px 18px',
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          h-full
          w-full
          max-w-[1440px]
          grid-cols-1
          items-center

          px-5
          pb-[92px]
          pt-10

          sm:px-7
          sm:py-14

          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-16
          lg:px-10
          lg:py-8

          xl:px-12
        "
      >
        {/* Left side */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-[760px]

            pt-0

            sm:pt-6

            lg:pt-0
          "
        >
          {/* Heading */}
          <h1
            className="
              max-w-[770px]

              text-[clamp(2.65rem,12vw,3.65rem)]
              font-[500]
              leading-[1.22]
              tracking-[-0.032em]
              text-white

              sm:text-[clamp(3.2rem,10vw,5rem)]
              sm:leading-[1.18]

              lg:text-[clamp(4rem,5.2vw,5.4rem)]
              lg:leading-[1.16]
            "
          >
            We lead properties

            <span className="block text-[#D2C76F]">
              in their best direction.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-[610px]

              text-[13px]
              leading-[1.68]
              text-white/72

              sm:mt-6
              sm:text-[16px]
              sm:leading-[1.72]

              xl:text-[17px]
            "
          >
            Hands-on property management and real estate expertise for
            investors who value institutional capability, responsive teams
            and a genuinely personal partnership.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-6
              flex
              flex-col
              gap-2.5

              sm:mt-8
              sm:flex-row
              sm:gap-3
            "
          >
            <button
              onClick={() => scrollTo('communities')}
              className="
                group
                inline-flex

                h-[48px]
                w-full

                items-center
                justify-center
                gap-3

                bg-[#D2C76F]

                px-6

                text-[9px]
                font-bold
                uppercase
                tracking-[0.11em]
                text-[#073F58]

                shadow-[0_14px_36px_rgba(0,0,0,0.18)]

                transition-all
                duration-300

                hover:bg-[#E2D982]
                hover:shadow-[0_18px_46px_rgba(0,0,0,0.24)]

                sm:h-[52px]
                sm:w-auto
                sm:px-7
                sm:text-[10px]
              "
            >
              Explore Communities

              <ArrowRight
                className="
                  h-4
                  w-4

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </button>

            <button
              onClick={() => scrollTo('about')}
              className="
                inline-flex

                h-[48px]
                w-full

                items-center
                justify-center

                border
                border-white/30

                bg-white/[0.07]

                px-6

                text-[9px]
                font-semibold
                uppercase
                tracking-[0.11em]
                text-white

                backdrop-blur-md

                transition-all
                duration-300

                hover:border-white/55
                hover:bg-white/[0.13]

                sm:h-[52px]
                sm:w-auto
                sm:px-7
                sm:text-[10px]
              "
            >
              Discover Trio
            </button>
          </div>

          {/* Credibility
              Hidden ONLY on mobile.
              sm+ is the original layout.
          */}
          <div
            className="
              mt-8
              hidden
              max-w-[670px]
              gap-4

              border-t
              border-white/16

              pt-5

              sm:grid
              sm:grid-cols-2
              sm:gap-6
            "
          >
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-[#D2C76F]" />

              <span className="text-[11px] leading-[1.55] text-white/63">
                3,000+ apartments in the current portfolio
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-[#D2C76F]" />

              <span className="text-[11px] leading-[1.55] text-white/63">
                East Coast & Southeast market experience
              </span>
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            RIGHT SIDE
            UNCHANGED FROM ORIGINAL
        ================================================== */}

        <div
          className="
            relative
            mt-12
            hidden
            h-[520px]

            lg:block

            xl:h-[570px]
          "
        >
          {/* Card stack */}
          <motion.div
            initial={false}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              absolute
              right-0
              top-[8%]

              w-[330px]

              xl:w-[365px]
            "
          >
            {/* Trio Properties card */}
            <div
              className="
                w-full

                border
                border-white/20

                bg-[#06384E]/84

                p-7

                text-white

                shadow-[0_30px_80px_rgba(0,0,0,0.26)]

                backdrop-blur-xl

                xl:p-8
              "
            >
              <div className="mb-7">
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#D2C76F]
                  "
                >
                  Trio Properties
                </p>

                <p
                  className="
                    mt-2
                    max-w-[250px]

                    text-[19px]
                    font-semibold
                    leading-[1.25]
                    tracking-[-0.025em]
                  "
                >
                  Multifamily expertise built around people.
                </p>
              </div>

              {/* Stats */}
              <div
                className="
                  grid
                  grid-cols-2

                  border-y
                  border-white/14
                "
              >
                <div
                  className="
                    border-r
                    border-white/14

                    py-5
                    pr-5
                  "
                >
                  <p
                    className="
                      text-[28px]
                      font-bold
                      tracking-[-0.05em]
                      text-white
                    "
                  >
                    75K+
                  </p>

                  <p
                    className="
                      mt-1

                      text-[8px]
                      uppercase
                      leading-[1.5]
                      tracking-[0.12em]
                      text-white/50
                    "
                  >
                    units enhanced
                  </p>
                </div>

                <div className="py-5 pl-5">
                  <p
                    className="
                      text-[28px]
                      font-bold
                      tracking-[-0.05em]
                      text-white
                    "
                  >
                    3K+
                  </p>

                  <p
                    className="
                      mt-1

                      text-[8px]
                      uppercase
                      leading-[1.5]
                      tracking-[0.12em]
                      text-white/50
                    "
                  >
                    apartments managed
                  </p>
                </div>
              </div>

              {/* Expertise row */}
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    border
                    border-white/15

                    bg-white/[0.05]
                  "
                >
                  <Building2 className="h-4 w-4 text-[#D2C76F]" />
                </span>

                <div>
                  <p className="text-[10px] font-semibold">
                    Integrated property expertise
                  </p>

                  <p className="mt-0.5 text-[9px] text-white/48">
                    Management · Development · Investment
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Across card */}
            <motion.div
              initial={false}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.48,
              }}
              className="
                mt-3
                flex
                w-full
                items-center
                gap-4

                border
                border-white/16

                bg-white/[0.10]

                px-6
                py-5

                shadow-[0_18px_45px_rgba(0,0,0,0.18)]

                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center

                  bg-[#D2C76F]
                "
              >
                <MapPin className="h-[18px] w-[18px] text-[#073F58]" />
              </div>

              <div className="min-w-0">
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white/48
                  "
                >
                  Experience across
                </p>

                <p
                  className="
                    mt-1.5

                    text-[13px]
                    font-semibold
                    leading-[1.3]
                    text-white
                  "
                >
                  East Coast & Southeast
                </p>

                <p className="mt-1 text-[9px] leading-[1.45] text-white/45">
                  Property expertise across growing regional markets.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative year */}
          <div
            className="
              absolute
              bottom-[2%]
              right-0
              text-right
            "
          >
            <p
              className="
                text-[58px]
                font-bold
                leading-none
                tracking-[-0.08em]
                text-white/[0.08]

                xl:text-[72px]
              "
            />
          </div>
        </div>
      </div>

      {/* Mobile slider title */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20

          border-t
          border-white/10

          bg-[#042E40]/82

          px-5
          py-3

          backdrop-blur-lg

          lg:hidden
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p
              className="
                truncate

                text-[8px]
                uppercase
                tracking-[0.14em]
                text-[#D2C76F]
              "
            >
              {currentSlide.label}
            </p>

            <p className="mt-0.5 truncate text-[9px] text-white/55">
              {currentSlide.location}
            </p>
          </div>

          <div className="flex shrink-0 gap-1.5">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Show hero slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`
                  h-[3px]
                  transition-all
                  duration-300

                  ${
                    activeSlide === index
                      ? 'w-7 bg-[#D2C76F]'
                      : 'w-3 bg-white/25'
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}