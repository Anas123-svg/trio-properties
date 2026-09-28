'use client';

import { motion } from 'motion/react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const geographyUrl =
  'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const markets = [
  {
    name: 'Hartford',
    state: 'CT',
    coordinates: [-72.6851, 41.7637] as [number, number],
  },
  {
    name: 'New Haven',
    state: 'CT',
    coordinates: [-72.9279, 41.3083] as [number, number],
  },
  {
    name: 'Stamford',
    state: 'CT',
    coordinates: [-73.5387, 41.0534] as [number, number],
  },
  {
    name: 'Fort Lauderdale',
    state: 'FL',
    coordinates: [-80.1373, 26.1224] as [number, number],
  },
  {
    name: 'Orlando',
    state: 'FL',
    coordinates: [-81.3792, 28.5383] as [number, number],
  },
  {
    name: 'Miami',
    state: 'FL',
    coordinates: [-80.1918, 25.7617] as [number, number],
  },
  {
    name: 'Charleston',
    state: 'SC',
    coordinates: [-79.9311, 32.7765] as [number, number],
  },
  {
    name: 'Nashville',
    state: 'TN',
    coordinates: [-86.7816, 36.1627] as [number, number],
  },
  {
    name: 'Dallas',
    state: 'TX',
    coordinates: [-96.797, 32.7767] as [number, number],
  },
  {
    name: 'Houston',
    state: 'TX',
    coordinates: [-95.3698, 29.7604] as [number, number],
  },
  {
    name: 'Alexandria',
    state: 'VA',
    coordinates: [-77.0469, 38.8048] as [number, number],
  },
  {
    name: 'Arlington',
    state: 'VA',
    coordinates: [-77.1068, 38.8816] as [number, number],
  },
];

export function TrustRibbon() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#073F58]
        px-4
        pt-10
        pb-6

        sm:px-6
        sm:pt-14
        sm:pb-8

        lg:px-8
        lg:pt-16
        lg:pb-10
      "
      style={{
        fontFamily: 'DM Sans, sans-serif',
      }}
    >
      {/* subtle atmospheric glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[40px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#157E9A]/10
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-[1400px]">
        <div
          className="
            grid
            grid-cols-1
            gap-12

            lg:grid-cols-[0.72fr_1.28fr]
            lg:items-center
            lg:gap-16

            xl:gap-24
          "
        >
          {/* ==================================================
              LEFT COPY
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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[540px]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D2C76F]" />

              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.19em]
                  text-[#D2C76F]

                  sm:text-[10px]
                "
              >
                Market Experience
              </p>
            </div>

            <h2
              className="
                max-w-[540px]

                text-[clamp(2.5rem,4.8vw,4.8rem)]
                font-[500]
                leading-[0.97]
                tracking-[-0.032em]
                text-white
              "
            >
              Experience across
              <span className="block text-[#8FC1CC]">
                growing markets.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[470px]

                text-[14px]
                leading-[1.8]
                text-white/58

                sm:text-[15px]
              "
            >
              Trio’s experience spans markets across Connecticut, Florida
              and key growth regions throughout the East Coast and Southeast.
            </p>

            {/* minimal market summary */}
            <div
              className="
                mt-8
                grid
                max-w-[430px]
                grid-cols-3

                border-y
                border-white/12

                py-5
              "
            >
              <div>
                <p
                  className="
                    text-[21px]
                    font-[700]
                    tracking-[-0.035em]
                    text-white
                  "
                >
                  12
                </p>

                <p
                  className="
                    mt-1
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-white/35
                  "
                >
                  Key Markets
                </p>
              </div>

              <div
                className="
                  border-l
                  border-white/12
                  pl-5
                "
              >
                <p
                  className="
                    text-[21px]
                    font-[700]
                    tracking-[-0.035em]
                    text-white
                  "
                >
                  6
                </p>

                <p
                  className="
                    mt-1
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-white/35
                  "
                >
                  States
                </p>
              </div>

              <div
                className="
                  border-l
                  border-white/12
                  pl-5
                "
              >
                <p
                  className="
                    text-[21px]
                    font-[700]
                    tracking-[-0.035em]
                    text-white
                  "
                >
                  SE
                </p>

                <p
                  className="
                    mt-1
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-white/35
                  "
                >
                  Primary Region
                </p>
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              MAP
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[420px]

              sm:min-h-[500px]

              lg:min-h-[560px]
            "
          >

            {/* map */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >
              <ComposableMap
                projection="geoAlbersUsa"
                width={800}
                height={500}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '540px',
                }}
              >
                <Geographies geography={geographyUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="rgba(255,255,255,0.055)"
                        stroke="rgba(255,255,255,0.18)"
                        strokeWidth={0.7}
                        style={{
                          default: {
                            outline: 'none',
                          },
                          hover: {
                            fill: 'rgba(21,126,154,0.20)',
                            outline: 'none',
                          },
                          pressed: {
                            outline: 'none',
                          },
                        } as any}
                      />
                    ))
                  }
                </Geographies>

                {markets.map((market) => (
                  <Marker
                    key={`${market.name}-${market.state}`}
                    coordinates={market.coordinates}
                  >
                    {/* outer pulse */}
                    <motion.circle
                      r={8}
                      fill="rgba(210,199,111,0.08)"
                      stroke="rgba(210,199,111,0.28)"
                      strokeWidth={1}
                      initial={{
                        opacity: 0.4,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: [0.25, 0.7, 0.25],
                        scale: [0.8, 1.25, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* actual marker */}
                    <circle
                      r={3.2}
                      fill="#D2C76F"
                      stroke="#073F58"
                      strokeWidth={1.5}
                    />
                  </Marker>
                ))}
              </ComposableMap>
            </div>

            {/* map key */}
            <div
              className="
                absolute
                bottom-3
                left-0

                flex
                items-center
                gap-3
              "
            >

            </div>
          </motion.div>
        </div>

        {/* ==================================================
            MINIMAL MARKET LIST
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            delay: 0.12,
          }}
          className="
            mt-8

            border-t
            border-white/12

            pt-6

            sm:mt-10
          "
        >
          <div
            className="
              overflow-hidden
            "
          >
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 28,
                ease: 'linear',
                repeat: Infinity,
              }}
              className="flex w-max gap-x-6 lg:gap-x-8"
            >
              {[...markets, ...markets].map((market, index) => (
                <div
                  key={`${market.name}-${market.state}-${index}`}
                  className="flex shrink-0 items-center gap-2"
                >
                  <span
                    className="
                      h-[4px]
                      w-[4px]
                      rounded-full
                      bg-[#D2C76F]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-medium
                      text-white/46

                      sm:text-[10px]
                    "
                  >
                    {market.name}, {market.state}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}