import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const site = {
  name: "Érik Martins",
  role: "Engenheiro de Software",
  brand: "Total Web Solutions",
  phoneDisplay: "(11) 98602-2554",
  phoneRaw: "5511986022554",
  email: "contato@totalwebsolutions.com.br",
  website: "www.totalwebsolutions.com.br",
  websiteUrl: "https://www.totalwebsolutions.com.br",
  location: "São Paulo — SP, Brasil",
  whatsappMessage:
    "Olá, Érik! Vim pelo site da Total Web Solutions e gostaria de conversar sobre um projeto.",
} as const;

export const whatsappUrl = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const mailtoUrl = `mailto:${site.email}?subject=${encodeURIComponent(
  "Projeto — Total Web Solutions",
)}&body=${encodeURIComponent(
  "Olá, Érik!\n\nGostaria de conversar sobre um projeto.\n\nNome:\nEmpresa:\nO que preciso:\n\nObrigado!",
)}`;

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como trabalhamos", href: "#processo" },
  { label: "Contato", href: "#contato" },
] as const;

export const services: Service[] = [
  {
    id: "sites",
    title: "Criação de Sites",
    description:
      "Sites institucionais e landing pages rápidos, responsivos e pensados para transformar visitas em oportunidades reais.",
    icon: Globe,
    features: ["Design sob medida", "SEO e performance", "Totalmente responsivo"],
  },
  {
    id: "sistemas",
    title: "Sistemas Empresariais",
    description:
      "Painéis, ERPs e plataformas internas que organizam a operação da sua empresa e eliminam trabalho manual.",
    icon: LayoutDashboard,
    features: ["Dashboards e relatórios", "Controle de acessos", "Integrações e APIs"],
  },
  {
    id: "automacao",
    title: "Automação de Processos",
    description:
      "Fluxos automáticos para tarefas repetitivas — de planilhas e e-mails a integrações entre sistemas.",
    icon: Workflow,
    features: ["Menos tarefas manuais", "Integração entre ferramentas", "Rotinas monitoradas"],
  },
  {
    id: "mobile",
    title: "Aplicativos Mobile",
    description:
      "Aplicativos para iOS e Android com experiência fluida, notificações e tudo o que o seu cliente precisa na mão.",
    icon: Smartphone,
    features: ["iOS e Android", "Experiência nativa", "Publicação nas lojas"],
  },
];

export const principles = [
  {
    title: "Atendimento direto",
    description: "Você fala com quem desenvolve. Sem intermediários e sem ruído na comunicação.",
  },
  {
    title: "Soluções sob medida",
    description: "Cada projeto parte do seu processo real — nada de pacotes genéricos.",
  },
  {
    title: "Código que escala",
    description: "Fundação técnica limpa, documentada e pronta para evoluir com o negócio.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Entendo o cenário, os objetivos e os gargalos do seu negócio antes de propor qualquer solução.",
  },
  {
    step: "02",
    title: "Planejamento",
    description:
      "Definimos escopo, prioridades e prazos com clareza. Você sabe exatamente o que será entregue.",
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description:
      "Construção com entregas incrementais e acompanhamento próximo, para ajustar o rumo sem surpresas.",
  },
  {
    step: "04",
    title: "Entrega e evolução",
    description:
      "Publicação, treinamento e suporte contínuo. Seu produto continua evoluindo depois do lançamento.",
  },
] as const;
