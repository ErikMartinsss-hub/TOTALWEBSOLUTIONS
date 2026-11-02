import { ArrowRight, Check, Code2, Sparkles } from "lucide-react";
import { whatsappUrl } from "../data/site";
import { CircuitLines } from "./CircuitLines";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const highlights = ["Atendimento direto", "Soluções sob medida", "Do briefing ao lançamento"];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-950 pt-32 pb-20 text-white sm:pt-36 lg:pt-40 lg:pb-28"
    >
      {/* Camadas de fundo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid mask-radial opacity-70" />
        <div className="absolute -top-40 -left-32 size-[38rem] rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="absolute top-24 right-0 size-[32rem] rounded-full bg-navy-500/30 blur-[130px]" />
        <CircuitLines className="absolute -top-10 right-0 size-[52rem] text-navy-400/40 lg:right-[-6rem]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Coluna de texto */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-navy-100 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Disponível para novos projetos
          </div>

          <p className="mt-8 flex items-center gap-3 font-display text-[0.7rem] font-semibold tracking-[0.28em] text-brand-300 uppercase">
            Total Web Solutions
            <span className="h-px w-10 bg-gradient-to-r from-brand-500 to-transparent" aria-hidden="true" />
          </p>

          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[4.4rem] lg:leading-[1.02]">
            Érik <span className="text-gradient">Martins</span>
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg font-semibold text-white sm:text-xl">
            <Code2 className="size-5 text-brand-400" aria-hidden="true" />
            Engenheiro de Software
            <span className="hidden text-navy-500 sm:inline" aria-hidden="true">
              /
            </span>
            <span className="text-navy-300">Fundador da Total Web Solutions</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 text-pretty sm:text-lg">
            Transformo ideias em <strong className="font-semibold text-white">sites, sistemas, automações e aplicativos</strong>{" "}
            que simplificam a operação e ajudam empresas a crescer com tecnologia sob medida.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-500 sm:text-base"
            >
              <WhatsAppIcon className="size-5" />
              Falar no WhatsApp
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 sm:text-base"
            >
              Conhecer os serviços
              <ArrowRight className="size-4 text-brand-300 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-navy-200">
                <span className="grid size-5 place-items-center rounded-full bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/30">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Painel visual */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div
            className="absolute inset-6 rounded-full border border-white/5 bg-gradient-to-br from-brand-500/20 to-transparent blur-2xl"
            aria-hidden="true"
          />

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl backdrop-blur-xl">
            <div className="overflow-hidden rounded-2xl bg-navy-950/80 ring-1 ring-white/10">
              {/* Barra da janela */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="size-2.5 rounded-full bg-red-400/70" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-amber-400/70" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-emerald-400/70" aria-hidden="true" />
                <span className="ml-3 font-mono text-[0.7rem] tracking-wide text-navy-300">
                  totalweb/solutions.ts
                </span>
                <span className="ml-auto rounded-md bg-brand-500/15 px-2 py-0.5 font-mono text-[0.6rem] text-brand-300 ring-1 ring-brand-400/25">
                  TS
                </span>
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-[0.76rem] leading-7 sm:text-[0.82rem]">
                <code>
                  <span className="text-navy-400">{"// do problema à solução"}</span>
                  {"\n"}
                  <span className="text-brand-300">const</span>{" "}
                  <span className="text-white">solucao</span> ={" "}
                  <span className="text-brand-300">await</span>{" "}
                  <span className="text-emerald-300">totalWeb</span>.
                  <span className="text-sky-300">criar</span>
                  <span className="text-navy-300">{"({"}</span>
                  {"\n  "}
                  <span className="text-navy-200">site</span>
                  <span className="text-navy-400">:</span>{" "}
                  <span className="text-amber-200">"institucional"</span>,
                  {"\n  "}
                  <span className="text-navy-200">sistema</span>
                  <span className="text-navy-400">:</span>{" "}
                  <span className="text-amber-200">"sob medida"</span>,
                  {"\n  "}
                  <span className="text-navy-200">automacao</span>
                  <span className="text-navy-400">:</span>{" "}
                  <span className="text-brand-300">true</span>,
                  {"\n  "}
                  <span className="text-navy-200">app</span>
                  <span className="text-navy-400">:</span>{" "}
                  <span className="text-amber-200">"iOS + Android"</span>,
                  {"\n"}
                  <span className="text-navy-300">{"});"}</span>
                  {"\n\n"}
                  <span className="text-navy-400">{"// seu negócio, mais eficiente"}</span>
                  {"\n"}
                  <span className="text-brand-300">return</span>{" "}
                  <span className="text-amber-200">"resultado real"</span>
                  <span className="text-navy-300">;</span>
                </code>
              </pre>
            </div>

            {/* Cartão flutuante */}
            <div className="absolute -bottom-7 -left-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-6">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/30">
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-navy-300 uppercase">
                  Stack
                </p>
                <p className="font-display text-sm font-bold text-white">Web · Mobile · Automação</p>
              </div>
            </div>

            <div
              className="absolute -top-5 -right-3 rounded-2xl border border-white/10 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-5"
              aria-hidden="true"
            >
              <p className="font-mono text-[0.65rem] text-navy-300">status</p>
              <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                pronto para construir
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
