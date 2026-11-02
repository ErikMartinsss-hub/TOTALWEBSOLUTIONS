import { ArrowUp, Mail, Phone } from "lucide-react";
import { navLinks, site, whatsappUrl } from "../data/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-navy-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_0.8fr_1fr] md:gap-8">
          <div>
            <a href="#inicio" className="inline-block rounded-lg">
              <Logo />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-400">
              Sites, sistemas, automações e aplicativos sob medida. Tecnologia com propósito para
              empresas que querem crescer.
            </p>
            <p className="mt-4 text-sm text-navy-400">
              <span className="font-semibold text-white">{site.name}</span> · {site.role}
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="text-[0.7rem] font-bold tracking-[0.18em] text-navy-200 uppercase">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.7rem] font-bold tracking-[0.18em] text-navy-200 uppercase">
              Contato
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="size-4 text-brand-400" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 break-all text-sm transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-brand-400" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Phone className="size-4 text-brand-400" aria-hidden="true" />
                  {site.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-navy-400">
            © {year} {site.brand}. Todos os direitos reservados.
          </p>

          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-navy-300 transition-colors hover:border-brand-400/40 hover:text-white"
          >
            Voltar ao topo
            <ArrowUp
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
