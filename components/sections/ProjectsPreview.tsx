"use client";
import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Globe } from "lucide-react";

const PROJECTS = [
  {
    id: "vayuntra", icon: Shield, accent: "var(--blue)", accentDim: "rgba(26,111,255,0.1)",
    status: "LIVE", statusCol: "var(--green)",
    title: "Vayuntra", sub: "Autonomous AI Cybersecurity Defense System",
    desc: "End-to-end autonomous security platform — ML ensemble of Isolation Forest, SVM & LSTM covering 8 MITRE ATT&CK tactics. FastAPI backend, React dashboard, PostgreSQL, Docker, Kubernetes. Submitted to MSME Idea Hackathon 6.0 at TRL Level 4.",
    tags: ["FastAPI","React","PostgreSQL","Docker","Kubernetes","ML Ensemble","MITRE ATT&CK"],
    badge: "MSME Hackathon 6.0",
    link: "/projects/vayuntra", featured: true,
  },
  {
    id: "stockixz", icon: TrendingUp, accent: "var(--red-lite)", accentDim: "rgba(232,23,58,0.08)",
    status: "IN DEV", statusCol: "var(--red-lite)",
    title: "STOCKIXZ", sub: "Autonomous Financial Intelligence System",
    desc: "Agentic AI system with knowledge graphs, persistent memory, and autonomous stock research. Sits at the intersection of AI agents and fintech.",
    tags: ["Agentic AI","Knowledge Graph","LLM","Python","Memory Systems"],
    badge: "AI Agents × Fintech",
    link: "/projects/stockixz", featured: false,
  },
  {
    id: "skandhaguru", icon: Globe, accent: "var(--cyan)", accentDim: "rgba(0,200,255,0.08)",
    status: "DELIVERED", statusCol: "var(--green)",
    title: "Skandhaguru Enterprise", sub: "Corporate FMCG Website",
    desc: "Full corporate website for FMCG client during May 2026 internship. BRD, UI planning, WordPress + Elementor, DB architecture.",
    tags: ["WordPress","Elementor","UI Planning","Client Work"],
    badge: "Real Client",
    link: "/projects", featured: false,
  },
];

export default function ProjectsPreview() {
  const feat = PROJECTS.find(p => p.featured)!;
  const rest = PROJECTS.filter(p => !p.featured);
  const FIcon = feat.icon;

  return (
    <section style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="sec-label">Projects.Showcase</div>
            <h2 style={{ fontFamily: "var(--font-hud)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, color: "var(--t1)", letterSpacing: ".04em" }}>WHAT I BUILD</h2>
            <div style={{ width: 60, height: 2, background: "linear-gradient(90deg,var(--blue),var(--red))", marginTop: 12 }} />
          </div>
          <Link href="/projects" style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--t3)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--blue-lite)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--t3)")}>
            ALL_PROJECTS <ArrowRight size={13} />
          </Link>
        </div>

        {/* Featured */}
        <div className="card corners" style={{ borderRadius: 6, padding: 36, marginBottom: 20, position: "relative", overflow: "hidden", borderColor: "var(--border-1)" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, background: `radial-gradient(ellipse,${feat.accentDim} 0%,transparent 70%)`, pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 16, marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 6, background: feat.accentDim, border: `1px solid ${feat.accent}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FIcon size={24} color={feat.accent} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: feat.statusCol, marginBottom: 3, letterSpacing: ".08em" }}>● {feat.status}</div>
                  <h3 style={{ fontFamily: "var(--font-hud)", fontSize: 22, fontWeight: 700, color: "var(--t1)", letterSpacing: ".06em" }}>{feat.title}</h3>
                </div>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, background: "rgba(26,111,255,0.1)", border: "1px solid rgba(26,111,255,0.25)", color: "var(--blue-lite)", padding: "5px 14px", borderRadius: 3, letterSpacing: ".06em" }}>{feat.badge}</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--blue-lite)", marginBottom: 10, letterSpacing: ".04em" }}>{feat.sub}</p>
            <p style={{ color: "var(--t2)", fontSize: 14, lineHeight: 1.8, marginBottom: 24, maxWidth: 720 }}>{feat.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              {feat.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <Link href={feat.link} className="btn-blue" style={{ fontSize: 12 }}>
              CASE_STUDY <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Others */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
          {rest.map(p => {
            const Icon = p.icon;
            return (
              <div key={p.id} className="card card-red" style={{ borderRadius: 6, padding: 24, borderColor: "var(--border-0)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 6, background: p.accentDim, border: `1px solid ${p.accent}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={20} color={p.accent} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: p.statusCol, letterSpacing: ".08em" }}>● {p.status}</div>
                    <h3 style={{ fontFamily: "var(--font-hud)", fontSize: 15, fontWeight: 600, color: "var(--t1)", letterSpacing: ".05em" }}>{p.title}</h3>
                  </div>
                </div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: p.accent, marginBottom: 10 }}>{p.sub}</p>
                <p style={{ color: "var(--t2)", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {p.tags.slice(0,4).map(t => <span key={t} className="tag" style={{ borderColor: `${p.accent}30`, color: p.accent, background: p.accentDim }}>{t}</span>)}
                </div>
                <Link href={p.link} style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--t3)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}
                  onMouseEnter={e => (e.currentTarget.style.color = p.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--t3)")}>
                  VIEW_DETAILS <ArrowRight size={11} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
