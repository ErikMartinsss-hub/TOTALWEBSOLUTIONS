type LogoProps = {
  /** Variante para fundos escuros. */
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Marca da Total Web Solutions: monograma "T" com nós de circuito.
 */
export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl bg-navy-950 ring-1 ring-white/10">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.55),transparent_65%)]" />
        <svg
          viewBox="0 0 40 40"
          className="relative size-7"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 12h24"
            stroke="url(#logo-gradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M20 12v18"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="30" r="2.6" fill="#3b82f6" />
          <path d="M8 12h4M28 12h4" stroke="#9cb2d5" strokeWidth="3.2" strokeLinecap="round" opacity="0.5" />
          <defs>
            <linearGradient id="logo-gradient" x1="8" y1="12" x2="32" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60a5fa" />
              <stop offset="1" stopColor="#2d4575" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[0.95rem] font-bold tracking-tight ${
            isDark ? "text-white" : "text-navy-900"
          }`}
        >
          TOTAL WEB
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-semibold tracking-[0.32em] ${
            isDark ? "text-brand-300" : "text-navy-500"
          }`}
        >
          SOLUTIONS
        </span>
      </span>
    </span>
  );
}
