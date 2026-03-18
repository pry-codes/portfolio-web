import { useEffect, useState } from "react";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Education from "@/pages/Education";
import Achievements from "@/pages/Achievements";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import FloatingDecorations from "@/components/FloatingDecorations";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden font-sans">
      <FloatingDecorations />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer
        className="text-center py-8 text-sm font-bold"
        style={{
          background: "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%)",
          color: "#a060b0",
        }}
      >
        <p>Made with 🌸 by Prayashi Deka · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
