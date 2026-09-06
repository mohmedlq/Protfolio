import {
  ArrowUpRight,
  Terminal,
} from "lucide-react";

import {
  COLORS,
  FONT_HEAD,
  FONT_MONO,
} from "../PortfolioHelpers";

type FooterProps = {
  onNavigate: (section: string) => void;
};

export default function Footer({
  onNavigate,
}: FooterProps) {
  return (
    <footer
      style={{
        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between">
     

        <button
          onClick={() => onNavigate("hero")}
          style={{
            fontFamily: FONT_MONO,
            color: COLORS.text3,
          }}
          className="flex items-center gap-1 text-[10px] hover:opacity-80"
        >
          <Terminal size={11} />

          العودة للأعلى

          <ArrowUpRight size={11} />
        </button>
      </div>
    </footer>
  );
}