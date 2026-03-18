export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fdf0f5 0%, #f0eafd 50%, #eafaf5 100%)" }}>
      <div
        className="bubble-decoration"
        style={{
          width: 200, height: 200,
          background: "radial-gradient(circle, rgba(255,183,197,0.45) 0%, transparent 70%)",
          top: "0", right: "10%",
        }}
      />
      <div
        className="bubble-decoration"
        style={{
          width: 160, height: 160,
          background: "radial-gradient(circle, rgba(181,234,215,0.45) 0%, transparent 70%)",
          bottom: "0", left: "8%",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
          style={{ background: "rgba(255,183,197,0.4)", color: "#a04060", border: "1px solid rgba(208,128,144,0.45)" }}>
          💌 Say Hello
        </span>
        <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#a04070", fontFamily: "'Nunito', sans-serif" }}>
          Let's Connect! 🌸
        </h2>
        <p className="text-base font-semibold mb-10 leading-relaxed" style={{ color: "#7050a0" }}>
          I'm always excited to collaborate, learn, and grow! Feel free to reach out for opportunities, collaborations, or just a friendly chat 💬✨
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <a
            href="mailto:mamudeka74@gmail.com"
            className="flex items-center gap-4 p-5 rounded-3xl card-hover group"
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "2px solid rgba(255,183,197,0.5)",
              textDecoration: "none",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #ffb7c5 0%, #ffdac1 100%)" }}
            >
              ✉️
            </div>
            <div className="text-left">
              <div className="font-black text-sm mb-0.5" style={{ color: "#403080", fontFamily: "'Nunito', sans-serif" }}>Personal Email</div>
              <div className="text-xs font-semibold" style={{ color: "#8060b0" }}>mamudeka74@gmail.com</div>
            </div>
          </a>

          <a
            href="mailto:23051850@kiit.ac.in"
            className="flex items-center gap-4 p-5 rounded-3xl card-hover"
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "2px solid rgba(201,184,245,0.5)",
              textDecoration: "none",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #c9b8f5 0%, #b5d8f7 100%)" }}
            >
              🎓
            </div>
            <div className="text-left">
              <div className="font-black text-sm mb-0.5" style={{ color: "#403080", fontFamily: "'Nunito', sans-serif" }}>University Email</div>
              <div className="text-xs font-semibold" style={{ color: "#8060b0" }}>23051850@kiit.ac.in</div>
            </div>
          </a>
        </div>

        <div
          className="p-6 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,183,197,0.25) 0%, rgba(201,184,245,0.25) 50%, rgba(181,234,215,0.25) 100%)",
            border: "2px solid rgba(201,184,245,0.4)",
          }}
        >
          <p className="text-2xl mb-2">🌸 🌟 💫</p>
          <p className="font-bold text-sm" style={{ color: "#7050a0" }}>
            Based in <span style={{ color: "#d06090" }}>Guwahati, Assam, India</span> · Open to opportunities & collaborations!
          </p>
        </div>
      </div>
    </section>
  );
}
