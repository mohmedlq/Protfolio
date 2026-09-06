import {
  Server,
  Code2,
  LayoutTemplate,
} from "lucide-react";

import {
  COLORS,
  FONT_HEAD,
  FONT_MONO,
  Eyebrow,
} from "../PortfolioHelpers";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        borderTop: `1px solid ${COLORS.border}`,
        borderBottom: `1px solid ${COLORS.border}`,
        background: "#0C1015",
      }}
      className="relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 opacity-20 blur-[120px]"
           style={{ background: `radial-gradient(circle, ${COLORS.amber}30, transparent 70%)` }} 
      />

      <div className="mx-auto max-w-6xl px-5 py-24">
        
        {/* Header Section (Centered) */}
        <div className="flex flex-col items-center text-center gap-4">
          <Eyebrow>نبذة عني</Eyebrow>

          <h2
            style={{ fontFamily: FONT_HEAD, color: COLORS.text1 }}
            className="text-3xl font-black tracking-tight sm:text-4xl"
          >
            لا أكتب الكود فقط، بل <span style={{ color: COLORS.amber }}>أبني أنظمة</span>.
          </h2>

          <p
            style={{ color: COLORS.text2 }}
            className="mt-2 max-w-2xl text-base leading-relaxed sm:text-lg"
          >
            مطور برمجيات أهتم بهندسة النظم وحل المشاكل المعقدة. تتنوع خبرتي بين بناء الـ 
            <span style={{ fontFamily: FONT_MONO, color: COLORS.text1 }} className="mx-1 font-bold">RESTful APIs</span> 
            المتينة، وتطبيق هياكل البيانات لتحسين الأداء، وصولاً إلى تصميم واجهات مستخدم تفاعلية. أؤمن بأن البرمجة أداة لخلق تأثير حقيقي.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <AboutCard
            icon={<Server size={22} />}
            title="هندسة الـ Backend"
            description="تصميم وبناء واجهات برمجة تطبيقات (APIs) وهيكلة قواعد بيانات متينة وقابلة للتوسع باستخدام C# وتقنيات الخوادم الحديثة."
          />

          <AboutCard
            icon={<Code2 size={22} />}
            title="المنطق والخوارزميات"
            description="تطبيق مفاهيم البرمجة الكائنية (OOP) وهياكل البيانات لبناء حلول برمجية فعّالة، سواء في تطبيقات الويب أو الأنظمة المدمجة."
          />

          <AboutCard
            icon={<LayoutTemplate size={22} />}
            title="واجهات تفاعلية"
            description="تحويل الأفكار إلى واجهات مرئية باستخدام React، مع الاهتمام بأدق تفاصيل تجربة المستخدم والتجاوب مع مختلف الشاشات."
          />
        </div>
      </div>
    </section>
  );
}

type AboutCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function AboutCard({ icon, title, description }: AboutCardProps) {
  return (
    <div
      style={{
        border: `1px solid ${COLORS.border}`,
        background: `${COLORS.surface}80`, // Slightly transparent background
      }}
      className="group relative flex flex-col items-center rounded-3xl p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#161b22] hover:shadow-xl"
    >
      {/* Icon Wrapper with glowing effect on hover */}
      <div 
        style={{ color: COLORS.amber, background: `${COLORS.amber}15` }}
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
      >
        {icon}
      </div>

      <h3
        style={{ fontFamily: FONT_HEAD, color: COLORS.text1 }}
        className="text-lg font-bold"
      >
        {title}
      </h3>

      <p
        style={{ color: COLORS.text3 }}
        className="mt-3 text-sm leading-relaxed"
      >
        {description}
      </p>
    </div>
  );
}