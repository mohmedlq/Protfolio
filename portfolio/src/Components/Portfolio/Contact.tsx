import {
  Mail,
  Phone,
  MapPin,
  Download,
  Check,
  Copy,
} from "lucide-react";

import { useState } from "react";

import { CONTACTS } from "../../data/portfolioData";

import {
  COLORS,
  FONT_HEAD,
  FONT_MONO,
  Eyebrow,
  GithubMark,
  LinkedinMark,
  WhatsappMark,
} from "../PortfolioHelpers";

export default function ContactSection() {
  function handleDownloadCV() {
    const link = document.createElement("a");

    link.href = "/MohamedIssa_CV";
    link.download = "Mohmed-CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-20"
    >
      <div
        style={{
          border: `1px solid ${COLORS.border}`,
          background: COLORS.surface,
        }}
        className="rounded-[1.75rem] p-8 sm:p-12"
      >
        {/* HEADER */}
        <Eyebrow>لنتواصل</Eyebrow>

        <h2
          style={{
            fontFamily: FONT_HEAD,
            color: COLORS.text1,
          }}
          className="mt-4 max-w-xl text-2xl font-extrabold leading-[1.6] sm:text-3xl"
        >
          فكرة، مشروع، أو حتى{" "}
          <span style={{ color: COLORS.amber }}>
            مجرد نقاش تقني.
          </span>
        </h2>

        <p
          style={{
            color: COLORS.text3,
          }}
          className="mt-4 max-w-lg text-sm leading-7"
        >
          إذا كنت تريد التعرف أكثر على مشاريعي
          أو مناقشة فكرة أو فرصة، يسعدني التواصل.
        </p>

        {/* SOCIAL + CV */}
        <div className="mt-8 flex flex-wrap gap-3">
          {/* WHATSAPP */}
          <a
            href={CONTACTS.whatsapp}
            target="_blank"
            rel="noreferrer"
            style={{
              background: COLORS.amber,
              color: COLORS.bg,
              fontFamily: FONT_HEAD,
            }}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
          >
            <WhatsappMark size={16} />

            تواصل معي
          </a>

          {/* GITHUB */}
          <a
            href={CONTACTS.github}
            target="_blank"
            rel="noreferrer"
            style={{
              border: `1px solid ${COLORS.border}`,
              color: COLORS.text2,
              fontFamily: FONT_HEAD,
            }}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:opacity-80"
          >
            <GithubMark size={16} />

            GitHub
          </a>

          {/* LINKEDIN */}
          <a
            href={CONTACTS.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              border: `1px solid ${COLORS.border}`,
              color: COLORS.text2,
              fontFamily: FONT_HEAD,
            }}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:opacity-80"
          >
            <LinkedinMark size={16} />

            LinkedIn
          </a>

          {/* DOWNLOAD CV 
        <button
  type="button"
  onClick={handleDownloadCV}
  style={{
    border: `1px solid ${COLORS.border}`,
    color: COLORS.text2,
    fontFamily: FONT_HEAD,
  }}
  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:opacity-80"
>
  <Download
    size={16}
    style={{
      color: COLORS.amber,
    }}
  />

  تحميل CV
</button>
*/}
        </div>

        {/* CONTACT DETAILS */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <CopyField
            icon={Mail}
            label="Email"
            value={CONTACTS.email}
          />

          <CopyField
            icon={Phone}
            label="Phone"
            value={CONTACTS.phone}
            href={CONTACTS.phoneHref}
          />

          <CopyField
            icon={MapPin}
            label="Location"
            value={CONTACTS.location}
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COPY FIELD
========================================================= */

type CopyFieldProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
};

function CopyField({
  icon: Icon,
  label,
  value,
  href,
}: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      style={{
        border: `1px solid ${COLORS.border}`,
        background: COLORS.bg,
      }}
      className="
        flex
        min-w-0
        items-center
        justify-between
        gap-3
        rounded-2xl
        p-5
      "
    >
      {/* LEFT CONTENT */}
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {/* ICON */}
        <div
          style={{
            border: `1px solid ${COLORS.border}`,
            background: COLORS.surface2,
          }}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
          "
        >
          <Icon
            size={17}
            style={{
              color: COLORS.amber,
            }}
          />
        </div>

        {/* TEXT */}
        <div className="min-w-0 flex-1">
          <p
            style={{
              fontFamily: FONT_MONO,
              color: COLORS.text3,
            }}
            className="text-[9.5px]"
          >
            {label}
          </p>

          {href ? (
            <a
              href={href}
              style={{
                color: COLORS.text2,
              }}
              className="
                mt-1
                block
                max-w-full
                overflow-hidden
                text-ellipsis
                break-all
                text-xs
                leading-5
                hover:opacity-80
              "
            >
              {value}
            </a>
          ) : (
            <p
              style={{
                color: COLORS.text2,
              }}
              className="
                mt-1
                max-w-full
                overflow-hidden
                break-all
                text-xs
                leading-5
              "
            >
              {value}
            </p>
          )}
        </div>
      </div>

      {/* COPY BUTTON */}
      <button
        type="button"
        onClick={copyValue}
        style={{
          border: `1px solid ${COLORS.border}`,
          color: copied
            ? COLORS.teal
            : COLORS.text3,
        }}
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          transition-all
          hover:opacity-80
        "
        aria-label={`نسخ ${label}`}
      >
        {copied ? (
          <Check size={13} />
        ) : (
          <Copy size={13} />
        )}
      </button>
    </div>
  );
}