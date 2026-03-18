const achievements = [
  {
    icon: "🇯🇵",
    title: "Japanese Language",
    desc: "Completed 120 hours course in Japanese language",
    color: "#fce4ec",
    border: "#d06090",
  },
  {
    icon: "🏛️",
    title: "IITG Internship",
    desc: "Completed 1 month Internship at IIT Guwahati on AI/ML",
    color: "#e8eaf6",
    border: "#7060b0",
  },
  {
    icon: "🎓",
    title: "AI/ML on Udemy",
    desc: "Completed online course on AI/ML from Udemy",
    color: "#e0f7fa",
    border: "#4090a0",
  },
  {
    icon: "💡",
    title: "SIH & Society Hackathons",
    desc: "Participated in Smart India Hackathon (SIH) and Society Hackathons",
    color: "#fff8e1",
    border: "#c0a040",
  },
  {
    icon: "🏆",
    title: "AI/ML Quiz Winner",
    desc: "Won a quiz on AI/ML held by H & P Projects",
    color: "#f3e5f5",
    border: "#a060c0",
  },
  {
    icon: "🤖",
    title: "Gen-AI Workshop",
    desc: "Completed a workshop on Gen-AI hosted by NxtWave",
    color: "#e8f5e9",
    border: "#609060",
  },
  {
    icon: "🔐",
    title: "Cybersecurity Course",
    desc: "Completed Cybersecurity Analyst Job Simulation by Tata Forage",
    color: "#fce4ec",
    border: "#d08090",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 gradient-achievements relative overflow-hidden">
      <div
        className="bubble-decoration"
        style={{
          width: 280, height: 280,
          background: "radial-gradient(circle, rgba(201,184,245,0.4) 0%, transparent 70%)",
          top: "-60px", left: "15%",
        }}
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: "rgba(201,184,245,0.45)", color: "#604090", border: "1px solid rgba(144,96,192,0.45)" }}>
            🏆 Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#704090", fontFamily: "'Nunito', sans-serif" }}>
            Things I'm Proud Of 🌟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-3xl card-hover flex gap-4 items-start"
              style={{
                background: item.color + "99",
                border: `2px solid ${item.border}44`,
              }}
            >
              <div
                className="text-3xl w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.7)" }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-black text-sm leading-tight mb-1" style={{ color: "#403080", fontFamily: "'Nunito', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed font-semibold" style={{ color: "#6050a0" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
