import Link from "next/link";
import { ArrowLeft, TrendingUp, Brain, Database, Zap } from "lucide-react";

const FEATURES=[{icon:Brain,title:"Agentic AI Core",desc:"Autonomous agents that research, reason, and act on financial data without human prompting"},{icon:Database,title:"Knowledge Graph",desc:"Persistent graph-based memory linking companies, sectors, news, and financial events over time"},{icon:TrendingUp,title:"Stock Intelligence",desc:"Real-time pattern recognition and trend forecasting across market data"},{icon:Zap,title:"Memory Systems",desc:"Long-term agent memory for learning from past analysis and building institutional knowledge"}];

export default function StockixzPage() {
  return (
    <div style={{minHeight:"100vh",paddingTop:96,paddingBottom:80}}>
      <div style={{maxWidth:1000,margin:"0 auto",padding:"0 28px"}}>
        <Link href="/projects" style={{display:"inline-flex",alignItems:"center",gap:8,fontFamily:"var(--font-mono)",fontSize:11,color:"var(--t3)",textDecoration:"none",marginBottom:40}}>
          <ArrowLeft size={13}/> BACK_TO_PROJECTS
        </Link>

        <div style={{background:"var(--bg-card)",border:"1px solid rgba(232,23,58,0.3)",borderRadius:6,padding:40,marginBottom:28,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,right:0,width:300,height:300,background:"radial-gradient(ellipse,rgba(232,23,58,0.05) 0%,transparent 70%)",pointerEvents:"none"}}/>
          <div style={{position:"relative"}}>
            <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:20}}>
              <div style={{width:52,height:52,borderRadius:6,background:"rgba(232,23,58,0.1)",border:"1px solid rgba(232,23,58,0.4)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <TrendingUp size={26} color="var(--red-lite)"/>
              </div>
              <div>
                <p style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--red-lite)",marginBottom:4,letterSpacing:".08em"}}>● IN DEVELOPMENT</p>
                <h1 style={{fontFamily:"var(--font-hud)",fontSize:"clamp(24px,4vw,42px)",fontWeight:800,color:"var(--t1)",letterSpacing:".06em"}}>STOCKIXZ</h1>
              </div>
            </div>
            <p style={{fontSize:16,color:"var(--red-lite)",fontWeight:500,marginBottom:12,fontFamily:"var(--font-mono)"}}>Autonomous Financial Intelligence System</p>
            <p style={{color:"var(--t2)",lineHeight:1.8,maxWidth:700,marginBottom:20}}>Agentic AI system designed to autonomously research, analyze, and reason about financial markets. Knowledge graphs + persistent memory + LLM-powered agents build a continuously evolving understanding of market dynamics — acting like an always-on financial analyst.</p>
            <div style={{fontFamily:"var(--font-mono)",fontSize:11,background:"rgba(232,23,58,0.08)",border:"1px solid rgba(232,23,58,0.25)",color:"var(--red-lite)",padding:"6px 16px",borderRadius:3,display:"inline-block",letterSpacing:".06em"}}>AI Agents × Fintech — Highly Differentiated</div>
          </div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:14,marginBottom:20}}>
          {FEATURES.map(({icon:Icon,title,desc})=>(
            <div key={title} className="card card-red" style={{borderRadius:6,padding:22,borderColor:"var(--border-0)"}}>
              <div style={{width:40,height:40,borderRadius:6,background:"rgba(232,23,58,0.08)",border:"1px solid rgba(232,23,58,0.22)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14}}>
                <Icon size={20} color="var(--red-lite)"/>
              </div>
              <h3 style={{fontWeight:600,color:"var(--t1)",marginBottom:8,fontSize:14}}>{title}</h3>
              <p style={{color:"var(--t2)",fontSize:13,lineHeight:1.65}}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="card" style={{borderRadius:6,padding:22,borderColor:"var(--border-1)"}}>
          <h2 style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--red-lite)",marginBottom:16,letterSpacing:".08em"}}>// TECH_STACK</h2>
          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
            {["Python","LangChain","LangGraph","Knowledge Graph","Neo4j","FastAPI","Vector Store","LLM APIs","Financial APIs","Pandas"].map(t=>(
              <span key={t} style={{fontFamily:"var(--font-mono)",fontSize:11,border:"1px solid rgba(232,23,58,0.25)",color:"var(--red-lite)",background:"rgba(232,23,58,0.06)",padding:"4px 12px",borderRadius:3}}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
