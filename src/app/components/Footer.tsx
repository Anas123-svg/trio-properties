'use client';

import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#073F58] text-white"
      style={{
        fontFamily: 'DM Sans, sans-serif',
      }}
    >
      {/* ==========================================
          MAIN FOOTER
      ========================================== */}

      <div
        className="
          mx-auto
          max-w-[1400px]

          px-4
          py-11

          sm:px-6
          sm:py-12

          lg:px-8
          lg:py-14
        "
      >
        {/* TOP */}

        <div
          className="
            grid
            grid-cols-1
            gap-10

            lg:grid-cols-[1.15fr_.85fr_.85fr]
            lg:gap-16
          "
        >
          {/* BRAND */}

          <div className="max-w-[460px]">
            <img
              src="/trio-logo.svg"
              alt="Trio Properties"
              className="
                h-[64px]
                w-auto

                sm:h-[70px]
              "
            />

            <p
              className="
                mt-5
                max-w-[420px]

                text-[13px]
                leading-[1.8]
                text-white/55

                sm:text-[14px]
              "
            >
              Institutional property management and real estate expertise
              delivered with the responsiveness of a hands-on partner.
            </p>

            <a
              href="mailto:info@trioproperties.com"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2

                text-[9px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#D2C76F]
              "
            >
              Start a conversation

              <ArrowUpRight
                className="
                  h-3.5
                  w-3.5

                  transition-transform
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* CORPORATE OFFICE */}

          <div
            className="
              border-t
              border-white/12

              pt-5

              lg:border-t-0
              lg:pt-0
            "
          >
            <p
              className="
                mb-5

                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#D2C76F]
              "
            >
              Corporate Headquarters
            </p>

            <div className="space-y-4">
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <MapPin
                  className="
                    mt-[2px]
                    h-3.5
                    w-3.5
                    shrink-0
                    text-[#D2C76F]
                  "
                />

                <p
                  className="
                    text-[12px]
                    leading-[1.7]
                    text-white/65

                    sm:text-[13px]
                  "
                >
                  624 Hebron Avenue
                  <br />
                  Building 3, Suite 1
                  <br />
                  Glastonbury, CT 06033
                </p>
              </div>

              <a
                href="tel:8604301966"
                className="
                  flex
                  items-center
                  gap-3

                  text-[12px]
                  text-white/65

                  transition-colors
                  duration-200

                  hover:text-white

                  sm:text-[13px]
                "
              >
                <Phone className="h-3.5 w-3.5 text-[#D2C76F]" />
                860.430.1966
              </a>

              <a
                href="mailto:info@trioproperties.com"
                className="
                  flex
                  items-center
                  gap-3

                  text-[12px]
                  text-white/65

                  transition-colors
                  duration-200

                  hover:text-white

                  sm:text-[13px]
                "
              >
                <Mail className="h-3.5 w-3.5 text-[#D2C76F]" />
                info@trioproperties.com
              </a>
            </div>
          </div>

          {/* SOUTHEAST OFFICE */}

          <div
            className="
              border-t
              border-white/12

              pt-5

              lg:border-t-0
              lg:pt-0
            "
          >
            <p
              className="
                mb-5

                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#D2C76F]
              "
            >
              Southeast Office
            </p>

            <div className="space-y-4">
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <MapPin
                  className="
                    mt-[2px]
                    h-3.5
                    w-3.5
                    shrink-0
                    text-[#D2C76F]
                  "
                />

                <p
                  className="
                    text-[12px]
                    leading-[1.7]
                    text-white/65

                    sm:text-[13px]
                  "
                >
                  2054 Vista Parkway
                  <br />
                  Suite 400
                  <br />
                  West Palm Beach, FL 33411
                </p>
              </div>

              <a
                href="tel:5614246500"
                className="
                  flex
                  items-center
                  gap-3

                  text-[12px]
                  text-white/65

                  transition-colors
                  duration-200

                  hover:text-white

                  sm:text-[13px]
                "
              >
                <Phone className="h-3.5 w-3.5 text-[#D2C76F]" />
                561.424.6500
              </a>

              <a
                href="mailto:info@trioproperties.com"
                className="
                  flex
                  items-center
                  gap-3

                  text-[12px]
                  text-white/65

                  transition-colors
                  duration-200

                  hover:text-white

                  sm:text-[13px]
                "
              >
                <Mail className="h-3.5 w-3.5 text-[#D2C76F]" />
                info@trioproperties.com
              </a>
            </div>
          </div>
        </div>

        {/* ==========================================
            DIVIDER / BOTTOM
        ========================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-4

            border-t
            border-white/12

            pt-5

            sm:flex-row
            sm:items-center
            sm:justify-between

            lg:mt-14
          "
        >
          <p
            className="
              text-[8px]
              font-medium
              tracking-[0.04em]
              text-white/35

              sm:text-[9px]
            "
          >
            © 2026 TRIO Properties, LLC. All rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
            "
          >
            <span
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white/28
              "
            >
              Property Management
            </span>

            <span className="h-[3px] w-[3px] rounded-full bg-[#D2C76F]/60" />

            <span
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white/28
              "
            >
              Development
            </span>

            <span className="h-[3px] w-[3px] rounded-full bg-[#D2C76F]/60" />

            <span
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white/28
              "
            >
              Investment
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}