import type { ReactNode } from "react";

export const COLORS = {
  bg: "#0A0D11",
  surface: "#10151B",
  surface2: "#151B22",

  border: "#212933",
  borderHover: "#2E3944",

  text1: "#EDEFF1",
  text2: "#9BA5B0",
  text3: "#6B7580",

  amber: "#E3A75E",
  amberSoft: "#EFB876",

  teal: "#5FC9B8",
  slate: "#8FA0AF",
} as const;

export const FONT_HEAD = "'Tajawal', sans-serif";
export const FONT_BODY = "'IBM Plex Sans Arabic', sans-serif";
export const FONT_MONO = "'JetBrains Mono', monospace";

type EyebrowProps = {
  children: ReactNode;
};

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        style={{
          border: `2px solid ${COLORS.amber}`,
          background: COLORS.bg,
        }}
        className="h-2.5 w-2.5 rounded-full"
      />

      <span
        style={{
          fontFamily: FONT_MONO,
          color: COLORS.text3,
        }}
        className="text-[11px]"
      >
        {children}
      </span>
    </div>
  );
}

type GithubMarkProps = {
  size?: number;
};

export function GithubMark({
  size = 16,
}: GithubMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

type LinkedinMarkProps = {
  size?: number;
};

export function LinkedinMark({
  size = 16,
}: LinkedinMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" />
    </svg>
  );
}

type WhatsappMarkProps = {
  size?: number;
};

export function WhatsappMark({
  size = 16,
}: WhatsappMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M12.02 2C6.5 2 2.03 6.46 2.03 12c0 1.77.46 3.42 1.27 4.86L2 22l5.3-1.28A9.94 9.94 0 0 0 12.02 22C17.55 22 22 17.54 22 12S17.55 2 12.02 2Zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.02.28-3.4-.71-2.87-1.2-4.72-4.12-4.86-4.31-.14-.19-1.16-1.55-1.16-2.96 0-1.4.73-2.09 1-2.38.24-.26.53-.32.71-.32.18 0 .35 0 .5.01.17.01.38-.06.6.45.24.56.8 1.94.87 2.08.07.14.11.3.02.48-.09.19-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.68-.79.87-1.06.18-.28.37-.23.61-.14.25.09 1.6.75 1.87.89.28.14.46.21.53.32.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}