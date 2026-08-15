"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

const GROUPS = [
  { cat: "Languages",       col: "var(--blue-lite)", items: ["Python","TypeScript","JavaScript","Java","SQL","HTML","CSS"] },
  { cat: "Frameworks",      col: "var(--red-lite)",  items: ["FastAPI","React","Next.js","Scikit-Learn","TensorFlow","Pandas","NumPy"] },
  { cat: "Databases",       col: "var(--cyan)",      items: ["PostgreSQL","MySQL","SQLite"] },
  { cat: "DevOps & Tools",  col: "var(--blue-lite)", items: ["Docker","Kubernetes","GitHub Actions","Git","Linux","WSL","VS Code"] },
  { cat: "AI / ML",         col: "var(--red-lite)",  items: ["Isolation Forest","SVM","LSTM","Generative AI","AI Agents","NLP"] },
  { cat: "Cloud & Infra",   col: "var(--cyan)",      items: ["Vercel","AWS (Learning)","WordPress","Elementor"] },
];

const BARS = [
  { skill:"Python",        pct:85 },
  { skill:"FastAPI",       pct:80 },
  { skill:"React/Next.js", pct:76 },
  { skill:"Machine Learning",pct:72},
  { skill:"Docker",        pct:70 },
  { skill:"PostgreSQL",    pct:73 },
  { skill:"TypeScript",    pct:68 },
  { skill:"Cybersecurity", pct:66 },
];

function Bar({ skill, pct }: { skill: string; pct: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--t2)" }}>{skill}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--t3)" }}>{pct}%</span>
      </div>
      <div style={{ height: 4, background: "var(--border-1)", borderRadius: 2, overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, height: "100%", borderRadius: 2, background: `linear-gradient(90deg, var(--blue), var(--red-lite))`, width: inView ? `${pct}%` : "0%", transition: "width 1.2s cubic-bezier(.4,0,.2,1)", boxShadow: "0 0 8px rgba(26,111,255,0.5)" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="bg-grid" style={{ padding: "96px 0", background: "var(--bg-deep)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ marginBottom: 52 }}>
          <div className="sec-label">Tech.Arsenal</div>
          <h2 style={{ fontFamily: "var(--font-hud)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: "var(--t1)", letterSpacing: ".04em" }}>SKILLS & STACK</h2>
          <div style={{ width: 60, height: 2, background: "linear-gradient(90deg,var(--blue),var(--red))", marginTop: 12 }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 48 }}>
          {/* Tags */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--t3)", marginBottom: 24, letterSpacing: ".08em" }}>
              <span style={{ color: "var(--blue)" }}>&gt;</span> TECHNOLOGY_STACK
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {GROUPS.map(g => (
                <div key={g.cat}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: g.col, marginBottom: 10, letterSpacing: ".14em", textTransform: "uppercase" }}>{g.cat}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {g.items.map(item => (
                      <span key={item} className="tag" style={{ borderColor: `${g.col}30`, color: g.col, background: `${g.col}10` }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bars + learning */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--t3)", marginBottom: 24, letterSpacing: ".08em" }}>
              <span style={{ color: "var(--red-lite)" }}>&gt;</span> PROFICIENCY_MATRIX
            </div>
            <div className="card" style={{ borderRadius: 6, padding: 24, marginBottom: 16, borderColor: "var(--border-1)" }}>
              {BARS.map(b => <Bar key={b.skill} {...b} />)}
            </div>
            <div className="card" style={{ borderRadius: 6, padding: 20, borderColor: "var(--border-1)" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--blue-lite)", marginBottom: 14, letterSpacing: ".08em" }}>◉ CURRENTLY_LOADING</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Kubernetes","AWS","Ethical Hacking","TryHackMe","Rust","Computer Vision"].map(item => (
                  <span key={item} style={{ fontFamily: "var(--font-mono)", fontSize: 11, border: "1px dashed var(--border-2)", color: "var(--t3)", padding: "4px 12px", borderRadius: 3 }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
