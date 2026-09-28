'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Trio brings a hands-on approach to management — clear communication, experienced teams and real attention to the asset.',
    role: 'Property Owner',
    context: 'Multifamily portfolio',
  },
  {
    quote:
      'The team understands the balance between resident experience and owner performance. They stay close to the details and move quickly.',
    role: 'Investment Partner',
    context: 'Owner representation',
  },
  {
    quote:
      'From transition through day-to-day operations, Trio approaches the property like an owner and a long-term partner.',
    role: 'Development Partner',
    context: 'Lease-up & operations',
  },
];

export function Testimonials() {
  return (
    <section
      className="
        overflow-hidden
        bg-[#F3F1EC]

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
        {/* ==========================================
            CENTERED INTRO
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
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
            max-w-[900px]
            text-center

            sm:mb-12
          "
        >
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
              Client Perspectives
            </p>

            <span className="h-px w-8 bg-[#D2C76F]" />
          </div>

          <h2
            className="
              text-[clamp(2.6rem,6vw,5rem)]
              font-[500]
              leading-[0.96]
              tracking-[-0.032em]
              text-[#073F58]
            "
          >
            Trusted in the details.
            <span className="block text-[#157E9A]">
              Valued for the partnership.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]

              text-[14px]
              leading-[1.8]
              text-[#6D787C]

              sm:text-[15px]
            "
          >
            Long-term relationships built through responsive service,
            experienced teams and consistent execution.
          </p>
        </motion.div>

        {/* ==========================================
            TESTIMONIAL CARDS
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4

            md:grid-cols-3
          "
        >
          {testimonials.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                flex
                min-h-[280px]
                flex-col
                justify-between
                overflow-hidden

                bg-[#073F58]

                p-6

                transition-all
                duration-300

                hover:-translate-y-1

                sm:p-7

                lg:min-h-[300px]
                lg:p-8
              "
            >
              {/* subtle top accent */}
              <span
                className="
                  absolute
                  left-0
                  top-0

                  h-[2px]
                  w-0

                  bg-[#D2C76F]

                  transition-all
                  duration-500

                  group-hover:w-full
                "
              />

              {/* quote */}
              <div>
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <Quote
                    className="
                      h-6
                      w-6
                      text-[#D2C76F]
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      tracking-[0.14em]
                      text-white/20
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <blockquote
                  className="
                    mt-6
                    max-w-[360px]

                    text-[18px]
                    font-[600]
                    leading-[1.5]
                    tracking-[-0.025em]
                    text-white

                    sm:text-[19px]

                    lg:text-[20px]
                  "
                >
                  “{item.quote}”
                </blockquote>
              </div>

              {/* footer */}
              <div
                className="
                  mt-8
                  border-t
                  border-white/15

                  pt-5
                "
              >
                <p
                  className="
                    text-[11px]
                    font-[700]
                    text-white
                  "
                >
                  {item.role}
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-white/45
                  "
                >
                  {item.context}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ==========================================
            DISCLAIMER
        ========================================== */}

        <p
          className="
            mt-5
            text-center

            text-[7px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-[#A7ADAE]
          "
        >
          Sample presentation copy — replace with verified testimonials
          before launch
        </p>
      </div>
    </section>
  );
}