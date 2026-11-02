import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.7rem] font-bold tracking-[0.18em] uppercase ring-1 ${
          isDark
            ? "bg-white/5 text-brand-300 ring-white/15"
            : "bg-brand-50 text-navy-600 ring-brand-100"
        }`}
      >
        <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
        {eyebrow}
      </span>

      <h2
        className={`mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15] ${
          isDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed text-pretty sm:text-lg ${
            isDark ? "text-navy-200" : "text-navy-500"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
