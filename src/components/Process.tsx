import { processSteps } from "../data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div
        className="absolute inset-x-0 bottom-0 h-72 bg-grid-light mask-radial opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Como trabalhamos"
              title={
                <>
                  Um processo claro,{" "}
                  <span className="text-navy-500">sem surpresas no caminho.</span>
                </>
              }
              description="Você acompanha cada etapa e sabe o que esperar. Comunicação direta comigo, decisões compartilhadas e entregas incrementais."
            />

            <Reveal delay={120} className="mt-8 rounded-2xl border border-navy-100 bg-navy-50/70 p-5">
              <p className="text-sm leading-relaxed text-navy-600">
                <span className="font-semibold text-navy-900">Transparência desde o início:</span>{" "}
                escopo, prazos e prioridades definidos juntos antes da primeira linha de código.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            <div
              className="absolute bottom-6 left-[1.65rem] top-6 w-px bg-gradient-to-b from-brand-300 via-navy-200 to-transparent"
              aria-hidden="true"
            />

            <ol className="relative space-y-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.step} as="li" delay={index * 90}>
                  <div className="group relative flex gap-5 rounded-3xl p-2 transition-colors duration-300 sm:p-4">
                    <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-navy-100 bg-white font-display text-sm font-bold text-navy-500 shadow-soft transition-all duration-300 group-hover:border-brand-300 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow">
                      {step.step}
                    </span>

                    <div className="flex-1 rounded-2xl border border-transparent pt-1 transition-colors duration-300 group-hover:border-navy-100 group-hover:bg-navy-50/60 group-hover:px-5 group-hover:pb-4">
                      <h3 className="font-display text-lg font-bold tracking-tight text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-navy-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
