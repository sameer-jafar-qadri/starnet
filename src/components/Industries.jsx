import FadeIn from "./FadeIn";
import { INDUSTRIES, GOLD } from "../data/constants";

export default function Industries() {
  return (
    <section id="industries" style={{ padding: "100px 5%", background: "#050A14" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div
              style={{
                display: "inline-flex",
                gap: 12,
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div style={{ width: 24, height: 1, background: GOLD }} />
              <span style={{ fontSize: 11, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase" }}>
                Industries We Serve
              </span>
              <div style={{ width: 24, height: 1, background: GOLD }} />
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 4vw, 50px)",
                color: "#F0F4FA",
                lineHeight: 1.2,
              }}
            >
              Built for Every Enterprise Vertical
            </h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {INDUSTRIES.map((ind, i) => (
            <FadeIn key={ind.name} delay={i * 0.08}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                  padding: "36px 20px",
                  background: "#080D1A",
                  border: "1px solid rgba(140,160,188,0.08)",
                  borderRadius: 4,
                  textAlign: "center",
                  transition: "border-color 0.3s, background 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(184,150,62,0.3)";
                  e.currentTarget.style.background = "#0C1525";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(140,160,188,0.08)";
                  e.currentTarget.style.background = "#080D1A";
                }}
              >
                <div style={{ fontSize: 30 }}>{ind.icon}</div>
                <div style={{ fontSize: 14, color: "#C8D8EE", fontWeight: 500, letterSpacing: "0.03em" }}>
                  {ind.name}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
