import { Clock } from "lucide-react";

const POSTS=[
  {slug:"building-vayuntra",title:"How I Built Vayuntra — An Autonomous AI Cybersecurity Defense System",excerpt:"From idea to MSME Hackathon submission: building an end-to-end AI security platform with FastAPI, React, PostgreSQL, Docker, and an ML ensemble of Isolation Forest + SVM + LSTM.",date:"2026-06-15",readTime:"12 min",tags:["AI","Cybersecurity","FastAPI","ML"],featured:true},
  {slug:"ml-ensemble-security",title:"Why I Used Three ML Models Instead of One for Threat Detection",excerpt:"Deep dive into Vayuntra's ensemble design — why combining Isolation Forest, SVM, and LSTM gives far better results than any single model.",date:"2026-05-20",readTime:"8 min",tags:["ML","Security","LSTM","SVM"],featured:false},
  {slug:"fastapi-docker-k8s",title:"Taking FastAPI to Production with Docker and Kubernetes",excerpt:"Lessons from deploying a FastAPI backend with Docker Compose → Kubernetes: GitHub Actions CI/CD, health checks, and zero-downtime deployments.",date:"2026-04-10",readTime:"10 min",tags:["FastAPI","Docker","Kubernetes","DevOps"],featured:false},
  {slug:"agentic-ai-fintech",title:"Building STOCKIXZ: Agentic AI for Financial Intelligence",excerpt:"Why I built an autonomous financial agent instead of a stock screener — knowledge graphs, persistent memory, and LLM-powered reasoning.",date:"2026-03-05",readTime:"9 min",tags:["Agentic AI","LangChain","Fintech"],featured:false},
  {slug:"mitre-attack-dev",title:"The MITRE ATT&CK Framework Explained (For Developers)",excerpt:"A developer-friendly walkthrough of MITRE ATT&CK — what it is, why it matters, and how I used it in Vayuntra's detection engine.",date:"2026-02-18",readTime:"7 min",tags:["Cybersecurity","MITRE ATT&CK"],featured:false},
  {slug:"linux-hardening",title:"Linux Security Hardening — A Student's Practical Guide",excerpt:"Practical steps: file permissions, SSH hardening, fail2ban, UFW, auditd, and monitoring with lightweight open-source tools.",date:"2026-01-30",readTime:"6 min",tags:["Linux","Security"],featured:false},
];

export default function BlogPage() {
  const feat = POSTS.find(p=>p.featured)!;
  const rest = POSTS.filter(p=>!p.featured);
  return (
    <div style={{minHeight:"100vh",paddingTop:96,paddingBottom:80}}>
      <div style={{maxWidth:900,margin:"0 auto",padding:"0 28px"}}>
        <div style={{marginBottom:52}}>
          <div className="sec-label">System.Writing</div>
          <h1 style={{fontFamily:"var(--font-hud)",fontSize:"clamp(28px,4vw,48px)",fontWeight:800,color:"var(--t1)",letterSpacing:".04em"}}>WRITING</h1>
          <p style={{color:"var(--t2)",maxWidth:480,marginTop:12,fontSize:14,lineHeight:1.7}}>Notes on AI, cybersecurity, full-stack dev, and lessons from building real systems.</p>
          <div style={{width:60,height:2,background:"linear-gradient(90deg,var(--blue),var(--red))",marginTop:16}}/>
        </div>

        {/* Featured */}
        <div className="card corners" style={{borderRadius:6,padding:32,marginBottom:16,position:"relative",overflow:"hidden",borderColor:"var(--border-1)"}}>
          <div style={{position:"absolute",top:0,right:0,width:200,height:200,background:"radial-gradient(ellipse,rgba(26,111,255,0.05) 0%,transparent 70%)",pointerEvents:"none"}}/>
          <div style={{position:"relative"}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:10,background:"rgba(26,111,255,0.1)",border:"1px solid rgba(26,111,255,0.28)",color:"var(--blue-lite)",padding:"4px 12px",borderRadius:3,display:"inline-block",marginBottom:16,letterSpacing:".08em"}}>FEATURED_POST</span>
            <h2 style={{fontSize:"clamp(16px,2.2vw,22px)",fontWeight:700,color:"var(--t1)",marginBottom:12,lineHeight:1.35}}>{feat.title}</h2>
            <p style={{color:"var(--t2)",fontSize:14,lineHeight:1.75,marginBottom:20,maxWidth:640}}>{feat.excerpt}</p>
            <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:16}}>
              <div style={{display:"flex",alignItems:"center",gap:16,fontFamily:"var(--font-mono)",fontSize:11,color:"var(--t3)"}}>
                <span style={{display:"flex",alignItems:"center",gap:4}}><Clock size={11}/>{feat.readTime}</span>
                <span>{feat.date}</span>
              </div>
              <div style={{display:"flex",gap:6}}>{feat.tags.slice(0,3).map(t=><span key={t} className="tag">{t}</span>)}</div>
            </div>
            <div style={{marginTop:20}}>
              <span style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--blue-lite)",cursor:"pointer"}}>READ_ARTICLE →</span>
              <p style={{color:"var(--t4)",fontSize:11,marginTop:4,fontFamily:"var(--font-mono)"}}>// publishing shortly</p>
            </div>
          </div>
        </div>

        {/* List */}
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {rest.map(post=>(
            <div key={post.slug} className="card" style={{borderRadius:6,padding:20,borderColor:"var(--border-0)"}}>
              <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-start",gap:12}}>
                <div style={{flex:1,minWidth:0}}>
                  <h3 style={{fontWeight:600,color:"var(--t1)",fontSize:13,marginBottom:6,lineHeight:1.4}}>{post.title}</h3>
                  <p style={{color:"var(--t2)",fontSize:12,lineHeight:1.65,marginBottom:10}}>{post.excerpt}</p>
                  <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:12}}>
                    <span style={{display:"flex",alignItems:"center",gap:4,fontFamily:"var(--font-mono)",fontSize:10,color:"var(--t3)"}}><Clock size={10}/>{post.readTime}</span>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:10,color:"var(--t3)"}}>{post.date}</span>
                    {post.tags.slice(0,2).map(t=><span key={t} className="tag" style={{fontSize:9}}>{t}</span>)}
                  </div>
                </div>
                <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--t4)",flexShrink:0}}>SOON →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
