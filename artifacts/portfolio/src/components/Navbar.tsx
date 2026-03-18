interface NavbarProps {
  scrolled: boolean;
}

const navLinks = [
  { href: "#about", label: "About ✨" },
  { href: "#skills", label: "Skills 💻" },
  { href: "#projects", label: "Projects 🚀" },
  { href: "#education", label: "Education 🎓" },
  { href: "#achievements", label: "Achievements 🏆" },
  { href: "#contact", label: "Contact 💌" },
];

export default function Navbar({ scrolled }: NavbarProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(252,228,236,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(200,150,200,0.2)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,150,200,0.25)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-black tracking-tight"
          style={{ color: "#c06080", fontFamily: "'Nunito', sans-serif" }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          ✿ Prayashi
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                color: "#8060a0",
                fontFamily: "'Nunito', sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(192,96,128,0.12)";
                (e.currentTarget as HTMLElement).style.color = "#c06080";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#8060a0";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
