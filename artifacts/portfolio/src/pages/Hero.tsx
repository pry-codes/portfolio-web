import { useEffect, useState } from "react";

const roles = ["Software Developer 💻", "AI/ML Enthusiast 🤖", "Python Learner 🐍", "Problem Solver ✨"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-16"
    >
      <div
        className="bubble-decoration"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(255,183,197,0.4) 0%, transparent 70%)",
          top: "-100px", right: "-100px",
        }}
      />
      <div
        className="bubble-decoration"
        style={{
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(201,184,245,0.4) 0%, transparent 70%)",
          bottom: "0", left: "-50px",
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <div className="animate-bounce-gentle inline-block mb-6">
          <div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto flex items-center justify-center text-6xl md:text-7xl shadow-lg"
            style={{
              background: "linear-gradient(135deg, #ffb7c5 0%, #c9b8f5 50%, #b5ead7 100%)",
              border: "4px solid rgba(255,255,255,0.8)",
            }}
          >
            🌸
          </div>
        </div>

        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{ background: "rgba(255,183,197,0.35)", color: "#a04060", border: "1px solid rgba(255,183,197,0.5)" }}>
          <span className="animate-pulse-soft">✨</span>
          <span>Welcome to my little corner!</span>
          <span className="animate-pulse-soft">✨</span>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 leading-tight"
          style={{
            fontFamily: "'Nunito', sans-serif",
            background: "linear-gradient(135deg, #d06090 0%, #9060c0 50%, #60a0c0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Prayashi Deka
        </h1>

        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-lg md:text-2xl font-bold" style={{ color: "#8060a0", fontFamily: "'Nunito', sans-serif" }}>
            {displayed}
            <span className="animate-pulse" style={{ color: "#d06090" }}>|</span>
          </p>
        </div>

        <p className="text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-semibold" style={{ color: "#7060a0" }}>
          Motivated & curious learner exploring the magic of{" "}
          <span style={{ color: "#c06080" }}>Software Development</span> &{" "}
          <span style={{ color: "#8060c0" }}>Artificial Intelligence</span> 🌟
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3 rounded-full font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #d06090 0%, #9060c0 100%)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            See My Projects 🚀
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3 rounded-full font-bold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "rgba(255,255,255,0.7)",
              color: "#9060c0",
              border: "2px solid rgba(144,96,192,0.4)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Say Hello 💌
          </a>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="animate-bounce" style={{ color: "#c090d0", fontSize: "1.5rem" }}>
            ↓
          </div>
        </div>
      </div>
    </section>
  );
}
