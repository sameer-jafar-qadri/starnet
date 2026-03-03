import FadeIn from "./FadeIn";
import { PROCESS, GOLD } from "../data/constants";

export default function Process() {
  return (
    <section
      id="process"
      style={{
        padding: "100px 5%",
        background: "linear-gradient(180deg, #080D1A 0%, #0A1020 100%)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: GOLD }} />
            <span style={{ fontSize: 11, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase" }}>Our Process</span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 50px)",
              color: "#F0F4FA",
              maxWidth: 520,
              lineHeight: 1.2,
              marginBottom: 64,
            }}
          >
            Four Steps. Zero Ambiguity.
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {PROCESS.map((p, i) => (
            <FadeIn key={p.step} delay={i * 0.12}>
              <div
                style={{
                  position: "relative",
                  padding: "40px 32px",
                  borderLeft: i > 0 ? "1px solid rgba(140,160,188,0.1)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 52,
                    fontWeight: 700,
                    color: "rgba(184,150,62,0.12)",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {p.step}
                </div>
                <div style={{ width: 32, height: 2, background: GOLD, marginBottom: 20 }} />
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22,
                    color: "#F0F4FA",
                    marginBottom: 14,
                    fontWeight: 600,
                  }}
                >
                  {p.title}
                </div>
                <div style={{ fontSize: 14, color: "#8CA0BC", lineHeight: 1.7 }}>{p.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
