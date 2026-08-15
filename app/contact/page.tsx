"use client";
import { useState } from "react";
import { Mail, MapPin, Send, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const LINKS = [
  { Icon: Mail,         label: "Email",    value: "akashlogeshbabu7@gmail.com",             href: "mailto:akashlogeshbabu7@gmail.com" },
  { Icon: LinkedinIcon, label: "LinkedIn", value: "akashlogeshbabu7",                   href: "https://www.linkedin.com/in/akashlogeshbabu7506/" },
  { Icon: GithubIcon,   label: "GitHub",   value: "akash-07-git-io",               href: "https://github.com/akash-07-git-io" },
  { Icon: MapPin,       label: "Location", value: "Coimbatore, Tamil Nadu, India",          href: "#" },
];

const INPUT: React.CSSProperties = {
  width: "100%",
  background: "var(--bg-raised)",
  border: "1px solid var(--border-1)",
  borderRadius: 4,
  padding: "10px 14px",
  color: "var(--t1)",
  fontSize: 13,
  fontFamily: "var(--font-mono)",
  outline: "none",
  transition: "border-color .2s",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: 96, paddingBottom: 80 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div className="sec-label">System.Contact</div>
          <h1 style={{ fontFamily: "var(--font-hud)", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--t1)", letterSpacing: ".04em" }}>GET IN TOUCH</h1>
          <p style={{ color: "var(--t2)", maxWidth: 480, marginTop: 12, fontSize: 14, lineHeight: 1.7 }}>Open to internships, collaborations, and interesting projects. I respond within 24 hours.</p>
          <div style={{ width: 60, height: 2, background: "linear-gradient(90deg,var(--blue),var(--red))", marginTop: 16 }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 28 }}>

          {/* Form */}
          <div style={{ gridColumn: "span 2", maxWidth: 640 }}>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-1)", borderRadius: 6, overflow: "hidden" }}>
              {/* Terminal bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: "1px solid var(--border-1)", background: "var(--bg-raised)" }}>
                {["#ef4444", "#eab308", "#22c55e"].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c + "99" }} />)}
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--t3)", marginLeft: 8, display: "flex", alignItems: "center", gap: 5 }}>
                  <Terminal size={10} /> send_message.sh
                </span>
              </div>

              {status === "sent" ? (
                <div style={{ padding: 52, textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 6, background: "rgba(0,230,118,0.1)", border: "1px solid rgba(0,230,118,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <Send size={24} color="var(--green)" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-hud)", color: "var(--green)", fontSize: 18, letterSpacing: ".08em", marginBottom: 8 }}>MESSAGE_SENT</h3>
                  <p style={{ color: "var(--t2)", fontSize: 13, fontFamily: "var(--font-mono)" }}>// Response within 24 hours</p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    {[["name", "text", "Your Name"], ["email", "email", "you@domain.com"]].map(([f, t, ph]) => (
                      <div key={f}>
                        <label style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)", display: "block", marginBottom: 6, letterSpacing: ".1em" }}>
                          {f.toUpperCase()}<span style={{ color: "var(--blue)" }}>*</span>
                        </label>
                        <input type={t} required placeholder={ph}
                          value={form[f as keyof typeof form]}
                          onChange={e => setForm({ ...form, [f]: e.target.value })}
                          onFocus={e => (e.target.style.borderColor = "var(--blue)")}
                          onBlur={e => (e.target.style.borderColor = "var(--border-1)")}
                          style={INPUT} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)", display: "block", marginBottom: 6, letterSpacing: ".1em" }}>
                      SUBJECT<span style={{ color: "var(--blue)" }}>*</span>
                    </label>
                    <input type="text" required placeholder="Internship / Collaboration / Project"
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = "var(--blue)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border-1)")}
                      style={INPUT} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)", display: "block", marginBottom: 6, letterSpacing: ".1em" }}>
                      MESSAGE<span style={{ color: "var(--blue)" }}>*</span>
                    </label>
                    <textarea rows={5} required placeholder="Tell me about the opportunity..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = "var(--blue)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border-1)")}
                      style={{ ...INPUT, resize: "none" }} />
                  </div>
                  <button type="submit" disabled={status === "sending"} className="btn-blue"
                    style={{ justifyContent: "center", opacity: status === "sending" ? 0.7 : 1 }}>
                    {status === "sending" ? "TRANSMITTING..." : <><Send size={14} /> SEND_MESSAGE</>}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="card corners" style={{ borderRadius: 6, padding: 20, borderColor: "var(--border-1)" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--blue-lite)", marginBottom: 18, letterSpacing: ".1em" }}>// DIRECT_LINKS</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {LINKS.map(({ Icon, label, value, href }) => (
                  <a key={label} href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
                    <div style={{ width: 34, height: 34, borderRadius: 4, background: "rgba(26,111,255,0.08)", border: "1px solid rgba(26,111,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue-lite)", flexShrink: 0 }}>
                      <Icon size={15} color="var(--blue-lite)" />
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)", letterSpacing: ".08em" }}>{label}</p>
                      <p style={{ color: "var(--t1)", fontSize: 12, marginTop: 1 }}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card" style={{ borderRadius: 6, padding: 20, borderColor: "var(--border-1)" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--green)", marginBottom: 14, letterSpacing: ".1em" }}>// AVAILABILITY</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {[["Status", "Open", true], ["Internships", "Yes", true], ["Freelance", "Yes", true], ["Full-time (2026+)", "Yes", true], ["Response time", "< 24h", false]].map(([k, v, hi]) => (
                  <div key={String(k)} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-0)", paddingBottom: 7 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)" }}>{k}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: hi ? "var(--green)" : "var(--t1)" }}>{hi ? "● " : ""}{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="card"
              style={{ borderRadius: 6, padding: 20, borderColor: "var(--border-1)", textDecoration: "none", display: "block" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)", marginBottom: 8, letterSpacing: ".1em" }}>// RESUME</p>
              <p style={{ color: "var(--t1)", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>Download CV</p>
              <p style={{ color: "var(--t2)", fontSize: 12, marginBottom: 12 }}>Full resume — projects, skills, certifications</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--blue-lite)" }}>akash_resume.pdf →</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
