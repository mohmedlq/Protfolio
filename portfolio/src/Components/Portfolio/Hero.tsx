import {
  ArrowLeft,
  ChevronDown,
} from "lucide-react";

import Terminal from "../Terminal";

import {
  COLORS,
  FONT_HEAD,
} from "../PortfolioHelpers";

import { GithubMark } from "../PortfolioHelpers";

type HeroSectionProps = {
  onNavigate: (section: string) => void;
};

export default function HeroSection({
  onNavigate,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:pt-40"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* CONTENT */}
        <div>
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              background: `${COLORS.surface}B3`,
            }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span
                style={{
                  background: `${COLORS.amber}99`,
                }}
                className="absolute inline-flex h-full w-full animate-ping rounded-full"
              />

              <span
                style={{
                  background: COLORS.amber,
                }}
                className="relative inline-flex h-2 w-2 rounded-full"
              />
            </span>

            <span
              style={{
                fontFamily: FONT_HEAD,
                color: COLORS.text2,
              }}
              className="text-[13px] font-medium"
            >
              متاح لفرص جديدة
            </span>
          </div>

          <h1
            style={{
              fontFamily: FONT_HEAD,
              color: COLORS.text1,
            }}
            className="max-w-xl text-[2rem] font-extrabold leading-[1.55] sm:text-4xl lg:text-[2.7rem]"
          >
            أبني الأنظمة من الداخل،
            <br />

            <span style={{ color: COLORS.amber }}>
              وأتوسع لأبني التجربة كاملة.
            </span>
          </h1>

          <p
            style={{
              color: COLORS.text2,
            }}
            className="mt-6 max-w-lg text-base leading-8 sm:text-lg"
          >
            أنا محمد، مطور برمجيات أركز على
            تطوير الـ Backend باستخدام C# و .NET،
            وأتوسع في React و TypeScript لبناء
            منتجات كاملة.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() =>
                onNavigate("projects")
              }
              style={{
                background: COLORS.amber,
                color: COLORS.bg,
                fontFamily: FONT_HEAD,
              }}
              className="group cursor-pointer inline-flex items-center gap-3 rounded-xl px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
            >
              استكشف مشاريعي

              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
            </button>

            <a
              href="https://github.com/mohmedlq"
              target="_blank"
              rel="noreferrer"
              style={{
                border: `1px solid ${COLORS.border}`,
                color: COLORS.text2,
                fontFamily: FONT_HEAD,
              }}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold hover:opacity-80"
            >
              <GithubMark size={16} />

              GitHub
            </a>
          </div>
        </div>

        {/* TERMINAL */}
        <Terminal onNavigate={onNavigate} />
      </div>

      <div className="mt-16 flex justify-center">
        <button
          onClick={() => onNavigate("about")}
          style={{ color: COLORS.text3 }}
          className="flex flex-col items-center gap-2"
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
            className="text-[10px]"
          >
            scroll
          </span>

          <ChevronDown
            size={16}
            className="animate-bounce"
          />
        </button>
      </div>
    </section>
  );
}