const timeline = [
  {
    period: "2010 – 2021",
    school: "Maria's Public School",
    type: "Primary & Secondary School",
    icon: "🏫",
    color: "#ffdac1",
    border: "#e0a060",
  },
  {
    period: "2021 – 2023",
    school: "Gurukul Grammar Senior Secondary School",
    type: "Senior Secondary (12th)",
    icon: "📚",
    color: "#ffb7c5",
    border: "#d08090",
  },
  {
    period: "2023 – 2027",
    school: "Kalinga Institute of Industrial Technology (KIIT)",
    type: "B.Tech (Current) · Bhubaneswar",
    icon: "🎓",
    color: "#c9b8f5",
    border: "#9070d0",
    current: true,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 gradient-education relative overflow-hidden">
      <div
        className="bubble-decoration"
        style={{
          width: 220, height: 220,
          background: "radial-gradient(circle, rgba(255,218,193,0.55) 0%, transparent 70%)",
          top: "10%", right: "5%",
        }}
      />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: "rgba(255,218,193,0.5)", color: "#805040", border: "1px solid rgba(224,160,96,0.45)" }}>
            🎓 Education
          </span>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#805040", fontFamily: "'Nunito', sans-serif" }}>
            My Journey 🌸
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5 rounded-full hidden md:block"
            style={{ background: "linear-gradient(180deg, #ffb7c5 0%, #c9b8f5 50%, #b5ead7 100%)" }}
          />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-md z-10"
                    style={{
                      background: item.color,
                      border: `3px solid ${item.border}`,
                    }}
                  >
                    {item.icon}
                  </div>
                </div>
                <div
                  className="flex-1 p-6 rounded-3xl card-hover"
                  style={{
                    background: item.color + "66",
                    border: `2px solid ${item.border}55`,
                  }}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <span className="text-xs font-black px-3 py-1 rounded-full mb-2 inline-block"
                        style={{ background: "rgba(255,255,255,0.7)", color: "#7050a0" }}>
                        {item.period}
                      </span>
                      <h3 className="font-black text-lg" style={{ color: "#403080", fontFamily: "'Nunito', sans-serif" }}>
                        {item.school}
                      </h3>
                      <p className="text-sm font-semibold mt-1" style={{ color: "#8060b0" }}>{item.type}</p>
                    </div>
                    {item.current && (
                      <span className="text-xs font-black px-3 py-1 rounded-full animate-pulse-soft flex-shrink-0"
                        style={{ background: "rgba(201,184,245,0.6)", color: "#6040a0" }}>
                        ✨ Current
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
