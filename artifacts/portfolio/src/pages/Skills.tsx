const skills = [
  { name: "Python", level: "Intermediate", icon: "🐍", color: "#b5ead7", border: "#80c0a0" },
  { name: "AI / ML", level: "Learning", icon: "🤖", color: "#c9b8f5", border: "#9080d0" },
  { name: "Web Development", level: "Skilled", icon: "🌐", color: "#ffb7c5", border: "#d08090" },
  { name: "DSA (C/C++)", level: "Learning", icon: "🔢", color: "#ffdac1", border: "#d0a060" },
  { name: "OOP Basics", level: "Basics", icon: "🧱", color: "#b5d8f7", border: "#6090d0" },
  { name: "Backend Dev", level: "Skilled", icon: "⚙️", color: "#fff3cc", border: "#d0b040" },
];

const languages = [
  { name: "English", level: "Fluent", flag: "🇬🇧" },
  { name: "Assamese", level: "Fluent", flag: "🏵️" },
  { name: "Hindi", level: "Fluent", flag: "🇮🇳" },
  { name: "Japanese", level: "Basics", flag: "🇯🇵" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 gradient-skills relative overflow-hidden">
      <div
        className="bubble-decoration"
        style={{
          width: 250, height: 250,
          background: "radial-gradient(circle, rgba(181,234,215,0.5) 0%, transparent 70%)",
          top: "-50px", right: "10%",
        }}
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: "rgba(181,234,215,0.5)", color: "#407060", border: "1px solid rgba(128,192,160,0.5)" }}>
            💻 My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#406080", fontFamily: "'Nunito', sans-serif" }}>
            What I Know ✨
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-3xl card-hover cursor-default text-center"
              style={{
                background: skill.color + "88",
                border: `2px solid ${skill.border}55`,
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="text-4xl mb-3 animate-bounce-gentle inline-block">{skill.icon}</div>
              <h3 className="font-black text-base mb-1" style={{ color: "#403060", fontFamily: "'Nunito', sans-serif" }}>
                {skill.name}
              </h3>
              <span
                className="text-xs font-bold px-3 py-0.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.6)", color: "#6050a0" }}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-black" style={{ color: "#406080", fontFamily: "'Nunito', sans-serif" }}>
            Languages I Speak 🗣️
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="p-4 rounded-3xl card-hover text-center"
              style={{
                background: "rgba(255,255,255,0.75)",
                border: "2px solid rgba(181,216,247,0.6)",
              }}
            >
              <div className="text-3xl mb-2">{lang.flag}</div>
              <div className="font-black text-sm" style={{ color: "#405080", fontFamily: "'Nunito', sans-serif" }}>{lang.name}</div>
              <div className="text-xs font-semibold" style={{ color: "#8090b0" }}>{lang.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
