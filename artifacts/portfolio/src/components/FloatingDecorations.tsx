export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div
        className="animate-float"
        style={{
          position: "absolute", top: "8%", left: "4%",
          fontSize: "2rem", opacity: 0.3,
        }}
      >🌸</div>
      <div
        className="animate-float-delay"
        style={{
          position: "absolute", top: "15%", right: "6%",
          fontSize: "1.5rem", opacity: 0.25,
        }}
      >⭐</div>
      <div
        className="animate-float-slow"
        style={{
          position: "absolute", top: "35%", left: "2%",
          fontSize: "1.8rem", opacity: 0.2,
        }}
      >✨</div>
      <div
        className="animate-float"
        style={{
          position: "absolute", top: "50%", right: "3%",
          fontSize: "1.4rem", opacity: 0.2,
        }}
      >🌼</div>
      <div
        className="animate-float-delay"
        style={{
          position: "absolute", top: "70%", left: "5%",
          fontSize: "1.6rem", opacity: 0.2,
        }}
      >💫</div>
      <div
        className="animate-float-slow"
        style={{
          position: "absolute", top: "80%", right: "7%",
          fontSize: "1.3rem", opacity: 0.18,
        }}
      >🌺</div>

      <div
        className="bubble-decoration animate-float"
        style={{
          width: 120, height: 120,
          background: "radial-gradient(circle, #ffb7c5 0%, transparent 70%)",
          top: "20%", left: "8%",
        }}
      />
      <div
        className="bubble-decoration animate-float-delay"
        style={{
          width: 180, height: 180,
          background: "radial-gradient(circle, #c9b8f5 0%, transparent 70%)",
          top: "40%", right: "5%",
        }}
      />
      <div
        className="bubble-decoration animate-float-slow"
        style={{
          width: 100, height: 100,
          background: "radial-gradient(circle, #b5ead7 0%, transparent 70%)",
          top: "65%", left: "10%",
        }}
      />
    </div>
  );
}
