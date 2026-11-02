import { ArrowUpRight, Check } from "lucide-react";
import { principles, site, whatsappUrl } from "../data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div
        className="absolute inset-x-0 top-0 h-64 bg-grid-light mask-radial opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-24 size-96 rounded-full bg-brand-100/60 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Coluna esquerda: apresentação */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Sobre"
              title={
                <>
                  Tecnologia com propósito,{" "}
                  <span className="text-navy-500">feita para o seu negócio.</span>
                </>
              }
              description="Sou Érik Martins, engenheiro de software e responsável pela Total Web Solutions. Meu trabalho é traduzir necessidades reais de empresas em produtos digitais claros, rápidos e fáceis de manter."
            />

            <Reveal delay={100} className="mt-8 space-y-5 text-navy-500">
              <p className="leading-relaxed text-pretty">
                Acredito que tecnologia só faz sentido quando resolve um problema concreto. Por isso,
                cada projeto começa com escuta e diagnóstico — não com um modelo pronto. O resultado
                são soluções web completas, construídas junto com você, do primeiro rascunho à
                publicação.
              </p>
              <p className="leading-relaxed text-pretty">
                Da presença digital ao sistema que organiza a operação, do processo que você automatiza
                ao aplicativo que aproxima o cliente: acompanho todas as etapas com comunicação
                direta e compromisso com prazos.
              </p>
            </Reveal>

            <Reveal delay={160} className="mt-9">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800"
              >
                <WhatsAppIcon className="size-4" />
                Conversar sobre meu projeto
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>

          {/* Coluna direita: card + princípios */}
          <div className="relative">
            <Reveal delay={80}>
              <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 text-white shadow-card sm:p-10">
                <div
                  className="absolute inset-0 bg-grid opacity-60 mask-radial"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-20 -right-20 size-64 rounded-full bg-brand-500/25 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative">
                  <span className="font-display text-5xl leading-none text-brand-400" aria-hidden="true">
                    “
                  </span>
                  <p className="mt-2 font-display text-xl font-semibold leading-snug text-balance sm:text-2xl">
                    Não entrego apenas código. Entrego uma solução que a sua equipe consegue usar,
                    entender e evoluir.
                  </p>

                  <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-500/15 font-display text-lg font-bold text-brand-300 ring-1 ring-brand-400/30">
                      EM
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold">{site.name}</p>
                      <p className="mt-0.5 text-xs text-navy-300">
                        {site.role} · {site.brand}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <ul className="mt-6 grid gap-3">
              {principles.map((principle, index) => (
                <Reveal
                  key={principle.title}
                  as="li"
                  delay={140 + index * 70}
                  className="group flex gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-colors duration-300 hover:border-brand-200"
                >
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-900">{principle.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-navy-500">
                      {principle.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
