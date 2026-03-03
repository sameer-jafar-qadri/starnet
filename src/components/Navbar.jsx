import { useState, useEffect } from "react";
import { NAV_LINKS, GOLD, GOLD_LIGHT } from "../data/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(5,10,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(184,150,62,0.15)" : "none",
        transition: "all 0.4s ease",
        padding: "0 5%",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#F0F4FA", letterSpacing: "0.02em" }}>
            STAR NET
          </span>
          <span style={{ fontSize: 10, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginTop: 2 }}>
            COMPUTERS
          </span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{ background: "none", border: "none", color: "#8CA0BC", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#F0F4FA")}
              onMouseLeave={(e) => (e.target.style.color = "#8CA0BC")}
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            style={{ background: GOLD, color: "#050A14", border: "none", padding: "10px 24px", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.target.style.background = GOLD_LIGHT)}
            onMouseLeave={(e) => (e.target.style.background = GOLD)}
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ background: "none", border: "none", color: "#F0F4FA", fontSize: 22, cursor: "pointer" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "rgba(5,10,20,0.97)", borderTop: "1px solid rgba(184,150,62,0.2)", padding: "20px 5% 28px" }}>
          {NAV_LINKS.map((l) => (
            <div key={l} style={{ padding: "12px 0", borderBottom: "1px solid rgba(140,160,188,0.08)" }}>
              <button
                onClick={() => scrollTo(l)}
                style={{ background: "none", border: "none", color: "#C8D8EE", fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}
              >
                {l}
              </button>
            </div>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            style={{ marginTop: 20, background: GOLD, color: "#050A14", border: "none", padding: "12px 32px", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", width: "100%" }}
          >
            Get Quote
          </button>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
