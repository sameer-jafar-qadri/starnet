import FadeIn from "./FadeIn";
import { SERVICES, GOLD } from "../data/constants";

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 5%", background: "#050A14" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: GOLD }} />
            <span style={{ fontSize: 11, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase" }}>Services</span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 50px)",
              color: "#F0F4FA",
              maxWidth: 580,
              lineHeight: 1.2,
              marginBottom: 56,
            }}
          >
            Full-Spectrum Enterprise IT Asset Recovery
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 2,
          }}
        >
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div
                style={{
                  background: "#080D1A",
                  padding: "40px 32px",
                  borderTop: `2px solid ${i === 0 ? GOLD : "transparent"}`,
                  transition: "border-color 0.3s, background 0.3s",
                  cursor: "default",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderTopColor = GOLD;
                  e.currentTarget.style.background = "#0B1020";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderTopColor = i === 0 ? GOLD : "transparent";
                  e.currentTarget.style.background = "#080D1A";
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 20,
                    color: "#F0F4FA",
                    marginBottom: 14,
                    fontWeight: 600,
                  }}
                >
                  {s.title}
                </div>
                <div style={{ fontSize: 14, color: "#8CA0BC", lineHeight: 1.7 }}>{s.desc}</div>
                <div
                  style={{
                    marginTop: 24,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: GOLD,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                  }}
                >
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
