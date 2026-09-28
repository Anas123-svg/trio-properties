'use client';

import { motion } from 'motion/react';
import {
  Users,
  Check,
  Star,
  MessageCircle,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';

const principles = [
  {
    number: '01',
    title: 'Empower Talented Teams',
    text: 'Trust experienced people and give them the support to perform.',
    type: 'team',
  },
  {
    number: '02',
    title: 'Exceptional Tenant Service',
    text: 'Keep residents and tenants at the center of daily operations.',
    type: 'service',
  },
  {
    number: '03',
    title: 'Deliver Strong Results',
    text: 'Execute with discipline and focus on long-term performance.',
    type: 'results',
  },
];

function TeamVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Back panel */}
      <div
        className="
          absolute
          left-[10%]
          top-[16%]
          w-[68%]

          border
          border-[#D7D5CC]
          bg-white

          shadow-[0_15px_35px_rgba(7,63,88,0.08)]

          rotate-[-2deg]
        "
      >
        <div
          className="
            flex
            h-8
            items-center
            gap-1.5

            bg-[#073F58]

            px-3
          "
        >
          <span className="h-2 w-2 rounded-full bg-[#D2C76F]" />
          <span className="h-1.5 w-8 bg-white/35" />
          <span className="h-1.5 w-5 bg-white/20" />
        </div>

        <div className="p-4">
          <p
            className="
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#8A9294]
            "
          >
            Property Team
          </p>

          <div className="mt-3 space-y-2">
            {[
              ['AM', 'Asset Manager'],
              ['PM', 'Property Manager'],
              ['RM', 'Resident Services'],
            ].map(([initials, role]) => (
              <div
                key={role}
                className="
                  flex
                  items-center
                  gap-2.5

                  border-b
                  border-[#E8E6E0]

                  pb-2
                "
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center

                    bg-[#DDE9E9]

                    text-[7px]
                    font-bold
                    text-[#073F58]
                  "
                >
                  {initials}
                </span>

                <div className="flex-1">
                  <div className="h-1.5 w-[68%] bg-[#D9D8D2]" />

                  <p className="mt-1 text-[6px] text-[#92999B]">
                    {role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground badge */}
      <div
        className="
          absolute
          bottom-[10%]
          right-[8%]

          w-[42%]

          bg-[#157E9A]

          p-4

          text-white

          shadow-[0_16px_30px_rgba(7,63,88,0.18)]

          rotate-[2deg]
        "
      >
        <Users className="h-4 w-4 text-[#D2C76F]" />

        <p
          className="
            mt-5
            text-[7px]
            uppercase
            tracking-[0.13em]
            text-white/55
          "
        >
          Team Status
        </p>

        <p
          className="
            mt-1
            text-[18px]
            font-[700]
            leading-none
            tracking-[-0.04em]
          "
        >
          Aligned
        </p>

        <div
          className="
            mt-3
            flex
            items-center
            gap-1.5

            text-[6px]
            text-white/65
          "
        >
          <Check className="h-2.5 w-2.5 text-[#D2C76F]" />
          Roles & responsibility clear
        </div>
      </div>
    </div>
  );
}

function ServiceVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Main service panel */}
      <div
        className="
          absolute
          left-[9%]
          top-[15%]

          w-[70%]

          border
          border-[#D7D5CC]

          bg-white

          shadow-[0_15px_35px_rgba(7,63,88,0.08)]

          rotate-[1.5deg]
        "
      >
        <div
          className="
            flex
            h-8
            items-center
            gap-1.5

            bg-[#073F58]

            px-3
          "
        >
          <span className="h-2 w-2 rounded-full bg-[#D2C76F]" />
          <span className="h-1.5 w-8 bg-white/35" />
          <span className="h-1.5 w-5 bg-white/20" />
        </div>

        <div className="p-4">
          <p
            className="
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#8A9294]
            "
          >
            Resident Request
          </p>

          <div
            className="
              mt-3

              border
              border-[#E2E0D9]

              bg-[#F7F6F2]

              p-3
            "
          >
            <div className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-3.5 w-3.5 text-[#157E9A]" />

              <div className="flex-1">
                <div className="h-1.5 w-[74%] bg-[#CACBC7]" />
                <div className="mt-2 h-1.5 w-[88%] bg-[#DDDDD7]" />
                <div className="mt-1.5 h-1.5 w-[60%] bg-[#DDDDD7]" />
              </div>
            </div>
          </div>

          <div
            className="
              mt-3
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                bg-[#E5F0EF]
                px-2
                py-1

                text-[6px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#157E9A]
              "
            >
              Resolved
            </span>

            <span className="text-[6px] text-[#959B9D]">
              Response: 18 min
            </span>
          </div>
        </div>
      </div>

      {/* Rating card */}
      <div
        className="
          absolute
          bottom-[9%]
          right-[7%]

          w-[40%]

          bg-[#D2C76F]

          p-4

          text-[#073F58]

          shadow-[0_16px_30px_rgba(7,63,88,0.13)]

          rotate-[-2deg]
        "
      >
        <p
          className="
            text-[6px]
            font-bold
            uppercase
            tracking-[0.13em]
            text-[#073F58]/55
          "
        >
          Resident Experience
        </p>

        <div className="mt-3 flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="
                h-3
                w-3
                fill-[#073F58]
                text-[#073F58]
              "
            />
          ))}
        </div>

        <p
          className="
            mt-3
            text-[15px]
            font-[700]
            leading-none
            tracking-[-0.035em]
          "
        >
          Service first
        </p>
      </div>
    </div>
  );
}

function ResultsVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Chart panel */}
      <div
        className="
          absolute
          left-[8%]
          top-[14%]

          w-[72%]

          border
          border-[#D7D5CC]

          bg-white

          shadow-[0_15px_35px_rgba(7,63,88,0.08)]

          rotate-[-1deg]
        "
      >
        <div
          className="
            flex
            h-8
            items-center
            gap-1.5

            bg-[#073F58]

            px-3
          "
        >
          <span className="h-2 w-2 rounded-full bg-[#D2C76F]" />
          <span className="h-1.5 w-8 bg-white/35" />
          <span className="h-1.5 w-5 bg-white/20" />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between">
            <p
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#8A9294]
              "
            >
              Property Performance
            </p>

            <TrendingUp className="h-3.5 w-3.5 text-[#157E9A]" />
          </div>

          {/* mini chart */}
          <div
            className="
              mt-5
              flex
              h-[82px]
              items-end
              gap-2

              border-b
              border-[#D9D8D2]
            "
          >
            {[32, 43, 39, 57, 66, 79].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="
                  flex-1
                  bg-[#157E9A]
                "
              />
            ))}
          </div>
        </div>
      </div>

      {/* KPI card */}
      <div
        className="
          absolute
          bottom-[9%]
          right-[7%]

          w-[42%]

          bg-[#073F58]

          p-4

          text-white

          shadow-[0_16px_30px_rgba(7,63,88,0.18)]

          rotate-[2deg]
        "
      >
        <p
          className="
            text-[6px]
            font-semibold
            uppercase
            tracking-[0.13em]
            text-white/45
          "
        >
          Performance
        </p>

        <p
          className="
            mt-2
            text-[21px]
            font-[700]
            leading-none
            tracking-[-0.05em]
          "
        >
          +18%
        </p>

        <p className="mt-2 text-[6px] leading-[1.45] text-white/50">
          Improved asset performance
        </p>

        <div
          className="
            mt-3
            flex
            items-center
            gap-1

            text-[6px]
            font-semibold
            text-[#D2C76F]
          "
        >
          Long-term growth
          <ArrowUpRight className="h-2.5 w-2.5" />
        </div>
      </div>
    </div>
  );
}

export function Principles() {
  return (
    <section
      id="about"
      className="
        bg-[#F3F1EC]

        px-4
        py-12

        sm:px-6
        sm:py-14

        lg:px-8
        lg:py-16
      "
      style={{
        fontFamily: 'DM Sans, sans-serif',
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        {/* ==================================================
            INTRO
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-10
            max-w-[760px]
            text-center

            sm:mb-12
          "
        >
          <div
            className="
              mb-3
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-7 bg-[#D2C76F]" />

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#157E9A]
              "
            >
              Our Principles
            </p>

            <span className="h-px w-7 bg-[#D2C76F]" />
          </div>

          <h2
            className="
              text-[clamp(2.2rem,4.5vw,4rem)]
              font-[500]
              leading-[0.98]
              tracking-[-0.03em]
              text-[#073F58]
            "
          >
            Simple principles.

            <span className="block text-[#157E9A]">
              Consistent results.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[500px]

              text-[13px]
              leading-[1.7]
              text-[#6B777B]

              sm:text-[14px]
            "
          >
            A focused approach to people, service and property performance.
          </p>
        </motion.div>

        {/* ==================================================
            PROPERTY-INTELLIGENCE-STYLE CARDS
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4

            md:grid-cols-3
          "
        >
          {principles.map((item, index) => (
            <motion.article
              key={item.title}
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
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                overflow-hidden

                border
                border-[#D9D7CF]

                bg-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_20px_45px_rgba(7,63,88,0.08)]
              "
            >
              {/* ======================================
                  TEXT CONTENT
              ====================================== */}

              <div
                className="
                  flex
                  min-h-[205px]
                  flex-col

                  px-6
                  py-6

                  sm:px-7
                  sm:py-7

                  lg:min-h-[220px]
                  lg:px-8
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.14em]
                    text-[#157E9A]
                  "
                >
                  {item.number}
                </span>

                <h3
                  className="
                    mt-5
                    max-w-[310px]

                    text-[21px]
                    font-[600]
                    leading-[1.14]
                    tracking-[-0.022em]
                    text-[#073F58]

                    lg:text-[23px]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[310px]

                    text-[12px]
                    leading-[1.7]
                    text-[#707B80]

                    sm:text-[13px]
                  "
                >
                  {item.text}
                </p>

                <div
                  className="
                    mt-auto
                    pt-5
                  "
                >
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2

                      border-b
                      border-[#073F58]/25

                      pb-1

                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.11em]
                      text-[#073F58]
                    "
                  >
                    Our approach
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* ======================================
                  VISUAL AREA
              ====================================== */}

              <div
                className="
                  relative
                  h-[245px]

                  border-t
                  border-[#DEDCD4]

                  bg-[#EEECE5]

                  sm:h-[260px]

                  lg:h-[280px]
                "
              >
                {item.type === 'team' && <TeamVisual />}
                {item.type === 'service' && <ServiceVisual />}
                {item.type === 'results' && <ResultsVisual />}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}