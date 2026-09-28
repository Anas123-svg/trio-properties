'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const heroImage =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=88';

const stats = [
  ['3,000+', 'apartments in current portfolio'],
  ['50,000+', 'units of leadership experience'],
  ['$1.5B', 'development & management expertise'],
  ['75,000+', 'units enhanced since the 1980s'],
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#F3F1EC]
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
      <div className="mx-auto max-w-[1400px]">
        {/* ==================================================
            TOP INTRO — LEFT ALIGNED
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-11
            max-w-[900px]

            sm:mb-14
          "
        >
          <div
            className="
              mb-4
              flex
              items-center
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
              About Trio
            </p>
          </div>

          <h2
            className="
              max-w-[860px]

              text-[clamp(2.7rem,6vw,5.1rem)]
              font-[750]
              leading-[0.96]
              tracking-[-0.052em]
              text-[#073F58]
            "
          >
            Experience that moves
            <span className="block text-[#157E9A]">
              properties forward.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-[690px]

              text-[14px]
              leading-[1.8]
              text-[#667277]

              sm:text-[15px]

              lg:text-[16px]
            "
          >
            Trio combines institutional real estate expertise with the
            responsiveness and involvement of a hands-on management team.
          </p>
        </motion.div>

        {/* ==================================================
            IMAGE + OVERLAPPING STORY PANEL
        ================================================== */}

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              h-[400px]
              overflow-hidden

              sm:h-[500px]

              lg:h-[590px]
            "
          >
            <img
              src={heroImage}
              alt="Trio Properties real estate experience"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover

                transition-transform
                duration-[1000ms]
                ease-out

                group-hover:scale-[1.025]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#052F42]/72
                via-[#052F42]/08
                to-transparent
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#073F58]/20
                to-transparent
              "
            />

            {/* image label */}
            <div
              className="
                absolute
                left-5
                top-5

                border
                border-white/25

                bg-[#073F58]/68

                px-4
                py-2

                backdrop-blur-md

                sm:left-7
                sm:top-7
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white/80
                "
              >
                Management · Development · Investment
              </p>
            </div>
          </motion.div>

          {/* ==================================================
              OVERLAPPING CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
              mx-4
              -mt-14

              bg-white

              px-6
              py-8

              shadow-[0_24px_70px_rgba(7,63,88,0.12)]

              sm:mx-8
              sm:-mt-18
              sm:px-8
              sm:py-9

              lg:absolute
              lg:bottom-[-70px]
              lg:right-[5%]
              lg:mx-0
              lg:mt-0
              lg:w-[520px]
              lg:px-10
              lg:py-10

              xl:right-[7%]
              xl:w-[560px]
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#157E9A]
              "
            >
              The Trio Approach
            </p>

            <h3
              className="
                mt-3

                text-[27px]
                font-[750]
                leading-[1.04]
                tracking-[-0.04em]
                text-[#073F58]

                sm:text-[32px]

                lg:text-[37px]
              "
            >
              Hands-on where it matters most.
            </h3>

            <p
              className="
                mt-5
                text-[13px]
                leading-[1.8]
                text-[#606D72]

                sm:text-[14px]
              "
            >
              Trio Properties combines institutional property management
              service with real estate expertise at a personal scale.
              The team supports stabilized assets, repositioning plans,
              lease-ups, new development and construction.
            </p>

            <button
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2.5

                text-[9px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#073F58]
              "
            >
              Discover more about Trio

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  text-[#D2C76F]

                  transition-transform
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </button>
          </motion.div>
        </div>

        {/* ==================================================
            STATS
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.12,
          }}
          className="
            mt-10
            grid
            grid-cols-2

            border-y
            border-[#D7D8D2]

            lg:mt-[120px]
            lg:grid-cols-4
          "
        >
          {stats.map(([value, label], index) => (
            <div
              key={label}
              className={`
                flex
                min-h-[150px]
                flex-col
                justify-center

                px-5
                py-6

                sm:px-7

                ${
                  index !== stats.length - 1
                    ? 'lg:border-r lg:border-[#D7D8D2]'
                    : ''
                }

                ${
                  index % 2 === 0
                    ? 'border-r border-[#D7D8D2] lg:border-r'
                    : ''
                }

                ${
                  index < 2
                    ? 'border-b border-[#D7D8D2] lg:border-b-0'
                    : ''
                }
              `}
            >
              <p
                className="
                  text-[30px]
                  font-[750]
                  leading-none
                  tracking-[-0.045em]
                  text-[#073F58]

                  sm:text-[36px]
                "
              >
                {value}
              </p>

              <p
                className="
                  mt-3
                  max-w-[180px]

                  text-[8px]
                  font-semibold
                  uppercase
                  leading-[1.55]
                  tracking-[0.11em]
                  text-[#7B878B]

                  sm:text-[9px]
                "
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}