import FadeIn from "./FadeIn";
import { TRUST_POINTS, GOLD } from "../data/constants";

export default function About() {
  return (
    <section id="why us" style={{ padding: "100px 5%", background: "#080D1A" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: GOLD }} />
            <span style={{ fontSize: 11, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase" }}>About Star Net</span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 50px)",
              color: "#F0F4FA",
              maxWidth: 640,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            The IT Disposal Partner MNCs Actually Trust
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#8CA0BC",
              lineHeight: 1.75,
              maxWidth: 620,
              marginBottom: 56,
              fontWeight: 300,
            }}
          >
            Founded on the principle that enterprise IT retirement deserves the same rigor as enterprise IT procurement —
            Star Net Computers has built India's most compliance-forward ITAD infrastructure. Every transaction is
            documented. Every data carrier is certified. Every rupee of valuation is justified.
          </p>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {TRUST_POINTS.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.1}>
              <div
                style={{
                  background: "linear-gradient(135deg, #0B1D3A 0%, #0D1F35 100%)",
                  border: "1px solid rgba(140,160,188,0.1)",
                  borderRadius: 4,
                  padding: "32px 28px",
                  transition: "border-color 0.3s",
                  height: "100%",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(184,150,62,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(140,160,188,0.1)")}
              >
                <div style={{ fontSize: 28, marginBottom: 16 }}>{t.icon}</div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    color: "#F0F4FA",
                    marginBottom: 10,
                    fontWeight: 600,
                  }}
                >
                  {t.title}
                </div>
                <div style={{ fontSize: 14, color: "#8CA0BC", lineHeight: 1.65 }}>{t.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
