import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppFab";

export default function App() {
  return (
    <>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-navy-900 focus:shadow-xl"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
