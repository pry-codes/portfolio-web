const projects = [
  {
    title: "GenAI Certifier",
    subtitle: "Drifting Policy Guardrails for Responsible AI",
    description: "A system for certifying generative AI outputs against drifting policy guardrails, ensuring responsible and safe AI deployment.",
    icon: "🛡️",
    tags: ["GenAI", "Policy", "Responsible AI"],
    color: "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%)",
    border: "rgba(208,96,144,0.3)",
  },
  {
    title: "TrustEd",
    subtitle: "Document Authentication System",
    description: "An AI-powered document authentication system that verifies the integrity and authenticity of educational and official documents.",
    icon: "📄",
    tags: ["Authentication", "Document", "AI"],
    color: "linear-gradient(135deg, #e8eaf6 0%, #ede7f6 100%)",
    border: "rgba(144,96,192,0.3)",
  },
  {
    title: "Drone Detection",
    subtitle: "AI-Driven Real-Time Drone Monitoring via Web Interface",
    description: "A real-time AI-powered system for detecting and monitoring drones, accessible through an intuitive web interface.",
    icon: "🚁",
    tags: ["Real-time", "AI/ML", "Web"],
    color: "linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 100%)",
    border: "rgba(64,160,128,0.3)",
  },
  {
    title: "Stock Price Predictor",
    subtitle: "Using MLP (Multi-Layer Perceptron)",
    description: "A machine learning model using Multi-Layer Perceptron architecture to predict stock price movements based on historical data.",
    icon: "📈",
    tags: ["MLP", "Machine Learning", "Finance"],
    color: "linear-gradient(135deg, #fff8e1 0%, #fff3cd 100%)",
    border: "rgba(208,176,64,0.3)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 gradient-projects relative overflow-hidden">
      <div
        className="bubble-decoration"
        style={{
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(255,183,197,0.45) 0%, transparent 70%)",
          bottom: "-80px", left: "5%",
        }}
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            style={{ background: "rgba(255,183,197,0.4)", color: "#a04060", border: "1px solid rgba(208,128,144,0.45)" }}>
            🚀 My Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#a04070", fontFamily: "'Nunito', sans-serif" }}>
            Things I've Built 🌟
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-3xl card-hover"
              style={{
                background: project.color,
                border: `2px solid ${project.border}`,
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="text-4xl w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.7)" }}
                >
                  {project.icon}
                </div>
                <div>
                  <h3 className="font-black text-lg leading-tight" style={{ color: "#4030a0", fontFamily: "'Nunito', sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold mt-0.5" style={{ color: "#8060b0" }}>{project.subtitle}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 font-semibold" style={{ color: "#5040a0" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.65)", color: "#7050b0" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
