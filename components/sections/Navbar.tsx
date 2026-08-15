"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const bar: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    background: scrolled ? "rgba(2,5,9,0.94)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border-1)" : "1px solid transparent",
    transition: "all .3s",
  };

  return (
    <nav style={bar}>
      {/* Top accent line */}
      <div style={{ height: 2, background: "linear-gradient(90deg, var(--blue), var(--red), var(--blue))", backgroundSize: "200% 100%", animation: "scan 4s linear infinite" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, border: "1px solid var(--blue)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ width: 10, height: 10, background: "var(--blue)", borderRadius: "50%", boxShadow: "0 0 10px var(--blue)" }} />
            <div style={{ position: "absolute", top: -1, left: -1, width: 8, height: 8, borderTop: "2px solid var(--red)", borderLeft: "2px solid var(--red)" }} />
          </div>
          <span style={{ fontFamily: "var(--font-hud)", fontSize: 13, color: "var(--t1)", letterSpacing: ".12em" }}>
            AK<span style={{ color: "var(--blue)" }}>4</span>SH<span style={{ color: "var(--red)" }}>.</span>SYS
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--t3)", textDecoration: "none", letterSpacing: ".06em", transition: "color .2s", position: "relative" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--t1)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--t3)")}>
              <span style={{ color: "var(--blue)", marginRight: 2 }}>&gt;</span>{n.label}
            </Link>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-blue" style={{ padding: "7px 18px", fontSize: 11, letterSpacing: ".08em" }}>
            RESUME.PDF
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--t2)", display: "none" }} className="mobile-toggle">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(5,10,18,0.98)", borderBottom: "1px solid var(--border-1)", padding: "16px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--t2)", textDecoration: "none" }}>
              <span style={{ color: "var(--blue)" }}>&gt; </span>{n.label}
            </Link>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-blue" style={{ textAlign: "center" }}>RESUME.PDF</a>
        </div>
      )}

      <style>{`
        @media(max-width:768px){.desktop-nav{display:none!important}.mobile-toggle{display:block!important}}
        @keyframes scan{0%{background-position:200% 0}100%{background-position:-200% 0}}
      `}</style>
    </nav>
  );
}
