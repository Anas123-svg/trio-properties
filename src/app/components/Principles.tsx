'use client';

import { motion } from 'motion/react';

const principles = [
  {
    number: '01',
    title: 'Empower Talented Teams',
    text: 'Trust experienced people and give them the support to perform.',
  },
  {
    number: '02',
    title: 'Exceptional Tenant Service',
    text: 'Keep residents and tenants at the center of daily operations.',
  },
  {
    number: '03',
    title: 'Deliver Strong Results',
    text: 'Execute with discipline and focus on long-term performance.',
  },
];

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

        {/* INTRO */}
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
          <p
            className="
              mb-3
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#157E9A]
            "
          >
            Our Principles
          </p>

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

        {/* PRINCIPLES */}
        <div
          className="
            grid
            grid-cols-1
            border-t
            border-[#073F58]/12
            md:grid-cols-3
          "
        >
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className={`
                py-7
                md:px-8
                md:py-9
                lg:px-10

                ${index === 0 ? 'md:pl-0' : ''}
                ${index === principles.length - 1 ? 'md:pr-0' : ''}

                ${
                  index !== principles.length - 1
                    ? `
                      border-b border-[#073F58]/12
                      md:border-b-0
                      md:border-r
                    `
                    : ''
                }
              `}
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
                  max-w-[300px]
                  text-[20px]
                  font-[600]
                  leading-[1.15]
                  tracking-[-0.018em]
                  text-[#073F58]
                  lg:text-[22px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  max-w-[300px]
                  text-[12px]
                  leading-[1.7]
                  text-[#707B80]
                  sm:text-[13px]
                "
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}