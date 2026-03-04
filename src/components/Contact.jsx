import { useState } from "react";
import FadeIn from "./FadeIn";
import { GOLD } from "../data/constants";

const CONTACT_INFO = [
  ["📧", "StarNetComputers25@gmail.com", "Email"],
  ["📞", "tel:+91 8074088254 / +91 8686642938", "Phone"],
  ["📍", "Hyderabad ( Head Office ) | Bangalore | Mumbai | Delhi | Pune", "Offices"],
  
];

const TEXT_FIELDS = [
  ["email", "Business Email *", "email"],
  ["phone", "Phone Number", "tel"],
  ["assets", "Assets to Dispose (Type & Approx. Quantity)", "text"],
];

const inputStyle = {
  width: "100%",
  background: "#0B1020",
  border: "1px solid rgba(140,160,188,0.15)",
  borderRadius: 2,
  padding: "12px 14px",
  color: "#F0F4FA",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontSize: 11,
  letterSpacing: "0.12em",
  color: "#8CA0BC",
  textTransform: "uppercase",
  marginBottom: 8,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", assets: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: "100px 5%", background: "#050A14" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="contact-grid">
          {/* Left: Info */}
          <FadeIn>
            <div>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <div style={{ width: 32, height: 1, background: GOLD }} />
                <span style={{ fontSize: 11, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase" }}>Contact</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "#F0F4FA",
                  lineHeight: 1.2,
                  marginBottom: 24,
                }}
              >
                Start the Conversation
              </h2>
              <p style={{ fontSize: 15, color: "#8CA0BC", lineHeight: 1.75, marginBottom: 48, fontWeight: 300 }}>
                Enterprise procurement decisions deserve a dedicated account manager — not a chatbot. Share your
                requirements and we'll respond with a customized proposal within 24 hours.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {CONTACT_INFO.map(([icon, val, label]) => (
                  <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 18 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: 11, letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase", marginBottom: 4 }}>
                        {label}
                      </div>
                      <div style={{ fontSize: 14, color: "#C8D8EE" }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn delay={0.15}>
            <div
              style={{
                background: "#080D1A",
                border: "1px solid rgba(140,160,188,0.1)",
                borderRadius: 4,
                padding: "40px 36px",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "#F0F4FA", marginBottom: 12 }}>
                    Inquiry Received
                  </h3>
                  <p style={{ color: "#8CA0BC", fontSize: 15 }}>
                    An enterprise account manager will reach out within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#F0F4FA", marginBottom: 28 }}>
                    Enterprise Inquiry Form
                  </h3>

                  {/* Name + Company row */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row">
                    {[["name", "Full Name *", "text"], ["company", "Company / Organization *", "text"]].map(([field, label, type]) => (
                      <div key={field}>
                        <label style={labelStyle}>{label}</label>
                        <input
                          required
                          type={type}
                          value={form[field]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Other fields */}
                  {TEXT_FIELDS.map(([field, label, type]) => (
                    <div key={field} style={{ marginBottom: 16 }}>
                      <label style={labelStyle}>{label}</label>
                      <input
                        required={field === "email"}
                        type={type}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  ))}

                  {/* Message */}
                  <div style={{ marginBottom: 24 }}>
                    <label style={labelStyle}>Additional Requirements</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      background: GOLD,
                      color: "#050A14",
                      border: "none",
                      padding: "16px",
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      borderRadius: 2,
                    }}
                  >
                    Submit Enterprise Inquiry
                  </button>
                  <p style={{ fontSize: 11, color: "#8CA0BC", textAlign: "center", marginTop: 16 }}>
                    Confidential. No spam. A dedicated specialist will respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
