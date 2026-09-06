import { useEffect, useRef, useState } from "react";
import { COLORS, FONT_MONO } from "./PortfolioHelpers";

type TerminalProps = {
  onNavigate: (section: string) => void;
};

type TerminalLine = {
  type: "sys" | "in" | "out" | "err";
  text: string;
};

export default function Terminal({ onNavigate }: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "sys",
      text: "boot: developer-profile v1.0",
    },
    {
      type: "sys",
      text: "انقر على أحد الأوامر بالأسفل للتصفح:",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  // التمرير التلقائي للأسفل عند إضافة سطر جديد
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  function push(entries: TerminalLine[]) {
    setLines((prev) => [...prev, ...entries]);
  }

  function runCommand(cmd: string) {
    push([{ type: "in", text: cmd }]);

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    if (cmd === "whoami") {
      push([
        {
          type: "out",
          text: "محمد — Backend Developer، يتوسع نحو Full Stack.",
        },
      ]);
      return;
    }

    const navCommands = ["about", "skills", "projects", "contact"];
    if (navCommands.includes(cmd)) {
      push([
        {
          type: "out",
          text: `جارٍ الانتقال إلى '${cmd}' ...`,
        },
      ]);
      
      onNavigate(cmd);
      return;
    }
  }

  const lineColor: Record<TerminalLine["type"], string> = {
    sys: COLORS.text3,
    in: COLORS.text1,
    out: COLORS.text2,
    err: "#E48A8A",
  };

  // قائمة الأوامر التي ستظهر كأزرار
  const availableCommands = [
    { label: "نبذة عني", cmd: "about" },
    { label: "المهارات", cmd: "skills" },
    { label: "المشاريع", cmd: "projects" },
    { label: "تواصل معي", cmd: "contact" },
    { label: "من أنا؟", cmd: "whoami" },
    { label: "تنظيف الشاشة", cmd: "clear" },
  ];

  return (
    <div
      dir="ltr"
      style={{
        border: `1px solid ${COLORS.border}`,
        background: "#0D1117",
        borderRadius: 16,
      }}
      className="overflow-hidden shadow-2xl flex flex-col"
    >
      {/* HEADER */}
      <div
        style={{
          borderBottom: `1px solid ${COLORS.border}`,
          background: COLORS.surface,
        }}
        className="flex items-center gap-2 px-4 py-3"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#3A4550]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3A4550]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3A4550]" />

        <span
          style={{
            fontFamily: FONT_MONO,
            color: COLORS.text3,
          }}
          className="mr-2 text-[10.5px]"
        >
          mohamed@portfolio: ~
        </span>
      </div>

      {/* BODY (Terminal Output) */}
      <div
        ref={scrollRef}
        style={{
          fontFamily: FONT_MONO,
          height: 240, // تم تقليل الارتفاع قليلاً لترك مساحة للأزرار
        }}
        className="overflow-y-auto p-4 text-[12.5px] leading-relaxed"
      >
        {lines.map((line, index) => (
          <div
            key={index}
            style={{ color: lineColor[line.type] }}
            className="whitespace-pre-wrap mb-1"
          >
            {line.type === "in" && (
              <span style={{ color: COLORS.amber }}>❯ </span>
            )}
            {line.text}
          </div>
        ))}
      </div>

    {/* BUTTONS (Interactive Menu) */}
      <div
        dir="rtl"
        style={{
          borderTop: `1px solid ${COLORS.border}`,
          background: "#161b22",
        }}
        className="flex flex-wrap items-center justify-center gap-3 p-4"
      >
        {availableCommands.map((item) => (
          <button
            key={item.cmd}
            onClick={() => runCommand(item.cmd)}
            style={{
              backgroundColor: "#21262d",
              color: COLORS.text2,
              border: `1px solid ${COLORS.border}`,
            }}
            className="group cursor-pointer flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-500 hover:bg-[#30363d] hover:text-white hover:shadow-md active:scale-95 focus:outline-none"
          >
            <span>{item.label}</span>

            <span
              dir="ltr"
              style={{
                fontFamily: FONT_MONO,
                color: COLORS.text3,
                border: `1px solid ${COLORS.border}`,
                backgroundColor: "#0D1117", // لون خلفية أغمق ليبرز كأنه زر مستقل
              }}
              className="flex items-center justify-center rounded-md px-2 py-1 text-[10px] tracking-wider transition-colors group-hover:border-gray-500 group-hover:text-gray-300"
            >
              {item.cmd}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}