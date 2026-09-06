import { useState } from "react";
import {
  Server,
  Globe2,
  Database,
  Layers3,
  Terminal as TerminalIcon,
  Code2,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

import { SKILL_LAYERS } from "../../data/portfolioData";
import {
  COLORS,
  FONT_HEAD,
  FONT_MONO,
  Eyebrow,
} from "../PortfolioHelpers";

const ICONS = [Server, Globe2, Database, Layers3, Cpu, Code2];

export default function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-3">
        <Eyebrow>المهارات والتقنيات</Eyebrow>
        
        <h2
          style={{ fontFamily: FONT_HEAD, color: COLORS.text1 }}
          className="text-3xl font-black tracking-tight sm:text-4xl"
        >
          الأدوات والتقنيات التي أعتمد عليها
        </h2>

        <p
          style={{ color: COLORS.text3 }}
          className="max-w-xl text-base leading-relaxed"
        >
          بنية برمجية متكاملة تبدأ من تصميم قواعد البيانات والـ API حتى واجهات المستخدم الحديثة والأداء العالي.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {SKILL_LAYERS.map((skill, index) => {
          const IconComponent = ICONS[index % ICONS.length] || TerminalIcon;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={skill.title || index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                borderColor: isHovered ? skill.accent : COLORS.border,
                background: COLORS.surface,
                boxShadow: isHovered
                  ? `0 10px 30px -10px ${skill.accent}25`
                  : "none",
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 ease-out"
            >
              {/* Background Accent Glow */}
              <div
                style={{
                  background: `radial-gradient(circle at top right, ${skill.accent}15, transparent 70%)`,
                }}
                className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      style={{
                        border: `1px solid ${skill.accent}40`,
                        background: `${skill.accent}15`,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    >
                      <IconComponent
                        size={22}
                        style={{ color: skill.accent }}
                      />
                    </div>

                    <div>
                      <h3
                        style={{ fontFamily: FONT_HEAD, color: COLORS.text1 }}
                        className="text-lg font-bold tracking-wide"
                      >
                        {skill.title}
                      </h3>
                      <span
                        style={{ fontFamily: FONT_MONO, color: COLORS.text3 }}
                        className="text-xs font-medium tracking-wider uppercase opacity-80"
                      >
                        {skill.tag}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    style={{ color: COLORS.text3 }}
                    className="translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </div>

                {/* Description */}
                <p
                  style={{ color: COLORS.text2 }}
                  className="mt-4 text-sm leading-relaxed"
                >
                  {skill.desc}
                </p>
              </div>

              {/* Technologies Pills */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((technology) => (
                    <span
                      key={technology}
                      style={{
                        border: `1px solid ${skill.accent}30`,
                        background: isHovered ? `${skill.accent}18` : "#0D1117",
                        color: isHovered ? COLORS.text1 : skill.accent,
                        fontFamily: FONT_MONO,
                      }}
                      className="rounded-lg px-2.5 py-1 text-xs font-medium transition-colors duration-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}