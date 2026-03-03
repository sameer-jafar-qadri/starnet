import FadeIn from "./FadeIn";
import { TESTIMONIALS, GOLD } from "../data/constants";

export default function Testimonials() {
  return (
    <section style={{ padding: "100px 5%", background: "#080D1A" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
              <div style={{ width: 24, height: 1, background: GOLD }} />
              <span style={{ fontSize: 11, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase" }}>
                Client Testimonials
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
              What Enterprise Leaders Say
            </h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12}>
              <div
                style={{
                  background: "linear-gradient(135deg, #0B1D3A 0%, #0D1F35 100%)",
                  border: "1px solid rgba(140,160,188,0.1)",
                  borderRadius: 4,
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 36,
                      color: GOLD,
                      fontFamily: "'Playfair Display', serif",
                      lineHeight: 1,
                      marginBottom: 20,
                    }}
                  >
                    "
                  </div>
                  <p style={{ fontSize: 15, color: "#C8D8EE", lineHeight: 1.75, fontWeight: 300, marginBottom: 32 }}>
                    {t.quote}
                  </p>
                </div>
                <div style={{ borderTop: "1px solid rgba(140,160,188,0.12)", paddingTop: 24 }}>
                  <div style={{ fontSize: 15, color: "#F0F4FA", fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "#8CA0BC", marginTop: 4 }}>{t.title}</div>
                  <div style={{ fontSize: 12, color: GOLD, marginTop: 2 }}>{t.company}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
