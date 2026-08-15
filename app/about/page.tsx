import { Terminal, Brain, Shield, Code2, Rocket, Cpu } from "lucide-react";

const TL = [
  { year: "2026", event: "Continuing to build, ship, and learn" },
  { year: "2026", event: "Interned at Skandhaguru Enterprise LLP" },
  { year: "2026", event: "Started STOCKIXZ — agentic financial intelligence" },
  { year: "2025", event: "Built Vayuntra — AI cybersecurity defense system" },
  { year: "2024", event: "Deep-dived into AI, ML, and Cybersecurity" },
  { year: "2024", event: "Joined Dr. N.G.P. Institute of Technology, CSE"}, 
]

const INTERESTS = [
  { icon: Brain,  label:"Artificial Intelligence", desc:"AI agents, GenAI, computer vision, NLP" },
  { icon: Shield, label:"Cybersecurity",            desc:"Threat detection, MITRE ATT&CK, ethical hacking" },
  { icon: Code2,  label:"Full Stack Dev",           desc:"FastAPI, React, TypeScript, PostgreSQL" },
  { icon: Rocket, label:"Entrepreneurship",         desc:"Startups, product thinking, open source" },
  { icon: Cpu,    label:"Linux & Systems",          desc:"Kernel internals, WSL, system security" },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight:"100vh", paddingTop:96, paddingBottom:80 }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 28px" }}>
        <div style={{ marginBottom:52 }}>
          <div className="sec-label">System.About</div>
          <h1 style={{ fontFamily:"var(--font-hud)", fontSize:"clamp(32px,5vw,56px)", fontWeight:800, color:"var(--t1)", letterSpacing:".04em" }}>ABOUT ME</h1>
          <div style={{ width:60, height:2, background:"linear-gradient(90deg,var(--blue),var(--red))", marginTop:12 }} />
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:40 }}>

          {/* Terminal bio */}
          <div style={{ gridColumn:"span 2" }}>
            <div style={{ background:"var(--bg-card)", border:"1px solid var(--border-1)", borderRadius:6, overflow:"hidden", marginBottom:32 }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 16px", borderBottom:"1px solid var(--border-1)", background:"var(--bg-raised)" }}>
                {["#ef4444","#eab308","#22c55e"].map(c=><div key={c} style={{ width:11,height:11,borderRadius:"50%",background:c+"99" }}/>)}
                <span style={{ fontFamily:"var(--font-mono)",fontSize:11,color:"var(--t3)",marginLeft:8,display:"flex",alignItems:"center",gap:4 }}><Terminal size={10}/> bio.sh</span>
              </div>
              <div style={{ padding:24,fontFamily:"var(--font-mono)",fontSize:13,display:"flex",flexDirection:"column",gap:10 }}>
                <p><span style={{color:"var(--green)"}}>akash@cyber</span><span style={{color:"var(--t3)"}}>:~$</span> <span style={{color:"var(--blue-lite)"}}>whoami</span></p>
                <p style={{color:"var(--t1)",paddingLeft:16}}>Akash L — AI &amp; Cybersecurity Engineer</p>
                <p style={{marginTop:4}}><span style={{color:"var(--green)"}}>akash@cyber</span><span style={{color:"var(--t3)"}}>:~$</span> <span style={{color:"var(--blue-lite)"}}>cat bio.txt</span></p>
                <div style={{color:"var(--t2)",fontSize:12,paddingLeft:16,lineHeight:1.85,display:"flex",flexDirection:"column",gap:10}}>
                  <p>III Year Computer Science Engineering student at Dr. N.G.P. Institute of Technology, Coimbatore. I build intelligent, autonomous systems that solve real security and intelligence challenges.</p>
                  <p>My flagship — <span style={{color:"var(--blue-lite)",fontWeight:600}}>Vayuntra</span> — is a fully functional TRL-4 autonomous AI cybersecurity defense system built with my teammates Aswinth Prabhu B and Jeevanth C. Real ML ensemble, real endpoints, real threat classification across 8 MITRE ATT&amp;CK tactics.</p>
                  <p>I believe elite engineers don&apos;t just write code — they architect systems. That means thinking across ML pipelines, backend design, DevOps infra, and security simultaneously.</p>
                </div>
                <p style={{marginTop:4}}><span style={{color:"var(--green)"}}>akash@cyber</span><span style={{color:"var(--t3)"}}>:~$</span> <span style={{color:"var(--blue-lite)"}}>echo $MISSION</span></p>
                <p style={{color:"var(--red-lite)",paddingLeft:16,fontSize:12}}>&quot;Build AI-native security products. Start a company. Change how the world defends itself.&quot;</p>
                <p style={{color:"var(--t3)",fontSize:12}}><span style={{animation:"blink 1s step-end infinite"}}>█</span></p>
              </div>
            </div>

            {/* Timeline */}
            <div className="sec-label">Journey.Log</div>
            <div style={{position:"relative",marginTop:20}}>
              <div style={{position:"absolute",left:14,top:0,bottom:0,width:1,background:"linear-gradient(to bottom,var(--blue),var(--red))",opacity:.35}}/>
              <div style={{display:"flex",flexDirection:"column",gap:18}}>
                {TL.map((item,i)=>(
                  <div key={i} style={{position:"relative",paddingLeft:42}}>
                    <div style={{position:"absolute",left:0,top:2,width:28,height:28,borderRadius:3,background:"var(--bg-card)",border:"1px solid var(--border-2)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <div style={{width:7,height:7,borderRadius:1,background:i%2===0?"var(--blue)":"var(--red)",boxShadow:`0 0 6px ${i%2===0?"var(--blue)":"var(--red)"}`}}/>
                    </div>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:i%2===0?"var(--blue-lite)":"var(--red-lite)",letterSpacing:".06em"}}>{item.year}</span>
                    <p style={{color:"var(--t2)",fontSize:13,marginTop:2}}>{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div className="card corners" style={{borderRadius:6,padding:20,borderColor:"var(--border-1)"}}>
              <p style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--blue-lite)",marginBottom:16,letterSpacing:".1em"}}>// QUICK_FACTS</p>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {[["Name","Akash L"],["Location","Coimbatore, TN"],["Degree","B.E CSE (III Year)"],["CGPA","7.59 / 10"],["Reg. No.","710724104010"],["Status","Open to Opportunities"]].map(([k,v])=>(
                  <div key={k} style={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid var(--border-0)",paddingBottom:8}}>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--t3)"}}>{k}</span>
                    <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:k==="Status"?"var(--green)":"var(--t1)"}}>{k==="Status"?"● ":""}{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--red-lite)",marginBottom:14,letterSpacing:".1em"}}>// INTERESTS</p>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {INTERESTS.map(({icon:Icon,label,desc})=>(
                  <div key={label} className="card" style={{borderRadius:6,padding:14,display:"flex",alignItems:"flex-start",gap:12,borderColor:"var(--border-0)"}}>
                    <div style={{width:32,height:32,borderRadius:4,background:"rgba(26,111,255,0.08)",border:"1px solid rgba(26,111,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <Icon size={14} color="var(--blue-lite)"/>
                    </div>
                    <div>
                      <p style={{fontSize:13,fontWeight:500,color:"var(--t1)"}}>{label}</p>
                      <p style={{fontSize:11,color:"var(--t3)",marginTop:1}}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  );
}
