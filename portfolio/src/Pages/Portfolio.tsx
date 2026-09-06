import {
  useEffect,
  useRef,
  useState,
} from "react";

import Navbar from "../Components/Portfolio/NavBar";
import HeroSection from "../Components/Portfolio/Hero";
import AboutSection from "../Components/Portfolio/About";
import SkillsSection from "../Components/Portfolio/Skills";
import ProjectsSection from "../Components/Portfolio/Projects";
import ContactSection from "../Components/Portfolio/Contact";
import Footer from "../Components/Portfolio/Footer";

import {
  COLORS,
} from "../Components/PortfolioHelpers";

import {
  NAV_ITEMS,
} from "../data/portfolioData";

export default function Portfolio() {
  const [active, setActive] =
    useState("hero");

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const sectionRefs = useRef<
    Record<string, HTMLElement | null>
  >({});

  /* -------------------------------------------------- */
  /* SCROLL                                              */
  /* -------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* -------------------------------------------------- */
  /* ACTIVE SECTION                                     */
  /* -------------------------------------------------- */

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        {
          rootMargin:
            "-45% 0px -45% 0px",
        }
      );

    NAV_ITEMS.forEach((item) => {
      const element =
        sectionRefs.current[item.id];

      if (element) {
        observer.observe(element);
      }
    });

    return () =>
      observer.disconnect();
  }, []);

  /* -------------------------------------------------- */
  /* NAVIGATION                                         */
  /* -------------------------------------------------- */

  function goTo(id: string) {
    setMenuOpen(false);

    sectionRefs.current[
      id
    ]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div
      dir="rtl"
      style={{
        background: COLORS.bg,
        color: COLORS.text1,
      }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* ---------------------------------------------- */}
      {/* GLOBAL FONT + ANIMATION                         */}
      {/* ---------------------------------------------- */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500;700;800;900&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes floatOrb {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes packetX {
          0% {
            transform: translateX(-10vw);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            transform: translateX(110vw);
            opacity: 0;
          }
        }

        .orb {
          animation: floatOrb 9s ease-in-out infinite;
        }

        .packet {
          animation: packetX 16s linear infinite;
        }

        ::selection {
          background: ${COLORS.amber}55;
        }
      `}</style>

      {/* ---------------------------------------------- */}
      {/* BACKGROUND                                      */}
      {/* ---------------------------------------------- */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="orb absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            background: `${COLORS.amber}0D`,
          }}
        />

        <div
          className="orb absolute -left-32 top-[50%] h-[380px] w-[380px] rounded-full blur-3xl"
          style={{
            background: `${COLORS.teal}0D`,
            animationDelay: "2s",
          }}
        />

        <span
          className="packet absolute h-[2px] w-16 rounded-full"
          style={{
            top: "22%",
            background: `linear-gradient(90deg, transparent, ${COLORS.amber}66, transparent)`,
          }}
        />

        <span
          className="packet absolute h-[2px] w-16 rounded-full"
          style={{
            top: "68%",
            background: `linear-gradient(90deg, transparent, ${COLORS.teal}55, transparent)`,
            animationDelay: "6s",
          }}
        />
      </div>

      {/* ---------------------------------------------- */}
      {/* NAVBAR                                          */}
      {/* ---------------------------------------------- */}

      <Navbar
        active={active}
        menuOpen={menuOpen}
        scrolled={scrolled}
        onNavigate={goTo}
        onToggleMenu={() =>
          setMenuOpen((value) => !value)
        }
      />

      {/* ---------------------------------------------- */}
      {/* CONTENT                                         */}
      {/* ---------------------------------------------- */}

      <main className="relative z-10">
        <div
          ref={(element) => {
            sectionRefs.current.hero =
              element;
          }}
        >
          <HeroSection
            onNavigate={goTo}
          />
        </div>

        <div
          ref={(element) => {
            sectionRefs.current.about =
              element;
          }}
        >
          <AboutSection />
        </div>

        <div
          ref={(element) => {
            sectionRefs.current.skills =
              element;
          }}
        >
          <SkillsSection />
        </div>

        <div
          ref={(element) => {
            sectionRefs.current.projects =
              element;
          }}
        >
          <ProjectsSection />
        </div>

        <div
          ref={(element) => {
            sectionRefs.current.contact =
              element;
          }}
        >
          <ContactSection />
        </div>

        <Footer onNavigate={goTo} />
      </main>
    </div>
  );
}