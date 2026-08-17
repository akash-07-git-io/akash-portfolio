"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

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
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg = scrolled
    ? "rgba(2,5,10,0.90)"
    : "transparent";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 64,
        background: navBg,
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9,
              background: "linear-gradient(135deg, #1B6EF3 0%, #C1121F 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "#fff",
              boxShadow: "0 0 20px rgba(27,110,243,0.4)",
            }}>A</div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--t1)", fontWeight: 600, letterSpacing: "0.06em" }}>
              AKASH<span style={{ color: "var(--blue-hi)" }}>.</span>L
            </span>
          </Link>

          {/* Desktop nav */}
          <ul style={{ display: "flex", gap: 2, listStyle: "none" }} className="desk-nav">
            {NAV.map(n => (
              <li key={n.href}>
                <Link href={n.href} style={{
                  fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--t3)",
                  textDecoration: "none", padding: "7px 16px", borderRadius: 8,
                  display: "block", transition: "all 0.2s", letterSpacing: "0.05em",
                }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = "var(--t1)"; (e.target as HTMLElement).style.background = "var(--blue-sub)"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = "var(--t3)"; (e.target as HTMLElement).style.background = "transparent"; }}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="desk-nav">
            {/* Theme toggle */}
            <button onClick={toggle} title="Toggle theme" style={{
              width: 36, height: 36, borderRadius: 8,
              border: "1px solid var(--border)", background: "var(--surface)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "var(--t3)", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--blue)"; e.currentTarget.style.color = "var(--blue-hi)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--t3)"; }}>
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Resume CTA */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 12, padding: "8px 18px" }}>
              Resume ↗
            </a>
          </div>

          {/* Mobile controls */}
          <div style={{ display: "none", alignItems: "center", gap: 8 }} className="mob-nav">
            <button onClick={toggle} style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--t3)" }}>
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--t2)", padding: 4 }}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: "rgba(2,5,10,0.97)", backdropFilter: "blur(24px)",
          padding: "24px", display: "flex", flexDirection: "column", gap: 4,
        }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} style={{
              fontFamily: "var(--font-mono)", fontSize: 16, color: "var(--t2)",
              textDecoration: "none", padding: "14px 16px",
              borderBottom: "1px solid var(--border)", letterSpacing: "0.05em",
            }}>
              {n.label}
            </Link>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: "center", justifyContent: "center", marginTop: 20 }}>
            Download Resume
          </a>
        </div>
      )}

      <style>{`
        .desk-nav { display: flex !important; }
        .mob-nav  { display: none !important; }
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .mob-nav  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
