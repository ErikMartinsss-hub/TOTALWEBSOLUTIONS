import { ArrowUpRight, Check } from "lucide-react";
import { services, site } from "../data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function serviceWhatsApp(title: string) {
  const text = `Olá, Érik! Vim pelo site e gostaria de saber mais sobre ${title}.`;
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-navy-50 py-24 sm:py-28 lg:py-32">
      <div
        className="absolute -left-32 top-1/3 size-96 rounded-full bg-brand-200/40 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-0 size-80 rounded-full bg-navy-200/50 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title={
            <>
              Soluções digitais para cada etapa do{" "}
              <span className="text-navy-500">seu crescimento</span>
            </>
          }
          description="Do site que apresenta a empresa ao sistema que sustenta a operação: quatro frentes de trabalho, uma mesma atenção ao detalhe."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.id} delay={index * 90} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-card">
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-brand-400 to-navy-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-navy-50 text-navy-600 ring-1 ring-navy-100 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-500 group-hover:shadow-glow">
                      <Icon className="size-7" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs font-semibold text-navy-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-display text-lg font-bold tracking-tight text-navy-900">
                    {service.title}
                  </h3>

                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-navy-500">
                    {service.description}
                  </p>

                  <ul className="relative mt-6 space-y-2.5 border-t border-navy-100 pt-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs font-medium text-navy-600">
                        <Check className="size-3.5 shrink-0 text-brand-500" strokeWidth={3} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={serviceWhatsApp(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors hover:text-brand-600"
                  >
                    Quero este serviço
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-10 text-center">
          <p className="text-sm text-navy-500">
            Precisa de algo diferente ou de uma solução combinada?{" "}
            <a
              href="#contato"
              className="font-semibold text-navy-800 underline decoration-brand-400 decoration-2 underline-offset-4 transition-colors hover:text-brand-600"
            >
              Vamos conversar sobre o seu cenário
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
