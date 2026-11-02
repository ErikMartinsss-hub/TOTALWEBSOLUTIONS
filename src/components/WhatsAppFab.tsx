import { useEffect, useState } from "react";
import { whatsappUrl } from "../data/site";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

/**
 * Botão flutuante de WhatsApp — aparece após o usuário rolar a página.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`group fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_18px_40px_-12px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-105 hover:bg-emerald-400 sm:bottom-7 sm:right-7 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span
        className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400/50"
        aria-hidden="true"
      />
      <WhatsAppIcon className="relative size-7" />
      <span
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 lg:block"
        aria-hidden="true"
      >
        Vamos conversar?
      </span>
    </a>
  );
}
