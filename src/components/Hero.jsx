import Particles from "./Particles";
import { GOLD, GOLD_LIGHT, STATS } from "../data/constants";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #050A14 0%, #0B1120 50%, #071020 100%)",
      }}
    >
      <Particles />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(184,150,62,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 5% 80px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 760 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
              padding: "7px 16px",
              border: "1px solid rgba(184,150,62,0.3)",
              borderRadius: 2,
              background: "rgba(184,150,62,0.06)",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, display: "inline-block" }} />
            <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD }}>
              India's Enterprise IT Asset Recovery Partner
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(38px, 6vw, 76px)",
              fontWeight: 700,
              color: "#F0F4FA",
              lineHeight: 1.1,
              marginBottom: 28,
              letterSpacing: "-0.01em",
            }}
          >
            Enterprise IT Assets.
            <br />
            <span
              style={{
                background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Recovered. Secured.
            </span>
            <br />
            Certified.
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#8CA0BC",
              lineHeight: 1.7,
              marginBottom: 44,
              maxWidth: 580,
              fontWeight: 300,
            }}
          >
            Trusted by Fortune 500s, MNCs, and hyperscale data centers across India. We deliver compliant, transparent,
            and zero-risk IT asset disposal — at enterprise scale.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: GOLD,
                color: "#050A14",
                border: "none",
                padding: "16px 36px",
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
              Request Enterprise Quote
            </button>
            <button
              onClick={() => scrollTo("services")}
              style={{
                background: "transparent",
                color: "#F0F4FA",
                border: "1px solid rgba(200,216,238,0.25)",
                padding: "16px 36px",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 2,
              }}
            >
              View Services
            </button>
          </div>

          {/* Stats */}
          <div style={{ marginTop: 64, display: "flex", gap: 48, flexWrap: "wrap" }}>
            {STATS.map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#F0F4FA" }}>{n}</div>
                <div style={{ fontSize: 12, color: "#8CA0BC", letterSpacing: "0.08em", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
