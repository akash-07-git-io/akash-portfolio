import Link from "next/link";
import { Shield, TrendingUp, Globe, Lock, Code2, ArrowRight } from "lucide-react";

const PROJECTS = [
  { id:"vayuntra",   icon:Shield,     col:"var(--blue-lite)",  colDim:"rgba(26,111,255,0.08)",  status:"LIVE",           stCol:"var(--green)",    title:"Vayuntra",              sub:"Autonomous AI Cybersecurity Defense System",  desc:"End-to-end AI security platform. ML ensemble (Isolation Forest+SVM+LSTM), 8 MITRE ATT&CK tactics, FastAPI, React, Docker, Kubernetes. TRL-4 — submitted to MSME Idea Hackathon 6.0.",      tags:["FastAPI","React","PostgreSQL","Docker","K8s","ML Ensemble","MITRE ATT&CK"], link:"/projects/vayuntra",  feat:true },
  { id:"stockixz",  icon:TrendingUp,  col:"var(--red-lite)",   colDim:"rgba(232,23,58,0.08)",   status:"IN DEV",         stCol:"var(--red-lite)", title:"STOCKIXZ",              sub:"Autonomous Financial Intelligence System",    desc:"Agentic AI for autonomous stock research. Knowledge graph + persistent memory + LLM-powered agents that build continuously evolving understanding of market dynamics.",                           tags:["Agentic AI","LangGraph","Knowledge Graph","LLM","Python"],               link:"/projects/stockixz", feat:true },
  { id:"skand",     icon:Globe,       col:"var(--cyan)",        colDim:"rgba(0,200,255,0.06)",   status:"DELIVERED",      stCol:"var(--green)",    title:"Skandhaguru Enterprise", sub:"Corporate FMCG Website — Internship",         desc:"Full corporate website for FMCG company. Handled BRD, UI planning, WordPress + Elementor build, database planning, and hosting architecture during May 2026 internship.",                        tags:["WordPress","Elementor","UI/UX","Client Work"],                           link:"#",                  feat:false },
  { id:"ctf",       icon:Lock,        col:"var(--blue-lite)",  colDim:"rgba(26,111,255,0.06)",  status:"ONGOING",        stCol:"var(--blue-lite)",title:"Cybersecurity Labs",     sub:"Security Research & CTF Practice",            desc:"CTF challenges, network security exercises, ethical hacking on TryHackMe and HackTheBox. Security lab writeups and defensive tooling experiments.",                                            tags:["Kali Linux","Docker","Networking","CTF","TryHackMe"],                    link:"#",                  feat:false },
  { id:"uni",       icon:Code2,       col:"var(--t2)",          colDim:"rgba(122,156,200,0.06)", status:"ACADEMIC",       stCol:"var(--t3)",       title:"University Projects",    sub:"Academic Coursework B.E CSE",                 desc:"Full-stack web projects, Java apps, database systems, networking labs, and AI coursework built during B.E CSE at Dr. N.G.P. Institute of Technology.",                                          tags:["Java","Python","SQL","Web Programming"],                                 link:"#",                  feat:false },
];

export default function ProjectsPage() {
  const feat = PROJECTS.filter(p=>p.feat);
  const rest = PROJECTS.filter(p=>!p.feat);
  return (
    <div style={{minHeight:"100vh",paddingTop:96,paddingBottom:80}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 28px"}}>
        <div style={{marginBottom:52}}>
          <div className="sec-label">Projects.All</div>
          <h1 style={{fontFamily:"var(--font-hud)",fontSize:"clamp(28px,4vw,48px)",fontWeight:800,color:"var(--t1)",letterSpacing:".04em"}}>ALL PROJECTS</h1>
          <p style={{color:"var(--t2)",maxWidth:520,marginTop:12,fontSize:14,lineHeight:1.7}}>Systems built, problems solved, tech stacked. Each project a step toward AI-native, security-first products.</p>
          <div style={{width:60,height:2,background:"linear-gradient(90deg,var(--blue),var(--red))",marginTop:16}}/>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:16,marginBottom:16}}>
          {feat.map(p=>{const Icon=p.icon;return(
            <div key={p.id} className="card corners" style={{borderRadius:6,padding:28,display:"flex",flexDirection:"column",borderColor:"var(--border-1)"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                <div style={{width:44,height:44,borderRadius:6,background:p.colDim,border:`1px solid ${p.col}35`,display:"flex",alignItems:"center",justifyContent:"center"}}><Icon size={22} color={p.col}/></div>
                <div>
                  <div style={{fontFamily:"var(--font-mono)",fontSize:10,color:p.stCol,letterSpacing:".08em"}}>● {p.status}</div>
                  <h2 style={{fontFamily:"var(--font-hud)",fontWeight:700,color:"var(--t1)",letterSpacing:".05em"}}>{p.title}</h2>
                </div>
              </div>
              <p style={{fontFamily:"var(--font-mono)",fontSize:11,color:p.col,marginBottom:10}}>{p.sub}</p>
              <p style={{color:"var(--t2)",fontSize:13,lineHeight:1.75,marginBottom:16,flex:1}}>{p.desc}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:16}}>{p.tags.map(t=><span key={t} className="tag" style={{color:p.col,borderColor:`${p.col}30`,background:p.colDim}}>{t}</span>)}</div>
              <Link href={p.link} style={{fontFamily:"var(--font-mono)",fontSize:11,color:p.col,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:4}}>CASE_STUDY <ArrowRight size={11}/></Link>
            </div>
          );})}
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12}}>
          {rest.map(p=>{const Icon=p.icon;return(
            <div key={p.id} className="card" style={{borderRadius:6,padding:20,borderColor:"var(--border-0)"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}><Icon size={14} color={p.col}/><p style={{fontFamily:"var(--font-mono)",fontSize:10,color:p.stCol,letterSpacing:".06em"}}>{p.status}</p></div>
              <h3 style={{fontWeight:600,color:"var(--t1)",fontSize:13,marginBottom:6}}>{p.title}</h3>
              <p style={{color:"var(--t2)",fontSize:12,lineHeight:1.65,marginBottom:12}}>{p.desc}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:5}}>{p.tags.slice(0,3).map(t=><span key={t} className="tag" style={{fontSize:10,color:p.col,borderColor:`${p.col}25`,background:p.colDim}}>{t}</span>)}</div>
            </div>
          );})}
        </div>
      </div>
    </div>
  );
}
