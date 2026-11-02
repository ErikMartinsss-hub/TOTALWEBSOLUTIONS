import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, whatsappUrl } from "../data/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-navy-100 bg-white/85 shadow-[0_8px_30px_-24px_rgba(11,20,36,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="rounded-lg" onClick={() => setOpen(false)}>
          <Logo variant={solid ? "light" : "dark"} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-semibold transition-colors ${
                solid ? "text-navy-600 hover:text-navy-900" : "text-navy-100 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-500"
          >
            <WhatsAppIcon className="size-4" />
            Falar no WhatsApp
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`inline-flex size-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
            solid
              ? "bg-navy-50 text-navy-800 hover:bg-navy-100"
              : "bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-navy-100 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[32rem] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5 sm:px-8" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-navy-800 transition-colors hover:bg-navy-50"
            >
              {link.label}
              <ArrowUpRight className="size-4 text-navy-400" aria-hidden="true" />
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-500"
          >
            <WhatsAppIcon className="size-5" />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
