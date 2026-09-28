'use client';

import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
} from 'motion/react';

const navItems = [
  'About Trio',
  'Communities',
  'Partners',
  'Services',
  'Resources',
  "What's New",
];

const sectionFor = (item: string) => {
  switch (item) {
    case 'About Trio':
      return 'about';

    case 'Communities':
      return 'communities';

    case 'Partners':
      return 'partner';

    case 'Services':
      return 'services';

    case 'Resources':
    case "What's New":
      return 'resources';

    default:
      return 'top';
  }
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const goTo = (id: string) => {
    const target = document.getElementById(id);

    if (target) {
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
    }

    setOpen(false);
  };

  useEffect(() => {
    const updateNavbar = () => {
      setScrolled(window.scrollY > 25);
    };

    updateNavbar();

    window.addEventListener('scroll', updateNavbar, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', updateNavbar);
    };
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`
        sticky
        top-0
        z-50
        h-[70px]
        border-b
        transition-all
        duration-300

        ${
          scrolled
            ? 'border-white/10 bg-[#073F58] shadow-[0_12px_35px_rgba(3,28,40,0.25)]'
            : 'border-white/10 bg-[#073F58]'
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-full
          w-full
          max-w-[1440px]
          items-center
          px-4

          sm:px-6

          lg:px-10

          xl:px-12
        "
      >
        {/* Logo */}
        <button
          onClick={() => goTo('top')}
          aria-label="Back to top"
          className="
            flex
            h-full
            shrink-0
            items-center
            pr-5

            sm:pr-7

            lg:pr-9
          "
        >
          <img
            src="/trio-logo.svg"
            alt="Trio Properties"
            className="
              h-[48px]
              w-auto
              object-contain

              sm:h-[51px]
            "
          />
        </button>

        {/* vertical divider */}
        <span
          className="
            hidden
            h-[25px]
            w-px
            bg-white/13

            lg:block
          "
        />

        {/* Desktop navigation */}
        <div
          className="
            ml-auto
            hidden
            h-full
            items-center
            gap-5

            lg:flex

            xl:gap-7

            2xl:gap-8
          "
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => goTo(sectionFor(item))}
              className="
                group
                relative
                flex
                h-full
                items-center
                whitespace-nowrap
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.11em]
                text-white/62
                transition-colors
                duration-300

                hover:text-white

                xl:text-[10px]
              "
              style={{
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              {item}

              <span
                className="
                  absolute
                  bottom-[17px]
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-[#D2C76F]
                  transition-all
                  duration-300

                  group-hover:w-full
                "
              />
            </button>
          ))}
        </div>

        {/* CTA divider */}
        <span
          className="
            ml-7
            hidden
            h-[25px]
            w-px
            bg-white/13

            lg:block
          "
        />

        {/* Desktop CTA */}
        <button
          onClick={() => goTo('contact')}
          className="
            group
            ml-6
            hidden
            h-[40px]
            shrink-0
            items-center
            justify-center
            gap-2.5
            bg-[#D2C76F]
            px-5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.1em]
            text-[#073F58]
            transition-all
            duration-300

            hover:bg-[#E1D97F]

            md:inline-flex

            lg:ml-6

            xl:px-6
            xl:text-[10px]
          "
        >
          Contact Trio

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
        </button>

        {/* Mobile menu */}
        <button
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
          className="
            ml-auto
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-white/15
            text-white
            transition-colors

            hover:bg-white/[0.06]

            lg:hidden
          "
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.22,
            }}
            className="
              absolute
              left-0
              right-0
              top-[70px]
              border-t
              border-white/10
              bg-[#073F58]
              px-5
              pb-6
              pt-3
              shadow-[0_25px_60px_rgba(0,0,0,0.28)]

              lg:hidden
            "
          >
            <div className="mx-auto max-w-[700px]">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.035,
                  }}
                  onClick={() => goTo(sectionFor(item))}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    py-4
                    text-left
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    text-white/78
                    transition-colors

                    hover:text-white
                  "
                >
                  {item}

                  <span className="text-[#D2C76F]">
                    0{index + 1}
                  </span>
                </motion.button>
              ))}

              <button
                onClick={() => goTo('contact')}
                className="
                  mt-5
                  flex
                  h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  bg-[#D2C76F]
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-[#073F58]
                "
              >
                Contact Trio

                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}