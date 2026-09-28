'use client';

import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Building2,
  Landmark,
  BadgeDollarSign,
  ClipboardCheck,
  HardHat,
  LineChart,
} from 'lucide-react';

const services = [
  {
    title: 'Multifamily Management',
    text: 'Hands-on management focused on operations, resident experience and asset performance.',
    icon: Building2,
  },
  {
    title: 'Commercial & Mixed Use',
    text: 'Integrated oversight for commercial and mixed-use assets across diverse markets.',
    icon: Landmark,
  },
  {
    title: 'New Construction Lease-Up',
    text: 'Lease-up support that connects project delivery with effective market positioning.',
    icon: HardHat,
  },
  {
    title: 'Repositioning Plans',
    text: 'Operational and strategic plans designed to unlock value within existing assets.',
    icon: LineChart,
  },
  {
    title: 'Acquisition Due Diligence',
    text: 'Property-level review and operating insight to support informed acquisition decisions.',
    icon: ClipboardCheck,
  },
  {
    title: 'Development Consulting',
    text: 'Real estate and management expertise for new multifamily development and construction.',
    icon: BadgeDollarSign,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="
        bg-white
        px-4
        py-14

        sm:px-6
        sm:py-16

        lg:px-8
        lg:py-20
      "
      style={{
        fontFamily: 'DM Sans, sans-serif',
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        {/* ==================================================
            CENTERED INTRO
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
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
            mb-10
            flex
            max-w-[930px]
            flex-col
            items-center
            text-center

            sm:mb-12

            lg:mb-14
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
              Services
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
            Expertise across the
            <span className="block text-[#157E9A]">
              property lifecycle.
            </span>
          </h2>

          {/* description */}
          <p
            className="
              mt-5
              max-w-[720px]

              text-[14px]
              font-normal
              leading-[1.8]
              text-[#69757A]

              sm:text-[15px]

              lg:text-[16px]
            "
          >
            From day-to-day management through acquisition,
            repositioning, lease-up and development consulting, Trio
            brings experienced operators to every stage of the asset
            lifecycle.
          </p>

          <div
            className="
              mt-7
              h-px
              w-[70px]
              bg-[#073F58]/15
            "
          />
        </motion.div>

        {/* ==================================================
            SERVICES GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1

            border-l
            border-t
            border-[#E2E2DC]

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
                className="
                  group
                  relative
                  min-h-[240px]

                  border-b
                  border-r
                  border-[#E2E2DC]

                  bg-white

                  p-6

                  transition-colors
                  duration-300

                  hover:bg-[#073F58]

                  sm:p-7

                  lg:min-h-[255px]
                "
              >
                {/* top row */}
                <div
                  className="
                    flex
                    items-start
                    justify-between
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      bg-[#F1F5F5]

                      transition-colors
                      duration-300

                      group-hover:bg-white/10
                    "
                  >
                    <Icon
                      className="
                        h-[18px]
                        w-[18px]
                        text-[#157E9A]

                        transition-colors
                        duration-300

                        group-hover:text-[#D2C76F]
                      "
                    />
                  </div>

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#A1AAAD]

                      transition-colors
                      duration-300

                      group-hover:text-white/35
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* content */}
                <h3
                  className="
                    mt-8
                    max-w-[330px]

                    text-[20px]
                    font-[600]
                    leading-[1.18]
                    tracking-[-0.018em]
                    text-[#073F58]

                    transition-colors
                    duration-300

                    group-hover:text-white

                    sm:text-[22px]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[340px]

                    text-[12px]
                    leading-[1.75]
                    text-[#778286]

                    transition-colors
                    duration-300

                    group-hover:text-white/65

                    sm:text-[13px]
                  "
                >
                  {service.text}
                </p>

                {/* arrow */}
                <ArrowUpRight
                  className="
                    absolute
                    bottom-6
                    left-6

                    h-4
                    w-4
                    text-[#157E9A]

                    transition-all
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#D2C76F]

                    sm:bottom-7
                    sm:left-7
                  "
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}