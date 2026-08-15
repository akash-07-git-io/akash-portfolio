"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Cpu, Code2, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const SkillGlobe = dynamic(() => import("@/components/three/SkillGlobe"), { ssr: false, loading: () => <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 40, height: 40, border: "2px solid var(--blue)", borderTopColor: "transparent", borderRadius: "50%", animation: "spin-slow 1s linear infinite" }} /></div> });

const ROLES = ["AI & Cybersecurity Engineer","Full Stack Developer","ML Systems Builder","Security Researcher","Autonomous Systems Builder"];
const STATS = [
  { val: "5+",   label: "Projects Shipped" },
  { val: "15+",  label: "Technologies" },
  { val: "8",    label: "MITRE ATT&CK Tactics" },
  { val: "TRL4", label: "Prototype Level" },
];

export default function Hero() {
  const [text, setText] = useState("");
  const [rIdx, setRIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [del, setDel] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typing
  useEffect(() => {
    const cur = ROLES[rIdx];
    const spd = del ? 35 : 70;
    const t = setTimeout(() => {
      if (!del) {
        setText(cur.slice(0, cIdx + 1));
        if (cIdx + 1 === cur.length) setTimeout(() => setDel(true), 2000);
        else setCIdx(c => c + 1);
      } else {
        setText(cur.slice(0, cIdx - 1));
        if (cIdx === 0) { setDel(false); setRIdx(r => (r + 1) % ROLES.length); }
        else setCIdx(c => c - 1);
      }
    }, spd);
    return () => clearTimeout(t);
  }, [cIdx, del, rIdx]);

  // Particle canvas
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    type P = { x:number;y:number;vx:number;vy:number;r:number;col:string };
    const pts: P[] = Array.from({ length: 60 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - .5) * .25,
      vy: (Math.random() - .5) * .25,
      r: Math.random() * 1.2 + .4,
      col: i % 5 === 0 ? "232,23,58" : "26,111,255",
    }));
    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.col},0.5)`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 140) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(26,111,255,${.05*(1-d/140)})`; ctx.lineWidth = .5; ctx.stroke();
        }
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="bg-grid" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Radial glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(26,111,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 50% at 75% 50%, rgba(232,23,58,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* HUD corner lines */}
      <div style={{ position: "absolute", top: 80, left: 24, width: 120, height: 120, borderTop: "1px solid rgba(26,111,255,0.3)", borderLeft: "1px solid rgba(26,111,255,0.3)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 24, right: 24, width: 120, height: 120, borderBottom: "1px solid rgba(232,23,58,0.3)", borderRight: "1px solid rgba(232,23,58,0.3)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", padding: "100px 28px 60px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

        {/* LEFT — text */}
        <div>
          {/* Status */}
          <div className="dot-online" style={{ display: "inline-flex", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--t3)", border: "1px solid var(--border-1)", background: "rgba(10,18,32,0.8)", padding: "6px 14px", borderRadius: 3, marginBottom: 28, letterSpacing: ".06em" }}>
            SYSTEM ONLINE — AVAILABLE FOR OPPORTUNITIES
          </div>

          {/* Name */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--blue)", letterSpacing: ".2em", marginBottom: 8, textTransform: "uppercase" }}>// AI + CYBERSECURITY</div>
            <h1 style={{ fontFamily: "var(--font-hud)", fontSize: "clamp(38px,5vw,68px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: ".04em" }}>
              <span style={{ color: "var(--t1)" }}>AKASH</span>
              <span style={{ color: "var(--blue)", textShadow: "0 0 40px rgba(26,111,255,0.6)" }}> L</span>
            </h1>
          </div>

          {/* Typed role */}
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(13px,1.8vw,17px)", color: "var(--t2)", marginBottom: 24, minHeight: 26, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "var(--red)", fontSize: 14 }}>▶</span>
            <span style={{ color: "var(--blue-lite)" }}>{text}</span>
            <span style={{ color: "var(--blue)", animation: "blink 1s step-end infinite" }}>█</span>
          </div>

          {/* Bio */}
          <p style={{ color: "var(--t2)", fontSize: 15, lineHeight: 1.8, marginBottom: 32, maxWidth: 520 }}>
            III Year CSE student at <span style={{ color: "var(--t1)", fontWeight: 500 }}>Dr. N.G.P. Institute of Technology</span>, Coimbatore. Building AI-powered security systems and autonomous intelligence platforms. Creator of <span style={{ color: "var(--blue-lite)", fontWeight: 500 }}>Vayuntra</span> — TRL-4 AI cybersecurity defense system.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 44 }}>
            <Link href="/projects" className="btn-blue">
              View Projects <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-red">
              Resume ↗
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
            {STATS.map(s => (
              <div key={s.label} className="corners" style={{ background: "var(--bg-raised)", border: "1px solid var(--border-1)", borderRadius: 4, padding: "14px 10px", textAlign: "center" }}>
                <div className="hud-num" style={{ fontSize: 22 }}>{s.val}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--t3)", marginTop: 4, letterSpacing: ".05em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — 3D Globe */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* HUD frame around globe */}
          <div style={{ position: "relative", width: "100%", maxWidth: 480, aspectRatio: "1/1" }}>
            {/* Corner brackets */}
            <div style={{ position: "absolute", top: 0, left: 0, width: 24, height: 24, borderTop: "2px solid var(--blue)", borderLeft: "2px solid var(--blue)", zIndex: 2 }} />
            <div style={{ position: "absolute", top: 0, right: 0, width: 24, height: 24, borderTop: "2px solid var(--red)", borderRight: "2px solid var(--red)", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 24, height: 24, borderBottom: "2px solid var(--red)", borderLeft: "2px solid var(--red)", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 24, height: 24, borderBottom: "2px solid var(--blue)", borderRight: "2px solid var(--blue)", zIndex: 2 }} />

            {/* HUD labels */}
            <div style={{ position: "absolute", top: -22, left: 0, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--blue)", letterSpacing: ".12em" }}>SKILL.MATRIX.3D</div>
            <div style={{ position: "absolute", bottom: -20, right: 0, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--red)", letterSpacing: ".1em" }}>INTERACTIVE ↓</div>

            {/* Outer glow */}
            <div style={{ position: "absolute", inset: "10%", borderRadius: "50%", background: "radial-gradient(ellipse,rgba(26,111,255,0.08) 0%,transparent 70%)", pointerEvents: "none", zIndex: 1 }} />

            {/* Globe */}
            <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
              <SkillGlobe />
            </div>
          </div>

          {/* Pill labels below globe */}
          <div style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap", justifyContent: "center" }}>
            {[{l:"Shield",c:"var(--red-lite)"},{l:"CPU",c:"var(--blue-lite)"},{l:"Code",c:"var(--cyan)"}].map(({l,c}) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--bg-raised)", border: "1px solid var(--border-1)", padding: "6px 14px", borderRadius: 3, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--t2)" }}>
                <span style={{ color: c, fontSize: 8 }}>◆</span>{l}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, animation: "float 2s ease-in-out infinite" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--t4)", letterSpacing: ".15em" }}>SCROLL</span>
        <ChevronDown size={14} color="var(--t4)" />
      </div>

      <style>{`
        @media(max-width:900px){
          section > div > div { grid-template-columns: 1fr !important; }
          section > div > div > div:last-child { max-height: 360px; }
          section > div > div > div:last-child > div:first-child { max-width: 340px !important; }
        }
      `}</style>
    </section>
  );
}
