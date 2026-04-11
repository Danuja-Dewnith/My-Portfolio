import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CDN="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const groups={
  "All":[
    {n:"Java",i:"java/java-original"},{n:"Flutter",i:"flutter/flutter-original"},{n:"React",i:"react/react-original"},
    {n:"Spring Boot",i:"spring/spring-original"},{n:"Node.js",i:"nodejs/nodejs-original"},{n:"JavaScript",i:"javascript/javascript-original"},
    {n:"Android",i:"android/android-original"},{n:"PHP",i:"php/php-original"},{n:"MySQL",i:"mysql/mysql-original"},
    {n:"MongoDB",i:"mongodb/mongodb-original"},{n:"SQLite",i:"sqlite/sqlite-original"},{n:"C#",i:"csharp/csharp-original"},
    {n:"C++",i:"cplusplus/cplusplus-original"},{n:"Arduino",i:"arduino/arduino-original"},
    {n:"HTML5",i:"html5/html5-original"},{n:"CSS3",i:"css3/css3-original"},{n:"Git",i:"git/git-original"},
  ],
  "Frontend":[
    {n:"React",i:"react/react-original"},{n:"JavaScript",i:"javascript/javascript-original"},
    {n:"HTML5",i:"html5/html5-original"},{n:"CSS3",i:"css3/css3-original"},
  ],
  "Backend":[
    {n:"Java",i:"java/java-original"},{n:"Spring Boot",i:"spring/spring-original"},
    {n:"Node.js",i:"nodejs/nodejs-original"},{n:"PHP",i:"php/php-original"},
  ],
  "Mobile":[
    {n:"Flutter",i:"flutter/flutter-original"},{n:"Android",i:"android/android-original"},{n:"React Native",i:"react/react-original"},
  ],
  "Database":[
    {n:"MySQL",i:"mysql/mysql-original"},{n:"MongoDB",i:"mongodb/mongodb-original"},{n:"SQLite",i:"sqlite/sqlite-original"},
  ],
};

const ci={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:0.05}}};
const ii={hidden:{opacity:0,y:20,scale:0.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",duration:0.4}}};

export default function Skills() {
  const [active,setActive]=useState("All");
  const ref=useRef(null); const iv=useInView(ref,{once:true,amount:0.1});
  return (
    <section id="skills" className="sec" ref={ref}>
      <div className="sec-num">02</div>
      <motion.div className="sec-head" initial={{opacity:0,x:-28}} animate={iv?{opacity:1,x:0}:{}} transition={{duration:0.6}}>
        <div className="sec-eyebrow">Skills & Tools</div>
        <h2 className="sec-title">The Arsenal</h2>
        <p className="sec-sub">Languages, frameworks and tools I use to build products that matter.</p>
      </motion.div>

      <div className="skills-layout">
        <div className="skills-sidebar">
          {Object.keys(groups).map(g=>(
            <button key={g} className={`sfb${active===g?" act":""}`} onClick={()=>setActive(g)}>{g}</button>
          ))}
        </div>
        <div>
          <p className="sg-title">{active === "All" ? "All Technologies" : active}</p>
          <motion.div className="skills-grid" key={active} variants={ci} initial="hidden" animate="visible">
            {groups[active].map(s=>(
              <motion.div key={s.n} className="skill-card" variants={ii}>
                <img src={`${CDN}${s.i}.svg`} alt={s.n} className="skill-icon"/>
                <span className="skill-name">{s.n}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}