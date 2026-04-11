import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const edu=[
  {year:"2025 — Present",deg:"Higher National Diploma in Software Engineering",inst:"NIBM · School of Computing",gpa:null,current:true},
  {year:"2024",deg:"Diploma in Software Engineering",inst:"NIBM · School of Computing",gpa:"GPA: 3.7 / 4.0"},
  {year:"2023",deg:"Diploma in English",inst:"ESOFT Metro Campus",gpa:"Merit"},
  {year:"2019 – 2023",deg:"GCE A/L & O/L",inst:"Veyangoda Central College",gpa:null},
];
const achieves=[
  {icon:"🏆",cls:"gold",title:"Dev{thon} 3.0 — Semi-Finalist",desc:"National-level web dev competition by UoM Leos, SLTC Leos & UoM Rotaractors. Demonstrated strong problem-solving and teamwork."},
  {icon:"⭐",cls:"",title:"Academic Excellence · GPA 3.8",desc:"Recognized for academic excellence in Diploma in Software Engineering."},
  {icon:"🏏",cls:"green",title:"School Cricket Captain",desc:"Captain of Under 13, Under 15 & Under 17 teams — leadership, strategy, and teamwork across multiple age categories."},
];

const ci={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:0.12}}};
const ii={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:0.5,type:"spring"}}};
const ai={hidden:{opacity:0,x:20},visible:{opacity:1,x:0,transition:{duration:0.5,type:"spring"}}};

export default function Education() {
  const ref=useRef(null); const iv=useInView(ref,{once:true,amount:0.1});
  return (
    <section id="education" className="sec" ref={ref}>
      <div className="sec-num">05</div>
      <motion.div className="sec-head" initial={{opacity:0,x:-28}} animate={iv?{opacity:1,x:0}:{}} transition={{duration:0.6}}>
        <div className="sec-eyebrow">Education & Achievements</div>
        <h2 className="sec-title">The Journey</h2>
        <p className="sec-sub">Academic milestones and highlights that shaped who I am.</p>
      </motion.div>

      <div className="edu-layout">
        <motion.div className="edu-timeline" variants={ci} initial="hidden" animate={iv?"visible":"hidden"}>
          {edu.map((e,i)=>(
            <motion.div key={i} className="edu-item" variants={ii}>
              <div className="edu-year">{e.year}{e.current&&" · Currently Pursuing"}</div>
              <div className="edu-deg">{e.deg}</div>
              <div className="edu-inst">{e.inst}</div>
              {e.gpa&&<span className="edu-gpa">{e.gpa}</span>}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="achieve-col" variants={ci} initial="hidden" animate={iv?"visible":"hidden"}>
          <div className="achieve-head">Achievements</div>
          {achieves.map((a,i)=>(
            <motion.div key={i} className="achieve-card" variants={ai}>
              <div className={`achieve-icon${a.cls?" "+a.cls:""}`}>{a.icon}</div>
              <div>
                <div className="achieve-name">{a.title}</div>
                <div className="achieve-desc">{a.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}