'use client';

import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Building2,
  MapPin,
} from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
];

const sideProjects = [
  {
    title: 'Commercial & Mixed Use',
    location: 'Hartford · New Haven · Stamford',
    image: images[1],
  },
  {
    title: 'New Construction Lease-Up',
    location: 'Florida · Southeast markets',
    image: images[2],
  },
  {
    title: 'Repositioning & Value Creation',
    location: 'East Coast portfolio experience',
    image: images[3],
  },
];

export function Portfolio() {
  return (
    <section
      id="communities"
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        py-16

        sm:px-6
        sm:py-20

        lg:px-8
        lg:py-24
      "
      style={{
        fontFamily: 'DM Sans, sans-serif',
      }}
    >
      {/* subtle background treatment */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-[90%]
          max-w-[1400px]
          -translate-x-1/2
          bg-[#073F58]/10
        "
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* ==================================================
            CENTERED SECTION INTRO
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-11
            flex
            max-w-[920px]
            flex-col
            items-center
            text-center

            sm:mb-14

            lg:mb-16
          "
        >
          {/* eyebrow */}
          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-[#D2C76F]" />

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.19em]
                text-[#157E9A]

                sm:text-[10px]
              "
            >
              Communities & Portfolio
            </p>

            <span className="h-px w-8 bg-[#D2C76F]" />
          </div>

          {/* heading */}
          <h2
            className="
              max-w-[900px]

              text-[clamp(2.65rem,6vw,5rem)]
              font-[500]
              leading-[0.96]
              tracking-[-0.032em]
              text-[#073F58]
            "
          >
            Institutional experience,
            <span className="block text-[#157E9A]">
              personal attention.
            </span>
          </h2>

          {/* description */}
          <p
            className="
              mt-5
              max-w-[690px]
              text-[14px]
              font-normal
              leading-[1.75]
              text-[#677277]

              sm:text-[15px]

              lg:text-[16px]
            "
          >
            Trio oversees stabilized assets, repositioning plans,
            lease-ups and new multifamily development with a hands-on
            management approach.
          </p>

          {/* small decorative line */}
          <div
            className="
              mt-7
              h-px
              w-[70px]
              bg-[#073F58]/18
            "
          />
        </motion.div>

        {/* ==================================================
            PORTFOLIO GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5

            lg:grid-cols-[1.22fr_.78fr]
          "
        >
          {/* ==================================================
              FEATURED COMMUNITY
          ================================================== */}

          <motion.article
            initial={{
              opacity: 0,
              y: 26,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              min-h-[430px]
              overflow-hidden
              rounded-[3px]

              sm:min-h-[520px]

              lg:min-h-[570px]
            "
          >
            <img
              src={images[0]}
              alt="Modern multifamily residential community"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover

                transition-transform
                duration-[900ms]
                ease-out

                group-hover:scale-[1.035]
              "
            />

            {/* main image overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#052F42]/92
                via-[#052F42]/22
                to-transparent
              "
            />

            {/* subtle side wash */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#052F42]/24
                to-transparent
              "
            />

            {/* gold detail */}
            <div
              className="
                absolute
                left-0
                top-0
                h-[4px]
                w-[100px]
                bg-[#D2C76F]
              "
            />

            {/* featured tag */}
            <div
              className="
                absolute
                right-5
                top-5
                border
                border-white/20
                bg-[#073F58]/60
                px-4
                py-2
                backdrop-blur-md

                sm:right-7
                sm:top-7
              "
            >
              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white/75
                "
              >
                Featured Expertise
              </p>
            </div>

            {/* content */}
            <div
              className="
                absolute
                bottom-0
                left-0
                max-w-[760px]
                p-6
                text-white

                sm:p-8

                lg:p-10
              "
            >
              <span
                className="
                  mb-4
                  inline-flex
                  items-center
                  gap-2

                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-white/72

                  sm:text-[10px]
                "
              >
                <Building2 className="h-3.5 w-3.5 text-[#D2C76F]" />

                Multifamily Management
              </span>

              <h3
                className="
                  max-w-[670px]

                  text-[30px]
                  font-[700]
                  leading-[1.02]
                  tracking-[-0.018em]

                  sm:text-[40px]

                  lg:text-[46px]
                "
              >
                Managing communities for lasting performance.
              </h3>

              <p
                className="
                  mt-4
                  max-w-[585px]

                  text-[13px]
                  font-normal
                  leading-[1.72]
                  text-white/76

                  sm:text-[14px]
                "
              >
                A personal-scale operating model backed by decades of
                management, development and investment experience.
              </p>

              <button
                className="
                  group/button
                  mt-6
                  inline-flex
                  items-center
                  gap-2.5

                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.13em]
                  text-white
                "
              >
                Explore communities

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    text-[#D2C76F]

                    transition-transform
                    duration-300

                    group-hover/button:-translate-y-0.5
                    group-hover/button:translate-x-0.5
                  "
                />
              </button>
            </div>
          </motion.article>

          {/* ==================================================
              SIDE PROJECTS
          ================================================== */}

          <div
            className="
              grid
              gap-5

              sm:grid-cols-3

              lg:grid-cols-1
              lg:grid-rows-3
            "
          >
            {sideProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  x: 18,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  grid
                  min-h-[170px]
                  overflow-hidden
                  rounded-[3px]
                  border
                  border-[#E5E5DF]
                  bg-[#F8F7F3]

                  sm:grid-cols-1

                  lg:grid-cols-[42%_58%]
                "
              >
                {/* image */}
                <div
                  className="
                    relative
                    min-h-[160px]
                    overflow-hidden

                    sm:min-h-[180px]

                    lg:min-h-0
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover

                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-[1.05]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[#073F58]/5

                      transition-colors
                      duration-300

                      group-hover:bg-transparent
                    "
                  />
                </div>

                {/* text */}
                <div
                  className="
                    relative
                    flex
                    flex-col
                    justify-center
                    p-5

                    sm:p-5

                    xl:p-6
                  "
                >
                  <span
                    className="
                      mb-3
                      h-[2px]
                      w-7
                      bg-[#D2C76F]
                    "
                  />

                  <h3
                    className="
                      text-[16px]
                      font-[700]
                      leading-[1.2]
                      tracking-[-0.025em]
                      text-[#073F58]

                      sm:text-[18px]

                      xl:text-[19px]
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      inline-flex
                      items-start
                      gap-1.5

                      text-[9px]
                      font-medium
                      leading-[1.55]
                      text-[#748087]

                      sm:text-[10px]
                    "
                  >
                    <MapPin
                      className="
                        mt-[1px]
                        h-3
                        w-3
                        shrink-0
                        text-[#157E9A]
                      "
                    />

                    {project.location}
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-2

                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-[#073F58]/48

                      transition-colors

                      group-hover:text-[#157E9A]
                    "
                  >
                    View expertise

                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}