import {
  Menu,
  X,
} from "lucide-react";

import {
  COLORS,
  FONT_HEAD,
  FONT_MONO,
} from "../PortfolioHelpers";

import { NAV_ITEMS } from "../../data/portfolioData";

type NavbarProps = {
  active: string;
  menuOpen: boolean;
  scrolled: boolean;
  onNavigate: (id: string) => void;
  onToggleMenu: () => void;
};

export default function Navbar({
  active,
  menuOpen,
  scrolled,
  onNavigate,
  onToggleMenu,
}: NavbarProps) {
  return (
    <nav
      style={{
        borderBottom: scrolled
          ? `1px solid ${COLORS.border}`
          : "1px solid transparent",

        background: scrolled
          ? `${COLORS.bg}D9`
          : "transparent",

        backdropFilter: scrolled
          ? "blur(16px)"
          : "none",
      }}
      className="fixed inset-x-0 top-0 z-50 py-4 transition-all duration-300"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5">
        {/* BRAND */}
        <button
          onClick={() => onNavigate("hero")}
          className="flex items-center gap-3"
        >
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              background: COLORS.surface,
            }}
            className="flex h-9 w-9 items-center justify-center rounded-xl"
          >
            <span
              style={{
                fontFamily: FONT_HEAD,
                color: COLORS.amber,
              }}
              className="text-sm font-bold"
            >
              M
            </span>
          </div>

          <div className="text-right leading-tight">
            <p
              style={{
                fontFamily: FONT_HEAD,
                color: COLORS.text1,
              }}
              className="text-sm font-bold"
            >
              محمد عيسى
            </p>

            <p
              style={{
                fontFamily: FONT_MONO,
                color: COLORS.text3,
              }}
              className="text-[9px]"
            >
              backend.developer()
            </p>
          </div>
        </button>

        {/* DESKTOP */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                onNavigate(item.id)
              }
              style={{
                fontFamily: FONT_HEAD,
                color:
                  active === item.id
                    ? COLORS.amber
                    : COLORS.text2,
              }}
              className="text-[13.5px] font-medium transition-colors hover:opacity-80"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* MOBILE */}
        <button
          onClick={onToggleMenu}
          style={{
            border: `1px solid ${COLORS.border}`,
            background: COLORS.surface,
            color: COLORS.text2,
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-label="menu"
        >
          {menuOpen ? (
            <X size={18} />
          ) : (
            <Menu size={18} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          style={{
            background: `${COLORS.bg}F5`,
            borderTop: `1px solid ${COLORS.border}`,
          }}
          className="mt-4 md:hidden"
        >
          <div className="flex flex-col items-center gap-6 py-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  onNavigate(item.id)
                }
                style={{
                  fontFamily: FONT_HEAD,
                  color:
                    active === item.id
                      ? COLORS.amber
                      : COLORS.text1,
                }}
                className="text-lg font-bold"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}