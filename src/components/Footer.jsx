import { GOLD } from "../data/constants";

const SERVICES_LIST = [
  "IT Asset Disposal",
  "Bulk Purchasing",
  "Data Destruction",
  "Server Decommissioning",
  "E-Waste Management",
];

const CONTACT_LIST = [
  "enterprise@starnetcomputers.in",
  "+91 98765 43210",
  "Hyderabad · Bangalore",
  "Mumbai · Delhi · Pune",
];

const BADGES = ["ISO Aligned", "E-Waste Certified", "DoD Compliant", "NIST 800-88"];

export default function Footer() {
  return (
    <footer style={{ background: "#030710", borderTop: "1px solid rgba(140,160,188,0.1)", padding: "60px 5% 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="footer-grid" style={{ marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, marginBottom: 20 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#F0F4FA" }}>
                STAR NET
              </span>
              <span style={{ fontSize: 10, letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", marginTop: 3 }}>
                COMPUTERS
              </span>
            </div>
            <p style={{ fontSize: 14, color: "#8CA0BC", lineHeight: 1.7, maxWidth: 320, fontWeight: 300 }}>
              India's most trusted enterprise IT asset recovery partner. Secure. Compliant. Transparent.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
              {BADGES.map((b) => (
                <span
                  key={b}
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    padding: "5px 10px",
                    border: "1px solid rgba(184,150,62,0.3)",
                    color: GOLD,
                    borderRadius: 2,
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#8CA0BC", textTransform: "uppercase", marginBottom: 20 }}>
              Services
            </div>
            {SERVICES_LIST.map((s) => (
              <div
                key={s}
                style={{ fontSize: 13, color: "#8CA0BC", marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = "#C8D8EE")}
                onMouseLeave={(e) => (e.target.style.color = "#8CA0BC")}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#8CA0BC", textTransform: "uppercase", marginBottom: 20 }}>
              Contact
            </div>
            {CONTACT_LIST.map((c) => (
              <div key={c} style={{ fontSize: 13, color: "#8CA0BC", marginBottom: 10 }}>
                {c}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(140,160,188,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 12, color: "#4A5A72" }}>© 2025 Star Net Computers. All rights reserved.</div>
          <div style={{ fontSize: 12, color: "#4A5A72" }}>Privacy Policy · Terms of Service · Compliance</div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}
