import FadeIn from "./FadeIn";
import { GOLD, GOLD_LIGHT } from "../data/constants";

export default function CTABand() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        padding: "80px 5%",
        background: "linear-gradient(135deg, #0E1A2E 0%, #0B1525 100%)",
        borderTop: "1px solid rgba(184,150,62,0.2)",
        borderBottom: "1px solid rgba(184,150,62,0.2)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        <FadeIn>
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(24px, 3.5vw, 42px)",
                color: "#F0F4FA",
                marginBottom: 12,
                lineHeight: 1.2,
              }}
            >
              Ready to Retire Your IT Assets
              <br />
              the Right Way?
            </h3>
            <p style={{ fontSize: 15, color: "#8CA0BC" }}>
              Speak to an enterprise account specialist within 24 hours.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: GOLD,
                color: "#050A14",
                border: "none",
                padding: "16px 40px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 2,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.background = GOLD_LIGHT)}
              onMouseLeave={(e) => (e.target.style.background = GOLD)}
            >
              Partner With Us
            </button>
            <a
              href="tel:+919876543210"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#C8D8EE",
                textDecoration: "none",
                fontSize: 14,
                padding: "16px 24px",
                border: "1px solid rgba(200,216,238,0.2)",
                borderRadius: 2,
              }}
            >
              📞 Call Enterprise Desk
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
