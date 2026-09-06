import { useEffect, useState } from "react";

// Ambient background made of a faint dot grid plus a handful of "packets"
// drifting along straight paths — a quiet nod to requests moving through a
// system, instead of a generic star field.

interface Packet {
  id: number;
  top: number;
  duration: number;
  delay: number;
  horizontal: boolean;
}

export default function DataFlowBackground() {
  const [packets, setPackets] = useState<Packet[]>([]);

  useEffect(() => {
    const count = 6;
    const generated: Packet[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 90 + 5,
      duration: Math.random() * 10 + 14,
      delay: Math.random() * 12,
      horizontal: Math.random() > 0.5,
    }));
    setPackets(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#AEB8B0 1px, transparent 1px), linear-gradient(90deg, #AEB8B0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {packets.map((p) =>
        p.horizontal ? (
          <span
            key={p.id}
            className="absolute h-[2px] w-16 animate-packet-x rounded-full bg-gradient-to-r from-transparent via-[#E3A75E]/50 to-transparent"
            style={{
              top: `${p.top}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ) : (
          <span
            key={p.id}
            className="absolute h-16 w-[2px] animate-packet-y rounded-full bg-gradient-to-b from-transparent via-[#5FC9B8]/40 to-transparent"
            style={{
              left: `${p.top}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        )
      )}

      {/* Tailwind cannot generate arbitrary keyframes, so they're declared globally here */}
      <style>{`
        @keyframes packet-x {
          0% { transform: translateX(-10vw); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(110vw); opacity: 0; }
        }
        @keyframes packet-y {
          0% { transform: translateY(-10vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
        .animate-packet-x { animation-name: packet-x; animation-timing-function: linear; animation-iteration-count: infinite; }
        .animate-packet-y { animation-name: packet-y; animation-timing-function: linear; animation-iteration-count: infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-packet-x, .animate-packet-y { animation: none; opacity: 0; }
        }
      `}</style>
    </div>
  );
}