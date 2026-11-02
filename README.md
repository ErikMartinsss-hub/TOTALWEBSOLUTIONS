# Total Web Solutions — Landing Page

Landing page institucional de **Érik Martins**, Engenheiro de Software e responsável pela **Total Web Solutions**.

Construída com **React 19 + TypeScript + Vite + Tailwind CSS v4**, com ícones da **Lucide** e animações leves de entrada e hover.

---

## ✨ Recursos

- **Hero** com apresentação pessoal, marca, chamada para WhatsApp e painel visual de código.
- **Sobre** com posicionamento profissional, citação e pilares de trabalho.
- **4 cards de serviços** interativos (Sites, Sistemas, Automação e Apps Mobile), cada um com CTA próprio.
- **Processo de trabalho** em 4 etapas, com timeline responsiva.
- **Contato** com WhatsApp, e-mail, site e formulário que monta a mensagem e abre direto no WhatsApp (sem backend).
- **Design mobile-first**, 100% responsivo (375 px, 768 px e 1440 px testados sem overflow horizontal).
- **Acessibilidade**: navegação por teclado, skip link, `aria-*`, foco visível e respeito a `prefers-reduced-motion`.
- **SEO**: metatags Open Graph/Twitter, `robots.txt`, `sitemap.xml`, lang `pt-BR`.
- Lighthouse local: **100** em Acessibilidade, **100** em Boas Práticas e **100** em SEO.

---

## 🚀 Como rodar

Requisito: **Node.js 20 ou superior**.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

Outros comandos:

```bash
npm run build      # build de produção em /dist
npm run preview    # pré-visualiza o build
npm run typecheck  # checagem de tipos
```

---

## 🗂️ Estrutura

```
.
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ components/
│  │  ├─ icons/WhatsAppIcon.tsx
│  │  ├─ About.tsx
│  │  ├─ CircuitLines.tsx      # elemento gráfico de circuito (SVG)
│  │  ├─ Contact.tsx           # contatos + formulário → WhatsApp
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Logo.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ Process.tsx
│  │  ├─ Reveal.tsx            # animação de entrada reutilizável
│  │  ├─ SectionHeading.tsx
│  │  ├─ Services.tsx
│  │  └─ WhatsAppFab.tsx       # botão flutuante
│  ├─ data/site.ts             # TODOS os dados da marca
│  ├─ hooks/useReveal.ts
│  ├─ App.tsx
│  ├─ index.css                # tema Tailwind, cores, animações e utilitários
│  └─ main.tsx
├─ index.html
├─ package.json
├─ tsconfig*.json
└─ vite.config.ts
```

---

## 🎨 Personalização

Praticamente todo o conteúdo está centralizado em **`src/data/site.ts`**:

- nome, cargo, telefone, e-mail, site e mensagem padrão do WhatsApp;
- lista de serviços (título, descrição, ícone e diferenciais);
- pilares e etapas do processo.

### Cores

Definidas em `src/index.css` no bloco `@theme`:

| Token        | Valor     | Uso                          |
| ------------ | --------- | ---------------------------- |
| `navy-600`   | `#2d4575` | Azul marinho institucional   |
| `navy-950`   | `#0b1424` | Fundos escuros               |
| `brand-500`  | `#3b82f6` | Azul tecnológico / destaques |
| `brand-600`  | `#2563eb` | Botões primários             |

### Fontes

`Sora` (títulos) e `Plus Jakarta Sans` (texto), carregadas via Google Fonts no `index.html`.

### Ícones

Basta trocar o componente em `src/data/site.ts`:

```ts
import { Globe, type LucideIcon } from "lucide-react";

export const services = [
  { id: "sites", title: "Criação de Sites", icon: Globe, /* ... */ },
];
```

Catálogo: <https://lucide.dev/icons>.

---

## 📬 Como o formulário funciona

Não há backend. Ao enviar, o formulário valida nome e mensagem, monta um texto com o serviço escolhido e abre:

```
https://wa.me/5511986022554?text=<mensagem codificada>
```

Para trocar o destino, altere `phoneRaw` em `src/data/site.ts` (formato internacional, somente dígitos).

---

## ☁️ Deploy

O projeto é estático e funciona em qualquer hospedagem (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

**Vercel / Netlify**

- Build command: `npm run build`
- Output directory: `dist`

**GitHub Pages**

Defina `base` no `vite.config.ts` com o nome do repositório e publique a pasta `dist`.

---

## 📄 Contato

- **WhatsApp:** (11) 98602-2554
- **E-mail:** contato@totalwebsolutions.com.br
- **Site:** [www.totalwebsolutions.com.br](https://www.totalwebsolutions.com.br)

© Total Web Solutions. Todos os direitos reservados.
