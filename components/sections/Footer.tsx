"use client";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-1)", background: "var(--bg-deep)", padding: "32px 0", marginTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--t3)" }}>
          <span style={{ color: "var(--blue)" }}>[</span> akash@cyber.sys <span style={{ color: "var(--red)" }}>~</span><span style={{ color: "var(--t2)" }}>$</span> <span style={{ color: "var(--blue-lite)" }}>echo &quot;built to impress&quot;</span> <span style={{ color: "var(--blue)" }}>]</span>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="https://github.com/akash-logesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-link">
            <GithubIcon size={17} color="currentColor" />
          </a>
          <a href="https://www.linkedin.com/in/akashlogeshbabu7506/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-link">
            <LinkedinIcon size={17} color="currentColor" />
          </a>
          <a href="mailto:akashlogeshbabu@gmail.com" aria-label="Email" className="footer-link">
            <Mail size={17} />
          </a>
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--t4)" }}>© {new Date().getFullYear()} Akash L</p>
      </div>
      <style>{`.footer-link{color:var(--t3);transition:color .2s;}.footer-link:hover{color:var(--blue-lite);}`}</style>
    </footer>
  );
}
