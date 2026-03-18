export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative" style={{ background: "linear-gradient(180deg, #fdf0f5 0%, #f5f0fd 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: "rgba(201,184,245,0.35)", color: "#7050a0", border: "1px solid rgba(201,184,245,0.5)" }}>
            🌸 About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#8050b0", fontFamily: "'Nunito', sans-serif" }}>
            Nice to meet you! ✨
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="w-56 h-56 md:w-72 md:h-72 rounded-3xl flex items-center justify-center text-9xl animate-float shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #ffb7c5 0%, #c9b8f5 50%, #b5ead7 100%)",
                  border: "4px solid rgba(255,255,255,0.9)",
                }}
              >
                👩‍💻
              </div>
              <div className="absolute -top-3 -right-3 text-3xl animate-sparkle">⭐</div>
              <div className="absolute -bottom-3 -left-3 text-3xl animate-sparkle-delay">💫</div>
              <div className="absolute top-1/2 -right-6 text-2xl animate-float-delay">🌸</div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="p-6 rounded-3xl shadow-md"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "2px solid rgba(201,184,245,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p className="text-base leading-relaxed font-semibold" style={{ color: "#5040a0" }}>
                Motivated, hardworking and curious learner with a strong interest in both{" "}
                <span style={{ color: "#d06090" }}>Software Development</span> and{" "}
                <span style={{ color: "#9060c0" }}>Artificial Intelligence / Machine Learning</span>! 🤖
              </p>
              <p className="text-base leading-relaxed font-semibold mt-3" style={{ color: "#5040a0" }}>
                I enjoy building practical applications, learning new concepts, and exploring how intelligent systems work.
                I aim to grow into a developer who can build scalable solutions powered by smart, data-driven models 🌟
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📍", label: "Location", value: "Guwahati, Assam, India" },
                { icon: "🎓", label: "University", value: "KIIT (2023–2027)" },
                { icon: "💼", label: "Internship", value: "IIT Guwahati (AI/ML)" },
                { icon: "🌍", label: "Languages", value: "English, Hindi, Assamese, Japanese" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-2xl text-center card-hover"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1.5px solid rgba(255,183,197,0.5)",
                  }}
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-xs font-bold mb-0.5" style={{ color: "#a060c0" }}>{item.label}</div>
                  <div className="text-xs font-semibold" style={{ color: "#6050a0" }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
