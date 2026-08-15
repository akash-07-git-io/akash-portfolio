"use client";
import { Award, ExternalLink } from "lucide-react";

const CERTS = [
  { title: "Cyber Security",                  issuer: "University of London — Coursera", col: "var(--blue-lite)" },
  { title: "Google Cloud Cybersecurity",       issuer: "Google / Coursera",              col: "var(--red-lite)" },
  { title: "Generative AI",                    issuer: "Simplilearn",                    col: "var(--cyan)" },
  { title: "AI in Edge Computing & IoT",       issuer: "Industry Certification",          col: "var(--blue-lite)" },
  { title: "C Programming",                    issuer: "Great Learning",                  col: "var(--red-lite)" },
];

const EXP = [
  {
    role: "Web Developer Intern", company: "Skandhaguru Enterprise LLP",
    period: "May 2026", type: "Internship",
    pts: ["Corporate website for FMCG distribution client","Business requirement analysis & UI planning","WordPress + Elementor build","Database planning & hosting architecture"],
  },
  {
    role: "Independent Developer", company: "Self-Directed R&D",
    period: "2025 — Present", type: "Project Work",
    pts: ["Vayuntra — AI cybersecurity system (MSME Hackathon TRL-4)","STOCKIXZ — agentic financial intelligence system","ML stack: Isolation Forest + SVM + LSTM ensemble","DevOps: FastAPI, React, PostgreSQL, Docker, Kubernetes"],
  },
];

export default function Certifications() {
  return (
    <section style={{ padding: "96px 0", background: "var(--bg-surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 56 }}>

          {/* Experience */}
          <div>
            <div className="sec-label">Experience.Log</div>
            <h2 style={{ fontFamily: "var(--font-hud)", fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 700, color: "var(--t1)", letterSpacing: ".04em", marginBottom: 8 }}>EXPERIENCE</h2>
            <div style={{ width: 60, height: 2, background: "linear-gradient(90deg,var(--blue),var(--red))", marginBottom: 36 }} />
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: 15, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, var(--blue), var(--red))", opacity: .3 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {EXP.map((e, i) => (
                  <div key={i} style={{ position: "relative", paddingLeft: 44 }}>
                    <div style={{ position: "absolute", left: 0, top: 4, width: 30, height: 30, borderRadius: 4, background: "var(--bg-card)", border: "1px solid var(--border-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 8, height: 8, borderRadius: 1, background: i === 0 ? "var(--blue)" : "var(--red)", boxShadow: `0 0 8px ${i === 0 ? "var(--blue)" : "var(--red)"}` }} />
                    </div>
                    <div className="card" style={{ borderRadius: 6, padding: 20, borderColor: "var(--border-0)" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, marginBottom: 12 }}>
                        <div>
                          <h3 style={{ fontWeight: 600, color: "var(--t1)", fontSize: 14 }}>{e.role}</h3>
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--blue-lite)", marginTop: 2 }}>{e.company}</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)" }}>{e.period}</p>
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, background: "rgba(26,111,255,0.1)", color: "var(--blue-lite)", padding: "2px 8px", borderRadius: 2, marginTop: 4, display: "inline-block" }}>{e.type}</span>
                        </div>
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                        {e.pts.map((pt, j) => (
                          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "var(--t2)" }}>
                            <span style={{ color: "var(--red-lite)", flexShrink: 0, marginTop: 1 }}>›</span>{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certs + Education */}
          <div>
            <div className="sec-label">Certs.Verified</div>
            <h2 style={{ fontFamily: "var(--font-hud)", fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 700, color: "var(--t1)", letterSpacing: ".04em", marginBottom: 8 }}>CERTIFICATIONS</h2>
            <div style={{ width: 60, height: 2, background: "linear-gradient(90deg,var(--red),var(--blue))", marginBottom: 36 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {CERTS.map((c, i) => (
                <div key={i} className="card" style={{ borderRadius: 6, padding: 14, display: "flex", alignItems: "center", gap: 14, borderColor: "var(--border-0)" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 6, background: `${c.col}12`, border: `1px solid ${c.col}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Award size={16} color={c.col} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontWeight: 500, color: "var(--t1)", fontSize: 13 }}>{c.title}</h4>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)" }}>{c.issuer}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: c.col, border: `1px solid ${c.col}30`, padding: "2px 8px", borderRadius: 2, flexShrink: 0 }}>✓ VERIFIED</span>
                  <ExternalLink size={12} color="var(--t4)" />
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="sec-label">Education.Current</div>
            <div className="card corners" style={{ borderRadius: 6, padding: 24, borderColor: "var(--border-1)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 6, background: "rgba(26,111,255,0.1)", border: "1px solid rgba(26,111,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-hud)", color: "var(--blue-lite)", fontWeight: 700, fontSize: 12 }}>B.E</span>
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, color: "var(--t1)", marginBottom: 6 }}>Computer Science Engineering</h3>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--blue-lite)", marginBottom: 3 }}>Dr. N.G.P. Institute of Technology</p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)" }}>Coimbatore, Tamil Nadu · 2022 — 2026</p>
                  <div style={{ display: "flex", gap: 24, marginTop: 16 }}>
                    {[["CGPA","7.59 / 10"],["Year","III (6th Sem)"],["Reg.","710724104010"]].map(([k,v]) => (
                      <div key={k}>
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t3)", marginBottom: 3 }}>{k}</p>
                        <p style={{ fontFamily: "var(--font-mono)", color: "var(--blue-lite)", fontWeight: 600, fontSize: 13 }}>{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
