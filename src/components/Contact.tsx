import { useState, type FormEvent } from "react";
import { ArrowUpRight, Globe, Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { mailtoUrl, services, site, whatsappUrl } from "../data/site";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const contactChannels = [
  {
    label: "WhatsApp / Telefone",
    value: site.phoneDisplay,
    description: "Atendimento direto comigo",
    href: whatsappUrl,
    icon: MessageSquare,
    external: true,
  },
  {
    label: "E-mail",
    value: site.email,
    description: "Para briefings e propostas",
    href: mailtoUrl,
    icon: Mail,
    external: false,
  },
  {
    label: "Website",
    value: site.website,
    description: "Presença digital da marca",
    href: site.websiteUrl,
    icon: Globe,
    external: true,
  },
] as const;

const serviceOptions = [...services.map((service) => service.title), "Outro / não sei ainda"];

export function Contact() {
  const [name, setName] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError("Preencha seu nome e conte um pouco sobre o projeto.");
      return;
    }

    setError("");

    const text = [
      `Olá, Érik! Meu nome é ${name.trim()}.`,
      `Serviço de interesse: ${service}`,
      "",
      message.trim(),
    ].join("\n");

    window.open(
      `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid opacity-60 mask-radial" />
        <div className="absolute -left-24 top-10 size-[30rem] rounded-full bg-brand-600/25 blur-[130px]" />
        <div className="absolute -right-20 bottom-0 size-[26rem] rounded-full bg-navy-500/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          {/* Coluna de contato */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[0.7rem] font-bold tracking-[0.18em] text-brand-300 uppercase ring-1 ring-white/15">
                <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                Contato
              </span>

              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                Vamos construir a próxima solução da sua empresa?
              </h2>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-200 text-pretty sm:text-lg">
                Conte o que você precisa — mesmo que ainda seja uma ideia. Respondo pessoalmente para
                entender o cenário e indicar o melhor caminho.
              </p>
            </Reveal>

            <div className="mt-9 grid grid-cols-1 gap-3">
              {contactChannels.map((channel, index) => {
                const Icon = channel.icon;

                return (
                  <Reveal key={channel.label} delay={80 + index * 70}>
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-white/[0.07]"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/25 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.65rem] font-semibold tracking-[0.16em] text-navy-300 uppercase">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block truncate text-sm font-semibold text-white">
                          {channel.value}
                        </span>
                        <span className="mt-0.5 block text-xs text-navy-400">
                          {channel.description}
                        </span>
                      </span>

                      <ArrowUpRight
                        className="size-4 shrink-0 text-navy-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-300"
                        aria-hidden="true"
                      />
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={280} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-navy-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" aria-hidden="true" />
                {site.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Atendimento remoto em todo o Brasil
              </span>
            </Reveal>
          </div>

          {/* Formulário */}
          <Reveal delay={140}>
            <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Send className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-navy-900">
                    Conte sobre o seu projeto
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-navy-500">
                    Ao enviar, a conversa abre direto no WhatsApp com sua mensagem pronta.
                  </p>
                </div>
              </div>

              <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-navy-700">
                    Seu nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Como posso te chamar?"
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(error) && !name.trim()}
                    className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-all duration-200 placeholder:text-navy-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-xs font-semibold text-navy-700">
                    O que você precisa?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                    className="w-full appearance-none rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-all duration-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-navy-700">
                    Sobre o projeto
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={4}
                    required
                    placeholder="Objetivo, prazo desejado, o que já existe hoje..."
                    aria-invalid={Boolean(error) && !message.trim()}
                    className="w-full resize-none rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-all duration-200 placeholder:text-navy-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
                  />
                </div>

                {error ? (
                  <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-500"
                >
                  <WhatsAppIcon className="size-5" />
                  Enviar pelo WhatsApp
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </button>

                <p className="text-center text-[0.7rem] leading-relaxed text-navy-400">
                  Prefere e-mail?{" "}
                  <a
                    href={mailtoUrl}
                    className="font-semibold text-navy-600 underline decoration-brand-300 underline-offset-2 transition-colors hover:text-brand-600"
                  >
                    Escreva para {site.email}
                  </a>
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
