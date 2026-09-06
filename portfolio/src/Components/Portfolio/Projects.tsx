import { ArrowUpLeft, ExternalLink } from "lucide-react";
import { PROJECTS } from "../../data/portfolioData";
import {
  COLORS,
  FONT_HEAD,
  FONT_MONO,
  Eyebrow,
  GithubMark,
} from "../PortfolioHelpers";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 py-24"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center gap-3">
        <Eyebrow>أعمال مختارة</Eyebrow>

        <h2
          style={{ fontFamily: FONT_HEAD, color: COLORS.text1 }}
          className="text-3xl  font-black tracking-tight sm:text-4xl"
        >
          مشاريع بنيتها بشغف.
        </h2>

        <p
          style={{ color: COLORS.text3 }}
          className="max-w-xl  text-base leading-relaxed"
        >
          مشاريع عملية ركزت فيها على بناء الأنظمة، تصميم الـ APIs، التعامل مع البيانات المعقدة، وتقديم تجربة مستخدم سلسة.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            style={{
              background: COLORS.surface,
              borderColor: COLORS.border,
            }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Project Image Box */}
            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5">
              {/* Overlay for aesthetic blending */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-80" />
              
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Floating Accent Badge */}
              <div
                style={{ background: project.accent, fontFamily: FONT_MONO }}
                className="absolute right-4 top-4 z-20 rounded-full px-3 py-1 text-[10px] font-bold text-white shadow-lg"
              >
                {project.type}
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-center flex-col w-full gap-4">
                <div>
                  <h3
                    style={{ fontFamily: FONT_HEAD, color: COLORS.text1 }}
                    className=" text-xl text-center font-bold tracking-wide"
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{ fontFamily: FONT_MONO, color: COLORS.text3 }}
                    className="mt-1 text-xs font-medium"
                  >
                    الدور: {project.role}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex-1 space-y-4">
                <p style={{ color: COLORS.text2 }} className="text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Story/Highlight Box */}
                {project.story && (
                  <div
                    style={{
                      borderRight: `2px solid ${project.accent}50`,
                      background: `${project.accent}0A`,
                    }}
                    className="rounded-l-lg py-2 pr-4 pl-2"
                  >
                    <p style={{ color: COLORS.text3 }} className="text-xs leading-6 italic">
                      {project.story}
                    </p>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    style={{
                      border: `1px solid ${project.accent}20`,
                      color: COLORS.text2,
                      fontFamily: FONT_MONO,
                      background: "#0d1117",
                    }}
                    className="rounded-md px-2.5 py-1 text-[10px] font-medium transition-colors group-hover:border-opacity-50"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div
                style={{ borderColor: COLORS.border }}
                className="mt-6 flex items-center gap-4 border-t pt-5"
              >
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: COLORS.text1 }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#21262d] py-2.5 text-xs font-semibold transition-colors hover:bg-[#30363d]"
                  >
                    <ExternalLink size={14} />
                    عرض مباشر
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: COLORS.text2 }}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-transparent py-2.5 text-xs font-semibold transition-all hover:border-[#30363d] hover:bg-[#21262d]"
                >
                  <GithubMark size={14} />
                  الكود المصدري
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View All GitHub Link */}
      <div className="mt-16 flex justify-center">
        <a
          href="https://github.com/mohmedlq"
          target="_blank"
          rel="noreferrer"
          style={{
            border: `1px solid ${COLORS.border}`,
            color: COLORS.text2,
            fontFamily: FONT_HEAD,
            background: COLORS.surface,
          }}
          className="group inline-flex items-center gap-3 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 hover:border-gray-600 hover:text-white"
        >
          <GithubMark size={18} />
          استكشف باقي المشاريع على GitHub
          <ArrowUpLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </section>
  );
}